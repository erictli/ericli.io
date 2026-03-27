"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "https://getversive.com", label: "Versive", external: true },
  { href: "/scratch", label: "Scratch" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const {
    getLinkColorClass,
    getTextColorClass,
    getMutedTextClass,
    getMutedHoverClass,
    shouldUseDarkText,
    isHydrated,
  } = useTheme();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [open]);

  if (!isHydrated) return null;

  const isDark = !shouldUseDarkText();
  const strokeColor = isDark ? "stroke-white" : "stroke-neutral-950";
  const overlayBg = isDark
    ? "bg-neutral-950/60 backdrop-blur-md"
    : "bg-white/60 backdrop-blur-md";

  return (
    <>
      {/* Hamburger + breadcrumb */}
      <div className="fixed top-4.5 left-4.5 z-50 flex items-center gap-2">
        <button
          onClick={() => setOpen(!open)}
          className={`w-7 h-7 flex flex-col items-center justify-center gap-1 group cursor-pointer hover:opacity-60 transition-opacity backdrop-blur-sm rounded-md ${getLinkColorClass()}`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            className={`${strokeColor} transition-all duration-300 ease-out`}
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <line
              x1="0"
              y1="6"
              x2="15"
              y2="6"
              className={`transition-transform duration-300 ease-out ${
                open ? "rotate-45" : "-translate-y-0.75"
              }`}
              style={{ transformBox: "view-box", transformOrigin: "center" }}
            />
            <line
              x1="0"
              y1="6"
              x2="15"
              y2="6"
              className={`transition-transform duration-300 ease-out ${
                open ? "-rotate-45" : "translate-y-0.75"
              }`}
              style={{ transformBox: "view-box", transformOrigin: "center" }}
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${overlayBg}`}
        onClick={() => setOpen(false)}
        {...(!open && { inert: true })}
      >
        <nav
          className="flex flex-col items-start gap-2 pt-16 pl-6"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link) => {
            const isActive =
              !link.external &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onClick={() => link.external && setOpen(false)}
                className={`font-[450] transition-opacity duration-200 ${getTextColorClass()} ${getLinkColorClass()} ${
                  isActive
                    ? "opacity-100"
                    : `${getMutedTextClass()} ${getMutedHoverClass()}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
