import { getAllArticles } from "@/lib/articles";
import Home from "@/components/Home";
import { isHomeLayout, isKnockoutFont } from "@/components/home/names";

// While the layout is being chosen, /?layout=<name> (see components/home/names.ts)
// picks one; the default is what the site shows.
export default async function HomePage({ searchParams }: { searchParams: Promise<{ layout?: string; font?: string }> }) {
  const articles = getAllArticles().slice(0, 5);
  const { layout, font } = await searchParams;

  return (
    <Home
      articles={articles}
      layout={isHomeLayout(layout) ? layout : undefined}
      font={isKnockoutFont(font) ? font : undefined}
    />
  );
}
