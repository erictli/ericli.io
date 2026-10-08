"use client";

import { cn } from "@/lib/utils";
import { useMarathon } from "./store";

/** Over the map until the client module has drawn it. */
export default function SceneLoading() {
  const ready = useMarathon((s) => s.ready);
  const failed = useMarathon((s) => s.failed);
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-3 grid place-items-center text-[13px] text-marathon-ink-3 transition-opacity duration-300",
        "group-data-[still]/story:hidden",
        ready && !failed && "opacity-0",
      )}
    >
      {failed ? "The graphic could not load." : "Loading the course…"}
    </div>
  );
}
