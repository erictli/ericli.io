"use client";

import { HarborFrame, WaterCaption, useLiveHarbor } from "@/components/home/harbor";

// The harbor off Pier 1 as it is right now, in a rounded window with its
// caption: the homepage's plainest layout.

export default function HomeWater({ className = "" }: { className?: string }) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  return (
    <HarborFrame conditions={conditions} facts={facts} className={`rounded-2xl ${className}`}>
      <WaterCaption facts={facts} liveStatus={liveStatus} />
    </HarborFrame>
  );
}
