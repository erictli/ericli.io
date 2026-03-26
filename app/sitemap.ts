import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://ericli.io/writing/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://ericli.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ericli.io/writing",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://ericli.io/scratch",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...articleEntries,
  ];
}
