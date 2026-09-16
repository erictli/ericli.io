"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NEIGHBORHOODS } from "./generated/neighborhoods";
import { loadProgress, saveProgress } from "./storage";
import {
  buildShareUrl,
  readSharedMapFromSearch,
  stripShareParamsFromUrl,
} from "./url-state";
import type { MapStyleChoice, SharedMap } from "./types";

export type TrackerMode = "own" | "viewing";
export type SaveStrategy = "merge" | "replace";

const KNOWN_IDS = new Set(NEIGHBORHOODS.map(({ id }) => id));

function sortedIds(ids: Iterable<string>): string[] {
  return Array.from(ids)
    .filter((id) => KNOWN_IDS.has(id))
    .sort();
}

function sameSet(a: ReadonlySet<string>, b: ReadonlySet<string>): boolean {
  if (a.size !== b.size) return false;
  for (const id of a) if (!b.has(id)) return false;
  return true;
}

interface InitialState {
  own: Set<string>;
  shared: SharedMap | null;
}

// Runs on the client only (the app is loaded with ssr: false).
function readInitialState(): InitialState {
  const own = new Set(sortedIds(loadProgress().visitedIds));
  const shared = readSharedMapFromSearch(window.location.search);

  // Opening your own share link (say, from a text you sent yourself) should
  // feel like opening your map, not someone else's.
  if (shared && sameSet(shared.visitedIds, own)) {
    stripShareParamsFromUrl();
    return { own, shared: null };
  }

  return { own, shared };
}

/**
 * Owns the two sets that matter: the viewer's saved map ("own") and, when the
 * page was opened from a share link, the sender's map ("shared"). The shared
 * map is never written to storage unless the viewer explicitly saves it.
 */
export function useTracker() {
  const initial = useRef<InitialState | null>(null);
  initial.current ??= readInitialState();

  const [own, setOwn] = useState<ReadonlySet<string>>(initial.current.own);
  const [shared, setShared] = useState<SharedMap | null>(initial.current.shared);
  const [compare, setCompare] = useState(false);

  const mode: TrackerMode = shared ? "viewing" : "own";

  useEffect(() => {
    saveProgress({ version: 2, visitedIds: sortedIds(own) });
  }, [own]);

  const setVisited = useCallback((id: string, visited: boolean) => {
    setOwn((current) => {
      if (current.has(id) === visited) return current;
      const next = new Set(current);
      if (visited) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const toggle = useCallback(
    (id: string): boolean => {
      const visited = !own.has(id);
      setVisited(id, visited);
      return visited;
    },
    [own, setVisited],
  );

  const clearOwn = useCallback(() => setOwn(new Set()), []);

  const exitViewing = useCallback(() => {
    stripShareParamsFromUrl();
    // The server rendered the sender's title; this page is now the viewer's.
    document.title = "NYC neighborhood map";
    setShared(null);
    setCompare(false);
  }, []);

  const saveShared = useCallback(
    (strategy: SaveStrategy) => {
      if (!shared) return;
      const sharedIds = shared.visitedIds;
      setOwn((current) =>
        strategy === "merge"
          ? new Set([...current, ...sharedIds])
          : new Set(sharedIds),
      );
      exitViewing();
    },
    [exitViewing, shared],
  );

  const shareUrl = useCallback(
    (style: MapStyleChoice) => buildShareUrl(window.location.href, own, style),
    [own],
  );

  // What the map paints. Viewing shows the sender's map; compare overlays it
  // (blue) on the viewer's own map (orange).
  const view = useMemo(() => {
    if (mode === "own" || !shared) {
      return { visitedIds: own, compareIds: null as ReadonlySet<string> | null };
    }
    return compare
      ? { visitedIds: own, compareIds: shared.visitedIds }
      : { visitedIds: shared.visitedIds, compareIds: null };
  }, [compare, mode, own, shared]);

  return {
    mode,
    canEdit: mode === "own",
    own,
    shared,
    compare,
    setCompare,
    visitedIds: view.visitedIds,
    compareIds: view.compareIds,
    setVisited,
    toggle,
    clearOwn,
    saveShared,
    exitViewing,
    shareUrl,
  };
}

export type Tracker = ReturnType<typeof useTracker>;
