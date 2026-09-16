import {
  NEIGHBORHOODS_GEOJSON_URL,
  SUBWAY_GEOJSON_URL,
} from "./generated/data-manifest";
import type { NeighborhoodsGeoJson, SubwayGeoJson } from "./types";

async function fetchJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Could not load ${url} (${response.status})`);
  }
  return (await response.json()) as T;
}

export function loadNeighborhoodsGeoJson(
  signal?: AbortSignal,
): Promise<NeighborhoodsGeoJson> {
  return fetchJson<NeighborhoodsGeoJson>(NEIGHBORHOODS_GEOJSON_URL, signal);
}

let subwayPromise: Promise<SubwayGeoJson> | null = null;

/** Fetched on first use only; the subway overlay is off by default. */
export function loadSubwayGeoJson(): Promise<SubwayGeoJson> {
  subwayPromise ??= fetchJson<SubwayGeoJson>(SUBWAY_GEOJSON_URL).catch(
    (error: unknown) => {
      subwayPromise = null;
      throw error;
    },
  );
  return subwayPromise;
}

export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}
