"use client";

import dynamic from "next/dynamic";
import { Fragment, useEffect, useMemo, useState } from "react";
import {
  MS_TO_MPH,
  PIER,
  PRESETS,
  compassPoint,
  describeSky,
  formatPierTime,
  pierMinutes,
  sunTimes,
  type WaterConditions,
} from "@/lib/water/conditions";
import { useConditions } from "@/components/vignettes/useConditions";
import type { LiveStatus } from "@/components/vignettes/VignetteFrame";
import { useHomeClasses, type Tone } from "./classes";

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

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PIER.timeZone,
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

function coordinate(value: number, positive: string, negative: string) {
  return `${Math.abs(value).toFixed(4)}° ${value >= 0 ? positive : negative}`;
}

function harborFacts(c: WaterConditions) {
  const minutes = pierMinutes(c.time);
  // The next sunrise or sunset (New York always has both).
  const today = sunTimes(c.time);
  const tomorrow = sunTimes(new Date(c.time.getTime() + 86_400_000));
  const next = [
    { label: "Sunrise", at: today.sunrise },
    { label: "Sunset", at: today.sunset },
    { label: "Sunrise", at: tomorrow.sunrise },
  ].find((e): e is { label: string; at: Date } => e.at != null && c.time < e.at);
  const sun = next ? { label: next.label, time: formatPierTime(next.at) } : { label: "Sunset", time: "—" };
  return {
    place: PIER.name,
    spot: "Pier 1",
    coords: `${coordinate(PIER.latitude, "N", "S")}, ${coordinate(PIER.longitude, "E", "W")}`,
    date: dateFormatter.format(c.time),
    time: formatPierTime(c.time),
    /** 24-hour pier time, for setting large. */
    hh: String(Math.floor(minutes / 60)).padStart(2, "0"),
    mm: String(Math.floor(minutes % 60)).padStart(2, "0"),
    wind: `${Math.round(c.windSpeed * MS_TO_MPH)} mph ${compassPoint(c.windDirection)}`,
    sky: describeSky(c),
    sun,
  };
}

export type HarborFacts = ReturnType<typeof harborFacts>;

export function harborLabel(facts: HarborFacts) {
  return `The water at ${facts.place} right now: ${facts.time}, ${facts.wind}, ${facts.sky}.`;
}

/** Small uppercase labels. */
export const LABEL = "text-[11px] uppercase tracking-[0.08em]";

/** The live conditions, set as a small table. */
export function Readout({
  facts,
  liveStatus,
  tone = "page",
  align = "left",
  className = "",
}: {
  facts: HarborFacts;
  liveStatus: LiveStatus | null;
  tone?: Tone;
  align?: "left" | "right";
  className?: string;
}) {
  const c = useHomeClasses(tone);
  const rows: [string, string][] = [
    ["Time", facts.time],
    ["Wind", facts.wind],
    ["Sky", facts.sky],
    [facts.sun.label, facts.sun.time],
  ];
  const right = align === "right";
  return (
    <div className={`flex flex-col gap-2 tabular-nums ${c.text} ${right ? "items-end text-right" : "items-start"} ${className}`}>
      <p className={`flex items-center gap-1.5 ${LABEL} ${c.muted}`}>
        <span
          className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-500" : "bg-current opacity-50"}`}
          aria-hidden
        />
        Live from {facts.spot}, {facts.place}
      </p>
      <p className={c.muted}>{facts.coords}</p>
      <dl className="grid grid-cols-[auto_auto] gap-x-5 gap-y-0.5">
        {rows.map(([k, v]) => (
          <Fragment key={k}>
            <dt className={`${c.muted} ${right ? "text-left" : ""}`}>{k}</dt>
            <dd className={right ? "text-right" : ""}>{v}</dd>
          </Fragment>
        ))}
      </dl>
    </div>
  );
}

const clockFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PIER.timeZone,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});
const zoneFormatter = new Intl.DateTimeFormat("en-US", { timeZone: PIER.timeZone, timeZoneName: "short" });

/** The pier's time to the second, ticking. */
export function LiveClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{clockFormatter.format(now)}</span>;
}

/** "EDT" or "EST", as it is at the pier. */
export function pierZone(date: Date) {
  return zoneFormatter.formatToParts(date).find((p) => p.type === "timeZoneName")?.value ?? "";
}

/** One line: the live dot, where, and the conditions. */
export function LiveLine({
  facts,
  liveStatus,
  tone = "page",
  className = "",
}: {
  facts: HarborFacts;
  liveStatus: LiveStatus | null;
  tone?: Tone;
  className?: string;
}) {
  const c = useHomeClasses(tone);
  return (
    <p className={`flex items-center gap-2 tabular-nums ${c.text} ${className}`}>
      <span
        className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-500" : "bg-current opacity-50"}`}
        aria-hidden
      />
      <span>
        {facts.spot} <span className={c.muted}>{facts.time}</span> <span className={c.muted}>· {facts.wind} · {facts.sky}</span>
      </span>
    </p>
  );
}

/** Five little bars that rise and fall with the wind, like a level meter. */
export function WindBars({ windSpeed, className = "" }: { windSpeed: number; className?: string }) {
  const mph = windSpeed * MS_TO_MPH;
  const period = Math.min(Math.max(2.6 - mph * 0.07, 0.7), 2.6);
  return (
    <span aria-hidden className={`inline-flex h-3.5 items-end gap-[2px] ${className}`}>
      {[0.55, 0.9, 0.4, 1, 0.7].map((h, i) => (
        <span
          key={i}
          className="w-[2px] origin-bottom rounded-[1px] bg-current motion-safe:animate-[harbor-bar_var(--period)_ease-in-out_infinite]"
          style={{ height: `${h * 100}%`, ["--period" as string]: `${period}s`, animationDelay: `${-i * 0.37}s` }}
        />
      ))}
    </span>
  );
}
