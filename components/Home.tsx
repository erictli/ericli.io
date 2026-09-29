"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { Intro } from "./home/Intro";
import { useHomeClasses } from "./home/classes";
import { HarborFrame, WaterCaption, useLiveHarbor } from "./home/harbor";

// The homepage as a poster: a tall plate of the harbor off Pier 1, as it is
// right now, in the middle of the page, and the words pinned to its four
// corners: who, what I make, about, and what I write. On a phone it becomes
// one column in that reading order.

export type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

const PROJECTS = [
  { href: "https://getversive.com", external: true, name: "Versive", blurb: "AI user research" },
  { href: "/scratch", external: false, name: "Scratch", blurb: "Markdown notes" },
  { href: "https://juno.ericli.io", external: true, name: "Juno", blurb: "Naval roguelike" },
  { href: "/nyc", external: false, name: "NYC", blurb: "Neighborhood map" },
];

const IN = ["animate-fadeInUpSmall1 opacity-0", "animate-fadeInUpSmall2 opacity-0", "animate-fadeInUpSmall3 opacity-0"];
/** Right-aligned in the right-hand corners, left-aligned once stacked. */
const RIGHT_CORNER = "lg:items-end lg:text-right max-lg:items-start max-lg:text-left";

export default function Home({ articles }: { articles: Article[] }) {
  const { isHydrated } = useTheme();
  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }
  return <Poster articles={articles} />;
}

function Poster({ articles }: { articles: Article[] }) {
  const { conditions, liveStatus, facts } = useLiveHarbor();
  const c = useHomeClasses();
  return (
    <main className={`min-h-dvh w-full font-sans text-[14px] leading-[1.5] font-[450] ${c.text}`}>
      {/* Source order is the reading order (and the phone layout); the grid places the corners. */}
      <div className="grid gap-10 p-6 pb-12 lg:h-dvh lg:min-h-[640px] lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-x-12 lg:gap-y-6 lg:pb-6">
        <div className={`lg:col-start-1 lg:row-start-1 ${IN[0]}`}>
          <h1 className="font-medium">Eric Li</h1>
          <p className={c.muted}>
            Designer and builder
            <br />
            Brooklyn, New York
          </p>
        </div>
        <HarborFrame
          conditions={conditions}
          facts={facts}
          className="aspect-[4/5] w-full lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:aspect-auto lg:h-full"
          maxAspect={1.5}
        >
          <WaterCaption facts={facts} liveStatus={liveStatus} />
        </HarborFrame>
        <Intro className={`max-w-xs lg:col-start-1 lg:row-start-3 lg:self-end ${IN[1]}`} />
        <Section label="Projects" className={`${RIGHT_CORNER} lg:col-start-3 lg:row-start-1 lg:justify-self-end ${IN[0]}`}>
          {PROJECTS.map((p) => (
            <Link key={p.name} href={p.href} {...(p.external ? { target: "_blank" } : {})} className="hover:opacity-60 transition-opacity">
              {p.name} <span className={c.muted}>{p.blurb}</span>
            </Link>
          ))}
        </Section>
        <Section
          label="Writing"
          href="/writing"
          className={`${RIGHT_CORNER} lg:col-start-3 lg:row-start-3 lg:self-end lg:justify-self-end ${IN[2]}`}
        >
          {articles.slice(0, 3).map((a) => (
            <Link key={a.slug} href={`/writing/${a.slug}`} className="max-w-72 hover:opacity-60 transition-opacity">
              {a.title}
            </Link>
          ))}
          <Link href="/writing" className={`${c.muted} ${c.mutedHover}`}>
            All writing
          </Link>
        </Section>
      </div>
    </main>
  );
}

/** A small list under a muted label. */
function Section({ label, href, className = "", children }: { label: string; href?: string; className?: string; children: React.ReactNode }) {
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
