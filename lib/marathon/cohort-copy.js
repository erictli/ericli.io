// Card text for the flythrough, one sentence per card, written for whichever finish time
// the reader follows. Each sentence is chosen from the cohort's own numbers
// (analysis.json["cohorts"]) so the claim holds for every choice; checkCohorts() logs
// [copy check] warnings when a premise fails.
// Used on both sides: the page renders the default (4:30) cards and runs checkCohorts at build;
// the client module rewrites the cards when the reader picks another finish time.
import { fmt } from "@/lib/stories/shared";

const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
export const spell = (n) => (n >= 0 && n < 10 ? WORDS[n] : fmt.int(n));
export const hmLabel = (s) => `${Math.floor(s / 3600)}:${String(Math.round((s % 3600) / 60)).padStart(2, "0")}`;
const lower = (label) => (label === "Final 0.2" ? "the last 0.2 mile" : label.replace(/^Miles?/, (w) => w.toLowerCase()));
const pc = (v) => Math.round((v - 1) * 100); // signed whole percent vs. the runner's average

/** "4 percent slower than their average" / "at about their average pace" */
function ph(v) {
  const p = Math.abs(pc(v));
  if (p === 0) return "at about their average pace";
  return `${p} percent ${v > 1 ? "slower" : "faster"} than their average`;
}
/** a range of whole percents: "3 to 8" or "about 5" */
function span(vals) {
  const a = vals.map((v) => Math.abs(pc(v)));
  const lo = Math.min(...a), hi = Math.max(...a);
  return lo === hi ? `about ${lo}` : `${lo} to ${hi}`;
}
/** several miles that may straddle the average */
function rangePh(vals) {
  const sv = vals.map(pc);
  const lo = Math.min(...sv), hi = Math.max(...sv);
  if (hi < 0) return `${span(vals)} percent faster than their average`;
  if (lo > 0) return `${span(vals)} percent slower than their average`;
  if (lo < 0 && hi > 0) return `between ${-lo} percent faster and ${hi} percent slower than their average`;
  if (lo < 0) return `up to ${-lo} percent faster than their average`; // the slowest of them at about average
  if (hi > 0) return `up to ${hi} percent slower than their average`;
  return "at about their average pace";
}
function secPh(s) {
  const n = Math.abs(Math.round(s));
  return `${spell(n)} second${n === 1 ? "" : "s"}`;
}
/** "48 seconds" / "one minute and 39 seconds" */
function durPh(s) {
  const n = Math.abs(Math.round(s));
  if (n < 60) return secPh(n);
  const m = Math.floor(n / 60), r = n % 60;
  return `${spell(m)} minute${m === 1 ? "" : "s"}${r ? ` and ${secPh(r)}` : ""}`;
}
function minPh(s) {
  const n = Math.round(Math.abs(s) / 60);
  return `${spell(n)} minute${n === 1 ? "" : "s"}`;
}

export function cohortCopy(c, A) {
  const idx = (label) => A.segments.findIndex((s) => s.label === label);
  const r = (label) => c.rel[idx(label)];
  const m = (k) => r(`Mile ${k}`);
  const T = hmLabel(c.target);
  const out = {};

  out.vz = `The race starts on the Verrazzano-Narrows Bridge, the highest point of the course, and runners who finished near ${T} ran the first three miles ${ph(r("Miles 1–3"))}.`;

  const bk = [4, 5, 6, 7, 8, 9, 10, 11, 12].map(m);
  out.bk = bk.every((v) => pc(v) < 0)
    ? `Through the flat miles of Brooklyn, they ${pc(r("Miles 1–3")) < 0 ? "kept running" : "ran"} ${span(bk)} percent faster than their average.`
    : `Through the flat miles of Brooklyn, they ran ${rangePh(bk)}.`;

  const loss = Math.round(c.loss_s / 60);
  out.pul = `They reached halfway, on the Pulaski Bridge, in ${c.half1}, and the second half took them ${
    loss === 0 ? "about the same time" : `about ${minPh(c.loss_s)} ${c.loss_s > 0 ? "longer" : "less"}`}.`;

  // The Queensboro crossing (climb about 14.8–15.6) spans split miles 15 and 16, so it is
  // measured over both, against miles 13 and 14 (qb_* in analysis.json)
  if (c.qb_sec <= 0) out.qb = `They ran the two miles over the Queensboro Bridge, 15 and 16, about ${durPh(c.qb_sec)} faster than miles 13 and 14.`;
  else if (c.qb_first_slow) out.qb = `On the Queensboro Bridge, miles 15 and 16, they ran slower than their average for the first time, and the two bridge miles cost them about ${durPh(c.qb_sec)} compared with miles 13 and 14.`;
  else out.qb = `The two miles over the Queensboro Bridge, 15 and 16, cost them about ${durPh(c.qb_sec)} compared with miles 13 and 14.`;

  // First Avenue (miles 17–18): close to average (within ±2%), faster, or still slower
  const f = [m(17), m(18)];
  const fMean = (f[0] + f[1]) / 2 - 1;
  // (a mile on each side of the ±2% band is classed by the two miles' mean)
  const fClass = Math.abs(fMean) <= 0.02 ? "even" : fMean < 0 ? "fast" : "slow";
  if (fClass === "even") {
    const m19 = m(19) - 1;
    out.first = m19 > 0.02 ? "On First Avenue they ran close to their average pace until mile 19, in East Harlem."
      : m19 >= -0.02 ? "On First Avenue they ran close to their average pace through mile 19."
      : "On First Avenue they ran close to their average pace.";
  } else if (fClass === "fast") out.first = "On First Avenue they ran slightly faster than their average, coming off the bridge.";
  else out.first = `On First Avenue they stayed ${span(f)} percent slower than their average.`;

  // the Bronx: mile 20, then whether miles 21–23 stayed near it
  const m20 = m(20), r2123 = [21, 22, 23].map(m);
  const near20 = r2123.every((v) => Math.abs(pc(v) - pc(m20)) <= 2);
  let tail;
  if (near20) tail = pc(m20) > 2 ? "miles 21 to 23 stayed about that slow" : "miles 21 to 23 were about the same";
  else if (r2123.every((v) => pc(v) > pc(m20) + 2)) tail = "the slowing continued through mile 23";
  else if (r2123.every((v) => pc(v) > 0)) tail = `miles 21 to 23 were ${span(r2123)} percent slower`;
  else tail = `miles 21 to 23 were ${rangePh(r2123)}`;
  out.bx = `Mile 20, over the Willis Avenue Bridge into the Bronx, was ${ph(m20)}, and ${tail}.`;

  // Fifth Avenue: is mile 24 the slowest, the second slowest, or further down?
  const order = A.segments.map((s, j) => [s.label, c.rel[j]]).filter((x) => x[1] != null).sort((a, b) => b[1] - a[1]);
  const rank24 = order.findIndex((x) => x[0] === "Mile 24");
  if (rank24 === 0) out.fifth = `The climb up Fifth Avenue in mile 24 was their slowest mile, ${ph(m(24))}.`;
  else if (rank24 === 1) out.fifth = `The climb up Fifth Avenue in mile 24 was ${ph(m(24))}, second only to ${lower(order[0][0])}.`;
  else out.fifth = `The climb up Fifth Avenue in mile 24 was ${ph(m(24))}, behind ${lower(order[0][0])}, their slowest.`;

  out.fin = `They ran the rolling last two miles through Central Park, and the runner on the map finished in ${fmt.hms(c.pacer_net)}.`;
  return out;
}

/** [copy check] guards for every cohort the reader can pick */
export function checkCohorts(A) {
  const warn = (c, msg) => console.warn(`[copy check] ${hmLabel(c.target)} cohort: ${msg}`);
  const idx = (label) => A.segments.findIndex((s) => s.label === label);
  for (const c of A.cohorts) {
    const rel = (label) => c.rel[idx(label)];
    if (Math.abs(c.pacer_net - c.target) > 120) warn(c, `followed runner finished ${fmt.hms(c.pacer_net)}, more than 2 min off`);
    if (c.n < 100) warn(c, `only ${c.n} finishers within five minutes`);
    if (c.rel.some((v) => v == null)) warn(c, "a mile has no pace data");
    for (const k of ["sec_15_14", "half1", "half2", "first_slow", "slowest", "loss_s"]) if (c[k] == null) warn(c, `${k} missing`);
    for (const k of ["qb_rel", "qb_sec", "qb_first_slow"]) if (c[k] == null) warn(c, `${k} missing`);
    // "On the Queensboro Bridge, miles 15 and 16, they ran slower than their average for the first time"
    if (c.qb_first_slow && !(c.qb_rel > 1 && c.rel.slice(0, idx("Mile 15")).every((v) => v <= 1))) warn(c, "Queensboro is not where they first ran slower than average");
    if (c.slowest !== "Mile 24" && rel(c.slowest) < rel("Mile 24")) warn(c, "slowest mile label inconsistent");
    // "On First Avenue they stayed … slower": they must already have been slower in mile 16
    const f = [rel("Mile 17"), rel("Mile 18")];
    if ((f[0] + f[1]) / 2 > 1.02 && !(rel("Mile 16") > 1)) warn(c, "First Avenue 'stayed slower' but mile 16 was not slower");
    // the finish is in Central Park after the Fifth Avenue climb
    if (!(rel("Mile 25") < rel("Mile 24"))) warn(c, "mile 25 not faster than mile 24");
    const copy = cohortCopy(c, A);
    for (const [k, v] of Object.entries(copy)) {
      if (/undefined|NaN|null/.test(v)) warn(c, `card ${k} has a missing value`);
      // one sentence per card: a single full stop, at the end (times like 2:07:18 have none)
      if ((v.match(/\.(\s|$)/g) || []).length !== 1 || !v.endsWith(".")) warn(c, `card ${k} is not one sentence`);
    }
  }
}
