// Prepares data/nyc/source/nyc-neighborhoods.geojson, the neighborhood source
// that scripts/build-nyc-data.mjs turns into runtime data.
//
//   node scripts/prepare-nyc-neighborhoods.mjs
//
// Sources:
//   - Neighborhood boundaries: nyc-neighborhood-boundaries by Chris Whong,
//     derived from Zillow data, CC BY-SA 4.0.
//     https://github.com/chriswhong/nyc-neighborhood-boundaries
//   - Shoreline: NYC Planning 2020 Neighborhood Tabulation Areas (all 262,
//     including parks and airports), used only as a land mask so boundaries
//     don't spill into the water. https://data.cityofnewyork.us/d/9nt8-h7nd
//
// The prepared file is a modified version of the boundaries above and is
// shared under the same license (CC BY-SA 4.0).

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mapshaper from "mapshaper";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outFile = path.join(root, "data", "nyc", "source", "nyc-neighborhoods.geojson");

// Pinned so a rebuild doesn't silently pick up boundary changes.
const BOUNDARIES_COMMIT = "a14c924b16ce659d034ab15a8f45229b05a1f1f5";
const BOUNDARIES_URL = `https://raw.githubusercontent.com/chriswhong/nyc-neighborhood-boundaries/${BOUNDARIES_COMMIT}/dist/nyc-neighborhood-boundaries.geojson`;
const LAND_URL =
  "https://data.cityofnewyork.us/api/geospatial/9nt8-h7nd?method=export&format=GeoJSON";

const BOROUGHS = {
  manhattan: "Manhattan",
  brooklyn: "Brooklyn",
  queens: "Queens",
  bronx: "Bronx",
  "staten-island": "Staten Island",
};

// Areas that are almost entirely parkland, cemetery, airport, military base or
// uninhabited island (at least ~80% overlap with NYC Planning's non-residential
// areas). The map is about neighborhoods people live in; these are left off.
const EXCLUDED = new Set([
  "central-park-manhattan",
  "ellis-island-manhattan",
  "governors-island-manhattan",
  "liberty-island-manhattan",
  "randals-wards-island-manhattan",
  "floyd-bennett-field-brooklyn",
  "green-wood-cemetery-brooklyn",
  "navy-yard-brooklyn",
  "prospect-park-brooklyn",
  "west-jamaica-bay-islands-brooklyn",
  "east-jamaica-bay-islands-queens",
  "flushing-meadows-corona-park-queens",
  "fort-tilden-queens",
  "jacob-riis-park-queens",
  "john-f-kennedy-international-airport-queens",
  "la-guardia-airport-queens",
  "bronx-park-bronx",
  "hart-island-bronx",
  "north-brother-island-bronx",
  "pelham-bay-park-bronx",
  "rikers-island-bronx",
  "south-brother-island-bronx",
  "van-cortlandt-park-bronx",
  "fort-wadsworth-staten-island",
  "fresh-kills-park-staten-island",
  "fresh-kills-staten-island",
]);

// Spelling fixes on top of the source names.
const NAME_FIXES = {
  "bedford-stuyvesant-brooklyn": "Bedford-Stuyvesant",
  "roosevelt-island-manhattan": "Roosevelt Island", // source name ends in an emoji
};

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${url} (${response.status})`);
  return response.json();
}

async function main() {
  const [boundaries, land] = await Promise.all([
    fetchJson(BOUNDARIES_URL),
    fetchJson(LAND_URL),
  ]);

  const missing = [...EXCLUDED].filter(
    (slug) => !boundaries.features.some(({ properties }) => properties.slug === slug),
  );
  if (missing.length) {
    throw new Error(`Excluded slugs not found in the source: ${missing.join(", ")}`);
  }
  const kept = boundaries.features.filter(
    ({ properties }) =>
      properties.kind === "neighborhood" && !EXCLUDED.has(properties.slug),
  );

  const details = new Map(
    kept.map(({ properties }) => [
      properties.slug,
      {
        name: NAME_FIXES[properties.slug] ?? properties.name,
        borough: BOROUGHS[properties.borough],
        includes: (properties.child_neighborhoods ?? []).map(({ name }) => name),
      },
    ]),
  );

  const hoods = {
    type: "FeatureCollection",
    features: kept.map(({ properties, geometry }) => ({
      type: "Feature",
      properties: { id: properties.slug },
      geometry,
    })),
  };
  const landMask = {
    type: "FeatureCollection",
    features: land.features.map(({ geometry }) => ({
      type: "Feature",
      properties: {},
      geometry,
    })),
  };

  // Clip to land, then drop the slivers clipping leaves along the shore.
  const output = await mapshaper.applyCommands(
    [
      "-i hoods.geojson name=hoods",
      "-i land.geojson name=land",
      "-dissolve target=land",
      "-clip land target=hoods remove-slivers",
      "-filter-islands min-area=2000m2 target=hoods",
      "-o target=hoods output.geojson precision=0.00001",
    ].join(" "),
    {
      "hoods.geojson": JSON.stringify(hoods),
      "land.geojson": JSON.stringify(landMask),
    },
  );
  const clipped = JSON.parse(output["output.geojson"].toString());

  clipped.features = clipped.features
    .filter((feature) => feature.geometry)
    .map(({ properties, geometry }) => ({
      type: "Feature",
      properties: { id: properties.id, ...details.get(properties.id) },
      geometry,
    }))
    .sort((a, b) => a.properties.id.localeCompare(b.properties.id));

  if (clipped.features.length !== kept.length) {
    throw new Error(
      `Expected ${kept.length} neighborhoods after clipping, got ${clipped.features.length}`,
    );
  }

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, JSON.stringify(clipped));
  console.log(
    `${clipped.features.length} neighborhoods (${EXCLUDED.size} excluded) -> ${path.relative(root, outFile)}`,
  );
}

await main();
