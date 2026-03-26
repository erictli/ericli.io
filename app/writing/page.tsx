import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import WritingList from "@/components/WritingList";

export const metadata: Metadata = {
  title: "Writing – Eric Li",
  description:
    "Articles on product design, development, AI, and building software by Eric Li.",
  alternates: {
    canonical: "https://ericli.io/writing",
  },
  openGraph: {
    title: "Writing – Eric Li",
    description:
      "Articles on product design, development, AI, and building software by Eric Li.",
    url: "https://ericli.io/writing",
    siteName: "Eric Li",
    type: "website",
  },
};

export default function WritingPage() {
  const articles = getAllArticles();

  return <WritingList articles={articles} />;
}
