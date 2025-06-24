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
  image?: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}

// Function to add target="_blank" to external links
function processExternalLinks(htmlContent: string): string {
  // Regex to find external links (http/https) and add target="_blank" rel="noopener noreferrer"
  return htmlContent.replace(
    /<a\s+href="(https?:\/\/[^"]+)"([^>]*)>/gi,
    '<a href="$1" target="_blank" rel="noopener noreferrer"$2>',
  );
}

// Function to convert img tags with video extensions to video tags
function processVideoFiles(htmlContent: string): string {
  // Regex to find img tags with video file extensions (mp4, webm, mov, etc.)
  return htmlContent.replace(
    /<img\s+src="([^"]+\.(mp4|webm|mov|avi|mkv))"([^>]*)>/gi,
    '<video controls class="rounded-lg" preload="metadata"><source src="$1" type="video/$2">Your browser does not support the video tag.</video>',
  );
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
        image: data.image,
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
    let contentHtml = processedContent.toString();

    // Process external links to open in new tab
    contentHtml = processExternalLinks(contentHtml);

    // Process video files to convert img tags to video tags
    contentHtml = processVideoFiles(contentHtml);

    // Calculate reading time
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: stats.text,
      content: contentHtml,
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
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
