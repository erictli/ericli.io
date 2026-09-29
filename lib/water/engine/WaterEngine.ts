import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { PIER, fetchForWind, type WaterConditions } from "../conditions";
import { Passes, noiseTexture } from "@/lib/vignettes/gpgpu";
import { Ocean, CASCADE_SIZES, significantHeight, type SeaState } from "./ocean";
import { Ripples } from "./ripples";
import { SkyMap } from "@/lib/vignettes/sky";
import { WaterSurface, type SurfaceExtent } from "./surface";
import { Precipitation } from "./precipitation";
import { DepthOfFieldPass, LensPass } from "@/lib/vignettes/post";
import { GlowPass } from "@/lib/vignettes/glow";
import { SUN_E, celestial, directionFrom, luminance, meanSkyRadiance, overcastDeck, skyRadiance, transmittance } from "@/lib/vignettes/lighting";
import { MeterPass } from "@/lib/vignettes/meter";

export interface EngineOptions {
  /** Widest frame the water must fill, width over height; the mesh is cut to it. */
  maxAspect?: number;
  /** Cap on the device pixel ratio rendered at (default 1.5). */
  maxPixelRatio?: number;
  /** Called once the first frame is on screen. */
  onReady?: () => void;
  /** Called the first time someone touches the water. */
  onInteract?: () => void;
}

/**
 * The shot: a long lens from the rail, looking down at the water a few boat
 * lengths out. The frame is square, so the vertical field of view is the
 * whole story.
 */
const LENS = {
  fovDeg: 26,
  /** Anamorphic squeeze: the horizontal field of view is this much narrower
   *  than the vertical, so crests stretch across the frame. */
  stretch: 1.4,
  /** How far below the horizon the top of the frame sits, degrees. */
  topBelowHorizonDeg: 8,
  /** Ground distance in focus, meters; nearer and farther go soft. */
  focus: 9.5,
  /** Handheld drift, as a multiple of a comfortable resting hand (0 = locked off). */
  handheld: 1,
};

const smoothstep = (a: number, b: number, x: number) => {
  const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

/** Values that ease toward new conditions instead of jumping. */
interface Smoothed {
  timeMs: number;
  windSpeed: number;
  windX: number;
  windZ: number;
  gusts: number;
  cloudCover: number;
  rain: number;
  snow: number;
  visibility: number;
  storm: number;
}

function targetsFrom(c: WaterConditions): Smoothed {
  const toward = THREE.MathUtils.degToRad(c.windDirection + 180);
  const snow = c.precipitationType === "snow";
  return {
    timeMs: c.time.getTime(),
    windSpeed: Math.max(c.windSpeed, 0),
    windX: Math.sin(toward),
    windZ: -Math.cos(toward),
    gusts: Math.max(c.windGusts, c.windSpeed),
    cloudCover: THREE.MathUtils.clamp(c.cloudCover / 100, 0, 1),
    rain: snow ? 0 : Math.max(c.precipitation, 0),
    snow: snow ? Math.max(c.precipitation, 0) : 0,
    visibility: THREE.MathUtils.clamp(c.visibility, 200, 50000),
    storm: c.thunderstorm ? 1 : 0,
  };
}

/** What the camera can see of the water plane, with room for wave motion and drift. */
function visibleExtent(headingRad: number, pitchDeg: number, maxAspect: number): SurfaceExtent {
  const rad = THREE.MathUtils.degToRad;
  const half = LENS.fovDeg / 2;
  const margin = 0.8;
  const bottom = rad(-(pitchDeg - half - margin));
  const top = rad(-(pitchDeg + half + margin));
  // Waves shift the surface half a meter or so; at the near corner that is
  // several degrees of the frame.
  const rMin = Math.max(PIER.eyeHeight / Math.tan(bottom) - 2.5, 1);
  const rMax = PIER.eyeHeight / Math.tan(top) * 1.1 + 2;
  const halfAngle = Math.atan((Math.tan(rad(half)) * maxAspect) / LENS.stretch / Math.cos(bottom)) + rad(5);
  return { headingRad, halfAngle, rMin, rMax };
}

export class WaterEngine {
  private readonly renderer: THREE.WebGLRenderer;
  private readonly composer: EffectComposer;
  private readonly glow: GlowPass;
  private readonly meter: MeterPass;
  /** Luminance the frame is exposed to: a camera's mid-gray. */
  meterKey = 0.26;
  /** Between the log-average (0) and the mean (1); past 1, glittery scenes
   *  meter darker still, the way a phone exposes for a sunset. */
  meterContrast = 1.5;
  /** How far the meter may pull the exposure from the sky-based guess. */
  meterBounds: [number, number] = [0.3, 6];
  private exposure = NaN;
  private readonly dof: DepthOfFieldPass;
  private readonly lens: LensPass;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly scene = new THREE.Scene();
  private readonly passes: Passes;
  private readonly noise: THREE.DataTexture;
  private readonly ocean: Ocean;
  private readonly ripples: Ripples;
  private readonly sky: SkyMap;
  private readonly surface: WaterSurface;
  private readonly precipitation: Precipitation;
  private readonly resizeObserver: ResizeObserver;
  private readonly raycaster = new THREE.Raycaster();
  private readonly waterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private readonly headingRad = THREE.MathUtils.degToRad(PIER.heading);
  private readonly pitchDeg = -(LENS.fovDeg / 2 + LENS.topBelowHorizonDeg);

  private target: Smoothed;
  private current: Smoothed;
  private raf = 0;
  private last = 0;
  private elapsed = 0;
  private frameCount = 0;
  private ready = false;
  private cloudOffset = new THREE.Vector2(3.7, 1.2);

  private lastSunDir = new THREE.Vector3(0, -2, 0);
  private lastMie = -1;
  private meanSky: [number, number, number] = [0, 0, 0];
  /** Sky low in the direction the camera faces: what the water mostly mirrors. */
  private aheadSky: [number, number, number] = [0, 0, 0];
  private skyKey = "";

  private flash = 0;
  private nextFlash = 5;
  private flashPulses: { at: number; strength: number }[] = [];

  private pointer: { id: number; x: number; z: number; t: number } | null = null;

  private pixelRatio: number;
  private readonly maxPixelRatio: number;
  private frameTimes: number[] = [];
  private disposed = false;

  constructor(
    private readonly container: HTMLElement,
    initial: WaterConditions,
    private readonly options: EngineOptions = {},
  ) {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const small = Math.min(window.screen.width, window.screen.height) < 700;
    const low = coarse || small;

    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", alpha: false });
    // Neutral keeps a sunset's oranges orange instead of bleaching them.
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    // Water has no hard edges to keep crisp, so it doesn't need full retina.
    this.maxPixelRatio = Math.min(window.devicePixelRatio || 1, options.maxPixelRatio ?? 1.5);
    this.pixelRatio = Math.min(this.maxPixelRatio, low ? 1.25 : 1.5);
    const canvas = this.renderer.domElement;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.touchAction = "none";
    container.appendChild(canvas);

    const floatType = this.renderer.extensions.has("EXT_color_buffer_float") ? THREE.FloatType : THREE.HalfFloatType;
    const anisotropy = Math.min(this.renderer.capabilities.getMaxAnisotropy(), 8);

    this.camera = new THREE.PerspectiveCamera(LENS.fovDeg, 1, 0.05, 200);
    this.camera.position.set(0, PIER.eyeHeight, 0);
    this.camera.rotation.order = "YXZ";
    this.aimCamera(0);

    this.passes = new Passes(this.renderer);
    this.noise = noiseTexture();
    // 128² per tile is plenty at this framing; the three tiles overlap in scale.
    const oceanSize = 128;
    this.ocean = new Ocean(this.passes, oceanSize, floatType, anisotropy);
    this.ripples = new Ripples(this.passes, 256, 28, floatType, anisotropy);
    this.sky = new SkyMap(this.passes);
    this.surface = new WaterSurface({
      extent: visibleExtent(this.headingRad, this.pitchDeg, options.maxAspect ?? 1),
      segments: low ? 140 : 220,
      rings: low ? 260 : 400,
      texN: oceanSize,
      cascadeL: CASCADE_SIZES,
      noise: this.noise,
    });
    this.precipitation = new Precipitation();
    this.scene.add(this.surface.mesh, this.precipitation.group);

    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
    this.composer = new EffectComposer(this.renderer, rt);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.meter = new MeterPass();
    this.composer.addPass(this.meter);
    this.dof = new DepthOfFieldPass(this.camera);
    this.dof.uniforms.uFocus.value = LENS.focus;
    this.composer.addPass(this.dof);
    this.glow = new GlowPass();
    this.composer.addPass(this.glow);
    this.composer.addPass(new OutputPass());
    this.lens = new LensPass();
    this.composer.addPass(this.lens);

    const u = this.surface.material.uniforms;
    u.uSky.value = this.sky.texture;
    u.uSkyMaxLod.value = Math.log2(SkyMap.WIDTH);
    u.uSkyTexel.value = Math.PI / 2 / SkyMap.HEIGHT;
    u.uRipple.value = this.ripples.texture;

    this.target = targetsFrom(initial);
    this.current = { ...this.target };
    this.placeRipples();

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();

    canvas.addEventListener("pointerdown", this.onPointerDown);
    canvas.addEventListener("pointermove", this.onPointerMove);
    canvas.addEventListener("pointerup", this.onPointerUp);
    canvas.addEventListener("pointercancel", this.onPointerUp);
    canvas.addEventListener("webglcontextlost", this.onContextLost);

    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  // ---- Public API ------------------------------------------------------------

  setConditions(c: WaterConditions, instant = false) {
    this.target = targetsFrom(c);
    if (instant) this.current = { ...this.target };
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    this.resizeObserver.disconnect();
    const canvas = this.renderer.domElement;
    canvas.removeEventListener("pointerdown", this.onPointerDown);
    canvas.removeEventListener("pointermove", this.onPointerMove);
    canvas.removeEventListener("pointerup", this.onPointerUp);
    canvas.removeEventListener("pointercancel", this.onPointerUp);
    canvas.removeEventListener("webglcontextlost", this.onContextLost);
    this.ocean.dispose();
    this.ripples.dispose();
    this.sky.dispose();
    this.surface.dispose();
    this.precipitation.dispose();
    this.dof.dispose();
    this.glow.dispose();
    this.lens.dispose();
    this.passes.dispose();
    this.noise.dispose();
    this.meter.dispose();
    this.composer.dispose();
    this.renderer.dispose();
    canvas.remove();
  }

  // ---- Frame -----------------------------------------------------------------

  private frame = (now: number) => {
    if (this.disposed) return;
    this.raf = requestAnimationFrame(this.frame);
    // 60 fps is plenty for water; 120 Hz screens would otherwise double the work.
    if (now - this.last < 1000 / 64) return;
    const dt = Math.min(Math.max((now - this.last) / 1000, 0), 0.1);
    this.last = now;
    this.elapsed += dt;
    this.frameCount++;
    this.trackPerformance(dt);
    this.ease(dt);
    this.aimCamera(this.elapsed);

    const c = this.current;
    const windSpeed = c.windSpeed;
    const windDir = new THREE.Vector2(c.windX, c.windZ);
    if (windDir.lengthSq() < 1e-6) windDir.set(1, 0);
    windDir.normalize();
    const windFrom = (THREE.MathUtils.radToDeg(Math.atan2(windDir.x, -windDir.y)) + 180 + 360) % 360;

    // ---- Sea state
    // Open-water fetch laws overshoot in the harbor: tidal currents, shallows
    // and ferry wakes keep the chop short, but also make it steep, so the
    // heights come back up.
    const fetch = Math.min(fetchForWind(windFrom) * 0.32, 4000);
    const sea: SeaState = {
      windU: Math.max(windSpeed, 0.6),
      fetch,
      windDir,
      // Light air only ripples the surface; a wind sea needs a light breeze.
      windAmp: smoothstep(2.0, 4.5, windSpeed),
      reflect: 0.08,
      // Wakes and leftover swell: what moves the water when the wind doesn't,
      // and a cross sea the wind waves bury as they grow.
      swellAmp: 0.08 * (1 - 0.5 * smoothstep(4, 10, windSpeed)),
      swellDir: new THREE.Vector2(0.96, -0.28),
      // The steepening is for the chop that has had a kilometer or so to
      // build. Wavelets off a short fetch are young and steep already, and
      // light air raises nothing worth steepening.
      amplitude:
        1.15 +
        0.75 * smoothstep(150, 700, fetch) * (1 - 0.65 * smoothstep(1500, 4000, fetch)) * smoothstep(2, 5, windSpeed),
      rollOff: 60,
      // Long-crested once the sea has grown: wind waves run in ridges, not
      // humps. A young sea off a short fetch is a jumble.
      spreadMin: THREE.MathUtils.lerp(6, 25, smoothstep(200, 800, fetch)) * THREE.MathUtils.lerp(1, 0.4, smoothstep(8, 14, windSpeed)),
      ripple: 0.00007 * smoothstep(1.2, 4, windSpeed) * (1 + 3.0 * smoothstep(5, 12, windSpeed)),
      // Crests pinch to points and troughs flatten, like real wind waves; eased
      // back in a gale so the steepest waves don't fold through themselves.
      choppiness: 1.2 + 0.3 * smoothstep(1.5, 6, windSpeed) - 0.2 * smoothstep(10, 16, windSpeed),
      // Whitecaps where the surface folds: none in a breeze, everywhere in a gale.
      foamBias: THREE.MathUtils.lerp(-0.45, 0.42, smoothstep(4.5, 13, windSpeed)),
      foamHalfLife: 1.4,
    };
    this.ocean.update(this.elapsed, dt, sea);
    this.ripples.update(dt);

    // ---- Light
    const { sunDir, moonDir, moonFraction } = celestial(new Date(c.timeMs));
    const mieScale = 1 + THREE.MathUtils.clamp(22000 / c.visibility - 1, 0, 14);
    const haze = Math.pow(THREE.MathUtils.clamp(1 - c.visibility / 16000, 0, 1), 1.4);
    const cover = c.cloudCover;
    const overcast = smoothstep(0.7, 1, cover);
    const wet = smoothstep(0, 3, c.rain + c.snow * 2);

    const sunMoved = sunDir.distanceToSquared(this.lastSunDir) > 1e-7 || Math.abs(mieScale - this.lastMie) > 0.01;
    if (sunMoved) {
      this.lastSunDir.copy(sunDir);
      this.lastMie = mieScale;
      this.meanSky = meanSkyRadiance(sunDir, mieScale);
      this.aheadSky = skyRadiance(directionFrom(this.headingRad, THREE.MathUtils.degToRad(12)), sunDir, mieScale);
    }
    const sunT = transmittance(sunDir, 4, mieScale);
    const cloudHeight = THREE.MathUtils.lerp(1900, 650, overcast);
    const sunTHigh = transmittance(sunDir, cloudHeight, mieScale);
    const moonT = transmittance(moonDir, 4, mieScale);

    // Direct light gets through gaps in broken cloud, not through overcast.
    const sunThrough = Math.max(1 - smoothstep(0.4, 0.93, cover) - 0.02 * wet, 0);
    const sunIrr = sunT.map((t) => SUN_E * t * sunThrough);
    const moonIrr = moonT.map((t) => 1.4e-3 * t * moonFraction * sunThrough);

    const night = smoothstep(-2, -14, THREE.MathUtils.radToDeg(Math.asin(sunDir.y)));
    const moonUp = smoothstep(-0.02, 0.1, moonDir.y);
    const meanSky = this.meanSky;
    const clearSkyLum = luminance(meanSky);
    const nightBase = [0.0007, 0.00095, 0.0017].map(
      (v, i) => v * night + [0.00025, 0.00035, 0.0006][i] * moonUp * moonFraction * night * (1 - overcast),
    );
    // New York's own light, scattered in the haze and bounced off the clouds.
    const glow = night * (0.6 + 1.6 * cover + 0.8 * haze);
    const glowColor = [0.0065 * glow, 0.0038 * glow, 0.002 * glow];
    const ambScale = THREE.MathUtils.lerp(0.9, 0.55, overcast) * (1 - 0.45 * wet) * (1 - 0.3 * c.storm);

    this.updateLightning(dt, c.storm);
    const aloft = Math.max(windSpeed * 2.2, 4);
    this.cloudOffset.addScaledVector(windDir, (-aloft * dt * 0.45) / 1000);

    // ---- Sky map: redrawn only when something it shows has changed.
    const key = [sunDir.x, sunDir.y, sunDir.z, mieScale, cover, haze, wet, c.storm, night]
      .map((v) => v.toFixed(4))
      .join();
    if (key !== this.skyKey || this.flash > 0.0005 || this.frameCount === 1) {
      this.skyKey = key;
      const su = this.sky.uniforms;
      su.uSunDir.value.copy(sunDir);
      su.uMieScale.value = mieScale;
      su.uNightColor.value.fromArray(nightBase);
      su.uGlowColor.value.fromArray(glowColor);
      su.uCloudCover.value = cover;
      su.uCloudHeight.value = cloudHeight;
      const cloudSun = SUN_E * 0.16 * (1 - 0.8 * overcast) * (1 - 0.5 * wet);
      su.uCloudSun.value.set(sunTHigh[0] * cloudSun, sunTHigh[1] * cloudSun, sunTHigh[2] * cloudSun);
      // Under cloud the sky's light comes from the cloud deck itself.
      const deck = overcastDeck(sunTHigh, sunDir, meanSky, 0.26 * (1 - 0.5 * wet) * (1 - 0.4 * c.storm));
      su.uCloudAmbient.value.set(
        THREE.MathUtils.lerp(meanSky[0] * ambScale, deck[0], overcast * 0.85),
        THREE.MathUtils.lerp(meanSky[1] * ambScale, deck[1], overcast * 0.85),
        THREE.MathUtils.lerp(meanSky[2] * ambScale, deck[2], overcast * 0.85),
      );
      const under = night * (0.4 + cover);
      su.uCloudUnderglow.value.set(0.0045 * under, 0.0026 * under, 0.0014 * under);
      const hazeLum = THREE.MathUtils.lerp(clearSkyLum * 1.1, luminance(deck) * 0.7, overcast) * (1 - 0.4 * wet) + 0.004 * night;
      su.uHazeColor.value.set(hazeLum * 0.96, hazeLum, hazeLum * 1.04);
      su.uHaze.value = Math.max(haze, overcast * 0.35, wet * 0.5);
      su.uCloudOffset.value.copy(this.cloudOffset);
      su.uFlash.value = this.flash;
      su.uShoreAmbient.value.set(meanSky[0] * ambScale, meanSky[1] * ambScale, meanSky[2] * ambScale);
      su.uShoreSun.value.set(sunIrr[0] / Math.PI, sunIrr[1] / Math.PI, sunIrr[2] / Math.PI);
      su.uShoreHaze.value = 4.5 / c.visibility;
      // Windows come on through dusk; by night the city is the brightest thing out there.
      const lights = 0.3 * smoothstep(3, -8, THREE.MathUtils.radToDeg(Math.asin(sunDir.y)));
      su.uCityLights.value.set(lights, lights, lights);
      this.sky.render(sunMoved || this.frameCount === 1);
    }

    // ---- Water
    const wu = this.surface.material.uniforms;
    for (let i = 0; i < 4; i++) {
      if (i < 3) wu[`uDisp${i}`].value = this.ocean.displacement(i);
      wu[`uSlope${i}`].value = this.ocean.slopes(i);
    }
    // How tall the long waves run, for bunching the short ones onto their crests.
    const peakOmega = 22 * Math.cbrt((9.81 * 9.81) / (sea.windU * fetch));
    const peakLambda = (2 * Math.PI * 9.81) / (peakOmega * peakOmega);
    const longWind = significantHeight(sea.windU, fetch) * sea.windAmp * smoothstep(1.5, 4, peakLambda);
    const longSwell = significantHeight(7, 4000) * Math.sqrt(sea.swellAmp);
    const hsLong = sea.amplitude * Math.hypot(longWind, longSwell);
    const grown = smoothstep(2.5, 6, windSpeed);
    wu.uCrestK.value = (0.7 * grown) / Math.max(hsLong, 0.04);
    wu.uLean.value = 0.45 * grown;
    wu.uFaceK.value = 3.5 * grown;
    wu.uSunDir.value.copy(sunDir);
    wu.uSunIrr.value.fromArray(sunIrr);
    wu.uMoonDir.value.copy(moonDir);
    wu.uMoonIrr.value.fromArray(moonIrr);
    wu.uBaseVar.value = 0.00002 + 0.00002 * Math.pow(windSpeed, 1.1);
    wu.uWindDir.value.copy(windDir);
    wu.uWindSpeed.value = windSpeed;
    const gustRatio = (c.gusts - windSpeed) / Math.max(windSpeed, 0.5);
    // Light air is the patchiest: glassy stretches between cat's paws.
    wu.uGustiness.value = THREE.MathUtils.clamp(Math.max(gustRatio * 0.9, 0.85 - smoothstep(1, 5, windSpeed) * 0.6), 0, 1);
    wu.uTime.value = this.elapsed;
    wu.uRain.value = THREE.MathUtils.clamp(Math.sqrt(c.rain / 12), 0, 1);
    wu.uFogDensity.value = 3.2 / c.visibility;
    wu.uFlash.value = this.flash;
    // Auto white balance, eased off after dark: phones keep the city's glow warm.
    wu.uWhiteBalance.value = 0.7 * (1 - 0.75 * night);
    // Spindrift: foam torn into streaks down the wind in a near gale.
    wu.uStreaks.value = 0.7 * smoothstep(9, 16, windSpeed);
    // Broken cloud throws shadows; overcast is all shadow and none.
    wu.uCloudShadow.value = 0.85 * smoothstep(0.1, 0.45, cover) * (1 - smoothstep(0.75, 0.97, cover)) * (1 - night);
    wu.uCloudDrift.value.copy(this.cloudOffset).multiplyScalar(0.9);
    wu.uRippleOn.value = this.ripples.active ? 1 : 0;
    wu.uRippleRect.value.set(this.ripples.origin.x, this.ripples.origin.y, 1 / this.ripples.L, this.ripples.size);

    // ---- Precipitation
    const lightLum = Math.max(clearSkyLum * ambScale, 0.0005) * 1.6 + this.flash * 0.5;
    this.precipitation.update({
      time: this.elapsed,
      camera: this.camera,
      viewportHeight: this.renderer.domElement.height,
      rate: c.snow > 0 ? c.snow : c.rain,
      snow: c.snow > 0,
      wind: windDir.clone().multiplyScalar(windSpeed),
      light: new THREE.Color(lightLum, lightLum * 1.02, lightLum * 1.06),
    });

    // ---- Exposure: a camera that adapts, but not all the way, so night stays
    // night. Facing a low sun it meters off the bright sky the water mirrors.
    const skyLum = Math.max(clearSkyLum, 0.3 * luminance(this.aheadSky) * (1 - 0.8 * overcast));
    const sceneLum =
      skyLum * THREE.MathUtils.lerp(1, 0.55, overcast) * (1 - 0.35 * wet) + luminance(nightBase) + 0.35 * luminance(glowColor);
    // Capped, so a night harbor stays dark water with bright lights in it.
    const guess = Math.min(0.62 / Math.pow(Math.max(sceneLum, 1e-5), 0.8), 30);
    // The real meter: a phone pointed at the water exposes for the water, so
    // an overcast harbor comes out mid-gray, not a dark mirror of a dim sky.
    const measured = this.meter.value;
    const contrast = Math.max(this.meter.mean / measured, 1);
    const midGray = this.meterKey / Math.pow(contrast, this.meterContrast);
    const wanted = Number.isFinite(measured)
      ? THREE.MathUtils.clamp(midGray / Math.max(measured, 1e-6), guess * this.meterBounds[0], Math.min(guess * this.meterBounds[1], 30))
      : guess;
    this.exposure = this.frameCount === 1 || !Number.isFinite(this.exposure) ? wanted : this.exposure + (wanted - this.exposure) * (1 - Math.exp(-dt / 1.0));
    const exposure = this.exposure;
    this.renderer.toneMappingExposure = exposure;
    this.glow.threshold = 2.2 / exposure;
    this.lens.uniforms.uTime.value = this.elapsed;

    this.composer.render(dt);
    if (!this.ready) {
      this.ready = true;
      this.options.onReady?.();
    }
  };

  private ease(dt: number) {
    const c = this.current;
    const t = this.target;
    const k = (tau: number) => 1 - Math.exp(-dt / tau);
    // Small moves (dragging the time slider) glide; a jump of hours (a new
    // preset) cuts straight there rather than racing the sun across the sky.
    const diff = t.timeMs - c.timeMs;
    c.timeMs = Math.abs(diff) < 1000 || Math.abs(diff) > 90 * 60_000 ? t.timeMs : c.timeMs + diff * k(0.35);
    c.windSpeed += (t.windSpeed - c.windSpeed) * k(1.2);
    c.windX += (t.windX - c.windX) * k(1.5);
    c.windZ += (t.windZ - c.windZ) * k(1.5);
    c.gusts += (t.gusts - c.gusts) * k(1.2);
    c.cloudCover += (t.cloudCover - c.cloudCover) * k(0.8);
    c.rain += (t.rain - c.rain) * k(0.8);
    c.snow += (t.snow - c.snow) * k(0.8);
    c.visibility += (t.visibility - c.visibility) * k(0.8);
    c.storm += (t.storm - c.storm) * k(0.8);
  }

  private updateLightning(dt: number, storm: number) {
    if (storm > 0.5) {
      this.nextFlash -= dt;
      if (this.nextFlash <= 0) {
        this.nextFlash = 5 + Math.random() * 12;
        const n = 1 + Math.floor(Math.random() * 3);
        let at = this.elapsed;
        for (let i = 0; i < n; i++) {
          this.flashPulses.push({ at, strength: (0.5 + Math.random()) * (i === 0 ? 1 : 0.7) });
          at += 0.06 + Math.random() * 0.14;
        }
      }
    }
    let f = 0;
    this.flashPulses = this.flashPulses.filter((p) => this.elapsed - p.at < 1);
    for (const p of this.flashPulses) {
      const age = this.elapsed - p.at;
      if (age >= 0) f += p.strength * Math.exp(-age * 14);
    }
    this.flash = f * 0.05;
  }

  // ---- Camera ----------------------------------------------------------------

  /** Points the camera down the pier, with the slow drift of a hand holding a phone. */
  private aimCamera(t: number) {
    const rad = THREE.MathUtils.degToRad;
    const h = LENS.handheld;
    const pitch = (Math.sin(t * 0.37) * 0.6 + Math.sin(t * 0.91 + 1.3) * 0.3 + Math.sin(t * 2.3 + 0.4) * 0.1) * 0.22 * h;
    const yaw = (Math.sin(t * 0.29 + 2.1) * 0.6 + Math.sin(t * 0.77) * 0.3 + Math.sin(t * 1.9 + 1.1) * 0.1) * 0.3 * h;
    const roll = (Math.sin(t * 0.41 + 0.7) * 0.5 + Math.sin(t * 1.3) * 0.2) * 0.15 * h;
    this.camera.rotation.set(rad(this.pitchDeg + pitch), -this.headingRad + rad(yaw), rad(roll));
    this.camera.updateMatrixWorld();
  }

  private resize() {
    const w = Math.max(this.container.clientWidth, 1);
    const h = Math.max(this.container.clientHeight, 1);
    this.camera.aspect = w / h / LENS.stretch;
    this.camera.updateProjectionMatrix();
    this.renderer.setPixelRatio(this.pixelRatio);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.pixelRatio);
    this.composer.setSize(w, h);
  }

  private trackPerformance(dt: number) {
    this.frameTimes.push(dt);
    if (this.frameTimes.length < 90) return;
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    this.frameTimes = [];
    if (avg > 1 / 45 && this.pixelRatio > 0.75) {
      this.pixelRatio = Math.max(0.75, this.pixelRatio - 0.25);
      this.resize();
    } else if (avg < 1 / 58 && this.pixelRatio < this.maxPixelRatio) {
      this.pixelRatio = Math.min(this.maxPixelRatio, this.pixelRatio + 0.25);
      this.resize();
    }
  }

  // ---- Interaction -----------------------------------------------------------

  private placeRipples() {
    const forward = new THREE.Vector3(Math.sin(this.headingRad), 0, -Math.cos(this.headingRad));
    const center = forward.multiplyScalar(this.ripples.L * 0.42);
    this.ripples.placeAt(center.x, center.z);
  }

  private hit(e: PointerEvent): THREE.Vector3 | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const p = new THREE.Vector3();
    return this.raycaster.ray.intersectPlane(this.waterPlane, p);
  }

  /** Something small dropped in: a brief dimple that rings outward. */
  private drop(p: THREE.Vector3) {
    if (!this.ripples.contains(p.x, p.z, 1) && !this.ripples.active) {
      this.ripples.placeAt(p.x, p.z);
    }
    // Scale with distance so a far-off ring still reads on screen.
    const dist = p.distanceTo(this.camera.position);
    const scale = THREE.MathUtils.clamp(dist / 12, 0.8, 2);
    // A pebble: a small, shallow dimple whose energy sits in short waves, so
    // the rings are fine and quick rather than one slow heave.
    this.ripples.add({ x: p.x, z: p.z, amplitude: -0.2 * scale, radius: 0.16 * scale });
  }

  private onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return;
    const p = this.hit(e);
    if (!p) return;
    this.renderer.domElement.setPointerCapture(e.pointerId);
    this.drop(p);
    this.pointer = { id: e.pointerId, x: p.x, z: p.z, t: this.elapsed };
    this.options.onInteract?.();
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.pointer || e.pointerId !== this.pointer.id) return;
    const p = this.hit(e);
    if (!p) return;
    const dx = p.x - this.pointer.x;
    const dz = p.z - this.pointer.z;
    const d = Math.hypot(dx, dz);
    const step = 0.22;
    if (d < step) return;
    const dt = Math.max(this.elapsed - this.pointer.t, 1 / 120);
    const speed = Math.min(d / dt, 10);
    const n = Math.min(Math.floor(d / step), 10);
    for (let i = 1; i <= n; i++) {
      const t = i / n;
      this.ripples.add({
        x: this.pointer.x + dx * t,
        z: this.pointer.z + dz * t,
        amplitude: -0.03 - 0.012 * speed,
        radius: 0.14,
      });
    }
    this.pointer = { id: e.pointerId, x: p.x, z: p.z, t: this.elapsed };
  };

  private onPointerUp = (e: PointerEvent) => {
    if (this.pointer && e.pointerId === this.pointer.id) this.pointer = null;
  };

  private onContextLost = (e: Event) => {
    e.preventDefault();
    cancelAnimationFrame(this.raf);
  };
}
