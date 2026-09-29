"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import type { WaterConditions } from "@/lib/water/conditions";
import { HarborCanvas } from "./harbor";

// Display type for the poster layouts. Each piece measures its own glyphs
// after the fonts load, so the type sits exactly on the page's edges rather
// than at a size someone guessed.

type Ink = { left: number; right: number; ascent: number; descent: number; letterSpacing: number };

type Ctx = CanvasRenderingContext2D;

/** CSS font-stretch percentages as the keywords the canvas takes. */
const STRETCHES: [number, CanvasFontStretch][] = [
  [50, "ultra-condensed"],
  [62.5, "extra-condensed"],
  [75, "condensed"],
  [87.5, "semi-condensed"],
  [100, "normal"],
  [112.5, "semi-expanded"],
  [125, "expanded"],
  [150, "extra-expanded"],
  [200, "ultra-expanded"],
];

/** Sets the canvas to `el`'s font (family, weight, width, tracking) at `size` px. */
function applyFont(ctx: Ctx, cs: CSSStyleDeclaration, size: number, letterSpacing: number) {
  const pct = parseFloat(cs.fontStretch) || 100;
  const stretch = STRETCHES.reduce((best, s) => (Math.abs(s[0] - pct) < Math.abs(best[0] - pct) ? s : best))[1];
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${size}px ${cs.fontFamily}`;
  // Both are recent additions to the canvas; without them the face is just set at its normal width.
  if ("fontStretch" in ctx) ctx.fontStretch = stretch;
  if ("letterSpacing" in ctx) ctx.letterSpacing = `${letterSpacing}px`;
}

/** The ink box of `text` in `el`'s font at 100px, from the canvas's glyph metrics. */
function measureInk(el: HTMLElement, text: string): Ink {
  const cs = getComputedStyle(el);
  const ctx = document.createElement("canvas").getContext("2d") as Ctx;
  const letterSpacing = parseFloat(cs.letterSpacing) || 0;
  applyFont(ctx, cs, 100, letterSpacing);
  const m = ctx.measureText(text);
  return {
    left: m.actualBoundingBoxLeft,
    right: m.actualBoundingBoxRight,
    ascent: m.actualBoundingBoxAscent,
    descent: m.actualBoundingBoxDescent,
    letterSpacing,
  };
}

/** Calls `fit` now, whenever `el` resizes, and once the web fonts are in. */
function useFit(el: React.RefObject<HTMLElement | null>, fit: () => void, deps: unknown[]) {
  useLayoutEffect(() => {
    const node = el.current;
    if (!node) return;
    fit();
    const ro = new ResizeObserver(() => fit());
    ro.observe(node);
    // Again once web fonts arrive, including ones fetched only when this
    // type first asked for them.
    let live = true;
    const refit = () => live && fit();
    document.fonts?.ready.then(refit);
    document.fonts?.addEventListener("loadingdone", refit);
    return () => {
      live = false;
      ro.disconnect();
      document.fonts?.removeEventListener("loadingdone", refit);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/** One line of type scaled so its ink runs exactly edge to edge of its container. */
export function FitText({ text, className = "" }: { text: string; className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const probe = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<{ fontSize: number; shift: number } | null>(null);

  useFit(
    box,
    () => {
      const W = box.current?.clientWidth ?? 0;
      if (!W || !probe.current) return;
      const ink = measureInk(probe.current, text);
      // The canvas can't set tabular figures, so trust the page's own width
      // when it is the wider of the two: the line must never overflow.
      const setWidth = probe.current.getBoundingClientRect().width;
      const fontSize = (100 * W) / Math.max(ink.left + ink.right, setWidth + ink.left);
      setSize({ fontSize, shift: (ink.left * fontSize) / 100 });
    },
    [text],
  );

  return (
    <div ref={box} className="relative w-full">
      <span ref={probe} aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap text-[100px] ${className}`}>
        {text}
      </span>
      <span
        className={`block whitespace-nowrap ${className} ${size ? "" : "invisible"}`}
        style={size ? { fontSize: size.fontSize, marginLeft: size.shift } : undefined}
      >
        {text}
      </span>
    </div>
  );
}

/** A word set huge, with the harbor visible only through its letters. */
export function KnockoutHarbor({
  text,
  conditions,
  label,
  className = "",
}: {
  text: string;
  conditions: WaterConditions;
  label: string;
  /** Font classes for the letters. */
  className?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const probe = useRef<HTMLSpanElement>(null);
  const [mask, setMask] = useState<{ url: string; height: number } | null>(null);
  const drawn = useRef("");

  useFit(
    box,
    () => {
      const W = box.current?.clientWidth ?? 0;
      if (!W || !probe.current) return;
      const ink = measureInk(probe.current, text);
      const k = W / (ink.left + ink.right);
      const height = Math.ceil((ink.ascent + ink.descent) * k);
      // Redraw when the size or the glyphs change (a web font arriving).
      const key = `${W}x${height}:${ink.left.toFixed(2)}:${ink.right.toFixed(2)}`;
      if (key === drawn.current) return;
      drawn.current = key;
      // The letters, white on clear, become the water's mask.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(height * dpr);
      const ctx = canvas.getContext("2d") as Ctx;
      ctx.scale(dpr, dpr);
      applyFont(ctx, getComputedStyle(probe.current), 100 * k, ink.letterSpacing * k);
      ctx.fillStyle = "#fff";
      ctx.fillText(text, ink.left * k, ink.ascent * k);
      setMask({ url: canvas.toDataURL("image/png"), height });
    },
    [text],
  );

  const maskStyle = mask
    ? {
        WebkitMaskImage: `url(${mask.url})`,
        maskImage: `url(${mask.url})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }
    : undefined;

  return (
    <div ref={box} className="relative w-full" style={{ height: mask?.height ?? 0 }}>
      <span ref={probe} aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap text-[100px] ${className}`}>
        {text}
      </span>
      <span className="sr-only">{text}</span>
      {mask && (
        <div className="absolute inset-0" style={maskStyle}>
          <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={6} label={label} />
        </div>
      )}
    </div>
  );
}

/** The pier's time in large numerals, with a square of water set between the hours and minutes. */
export function ClockLockup({
  hh,
  mm,
  conditions,
  label,
  overlay,
  className = "",
}: {
  hh: string;
  mm: string;
  conditions: WaterConditions;
  label: string;
  /** Laid over the water, such as a caption. */
  overlay?: ReactNode;
  /** Font classes for the numerals. */
  className?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const probe = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState<{ fontSize: number; side: number } | null>(null);

  useFit(
    box,
    () => {
      const W = box.current?.clientWidth ?? 0;
      if (!W || !probe.current) return;
      // Two tabular figures per side, the water as tall as a figure, a
      // little air on either side of it.
      const pair = probe.current.getBoundingClientRect().width / 100;
      const figure = measureInk(probe.current, "0").ascent / 100;
      const air = 0.08;
      const fontSize = W / (2 * pair + figure + 2 * air);
      setFit({ fontSize, side: figure * fontSize });
    },
    [],
  );

  const digits = `block shrink-0 whitespace-nowrap tabular-nums ${className}`;
  const digitStyle = fit ? { fontSize: fit.fontSize, lineHeight: `${fit.side}px` } : undefined;

  return (
    <div ref={box} className="relative w-full">
      <span ref={probe} aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap text-[100px] tabular-nums ${className}`}>
        00
      </span>
      <p className="sr-only">
        {hh}:{mm} at the pier
      </p>
      {fit && (
        <div aria-hidden className="flex items-center justify-between" style={{ height: fit.side }}>
          <span className={digits} style={digitStyle}>
            {hh}
          </span>
          <div className="relative shrink-0 overflow-hidden" style={{ width: fit.side, height: fit.side }}>
            <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={1.5} label={label} />
            {overlay}
          </div>
          <span className={digits} style={digitStyle}>
            {mm}
          </span>
        </div>
      )}
    </div>
  );
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/**
 * A name on one line with a small window of water set between its words,
 * sitting on the baseline and as tall as the lowercase letters or the
 * capitals.
 */
export function InlineName({
  first,
  last,
  conditions,
  label,
  aspect = 1.5,
  height = "x-height",
  overlay,
  className = "",
}: {
  first: string;
  last: string;
  conditions: WaterConditions;
  label: string;
  /** Laid over the water, such as a caption. */
  overlay?: ReactNode;
  /** Width over height of the water. */
  aspect?: number;
  /** How tall the water stands: to the top of the lowercase letters, or of the capitals. */
  height?: "x-height" | "cap-height";
  /** Font classes for the name. */
  className?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const firstProbe = useRef<HTMLSpanElement>(null);
  const lastProbe = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState<{ fontSize: number; height: number; gap: number; shift: number } | null>(null);

  useFit(
    box,
    () => {
      const W = box.current?.clientWidth ?? 0;
      if (!W || !firstProbe.current || !lastProbe.current) return;
      // Widths at 100px: the words as set (tracking included), trimmed to
      // the ink at the outer edges so the line runs edge to edge.
      const a = measureInk(firstProbe.current, first);
      const b = measureInk(lastProbe.current, last);
      const wFirst = firstProbe.current.getBoundingClientRect().width;
      const wLast = lastProbe.current.getBoundingClientRect().width;
      const xHeight = measureInk(firstProbe.current, height === "cap-height" ? "H" : "x").ascent;
      const gap = 12;
      const leftTrim = -a.left;
      const rightTrim = wLast - b.right - b.letterSpacing;
      const total = wFirst + wLast + 2 * gap + aspect * xHeight - leftTrim - rightTrim;
      const k = W / total;
      setFit({ fontSize: 100 * k, height: xHeight * k, gap: gap * k, shift: leftTrim * k });
    },
    [first, last, aspect, height],
  );

  const style = fit ? { fontSize: fit.fontSize } : undefined;
  return (
    <div ref={box} className="relative w-full">
      <span ref={firstProbe} aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap text-[100px] ${className}`}>
        {first}
      </span>
      <span ref={lastProbe} aria-hidden className={`invisible absolute left-0 top-0 whitespace-nowrap text-[100px] ${className}`}>
        {last}
      </span>
      <span className="sr-only">
        {first} {last}
      </span>
      {fit && (
        <div aria-hidden className="flex items-baseline whitespace-nowrap leading-none" style={{ marginLeft: -fit.shift }}>
          <span className={className} style={style}>
            {first}
          </span>
          <div
            className="group relative shrink-0 overflow-hidden"
            style={{ width: fit.height * aspect, height: fit.height, marginLeft: fit.gap, marginRight: fit.gap }}
          >
            <HarborCanvas conditions={conditions} className="absolute inset-0" maxAspect={aspect + 0.3} label={label} />
            {overlay}
          </div>
          <span className={className} style={style}>
            {last}
          </span>
        </div>
      )}
    </div>
  );
}
