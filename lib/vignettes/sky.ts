import * as THREE from "three";
import { SKYMAP_FRAG } from "./glsl/sky";
import { Passes, passMaterial } from "./gpgpu";
import { skylineTexture } from "./skyline";
import { SKYLINE_BINS } from "./generated/skyline";

/**
 * What the water reflects: the upper hemisphere, with the shore across the
 * harbor, as a small latitude-longitude map (rows packed toward the horizon),
 * mip-mapped so rough water can sample it blurred. Only redrawn when the sun,
 * weather or drifting clouds change it.
 */
export class SkyMap {
  static readonly WIDTH = 512;
  static readonly HEIGHT = 256;
  readonly target: THREE.WebGLRenderTarget;
  readonly uniforms: Record<string, THREE.IUniform>;
  private readonly atmoTarget: THREE.WebGLRenderTarget;
  private readonly material: THREE.ShaderMaterial;
  private readonly atmoMaterial: THREE.ShaderMaterial;
  private readonly skyline: THREE.DataTexture;

  constructor(private readonly passes: Passes) {
    this.target = new THREE.WebGLRenderTarget(SkyMap.WIDTH, SkyMap.HEIGHT, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearMipmapLinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      generateMipmaps: true,
      depthBuffer: false,
    });
    this.atmoTarget = new THREE.WebGLRenderTarget(128, 64, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.RepeatWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      generateMipmaps: false,
      depthBuffer: false,
    });
    this.skyline = skylineTexture();
    this.uniforms = {
      uSkyline: { value: this.skyline },
      uSkylineBins: { value: SKYLINE_BINS },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunE: { value: 22 },
      uMieScale: { value: 1 },
      uAtmo: { value: this.atmoTarget.texture },
      uNightColor: { value: new THREE.Vector3() },
      uGlowColor: { value: new THREE.Vector3() },
      uFlash: { value: 0 },
      uCloudCover: { value: 0 },
      uCloudOffset: { value: new THREE.Vector2() },
      uCloudHeight: { value: 1500 },
      uCloudSun: { value: new THREE.Vector3() },
      uCloudAmbient: { value: new THREE.Vector3() },
      uCloudUnderglow: { value: new THREE.Vector3() },
      uHazeColor: { value: new THREE.Vector3() },
      uHaze: { value: 0 },
      uShoreAlbedo: { value: new THREE.Vector3(0.16, 0.155, 0.15) },
      uShoreAmbient: { value: new THREE.Vector3() },
      uShoreSun: { value: new THREE.Vector3() },
      uShoreHaze: { value: 2e-4 },
      uCityLights: { value: new THREE.Vector3() },
    };
    this.material = passMaterial(SKYMAP_FRAG, {
      ...this.uniforms,
      uSize: { value: new THREE.Vector2(SkyMap.WIDTH, SkyMap.HEIGHT) },
    });
    this.atmoMaterial = passMaterial(
      SKYMAP_FRAG,
      { ...this.uniforms, uSize: { value: new THREE.Vector2(128, 64) } },
      { ATMO_ONLY: "" },
    );
  }

  get texture() {
    return this.target.texture;
  }

  /** Just the scattered sunlight, by direction, for shaders that draw the sky themselves. */
  get atmosphereTexture() {
    return this.atmoTarget.texture;
  }

  /** Redraws the map; pass `atmosphere` when the sun or haze has changed. */
  render(atmosphere: boolean) {
    if (atmosphere) this.passes.run(this.atmoMaterial, this.atmoTarget);
    this.passes.run(this.material, this.target);
  }

  dispose() {
    this.skyline.dispose();
    this.target.dispose();
    this.atmoTarget.dispose();
    this.material.dispose();
    this.atmoMaterial.dispose();
  }
}
