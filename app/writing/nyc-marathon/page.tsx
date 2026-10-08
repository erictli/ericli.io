import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";
import { ArticleHeader, PROSE } from "@/components/ArticleLayout";
import Caption from "@/components/marathon/Caption";
import CohortCopy from "@/components/marathon/CohortCopy";
import FinishTimeSelect from "@/components/marathon/FinishTimeSelect";
import GroupLegend from "@/components/marathon/GroupLegend";
import MarathonStory from "@/components/marathon/MarathonStory";
import SceneLoading from "@/components/marathon/SceneLoading";
import { readPublicJSON, readTimeOf } from "@/lib/stories/server";
import { copyCheck } from "@/lib/stories/shared";
import { buildFacts, clockRanges } from "@/lib/marathon/facts";
import { checkCohorts, cohortCopy, hmLabel } from "@/lib/marathon/cohort-copy";
import { MUTED, TEXT } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

// A data story: the copy is here, rendered on the server with every number computed from the
// story's data (lib/marathon/facts.js), along with the React UI that the client module drives
// (the caption card, the finish-time menu, the chart key). MarathonStory mounts the 3D scene
// and the charts in the browser. See README, "Data stories".

const SLUG = "nyc-marathon";
const URL = `https://ericli.io/writing/${SLUG}`;
const DATA = "writing/nyc-marathon/data/marathon/";

export async function generateMetadata(): Promise<Metadata> {
  const article = await getArticleBySlug(SLUG);
  if (!article) return { title: "Article Not Found" };
  const image = article.image && { url: article.image, width: 1200, height: 630 };
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: URL },
    openGraph: {
      title: article.title,
      description: article.description,
      url: URL,
      siteName: "Eric Li",
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      ...(image && { images: [image] }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      ...(image && { images: [image] }),
    },
  };
}

/** "About the data": the site's small text, muted, under a body-size heading. */
const SMALL_PROSE = cn(
  PROSE,
  "prose-h2:mt-0 prose-h2:mb-3 prose-h2:text-base prose-h2:leading-normal",
  "prose-p:my-3 prose-p:text-sm prose-p:leading-[1.6] prose-p:text-neutral-950/50 dark:prose-p:text-white/60",
  "prose-a:text-inherit dark:prose-a:text-inherit",
);

/** A chart wider than the text column, drawn into its slot by the client module. */
function Figure({ title, chart, note, legend }: { title: string; chart: string; note?: string; legend?: React.ReactNode }) {
  return (
    <figure className="mx-auto my-12 max-w-190 px-6">
      <figcaption className="mb-3.5 block text-[15px] leading-[1.45] font-[450]">{title}</figcaption>
      {legend}
      <div data-chart={chart} />
      {note && <p className={`mt-2 text-[13px] leading-normal ${MUTED}`}>{note}</p>}
    </figure>
  );
}

export default async function MarathonPage() {
  const article = await getArticleBySlug(SLUG);
  if (!article) notFound();

  const [A, course, compare] = await Promise.all([
    readPublicJSON<{ cohorts: { target: number }[]; groups: { key: string; label: string }[] }>(`${DATA}analysis.json`),
    readPublicJSON(`${DATA}course.json`),
    readPublicJSON(`${DATA}compare.json`),
  ]);
  // every number in the copy, with its [copy check]s (printed by `next build`)
  const f = buildFacts(A, course, compare);
  checkCohorts(A);
  const { winHalfMin, winEndMin } = clockRanges(A);
  // the flythrough's cards for the default finish time; the client module writes them for
  // others (CohortCopy)
  const i0 = Math.max(0, A.cohorts.findIndex((c) => c.target === 4.5 * 3600));
  const cc = cohortCopy(A.cohorts[i0], A);
  const sel = <FinishTimeSelect />;

  const intro = (
    <>
      <p>Last year {f.n_official} people finished the New York City Marathon, the most in the race’s history. This year’s race is on Sunday, Nov. 1.</p>
      <p>Timing mats record every runner at each mile from mile 3 to the finish, and New York Road Runners publishes the results. Few big marathons share this much: the other World Marathon Majors time runners every five kilometers, and their results sites don’t allow automated downloads.</p>
      <p>I used the splits of {f.splits_phrase} to follow the race mile by mile, measuring each mile against the runner’s own average pace.</p>
    </>
  );

  // The scroll steps. Each is a stretch of scroll (its min-height) that drives the scene; its
  // card is hidden here and shown in the caption card as the step comes up. Flythrough steps
  // (data-from/to, in miles) follow the course; race-clock steps (data-t0/t1, minutes after
  // the Wave 1 gun) run the clock.
  const steps: {
    id: string;
    h: string;
    from?: number;
    to?: number;
    t0?: number;
    t1?: number;
    card: React.ReactNode;
  }[] = [
    { id: "intro", h: "min-h-[120vh]", card: <p>Each dot is a finisher, green when running faster than their own average and red when slower, and the camera follows a runner who finished in {sel}.</p> },
    { id: "c-vz", from: 0, to: 2.3, h: "min-h-[200vh]", card: <p><CohortCopy k="vz">{cc.vz}</CohortCopy></p> },
    { id: "c-bk", from: 2.3, to: 12.9, h: "min-h-[230vh]", card: <p><CohortCopy k="bk">{cc.bk}</CohortCopy></p> },
    { id: "c-pul", from: 12.9, to: 14.75, h: "min-h-[160vh]", card: <p><CohortCopy k="pul">{cc.pul}</CohortCopy></p> },
    { id: "c-qb", from: 14.75, to: 16.4, h: "min-h-[240vh]", card: <p><CohortCopy k="qb">{cc.qb}</CohortCopy></p> },
    { id: "c-first", from: 16.4, to: 19.4, h: "min-h-[180vh]", card: <p><CohortCopy k="first">{cc.first}</CohortCopy></p> },
    { id: "c-bx", from: 19.4, to: 23.0, h: "min-h-[260vh]", card: <p><CohortCopy k="bx">{cc.bx}</CohortCopy></p> },
    { id: "c-fifth", from: 23.0, to: 24.4, h: "min-h-[240vh]", card: <p><CohortCopy k="fifth">{cc.fifth}</CohortCopy></p> },
    { id: "c-fin", from: 24.4, to: 26.2188, h: "min-h-[200vh]", card: <p><CohortCopy k="fin">{cc.fin}</CohortCopy></p> },
    { id: "leaders", t0: 30, t1: winHalfMin, h: "min-h-[170vh]", card: <p>Next, the fastest and slowest runners. Scroll to run the race clock to {f.win_m_clock}, when the men’s winner finished and {f.not_started_at_mwin} runners had not yet started.</p> },
    { id: "front", t0: winHalfMin, t1: winEndMin, h: "min-h-[170vh]", card: <p>{f.winner_halves}</p> },
    { id: "handoff", t0: winEndMin, t1: winEndMin, h: "min-h-[170vh]", card: <p>When the men’s winner finished, the last finisher was at mile {f.last_at_mi}, {f.last_at_place}, and would be on the course for another {f.last_at_left}.</p> },
    // the end-of-race card runs the clock from 11:13 a.m. to 9 p.m., so it gets more scroll
    // (the last runner arrives about 60% of the way in; the view then holds)
    { id: "tail", t0: winEndMin, t1: 710, h: "min-h-[320vh]", card: <p>By 6 p.m., {f.tail_n6} runners were left, spread over the last {f.tail_span6} miles of the course.</p> },
    { id: "end", h: "min-h-[200vh]", card: <p>The last of the {f.n_official} finishers crossed the line at {f.last_finish_clock}, {f.last_dur} after starting. {f.last_halves}</p> },
  ];

  const after1 = (
    <>
      <h2>How hard is New York?</h2>
      <p>Most of the other major marathons don’t let their results be downloaded, so they’re hard to compare. But Chicago’s 2025 results are available, and next to Chicago, one of the flattest big marathons, New York looks a little harder. The typical New York finisher took {f.ny_median} last year, {f.median_gap} minutes longer than the typical finisher in Chicago three weeks earlier.</p>
      <p>Some of that gap is who runs each race. But studies that compare the same people across races find it too. <a href="https://doi.org/10.51224/SportRxiv.942">A 2026 analysis</a> of 1.2 million marathon finishes found New York’s 2025 race about 4 minutes slower than Chicago’s for a three-hour runner, and <a href="https://runningwithrock.com/six-star-finisher-follow-up/">Running with Rock</a> found that people who have run all six original World Marathon Majors were typically about 4 minutes slower in New York than at Chicago, Berlin and London. The weather doesn’t explain it, since Chicago’s race was a few degrees warmer and more humid.</p>
      <p>New York runners also slowed more in the second half. Of all finishers, {f.pos_split_pct} percent ran it slower than the first, and the typical finisher took about {f.median_loss} minutes longer on it. {f.faster_half} {f.four_hour}</p>
      <p>{f.arc_sentence}</p>
    </>
  );
  const fig1 = { title: "Every group ran the second half slower, and faster runners slowed less." };
  const after2 = (
    <>
      <h2>Is it the hills?</h2>
      <p>Partly, though not because runners slow down much on the climbs. The famous ones aren’t the slowest miles. Runners ran the Verrazzano-Narrows Bridge, the biggest climb on the course at about {f.vz_climb} feet, only about {f.vz_excess} percent slower than the flat miles after it, and the Queensboro Bridge about {f.qb_excess} percent slower than the two miles before it. The exception is Fifth Avenue. Mile 24 climbs about {f.fifth_climb} feet alongside Central Park after 23 miles of racing, and it was the slowest mile of the race, about {f.fifth_excess} percent slower than the two miles before it. {f.small_sentence}</p>
      <p>The hills matter more through fatigue. {f.halves_sentence} But the first half drops about {f.net_first} feet overall and the second rises about {f.net_second}, so by a standard model of how slopes change the effort of running, the second half takes about 1 percent more energy than the first. For a four-hour runner, that’s about a minute, close to how much more New York’s four-hour runners slowed in the second half than Chicago’s. And miles 21 to 23, from the Bronx through Harlem, are flat, but runners ran them about {f.m21_23} percent slower than their average.</p>
      <p>Over the whole course, the same model puts the hills’ extra cost at only about a quarter of a percent, too little to explain the gap with Chicago. The rest likely comes from things the results can’t show. Runners travel to the start on Staten Island by ferry or bus, often hours before their wave, and the last runner didn’t cross the start line until {f.last_start}, about two and a half hours after the first wave. And some run New York for fun weeks after racing Chicago, which the 2026 study says makes New York look harder than it is.</p>
    </>
  );
  const fig2 = {
    title: "Late in the race, runners ran flat miles slower than they had run the Verrazzano or the Queensboro.",
    note: "Pace is the typical runner’s in each split mile, compared with their own average for the race. Shading marks the climbs. Elevation is stretched vertically.",
  };
  const after3 = (
    <>
      <p>I’ll try to update this story with the 2026 results after this year’s race. Good luck to everyone running.</p>
    </>
  );
  const about = (
    <>
      <h2>About the data</h2>
      <p>Results and splits are from New York Road Runners’ public results for the 2025 TCS New York City Marathon{f.list_phrase}. The pace figures use the {f.n_splits} finishers with complete split records, counting a record as complete when no more than four of its 25 timing-mat times are missing.</p>
      <p>Each mile is compared with the runner’s own average pace for the race. There are no timing mats at miles 1 and 2, so the first segment runs from the start to mile 3. The cards describe all finishers within five minutes of the chosen time, and the camera follows one of them, the runner whose pace by mile is closest to that group’s median.</p>
      <p>Each dot starts at its wave’s scheduled time plus the gap between the runner’s gun and net times, and moves at an even pace between timing mats. A dot is yellow at the runner’s average pace and shades to green as they run faster, fully green at 8 percent faster, and through orange to red as they slow, fully red at 10 percent slower. The {f.n_interp} runners with incomplete splits, most of them among the last to finish, are placed by even pace between the times that were recorded; the last finisher has no times after mile {f.last_split}.</p>
      <p>The Chicago figures are from the race’s official 2025 results, as compiled in the <a href="https://www.kaggle.com/datasets/ramostherunning/chicago-marathon-2000-2025">Chicago Marathon Results 2000–2025</a> dataset by Victor Ramos, available under the <a href="https://opendatacommons.org/licenses/odbl/1-0/">Open Database License</a>. Finish times are net times for every finisher in each race’s results, and a runner’s second half is their net finish time minus their half-marathon time. Temperatures and humidity are from the Central Park and Chicago Midway weather stations, through the Iowa Environmental Mesonet, at each race’s first start and three hours later. The 2026 analysis of the same runners across races is a preprint by Yi Hua Chang that has not been peer reviewed; its figures include each race’s weather. The effort of the course’s slopes uses Minetti and colleagues’ 2002 measurements of the energy cost of running uphill and downhill, published in the Journal of Applied Physiology, applied to the course’s elevation every 50 meters.</p>
      <p>Buildings within 300 meters of the route are from the city’s Building Footprints dataset on NYC Open Data, drawn at their roof heights. The route is based on the 2023 course published on Strava and WNYC Data News’ course and mile-marker file, calibrated to the official miles. Elevation is from the U.S. Geological Survey’s 3D Elevation Program, with bridge decks at their modeled height. Land and borough lines are from the U.S. Census Bureau.</p>
      <p>The published data has no names, bib numbers, runner IDs or hometowns.</p>
    </>
  );

  // The read time counts the story's own words (the .md file is only a listing), at the site's
  // rate. articles/nyc-marathon.md states it for the Writing list; check that they agree.
  const readTime = readTimeOf(
    article.title, intro, steps.map((s) => s.card), after1, fig1.title, after2, fig2.title, fig2.note, after3, about,
  ).text;
  copyCheck(article.readTime === readTime, `read time: the story's words take ${readTime}, articles/${SLUG}.md says ${article.readTime}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: new Date(article.date).toISOString(),
    author: { "@type": "Person", name: "Eric Li", url: "https://ericli.io" },
    url: URL,
    ...(article.image && { image: `https://ericli.io${article.image}` }),
  };

  return (
    <>
      {/* Wrapped so it isn't a direct child of <body> (see app/writing/[slug]/page.tsx). */}
      <div hidden>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
      <main className={`min-h-screen overflow-x-clip font-sans ${TEXT}`}>
        <MarathonStory cohort={i0} cohortLabels={A.cohorts.map((c) => hmLabel(c.target))} firstStep={steps[0].id}>
          <div className="mx-auto max-w-160 px-6 pt-20">
            <ArticleHeader article={{ title: article.title, date: article.date, readTime }} />
            <div className={PROSE}>{intro}</div>
          </div>

          {/* The scene stays on screen while the steps scroll over it; a still frame (?still=)
              fills the window with it. */}
          <section className="relative mt-10">
            <div
              data-scene
              className="sticky top-0 h-svh w-full overflow-hidden bg-marathon-water group-data-[still]/story:fixed group-data-[still]/story:inset-0 group-data-[still]/story:z-100 group-data-[still]/story:h-screen group-data-[still]/story:w-screen"
            >
              <SceneLoading />
              <Caption cards={Object.fromEntries(steps.map((s) => [s.id, s.card]))} />
            </div>
            <div data-steps className="pointer-events-none relative z-2 -mt-[100svh] pb-[10vh]">
              {steps.map((s) => (
                <div key={s.id} data-step={s.id} data-from={s.from} data-to={s.to} data-t0={s.t0} data-t1={s.t1} className={s.h}>
                  <div className="invisible">{s.card}</div>
                </div>
              ))}
            </div>
          </section>

          <div className="mx-auto mt-16 max-w-160 px-6">
            <div className={PROSE}>{after1}</div>
          </div>
          <Figure title={fig1.title} chart="profile" legend={<GroupLegend groups={A.groups.map(({ key, label }) => ({ key, label }))} />} />
          <div className="mx-auto max-w-160 px-6">
            <div className={PROSE}>{after2}</div>
          </div>
          <Figure title={fig2.title} chart="elevation" note={fig2.note} />
          <div className="mx-auto max-w-160 px-6">
            <div className={PROSE}>{after3}</div>
          </div>
          <footer className="mx-auto mt-10 max-w-160 px-6 pb-32 sm:pb-48">
            <div className={SMALL_PROSE}>{about}</div>
          </footer>
        </MarathonStory>
      </main>
    </>
  );
}
