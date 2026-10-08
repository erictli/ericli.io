// 3D course scene: self-drawn basemap, extruded buildings along the course, bridge decks at
// their modeled height (to scale), the field of runners animated along the course, a chase
// camera that rides the course, and HTML labels with collision culling.
//
// Geography: the ground is a flat plane at z = 0. The route sits on the street; on bridges
// it rises to the modeled deck height above the water or ground. Building heights are roof
// heights from NYC Building Footprints. Everything is drawn at true scale (no exaggeration);
// the street-level elevation profile is shown in the 2D strip instead.
//
// Every colour comes from the story's CSS tokens (app/writing/nyc-marathon/marathon.css), read
// in readTheme(); destroy() stops the frame loop, finalizes deck.gl, releases the WebGL context
// and removes the DOM the scene added.
import {
  Deck, MapView, FlyToInterpolator, WebMercatorViewport,
  LightingEffect, AmbientLight, DirectionalLight,
} from "@deck.gl/core";
import { GeoJsonLayer, PathLayer, ScatterplotLayer, SolidPolygonLayer } from "@deck.gl/layers";
import { cssColor, isDark, reducedMotion } from "@/lib/stories/client";

const MPP0 = 78271.517; // metres per pixel at zoom 0 (512px tiles) at the equator
const MLAT = 110540, MLON = 111320 * Math.cos((40.72 * Math.PI) / 180);

// Approximate outline of Central Park (corners at 59th/110th St on Fifth Ave and CPW)
export const CENTRAL_PARK = [[-73.97297, 40.76462], [-73.98154, 40.76804], [-73.95816, 40.8004], [-73.94929, 40.79689]];

// Pace colours, faster → slower: traffic-light order, green → yellow → orange → red, with stops
// at a mile's pace relative to the runner's own average (−8%, even, +5%, +10%), interpolated in
// OKLCH and clamped beyond the ends. The ends differ in lightness so colour-blind readers can
// tell them apart (validate_palette.js on the ends: light CVD ΔE 9.4 on #F0EFEB, dark 9.8 on
// #17191D). The colours themselves are the --marathon-pace-* tokens, light and dark.
const PACE_STOPS = [[-0.08, "--marathon-pace-fast"], [0, "--marathon-pace-even"], [0.05, "--marathon-pace-slower"], [0.1, "--marathon-pace-slow"]];

// sRGB [0–255] ↔ OKLCH, for interpolating pace colours along the hue circle
const toLin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const toSrgb = (c) => Math.round(255 * Math.min(1, Math.max(0, c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)));
function oklch([R, G, B]) {
  const r = toLin(R), g = toLin(G), b = toLin(B);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const Bb = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return [L, Math.hypot(A, Bb), Math.atan2(Bb, A)];
}
function fromOklch([L, C, H]) {
  const A = C * Math.cos(H), Bb = C * Math.sin(H);
  const l = (L + 0.3963377774 * A + 0.2158037573 * Bb) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * Bb) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * Bb) ** 3;
  return [
    toSrgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    toSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    toSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}
/** a → b at t in OKLCH, taking the short way round the hue circle */
function mixOklch(a, b, t) {
  const p = oklch(a), q = oklch(b);
  let dh = q[2] - p[2];
  if (dh > Math.PI) dh -= 2 * Math.PI;
  if (dh < -Math.PI) dh += 2 * Math.PI;
  return fromOklch([p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t, p[2] + dh * t]);
}

const mix = (a, b, t) => [0, 1, 2].map((j) => Math.round(a[j] + (b[j] - a[j]) * t));
/** Critically damped smoothing toward a moving target (as in Unity's SmoothDamp). */
function smoothDamp(cur, target, vel, smoothTime, dt) {
  const omega = 2 / smoothTime, x = omega * dt;
  const ex = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = cur - target, temp = (vel + omega * change) * dt;
  return [target + (change + temp) * ex, (vel - omega * temp) * ex];
}
/** How long a clock transition between steps takes: 0.4 s, up to 1.2 s for a long jump. */
export const clockTransitionMs = (gapS) => Math.round(Math.min(1200, Math.max(400, 400 + (Math.abs(gapS) / 3600) * 300)));
// camera smoothing times (s): the follow camera on the race clock, and the handoff's path
// (how closely the camera tracks the scroll position along it)
const FOLLOW_SMOOTH = 0.55, PATH_SMOOTH = 0.2;
const easeInOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

const GRID = 0.0015; // ~125 m cells for the footprint grid
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export class CourseScene {
  constructor(container, { course, runners, basemap, onFrame }) {
    this.el = container;
    this.course = course;
    this.runners = runners; // {n, K, start, times, group, cpm}
    this.basemap = basemap;
    this.onFrame = onFrame;
    this.clock = 0;
    this.mode = "overview"; // "overview" | "chase" | "field"
    this.showRunners = false;
    this.runnerAlpha = 0;
    this.labelSets = new Set();
    this.showTracked = false;
    this.trackedOnly = null; // Set of tracked keys to show (null: all)
    this.holdAtFinish = null; // Set of tracked keys whose dot stays at the finish line once they finish
    this.fadeA = new Map(); // building index → opacity, for the few towers faded in a flythrough step
    this._fadeTarget = new Set();
    this._fadeSet = 0; // bumps when a building joins or leaves the faded set
    this._fadeFrame = 0;
    this.buildings = null;
    this.chaseD = 0;
    this.chaseTarget = 0;
    this._prepCourse();
    if (runners) this._prepRunners();

    const canvasWrap = document.createElement("div");
    canvasWrap.className = "m-canvas";
    container.appendChild(canvasWrap);
    this.canvasWrap = canvasWrap;
    this.labelLayer = document.createElement("div");
    this.labelLayer.className = "m-labels";
    this.labelLayer.setAttribute("aria-hidden", "true");
    container.appendChild(this.labelLayer);
    this.panels = []; // elements over the map that labels keep clear of (the caption card)

    this.viewState = { longitude: -73.97, latitude: 40.71, zoom: 10.5, pitch: 40, bearing: -20, maxPitch: 75 };
    this.deck = new Deck({
      parent: canvasWrap,
      views: new MapView({ repeat: false, farZMultiplier: 4, nearZMultiplier: 0.05 }),
      viewState: this.viewState,
      controller: false,
      touchAction: "pan-y",
      useDevicePixels: Math.min(window.devicePixelRatio || 1, 2),
      onAfterRender: () => { this._placeLabels(); this.onAfterRender?.(); },
      getTooltip: null,
      layers: [],
    });
    const canvas = canvasWrap.querySelector("canvas");
    if (canvas) {
      canvas.setAttribute("role", "img");
      canvas.setAttribute("aria-label", "3D map of the New York City Marathon course through the five boroughs, with buildings along the route and runners shown as moving dots.");
    }
    this.readTheme();
    this._loop = this._loop.bind(this);
    this._last = performance.now();
    this._raf = requestAnimationFrame(this._loop);
    this._onResize = () => {
      if (this.mode === "chase") this._setView(this.chaseView(this.chaseD));
      else if (this.path) { this._pathFrom = null; this._buildPath(); this._pathDirty = true; }
      else if (this.follow) { const v = this.followView(); if (v) this.flyTo(v, { instant: true }); }
      else if (this._lastCam) this.flyTo(this._lastCam, { instant: true });
    };
    addEventListener("resize", this._onResize);
  }

  /** Stop drawing and give everything back: the frame loop, the resize listener, deck.gl and
   *  its WebGL context, and the canvas and label layer added to the container. */
  destroy() {
    if (this._dead) return;
    this._dead = true;
    cancelAnimationFrame(this._raf);
    removeEventListener("resize", this._onResize);
    this.onFrame = this.onHover = this.onAfterRender = null;
    const device = this.deck?.device;
    this.deck?.finalize();
    this.deck = null;
    // finalize() leaves the context alive until garbage collection; browsers cap live contexts
    device?.loseDevice?.();
    this.canvasWrap.remove();
    this.labelLayer.remove();
  }

  // ----------------------------------------------------------------- data prep
  _prepCourse() {
    const { pts, ground_m: ground, bridges, step_m: step } = this.course;
    const n = pts.length;
    this.np = n;
    this.step = step;
    this.lon = new Float64Array(n);
    this.lat = new Float64Array(n);
    this.z = new Float32Array(n); // modeled elevation above sea level (m)
    this.h = new Float32Array(n); // height above the local ground/water: bridge decks only
    for (let i = 0; i < n; i++) {
      this.lon[i] = pts[i][0];
      this.lat[i] = pts[i][1];
      this.z[i] = pts[i][2];
      const d = i * step;
      const onBridge = bridges.some((b) => d >= b.from_m && d <= b.to_m);
      this.h[i] = onBridge ? Math.max(0, pts[i][2] - Math.max(0, ground[i])) : 0;
    }
    // unit normals (degrees per metre) for lateral spread of runners
    this.nx = new Float64Array(n);
    this.ny = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      const a = Math.max(0, i - 2), b = Math.min(n - 1, i + 2);
      const dx = (this.lon[b] - this.lon[a]) * MLON, dy = (this.lat[b] - this.lat[a]) * MLAT;
      const L = Math.hypot(dx, dy) || 1;
      this.nx[i] = (-dy / L) / MLON;
      this.ny[i] = (dx / L) / MLAT;
    }
    this._bridgeGeometry();
    // how sharply the course turns at each point (0 straight – 1 a right-angle corner), eased
    // over ±300 m: the chase camera also looks down more steeply through corners, where the
    // view down the street would otherwise cut across the corner buildings
    const turnRaw = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let db = this.heading(i * step + 200, 150, 150) - this.heading(i * step - 200, 150, 150);
      while (db > 180) db -= 360;
      while (db < -180) db += 360;
      turnRaw[i] = smooth(15, 75, Math.abs(db));
    }
    this.turn = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let m = 0;
      for (let j = Math.max(0, i - 6); j <= Math.min(n - 1, i + 6); j++) m = Math.max(m, turnRaw[j] * (1 - Math.abs(j - i) / 7));
      this.turn[i] = m;
    }
  }

  /** position on the course at distance d (m): [lon, lat, h] */
  at(d, off = 0) {
    const f = Math.max(0, Math.min(this.np - 1.001, d / this.step));
    const k = Math.floor(f), u = f - k;
    const lon = this.lon[k] + (this.lon[k + 1] - this.lon[k]) * u + this.nx[k] * off;
    const lat = this.lat[k] + (this.lat[k + 1] - this.lat[k]) * u + this.ny[k] * off;
    return [lon, lat, this.h[k] + (this.h[k + 1] - this.h[k]) * u];
  }

  /** compass bearing of travel at d, from a window around it (smooths turns) */
  heading(d, back = 300, ahead = 400) {
    const a = this.at(d - back), b = this.at(d + ahead);
    return (Math.atan2((b[0] - a[0]) * MLON, (b[1] - a[1]) * MLAT) * 180) / Math.PI;
  }

  _bridgeGeometry() {
    const step = this.step;
    // deck fascia: vertical 3.5 m band under the deck wherever the course is elevated
    this.fascia = [];
    for (let i = 0; i < this.np - 1; i++) {
      if (this.h[i] < 1 && this.h[i + 1] < 1) continue;
      this.fascia.push([
        [this.lon[i], this.lat[i], Math.max(0, this.h[i] - 3.5)],
        [this.lon[i + 1], this.lat[i + 1], Math.max(0, this.h[i + 1] - 3.5)],
        [this.lon[i + 1], this.lat[i + 1], this.h[i + 1]],
        [this.lon[i], this.lat[i], this.h[i]],
      ]);
    }
    this.decks = [];
    let cur = null;
    for (let i = 0; i < this.np; i++) {
      if (this.h[i] >= 1) {
        cur ??= [];
        cur.push([this.lon[i], this.lat[i], this.h[i] + 0.2]);
      } else if (cur) { this.decks.push(cur); cur = null; }
    }
    if (cur) this.decks.push(cur);
    // Verrazzano-Narrows towers (693 ft = 211 m) and main cables, from published dimensions:
    // main span 1,298 m, side spans 370 m, crest at the course's modeled apex
    const vz = this.course.bridges.find((b) => b.short === "Verrazzano");
    this.towers = [];
    this.cables = [];
    if (vz) {
      const mid = vz.peak_at_m, half = 649, side = 370, top = 211;
      const deckAt = (d) => this.at(d)[2];
      for (const t of [mid - half, mid + half]) {
        for (const s of [-1, 1]) {
          const c = this.at(t, s * 17);
          const k = Math.floor(t / step);
          const ex = this.nx[k] * 6, ey = this.ny[k] * 6; // 12 m across the deck
          const tx = ((this.lon[k + 1] - this.lon[k]) / (Math.hypot((this.lon[k + 1] - this.lon[k]) * MLON, (this.lat[k + 1] - this.lat[k]) * MLAT) || 1)) * 5;
          const ty = ((this.lat[k + 1] - this.lat[k]) / (Math.hypot((this.lon[k + 1] - this.lon[k]) * MLON, (this.lat[k + 1] - this.lat[k]) * MLAT) || 1)) * 5;
          this.towers.push({ poly: [[c[0] - ex - tx, c[1] - ey - ty], [c[0] + ex - tx, c[1] + ey - ty], [c[0] + ex + tx, c[1] + ey + ty], [c[0] - ex + tx, c[1] - ey + ty]], h: top });
        }
      }
      for (const s of [-1, 1]) {
        const path = [];
        for (let d = mid - half - side; d <= mid + half + side; d += 25) {
          const x = d - mid;
          let zc;
          if (Math.abs(x) <= half) zc = deckAt(mid) + 4 + (top - deckAt(mid) - 4) * (x / half) ** 2;
          else zc = top - (top - deckAt(d) - 1) * ((Math.abs(x) - half) / side);
          const p = this.at(d, s * 17);
          path.push([p[0], p[1], zc]);
        }
        this.cables.push(path);
      }
    }
  }

  _prepRunners() {
    const R = this.runners;
    this.pos = new Float32Array(R.n * 3);
    this.col = new Uint8Array(R.n * 4);
    this.edge = new Uint8Array(R.n * 4); // hairline outline: a darker shade of each dot's colour
    this.seg = new Uint8Array(R.n); // cached checkpoint index per runner
    // deterministic per-runner lateral offset in [-1, 1] (hash of the row index): spreads
    // the field across the width of the road instead of a single-file thread
    this.lat01 = new Float32Array(R.n);
    for (let i = 0; i < R.n; i++) {
      let h = Math.imul(i + 1, 0x9e3779b1) ^ 0x5bd1e995;
      h = Math.imul(h ^ (h >>> 15), 0x2c1b3c6d);
      h ^= h >>> 12;
      this.lat01[i] = ((h >>> 0) / 4294967295) * 2 - 1;
    }
    this.hist = new Uint32Array(Math.ceil(42195 / 400) + 1); // field extent, 400 m bins
    this.counts = { waiting: 0, running: 0, finished: 0 };
  }

  /** binary footprints from buildings.bin (see pipeline/marathon/05_buildings.py) */
  setBuildings(meta, buf) {
    const n = meta.n;
    const counts = new Uint16Array(buf, 0, n);
    const heights = new Uint16Array(buf, 2 * n, n);
    const dist = new Uint8Array(buf, 4 * n, n);
    const q = new Int16Array(buf, 5 * n + meta.pad, meta.nv * 2);
    const pos = new Float64Array(meta.nv * 2);
    for (let i = 0; i < meta.nv; i++) {
      pos[2 * i] = meta.lon0 + q[2 * i] * meta.unit;
      pos[2 * i + 1] = meta.lat0 + q[2 * i + 1] * meta.unit;
    }
    const startIndices = new Uint32Array(n + 1);
    for (let i = 0; i < n; i++) startIndices[i + 1] = startIndices[i] + counts[i];
    // centroid and radius (m) of each footprint (for the per-step fades of blocking towers)
    const cx = new Float64Array(n), cy = new Float64Array(n), rad = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const a = startIndices[i], b = startIndices[i + 1] - 1; // ring is closed; skip the repeat
      let sx = 0, sy = 0;
      for (let v = a; v < b; v++) { sx += pos[2 * v]; sy += pos[2 * v + 1]; }
      cx[i] = sx / (b - a); cy[i] = sy / (b - a);
      let r = 0;
      for (let v = a; v < b; v++) r = Math.max(r, Math.hypot((pos[2 * v] - cx[i]) * MLON, (pos[2 * v + 1] - cy[i]) * MLAT));
      rad[i] = r;
    }
    const fade = new Float32Array(n).fill(1); // per-step opacity (1, or ~0.25 for a tower that blocks a step's view)
    this.buildings = {
      n, heights, dist, cx, cy, rad, fade,
      data: { length: n, startIndices, attributes: { getPolygon: { value: pos, size: 2 } } },
    };
    // a coarse grid of footprints, for line-of-sight checks
    const grid = new Map();
    for (let i = 0; i < n; i++) {
      const k = `${Math.floor(cx[i] / GRID)},${Math.floor(cy[i] / GRID)}`;
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(i);
    }
    this.buildings.grid = grid;
    this._canyonProfile();
    this._colorBuildings();
    this._dirty = true;
  }

  /** Fade a step's few blocking towers to 25% opacity over ~300 ms (and others back to full).
   *  Decided once per step; buildings never change shape. */
  setFaded(ids) {
    this._fadeTarget = new Set(ids);
    for (const i of ids) if (!this.fadeA.has(i)) { this.fadeA.set(i, 1); this._fadeSet++; }
    if (reducedMotion()) this._stepFades(1);
    this._dirty = true;
  }

  _stepFades(dt) {
    if (!this.fadeA.size) return false;
    let moved = false;
    for (const [i, a] of this.fadeA) {
      const to = this._fadeTarget.has(i) ? 0.25 : 1;
      if (a === to) continue;
      const na = a < to ? Math.min(to, a + dt * 2.5) : Math.max(to, a - dt * 2.5);
      moved = true;
      if (na >= 1 && !this._fadeTarget.has(i)) { this.fadeA.delete(i); this._fadeSet++; } else this.fadeA.set(i, na);
    }
    if (moved) this._fadeFrame++;
    return moved;
  }

  /** How walled-in the course is at each point (0 open – 1 a tall canyon), from the heights of
   *  the buildings lining it. The chase camera rises and looks down more steeply where it's
   *  high, so the street stays in view between the buildings without changing any of them. */
  _canyonProfile() {
    const B = this.buildings, n = this.np, near = new Float32Array(n);
    const cell = 0.0012, grid = new Map(); // ~100 m cells of course points
    const key = (x, y) => `${Math.floor(x / cell)},${Math.floor(y / cell)}`;
    for (let i = 0; i < n; i++) {
      const k = key(this.lon[i], this.lat[i]);
      if (!grid.has(k)) grid.set(k, []);
      grid.get(k).push(i);
    }
    for (let b = 0; b < B.n; b++) {
      if (B.dist[b] * 2 > 90) continue; // buildings that line the street or stand just behind it
      const gx = Math.floor(B.cx[b] / cell), gy = Math.floor(B.cy[b] / cell);
      let best = -1, bd = Infinity;
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
        for (const i of grid.get(`${gx + dx},${gy + dy}`) ?? []) {
          const dd = ((this.lon[i] - B.cx[b]) * MLON) ** 2 + ((this.lat[i] - B.cy[b]) * MLAT) ** 2;
          if (dd < bd) { bd = dd; best = i; }
        }
      }
      if (best >= 0) near[best] = Math.max(near[best], B.heights[b] / 10);
    }
    // the tallest building within ±200 m ahead or behind, mapped 25–110 m → 0–1, then eased
    // over ±400 m so the camera changes gradually as the reader scrolls
    const raw = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let m = 0;
      for (let j = Math.max(0, i - 4); j <= Math.min(n - 1, i + 4); j++) m = Math.max(m, near[j]);
      raw[i] = smooth(25, 110, m);
    }
    const f = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let sum = 0, c = 0;
      for (let j = Math.max(0, i - 8); j <= Math.min(n - 1, i + 8); j++) { sum += raw[j]; c++; }
      f[i] = sum / c;
    }
    this.canyon = f;
  }

  _colorBuildings() {
    const B = this.buildings;
    if (!B) return;
    // dark mode: lift the building tone off the near-black ground so the street canyon reads
    const base = this.dark ? mix(this.c.building, this.c.ink, 0.18) : this.c.building, land = this.c.land;
    const mute = this.mode === "field" ? 0.6 : 0;
    const cols = new Array(B.n);
    for (let i = 0; i < B.n; i++) {
      // fade with distance from the route so the street canyon reads
      const f = Math.max(mute, smooth(110, 300, B.dist[i] * 2) * 0.8);
      cols[i] = [...mix(base, land, f), 255];
    }
    B.colors = cols;
    B.version = (B.version || 0) + 1;
  }

  readTheme() {
    const dark = isDark();
    this.dark = dark;
    const tok = (name) => cssColor(this.el, name);
    this.c = {
      water: tok("--marathon-water"),
      land: tok("--marathon-land"),
      edge: tok("--marathon-land-edge"),
      park: tok("--marathon-park"),
      building: tok("--marathon-building"),
      road: tok("--marathon-road"),
      roadEdge: tok("--marathon-road-edge"),
      ink: tok("--marathon-ink"),
      page: tok("--marathon-page"),
    };
    // pace vs. the runner's own average (see PACE_STOPS)
    this.paceStops = PACE_STOPS.map(([at, name]) => [at, tok(name)]);
    this.paceEnds = { fast: this.paceStops[0][1], mid: this.paceStops[1][1], slow: this.paceStops.at(-1)[1] };
    this.paceLUT = new Uint8Array(61 * 3);
    this.paceEdgeLUT = new Uint8Array(61 * 3); // a darker shade of each, for the dots' hairline outline
    for (let k = 0; k <= 60; k++) {
      const c = this.paceColor(1 + (k - 30) * 0.005);
      this.paceLUT.set(c.slice(0, 3), k * 3);
      const [L, C, H] = oklch(c);
      this.paceEdgeLUT.set(fromOklch([Math.max(0, L - 0.18), C, H]), k * 3);
    }
    // (the container's background is the --marathon-water token: bg-marathon-water on the page)
    // light from the south-west and above; a weaker fill from the north-east
    this.deck?.setProps({
      effects: [new LightingEffect({
        ambient: new AmbientLight({ color: [255, 255, 255], intensity: dark ? 0.55 : 0.75 }),
        key: new DirectionalLight({ color: [255, 250, 240], intensity: dark ? 0.75 : 0.95, direction: [1, 2, -3] }),
        fill: new DirectionalLight({ color: [235, 240, 255], intensity: dark ? 0.25 : 0.35, direction: [-2, -1, -1] }),
      })],
    });
    if (this.runners) this._colorRunners();
    this._colorBuildings();
    this._dirty = true;
  }

  _colorRunners() {
    // colours are set per frame from each runner's pace; partial alpha so overlaps build density
    const R = this.runners;
    for (let i = 0; i < R.n; i++) { this.col[i * 4 + 3] = this.dark ? 170 : 190; this.edge[i * 4 + 3] = this.dark ? 170 : 210; }
    this._colVersion = (this._colVersion || 0) + 1;
  }

  // ------------------------------------------------------------- runner state
  _updateRunners() {
    const R = this.runners;
    if (!R) return;
    const t = this.clock, K = R.K, cpm = R.cpm, step = this.step, np = this.np;
    const mpp = (MPP0 * Math.cos((40.72 * Math.PI) / 180)) / 2 ** this.viewState.zoom;
    // ±9 m: the road; at far zooms keep at least ±2.5 px so the field still reads as a band
    const half = Math.max(9, mpp * 2.5);
    const hist = this.hist;
    hist.fill(0);
    let waiting = 0, running = 0, finished = 0;
    const pos = this.pos, lon = this.lon, lat = this.lat, hh = this.h;
    const col = this.col, lut = this.paceLUT, edge = this.edge, elut = this.paceEdgeLUT;
    let minD = Infinity, maxD = -Infinity;
    for (let i = 0; i < R.n; i++) {
      const e = t - R.start[i];
      const o = i * K;
      if (e < 0 || e >= R.times[o + K - 1]) {
        if (e < 0) waiting++;
        else finished++;
        pos[i * 3] = 0; pos[i * 3 + 1] = 0; pos[i * 3 + 2] = -1e5; // park off-screen
        continue;
      }
      running++;
      let j = this.seg[i];
      while (j > 0 && e < R.times[o + j - 1]) j--;
      while (j < K - 1 && e >= R.times[o + j]) j++;
      this.seg[i] = j;
      const t0 = j === 0 ? 0 : R.times[o + j - 1];
      const t1 = R.times[o + j];
      const d0 = j === 0 ? 0 : cpm[j - 1];
      const d = d0 + ((e - t0) / Math.max(1, t1 - t0)) * (cpm[j] - d0);
      let f = d / step;
      let k = Math.floor(f);
      if (k >= np - 1) { k = np - 2; f = np - 1; }
      const u = f - k;
      hist[Math.min(hist.length - 1, Math.floor(d / 400))]++;
      // colour: this segment's pace relative to the runner's own average for the race
      const rel = ((t1 - t0) / Math.max(1, cpm[j] - d0)) / (R.times[o + K - 1] / 42195);
      const q = Math.max(0, Math.min(60, Math.round((rel - 1) / 0.005) + 30)) * 3;
      col[i * 4] = lut[q]; col[i * 4 + 1] = lut[q + 1]; col[i * 4 + 2] = lut[q + 2];
      edge[i * 4] = elut[q]; edge[i * 4 + 1] = elut[q + 1]; edge[i * 4 + 2] = elut[q + 2];
      const off = this.lat01[i] * half;
      pos[i * 3] = lon[k] + (lon[k + 1] - lon[k]) * u + this.nx[k] * off;
      pos[i * 3 + 1] = lat[k] + (lat[k + 1] - lat[k]) * u + this.ny[k] * off;
      pos[i * 3 + 2] = hh[k] + (hh[k + 1] - hh[k]) * u + 1.4;
      if (d < minD) minD = d;
      if (d > maxD) maxD = d;
    }
    this.counts = { waiting, running, finished };
    this.extent = running ? [minD, maxD] : null;
    this._posVersion = (this._posVersion || 0) + 1;
    this._colVersion = (this._colVersion || 0) + 1;
    this._updateTracked();
  }

  /** position of a runner given start, checkpoint times and the clock: [lon, lat, z, d, seg] */
  _posFor(start, times, t) {
    const R = this.runners, K = times.length, cpm = R.cpm;
    const e = t - start;
    if (e < 0 || e >= times[K - 1]) return null;
    let j = 0;
    while (j < K - 1 && e >= times[j]) j++;
    const t0 = j === 0 ? 0 : times[j - 1], d0 = j === 0 ? 0 : cpm[j - 1];
    const d = d0 + ((e - t0) / Math.max(1, times[j] - t0)) * (cpm[j] - d0);
    const p = this.at(d);
    return [p[0], p[1], p[2] + 2, d, j];
  }

  /** the tracked runners (winners, last finisher): {key, label, start, times} */
  setTracked(list) {
    this.tracked = list;
    this._dirty = true;
  }

  _updateTracked() {
    if (!this.tracked) return;
    for (const tr of this.tracked) {
      if (this.trackedOnly && !this.trackedOnly.has(tr.key)) { tr.now = null; continue; }
      tr.now = this._posFor(tr.start, tr.times, this.clock);
      // the last view holds the last finisher at the line once they cross it
      if (!tr.now && this.holdAtFinish?.has(tr.key) && this.clock >= tr.start + tr.times[tr.times.length - 1]) {
        const p = this.at(42195);
        tr.now = [p[0], p[1], p[2] + 2, 42195, tr.times.length - 1];
      }
    }
  }

  runnerPos(i) {
    if (!this.pos || i < 0 || this.runnerAlpha < 0.5) return null;
    const z = this.pos[i * 3 + 2];
    return z < -1000 ? null : [this.pos[i * 3], this.pos[i * 3 + 1], z];
  }

  /** race-clock time at which runner row i passes distance d */
  clockAt(i, d) {
    const R = this.runners, K = R.K, o = i * K;
    let j = 0;
    while (j < K - 1 && R.cpm[j] < d) j++;
    const d0 = j === 0 ? 0 : R.cpm[j - 1], t0 = j === 0 ? 0 : R.times[o + j - 1];
    const t1 = R.times[o + j], d1 = R.cpm[j];
    return R.start[i] + t0 + ((Math.min(d, d1) - d0) / Math.max(1, d1 - d0)) * (t1 - t0);
  }

  // ---------------------------------------------------------------- the clock
  /** The race clock is driven only by scrolling (and the flythrough's followed runner).
   *  Scrolling sets a target; the clock follows it with critically damped smoothing, so the
   *  dots move every frame instead of jumping with each scroll event. A transition (between
   *  steps, or when the followed runner changes) runs the clock across the gap over `ms`
   *  instead, a fast-forward or rewind; `instant` sets it outright (still frames, ?step=). */
  setClock(t, { transition = 0, instant = false } = {}) {
    this.clockTarget = t;
    if (instant || reducedMotion()) {
      this.clock = t;
      this._clockV = 0;
      this._clockBlend = null;
    } else if (transition > 0 && Math.abs(t - this.clock) > 1) {
      this._clockBlend = { from: this.clock, t0: null, ms: transition };
      this._clockV = 0;
    }
    this._dirty = true;
  }

  /** run the clock to its (possibly moving) target over ms */
  blendClock(ms) {
    if (reducedMotion()) return;
    this._clockBlend = { from: this.clock, t0: null, ms };
    this._clockV = 0;
  }

  _stepClock(now, dt) {
    const target = this.clockTarget ?? this.clock;
    if (this._clockBlend) {
      const b = this._clockBlend;
      b.t0 ??= now - 16; // starts on the next frame
      const p = Math.min(1, (now - b.t0) / b.ms);
      this.clock = b.from + (target - b.from) * easeInOut(p);
      if (p >= 1) this._clockBlend = null;
      return true;
    }
    if (this.clock === target) return false;
    // in the flythrough the clock is tied to the (already smoothed) camera position
    if (this.mode === "chase" || Math.abs(target - this.clock) < 0.5 && Math.abs(this._clockV ?? 0) < 1) {
      this.clock = target;
      this._clockV = 0;
      return true;
    }
    [this.clock, this._clockV] = smoothDamp(this.clock, target, this._clockV ?? 0, 0.15, dt);
    return true;
  }

  _loop(now) {
    if (this._dead) return;
    const dt = Math.max(0, Math.min(0.1, (now - this._last) / 1000)); // (never negative: smoothing would blow up)
    this._last = now;
    let changed = this._dirty;
    this._dirty = false;
    if (this._stepChase(dt)) changed = true; // (sets the clock's target in the flythrough)
    if (this._stepClock(now, dt)) changed = true;
    const target = this.showRunners ? 1 : 0;
    if (this.runnerAlpha !== target) {
      const d = reducedMotion() ? 1 : dt * 2.5;
      this.runnerAlpha = target > this.runnerAlpha ? Math.min(1, this.runnerAlpha + d) : Math.max(0, this.runnerAlpha - d);
      changed = true;
    }
    if (this._stepFades(dt)) changed = true;
    if (this._stepCamera(now)) changed = true;
    if (this._stepPath(dt)) changed = true;
    if (this._stepFollow(now, dt)) changed = true;
    if (changed || this._viewChanged) {
      if (this.runnerAlpha > 0 && this.runners) this._updateRunners();
      this.render();
      this.onFrame?.(this);
      this._viewChanged = false;
    }
    if (!this._dead) this._raf = requestAnimationFrame(this._loop);
  }

  // ---------------------------------------------------------------- the camera
  /** cam: {fit:[fromM,toM] | pts:[[lon,lat],…], pitch, bearing, fill?, mobile?: overrides}
   *  The subject is fitted into the right ~60% of the viewport on desktop and the top ~55%
   *  on narrower screens (where the step cards sit at the bottom). */
  computeView(cam) {
    const w = this.el.clientWidth || innerWidth, h = this.el.clientHeight || innerHeight;
    const mobile = innerWidth < 900; // the page layout, not the scene's own width
    const c = mobile && cam.mobile ? { ...cam, ...cam.mobile } : cam;
    const fill = c.fill ?? 0.9;
    // nothing sits over the top of the map (the live panels are in the caption card), so the
    // subject keeps 140 px clear of the top edge (the site menu's corner and some sky)
    const top = 140;
    // regions the subject may fill; with a caption at the bottom left (desktop), try the
    // full height to its right and the full width above it, and keep whichever frames larger
    const regions = [];
    const cap = this.captionBox?.();
    if (c.full) regions.push({ x0: 24, x1: w - 24, y0: 24, y1: h - 24 }); // no panels or cards (still frames)
    else if (mobile) regions.push({ x0: 12, x1: w - 12, y0: 112, y1: h * 0.56 });
    else if (cap) {
      regions.push({ x0: cap[2] + 32, x1: w - 36, y0: top, y1: h - 40 });
      if (cap[1] - 24 - top > h * 0.35) regions.push({ x0: 36, x1: w - 36, y0: top, y1: cap[1] - 24 });
    } else regions.push({ x0: Math.max(w * 0.4, 470), x1: w - 36, y0: top, y1: h - 56 });
    const P = [];
    if (c.fit) {
      const i0 = Math.max(0, Math.round(c.fit[0] / this.step)), i1 = Math.min(this.np - 1, Math.round(c.fit[1] / this.step));
      const st = Math.max(1, Math.floor((i1 - i0) / 80));
      for (let i = i0; i <= i1; i += st) P.push([this.lon[i], this.lat[i], this.h[i]], [this.lon[i], this.lat[i], 0]);
    }
    for (const p of c.pts || []) P.push([p[0], p[1], 0]);
    let lng0 = 0, lat0 = 0, mnx = Infinity, mxx = -Infinity, mny = Infinity, mxy = -Infinity;
    for (const p of P) {
      lng0 += p[0]; lat0 += p[1];
      mnx = Math.min(mnx, p[0]); mxx = Math.max(mxx, p[0]); mny = Math.min(mny, p[1]); mxy = Math.max(mxy, p[1]);
    }
    lng0 /= P.length; lat0 /= P.length;
    const spanM = Math.max((mxx - mnx) * MLON, (mxy - mny) * MLAT, 300);
    const safeUnproject = (vp, xy) => {
      try {
        const u = vp.unproject(xy);
        return Number.isFinite(u[0]) && Number.isFinite(u[1]) ? u : null;
      } catch { return null; }
    };
    const base = { pitch: c.pitch, bearing: c.bearing };
    const fitIn = (region) => {
      const rw = (region.x1 - region.x0) * fill, rh = (region.y1 - region.y0) * fill;
      const tx = (region.x0 + region.x1) / 2, ty = (region.y0 + region.y1) / 2;
      let lng = lng0, lat = lat0;
      let zoom = Math.log2((MPP0 * Math.cos((lat * Math.PI) / 180) * Math.min(rw, rh)) / spanM);
      for (let k = 0; k < 12; k++) {
        const vp = new WebMercatorViewport({ width: w, height: h, longitude: lng, latitude: lat, zoom, ...base });
        let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
        for (const p of P) {
          const [x, y, zc] = vp.project(p);
          if (!(zc < 1)) continue;
          if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
        }
        const sc = Math.min(rw / Math.max(1, x1 - x0), rh / Math.max(1, y1 - y0));
        const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
        let f = 1, u = null;
        while (!u && f > 0.03) {
          u = safeUnproject(vp, [w / 2 + (cx - tx) * f, h / 2 + (cy - ty) * f]);
          f *= 0.5;
        }
        if (u) { lng = u[0]; lat = u[1]; }
        if (Number.isFinite(sc) && sc > 0) zoom = Math.min(16.5, zoom + Math.log2(sc) * (k < 8 ? 0.85 : 1));
      }
      return { lng, lat, zoom };
    };
    const best = regions.map(fitIn).reduce((a, b) => (b.zoom > a.zoom ? b : a));
    const { lng, lat, zoom } = best;
    return { longitude: lng, latitude: lat, zoom, pitch: c.pitch, bearing: c.bearing, maxPitch: 75 };
  }

  /** Chase camera: behind and above the course at distance d, looking along the route. */
  chaseView(d) {
    const w = this.el.clientWidth || innerWidth, h = this.el.clientHeight || innerHeight;
    const mobile = innerWidth < 900;
    const p = this.at(d);
    const bearing = this.chaseBearing ?? this.heading(d);
    // in a canyon of tall buildings the camera rises and looks down more steeply
    // (and through sharp corners)
    const ci = Math.max(0, Math.min(this.np - 1, Math.round(d / this.step)));
    const f = this.canyon ? this.canyon[ci] : 0, g = this.turn[ci];
    const zoom = (mobile ? 15.35 : 15.85) + Math.log2(Math.min(w, 1440) / (mobile ? 400 : 1280)) * 0.5 + (this.chaseZoomAdd ?? 0) - 0.4 * f - 0.15 * g;
    const pitch = (mobile ? 60 : 62) - Math.max(24 * f, 14 * g) - 6 * f * g;
    const vs = { longitude: p[0], latitude: p[1], zoom, pitch, bearing, position: [0, 0, p[2]] };
    // place the current position at the focal point of the free screen area
    // keep the route on the screen's vertical centre line so the camera looks straight down
    // the street (an off-axis view looks over one side's buildings and hides the street)
    const pos = mobile ? [w * 0.5, h * 0.42] : [w * 0.5, h * 0.62];
    const vp = new WebMercatorViewport({ width: w, height: h, ...vs });
    const [px, py] = vp.project([p[0], p[1], 0]);
    try {
      const u = vp.unproject([w / 2 + (px - pos[0]), h / 2 + (py - pos[1])]);
      if (Number.isFinite(u[0])) { vs.longitude = u[0]; vs.latitude = u[1]; }
    } catch { /* keep centred */ }
    return { ...vs, maxPitch: 75 };
  }

  /** For checking camera choices: the buildings that rise above the line of sight from the
   *  settled chase camera at d to the course at d + ahead (metres). Nothing is changed. */
  sightBlockers(d, ahead = [0, 100], lag = 0) {
    const B = this.buildings;
    if (!B) return [];
    const w = this.el.clientWidth || innerWidth, h = this.el.clientHeight || innerHeight;
    const keep = this.chaseBearing;
    this.chaseBearing = this.heading(d - lag); // lag: the camera's bearing trails a turn while scrolling
    const vs = this.chaseView(d);
    this.chaseBearing = keep;
    const vp = new WebMercatorViewport({ width: w, height: h, ...vs });
    let cam;
    try { cam = vp.unprojectPosition(vp.cameraPosition); } catch { return []; }
    const hit = new Set();
    for (const a of ahead) {
      const T = this.at(d + a);
      const Cx = (cam[0] - T[0]) * MLON, Cy = (cam[1] - T[1]) * MLAT, Cz = cam[2] + (vs.position?.[2] ?? 0);
      const L2 = Cx * Cx + Cy * Cy, L = Math.sqrt(L2);
      const pad = 0.0008;
      const gx0 = Math.floor((Math.min(cam[0], T[0]) - pad) / GRID), gx1 = Math.floor((Math.max(cam[0], T[0]) + pad) / GRID);
      const gy0 = Math.floor((Math.min(cam[1], T[1]) - pad) / GRID), gy1 = Math.floor((Math.max(cam[1], T[1]) + pad) / GRID);
      for (let gx = gx0; gx <= gx1; gx++) for (let gy = gy0; gy <= gy1; gy++) {
        for (const i of B.grid.get(`${gx},${gy}`) ?? []) {
          const bx = (B.cx[i] - T[0]) * MLON, by = (B.cy[i] - T[1]) * MLAT;
          const t = (bx * Cx + by * Cy) / L2;
          if (t < 0.02 || t > 0.98) continue;
          if (Math.abs(bx * Cy - by * Cx) / L > B.rad[i] * 0.8) continue;
          if (B.heights[i] / 10 > T[2] + (Cz - T[2]) * t + 1) hit.add(i);
        }
      }
    }
    return [...hit];
  }

  /** Enter or update chase mode: d is the target course distance. */
  setChase(d, { jump = false } = {}) {
    this.chaseTarget = d;
    if (this.mode !== "chase") {
      this.mode = "chase";
      this.follow = null;
      this.chaseD = d;
      this._chaseV = 0;
      this.chaseBearing = this.heading(d);
      // coming from another step, run the clock to the followed runner's time instead of jumping
      const from = this.clock;
      this._pacerClock();
      if (!jump && Math.abs(this.clockTarget - from) > 1) { this.clock = from; this._clockBlend = { from, t0: null, ms: clockTransitionMs(this.clockTarget - from) }; }
      this._colorBuildings();
      this.flyTo(this.chaseView(d), { ms: jump ? 0 : 2000, instant: jump });
      return;
    }
    if (jump || reducedMotion()) {
      this.chaseD = d;
      this.chaseBearing = this.heading(d);
      this._pacerClock();
      this._camTween = null;
      this._setView(this.chaseView(d));
      this._dirty = true;
    }
  }

  /** In the chase view the race clock follows a runner who finished in the median time. */
  _pacerClock() {
    if (this.pacer == null || !this.runners) return;
    this.clockTarget = this.clockAt(this.pacer, this.chaseD);
    if (!this._clockBlend) this.clock = this.clockTarget;
  }

  setMode(mode) {
    if (this.mode === mode) return;
    this.mode = mode;
    this._colorBuildings();
    this._dirty = true;
  }

  _stepChase(dt) {
    if (this.mode !== "chase" || this._camTween) return false;
    const dd = this.chaseTarget - this.chaseD;
    const hd = this.heading(this.chaseD);
    let db = hd - (this.chaseBearing ?? hd);
    while (db > 180) db -= 360;
    while (db < -180) db += 360;
    if (Math.abs(dd) < 0.3 && Math.abs(db) < 0.05 && Math.abs(this._chaseV ?? 0) < 0.5) return false;
    if (reducedMotion()) { this.chaseD = this.chaseTarget; this._chaseV = 0; }
    else [this.chaseD, this._chaseV] = smoothDamp(this.chaseD, this.chaseTarget, this._chaseV ?? 0, 0.16, dt);
    this.chaseBearing = (this.chaseBearing ?? hd) + db * (reducedMotion() ? 1 : 1 - Math.exp(-dt * 2.5));
    this._pacerClock();
    this._setView(this.chaseView(this.chaseD));
    return true;
  }

  flyTo(cam, { instant = false, ms } = {}) {
    this._lastCam = cam;
    const target = cam.longitude != null ? { ...cam } : this.computeView(cam);
    this._followTarget = null;
    let db = target.bearing - this.viewState.bearing;
    while (db > 180) db -= 360;
    while (db < -180) db += 360;
    target.bearing = this.viewState.bearing + db;
    if (instant || reducedMotion() || ms === 0) {
      this._camTween = null;
      this._setView(target);
      this.labelLayer.classList.remove("moving");
      return;
    }
    const w = this.el.clientWidth || innerWidth, h = this.el.clientHeight || innerHeight;
    const from = { ...this.viewState, width: w, height: h };
    const to = { ...target, width: w, height: h };
    const dM = Math.hypot((to.longitude - from.longitude) * MLON, (to.latitude - from.latitude) * MLAT);
    const mppMax = (MPP0 * Math.cos((40.72 * Math.PI) / 180)) / 2 ** Math.min(from.zoom, to.zoom);
    const linear = dM / mppMax < Math.max(w, h) * 1.2;
    const dur = ms ?? Math.min(3000, 1500 + (linear ? dM / mppMax : 1500) * 0.6 + Math.abs(db) * 3);
    this._camTween = { from, to, t0: null, ms: dur, linear, interp: new FlyToInterpolator({ curve: 1.2 }) };
    this._followVel = { lon: 0, lat: 0, z: 0 };
    this.labelLayer.classList.add("moving");
  }

  _setView(vs) {
    const pos = vs.position ?? [0, 0, 0];
    this.viewState = { longitude: vs.longitude, latitude: vs.latitude, zoom: vs.zoom, pitch: vs.pitch, bearing: vs.bearing, position: pos, maxPitch: 75 };
    this.deck?.setProps({ viewState: this.viewState });
    this._viewChanged = true;
  }

  _stepCamera(now) {
    const tw = this._camTween;
    if (!tw) return false;
    tw.t0 ??= now - 16; // starts on the next frame
    const p = Math.min(1, (now - tw.t0) / tw.ms);
    const e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    const L = (a, b) => a + (b - a) * e;
    const v = tw.linear
      ? { longitude: L(tw.from.longitude, tw.to.longitude), latitude: L(tw.from.latitude, tw.to.latitude), zoom: L(tw.from.zoom, tw.to.zoom) }
      : tw.interp.interpolateProps(tw.from, tw.to, e);
    const pz = L(tw.from.position?.[2] ?? 0, tw.to.position?.[2] ?? 0);
    this._setView({ ...v, pitch: L(tw.from.pitch, tw.to.pitch), bearing: L(tw.from.bearing, tw.to.bearing), position: [0, 0, pz] });
    if (p >= 1) {
      this._camTween = null;
      this.labelLayer.classList.remove("moving");
    }
    return true;
  }

  get settled() { return !this._camTween && !this._clockBlend && this.clock === this.clockTarget && (!this.path || this.pathT === this.pathTarget); }

  /** Stretch of course [from, to] (m) holding the last n runners still on the course. */
  backExtent(nBack = 300) {
    const h = this.hist;
    let i0 = -1, acc = 0, i1 = -1;
    for (let i = 0; i < h.length; i++) {
      if (!h[i]) continue;
      if (i0 < 0) i0 = i;
      acc += h[i];
      if (acc >= nBack) { i1 = i; break; }
    }
    if (i0 < 0) return null;
    if (i1 < 0) for (let i = h.length - 1; i >= 0; i--) if (h[i]) { i1 = i; break; }
    return [i0 * 400, Math.min(42195, (i1 + 1) * 400)];
  }

  /** Stretch of course [from, to] (m) holding the middle 99% of runners now on the course. */
  fieldExtent(trim = 0.005) {
    const h = this.hist;
    let tot = 0;
    for (let i = 0; i < h.length; i++) tot += h[i];
    if (tot < 30) return null;
    let acc = 0, lo = 0, hi = h.length - 1;
    for (let i = 0; i < h.length; i++) { acc += h[i]; if (acc >= tot * trim) { lo = i; break; } }
    acc = 0;
    for (let i = h.length - 1; i >= 0; i--) { acc += h[i]; if (acc >= tot * trim) { hi = i; break; } }
    return [lo * 400, Math.min(42195, (hi + 1) * 400)];
  }

  /** Keep the camera on the field (used while the race clock is scrubbed). */
  setFollow(cam) {
    this.follow = cam;
    this._followT = 0;
    if (cam) this.setMode("field");
  }

  followView() {
    if (!this.follow || !this.runners) return null;
    if (!this.runnerAlpha) this._updateRunners();
    // what to keep in frame: by default the whole field; main.js can pass a narrower target
    // (the leaders, one runner, the back of the field)
    const ext = this.followExtent ? this.followExtent() : this.fieldExtent();
    if (!ext) return null;
    let [a, b] = ext;
    const minSpan = this.followMinSpan ?? 5000; // don't zoom in closer than this much course
    if (b - a < minSpan) { const c = (a + b) / 2; a = Math.max(0, c - minSpan / 2); b = Math.min(42195, a + minSpan); }
    return this.computeView({ ...this.follow, fit: [a, b], mobile: this.follow.mobile && { ...this.follow.mobile, fit: [a, b] } });
  }

  /** The handoff's camera move: one continuous path from one view to another, driven by
   *  scroll. It lifts off the first view, pans and settles on the second along a single van Wijk
   *  curve (deck's FlyToInterpolator: zoom out, pan, zoom in), with no waypoints. Scroll sets
   *  the position along it (setPathT); the position follows with critically damped smoothing,
   *  so scrolling back runs the same path in reverse and nothing here depends on a timer.
   *  NOTE: the race clock does not move during this. The handoff happens at a single moment,
   *  11:13 a.m., when the men's winner finished; the camera travels while the dots hold still.
   *  That is the intended state, not a stalled clock (main.js sets the step's clock range to
   *  that one time, and the panel shows it as a fixed time).
   *  views() returns [from, to]; it's called again on resize. `t` is where the path starts
   *  (0 entering from above, 1 from below). `fromHere` starts the path from wherever the camera
   *  is (entering from above, where the follow camera may still be on its way to `from`);
   *  otherwise the difference between the camera and the path fades out with the same
   *  smoothing, so entering never jumps. */
  setPath(views, { t = 0, fromHere = false } = {}) {
    this._pathViews = views;
    this._pathRelease = null;
    this._pathFrom = fromHere ? { ...this.viewState } : null;
    this._buildPath();
    this.pathT = this.pathTarget = t;
    this._pathV = 0;
    const s = this._pathView(t), v = this.viewState, cv = this._camVel ?? {};
    let db = v.bearing - s.bearing;
    while (db > 180) db -= 360;
    while (db < -180) db += 360;
    this._pathOff = { lon: v.longitude - s.longitude, lat: v.latitude - s.latitude, z: v.zoom - s.zoom, pitch: v.pitch - s.pitch, bearing: db };
    this._pathOffV = { lon: cv.lon ?? 0, lat: cv.lat ?? 0, z: cv.z ?? 0, pitch: 0, bearing: 0 };
    this.follow = null;
    this._followTarget = null;
    this._camTween = null;
    this.labelLayer.classList.remove("moving");
    this.setMode("field");
    this._pathDirty = true;
    this._dirty = true;
  }
  _buildPath() {
    const [v0, to] = this._pathViews();
    const from = this._pathFrom ?? v0;
    const w = this.el.clientWidth || innerWidth, h = this.el.clientHeight || innerHeight;
    this.path = { from: { ...from, width: w, height: h }, to: { ...to, width: w, height: h }, interp: new FlyToInterpolator({ curve: 1.414 }) };
  }
  _pathView(t) {
    const p = this.path;
    const v = t <= 0 ? p.from : t >= 1 ? p.to : p.interp.interpolateProps(p.from, p.to, t);
    return { longitude: v.longitude, latitude: v.latitude, zoom: v.zoom, pitch: p.from.pitch + (p.to.pitch - p.from.pitch) * t, bearing: p.from.bearing + (p.to.bearing - p.from.bearing) * t };
  }
  setPathT(t, { jump = false } = {}) {
    if (!this.path || this._pathRelease != null) return;
    this.pathTarget = Math.max(0, Math.min(1, t));
    if (jump || reducedMotion()) {
      this.pathT = this.pathTarget;
      this._pathV = 0;
      for (const k in this._pathOff) { this._pathOff[k] = 0; this._pathOffV[k] = 0; }
      this._pathDirty = true;
    }
    this._dirty = true;
  }
  /** Leave the path; the follow camera picks up the path's current velocity. */
  clearPath() {
    if (!this.path) return;
    this.path = null;
    this._pathRelease = null;
    this._followVel = { ...(this._camVel ?? { lon: 0, lat: 0, z: 0 }) };
  }
  /** Leave the path at one of its ends: after a fast scroll out of the step the camera finishes
   *  the move (to t = 0 or 1) before the follow camera takes over, instead of cutting across. */
  releasePath(endT) {
    if (!this.path) return;
    this.pathTarget = endT;
    this._pathRelease = endT;
    this._dirty = true;
  }
  _stepPath(dt) {
    if (!this.path || this._camTween) return false;
    const off = this._pathOff, offV = this._pathOffV;
    let moving = Math.abs(this.pathTarget - this.pathT) > 1e-5 || Math.abs(this._pathV) > 1e-4;
    for (const k in off) if (Math.abs(off[k]) > 1e-7 || Math.abs(offV[k]) > 1e-6) moving = true;
    if (this._pathRelease != null && Math.abs(this.pathT - this._pathRelease) < 0.01 && Math.abs(this._pathV) < 0.5) {
      this.clearPath(); // at the end: hand over (with the current velocity) to the follow camera
      return false;
    }
    if (!moving && !this._pathDirty) { this._camVel = { lon: 0, lat: 0, z: 0 }; return false; }
    this._pathDirty = false;
    [this.pathT, this._pathV] = smoothDamp(this.pathT, this.pathTarget, this._pathV, PATH_SMOOTH, dt);
    for (const k in off) [off[k], offV[k]] = smoothDamp(off[k], 0, offV[k], PATH_SMOOTH * 2, dt);
    const s = this._pathView(Math.max(0, Math.min(1, this.pathT))), v = this.viewState;
    const next = { longitude: s.longitude + off.lon, latitude: s.latitude + off.lat, zoom: s.zoom + off.z, pitch: s.pitch + off.pitch, bearing: s.bearing + off.bearing };
    if (dt > 0) this._camVel = { lon: (next.longitude - v.longitude) / dt, lat: (next.latitude - v.latitude) / dt, z: (next.zoom - v.zoom) / dt };
    this._setView(next);
    return true;
  }

  _stepFollow(now, dt) {
    if (!this.follow || this._camTween || this.path || this.mode !== "field") return false;
    if (now - this._followT > 250 || !this._followTarget) {
      this._followT = now;
      this._followTarget = this.followView();
    }
    const t = this._followTarget;
    if (!t) return false;
    const v = this.viewState, fv = (this._followVel ??= { lon: 0, lat: 0, z: 0 });
    const dz = t.zoom - v.zoom, dx = t.longitude - v.longitude, dy = t.latitude - v.latitude;
    if (Math.abs(dz) < 0.002 && Math.abs(dx) < 1e-6 && Math.abs(dy) < 1e-6 && Math.abs(fv.z) < 0.01 && Math.abs(fv.lon) + Math.abs(fv.lat) < 1e-5) return false;
    // critically damped, so the camera never starts or stops with a jolt: it picks up the
    // velocity it had (from the handoff's path) and eases toward a target that moves with the clock
    let lon = t.longitude, lat = t.latitude, z = t.zoom;
    if (reducedMotion()) { fv.lon = fv.lat = fv.z = 0; }
    else {
      [lon, fv.lon] = smoothDamp(v.longitude, t.longitude, fv.lon, FOLLOW_SMOOTH, dt);
      [lat, fv.lat] = smoothDamp(v.latitude, t.latitude, fv.lat, FOLLOW_SMOOTH, dt);
      [z, fv.z] = smoothDamp(v.zoom, t.zoom, fv.z, FOLLOW_SMOOTH, dt);
    }
    this._camVel = { ...fv };
    this._setView({ longitude: lon, latitude: lat, zoom: z, pitch: t.pitch, bearing: v.bearing });
    return true;
  }

  // ------------------------------------------------------------- layer config
  setLabels(sets) {
    this.labelSets = new Set(sets);
    this._labelsDirty = true;
    this._dirty = true;
    this.deck?.redraw?.(true);
  }

  paceColor(v) {
    if (v == null) return [...this.paceEnds.mid.slice(0, 3), 255];
    // continuous: between the two stops around this pace, clamped beyond the ends
    const S = this.paceStops, x = Math.max(S[0][0], Math.min(S.at(-1)[0], v - 1));
    let k = 0;
    while (k < S.length - 2 && x > S[k + 1][0]) k++;
    const t = (x - S[k][0]) / (S[k + 1][0] - S[k][0]);
    return [...mixOklch(S[k][1], S[k + 1][1], t), 255];
  }

  render() {
    if (!this.deck || this._dead) return;
    const c = this.c;
    const lon = this.lon, lat = this.lat, hh = this.h;
    const chase = this.mode === "chase";
    const layers = [
      new GeoJsonLayer({
        id: "land", data: this.basemap.region, filled: true, stroked: true,
        getFillColor: c.land, getLineColor: c.edge, lineWidthUnits: "pixels", getLineWidth: 0.8,
        material: false,
        updateTriggers: { getFillColor: this.dark, getLineColor: this.dark },
      }),
      new SolidPolygonLayer({
        id: "park", data: [CENTRAL_PARK], getPolygon: (d) => d, getFillColor: c.park, material: false,
        updateTriggers: { getFillColor: this.dark },
      }),
      new GeoJsonLayer({
        id: "boroughs", data: this.basemap.boroughs, filled: false, stroked: true,
        getLineColor: [...c.edge.slice(0, 3), 160], lineWidthUnits: "pixels", getLineWidth: 0.6,
        updateTriggers: { getLineColor: this.dark },
      }),
    ];
    // bridge decks at their modeled height, Verrazzano towers and cables
    const deckColor = [...c.road.slice(0, 3), 255]; // the same street tint as the road
    const fasciaColor = [...mix(c.building, c.ink, this.dark ? 0.15 : 0.25), 255];
    layers.push(
      new SolidPolygonLayer({
        id: "fascia", data: this.fascia, _full3d: true, getPolygon: (d) => d, getFillColor: fasciaColor,
        material: false, parameters: { cullMode: "none" }, updateTriggers: { getFillColor: this.dark },
      }),
      new PathLayer({
        id: "decks", data: this.decks, getPath: (d) => d, getColor: deckColor, widthUnits: "meters",
        getWidth: 26, widthMinPixels: 2, billboard: false, updateTriggers: { getColor: this.dark },
      }),
      new SolidPolygonLayer({
        id: "towers", data: this.towers, getPolygon: (d) => d.poly, extruded: true, getElevation: (d) => d.h,
        getFillColor: [...c.building.slice(0, 3), 255], material: { ambient: 0.5, diffuse: 0.6, shininess: 8, specularColor: [20, 20, 20] },
        updateTriggers: { getFillColor: this.dark },
      }),
      new PathLayer({
        id: "cables", data: this.cables, getPath: (d) => d, getColor: [...mix(c.land, c.ink, 0.45), 200],
        widthUnits: "pixels", getWidth: 1.2, updateTriggers: { getColor: this.dark },
      }),
    );
    if (this.buildings) {
      const B = this.buildings;
      // buildings never change shape; a faded tower is drawn by the "buildings-faded" layer
      // below instead of this one (here it is left out: transparent and flat)
      const F = this.fadeA;
      layers.push(new SolidPolygonLayer({
        id: "buildings", data: B.data, _normalize: false, _windingOrder: "CCW",
        extruded: true, wireframe: false,
        getElevation: (_, { index }) => (F.has(index) ? 0 : B.heights[index] / 10),
        getFillColor: (_, { index }) => (F.has(index) ? [0, 0, 0, 0] : B.colors[index]),
        material: { ambient: 0.55, diffuse: 0.6, shininess: 12, specularColor: [25, 25, 25] },
        updateTriggers: { getFillColor: [B.version, this._fadeSet], getElevation: this._fadeSet },
      }));
    }
    // the route on the street (and on the bridge decks)
    if (!this._roadPath) this._roadPath = Array.from(lon, (x, i) => [x, lat[i], hh[i] + 0.4]);
    const hover = (info) => this._hover(info.picked ? this._segOf(this._roadIndex(info)) : null, info);
    if (chase) {
      layers.push(new PathLayer({
        id: "road", data: [0], getPath: () => this._roadPath,
        // a pale street so on-pace runners stay visible on it
        getColor: [...mix(c.land, c.ink, 0.12), 255], widthUnits: "meters", getWidth: 16, widthMinPixels: 2, jointRounded: true,
        pickable: true, onHover: hover, updateTriggers: { getColor: this.dark },
      }));
    } else {
      // every other view: a road about as wide as the crowd of dots (±9 m, or ±2.5 px when far
      // out), in a street tint with a hairline edge, so empty stretches read as road and the
      // dots sit on it. Drawn over the buildings, as a map annotation.
      const mpp = (MPP0 * Math.cos((40.72 * Math.PI) / 180)) / 2 ** this.viewState.zoom;
      const wM = 22, minPx = this.bigDots ? 10 : 8;
      const common = { data: [0], getPath: () => this._roadPath, widthUnits: "meters", getWidth: 1, jointRounded: true, capRounded: true, parameters: { depthCompare: "always" } };
      layers.push(
        new PathLayer({ ...common, id: "road-edge", getColor: [...c.roadEdge.slice(0, 3), 255], widthScale: wM + 1.5 * mpp, widthMinPixels: minPx + 1.5, updateTriggers: { getColor: this.dark } }),
        new PathLayer({ ...common, id: "road", getColor: [...c.road.slice(0, 3), 255], widthScale: wM, widthMinPixels: minPx, pickable: true, onHover: hover, updateTriggers: { getColor: this.dark } }),
      );
    }
    if (this.runners && this.runnerAlpha > 0) {
      layers.push(new ScatterplotLayer({
        id: "runners",
        data: {
          length: this.runners.n,
          attributes: {
            getPosition: { value: this.pos, size: 3 },
            getFillColor: { value: this.col, size: 4, normalized: true },
            getLineColor: { value: this.edge, size: 4, normalized: true },
          },
        },
        // a hairline in a darker shade of each dot keeps pale (yellow) dots visible on pale land
        // (finer in the flythrough, where the dots are large and packed)
        stroked: true, lineWidthUnits: "pixels", getLineWidth: chase ? 0.4 : 0.6, lineWidthMinPixels: chase ? 0.4 : 0.6,
        // metres, so the crowd scales with perspective in the chase view; clamped in pixels
        radiusUnits: "meters", getRadius: chase ? 1.9 : 1.4,
        radiusMinPixels: this.bigDots ? 3 : innerWidth < 600 ? 1.5 : 1.7, radiusMaxPixels: chase ? 9 : 6,
        opacity: this.runnerAlpha, billboard: true, antialiasing: true,
        parameters: chase || this.depthDots ? {} : { depthCompare: "always" },
        updateTriggers: { getPosition: this._posVersion, getFillColor: this._colVersion, getLineColor: this._colVersion },
      }));
    }
    if (chase && this.pacer != null && this.runners && this.runnerAlpha > 0) {
      // the followed runner: a ringed dot, and a trail behind them coloured by their pace in
      // each recent segment
      const R = this.runners, K = R.K, o = this.pacer * K;
      // the followed runner sits where the camera is (so it stays put while the crowd
      // fast-forwards after a change of finish time)
      let jd = 0;
      while (jd < K - 1 && R.cpm[jd] < this.chaseD) jd++;
      const pq = this.at(this.chaseD);
      const pz = [pq[0], pq[1], pq[2] + 2, this.chaseD, jd];
      {
        const dNow = pz[3], trail = [];
        const avg = R.times[o + K - 1] / 42195;
        for (let j = 0; j < K; j++) {
          const a = j ? R.cpm[j - 1] : 0, b = Math.min(R.cpm[j], dNow);
          if (b <= a || b < dNow - 2400) continue;
          const from = Math.max(a, dNow - 2400);
          const rel = ((R.times[o + j] - (j ? R.times[o + j - 1] : 0)) / (R.cpm[j] - a)) / avg;
          const path = [];
          for (let dd = from; dd < b; dd += 25) { const q = this.at(dd); path.push([q[0], q[1], q[2] + 0.8]); }
          const q = this.at(b); path.push([q[0], q[1], q[2] + 0.8]);
          if (path.length > 1) trail.push({ path, color: this.paceColor(rel) });
        }
        layers.push(new PathLayer({
          id: "pacer-trail", data: trail, getPath: (d) => d.path, getColor: (d) => d.color,
          widthUnits: "meters", getWidth: 7, widthMinPixels: 3, capRounded: true, jointRounded: true,
          updateTriggers: { getPath: this._posVersion, getColor: this._posVersion },
        }));
        const jn = pz[4], tj0 = jn ? R.times[o + jn - 1] : 0, dj0 = jn ? R.cpm[jn - 1] : 0;
        this.pacerRel = ((R.times[o + jn] - tj0) / (R.cpm[jn] - dj0)) / avg;
        this.pacerSeg = jn;
        const pc = this.paceColor(this.pacerRel);
        layers.push(new ScatterplotLayer({
          id: "pacer", data: [pz], getPosition: (p) => [p[0], p[1], p[2] + 0.5],
          radiusUnits: "pixels", getRadius: 8, stroked: true, lineWidthUnits: "pixels", getLineWidth: 2.5,
          getFillColor: pc, getLineColor: [...c.ink.slice(0, 3), 255],
          parameters: { depthCompare: "always" },
          updateTriggers: { getPosition: this._posVersion, getFillColor: this._posVersion, getLineColor: this.dark },
        }));
      }
    }
    if (this.buildings && this.fadeA.size) {
      // the faded towers, over the street and the runners, without hiding what's behind them
      const B = this.buildings, pos = B.data.attributes.getPolygon.value, st = B.data.startIndices;
      if (this._fadeDataSet !== this._fadeSet) {
        this._fadeData = [...this.fadeA.keys()].map((i) => {
          const ring = [];
          for (let v = st[i]; v < st[i + 1]; v++) ring.push([pos[2 * v], pos[2 * v + 1]]);
          return { i, ring };
        });
        this._fadeDataSet = this._fadeSet;
      }
      layers.push(new SolidPolygonLayer({
        id: "buildings-faded", data: this._fadeData, getPolygon: (d) => d.ring, extruded: true,
        getElevation: (d) => B.heights[d.i] / 10,
        getFillColor: (d) => [...B.colors[d.i].slice(0, 3), Math.round(255 * (this.fadeA.get(d.i) ?? 1))],
        material: { ambient: 0.55, diffuse: 0.6, shininess: 12, specularColor: [25, 25, 25] },
        parameters: { depthWriteEnabled: false },
        updateTriggers: { getFillColor: [B.version, this._fadeFrame] },
      }));
    }
    if (this.tracked && this.showTracked) {
      const pts = this.tracked.filter((t) => t.now);
      layers.push(new ScatterplotLayer({
        id: "tracked", data: pts, getPosition: (t) => [t.now[0], t.now[1], t.now[2]],
        radiusUnits: "pixels", getRadius: 5.5, stroked: true, lineWidthUnits: "pixels", getLineWidth: 2,
        getFillColor: [...c.ink.slice(0, 3), 255], getLineColor: [...c.page.slice(0, 3), 255],
        parameters: { depthCompare: "always" },
        updateTriggers: { getPosition: this._posVersion, getFillColor: this.dark, getLineColor: this.dark },
      }));
    }
    this.deck.setProps({ layers });
  }

  _roadIndex(info) {
    // nearest course vertex to the picked coordinate
    const [x, y] = info.coordinate || [0, 0];
    let best = 0, bd = Infinity;
    for (let i = 0; i < this.np; i += 2) {
      const dd = ((this.lon[i] - x) * MLON) ** 2 + ((this.lat[i] - y) * MLAT) ** 2;
      if (dd < bd) { bd = dd; best = i; }
    }
    return best * this.step;
  }

  _segOf(d) {
    const S = this.segments || [];
    const j = S.findIndex((sg) => d <= sg.to_m);
    return j < 0 ? S.length - 1 : j;
  }

  _hover(j, info) {
    this.onHover?.(j, info.x, info.y);
  }

  // ---------------------------------------------------------------- labels
  /** label spec: {id, at: distance m | [lon,lat] | fn, text, kind, priority, set, dx, dy} */
  setLabelCatalog(list) {
    this.catalog = list;
    this._labelsDirty = true;
  }

  _placeLabels() {
    const vps = this.deck?.getViewports?.();
    if (!vps || !vps.length || !this.catalog) return;
    const vp = vps[0];
    const W = vp.width, H = vp.height;
    if (this._labelsDirty) {
      this.labelLayer.innerHTML = "";
      this._labelEls = [];
      const active = this.catalog.filter((l) => this.labelSets.has(l.set));
      for (const l of active) {
        const div = document.createElement("div");
        div.className = `m-label ${l.kind || ""}`;
        div.innerHTML = l.text;
        div.style.opacity = 0; // until placed
        this.labelLayer.appendChild(div);
        this._labelEls.push({ l, div, w: 0, h: 0 });
      }
      this._labelsDirty = false;
      this._measureAt = 0;
    }
    // Layout reads are batched and cached, not done every frame (they would force a layout
    // in the middle of scrolling): label sizes when the set changes (and again after the web
    // font has loaded), panel boxes at most every 250 ms.
    const now = performance.now();
    if (!this._measureAt || (!this._fontsReady && document.fonts?.status === "loaded")) {
      this._fontsReady = document.fonts?.status === "loaded";
      for (const o of this._labelEls) { o.w = o.div.offsetWidth; o.h = o.div.offsetHeight; }
      this._measureAt = now;
    }
    if (!this._panelBoxes || now - this._panelBoxesAt > 250) {
      const host = this.el.getBoundingClientRect(), boxes = [];
      for (const o of this.panels) {
        const cs = getComputedStyle(o);
        if (cs.opacity === "0" || cs.display === "none") continue;
        const r = o.getBoundingClientRect();
        if (r.width && r.height) boxes.push([r.left - host.left - 4, r.top - host.top - 4, r.right - host.left + 4, r.bottom - host.top + 4]);
      }
      this._panelBoxes = boxes;
      this._panelBoxesAt = now;
    }
    const placed = [[0, 0, 60, 60], ...this._panelBoxes]; // the top-left corner is kept free for the site menu button
    const chase = this.mode === "chase";
    // the tracked runners' dots are obstacles for place labels (not for their own labels)
    const dotBoxes = [];
    if (this.tracked && this.showTracked) {
      for (const t of this.tracked) {
        if (!t.now) continue;
        const [dx, dy, dz] = vp.project([t.now[0], t.now[1], t.now[2]]);
        if (dz < 1) dotBoxes.push([dx - 8, dy - 8, dx + 8, dy + 8]);
      }
    }
    // runner labels (kind "lead") are placed before any place label
    const rank = (o) => (o.l.kind === "lead" ? 100 : 0) + (o.l.priority || 0);
    const items = [...this._labelEls].sort((a, b) => rank(b) - rank(a));
    for (const o of items) {
      const l = o.l;
      let p;
      if (typeof l.at === "function") {
        p = l.at();
        if (!p) { o.div.style.opacity = 0; continue; }
      } else if (typeof l.at === "number") {
        // in the chase view only label what is just ahead of the camera
        if (chase && (l.at < this.chaseD - 60 || l.at > this.chaseD + (l.ahead ?? 1600))) { o.div.style.opacity = 0; continue; }
        const q = this.at(l.at);
        p = [q[0], q[1], q[2] + (l.lift ?? 0)];
      } else p = [l.at[0], l.at[1], l.at[2] || 0];
      const [x, y, zc] = vp.project(p);
      const zOK = (l.minZoom == null || vp.zoom >= l.minZoom) && (l.maxZoom == null || vp.zoom <= l.maxZoom);
      const prefs = l.alts || (["bridge", "mile", "lead"].includes(l.kind) ? [l.anchor || "bottom", "left", "right", "below"] : [l.anchor || "bottom"]);
      let shown = null;
      for (const anchor of prefs) {
        let left = x + (l.dx || 0), top = y + (l.dy || 0);
        if (anchor === "bottom") { left -= o.w / 2; top -= o.h + 6; }
        else if (anchor === "below") { left -= o.w / 2; top += 7; }
        else if (anchor === "center") { left -= o.w / 2; top -= o.h / 2; }
        else if (anchor === "left") { left += 8; top -= o.h / 2; }
        else if (anchor === "right") { left -= o.w + 8; top -= o.h / 2; }
        const box = [left - 3, top - 2, left + o.w + 3, top + o.h + 2];
        const inView = zc < 1 && box[0] >= 4 && box[1] >= 4 && box[2] <= W - 4 && box[3] <= H - 4;
        const overlaps = (b) => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]);
        const hit = placed.some(overlaps) || (l.kind !== "lead" && dotBoxes.some(overlaps));
        if (inView && !hit && zOK) { shown = { left, top, box, anchor }; break; }
        if (!shown) shown = { left, top, box: null, anchor };
      }
      if (shown.box) placed.push(shown.box);
      o.div.dataset.anchor = shown.anchor;
      o.div.style.transform = `translate(${Math.round(shown.left)}px, ${Math.round(shown.top)}px)`;
      o.div.style.opacity = shown.box ? 1 : 0;
    }
  }
}
