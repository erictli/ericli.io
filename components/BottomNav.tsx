"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { useTheme, type ThemeMode } from "@/contexts/ThemeContext";

export default function BottomNav() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const {
    themeState,
    updateTheme,
    shouldUseDarkText,
    getOpacityClass,
    getLinkColorClass,
    isHydrated,
  } = useTheme();

  // Handle color change
  const handleColorChange = (color: string) => {
    updateTheme({ mode: "custom", color });
  };

  // Handle theme mode change
  const handleThemeChange = (mode: ThemeMode) => {
    let newColor = themeState.color;

    // Reset to original colors when switching to predefined themes
    if (mode === "light") {
      newColor = "#fafaf9";
    } else if (mode === "dark") {
      newColor = "#0c0a09";
    }

    updateTheme({ mode, color: newColor });
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".color-picker-container") &&
        !target.closest(".color-picker-trigger")
      ) {
        setShowColorPicker(false);
      }
    };

    if (showColorPicker) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showColorPicker]);

  // Don't render until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div className="fixed bottom-6 left-6 flex items-center gap-6 pl-4 pr-6 py-3 text-sm rounded-full bg-stone-950/[4%] backdrop-blur-md">
        <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="font-semibold -ml-3.5">Eric Li</div>
        <div className={getOpacityClass()}>LinkedIn</div>
        <div className={getOpacityClass()}>hi@ericli.io</div>
      </div>
    );
  }

  const getBottomBarClass = () => {
    return shouldUseDarkText()
      ? "bg-stone-950/[4%] backdrop-blur-md"
      : "bg-white/[8%] backdrop-blur-md";
  };

  const getColorPickerClass = () => {
    return shouldUseDarkText() ? "bg-stone-950/[4%]" : "bg-white/10";
  };

  const getButtonClass = () => {
    return shouldUseDarkText()
      ? "bg-stone-950/[6%] focus-visible:outline-none focus-visible:bg-stone-950/10"
      : "bg-white/10 focus-visible:outline-none focus-visible:bg-white/20";
  };

  return (
    <>
      <div
        className={`fixed bottom-6 left-6 flex items-center gap-6 pl-4 pr-6 py-3 text-sm rounded-full ${getBottomBarClass()}`}
      >
        <div className="relative">
          <img
            src="/images/color-picker.png"
            className="w-6 h-6 rounded-full cursor-pointer hover:opacity-70 transition-opacity color-picker-trigger"
            onClick={() => setShowColorPicker(!showColorPicker)}
          />
        </div>
        <Link
          href="/"
          className={`font-semibold hover:opacity-60 transition-opacity -ml-3.5 ${getLinkColorClass()}`}
        >
          Eric Li
        </Link>
        <Link
          href="https://linkedin.com/in/erictli"
          target="_blank"
          className={`hover:opacity-100 transition-opacity ${getOpacityClass()} ${getLinkColorClass()}`}
        >
          LinkedIn
        </Link>
        <Link
          href="mailto:eric@getversive.com"
          className={`hover:opacity-100 transition-opacity ${getOpacityClass()} ${getLinkColorClass()}`}
        >
          hi@ericli.io
        </Link>
      </div>

      {/* Color Picker Popup - Now a sibling */}
      {showColorPicker && (
        <div
          className={`fixed bottom-20 left-6 p-3 ${getColorPickerClass()} backdrop-blur-md rounded-xl color-picker-container w-60`}
        >
          <HexColorPicker
            color={themeState.color}
            onChange={handleColorChange}
            className="!w-full"
          />
          {/* Theme Controls */}
          <div className="flex gap-1.5 mt-2.5">
            <button
              onClick={() => handleThemeChange("light")}
              className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${getButtonClass()} hover:opacity-60 transition-opacity`}
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange("dark")}
              className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${getButtonClass()} hover:opacity-60 transition-opacity`}
            >
              Dark
            </button>
          </div>
        </div>
      )}
    </>
  );
}
