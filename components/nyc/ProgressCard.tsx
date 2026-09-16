"use client";

import { memo, useMemo } from "react";
import { Check, ChevronDown } from "lucide-react";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import type { Borough } from "@/lib/nyc/types";
import { RollingNumber } from "./RollingNumber";
import { CARD_ROW, CARD_WIDTH, ICON, SURFACE } from "./ui";

export const BOROUGHS: Borough[] = [
  "Manhattan",
  "Brooklyn",
  "Queens",
  "Bronx",
  "Staten Island",
];

export const TOTAL_NEIGHBORHOODS = NEIGHBORHOODS.length;

export function percentVisited(count: number): number {
  return Math.round((count / TOTAL_NEIGHBORHOODS) * 100);
}

interface ProgressCardProps {
  visitedIds: ReadonlySet<string>;
  compareIds: ReadonlySet<string> | null;
  onPickBorough: (borough: Borough) => void;
  /** Phones collapse the borough rows until the header is tapped. */
  compact: boolean;
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
}

/**
 * Overall progress plus a row per borough. Rows double as zoom shortcuts.
 */
export const ProgressCard = memo(function ProgressCard({
  visitedIds,
  compareIds,
  onPickBorough,
  compact,
  expanded,
  onExpandedChange,
}: ProgressCardProps) {
  const count = visitedIds.size;
  const percent = percentVisited(count);
  const rows = useMemo(
    () =>
      BOROUGHS.map((borough) => {
        const items = NEIGHBORHOODS.filter((item) => item.borough === borough);
        return {
          borough,
          total: items.length,
          visited: items.filter(({ id }) => visitedIds.has(id)).length,
          theirs: compareIds
            ? items.filter(({ id }) => compareIds.has(id)).length
            : null,
        };
      }),
    [compareIds, visitedIds],
  );
  const showRows = !compact || expanded;

  const header = (
    <>
      <h4 className="text-sm font-[450] mb-2.5">Neighborhoods visited</h4>
      <div className="flex items-end justify-between gap-2 font-[450] tabular-nums">
        <div
          className={`flex items-end leading-none tracking-tight ${compact ? "text-2xl" : "text-3xl"}`}
        >
          <RollingNumber value={count} />
          <div className="text-sm text-nyc-faint ml-1.25">/</div>
          <div className="text-sm text-nyc-faint ml-1.25">
            {TOTAL_NEIGHBORHOODS}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-sm">{percent}%</p>
          {compact && (
            <ChevronDown
              size={16}
              {...ICON}
              aria-hidden="true"
              className={`-mr-1 text-nyc-faint transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          )}
        </div>
      </div>
      <div
        className="mt-2 h-0.75 overflow-hidden rounded-full bg-nyc-line"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={TOTAL_NEIGHBORHOODS}
        aria-valuenow={count}
        aria-label={`${count} of ${TOTAL_NEIGHBORHOODS} neighborhoods visited`}
      >
        <span
          className="block h-full rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%`, background: "var(--nyc-primary)" }}
        />
      </div>
    </>
  );

  return (
    <section
      className={`${SURFACE} rounded-2xl font-sans text-nyc-ink ${compact ? "w-64" : CARD_WIDTH}`}
      aria-label="Progress"
    >
      {compact ? (
        <button
          type="button"
          className="block w-full cursor-pointer px-3.5 pt-3 pb-3 text-left"
          aria-expanded={expanded}
          aria-label={`${count} of ${TOTAL_NEIGHBORHOODS} visited. ${expanded ? "Hide" : "Show"} boroughs`}
          onClick={() => onExpandedChange(!expanded)}
        >
          {header}
        </button>
      ) : (
        <div className="px-6 pt-5 pb-6">{header}</div>
      )}

      {showRows && (
        <ul
          // Row text lines up with the header: list padding plus the row's own
          // px-1.5 equals the header's horizontal padding.
          className={`border-t border-dashed border-nyc-line ${compact ? "px-2 py-2" : "px-4.5 py-4"}`}
          aria-label="Progress by borough"
        >
          {rows.map(({ borough, visited, total, theirs }) => (
            <li key={borough}>
              <button
                type="button"
                className={CARD_ROW}
                onClick={() => onPickBorough(borough)}
                aria-label={
                  theirs === null
                    ? `Zoom to ${borough}, ${visited} of ${total} visited`
                    : `Zoom to ${borough}, you ${visited}, them ${theirs} of ${total}`
                }
              >
                <ProgressRing fraction={visited / total} />
                <span className="flex-1 truncate">{borough}</span>
                {/* Fixed columns so the numbers line up down the list. When
                    comparing, yours and theirs sit side by side in each map's
                    color; the key is in the viewing card. */}
                <span className="flex items-center leading-none text-nyc-muted tabular-nums">
                  <span
                    className={`inline-flex w-5 justify-end ${theirs === null ? "text-nyc-ink-2" : ""}`}
                    style={theirs === null ? undefined : { color: "var(--nyc-primary)" }}
                  >
                    <RollingNumber value={visited} />
                  </span>
                  {theirs !== null ? (
                    <span
                      className="ml-2 inline-flex w-5 justify-end"
                      style={{ color: "var(--nyc-theirs)" }}
                    >
                      <RollingNumber value={theirs} />
                    </span>
                  ) : (
                    <>
                      <span className="text-center text-nyc-faint mx-1">/</span>
                      <span className="inline-block w-5 text-right text-nyc-faint">
                        {total}
                      </span>
                    </>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
});

/** A small ring: round progress for a compact row. */
function ProgressRing({ fraction }: { fraction: number }) {
  const size = 16;
  const stroke = 2.5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.max(fraction, 0), 1);
  if (clamped >= 1) {
    return (
      <span
        className="grid size-4 shrink-0 place-items-center rounded-full text-white"
        style={{ background: "var(--nyc-primary)" }}
        aria-hidden="true"
      >
        <Check size={10} {...ICON} />
      </span>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      className="shrink-0 -rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--nyc-fill)"
        strokeWidth={stroke}
      />
      {clamped > 0 && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={"var(--nyc-primary)"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - clamped)}
          style={{ transition: "stroke-dashoffset 500ms ease-out" }}
        />
      )}
    </svg>
  );
}
