import { getAllArticles } from "@/lib/articles";

export async function GET() {
  const articles = getAllArticles();
  const siteUrl = "https://ericli.io";

  const feedItems = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/writing/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/writing/${article.slug}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Eric Li</title>
    <link>${siteUrl}</link>
    <description>Writing by Eric Li — product designer and developer, co-founder of Versive.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />${feedItems}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
