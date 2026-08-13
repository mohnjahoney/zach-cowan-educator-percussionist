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
  try { await fs.access(candidate); executablePath = candidate; break; } catch { /* try next */ }
}
if (!executablePath) throw new Error("Chrome was not found. Set CHROME_PATH or install Chrome.");

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 816, height: 1056 }, deviceScaleFactor: 2 });
await page.goto(`file://${path.join(printDir, "math-mark-options.html")}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts?.ready);
await page.pdf({ path: path.join(outputDir, "zach-cowan-math-mark-options.pdf"), format: "Letter", printBackground: true, preferCSSPageSize: true });
await page.screenshot({ path: path.join(outputDir, "zach-cowan-math-mark-options.png"), fullPage: true });
await browser.close();
console.log(`Rendered math mark options to ${outputDir}`);
