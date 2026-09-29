export const COMMON = /* glsl */ `
#define PI 3.141592653589793
#define TAU 6.283185307179586
#define GRAVITY 9.81

vec2 cmul(vec2 a, vec2 b) { return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x); }
vec2 cconj(vec2 a) { return vec2(a.x, -a.y); }
// Two real fields with Hermitian spectra A and B share one complex transform: IFFT(A + iB) = a + ib.
vec2 cpack(vec2 a, vec2 b) { return vec2(a.x - b.y, a.y + b.x); }

// Gravity-capillary dispersion over finite depth.
float dispersion(float k, float depth) {
  return sqrt((GRAVITY * k + 7.28e-5 * k * k * k) * tanh(min(k * depth, 20.0)));
}
`;

export const NOISE = /* glsl */ `
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
const mat2 FBM_ROT = mat2(0.8, -0.6, 0.6, 0.8);
float fbm(vec2 p, int octaves) {
  float sum = 0.0;
  float amp = 0.5;
  float norm = 0.0;
  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    sum += amp * vnoise(p);
    norm += amp;
    p = FBM_ROT * p * 2.03 + 17.1;
    amp *= 0.5;
  }
  return sum / norm;
}
`;

// Value noise from a 256² random texture: one bilinear fetch at a smoothstepped
// coordinate matches four hashes and three mixes, for a fraction of the cost.
export const TEX_NOISE = /* glsl */ `
uniform sampler2D uNoiseTex;
float tnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return texture(uNoiseTex, (i + f + 0.5) / 256.0).r;
}
float tfbm(vec2 p, int octaves) {
  float sum = 0.0;
  float amp = 0.5;
  float norm = 0.0;
  for (int i = 0; i < 6; i++) {
    if (i >= octaves) break;
    sum += amp * tnoise(p);
    norm += amp;
    p = mat2(0.8, -0.6, 0.6, 0.8) * p * 2.07 + vec2(5.3, 1.7);
    amp *= 0.5;
  }
  return sum / norm;
}
`;

// Cubic B-spline filtering from four bilinear fetches. Up close a wave
// texel is dozens of pixels wide, and plain bilinear shows its lattice
// wherever the shading turns sharply.
export const BICUBIC = /* glsl */ `
vec4 bicubicWeights(float t) {
  float t2 = t * t;
  float t3 = t2 * t;
  return vec4(-t3 + 3.0 * t2 - 3.0 * t + 1.0, 3.0 * t3 - 6.0 * t2 + 4.0, -3.0 * t3 + 3.0 * t2 + 3.0 * t + 1.0, t3) / 6.0;
}
vec4 textureBicubic(sampler2D tex, vec2 uv, float n) {
  vec2 st = uv * n - 0.5;
  vec2 f = fract(st);
  st -= f;
  vec4 wx = bicubicWeights(f.x);
  vec4 wy = bicubicWeights(f.y);
  vec2 s0 = vec2(wx.x + wx.y, wy.x + wy.y);
  vec2 s1 = vec2(wx.z + wx.w, wy.z + wy.w);
  vec2 o0 = vec2(wx.y, wy.y) / s0 - 1.0;
  vec2 o1 = vec2(wx.w, wy.w) / s1 + 1.0;
  vec2 p0 = (st + 0.5) / n;
  return (textureLod(tex, p0 + vec2(o0.x, o0.y) / n, 0.0) * s0.x + textureLod(tex, p0 + vec2(o1.x, o0.y) / n, 0.0) * s1.x) * s0.y
       + (textureLod(tex, p0 + vec2(o0.x, o1.y) / n, 0.0) * s0.x + textureLod(tex, p0 + vec2(o1.x, o1.y) / n, 0.0) * s1.x) * s1.y;
}
// Cubic while magnifying, the mip chain once minifying (it already averages).
vec4 textureSmooth(sampler2D tex, vec2 uv, float n, float lod) {
  return lod > 0.25 ? textureLod(tex, uv, lod) : textureBicubic(tex, uv, n);
}
`;

/** Full-screen triangle for GPGPU passes (FullScreenQuad's geometry). */
export const FULLSCREEN_VERT = /* glsl */ `
void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`;
