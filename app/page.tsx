import { getAllArticles } from "@/lib/articles";
import Home from "@/components/Home";

export default function HomePage() {
  const articles = getAllArticles().slice(0, 4);

  return <Home articles={articles} />;
}
