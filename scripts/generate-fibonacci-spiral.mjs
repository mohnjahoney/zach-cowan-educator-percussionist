import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PHI = (1 + Math.sqrt(5)) / 2;
const DEPTH = 12;
const DEPTH_TO_RENDER = 12;
const WIDTH = 1000;
const HEIGHT = WIDTH / PHI;
const SPIRAL_POINTS = 200;
const SPIRAL_START_PARAM = -2.5;
const SPIRAL_END_PARAM = 10;
const SPIRAL_ANGLE_ADJUSTMENT = -170;
const SPIRAL_START_RADIUS = 8;

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(root, "print", "fibonacci-spiral.svg");

let x = 0;
let y = 0;
let width = WIDTH;
let height = HEIGHT;
const squares = [];

for (let depth = 0; depth < DEPTH; depth += 1) {
  const side = Math.min(width, height);
  const direction = depth % 4;

  if (direction === 0) {
    squares.push({ x, y, side, depth });
    x += side;
    width -= side;
  } else if (direction === 1) {
    squares.push({ x, y, side, depth });
    y += side;
    height -= side;
  } else if (direction === 2) {
    const squareX = x + width - side;
    squares.push({ x: squareX, y, side, depth });
    width -= side;
  } else {
    const squareY = y + height - side;
    squares.push({ x, y: squareY, side, depth });
    height -= side;
  }
}

const spiralAnchor = squares[DEPTH - 1];
const SPIRAL_CENTER = {
  x: spiralAnchor.x + spiralAnchor.side / 2,
  y: spiralAnchor.y + spiralAnchor.side / 2,
};

const renderedSquares = squares.slice(0, DEPTH_TO_RENDER);
const rectangleMarkup = renderedSquares.map(({ x: squareX, y: squareY, side, depth }) => `
    <rect data-depth="${depth}" x="${squareX.toFixed(3)}" y="${squareY.toFixed(3)}" width="${side.toFixed(3)}" height="${side.toFixed(3)}" />`).join("");
const circleMarkup = renderedSquares.map(({ x: squareX, y: squareY, side, depth }) => `
    <circle data-depth="${depth}" cx="${(squareX + side / 2).toFixed(3)}" cy="${(squareY + side / 2).toFixed(3)}" r="${(side / 2).toFixed(3)}" />`).join("");

// A logarithmic spiral grows by PHI every quarter-turn:
// r(theta) = r0 * PHI^(theta / (PI / 2)).
const spiralPath = Array.from({ length: SPIRAL_POINTS }, (_, index) => {
  const parameter = SPIRAL_START_PARAM + (SPIRAL_END_PARAM - SPIRAL_START_PARAM) * index / (SPIRAL_POINTS - 1);
  const theta = parameter * Math.PI / 2;
  const angle = SPIRAL_ANGLE_ADJUSTMENT * Math.PI / 180;
  const radius = SPIRAL_START_RADIUS * PHI ** parameter;
  const pointX = SPIRAL_CENTER.x + radius * Math.cos(-theta + angle);
  const pointY = SPIRAL_CENTER.y + radius * Math.sin(-theta + angle);
  return `${index === 0 ? "M" : "L"}${pointX.toFixed(3)} ${pointY.toFixed(3)}`;
}).join(" ");



const svg = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Fibonacci / golden-ratio construction
     PHI = ${PHI}
     DEPTH = ${DEPTH}
     DEPTH_TO_RENDER = ${DEPTH_TO_RENDER}
     SPIRAL_START_PARAM = ${SPIRAL_START_PARAM}
     SPIRAL_END_PARAM = ${SPIRAL_END_PARAM}
     SPIRAL_ANGLE_ADJUSTMENT = ${SPIRAL_ANGLE_ADJUSTMENT}
     Outer ratio = WIDTH / HEIGHT = PHI -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT.toFixed(3)}" role="img" aria-labelledby="title description">
  <title id="title">Golden-ratio rectangle with Fibonacci square and circle construction</title>
  <desc id="description">An outer rectangle with ratio PHI, divided into twelve calculated turning squares, with the first eight rendered. Each rendered square contains an inscribed circle, with a two-turn golden spiral overlaid and centered on the twelfth circle.</desc>
  <style>
    .outer { fill: none; stroke: #252b3c; stroke-width: 3; }
    .construction rect { fill: none; stroke: #FFFFFF; stroke-width: 4; }
    .construction circle { fill: none; stroke: #9b604d; stroke-width: 2; }
    .spiral { fill: none; stroke: #FFFFFF; stroke-width: 10; stroke-linecap: round; stroke-linejoin: round; }
  </style>
  <rect class="outer" x="0" y="0" width="${WIDTH}" height="${HEIGHT.toFixed(3)}" />
  <g class="construction rectangles">${rectangleMarkup}
  </g>
  <path class="spiral" d="${spiralPath}" />
  <!-- Circle layer intentionally hidden for now; retain circleMarkup above for easy restoration.
  <g class="construction circles">${circleMarkup}
  </g>
  -->
</svg>
`;

await fs.writeFile(outputPath, svg);
console.log(`Wrote ${outputPath}`);
console.log(`PHI=${PHI}`);
console.log(`DEPTH=${DEPTH}`);
console.log(`DEPTH_TO_RENDER=${DEPTH_TO_RENDER}`);
console.log(`SPIRAL_START_PARAM=${SPIRAL_START_PARAM}`);
console.log(`SPIRAL_END_PARAM=${SPIRAL_END_PARAM}`);
console.log(`SPIRAL_ANGLE_ADJUSTMENT=${SPIRAL_ANGLE_ADJUSTMENT}`);
console.log(`SPIRAL_CENTER=${SPIRAL_CENTER.x},${SPIRAL_CENTER.y}`);
