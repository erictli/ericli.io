import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Besley } from "next/font/google";
import { PHProvider, PostHogPageview } from "./providers";
import { Suspense } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NavMenu from "@/components/NavMenu";
import GlobalCloudShader from "@/components/GlobalCloudShader";

const mondwest = localFont({
  src: "../public/fonts/PPMondwest-Regular.woff2",
  variable: "--font-mondwest",
});

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley-var",
});

// const abcDiatype = localFont({
//   src: "../public/fonts/ABCDiatypeVariable.woff2",
//   variable: "--font-abc-diatype",
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://ericli.io"),
  title: "Eric Li",
  description:
    "Eric Li is a product designer and developer, and the co-founder of Versive. Previously at Uber, Bread, and Vareto. Based in Brooklyn, NY.",
  alternates: {
    canonical: "https://ericli.io",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    title: "Eric Li",
    description:
      "Eric Li is a product designer and developer, and the co-founder of Versive. Previously at Uber, Bread, and Vareto. Based in Brooklyn, NY.",
    url: "https://ericli.io",
    siteName: "Eric Li",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Li",
    description:
      "Eric Li is a product designer and developer, and the co-founder of Versive. Previously at Uber, Bread, and Vareto. Based in Brooklyn, NY.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Eric Li",
  url: "https://ericli.io",
  jobTitle: "Co-founder",
  worksFor: {
    "@type": "Organization",
    name: "Versive",
    url: "https://getversive.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Chicago",
  },
  sameAs: ["https://linkedin.com/in/erictli", "https://github.com/erictli"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mondwest.variable} ${besley.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <ThemeProvider>
          <body
            className="transition-colors duration-800"
          >
            <NavMenu />
            {children}
            <GlobalCloudShader />
          </body>
        </ThemeProvider>
      </PHProvider>
    </html>
  );
}
