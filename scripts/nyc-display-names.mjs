// Curated display names for NYC Planning's 2020 Neighborhood Tabulation Areas.
//
// NTA names are administrative ("Carroll Gardens-Cobble Hill-Gowanus-Red Hook").
// For the map we split them into a primary name plus the other places the area
// covers. The automatic rule splits on "-" (except for the compound names below)
// and takes the first part. Overrides handle the cases where the first part is
// a poor label or would collide with a sibling area.

// Hyphenated names that are a single place, never split.
export const COMPOUND_NAMES = [
  "Bedford-Stuyvesant",
  "Co-op City",
  "Ditmars-Steinway",
  "Stuyvesant Town-Peter Cooper Village",
];

// NTA name -> { name, includes? }. `includes` replaces the automatic remainder.
export const NAME_OVERRIDES = {
  // Brooklyn
  "East Flatbush-Erasmus": { name: "East Flatbush (Erasmus)", includes: [] },
  "East Flatbush-Farragut": { name: "East Flatbush (Farragut)", includes: [] },
  "East Flatbush-Remsen Village": {
    name: "East Flatbush (Remsen Village)",
    includes: [],
  },
  "East Flatbush-Rugby": { name: "East Flatbush (Rugby)", includes: [] },
  "East New York-City Line": {
    name: "East New York (City Line)",
    includes: [],
  },
  "East New York-New Lots": { name: "East New York (New Lots)", includes: [] },
  "Flatbush (West)-Ditmas Park-Parkville": {
    name: "Ditmas Park",
    includes: ["Flatbush (West)", "Parkville"],
  },
  "Spring Creek-Starrett City": {
    name: "Starrett City",
    includes: ["Spring Creek"],
  },

  // Bronx
  "Soundview-Clason Point": {
    name: "Clason Point",
    includes: ["Soundview"],
  },

  // Manhattan
  "Midtown South-Flatiron-Union Square": {
    name: "Flatiron",
    includes: ["Midtown South", "Union Square"],
  },
  "Upper East Side-Carnegie Hill": {
    name: "Carnegie Hill",
    includes: ["Upper East Side"],
  },
  "Upper East Side-Lenox Hill-Roosevelt Island": {
    name: "Lenox Hill",
    includes: ["Upper East Side", "Roosevelt Island"],
  },
  "Upper East Side-Yorkville": {
    name: "Yorkville",
    includes: ["Upper East Side"],
  },
  "Upper West Side-Lincoln Square": {
    name: "Lincoln Square",
    includes: ["Upper West Side"],
  },
  "Upper West Side-Manhattan Valley": {
    name: "Manhattan Valley",
    includes: ["Upper West Side"],
  },

  // Queens
  "Astoria (North)-Ditmars-Steinway": {
    name: "Ditmars-Steinway",
    includes: ["Astoria (North)"],
  },
};

const SPLIT_PLACEHOLDER = "\u2011"; // non-breaking hyphen stands in for "-" inside compound names

export function displayNameFor(ntaName) {
  const override = NAME_OVERRIDES[ntaName];
  if (override) {
    return { name: override.name, includes: override.includes ?? [] };
  }

  let protectedName = ntaName;
  for (const compound of COMPOUND_NAMES) {
    protectedName = protectedName.replaceAll(
      compound,
      compound.replaceAll("-", SPLIT_PLACEHOLDER),
    );
  }

  const [first, ...rest] = protectedName
    .split("-")
    .map((part) => part.replaceAll(SPLIT_PLACEHOLDER, "-").trim());

  return { name: first, includes: rest };
}
