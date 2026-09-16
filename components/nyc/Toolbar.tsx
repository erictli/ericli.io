"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { InfoFilled, MtaLogo } from "./icons";
import { PALETTES } from "./palettes";
import { ICON, SURFACE, iconButton } from "./ui";

interface ToolbarProps {
  showSubway: boolean;
  subwayLoading: boolean;
  onShowSubwayChange: (show: boolean) => void;
  paletteId: string;
  onPaletteChange: (id: string) => void;
  night: boolean;
  onNightChange: (night: boolean) => void;
  /** Style controls are hidden while viewing someone else's map. */
  styleLocked: boolean;
  /** Which edge the about popover lines up with. */
  popoverAlign: "start" | "end";
}

const LINK =
  "text-nyc-ink-2 underline decoration-nyc-line underline-offset-2 transition-colors hover:text-nyc-ink hover:decoration-nyc-ink";

/** Color, night mode, subway overlay and the about popover, in one pill. */
export function Toolbar({
  showSubway,
  subwayLoading,
  onShowSubwayChange,
  paletteId,
  onPaletteChange,
  night,
  onNightChange,
  styleLocked,
  popoverAlign,
}: ToolbarProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setAboutOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAboutOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [aboutOpen]);

  return (
    <div ref={rootRef} className="relative font-sans">
      <div
        className={`${SURFACE} flex items-center gap-0.5 rounded-full p-0.5 text-nyc-ink`}
      >
        {!styleLocked && (
          <>
            <div
              className="flex items-center gap-1 px-1.5"
              role="radiogroup"
              aria-label="Map color"
            >
              {PALETTES.map((palette) => {
                const active = palette.id === paletteId;
                return (
                  <button
                    key={palette.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={palette.name}
                    title={palette.name}
                    className="grid size-7 cursor-pointer place-items-center rounded-full transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nyc-ink-2"
                    onClick={() => onPaletteChange(palette.id)}
                  >
                    <span
                      className="block rounded-full transition-[width,height] duration-200"
                      style={{
                        width: active ? 18 : 12,
                        height: active ? 18 : 12,
                        background: palette.visited,
                        boxShadow: active
                          ? "0 0 0 2px var(--nyc-surface), 0 0 0 3.5px " +
                            palette.visited
                          : "none",
                      }}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
            <span className="h-5 w-px bg-nyc-line" aria-hidden="true" />
            <button
              type="button"
              className={iconButton()}
              aria-pressed={night}
              aria-label={
                night ? "Switch to the bright map" : "Switch to the night map"
              }
              title={night ? "Bright map" : "Night map"}
              onClick={() => onNightChange(!night)}
            >
              {night ? (
                <Sun size={18} fill="currentColor" {...ICON} aria-hidden="true" />
              ) : (
                <Moon size={18} fill="currentColor" {...ICON} aria-hidden="true" />
              )}
            </button>
          </>
        )}
        <button
          type="button"
          className={iconButton(showSubway, { activeColor: "text-nyc-mta" })}
          aria-pressed={showSubway}
          aria-label={showSubway ? "Hide subway lines" : "Show subway lines"}
          title="Subway lines"
          onClick={() => onShowSubwayChange(!showSubway)}
        >
          {subwayLoading ? (
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <MtaLogo size={17} />
          )}
        </button>
        <span className="h-5 w-px bg-nyc-line" aria-hidden="true" />
        <button
          type="button"
          className={iconButton(aboutOpen, { quiet: true })}
          aria-expanded={aboutOpen}
          aria-label="About the map"
          title="About the map"
          onClick={() => setAboutOpen((open) => !open)}
        >
          <InfoFilled size={18} />
        </button>
      </div>

      {aboutOpen && (
        <div
          role="dialog"
          aria-label="About the map"
          className={`${SURFACE} absolute bottom-12 z-40 w-72 ${popoverAlign === "end" ? "right-0" : "left-0"} rounded-2xl p-4 text-sm leading-relaxed font-[450] text-nyc-muted`}
        >
          <p className="font-[450] text-nyc-ink">About the map</p>
          <p className="mt-1.5">
            Neighborhoods are NYC Planning&apos;s 2020 Neighborhood Tabulation
            Areas, limited to residential areas. They approximate neighborhoods
            rather than settle where one ends and the next begins.
          </p>
          <p className="mt-2">
            Your map is saved in this browser, no account needed. Links you
            share include a copy of your map as it is right now.
          </p>
          <p className="mt-2">
            Data:{" "}
            <a className={LINK} href="https://data.cityofnewyork.us/d/9nt8-h7nd" target="_blank" rel="noopener noreferrer">
              NYC Planning
            </a>
            ,{" "}
            <a className={LINK} href="https://data.ny.gov/d/s692-irgq" target="_blank" rel="noopener noreferrer">
              MTA
            </a>
            ,{" "}
            <a className={LINK} href="https://openfreemap.org" target="_blank" rel="noopener noreferrer">
              OpenFreeMap
            </a>{" "}
            and OpenStreetMap contributors.
          </p>
        </div>
      )}
    </div>
  );
}
