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
  const { getTextColorClass, getOpacityClass, isHydrated } = useTheme();

  // Show loading state until hydrated
  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen font-abc-diatype transition-colors duration-200 ${getTextColorClass()}`}
    >
      <Link
        href="/"
        className="fixed top-6 left-6 text-sm mb-4 hover:opacity-60 transition-opacity animate-fadeInBack opacity-0"
      >
        Back to home
      </Link>
      <div className="max-w-2xl mx-auto px-6 py-16 animate-fadeInHome1 opacity-0">
        <article>
          <header className="mb-8">
            <div
              className={`flex items-center gap-4 text-sm mb-4 ${getOpacityClass()}`}
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
            <h1 className="text-3xl font-medium mb-4">{article.title}</h1>
            <p className={`text-lg ${getOpacityClass()}`}>
              {article.description}
            </p>
          </header>

          <div
            className={`prose prose-lg max-w-none transition-colors duration-200
              prose-headings:font-medium prose-headings:transition-colors
              prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:leading-relaxed prose-p:transition-colors
              prose-a:underline prose-a:transition-colors hover:prose-a:opacity-60
              prose-strong:font-medium prose-strong:transition-colors
              prose-ul:my-6 prose-ol:my-6
              prose-li:my-1 prose-li:transition-colors
              prose-hr:my-8 prose-hr:transition-colors
              ${
                getTextColorClass() === "text-stone-950"
                  ? `prose-stone prose-headings:text-stone-950 prose-p:text-stone-950/80 
                   prose-a:text-stone-950/80 hover:prose-a:text-stone-950/60 
                   prose-strong:text-stone-950 prose-li:text-stone-950/80 
                   prose-hr:border-stone-950/10`
                  : `prose-invert prose-headings:text-white prose-p:text-white/60 
                   prose-a:text-white hover:prose-a:text-white/30 
                   prose-strong:text-white prose-li:text-white/60 
                   prose-hr:border-white/10`
              }`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
      <BottomNav />
    </main>
  );
}
