"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINK, MUTED, MUTED_HOVER, TEXT } from "@/lib/theme-classes";

type NavLink = { href: string; label: string; external?: boolean };

// Three groups, set a little apart: the site, the projects, and where to
// follow along (LinkedIn first).
const pages: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
];

const projects: NavLink[] = [
  { href: "https://getversive.com", label: "Versive", external: true },
  { href: "/scratch", label: "Scratch" },
  { href: "https://juno.ericli.io", label: "Juno", external: true },
];

const social: NavLink[] = [
  { href: "https://linkedin.com/in/erictli", label: "LinkedIn", external: true },
  { href: "https://x.com/erictli", label: "X", external: true },
];

export default function NavMenu() {
  // Vercel's background regeneration of the homepage (it's ISR) renders it
  // as "/index", and that HTML is what visitors get. Read it as "/", or the
  // server's markup (the button shown on wide screens) outlives hydration.
  const rawPathname = usePathname();
  const pathname = rawPathname === "/index" ? "/" : rawPathname;
  // The page the menu was opened on: it's open only while we're still there,
  // so following a link closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
    };
    if (open) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [open]);

  // The map is full-frame and has its own way back home. Everywhere else the
  // button is in the server's HTML, colored for both schemes by CSS.
  if (pathname.startsWith("/nyc")) return null;

  // The homepage lays out every link the menu has, except on a phone, where
  // they're a long scroll down.
  const phoneOnly = pathname === "/" ? "md:hidden" : "";

  const renderLink = (link: NavLink) => {
    const isActive =
      !link.external &&
      (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));
    return (
      <Link
        key={link.href}
        href={link.href}
        {...(link.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onClick={() => link.external && setOpen(false)}
        className={`font-normal transition-opacity duration-200 ${LINK} ${
          isActive ? TEXT : `${MUTED} ${MUTED_HOVER}`
        }`}
      >
        {link.label}
      </Link>
    );
  };

  const strokeColor = "stroke-neutral-950 dark:stroke-white";
  const overlayBg = "bg-white/60 backdrop-blur-md dark:bg-neutral-950/60";

  return (
    <>
      {/* Hamburger + breadcrumb */}
      <div className={`fixed top-4.5 left-4.5 z-50 flex items-center gap-2 ${phoneOnly}`}>
        <button
          onClick={() => setOpen(!open)}
          className={`w-7 h-7 flex flex-col items-center justify-center gap-1 group cursor-pointer hover:opacity-60 transition-opacity ${LINK}`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            width="14"
            height="12"
            viewBox="0 0 15 12"
            className={`${strokeColor} transition-all duration-300 ease-out`}
            strokeWidth="1.4"
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
        } ${overlayBg} ${phoneOnly}`}
        onClick={() => setOpen(false)}
        {...(!open && { inert: true })}
      >
        <nav
          className="flex flex-col items-start gap-2 pt-16 pl-6 text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {pages.map(renderLink)}
          <div className="mt-3 flex flex-col items-start gap-2">
            {projects.map(renderLink)}
          </div>
          <div className="mt-3 flex flex-col items-start gap-2">
            {social.map(renderLink)}
          </div>
        </nav>
      </div>
    </>
  );
}
