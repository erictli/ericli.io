import * as THREE from "three";
import { RIPPLE_ASSEMBLE_FRAG, RIPPLE_EVOLVE_FRAG } from "./glsl/ocean";
import { GpuFFT, Passes, dataTarget, passMaterial, sampledTarget } from "@/lib/vignettes/gpgpu";

const MAX_DROPS = 24;

export interface Drop {
  x: number;
  z: number;
  /** Height of the Gaussian bump, meters (negative for a hole). */
  amplitude: number;
  radius: number;
}

/**
 * Waves people make: a square of water in front of the pier, solved as a
 * linear spectrum so every wavelength travels at its real speed.
 */
export class Ripples {
  /** World xz of the domain's corner, and its size in meters. */
  readonly origin = new THREE.Vector2();
  readonly L: number;
  private readonly state: [THREE.WebGLRenderTarget, THREE.WebGLRenderTarget];
  private current = 0;
  private readonly fft: GpuFFT;
  private readonly output: THREE.WebGLRenderTarget;
  private readonly evolve: THREE.ShaderMaterial;
  private readonly assemble: THREE.ShaderMaterial;
  private readonly pending: Drop[] = [];
  private quietFor = Infinity;
  active = false;

  constructor(
    private readonly passes: Passes,
    readonly size: number,
    L: number,
    floatType: THREE.TextureDataType,
    anisotropy: number,
  ) {
    this.L = L;
    this.state = [dataTarget(size, 2, floatType), dataTarget(size, 2, floatType)];
    this.fft = new GpuFFT(passes, size, 1, floatType);
    this.output = sampledTarget(size, 1, anisotropy);
    this.output.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.output.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.evolve = passMaterial(RIPPLE_EVOLVE_FRAG, {
      uState: { value: null },
      uN: { value: size },
      uL: { value: L },
      uDt: { value: 0 },
      uDepth: { value: 12 },
      uDamp0: { value: 0.12 },
      uDampK: { value: 0.0012 },
      uDrops: { value: Array.from({ length: MAX_DROPS }, () => new THREE.Vector4()) },
      uDropCount: { value: 0 },
    });
    this.assemble = passMaterial(RIPPLE_ASSEMBLE_FRAG, { uIn: { value: null } });
  }

  get texture() {
    return this.output.texture;
  }

  /** Centers the domain on a world point. Only call while the water is still. */
  placeAt(x: number, z: number) {
    this.origin.set(x - this.L / 2, z - this.L / 2);
  }

  contains(x: number, z: number, margin = 0) {
    const u = x - this.origin.x;
    const v = z - this.origin.y;
    return u > margin && v > margin && u < this.L - margin && v < this.L - margin;
  }

  add(drop: Drop) {
    if (!this.contains(drop.x, drop.z, drop.radius * 2)) return false;
    if (this.pending.length >= MAX_DROPS) this.pending.shift();
    this.pending.push(drop);
    return true;
  }

  update(dt: number) {
    if (this.pending.length > 0) this.quietFor = 0;
    else this.quietFor += dt;
    // Long enough for the slowest rings to have damped away.
    this.active = this.quietFor < 15;
    if (!this.active) return;

    const u = this.evolve.uniforms;
    const drops = u.uDrops.value as THREE.Vector4[];
    const n = Math.min(this.pending.length, MAX_DROPS);
    for (let i = 0; i < n; i++) {
      const d = this.pending[i];
      drops[i].set(d.x - this.origin.x, d.z - this.origin.y, d.amplitude, d.radius);
    }
    this.pending.length = 0;
    u.uDropCount.value = n;
    u.uDt.value = Math.min(dt, 1 / 20);
    u.uState.value = this.state[this.current].textures[0];
    const next = this.state[1 - this.current];
    this.passes.run(this.evolve, next);
    this.current = 1 - this.current;

    const result = this.fft.inverse([next.textures[1]]);
    this.assemble.uniforms.uIn.value = result.textures[0];
    this.passes.run(this.assemble, this.output);
  }

  dispose() {
    this.state[0].dispose();
    this.state[1].dispose();
    this.fft.dispose();
    this.output.dispose();
    this.evolve.dispose();
    this.assemble.dispose();
  }
}
