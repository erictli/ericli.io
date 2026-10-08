"use client";

import { useMarathonStore, useMarathon } from "./store";

// the --marathon-group-* ramp, fast → slow (the chart draws its lines in the same tokens)
const SWATCH = ["bg-marathon-group-1", "bg-marathon-group-2", "bg-marathon-group-3", "bg-marathon-group-4"];

/**
 * The pace chart's key. Hovering a group (or focusing it) highlights its line; a click pins
 * it. The chart (lib/marathon/charts.js) reads both from the store.
 */
export default function GroupLegend({ groups }: { groups: { key: string; label: string }[] }) {
  const store = useMarathonStore();
  const pinned = useMarathon((s) => s.groupPinned);
  return (
    <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-[13px] leading-[1.7] text-marathon-ink-3">
      {groups.map((g, i) => {
        const hover = () => store.set({ groupHover: g.key });
        const leave = () => store.set({ groupHover: null });
        return (
          <button
            key={g.key}
            type="button"
            aria-pressed={pinned === g.key}
            title="Highlight this group (click to pin)"
            className="inline-flex cursor-pointer items-center gap-1.5 py-0.5 hover:text-marathon-ink aria-pressed:text-marathon-ink"
            onMouseEnter={hover}
            onMouseLeave={leave}
            onFocus={hover}
            onBlur={leave}
            onClick={() => store.set({ groupPinned: pinned === g.key ? null : g.key })}
          >
            <span className={`inline-block h-0.5 w-3.5 rounded-full ${SWATCH[i]}`} />
            {g.label}
          </button>
        );
      })}
    </div>
  );
}
