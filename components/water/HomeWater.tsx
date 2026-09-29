"use client";

import HarborView from "./HarborView";
import { harborLabel, useLiveHarbor } from "@/components/home/harbor";

// The harbor off Pier 1 as it is right now, in a rounded window with a line
// of caption: the homepage's plainest layout.

export default function HomeWater({ className = "" }: { className?: string }) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const caption = [facts.time, facts.wind, facts.sky].join(" · ");

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <HarborView conditions={conditions} className="absolute inset-0" label={harborLabel(facts)} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-[13px] text-white/70 [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
        <span
          className={`size-1.5 shrink-0 rounded-full ${liveStatus === "ok" ? "bg-emerald-400" : "bg-white/40"}`}
          aria-hidden
        />
        <span className="truncate">
          {facts.place} · {caption}
        </span>
      </div>
    </div>
  );
}
