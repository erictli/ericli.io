import type { Metadata, Viewport } from "next";
import WaterLoader from "@/components/water/WaterLoader";

const title = "Water";
const description =
  "The water off the Brooklyn piers, simulated in real time. Change the wind, weather and time of day, or drop something in.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/water" },
  openGraph: {
    title,
    description,
    url: "https://ericli.io/water",
    siteName: "Eric Li",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07090c",
};

export default function WaterPage() {
  return <WaterLoader />;
}
