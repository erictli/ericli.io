"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/contexts/ThemeContext";
import { Intro } from "./home/Intro";
import { Projects } from "./home/Projects";
import { Writing, type Article } from "./home/Writing";

// A window onto the harbor, centered like a print: the intro above it, the
// projects and writing in a row beneath, all in one column.

const HomeWater = dynamic(() => import("@/components/water/HomeWater"), { ssr: false });

export default function Home({ articles }: { articles: Article[] }) {
  const { isHydrated } = useTheme();
  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <main className="min-h-screen w-full font-system-sans text-[15px]">
      <div className="flex flex-col items-center p-6 pt-16 pb-12">
        <div className="flex w-full max-w-3xl flex-col gap-10">
          <Intro className="max-w-md animate-fadeInUpSmall1 opacity-0" />
          <HomeWater className="aspect-square w-full sm:aspect-[2/1]" />
          <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-12">
            <Projects className="animate-fadeInUpSmall2 opacity-0 sm:w-1/2" />
            <Writing articles={articles} className="animate-fadeInUpSmall3 opacity-0 sm:w-1/2" />
          </div>
        </div>
      </div>
    </main>
  );
}
