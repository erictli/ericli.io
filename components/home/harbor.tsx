"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, type ReactNode } from "react";
import { MS_TO_MPH, PIER, PRESETS, compassPoint, describeSky, formatPierTime, type WaterConditions } from "@/lib/water/conditions";
import { useConditions } from "@/components/vignettes/useConditions";
import type { LiveStatus } from "@/components/vignettes/VignetteFrame";

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
  return {
    place: PIER.name,
    time: formatPierTime(c.time),
    wind: `${Math.round(c.windSpeed * MS_TO_MPH)} mph ${compassPoint(c.windDirection)}`,
    sky: describeSky(c),
  };
}

export type HarborFacts = ReturnType<typeof harborFacts>;

/** Where and what the water is right now, set small in its bottom corner on two lines. */
export function WaterCaption({ facts, liveStatus }: { facts: HarborFacts; liveStatus: LiveStatus | null }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 font-sans text-[12px] leading-snug font-[450] text-white/80 tabular-nums [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] sm:p-4 sm:text-[13px]">
      <p className="flex items-center gap-2">
        <span className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-400" : "bg-white/40"}`} aria-hidden />
        {facts.place}
      </p>
      <p className="pl-3.5">
        {facts.time} · {facts.wind} · {facts.sky}
      </p>
    </div>
  );
}

/** The water filling a box of the caller's shape, with anything laid over it. */
export function HarborFrame({
  conditions,
  facts,
  className = "",
  maxAspect,
  children,
}: {
  conditions: WaterConditions;
  facts: HarborFacts;
  className?: string;
  maxAspect?: number;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <HarborCanvas
        conditions={conditions}
        className="absolute inset-0"
        maxAspect={maxAspect}
        label={`The water at ${facts.place} right now: ${facts.time}, ${facts.wind}, ${facts.sky}.`}
      />
      {children}
    </div>
  );
}
