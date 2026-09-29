import * as SunCalc from "suncalc";

/** Where the scene is. The weather lookup and the sun and moon use these. */
export const PIER = {
  name: "Brooklyn Bridge Park",
  latitude: 40.70152,
  longitude: -73.99812,
  timeZone: "America/New_York",
  /** Compass heading the camera faces: out across the harbor toward the Statue of Liberty and Jersey City. */
  heading: 258,
  /** Eye height above the water, meters. */
  eyeHeight: 4,
};

export type PrecipitationType = "rain" | "snow";

/**
 * Weather at the pier, in the units weather APIs report (Open-Meteo's
 * `current` block maps onto this one to one; see lib/water/open-meteo.ts).
 */
export interface WaterConditions {
  /** The instant to light the scene for. The sun and moon are placed for it. */
  time: Date;
  /** Sustained wind 10 m above the water, m/s. */
  windSpeed: number;
  /** Direction the wind blows from, degrees clockwise from north. */
  windDirection: number;
  /** Peak gust, m/s. */
  windGusts: number;
  /** Percent of the sky covered, 0–100. */
  cloudCover: number;
  /** mm/h */
  precipitation: number;
  precipitationType: PrecipitationType;
  /** Meters. */
  visibility: number;
  /** A thunderstorm is in progress (WMO weather codes 95–99). */
  thunderstorm: boolean;
}

// ---- Harbor geography --------------------------------------------------------

/**
 * Open water upwind of the pier, km, by the direction the wind comes from.
 * Wind waves grow with fetch, so a southwest breeze off the Upper Bay builds
 * real chop while the same wind from Brooklyn behind the pier barely ruffles
 * the surface.
 */
const FETCH_KM: [number, number][] = [
  [0, 1.4], // East River, up toward the bridges
  [30, 0.9],
  [60, 0.2], // Brooklyn Heights, directly behind
  [90, 0.1],
  [130, 0.2],
  [160, 0.6], // Atlantic Basin and Red Hook
  [185, 2.2], // Buttermilk Channel
  [210, 8],
  [228, 10], // Upper Bay, out to the Verrazzano
  [245, 6],
  [270, 2.6], // past Governors Island to Jersey City
  [300, 3.2], // mouth of the Hudson
  [330, 0.9], // Lower Manhattan
  [360, 1.4],
];

/**
 * The wind the water is drawn for, whatever the real one is: west-southwest,
 * up the Upper Bay and straight at the pier, so the waves run toward the
 * camera with their crests across the frame. From Brooklyn or down the East
 * River the real sea is a short, crossing chop that reads as lumps from the
 * rail. The real direction still goes in the words.
 */
export const WATER_WIND_FROM = 250;

export function fetchForWind(fromDegrees: number): number {
  const d = ((fromDegrees % 360) + 360) % 360;
  for (let i = 0; i < FETCH_KM.length - 1; i++) {
    const [a, fa] = FETCH_KM[i];
    const [b, fb] = FETCH_KM[i + 1];
    if (d >= a && d <= b) {
      const t = (d - a) / (b - a);
      // Interpolate in log space: fetch spans two orders of magnitude.
      return Math.exp(Math.log(fa) + (Math.log(fb) - Math.log(fa)) * t) * 1000;
    }
  }
  return 1000;
}

// ---- Units and labels --------------------------------------------------------

export const MS_TO_MPH = 2.236936;
export const METERS_PER_MILE = 1609.344;

const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export function compassPoint(degrees: number): string {
  const i = Math.round((((degrees % 360) + 360) % 360) / 22.5) % 16;
  return COMPASS[i];
}

/** Beaufort-style description of the water for a wind speed in m/s. */
export function describeWind(speed: number): string {
  if (speed < 0.5) return "Glassy";
  if (speed < 1.6) return "Light air";
  if (speed < 3.4) return "Light breeze";
  if (speed < 5.5) return "Gentle breeze";
  if (speed < 8) return "Moderate breeze";
  if (speed < 10.8) return "Fresh breeze";
  if (speed < 13.9) return "Strong breeze";
  if (speed < 17.2) return "Near gale";
  return "Gale";
}

export function describeSky(c: Pick<WaterConditions, "cloudCover" | "precipitation" | "precipitationType" | "thunderstorm" | "visibility">): string {
  if (c.thunderstorm) return "Thunderstorm";
  if (c.precipitation > 0.05) {
    const kind = c.precipitationType === "snow" ? "snow" : "rain";
    if (c.precipitation < 1) return `Light ${kind}`;
    if (c.precipitation < 5) return kind === "snow" ? "Snow" : "Rain";
    return `Heavy ${kind}`;
  }
  if (c.visibility < 1000) return "Fog";
  if (c.visibility < 4000) return "Mist";
  if (c.cloudCover < 12) return "Clear";
  if (c.cloudCover < 40) return "Mostly clear";
  if (c.cloudCover < 70) return "Partly cloudy";
  if (c.cloudCover < 90) return "Mostly cloudy";
  return "Overcast";
}

// ---- Time at the pier --------------------------------------------------------

const partsFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PIER.timeZone,
  hourCycle: "h23",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function pierParts(date: Date) {
  const parts = partsFormatter.formatToParts(date);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value ?? 0);
  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: get("hour") % 24,
    minute: get("minute"),
    second: get("second"),
  };
}

function pierOffsetMs(date: Date): number {
  const p = pierParts(date);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return asUtc - Math.floor(date.getTime() / 1000) * 1000;
}

/** Minutes since local midnight at the pier. */
export function pierMinutes(date: Date): number {
  const p = pierParts(date);
  return p.hour * 60 + p.minute + p.second / 60;
}

/** The instant on the same pier-local calendar day as `day` at `minutes` past midnight. */
export function atPierMinutes(day: Date, minutes: number): Date {
  const p = pierParts(day);
  const localMs = Date.UTC(p.year, p.month - 1, p.day) + minutes * 60_000;
  let guess = localMs - pierOffsetMs(day);
  // Correct once if the day crosses a daylight-saving change.
  guess = localMs - pierOffsetMs(new Date(guess));
  return new Date(guess);
}

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: PIER.timeZone,
  hour: "numeric",
  minute: "2-digit",
});

export function formatPierTime(date: Date): string {
  return timeFormatter.format(date);
}

export function sunTimes(day: Date) {
  const noon = atPierMinutes(day, 12 * 60);
  return SunCalc.getTimes(noon, PIER.latitude, PIER.longitude);
}

// ---- Presets -----------------------------------------------------------------

type Anchor = "sunrise" | "sunset" | "solarNoon" | "clock";

export interface Preset {
  id: string;
  label: string;
  /** Time of day: minutes from a sun event, or a clock time with `anchor: "clock"`. */
  anchor: Anchor;
  minutes: number;
  conditions: Omit<WaterConditions, "time">;
}

export const PRESETS: Preset[] = [
  {
    id: "golden",
    label: "Golden hour",
    anchor: "sunset",
    minutes: -8,
    conditions: {
      windSpeed: 6.5,
      windDirection: 280,
      windGusts: 9,
      cloudCover: 5,
      precipitation: 0,
      precipitationType: "rain",
      visibility: 8000,
      thunderstorm: false,
    },
  },
  {
    id: "morning",
    label: "Still morning",
    anchor: "sunrise",
    minutes: 50,
    conditions: {
      windSpeed: 1.2,
      windDirection: 20,
      windGusts: 2.4,
      cloudCover: 8,
      precipitation: 0,
      precipitationType: "rain",
      visibility: 9000,
      thunderstorm: false,
    },
  },
  {
    id: "afternoon",
    label: "Sea breeze",
    anchor: "clock",
    minutes: 15 * 60,
    conditions: {
      windSpeed: 7,
      windDirection: 215,
      windGusts: 10,
      cloudCover: 35,
      precipitation: 0,
      precipitationType: "rain",
      visibility: 24000,
      thunderstorm: false,
    },
  },
  {
    id: "overcast",
    label: "Overcast",
    anchor: "clock",
    minutes: 11 * 60,
    conditions: {
      windSpeed: 4.5,
      windDirection: 60,
      windGusts: 7,
      cloudCover: 100,
      precipitation: 0,
      precipitationType: "rain",
      visibility: 12000,
      thunderstorm: false,
    },
  },
  {
    id: "rain",
    label: "Rain",
    anchor: "clock",
    minutes: 16 * 60,
    conditions: {
      windSpeed: 6,
      windDirection: 75,
      windGusts: 10,
      cloudCover: 100,
      precipitation: 4,
      precipitationType: "rain",
      visibility: 5000,
      thunderstorm: false,
    },
  },
  {
    id: "storm",
    label: "Thunderstorm",
    anchor: "clock",
    minutes: 17 * 60 + 30,
    conditions: {
      windSpeed: 12,
      windDirection: 230,
      windGusts: 21,
      cloudCover: 100,
      precipitation: 14,
      precipitationType: "rain",
      visibility: 2200,
      thunderstorm: true,
    },
  },
  {
    id: "snow",
    label: "Snow",
    anchor: "clock",
    minutes: 10 * 60,
    conditions: {
      windSpeed: 4,
      windDirection: 20,
      windGusts: 6,
      cloudCover: 100,
      precipitation: 1.5,
      precipitationType: "snow",
      visibility: 1600,
      thunderstorm: false,
    },
  },
  {
    id: "night",
    label: "Night",
    anchor: "sunset",
    minutes: 150,
    conditions: {
      windSpeed: 3,
      windDirection: 200,
      windGusts: 5,
      cloudCover: 25,
      precipitation: 0,
      precipitationType: "rain",
      visibility: 16000,
      thunderstorm: false,
    },
  },
];

export function presetTime(preset: Preset, day: Date): Date {
  if (preset.anchor === "clock") return atPierMinutes(day, preset.minutes);
  const times = sunTimes(day);
  const base = preset.anchor === "sunrise" ? times.sunrise : preset.anchor === "sunset" ? times.sunset : times.solarNoon;
  if (!base || Number.isNaN(base.getTime())) return atPierMinutes(day, 12 * 60);
  return new Date(base.getTime() + preset.minutes * 60_000);
}

export function presetConditions(preset: Preset, day = new Date()): WaterConditions {
  return { ...preset.conditions, time: presetTime(preset, day) };
}
