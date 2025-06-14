import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import Article from "@/components/Article";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found - Eric Li",
    };
  }

  return {
    title: `${article.title} - Eric Li`,
    description: article.description,
    openGraph: {
      title: `${article.title} - Eric Li`,
      description: article.description,
      url: `https://ericli.io/writing/${article.slug}`,
      siteName: "Eric Li",
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - Eric Li`,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <Article article={article} />;
}
