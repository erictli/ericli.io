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

/**
 * Most articles open with a picture. It belongs to the header, not the
 * reading, so lift it out of the body for the layout to set.
 */
function splitLead(content: string) {
  let body = content.replace(/^\s+/, "");
  let hero: { src: string; alt: string } | undefined;
  const image = body.match(/^!\[([^\]]*)\]\(([^)\s]+)\)[ \t]*(?:\n|$)/);
  if (image && !/\.(mp4|webm|mov|avi|mkv)$/i.test(image[2])) {
    hero = { alt: image[1], src: image[2] };
    body = body.slice(image[0].length).replace(/^\s+/, "");
  }
  return { hero, body };
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

  const { hero, body } = splitLead(article.content);

  return (
    <>
      {/* Wrapped so it isn't a direct child of <body>: PostHog inserts its
          scripts before the first body > script, which would land in
          React's tree and break hydration. */}
      <div hidden>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
      <ArticleLayout article={article} hero={hero}>
        <MDXRemote source={body} components={mdxComponents} />
      </ArticleLayout>
    </>
  );
}
