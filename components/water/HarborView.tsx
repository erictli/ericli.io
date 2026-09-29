"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { WaterConditions } from "@/lib/water/conditions";
import { WaterEngine } from "@/lib/water/engine/WaterEngine";

// Just the water, filling its box, following whatever conditions it is given.
// Layouts size and shape the box and put the words around it.

export interface HarborViewProps {
  conditions: WaterConditions;
  className?: string;
  style?: CSSProperties;
  /** Widest the box will get, width over height; the water mesh is cut to it. */
  maxAspect?: number;
  /** Describes the view for screen readers. */
  label?: string;
  /** Called once there's something to show: the first frame, or the fallback if WebGL is missing. The caller fades it in. */
  onReady?: () => void;
}

export default function HarborView({
  conditions,
  className = "",
  style,
  maxAspect = 3,
  label,
  onReady,
}: HarborViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WaterEngine | null>(null);
  const conditionsRef = useRef(conditions);
  conditionsRef.current = conditions;
  const [failed, setFailed] = useState(false);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let engine: WaterEngine;
    try {
      engine = new WaterEngine(el, conditionsRef.current, {
        onReady: () => onReadyRef.current?.(),
        maxAspect,
        maxPixelRatio: 1.25,
      });
    } catch (err) {
      console.error(err);
      setFailed(true);
      onReadyRef.current?.();
      return;
    }
    engineRef.current = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
  }, [maxAspect]);

  useEffect(() => {
    engineRef.current?.setConditions(conditions);
  }, [conditions]);

  // Positioned by the caller when it says so; otherwise its own box is the frame.
  const positioned = /(^|\s)(absolute|fixed|sticky)(\s|$)/.test(className) ? "" : "relative";

  return (
    <div
      className={`${positioned} overflow-hidden ${className}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {!failed && (
        <div ref={containerRef} className="absolute inset-0" />
      )}
      {failed && <div className="absolute inset-0 bg-[linear-gradient(180deg,#5c666b_0%,#2d363b_55%,#1c2124_100%)]" />}
    </div>
  );
}
