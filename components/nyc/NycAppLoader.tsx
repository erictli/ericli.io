"use client";

import dynamic from "next/dynamic";

// The app reads localStorage and the URL on first render and owns a WebGL
// map, so it is client-only. The shell below is what the server renders.
const NycApp = dynamic(() => import("./NycApp"), {
  ssr: false,
  loading: () => (
    <main
      className="fixed inset-0 grid place-content-center bg-nyc-page font-sans"
      aria-busy="true"
      aria-label="Loading the map"
    >
      <div className="size-6 animate-spin rounded-full border-2 border-nyc-fill border-t-nyc-ink-2" />
    </main>
  ),
});

export default function NycAppLoader() {
  return <NycApp />;
}
