"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Helper function to determine if a color is light or dark
function isLightColor(hex: string): boolean {
  const rgb = parseInt(hex.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
}

export type ThemeMode = "light" | "dark" | "custom";

export interface ThemeState {
  mode: ThemeMode;
  color: string;
}

interface ThemeContextType {
  themeState: ThemeState;
  updateTheme: (newTheme: ThemeState) => void;
  shouldUseDarkText: () => boolean;
  getBackgroundColor: () => string;
  getTextColorClass: () => string;
  getLinkColorClass: () => string;
  getOpacityClass: () => string;
  getHrColorClass: () => string;
  isHydrated: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Default theme
const DEFAULT_THEME: ThemeState = {
  mode: "light",
  color: "#fafaf9",
};

// Helper function to get initial theme (handles SSR)
function getInitialTheme(): ThemeState {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return JSON.parse(savedTheme);
    }
  } catch (error) {
    console.error("Failed to parse saved theme:", error);
  }

  return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeState, setThemeState] = useState<ThemeState>(DEFAULT_THEME);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load theme from localStorage on client-side hydration
  useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    setIsHydrated(true);
  }, []);

  // Update document background color whenever theme changes
  useEffect(() => {
    if (typeof window !== "undefined" && isHydrated) {
      const backgroundColor = getBackgroundColor();
      document.body.style.backgroundColor = backgroundColor;

      // Also set it on html element as backup
      document.documentElement.style.backgroundColor = backgroundColor;

      // Set a CSS custom property for other uses
      document.documentElement.style.setProperty(
        "--theme-background",
        backgroundColor,
      );
    }
  }, [themeState, isHydrated]);

  // Update theme and save to localStorage
  const updateTheme = (newTheme: ThemeState) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(newTheme));
    }
  };

  // Helper functions for styling
  const shouldUseDarkText = () => {
    if (themeState.mode === "light") return true;
    if (themeState.mode === "dark") return false;
    return isLightColor(themeState.color);
  };

  const getBackgroundColor = () => {
    if (themeState.mode === "light") return "#fafaf9";
    if (themeState.mode === "dark") return "#0c0a09";
    return themeState.color;
  };

  const getTextColorClass = () => {
    return shouldUseDarkText() ? "text-stone-950" : "text-white";
  };

  const getLinkColorClass = () => {
    return shouldUseDarkText()
      ? "border-stone-950/20 hover:border-stone-950/30 focus-visible:outline-none focus-visible:bg-stone-950/10"
      : "border-white/20 hover:border-white/30 focus-visible:outline-none focus-visible:bg-white/20";
  };

  const getOpacityClass = () => {
    return shouldUseDarkText() ? "opacity-60" : "opacity-70";
  };

  const getHrColorClass = () => {
    return shouldUseDarkText() ? "border-stone-950/10" : "border-white/10";
  };

  const value: ThemeContextType = {
    themeState,
    updateTheme,
    shouldUseDarkText,
    getBackgroundColor,
    getTextColorClass,
    getLinkColorClass,
    getOpacityClass,
    getHrColorClass,
    isHydrated,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
