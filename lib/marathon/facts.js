// Every number in the story's copy that doesn't depend on the finish time the reader picks,
// derived from analysis.json, course.json and compare.json (New York vs Chicago 2025). The page computes these on the
// server, so the numbers are in the HTML and the checks run at build (`[copy check]` warnings
// when a sentence's premise no longer holds, e.g. after re-running the pipeline for 2026).
import { fmt, copyCheck as check } from "@/lib/stories/shared";

export const MILE = 1609.344;
const W1 = 35 * 60; // Wave 1 gun, seconds after 8:35 a.m. (clock zero)

/** The race-clock cards' clock ranges, in minutes after the Wave 1 gun (data-t0/t1 on the
 *  steps): the first card runs to the men's winner's halfway point, the second (their halves)
 *  on to their finish, the handoff holds that moment, and the tail runs on from it. */
export function clockRanges(A) {
  const TR = A.tracked;
  return {
    winHalfMin: (TR.win_m.start + TR.win_m.half - W1) / 60,
    winEndMin: (TR.win_m.start + TR.win_m.net - W1) / 60, // 11:13 a.m.
  };
}

export function buildFacts(A, course, C) {
  const F = A.facts;
  const vz = course.bridges.find((b) => b.short === "Verrazzano");
  const trk = A.tracked;
  const n = F.n_splits, N = F.n_official;
  const full = (F.crawl_coverage ?? n / N) >= 0.99; // the cache covers the whole field
  const tl = Object.fromEntries(A.tail.map((r) => [r.hour, r]));
  const lastEnd = trk.last.start + trk.last.net;
  const lh = Math.floor(trk.last.net / 3600), lm = Math.floor((trk.last.net % 3600) / 60);
  // "Both winners ran the second half faster than the first. The women's winner ran halves of
  // h1 and h2, and the men's winner h1 and h2."
  const halvesOf = (t) => [t.half, t.net - t.half];
  const [wm1, wm2] = halvesOf(trk.win_m), [ww1, ww2] = halvesOf(trk.win_w), [l1, l2] = halvesOf(trk.last);
  check(trk.win_m.half_recorded && trk.win_w.half_recorded, "a winner has no half-marathon time");
  const winnerHalves = wm2 < wm1 && ww2 < ww1
    ? `Both winners ran the second half faster than the first. The women’s winner ran halves of ${fmt.hms(ww1)} and ${fmt.hms(ww2)}, and the men’s winner ${fmt.hms(wm1)} and ${fmt.hms(wm2)}.`
    : `The women’s winner ran halves of ${fmt.hms(ww1)} and ${fmt.hms(ww2)}, and the men’s winner ${fmt.hms(wm1)} and ${fmt.hms(wm2)}.`;
  // "They ran the first half in about h hours and m minutes and the second in about ..." (the last
  // finisher has no half-marathon time; it's interpolated between their mile 13 and 14 times)
  const hm = (sec) => { const m = Math.round(sec / 60); return `${Math.floor(m / 60)} hours and ${m % 60} minutes`; };
  const about = trk.last.half_recorded ? "" : "about ";
  check(l2 > l1, "the last finisher's second half was not slower (the end card says first, then second)");

  // "the highest point of the course": the Verrazzano deck crest
  check(course.pts.every((p) => p[2] <= vz.peak_ft / 3.28084 + 1), "the Verrazzano crest is not the highest point of the course");
  check(F.last_finish_net === fmt.hms(trk.last.net), "tracked last finisher is not the last finisher");
  check(Math.abs(lastEnd - (A.anim.last_finish ?? lastEnd)) < 60, "tracked last finisher does not cross last on the race clock");
  // the first race-clock card runs the clock from 9:40 to the men's winner's finish
  const winEnd = trk.win_m.start + trk.win_m.net;
  check(winEnd > W1 + 30 * 60, "men's winner finishes before the first race-clock card starts");
  // "When the men's winner finished, the last finisher was at mile x, in <place>, and would be
  // on the course for another h hours and m minutes."
  const LA = F.last_at_mwin;
  check(LA && LA.started && LA.mi > 0 && LA.mi < 26.2, "the last finisher had not started (or had finished) when the men's winner finished");
  check(LA && Math.abs(LA.remaining_s - (lastEnd - winEnd)) < 60, "last finisher's remaining time does not match the race clock");
  check(LA && /^(in|on) /.test(LA.place), "no place for the last finisher at the men's winner's finish");
  const leftMin = Math.round((LA?.remaining_s ?? 0) / 60);
  for (let i = 1; i < A.tail.length; i++) check(A.tail[i].n < A.tail[i - 1].n, "runners on the course did not fall hour by hour");
  check(tl[18].max_mi >= 26.1, "at 6 p.m. the remaining field did not reach the finish (\"the last N miles\")");
  // ---- after the story: "Is New York a hard marathon?"
  const ps = Object.fromEntries(A.pos_split.map((r) => [r.key, r]));
  const gk = A.groups.map((g) => g.key);
  // "Of all finishers, N percent ran the second half slower than the first. For the typical
  // finisher, it took about M minutes longer."
  check(Math.abs(F.pct_positive_split - ps.all.share) < 0.001, "the positive-split share differs between facts and pos_split");
  check(Math.abs(F.median_loss_min - ps.all.median_diff_s / 60) < 0.2 && F.median_loss_min > 0, "the median second-half loss differs between facts and pos_split");
  // ---- the hills through effort: net rise and fall by half, and the energy cost of the course's
  // slopes (Minetti et al. 2002, J Appl Physiol 93:1039, cost of running on a grade i, J/kg/m),
  // over 50 m stretches of the course profile, against the same distance on the flat
  const zFt = course.pts.map((p) => p[2] * 3.28084), hi = Math.floor(zFt.length / 2);
  const netFirst = zFt[hi] - zFt[0], netSecond = zFt[zFt.length - 1] - zFt[hi];
  const minetti = (i) => 155.4 * i ** 5 - 30.4 * i ** 4 - 43.3 * i ** 3 + 46.3 * i ** 2 + 19.5 * i + 3.6;
  const effort = (a0, a1) => {
    const k = Math.max(1, Math.round(50 / course.step_m));
    let cost = 0, dist = 0;
    for (let a = a0; a + k <= a1; a += k) {
      const g = (course.pts[a + k][2] - course.pts[a][2]) / (k * course.step_m);
      cost += minetti(g) * k * course.step_m; dist += k * course.step_m;
    }
    return (cost / (minetti(0) * dist) - 1) * 100; // percent more than the flat
  };
  const effWhole = effort(0, zFt.length - 1), effGap = effort(hi, zFt.length - 1) - effort(0, hi);
  // "the first half drops about N feet overall and the second rises about N"
  check(netFirst < -30 && netSecond > 30, "the first half is not net downhill and the second net uphill");
  // "...the second half takes about 1 percent more energy than the first" and "the hills' extra cost
  // at only about a quarter of a percent"
  check(effGap > 0.7 && effGap < 1.3, `the second half's extra effort is ${effGap.toFixed(2)}%, not about 1 percent`);
  check(effWhole > 0.15 && effWhole < 0.35, `the course's extra effort is ${effWhole.toFixed(2)}%, not about a quarter of a percent`);

  // "...the last runner didn't cross the start line until 11:41 a.m., about two and a half hours
  // after the first wave." (wave offsets are minutes after the Wave 1 gun)
  const lastOff = Math.max(...F.wave_offsets_min);
  check(lastOff >= 140 && lastOff <= 160, `the last start is ${lastOff} minutes after the first wave, not about two and a half hours`);

  // ---- New York against Chicago 2025 (compare.json: both races by the same code)
  const cNY = C.nyc2025, cCHI = C.chicago2025, pc = (v) => Math.round(v * 100);
  // "The typical New York finisher took H hours and M minutes last year, N minutes longer than the
  // typical finisher in Chicago three weeks earlier." (median net finish, every finisher)
  const hmLong = (sec) => { const m = Math.round(sec / 60); return `${Math.floor(m / 60)} hours and ${m % 60} minutes`; };
  const gapMin = Math.round((cNY.finish.median_s - cCHI.finish.median_s) / 60);
  check(Math.abs(cNY.finish.median_s - F.median_finish_s) < 2, "compare.json and analysis.json disagree on New York's median finish");
  check(gapMin > 0, "New York's typical finisher was not slower than Chicago's");
  // "The weather doesn't explain it, since Chicago's race was a few degrees warmer and more humid."
  const wNY = cNY.weather, wCHI = cCHI.weather;
  check(wCHI.temp_f_start > wNY.temp_f_start && wCHI.temp_f_3h > wNY.temp_f_3h && wCHI.dew_f_start > wNY.dew_f_start, "Chicago's race was not warmer and more humid than New York's");
  check(wCHI.temp_f_3h - wNY.temp_f_3h < 8, "Chicago was more than a few degrees warmer");
  // "Among men, N percent ran a faster second half, and among women, N percent, compared with N and
  // N percent in Chicago."
  const hNY = cNY.faster_second_half, hCHI = cCHI.faster_second_half;
  check(Math.abs(hNY.all.share - (1 - F.pct_positive_split)) < 0.005, "compare.json and analysis.json disagree on New York's faster second halves");
  check(hCHI.men.share > hNY.men.share && hCHI.women.share > hNY.women.share, "Chicago's share of faster second halves is not higher than New York's");
  // "Runners who finished in about four hours ran the second half about N minutes slower than the
  // first in New York, and about N in Chicago." (4:00–4:10 finishers, median)
  const four = (c) => Math.round(c.four_hour_extra_min);
  check(four(cNY) > four(cCHI), "New York's four-hour runners did not slow more than Chicago's");
  // "For a four-hour runner, that's about a minute, close to how much more New York's four-hour
  // runners slowed in the second half than Chicago's." (1 percent of a two-hour half)
  const effMin = (effGap / 100) * 120;
  check(effMin > 0.7 && effMin < 1.5 && Math.abs(effMin - (cNY.four_hour_extra_min - cCHI.four_hour_extra_min)) < 0.75, "the second half's extra effort is not close to New York's extra slowdown against Chicago");
  // "Runners ran the first 13 miles a to b percent faster than their average pace, stayed within
  // about c percent of it through mile 19, and ran every mile from 20 to 26 slower, by d to e percent."
  const P0 = A.profiles.all, segL = A.segments.map((g) => g.label);
  check(segL[0] === "Miles 1–3" && P0[0] < 1, "the first split is not miles 1–3, or it was not faster than average");
  const relOf = (lo, hi) => A.elev_effect.filter((r) => { const m = +(r.label.match(/(\d+)$/) || [])[1]; return m >= lo && m <= hi; }).map((r) => r.rel.all);
  const r1 = relOf(3, 13), r2 = relOf(14, 19), r3 = relOf(20, 26);
  check(r1.length === 11 && r2.length === 6 && r3.length === 7, "the arc sentence's mile ranges are missing splits");
  check(r1.every((v) => v < 0) && r3.every((v) => v > 0), "not every mile through 13 was fast, or not every mile from 20 to 26 was slow");
  const rng = (a) => [Math.round(Math.min(...a.map(Math.abs))), Math.round(Math.max(...a.map(Math.abs)))];
  const [f1, f2] = rng(r1), [s1, s2] = rng(r3), mid = Math.max(...r2.map(Math.abs));
  check(mid < Math.min(...r1.map(Math.abs), ...r3.map(Math.abs)) + 1, "miles 14–19 are not the steady stretch between the fast start and the slow finish");
  const arc = `Runners ran the first 13 miles ${f1} to ${f2} percent faster than their average pace, stayed within about ${Math.round(mid)} percent of it through mile 19, and ran every mile from 20 to 26 slower, by ${s1} to ${s2} percent.`;
  // "The two halves of the course climb about the same" (or which half climbs more)
  const CH = A.climb_halves, chDiff = (CH.second_ft - CH.first_ft) / Math.min(CH.first_ft, CH.second_ft);
  const halves = Math.abs(chDiff) <= 0.05
    ? `The two halves of the course climb about the same, about ${Math.round(CH.first_ft / 10) * 10} feet in the first and ${Math.round(CH.second_ft / 10) * 10} in the second.`
    : `The ${chDiff > 0 ? "second" : "first"} half of the course climbs more, about ${Math.round(Math.max(CH.first_ft, CH.second_ft) / 10) * 10} feet against ${Math.round(Math.min(CH.first_ft, CH.second_ft) / 10) * 10} in the ${chDiff > 0 ? "first" : "second"}.`;
  // ---- "Is it the hills?" and "Which climbs cost the most?"
  // chart title: "Every group ran the second half slower, and faster runners slowed less."
  check(gk.every((k) => ps[k].median_diff_s > 0 && ps[k].share > 0.5), "not every group ran the second half slower");
  check(gk.every((k, i) => !i || ps[k].median_pct > ps[gk[i - 1]].median_pct), "slower groups did not slow more (median % between the halves)");
  const EE = Object.fromEntries(A.elev_effect.map((r) => [r.label, r]));
  // the three climbs, located on the course profile and measured over the split miles that hold them
  const HL = Object.fromEntries(A.hills.map((h) => [h.name, h]));
  const hVz = HL.Verrazzano, hQb = HL.Queensboro, hFifth = HL["Fifth Avenue"];
  const flat2123 = ["Mile 21", "Mile 22", "Mile 23"].map((l) => EE[l]);
  // where the climbs are vs. the split miles used for them
  check(hVz.to_mi <= 3, "the Verrazzano climb is not inside miles 1–3");
  check(hQb.from_mi < 15 && hQb.to_mi > 15 && hQb.to_mi <= 16 && hQb.segments.join() === "Mile 15,Mile 16", "the Queensboro climb does not span split miles 15 and 16");
  check(hFifth.to_mi <= 24 && (hFifth.to_mi - Math.max(23, hFifth.from_mi)) / (hFifth.to_mi - hFifth.from_mi) > 0.6, "the Fifth Avenue climb is not mostly in split mile 24");
  // "The course's biggest climb, at the start, cost runners less than the big climbs later on."
  check(hVz.climb_ft > hQb.climb_ft && hVz.climb_ft > hFifth.climb_ft, "the Verrazzano is not the biggest climb");
  check(hVz.excess.all < hQb.excess.all && hVz.excess.all < hFifth.excess.all, "the Verrazzano climb did not cost less than the Queensboro and Fifth Avenue");
  check(flat2123.every((r) => r.flat && r.rel.all >= 5), "miles 21–23 are not flat and slow");
  // "...the flat miles after it" (Verrazzano); "...than the two miles before it" (Queensboro, Fifth)
  check(hVz.baseline.join() === "Mile 4,Mile 5" && hVz.baseline.every((l) => EE[l].flat), "the Verrazzano is not compared with the flat miles 4 and 5");
  check(hQb.baseline.join() === "Mile 13,Mile 14" && hFifth.baseline.join() === "Mile 22,Mile 23", "the Queensboro and Fifth Avenue are not compared with the two miles before them");
  // "Late in the race, runners ran flat miles slower than they had run the Verrazzano or the Queensboro."
  const climbRel = [hVz, hQb].flatMap((h) => h.segments.map((l) => EE[l].rel.all));
  check(flat2123.every((r) => r.rel.all > Math.max(...climbRel)), "the flat miles 21–23 were not slower than the Verrazzano and Queensboro miles");
  // "Partly, though not because runners slow down much on the climbs.": the second half's two
  // climbs, the Queensboro Bridge and Fifth Avenue, cost the typical finisher little of the extra
  // time their second half took (each climb's cost over its split miles, at the median pace)
  const medPace = F.median_finish_s / (course.length_m / MILE);
  const climbs2S = [hQb, hFifth].reduce((a, h) => a + (h.excess.all / 100) * h.segments.length * medPace, 0);
  check(hQb.from_mi > 13.1 && hFifth.from_mi > 13.1, "the Queensboro or Fifth Avenue climb is not in the second half");
  check(climbs2S < 0.25 * F.median_loss_min * 60, "the second-half climbs are more than a quarter of the second half's extra time (\"not because runners slow down much on the climbs\")");
  // every climb on the course, measured over the split miles that hold it
  const CL = A.climbs, byName = Object.fromEntries(CL.map((c) => [c.name, c]));
  const big = CL.filter((c) => c.climb_ft >= 90), small = CL.filter((c) => c.climb_ft < 90);
  // "Fifth Avenue. ... The Queensboro Bridge cost about N percent. The Verrazzano-Narrows Bridge,
  // the biggest climb on the course ..., cost about N percent" (the three over 90 feet)
  check(big.map((c) => c.name).sort().join() === "Fifth Avenue,Queensboro Bridge,Verrazzano-Narrows Bridge", "the climbs over 90 feet are not the Verrazzano, the Queensboro and Fifth Avenue");
  const ranked = [...big].sort((a, b) => b.cost - a.cost).map((c) => c.name);
  check(ranked.join() === "Fifth Avenue,Queensboro Bridge,Verrazzano-Narrows Bridge", `the big climbs rank ${ranked.join(", ")}`);
  check(CL.every((c) => c.climb_ft <= byName["Verrazzano-Narrows Bridge"].climb_ft), "the Verrazzano is not the biggest climb on the course");
  check(hFifth.from_mi >= 23 - 0.5, "the Fifth Avenue climb does not come after 23 miles");
  check(byName["Verrazzano-Narrows Bridge"].cost === hVz.excess.all && byName["Queensboro Bridge"].cost === hQb.excess.all && byName["Fifth Avenue"].cost === hFifth.excess.all, "the climbs list and the elevation chart disagree on the big three");
  // "The course's other rises, N feet or less, are too small for the split times to show what they
  // cost.": the ones measured cost no more than pace varies between flat miles (a flat mile
  // against the two flat miles before it); the rest are too short to measure
  const flatSteps = [];
  for (let i = 2; i < A.elev_effect.length; i++) {
    const [r0, r1, r2] = A.elev_effect.slice(i - 2, i + 1);
    if (r0.flat && r1.flat && r2.flat) flatSteps.push(r2.rel.all - (r0.rel.all + r1.rel.all) / 2);
  }
  const flatVar = Math.max(...flatSteps.map(Math.abs));
  check(flatSteps.length >= 3, "too few runs of three flat miles to measure mile-to-mile variation");
  check(small.every((c) => c.cost == null || c.cost <= flatVar), "a small rise cost more than flat miles vary");
  const smallMax = Math.max(...small.map((c) => c.climb_ft));
  check(F.slowest_segment === "Mile 24", `the slowest mile is ${F.slowest_segment}, not mile 24`);
  const ft10 = (v) => String(Math.round(v / 10) * 10);
  return {
    n_official: fmt.int(N),
    // the results list can be a runner or two short of the official count; the race clock uses the list
    list_phrase: F.n_finishers === N ? `, which list all ${fmt.int(N)} finishers. Counts on the race clock use that list`
      : `. The official count is ${fmt.int(N)} finishers; the results list has ${fmt.int(F.n_finishers)} of them, and the counts on the race clock use that list`,
    n_splits: fmt.int(n),
    n_interp: fmt.int(A.anim.n_interpolated ?? 0),
    // a few hundred finishers lack complete split records, so say how many were used
    splits_phrase: full ? `the ${fmt.int(n)} finishers with complete records` : `a random sample of ${fmt.int(n)} finishers`,
    win_m_clock: F.win_m_clock,
    not_started_at_mwin: fmt.int(F.not_started_at_mwin),
    last_dur: `${lh} hours and ${lm} minutes`,
    last_split: String(trk.last.last_split_mi).replace(/\.0$/, ""),
    last_finish_clock: F.last_finish_clock,
    winner_halves: winnerHalves,
    ny_median: hmLong(cNY.finish.median_s), median_gap: String(gapMin),
    net_first: String(Math.round(-netFirst / 10) * 10), net_second: String(Math.round(netSecond / 10) * 10),
    last_start: F.last_start_clock,
    faster_half: `Among men, ${pc(hNY.men.share)} percent ran a faster second half, and among women, ${pc(hNY.women.share)} percent, compared with ${pc(hCHI.men.share)} and ${pc(hCHI.women.share)} percent in Chicago.`,
    four_hour: `Runners who finished in about four hours ran the second half about ${four(cNY)} minutes slower than the first in New York, and about ${four(cCHI)} in Chicago.`,
    last_halves: `They ran the first half in ${about}${hm(l1)} and the second in ${about}${hm(l2)}.`,
    pos_split_pct: String(Math.round(F.pct_positive_split * 100)),
    median_loss: String(Math.round(F.median_loss_min)),
    halves_sentence: halves,
    arc_sentence: arc,
    fifth_climb: ft10(hFifth.climb_ft),
    vz_climb: ft10(hVz.climb_ft), vz_excess: String(Math.round(hVz.excess.all)),
    qb_excess: String(Math.round(hQb.excess.all)),
    fifth_excess: String(Math.round(hFifth.excess.all)),
    small_sentence: `The course’s other rises, ${smallMax} feet or less, are too small for the split times to show what they cost.`,
    m21_23: String(Math.round(flat2123.reduce((a, r) => a + r.rel.all, 0) / 3)),
    last_at_mi: LA ? LA.mi.toFixed(1) : "",
    last_at_place: LA?.place ?? "",
    last_at_left: `${Math.floor(leftMin / 60)} hours and ${leftMin % 60} minutes`,
    tail_n6: fmt.int(tl[18].n),
    tail_span6: (course.length_m / MILE - tl[18].min_mi).toFixed(1),
  };
}
