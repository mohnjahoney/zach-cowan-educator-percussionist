#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const printDir = path.join(root, "print");
const outputDir = path.join(root, "output", "pdf");
await fs.mkdir(outputDir, { recursive: true });

const browserCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  chromium.executablePath(),
].filter(Boolean);

let executablePath;
for (const candidate of browserCandidates) {
  try { await fs.access(candidate); executablePath = candidate; break; } catch { /* Try next candidate. */ }
}
if (!executablePath) throw new Error("Chrome was not found. Set CHROME_PATH or install Chrome.");

const browser = await chromium.launch({ executablePath });
const source = await browser.newPage({ deviceScaleFactor: 2 });
await source.goto(`file://${path.join(printDir, "business-card.html")}`, { waitUntil: "networkidle" });
await source.evaluate(() => document.fonts?.ready);

const faces = await source.locator(".card-face").evaluateAll((elements) => elements.map((element) => element.outerHTML));
const fibonacciSvg = await fs.readFile(path.join(printDir, "fibonacci-spiral.svg"), "utf8");
const fibonacciDataUri = `data:image/svg+xml;base64,${Buffer.from(fibonacciSvg).toString("base64")}`;
const facesWithAssets = faces.map((face) => face.replace("./fibonacci-spiral.svg", fibonacciDataUri));
const printCss = await fs.readFile(path.join(printDir, "print.css"), "utf8");
const page = await browser.newPage({ deviceScaleFactor: 2 });

const singlePage = (face) => `<!doctype html><html><head><style>${printCss}</style><style>
  @page { size: 3.5in 2in; margin: 0; }
  html, body { width: 3.5in; height: 2in; margin: 0; background: white; }
  .card-face { break-after: auto !important; page-break-after: auto !important; }
</style></head><body>${face}</body></html>`;

const wideFront = facesWithAssets[0].replace("card-face--front", "card-face--front card-face--front-wide");
await page.setContent(singlePage(wideFront), { waitUntil: "networkidle" });
await page.pdf({ path: path.join(outputDir, "zach-cowan-business-card-front-single.pdf"), printBackground: true, preferCSSPageSize: true });
await page.setContent(singlePage(facesWithAssets[1]), { waitUntil: "networkidle" });
await page.pdf({ path: path.join(outputDir, "zach-cowan-business-card-back-single.pdf"), printBackground: true, preferCSSPageSize: true });

await page.close();
await source.close();
await browser.close();
console.log(`Rendered single business-card faces to ${outputDir}`);
