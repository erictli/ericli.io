"use client";

import { useTheme } from "@/contexts/ThemeContext";

/** The homepage's text, link and border classes for the current scheme. */
export function useHomeClasses() {
  const theme = useTheme();
  return {
    text: theme.getTextColorClass(),
    link: theme.getLinkColorClass(),
    muted: theme.getMutedTextClass(),
    mutedHover: theme.getMutedHoverClass(),
    border: theme.getBorderColorClass(),
    tooltip: theme.shouldUseDarkText() ? "bg-neutral-800 text-white" : "bg-white text-neutral-950",
  };
}
