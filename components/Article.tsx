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
    return (
      <main className="min-h-screen font-abc-diatype text-stone-950">
        <div className="max-w-2xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
        <BottomNav />
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen font-abc-diatype transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="max-w-2xl mx-auto px-6 py-16">
        <article>
          <Link
            href="/"
            className="text-sm mb-4 hover:opacity-60 transition-opacity"
          >
            Back to home
          </Link>
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
                  ? `prose-gray prose-headings:text-gray-900 prose-p:text-gray-800 
                   prose-a:text-gray-900 hover:prose-a:text-gray-600 
                   prose-strong:text-gray-900 prose-li:text-gray-800 
                   prose-hr:border-gray-200`
                  : `prose-invert prose-headings:text-white prose-p:text-gray-200 
                   prose-a:text-white hover:prose-a:text-gray-300 
                   prose-strong:text-white prose-li:text-gray-200 
                   prose-hr:border-gray-700`
              }`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
      <BottomNav />
    </main>
  );
}
