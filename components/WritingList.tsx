"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
};

interface WritingListProps {
  articles: Article[];
}

/**
 * "Jul 21" for this year, just the year before that. Dates are calendar
 * days, so they're read as UTC and don't slip a day west of Greenwich.
 */
function shortDate(date: string) {
  const d = new Date(date);
  if (d.getUTCFullYear() !== new Date().getFullYear()) return String(d.getUTCFullYear());
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

/** An index, set like the homepage: one size, titles on the left, dates quiet on the right. */
export default function WritingList({ articles }: WritingListProps) {
  const { getTextColorClass, getMutedTextClass, isHydrated } = useTheme();

  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <main
      className={`min-h-screen w-full font-sans text-sm leading-[1.5] font-[450] transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="mx-auto flex max-w-160 flex-col gap-4 p-6 pt-20 pb-32 opacity-0 animate-fadeInUpSmall1">
        <h1 className={getMutedTextClass()}>Writing</h1>
        <ul className="flex flex-col gap-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/writing/${article.slug}`}
                className="flex items-baseline justify-between gap-6 transition-opacity hover:opacity-60"
              >
                <span>{article.title}</span>
                <time
                  dateTime={article.date}
                  className={`shrink-0 tabular-nums ${getMutedTextClass()}`}
                >
                  {shortDate(article.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
