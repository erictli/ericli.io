import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "articles");

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  readTime: string;
  image?: string;
  /** Has its own route in app/writing/<slug>/ (a data story) rather than a page rendered from this file. */
  standalone?: boolean;
}

export interface Article extends ArticleMetadata {
  content: string; // raw markdown/MDX source
}

export function getAllArticles(): ArticleMetadata[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => {
      const slug = name.replace(/\.mdx?$/, "");
      const fullPath = path.join(articlesDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        // a data story's words are in its page, not this file, so it states its read time
        // (and its page checks the figure against its words)
        readTime: data.readTime ?? stats.text,
        image: data.image,
        standalone: Boolean(data.standalone),
      };
    });

  return allArticles.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    // Try .mdx first, then .md
    let fullPath = path.join(articlesDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(articlesDirectory, `${slug}.md`);
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime ?? stats.text,
      content, // raw markdown source for MDXRemote
      image: data.image,
    };
  } catch (error) {
    return null;
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  // Standalone articles (data stories) have their own route in app/writing/,
  // so they get no page rendered from markdown.
  return getAllArticles()
    .filter((article) => !article.standalone)
    .map((article) => article.slug);
}
