"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import BottomNav from "@/components/BottomNav";
import { Github } from "lucide-react";

export default function ScratchPage() {
  const { getTextColorClass, isHydrated, shouldUseDarkText } = useTheme();

  if (!isHydrated) {
    return <main className="min-h-screen"></main>;
  }

  return (
    <main
      className={`min-h-screen overflow-x-hidden font-system-sans transition-colors duration-200 ${getTextColorClass()}`}
    >
      <Link
        href="/"
        className={`fixed top-3 sm:top-4 left-2 sm:left-3 text-sm mb-4 animate-fadeInBack opacity-0 z-10 px-3 py-2 bg-white/0 backdrop-blur-md rounded-full ${
          shouldUseDarkText()
            ? "text-stone-950/60 hover:bg-stone-950/5"
            : "text-white/60 hover:bg-white/5"
        } transition-colors`}
      >
        Back to home
      </Link>

      <div className="min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 pb-9">
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
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-16 sm:mb-20 w-full">
            <Link
              href="https://github.com/erictli/scratch/releases/latest/download/Scratch_0.4.0_universal.dmg"
              className={`inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 py-2.5 rounded-xl text-base font-medium transition-opacity hover:opacity-70 ${
                shouldUseDarkText()
                  ? "bg-stone-950 text-white"
                  : "bg-white text-stone-950"
              }`}
            >
              <span className="text-xl leading-none"></span> Download for Mac
            </Link>
            <Link
              href="https://github.com/erictli/scratch"
              target="_blank"
              className={`inline-flex w-full sm:w-auto justify-center items-center gap-1.5 pl-[18px] pr-5 py-2.5 rounded-xl text-base font-medium transition-opacity hover:opacity-70 ${
                shouldUseDarkText()
                  ? "border border-stone-950/10"
                  : "border border-white/20"
              }`}
            >
              <Github size={17} />
              View on GitHub
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[960px] px-5 mb-16 sm:mb-24 animate-fadeInHome2 opacity-0">
          <Image
            src="/images/scratch/scratch-screenshot.png"
            alt="Scratch app screenshot"
            width={1080}
            height={720}
            className="w-full rounded-xl shadow-2xl border border-black/10 min-w-[640px]"
          />
        </div>

        <div className="max-w-[840px] w-full flex flex-col px-8 animate-fadeInHome2 opacity-0 text-left sm:text-center">
          <div className="flex flex-col gap-4 font-besley text-3xl sm:text-4xl !leading-[1.25] tracking-[-0.008em] mb-10 sm:mb-16">
            <p>
              Scratch is an offline-first markdown notes app for Mac. It&apos;s
              designed for capturing quick thoughts, todos, and ideas.
            </p>
            <p>
              No accounts or subscriptions. Plus, it&apos;s lightweight and open
              source.
            </p>
          </div>
          <ul className="space-y-3 text-base sm:text-lg leading-normal mb-16 sm:mb-24">
            <li>
              <span className="font-medium">Offline-first</span>: No cloud, no
              account, no internet required
            </li>
            <li>
              <span className="font-medium">Markdown-based</span>: Notes stored
              as plain .md files you own
            </li>
            <li>
              <span className="font-medium">WYSIWYG editing</span>: Rich text
              editing that saves as markdown
            </li>
            <li>
              <span className="font-medium">Edit with Claude Code</span>: Use
              your local Claude Code CLI to edit notes
            </li>
            <li>
              <span className="font-medium">Works with other AI agents</span>:
              Detects external file changes
            </li>
            <li>
              <span className="font-medium">Keyboard optimized</span>: Lots of
              shortcuts and a command palette
            </li>
            <li>
              <span className="font-medium">Customizable</span>: Theme and
              editor typography settings
            </li>
            <li>
              <span className="font-medium">Git integration</span>: Optional
              version control for your notes
            </li>
            <li>
              <span className="font-medium">Lightweight</span>: Less than 10%
              the size of Obsidian or Notion
            </li>
          </ul>
        </div>
        <Image
          src="/images/typing-cat.png"
          alt="An illustration of a cat typing on a macbook"
          width={144}
          height={168}
          className={`w-[96px] mb-4 ${!shouldUseDarkText() ? "invert" : ""}`}
          style={{
            filter: shouldUseDarkText()
              ? "grayscale(1) contrast(300%) brightness(1.1)"
              : "invert(1) grayscale(1) contrast(300%) brightness(1.1)",
          }}
        />
        <div className="text-base sm:text-base pb-16 sm:pb-0">
          Made with ♥ by{" "}
          <Link
            href="https://ericli.io"
            target="_blank"
            className="hover:opacity-60 transition-opacity"
          >
            Eric Li
          </Link>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
