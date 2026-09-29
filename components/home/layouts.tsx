"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Writing, type Article } from "./Writing";
import { useHomeClasses, type Tone } from "./classes";
import { HarborFrame, WaterCaption, WaterDetails, harborLabel, useLiveHarbor } from "./harbor";
import { ClockLockup, FitText, InlineName, KnockoutHarbor, useMediaQuery } from "./type";
import type { HomeLayout, KnockoutFont } from "./names";

// The homepage's arrangements. They share the content and the live harbor;
// the posters treat the whole first screen as one composition. Where the
// water is and what it's doing lives on the water itself.
//
// The posters keep to a few rules: one text size, one display size, labels
// in the muted color rather than capitals, and the page margin as the only
// left edge (the menu stays off the homepage).

const HomeWater = dynamic(() => import("@/components/water/HomeWater"), { ssr: false });

type Props = { articles: Article[]; font?: KnockoutFont };

const IN = ["animate-fadeInUpSmall1 opacity-0", "animate-fadeInUpSmall2 opacity-0", "animate-fadeInUpSmall3 opacity-0"];
/** Poster pages: Inter at one reading size, tabular figures. */
const POSTER = "min-h-dvh w-full font-sans text-[14px] leading-[1.5] font-[450]";
/** A poster's first screen: the viewport, less the page margin. */
const SCREEN = "flex min-h-dvh flex-col p-6 pb-8 lg:h-dvh lg:min-h-[680px] lg:pb-6";
/** Right-aligned on wide screens, left on narrow ones. */
const RIGHT_WHEN_WIDE = "lg:items-end lg:text-right max-lg:items-start max-lg:text-left";

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

/** A small list under a muted label. */
function Section({
  label,
  href,
  align = "left",
  className = "",
  children,
}: {
  label: string;
  href?: string;
  align?: "left" | "right";
  className?: string;
  children: React.ReactNode;
}) {
  const c = useHomeClasses();
  return (
    <div className={`flex flex-col gap-0.5 ${align === "right" ? "items-end text-right" : "items-start"} ${className}`}>
      {href ? (
        <Link href={href} className={`${c.muted} ${c.mutedHover} mb-2`}>
          {label}
        </Link>
      ) : (
        <p className={`${c.muted} mb-2`}>{label}</p>
      )}
      {children}
    </div>
  );
}

const PROJECT_LINKS = [
  { href: "https://getversive.com", external: true, name: "Versive", blurb: "AI user research" },
  { href: "/scratch", external: false, name: "Scratch", blurb: "Markdown notes" },
  { href: "https://juno.ericli.io", external: true, name: "Juno", blurb: "Naval roguelike" },
  { href: "/nyc", external: false, name: "NYC", blurb: "Neighborhood map" },
];

function ProjectsMini({ tone = "page", align = "left", className = "" }: { tone?: Tone; align?: "left" | "right"; className?: string }) {
  const c = useHomeClasses(tone);
  return (
    <Section label="Projects" align={align} className={`${c.text} ${className}`}>
      {PROJECT_LINKS.map((p) => (
        <Link key={p.name} href={p.href} {...(p.external ? { target: "_blank" } : {})} className="hover:opacity-60 transition-opacity">
          {p.name} <span className={c.muted}>{p.blurb}</span>
        </Link>
      ))}
    </Section>
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
    <Section label="Writing" href="/writing" align={align} className={`${c.text} ${className}`}>
      {articles.slice(0, count).map((a) => (
        <Link key={a.slug} href={`/writing/${a.slug}`} className="max-w-72 hover:opacity-60 transition-opacity">
          {a.title}
        </Link>
      ))}
      <Link href="/writing" className={`${c.muted} ${c.mutedHover}`}>
        All writing
      </Link>
    </Section>
  );
}

function AboutMini({ className = "" }: { className?: string }) {
  return (
    <Section label="About" className={className}>
      <Intro className="max-w-xs" />
    </Section>
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
        <p className={`${c.muted} ${IN[0]}`}>Designer and builder, Brooklyn</p>
        <div className="relative grid flex-1 place-items-center py-6 lg:py-0">
          <div aria-hidden className={across}>
            <FitText text="Eric Li" className={headline} />
          </div>
          <HarborFrame conditions={conditions} facts={facts} className="aspect-[4/5] h-[34dvh] min-h-[240px] lg:h-[42dvh]" maxAspect={1.5}>
            <div aria-hidden className={`${across} text-white`}>
              <FitText text="Eric Li" className={headline} />
            </div>
            <WaterCaption facts={facts} liveStatus={liveStatus} variant="stacked" />
          </HarborFrame>
        </div>
        <Intro className={`mx-auto max-w-md text-center ${IN[1]}`} />
        <div className={`flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between ${IN[2]}`}>
          <ProjectsMini />
          <WritingMini articles={articles} align="right" className="max-sm:items-start max-sm:text-left" />
        </div>
      </div>
    </main>
  );
}

/**
 * The water across the bottom half of the page. Above it, on one four-column
 * grid: the name alone at the top, and the about, projects and writing
 * sitting on the water's edge.
 */
function HorizonLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className="flex min-h-dvh flex-col lg:h-dvh lg:min-h-[720px]">
        <div className="flex flex-1 flex-col justify-between gap-12 p-6">
          <p className={`text-[clamp(3rem,6.5vw,6rem)] font-medium leading-[0.85] tracking-[-0.05em] ${IN[0]}`}>Eric Li</p>
          <div className="grid gap-8 lg:grid-cols-4 lg:items-end lg:gap-x-6">
            <Intro className={`max-w-sm lg:col-span-2 ${IN[1]}`} />
            <ProjectsMini className={`max-lg:hidden ${IN[2]}`} />
            <WritingMini articles={articles} className={`max-lg:hidden ${IN[2]}`} />
          </div>
        </div>
        <HarborFrame conditions={conditions} facts={facts} className="h-[44dvh] min-h-[260px] w-full shrink-0 lg:h-[50dvh]" maxAspect={4}>
          <WaterCaption facts={facts} liveStatus={liveStatus} className="sm:px-6" />
        </HarborFrame>
        <div className="grid gap-8 p-6 pb-12 sm:grid-cols-2 lg:hidden">
          <ProjectsMini />
          <WritingMini articles={articles} />
        </div>
      </div>
    </main>
  );
}

/** Water in the middle, large words either side of it. */
function FlankLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  const big = "text-[clamp(2.25rem,4.4vw,4.75rem)] font-medium leading-none tracking-[-0.045em] whitespace-nowrap";
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10`}>
        <div className="flex flex-1 flex-col justify-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className={`${big} ${IN[0]}`}>Eric Li</p>
          <HarborFrame conditions={conditions} facts={facts} className="aspect-[16/9] w-full shrink-0 lg:w-[38vw]" maxAspect={2.2}>
            <WaterCaption facts={facts} liveStatus={liveStatus} />
          </HarborFrame>
          <p className={`${big} lg:text-right ${IN[1]}`}>in Brooklyn</p>
        </div>
        <div className={`grid gap-8 lg:grid-cols-3 lg:items-end ${IN[2]}`}>
          <Intro className="max-w-sm" />
          <ProjectsMini className="lg:justify-self-center" />
          <WritingMini articles={articles} align="right" className={`${RIGHT_WHEN_WIDE} lg:justify-self-end`} />
        </div>
      </div>
    </main>
  );
}

/** The name on one line with a square of water set in it, between the words. */
function InlineLayout({ articles }: Props) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={SCREEN}>
        <div className="flex flex-1 items-center justify-center py-16">
          <div className={`w-full sm:w-[76%] lg:w-[58%] ${IN[0]}`}>
            <InlineName
              first="Eric"
              last="Li"
              conditions={conditions}
              label={harborLabel(facts)}
              aspect={1}
              height="cap-height"
              overlay={<WaterDetails facts={facts} liveStatus={liveStatus} className="max-sm:hidden" />}
              className="font-sans font-semibold tracking-[-0.05em]"
            />
          </div>
        </div>
        {/* Three even columns, top-aligned so their labels share a line. */}
        <div className={`grid gap-10 sm:grid-cols-3 sm:gap-8 ${IN[1]}`}>
          <AboutMini />
          <ProjectsMini className="sm:justify-self-center" />
          <WritingMini articles={articles} align="right" className="max-sm:items-start max-sm:text-left sm:justify-self-end" />
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
  const caption = <WaterCaption facts={facts} liveStatus={liveStatus} variant="stacked" />;
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10 lg:justify-between lg:gap-6`}>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Signature className={IN[0]} />
          <ProjectsMini align="right" className={`max-sm:items-start max-sm:text-left ${IN[0]}`} />
        </div>
        {wide ? (
          <ClockLockup
            hh={facts.hh}
            mm={facts.mm}
            conditions={conditions}
            label={harborLabel(facts)}
            overlay={caption}
            className="font-sans font-extralight tracking-[-0.02em]"
          />
        ) : (
          <div className="flex flex-col gap-6">
            <FitText text={`${facts.hh}:${facts.mm}`} className="font-sans font-extralight tabular-nums leading-[0.8] tracking-[-0.02em]" />
            <HarborFrame conditions={conditions} facts={facts} className="aspect-square w-full" maxAspect={1.5}>
              {caption}
            </HarborFrame>
          </div>
        )}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Intro className={`max-w-sm ${IN[1]}`} />
          <WritingMini articles={articles} align="right" className={`${RIGHT_WHEN_WIDE} ${IN[2]}`} />
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
      <div className="grid gap-10 p-6 pb-12 lg:h-dvh lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-x-12 lg:gap-y-6 lg:pb-6">
        <Signature className={`lg:col-start-1 lg:row-start-1 ${IN[0]}`} />
        <HarborFrame
          conditions={conditions}
          facts={facts}
          className="aspect-[4/5] w-full lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:aspect-auto lg:h-full"
          maxAspect={1.5}
        >
          <WaterCaption facts={facts} liveStatus={liveStatus} variant="stacked" />
        </HarborFrame>
        <ProjectsMini align="right" className={`${RIGHT_WHEN_WIDE} lg:col-start-3 lg:row-start-1 lg:justify-self-end ${IN[0]}`} />
        <Intro className={`max-w-xs lg:col-start-1 lg:row-start-3 lg:self-end ${IN[1]}`} />
        <WritingMini
          articles={articles}
          align="right"
          className={`${RIGHT_WHEN_WIDE} lg:col-start-3 lg:row-start-3 lg:self-end lg:justify-self-end ${IN[2]}`}
        />
      </div>
    </main>
  );
}

/** Faces for the knockout name: the heavier the letters, the more water shows through. */
const KNOCKOUT_FACES: Record<KnockoutFont, string> = {
  // Archivo at its widest and heaviest: an extended black grotesque.
  wide: "font-archivo font-black [font-stretch:125%] tracking-[-0.02em]",
  // The same face at its narrowest: a much taller line for the same width.
  condensed: "font-archivo font-black [font-stretch:62%] tracking-[-0.01em]",
  inter: "font-sans font-black tracking-[-0.035em]",
};

/** The name set huge across the foot of the page, the harbor seen only through its letters. */
function KnockoutLayout({ articles, font = "condensed" }: Props) {
  const { conditions, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`${POSTER} ${c.text}`}>
      <div className={`${SCREEN} gap-10 lg:justify-between lg:gap-8`}>
        <div className="order-2 grid gap-8 sm:grid-cols-2 lg:order-1 lg:grid-cols-4 lg:gap-x-6">
          <Signature className={IN[0]} />
          <Intro className={`max-w-xs ${IN[0]}`} />
          <ProjectsMini className={IN[1]} />
          <WritingMini articles={articles} count={2} align="right" className={`${RIGHT_WHEN_WIDE} ${IN[1]}`} />
        </div>
        <div className="order-1 lg:order-2">
          <KnockoutHarbor text="ERIC LI" conditions={conditions} label={harborLabel(facts)} className={KNOCKOUT_FACES[font]} />
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
