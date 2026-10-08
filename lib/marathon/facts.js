// Every number in the story's copy that doesn't depend on the finish time the reader picks,
// derived from analysis.json, course.json and compare.json (New York vs Chicago 2025). The page computes these on the
// server, so the numbers are in the HTML and the checks run at build (`[copy check]` warnings
// when a sentence's premise no longer holds, e.g. after re-running the pipeline for 2026).
import { fmt, copyCheck as check } from "@/lib/stories/shared";

export const MILE = 1609.344;
const W1 = 35 * 60; // Wave 1 gun, seconds after 8:35 a.m. (clock zero)

/** The race-clock cards' clock ranges, in minutes after the Wave 1 gun (data-t0/t1 on the
 *  steps): the first card runs to the men's winner's halfway point (by then both winners are
 *  in their second half), the second (their halves) on to the women's winner's finish, the
 *  first of the day; the handoff holds that moment, and the tail runs on from it. */
export function clockRanges(A) {
  const TR = A.tracked;
  return {
    winHalfMin: (TR.win_m.start + TR.win_m.half - W1) / 60, // about 10:10 a.m.
    firstFinishMin: (TR.win_w.start + TR.win_w.net - W1) / 60, // 10:54 a.m.
  };
}

export function buildFacts(A, course, C) {
  const F = A.facts;
  const vz = course.bridges.find((b) => b.short === "Verrazzano");
  const trk = A.tracked;
  const n = F.n_splits,
    N = F.n_official;
  const full = (F.crawl_coverage ?? n / N) >= 0.99; // the cache covers the whole field
  const tl = Object.fromEntries(A.tail.map((r) => [r.hour, r]));
  const lastEnd = trk.last.start + trk.last.net;
  const lh = Math.floor(trk.last.net / 3600),
    lm = Math.floor((trk.last.net % 3600) / 60);
  // "Both winners ran the second half faster than the first. The women's winner ran halves of
  // h1 and h2, and the men's winner h1 and h2, finishing N minutes after her."
  const halvesOf = (t) => [t.half, t.net - t.half];
  const [wm1, wm2] = halvesOf(trk.win_m),
    [ww1, ww2] = halvesOf(trk.win_w),
    [l1, l2] = halvesOf(trk.last);
  check(
    trk.win_m.half_recorded && trk.win_w.half_recorded,
    "a winner has no half-marathon time",
  );
  // the race clock's anchor: the women's winner's finish, the first of the day
  const wEnd = trk.win_w.start + trk.win_w.net,
    mEnd = trk.win_m.start + trk.win_m.net;
  check(
    mEnd > wEnd,
    "the men's winner did not finish after the women's winner (\"finishing N minutes after her\")",
  );
  const mAfter = `finishing ${Math.round((mEnd - wEnd) / 60)} minutes after her`;
  const winnerHalves =
    wm2 < wm1 && ww2 < ww1
      ? `Both winners ran the second half faster than the first. The women’s winner ran halves of ${fmt.hms(ww1)} and ${fmt.hms(ww2)}, and the men’s winner ${fmt.hms(wm1)} and ${fmt.hms(wm2)}, ${mAfter}.`
      : `The women’s winner ran halves of ${fmt.hms(ww1)} and ${fmt.hms(ww2)}, and the men’s winner ${fmt.hms(wm1)} and ${fmt.hms(wm2)}, ${mAfter}.`;
  // that card runs the clock from the men's winner's halfway point: both are in their second half
  check(
    trk.win_w.start + trk.win_w.half <= trk.win_m.start + trk.win_m.half,
    "the women's winner was not past halfway when the men's winner was (the halves card starts there)",
  );
  // "They ran the first half in about h hours and m minutes and the second in about ..." (the last
  // finisher has no half-marathon time; it's interpolated between their mile 13 and 14 times)
  const hm = (sec) => {
    const m = Math.round(sec / 60);
    return `${Math.floor(m / 60)} hours and ${m % 60} minutes`;
  };
  const about = trk.last.half_recorded ? "" : "about ";
  check(
    l2 > l1,
    "the last finisher's second half was not slower (the end card says first, then second)",
  );

  // "the highest point of the course": the Verrazzano deck crest
  check(
    course.pts.every((p) => p[2] <= vz.peak_ft / 3.28084 + 1),
    "the Verrazzano crest is not the highest point of the course",
  );
  check(
    F.last_finish_net === fmt.hms(trk.last.net),
    "tracked last finisher is not the last finisher",
  );
  check(
    Math.abs(lastEnd - (A.anim.last_finish ?? lastEnd)) < 60,
    "tracked last finisher does not cross last on the race clock",
  );
  // "The women's winner was the first runner to finish, at 10:54 a.m., when N runners had not yet
  // started.": the race-clock cards run the clock from 9:40 to her finish, and nobody in the full
  // finisher list finished earlier (wheelchair and handcycle racers aren't in it)
  check(
    wEnd > W1 + 30 * 60,
    "the women's winner finishes before the first race-clock card starts",
  );
  check(
    F.first_finish_s != null && Math.abs(F.first_finish_s - wEnd) < 1,
    'a runner finished before the women\'s winner ("the first runner to finish")',
  );
  // "When the women's winner finished, the last finisher was at mile x, in <place>, and would be
  // on the course for another h hours and m minutes."
  const LA = F.last_at_wwin;
  check(
    LA && LA.started && LA.mi > 0 && LA.mi < 26.2,
    "the last finisher had not started (or had finished) when the women's winner finished",
  );
  check(
    LA && Math.abs(LA.remaining_s - (lastEnd - wEnd)) < 60,
    "last finisher's remaining time does not match the race clock",
  );
  check(
    LA && /^(in|on) /.test(LA.place),
    "no place for the last finisher at the women's winner's finish",
  );
  const leftMin = Math.round((LA?.remaining_s ?? 0) / 60);
  for (let i = 1; i < A.tail.length; i++)
    check(
      A.tail[i].n < A.tail[i - 1].n,
      "runners on the course did not fall hour by hour",
    );
  check(
    tl[18].max_mi >= 26.1,
    'at 6 p.m. the remaining field did not reach the finish ("the last N miles")',
  );
  // ---- after the story: "How hard is New York?"
  const ps = Object.fromEntries(A.pos_split.map((r) => [r.key, r]));
  const gk = A.groups.map((g) => g.key);

  // ---- New York against Chicago 2025 (compare.json: both races by the same code)
  const cNY = C.nyc2025,
    cCHI = C.chicago2025,
    pc = (v) => Math.round(v * 100);
  // "The typical New York finisher took H hours and M minutes last year, N minutes longer than the
  // typical finisher in Chicago three weeks earlier." (median net finish, every finisher)
  const hmLong = (sec) => {
    const m = Math.round(sec / 60);
    return `${Math.floor(m / 60)} hours and ${m % 60} minutes`;
  };
  const gapMin = Math.round((cNY.finish.median_s - cCHI.finish.median_s) / 60);
  check(
    Math.abs(cNY.finish.median_s - F.median_finish_s) < 2,
    "compare.json and analysis.json disagree on New York's median finish",
  );
  check(
    gapMin > 0,
    "New York's typical finisher was not slower than Chicago's",
  );
  // "Among men, only N percent ran a faster second half, compared with N percent in Chicago. Among
  // women, N percent, compared with N percent in Chicago."
  const hNY = cNY.faster_second_half,
    hCHI = cCHI.faster_second_half;
  check(
    Math.abs(hNY.all.share - (1 - F.pct_positive_split)) < 0.005,
    "compare.json and analysis.json disagree on New York's faster second halves",
  );
  check(
    hCHI.men.share > hNY.men.share && hCHI.women.share > hNY.women.share,
    "Chicago's share of faster second halves is not higher than New York's",
  );
  // "In New York, runners ran the first 13 miles a to b percent faster than their average pace, stayed within
  // about c percent of it through mile 19, and ran every mile from 20 to 26 slower, by d to e percent."
  const P0 = A.profiles.all,
    segL = A.segments.map((g) => g.label);
  check(
    segL[0] === "Miles 1–3" && P0[0] < 1,
    "the first split is not miles 1–3, or it was not faster than average",
  );
  const relOf = (lo, hi) =>
    A.elev_effect
      .filter((r) => {
        const m = +(r.label.match(/(\d+)$/) || [])[1];
        return m >= lo && m <= hi;
      })
      .map((r) => r.rel.all);
  const r1 = relOf(3, 13),
    r2 = relOf(14, 19),
    r3 = relOf(20, 26);
  check(
    r1.length === 11 && r2.length === 6 && r3.length === 7,
    "the arc sentence's mile ranges are missing splits",
  );
  check(
    r1.every((v) => v < 0) && r3.every((v) => v > 0),
    "not every mile through 13 was fast, or not every mile from 20 to 26 was slow",
  );
  const rng = (a) => [
    Math.round(Math.min(...a.map(Math.abs))),
    Math.round(Math.max(...a.map(Math.abs))),
  ];
  const [f1, f2] = rng(r1),
    [s1, s2] = rng(r3),
    mid = Math.max(...r2.map(Math.abs));
  check(
    mid < Math.min(...r1.map(Math.abs), ...r3.map(Math.abs)) + 1,
    "miles 14–19 are not the steady stretch between the fast start and the slow finish",
  );
  const arc = `In New York, runners ran the first 13 miles ${f1} to ${f2} percent faster than their average pace, stayed within about ${Math.round(mid)} percent of it through mile 19, and ran every mile from 20 to 26 slower, by ${s1} to ${s2} percent.`;
  // chart title: "Every group ran the second half slower, but faster runners slowed less"
  check(
    gk.every((k) => ps[k].median_diff_s > 0 && ps[k].share > 0.5),
    "not every group ran the second half slower",
  );
  check(
    gk.every((k, i) => !i || ps[k].median_pct > ps[gk[i - 1]].median_pct),
    "slower groups did not slow more (median % between the halves)",
  );
  // ---- "Is it the hills?"
  const EE = Object.fromEntries(A.elev_effect.map((r) => [r.label, r]));
  // the three climbs, located on the course profile and measured over the split miles that hold them
  const HL = Object.fromEntries(A.hills.map((h) => [h.name, h]));
  const hVz = HL.Verrazzano,
    hQb = HL.Queensboro,
    hFifth = HL["Fifth Avenue"];
  const flat2123 = ["Mile 21", "Mile 22", "Mile 23"].map((l) => EE[l]);
  // where the climbs are vs. the split miles used for them
  check(hVz.to_mi <= 3, "the Verrazzano climb is not inside miles 1–3");
  check(
    hQb.from_mi < 15 &&
      hQb.to_mi > 15 &&
      hQb.to_mi <= 16 &&
      hQb.segments.join() === "Mile 15,Mile 16",
    "the Queensboro climb does not span split miles 15 and 16",
  );
  check(
    hFifth.to_mi <= 24 &&
      (hFifth.to_mi - Math.max(23, hFifth.from_mi)) /
        (hFifth.to_mi - hFifth.from_mi) >
        0.6,
    "the Fifth Avenue climb is not mostly in split mile 24",
  );
  // "...only about N percent slower than the flat miles after it, and the Queensboro Bridge about N
  // percent slower..."
  check(
    hVz.excess.all < hQb.excess.all && hVz.excess.all < hFifth.excess.all,
    "the Verrazzano climb did not cost less than the Queensboro and Fifth Avenue",
  );
  check(
    flat2123.every((r) => r.flat && r.rel.all >= 5),
    "miles 21–23 are not flat and slow",
  );
  // "...the flat miles after it" (Verrazzano); "...than the two miles before it" (Queensboro, Fifth)
  check(
    hVz.baseline.join() === "Mile 4,Mile 5" &&
      hVz.baseline.every((l) => EE[l].flat),
    "the Verrazzano is not compared with the flat miles 4 and 5",
  );
  check(
    hQb.baseline.join() === "Mile 13,Mile 14" &&
      hFifth.baseline.join() === "Mile 22,Mile 23",
    "the Queensboro and Fifth Avenue are not compared with the two miles before them",
  );
  // chart title: "Runners slowed late in the race, not just on the hills" (the flat miles 21–23 were
  // slower than the Verrazzano and Queensboro miles)
  const climbRel = [hVz, hQb].flatMap((h) =>
    h.segments.map((l) => EE[l].rel.all),
  );
  check(
    flat2123.every((r) => r.rel.all > Math.max(...climbRel)),
    "the flat miles 21–23 were not slower than the Verrazzano and Queensboro miles",
  );
  // "Partly, though not because runners slow down much on the climbs.": the second half's two
  // climbs, the Queensboro Bridge and Fifth Avenue, cost the typical finisher little of the extra
  // time their second half took (each climb's cost over its split miles, at the median pace)
  const medPace = F.median_finish_s / (course.length_m / MILE);
  const climbs2S = [hQb, hFifth].reduce(
    (a, h) => a + (h.excess.all / 100) * h.segments.length * medPace,
    0,
  );
  check(
    hQb.from_mi > 13.1 && hFifth.from_mi > 13.1,
    "the Queensboro or Fifth Avenue climb is not in the second half",
  );
  check(
    climbs2S < 0.25 * F.median_loss_min * 60,
    'the second-half climbs are more than a quarter of the second half\'s extra time ("not because runners slow down much on the climbs")',
  );
  // "the Verrazzano-Narrows Bridge, the biggest climb on the course" (against every climb)
  const CL = A.climbs,
    byName = Object.fromEntries(CL.map((c) => [c.name, c]));
  check(
    CL.every((c) => c.climb_ft <= byName["Verrazzano-Narrows Bridge"].climb_ft),
    "the Verrazzano is not the biggest climb on the course",
  );
  // "The exception is Fifth Avenue. Mile 24 ... was the slowest mile of the race"
  check(
    F.slowest_segment === "Mile 24",
    `the slowest mile is ${F.slowest_segment}, not mile 24`,
  );
  const ft10 = (v) => String(Math.round(v / 10) * 10);
  return {
    n_official: fmt.int(N),
    // the results list can be a runner or two short of the official count; the race clock uses the list
    list_phrase:
      F.n_finishers === N
        ? `, which list all ${fmt.int(N)} finishers. Counts on the race clock use that list`
        : `. The official count is ${fmt.int(N)} finishers; the results list has ${fmt.int(F.n_finishers)} of them, and the race clock counts from that list until the last runner finishes`,
    n_splits: fmt.int(n),
    n_interp: fmt.int(A.anim.n_interpolated ?? 0),
    // a few hundred finishers lack complete split records, so say how many were used
    splits_phrase: full
      ? `the ${fmt.int(n)} finishers with complete records`
      : `a random sample of ${fmt.int(n)} finishers`,
    win_w_clock: F.win_w_clock,
    not_started_at_wwin: fmt.int(F.not_started_at_wwin),
    last_dur: `${lh} hours and ${lm} minutes`,
    last_split: String(trk.last.last_split_mi).replace(/\.0$/, ""),
    last_finish_clock: F.last_finish_clock,
    winner_halves: winnerHalves,
    ny_median: hmLong(cNY.finish.median_s),
    median_gap: String(gapMin),
    last_start: F.last_start_clock,
    faster_half: `Among men, only ${pc(hNY.men.share)} percent ran a faster second half, compared with ${pc(hCHI.men.share)} percent in Chicago. Among women, ${pc(hNY.women.share)} percent, compared with ${pc(hCHI.women.share)} percent in Chicago.`,
    last_halves: `They ran the first half in ${about}${hm(l1)} and the second in ${about}${hm(l2)}.`,
    arc_sentence: arc,
    fifth_climb: ft10(hFifth.climb_ft),
    vz_climb: ft10(hVz.climb_ft),
    vz_excess: String(Math.round(hVz.excess.all)),
    qb_excess: String(Math.round(hQb.excess.all)),
    fifth_excess: String(Math.round(hFifth.excess.all)),
    m21_23: String(Math.round(flat2123.reduce((a, r) => a + r.rel.all, 0) / 3)),
    last_at_mi: LA ? LA.mi.toFixed(1) : "",
    last_at_place: LA?.place ?? "",
    last_at_left: `${Math.floor(leftMin / 60)} hours and ${leftMin % 60} minutes`,
    tail_n6: fmt.int(tl[18].n),
    tail_span6: (course.length_m / MILE - tl[18].min_mi).toFixed(1),
  };
}
