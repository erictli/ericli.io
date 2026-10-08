"use client";

import { useMarathon } from "./store";

/**
 * A flythrough card's sentence, written for the finish time the reader follows
 * (lib/marathon/cohort-copy.js). The server renders the default one as children; the client
 * module publishes the others when the reader picks another time.
 */
export default function CohortCopy({ k, children }: { k: string; children: React.ReactNode }) {
  const text = useMarathon((s) => s.copy?.[k]);
  return <>{text ?? children}</>;
}
