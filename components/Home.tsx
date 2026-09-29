"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { HOME_LAYOUTS } from "./home/layouts";
import type { HomeLayout } from "./home/names";
import type { Article } from "./home/Writing";

export default function Home({ articles, layout = "window" }: { articles: Article[]; layout?: HomeLayout }) {
  const { isHydrated } = useTheme();
  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }
  const Layout = HOME_LAYOUTS[layout];
  return <Layout articles={articles} />;
}
