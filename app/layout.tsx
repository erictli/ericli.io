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
  title: "Eric Li - Designer, Developer, Co-founder of Versive",
  description:
    "Personal website of Eric Li, designer and developer who's worked at startups and public companies, co-founder of Versive.",
  openGraph: {
    title: "Eric Li - Designer, Developer, Co-founder of Versive",
    description:
      "Personal website of Eric Li, designer and developer who's worked at startups and public companies, co-founder of Versive.",
    url: "https://ericli.io",
    siteName: "Eric Li",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Li - Designer, Developer, Co-founder of Versive",
    description:
      "Personal website of Eric Li, designer and developer who's worked at startups and public companies, co-founder of Versive.",
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
