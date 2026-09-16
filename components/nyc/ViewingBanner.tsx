"use client";

import { useState } from "react";
import { ArrowLeft, Check, GitCompareArrows, Merge, Plus, Replace, X } from "lucide-react";
import type { SaveStrategy } from "@/lib/nyc/use-tracker";
import { CARD_ROW, ICON, SURFACE } from "./ui";

interface ViewingBannerProps {
  name: string | null;
  ownCount: number;
  compare: boolean;
  onCompareChange: (compare: boolean) => void;
  onSave: (strategy: SaveStrategy) => void;
  onExit: () => void;
}

/**
 * Shown when the page was opened from someone's share link. Built like the
 * progress card: a header, a dashed rule, then a list of compact rows.
 */
export function ViewingBanner({
  name,
  ownCount,
  compare,
  onCompareChange,
  onSave,
  onExit,
}: ViewingBannerProps) {
  const [chooser, setChooser] = useState(false);
  const owner = name ?? "Them";
  const possessive = name ? `${name}’s` : "a shared";

  return (
    <section
      className={`${SURFACE} w-full rounded-2xl font-sans font-[450] text-nyc-ink`}
      role="status"
      aria-label="Viewing a shared map"
    >
      <div className="px-6 pt-4 pb-4">
        <div className="flex items-center gap-2">
          <h4 className="min-w-0 flex-1 truncate text-sm">
            Viewing {possessive} map
          </h4>
          <button
            type="button"
            className="-my-1 -mr-3 grid size-7 shrink-0 cursor-pointer place-items-center rounded-full text-nyc-ink opacity-55 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-nyc-ink-2"
            aria-label="Go to my map"
            title="Go to my map"
            onClick={onExit}
          >
            <X size={16} {...ICON} aria-hidden="true" />
          </button>
        </div>
        {compare && (
          <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-nyc-muted">
            <Legend color="var(--nyc-primary)" label="You" />
            <Legend color="var(--nyc-theirs)" label={owner} />
            <Legend color="var(--nyc-both)" label="Both" />
          </ul>
        )}
      </div>

      <ul className="border-t border-dashed border-nyc-line px-4.5 py-3">
        <li>
          <button
            type="button"
            className={CARD_ROW}
            aria-pressed={compare}
            onClick={() => onCompareChange(!compare)}
          >
            <GitCompareArrows size={16} {...ICON} aria-hidden="true" />
            <span className="flex-1">Compare with mine</span>
            {compare && <Check size={16} {...ICON} aria-hidden="true" />}
          </button>
        </li>
        {chooser ? (
          <>
            <li>
              <button type="button" className={CARD_ROW} onClick={() => onSave("merge")}>
                <Merge size={16} {...ICON} aria-hidden="true" />
                Merge into mine
              </button>
            </li>
            <li>
              <button type="button" className={CARD_ROW} onClick={() => onSave("replace")}>
                <Replace size={16} {...ICON} aria-hidden="true" />
                <span className="flex-1">Replace mine</span>
                <span className="text-nyc-faint tabular-nums">{ownCount}</span>
              </button>
            </li>
            <li>
              <button type="button" className={CARD_ROW} onClick={() => setChooser(false)}>
                <ArrowLeft size={16} {...ICON} aria-hidden="true" />
                Back
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              type="button"
              className={CARD_ROW}
              onClick={() => (ownCount === 0 ? onSave("replace") : setChooser(true))}
            >
              <Plus size={16} {...ICON} aria-hidden="true" />
              {ownCount === 0 ? "Save as my map" : "Save to my map"}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <li className="flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ background: color }} aria-hidden="true" />
      {label}
    </li>
  );
}
