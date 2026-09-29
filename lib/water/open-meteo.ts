import { PIER, type WaterConditions } from "./conditions";

// Current conditions at the pier from Open-Meteo (free, no key, CORS-enabled).
// Any source works as long as it fills in WaterConditions; this is the one
// the page uses for "Live".

const CURRENT = [
  "wind_speed_10m",
  "wind_direction_10m",
  "wind_gusts_10m",
  "cloud_cover",
  "precipitation",
  "snowfall",
  "visibility",
  "weather_code",
].join(",");

interface OpenMeteoCurrent {
  time: string;
  /** Seconds the accumulated values (precipitation, snowfall) cover. */
  interval: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  cloud_cover: number;
  precipitation: number;
  snowfall: number;
  visibility: number;
  weather_code: number;
}

// WMO weather interpretation codes.
const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const THUNDER_CODES = new Set([95, 96, 99]);

export function conditionsFromOpenMeteo(current: OpenMeteoCurrent, now = new Date()): WaterConditions {
  const hours = (current.interval || 900) / 3600;
  const code = current.weather_code;
  const snowing = SNOW_CODES.has(code) || current.snowfall > 0;
  return {
    time: now,
    windSpeed: current.wind_speed_10m,
    windDirection: current.wind_direction_10m,
    windGusts: Math.max(current.wind_gusts_10m, current.wind_speed_10m),
    cloudCover: current.cloud_cover,
    precipitation: current.precipitation / hours,
    precipitationType: snowing ? "snow" : "rain",
    // Open-Meteo reports visibility for the model grid cell; fog codes pull it down.
    visibility: code === 45 || code === 48 ? Math.min(current.visibility, 800) : current.visibility,
    thunderstorm: THUNDER_CODES.has(code),
  };
}

export async function fetchPierConditions(signal?: AbortSignal): Promise<WaterConditions> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(PIER.latitude));
  url.searchParams.set("longitude", String(PIER.longitude));
  url.searchParams.set("current", CURRENT);
  url.searchParams.set("wind_speed_unit", "ms");
  url.searchParams.set("timezone", PIER.timeZone);
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Open-Meteo responded ${res.status}`);
  const json = (await res.json()) as { current?: OpenMeteoCurrent };
  if (!json.current) throw new Error("Open-Meteo returned no current conditions");
  return conditionsFromOpenMeteo(json.current);
}
