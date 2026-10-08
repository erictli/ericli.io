"use client";

import { useEffect, useRef } from "react";

const DATA = "/writing/nyc-marathon/data/marathon/";

/**
 * The marathon story's root. The server renders all of the story inside it (the copy, the
 * sticky scene's frame, the steps, the chart slots); once it's on screen, this loads the client
 * module (lib/marathon/story.js, with deck.gl and d3) and mounts it on the root. Loading it with
 * import() keeps those libraries in their own chunk, fetched only on this page.
 *
 * The module's destroy() undoes everything it started and added, so the effect can run twice
 * (Strict Mode) and the page can be left and revisited client-side.
 */
export default function MarathonStory({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let story: { destroy(): void } | undefined;
    let live = true;
    import("@/lib/marathon/story")
      .then(({ mountMarathon }) => {
        if (live) story = mountMarathon(root, { data: DATA });
      })
      .catch((e) => console.error(e));
    return () => {
      live = false;
      story?.destroy();
    };
  }, []);

  return (
    <div ref={ref} className={`marathon ${className}`}>
      {children}
    </div>
  );
}
