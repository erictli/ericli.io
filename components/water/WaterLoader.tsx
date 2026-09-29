"use client";

import dynamic from "next/dynamic";

// WebGL, the clock and the pier's time zone are all client-side.
const WaterApp = dynamic(() => import("./WaterApp"), {
  ssr: false,
  loading: () => <main className="fixed inset-0 bg-[#07090c]" aria-busy="true" aria-label="Loading the water" />,
});

export default function WaterLoader() {
  return <WaterApp />;
}
