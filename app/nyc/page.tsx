import type { Metadata } from "next";
import NycAppLoader from "@/components/nyc/NycAppLoader";
import { NEIGHBORHOODS } from "@/lib/nyc/generated/neighborhoods";
import {
  COLOR_PARAM,
  MAP_PARAM,
  MODE_PARAM,
  NAME_PARAM,
  decodeVisitedState,
  sanitizeName,
} from "@/lib/nyc/url-state";

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
  const name = sanitizeName(param(params, NAME_PARAM));

  const title = shared
    ? `${name ? `${name}’s` : "A"} NYC neighborhood map`
    : DEFAULT_TITLE;
  const description = shared
    ? `${shared.size} of ${NEIGHBORHOODS.length} neighborhoods visited. Open the map to explore it and compare with your own.`
    : DEFAULT_DESCRIPTION;

  const imageParams = new URLSearchParams();
  if (shared && encoded) imageParams.set(MAP_PARAM, encoded);
  if (shared && name) imageParams.set(NAME_PARAM, name);
  for (const key of [COLOR_PARAM, MODE_PARAM]) {
    const value = param(params, key);
    if (shared && value) imageParams.set(key, value);
  }
  const image = `${SITE_URL}/nyc/og${imageParams.size ? `?${imageParams}` : ""}`;

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
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function NycPage() {
  return <NycAppLoader />;
}
