"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, type CSSProperties, type ReactNode } from "react";
import {
  MS_TO_MPH,
  PIER,
  PRESETS,
  compassPoint,
  describeSky,
  formatPierTime,
  pierMinutes,
  type WaterConditions,
} from "@/lib/water/conditions";
import { useConditions } from "@/components/vignettes/useConditions";
import type { LiveStatus } from "@/components/vignettes/VignetteFrame";

// The harbor as it is right now, for the homepage: the live conditions, the
// facts worth printing about them, and the water itself (client-only, and
// kept out of the first bundle).

export const HarborCanvas = dynamic(() => import("@/components/water/HarborView"), { ssr: false });

export function useLiveHarbor() {
  const { conditions, liveStatus, goLive } = useConditions(PRESETS);
  useEffect(() => {
    goLive();
  }, [goLive]);
  const facts = useMemo(() => harborFacts(conditions), [conditions]);
  return { conditions, liveStatus, facts };
}

function harborFacts(c: WaterConditions) {
  const minutes = pierMinutes(c.time);
  return {
    place: PIER.name,
    time: formatPierTime(c.time),
    /** 24-hour pier time, for setting large. */
    hh: String(Math.floor(minutes / 60)).padStart(2, "0"),
    mm: String(Math.floor(minutes % 60)).padStart(2, "0"),
    wind: `${Math.round(c.windSpeed * MS_TO_MPH)} mph ${compassPoint(c.windDirection)}`,
    sky: describeSky(c),
  };
}

export type HarborFacts = ReturnType<typeof harborFacts>;

export function harborLabel(facts: HarborFacts) {
  return `The water at ${facts.place} right now: ${facts.time}, ${facts.wind}, ${facts.sky}.`;
}

/** Small uppercase labels. */
export const LABEL = "text-[11px] uppercase tracking-[0.08em]";

/**
 * Where and what the water is right now, set small in its bottom corner:
 * one line, two lines for a narrow frame, or just the time and sky (also on
 * two lines) for a very small one.
 */
export function WaterCaption({
  facts,
  liveStatus,
  variant = "line",
  className = "",
}: {
  facts: HarborFacts;
  liveStatus: LiveStatus | null;
  variant?: "line" | "stacked" | "compact";
  className?: string;
}) {
  const dot = (
    <span className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-400" : "bg-white/40"}`} aria-hidden />
  );
  const conditions = `${facts.time} · ${facts.wind} · ${facts.sky}`;
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 p-3 font-sans text-[12px] leading-snug font-[450] text-white/80 tabular-nums [text-shadow:0_1px_2px_rgba(0,0,0,0.4)] sm:p-4 sm:text-[13px] ${className}`}
    >
      {variant === "stacked" ? (
        <>
          <p className="flex items-center gap-2">
            {dot}
            {facts.place}
          </p>
          <p className="pl-3.5">{conditions}</p>
        </>
      ) : variant === "compact" ? (
        <>
          <p className="flex items-center gap-2">
            {dot}
            {facts.time}
          </p>
          <p className="pl-3.5">{facts.sky}</p>
        </>
      ) : (
        <p className="flex items-center gap-2">
          {dot}
          <span className="truncate">{`${facts.place} · ${conditions}`}</span>
        </p>
      )}
    </div>
  );
}

/** The water in a box of the caller's shape, with anything laid over it (a caption, type). */
export function HarborFrame({
  conditions,
  facts,
  className = "",
  style,
  maxAspect,
  children,
}: {
  conditions: WaterConditions;
  facts: HarborFacts;
  className?: string;
  style?: CSSProperties;
  maxAspect?: number;
  children?: ReactNode;
}) {
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className) ? "" : "relative";
  return (
    <div className={`${positioned} overflow-hidden ${className}`} style={style}>
      <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={maxAspect} label={harborLabel(facts)} />
      {children}
    </div>
  );
}
