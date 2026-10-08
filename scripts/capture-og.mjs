// Captures the marathon story's social-card (OG) image from the live 3D map.
//   node scripts/capture-og.mjs [preset ...]        (the dev server must be running)
// Presets are the STILLS in lib/marathon/story.js (firstave, queensboro, manhattan). Writes
// review/og/marathon-<preset>[-dark].png at 1200×630 (rendered at 2× and downsampled by
// Chrome). Pick one and save it as public/writing/nyc-marathon/og.jpg, e.g.
//   sips -s format jpeg -s formatOptions 85 -z 630 1200 review/og/marathon-firstave.png \
//     --out public/writing/nyc-marathon/og.jpg
// Env: STORY_URL (default http://localhost:3017/writing/nyc-marathon), THEME=light|dark,
// CHROME (default: the local Google Chrome).
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.STORY_URL || "http://localhost:3017/writing/nyc-marathon";
const OUT = "review/og";
const presets = process.argv.slice(2).length ? process.argv.slice(2) : ["firstave", "queensboro", "manhattan"];
const theme = process.env.THEME === "dark" ? "dark" : "light";

mkdirSync(OUT, { recursive: true });
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist", "--hide-scrollbars"],
});
try {
  for (const name of presets) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: theme }]);
    await page.goto(`${BASE}?still=${name}`, { waitUntil: "networkidle0", timeout: 120000 });
    // the story's root sets data-still-ready once every layer is loaded and drawn
    await page.waitForFunction(() => !!document.querySelector('[data-still-ready="1"]'), { timeout: 120000 });
    await new Promise((r) => setTimeout(r, 1500)); // let the last frames settle
    const path = `${OUT}/marathon-${name}${theme === "dark" ? "-dark" : ""}.png`;
    await page.screenshot({ path, type: "png" });
    console.log("wrote", path);
    await page.close();
  }
} finally {
  await browser.close();
}
