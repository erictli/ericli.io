import * as THREE from "three";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass.js";

// A phone camera's glow around the sun's glints: the bright parts of the
// frame, blurred at quarter resolution and added back. Four small passes.

const VERT = /* glsl */ `
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// Downsample to a quarter, keeping only what is over the threshold.
const BRIGHT_FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 uTexel;
uniform float uThreshold;
uniform float uCap;
layout(location = 0) out highp vec4 fragColor;
void main() {
  vec3 c = texture(tDiffuse, vUv + uTexel * vec2(-1.0, -1.0)).rgb
    + texture(tDiffuse, vUv + uTexel * vec2(1.0, -1.0)).rgb
    + texture(tDiffuse, vUv + uTexel * vec2(-1.0, 1.0)).rgb
    + texture(tDiffuse, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  c *= 0.25;
  float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // A point source thousands of times over the threshold would blur into a
  // saturated disc; cap it so every bright light gets the same soft halo.
  c *= min(1.0, uCap * uThreshold / max(lum, 1e-6));
  fragColor = vec4(c * smoothstep(uThreshold * 0.7, uThreshold * 1.3, lum), 1.0);
}
`;

const BLUR_FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 uStep;
layout(location = 0) out highp vec4 fragColor;
void main() {
  const float w[5] = float[5](0.227, 0.195, 0.122, 0.054, 0.016);
  vec3 c = texture(tDiffuse, vUv).rgb * w[0];
  for (int i = 1; i < 5; i++) {
    c += texture(tDiffuse, vUv + uStep * float(i)).rgb * w[i];
    c += texture(tDiffuse, vUv - uStep * float(i)).rgb * w[i];
  }
  fragColor = vec4(c, 1.0);
}
`;

const ADD_FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform sampler2D tGlow;
uniform float uStrength;
layout(location = 0) out highp vec4 fragColor;
void main() {
  fragColor = vec4(texture(tDiffuse, vUv).rgb + texture(tGlow, vUv).rgb * uStrength, 1.0);
}
`;

export class GlowPass extends Pass {
  threshold = 1;
  strength = 0.3;
  /** Brightest source the halo is built from, as a multiple of the threshold. */
  cap = 1e6;
  private readonly quad = new FullScreenQuad();
  private readonly bright: THREE.ShaderMaterial;
  private readonly blur: THREE.ShaderMaterial;
  private readonly add: THREE.ShaderMaterial;
  private readonly a: THREE.WebGLRenderTarget;
  private readonly b: THREE.WebGLRenderTarget;

  constructor() {
    super();
    const make = (fragmentShader: string, uniforms: Record<string, THREE.IUniform>) =>
      new THREE.ShaderMaterial({ glslVersion: THREE.GLSL3, vertexShader: VERT, fragmentShader, uniforms, depthTest: false, depthWrite: false });
    this.bright = make(BRIGHT_FRAG, { tDiffuse: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 1 }, uCap: { value: 1e6 } });
    this.blur = make(BLUR_FRAG, { tDiffuse: { value: null }, uStep: { value: new THREE.Vector2() } });
    this.add = make(ADD_FRAG, { tDiffuse: { value: null }, tGlow: { value: null }, uStrength: { value: 0.3 } });
    const opts = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this.a = new THREE.WebGLRenderTarget(1, 1, opts);
    this.b = new THREE.WebGLRenderTarget(1, 1, opts);
  }

  setSize(width: number, height: number) {
    const w = Math.max(Math.round(width / 4), 1);
    const h = Math.max(Math.round(height / 4), 1);
    this.a.setSize(w, h);
    this.b.setSize(w, h);
    this.bright.uniforms.uTexel.value.set(0.5 / width, 0.5 / height);
  }

  render(renderer: THREE.WebGLRenderer, writeBuffer: THREE.WebGLRenderTarget, readBuffer: THREE.WebGLRenderTarget) {
    const run = (material: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget | null) => {
      this.quad.material = material;
      renderer.setRenderTarget(target);
      this.quad.render(renderer);
    };
    this.bright.uniforms.tDiffuse.value = readBuffer.texture;
    this.bright.uniforms.uThreshold.value = this.threshold;
    this.bright.uniforms.uCap.value = this.cap;
    run(this.bright, this.a);
    // Two blurs each way: a wide, soft halo from a short kernel.
    for (let i = 0; i < 2; i++) {
      this.blur.uniforms.tDiffuse.value = this.a.texture;
      this.blur.uniforms.uStep.value.set(1.5 / this.a.width, 0);
      run(this.blur, this.b);
      this.blur.uniforms.tDiffuse.value = this.b.texture;
      this.blur.uniforms.uStep.value.set(0, 1.5 / this.a.height);
      run(this.blur, this.a);
    }
    this.add.uniforms.tDiffuse.value = readBuffer.texture;
    this.add.uniforms.tGlow.value = this.a.texture;
    this.add.uniforms.uStrength.value = this.strength;
    run(this.add, this.renderToScreen ? null : writeBuffer);
  }

  dispose() {
    this.quad.dispose();
    this.bright.dispose();
    this.blur.dispose();
    this.add.dispose();
    this.a.dispose();
    this.b.dispose();
  }
}
