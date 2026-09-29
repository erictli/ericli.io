"use client";

import { useCallback, useEffect, useState } from "react";
import { presetConditions, type Preset, type WaterConditions } from "@/lib/water/conditions";
import { fetchPierConditions } from "@/lib/water/open-meteo";

export type LiveStatus = "loading" | "ok" | "error";

export type Source = { kind: "preset"; id: string } | { kind: "custom" } | { kind: "live"; status: LiveStatus };

const LIVE_REFRESH_MS = 10 * 60 * 1000;

/**
 * Weather and time of day for a scene at the pier: a preset, Live from
 * Open-Meteo (polled, with the clock ticking), or hand-edited.
 */
export function useConditions(presets: Preset[], initialId = presets[0].id) {
  const [conditions, setConditions] = useState<WaterConditions>(() =>
    presetConditions(presets.find((p) => p.id === initialId) ?? presets[0]),
  );
  const [source, setSource] = useState<Source>({ kind: "preset", id: initialId });

  const live = source.kind === "live";
  useEffect(() => {
    if (!live) return;
    const controller = new AbortController();
    const load = async () => {
      try {
        const next = await fetchPierConditions(controller.signal);
        setConditions(next);
        setSource({ kind: "live", status: "ok" });
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error(err);
        setSource((s) => (s.kind === "live" ? { ...s, status: "error" } : s));
      }
    };
    load();
    const poll = setInterval(load, LIVE_REFRESH_MS);
    const clock = setInterval(() => setConditions((c) => ({ ...c, time: new Date() })), 30_000);
    return () => {
      controller.abort();
      clearInterval(poll);
      clearInterval(clock);
    };
  }, [live]);

  const choosePreset = useCallback(
    (id: string) => {
      const preset = presets.find((p) => p.id === id);
      if (!preset) return;
      setConditions(presetConditions(preset, new Date()));
      setSource({ kind: "preset", id });
    },
    [presets],
  );

  const goLive = useCallback(() => {
    setSource({ kind: "live", status: "loading" });
    setConditions((c) => ({ ...c, time: new Date() }));
  }, []);

  const edit = useCallback((patch: Partial<WaterConditions>) => {
    setConditions((c) => ({ ...c, ...patch }));
    setSource({ kind: "custom" });
  }, []);

  return {
    conditions,
    source,
    live,
    liveStatus: source.kind === "live" ? source.status : null,
    choosePreset,
    goLive,
    edit,
  };
}
