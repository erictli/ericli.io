"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BORDER } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";
import FinishTimeSelect from "./FinishTimeSelect";
import { useMarathon, useMarathonStore, type Live } from "./store";

const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The caption card over the map: the step's sentence, then the live data under a hairline
 * (the followed runner in the flythrough, the race clock after it), then the story's progress
 * as a 2px bar along the bottom edge. Bottom left on desktop, 24px in; full width on phones.
 *
 * Moving to another step fades the sentence out, swaps it and fades it back in (~250 ms);
 * when the card's contents change, its height eases to the new size (200 ms).
 */
export default function Caption({ cards }: { cards: Record<string, React.ReactNode> }) {
  const store = useMarathonStore();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(() => store.get().step);
  const [live, setLive] = useState<Live>(() => store.get().live);
  const [fading, setFading] = useState(false);
  const easeFrom = useRef<number | null>(null); // the card's height before a change
  const easeEnd = useRef(0);

  useEffect(() => {
    let timer = 0;
    const measure = () => {
      easeFrom.current = ref.current?.offsetHeight ?? null;
    };
    const swap = (step: string) => {
      clearTimeout(timer);
      measure();
      setShown(step);
      setFading(false);
    };
    const unsubscribe = store.subscribe((s, prev) => {
      if (s.step !== prev.step || (s.stepInstant && !prev.stepInstant)) {
        if (s.stepInstant || reducedMotion()) swap(s.step);
        else {
          setFading(true);
          clearTimeout(timer);
          timer = window.setTimeout(() => swap(s.step), 125);
        }
      }
      if (s.live !== prev.live) {
        measure();
        setLive(s.live);
      }
    });
    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, [store]);

  // ease the height from what it was to what the new contents need
  useLayoutEffect(() => {
    const el = ref.current, h0 = easeFrom.current;
    easeFrom.current = null;
    if (!el || h0 == null || reducedMotion()) return;
    el.style.transition = "none";
    el.style.height = "";
    const h1 = el.offsetHeight;
    if (Math.abs(h1 - h0) < 1) return;
    el.style.height = `${h0}px`;
    void el.offsetHeight; // (commit the start height)
    el.style.transition = "height 200ms ease";
    el.style.height = `${h1}px`;
    clearTimeout(easeEnd.current);
    easeEnd.current = window.setTimeout(() => {
      el.style.transition = "";
      el.style.height = "";
    }, 230);
  }, [shown, live]);
  useEffect(() => () => clearTimeout(easeEnd.current), []);

  return (
    <div
      ref={ref}
      data-caption
      aria-live="polite"
      className={cn(
        "absolute bottom-6 left-6 z-3 w-[min(380px,calc(100%-48px))] overflow-hidden",
        "rounded-xl border border-marathon-hairline bg-marathon-surface px-4 py-3.5 shadow-marathon-card",
        "text-[15px] leading-normal font-normal text-marathon-body",
        "max-[900px]:right-3 max-[900px]:bottom-3 max-[900px]:left-3 max-[900px]:w-auto",
        "group-data-[still]/story:hidden",
      )}
    >
      <div className={cn("text-pretty transition-opacity duration-125 ease-[ease]", fading && "opacity-0")}>
        {cards[shown]}
      </div>
      <div
        className={cn(
          `mt-2.5 border-t pt-2.5 text-[13px] leading-[1.45] text-marathon-ink-2 ${BORDER}`,
          live === "none" && "hidden",
        )}
      >
        <RunnerPanel hidden={live !== "chase"} />
        <ClockPanel hidden={live !== "clock"} />
      </div>
      <ProgressBar />
    </div>
  );
}

/** "Mile 17.9, First Avenue · 10:27/mi, [2% slower] than their 10:16 average", the menu, and
 *  the course profile (drawn into [data-strip] by lib/marathon/strip.js). */
function RunnerPanel({ hidden }: { hidden: boolean }) {
  const place = useMarathon((s) => s.place);
  const pace = useMarathon((s) => s.pace);
  return (
    <div className={cn("relative", hidden && "hidden")}>
      <span className="text-[13px] leading-[1.4] font-medium text-marathon-ink tabular-nums">{place}</span>
      <span className="tabular-nums">
        <span className="text-marathon-ink-3">{" · "}</span>
        {pace && (
          <>
            {pace.speed}/mi,{" "}
            <span
              className="inline-block rounded-full bg-[color-mix(in_srgb,var(--c)_24%,var(--marathon-surface))] px-1.5 leading-normal whitespace-nowrap text-marathon-ink"
              style={{ "--c": pace.color } as React.CSSProperties}
            >
              {pace.chip}
            </span>{" "}
            {pace.relation} their {pace.avg} average
          </>
        )}
      </span>
      <div className="mt-1.5 text-marathon-ink-3">
        Following a runner who finished in <FinishTimeSelect />
      </div>
      <div data-strip className="mt-2 mb-0.5" />
    </div>
  );
}

/** "10:27 a.m. · 32,496 running · 26,625 yet to start", then where everyone is along the
 *  course (drawn into [data-field] by lib/marathon/story.js). */
function ClockPanel({ hidden }: { hidden: boolean }) {
  const clock = useMarathon((s) => s.clock);
  const counts = useMarathon((s) => s.counts);
  return (
    <div className={cn(hidden && "hidden")}>
      <span className="text-[13px] leading-[1.35] font-medium text-marathon-ink tabular-nums">{clock}</span>
      <span className="text-[13px] leading-[1.4] text-marathon-ink-3 tabular-nums">
        {" · "}
        {counts}
      </span>
      <svg
        data-field
        className="mt-2 block overflow-visible"
        role="img"
        aria-label="Where the runners on the course are, from the start to the finish, with the two winners and the last finisher marked"
      />
    </div>
  );
}

/** The story's progress, written straight to the bar's width on every scroll (no re-render). */
function ProgressBar() {
  const store = useMarathonStore();
  const bar = useRef<HTMLElement>(null);
  useEffect(() => {
    const apply = (s: { progress: number }) => {
      if (bar.current) bar.current.style.width = `${(s.progress * 100).toFixed(1)}%`;
    };
    apply(store.get());
    return store.subscribe(apply);
  }, [store]);
  return (
    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-marathon-ink/7">
      <i ref={bar} className="absolute inset-y-0 left-0 w-0 bg-marathon-ink/35" />
    </span>
  );
}
