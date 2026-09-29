"use client";

import dynamic from "next/dynamic";
import { Intro } from "./Intro";
import { Projects } from "./Projects";
import { Writing, type Article } from "./Writing";
import type { HomeLayout } from "./names";

// Five ways of putting the harbor on the homepage. Each takes the same
// three blocks of content and the same live water; only the arrangement
// differs. Pick one with /?layout=<name> while deciding.

const HomeWater = dynamic(() => import("@/components/water/HomeWater"), { ssr: false });

type Props = { articles: Article[] };

const PAGE = "min-h-screen w-full font-system-sans text-[15px]";
const IN = ["animate-fadeInUpSmall1 opacity-0", "animate-fadeInUpSmall2 opacity-0", "animate-fadeInUpSmall3 opacity-0"];

/** Content on the left, water the right half of the screen; a band up top on a phone. */
export function SplitLayout({ articles }: Props) {
  return (
    <main className={PAGE}>
      <div className="flex flex-col gap-8 p-6 pt-16 pb-12 lg:min-h-dvh lg:flex-row lg:items-start lg:gap-6 lg:pt-6 lg:pb-6">
        <HomeWater className="order-1 h-[42dvh] min-h-[280px] w-full shrink-0 lg:order-2 lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)] lg:w-1/2" />
        <div className="order-2 mx-auto flex w-full max-w-132 flex-col gap-8 lg:order-1 lg:mx-0 lg:w-1/2 lg:max-w-none lg:pt-10 lg:pr-4">
          <div className="flex w-full max-w-sm flex-col gap-8">
            <Intro className={IN[0]} />
            <Projects className={IN[1]} />
            <Writing articles={articles} className={IN[2]} />
          </div>
        </div>
      </div>
    </main>
  );
}

/** Water in the middle, the intro to its left, projects and writing to its right. */
export function TriptychLayout({ articles }: Props) {
  return (
    <main className={PAGE}>
      <div className="flex flex-col gap-8 p-6 pt-16 pb-12 lg:grid lg:min-h-dvh lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-8 lg:pt-6 lg:pb-6">
        <HomeWater className="order-1 h-[42dvh] min-h-[280px] w-full lg:order-2 lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)]" />
        <div className="order-2 mx-auto w-full max-w-132 lg:order-1 lg:mx-0 lg:max-w-none lg:pt-10">
          <Intro className={`max-w-sm ${IN[0]}`} />
        </div>
        <div className="order-3 mx-auto flex w-full max-w-132 flex-col gap-8 lg:order-3 lg:mx-0 lg:max-w-none lg:pt-10">
          <Projects className={`max-w-sm ${IN[1]}`} />
          <Writing articles={articles} className={`max-w-sm ${IN[2]}`} />
        </div>
      </div>
    </main>
  );
}

/** The water fills the first screen; the words sit on it. */
export function OverlayLayout({ articles }: Props) {
  return (
    <main className={PAGE}>
      <div className="flex flex-col gap-8 p-6 pt-16 pb-12">
        <div className="relative">
          <HomeWater className="h-[calc(100dvh-5.5rem)] min-h-[520px] w-full" />
          {/* A little shade at the top so the intro reads on bright water. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3/5 rounded-t-2xl bg-gradient-to-b from-black/45 via-black/15 to-transparent" />
          <Intro tone="water" className={`absolute left-5 top-5 max-w-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:left-8 sm:top-8 ${IN[0]}`} />
          <div
            className={`absolute bottom-12 right-5 hidden w-80 flex-col gap-7 rounded-xl bg-black/30 p-5 backdrop-blur-md lg:flex xl:right-8 xl:w-96 ${IN[1]}`}
          >
            <Projects tone="water" />
            <Writing articles={articles} tone="water" />
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-132 flex-col gap-8 lg:hidden">
          <Projects className={IN[1]} />
          <Writing articles={articles} className={IN[2]} />
        </div>
      </div>
    </main>
  );
}

/** A wide band of harbor across the top, like a masthead; the words below. */
export function HorizonLayout({ articles }: Props) {
  return (
    <main className={PAGE}>
      <div className="flex flex-col gap-10 p-6 pt-16 pb-12">
        <HomeWater className="h-[45dvh] min-h-[280px] w-full lg:h-[54dvh]" />
        <div className="mx-auto flex w-full max-w-132 flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:gap-16">
          <div className="flex w-full max-w-sm flex-col gap-8">
            <Intro className={IN[0]} />
            <Projects className={IN[1]} />
          </div>
          <Writing articles={articles} className={`w-full max-w-sm ${IN[2]}`} />
        </div>
      </div>
    </main>
  );
}

/** A tall window onto the water, centered like a print; the intro above, the lists below. */
export function WindowLayout({ articles }: Props) {
  return (
    <main className={PAGE}>
      <div className="flex flex-col items-center gap-10 p-6 pt-16 pb-12">
        <Intro className={`w-full max-w-md ${IN[0]}`} />
        <HomeWater className="h-[62dvh] min-h-[360px] w-full max-w-md lg:max-w-xl" />
        <div className="flex w-full max-w-md flex-col gap-8 sm:max-w-xl sm:flex-row sm:justify-between sm:gap-12">
          <Projects className={`sm:w-1/2 ${IN[1]}`} />
          <Writing articles={articles} className={`sm:w-1/2 ${IN[2]}`} />
        </div>
      </div>
    </main>
  );
}

export const HOME_LAYOUTS: Record<HomeLayout, (props: Props) => React.JSX.Element> = {
  split: SplitLayout,
  triptych: TriptychLayout,
  overlay: OverlayLayout,
  horizon: HorizonLayout,
  window: WindowLayout,
};
