import type { ProgressState } from "./types";

export const PROGRESS_STORAGE_KEY = "nyc-neighborhood-tracker:progress";

export function createEmptyProgressState(): ProgressState {
  return { version: 2, visitedIds: [] };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeVisitedIds(ids: unknown[]): string[] {
  return Array.from(
    new Set(ids.filter((id): id is string => typeof id === "string" && !!id)),
  ).sort();
}

export function deserializeProgress(raw: string | null): ProgressState {
  if (!raw) return createEmptyProgressState();

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return createEmptyProgressState();

    if (parsed.version === 2 && Array.isArray(parsed.visitedIds)) {
      return {
        version: 2,
        visitedIds: normalizeVisitedIds(parsed.visitedIds),
      };
    }

    // Version 1 stored { neighborhoods: { [id]: { visited: boolean } } }.
    if (
      (parsed.version === 1 || parsed.version === undefined) &&
      isRecord(parsed.neighborhoods)
    ) {
      return {
        version: 2,
        visitedIds: normalizeVisitedIds(
          Object.entries(parsed.neighborhoods)
            .filter(([, value]) => isRecord(value) && value.visited === true)
            .map(([id]) => id),
        ),
      };
    }

    return createEmptyProgressState();
  } catch {
    return createEmptyProgressState();
  }
}

function storage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadProgress(): ProgressState {
  try {
    return deserializeProgress(storage()?.getItem(PROGRESS_STORAGE_KEY) ?? null);
  } catch {
    return createEmptyProgressState();
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    storage()?.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Private mode or quota errors: the session still works, it just won't persist.
  }
}
