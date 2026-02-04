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
          getTextColorClass() === "text-stone-950"
            ? "text-stone-950/60 hover:bg-stone-950/5"
            : "text-white/60 hover:bg-white/5"
        } transition-colors`}
      >
        Back to home
      </Link>

      <div className="min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-28 pb-9">
        <div className="max-w-3xl w-full flex flex-col items-center text-center px-5 animate-fadeInHome1 opacity-0">
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

          <div className="space-y-4">
            <h1 className="font-besley text-4xl sm:text-5xl font-regular tracking-[-0.01em] mb-6">
              Minimalist markdown scratchpad for 
            </h1>
          </div>

          <Link
            href="https://github.com/erictli/scratch"
            target="_blank"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-medium mb-16 transition-opacity hover:opacity-70 ${
              shouldUseDarkText()
                ? "bg-stone-950 text-white"
                : "bg-white text-stone-950"
            }`}
          >
            <Github size={18} />
            Install on GitHub
          </Link>
        </div>

        <div className="w-full max-w-[960px] px-5 mb-16 sm:mb-20 animate-fadeInHome2 opacity-0">
          <Image
            src="/images/scratch/scratch-screenshot.png"
            alt="Scratch app screenshot"
            width={1080}
            height={720}
            className="w-full rounded-xl shadow-2xl border border-black/10 min-w-[560px]"
          />
        </div>

        <div className="max-w-[800px] w-full flex flex-col px-10 animate-fadeInHome2 opacity-0 text-left sm:text-center">
          <div className="flex flex-col gap-4 font-besley text-3xl sm:text-4xl !leading-[1.25] tracking-[-0.008em] mb-12 sm:mb-16">
            <p>
              Scratch is an offline-first markdown notes app for Mac. It&apos;s
              designed for capturing ephemeral thoughts, todos, and ideas.
            </p>
            <p>
              No accounts or subscriptions. Plus, it&apos;s lightweight and open
              source.
            </p>
          </div>
          <ul className="space-y-3 text-base sm:text-lg leading-normal mb-24 sm:mb-28">
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
              <span className="font-medium">Works with AI agents</span>: Detects
              external file changes
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
          </ul>
        </div>
        <div className="text-base sm:text-lg opacity-60 pb-12 sm:pb-0">
          Made with ♥ by Eric Li
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
