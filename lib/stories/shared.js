// Helpers a data story uses on both sides: the page (server) computes facts with them and the
// client module formats live numbers with them, so both write numbers the same way.

export const fmt = {
  int: (n) => Math.round(n).toLocaleString("en-US"),
  pct: (n, d = 0) => `${(n * 100).toFixed(d)}%`,
  /** seconds -> h:mm:ss */
  hms(sec) {
    sec = Math.round(sec);
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  },
  /** seconds -> m:ss */
  ms(sec) {
    sec = Math.round(sec);
    const m = Math.floor(sec / 60), s = Math.abs(sec % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  },
};

/**
 * A sentence's premise, checked against the data: logs a `[copy check]` warning when it no
 * longer holds (e.g. after re-running a pipeline for a new year). On the page these run at
 * render, so `next build` prints them.
 */
export function copyCheck(cond, msg) {
  if (!cond) console.warn(`[copy check] ${msg}`);
}
