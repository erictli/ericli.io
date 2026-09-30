"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface ArticleLayoutProps {
  article: {
    title: string;
    date: string;
    readTime: string;
  };
  /** The picture the article opens with, set above the title. */
  hero?: { src: string; alt: string };
  children: React.ReactNode;
}

/**
 * An article: its picture first, then the title with the date and reading
 * time quiet under it, then the reading. Two sizes of text below the
 * title: body and small.
 */
export default function ArticleLayout({
  article,
  hero,
  children,
}: ArticleLayoutProps) {
  const {
    getTextColorClass,
    getMutedTextClass,
    isHydrated,
  } = useTheme();

  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen overflow-x-clip font-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <style jsx>{`
        .prose {
          --tw-prose-bullets: ${getTextColorClass() === "text-neutral-950"
            ? "rgb(68 64 60 / 0.5)"
            : "rgb(255 255 255 / 0.5)"};
          --tw-prose-counters: ${getTextColorClass() === "text-neutral-950"
            ? "rgb(68 64 60 / 0.5)"
            : "rgb(255 255 255 / 0.5)"};
        }
      `}</style>
      <div className="max-w-160 mx-auto px-6 pt-20 pb-32 sm:pb-48 animate-fadeInUpSmall1 opacity-0">
        <article>
          {hero && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.src} alt={hero.alt} className="mb-8 block w-full" />
          )}
          <header className="mb-8">
            <h1 className="text-lg leading-snug font-medium">
              {article.title}
            </h1>
            <div
              className={`mt-1 flex items-center gap-3 text-sm font-[450] tabular-nums ${getMutedTextClass()}`}
            >
              {/* Dates are calendar days; read them as UTC so they don't slip a day west of Greenwich. */}
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div
            className={`font-[450] prose max-w-none transition-colors duration-200 text-base
              prose-headings:font-medium prose-headings:transition-colors
              prose-headings:text-base prose-h2:mt-10 prose-h2:mb-3 prose-h3:mt-6 prose-h3:mb-2
              prose-p:leading-[1.7] prose-p:transition-colors prose-a:no-underline
              prose-a:border-b prose-a:border-dotted prose-a:pb-0.5 prose-a:font-[425] prose-a:transition-opacity prose-a:hover:opacity-60 prose-a:focus-visible:outline-none
              prose-strong:font-medium prose-strong:transition-colors
              prose-p:my-4
              prose-ul:my-4 prose-ol:my-4 prose-ol:pl-5 prose-ul:pl-5 prose-li:pl-0.5
              prose-li:my-2 prose-li:leading-[1.75] prose-li:transition-colors
              prose-blockquote:font-[425]  prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:my-6 prose-blockquote:transition-colors
              prose-hr:my-8 prose-hr:transition-colors prose-hr:border-dotted
              prose-video:my-8
              ${
                getTextColorClass() === "text-neutral-950"
                  ? `prose-neutral prose-headings:text-neutral-950 prose-p:text-neutral-950
                   prose-a:text-neutral-950 prose-a:border-neutral-950/20 prose-a:hover:border-neutral-950/30 prose-a:focus-visible:bg-neutral-950/10
                   prose-strong:text-neutral-950 prose-li:text-neutral-950
                   prose-blockquote:text-neutral-950/70 prose-blockquote:border-neutral-950/10
                   prose-hr:border-neutral-950/10`
                  : `prose-invert prose-headings:text-white prose-p:text-white/80
                   prose-a:text-white prose-a:border-white/20 prose-a:hover:border-white/30 prose-a:focus-visible:bg-white/20
                   prose-strong:text-white prose-li:text-white
                   prose-blockquote:text-white/70 prose-blockquote:border-white/10
                   prose-hr:border-white/10`
              }`}
          >
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}
