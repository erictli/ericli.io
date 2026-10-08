// Screenshots pages for design reviews (the dev server must be running).
//   node scripts/capture-variants.mjs <spec.json>
// spec: { "out": "review/x", "width": 1280, "height": 800, "shots": [
//   { "name": "a", "url": "http://localhost:3017/writing/nyc-marathon?step=6",
//     "scheme": "light|dark", "width": 375, "height": 812,
//     "waitFor": "!!document.querySelector('[data-step-ready=\"1\"]')",
//     "css": "optional injected CSS", "scrollY": 0, "scrollBy": 0, "scrollTo": "css selector",
//     "settle": 1200, "fullPage": false, "waitUntil": "networkidle0" } ] }
// (waitUntil "load" for pages that keep the network busy, like the homepage's live harbor)
// A data story's root sets data-step-ready="1" once a ?step=N deep link has settled.
// review/ is gitignored.
import puppeteer from "puppeteer-core";
import { mkdirSync, readFileSync } from "node:fs";

const spec = JSON.parse(readFileSync(process.argv[2], "utf8"));
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
mkdirSync(spec.out, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ["--use-angle=metal", "--enable-gpu", "--ignore-gpu-blocklist", "--hide-scrollbars"],
});
try {
  for (const shot of spec.shots) {
    const page = await browser.newPage();
    await page.setViewport({ width: shot.width || spec.width || 1280, height: shot.height || spec.height || 800, deviceScaleFactor: 2 });
    if (shot.scheme) await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: shot.scheme }]);
    await page.goto(shot.url, { waitUntil: shot.waitUntil || spec.waitUntil || "networkidle0", timeout: 120000 });
    if (shot.css) await page.addStyleTag({ content: shot.css });
    if (shot.waitFor) await page.waitForFunction(shot.waitFor, { timeout: 120000 });
    if (shot.scrollY) await page.evaluate((y) => window.scrollTo(0, y), shot.scrollY);
    if (shot.scrollBy) { await new Promise((r) => setTimeout(r, 800)); await page.evaluate((dy) => window.scrollBy(0, dy), shot.scrollBy); }
    if (shot.scrollTo) await page.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ block: "start" }), shot.scrollTo);
    await new Promise((r) => setTimeout(r, shot.settle ?? 1200));
    const path = `${spec.out}/${shot.name}.png`;
    await page.screenshot({ path, type: "png", fullPage: Boolean(shot.fullPage) });
    console.log("wrote", path);
    await page.close();
  }
} finally {
  await browser.close();
}
