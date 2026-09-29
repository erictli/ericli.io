"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Contact, Intro } from "./home/Intro";
import { useHomeClasses } from "./home/classes";
import { HarborFrame, WaterCaption, useLiveHarbor } from "./home/harbor";

// The homepage as a min-[72rem]: a tall plate of the harbor off Pier 1, as it is
// right now, in the middle of the page, and the words pinned to its four
// corners: who, what I make, about, and what I write. Narrower, the words
// stack in one column beside the water (the name at the top, the rest at
// the bottom); on a phone it all becomes one column, in reading order.

export type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

type Project = {
  href: string;
  external: boolean;
  name: string;
  /** A line or two, shown on hover. */
  detail: string;
};

const PROJECTS: Project[] = [
  {
    href: "https://getversive.com",
    external: true,
    name: "Versive",
    detail:
      "An AI-first user research platform. Run surveys, usability tests, and AI-moderated interviews.",
  },
  {
    href: "/scratch",
    external: false,
    name: "Scratch",
    detail:
      "An offline-first markdown notes app for Mac, Windows and Linux. Open source and free to use.",
  },
  {
    href: "https://juno.ericli.io",
    external: true,
    name: "Juno",
    detail: "A browser-based naval warfare game. Like Hades meets Battleship.",
  },
];

// Every word arrives at once, quickly; the water develops in after it.
const IN = "animate-fadeInUpSmall0 opacity-0";
/**
 * Three columns from 72rem (1152px), where the side columns get about 250px;
 * narrower, the words stack beside the water, then under it on a phone.
 * Right-aligned in the right-hand corners, left-aligned once stacked.
 */
const RIGHT_CORNER =
  "min-[72rem]:items-end min-[72rem]:text-right max-[72rem]:items-start max-[72rem]:text-left";

export default function Home({ articles }: { articles: Article[] }) {
  const { isHydrated } = useTheme();
  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }
  return <Poster articles={articles} />;
}

function Poster({ articles }: { articles: Article[] }) {
  const { conditions, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    // No scroll anchoring here: the words rise 12px as they fade in, and on a
    // reload the browser would chase that rise, landing 12px lower each time.
    <main
      className={`min-h-dvh w-full font-sans text-sm leading-[1.5] font-[450] [overflow-anchor:none] ${c.text}`}
    >
      {/* Source order is the reading order (and the phone layout); the grid places the corners. */}
      <div className="grid gap-12 p-6 pb-12 md:min-h-dvh md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:grid-rows-[auto_minmax(0,1fr)_auto_auto_auto_auto] md:gap-x-12 md:gap-y-10 md:pb-6 min-[72rem]:h-dvh min-[72rem]:min-h-[640px] min-[72rem]:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] min-[72rem]:grid-rows-[auto_minmax(0,1fr)_auto] min-[72rem]:gap-y-6">
        {/* Below the menu button in the corner, which only phones get here. */}
        <div className={`pt-7 md:col-start-1 md:row-start-1 md:pt-0 ${IN}`}>
          <h1 className="font-medium">
            Eric Li is a designer and builder
            <br />
            based in Brooklyn
          </h1>
        </div>
        <HarborFrame
          conditions={conditions}
          facts={facts}
          // One column: 4:5, but never taller than most of the screen, nor
          // wider than the 1.5:1 the water is cut for. Beside the words, as
          // tall as the page.
          className="aspect-[4/5] max-h-[70dvh] min-h-[calc((100vw-3rem)/1.5)] w-full md:col-start-2 md:row-span-6 md:row-start-1 md:aspect-auto md:h-full md:max-h-none md:min-h-0 min-[72rem]:row-span-3"
          maxAspect={1.5}
          // The words take 0.4s; the water waits for them, then develops in.
          revealAfter={400}
        >
          <WaterCaption facts={facts} />
        </HarborFrame>
        {/* Wide, the contact links sit under the bio in its corner; narrower, they sign off the page. */}
        <Intro
          className={`max-w-90 md:col-start-1 md:row-start-3 min-[72rem]:self-end ${IN}`}
          contactClassName="max-[72rem]:hidden"
        />
        <Section
          label="Projects"
          className={`relative ${RIGHT_CORNER} md:col-start-1 md:row-start-4 min-[72rem]:col-start-3 min-[72rem]:row-start-1 min-[72rem]:justify-self-end ${IN}`}
        >
          <ProjectList />
        </Section>
        <Section
          label="Writing"
          href="/writing"
          className={`${RIGHT_CORNER} md:col-start-1 md:row-start-5 min-[72rem]:col-start-3 min-[72rem]:row-start-3 min-[72rem]:self-end min-[72rem]:justify-self-end ${IN}`}
        >
          {articles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              href={`/writing/${a.slug}`}
              className="max-w-72 hover:opacity-60 transition-opacity"
            >
              {a.title}
            </Link>
          ))}
          <Link href="/writing" className={`mt-2 ${c.muted} ${c.mutedHover}`}>
            See all
          </Link>
        </Section>
        <Contact
          className={`md:col-start-1 md:row-start-6 min-[72rem]:hidden ${IN}`}
        />
      </div>
    </main>
  );
}

/**
 * Just the names. Where there's a mouse and room, pointing at one quiets the
 * others and brings up a line about it in the open space below the list, so
 * nothing moves.
 */
function ProjectList() {
  const c = useHomeClasses();
  const [active, setActive] = useState<number | null>(null);
  // The last one pointed at, so the card fades out with its words still in it.
  const [shown, setShown] = useState(0);
  const point = (i: number) => {
    setActive(i);
    setShown(i);
  };
  const project = PROJECTS[shown];
  return (
    <>
      {PROJECTS.map((p, i) => (
        <Link
          key={p.name}
          href={p.href}
          {...(p.external ? { target: "_blank" } : {})}
          onMouseEnter={() => point(i)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => point(i)}
          onBlur={() => setActive(null)}
          className={`transition-opacity duration-200 max-[72rem]:hover:opacity-60 ${
            active !== null && active !== i ? "min-[72rem]:pointer-fine:opacity-35" : ""
          }`}
        >
          {p.name}
          <span className="sr-only">: {p.detail}</span>
        </Link>
      ))}
      <div
        aria-hidden
        className={`pointer-events-none absolute top-full right-0 mt-3 hidden w-60 text-right transition-[opacity,translate] duration-200 min-[72rem]:pointer-fine:block ${
          active !== null
            ? "translate-y-0 opacity-100"
            : "-translate-y-1 opacity-0"
        }`}
      >
        <p className={c.muted}>{project.detail}</p>
      </div>
    </>
  );
}

/** A small list under a muted label. */
function Section({
  label,
  href,
  className = "",
  children,
}: {
  label: string;
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const c = useHomeClasses();
  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      {href ? (
        <Link href={href} className={`${c.muted} ${c.mutedHover} mb-2`}>
          {label}
        </Link>
      ) : (
        <p className={`${c.muted} mb-2`}>{label}</p>
      )}
      {children}
    </div>
  );
}
