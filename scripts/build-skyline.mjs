#!/usr/bin/env node
// The real horizon from Pier 1 in Brooklyn Bridge Park: every building's
// roofline, the far hills, and a few landmarks, as the angle above the
// horizon per 0.05° of bearing. Written to lib/vignettes/generated/skyline.ts
// for the sky shaders to draw instead of a made-up skyline.
//
// Inputs, in data/skyline/cache (fetched by hand from OpenStreetMap's
// Overpass API and Open-Meteo's elevation API; see README there):
//   near.json        every building with a height tag within 2.6 km
//   far-*.json       buildings 30 m and taller in the sectors across the bay
//   islands.json     outlines of Governors, Liberty and Ellis islands
//   terrain.json     ground elevation along bearings out to 16 km
//
// Usage: node scripts/build-skyline.mjs

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CACHE = resolve(ROOT, "data/skyline/cache");
const OUT = resolve(ROOT, "lib/vignettes/generated/skyline.ts");

// The end of Pier 1 (must match PIER in lib/water/conditions.ts), and the
// eye above the water.
const LAT0 = 40.70152;
const LON0 = -73.99812;
const EYE = 4;
const BINS = 7200;
const BIN = 360 / BINS;
/** Ground under most of the shore is a few meters above the water. */
const GROUND = 4;

const KIND = { none: 0, building: 1, terrain: 2, trees: 3, bridge: 4, statue: 5, darkBuilding: 6 };

/** Governors Island's outline, so its buildings can stay dark at night. */
function islandRings() {
  const path = resolve(CACHE, "islands.json");
  if (!existsSync(path)) return [];
  const data = JSON.parse(readFileSync(path, "utf8"));
  const rings = [];
  for (const e of data.elements) {
    if (e.tags?.name !== "Governors Island") continue;
    const members = e.type === "way" ? [e.geometry] : (e.members ?? []).filter((m) => m.type === "way" && m.geometry && m.role !== "inner").map((m) => m.geometry);
    for (const ring of stitch(members)) rings.push(ring.map((p) => local(p.lat, p.lon)));
  }
  return rings;
}

/** Joins a multipolygon's outer ways, end to end, into closed rings. */
function stitch(ways) {
  const same = (a, b) => Math.abs(a.lat - b.lat) < 1e-7 && Math.abs(a.lon - b.lon) < 1e-7;
  const pool = ways.map((w) => [...w]);
  const rings = [];
  while (pool.length) {
    const ring = pool.shift();
    let grew = true;
    while (grew && !same(ring[0], ring[ring.length - 1])) {
      grew = false;
      for (let i = 0; i < pool.length; i++) {
        const w = pool[i];
        const tail = ring[ring.length - 1];
        if (same(w[0], tail)) ring.push(...w.slice(1));
        else if (same(w[w.length - 1], tail)) ring.push(...w.slice(0, -1).reverse());
        else continue;
        pool.splice(i, 1);
        grew = true;
        break;
      }
    }
    rings.push(ring);
  }
  return rings;
}

/** Inside one of the rings, or within `margin` meters of its shore. */
function insideAny(rings, x, y, margin = 120) {
  for (const ring of rings) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
      // Distance to this shore segment.
      const dx = xj - xi;
      const dy = yj - yi;
      const t = Math.max(0, Math.min(1, ((x - xi) * dx + (y - yi) * dy) / Math.max(dx * dx + dy * dy, 1e-6)));
      if (Math.hypot(x - (xi + dx * t), y - (yi + dy * t)) < margin) return true;
    }
    if (inside) return true;
  }
  return false;
}

const el = new Float64Array(BINS).fill(-1);
const dist = new Float64Array(BINS).fill(1e9);
const ids = new Uint16Array(BINS);
const kinds = new Uint8Array(BINS);

function local(lat, lon) {
  const x = (lon - LON0) * 111320 * Math.cos((LAT0 * Math.PI) / 180);
  const y = (lat - LAT0) * 110574;
  return [x, y];
}

function bearingOf(x, y) {
  return ((Math.atan2(x, y) * 180) / Math.PI + 360) % 360;
}

/** Only the water-facing half matters: from the Narrows round to the Brooklyn Bridge. */
const SECTOR = [185, 375];

function put(bin, top, d, id, kind) {
  bin = ((bin % BINS) + BINS) % BINS;
  const deg = bin * BIN;
  if (!(deg >= SECTOR[0] || deg <= SECTOR[1] - 360)) return;
  if (top > el[bin]) {
    el[bin] = top;
    dist[bin] = d;
    ids[bin] = id & 0xffff;
    kinds[bin] = kind;
  }
}

/** A straight top edge at height h between two ground points. */
function edge(ax, ay, bx, by, h, id, kind) {
  const len = Math.hypot(bx - ax, by - ay);
  const dNear = Math.max(Math.min(Math.hypot(ax, ay), Math.hypot(bx, by)), 5);
  // At least two samples per bin along the edge, and a few regardless.
  const step = Math.max(Math.min(0.4 * dNear * ((BIN * Math.PI) / 180), 2), 0.2);
  const n = Math.max(Math.ceil(len / step), 3);
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x = ax + (bx - ax) * t;
    const y = ay + (by - ay) * t;
    const d = Math.hypot(x, y);
    if (d < 20) continue;
    const bin = Math.floor(bearingOf(x, y) / BIN);
    put(bin, Math.atan((h - EYE) / d), d, id, kind);
  }
}

function heightOf(tags) {
  let s = (tags.height ?? "").toString().trim();
  if (!s) return NaN;
  let scale = 1;
  if (/ft|'/.test(s)) scale = 0.3048;
  const v = parseFloat(s);
  if (!Number.isFinite(v)) return NaN;
  return Math.min(v * scale, 600);
}

function addBuildings(file, dark) {
  const path = resolve(CACHE, file);
  if (!existsSync(path)) {
    console.warn(`skipping ${file} (not found)`);
    return 0;
  }
  const data = JSON.parse(readFileSync(path, "utf8"));
  let count = 0;
  for (const e of data.elements) {
    const h = heightOf(e.tags ?? {});
    if (!Number.isFinite(h) || h < 2) continue;
    const rings = e.type === "way" ? [e.geometry] : (e.members ?? []).filter((m) => m.type === "way" && m.geometry).map((m) => m.geometry);
    const id = Number(e.id) % 65521;
    for (const ring of rings) {
      if (!ring || ring.length < 2) continue;
      const pts = ring.map((p) => local(p.lat, p.lon));
      const kind = dark.length && insideAny(dark, pts[0][0], pts[0][1]) ? KIND.darkBuilding : KIND.building;
      for (let i = 0; i + 1 < pts.length; i++) edge(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], h + GROUND, id, kind);
    }
    count++;
  }
  return count;
}

/** Tree line along an island's shore: a low canopy wherever nothing taller stands. */
function addIslands() {
  const path = resolve(CACHE, "islands.json");
  if (!existsSync(path)) return 0;
  const data = JSON.parse(readFileSync(path, "utf8"));
  let count = 0;
  for (const e of data.elements) {
    const name = e.tags?.name ?? "";
    const canopy = name === "Governors Island" ? 13 : 8;
    const rings = e.type === "way" ? [e.geometry] : (e.members ?? []).filter((m) => m.type === "way" && m.geometry).map((m) => m.geometry);
    for (const ring of rings) {
      if (!ring) continue;
      const pts = ring.map((p) => local(p.lat, p.lon));
      for (let i = 0; i + 1 < pts.length; i++) edge(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], canopy + GROUND, 7 + count, KIND.trees);
    }
    count++;
  }
  return count;
}

/** Hills across the bay, from the elevation samples along each bearing. */
function addTerrain() {
  const path = resolve(CACHE, "terrain.json");
  if (!existsSync(path)) return 0;
  const rows = JSON.parse(readFileSync(path, "utf8"));
  const best = new Map();
  for (const [az, d, z] of rows) {
    if (z == null || z <= 1) continue;
    // Tree cover on the hills adds a little.
    const top = Math.atan((z + 8 - EYE) / d);
    const cur = best.get(az);
    if (!cur || top > cur.top) best.set(az, { top, d });
  }
  const azs = [...best.keys()].sort((a, b) => a - b);
  for (let i = 0; i < azs.length; i++) {
    const a0 = azs[i];
    const a1 = azs[i + 1] ?? a0 + 1;
    const p0 = best.get(a0);
    const p1 = best.get(a1) ?? p0;
    if (a1 - a0 > 1.5) continue;
    for (let b = Math.floor(a0 / BIN); b < Math.floor(a1 / BIN); b++) {
      const t = (b * BIN - a0) / (a1 - a0);
      put(b, p0.top + (p1.top - p0.top) * t, p0.d + (p1.d - p0.d) * t, 3, KIND.terrain);
    }
  }
  return azs.length;
}

/** A tower or monument: a box `width` meters across, `h` tall. */
function landmark(lat, lon, width, h, id, kind) {
  const [x, y] = local(lat, lon);
  const d = Math.hypot(x, y);
  const ux = x / d;
  const uy = y / d;
  // Across the line of sight.
  const px = -uy * width * 0.5;
  const py = ux * width * 0.5;
  edge(x - px, y - py, x + px, y + py, h, id, kind);
}

/** A span between two points at height h: a bridge deck, a cable's sag ignored. */
function span(lat1, lon1, lat2, lon2, h, id, kind) {
  const a = local(lat1, lon1);
  const b = local(lat2, lon2);
  edge(a[0], a[1], b[0], b[1], h, id, kind);
}

function addLandmarks() {
  // Statue of Liberty: pedestal and statue, 93 m over the water.
  landmark(40.68925, -74.0445, 28, 93, 501, KIND.statue);
  // Verrazzano-Narrows Bridge: towers 211 m, deck about 70 m.
  landmark(40.6062, -74.0405, 30, 211, 502, KIND.bridge);
  landmark(40.6078, -74.0483, 30, 211, 502, KIND.bridge);
  span(40.6035, -74.0335, 40.6105, -74.0555, 70, 503, KIND.bridge);
  // Bayonne Bridge: the arch, 80-odd meters over the Kill Van Kull.
  span(40.6425, -74.1395, 40.6368, -74.1445, 90, 504, KIND.bridge);
  // Brooklyn Bridge: towers 84 m, deck 41 m; Manhattan Bridge behind it.
  landmark(40.7077, -73.9994, 26, 84, 505, KIND.bridge);
  landmark(40.7058, -73.9962, 26, 84, 505, KIND.bridge);
  span(40.7098, -74.0035, 40.7035, -73.9925, 41, 506, KIND.bridge);
  landmark(40.7095, -73.9895, 20, 102, 507, KIND.bridge);
  landmark(40.7073, -73.9838, 20, 102, 507, KIND.bridge);
}

const dark = islandRings();
console.log(`island rings: ${dark.map((r) => `${r.length} pts${Math.hypot(r[0][0] - r[r.length - 1][0], r[0][1] - r[r.length - 1][1]) < 1 ? " closed" : " open"}`).join(", ")}`);
const nBuildings = ["near.json", "far-jersey.json", "far-south.json"].reduce((n, f) => n + addBuildings(f, dark), 0);
const nIslands = addIslands();
const nTerrain = addTerrain();
addLandmarks();

// Pack: elevation in 0.0005° (uint16), distance in 2 m (uint16), id (uint16), kind (uint8).
const buf = Buffer.alloc(BINS * 7);
let covered = 0;
let maxDeg = 0;
for (let i = 0; i < BINS; i++) {
  const deg = el[i] > 0 ? (el[i] * 180) / Math.PI : 0;
  if (deg > 0) covered++;
  maxDeg = Math.max(maxDeg, deg);
  buf.writeUInt16LE(Math.min(Math.round(deg / 0.0005), 65535), i * 7);
  buf.writeUInt16LE(Math.min(Math.round((deg > 0 ? dist[i] : 60000) / 2), 65535), i * 7 + 2);
  buf.writeUInt16LE(ids[i], i * 7 + 4);
  buf.writeUInt8(deg > 0 ? kinds[i] : 0, i * 7 + 6);
}

const summary = [];
for (let a = 0; a < 360; a += 15) {
  let m = 0;
  for (let b = Math.floor(a / BIN); b < Math.floor((a + 15) / BIN); b++) m = Math.max(m, el[b]);
  summary.push(`${a}°: ${((m * 180) / Math.PI).toFixed(2)}°`);
}

writeFileSync(
  OUT,
  `// Generated by scripts/build-skyline.mjs from OpenStreetMap building
// footprints (© OpenStreetMap contributors, ODbL) and Copernicus DEM
// elevations via Open-Meteo. Do not edit by hand.
//
// The horizon from Pier 1, Brooklyn Bridge Park: per 0.05° of bearing from
// north, the angle above the horizon (0.0005° units), distance (2 m units),
// a building id for windows and tone, and what kind of thing it is.

export const SKYLINE_BINS = ${BINS};
export const SKYLINE_KIND = { none: 0, building: 1, terrain: 2, trees: 3, bridge: 4, statue: 5, darkBuilding: 6 } as const;
export const SKYLINE_BASE64 =
  "${buf.toString("base64")}";
`,
);

console.log(`${nBuildings} buildings, ${nIslands} islands, ${nTerrain} terrain bearings; ${covered}/${BINS} bins above the horizon, tallest ${maxDeg.toFixed(2)}°`);
console.log(summary.join("  "));
console.log(`wrote ${OUT} (${(buf.length / 1024).toFixed(0)} KB packed)`);
