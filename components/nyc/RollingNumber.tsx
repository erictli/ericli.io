"use client";

import { useEffect, useRef, useState } from "react";

interface RollingNumberProps {
  value: number;
  className?: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * An odometer: each digit is a column of 0-9 that slides to the new digit.
 * Columns are keyed by their place value (units, tens, ...) so existing
 * digits keep rolling when a new leading digit appears, and that new digit
 * rolls in from 0 while its column opens. The first render shows the value
 * as is, so the page doesn't spin every counter up on load.
 */
export function RollingNumber({ value, className }: RollingNumberProps) {
  const text = String(Math.max(0, Math.round(value)));
  const places = text.split("").reverse(); // units first
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <span
      className={`inline-flex flex-row-reverse overflow-hidden align-baseline leading-none tabular-nums ${className ?? ""}`}
      style={{ height: "1em" }}
      aria-label={text}
      role="text"
    >
      {places.map((digit, place) => (
        <Digit key={place} digit={Number(digit)} animateIn={!firstRender.current} />
      ))}
    </span>
  );
}

function Digit({ digit, animateIn }: { digit: number; animateIn: boolean }) {
  // A column added later (9 to 10) mounts at 0 with no width, then opens and
  // rolls to its digit a tick later instead of popping in. Columns present on
  // the first render start at their digit. A timer rather than an animation
  // frame, so background tabs still show digits.
  const [shown, setShown] = useState<number | null>(animateIn ? null : digit);
  useEffect(() => {
    const timer = window.setTimeout(() => setShown(digit), 20);
    return () => window.clearTimeout(timer);
  }, [digit]);
  const mounted = shown !== null;

  // Each column is sized by an invisible "0" in the inherited font, so digits
  // space exactly like plain tabular text at any size, weight or tracking.
  // Opening a new column animates the grid track from 0fr to 1fr.
  return (
    <span
      className="grid transition-[grid-template-columns] duration-300 ease-out motion-reduce:transition-none"
      style={{ gridTemplateColumns: mounted ? "1fr" : "0fr" }}
      aria-hidden="true"
    >
      <span className="relative block min-w-0 overflow-hidden" style={{ height: "1em" }}>
        <span className="invisible block">0</span>
        <span
          className="absolute inset-x-0 top-0 flex flex-col items-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateY(-${shown ?? 0}em)` }}
        >
          {DIGITS.map((d) => (
            <span key={d} className="block text-center" style={{ height: "1em" }}>
              {d}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
