import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/lib/mdx-components";
import ArticleLayout from "@/components/ArticleLayout";

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
    alternates: {
      canonical: `https://ericli.io/writing/${article.slug}`,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Eric Li",
      url: "https://ericli.io",
    },
    url: `https://ericli.io/writing/${article.slug}`,
    ...(article.image && { image: `https://ericli.io${article.image}` }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout article={article}>
        <MDXRemote source={article.content} components={mdxComponents} />
      </ArticleLayout>
    </>
  );
}
