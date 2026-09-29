"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useHomeClasses } from "./classes";

export function Intro({ className = "" }: { className?: string }) {
  const c = useHomeClasses();
  const [emailTooltip, setEmailTooltip] = useState<"hidden" | "hover" | "copied" | "leaving">("hidden");

  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    if (!window.matchMedia("(min-width: 640px)").matches) return;
    e.preventDefault();
    navigator.clipboard.writeText("hi@ericli.io");
    setEmailTooltip("copied");
    setTimeout(() => setEmailTooltip("leaving"), 1500);
  }, []);

  const link = `hover:opacity-60 transition-opacity border-b border-dotted pb-px ${c.link}`;

  return (
    <div className={`flex flex-col gap-3 font-[450] ${c.text} ${className}`}>
      <h1>I&apos;m Eric Li, a designer and builder based in Brooklyn.</h1>
      <p>
        I&apos;m the co-founder of{" "}
        <Link href="https://getversive.com" target="_blank" className={link}>
          Versive
        </Link>{" "}
        and the creator of{" "}
        <Link href="/scratch" className={link}>
          Scratch
        </Link>
        . I enjoy building thoughtfully crafted software. I&apos;ve worked at Uber and{" "}
        <Link
          href="https://www.prnewswire.com/news-releases/alliance-data-completes-acquisition-of-bread-301186414.html"
          target="_blank"
          className={link}
        >
          Bread
        </Link>
        , and was once an{" "}
        <Link href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" className={link}>
          investment banker
        </Link>
        . I&apos;m a cat person.{" "}
      </p>
      <p>
        Find me on{" "}
        <Link href="https://linkedin.com/in/erictli" target="_blank" className={link}>
          LI
        </Link>
        ,{" "}
        <Link href="https://github.com/erictli" target="_blank" className={link}>
          GH
        </Link>
        ,{" "}
        <Link href="https://x.com/erictli" target="_blank" className={link}>
          X
        </Link>
        , or at{" "}
        <span
          className="relative inline-block"
          onMouseEnter={() => emailTooltip !== "copied" && setEmailTooltip("hover")}
          onMouseLeave={() => emailTooltip !== "copied" && setEmailTooltip("leaving")}
        >
          <a href="mailto:hi@ericli.io" onClick={handleEmailClick} className={`${link} cursor-pointer`}>
            hi@ericli.io
          </a>
          {emailTooltip !== "hidden" && (
            <span
              className={`hidden sm:block absolute -top-6.5 left-1/2 -translate-x-1/2 z-50 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-sm ${
                emailTooltip === "leaving" ? "animate-tooltipFadeOut" : "animate-tooltipFadeIn"
              } ${c.tooltip}`}
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
  );
}
