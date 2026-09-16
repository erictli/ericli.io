import type { Metadata } from "next";
import NycAppLoader from "@/components/nyc/NycAppLoader";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import { MAP_PARAM, decodeVisitedState } from "@/lib/nyc/url-state";

const SITE_URL = "https://ericli.io";
const DEFAULT_TITLE = "NYC neighborhood map";
const DEFAULT_DESCRIPTION =
  "Track the New York City neighborhoods you have been to and share your map with friends. No account needed.";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function param(
  params: Record<string, string | string[] | undefined>,
  key: string,
): string | undefined {
  const value = params[key];
  return typeof value === "string" ? value : undefined;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await searchParams;
  const encoded = param(params, MAP_PARAM);
  const shared = encoded ? decodeVisitedState(encoded) : null;

  // Text only: a shared link's preview carries the count, no image.
  const title = shared ? "A shared NYC neighborhood map" : DEFAULT_TITLE;
  const description = shared
    ? `${shared.size} of ${NEIGHBORHOODS.length} neighborhoods visited. Open the map to explore it and compare with your own.`
    : DEFAULT_DESCRIPTION;

  return {
    title,
    description,
    alternates: { canonical: "/nyc" },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/nyc`,
      siteName: "Eric Li",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function NycPage() {
  return <NycAppLoader />;
}
