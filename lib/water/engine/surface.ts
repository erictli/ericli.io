import * as THREE from "three";
import { WATER_FRAG, WATER_VERT } from "./glsl/water";

export interface SurfaceExtent {
  /** Compass heading the camera faces, radians. */
  headingRad: number;
  /** Half the angular width the mesh must cover, radians. */
  halfAngle: number;
  /** Nearest and farthest ground distance the camera can see, meters. */
  rMin: number;
  rMax: number;
}

/**
 * A fan of rings covering just what the camera can see, spaced geometrically
 * so vertices stay roughly evenly spread on screen from the near edge of the
 * frame to the far one.
 */
function fanGeometry(e: SurfaceExtent, segments: number, rings: number) {
  const q = Math.pow(e.rMax / e.rMin, 1 / rings);
  const positions = new Float32Array((segments + 1) * (rings + 1) * 3);
  const index: number[] = [];
  let p = 0;
  for (let r = 0; r <= rings; r++) {
    const radius = e.rMin * Math.pow(q, r);
    for (let s = 0; s <= segments; s++) {
      const a = e.headingRad - e.halfAngle + (2 * e.halfAngle * s) / segments;
      positions[p++] = Math.sin(a) * radius;
      positions[p++] = 0;
      positions[p++] = -Math.cos(a) * radius;
    }
  }
  const row = segments + 1;
  for (let r = 0; r < rings; r++) {
    for (let s = 0; s < segments; s++) {
      const a = r * row + s;
      const b = a + row;
      // Counter-clockwise seen from above.
      index.push(a, a + 1, b, a + 1, b + 1, b);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geo.setIndex(index);
  return { geometry: geo, spacing: Math.max(q - 1, (2 * e.halfAngle) / segments) };
}

export class WaterSurface {
  readonly mesh: THREE.Mesh;
  readonly material: THREE.ShaderMaterial;

  constructor(opts: { extent: SurfaceExtent; segments: number; rings: number; texN: number; cascadeL: number[]; noise: THREE.Texture }) {
    const { geometry, spacing } = fanGeometry(opts.extent, opts.segments, opts.rings);
    this.material = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader: WATER_VERT,
      fragmentShader: WATER_FRAG,
      uniforms: {
        uDisp0: { value: null },
        uDisp1: { value: null },
        uDisp2: { value: null },
        uSlope0: { value: null },
        uSlope1: { value: null },
        uSlope2: { value: null },
        uSlope3: { value: null },
        uCascadeL: { value: new THREE.Vector4(...opts.cascadeL) },
        uTexN: { value: opts.texN },
        uSpacing: { value: spacing },
        uCrestK: { value: 0 },
        uLean: { value: 0 },
        uFaceK: { value: 0 },
        uSparkleFrame: { value: new THREE.Vector4() },
        uSparkleLevel: { value: 0 },
        uSparkleVar: { value: 0 },
        uSparkleWorld: { value: 0.02 },
        uRipple: { value: null },
        uRippleRect: { value: new THREE.Vector4() },
        uRippleOn: { value: 0 },
        uSky: { value: null },
        uSkyTexel: { value: 0.012 },
        uSkyMaxLod: { value: 8 },
        uCloudShadow: { value: 0 },
        uCloudDrift: { value: new THREE.Vector2() },
        uNoiseTex: { value: opts.noise },
        uSunDir: { value: new THREE.Vector3() },
        uSunIrr: { value: new THREE.Vector3() },
        uMoonDir: { value: new THREE.Vector3() },
        uMoonIrr: { value: new THREE.Vector3() },
        // Harbor water: dark slate, green-gray from everything suspended in it.
        uWaterColor: { value: new THREE.Vector3(0.062, 0.095, 0.086) },
        uScatterColor: { value: new THREE.Vector3(0.1, 0.4, 0.33) },
        uBaseVar: { value: 0.0004 },
        uWindDir: { value: new THREE.Vector2(1, 0) },
        uWindSpeed: { value: 5 },
        uGustiness: { value: 0.3 },
        uTime: { value: 0 },
        uRain: { value: 0 },
        uFogDensity: { value: 1e-4 },
        uFoamAmount: { value: 1 },
        uStreaks: { value: 0 },
        uWhiteBalance: { value: 0.7 },
        uFlash: { value: 0 },
      },
    });
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.frustumCulled = false;
  }

  dispose() {
    this.mesh.geometry.dispose();
    this.material.dispose();
  }
}
