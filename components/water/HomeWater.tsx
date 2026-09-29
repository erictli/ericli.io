"use client";

import { useEffect, useRef, useState } from "react";
import { MS_TO_MPH, PIER, PRESETS, compassPoint, describeSky, formatPierTime } from "@/lib/water/conditions";
import { WaterEngine } from "@/lib/water/engine/WaterEngine";
import { useConditions } from "@/components/vignettes/useConditions";

// The harbor off Pier 1 as it is right now, for the homepage: the water
// vignette following Open-Meteo, with a line of caption and nothing else.

export default function HomeWater({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WaterEngine | null>(null);
  const { conditions, liveStatus, goLive } = useConditions(PRESETS);
  const conditionsRef = useRef(conditions);
  conditionsRef.current = conditions;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    goLive();
  }, [goLive]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let engine: WaterEngine;
    try {
      engine = new WaterEngine(el, conditionsRef.current, {
        onReady: () => setReady(true),
        // Full width on a phone held sideways is the widest it gets.
        maxAspect: 3,
        maxPixelRatio: 1.25,
      });
    } catch (err) {
      console.error(err);
      setFailed(true);
      return;
    }
    engineRef.current = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setConditions(conditions);
  }, [conditions]);

  const caption = [
    formatPierTime(conditions.time),
    `${Math.round(conditions.windSpeed * MS_TO_MPH)} mph ${compassPoint(conditions.windDirection)}`,
    describeSky(conditions),
  ].join(" · ");

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1c2124] ${className}`} aria-label={`The water at ${PIER.name} right now: ${caption}`}>
      {!failed && (
        <div
          ref={containerRef}
          className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {failed && (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#5c666b_0%,#2d363b_55%,#1c2124_100%)]" />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-[13px] text-white/70 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
        <span
          className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-400" : "bg-white/40"}`}
          aria-hidden
        />
        <span className="truncate">
          {PIER.name} · {caption}
        </span>
      </div>
    </div>
  );
}
