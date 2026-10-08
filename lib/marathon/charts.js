// The charts after the scrolly: pace in each mile by finish-time group, and where the hills
// mattered (the course elevation over the typical runner's pace in each mile).
// Drawn with d3 into a slot the page renders; every element takes Tailwind classes in the
// story's color tokens (marathon.css), so the charts follow light/dark mode. The pace chart's
// key is React (components/marathon/GroupLegend.tsx) and reaches the chart through the store.
// Each chart returns destroy(), which unsubscribes, disconnects its ResizeObserver and
// empties its slot.
import * as d3 from "d3";
import { cssVar } from "@/lib/stories/client";
import { SVG_FLUID, TIP_ROW, TIP_STRONG, TIP_SWATCH, TOOLTIP, TOOLTIP_SHOWN, styleAxis } from "./ui";

const MILE = 1609.344;
const mi = (m) => m / MILE;

/** ordinal blue ramp for the four finish-time groups, fast → slow (validate_palette.js
 *  --ordinal against #ffffff and #0a0a0a: monotone lightness, light end ≥ 2.5:1); the
 *  --marathon-group-* tokens, light and dark */
const groupRamp = (el) => [1, 2, 3, 4].map((k) => cssVar(el, `--marathon-group-${k}`));

function tooltip(container) {
  const tip = document.createElement("div");
  tip.className = TOOLTIP;
  container.appendChild(tip);
  return {
    show(html, x, y) {
      tip.innerHTML = html;
      tip.classList.add(TOOLTIP_SHOWN);
      const cw = container.clientWidth, tw = tip.offsetWidth;
      let left = x + 14;
      if (left + tw > cw - 4) left = x - tw - 14;
      tip.style.left = `${Math.max(0, left)}px`;
      tip.style.top = `${Math.max(0, y - 10)}px`;
    },
    hide() { tip.classList.remove(TOOLTIP_SHOWN); },
  };
}

/** the slot's chart area: the SVG and its tooltip */
function chartWrap(el) {
  const wrap = document.createElement("div");
  wrap.className = "relative w-full";
  el.replaceChildren(wrap);
  return wrap;
}

const percent = (d) => (d > 0 ? `+${d}%` : `${d}%`);
const mileTick = (d) => (d === 0 ? "Start" : d === 13.1 ? "Half" : d === 26.2 ? "Finish" : `Mile ${d}`);

/* ------------------------------------------------------------------------ */
/* Chart 1: pace in each mile by finish-time group                           */
/* ------------------------------------------------------------------------ */
export function profileChart(el, { course, analysis, store }) {
  const segs = analysis.segments;
  const groups = analysis.groups;
  const G = groups.length;
  const colors = groupRamp(el);
  const series = groups.map((g, i) => ({
    key: g.key, label: g.label, short: g.short, color: colors[i], values: analysis.profiles[g.key], extreme: i === 0 || i === G - 1,
  }));
  // the line under the pointer, else the one hovered or pinned in the key
  let hover = null;
  const focusKey = () => hover ?? store.get().groupHover ?? store.get().groupPinned;

  const wrap = chartWrap(el);
  const tip = tooltip(wrap);
  let paths = null, labels = null;

  // identity never rests on the blues alone: the two extremes are heavier, every line is
  // labelled at its end, and hovering a line or a key (click to pin) isolates it
  function styleOf(s) {
    const f = focusKey();
    if (f) return f === s.key ? { w: 2.5, o: 1 } : { w: 1.25, o: 0.2 };
    return s.extreme ? { w: 2.25, o: 1 } : { w: 1.5, o: 0.75 };
  }
  function applyStyles() {
    if (!paths) return;
    paths.attr("stroke-width", (s) => styleOf(s).w).attr("stroke-opacity", (s) => styleOf(s).o);
    labels.style("opacity", (s) => (focusKey() && focusKey() !== s.key ? 0.35 : 1));
  }
  const unsubscribe = store.subscribe((s, prev) => {
    if (s.groupHover !== prev.groupHover || s.groupPinned !== prev.groupPinned) applyStyles();
  });

  function draw() {
    wrap.querySelector("svg")?.remove();
    const W = wrap.clientWidth || 700;
    const narrow = W < 560;
    const m = { t: 12, r: narrow ? 46 : 100, b: 30, l: 40 };
    const ph = narrow ? 240 : 300;
    const H = m.t + ph + m.b;
    const w = W - m.l - m.r;
    const svg = d3.select(wrap).append("svg").attr("viewBox", `0 0 ${W} ${H}`).attr("role", "img").attr("class", SVG_FLUID)
      .attr("aria-label", "Line chart of each finish-time group's pace in every mile, relative to its own average pace.");
    const x = d3.scaleLinear().domain([0, 26.2188]).range([0, w]);
    const gp = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);
    const all = series.flatMap((s) => s.values).filter((v) => v != null);
    const lo = Math.min(-8, Math.floor(((d3.min(all) - 1) * 100) / 5) * 5);
    const hi = Math.max(10, Math.ceil(((d3.max(all) - 1) * 100) / 5) * 5);
    const y = d3.scaleLinear().domain([lo, hi]).range([ph, 0]);
    const yt = [lo, 0, hi].filter((v, k, a) => a.indexOf(v) === k);
    gp.append("g").call(d3.axisLeft(y).tickValues(yt).tickSize(-w).tickFormat("")).call(styleAxis);
    gp.append("g").call(d3.axisLeft(y).tickValues(yt).tickSize(0).tickPadding(6).tickFormat(percent)).call(styleAxis);
    gp.append("line").attr("class", "stroke-marathon-axis stroke-1 [shape-rendering:crispEdges]").attr("x1", 0).attr("x2", w).attr("y1", y(0)).attr("y2", y(0));
    gp.append("g").attr("transform", `translate(0,${ph})`)
      .call(d3.axisBottom(x).tickValues([0, 13.1, 20, 26.2]).tickSize(0).tickPadding(8).tickFormat(mileTick)).call(styleAxis);
    gp.append("text").attr("class", "fill-marathon-ink-3 text-[13px]").attr("x", 4).attr("y", y(hi) + 13).text("Slower than their average");
    gp.append("text").attr("class", "fill-marathon-ink-3 text-[13px]").attr("x", 4).attr("y", y(lo) - 6).text("Faster");

    const pts = (s) => segs.map((sg, j) => ({ x: mi((sg.from_m + sg.to_m) / 2), v: s.values[j], j })).filter((d) => d.v != null);
    const line = d3.line().x((d) => x(d.x)).y((d) => y((d.v - 1) * 100)).curve(d3.curveMonotoneX);
    const shown = [...series.filter((s) => !s.extreme), ...series.filter((s) => s.extreme)];
    // (the class's stroke-width outranks the attribute applyStyles sets, as it always has:
    // focus shows through opacity)
    paths = gp.append("g").selectAll("path").data(shown).join("path")
      .attr("class", "fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round] transition-[stroke-opacity,stroke-width] duration-150")
      .attr("stroke", (s) => s.color).attr("d", (s) => line(pts(s)));

    // direct end labels, spread apart, with leader lines back to each line's end
    const endX = x(pts(series[0]).at(-1).x);
    const ends = series.map((s) => { const p = pts(s).at(-1); return { s, y0: y((p.v - 1) * 100), y: y((p.v - 1) * 100) }; })
      .sort((a, b) => a.y0 - b.y0);
    const minGap = 15;
    for (let i = 1; i < ends.length; i++) ends[i].y = Math.max(ends[i].y, ends[i - 1].y + minGap);
    const over = ends.at(-1).y - (ph - 4);
    if (over > 0) for (const e of ends) e.y -= over;
    for (let i = ends.length - 2; i >= 0; i--) ends[i].y = Math.min(ends[i].y, ends[i + 1].y - minGap);
    const lx = w + 16;
    const lg = gp.append("g");
    lg.selectAll("path").data(ends).join("path").attr("class", "fill-none stroke-marathon-axis stroke-1")
      .attr("d", (e) => `M${endX + 3},${e.y0} C${endX + 10},${e.y0} ${lx - 10},${e.y} ${lx - 3},${e.y}`);
    labels = lg.selectAll("g").data(ends.map((e) => Object.assign(e.s, { ly: e.y }))).join("g").attr("class", "transition-opacity duration-150")
      .attr("transform", (s) => `translate(${lx},${s.ly})`);
    labels.append("rect").attr("x", 0).attr("y", -1).attr("width", 10).attr("height", 2).attr("rx", 1).attr("fill", (s) => s.color);
    labels.append("text").attr("class", "fill-marathon-ink-2 text-[13px]").attr("x", 14).attr("y", 4).text((s) => (narrow ? s.short : s.label));

    // hover crosshair; the line nearest the pointer is highlighted
    const hl = gp.append("line").attr("class", "stroke-marathon-axis stroke-1 [shape-rendering:crispEdges]").attr("y1", 0).attr("y2", ph).style("opacity", 0);
    const dots = gp.append("g");
    gp.append("rect").attr("width", w).attr("height", ph).attr("fill", "transparent")
      .on("pointermove", (ev) => {
        const [px, py] = d3.pointer(ev);
        const mv = x.invert(px);
        let j = segs.findIndex((sg) => mi(sg.to_m) >= mv);
        if (j < 0) j = segs.length - 1;
        const sg = segs[j];
        const cx = x(mi((sg.from_m + sg.to_m) / 2));
        const vis = shown.filter((s) => s.values[j] != null);
        let near = null, nd = 14;
        for (const s of vis) { const d = Math.abs(y((s.values[j] - 1) * 100) - py); if (d < nd) { nd = d; near = s; } }
        if (hover !== (near?.key ?? null)) { hover = near?.key ?? null; applyStyles(); }
        hl.attr("x1", cx).attr("x2", cx).style("opacity", 1);
        dots.selectAll("circle").data(vis).join("circle").attr("class", "stroke-marathon-page stroke-2")
          .attr("r", 4).attr("cx", cx).attr("cy", (s) => y((s.values[j] - 1) * 100)).attr("fill", (s) => s.color)
          .style("opacity", (s) => (focusKey() && focusKey() !== s.key ? 0.25 : 1));
        const rows = vis.map((s) => {
          const v = (s.values[j] - 1) * 100;
          return `<div class="${TIP_ROW}"><span class="${TIP_SWATCH}" style="background:${s.color}"></span>${s.label} <strong class="${TIP_STRONG}">${v >= 0 ? "+" : "−"}${Math.abs(v).toFixed(1)}%</strong></div>`;
        }).join("");
        const br = course.bridges.find((b) => b.from_m < sg.to_m && b.to_m > sg.from_m);
        tip.show(`<strong class="${TIP_STRONG}">${sg.label}</strong>${br ? `, ${br.name}` : ""}${rows}`, px + m.l, m.t + 10);
      })
      .on("pointerleave", () => { hl.style("opacity", 0); dots.selectAll("circle").remove(); tip.hide(); hover = null; applyStyles(); });
    applyStyles();
  }

  draw();
  const ro = new ResizeObserver(() => draw());
  ro.observe(wrap);
  return { redraw: draw, destroy() { unsubscribe(); ro.disconnect(); el.replaceChildren(); } };
}

/* ------------------------------------------------------------------------ */
/* Chart 2: where the hills mattered. The course elevation across the top,    */
/* the typical runner's pace in each mile (vs. their own average) beneath it  */
/* on the same mile axis, with a few annotations                              */
/* ------------------------------------------------------------------------ */
export function elevationChart(el, { course, analysis, paceColor, notes }) {
  const segs = analysis.segments;
  const E = analysis.elev_effect;
  const rel = E.map((r) => r.rel.all);
  const wrap = chartWrap(el);
  const tip = tooltip(wrap);
  const rgb = (v) => { const k = paceColor(1 + v / 100); return `rgb(${k[0]},${k[1]},${k[2]})`; };

  function draw() {
    wrap.querySelector("svg")?.remove();
    const W = wrap.clientWidth || 700;
    const narrow = W < 560;
    const m = { t: 24, r: 12, b: 30, l: 40 };
    const eh = narrow ? 80 : 104, gap = 18, ph = narrow ? 190 : 220;
    const H = m.t + eh + gap + ph + m.b;
    const w = W - m.l - m.r;
    const svg = d3.select(wrap).append("svg").attr("viewBox", `0 0 ${W} ${H}`).attr("role", "img").attr("class", SVG_FLUID)
      .attr("aria-label", "The course elevation profile, with the typical runner's pace in each mile, compared with their own average, beneath it.");
    const x = d3.scaleLinear().domain([0, 26.2188]).range([0, w]);
    const g = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);

    // the climbs where they are on the course (not the split miles), through both panels
    const hills = analysis.hills;
    g.append("g").selectAll("rect").data(hills).join("rect").attr("class", "fill-marathon-rule")
      .attr("x", (h) => x(h.from_mi)).attr("width", (h) => Math.max(2, x(h.to_mi) - x(h.from_mi))).attr("y", 0).attr("height", eh + gap + ph);

    // elevation (stretched), bridges included
    const elev = course.pts.map((p, i) => [i * course.step_m, p[2] * 3.28084]);
    const ye = d3.scaleLinear().domain([0, 270]).range([eh, 0]);
    const zAt = (mi_) => course.pts[Math.min(course.pts.length - 1, Math.round((mi_ * MILE) / course.step_m))][2] * 3.28084;
    g.append("path").attr("class", "fill-marathon-ink-3 opacity-16").attr("d", d3.area().x((d) => x(mi(d[0]))).y0(eh).y1((d) => ye(d[1]))(elev));
    g.append("path").attr("class", "fill-none stroke-marathon-ink-3 stroke-1").attr("d", d3.line().x((d) => x(mi(d[0]))).y((d) => ye(d[1]))(elev));
    g.append("g").call(d3.axisLeft(ye).tickValues([100, 200]).tickSize(0).tickPadding(6).tickFormat((d) => `${d} ft`)).call(styleAxis);

    // pace in each split mile, coloured on the page's pace scale
    const gp = g.append("g").attr("transform", `translate(0,${eh + gap})`);
    const lo = Math.min(-8, Math.floor(d3.min(rel) / 4) * 4), hi = Math.max(12, Math.ceil(d3.max(rel) / 4) * 4);
    const y = d3.scaleLinear().domain([lo, hi]).range([ph, 0]);
    const yt = [lo, 0, hi];
    gp.append("g").call(d3.axisLeft(y).tickValues(yt).tickSize(-w).tickFormat("")).call(styleAxis);
    gp.append("g").call(d3.axisLeft(y).tickValues(yt).tickSize(0).tickPadding(6).tickFormat(percent)).call(styleAxis);
    gp.append("line").attr("class", "stroke-marathon-axis stroke-1 [shape-rendering:crispEdges]").attr("x1", 0).attr("x2", w).attr("y1", y(0)).attr("y2", y(0));
    gp.append("g").attr("transform", `translate(0,${ph})`)
      .call(d3.axisBottom(x).tickValues([0, 13.1, 20, 26.2]).tickSize(0).tickPadding(8).tickFormat(mileTick)).call(styleAxis);
    gp.append("text").attr("class", "fill-marathon-ink-3 text-[13px]").attr("x", x(1.2)).attr("y", y(hi) + 13).text("Slower than their average");
    const steps = segs.map((sg, j) => ({ j, x0: mi(sg.from_m), x1: mi(sg.to_m), v: rel[j] })).filter((d) => d.v != null);
    let path = "";
    steps.forEach((d, i) => { path += `${i ? "L" : "M"}${x(d.x0)},${y(d.v)}L${x(d.x1)},${y(d.v)}`; });
    gp.append("path").attr("class", "fill-none stroke-marathon-axis stroke-1").attr("d", path);
    gp.append("g").selectAll("line").data(steps).join("line").attr("class", "stroke-3 [stroke-linecap:round]")
      .attr("x1", (d) => x(d.x0) + 1).attr("x2", (d) => x(d.x1) - 1).attr("y1", (d) => y(d.v)).attr("y2", (d) => y(d.v))
      .attr("stroke", (d) => rgb(d.v));

    // callouts: a climb's just above its crest, the flat miles' just above their steps;
    // each tries a few spots near its point and takes the first that is clear
    const shown = notes.filter((n) => !narrow || n.phone);
    const ag = g.append("g");
    const placed = [];
    const clear = (b) => b[0] >= -m.l + 2 && b[2] <= w + m.r - 2 && b[1] >= -m.t + 2 && placed.every((p) => b[2] < p[0] || b[0] > p[2] || b[3] < p[1] || b[1] > p[3]);
    for (const n of shown) {
      let px, py;
      if (n.hill) { px = x(n.hill.to_mi); py = ye(zAt(n.hill.to_mi)); } // the crest
      else {
        const J = n.pace.map((l) => segs.findIndex((sg) => sg.label === l));
        px = (x(mi(segs[J[0]].from_m)) + x(mi(segs[J.at(-1)].to_m))) / 2;
        py = eh + gap + y(Math.max(...J.map((j) => rel[j])));
      }
      // a note, haloed in the page color
      const t = ag.append("text").attr("class", "fill-marathon-ink-2 stroke-marathon-page stroke-4 text-[13px] [paint-order:stroke] [stroke-linejoin:round]");
      t.text(narrow && n.short ? n.short : n.text);
      const tw = t.node().getComputedTextLength?.() || n.text.length * 6.5, th = 13;
      const spots = [[-tw / 2, -10], [6, -10], [-tw - 6, -10], [6, -22], [-tw - 6, -22], [-tw / 2, -24], [-tw / 2, -38], [-tw - 6, -38]];
      let pick = spots[0], box = null;
      for (const [dx, dy] of spots) {
        const b = [px + dx - 2, py + dy - th + 2, px + dx + tw + 2, py + dy + 3];
        if (clear(b)) { pick = [dx, dy]; box = b; break; }
      }
      if (!box) box = [px + pick[0] - 2, py + pick[1] - th + 2, px + pick[0] + tw + 2, py + pick[1] + 3];
      placed.push(box);
      t.attr("x", px + pick[0]).attr("y", py + pick[1]);
      ag.insert("line", "text").attr("class", "stroke-marathon-axis stroke-1").attr("x1", px).attr("x2", Math.min(Math.max(px, box[0] + 2), box[2] - 2)).attr("y1", py - 2).attr("y2", box[3] - 1);
      ag.insert("circle", "text").attr("class", "fill-marathon-ink").attr("cx", px).attr("cy", py).attr("r", 2.5);
    }

    // hover: the split mile under the pointer
    const hl = gp.append("line").attr("class", "stroke-marathon-axis stroke-1 [shape-rendering:crispEdges]").attr("y1", 0).attr("y2", ph).style("opacity", 0);
    gp.append("rect").attr("y", -(eh + gap)).attr("width", w).attr("height", ph + eh + gap).attr("fill", "transparent")
      .on("pointermove", (ev) => {
        const [px] = d3.pointer(ev);
        const mv = x.invert(px);
        let j = segs.findIndex((sg) => mi(sg.to_m) >= mv);
        if (j < 0) j = segs.length - 1;
        const r = E[j], cx = x(mi((segs[j].from_m + segs[j].to_m) / 2));
        hl.attr("x1", cx).attr("x2", cx).style("opacity", 1);
        const v = r.rel.all;
        tip.show(`<strong class="${TIP_STRONG}">${r.label}</strong><br>Climb ${r.climb_ft} ft, descent ${r.descent_ft} ft<br>${Math.abs(v) < 0.5 ? "About their average" : `${Math.abs(v).toFixed(1)}% ${v > 0 ? "slower" : "faster"} than their average`}`, px + m.l, m.t + 10);
      })
      .on("pointerleave", () => { hl.style("opacity", 0); tip.hide(); });
  }
  draw();
  const ro = new ResizeObserver(() => draw());
  ro.observe(wrap);
  return { redraw: draw, destroy() { ro.disconnect(); el.replaceChildren(); } };
}
