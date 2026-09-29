import * as THREE from "three";
import { FullScreenQuad, Pass } from "three/examples/jsm/postprocessing/Pass.js";

// The lens: depth of field focused on the mid-distance, then grain, vignette
// and a trace of color fringing, so the render reads as footage rather than
// geometry.

const DOF_VERT = /* glsl */ `
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// The camera never moves far, so a pixel's distance is found by casting its
// ray at the water plane; no depth buffer needed. The blur is separable with
// a radius that varies per pixel, which is fine because it varies slowly.
const DOF_FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 uTexel;
uniform vec2 uDir;
uniform mat4 uInvProjection;
uniform mat4 uCameraWorld;
uniform vec3 uCameraPos;
uniform float uFocus;
uniform float uNearBlur;
uniform float uFarBlur;
layout(location = 0) out highp vec4 fragColor;

float groundDistance(vec2 uv) {
  vec4 clip = vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  vec4 view = uInvProjection * clip;
  vec3 dir = normalize(mat3(uCameraWorld) * (view.xyz / view.w));
  if (dir.y >= -1e-4) return 1e4;
  return -uCameraPos.y / dir.y;
}

float circleOfConfusion(float d) {
  return d > uFocus ? uFarBlur * (d - uFocus) / d : uNearBlur * (uFocus - d) / d;
}

void main() {
  float coc = circleOfConfusion(groundDistance(vUv));
  if (coc < 0.4) {
    fragColor = texture(tDiffuse, vUv);
    return;
  }
  const int N = 6;
  vec3 sum = vec3(0.0);
  float wsum = 0.0;
  for (int i = -N; i <= N; i++) {
    float t = float(i) / float(N);
    float w = exp(-2.0 * t * t);
    vec2 uv = vUv + uDir * uTexel * coc * t;
    sum += texture(tDiffuse, uv).rgb * w;
    wsum += w;
  }
  fragColor = vec4(sum / wsum, 1.0);
}
`;

export class DepthOfFieldPass extends Pass {
  readonly uniforms: Record<string, THREE.IUniform>;
  private readonly material: THREE.ShaderMaterial;
  private readonly quad: FullScreenQuad;
  private readonly temp: THREE.WebGLRenderTarget;

  constructor(private readonly camera: THREE.PerspectiveCamera) {
    super();
    this.uniforms = {
      tDiffuse: { value: null },
      uTexel: { value: new THREE.Vector2(1, 1) },
      uDir: { value: new THREE.Vector2(1, 0) },
      uInvProjection: { value: camera.projectionMatrixInverse },
      uCameraWorld: { value: camera.matrixWorld },
      uCameraPos: { value: camera.position },
      uFocus: { value: 9 },
      uNearBlur: { value: 2 },
      uFarBlur: { value: 14 },
    };
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: DOF_VERT,
      fragmentShader: DOF_FRAG,
      uniforms: this.uniforms,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
    this.temp = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
  }

  setSize(width: number, height: number) {
    this.temp.setSize(width, height);
    this.uniforms.uTexel.value.set(1 / width, 1 / height);
  }

  render(renderer: THREE.WebGLRenderer, writeBuffer: THREE.WebGLRenderTarget, readBuffer: THREE.WebGLRenderTarget) {
    this.uniforms.uInvProjection.value = this.camera.projectionMatrixInverse;
    this.uniforms.uCameraWorld.value = this.camera.matrixWorld;
    this.uniforms.tDiffuse.value = readBuffer.texture;
    this.uniforms.uDir.value.set(1, 0);
    renderer.setRenderTarget(this.temp);
    this.quad.render(renderer);
    this.uniforms.tDiffuse.value = this.temp.texture;
    this.uniforms.uDir.value.set(0, 1);
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.render(renderer);
  }

  dispose() {
    this.material.dispose();
    this.quad.dispose();
    this.temp.dispose();
  }
}

// Runs after tone mapping, in display space.
const LENS_FRAG = /* glsl */ `
in vec2 vUv;
uniform sampler2D tDiffuse;
uniform vec2 uSize;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;
uniform float uFringe;
layout(location = 0) out highp vec4 fragColor;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 c = vUv - 0.5;
  // Lateral color fringing grows toward the corners.
  vec2 off = c * uFringe;
  vec3 col = vec3(texture(tDiffuse, vUv + off).r, texture(tDiffuse, vUv).g, texture(tDiffuse, vUv - off).b);
  // Grain: fresh every frame, strongest in the shadows like sensor noise.
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  float n = hash(vUv * uSize + fract(uTime * 7.31) * 100.0) - 0.5;
  col += n * uGrain * (1.0 - 0.6 * lum);
  col *= 1.0 - uVignette * smoothstep(0.3, 1.0, length(c) * 1.5);
  fragColor = vec4(col, 1.0);
}
`;

export class LensPass extends Pass {
  readonly uniforms: Record<string, THREE.IUniform>;
  private readonly material: THREE.ShaderMaterial;
  private readonly quad: FullScreenQuad;

  constructor() {
    super();
    this.uniforms = {
      tDiffuse: { value: null },
      uSize: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uGrain: { value: 0.035 },
      uVignette: { value: 0.22 },
      uFringe: { value: 0.0022 },
    };
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: DOF_VERT,
      fragmentShader: LENS_FRAG,
      uniforms: this.uniforms,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
  }

  setSize(width: number, height: number) {
    this.uniforms.uSize.value.set(width, height);
  }

  render(renderer: THREE.WebGLRenderer, writeBuffer: THREE.WebGLRenderTarget, readBuffer: THREE.WebGLRenderTarget) {
    this.uniforms.tDiffuse.value = readBuffer.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.render(renderer);
  }

  dispose() {
    this.material.dispose();
    this.quad.dispose();
  }
}
