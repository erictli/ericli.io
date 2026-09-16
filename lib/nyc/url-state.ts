import { DEFAULT_PALETTE_ID, paletteById } from "@/components/nyc/palettes";
import urlIds from "./url-ids.json";
import type { MapStyleChoice, SharedMap } from "./types";

export const MAP_PARAM = "map";
/** Older links carried the sender's name; still read, no longer written. */
export const NAME_PARAM = "by";
export const COLOR_PARAM = "c";
export const MODE_PARAM = "m";
export const MAX_NAME_LENGTH = 40;

// The share link is a bitset over a frozen, sorted list of neighborhood IDs.
// The list lives in url-ids.json so data updates can't reorder the bits; a
// data change that adds or removes neighborhoods gets a new version there and
// old links keep decoding against the list they were made with.
const ID_LISTS = urlIds.versions as Record<string, readonly string[]>;
const CURRENT_VERSION = urlIds.current;

function toBase64Url(bytes: Uint8Array): string {
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function fromBase64Url(value: string): Uint8Array {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return Uint8Array.from(atob(padded), (character) => character.charCodeAt(0));
}

export function encodeVisitedState(visitedIds: ReadonlySet<string>): string {
  const ids = ID_LISTS[CURRENT_VERSION];
  const bytes = new Uint8Array(Math.ceil(ids.length / 8));

  ids.forEach((id, index) => {
    if (visitedIds.has(id)) {
      bytes[Math.floor(index / 8)] |= 1 << index % 8;
    }
  });

  return `${CURRENT_VERSION}.${toBase64Url(bytes)}`;
}

export function decodeVisitedState(value: string): Set<string> | null {
  const [version, encoded, ...rest] = value.split(".");
  const ids = version ? ID_LISTS[version] : undefined;
  if (!ids || encoded === undefined || rest.length) return null;

  try {
    const bytes = fromBase64Url(encoded);
    if (bytes.length !== Math.ceil(ids.length / 8)) return null;

    return new Set(
      ids.filter(
        (_, index) => (bytes[Math.floor(index / 8)] & (1 << index % 8)) !== 0,
      ),
    );
  } catch {
    return null;
  }
}

export function sanitizeName(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const cleaned = raw
    .replace(/[\p{C}]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_NAME_LENGTH)
    .trim();
  return cleaned || null;
}

export function readSharedMapFromSearch(search: string): SharedMap | null {
  const params = new URLSearchParams(search);
  const encoded = params.get(MAP_PARAM);
  if (encoded === null) return null;

  const visitedIds = decodeVisitedState(encoded);
  if (!visitedIds) return null;

  return {
    visitedIds,
    name: sanitizeName(params.get(NAME_PARAM)),
    style: readStyleParams(params),
  };
}

export function readStyleParams(params: URLSearchParams): MapStyleChoice | null {
  const color = params.get(COLOR_PARAM);
  const mode = params.get(MODE_PARAM);
  if (!color && !mode) return null;
  return {
    // Unknown colors, including the retired "black", fall back to the default.
    paletteId: paletteById(color).id,
    night: mode === "night",
  };
}

export function buildShareUrl(
  base: string,
  visitedIds: ReadonlySet<string>,
  style: MapStyleChoice,
): string {
  const url = new URL(base);
  url.search = "";
  url.hash = "";
  url.searchParams.set(MAP_PARAM, encodeVisitedState(visitedIds));
  if (style.paletteId !== DEFAULT_PALETTE_ID) url.searchParams.set(COLOR_PARAM, style.paletteId);
  if (style.night) url.searchParams.set(MODE_PARAM, "night");
  return url.toString();
}

/** Removes share params from the address bar without a navigation. */
export function stripShareParamsFromUrl(): void {
  const url = new URL(window.location.href);
  const params = [MAP_PARAM, NAME_PARAM, COLOR_PARAM, MODE_PARAM];
  if (!params.some((param) => url.searchParams.has(param))) return;
  for (const param of params) url.searchParams.delete(param);
  window.history.replaceState(window.history.state, "", url);
}
