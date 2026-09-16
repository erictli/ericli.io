import type { Viewport } from "next";
import "maplibre-gl/dist/maplibre-gl.css";
import "./nyc.css";

// Page metadata lives in page.tsx so it can describe a shared map.

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function NycLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
