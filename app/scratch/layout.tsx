import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scratch – A minimalist markdown scratchpad for Mac",
  description:
    "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
  openGraph: {
    title: "Scratch – A minimalist markdown scratchpad for Mac",
    description:
      "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
    images: "/images/scratch/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scratch – A minimalist markdown scratchpad for Mac",
    description:
      "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
    images: "/images/scratch/og-image.png",
  },
};

export default function ScratchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
