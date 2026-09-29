import { COMMON } from "@/lib/vignettes/glsl/common";

// One Stockham pass of an inverse FFT along rows or columns, radix 4 or 2:
// x[n] = sum_m X[m] e^{+2 pi i m n / N}, natural order in and out.
// Each RGBA texel carries two complex numbers; COUNT textures go at once.
export const FFT_FRAG = /* glsl */ `
${COMMON}
uniform highp sampler2D uIn0;
uniform highp sampler2D uIn1;
uniform highp sampler2D uIn2;
uniform highp sampler2D uIn3;
uniform int uN;
uniform int uS;
uniform int uRadix;
uniform int uHorizontal;
layout(location = 0) out highp vec4 o0;
#if COUNT > 1
layout(location = 1) out highp vec4 o1;
#endif
#if COUNT > 2
layout(location = 2) out highp vec4 o2;
#endif
#if COUNT > 3
layout(location = 3) out highp vec4 o3;
#endif

vec4 twiddled(vec4 v, vec2 tw) {
  return vec4(cmul(tw, v.xy), cmul(tw, v.zw));
}

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  int idx = uHorizontal == 1 ? p.x : p.y;
  int sub = uS / uRadix;
  int e = (idx / uS) * sub + (idx % sub);
  int stride = uN / uRadix;
  float k = float(idx % uS) / float(uS);
  vec4 a0 = vec4(0.0);
  vec4 a1 = vec4(0.0);
  vec4 a2 = vec4(0.0);
  vec4 a3 = vec4(0.0);
  for (int j = 0; j < 4; j++) {
    if (j >= uRadix) break;
    int src = e + j * stride;
    ivec2 ps = uHorizontal == 1 ? ivec2(src, p.y) : ivec2(p.x, src);
    float ang = TAU * float(j) * k;
    vec2 tw = vec2(cos(ang), sin(ang));
    a0 += twiddled(texelFetch(uIn0, ps, 0), tw);
#if COUNT > 1
    a1 += twiddled(texelFetch(uIn1, ps, 0), tw);
#endif
#if COUNT > 2
    a2 += twiddled(texelFetch(uIn2, ps, 0), tw);
#endif
#if COUNT > 3
    a3 += twiddled(texelFetch(uIn3, ps, 0), tw);
#endif
  }
  o0 = a0;
#if COUNT > 1
  o1 = a1;
#endif
#if COUNT > 2
  o2 = a2;
#endif
#if COUNT > 3
  o3 = a3;
#endif
}
`;

// Wind-sea spectrum for one cascade at time t, ready for the inverse FFT.
// JONSWAP (fetch-limited) with Hasselmann/Mitsuyasu directional spreading,
// plus a low background sea for boat wakes and chop bouncing off bulkheads.
export const SPECTRUM_FRAG = /* glsl */ `
${COMMON}
uniform highp sampler2D uNoise;
uniform int uN;
uniform float uL;
uniform float uTime;
uniform float uKMin;
uniform float uKMax;
uniform float uDepth;
uniform float uLoopOmega;

uniform float uWindU;
uniform float uFetch;
uniform vec2 uWindDir;
uniform float uReflect;
uniform float uWindAmp;

uniform float uSwellU;
uniform float uSwellFetch;
uniform vec2 uSwellDir;
uniform float uSwellAmp;
uniform float uAmp;
uniform float uRollOff;
uniform float uSpreadMin;
uniform float uRipple;
uniform float uKNyquist;

layout(location = 0) out highp vec4 o0;
layout(location = 1) out highp vec4 o1;

float dispersionSlope(float k, float depth) {
  float th = tanh(min(k * depth, 20.0));
  float w = max(dispersion(k, depth), 1e-4);
  float sech = 1.0 / cosh(min(k * depth, 20.0));
  float a = (GRAVITY + 3.0 * 7.28e-5 * k * k) * th;
  float b = (GRAVITY * k + 7.28e-5 * k * k * k) * depth * sech * sech;
  return (a + b) / (2.0 * w);
}

float peakOmega(float U, float F) {
  return 22.0 * pow(GRAVITY * GRAVITY / (U * F), 1.0 / 3.0);
}

float jonswap(float w, float U, float F) {
  float alpha = 0.076 * pow(U * U / (F * GRAVITY), 0.22);
  float wp = peakOmega(U, F);
  float sigma = w <= wp ? 0.07 : 0.09;
  float d = w - wp;
  float r = exp(-d * d / (2.0 * sigma * sigma * wp * wp));
  return alpha * GRAVITY * GRAVITY / pow(w, 5.0) * exp(-1.25 * pow(wp / w, 4.0)) * pow(3.3, r);
}

// cos^2s(theta/2) spreading, normalized over the circle.
float spreading(float cosTheta, float s) {
  float q = sqrt(s + 1.0 / PI) / (2.0 * sqrt(PI));
  return q * pow(max(0.5 + 0.5 * cosTheta, 0.0), s);
}

float spreadExponent(float w, float wp, float U) {
  float r = w / wp;
  float s = r <= 1.0
    ? 6.97 * pow(r, 4.06)
    : 9.77 * pow(r, -2.33 - 1.45 * (U * wp / GRAVITY - 1.17));
  // Wind seas are long-crested: even the short waves mostly run downwind.
  return clamp(s, uSpreadMin, 30.0);
}

float directional(vec2 khat, float w, float U, float F, vec2 dir, float reflect) {
  float wp = peakOmega(U, F);
  float s = spreadExponent(w, wp, U);
  float c = dot(khat, dir);
  return mix(spreading(c, s), spreading(-c, s), reflect);
}

float energy(vec2 k) {
  float kl = length(k);
  if (kl < uKMin || kl >= uKMax) return 0.0;
  vec2 khat = k / kl;
  float w = dispersion(kl, uDepth);
  float jac = dispersionSlope(kl, uDepth) / kl;
  float e = 0.0;
  if (uWindAmp > 0.0) {
    e += uWindAmp * jonswap(w, uWindU, uFetch) * directional(khat, w, uWindU, uFetch, uWindDir, uReflect);
  }
  if (uSwellAmp > 0.0) {
    e += uSwellAmp * jonswap(w, uSwellU, uSwellFetch) * directional(khat, w, uSwellU, uSwellFetch, uSwellDir, 0.35);
  }
  // Short ripples die off faster than the fetch laws' tail says (surface
  // films on harbor water damp them), which keeps the big faces smooth.
  float kp = peakOmega(uWindU, uFetch) * peakOmega(uWindU, uFetch) / GRAVITY;
  float kc = uRollOff * kp;
  float roll = 1.0 / (1.0 + (kl / kc) * (kl / kc));
  // Nothing above what this tile can hold, or it aliases into beads along the crests.
  float fits = exp(-pow(kl / (0.55 * uKNyquist), 4.0));
  // The harbor steepens the waves that carry the energy, around the peak. The
  // short-wave tail is already saturated (it breaks if it gets any steeper),
  // so it keeps its open-water level.
  float boost = mix(uAmp * uAmp, 1.0, smoothstep(2.0 * kp, 8.0 * kp, kl));
  float psi = e * jac * boost * roll * fits;
  // Wind ripples riding on the waves: a saturated k^-4 range (as in
  // Elfouhaily's short-wave term) from a few times the peak down to a
  // couple of centimeters, where surface tension takes over and they vanish.
  if (uRipple > 0.0) {
    float onset = smoothstep(2.5 * kp, 8.0 * kp, kl);
    float tail = exp(-pow(kl / 250.0, 2.0));
    float d = mix(spreading(dot(khat, uWindDir), 2.5), spreading(-dot(khat, uWindDir), 2.5), 0.15);
    psi += uRipple * onset * tail * fits * d / (kl * kl * kl * kl);
  }
  return psi;
}

void main() {
  ivec2 id = ivec2(gl_FragCoord.xy);
  float n = float(uN);
  vec2 m = vec2(id);
  m -= step(n * 0.5, m) * n;
  if (abs(m.x) >= n * 0.5 || abs(m.y) >= n * 0.5 || (m.x == 0.0 && m.y == 0.0)) {
    o0 = vec4(0.0);
    o1 = vec4(0.0);
    return;
  }
  float dk = TAU / uL;
  vec2 k = m * dk;
  float kl = length(k);

  ivec2 idm = (ivec2(uN) - id) % uN;
  vec2 xi = texelFetch(uNoise, id, 0).xy;
  vec2 xim = texelFetch(uNoise, idm, 0).xy;
  // E|h0|^2 = S dk^2 / 2 so that the surface variance integrates to the spectrum's.
  vec2 h0 = xi * sqrt(energy(k) * 0.5) * dk;
  vec2 h0m = xim * sqrt(energy(-k) * 0.5) * dk;

  // Frequencies snap to multiples of uLoopOmega so the motion repeats exactly
  // and the phase never loses precision as time grows.
  float w = floor(dispersion(kl, uDepth) / uLoopOmega) * uLoopOmega;
  float ph = w * uTime;
  vec2 e = vec2(cos(ph), -sin(ph));
  vec2 h = cmul(h0, e) + cmul(cconj(h0m), cconj(e));

  vec2 ih = vec2(-h.y, h.x);
  vec2 khat = k / kl;
  vec2 dx = -ih * khat.x;
  vec2 dz = -ih * khat.y;
  vec2 hx = ih * k.x;
  vec2 hz = ih * k.y;
  vec2 dxx = h * (k.x * k.x / kl);
  vec2 dzz = h * (k.y * k.y / kl);
  vec2 dxz = h * (k.x * k.y / kl);

  // After the inverse FFT: o0 = (Dx, h, Dz, dDx/dz), o1 = (dh/dx, dh/dz, dDx/dx, dDz/dz)
  o0 = vec4(cpack(dx, h), cpack(dz, dxz));
  o1 = vec4(cpack(hx, hz), cpack(dxx, dzz));
}
`;

// Spatial fields -> displacement, foam and slope moments (for LEAN-style
// filtering: mip-mapped E[s] and E[s^2] give the variance of the slopes a
// pixel can't resolve, which becomes specular roughness).
export const ASSEMBLE_FRAG = /* glsl */ `
uniform highp sampler2D uA;
uniform highp sampler2D uB;
uniform highp sampler2D uPrev;
uniform float uLambda;
uniform float uFoamDecay;
uniform float uFoamBias;
uniform float uFoamGain;
layout(location = 0) out highp vec4 o0;
layout(location = 1) out highp vec4 o1;

void main() {
  ivec2 p = ivec2(gl_FragCoord.xy);
  vec4 a = texelFetch(uA, p, 0);
  vec4 b = texelFetch(uB, p, 0);
  float jxx = 1.0 + uLambda * b.z;
  float jzz = 1.0 + uLambda * b.w;
  float jxz = uLambda * a.w;
  float jacobian = jxx * jzz - jxz * jxz;
  vec2 slope = vec2(b.x / max(jxx, 0.25), b.y / max(jzz, 0.25));
  float prev = texelFetch(uPrev, p, 0).w;
  float fresh = clamp((uFoamBias - jacobian) * uFoamGain, 0.0, 1.0);
  float foam = max(prev * uFoamDecay, fresh);
  o0 = vec4(a.x * uLambda, a.y, a.z * uLambda, foam);
  o1 = vec4(slope, slope * slope);
}
`;

// Interactive ripples, solved in the frequency domain: each wavenumber is a
// harmonic oscillator at its true gravity-capillary frequency, so a splash
// disperses into the right ring train (long waves outrun short ones) and a
// dragged finger leaves a Kelvin wake on its own.
export const RIPPLE_EVOLVE_FRAG = /* glsl */ `
${COMMON}
#define MAX_DROPS 24
uniform highp sampler2D uState;
uniform int uN;
uniform float uL;
uniform float uDt;
uniform float uDepth;
uniform float uDamp0;
uniform float uDampK;
uniform vec4 uDrops[MAX_DROPS];
uniform int uDropCount;
layout(location = 0) out highp vec4 o0;
layout(location = 1) out highp vec4 o1;

void main() {
  ivec2 id = ivec2(gl_FragCoord.xy);
  float n = float(uN);
  vec2 m = vec2(id);
  m -= step(n * 0.5, m) * n;
  if (abs(m.x) >= n * 0.5 || abs(m.y) >= n * 0.5 || (m.x == 0.0 && m.y == 0.0)) {
    o0 = vec4(0.0);
    o1 = vec4(0.0);
    return;
  }
  vec2 k = m * (TAU / uL);
  float kl = length(k);
  vec4 s = texelFetch(uState, id, 0);
  vec2 a = s.xy;
  vec2 b = s.zw;
  float w = dispersion(kl, uDepth);
  float c = cos(w * uDt);
  float sn = sin(w * uDt);
  vec2 a2 = a * c + b * sn;
  vec2 b2 = -a * sn + b * c;
  float damp = exp(-(uDamp0 + uDampK * kl * kl) * uDt);
  a2 *= damp;
  b2 *= damp;

  for (int i = 0; i < MAX_DROPS; i++) {
    if (i >= uDropCount) break;
    vec4 d = uDrops[i];
    // A ring-shaped dent of depth d.z and radius d.w at (d.x, d.y) in domain
    // meters: water pushed aside piles up around the hole, so nothing is
    // lifted or lowered on average, and the energy sits in rings about the
    // dent's own size rather than in a slow heave.
    float r = d.w;
    float x = 0.5 * kl * kl * r * r;
    float mag = d.z * TAU * r * r / (uL * uL) * x * exp(-x);
    vec2 u = d.xy / uL;
    float ph = TAU * fract(fract(m.x * u.x) + fract(m.y * u.y));
    a2 += mag * vec2(cos(ph), -sin(ph));
  }

  o0 = vec4(a2, b2);
  vec2 ih = vec2(-a2.y, a2.x);
  o1 = vec4(cpack(a2, ih * k.x), cpack(ih * k.y, vec2(0.0)));
}
`;

export const RIPPLE_ASSEMBLE_FRAG = /* glsl */ `
uniform highp sampler2D uIn;
layout(location = 0) out highp vec4 o0;
void main() {
  vec4 f = texelFetch(uIn, ivec2(gl_FragCoord.xy), 0);
  vec2 slope = f.yz;
  o0 = vec4(f.x, slope, dot(slope, slope));
}
`;
