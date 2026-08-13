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
  try {
    await fs.access(candidate);
    executablePath = candidate;
    break;
  } catch {
    // Try the next known browser location.
  }
}

if (!executablePath) {
  throw new Error("Chrome was not found. Set CHROME_PATH or install Chrome.");
}

const browser = await chromium.launch({ executablePath });
const preview = await browser.newPage({ deviceScaleFactor: 2 });

async function load(file) {
  await preview.goto(`file://${path.join(printDir, file)}`, { waitUntil: "networkidle" });
  await preview.evaluate(() => document.fonts?.ready);
}

async function renderHandout() {
  await load("handout.html");
  await preview.pdf({
    path: path.join(outputDir, "zach-cowan-handout.pdf"),
    format: "Letter",
    printBackground: true,
    preferCSSPageSize: true,
  });
}

async function renderBusinessCards() {
  await load("business-card.html");
  const faces = await preview.locator(".card-face").evaluateAll((elements) =>
    elements.map((element) => element.outerHTML),
  );
  const fibonacciSvg = await fs.readFile(path.join(printDir, "fibonacci-spiral.svg"), "utf8");
  const fibonacciDataUri = `data:image/svg+xml;base64,${Buffer.from(fibonacciSvg).toString("base64")}`;
  const facesWithAssets = faces.map((face) => face.replace("./fibonacci-spiral.svg", fibonacciDataUri));
  const printCss = await fs.readFile(path.join(printDir, "print.css"), "utf8");
  const sheet = await browser.newPage({ deviceScaleFactor: 2 });
  const sheetHtml = (face) => `<!doctype html><html><head><style>${printCss}</style><style>
    @page { size: letter; margin: 0; } body { margin: 0; background: white; }
    .sheet { display: grid; grid-template-columns: repeat(2, 3.5in); grid-template-rows: repeat(5, 2in); width: 7in; margin: .5in auto; }
    .sheet .card-face { break-after: auto !important; page-break-after: auto !important; }
  </style></head><body><main class="sheet">${Array(10).fill(face).join("")}</main></body></html>`;

  await sheet.setContent(sheetHtml(facesWithAssets[0]), { waitUntil: "networkidle" });
  await sheet.pdf({ path: path.join(outputDir, "zach-cowan-business-card-fronts.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
  const wideFront = facesWithAssets[0].replace("card-face--front", "card-face--front card-face--front-wide");
  await sheet.setContent(sheetHtml(wideFront), { waitUntil: "networkidle" });
  await sheet.pdf({ path: path.join(outputDir, "zach-cowan-business-card-fronts-wide-watermark.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
  await sheet.setContent(sheetHtml(facesWithAssets[1]), { waitUntil: "networkidle" });
  await sheet.pdf({ path: path.join(outputDir, "zach-cowan-business-card-backs.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
  await sheet.close();
}

await renderHandout();
await renderBusinessCards();
await browser.close();
console.log(`Rendered print PDFs to ${outputDir}`);
