import * as THREE from "three";
import { FullScreenQuad } from "three/examples/jsm/postprocessing/Pass.js";
import { FULLSCREEN_VERT } from "./glsl/common";
import { FFT_FRAG } from "@/lib/water/engine/glsl/ocean";

export function passMaterial(fragmentShader: string, uniforms: Record<string, THREE.IUniform>, defines: Record<string, string | number> = {}) {
  return new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3,
    vertexShader: FULLSCREEN_VERT,
    fragmentShader,
    uniforms,
    defines,
    depthTest: false,
    depthWrite: false,
  });
}

/** Unfiltered float target for intermediate GPGPU data. */
export function dataTarget(size: number, count: number, type: THREE.TextureDataType) {
  return new THREE.WebGLRenderTarget(size, size, {
    count,
    type,
    format: THREE.RGBAFormat,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: false,
  });
}

/** Mip-mapped, repeating half-float target for fields the water samples. */
export function sampledTarget(size: number, count: number, anisotropy: number) {
  const target = new THREE.WebGLRenderTarget(size, size, {
    count,
    type: THREE.HalfFloatType,
    format: THREE.RGBAFormat,
    minFilter: THREE.LinearMipmapLinearFilter,
    magFilter: THREE.LinearFilter,
    wrapS: THREE.RepeatWrapping,
    wrapT: THREE.RepeatWrapping,
    depthBuffer: false,
    stencilBuffer: false,
    generateMipmaps: true,
    anisotropy,
  });
  return target;
}

export class Passes {
  readonly quad = new FullScreenQuad();
  constructor(readonly renderer: THREE.WebGLRenderer) {}

  run(material: THREE.Material, target: THREE.WebGLRenderTarget) {
    this.quad.material = material;
    this.renderer.setRenderTarget(target);
    this.quad.render(this.renderer);
  }

  dispose() {
    this.quad.dispose();
  }
}

/**
 * Inverse 2D FFT on the GPU: a few Stockham passes along rows, then along
 * columns, ping-ponging between two targets. Radix 4 where the size allows,
 * and up to four textures per pass: these small passes are all overhead, so
 * the fewer the better. Each texel holds two complex numbers.
 */
export class GpuFFT {
  private readonly ping: THREE.WebGLRenderTarget;
  private readonly pong: THREE.WebGLRenderTarget;
  private readonly material: THREE.ShaderMaterial;
  /** Subtransform size after each pass, and that pass's radix. */
  private readonly plan: { S: number; radix: number }[] = [];

  constructor(
    private readonly passes: Passes,
    readonly size: number,
    readonly count: 1 | 2 | 3 | 4,
    type: THREE.TextureDataType,
  ) {
    this.ping = dataTarget(size, count, type);
    this.pong = dataTarget(size, count, type);
    for (let S = 1; S < size; ) {
      const radix = (size / S) % 4 === 0 ? 4 : 2;
      S *= radix;
      this.plan.push({ S, radix });
    }
    this.material = passMaterial(
      FFT_FRAG,
      {
        uIn0: { value: null },
        uIn1: { value: null },
        uIn2: { value: null },
        uIn3: { value: null },
        uN: { value: size },
        uS: { value: 2 },
        uRadix: { value: 2 },
        uHorizontal: { value: 1 },
      },
      { COUNT: count },
    );
  }

  /** Transforms `input` (the textures of a target with `count` attachments) and returns the target holding the result. */
  inverse(input: THREE.Texture[]): THREE.WebGLRenderTarget {
    const u = this.material.uniforms;
    let src: THREE.Texture[] = input;
    let dst = this.ping;
    for (let dir = 1; dir >= 0; dir--) {
      for (const { S, radix } of this.plan) {
        u.uIn0.value = src[0];
        u.uIn1.value = src[1] ?? null;
        u.uIn2.value = src[2] ?? null;
        u.uIn3.value = src[3] ?? null;
        u.uS.value = S;
        u.uRadix.value = radix;
        u.uHorizontal.value = dir;
        this.passes.run(this.material, dst);
        src = dst.textures;
        dst = dst === this.ping ? this.pong : this.ping;
      }
    }
    return dst === this.ping ? this.pong : this.ping;
  }

  dispose() {
    this.ping.dispose();
    this.pong.dispose();
    this.material.dispose();
  }
}

/** Standard-normal random numbers (Box–Muller) from a seeded generator. */
export function gaussianTexture(size: number, seed: number) {
  let s = seed >>> 0;
  const rand = () => {
    // mulberry32
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const data = new Float32Array(size * size * 4);
  for (let i = 0; i < data.length; i += 2) {
    const u1 = Math.max(rand(), 1e-7);
    const u2 = rand();
    const r = Math.sqrt(-2 * Math.log(u1));
    data[i] = r * Math.cos(2 * Math.PI * u2);
    data[i + 1] = r * Math.sin(2 * Math.PI * u2);
  }
  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat, THREE.FloatType);
  tex.minFilter = THREE.NearestFilter;
  tex.magFilter = THREE.NearestFilter;
  tex.needsUpdate = true;
  return tex;
}

/** 256² of uniform random bytes for texture-lookup value noise (see TEX_NOISE). */
export function noiseTexture() {
  const N = 256;
  let s = 911;
  const data = new Uint8Array(N * N * 4);
  for (let i = 0; i < N * N; i++) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const v = s >>> 24;
    data[i * 4] = v;
    data[i * 4 + 1] = v;
    data[i * 4 + 2] = v;
    data[i * 4 + 3] = 255;
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}
