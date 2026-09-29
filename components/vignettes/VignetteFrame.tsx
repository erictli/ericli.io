"use client";

import type { ReactNode, Ref } from "react";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";

// The page around a vignette: a title, a fixed-size square frame for the
// canvas (so rendering cost never grows with the window), a row of chips
// below it, and an Adjust panel beside it on wide screens or under it on
// narrow ones.

export const CHIP =
  "h-8 shrink-0 cursor-pointer rounded-full px-3 text-[13px] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70";
const PANEL = "rounded-xl border border-white/10 bg-white/[0.04]";

export function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${CHIP} ${active ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
    >
      {children}
    </button>
  );
}

export function LiveChip({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`${CHIP} flex items-center gap-1.5 ${active ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
    >
      <span className={`size-1.5 rounded-full ${active ? "bg-emerald-500" : "bg-white/45"}`} />
      Live
    </button>
  );
}

/** A thin divider between groups of chips. */
export function ChipDivider() {
  return <span className="mx-1 h-4 w-px shrink-0 bg-white/15" aria-hidden />;
}

export type LiveStatus = "loading" | "ok" | "error";

interface VignetteFrameProps {
  title: string;
  /** One line under the title: time, weather, whatever the scene is showing. */
  summary: string;
  /** Set while the scene tracks live data; drives the status dot. */
  live?: LiveStatus | null;
  /** The engine has drawn its first frame; the canvas fades in. */
  ready: boolean;
  /** WebGL is unavailable. */
  failed: boolean;
  /** What the frame holds, for screen readers. */
  ariaLabel: string;
  containerRef: Ref<HTMLDivElement>;
  /** A short instruction shown in the frame until dismissed. */
  hint?: string;
  showHint?: boolean;
  cursor?: "pointer" | "default" | "crosshair" | "grab";
  /** Chips under the frame. */
  nav: ReactNode;
  /** The Adjust panel, given the classes for where it lands. */
  panel?: (className: string) => ReactNode;
  panelOpen?: boolean;
  onPanelToggle?: () => void;
  /** A warning under the chips, such as a data source being unreachable. */
  note?: string;
  /** Anything else layered over the frame (labels, overlays). */
  children?: ReactNode;
}

export function VignetteFrame({
  title,
  summary,
  live,
  ready,
  failed,
  ariaLabel,
  containerRef,
  hint,
  showHint = false,
  cursor = "default",
  nav,
  panel,
  panelOpen = false,
  onPanelToggle,
  note,
  children,
}: VignetteFrameProps) {
  const cursorClass = { pointer: "cursor-pointer", default: "cursor-default", crosshair: "cursor-crosshair", grab: "cursor-grab" }[cursor];
  return (
    <main className="fixed inset-0 overflow-y-auto bg-[#0b0d10] font-sans text-white antialiased">
      <div className="flex min-h-full flex-col items-center justify-center gap-4 px-4 [--frame:min(800px,calc(100vw-2rem),calc(100dvh-11rem))] pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))]">
        <header className="flex w-(--frame) items-end justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-[15px] font-medium tracking-[-0.01em]">{title}</h1>
            <p className="mt-0.5 truncate text-[13px] text-white/55 tabular-nums">
              {live && (
                <span
                  className={`mr-1.5 inline-block size-1.5 -translate-y-px rounded-full align-middle ${
                    live === "error" ? "bg-amber-400" : "animate-pulse bg-emerald-400"
                  }`}
                />
              )}
              {summary}
            </p>
          </div>
          <Link href="/" className="shrink-0 text-[13px] text-white/45 transition-colors hover:text-white">
            ericli.io
          </Link>
        </header>

        <div className="relative aspect-square w-(--frame)">
          <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden rounded-[6px] bg-[#07090c] shadow-[0_0_0_1px_rgb(255_255_255/0.06),0_24px_80px_-24px_rgb(0_0_0/0.8)] transition-opacity duration-700 select-none ${cursorClass} ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            role="img"
            aria-label={ariaLabel}
          />
          {failed && (
            <div className="absolute inset-0 grid place-items-center p-8 text-center text-sm text-white/70">
              This needs WebGL 2, which this browser doesn’t have turned on.
            </div>
          )}
          {children}
          {hint && (
            <p
              className={`pointer-events-none absolute inset-x-0 bottom-4 text-center text-[13px] text-white/80 transition-opacity duration-1000 [text-shadow:0_1px_10px_rgb(0_0_0/0.6)] ${
                showHint && ready ? "opacity-100" : "opacity-0"
              }`}
            >
              {hint}
            </p>
          )}
          {panel && panelOpen && panel(`absolute top-0 left-full ml-6 hidden w-72 xl:block ${PANEL}`)}
        </div>

        <div className="flex w-(--frame) items-start justify-between gap-3">
          <nav aria-label="Scene" className="-mx-1 flex min-w-0 flex-wrap items-center gap-1 max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:[scrollbar-width:none]">
            {nav}
          </nav>
          {panel && onPanelToggle && (
            <button
              type="button"
              onClick={onPanelToggle}
              aria-expanded={panelOpen}
              className={`${CHIP} flex shrink-0 items-center gap-1.5 border border-white/12 ${panelOpen ? "bg-white/10 text-white" : "text-white/75 hover:text-white"}`}
            >
              {panelOpen ? <X size={14} strokeWidth={1.75} /> : <SlidersHorizontal size={14} strokeWidth={1.75} />}
              Adjust
            </button>
          )}
        </div>
        {panel && panelOpen && panel(`w-(--frame) xl:hidden ${PANEL}`)}
        {note && <p className="w-(--frame) text-[12px] text-amber-200/80">{note}</p>}
      </div>
    </main>
  );
}
