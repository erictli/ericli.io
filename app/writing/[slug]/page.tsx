import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import Article from "@/components/Article";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title}`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://ericli.io/writing/${article.slug}`,
      siteName: "Eric Li",
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      ...(article.image && { images: [article.image] }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      ...(article.image && { images: [article.image] }),
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <Article article={article} />;
}
