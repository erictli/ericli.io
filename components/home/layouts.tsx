"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Writing, type Article } from "./Writing";
import { useHomeClasses, type Tone } from "./classes";
import { HarborCanvas, LABEL, LiveClock, LiveLine, Readout, WindBars, harborLabel, pierZone, useLiveHarbor } from "./harbor";
import { ClockLockup, FitText, InlineName, KnockoutHarbor, useMediaQuery } from "./type";
import type { HomeLayout } from "./names";

// The homepage's arrangements. They share the content and the live harbor;
// the posters treat the whole first screen as one composition.

const HomeWater = dynamic(() => import("@/components/water/HomeWater"), { ssr: false });

type Props = { articles: Article[] };

const IN = ["animate-fadeInUpSmall1 opacity-0", "animate-fadeInUpSmall2 opacity-0", "animate-fadeInUpSmall3 opacity-0"];
/** Poster pages: Inter, small and even, tabular figures. */
const POSTER = "min-h-dvh w-full font-sans text-[13px] leading-[1.45] font-[450]";
/** A poster's first screen: the viewport, less the page margin. */
const SCREEN = "flex min-h-dvh flex-col p-6 pt-16 pb-8 lg:h-dvh lg:min-h-[680px] lg:pt-6 lg:pb-6";
/** Clears the menu button in the top left corner. */
const CLEAR_MENU = "lg:pl-9";
/** Monospaced captions. */
const MONO = "font-mono text-[11px] uppercase tracking-[0.04em] tabular-nums";

// ---- Shared pieces -----------------------------------------------------------

function Signature({ tone = "page", className = "" }: { tone?: Tone; className?: string }) {
  const c = useHomeClasses(tone);
  return (
    <div className={`${c.text} ${className}`}>
      <p className="font-medium">Eric Li</p>
      <p className={c.muted}>
        Designer and builder
        <br />
        Brooklyn, New York
      </p>
    </div>
  );
}

function ProjectsMini({ tone = "page", align = "left", className = "" }: { tone?: Tone; align?: "left" | "right"; className?: string }) {
  const c = useHomeClasses(tone);
  return (
    <div className={`flex flex-col gap-1 ${align === "right" ? "items-end text-right" : "items-start"} ${c.text} ${className}`}>
      <p className={`${LABEL} ${c.muted} mb-1`}>Projects</p>
      <Link href="https://getversive.com" target="_blank" className="hover:opacity-60 transition-opacity">
        Versive <span className={c.muted}>AI user research</span>
      </Link>
      <Link href="/scratch" className="hover:opacity-60 transition-opacity">
        Scratch <span className={c.muted}>Markdown notes</span>
      </Link>
    </div>
  );
}

function WritingMini({
  articles,
  count = 3,
  tone = "page",
  align = "left",
  className = "",
}: {
  articles: Article[];
  count?: number;
  tone?: Tone;
  align?: "left" | "right";
  className?: string;
}) {
  const c = useHomeClasses(tone);
  return (
    <div className={`flex flex-col gap-1 ${align === "right" ? "items-end text-right" : "items-start"} ${c.text} ${className}`}>
      <p className={`${LABEL} ${c.muted} mb-1`}>Writing</p>
      {articles.slice(0, count).map((a) => (
        <Link key={a.slug} href={`/writing/${a.slug}`} className="max-w-72 hover:opacity-60 transition-opacity">
          {a.title}
        </Link>
      ))}
      <Link href="/writing" className={`${c.muted} ${c.mutedHover} mt-1`}>
        All writing
      </Link>
    </div>
  );
}

/** Versive, Scratch, Writing as a row of small links. */
function TopLinks({ className = "" }: { className?: string }) {
  const c = useHomeClasses();
  const link = `${c.muted} ${c.mutedHover}`;
  return (
    <nav className={`flex gap-6 ${className}`}>
      <Link href="https://getversive.com" target="_blank" className={link}>
        Versive
      </Link>
      <Link href="/scratch" className={link}>
        Scratch
      </Link>
      <Link href="/writing" className={link}>
        Writing
      </Link>
    </nav>
  );
}

// ---- Layouts -------------------------------------------------------------------

/** A tall window onto the water in one centered column. */
function WindowLayout({ articles }: Props) {
  return (
    <main className="min-h-screen w-full font-system-sans text-[15px]">
      <div className="flex flex-col items-center p-6 pt-16 pb-12">
        <div className="flex w-full max-w-3xl flex-col gap-10">
          <Intro className={`max-w-md ${IN[0]}`} />
          <HomeWater className="aspect-square w-full sm:aspect-[2/1]" />
          <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-12">
            <Projects className={`sm:w-1/2 ${IN[1]}`} />
            <Writing articles={articles} className={`sm:w-1/2 ${IN[2]}`} />
          </div>
        </div>
      </div>
    </main>
  );
}

/**
 * The name set large across a plate of water: ink on the page, white where
 * it crosses the water (a second copy, clipped to the plate).
 */
function OverLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  const headline = "font-sans font-extrabold uppercase leading-[0.8] tracking-[-0.045em]";
  const across = "pointer-events-none absolute left-1/2 top-1/2 w-[92vw] -translate-x-1/2 -translate-y-1/2 lg:w-[60vw]";
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10 lg:gap-7`}>
        <div className={`flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between ${IN[0]}`}>
          <p className={`${CLEAR_MENU} ${c.muted}`}>Designer and builder, Brooklyn</p>
          <LiveLine facts={facts} liveStatus={liveStatus} />
        </div>
        <div className="relative grid flex-1 place-items-center py-6 lg:py-0">
          <div aria-hidden className={across}>
            <FitText text="Eric Li" className={headline} />
          </div>
          <div className="relative aspect-[4/5] h-[34dvh] min-h-[240px] overflow-hidden lg:h-[42dvh]">
            <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={1.5} label={harborLabel(facts)} />
            <div aria-hidden className={`${across} text-white`}>
              <FitText text="Eric Li" className={headline} />
            </div>
          </div>
        </div>
        <Intro className={`mx-auto max-w-md gap-2 text-center text-[14px] ${IN[1]}`} />
        <div className={`flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between ${IN[2]}`}>
          <ProjectsMini />
          <WritingMini articles={articles} align="right" className="max-sm:items-start max-sm:text-left" />
        </div>
      </div>
    </main>
  );
}

/** The water across the bottom half of the page, a row of live details sitting on its edge. */
function HorizonLayout({ articles }: Props) {
  const { conditions, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className="flex min-h-dvh flex-col lg:h-dvh lg:min-h-[720px]">
        <div className="flex flex-1 flex-col justify-between gap-12 p-6 pt-16 pb-5 lg:pt-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className={`flex flex-col gap-6 ${CLEAR_MENU} ${IN[0]}`}>
              <p className="text-[clamp(2.75rem,5.5vw,5rem)] font-medium leading-[0.9] tracking-[-0.045em]">Eric Li</p>
              <Intro className="max-w-md gap-2 text-[14px]" />
            </div>
            <div className={`hidden content-start gap-8 lg:grid lg:grid-cols-2 lg:justify-self-end lg:gap-12 ${IN[1]}`}>
              <ProjectsMini />
              <WritingMini articles={articles} />
            </div>
          </div>
          <div className={`grid gap-4 tabular-nums sm:grid-cols-3 ${IN[2]}`}>
            <div>
              <p>
                {facts.place} <LiveClock />
              </p>
              <p className={c.muted}>
                {facts.date} ({pierZone(conditions.time)})
              </p>
            </div>
            <div className="sm:justify-self-center">
              <p>
                Wind {facts.wind}, {facts.sky.toLowerCase()}
              </p>
              <p className={c.muted}>
                {facts.sun.label} {facts.sun.time}
              </p>
            </div>
            <div className="sm:text-right">
              <p>{facts.coords}</p>
              <p className={c.muted}>© {new Date().getFullYear()} Eric Li</p>
            </div>
          </div>
        </div>
        <div className="relative h-[44dvh] min-h-[260px] w-full shrink-0 lg:h-[50dvh]">
          <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={4} label={harborLabel(facts)} />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-6 text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
            <span>{facts.spot}, looking west</span>
            <span>Click the water</span>
          </div>
        </div>
        <div className="grid gap-8 p-6 pb-12 sm:grid-cols-2 lg:hidden">
          <ProjectsMini />
          <WritingMini articles={articles} />
        </div>
      </div>
    </main>
  );
}

/** Water in the middle, large words flanking it, a mono caption beneath. */
function FlankLayout({ articles }: Props) {
  const { conditions, facts } = useLiveHarbor();
  const c = useHomeClasses();
  const big = "text-[clamp(2.25rem,4.4vw,4.75rem)] font-medium leading-none tracking-[-0.045em] whitespace-nowrap";
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10`}>
        <TopLinks className={`self-end ${IN[0]}`} />
        <div className="flex flex-1 flex-col justify-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className={`${big} ${IN[0]}`}>Eric Li</p>
          <figure className="relative w-full shrink-0 lg:w-[38vw]">
            <HarborCanvas conditions={conditions} className="aspect-[16/9] w-full" maxAspect={2.2} label={harborLabel(facts)} />
            <figcaption className={`mt-2 flex justify-between gap-4 lg:absolute lg:inset-x-0 lg:top-full ${MONO} ${c.muted}`}>
              <span>
                {facts.spot} — {facts.hh}:{facts.mm}
              </span>
              <span>
                {facts.wind} — {facts.sky}
              </span>
            </figcaption>
          </figure>
          <p className={`${big} lg:text-right ${IN[1]}`}>in Brooklyn</p>
        </div>
        <div className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between ${IN[2]}`}>
          <Intro className="max-w-sm gap-2 text-[14px]" />
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:items-end">
            <WritingMini articles={articles} count={2} align="right" className="max-lg:items-start max-lg:text-left" />
            <p className={`${MONO} ${c.muted}`}>Click the water to disturb it</p>
          </div>
        </div>
      </div>
    </main>
  );
}

/** The name on one line with the water set in it, between the words. */
function InlineLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={SCREEN}>
        <TopLinks className={`self-end ${IN[0]}`} />
        <div className="flex flex-1 items-center justify-center py-16">
          <div className={`w-full lg:w-[80%] ${IN[0]}`}>
            <InlineName
              first="Eric"
              last="Li"
              conditions={conditions}
              label={harborLabel(facts)}
              className="font-sans font-semibold tracking-[-0.05em]"
            />
          </div>
        </div>
        <div className={`grid gap-8 lg:grid-cols-3 lg:items-end ${IN[1]}`}>
          <div className="flex items-end gap-3">
            <WindBars windSpeed={conditions.windSpeed} className="mb-1" />
            <div>
              <p className={c.muted}>{liveStatus === "ok" ? "Now at Pier 1" : "At Pier 1"}</p>
              <p className="tabular-nums">
                {facts.time}, {facts.wind}, {facts.sky.toLowerCase()}
              </p>
            </div>
          </div>
          <Intro className="max-w-md gap-2 text-[14px] lg:justify-self-center" />
          <WritingMini articles={articles} count={2} align="right" className="max-lg:items-start max-lg:text-left lg:justify-self-end" />
        </div>
      </div>
    </main>
  );
}

/** The pier's time in large thin figures, a square of water between the hours and minutes. */
function ClockLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  const wide = useMediaQuery("(min-width: 1024px)");
  const label = harborLabel(facts);
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10 lg:justify-between lg:gap-6`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Signature className={`${CLEAR_MENU} ${IN[0]}`} />
          <Readout facts={facts} liveStatus={liveStatus} align="right" className={`max-sm:items-start max-sm:text-left ${IN[0]}`} />
        </div>
        {wide ? (
          <ClockLockup hh={facts.hh} mm={facts.mm} conditions={conditions} label={label} className="font-sans font-extralight tracking-[-0.02em]" />
        ) : (
          <div className="flex flex-col gap-6">
            <FitText text={`${facts.hh}:${facts.mm}`} className="font-sans font-extralight tabular-nums leading-[0.8] tracking-[-0.02em]" />
            <HarborCanvas conditions={conditions} className="aspect-square w-full" maxAspect={1.5} label={label} />
          </div>
        )}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Intro className={`max-w-sm gap-2 text-[13px] ${IN[1]}`} />
          <div className={`flex flex-col gap-8 sm:flex-row sm:gap-12 ${IN[2]}`}>
            <ProjectsMini align={wide ? "right" : "left"} />
            <WritingMini articles={articles} align={wide ? "right" : "left"} />
          </div>
        </div>
      </div>
    </main>
  );
}

/** A tall plate of water in the middle, the words pinned to the four corners. */
function CornersLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className="grid gap-10 p-6 pt-16 pb-12 lg:h-dvh lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-x-12 lg:gap-y-6 lg:pt-6 lg:pb-6">
        <Signature className={`${CLEAR_MENU} lg:col-start-1 lg:row-start-1 ${IN[0]}`} />
        <HarborCanvas
          conditions={conditions}
          className="aspect-[4/5] w-full lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:aspect-auto lg:h-full"
          maxAspect={1.5}
          label={harborLabel(facts)}
        />
        <Readout
          facts={facts}
          liveStatus={liveStatus}
          align="right"
          className={`max-lg:items-start max-lg:text-left lg:col-start-3 lg:row-start-1 lg:justify-self-end ${IN[0]}`}
        />
        <Intro className={`max-w-xs gap-2 text-[13px] lg:col-start-1 lg:row-start-3 lg:self-end ${IN[1]}`} />
        <div className={`flex flex-col gap-6 lg:col-start-3 lg:row-start-3 lg:self-end lg:justify-self-end ${IN[2]}`}>
          <ProjectsMini align="right" className="max-lg:items-start max-lg:text-left" />
          <WritingMini articles={articles} align="right" className="max-lg:items-start max-lg:text-left" />
        </div>
      </div>
    </main>
  );
}

/** The name set huge across the foot of the page, the harbor seen only through its letters. */
function KnockoutLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10 lg:justify-between lg:gap-8`}>
        <div className="order-2 grid gap-8 sm:grid-cols-2 lg:order-1 lg:grid-cols-4 lg:gap-10">
          <Signature className={`${CLEAR_MENU} ${IN[0]}`} />
          <Intro className={`gap-2 text-[13px] ${IN[0]}`} />
          <div className={`flex flex-col gap-6 ${IN[1]}`}>
            <ProjectsMini />
            <WritingMini articles={articles} count={2} />
          </div>
          <Readout facts={facts} liveStatus={liveStatus} className={`lg:items-end lg:text-right ${IN[1]}`} />
        </div>
        <div className="order-1 lg:order-2">
          <KnockoutHarbor
            text="Eric Li"
            conditions={conditions}
            label={harborLabel(facts)}
            className="font-sans font-extrabold tracking-[-0.055em]"
          />
        </div>
      </div>
    </main>
  );
}

export const HOME_LAYOUTS: Record<HomeLayout, (props: Props) => React.JSX.Element> = {
  window: WindowLayout,
  over: OverLayout,
  horizon: HorizonLayout,
  flank: FlankLayout,
  inline: InlineLayout,
  clock: ClockLayout,
  corners: CornersLayout,
  knockout: KnockoutLayout,
};
