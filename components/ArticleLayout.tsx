"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Link from "next/link";

interface ArticleLayoutProps {
  article: {
    title: string;
    date: string;
    readTime: string;
  };
  children: React.ReactNode;
}

export default function ArticleLayout({
  article,
  children,
}: ArticleLayoutProps) {
  const { getTextColorClass, getOpacityClass, getLinkColorClass, isHydrated } =
    useTheme();

  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
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
      <div className="max-w-160 mx-auto px-6 pt-24 pb-32 sm:pb-48 animate-fadeInUpSmall1 opacity-0">
        <article>
          <header className="mb-8">
            <div
              className={`flex items-center gap-1.5 text-sm font-[450] mb-2 ${getOpacityClass()}`}
            >
              <time>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-3xl font-medium tracking-[-0.005em]">
              {article.title}
            </h1>
          </header>

          <div
            className={`font-[450] prose max-w-none transition-colors duration-200 text-base
              prose-headings:font-medium prose-headings:transition-colors
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:leading-[1.7] prose-p:transition-colors prose-a:no-underline
              prose-a:border-b prose-a:border-dotted prose-a:pb-0.5 prose-a:font-[425] prose-a:transition-opacity prose-a:hover:opacity-60 prose-a:focus-visible:outline-none
              prose-strong:font-medium prose-strong:transition-colors
              prose-p:my-4
              prose-ul:my-4 prose-ol:my-4 prose-ol:pl-5 prose-ul:pl-5 prose-li:pl-0.5
              prose-li:my-2 prose-li:leading-[1.75] prose-li:transition-colors
              prose-blockquote:font-[425]  prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:my-6 prose-blockquote:transition-colors
              prose-hr:my-8 prose-hr:transition-colors prose-hr:border-dotted
              prose-img:rounded-md
              prose-video:my-8 prose-video:rounded-md
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
          <Link
            href="/writing"
            className={`${getOpacityClass()} ${getLinkColorClass()} mt-8 hover:opacity-100 transition-opacity w-fit flex items-center gap-0.5 border-b border-dotted pb-px font-[450]`}
          >
            Back to index
          </Link>
        </article>
      </div>
    </main>
  );
}
