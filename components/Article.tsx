"use client";

import { useTheme } from "@/contexts/ThemeContext";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
}

interface ArticleProps {
  article: Article;
}

export default function Article({ article }: ArticleProps) {
  const { getTextColorClass, isHydrated } = useTheme();

  // Show loading state until hydrated
  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <style jsx>{`
        .prose {
          --tw-prose-bullets: ${getTextColorClass() === "text-stone-950"
            ? "rgb(68 64 60 / 0.5)"
            : "rgb(255 255 255 / 0.5)"};
          --tw-prose-counters: ${getTextColorClass() === "text-stone-950"
            ? "rgb(68 64 60 / 0.5)"
            : "rgb(255 255 255 / 0.5)"};
        }
      `}</style>
      <Link
        href="/"
        className={`fixed top-3 sm:top-4 left-2 sm:left-3 text-sm mb-4 animate-fadeInBack opacity-0 z-10 px-3 py-2 bg-white/0 backdrop-blur-md rounded-full ${
          getTextColorClass() === "text-stone-950"
            ? "text-stone-950/60 hover:bg-stone-950/5"
            : "text-white/60 hover:bg-white/5"
        } transition-colors`}
      >
        Back to home
      </Link>
      <div className="max-w-[45rem] mx-auto px-5 pt-24 sm:pt-32 pb-32 sm:pb-48 animate-fadeInHome1 opacity-0">
        <article>
          <header className="mb-8">
            <div
              className={`flex items-center gap-2 text-sm sm:text-base mb-3 opacity-60`}
            >
              <time>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="opacity-50">•</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-medium mb-4">
              {article.title}
            </h1>
          </header>

          <div
            className={`prose prose-base sm:prose-lg max-w-none transition-colors duration-200
              prose-headings:font-medium prose-headings:transition-colors
              prose-h2:text-2xl prose-h2:mt-10 sm:prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-[1.75] prose-p:transition-colors prose-a:no-underline
              prose-a:border-b prose-a:border-dashed prose-a:pb-0.5 prose-a:text-stone-950/80 prose-a:font-normal prose-a:transition-opacity hover:prose-a:opacity-60
              prose-strong:font-medium prose-strong:transition-colors
              prose-ul:my-4 prose-ol:my-4 prose-ol:pl-5 prose-ul:pl-5 prose-li:pl-0.5
              prose-li:my-2 prose-li:leading-[1.75] prose-li:transition-colors
              prose-blockquote:font-normal  prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:my-6 prose-blockquote:transition-colors
              prose-hr:my-8 prose-hr:transition-colors
              prose-img:rounded-md
              prose-video:my-8 prose-video:rounded-md
              ${
                getTextColorClass() === "text-stone-950"
                  ? `prose-stone prose-headings:text-stone-950 prose-p:text-stone-950/80 
                   prose-a:text-stone-950/80 hover:prose-a:opacity-60 
                   prose-strong:text-stone-950 prose-li:text-stone-950/80
                   prose-blockquote:text-stone-950/70 prose-blockquote:border-stone-950/10
                   prose-hr:border-stone-950/10 prose-a:border-stone-950/20`
                  : `prose-invert prose-headings:text-white prose-p:text-white/80 
                   prose-a:text-white/80 hover:prose-a:opacity-60 
                   prose-strong:text-white prose-li:text-white/80
                   prose-blockquote:text-white/70 prose-blockquote:border-white/10
                   prose-hr:border-white/10 prose-a:border-white/20`
              }`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
      <BottomNav />
    </main>
  );
}
