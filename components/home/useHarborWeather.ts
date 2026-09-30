"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultConditions, type WaterConditions } from "@/lib/water/conditions";
import type { HarborWeather } from "@/lib/water/open-meteo";

// The weather for the homepage's water. It starts from the reading the page
// was rendered with, or else the last one this browser saw (if it's under
// three hours old), and refreshes from /api/harbor every ten minutes. With
// no reading at all the water shows an ordinary day for the hour, and
// `known` is false so nothing claims to know the weather.

const STORE_KEY = "harbor-weather";
const STORE_MAX_AGE_MS = 3 * 60 * 60 * 1000;
const REFRESH_MS = 10 * 60 * 1000;
const TIMEOUT_MS = 5000;
const RETRY_AFTER_MS = 2000;

function readStored(): HarborWeather | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY) ?? "null") as { at: number; weather: HarborWeather } | null;
    if (saved && Date.now() - saved.at < STORE_MAX_AGE_MS) return saved.weather;
  } catch {
    // Private windows and blocked storage: just go without.
  }
  return null;
}

function store(weather: HarborWeather) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ at: Date.now(), weather }));
  } catch {
    // As above.
  }
}

async function fetchWeather(): Promise<HarborWeather> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await fetch("/api/harbor", { signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (res.ok) {
        const { weather } = (await res.json()) as { weather: HarborWeather | null };
        if (weather) return weather;
      }
    } catch {
      // Timed out or offline; try once more below.
    }
    if (attempt === 0) await new Promise((r) => setTimeout(r, RETRY_AFTER_MS));
  }
  throw new Error("No weather for the harbor");
}

/**
 * The page is rendered on the server too, so the first render uses only
 * what the server had: its reading, and no clock (the time it was built
 * would be wrong by the time anyone reads it). The time and any saved
 * reading arrive right after hydration, while the water is still fading in.
 */
export function useHarborWeather(initial: HarborWeather | null) {
  const [weather, setWeather] = useState<HarborWeather | null>(initial);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // The time and saved readings only exist in the browser.
    setNow(new Date());
    if (!initial) {
      const saved = readStored();
      if (saved) setWeather(saved);
    }
    let alive = true;
    const load = () =>
      fetchWeather()
        .then((next) => {
          if (!alive) return;
          setWeather(next);
          store(next);
        })
        .catch(() => {
          // Keep whatever we have: a reading, or the ordinary day.
        });
    load();
    const poll = setInterval(load, REFRESH_MS);
    const clock = setInterval(() => setNow(new Date()), 30_000);
    return () => {
      alive = false;
      clearInterval(poll);
      clearInterval(clock);
    };
    // The server's reading only seeds the first render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conditions = useMemo<WaterConditions>(() => {
    // Before hydration there's no clock; nothing that draws the water runs then.
    const time = now ?? new Date(0);
    return weather ? { ...weather, time } : defaultConditions(time);
  }, [weather, now]);
  return { conditions, known: weather !== null, hasTime: now !== null };
}
