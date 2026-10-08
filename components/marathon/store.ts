import { createContext, useContext } from "react";
import { createStore, useStore, type Store } from "@/lib/stories/store";

/** What the caption's data block shows: nothing, the followed runner, or the race clock. */
export type Live = "none" | "chase" | "clock";

/** The followed runner's pace in the current mile: "10:27/mi, [2% slower] than their 10:16 average". */
export interface Pace {
  speed: string;
  chip: string;
  /** the pace color behind the chip, "rgb(…)" */
  color: string;
  relation: "with" | "than";
  avg: string;
}

/**
 * The story's live state. lib/marathon/story.js writes what the scene is doing; the React UI
 * renders it and writes back the reader's choices (cohort, the chart legend's focus).
 * Values change only when their text does, so a panel re-renders only when it reads
 * differently.
 */
export interface MarathonState {
  /** the scene is drawn (the loading message fades) */
  ready: boolean;
  failed: boolean;
  /** the step on screen, whose card the caption shows; instant: swap without the fade */
  step: string;
  stepInstant: boolean;
  live: Live;
  /** how far through the steps, 0–1 (the caption's progress bar) */
  progress: number;
  /** the followed finish time: an index into cohortLabels */
  cohort: number;
  cohortLabels: string[];
  /** the flythrough cards' sentences for that finish time (lib/marathon/cohort-copy.js) */
  copy: Record<string, string> | null;
  place: string;
  pace: Pace | null;
  clock: string;
  counts: string;
  /** the pace chart's legend: the group hovered, and the one pinned by a click */
  groupHover: string | null;
  groupPinned: string | null;
}

export function createMarathonStore(init: { cohort: number; cohortLabels: string[]; step: string }) {
  return createStore<MarathonState>({
    ready: false,
    failed: false,
    step: init.step,
    stepInstant: true,
    live: "none",
    progress: 0,
    cohort: init.cohort,
    cohortLabels: init.cohortLabels,
    copy: null,
    place: "Mile 0.0",
    pace: null,
    clock: "9:10 a.m.",
    counts: "",
    groupHover: null,
    groupPinned: null,
  });
}

export const MarathonContext = createContext<Store<MarathonState> | null>(null);

export function useMarathonStore() {
  const store = useContext(MarathonContext);
  if (!store) throw new Error("useMarathonStore needs a MarathonStory around it");
  return store;
}

/** One value of the story's state; re-renders only when it changes. */
export function useMarathon<V>(select: (state: MarathonState) => V): V {
  return useStore(useMarathonStore(), select);
}
