"use client";

import { usePathname } from "next/navigation";
import CloudShader from "./CloudShader";

export default function GlobalCloudShader() {
  const pathname = usePathname();

  // Full-screen app routes manage their own visual chrome.
  if (pathname === "/scratch" || pathname.startsWith("/nyc")) return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 rounded-full shadow-lg animate-fadeInUpSmall5 opacity-0">
      <CloudShader size={40} />
    </div>
  );
}
