// The graphic in the runner panel: one course profile, the elevation silhouette with each mile's
// slice filled in the followed group's pace colour for that mile, and the position as a
// vertical line with a dot. 44 px tall, in the runner panel ([data-strip],
// components/marathon/Caption.tsx).
import { SVG_FLUID } from "./ui";

const MILE = 1609.344;
const NS = "http://www.w3.org/2000/svg";

export function makeStrip(host, { course, analysis, paceColor, height = 44 }) {
  const el = (tag, attrs = {}, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    parent?.appendChild(e);
    return e;
  };
  const segs = analysis.segments;
  const total = course.length_m;
  const ft = (i) => course.pts[i][2] * 3.28084;
  let rel = analysis.profiles.all;
  let svg, marker, dot, cells = [], W = 280, lastD = 0;
  const rgb = (v) => { const k = paceColor(v); return `rgb(${k[0]},${k[1]},${k[2]})`; };
  const G = { H: height, top: 3, eh: height - 17, maxFt: 270 };

  function setPace(r) {
    if (r) rel = r;
    cells.forEach((c, j) => c.setAttribute("fill", rgb(rel[j])));
  }

  function ticks(x) {
    for (const [m, t] of [[0, "Start"], [13.1, "13.1"], [20, "20"], [26.2188, "26.2"]]) {
      el("text", { x: x(m * MILE), y: G.H - 3, class: "fill-marathon-ink-3 text-[12px]", "text-anchor": m === 0 ? "start" : m > 26 ? "end" : "middle" }, svg).textContent = t;
    }
  }

  function draw() {
    host.replaceChildren();
    cells = [];
    W = Math.max(200, host.clientWidth || 280);
    svg = el("svg", { viewBox: `0 0 ${W} ${G.H}`, width: W, height: G.H, preserveAspectRatio: "none", role: "img", class: SVG_FLUID,
      "aria-label": "Course elevation and the followed group's pace in each mile" }, host);
    const x = (m) => (m / total) * (W - 2) + 1;
    const y = (f) => G.top + G.eh - (f / G.maxFt) * G.eh;
    const elevPath = (i0, i1) => {
      let d = `M${x(i0 * course.step_m).toFixed(1)},${G.top + G.eh}`;
      for (let i = i0; i <= i1; i++) d += `L${x(i * course.step_m).toFixed(1)},${y(ft(i)).toFixed(1)}`;
      return d + `L${x(i1 * course.step_m).toFixed(1)},${G.top + G.eh}Z`;
    };
    // each mile's slice of the silhouette in its pace colour; a hairline on top for the shape
    cells = segs.map((sg) => {
      const i0 = Math.round(sg.from_m / course.step_m), i1 = Math.min(course.pts.length - 1, Math.round(sg.to_m / course.step_m));
      return el("path", { d: elevPath(i0, i1), class: "stroke-none" }, svg);
    });
    let top = "";
    course.pts.forEach((_, i) => { top += `${i ? "L" : "M"}${x(i * course.step_m).toFixed(1)},${y(ft(i)).toFixed(1)}`; });
    el("path", { d: top, class: "fill-none stroke-marathon-ink-3 stroke-1 [stroke-opacity:0.6]" }, svg);
    el("line", { x1: 0, x2: W, y1: G.top + G.eh + 0.5, y2: G.top + G.eh + 0.5, class: "stroke-marathon-rule stroke-1" }, svg);
    ticks(x);
    marker = el("line", { x1: 0, x2: 0, y1: G.top - 4, y2: G.top + G.eh, class: "stroke-marathon-ink stroke-[1.5]" }, svg);
    dot = el("circle", { r: 3.5, class: "fill-marathon-ink stroke-marathon-surface stroke-2" }, svg);
    setPace(rel);
    update(lastD);
  }

  function update(dMeters) {
    lastD = dMeters;
    if (!svg) return;
    const x = (m) => (m / total) * (W - 2) + 1;
    const xm = x(dMeters);
    const i = Math.min(course.pts.length - 1, Math.round(dMeters / course.step_m));
    marker.setAttribute("x1", xm);
    marker.setAttribute("x2", xm);
    dot.setAttribute("cx", xm);
    dot.setAttribute("cy", G.top + G.eh - (ft(i) / G.maxFt) * G.eh);
  }

  draw();
  return { draw, update, setPace };
}
