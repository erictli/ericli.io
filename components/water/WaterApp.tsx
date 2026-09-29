"use client";

import { useEffect, useRef, useState } from "react";
import { PIER, PRESETS, MS_TO_MPH, compassPoint, describeSky, formatPierTime } from "@/lib/water/conditions";
import { WaterEngine } from "@/lib/water/engine/WaterEngine";
import { Chip, LiveChip, VignetteFrame } from "@/components/vignettes/VignetteFrame";
import { useConditions } from "@/components/vignettes/useConditions";
import { ConditionsPanel } from "./ConditionsPanel";

export default function WaterApp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WaterEngine | null>(null);
  const { conditions, source, live, liveStatus, choosePreset, goLive, edit } = useConditions(PRESETS);
  const conditionsRef = useRef(conditions);
  conditionsRef.current = conditions;
  const [panelOpen, setPanelOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [hint, setHint] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let engine: WaterEngine;
    try {
      engine = new WaterEngine(el, conditionsRef.current, {
        onReady: () => setReady(true),
        onInteract: () => setHint(false),
      });
    } catch (err) {
      console.error(err);
      setFailed(true);
      return;
    }
    engineRef.current = engine;
    if (process.env.NODE_ENV === "development") (window as unknown as { vignette: WaterEngine }).vignette = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setConditions(conditions);
  }, [conditions]);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 9000);
    return () => clearTimeout(t);
  }, []);

  const summary = [
    formatPierTime(conditions.time),
    `${Math.round(conditions.windSpeed * MS_TO_MPH)} mph ${compassPoint(conditions.windDirection)}`,
    describeSky(conditions),
  ].join(" · ");

  return (
    <VignetteFrame
      title={PIER.name}
      summary={summary}
      live={liveStatus}
      ready={ready}
      failed={failed}
      ariaLabel={`Simulated water off ${PIER.name}: ${summary}. Click or drag to disturb it.`}
      containerRef={containerRef}
      cursor="pointer"
      hint="Click or drag to ripple the water"
      showHint={hint}
      nav={
        <>
          <LiveChip active={live} onClick={goLive} />
          {PRESETS.map((p) => (
            <Chip key={p.id} active={source.kind === "preset" && source.id === p.id} onClick={() => choosePreset(p.id)}>
              {p.label}
            </Chip>
          ))}
        </>
      }
      panel={(className) => <ConditionsPanel className={className} conditions={conditions} onChange={edit} />}
      panelOpen={panelOpen}
      onPanelToggle={() => setPanelOpen((o) => !o)}
      note={live && liveStatus === "error" ? "Couldn’t reach the weather service. Showing the last conditions." : undefined}
    />
  );
}
