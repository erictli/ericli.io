import * as THREE from "three";

const RAIN_VERT = /* glsl */ `
in vec3 aSeed;
uniform float uTime;
uniform vec3 uBoxMin;
uniform vec3 uBoxSize;
uniform vec3 uVelocity;
uniform float uStreak;
out float vFade;
void main() {
  vec3 v = uVelocity * (0.8 + 0.4 * aSeed.y);
  vec3 p = uBoxMin + mod(aSeed * uBoxSize + v * uTime - uBoxMin, uBoxSize);
  p -= v * uStreak * position.y;
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float d = -mv.z;
  vFade = smoothstep(0.3, 2.0, d) * (1.0 - smoothstep(uBoxSize.z * 0.35, uBoxSize.z * 0.6, d)) * (1.0 - position.y * 0.6);
  gl_Position = projectionMatrix * mv;
}
`;

const RAIN_FRAG = /* glsl */ `
in float vFade;
uniform vec3 uColor;
uniform float uOpacity;
layout(location = 0) out highp vec4 fragColor;
void main() { fragColor = vec4(uColor, uOpacity * vFade); }
`;

const SNOW_VERT = /* glsl */ `
in vec3 aSeed;
uniform float uTime;
uniform vec3 uBoxMin;
uniform vec3 uBoxSize;
uniform vec3 uVelocity;
uniform float uPixelScale;
out float vFade;
void main() {
  vec3 v = uVelocity * (0.7 + 0.6 * aSeed.y);
  float t = uTime;
  vec3 sway = vec3(sin(t * (0.9 + aSeed.x) + aSeed.z * 20.0), 0.0, cos(t * (0.7 + aSeed.z) + aSeed.x * 20.0)) * 0.35;
  vec3 p = uBoxMin + mod(aSeed * uBoxSize + v * t + sway - uBoxMin, uBoxSize);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float d = -mv.z;
  vFade = smoothstep(0.3, 1.5, d) * (1.0 - smoothstep(uBoxSize.z * 0.35, uBoxSize.z * 0.6, d));
  gl_PointSize = clamp(uPixelScale * (0.018 + 0.022 * aSeed.x * aSeed.x) / max(d, 0.1), 1.5, 48.0);
  gl_Position = projectionMatrix * mv;
}
`;

const SNOW_FRAG = /* glsl */ `
in float vFade;
uniform vec3 uColor;
uniform float uOpacity;
layout(location = 0) out highp vec4 fragColor;
void main() {
  float r = length(gl_PointCoord - 0.5) * 2.0;
  float a = 1.0 - smoothstep(0.3, 1.0, r);
  fragColor = vec4(uColor, a * uOpacity * vFade);
}
`;

const MAX_RAIN = 14000;
const MAX_SNOW = 9000;

export class Precipitation {
  readonly group = new THREE.Group();
  private readonly rain: THREE.LineSegments;
  private readonly snow: THREE.Points;
  private readonly rainGeo: THREE.InstancedBufferGeometry;
  private readonly snowGeo: THREE.BufferGeometry;
  private readonly rainMat: THREE.ShaderMaterial;
  private readonly snowMat: THREE.ShaderMaterial;
  // Only the air between the rail and the water the camera looks down at.
  private readonly boxSize = new THREE.Vector3(26, 6, 28);

  constructor() {
    const seeds = (n: number) => {
      const a = new Float32Array(n * 3);
      for (let i = 0; i < a.length; i++) a[i] = Math.random();
      return a;
    };

    this.rainGeo = new THREE.InstancedBufferGeometry();
    this.rainGeo.setAttribute("position", new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    this.rainGeo.setAttribute("aSeed", new THREE.InstancedBufferAttribute(seeds(MAX_RAIN), 3));
    this.rainGeo.instanceCount = 0;

    const shared = () => ({
      uTime: { value: 0 },
      uBoxMin: { value: new THREE.Vector3() },
      uBoxSize: { value: this.boxSize },
      uVelocity: { value: new THREE.Vector3(0, -9, 0) },
      uColor: { value: new THREE.Color() },
      uOpacity: { value: 0.3 },
    });

    this.rainMat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: RAIN_VERT,
      fragmentShader: RAIN_FRAG,
      uniforms: { ...shared(), uStreak: { value: 1 / 80 } },
      transparent: true,
      depthWrite: false,
    });
    this.rain = new THREE.LineSegments(this.rainGeo, this.rainMat);
    this.rain.frustumCulled = false;

    this.snowGeo = new THREE.BufferGeometry();
    this.snowGeo.setAttribute("position", new THREE.Float32BufferAttribute(new Float32Array(MAX_SNOW * 3), 3));
    this.snowGeo.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds(MAX_SNOW), 3));
    this.snowGeo.setDrawRange(0, 0);
    this.snowMat = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: SNOW_VERT,
      fragmentShader: SNOW_FRAG,
      uniforms: { ...shared(), uPixelScale: { value: 800 } },
      transparent: true,
      depthWrite: false,
    });
    this.snow = new THREE.Points(this.snowGeo, this.snowMat);
    this.snow.frustumCulled = false;

    this.group.add(this.rain, this.snow);
  }

  update(opts: {
    time: number;
    camera: THREE.PerspectiveCamera;
    viewportHeight: number;
    rate: number;
    snow: boolean;
    wind: THREE.Vector2;
    light: THREE.Color;
  }) {
    const { camera, rate, snow } = opts;
    const intensity = Math.min(rate / 12, 1);
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    const ahead = camera.position.clone().addScaledVector(forward, this.boxSize.z * 0.4);
    const boxMin = ahead.sub(this.boxSize.clone().multiplyScalar(0.5));
    boxMin.y = -0.3;

    const rainOn = !snow && rate > 0.02;
    const snowOn = snow && rate > 0.02;
    this.rain.visible = rainOn;
    this.snow.visible = snowOn;

    if (rainOn) {
      const u = this.rainMat.uniforms;
      this.rainGeo.instanceCount = Math.round(MAX_RAIN * Math.min(0.15 + Math.sqrt(intensity) * 0.85, 1));
      u.uTime.value = opts.time;
      u.uBoxMin.value.copy(boxMin);
      u.uVelocity.value.set(opts.wind.x * 0.8, -8.5, opts.wind.y * 0.8);
      u.uColor.value.copy(opts.light);
      u.uOpacity.value = 0.08 + 0.1 * intensity;
    }
    if (snowOn) {
      const u = this.snowMat.uniforms;
      this.snowGeo.setDrawRange(0, Math.round(MAX_SNOW * Math.min(0.2 + Math.sqrt(intensity * 3) * 0.8, 1)));
      u.uTime.value = opts.time;
      u.uBoxMin.value.copy(boxMin);
      u.uVelocity.value.set(opts.wind.x * 0.9, -1.1, opts.wind.y * 0.9);
      u.uColor.value.copy(opts.light).multiplyScalar(1.8);
      u.uOpacity.value = 0.85;
      u.uPixelScale.value = opts.viewportHeight / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
    }
  }

  dispose() {
    this.rainGeo.dispose();
    this.snowGeo.dispose();
    this.rainMat.dispose();
    this.snowMat.dispose();
  }
}
