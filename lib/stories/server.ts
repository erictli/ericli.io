// Server helpers for a data story's page (see README, "Data stories").
import fs from "fs/promises";
import path from "path";
import { isValidElement, type ReactNode } from "react";
import readingTime from "reading-time";

/**
 * A JSON file the story also serves to its client module, read from public/ at render time,
 * e.g. readPublicJSON("writing/nyc-marathon/data/marathon/analysis.json").
 */
export async function readPublicJSON<T = unknown>(publicPath: string): Promise<T> {
  const file = path.join(process.cwd(), "public", publicPath);
  return JSON.parse(await fs.readFile(file, "utf8")) as T;
}

// Elements whose text reads as its own run of words (the rest join their neighbors, so
// "<span>59,122</span> people" stays two words and "4:30</span>." doesn't add one).
const BLOCKS = new Set([
  "article", "aside", "blockquote", "div", "figcaption", "figure", "footer", "h1", "h2", "h3",
  "h4", "header", "li", "main", "ol", "p", "section", "ul",
]);

type TextProps = { children?: ReactNode; "data-sel"?: unknown };

/**
 * The words in some JSX, as a reader sees them. Walks elements' children without rendering
 * them, so the copy should keep its words in children (as plain JSX does). Skips SVG and
 * controls marked data-sel (a menu's current value isn't reading).
 */
export function textOf(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<TextProps>(node)) {
    if (node.type === "svg" || node.props["data-sel"] != null) return "";
    const inner = textOf(node.props.children);
    return typeof node.type === "string" && !BLOCKS.has(node.type) ? inner : ` ${inner} `;
  }
  return "";
}

/** Reading time at the site's rate (lib/articles.ts uses the same reading-time defaults). */
export function readTimeOf(...nodes: ReactNode[]) {
  return readingTime(nodes.map(textOf).join(" "));
}
