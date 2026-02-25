import { getAllArticles } from "@/lib/articles";
import Home from "@/components/Home";

export default function HomePage() {
  const articles = getAllArticles();

  return <Home articles={articles} />;
}
