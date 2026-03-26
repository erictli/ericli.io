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

export default function WritingList({ articles }: WritingListProps) {
  const { getTextColorClass, getLinkColorClass, getOpacityClass, isHydrated } =
    useTheme();

  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <main
      className={`min-h-screen w-full font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="flex p-6 pt-24 pb-32 flex-col items-start gap-6 max-w-160 mx-auto opacity-0 animate-fadeInUpSmall1">
        <h1 className={`${getOpacityClass()}`}>Writing</h1>

        {articles.map((article) => (
          <div key={article.slug} className="flex flex-col gap-0.5 items-start">
            <Link
              href={`/writing/${article.slug}`}
              className={`leading-snug font-[450] hover:opacity-60 transition-opacity inline ${getLinkColorClass()}`}
            >
              {article.title}
            </Link>
            <p className={`${getOpacityClass()} flex items-center gap-1.5`}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              <span>•</span>
              <span>{article.readTime}</span>
            </p>
          </div>
        ))}
        <Link
          href="/"
          className={`${getOpacityClass()} ${getLinkColorClass()} hover:opacity-100 transition-opacity w-fit flex items-center gap-0.5 border-b border-dotted pb-px`}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
