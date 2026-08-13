const phi = (1 + Math.sqrt(5)) / 2;
const goldenAngle = Math.PI * (3 - Math.sqrt(5));

function spiralPath({ cx, cy, scale, turns = 1.8, start = 0, direction = 1 }) {
  const points = [];
  const steps = 120;
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const theta = start + direction * t * turns * Math.PI * 2;
    const radius = scale * Math.pow(phi, direction * theta / (Math.PI * 2));
    points.push(`${(cx + Math.cos(theta) * radius).toFixed(2)},${(cy + Math.sin(theta) * radius).toFixed(2)}`);
  }
  return `M${points.join(" L")}`;
}

function fibonacciRectangles({ x, y, width, height, count = 5, rotate = false }) {
  const rectangles = [];
  let w = width, h = height, px = x, py = y;
  for (let i = 0; i < count; i += 1) {
    rectangles.push(`<rect x="${px.toFixed(2)}" y="${py.toFixed(2)}" width="${w.toFixed(2)}" height="${h.toFixed(2)}"/>`);
    if (i % 2 === 0) { px += w - h; w = h; } else { py += h - w; h = w; }
    if (w <= 0 || h <= 0) break;
  }
  return rectangles.join("");
}

function goldenAngleMarks({ cx, cy, count = 18, radius = 52, color, opacity = .22 }) {
  return Array.from({ length: count }, (_, index) => {
    const r = radius * Math.sqrt((index + 1) / count);
    const angle = index * goldenAngle;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    const size = 1.2 + index * .12;
    return `<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="${(size * 1.8).toFixed(2)}" ry="${size.toFixed(2)}" transform="rotate(${(angle * 180 / Math.PI).toFixed(1)} ${x.toFixed(2)} ${y.toFixed(2)})" stroke="${color}" stroke-opacity="${Math.max(.05, opacity - index * .008)}"/>`;
  }).join("");
}

const variants = {
  spiral: {
    label: "01 · Fibonacci spiral",
    svg: `<g fill="none" stroke-linecap="round" stroke-linejoin="round"><g stroke="#5d755e" stroke-opacity=".18" stroke-width=".8">${fibonacciRectangles({ x: 58, y: 20, width: 78, height: 48, count: 6 })}</g><path d="${spiralPath({ cx: 96, cy: 62, scale: 4.2, turns: 2.15, start: -.25 })}" stroke="#9b604d" stroke-opacity=".75" stroke-width="1.8"/><path d="${spiralPath({ cx: 96, cy: 62, scale: 7, turns: 1.35, start: 2.7, direction: -1 })}" stroke="#5d755e" stroke-opacity=".3" stroke-width="1"/><circle cx="96" cy="62" r="2.2" fill="#9b604d" fill-opacity=".7"/></g>`,
  },
  rectangles: {
    label: "02 · Golden construction",
    svg: `<g fill="none" stroke-linecap="round" stroke-linejoin="round"><g stroke="#252b3c" stroke-opacity=".28" stroke-width=".9">${fibonacciRectangles({ x: 70, y: 23, width: 62, height: 38, count: 7 })}</g><path d="${spiralPath({ cx: 102, cy: 65, scale: 3.2, turns: 2.35, start: .3 })}" stroke="#9b604d" stroke-opacity=".72" stroke-width="1.6"/><path d="M20 91C58 87 82 75 112 50C140 27 164 20 201 24" stroke="#5d755e" stroke-opacity=".3" stroke-width="1.1"/><circle cx="201" cy="24" r="2" fill="#5d755e" fill-opacity=".5"/></g>`,
  },
  angle: {
    label: "03 · Golden-angle growth",
    svg: `<g fill="none" stroke-linecap="round" stroke-linejoin="round"><g>${goldenAngleMarks({ cx: 116, cy: 63, count: 27, radius: 58, color: "#9b604d", opacity: .34 })}</g><path d="${spiralPath({ cx: 116, cy: 63, scale: 3.6, turns: 2.1, start: -.5 })}" stroke="#252b3c" stroke-opacity=".6" stroke-width="1.3"/><path d="M16 106C64 106 112 83 200 22" stroke="#9b604d" stroke-opacity=".42" stroke-width="1.4"/><circle cx="16" cy="106" r="2.4" fill="#9b604d" fill-opacity=".55"/></g>`,
  },
  veil: {
    label: "04 · Fading proportion",
    svg: `<defs><linearGradient id="goldFade" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#9b604d" stop-opacity=".05"/><stop offset=".58" stop-color="#9b604d" stop-opacity=".65"/><stop offset="1" stop-color="#5d755e" stop-opacity="0"/></linearGradient></defs><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="${spiralPath({ cx: 121, cy: 67, scale: 4, turns: 2.5, start: .2 })}" stroke="url(#goldFade)" stroke-width="2"/><path d="${spiralPath({ cx: 121, cy: 67, scale: 7.5, turns: 1.55, start: 3.2, direction: -1 })}" stroke="#5d755e" stroke-opacity=".22" stroke-width="1"/><g stroke="#252b3c" stroke-opacity=".18" stroke-width=".8">${fibonacciRectangles({ x: 80, y: 28, width: 56, height: 35, count: 5 })}</g><path d="M19 105C56 99 97 82 202 30" stroke="#9b604d" stroke-opacity=".28" stroke-width="1.1"/></g>`,
  },
};

for (const [name, variant] of Object.entries(variants)) {
  const option = document.querySelector(`[data-golden="${name}"]`);
  option.closest(".option").querySelector(".option-label").textContent = variant.label;
  option.innerHTML = `<svg viewBox="0 0 210 135" fill="none" aria-hidden="true">${variant.svg}</svg>`;
}
