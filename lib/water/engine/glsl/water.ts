import { BICUBIC, COMMON, NOISE, TEX_NOISE } from "@/lib/vignettes/glsl/common";

const RIPPLE_UNIFORMS = /* glsl */ `
uniform highp sampler2D uRipple;
uniform vec4 uRippleRect; // origin x, origin z, 1 / size, texels across
uniform float uRippleOn;

float rippleFade(vec2 uv) {
  vec2 e = smoothstep(0.0, 0.1, uv) * (1.0 - smoothstep(0.9, 1.0, uv));
  return e.x * e.y;
}
`;

export const WATER_VERT = /* glsl */ `
${COMMON}
${BICUBIC}
${RIPPLE_UNIFORMS}
uniform highp sampler2D uDisp0;
uniform highp sampler2D uDisp1;
uniform highp sampler2D uDisp2;
uniform vec4 uCascadeL;
uniform float uTexN;
uniform float uSpacing;
uniform float uCrestK;
uniform vec2 uWindDir;
uniform float uLean;
out vec3 vWorld;
out vec2 vXZ;
out float vHeight;
out float vCrest;

float lodFor(float spacing, float L) { return max(log2(spacing * uTexN / L), 0.0); }

void main() {
  vec2 xz = position.xz;
  float dist = length(vec3(xz.x, 0.0, xz.y) - cameraPosition);
  float spacing = max(dist * uSpacing, 0.005);
  vec3 d0 = textureSmooth(uDisp0, xz / uCascadeL.x, uTexN, lodFor(spacing, uCascadeL.x)).xyz;
  // Short waves bunch up on the crests of the long ones and stretch out in
  // the troughs, which is what makes a crest read as a sharp, busy line.
  float crest = clamp(1.0 + uCrestK * d0.y, 0.5, 1.6);
  vec3 d1 = textureSmooth(uDisp1, xz / uCascadeL.y, uTexN, lodFor(spacing, uCascadeL.y)).xyz;
  vec3 d2 = textureSmooth(uDisp2, xz / uCascadeL.z, uTexN, lodFor(spacing, uCascadeL.z)).xyz;
  vec3 d = d0 + (d1 + d2) * mix(1.0, crest, 0.6);
  if (uRippleOn > 0.5) {
    vec2 ruv = (xz - uRippleRect.xy) * uRippleRect.z;
    if (ruv.x > 0.0 && ruv.y > 0.0 && ruv.x < 1.0 && ruv.y < 1.0) {
      float lod = max(log2(spacing * uRippleRect.w * uRippleRect.z), 0.0);
      d.y += textureSmooth(uRipple, ruv, uRippleRect.w, lod).x * rippleFade(ruv);
    }
  }
  // Wind waves lean downwind: the front face steepens and the back face
  // eases off, the way a crest looks just before it breaks.
  d.xz += uWindDir * d.y * uLean;
  vec3 world = vec3(xz.x, 0.0, xz.y) + d;
  vWorld = world;
  vXZ = xz;
  vHeight = d.y;
  vCrest = crest;
  gl_Position = projectionMatrix * viewMatrix * vec4(world, 1.0);
}
`;

export const WATER_FRAG = /* glsl */ `
${COMMON}
${BICUBIC}
${NOISE}
${TEX_NOISE}
${RIPPLE_UNIFORMS}
in vec3 vWorld;
in vec2 vXZ;
in float vHeight;
in float vCrest;
layout(location = 0) out highp vec4 fragColor;

uniform highp sampler2D uDisp0;
uniform highp sampler2D uDisp1;
uniform highp sampler2D uSlope0;
uniform highp sampler2D uSlope1;
uniform highp sampler2D uSlope2;
uniform highp sampler2D uSlope3;
uniform vec4 uCascadeL;
uniform float uTexN;

uniform sampler2D uSky;
uniform float uSkyTexel;
uniform float uSkyMaxLod;
uniform float uCloudShadow;
uniform vec2 uCloudDrift;

uniform vec3 uSunDir;
uniform vec3 uSunIrr;
uniform vec3 uMoonDir;
uniform vec3 uMoonIrr;
uniform vec3 uWaterColor;
uniform vec3 uScatterColor;
uniform float uBaseVar;
uniform vec2 uWindDir;
uniform float uWindSpeed;
uniform float uGustiness;
uniform float uTime;
uniform float uRain;
uniform float uFogDensity;
uniform float uFoamAmount;
uniform float uStreaks;
uniform float uWhiteBalance;
uniform float uFlash;
uniform float uLean;
uniform float uFaceK;

float lambdaBeckmann(float cosTheta, float s2) {
  float c = clamp(cosTheta, 1e-3, 0.9999);
  float a = c / sqrt(2.0 * s2 * (1.0 - c * c));
  if (a >= 1.6) return 0.0;
  return (1.0 - 1.259 * a + 0.396 * a * a) / (3.535 * a + 2.181 * a * a);
}

// Slope variance along the azimuth of v.
float dirVar(vec3 v, vec2 s2) {
  vec2 h = v.xz;
  float l2 = dot(h, h);
  if (l2 < 1e-8) return 0.5 * (s2.x + s2.y);
  return (s2.x * h.x * h.x + s2.y * h.y * h.y) / l2;
}

// Reflected radiance per unit irradiance from a distant light. The slopes a
// pixel can't resolve are Gaussian around the resolved slope sN, with
// different spreads along and across the wind (Beckmann), so glints stretch
// into streaks the way they do on real water.
float glint(vec3 L, vec3 V, vec2 sN, vec2 s2) {
  if (L.y <= 0.0) return 0.0;
  vec3 H = normalize(L + V);
  if (H.y <= 0.02) return 0.0;
  vec2 ds = -H.xz / H.y - sN;
  float p = exp(-0.5 * (ds.x * ds.x / s2.x + ds.y * ds.y / s2.y)) / (TAU * sqrt(s2.x * s2.y));
  float Hy2 = H.y * H.y;
  float F = 0.02 + 0.98 * pow(1.0 - clamp(dot(V, H), 0.0, 1.0), 5.0);
  float G = 1.0 / (1.0 + lambdaBeckmann(L.y, dirVar(L, s2)) + lambdaBeckmann(V.y, dirVar(V, s2)));
  return F * p * G / (4.0 * max(V.y, 0.02) * Hy2 * Hy2);
}

// A wave texture at the mip level the pixel footprint calls for, cubic when
// that is the finest one.
vec4 waveTexture(sampler2D tex, vec2 uv, float n) {
  vec2 st = uv * n;
  float lod = 0.5 * log2(max(dot(dFdx(st), dFdx(st)), dot(dFdy(st), dFdy(st))) + 1e-8);
  return textureSmooth(tex, uv, n, lod);
}

// The sky map covers azimuth 0–360° across and elevation 0–90° up, with rows
// packed toward the horizon (v = sqrt(elevation / 90°)).
// Rough water smears a reflection far more up and down than sideways (a
// light on the far shore becomes a vertical streak), so the elevation is
// blurred with the mip the roughness calls for and the azimuth with a
// finer one.
vec3 skyAt(vec3 r, float lod) {
  float az = atan(r.x, -r.z);
  vec2 uv = vec2(fract(az / TAU), sqrt(asin(clamp(r.y, 0.0, 1.0)) / (PI * 0.5)));
  float fine = max(lod - 1.5, 1.0);
  float dv = exp2(lod) * 0.7 / 256.0;
  return 0.25 * (2.0 * textureLod(uSky, uv, fine).rgb + textureLod(uSky, uv + vec2(0.0, dv), fine).rgb + textureLod(uSky, uv - vec2(0.0, dv), fine).rgb);
}

// Gust patches ("cat's paws"): darker, rougher streaks racing downwind,
// glassy slicks between them.
float gustField(vec2 p, float dist) {
  vec2 w = uWindDir;
  vec2 along = vec2(dot(p, w), dot(p, vec2(-w.y, w.x)));
  along.x -= uTime * max(uWindSpeed, 1.0) * 0.8;
  float n = tfbm(along * vec2(0.04, 0.06), 3);
  // The fine streaking is sub-pixel past a few meters and would only sparkle.
  float streak = mix(tnoise(along * vec2(0.08, 0.9) + 7.0), 0.5, smoothstep(5.0, 18.0, dist));
  float g = smoothstep(0.3, 0.7, n) * 0.85 + streak * 0.15;
  return mix(1.0, 0.55 + 0.8 * g, uGustiness);
}

vec2 rainLayer(vec2 p, float cells, float seed) {
  vec2 q = p * cells + seed * 13.7;
  vec2 cell = floor(q);
  vec2 grad = vec2(0.0);
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 c = cell + vec2(float(i), float(j));
      float rate = 0.9 + 0.8 * hash12(c * 1.7 + seed);
      float phase = uTime * rate + hash12(c + seed * 3.0) * 7.0;
      float drop = floor(phase);
      float age = fract(phase);
      if (hash12(c + drop * 3.1 + seed) > uRain) continue;
      vec2 center = c + hash22(c + drop * 1.3 + seed);
      vec2 dv = q - center;
      float d = length(dv);
      float x = (d - age * 1.1) * 16.0;
      float env = (1.0 - age) * (1.0 - age) * (1.0 - smoothstep(0.0, 6.28, abs(x)));
      grad += -sin(x) * 16.0 * env * dv / max(d, 1e-4);
    }
  }
  return grad * cells;
}

// Whitecap foam is lace, not a sheet: thin foam breaks into patches first.
float foamCoverage(vec2 p, float amount) {
  float a = clamp(amount, 0.0, 1.0);
  float lace = tfbm(p * 3.5 + uTime * 0.02, 3) * 0.6 + tnoise(p * 14.0 - uTime * 0.06) * 0.4;
  float thin = 1.0 - a;
  return smoothstep(thin * 0.75, thin * 0.75 + 0.18, lace) * clamp(a * 1.4, 0.0, 0.92);
}

void main() {
  vec3 toCam = cameraPosition - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / dist;

  vec2 uv0 = vXZ / uCascadeL.x;
  vec2 uv1 = vXZ / uCascadeL.y;
  vec2 uv2 = vXZ / uCascadeL.z;
  vec4 s0 = waveTexture(uSlope0, uv0, uTexN);
  vec4 s1 = waveTexture(uSlope1, uv1, uTexN);
  vec4 s2 = waveTexture(uSlope2, uv2, uTexN);
  // The finest tile's texels are a centimeter: never magnified enough to show.
  vec4 s3 = texture(uSlope3, vXZ / uCascadeL.w);
  float gust = gustField(vXZ, dist);
  // The crest shelters the face in front of it from the wind, so ripples grow
  // on the windward back of each wave and the front stays smooth and dark.
  float face = clamp(1.0 + uFaceK * dot(s0.xy, uWindDir), 0.25, 1.8);
  float g1 = mix(1.0, gust, 0.45) * vCrest * face;
  float g2 = gust * vCrest * face;
  vec2 slope = s0.xy + s1.xy * g1 + (s2.xy + s3.xy) * g2;
  vec2 var = max(s0.zw - s0.xy * s0.xy, 0.0)
    + max(s1.zw - s1.xy * s1.xy, 0.0) * g1 * g1
    + (max(s2.zw - s2.xy * s2.xy, 0.0) + max(s3.zw - s3.xy * s3.xy, 0.0)) * g2 * g2;
  // Capillary ripples below the texel size: rougher along the wind than across it.
  vec2 w2 = uWindDir * uWindDir;
  var += uBaseVar * g2 * g2 * vec2(1.3 * w2.x + 0.7 * w2.y, 1.3 * w2.y + 0.7 * w2.x);

  if (uRippleOn > 0.5) {
    vec2 ruv = (vXZ - uRippleRect.xy) * uRippleRect.z;
    if (ruv.x > 0.0 && ruv.y > 0.0 && ruv.x < 1.0 && ruv.y < 1.0) {
      vec4 r = waveTexture(uRipple, ruv, uRippleRect.w);
      float f = rippleFade(ruv);
      slope += r.yz * f;
      var += max(r.w - dot(r.yz, r.yz), 0.0) * 0.5 * f;
    }
  }

  if (uRain > 0.0) {
    float near = exp(-dist * 0.06);
    if (near > 0.02) {
      vec2 rs = rainLayer(vXZ, 5.0, 0.0) * 0.005 + rainLayer(vXZ, 9.0, 1.0) * 0.0025;
      slope += rs * near;
    }
    var += (1.0 - near) * 0.006 * uRain;
  }
  // The lean shears the surface downwind (see the vertex shader): slopes
  // compress on the front face and stretch on the back.
  float lean = 1.0 / clamp(1.0 + uLean * dot(slope, uWindDir), 0.35, 3.0);
  slope *= lean;
  var *= lean * lean;
  var = max(var, vec2(2e-5));
  float sigma2 = 0.5 * (var.x + var.y);

  vec3 N = normalize(vec3(-slope.x, 1.0, -slope.y));
  float NdV = max(dot(N, V), 0.0);
  float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);

  vec3 R = reflect(-V, N);
  R.y = abs(R.y);
  // Never sharper than a mip down: the shore's lights are texel noise up close.
  float lod = clamp(log2(2.0 * sqrt(sigma2) / uSkyTexel), 1.0, uSkyMaxLod);
  vec3 sky = skyAt(R, lod);

  // Diffuse sky light: what the water column sees is mostly the upper sky,
  // not the horizon band the map's rows crowd toward.
  vec3 ambient = 0.75 * textureLod(uSky, vec2(0.5, 0.75), uSkyMaxLod - 2.0).rgb + 0.25 * textureLod(uSky, vec2(0.5, 0.25), uSkyMaxLod - 2.0).rgb;
  ambient += vec3(0.5, 0.55, 0.7) * uFlash * 0.3;

  // Shadows of broken cloud drifting over the water.
  float shade = 1.0;
  if (uCloudShadow > 0.0) {
    shade = 1.0 - uCloudShadow * smoothstep(0.42, 0.62, tfbm(vXZ * 0.004 + uCloudDrift, 3));
  }
  vec3 sunIrr = uSunIrr * shade;

  vec3 spec = sunIrr * glint(uSunDir, V, slope, var) + uMoonIrr * glint(uMoonDir, V, slope, var);

  // Light scattered back up out of the water column.
  vec3 sunDiffuse = sunIrr * max(uSunDir.y, 0.0) / PI;
  vec3 body = uWaterColor * (ambient + sunDiffuse);
  // Sun shining through the thin tops of waves between us and the sun.
  vec3 Lh = normalize(vec3(uSunDir.x, 0.0, uSunDir.z) + 1e-5);
  float through = pow(clamp(dot(-V, Lh), 0.0, 1.0), 3.0) * clamp(vHeight * 3.0 + 0.25, 0.0, 1.0);
  body += uScatterColor * sunIrr * through * clamp(1.0 - uSunDir.y * 1.5, 0.0, 1.0) * 0.02;

  vec3 col = F * sky + (1.0 - F) * body + spec;

  // Whitecaps where the surface folds over.
  float foam = texture(uDisp0, uv0).w + texture(uDisp1, uv1).w * 0.5;
  foam = clamp(foam * uFoamAmount, 0.0, 1.0);
  if (uStreaks > 0.0) {
    vec2 w = uWindDir;
    vec2 along = vec2(dot(vXZ, w), dot(vXZ, vec2(-w.y, w.x)));
    along.x -= uTime * 0.6;
    float streak = smoothstep(0.6, 0.82, tfbm(along * vec2(0.035, 0.45), 3));
    foam += streak * uStreaks * smoothstep(0.0, 0.25, vHeight + 0.1);
  }
  if (foam > 0.001) {
    float coverage = foamCoverage(vXZ, foam);
    vec3 foamCol = 0.8 * (ambient + sunIrr * max(dot(N, uSunDir), 0.0) / PI + uMoonIrr * max(dot(N, uMoonDir), 0.0) / PI);
    col = mix(col, foamCol, coverage);
  }

  // Aerial perspective: fade into the sky's own color at the horizon.
  vec3 fogCol = skyAt(normalize(vec3(-V.x, 0.02, -V.z)), 3.0);
  col = mix(fogCol, col, exp(-dist * uFogDensity));

  // A camera's auto white balance: pull the scene's overall cast most of the
  // way to neutral, so sunset water reads slate blue under orange glints.
  vec3 tint = textureLod(uSky, vec2(0.5), uSkyMaxLod).rgb;
  float tintLum = dot(tint, vec3(0.2126, 0.7152, 0.0722));
  col *= pow(vec3(tintLum) / max(tint, vec3(1e-6)), vec3(uWhiteBalance));

  fragColor = vec4(col, 1.0);
}
`;
