"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { MS_TO_MPH, PIER, PRESETS, compassPoint, describeSky, formatPierTime, type WaterConditions } from "@/lib/water/conditions";
import { useConditions } from "@/components/vignettes/useConditions";

// The harbor as it is right now, for the homepage: the live conditions, a
// few facts about them, and the water itself (client-only, and kept out of
// the first bundle).

const HarborCanvas = dynamic(() => import("@/components/water/HarborView"), { ssr: false });

export function useLiveHarbor() {
  const { conditions, liveStatus, goLive } = useConditions(PRESETS);
  useEffect(() => {
    goLive();
  }, [goLive]);
  const facts = useMemo(() => harborFacts(conditions), [conditions]);
  return { conditions, liveStatus, facts };
}

function harborFacts(c: WaterConditions) {
  const mph = Math.round(c.windSpeed * MS_TO_MPH);
  return {
    place: PIER.name,
    /** How the caption names it: the borough, not the park. */
    area: "Brooklyn",
    time: formatPierTime(c.time),
    wind: mph < 1 ? "calm" : `${mph} mph ${compassPoint(c.windDirection)}`,
    sky: describeSky(c),
  };
}

export type HarborFacts = ReturnType<typeof harborFacts>;

/**
 * Where and when the water is, and what the weather is doing to it: two
 * plain lines in its bottom corner, like a caption under a photo, each a
 * thing and its detail.
 */
export function WaterCaption({ facts }: { facts: HarborFacts }) {
  return (
    // A faint shade under the words, so they hold up over the brightest glints.
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/35 via-black/10 to-transparent p-3 pt-14 font-sans text-[12px] leading-snug font-[450] text-white/85 tabular-nums [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] sm:p-4 sm:pt-16 sm:text-[13px]">
      <p>
        {facts.area}, {facts.time}
      </p>
      <p className="opacity-70">
        {facts.sky}, {facts.wind}
      </p>
    </div>
  );
}

/**
 * The water filling a box of the caller's shape, with anything laid over it.
 * The box keeps its place but stays empty until the water has drawn its
 * first frame (and at least revealAfter ms have passed), then the water and
 * everything on it fade in together, so the loading is never seen.
 */
export function HarborFrame({
  conditions,
  facts,
  className = "",
  maxAspect,
  revealAfter = 0,
  children,
}: {
  conditions: WaterConditions;
  facts: HarborFacts;
  className?: string;
  maxAspect?: number;
  /** Earliest the water may fade in, ms after it mounts. */
  revealAfter?: number;
  children?: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  const [shown, setShown] = useState(false);
  const mountedAt = useRef(0);

  useEffect(() => {
    mountedAt.current = performance.now();
  }, []);

  useEffect(() => {
    if (!ready) return;
    const wait = Math.max(0, revealAfter - (performance.now() - mountedAt.current));
    const t = setTimeout(() => setShown(true), wait);
    return () => clearTimeout(t);
  }, [ready, revealAfter]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-[#1c2124] transition-opacity duration-[1200ms] ease-out ${shown ? "opacity-100" : "opacity-0"}`}
      >
        <HarborCanvas
          conditions={conditions}
          className="absolute inset-0"
          maxAspect={maxAspect}
          onReady={() => setReady(true)}
          label={`The water at ${facts.place} right now: ${facts.time}, ${facts.wind}, ${facts.sky}.`}
        />
        {children}
      </div>
    </div>
  );
}
