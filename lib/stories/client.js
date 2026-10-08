// Browser helpers for a data story's client module (see README, "Data stories").
// Plain JS like the story modules that use them; nothing here runs on the server.

/**
 * Everything a story starts — listeners, observers, timers, frames, idle callbacks — goes
 * through one of these, so `dispose()` can undo all of it. Callbacks never fire after
 * dispose, and timers that have fired are forgotten (no growth while scrolling).
 */
export function createCleanup() {
  const undo = [];
  const timers = new Set(), frames = new Set(), idles = new Set();
  let disposed = false;
  const add = (fn) => { if (disposed) fn(); else undo.push(fn); return fn; };
  const guard = (fn) => (...args) => { if (!disposed) fn(...args); };
  const ric = typeof requestIdleCallback === "function";
  return {
    get disposed() { return disposed; },
    /** run fn on dispose */
    add,
    /** addEventListener now, removeEventListener on dispose */
    on(target, type, fn, opts) {
      const h = guard(fn);
      target.addEventListener(type, h, opts);
      add(() => target.removeEventListener(type, h, opts));
    },
    /** a ResizeObserver / IntersectionObserver / MutationObserver, disconnected on dispose */
    observe(observer) { add(() => observer.disconnect()); return observer; },
    timeout(fn, ms) {
      const id = setTimeout(() => { timers.delete(id); if (!disposed) fn(); }, ms);
      timers.add(id);
      return id;
    },
    clearTimeout(id) { clearTimeout(id); timers.delete(id); },
    interval(fn, ms) { const id = setInterval(guard(fn), ms); add(() => clearInterval(id)); return id; },
    frame(fn) {
      const id = requestAnimationFrame((t) => { frames.delete(id); if (!disposed) fn(t); });
      frames.add(id);
      return id;
    },
    /** requestIdleCallback, or a timeout where there is none (Safari) */
    idle(fn, fallbackMs = 50) {
      const id = ric
        ? requestIdleCallback(() => { idles.delete(id); if (!disposed) fn(); })
        : setTimeout(() => { idles.delete(id); if (!disposed) fn(); }, fallbackMs);
      idles.add(id);
      return id;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const id of timers) clearTimeout(id);
      for (const id of frames) cancelAnimationFrame(id);
      for (const id of idles) (ric ? cancelIdleCallback : clearTimeout)(id);
      timers.clear(); frames.clear(); idles.clear();
      while (undo.length) {
        try { undo.pop()(); } catch (e) { console.error(e); }
      }
    },
  };
}

// ---------------------------------------------------------------- data

/** Fetch JSON (pass the mount's AbortSignal so a teardown cancels it). */
export async function loadJSON(url, { signal } = {}) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return res.json();
}

export async function loadBinary(url, { signal } = {}) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return res.arrayBuffer();
}

// ---------------------------------------------------------------- theme and motion

const DARK = "(prefers-color-scheme: dark)";

/** The site follows the system scheme (Tailwind's `dark:` is a media query). */
export const isDark = () => matchMedia(DARK).matches;

/** Call cb(dark) when the system scheme changes, until the cleanup is disposed. */
export function onThemeChange(cleanup, cb) {
  cleanup.on(matchMedia(DARK), "change", () => cb(isDark()));
}

export const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/** A CSS custom property (as set on `el`, the story's root) as [r, g, b, a] for deck.gl. */
export function cssColor(el, name, alpha = 255) {
  return parseColor(getComputedStyle(el).getPropertyValue(name).trim(), alpha);
}

/** The raw value of a CSS custom property on `el`. */
export const cssVar = (el, name) => getComputedStyle(el).getPropertyValue(name).trim();

export function parseColor(raw, alpha = 255) {
  if (raw.startsWith("#")) {
    let h = raw.slice(1);
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h.slice(0, 6), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255, alpha];
  }
  const m = raw.match(/rgba?\(([^)]+)\)/);
  if (m) {
    const [r, g, b, a] = m[1].split(",").map((s) => parseFloat(s));
    return [r, g, b, a === undefined ? alpha : Math.round(a * 255)];
  }
  return [128, 128, 128, alpha];
}
