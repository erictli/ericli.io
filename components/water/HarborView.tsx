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
}

export default function HarborView({ conditions, className = "", style, maxAspect = 3, label }: HarborViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<WaterEngine | null>(null);
  const conditionsRef = useRef(conditions);
  conditionsRef.current = conditions;
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let engine: WaterEngine;
    try {
      engine = new WaterEngine(el, conditionsRef.current, {
        onReady: () => setReady(true),
        maxAspect,
        maxPixelRatio: 1.25,
      });
    } catch (err) {
      console.error(err);
      setFailed(true);
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
      className={`${positioned} overflow-hidden bg-[#1c2124] ${className}`}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      {!failed && (
        <div
          ref={containerRef}
          className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}
      {failed && <div className="absolute inset-0 bg-[linear-gradient(180deg,#5c666b_0%,#2d363b_55%,#1c2124_100%)]" />}
    </div>
  );
}
