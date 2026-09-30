import * as THREE from "three";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass.js";

// A light meter: the log-average luminance of the rendered scene, read back
// from a 32×32 thumbnail every few frames. Exposure keyed to it behaves like
// a phone camera pointed at the frame, which is what the reference photos are.

const N = 32;

const VERT = /* glsl */ `
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 uTexel;
layout(location = 0) out highp vec4 fragColor;
void main() {
  float sumLog = 0.0;
  float sumLin = 0.0;
  for (int j = 0; j < 4; j++) {
    for (int i = 0; i < 4; i++) {
      vec2 uv = vUv + (vec2(float(i), float(j)) - 1.5) * uTexel * 0.25;
      vec3 c = texture(tDiffuse, uv).rgb;
      float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
      sumLog += log2(max(lum, 1e-7));
      sumLin += min(lum, 256.0);
    }
  }
  // Log-average and plain average luminance, each as log2 over 2^-24 .. 2^8
  // packed into two bytes.
  float v = clamp((sumLog / 16.0 + 24.0) / 32.0, 0.0, 1.0);
  float m = clamp((log2(max(sumLin / 16.0, 1e-7)) + 24.0) / 32.0, 0.0, 1.0);
  fragColor = vec4(floor(v * 255.0) / 255.0, fract(v * 255.0), floor(m * 255.0) / 255.0, fract(m * 255.0));
}
`;

export class MeterPass extends Pass {
  /** Log-average luminance of the scene, linear; NaN until the first reading lands. */
  value = NaN;
  /** Plain average luminance (highlights clipped at 256), linear. */
  mean = NaN;
  /** The same average over the bottom `split` of the frame (the water) and the rest (the sky). */
  lowerMean = NaN;
  upperMean = NaN;
  split = 0.32;
  /** Measure every this many frames. */
  every = 3;
  private readonly quad: FullScreenQuad;
  private readonly material: THREE.ShaderMaterial;
  private readonly target: THREE.WebGLRenderTarget;
  private readonly buffer = new Uint8Array(N * N * 4);
  private pending = false;
  private count = 0;

  constructor() {
    super();
    this.needsSwap = false;
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2(1 / N, 1 / N) } },
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
    this.target = new THREE.WebGLRenderTarget(N, N, {
      type: THREE.UnsignedByteType,
      format: THREE.RGBAFormat,
      depthBuffer: false,
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
    });
  }

  render(renderer: THREE.WebGLRenderer, _writeBuffer: THREE.WebGLRenderTarget, readBuffer: THREE.WebGLRenderTarget) {
    if (this.count++ % this.every !== 0 || this.pending) return;
    this.material.uniforms.tDiffuse.value = readBuffer.texture;
    renderer.setRenderTarget(this.target);
    this.quad.render(renderer);
    this.pending = true;
    renderer
      .readRenderTargetPixelsAsync(this.target, 0, 0, N, N, this.buffer)
      .then(() => {
        let sum = 0;
        let mean = 0;
        let lower = 0;
        let lowerCount = 0;
        const lowerRows = Math.max(Math.round(N * this.split), 1);
        for (let i = 0; i < N * N; i++) {
          sum += this.buffer[i * 4] / 255 + this.buffer[i * 4 + 1] / 65025;
          const lum = Math.pow(2, (this.buffer[i * 4 + 2] / 255 + this.buffer[i * 4 + 3] / 65025) * 32 - 24);
          mean += lum;
          // Rows run bottom to top in the readback.
          if (Math.floor(i / N) < lowerRows) {
            lower += lum;
            lowerCount++;
          }
        }
        this.value = Math.pow(2, (sum / (N * N)) * 32 - 24);
        this.mean = mean / (N * N);
        this.lowerMean = lower / lowerCount;
        this.upperMean = (mean - lower) / Math.max(N * N - lowerCount, 1);
        this.pending = false;
      })
      .catch(() => {
        this.pending = false;
      });
  }

  dispose() {
    this.quad.dispose();
    this.material.dispose();
    this.target.dispose();
  }
}
