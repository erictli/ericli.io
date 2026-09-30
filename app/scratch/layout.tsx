import type { Metadata } from "next";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scratch",
  description:
    "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
  operatingSystem: "macOS, Windows, Linux",
  applicationCategory: "ProductivityApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://ericli.io/scratch",
  author: {
    "@type": "Person",
    name: "Eric Li",
    url: "https://ericli.io",
  },
};

export const metadata: Metadata = {
  title: "Scratch – A minimalist markdown scratchpad",
  description:
    "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
  openGraph: {
    title: "Scratch – A minimalist markdown scratchpad",
    description:
      "An offline-first, open source markdown note-taking app. No cloud, no account, no subscriptions.",
    images: "/images/scratch/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scratch – A minimalist markdown scratchpad",
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
      {children}
    </>
  );
}
