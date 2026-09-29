"use client";

import Link from "next/link";
import Image from "next/image";
import { useHomeClasses, type Tone } from "./classes";

const PROJECTS = [
  { href: "https://getversive.com", external: true, icon: "/versive-icon.png", name: "Versive", blurb: "An AI-powered user research platform" },
  { href: "/scratch", external: false, icon: "/scratch-icon.png", name: "Scratch", blurb: "An offline-first markdown notes app" },
];

export function Projects({ tone = "page", className = "" }: { tone?: Tone; className?: string }) {
  const c = useHomeClasses(tone);
  return (
    <div className={`flex flex-col items-start gap-4.5 ${c.text} ${className}`}>
      <h2 className={c.muted}>Projects</h2>
      {PROJECTS.map((p) => (
        <div key={p.name} className="flex items-center gap-2.75">
          <Link
            href={p.href}
            {...(p.external ? { target: "_blank" } : {})}
            className="hover:opacity-60 transition-opacity shrink-0 focus-visible:outline-none focus-visible:opacity-60"
          >
            <Image src={p.icon} alt={p.name} width={80} height={80} className={`h-10 w-10 rounded-[10px] border ${c.border}`} />
          </Link>
          <div className="flex flex-col items-start">
            <Link
              href={p.href}
              {...(p.external ? { target: "_blank" } : {})}
              className={`leading-snug font-[450] hover:opacity-60 transition-opacity flex items-center ${c.link}`}
            >
              {p.name}
            </Link>
            <p className={`leading-snug ${c.muted}`}>{p.blurb}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
