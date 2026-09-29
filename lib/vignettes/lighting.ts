import * as THREE from "three";
import * as SunCalc from "suncalc";
import { PIER } from "@/lib/water/conditions";

// CPU side of the lighting: where the sun and moon are, how much of their
// light survives the atmosphere, and how bright the sky is overall (for
// exposure). Mirrors the scattering model in glsl/sky.ts.

export const SUN_E = 22;
const R_PLANET = 6371e3;
const R_ATMOS = 6471e3;
const K_RLH = [5.5e-6, 13.0e-6, 22.4e-6];
const K_MIE = 21e-6;
const SH_RLH = 8e3;
const SH_MIE = 1.2e3;
const G_MIE = 0.76;
const K_OZONE = [0.65e-6, 1.881e-6, 0.085e-6];
const ozone = (h: number) => Math.max(0, 1 - Math.abs(h - 25e3) / 15e3);

/** Compass azimuth (0 = north, clockwise) and altitude in radians to a world direction (x east, y up, z south). */
export function directionFrom(azimuth: number, altitude: number, out = new THREE.Vector3()) {
  const c = Math.cos(altitude);
  return out.set(Math.sin(azimuth) * c, Math.sin(altitude), -Math.cos(azimuth) * c);
}

export function celestial(date: Date) {
  const sun = SunCalc.getPosition(date, PIER.latitude, PIER.longitude);
  const moon = SunCalc.getMoonPosition(date, PIER.latitude, PIER.longitude);
  const illum = SunCalc.getMoonIllumination(date);
  const rad = THREE.MathUtils.degToRad;
  return {
    sunDir: directionFrom(rad(sun.azimuth), rad(sun.altitude)),
    moonDir: directionFrom(rad(moon.azimuth), rad(moon.altitude)),
    moonFraction: illum.fraction,
  };
}

function rsi(r0: number[], rd: number[], sr: number): [number, number] {
  const b = 2 * (rd[0] * r0[0] + rd[1] * r0[1] + rd[2] * r0[2]);
  const c = r0[0] * r0[0] + r0[1] * r0[1] + r0[2] * r0[2] - sr * sr;
  const d = b * b - 4 * c;
  if (d < 0) return [1e9, -1e9];
  const s = Math.sqrt(d);
  return [(-b - s) / 2, (-b + s) / 2];
}

/** The segment from p toward the sun passes through the Earth. */
function inEarthShadow(p: number[], dir: number[]) {
  const hit = rsi(p, dir, R_PLANET)[0];
  return hit > 0 && hit < 1e8;
}

function heightAt(p: number[]) {
  return Math.hypot(p[0], p[1], p[2]) - R_PLANET;
}

/** Fraction of sunlight (RGB) reaching `altitude` meters along `dir`. */
export function transmittance(dir: THREE.Vector3, altitude: number, mieScale: number): [number, number, number] {
  const r0 = [0, R_PLANET + altitude, 0];
  const rd = [dir.x, dir.y, dir.z];
  if (inEarthShadow(r0, rd)) return [0, 0, 0];
  const len = rsi(r0, rd, R_ATMOS)[1];
  const steps = 32;
  let odR = 0;
  let odM = 0;
  let odO = 0;
  let prev = 0;
  for (let i = 0; i < steps; i++) {
    const f = (i + 1) / steps;
    const t = len * f * f;
    const ds = t - prev;
    const tm = prev + ds / 2;
    prev = t;
    const h = heightAt([r0[0] + rd[0] * tm, r0[1] + rd[1] * tm, r0[2] + rd[2] * tm]);
    odR += Math.exp(-h / SH_RLH) * ds;
    odM += Math.exp(-h / SH_MIE) * ds;
    odO += ozone(h) * ds;
  }
  return K_RLH.map((k, c) => Math.exp(-(k * odR + K_MIE * mieScale * 1.1 * odM + K_OZONE[c] * odO))) as [number, number, number];
}

/** Sky radiance in direction `dir` (same model and units as the shader). */
export function skyRadiance(dir: THREE.Vector3, sunDir: THREE.Vector3, mieScale: number): [number, number, number] {
  const r0 = [0, R_PLANET + 10, 0];
  const r = [dir.x, dir.y, dir.z];
  const s = [sunDir.x, sunDir.y, sunDir.z];
  const tEnd = rsi(r0, r, R_ATMOS)[1];
  const kMie = K_MIE * mieScale;
  const mu = dir.dot(sunDir);
  const gg = G_MIE * G_MIE;
  const pR = (3 / (16 * Math.PI)) * (1 + mu * mu);
  const pM = ((3 / (8 * Math.PI)) * ((1 - gg) * (mu * mu + 1))) / (Math.pow(1 + gg - 2 * mu * G_MIE, 1.5) * (2 + gg));
  const sumR = [0, 0, 0];
  const sumM = [0, 0, 0];
  const sumMS = [0, 0, 0];
  const msE = SUN_E * 0.3 * Math.pow(Math.min(Math.max(sunDir.y + 0.12, 0), 1), 0.8);
  let odR = 0;
  let odM = 0;
  let odO = 0;
  let prev = 0;
  const steps = 16;
  for (let i = 0; i < steps; i++) {
    const f = (i + 1) / steps;
    const t = tEnd * f * f;
    const ds = t - prev;
    const tm = prev + ds / 2;
    prev = t;
    const pos = [r0[0] + r[0] * tm, r0[1] + r[1] * tm, r0[2] + r[2] * tm];
    const h = heightAt(pos);
    const dR = Math.exp(-h / SH_RLH) * ds;
    const dM = Math.exp(-h / SH_MIE) * ds;
    odR += dR;
    odM += dM;
    odO += ozone(h) * ds;
    for (let c = 0; c < 3; c++) sumMS[c] += dR * Math.exp(-(kMie * 1.1 * odM + K_RLH[c] * odR + K_OZONE[c] * odO));
    if (inEarthShadow(pos, s)) continue;
    const lt = rsi(pos, s, R_ATMOS)[1];
    let jR = 0;
    let jM = 0;
    let jO = 0;
    let jp = 0;
    const lsteps = 8;
    for (let j = 0; j < lsteps; j++) {
      const g = (j + 1) / lsteps;
      const jt = lt * g * g;
      const jds = jt - jp;
      const jm = jp + jds / 2;
      jp = jt;
      const jh = heightAt([pos[0] + s[0] * jm, pos[1] + s[1] * jm, pos[2] + s[2] * jm]);
      jR += Math.exp(-jh / SH_RLH) * jds;
      jM += Math.exp(-jh / SH_MIE) * jds;
      jO += ozone(jh) * jds;
    }
    for (let c = 0; c < 3; c++) {
      const attn = Math.exp(-(kMie * 1.1 * (odM + jM) + K_RLH[c] * (odR + jR) + K_OZONE[c] * (odO + jO)));
      sumR[c] += dR * attn;
      sumM[c] += dM * attn;
    }
  }
  return [0, 1, 2].map(
    (c) => SUN_E * (pR * K_RLH[c] * sumR[c] + pM * kMie * sumM[c]) + (msE / (4 * Math.PI)) * K_RLH[c] * sumMS[c],
  ) as [number, number, number];
}

/**
 * Radiance of a solid cloud deck: the sun and sky above it, diffused through
 * it. Stratus passes about a quarter of the light, which is why an overcast
 * day reads bright white, not dark.
 */
export function overcastDeck(sunTHigh: ArrayLike<number>, sunDir: THREE.Vector3, meanSky: ArrayLike<number>, transmit = 0.26): [number, number, number] {
  const up = Math.max(sunDir.y, 0);
  // Scattering through hundreds of meters of cloud washes most of a low
  // sun's orange back to gray; only a tint survives.
  const sunLum = luminance(sunTHigh);
  return [0, 1, 2].map((c) => (transmit * (SUN_E * (0.8 * sunLum + 0.2 * sunTHigh[c]) * up + Math.PI * meanSky[c])) / Math.PI) as [number, number, number];
}

export function luminance(c: ArrayLike<number>) {
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}

/** Rough mean sky radiance over the upper hemisphere: zenith plus four points 20° up. */
export function meanSkyRadiance(sunDir: THREE.Vector3, mieScale: number): [number, number, number] {
  const dirs = [new THREE.Vector3(0, 1, 0)];
  const e = (20 * Math.PI) / 180;
  for (let i = 0; i < 4; i++) dirs.push(directionFrom((i * Math.PI) / 2, e));
  const out: [number, number, number] = [0, 0, 0];
  const weights = [0.4, 0.15, 0.15, 0.15, 0.15];
  dirs.forEach((d, i) => {
    const c = skyRadiance(d, sunDir, mieScale);
    for (let k = 0; k < 3; k++) out[k] += c[k] * weights[i];
  });
  return out;
}
