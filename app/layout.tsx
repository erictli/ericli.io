import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { PHProvider, PostHogPageview } from "./providers";
import { Suspense } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

const mondwest = localFont({
  src: "../public/fonts/PPMondwest-Regular.woff2",
  variable: "--font-mondwest",
});

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
});

const abcDiatype = localFont({
  src: "../public/fonts/ABCDiatypeVariable.woff2",
  variable: "--font-abc-diatype",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ericli.io"),
  title: "Hi, I'm Eric, the co-founder of Versive.",
  description:
    "I'm a designer and developer who's worked at startups and public companies, including Uber, Bread, and Vareto. I'm originally from the Chicago suburbs and currently live in Brooklyn, NY.",
  openGraph: {
    title: "Hi, I'm Eric, the co-founder of Versive.",
    description:
      "I'm a designer and developer who's worked at startups and public companies, including Uber, Bread, and Vareto. I'm originally from the Chicago suburbs and currently live in Brooklyn, NY.",
    url: "https://ericli.io",
    siteName: "Eric Li",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Eric, the co-founder of Versive.",
    description:
      "I'm a designer and developer who's worked at startups and public companies, including Uber, Bread, and Vareto. I'm originally from the Chicago suburbs and currently live in Brooklyn, NY.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <ThemeProvider>
          <body
            className={`${inter.variable} ${mondwest.variable} ${abcDiatype.variable} transition-colors duration-800`}
          >
            {children}
          </body>
        </ThemeProvider>
      </PHProvider>
    </html>
  );
}
