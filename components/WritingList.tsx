import Link from "next/link";
import { MUTED, TEXT } from "@/lib/theme-classes";

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
  return (
    <main
      className={`min-h-screen w-full font-sans text-sm leading-[1.5] font-normal ${TEXT}`}
    >
      <div className="mx-auto flex max-w-160 flex-col gap-4 p-6 pt-20 pb-32">
        <h1 className={MUTED}>Writing</h1>
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
                  className={`shrink-0 tabular-nums ${MUTED}`}
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
