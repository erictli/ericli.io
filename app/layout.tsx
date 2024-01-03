import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { PHProvider, PostHogPageview } from "./providers";
import { Suspense } from "react";

const mondwest = localFont({
  src: "../public/fonts/PPMondwest-Regular.woff2",
  variable: "--font-mondwest",
});

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ericli.io"),
  title: "Hi, I'm Eric",
  description:
    "I'm a Brooklyn-based designer, developer, and product manager. I'm the co-founder of Versive, an AI-first survey platform.",
  openGraph: {
    images: "/opengraph-image.png",
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
        <body className={`${inter.variable} ${mondwest.variable}`}>
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
