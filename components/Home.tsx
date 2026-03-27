// Adjust the styles of the articles

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  const [emailTooltip, setEmailTooltip] = useState<
    "hidden" | "hover" | "copied" | "leaving"
  >("hidden");
  const {
    getTextColorClass,
    getLinkColorClass,
    getMutedTextClass,
    getMutedHoverClass,
    getBorderColorClass,
    isHydrated,
    shouldUseDarkText,
  } = useTheme();

  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    if ("ontouchstart" in window) return;
    e.preventDefault();
    navigator.clipboard.writeText("hi@ericli.io");
    setEmailTooltip("copied");
    setTimeout(() => setEmailTooltip("leaving"), 1500);
  }, []);

  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <main
      className={`min-h-screen w-full font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="flex p-6 pt-24 pb-32 flex-col gap-12 max-w-160 mx-auto">
        <div className="flex-1 flex flex-col gap-3 font-[450] animate-fadeInUpSmall1 opacity-0">
          <h1>I&apos;m Eric Li, a designer based in Brooklyn.</h1>
          <p>
            I&apos;m the co-founder of{" "}
            <Link
              href="https://getversive.com"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              Versive
            </Link>{" "}
            and the creator of{" "}
            <Link
              href="/scratch"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              Scratch
            </Link>{" "}
            and Kibble. I enjoy building thoughtfully crafted software.
            I&apos;ve worked at Uber and{" "}
            <Link
              href="https://www.prnewswire.com/news-releases/alliance-data-completes-acquisition-of-bread-301186414.html"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              Bread
            </Link>
            , and was once an{" "}
            <Link
              href="https://www.microsoft.com/en-us/microsoft-365/excel"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              investment banker
            </Link>
            . I&apos;m a cat person.{" "}
          </p>
          <p>
            Reach me on{" "}
            <Link
              href="https://linkedin.com/in/erictli"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              LinkedIn
            </Link>
            ,{" "}
            <Link
              href="https://github.com/erictli"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              GitHub
            </Link>
            ,{" "}
            <Link
              href="https://x.com/erictli"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px ${getLinkColorClass()}`}
            >
              Twitter
            </Link>
            , or at{" "}
            <span
              className="relative inline-block"
              onMouseEnter={() =>
                emailTooltip !== "copied" && setEmailTooltip("hover")
              }
              onMouseLeave={() =>
                emailTooltip !== "copied" && setEmailTooltip("leaving")
              }
            >
              <a
                href="mailto:hi@ericli.io"
                onClick={handleEmailClick}
                className={`hover:opacity-60 transition-opacity border-b border-dotted pb-px cursor-pointer ${getLinkColorClass()}`}
              >
                hi@ericli.io
              </a>
              {emailTooltip !== "hidden" && (
                <span
                  className={`absolute -top-6.5 left-1/2 -translate-x-1/2 z-50 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-sm ${
                    emailTooltip === "leaving"
                      ? "animate-tooltipFadeOut"
                      : "animate-tooltipFadeIn"
                  } ${
                    shouldUseDarkText()
                      ? "bg-neutral-800 text-white"
                      : "bg-white text-neutral-950"
                  }`}
                  onAnimationEnd={() => {
                    if (emailTooltip === "leaving") setEmailTooltip("hidden");
                  }}
                >
                  {emailTooltip === "copied" ? "Copied!" : "Click to copy"}
                </span>
              )}
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col items-start gap-4.5 animate-fadeInUpSmall2 opacity-0">
          <h2 className={`${getMutedTextClass()}`}>Projects</h2>
          <div className="flex items-center gap-2.75">
            <Link
              href="https://getversive.com"
              target="_blank"
              className="hover:opacity-60 transition-opacity shrink-0 focus-visible:outline-none focus-visible:opacity-60"
            >
              <Image
                src="/versive-icon.png"
                alt="Versive"
                width={80}
                height={80}
                className={`h-10.5 w-10.5 rounded-[10px] border ${getBorderColorClass()}`}
              />
            </Link>
            <div className="flex flex-col items-start">
              <Link
                href="https://getversive.com"
                target="_blank"
                className={`leading-snug font-[450] hover:opacity-60 transition-opacity flex items-center ${getLinkColorClass()}`}
              >
                Versive
              </Link>
              <p className={`leading-snug ${getMutedTextClass()}`}>
                An AI-powered user research platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.75">
            <Link
              href="/scratch"
              className="hover:opacity-60 transition-opacity shrink-0 focus-visible:outline-none focus-visible:opacity-60"
            >
              <Image
                src="/scratch-icon.png"
                alt="Scratch"
                width={80}
                height={80}
                className={`h-10.5 w-10.5 rounded-[10px] border ${getBorderColorClass()}`}
              />
            </Link>
            <div className="flex flex-col items-start">
              <Link
                href="/scratch"
                className={`leading-snug font-[450] hover:opacity-60 transition-opacity flex items-center ${getLinkColorClass()}`}
              >
                Scratch
              </Link>
              <p className={`leading-snug ${getMutedTextClass()}`}>
                An offline-first markdown notes app
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.75">
            <div className="transition-opacity shrink-0">
              <Image
                src="/kibble-icon.png"
                alt="Kibble"
                width={80}
                height={80}
                className={`h-10.5 w-10.5 rounded-[10px] border ${getBorderColorClass()}`}
              />
            </div>
            <div className="flex flex-col items-start">
              <div
                className={`leading-snug flex items-center ${getMutedTextClass()}`}
              >
                Kibble (coming soon)
              </div>
              <p className={`leading-snug ${getMutedTextClass()}`}>
                A screen recording app for Mac
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4.5 animate-fadeInUpSmall3 opacity-0">
          <Link
            href="/writing"
            className={`${getMutedTextClass()} ${getMutedHoverClass()} ${getLinkColorClass()} w-fit`}
          >
            Writing
          </Link>

          {articles.map((article) => (
            <div
              key={article.slug}
              className="flex flex-col gap-0.5 items-start"
            >
              <Link
                href={`/writing/${article.slug}`}
                className={`leading-snug font-[450] hover:opacity-60 transition-opacity inline ${getLinkColorClass()}`}
              >
                {article.title}
              </Link>
              <p className={`${getMutedTextClass()} leading-snug`}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
              </p>
            </div>
          ))}
          <Link
            href="/writing"
            className={`${getMutedTextClass()} ${getMutedHoverClass()} ${getLinkColorClass()} w-fit flex items-center gap-0.5 border-b border-dotted pb-px`}
          >
            Read more
          </Link>
        </div>
      </div>
    </main>
  );
}
