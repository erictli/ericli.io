import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const articlesDirectory = path.join(process.cwd(), "articles");

export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  slug: string;
  readTime: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

export function getAllArticles(): ArticleMetadata[] {
  // Ensure articles directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => {
      const slug = name.replace(/\.md$/, "");
      const fullPath = path.join(articlesDirectory, name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Calculate reading time
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        readTime: stats.text,
      };
    });

  // Sort articles by date, most recent first
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
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: stats.text,
      content: contentHtml,
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
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
