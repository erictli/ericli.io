import { COMMON, NOISE } from "./common";

// The sky is never on screen; the water only reflects it. It is drawn into a
// small latitude-longitude map (azimuth across, elevation 0–90° up) that the
// water samples at a blur matching its roughness.

// Single-scattering Rayleigh + Mie, integrated with quadratic step spacing
// (the dense air is near the eye) and Earth's shadow on the light rays, so
// twilight goes blue with a glow at the horizon instead of staying lit.
const ATMOSPHERE = /* glsl */ `
const float R_PLANET = 6371e3;
const float R_ATMOS = 6471e3;
const vec3 K_RLH = vec3(5.5e-6, 13.0e-6, 22.4e-6);
const float K_MIE = 21e-6;
const float SH_RLH = 8e3;
const float SH_MIE = 1.2e3;
const float G_MIE = 0.76;
// Ozone (Chappuis band) absorbs orange light high up; it is why the sky
// overhead stays blue at sunset instead of going gray.
const vec3 K_OZONE = vec3(0.65e-6, 1.881e-6, 0.085e-6);
float ozone(float h) { return max(0.0, 1.0 - abs(h - 25e3) / 15e3); }

vec2 rsi(vec3 r0, vec3 rd, float sr) {
  float b = 2.0 * dot(rd, r0);
  float c = dot(r0, r0) - sr * sr;
  float d = b * b - 4.0 * c;
  if (d < 0.0) return vec2(1e9, -1e9);
  float s = sqrt(d);
  return vec2((-b - s) * 0.5, (-b + s) * 0.5);
}

// True when the segment from p toward the sun passes through the Earth.
bool inEarthShadow(vec3 p, vec3 sunDir) {
  vec2 hit = rsi(p, sunDir, R_PLANET);
  return hit.x > 0.0 && hit.x < 1e8;
}

vec3 atmosphere(vec3 r, vec3 sunDir, float sunE, float mieScale) {
  vec3 r0 = vec3(0.0, R_PLANET + 10.0, 0.0);
  // Light scattered more than once, treated as isotropic: it is what keeps
  // the sky overhead blue through sunset and twilight.
  float msE = sunE * 0.3 * pow(clamp(sunDir.y + 0.12, 0.0, 1.0), 0.8);
  vec3 sumMS = vec3(0.0);
  float tEnd = rsi(r0, r, R_ATMOS).y;
  float kMie = K_MIE * mieScale;
  float mu = dot(r, sunDir);
  float gg = G_MIE * G_MIE;
  float pRlh = 3.0 / (16.0 * PI) * (1.0 + mu * mu);
  float pMie = 3.0 / (8.0 * PI) * ((1.0 - gg) * (mu * mu + 1.0)) / (pow(1.0 + gg - 2.0 * mu * G_MIE, 1.5) * (2.0 + gg));
  vec3 sumR = vec3(0.0);
  vec3 sumM = vec3(0.0);
  float odR = 0.0;
  float odM = 0.0;
  float odO = 0.0;
  float prevT = 0.0;
  for (int i = 0; i < 16; i++) {
    float f = float(i + 1) / 16.0;
    float t = tEnd * f * f;
    float ds = t - prevT;
    vec3 pos = r0 + r * (prevT + ds * 0.5);
    prevT = t;
    float h = length(pos) - R_PLANET;
    float dR = exp(-h / SH_RLH) * ds;
    float dM = exp(-h / SH_MIE) * ds;
    odR += dR;
    odM += dM;
    odO += ozone(h) * ds;
    sumMS += dR * exp(-(kMie * 1.1 * odM + K_RLH * odR + K_OZONE * odO));
    if (inEarthShadow(pos, sunDir)) continue;
    float lt = rsi(pos, sunDir, R_ATMOS).y;
    float jR = 0.0;
    float jM = 0.0;
    float jO = 0.0;
    float jPrev = 0.0;
    for (int j = 0; j < 8; j++) {
      float g = float(j + 1) / 8.0;
      float jt = lt * g * g;
      float jds = jt - jPrev;
      vec3 jp = pos + sunDir * (jPrev + jds * 0.5);
      jPrev = jt;
      float jh = length(jp) - R_PLANET;
      jR += exp(-jh / SH_RLH) * jds;
      jM += exp(-jh / SH_MIE) * jds;
      jO += ozone(jh) * jds;
    }
    vec3 attn = exp(-(kMie * 1.1 * (odM + jM) + K_RLH * (odR + jR) + K_OZONE * (odO + jO)));
    sumR += dR * attn;
    sumM += dM * attn;
  }
  return sunE * (pRlh * K_RLH * sumR + pMie * kMie * sumM) + msE / (4.0 * PI) * K_RLH * sumMS;
}
`;

export const SKY_UNIFORMS = /* glsl */ `
uniform sampler2D uAtmo;
uniform vec3 uSunDir;
uniform float uSunE;
uniform float uMieScale;
uniform vec3 uNightColor;
uniform vec3 uGlowColor;
uniform float uFlash;

uniform float uCloudCover;
uniform vec2 uCloudOffset;
uniform float uCloudHeight;
uniform vec3 uCloudSun;
uniform vec3 uCloudAmbient;
uniform vec3 uCloudUnderglow;
uniform vec3 uHazeColor;
uniform float uHaze;

uniform vec3 uShoreAlbedo;
uniform vec3 uShoreAmbient;
uniform vec3 uShoreSun;
uniform float uShoreHaze;
uniform vec3 uCityLights;
uniform sampler2D uSkyline;
uniform float uSkylineBins;

`;

export const CLOUDS = /* glsl */ `
float cloudNoise(vec2 p) {
  vec2 q = p * 0.45 + uCloudOffset;
  vec2 warp = vec2(fbm(q * 0.5 + 3.1, 2), fbm(q * 0.5 - 7.7, 2));
  return fbm(q + warp * 1.3, 5);
}

float cloudDensity(float n) {
  float c = uCloudCover;
  float lo = mix(0.70, 0.30, c);
  float d = smoothstep(lo, lo + 0.16, n);
  float overcast = smoothstep(0.82, 1.0, c);
  return max(d, overcast * (0.82 + 0.18 * smoothstep(0.3, 0.6, n)));
}

float henyeyGreenstein(float mu, float g) {
  float gg = g * g;
  return (1.0 - gg) / (4.0 * PI * pow(1.0 + gg - 2.0 * g * mu, 1.5));
}

vec4 clouds(vec3 d, vec3 sky) {
  if (uCloudCover < 0.005) return vec4(0.0);
  float t = uCloudHeight / max(d.y, 0.012);
  vec2 p = d.xz * t * 0.001;
  float n = cloudNoise(p);
  float dens = cloudDensity(n);
  if (dens < 0.002) return vec4(0.0);
  vec2 toSun = normalize(uSunDir.xz + 1e-4) * 0.4;
  float ns = cloudDensity(cloudNoise(p + toSun));
  float overcast = smoothstep(0.7, 1.0, uCloudCover);
  float thickness = dens * mix(1.6, 3.2, overcast);
  float selfShadow = exp(-(thickness + ns * 1.5));
  float mu = dot(d, uSunDir);
  float phase = 0.35 + 3.5 * henyeyGreenstein(mu, 0.6) + 1.2 * henyeyGreenstein(mu, -0.25);
  // A solid deck passes almost none of the sun's color; only a hint stays.
  vec3 lit = uCloudSun * (selfShadow * phase * (1.0 - 0.92 * overcast) + 0.08 * (1.0 - 0.95 * overcast));
  // CIE overcast: brightest overhead, a third as bright at the horizon. The
  // ambient is the deck's mean, so the zenith sits a little above it.
  float cie = mix(1.0, (1.0 + 2.0 * d.y) / 3.0 * 1.28, overcast);
  // A solid deck is nearly flat; the dark bases are for broken cloud.
  vec3 amb = uCloudAmbient * (1.0 - 0.45 * dens * (1.0 - 0.7 * overcast)) * cie;
  vec3 col = lit + amb + uCloudUnderglow * dens + vec3(0.55, 0.6, 0.75) * uFlash * dens;
  float aerial = 1.0 - exp(-t / mix(28000.0, 9000.0, uHaze));
  col = mix(col, mix(sky, uHazeColor, overcast), aerial);
  // A solid deck hides the sky behind it all the way down to the horizon;
  // thin spots, and the clear band under the cloud base, are for broken cloud.
  return vec4(col, mix(dens * smoothstep(0.0, 0.03, d.y), 1.0, overcast));
}

`;

export const SHORE = /* glsl */ `
// ---- The shore across the harbor -----------------------------------------
// The real horizon from the pier, baked by scripts/build-skyline.mjs into a
// one-row texture by bearing: the roofline's elevation, its distance, a
// building id for windows and tone, and what kind of thing stands there.
struct Shore { float el; float dist; float lights; float seed; float cover; float tone; float kind; };

// A soft top edge, about a pixel: all the blur the skyline needs.
const float SHORE_EDGE = 0.0012;
const float KIND_BUILDING = 1.0;
const float KIND_TERRAIN = 2.0;
const float KIND_TREES = 3.0;
const float KIND_BRIDGE = 4.0;
const float KIND_STATUE = 5.0;
const float KIND_DARK = 6.0;   // a building nobody lights at night

Shore shore(float azDeg, float el) {
  float u = mod(azDeg, 360.0) / 360.0 * uSkylineBins;
  float i0 = floor(u - 0.5);
  float f = u - 0.5 - i0;
  vec4 a = texelFetch(uSkyline, ivec2(int(mod(i0, uSkylineBins)), 0), 0);
  vec4 b = texelFetch(uSkyline, ivec2(int(mod(i0 + 1.0, uSkylineBins)), 0), 0);
  vec4 n = f < 0.5 ? a : b;
  Shore s;
  s.el = mix(a.r, b.r, f);
  s.dist = n.g;
  s.seed = n.b * 65535.0;
  s.kind = n.a;
  s.tone = hash12(vec2(s.seed, 0.5));
  s.lights = n.a == KIND_BUILDING ? 0.5 : n.a == KIND_DARK ? 0.06 : n.a == KIND_BRIDGE ? 0.2 : 0.0;
  s.cover = n.a < 0.5 ? 0.0 : 1.0 - smoothstep(s.el - SHORE_EDGE, s.el + SHORE_EDGE, el);
  return s;
}

vec3 cityLight(float az, float el, Shore s) {
  // The Statue is floodlit; the bridges carry strings of lamps.
  if (s.kind == KIND_STATUE) return vec3(0.85, 1.0, 0.8) * 1.4;
  if (s.lights <= 0.0) return vec3(0.0);
  // Windows about 2.5 m apart and 3.5 m floor to floor; far off they are
  // smaller than a texel and just a lit fraction, close by they resolve.
  float azCell = degrees(2.5 / max(s.dist, 50.0));
  float elCell = 3.5 / max(s.dist, 50.0);
  float n = hash12(vec2(floor(az / azCell), floor(el / elCell)) + s.seed);
  float lit = step(1.0 - s.lights * 0.55, n);
  vec3 warm = vec3(1.0, 0.72, 0.42);
  vec3 cool = vec3(0.78, 0.86, 1.0);
  vec3 c = mix(warm, cool, hash12(vec2(s.seed, floor(el * 300.0))));
  // Waterfront lamps along the base.
  float lamps = step(0.93, hash12(vec2(floor(az * 10.0), s.seed))) * (1.0 - smoothstep(0.0, 0.0015, abs(el + 4.0 / s.dist)));
  return c * (lit * 0.9 + lamps * 0.7);
}

`;

// The sky's own light in direction d, from the atmosphere map plus night
// sky, city glow and haze.
export const SKY_BASE = /* glsl */ `
vec2 skyMapUv(vec3 d) {
  float az = atan(d.x, -d.z);
  return vec2(fract(az / TAU), sqrt(clamp(asin(clamp(d.y, 0.0, 1.0)) / (PI * 0.5), 0.0, 1.0)));
}

vec3 skyBase(vec3 d, vec2 uv) {
  float h = d.y;
  vec3 sky = texture(uAtmo, uv).rgb;
  sky += uNightColor * (0.55 + 0.45 * (1.0 - h)) + uGlowColor * exp(-h * 6.0);
  sky = mix(sky, uHazeColor, uHaze * exp(-h * 3.0));
  sky += vec3(0.5, 0.55, 0.7) * uFlash * 0.2;
  return sky;
}

vec3 shoreColor(vec3 col, vec3 sky, vec3 d, float azDeg, float el) {
  Shore s = shore(azDeg, el);
  if (s.cover <= 0.0) return col;
  // Facades face the pier (east-ish): lit by a morning sun, dark against a sunset.
  vec3 facing = -normalize(vec3(d.x, 0.0, d.z));
  float sunLit = max(dot(facing, uSunDir), 0.0) * smoothstep(-0.02, 0.05, uSunDir.y);
  vec3 albedo;
  if (s.kind == KIND_BUILDING || s.kind == KIND_DARK) {
    // Stone, brick and glass: each block its own tone, darker toward the street.
    vec3 tint = mix(vec3(1.0, 0.96, 0.9), vec3(0.86, 0.9, 1.0), s.tone);
    float shade = (0.55 + 0.9 * hash12(vec2(s.seed, 2.0))) * mix(0.7, 1.0, smoothstep(0.0, 1.0, el / max(s.el, 1e-4)));
    albedo = uShoreAlbedo * tint * shade;
  } else if (s.kind == KIND_TREES) {
    albedo = vec3(0.06, 0.085, 0.045);
  } else if (s.kind == KIND_TERRAIN) {
    albedo = vec3(0.085, 0.095, 0.075);
  } else if (s.kind == KIND_BRIDGE) {
    albedo = vec3(0.08, 0.08, 0.09);
  } else {
    albedo = vec3(0.14, 0.22, 0.18);
  }
  vec3 facade = albedo * (uShoreAmbient + uShoreSun * sunLit);
  facade += cityLight(azDeg, el, s) * uCityLights;
  // Distance haze, thicker when visibility drops.
  float aerial = 1.0 - exp(-s.dist * uShoreHaze);
  return mix(col, mix(facade, sky, aerial), s.cover);
}
`;

export const SKYMAP_FRAG = /* glsl */ `
${COMMON}
${NOISE}
${ATMOSPHERE}
${SKY_UNIFORMS}
${CLOUDS}
${SHORE}
${SKY_BASE}
uniform vec2 uSize;
layout(location = 0) out highp vec4 fragColor;

void main() {
  vec2 uv = gl_FragCoord.xy / uSize;
  float az = uv.x * TAU;
  // Rows are packed toward the horizon, where the shore and the brightest sky are.
  float el = max(uv.y * uv.y, 1e-5) * (PI * 0.5);
  vec3 d = vec3(sin(az) * cos(el), sin(el), -cos(az) * cos(el));
#ifdef ATMO_ONLY
  // The scattering integral is the expensive part: it goes in its own small
  // map, redrawn only when the sun moves.
  fragColor = vec4(atmosphere(d, uSunDir, uSunE, uMieScale), 1.0);
  return;
#endif
  vec3 sky = skyBase(d, uv);
  vec4 cl = clouds(d, sky);
  vec3 col = mix(sky, cl.rgb, cl.a);
  // The shore fades into whatever is behind it: cloud deck or clear sky.
  col = shoreColor(col, col, d, degrees(az), el);
  fragColor = vec4(col, 1.0);
}
`;

// The sky seen directly, per pixel: clouds and the skyline drawn at full
// resolution, with stars, the moon and the sun's disk.
export const SKY_VIEW_FRAG = /* glsl */ `
${COMMON}
${NOISE}
${SKY_UNIFORMS}
${CLOUDS}
${SHORE}
${SKY_BASE}
in vec2 vUv;
uniform mat4 uInvProjection;
uniform mat4 uCameraWorld;
uniform vec3 uMoonDir;
uniform vec3 uSunDiskColor;
uniform vec3 uMoonColor;
uniform float uStarVis;
uniform float uTime;
layout(location = 0) out highp vec4 fragColor;

vec3 stars(vec3 d) {
  if (uStarVis <= 0.0 || d.y < 0.0) return vec3(0.0);
  vec3 p = d * 320.0;
  vec3 cell = floor(p);
  float h = hash13(cell);
  if (h < 0.9965) return vec3(0.0);
  vec3 jitter = vec3(hash13(cell + 1.7), hash13(cell + 4.1), hash13(cell + 9.3)) - 0.5;
  float dist = length(p - (cell + 0.5 + jitter * 0.6));
  float b = pow((h - 0.9965) / 0.0035, 3.0);
  float twinkle = 0.7 + 0.3 * sin(uTime * (1.5 + h * 9.0) + h * 91.0);
  vec3 tint = mix(vec3(1.0, 0.86, 0.72), vec3(0.8, 0.9, 1.0), hash13(cell + 2.2));
  return tint * b * twinkle * (1.0 - smoothstep(0.05, 0.28, dist)) * uStarVis * smoothstep(0.0, 0.2, d.y);
}

vec3 sunDisk(vec3 d) {
  float c = dot(d, uSunDir);
  if (c < 0.9998) return vec3(0.0);
  const float R = 0.00467;
  float ang = length(cross(d, uSunDir));
  float x = clamp(ang / R, 0.0, 1.0);
  float limb = 1.0 - 0.55 * (1.0 - sqrt(1.0 - x * x));
  return uSunDiskColor * limb * (1.0 - smoothstep(0.92, 1.0, ang / R));
}

vec3 moonDisk(vec3 d) {
  float c = dot(d, uMoonDir);
  if (c < 0.9995 || uMoonDir.y < -0.02) return vec3(0.0);
  const float R = 0.0045;
  vec3 right = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 up = cross(right, uMoonDir);
  vec2 uv = vec2(dot(d, right), dot(d, up)) / R;
  float r2 = dot(uv, uv);
  if (r2 > 1.0) return vec3(0.0);
  float z = sqrt(1.0 - r2);
  // The lit side faces the sun, so the phase falls out of the geometry.
  vec3 n = right * uv.x + up * uv.y - uMoonDir * z;
  float lit = max(dot(n, uSunDir), 0.0);
  float maria = 0.62 + 0.38 * smoothstep(0.3, 0.7, fbm(uv * 2.2 + 4.0, 4));
  float edge = 1.0 - smoothstep(0.94, 1.0, r2);
  return uMoonColor * (lit * maria + 0.012) * edge;
}

void main() {
  vec4 clip = vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
  vec4 view = uInvProjection * clip;
  vec3 d = normalize(mat3(uCameraWorld) * (view.xyz / view.w));
  // Below the horizon the water takes over; give it the horizon's color to blend against.
  vec3 da = normalize(vec3(d.x, max(d.y, 0.0015), d.z));
  vec2 uv = skyMapUv(da);
  vec3 sky = skyBase(da, uv);
  vec3 col = sky + stars(da) + moonDisk(da) + sunDisk(da);
  vec4 cl = clouds(da, sky);
  col = mix(col, cl.rgb, cl.a);
  float az = atan(da.x, -da.z);
  col = shoreColor(col, col, da, degrees(az < 0.0 ? az + TAU : az), asin(da.y));
  fragColor = vec4(col, 1.0);
}
`;
