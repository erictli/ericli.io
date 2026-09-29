"use client";

import Link from "next/link";
import { useHomeClasses, type Tone } from "./classes";

export type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

export function Writing({ articles, tone = "page", className = "" }: { articles: Article[]; tone?: Tone; className?: string }) {
  const c = useHomeClasses(tone);
  return (
    <div className={`flex flex-col items-start gap-4.5 ${c.text} ${className}`}>
      <Link href="/writing" className={`${c.muted} ${c.mutedHover} ${c.link} w-fit`}>
        Writing
      </Link>
      {articles.map((article) => (
        <div key={article.slug} className="flex flex-col gap-0.5 items-start">
          <Link
            href={`/writing/${article.slug}`}
            className={`leading-snug font-[450] hover:opacity-60 transition-opacity inline ${c.link}`}
          >
            {article.title}
          </Link>
          <p className={`${c.muted} leading-snug`}>
            {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}{" "}
          </p>
        </div>
      ))}
      <Link
        href="/writing"
        className={`${c.muted} ${c.mutedHover} ${c.link} w-fit flex items-center gap-0.5 border-b border-dotted pb-px`}
      >
        Read more
      </Link>
    </div>
  );
}
