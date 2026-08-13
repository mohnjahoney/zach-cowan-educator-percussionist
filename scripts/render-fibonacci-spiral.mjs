import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = path.join(root, "print", "fibonacci-spiral.svg");
const outputPath = path.join(root, "output", "pdf", "fibonacci-spiral.png");
await fs.mkdir(path.dirname(outputPath), { recursive: true });

const candidates = [process.env.CHROME_PATH, "/Applications/Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", chromium.executablePath()].filter(Boolean);
let executablePath;
for (const candidate of candidates) { try { await fs.access(candidate); executablePath = candidate; break; } catch { /* try next */ } }
if (!executablePath) throw new Error("Chrome was not found. Set CHROME_PATH or install Chrome.");

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 1200, height: 742 }, deviceScaleFactor: 2 });
await page.goto(`file://${svgPath}`, { waitUntil: "networkidle" });
await page.screenshot({ path: outputPath });
await browser.close();
console.log(`Rendered ${outputPath}`);
