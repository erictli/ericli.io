// The marathon story's client module: the 3D scene and the charts, wired to the page's scroll.
//
//   const story = mountMarathon(root, { data: "/writing/nyc-marathon/data/marathon/", store });
//   story.destroy();
//
// `root` is the story's wrapper (components/marathon/MarathonStory.tsx). The server renders the
// copy and the React UI inside it (the caption card and its panels, the finish-time menu, the
// chart key); this module draws the map, the SVG graphics and the charts into the slots they
// leave, and talks to the UI through `store` (components/marathon/store.ts): it writes the step
// on screen, the race clock and the followed runner's numbers, and follows the finish time the
// reader picks. It only looks inside root, and everything it starts or adds — deck.gl,
// listeners, observers, timers, frames, tooltips, the drawings — goes through one cleanup, so
// destroy() leaves root as the server rendered it. React Strict Mode's mount → destroy → mount
// and client-side navigation rely on that.
//
// Deep links for screenshots: ?step=N (1–14) opens on card N with its camera and clock settled
// and sets root[data-step-ready="1"]; ?still=<preset> draws only the map, full-screen, for the
// social card, and sets root[data-still-ready="1"] (scripts/capture-og.mjs).
import { createCleanup, loadJSON, loadBinary, onThemeChange, reducedMotion } from "@/lib/stories/client";
import { fmt } from "@/lib/stories/shared";
import { CourseScene, CENTRAL_PARK, clockTransitionMs } from "./scene";
import { makeStrip } from "./strip";
import { cohortCopy } from "./cohort-copy";
import { profileChart, elevationChart } from "./charts";
import { TIP_STRONG, TOOLTIP, TOOLTIP_SHOWN } from "./ui";

const MILE = 1609.344;
const W1 = 35 * 60; // Wave 1 gun, seconds after 8:35 a.m. (clock zero)

// ------------------------------------------------------------------ cameras
// fit: the stretch of course (metres) to frame; the camera code fits it to the right of the
// caption on desktop and into the top ~55% below 900px. Heights are drawn to scale.
const CAMS = {
  overview: { fit: [0, 42195], pitch: 45, bearing: -12, fill: 0.97, mobile: { pitch: 40, bearing: -22 } },
  field: { fit: [0, 42195], pitch: 50, bearing: -12, fill: 0.95, mobile: { pitch: 42, bearing: -22 } },
  // the last view: the finish in Central Park
  // looking west-north-west over the park: the last stretch runs left to right to the line
  // (the extra point, 250 m up West Drive past the line, keeps the finish off the frame's edge)
  finish: { fit: [41500, 42195], pts: [[-73.97525, 40.77458]], pitch: 52, bearing: -64, fill: 0.9, mobile: { pitch: 50, bearing: -64, fill: 0.9 } },
};

// --------------------------------------------------------------- the steps
// mode: "overview" (fixed camera), "chase" (scroll = course distance; data-from/to in
// miles), "field" (scroll = race clock), "finale" (scroll = the last minutes of the race)
const STEPS = {
  // the field at the moment the followed runner starts, so the flythrough begins from these dots
  intro: { mode: "overview", cam: "overview", labels: ["boroughs", "bridges-short", "ends"], runners: true, atStart: true },
  // the race clock: the camera follows the front of the race (two cards, split as the men's winner
  // passes halfway) to the men's winner's finish, then
  // travels down the course to the last finisher at that moment (scroll drives the move; the
  // clock holds), then follows the last finisher and the back of the field around them
  leaders: { mode: "field", cam: "field", follow: "leaders", labels: ["boroughs", "bridges-short", "leaders"], runners: true },
  front: { mode: "field", cam: "field", follow: "leaders", labels: ["boroughs", "bridges-short", "leaders"], runners: true },
  handoff: { mode: "field", cam: "field", path: true, labels: ["boroughs", "leaders"], runners: true },
  tail: { mode: "field", cam: "field", follow: "tail", labels: ["leaders", "tail-ends"], runners: true, tail: true },
  end: { mode: "finale", cam: "finish", labels: ["ends", "leaders"], runners: true },
};
const CHASE = { mode: "chase", labels: ["route", "miles"], runners: true };
// metres per pixel at zoom 0 (512 px tiles, equator); metres per degree near the course
const MPP0 = 78271.517, MLAT = 110540, MLON = 111320 * Math.cos((40.72 * Math.PI) / 180);

// ------------------------------------------------------------ still frames
// ?still=<preset> renders only the map, for the social card (1200×630).
const clk = (h, m) => (h * 60 + m - (8 * 60 + 35)) * 60; // wall-clock time → race-clock seconds
const STILLS = {
  // the flythrough on First Avenue, at the 4:30 runner's time
  firstave: { chase: 17.6 * MILE, cohort: 4.5 * 3600, zoomAdd: 0.6, bigDots: true },
  // above Long Island City, looking west across the Queensboro Bridge toward Midtown
  queensboro: { mode: "overview", clock: clk(12, 15), bigDots: true,
    view: { longitude: -73.955, latitude: 40.762, zoom: 14.7, pitch: 57, bearing: -76 } },
  // the whole stream at 12:45 p.m., Brooklyn to the Bronx, buildings muted
  // (looking north-west, so the stream runs diagonally from Brooklyn up to Manhattan and the Bronx)
  manhattan: { mode: "field", clock: clk(12, 45), bigDots: true, cam: { fit: [6.5 * MILE, 22.3 * MILE], pitch: 58, bearing: -42, fill: 1, full: true } },
};

function clockLabel(t) {
  const s = Math.round(t) + (8 * 3600 + 35 * 60);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
  const ap = h < 12 ? "a.m." : "p.m.";
  const h12 = h <= 12 ? h : h - 12;
  return `${h12}:${String(m).padStart(2, "0")} ${ap}`;
}

/** The race-clock panel's picture of where everyone is: runners on the course by distance
 *  (0.25-mile bins, a square-root scale fixed for the whole race), a hairline axis with Start,
 *  13.1 and Finish, and the two winners (filled dots, labels above) and the last finisher
 *  (hollow dot, label below). The height never changes as the clock runs. */
function makeFieldPanel(svgEl, { tracked, runners, scene, cleanup }) {
  const NS = "http://www.w3.org/2000/svg";
  const R = runners, K = R.K, total = 42195;
  const H = { lab1: 11, lab2: 27, top: 32, strip: 36, axis: 70, tick: 83, lab3: 99, h: 103 };
  let W = 268, bars, ticks = [], marks = {}, labels = {}, leaders = {}, peak = 2000;
  const el = (tag, attrs, parent = svgEl) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); parent.appendChild(e); return e; };
  const x = (d) => 1 + (Math.min(total, Math.max(0, d)) / total) * (W - 2);
  // where a tracked runner is at the clock: metres, "start" (not yet started) or "done"
  const where = (tr, t) => {
    const e = t - tr.start;
    if (e < 0) return "start";
    if (e >= tr.times[tr.times.length - 1]) return "done";
    let j = 0;
    while (j < K - 1 && e >= tr.times[j]) j++;
    const t0 = j ? tr.times[j - 1] : 0, d0 = j ? R.cpm[j - 1] : 0;
    return d0 + ((e - t0) / Math.max(1, tr.times[j] - t0)) * (R.cpm[j] - d0);
  };
  function build() {
    svgEl.replaceChildren();
    const host = svgEl.parentElement, cs = getComputedStyle(host);
    W = Math.max(200, Math.round(host.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)));
    svgEl.setAttribute("viewBox", `0 0 ${W} ${H.h}`);
    svgEl.setAttribute("width", W);
    svgEl.setAttribute("height", H.h);
    bars = el("path", { class: "fill-marathon-ink [fill-opacity:0.32]" });
    el("line", { class: "stroke-marathon-ink/18 stroke-1", x1: 0, x2: W, y1: H.axis + 0.5, y2: H.axis + 0.5 });
    ticks = [[0, "Start", "start"], [21097.5, "13.1", "middle"], [total, "Finish", "end"]].map(([d, t, a]) => {
      const e = el("text", { class: "fill-marathon-ink-3 text-[12px] tabular-nums transition-opacity duration-150", x: x(d), y: H.tick, "text-anchor": a });
      e.textContent = t;
      return e;
    });
    for (const tr of tracked) {
      leaders[tr.key] = el("line", { class: "stroke-marathon-ink-3 stroke-1" });
      // the winners filled, the last finisher hollow
      marks[tr.key] = el("circle", { class: tr.key === "last" ? "fill-marathon-surface stroke-marathon-ink stroke-[1.5]" : "fill-marathon-ink stroke-marathon-surface stroke-[1.5]", r: 3.5, cy: H.axis });
      labels[tr.key] = el("text", { class: "fill-marathon-ink text-[12px] tabular-nums", y: tr.key === "win_m" ? H.lab1 : tr.key === "win_w" ? H.lab2 : H.lab3 });
    }
    update(scene, true);
  }
  let lastHist = "";
  function update(s, force = false) {
    if (!bars) return;
    // the histogram, from the scene's 400 m bins of runners on the course
    const h = s.hist;
    let d = "";
    const bw = (W - 2) / h.length * 0.82;
    for (let i = 0; i < h.length; i++) {
      if (!h[i]) continue;
      const bh = Math.max(1, Math.sqrt(Math.min(1, h[i] / peak)) * H.strip);
      d += `M${(x(i * 400) + 0.2).toFixed(1)},${H.axis}h${bw.toFixed(1)}v${(-bh).toFixed(1)}h${(-bw).toFixed(1)}z`;
    }
    if (force || d !== lastHist) { bars.setAttribute("d", d); lastHist = d; }
    // markers and labels: the winners' labels above the strip in two rows, the last
    // finisher's below. A label never covers another marker's leader: rows and sides are
    // chosen so the lower label stays clear of the upper marker.
    const info = {};
    for (const tr of tracked) {
      const at = where(tr, s.clock);
      const dm = at === "start" ? 0 : at === "done" ? total : at;
      const text = at === "done" ? `${tr.label}, finished ${fmt.hms(tr.net)}` : at === "start" ? `${tr.label}, not started` : `${tr.label}, mile ${(dm / MILE).toFixed(1)}`;
      const lab = labels[tr.key];
      if (lab.textContent !== text) lab.textContent = text;
      const tw = lab.getComputedTextLength?.() ?? text.length * 6;
      info[tr.key] = { px: x(dm), tw };
      marks[tr.key].setAttribute("cx", x(dm));
    }
    // each label starts at its marker if it fits, and otherwise slides left just enough to
    // stay inside the panel, always covering its marker. The lower winner's label must also
    // keep clear of the upper winner's leader; the rows swap if that's the only way.
    const range = (o) => [Math.max(0, o.px - o.tw + 2), Math.max(0, Math.min(W - o.tw, o.px - 2))];
    const pick = (o, avoid = null) => {
      const [a, b] = range(o);
      const cands = [b, a, ...(avoid == null ? [] : [avoid + 3, avoid - o.tw - 3])].map((v) => Math.min(b, Math.max(a, v)));
      return cands.find((x0) => avoid == null || avoid < x0 - 1 || avoid > x0 + o.tw + 1 || Math.abs(avoid - o.px) < 3);
    };
    let best = null;
    for (const [up, low] of [["win_m", "win_w"], ["win_w", "win_m"]]) {
      const xl = pick(info[low], info[up].px);
      if (xl != null) { best = { up, low, xu: pick(info[up]), xl }; break; }
    }
    best ??= { up: "win_m", low: "win_w", xu: pick(info.win_m), xl: pick(info.win_w) };
    const place = (key, row, x0) => {
      const o = info[key], lab = labels[key], ld = leaders[key];
      lab.setAttribute("y", row);
      lab.setAttribute("x", x0);
      lab.setAttribute("text-anchor", "start");
      const above = row < H.axis;
      ld.setAttribute("x1", o.px); ld.setAttribute("x2", o.px);
      ld.setAttribute("y1", above ? row + 3 : row - 10); ld.setAttribute("y2", above ? H.axis - 4 : H.axis + 4);
    };
    place(best.up, H.lab1, best.xu);
    place(best.low, H.lab2, best.xl);
    // both at the same spot (at the start or both finished): one leader, from the lower label
    leaders[best.up].style.opacity = Math.abs(info[best.up].px - info[best.low].px) < 3 ? 0 : 1;
    const lo = info.last;
    place("last", H.lab3, pick(lo));
    // a tick label under the last finisher's leader makes way
    const tickBox = ticks.map((t) => t.getBBox?.() ?? null);
    ticks.forEach((t, i) => { const b = tickBox[i]; t.style.opacity = b && lo.px > b.x - 3 && lo.px < b.x + b.width + 3 ? 0 : 1; });
  }
  // the bar scale: the busiest 400 m of course at any time in the race (sampled every 5 min),
  // worked out once in idle time
  cleanup.idle(() => {
    const bins = new Uint32Array(Math.ceil(total / 400) + 1);
    let best = 0;
    for (let t = 0; t < 14 * 3600; t += 300) {
      bins.fill(0);
      for (let i = 0; i < R.n; i += 2) { // every other runner, doubled
        const e = t - R.start[i], o = i * K;
        if (e < 0 || e >= R.times[o + K - 1]) continue;
        let j = 0;
        while (j < K - 1 && e >= R.times[o + j]) j++;
        const t0 = j ? R.times[o + j - 1] : 0, d0 = j ? R.cpm[j - 1] : 0;
        bins[Math.floor((d0 + ((e - t0) / Math.max(1, R.times[o + j] - t0)) * (R.cpm[j] - d0)) / 400)] += 2;
      }
      for (const b of bins) if (b > best) best = b;
    }
    peak = Math.max(500, best);
    lastHist = "";
    update(scene, true);
  }, 200);
  // (re)drawn at the panel's width: on first showing it, and when the caption resizes
  let builtW = -1;
  cleanup.observe(new ResizeObserver(() => {
    const w = svgEl.parentElement.clientWidth;
    if (w !== builtW) { builtW = w; build(); }
  })).observe(svgEl.parentElement);
  build();
  return { update, build };
}

/**
 * Start the story inside `root`. Returns at once; the data loads in the background.
 * @param {HTMLElement} root
 * @param {{ data: string, store: import("@/lib/stories/store").Store<import("@/components/marathon/store").MarathonState> }} opts
 *   data: the URL of the story's data folder, ending in "/"; store: shared with the React UI
 * @returns {{ destroy(): void }}
 */
export function mountMarathon(root, { data, store }) {
  const cleanup = createCleanup();
  const abort = new AbortController();
  cleanup.add(() => abort.abort());
  run(root, { data, store, cleanup, signal: abort.signal }).catch((e) => {
    if (cleanup.disposed || e?.name === "AbortError") return;
    console.error(e);
    store.set({ failed: true });
  });
  return { destroy: () => cleanup.dispose() };
}

async function run(root, { data, store, cleanup, signal }) {
  const Q = new URLSearchParams(location.search);
  const STILL = Q.get("still");
  const STEP_N = parseInt(Q.get("step"), 10); // ?step=N (1–14) jumps to that card, settled
  const sceneEl = root.querySelector("[data-scene]");
  const caption = root.querySelector("[data-caption]");
  const steps = [...root.querySelectorAll("[data-step]")];
  // what this module changes on the server's elements, put back on destroy (the React UI's
  // state is reset by MarathonStory)
  cleanup.add(() => {
    delete root.dataset.still;
    delete root.dataset.stepReady;
    delete root.dataset.stillReady;
    steps.forEach((el) => el.classList.remove("is-active"));
  });
  if (STILL) root.dataset.still = "";
  if (STEP_N && "scrollRestoration" in history) {
    const was = history.scrollRestoration;
    history.scrollRestoration = "manual";
    cleanup.add(() => { history.scrollRestoration = was; });
  }

  const load = (f) => loadJSON(data + f, { signal });
  const [course, analysis, buf, region, boroughs] = await Promise.all([
    load("course.json"),
    load("analysis.json"),
    loadBinary(data + "runners.bin", { signal }),
    load("land.geojson"),
    load("boroughs.geojson"),
  ]);
  if (cleanup.disposed) return;
  const F = analysis.facts;

  // ---- runners table
  const n = analysis.anim.n, K = analysis.anim.checkpoints_m.length;
  const runners = {
    n, K,
    start: new Uint16Array(buf, 0, n),
    times: new Uint16Array(buf, 2 * n, n * K),
    group: new Uint8Array(buf, 2 * n + 2 * n * K, n),
    cpm: Float64Array.from(analysis.anim.checkpoints_m),
  };
  // the runner the flythrough follows: one real runner per finish time (chosen in the
  // pipeline as the one whose pace profile is closest to their cohort's median)
  const cohorts = analysis.cohorts;
  // (the page picks the first one: 4:30)
  let ci = cohorts[store.get().cohort] ? store.get().cohort : Math.max(0, cohorts.findIndex((c) => c.target === 4.5 * 3600));
  let pacer = cohorts[ci].pacer;
  let pacerNet = cohorts[ci].pacer_net;

  const segs = analysis.segments;

  // ---- the caption card's live data (components/marathon/Caption.tsx renders it)
  const CS = analysis.clock_series; // exact counts from the full finisher list
  const N_ALL = CS.finished[CS.finished.length - 1]; // everyone has finished by the end of the series
  let lastFinish = Infinity; // race-clock time of the last finish (set below, once the runners are read)

  // where on the course: crossings come from the course model's water crossings
  const B = Object.fromEntries(course.bridges.map((b) => [b.short, b]));
  const inPark = (lon, lat) => {
    let inside = false; const P = CENTRAL_PARK;
    for (let i = 0, j = P.length - 1; i < P.length; j = i++) {
      if ((P[i][1] > lat) !== (P[j][1] > lat) && lon < ((P[j][0] - P[i][0]) * (lat - P[i][1])) / (P[j][1] - P[i][1]) + P[i][0]) inside = !inside;
    }
    return inside;
  };
  function placeAt(d) {
    for (const b of course.bridges) if (d >= b.water_from_m - 150 && d <= b.water_to_m + 150) return b.name;
    if (d < B.Verrazzano.water_from_m) return "Staten Island";
    if (d < B.Pulaski.water_from_m) return "Brooklyn";
    if (d < B.Queensboro.water_from_m) return "Queens";
    if (d < B["Willis Ave."].water_from_m) return d > 16.35 * MILE ? "First Avenue, Manhattan" : "Manhattan";
    if (d < B["Madison Ave."].water_from_m) return "The Bronx";
    const i = Math.min(course.pts.length - 1, Math.round(d / course.step_m));
    const [lon, lat] = course.pts[i];
    if (inPark(lon, lat)) return "Central Park";
    if (lat < 40.7685 && d > 25 * MILE) return "Central Park South";
    return d > 21.2 * MILE ? "Fifth Avenue, Manhattan" : "Manhattan";
  }

  let strip = null, fieldPanel = null;
  let paceKey = "";
  // every frame: the store hears only text that changed, so a panel re-renders only then
  const onFrame = (s) => {
    if (s.mode === "chase") {
      const d = s.chaseD;
      const where = d < 30 ? "Start" : `Mile ${(d / MILE).toFixed(1)}`;
      // "Mile 21.3, Fifth Avenue"
      store.set({ place: `${where}, ${placeAt(d).replace(/, Manhattan$/, "")}` });
      if (s.pacerRel != null) {
        const j = s.pacerSeg ?? 0, o = pacer * K;
        const segS = ((runners.times[o + j] - (j ? runners.times[o + j - 1] : 0)) / (runners.cpm[j] - (j ? runners.cpm[j - 1] : 0))) * MILE;
        const c = s.paceColor(s.pacerRel);
        const avg = fmt.ms((pacerNet / 42195) * MILE);
        const key = `${j}|${Math.round(segS)}|${pacerNet}|${c.join()}`;
        if (key !== paceKey) {
          paceKey = key;
          // one line after the place: "10:27/mi, [2% slower] than their 10:16 average"
          const pc = Math.round((s.pacerRel - 1) * 100);
          const chip = pc === 0 ? "even" : `${Math.abs(pc)}% ${pc > 0 ? "slower" : "faster"}`;
          store.set({ pace: { speed: fmt.ms(segS), chip, color: `rgb(${c[0]},${c[1]},${c[2]})`, relation: pc === 0 ? "with" : "than", avg } });
        }
      }
      strip?.update(d);
    } else {
      const k = Math.max(0, Math.min(CS.waiting.length - 1, Math.round(s.clock / CS.step)));
      const w = CS.waiting[k], f = CS.finished[k];
      // the results list is one or two short of the official count; once the last runner is in,
      // show the official total, as the copy does ("About the data" explains the gap)
      const done = s.clock >= lastFinish;
      const run = done ? 0 : Math.max(0, N_ALL - w - f), fin = done ? Math.max(F.n_official, f) : f;
      // what is zero is left out: "10:27 a.m. · 32,496 running · 26,625 yet to start"
      const counts = [run ? `${fmt.int(run)} running` : "", w ? `${fmt.int(w)} yet to start` : "", fin ? `${fmt.int(fin)} finished` : ""].filter(Boolean).join(" · ");
      store.set({ clock: clockLabel(s.clock), counts });
      fieldPanel?.update(s);
    }
  };

  const scene = new CourseScene(sceneEl, { course, runners, basemap: { region, boroughs }, onFrame });
  cleanup.add(() => scene.destroy());
  scene.segments = segs;
  scene.pacer = pacer;
  scene.panels = [caption];

  // ---- the runners tracked on the race clock (no names, bibs or ages)
  const TR = analysis.tracked;
  const tracked = [
    { key: "win_m", label: "Men’s winner", ...TR.win_m },
    { key: "win_w", label: "Women’s winner", ...TR.win_w },
    { key: "last", label: "Last finisher", ...TR.last },
  ];
  scene.setTracked(tracked);
  fieldPanel = makeFieldPanel(caption.querySelector("[data-field]"), { tracked, runners, scene, cleanup });
  lastFinish = 0;
  for (let i = 0; i < n; i++) lastFinish = Math.max(lastFinish, runners.start[i] + runners.times[i * K + K - 1]);
  lastFinish = Math.max(lastFinish, analysis.anim.last_finish ?? 0, TR.last.start + TR.last.net);
  // the race-clock cards' clock ranges (data-t0/t1, minutes after the Wave 1 gun) are set by the
  // page from the same data: the first ends as the men's winner passes halfway, the second at
  // their finish, the handoff holds that moment, and the tail runs on from it
  const winEndT = TR.win_m.start + TR.win_m.net; // 11:13 a.m.
  // the opening map: the followed runner's start (the flythrough begins from the same moment)
  const startT = () => runners.start[pacer];
  // the last view: the last finisher's final minutes, scrubbed by scroll, then held
  const lastEnd = TR.last.start + TR.last.net;
  // (clamped at the last finish, so the clock and the counts match the card)
  const endTime = (p) => Math.min(lastFinish, lastEnd - 12 * 60 + 12 * 60 * Math.min(1, Math.max(0, (p - 0.04) / 0.6)));
  window.__marathon = { scene, STEPS, CAMS }; // for debugging in the console
  cleanup.add(() => { delete window.__marathon; });

  // buildings arrive after the first frame
  Promise.all([load("buildings.json"), loadBinary(data + "buildings.bin", { signal })])
    .then(([meta, bbuf]) => {
      if (cleanup.disposed) return;
      scene.setBuildings(meta, bbuf);
      if (!STILL) onBuildingsLoaded(); // (a still frame has no steps whose towers to fade)
    })
    .catch((e) => { if (!cleanup.disposed && e?.name !== "AbortError") console.error("buildings", e); });

  // the runner panel's graphic: elevation + pace by mile, "you are here" (redrawn at the
  // panel's width on first showing it, and when the caption resizes)
  const stripEl = caption.querySelector("[data-strip]");
  strip = makeStrip(stripEl, { course, analysis, paceColor: (v) => scene.paceColor(v), height: 44 });
  cleanup.add(() => stripEl.replaceChildren());
  let stripW = stripEl.clientWidth;
  cleanup.observe(new ResizeObserver(() => {
    if (stripEl.clientWidth !== stripW) { stripW = stripEl.clientWidth; strip.draw(); }
  })).observe(stripEl);

  // hover on the route: that mile's numbers
  const tip = document.createElement("div");
  tip.className = TOOLTIP;
  sceneEl.appendChild(tip);
  cleanup.add(() => tip.remove());
  scene.onHover = (j, x, y) => {
    if (j == null || scene.mode === "chase") { tip.classList.remove(TOOLTIP_SHOWN); return; }
    const sg = segs[j];
    const v = (analysis.profiles.all[j] - 1) * 100;
    const brg = course.bridges.find((b) => b.from_m < sg.to_m && b.to_m > sg.from_m);
    const i = Math.min(course.pts.length - 1, Math.round(((sg.from_m + sg.to_m) / 2) / course.step_m));
    tip.innerHTML = `<strong class="${TIP_STRONG}">${sg.label}</strong>${brg ? ` · ${brg.short}` : ""}<br>Typical runner: <strong class="${TIP_STRONG}">${Math.abs(v).toFixed(1)}% ${v >= 0 ? "slower" : "faster"}</strong> than their average<br>Elevation about ${Math.round(course.pts[i][2] * 3.28084)} ft · climb in this mile ${sg.climb_ft} ft`;
    tip.classList.add(TOOLTIP_SHOWN);
    const w = sceneEl.clientWidth;
    tip.style.left = `${Math.min(x + 14, w - tip.offsetWidth - 8)}px`;
    tip.style.top = `${Math.max(8, y - 12)}px`;
  };

  // ---- label catalog
  const M = (m) => m * MILE;
  const L = [
    { set: "boroughs", at: [-74.135, 40.585], text: "Staten Island", kind: "borough", anchor: "center", priority: 2 },
    { set: "boroughs", at: [-73.945, 40.645], text: "Brooklyn", kind: "borough", anchor: "center", priority: 2 },
    { set: "boroughs", at: [-73.865, 40.735], text: "Queens", kind: "borough", anchor: "center", priority: 2 },
    { set: "boroughs", at: [-73.995, 40.745], text: "Manhattan", kind: "borough", anchor: "center", priority: 2 },
    { set: "boroughs", at: [-73.885, 40.845], text: "The Bronx", kind: "borough", anchor: "center", priority: 2 },
    { set: "boroughs", at: [-74.11, 40.705], text: "New Jersey", kind: "borough", anchor: "center", priority: 1 },
    { set: "ends", at: 0, text: "Start", kind: "bridge", priority: 9 },
    { set: "ends", at: 42195, text: "Finish", kind: "bridge", priority: 9 },
  ];
  for (const b of course.bridges) {
    const pr = b.short === "Queensboro" ? 8 : b.short === "Verrazzano" ? 7 : 6;
    L.push({ set: "bridges-short", at: b.peak_at_m, text: b.short, kind: "bridge", priority: pr });
  }
  // along the route, for the flythrough (shown only just ahead of the camera)
  const route = [
    [0.02, "Start"], [0.93, `Verrazzano-Narrows Bridge, ${B.Verrazzano.peak_ft} ft`], [3.4, "Fourth Avenue"], [8.6, "Lafayette Avenue"],
    [10.2, "Bedford Avenue"], [13.1094, "Halfway"], [B.Pulaski.peak_at_m / MILE, "Pulaski Bridge"],
    [B.Queensboro.peak_at_m / MILE, `Queensboro Bridge, ${B.Queensboro.peak_ft} ft`], [16.7, "First Avenue"],
    [B["Willis Ave."].peak_at_m / MILE, "Willis Avenue Bridge"], [B["Madison Ave."].peak_at_m / MILE, "Madison Avenue Bridge"],
    [21.6, "Fifth Avenue"], [23.75, "Central Park"], [25.45, "Central Park South"], [26.2188, "Finish"],
  ];
  for (const [m, text] of route) L.push({ set: "route", at: M(m), text, kind: "bridge", priority: 8, lift: 6, ahead: 2200 });
  for (let k = 1; k <= 26; k++) L.push({ set: "miles", at: M(k), text: `Mile ${k}`, kind: "mile", priority: 5, lift: 3, ahead: 1400 });
  // tracked runners: labelled dots (positions from their own splits)
  for (const tr of tracked) L.push({ set: "leaders", at: () => (tr.now ? [tr.now[0], tr.now[1], tr.now[2]] : null), text: tr.label, kind: "lead", priority: 9, anchor: "left" });
  // the tail of the field: back and front of the runners still on the course
  L.push({ set: "tail-ends", at: () => (scene.extent ? scene.at(scene.extent[0]) : null), text: "Back of the field", kind: "lead", priority: 8, anchor: "right" });
  L.push({ set: "tail-ends", at: () => (scene.extent && scene.extent[1] < 42100 ? scene.at(scene.extent[1]) : null), text: "Front", kind: "lead", priority: 8, anchor: "left" });
  scene.setLabelCatalog(L);
  // on desktop the camera frames the subject around the caption at the bottom left
  const layoutFlags = () => {
    scene.captionBox = innerWidth >= 900 ? () => {
      const r = caption.getBoundingClientRect(), host = sceneEl.getBoundingClientRect();
      if (!r.width) return null;
      // the caption's height changes from step to step; frame for a typical one-sentence caption or taller
      const top = Math.min(r.top - host.top, host.height - 24 - 150);
      return [r.left - host.left, top, r.right - host.left, r.bottom - host.top];
    } : null;
  };
  layoutFlags();
  cleanup.on(window, "resize", layoutFlags);

  let current = null; // the step on screen

  // ---- still frame (no scrolling, no panels, no animation)
  if (STILL) {
    const P = STILLS[STILL] ?? STILLS.manhattan;
    const c = cohorts.findIndex((x) => x.target === (P.cohort ?? 4.5 * 3600));
    if (c >= 0) { ci = c; pacer = cohorts[c].pacer; pacerNet = cohorts[c].pacer_net; scene.pacer = pacer; }
    store.set({ ready: true });
    scene.showRunners = true;
    scene.runnerAlpha = 1;
    scene.showTracked = false;
    scene.bigDots = !!P.bigDots;
    scene.depthDots = !!P.depthDots;
    scene.setLabels(P.labels ?? []);
    scene.chaseZoomAdd = P.zoomAdd ?? 0;
    if (P.chase != null) scene.setChase(P.chase, { jump: true });
    else {
      scene.setMode(P.mode);
      scene.setClock(P.clock, { instant: true });
      scene.flyTo(P.view ?? P.cam, { instant: true });
    }
    // ready = every layer (land, route, buildings, runners) loaded and a frame drawn after that
    let armed = false;
    scene.onAfterRender = () => {
      if (armed && !root.dataset.stillReady) cleanup.timeout(() => { root.dataset.stillReady = "1"; }, 50);
    };
    const poll = cleanup.interval(() => {
      const layers = scene.deck.layerManager?.getLayers?.() ?? [];
      const has = (id) => layers.some((l) => l.id === id || l.id.startsWith(`${id}-`));
      if (!(has("land") && has("road") && has("buildings") && has("runners")) || !layers.every((l) => l.isLoaded)) return;
      clearInterval(poll);
      armed = true;
      scene.deck.redraw("still frame ready");
    }, 100);
    return;
  }

  // ---- step handling
  // The camera keeps the street in view by its height and angle (scene.chaseView). The few
  // towers that would still block a flythrough step's view are faded for that step, decided
  // once per step from the line of sight along it (with the camera settled and trailing a turn).
  const isChase = (el) => el?.dataset.from != null;
  const fadeCache = new Map();
  function fadesFor(el) {
    if (!scene.buildings || !isChase(el)) return [];
    const key = `${el.dataset.step}|${innerWidth}x${innerHeight}`;
    if (fadeCache.has(key)) return fadeCache.get(key);
    const a = +el.dataset.from * MILE, b = +el.dataset.to * MILE, ids = new Set();
    // towers (60 m or more) that cross the line of sight to the runner or 60 m ahead of them
    for (let d = a; d <= b; d += 40) {
      for (const lag of [0, 100]) for (const i of scene.sightBlockers(d, [0, 60], lag)) if (scene.buildings.heights[i] / 10 >= 60) ids.add(i);
    }
    const out = [...ids];
    fadeCache.set(key, out);
    return out;
  }
  function onBuildingsLoaded() {
    if (current) scene.setFaded(fadesFor(current));
    // work out every flythrough step's fades in idle time, so entering a step never stalls a frame
    const todo = steps.filter(isChase);
    const next = () => { const el = todo.shift(); if (!el) return; fadesFor(el); cleanup.idle(next, 50); };
    cleanup.idle(next, 50);
  }
  // One fixed caption (Caption.tsx) shows the card of the step on screen, cross-fading as the
  // step changes (instant: swap at once). The page's cards stay where they are, hidden, and
  // give each step its scroll length.
  const captionTo = (el, { instant = false } = {}) => store.set({ step: el.dataset.step, stepInstant: instant });
  const captionProgress = (el, p) => store.set({ progress: (steps.indexOf(el) + Math.min(1, Math.max(0, p))) / steps.length });
  const cfgOf = (el) => (isChase(el) ? CHASE : STEPS[el.dataset.step]);
  const chaseD = (el, p) => {
    const a = +el.dataset.from * MILE, b = +el.dataset.to * MILE;
    let t = Math.min(1, Math.max(0, p));
    if (reducedMotion()) t = Math.round(t * 2) / 2; // key frames: start, middle, end of the stretch
    return a + (b - a) * t;
  };
  // step positions in the page, measured once (and on resize), so scrolling reads no layout
  let geom = new Map(), trigY = innerHeight * 0.55, lastY = -1;
  const measure = () => {
    trigY = innerHeight * 0.55;
    geom = new Map(steps.map((el) => { const r = el.getBoundingClientRect(); return [el, { top: r.top + scrollY, h: r.height }]; }));
  };
  measure();
  cleanup.on(window, "resize", () => { measure(); lastY = -1; });
  cleanup.observe(new ResizeObserver(() => { measure(); lastY = -1; })).observe(root.querySelector("[data-steps]"));
  const progressOf = (el) => { const g = geom.get(el); return (scrollY + trigY - g.top) / g.h; };
  // the race-clock steps: scroll position maps to the step's clock range (minutes after 9:10)
  const scrubTime = (el, p) => {
    const t0 = W1 + (+el.dataset.t0 || 50) * 60, t1 = W1 + (+el.dataset.t1 || 420) * 60;
    return t0 + (t1 - t0) * Math.min(1, Math.max(0, (p - 0.04) / 0.9));
  };
  // scroll progress → what the scene shows, for the step at the trigger line
  function applyProgress(el, p) {
    const cfg = cfgOf(el);
    captionProgress(el, p);
    // targets only: the scene eases the camera and the clock toward them every frame
    if (isChase(el)) scene.setChase(chaseD(el, p), { jump: reducedMotion() });
    else if (cfg?.mode === "field") {
      scene.setClock(scrubTime(el, p));
      if (cfg.path) scene.setPathT(handoffT(p));
    }
    else if (cfg?.mode === "finale") scene.setClock(endTime(p));
    else if (cfg?.atStart) scene.setClock(startT());
  }

  // what the race-clock camera keeps in frame
  // (on the scene's clock, or at time t)
  const trackedD = (key, t) => {
    const tr = tracked.find((x) => x.key === key);
    if (t == null && tr.now) return tr.now[3];
    t ??= scene.clock;
    const p = scene._posFor(tr.start, tr.times, t);
    if (p) return p[3];
    return t >= tr.start + tr.net ? 42195 : 0; // finished (or not yet started)
  };
  const FOLLOW = {
    // the two winners and the lead pack around them, up to the finish
    leaders: { min: 2500, extent: (t) => {
      const a = trackedD("win_m", t), b = trackedD("win_w", t);
      return [Math.max(0, Math.min(a, b) - 1200), Math.min(42195, Math.max(a, b) + 600)];
    } },
    // the last finisher and the runners around them
    last: { min: 4000, extent: (t) => { const d = trackedD("last", t); return [Math.max(0, d - 2000), Math.min(42195, d + 2000)]; } },
    // the last few hundred runners on the course
    back: { min: 3000, extent: () => scene.backExtent(300) },
    // the last finisher, widening ahead of them to take in the back of the field once it
    // gathers there. Late starters still crossing the bridge behind them are left out, so the
    // camera doesn't swing back to Staten Island after the handoff; at 11:13 this is the
    // handoff's own last view
    tail: { min: 4000, extent: (t) => {
      const d = trackedD("last", t), back = scene.backExtent(300);
      let b = Math.min(42195, d + 2000);
      if (back && back[1] > b) b = Math.min(42195, back[1], d + 12000);
      return [Math.max(0, d - 2000), b];
    } },
  };
  function setFollowFor(cfg) {
    const f = FOLLOW[cfg.follow];
    scene.followExtent = f?.extent ?? null;
    scene.followMinSpan = f?.min ?? null;
  }
  // the view the follow camera settles on for FOLLOW[key] at time t (as scene.followView does)
  const followViewAt = (key, t) => {
    const f = FOLLOW[key];
    let [a, b] = f.extent(t);
    if (b - a < f.min) { const c = (a + b) / 2; a = Math.max(0, c - f.min / 2); b = Math.min(42195, a + f.min); }
    const cam = CAMS.field;
    return scene.computeView({ ...cam, fit: [a, b], mobile: cam.mobile && { ...cam.mobile, fit: [a, b] } });
  };
  // The handoff: one camera move from the leaders' view at the men's winner's finish to the
  // last finisher's view at that same moment. Both ends are at 11:13 a.m.; the clock holds
  // there for the whole step while scroll moves the camera (see CourseScene.setPath).
  const handoffViews = () => [followViewAt("leaders", winEndT), followViewAt("last", winEndT)];
  // scroll → position along the path: eased, from the step's first pixel (no hold at the start),
  // arriving with 15% of the step to spare so the last view sits still under the card
  const handoffT = (p) => {
    const u = Math.min(1, Math.max(0, p / 0.85));
    return reducedMotion() ? Math.round(u) : (1 - Math.cos(Math.PI * u)) / 2;
  };
  // (from above, the path lifts off from wherever the leaders' camera is)
  function startHandoff({ fromBelow = false, fromHere = !fromBelow } = {}) {
    setFollowFor({});
    scene.setPath(handoffViews, { t: fromBelow ? 1 : 0, fromHere });
    scene.setPathT(handoffT(progressOf(current)));
  }
  // is a follow target more than about a screen away? (then fly there instead of panning)
  const farFrom = (v) => {
    const c = scene.viewState, w = innerWidth, h = innerHeight;
    const mpp = (MPP0 * Math.cos((c.latitude * Math.PI) / 180)) / 2 ** Math.min(c.zoom, v.zoom);
    const px = Math.hypot((v.longitude - c.longitude) * MLON, (v.latitude - c.latitude) * MLAT) / mpp;
    return px > Math.max(w, h) * 1.5 || Math.abs(v.zoom - c.zoom) > 2;
  };

  function enter(el) {
    if (current === el) return;
    const prevEl = current, prev = current ? cfgOf(current) : null;
    captionTo(el, { instant: !current });
    current = el;
    scene.setFaded(fadesFor(el));
    const cfg = cfgOf(el);
    const finale = cfg.mode === "finale";
    scene.trackedOnly = finale ? new Set(["last"]) : null;
    scene.holdAtFinish = finale ? new Set(["last"]) : null;
    if (prev?.mode === "field" && cfg.mode === "field") { // next card of the same race-clock section
      scene.setLabels(cfg.labels);
      scene.bigDots = !!cfg.tail;
      scene.setClock(scrubTime(el, progressOf(el)));
      if (cfg.path) { startHandoff({ fromBelow: prevEl?.dataset.step === "tail" }); return; }
      // after the handoff (or before it, scrolling up): the camera finishes the handoff's path,
      // then the follow camera picks up its motion and eases to its new target; a target far
      // away (a fast scroll that skipped the handoff) gets a fly-to instead
      const fromHandoff = !!scene.path;
      if (fromHandoff) scene.releasePath(cfg.tail ? 1 : 0); // finish the move first
      setFollowFor(cfg);
      scene._updateRunners();
      if (!scene.follow) scene.setFollow(CAMS.field);
      const fv = scene.followView();
      if (fv && !fromHandoff && farFrom(fv)) scene.flyTo(fv);
      return;
    }
    scene.clearPath();
    scene.showRunners = cfg.runners;
    scene.setLabels(cfg.labels);
    const clockMode = cfg.mode === "field" || finale;
    // which live data the caption shows: the runner panel, the race clock, or neither (their
    // graphics redraw at their real width once shown; see the ResizeObservers above)
    store.set({ live: cfg.mode === "chase" ? "chase" : clockMode ? "clock" : "none" });
    onFrame(scene);
    scene.showTracked = clockMode;
    scene.bigDots = !!cfg.tail || finale;
    if (cfg.mode === "chase") {
      scene.setChase(chaseD(el, progressOf(el)));
      return;
    }
    scene.setFollow(null);
    setFollowFor({});
    if (cfg.mode === "field") {
      const t = scrubTime(el, progressOf(el));
      scene.setClock(t, { transition: clockTransitionMs(t - scene.clock) });
      if (cfg.path) { // the handoff, entered from elsewhere (a reload or ?step=12): start on its path
        startHandoff({ fromHere: false });
        scene.setPathT(handoffT(progressOf(el)), { jump: true });
        return;
      }
      setFollowFor(cfg);
      scene._updateRunners();
      scene.setFollow(CAMS.field);
      const fv = scene.followView();
      scene.flyTo(fv ?? CAMS.field);
      return;
    }
    scene.setMode("overview");
    const t = cfg.atStart ? startT() : finale ? endTime(progressOf(el)) : null;
    if (t != null) scene.setClock(t, { transition: clockTransitionMs(t - scene.clock), instant: !prev });
    scene.flyTo(CAMS[cfg.cam]);
  }
  // Scroll → step and progress, once per frame from the cached step positions: the step at
  // the trigger line becomes active, and its progress sets the camera's and clock's targets.
  // Above the first step the scene shows the overview.
  let scrollQueued = false;
  const syncToScroll = () => {
    scrollQueued = false;
    const yT = scrollY + trigY;
    let active = steps[0];
    for (const el of steps) if (geom.get(el).top < yT) active = el;
    const entered = active !== current;
    if (entered) {
      steps.forEach((el) => el.classList.toggle("is-active", el === active));
      enter(active);
    }
    if (scrollY === lastY && !entered) return; // nothing moved
    lastY = scrollY;
    applyProgress(active, progressOf(active));
  };
  window.__marathon.sync = () => syncToScroll(); // for profiling: one scroll update without waiting for rAF
  cleanup.on(window, "scroll", () => {
    if (!scrollQueued) { scrollQueued = true; cleanup.frame(syncToScroll); }
  }, { passive: true });
  cleanup.interval(() => { if (!scrollQueued) syncToScroll(); }, 400); // also catches restored scroll positions

  // start on whichever step is at the trigger line (handles reloads mid-story)
  let initial = steps[0];
  for (const el of steps) if (geom.get(el).top < scrollY + trigY) initial = el;
  steps.forEach((el) => el.classList.toggle("is-active", el === initial));
  enter(initial);
  if (scene.mode !== "chase") scene.flyTo(scene._lastCam ?? CAMS.overview, { instant: true });
  store.set({ ready: true });

  // ---- the runner to follow: the reader picks a finish time in the menu (FinishTimeSelect.tsx)
  cleanup.add(store.subscribe((s, prev) => { if (s.cohort !== prev.cohort && cohorts[s.cohort]) applyCohort(s.cohort); }));
  function applyCohort(i) {
    ci = i;
    pacer = cohorts[i].pacer;
    pacerNet = cohorts[i].pacer_net;
    scene.pacer = pacer;
    // the dots fast-forward or rewind to the new runner's time instead of jumping
    if (scene.mode === "chase") { scene.blendClock(600); scene._pacerClock(); scene._dirty = true; }
    else if (current && cfgOf(current)?.atStart) scene.setClock(startT(), { transition: 600 });
    strip.setPace(cohorts[i].rel);
    // the flythrough cards' sentences for that finish time (CohortCopy.tsx)
    store.set({ copy: cohortCopy(cohorts[i], analysis) });
  }
  applyCohort(ci);

  // ---- the charts after the story
  // the elevation chart's notes: a few words and one number each; the climbs sit over their
  // hills, the flat-but-slow miles over their pace steps.
  const HL = Object.fromEntries(analysis.hills.map((h) => [h.name, h]));
  const EE = Object.fromEntries(analysis.elev_effect.map((r) => [r.label, r]));
  const m2123 = Math.round(["Mile 21", "Mile 22", "Mile 23"].reduce((a, l) => a + EE[l].rel.all, 0) / 3);
  // the three climbs read as one comparison (the chart's title), so they share a form
  // and are the three that phones keep; the flat miles' note is desktop-only
  const elevNotes = [
    { text: `Verrazzano: ${Math.round(HL.Verrazzano.excess.all)}% cost`, short: `Verrazzano ${Math.round(HL.Verrazzano.excess.all)}%`, hill: HL.Verrazzano, phone: true },
    { text: `Queensboro: ${Math.round(HL.Queensboro.excess.all)}% cost`, short: `Queensboro ${Math.round(HL.Queensboro.excess.all)}%`, hill: HL.Queensboro, phone: true },
    { text: `Miles 21–23: flat, ${m2123}% slower`, pace: ["Mile 21", "Mile 22", "Mile 23"] },
    { text: `Fifth Ave.: ${Math.round(HL["Fifth Avenue"].excess.all)}% cost`, short: `Fifth Ave. ${Math.round(HL["Fifth Avenue"].excess.all)}%`, hill: HL["Fifth Avenue"], phone: true },
  ];
  let charts = [];
  const drawCharts = () => {
    charts.forEach((c) => c.destroy());
    charts = [
      profileChart(root.querySelector('[data-chart="profile"]'), { course, analysis, store }),
      elevationChart(root.querySelector('[data-chart="elevation"]'), { course, analysis, paceColor: (v) => scene.paceColor(v), notes: elevNotes }),
    ];
  };
  drawCharts();
  cleanup.add(() => charts.forEach((c) => c.destroy()));

  onThemeChange(cleanup, () => {
    scene.readTheme();
    strip.draw();
    drawCharts();
  });

  // ---- ?step=N: open on card N (1–14) with its camera and clock settled, for screenshots
  if (STEP_N >= 1 && STEP_N <= steps.length) {
    const target = steps[STEP_N - 1];
    // (the handoff's camera move is done by 85% of its step: stop after it)
    const p = target.dataset.step === "end" ? 0.75 : target.dataset.step === "handoff" ? 0.92 : 0.5;
    const top = target.getBoundingClientRect().top + scrollY;
    scrollTo(0, top + target.offsetHeight * p - innerHeight * 0.55);
    syncToScroll();
    captionTo(target, { instant: true });
    const settle = () => {
      scene.runnerAlpha = scene.showRunners ? 1 : 0;
      scene.setClock(scene.mode === "chase" ? scene.clockAt(scene.pacer, scene.chaseTarget) : scene.clockTarget, { instant: true });
      if (scene.mode === "chase") scene.setChase(scene.chaseTarget, { jump: true });
      else if (scene.path) scene.setPathT(scene.pathTarget, { jump: true });
      else if (scene.follow) { const v = scene.followView(); if (v) scene.flyTo(v, { instant: true }); }
      else if (scene._lastCam) scene.flyTo(scene._lastCam, { instant: true });
      scene._dirty = true;
    };
    settle();
    const poll = cleanup.interval(() => {
      const layers = scene.deck.layerManager?.getLayers?.() ?? [];
      if (!scene.buildings || !layers.some((l) => l.id === "buildings") || !layers.every((l) => l.isLoaded)) return;
      clearInterval(poll);
      settle(); // again, now that the buildings are in
      let armed = false;
      scene.onAfterRender = () => {
        if (armed && !root.dataset.stepReady) cleanup.timeout(() => { root.dataset.stepReady = "1"; }, 50);
      };
      cleanup.timeout(() => { armed = true; scene._dirty = true; scene.deck.redraw("step ready"); }, 450); // after any tower fade
    }, 100);
  }
}
