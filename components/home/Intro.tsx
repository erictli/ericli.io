"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useHomeClasses } from "./classes";

function useLinkClass() {
  const c = useHomeClasses();
  return `hover:opacity-60 transition-opacity border-b border-dotted pb-px ${c.link}`;
}

/** The bio. Who and where are in the signature above it, so it starts with what. */
export function Intro({
  className = "",
  contactClassName = "",
}: {
  className?: string;
  /** Where the page shows the contact links under the bio (on narrow layouts they sign off the page instead). */
  contactClassName?: string;
}) {
  const c = useHomeClasses();
  const link = useLinkClass();

  return (
    <div className={`flex flex-col gap-3 font-normal ${c.text} ${className}`}>
      <p>
        Eric is the co-founder of{" "}
        <Link href="https://getversive.com" target="_blank" className={link}>
          Versive
        </Link>{" "}
        and the creator of{" "}
        <Link href="/scratch" className={link}>
          Scratch
        </Link>
        . He previously worked at Uber and{" "}
        <Link
          href="https://www.prnewswire.com/news-releases/alliance-data-completes-acquisition-of-bread-301186414.html"
          target="_blank"
          className={link}
        >
          Bread
        </Link>
        , and was once an{" "}
        <Link
          href="https://www.microsoft.com/en-us/microsoft-365/excel"
          target="_blank"
          className={link}
        >
          investment banker
        </Link>
        . He finds writing in third person a bit awkward.
      </p>
      <Contact className={contactClassName} />
    </div>
  );
}

/**
 * Where to find Eric, as a quiet row of links like "See all", abbreviated
 * so it fits on one line in the narrowest corner: LinkedIn and X first. The email copies itself on a click where there's room for the
 * tooltip, and opens mail on a phone.
 */
export function Contact({ className = "" }: { className?: string }) {
  const c = useHomeClasses();
  const [emailTooltip, setEmailTooltip] = useState<
    "hidden" | "hover" | "copied" | "leaving"
  >("hidden");

  const handleEmailClick = useCallback((e: React.MouseEvent) => {
    if (!window.matchMedia("(min-width: 640px)").matches) return;
    e.preventDefault();
    navigator.clipboard.writeText("hi@ericli.io");
    setEmailTooltip("copied");
    setTimeout(() => setEmailTooltip("leaving"), 1500);
  }, []);

  const item = `${c.muted} ${c.mutedHover}`;

  return (
    <nav
      aria-label="Elsewhere"
      className={`flex flex-wrap gap-x-4 gap-y-1 font-normal ${className}`}
    >
      <Link
        href="https://linkedin.com/in/erictli"
        target="_blank"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={item}
      >
        LI
      </Link>
      <Link
        href="https://x.com/erictli"
        target="_blank"
        aria-label="X"
        title="X"
        className={item}
      >
        X
      </Link>
      <Link
        href="https://github.com/erictli"
        target="_blank"
        aria-label="GitHub"
        title="GitHub"
        className={item}
      >
        GH
      </Link>
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
          aria-label="Email hi@ericli.io"
          className={`${item} cursor-pointer`}
        >
          Email
        </a>
        {emailTooltip !== "hidden" && (
          <span
            className={`hidden sm:block absolute -top-6.5 left-1/2 -translate-x-1/2 z-50 px-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-sm ${
              emailTooltip === "leaving"
                ? "animate-tooltipFadeOut"
                : "animate-tooltipFadeIn"
            } ${c.tooltip}`}
            onAnimationEnd={() => {
              if (emailTooltip === "leaving") setEmailTooltip("hidden");
            }}
          >
            {emailTooltip === "copied"
              ? "Copied!"
              : "Click to copy hi@ericli.io"}
          </span>
        )}
      </span>
    </nav>
  );
}
