"use client";

import { useEffect, useRef } from "react";
import { Check, Circle, X } from "lucide-react";
import type { Neighborhood } from "@/lib/nyc/types";
import { CARD_ROW, ICON, SURFACE } from "./ui";

export interface DetailStatus {
  mine: boolean;
  /** Present when the page was opened from a share link. */
  theirs: boolean | null;
  /** True when both maps are drawn together, which colors theirs blue. */
  compare: boolean;
}

interface NeighborhoodDetailProps {
  neighborhood: Neighborhood;
  status: DetailStatus;
  canEdit: boolean;
  onSetVisited: (visited: boolean) => void;
  onClose: () => void;
  /** "floating" is a small menu at the pointer (desktop); "sheet" sits in the mobile bottom bar. */
  variant: "floating" | "sheet";
  point?: { x: number; y: number };
  container?: { width: number; height: number };
  /** Focus the visited action so Enter acts on it (used after a search pick). */
  focusAction?: boolean;
}

const MENU_WIDTH = 224;
const MENU_HEIGHT = 150;

function formatIncludes(includes: string[]): string {
  if (includes.length <= 1) return includes.join("");
  return `${includes.slice(0, -1).join(", ")} and ${includes.at(-1)}`;
}

export function NeighborhoodDetail({
  neighborhood,
  status,
  canEdit,
  onSetVisited,
  onClose,
  variant,
  point,
  container,
  focusAction = false,
}: NeighborhoodDetailProps) {
  const cardRef = useRef<HTMLElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);
  const floating = variant === "floating";

  // Move focus in, close on Escape or an outside click, and hand focus back.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const target = focusAction ? actionRef.current : cardRef.current;
    (target ?? cardRef.current)?.focus({ preventScroll: true });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (floating && !cardRef.current?.contains(event.target as Node))
        onClose();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
      previous?.focus?.({ preventScroll: true });
    };
  }, [floating, focusAction, neighborhood.id, onClose]);

  const position =
    floating && point && container
      ? {
          left: Math.min(
            Math.max(point.x + 2, 8),
            Math.max(8, container.width - MENU_WIDTH - 8),
          ),
          top: Math.min(
            Math.max(point.y + 2, 8),
            Math.max(8, container.height - MENU_HEIGHT - 8),
          ),
        }
      : undefined;

  const theirLine = status.theirs !== null && (
    <StatusLine
      label="They"
      visited={status.theirs}
      color={status.compare ? "var(--nyc-theirs)" : "var(--nyc-primary)"}
    />
  );

  const action = canEdit ? (
    <button
      ref={actionRef}
      type="button"
      role={floating ? "menuitem" : undefined}
      className={CARD_ROW}
      aria-pressed={status.mine}
      onClick={() => onSetVisited(!status.mine)}
    >
      {status.mine ? (
        <Circle size={16} {...ICON} aria-hidden="true" className="text-nyc-faint" />
      ) : (
        <Check size={16} {...ICON} aria-hidden="true" />
      )}
      {status.mine ? "Mark as not visited" : "Mark as visited"}
    </button>
  ) : (
    <StatusLine label="You" visited={status.mine} color="var(--nyc-primary)" />
  );

  // One card for both variants, built like the other cards: a compact header,
  // a dashed rule, then rows in the shared card row style. The desktop menu
  // sits at the pointer and closes on an outside click, so it has no X.
  return (
    <section
      ref={cardRef}
      tabIndex={-1}
      role={floating ? "menu" : "dialog"}
      aria-label={`${neighborhood.name} details`}
      className={`${SURFACE} rounded-2xl font-sans font-[450] text-nyc-ink outline-none ${
        floating ? "absolute z-30 w-56" : ""
      }`}
      style={position}
    >
      <div className="flex items-start gap-2 px-3.5 pt-3 pb-3">
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm">{neighborhood.name}</h2>
          <p className="mt-0.5 text-xs leading-snug text-nyc-muted">
            {neighborhood.borough}
            {neighborhood.includes.length > 0 &&
              `. Also covers ${formatIncludes(neighborhood.includes)}.`}
          </p>
        </div>
        {!floating && (
          <button
            type="button"
            className="-mt-0.5 -mr-1.5 grid size-7 shrink-0 cursor-pointer place-items-center rounded-full text-nyc-ink opacity-55 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-nyc-ink-2"
            aria-label="Close"
            onClick={onClose}
          >
            <X size={16} {...ICON} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="border-t border-dashed border-nyc-line px-2 py-2">
        {theirLine}
        {action}
      </div>
    </section>
  );
}

/** "You've visited", "They haven't visited". */
function statusVerb(visited: boolean): string {
  return visited ? "’ve visited" : " haven’t visited";
}

/** A read-only row: a filled dot when visited, then who has or hasn't been. */
function StatusLine({
  label,
  visited,
  color,
}: {
  label: string;
  visited: boolean;
  color: string;
}) {
  return (
    <p className="flex h-7 items-center gap-2.5 px-1.5 text-sm text-nyc-ink-2">
      <span
        className="grid size-4 shrink-0 place-items-center rounded-full"
        style={{
          background: visited ? color : "var(--nyc-fill)",
          color: visited ? "white" : "var(--nyc-faint)",
        }}
        aria-hidden="true"
      >
        {visited && <Check size={10} {...ICON} />}
      </span>
      <span>
        <span className="text-nyc-ink">{label}</span>
        {statusVerb(visited)}
      </span>
    </p>
  );
}
