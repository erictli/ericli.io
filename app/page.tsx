import { getAllArticles } from "@/lib/articles";
import Home from "@/components/Home";
import { isHomeLayout } from "@/components/home/names";

// While the layout is being chosen, /?layout=split|triptych|overlay|horizon|window
// picks one; the default is what the site shows.
export default async function HomePage({ searchParams }: { searchParams: Promise<{ layout?: string }> }) {
  const articles = getAllArticles().slice(0, 5);
  const { layout } = await searchParams;

  return <Home articles={articles} layout={isHomeLayout(layout) ? layout : undefined} />;
}
