"use client";

import { usePathname } from "next/navigation";
import CloudShader from "./CloudShader";

export default function GlobalCloudShader() {
  const pathname = usePathname();

  // Don't render on /scratch — it has its own inline shader
  if (pathname === "/scratch") return null;

  return (
    <div className="fixed bottom-6 right-6 z-30 rounded-full shadow-xl animate-fadeInUpSmall5 opacity-0">
      <CloudShader size={52} />
    </div>
  );
}
