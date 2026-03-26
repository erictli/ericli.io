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
        readTime: stats.text,
        image: data.image,
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
      readTime: stats.text,
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

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx?$/, ""));
}
