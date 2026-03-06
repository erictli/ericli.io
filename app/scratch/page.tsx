"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HexColorPicker } from "react-colorful";
import { useTheme, type ThemeMode } from "@/contexts/ThemeContext";
import {
  IconStar,
  IconWifiOff,
  IconGitBranch,
  IconSourceCode,
  IconMarkdown,
  IconTextSize,
  IconInputSpark,
  IconCommand,
  IconStereoGlasses,
  IconEyeBolt,
  IconTypography,
} from "@tabler/icons-react";

const VERSION = "0.8.0";

export default function ScratchPage() {
  const {
    themeState,
    updateTheme,
    getTextColorClass,
    isHydrated,
    shouldUseDarkText,
    getLinkColorClass,
  } = useTheme();

  const [starCount, setStarCount] = useState<number | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorChange = (color: string) => {
    updateTheme({ mode: "custom", color });
  };

  const handleThemeChange = (mode: ThemeMode) => {
    let newColor = themeState.color;
    if (mode === "light") newColor = "#fafaf9";
    else if (mode === "dark") newColor = "#0c0a09";
    updateTheme({ mode, color: newColor });
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    const timer = setTimeout(() => {
      video.play().catch(() => {});
    }, 2000);
    return () => clearTimeout(timer);
  }, [isHydrated]);

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

  useEffect(() => {
    fetch("/api/github-stars")
      .then((res) => res.json())
      .then((data) => {
        if (data.stars != null) {
          setStarCount(data.stars);
        }
      })
      .catch(() => {});
  }, []);

  const formatStarCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    }
    return count.toString();
  };

  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen overflow-x-hidden font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-9">
        <div className="max-w-3xl w-full flex flex-col items-center text-center px-8 animate-fadeInHome1 opacity-0">
          <Image
            src="/images/scratch/scratch-icon.png"
            alt="Scratch app icon"
            width={128}
            height={128}
            className="h-24 w-24 rounded-3xl border border-stone-950/5 shadow-xl mb-2.5"
          />
          <div className="relative inline-flex flex-col items-center mb-8 animate-float">
            <div
              className={`w-3 h-3 rotate-45 rounded-[2px] -mb-[8px] z-10 ${
                shouldUseDarkText() ? "bg-stone-900" : "bg-stone-100"
              }`}
            />
            <div
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                shouldUseDarkText()
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-950"
              }`}
            >
              Scratch
            </div>
          </div>

          <h1 className="font-besley text-4xl xs:text-5xl md:text-6xl font-regular tracking-[-0.01em] mb-8">
            Minimalist markdown scratchpad for 
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-3 w-full">
            <Link
              href={`https://github.com/erictli/scratch/releases/latest/download/Scratch_${VERSION}_universal.dmg`}
              className={`inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 h-12 rounded-xl text-base font-medium transition-opacity hover:opacity-70  ${
                shouldUseDarkText()
                  ? "bg-stone-950 text-white focus-visible:outline-none focus-visible:ring-stone-950/20 focus-visible:ring-2 "
                  : "bg-white text-stone-950 focus-visible:outline-none focus-visible:ring-white/40 focus-visible:ring-2"
              }`}
            >
              <span className="text-xl leading-none"></span> Download for Mac
            </Link>
            <Link
              href="https://github.com/erictli/scratch"
              target="_blank"
              className={`inline-flex w-full sm:w-auto justify-center items-center gap-1.5 pl-[18px] pr-3 h-12 rounded-xl text-base font-medium transition-opacity hover:opacity-70 ${
                shouldUseDarkText()
                  ? "border border-stone-950/10 focus-visible:outline-none focus-visible:ring-stone-950/20 focus-visible:ring-2"
                  : "border border-white/20 focus-visible:outline-none focus-visible:ring-white/40 focus-visible:ring-2"
              }`}
            >
              View on GitHub
              {starCount !== null && (
                <span
                  className={`flex items-center text-sm gap-0.5 h-5 pl-3 ml-2 sm:pl-2 sm:ml-1 border-l  border-dashed ${shouldUseDarkText() ? "border-stone-950/10" : "border-white/20"}`}
                >
                  <IconStar size={12} fill="currentColor" stroke="none" />
                  {formatStarCount(starCount)}
                </span>
              )}
            </Link>
          </div>
          <div
            className={`text-sm mb-6 md:mb-1 ${
              shouldUseDarkText() ? "text-stone-950/40" : "text-white/40"
            }`}
          >
            v{VERSION} ·{" "}
            <a
              href="https://github.com/erictli/scratch/releases"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
            >
              Windows &amp; Linux also available
            </a>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto md:px-6 animate-fadeInHome2 opacity-0">
          <div className="relative overflow-hidden md:rounded-b-2xl">
            <Image
              src="/images/scratch/background.jpg"
              alt=""
              width={1920}
              height={1080}
              priority
              className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${shouldUseDarkText() ? "opacity-100" : "opacity-0"}`}
            />
            <Image
              src="/images/scratch/background-dark.jpg"
              alt=""
              width={1920}
              height={1080}
              priority
              className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${shouldUseDarkText() ? "opacity-0" : "opacity-100"}`}
            />
            <div className="absolute inset-0 w-full h-full -z-10 bg-[linear-gradient(to_bottom,var(--theme-background)_0%,transparent_60%)]" />
            <div className="w-full max-w-[960px] mx-auto px-6 py-6 md:py-24 animate-fadeInNav opacity-0">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                poster="/images/scratch/scratch-demo-image.png"
                className="w-full rounded-2xl shadow-2xl border border-stone-950/5 min-w-[640px]"
              >
                <source
                  src="/images/scratch/scratch-demo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>

        <div className="max-w-[840px] w-full flex flex-col px-8 pt-16 sm:pt-24 animate-fadeInHome2 opacity-0">
          <div className="flex flex-col gap-4 font-besley text-[32px] sm:text-[42px] !leading-tight tracking-[-0.008em] mb-10 sm:mb-20 text-left">
            <p>
              Scratch is an offline-first markdown notes app. It&apos;s
              AI-friendly, keyboard-optimized, and design-centered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 text-left mb-12">
            {[
              {
                icon: IconMarkdown,
                title: "Markdown-based",
                desc: "Notes stored on your device as plain .md files",
              },
              {
                icon: IconTypography,
                title: "WYSIWYG editing",
                desc: "Edit in rich text that saves as standard markdown",
              },
              {
                icon: IconWifiOff,
                title: "Offline-first",
                desc: "No cloud, no account, and no internet required",
              },
              {
                icon: IconInputSpark,
                title: "Edit with AI",
                desc: "Use your own Claude Code, Codex, or Ollama subscriptions ",
              },
              {
                icon: IconCommand,
                title: "Keyboard optimized",
                desc: "Keyboard-first navigation, plus a nifty command palette",
              },
              {
                icon: IconSourceCode,
                title: "Code & diagrams",
                desc: "Supports 20 languages, Mermaid diagrams, and KaTeX math",
              },
              {
                icon: IconStereoGlasses,
                title: "Focus mode",
                desc: "Hide the UI with a shortcut for distraction-free writing",
              },
              {
                icon: IconEyeBolt,
                title: "Preview mode",
                desc: "Open and edit any .md file without saving it to your folder",
              },
              {
                icon: IconTextSize,
                title: "Customizable",
                desc: "Theme, typography, page width, RTL support, and more",
              },
              {
                icon: IconGitBranch,
                title: "Git integration",
                desc: "Optional git-based version control and multi-device sync",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-start gap-3 py-1 max-w-72"
              >
                <div
                  className={`flex items-center justify-center p-2 rounded-lg bg-stone-950/5 ${shouldUseDarkText() ? "bg-stone-950/5" : "bg-white/5"}`}
                >
                  <Icon
                    size={24}
                    stroke={1.2}
                    className={`mt-0.5 shrink-0 ${
                      shouldUseDarkText()
                        ? "text-stone-950 opacity-40"
                        : "text-white opacity-40"
                    }`}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="font-medium text-xl leading-snug">
                    {title}
                  </div>
                  <div
                    className={`text-lg leading-snug ${
                      shouldUseDarkText()
                        ? "text-stone-950/50"
                        : "text-white/50"
                    }`}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-lg mb-16 sm:mb-24 text-left ${
              shouldUseDarkText() ? "text-stone-950/50" : "text-white/50"
            }`}
          >
            Plus slash commands, wikilinks, markdown source mode, and{" "}
            <a
              href="https://github.com/erictli/scratch/releases"
              target="_blank"
              className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
            >
              lots more
            </a>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto md:px-6 mb-8 sm:mb-20 animate-fadeInHome2 opacity-0">
          <div className="relative overflow-hidden md:rounded-t-2xl">
            <Image
              src="/images/scratch/background.jpg"
              alt=""
              width={1920}
              height={1080}
              className={`absolute inset-0 w-full h-full object-cover object-top -z-10 transition-opacity duration-500 ${shouldUseDarkText() ? "opacity-70" : "opacity-0"}`}
            />
            <Image
              src="/images/scratch/background-dark.jpg"
              alt=""
              width={1920}
              height={1080}
              className={`absolute inset-0 w-full h-full object-cover object-top -z-10 transition-opacity duration-500 ${shouldUseDarkText() ? "opacity-0" : "opacity-70"}`}
            />
            <div className="absolute inset-0 w-full h-full -z-10 bg-[linear-gradient(to_top,var(--theme-background)_0%,transparent_70%)]" />
            <div className="flex flex-col items-center gap-6 px-8 py-20 pt-28 sm:pt-32">
              <div
                className={`font-besley text-[32px] sm:text-[42px] !leading-[1.2] tracking-[-0.008em] text-center max-w-3xl ${
                  shouldUseDarkText() ? "text-stone-950" : "text-white"
                }`}
              >
                Scratch is free and open source. No account needed.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-3 w-full">
                <Link
                  href={`https://github.com/erictli/scratch/releases/latest/download/Scratch_${VERSION}_universal.dmg`}
                  className={`inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 h-12 rounded-xl text-base font-medium transition-opacity hover:opacity-70 ${
                    shouldUseDarkText()
                      ? "bg-stone-950 text-white focus-visible:outline-none focus-visible:ring-stone-950/20 focus-visible:ring-2"
                      : "bg-white text-stone-950 focus-visible:outline-none focus-visible:ring-white/40 focus-visible:ring-2"
                  }`}
                >
                  <span className="text-xl leading-none"></span> Download for
                  Mac
                </Link>
                <Link
                  href="https://github.com/erictli/scratch"
                  target="_blank"
                  className={`inline-flex w-full sm:w-auto justify-center items-center gap-1.5 pl-[18px] pr-3 h-12 rounded-xl text-base font-medium transition-opacity hover:opacity-70 ${
                    shouldUseDarkText()
                      ? "border border-stone-950/10 focus-visible:outline-none focus-visible:ring-stone-950/20 focus-visible:ring-2"
                      : "border border-white/20 focus-visible:outline-none focus-visible:ring-white/40 focus-visible:ring-2"
                  }`}
                >
                  View on GitHub
                  {starCount !== null && (
                    <span
                      className={`flex items-center text-sm gap-0.5 h-5 pl-3 ml-2 sm:pl-2 sm:ml-1 border-l border-dashed ${shouldUseDarkText() ? "border-stone-950/10" : "border-white/20"}`}
                    >
                      <IconStar size={12} fill="currentColor" stroke="none" />
                      {formatStarCount(starCount)}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full max-w-[1600px] px-8 md:px-12 text-sm ${
            shouldUseDarkText() ? "text-stone-950/50" : "text-white/50"
          }`}
        >
          {/* Mobile: stacked centered */}
          <div className="flex flex-col items-center gap-4 sm:hidden">
            <Image
              src="/images/typing-cat.png"
              alt="An illustration of a cat typing on a macbook"
              width={144}
              height={168}
              className="w-20"
              style={{
                filter: shouldUseDarkText()
                  ? "grayscale(1) contrast(300%) brightness(1.1)"
                  : "invert(1) grayscale(1) contrast(300%) brightness(1.1)",
              }}
            />
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <div className="relative flex-none">
                <Image
                  src="/images/color-picker.png"
                  alt="Color picker"
                  width={40}
                  height={40}
                  className="w-5 h-5 p-[1px] rounded-full cursor-pointer opacity-80 hover:opacity-100 transition-opacity color-picker-trigger"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                />
                {showColorPicker && (
                  <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-3 ${
                      shouldUseDarkText() ? "bg-stone-950/[4%]" : "bg-white/10"
                    } backdrop-blur-md rounded-xl color-picker-container w-60 z-50`}
                  >
                    <HexColorPicker
                      color={themeState.color}
                      onChange={handleColorChange}
                      className="!w-full"
                    />
                    <div className="flex gap-1.5 mt-2.5">
                      <button
                        onClick={() => handleThemeChange("light")}
                        className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${
                          shouldUseDarkText()
                            ? "bg-stone-950/[6%]"
                            : "bg-white/10"
                        } hover:opacity-60 transition-opacity`}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => handleThemeChange("dark")}
                        className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${
                          shouldUseDarkText()
                            ? "bg-stone-950/[6%]"
                            : "bg-white/10"
                        } hover:opacity-60 transition-opacity`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span>
                by{" "}
                <Link
                  href="https://ericli.io"
                  target="_blank"
                  className={`hover:opacity-60 transition-opacity font-medium`}
                >
                  Eric Li
                </Link>
              </span>
            </div>
          </div>
          {/* Desktop: 3-col grid */}
          <div className="hidden sm:grid grid-cols-3 items-end">
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <div className="relative flex-none">
                <Image
                  src="/images/color-picker.png"
                  alt="Color picker"
                  width={40}
                  height={40}
                  className="w-5 h-5 p-[1px] rounded-full cursor-pointer opacity-80 hover:opacity-100 transition-opacity color-picker-trigger"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                />
                {showColorPicker && (
                  <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-3 ${
                      shouldUseDarkText() ? "bg-stone-950/[4%]" : "bg-white/10"
                    } backdrop-blur-md rounded-xl color-picker-container w-60 z-50`}
                  >
                    <HexColorPicker
                      color={themeState.color}
                      onChange={handleColorChange}
                      className="!w-full"
                    />
                    <div className="flex gap-1.5 mt-2.5">
                      <button
                        onClick={() => handleThemeChange("light")}
                        className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${
                          shouldUseDarkText()
                            ? "bg-stone-950/[6%]"
                            : "bg-white/10"
                        } hover:opacity-60 transition-opacity`}
                      >
                        Light
                      </button>
                      <button
                        onClick={() => handleThemeChange("dark")}
                        className={`flex-1 px-3 h-8 pb-0.5 flex items-center justify-center rounded-lg text-sm transition-all ${
                          shouldUseDarkText()
                            ? "bg-stone-950/[6%]"
                            : "bg-white/10"
                        } hover:opacity-60 transition-opacity`}
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span>
                by{" "}
                <Link
                  href="https://ericli.io"
                  target="_blank"
                  className={`hover:opacity-60 transition-opacity font-medium`}
                >
                  Eric Li
                </Link>
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/typing-cat.png"
                alt="An illustration of a cat typing on a macbook"
                width={144}
                height={168}
                className="w-20"
                style={{
                  filter: shouldUseDarkText()
                    ? "grayscale(1) contrast(300%) brightness(1.1)"
                    : "invert(1) grayscale(1) contrast(300%) brightness(1.1)",
                }}
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <a
                href="https://github.com/erictli/scratch"
                target="_blank"
                className={`hover:opacity-60 transition-opacity font-medium`}
              >
                GitHub
              </a>
              <a
                href="https://github.com/erictli/scratch/releases"
                target="_blank"
                className={`hover:opacity-60 transition-opacity font-medium`}
              >
                Releases
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
