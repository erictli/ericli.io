"use client";

import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Check } from "lucide-react";
import { ICON, SURFACE_INVERSE } from "./ui";

const VISIBLE_MS = 2200;
const EXIT_MS = 240;

export interface ToastHandle {
  show: (toast: { title: string; visited: boolean }) => void;
}

interface ToastProps {
  /** Extra distance from the bottom, e.g. above the mobile bottom bar. */
  bottomOffset: number;
}

interface ToastState {
  key: number;
  title: string;
  visited: boolean;
}

/**
 * A small confirmation: the mark and the name. Owns its own state and timers
 * so showing one doesn't re-render the rest of the app.
 */
export const Toast = forwardRef<ToastHandle, ToastProps>(function Toast(
  { bottomOffset },
  ref,
) {
  const [toast, setToast] = useState<ToastState | null>(null);
  const [leaving, setLeaving] = useState(false);

  useImperativeHandle(ref, () => ({
    show: (next) => setToast({ ...next, key: Date.now() }),
  }));

  // Show, then animate out, then remove.
  useEffect(() => {
    if (!toast) return;
    setLeaving(false);
    const leave = window.setTimeout(() => setLeaving(true), VISIBLE_MS);
    const remove = window.setTimeout(() => setToast(null), VISIBLE_MS + EXIT_MS);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(remove);
    };
  }, [toast]);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 z-30 flex justify-center px-3 font-sans"
      style={{ bottom: `calc(${bottomOffset}px + env(safe-area-inset-bottom))` }}
      aria-live="polite"
    >
      {toast && (
        <div
          key={toast.key}
          className={`${SURFACE_INVERSE} flex items-center gap-2.5 rounded-full py-1.5 pr-3.5 pl-2 text-sm ${
            leaving
              ? "motion-safe:animate-nyc-toast-out"
              : "motion-safe:animate-nyc-toast-in"
          }`}
        >
          <span
            className="grid size-5 place-items-center rounded-full"
            style={{
              background: toast.visited ? "var(--nyc-primary)" : "transparent",
              boxShadow: toast.visited
                ? "inset 0 0 0 1px rgba(255,255,255,0.35)"
                : "inset 0 0 0 1.5px currentColor",
              color: toast.visited ? "white" : "inherit",
              opacity: toast.visited ? 1 : 0.5,
            }}
            aria-hidden="true"
          >
            {toast.visited && <Check size={12} {...ICON} />}
          </span>
          <span className="font-medium">{toast.title}</span>
        </div>
      )}
    </div>
  );
});
