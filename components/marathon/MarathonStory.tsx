"use client";

import { useEffect, useRef, useState } from "react";
import { MarathonContext, createMarathonStore } from "./store";

const DATA = "/writing/nyc-marathon/data/marathon/";

/**
 * The marathon story's root. The server renders all of the story inside it: the copy, the
 * sticky scene with its caption card, the steps and the figures. Once it's on screen, this
 * loads the client module (lib/marathon/story.js, with deck.gl and d3) and mounts it on the
 * root; loading it with import() keeps those libraries in their own chunk, fetched only on
 * this page.
 *
 * The module and the React UI share one store (./store.ts): the module writes what the scene
 * is doing, the UI renders it and writes the reader's choices back. The module's destroy()
 * undoes everything it started and added, so the effect can run twice (Strict Mode) and the
 * page can be left and revisited client-side.
 */
export default function MarathonStory({
  cohort,
  cohortLabels,
  firstStep,
  children,
}: {
  /** the finish time followed at first, as an index into cohortLabels */
  cohort: number;
  cohortLabels: string[];
  firstStep: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [store] = useState(() => createMarathonStore({ cohort, cohortLabels, step: firstStep }));

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let story: { destroy(): void } | undefined;
    let live = true;
    import("@/lib/marathon/story")
      .then(({ mountMarathon }) => {
        if (live) story = mountMarathon(root, { data: DATA, store });
      })
      .catch((e) => {
        console.error(e);
        store.set({ failed: true });
      });
    return () => {
      live = false;
      story?.destroy();
      store.reset();
    };
  }, [store]);

  return (
    <MarathonContext.Provider value={store}>
      {/* group/story: still frames (?still=) restyle the scene through data-still */}
      <div ref={ref} className="marathon group/story">
        {children}
      </div>
    </MarathonContext.Provider>
  );
}
