"use client";

import { useTheme } from "@/contexts/ThemeContext";

/** Text sits either on the page or on the water. */
export type Tone = "page" | "water";

/** The homepage's text, link and border classes for a tone and the current scheme. */
export function useHomeClasses(tone: Tone = "page") {
  const theme = useTheme();
  if (tone === "water") {
    return {
      text: "text-white",
      link: "border-white/35 hover:border-white/60 focus-visible:outline-none focus-visible:bg-white/10",
      muted: "text-white/70",
      mutedHover: "hover:text-white transition-colors",
      border: "border-white/[15%]",
      tooltip: "bg-white text-neutral-950",
    };
  }
  return {
    text: theme.getTextColorClass(),
    link: theme.getLinkColorClass(),
    muted: theme.getMutedTextClass(),
    mutedHover: theme.getMutedHoverClass(),
    border: theme.getBorderColorClass(),
    tooltip: theme.shouldUseDarkText() ? "bg-neutral-800 text-white" : "bg-white text-neutral-950",
  };
}
