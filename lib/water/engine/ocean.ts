import * as THREE from "three";
import { ASSEMBLE_FRAG, SPECTRUM_FRAG } from "./glsl/ocean";
import { GpuFFT, Passes, dataTarget, gaussianTexture, passMaterial, sampledTarget } from "@/lib/vignettes/gpgpu";

export interface SeaState {
  /** Wind speed driving the spectrum, m/s (≥ 0.5). */
  windU: number;
  /** Fetch, meters. */
  fetch: number;
  /** Unit vector the wind blows toward, world xz. */
  windDir: THREE.Vector2;
  /** 0–1: fades wind waves out as the wind dies. */
  windAmp: number;
  /** Share of wave energy bounced back upwind off seawalls and pier pilings. */
  reflect: number;
  /** Background sea from boat wakes, 0–1. */
  swellAmp: number;
  swellDir: THREE.Vector2;
  /**
   * Height multiplier over the open-water fetch laws. The harbor is steeper
   * than they predict: waves bounce off bulkheads and pile up against the
   * tidal current.
   */
  amplitude: number;
  /** Where short ripples start to fade, as a multiple of the peak wavenumber. */
  rollOff: number;
  /** Lowest directional-spreading exponent: higher means longer crests. */
  spreadMin: number;
  /** Saturation level of the short wind ripples (0 for none). */
  ripple: number;
  /** Horizontal displacement ("choppiness"). */
  choppiness: number;
  /** Foam: fold threshold and per-second persistence. */
  foamBias: number;
  foamHalfLife: number;
}

// Three nested tiles. Sizes are deliberately not multiples of each other so
// their repeats never line up.
// Four nested tiles, the last one fine enough for the capillary wavelets that
// give a breeze its hammered texture. Sizes are deliberately not multiples of
// each other so their repeats never line up.
const CASCADE_SIZES = [73, 17.3, 3.9, 1.37];
const DEPTH = 12;
// Motion repeats exactly every 1000 s (see SPECTRUM_FRAG).
const LOOP_OMEGA = (2 * Math.PI) / 1000;

interface Cascade {
  L: number;
  kMin: number;
  kMax: number;
  targets: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  current: number;
}

export class Ocean {
  readonly cascades: Cascade[];
  /** One per tile of a pair, so both can go through the FFT together. */
  private readonly spectrumTargets: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  private readonly fft: GpuFFT;
  private readonly noise: THREE.DataTexture;
  private readonly spectrum: THREE.ShaderMaterial;
  private readonly assemble: THREE.ShaderMaterial;

  constructor(
    private readonly passes: Passes,
    readonly size: number,
    floatType: THREE.TextureDataType,
    anisotropy: number,
  ) {
    this.noise = gaussianTexture(size, 20240917);
    this.spectrumTargets = [dataTarget(size, 2, floatType), dataTarget(size, 2, floatType)];
    this.fft = new GpuFFT(passes, size, 4, floatType);

    const boundary = (L: number) => ((2 * Math.PI) / L) * 6;
    this.cascades = CASCADE_SIZES.map((L, i) => ({
      L,
      kMin: i === 0 ? 1e-4 : boundary(L),
      kMax: i === CASCADE_SIZES.length - 1 ? 1e9 : boundary(CASCADE_SIZES[i + 1]),
      targets: [sampledTarget(size, 2, anisotropy), sampledTarget(size, 2, anisotropy)],
      current: 0,
    }));

    this.spectrum = passMaterial(SPECTRUM_FRAG, {
      uNoise: { value: this.noise },
      uN: { value: size },
      uL: { value: 1 },
      uTime: { value: 0 },
      uKMin: { value: 0 },
      uKMax: { value: 0 },
      uKNyquist: { value: 1 },
      uDepth: { value: DEPTH },
      uLoopOmega: { value: LOOP_OMEGA },
      uWindU: { value: 5 },
      uFetch: { value: 2000 },
      uWindDir: { value: new THREE.Vector2(1, 0) },
      uReflect: { value: 0.15 },
      uWindAmp: { value: 1 },
      uSwellU: { value: 7 },
      uSwellFetch: { value: 4000 },
      uSwellDir: { value: new THREE.Vector2(0, 1) },
      uSwellAmp: { value: 0.3 },
      uAmp: { value: 1 },
      uRollOff: { value: 10 },
      uSpreadMin: { value: 0.3 },
      uRipple: { value: 0 },
    });

    this.assemble = passMaterial(ASSEMBLE_FRAG, {
      uA: { value: null },
      uB: { value: null },
      uPrev: { value: null },
      uLambda: { value: 1 },
      uFoamDecay: { value: 0.98 },
      uFoamBias: { value: 0.3 },
      uFoamGain: { value: 2 },
    });
  }

  displacement(i: number) {
    const c = this.cascades[i];
    return c.targets[c.current].textures[0];
  }

  slopes(i: number) {
    const c = this.cascades[i];
    return c.targets[c.current].textures[1];
  }

  update(time: number, dt: number, sea: SeaState) {
    const su = this.spectrum.uniforms;
    su.uTime.value = time % 1000;
    su.uWindU.value = sea.windU;
    su.uFetch.value = sea.fetch;
    su.uWindDir.value.copy(sea.windDir);
    su.uWindAmp.value = sea.windAmp;
    su.uReflect.value = sea.reflect;
    su.uSwellAmp.value = sea.swellAmp;
    su.uSwellDir.value.copy(sea.swellDir);
    su.uAmp.value = sea.amplitude;
    su.uRollOff.value = sea.rollOff;
    su.uSpreadMin.value = sea.spreadMin;
    su.uRipple.value = sea.ripple;

    const au = this.assemble.uniforms;
    au.uFoamBias.value = sea.foamBias;
    au.uFoamDecay.value = Math.pow(0.5, dt / sea.foamHalfLife);

    // Pinching crests is for the waves you can see the shape of; the short
    // tiles hold waves a texel or two across, which fold over themselves at
    // texel scale when pinched.
    const chopScale = [1, 0.7, 0.35, 0.2];
    // Tiles go through the FFT two at a time.
    for (let first = 0; first < this.cascades.length; first += 2) {
      const pair = this.cascades.slice(first, first + 2);
      pair.forEach((c, j) => {
        su.uL.value = c.L;
        su.uKMin.value = c.kMin;
        su.uKMax.value = c.kMax;
        su.uKNyquist.value = (Math.PI * this.size) / c.L;
        this.passes.run(this.spectrum, this.spectrumTargets[j]);
      });
      const result = this.fft.inverse(pair.flatMap((_, j) => this.spectrumTargets[j].textures));
      pair.forEach((c, j) => {
        au.uLambda.value = sea.choppiness * chopScale[first + j];
        const prev = c.targets[c.current];
        const next = c.targets[1 - c.current];
        au.uA.value = result.textures[2 * j];
        au.uB.value = result.textures[2 * j + 1];
        au.uPrev.value = prev.textures[0];
        this.passes.run(this.assemble, next);
        c.current = 1 - c.current;
      });
    }
  }

  dispose() {
    this.noise.dispose();
    this.spectrumTargets[0].dispose();
    this.spectrumTargets[1].dispose();
    this.fft.dispose();
    this.spectrum.dispose();
    this.assemble.dispose();
    for (const c of this.cascades) {
      c.targets[0].dispose();
      c.targets[1].dispose();
    }
  }
}

/** Significant wave height from the JONSWAP fetch law, meters. */
export function significantHeight(windU: number, fetch: number) {
  return 4 * ((windU * windU) / 9.81) * Math.sqrt((1.6e-7 * 9.81 * fetch) / (windU * windU));
}

export { CASCADE_SIZES };
