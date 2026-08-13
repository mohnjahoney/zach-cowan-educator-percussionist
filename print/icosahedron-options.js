const phi = (1 + Math.sqrt(5)) / 2;
const rawVertices = [
  ...[-1, 1].flatMap((y) => [-phi, phi].map((z) => [0, y, z])),
  ...[-1, 1].flatMap((x) => [-phi, phi].map((y) => [x, y, 0])),
  ...[-phi, phi].flatMap((x) => [-1, 1].map((z) => [x, 0, z])),
];

const distanceSquared = (a, b) => a.reduce((sum, value, index) => sum + (value - b[index]) ** 2, 0);
const edgeLengthSquared = Math.min(...rawVertices.flatMap((a, i) => rawVertices.slice(i + 1).map((b) => distanceSquared(a, b))));
const edges = rawVertices.flatMap((a, i) => rawVertices.slice(i + 1).flatMap((b, j) => {
  const jIndex = i + 1 + j;
  return Math.abs(distanceSquared(a, b) - edgeLengthSquared) < 0.001 ? [[i, jIndex]] : [];
}));

function rotate([x, y, z], [rx, ry, rz]) {
  const cx = Math.cos(rx), sx = Math.sin(rx), cy = Math.cos(ry), sy = Math.sin(ry), cz = Math.cos(rz), sz = Math.sin(rz);
  const y1 = y * cx - z * sx, z1 = y * sx + z * cx;
  const x2 = x * cy + z1 * sy, z2 = -x * sy + z1 * cy;
  return [x2 * cz - y1 * sz, x2 * sz + y1 * cz, z2];
}

function makeIcosahedron({ rotation, color, backOpacity = 0.16, frontOpacity = 0.72, size = 1 }) {
  const rotated = rawVertices.map((vertex) => rotate(vertex, rotation));
  const projected = rotated.map(([x, y, z]) => {
    const perspective = 1 / (5.1 - z * 0.22);
    return { x: 105 + x * 50 * perspective * size, y: 73 - y * 50 * perspective * size, z };
  });
  const lineMarkup = edges.map(([a, b]) => {
    const p = projected[a], q = projected[b];
    const opacity = (p.z + q.z) / 2 > 0 ? frontOpacity : backOpacity;
    return `<line x1="${p.x.toFixed(2)}" y1="${p.y.toFixed(2)}" x2="${q.x.toFixed(2)}" y2="${q.y.toFixed(2)}" stroke="${color}" stroke-opacity="${opacity}" stroke-width="1.15"/>`;
  }).join("");
  return `<g fill="none" stroke-linecap="round" stroke-linejoin="round">${lineMarkup}</g>`;
}

const variants = {
  crisp: { rotation: [0.48, -0.62, 0.15], color: "#252b3c", backOpacity: 0.12, frontOpacity: 0.82, size: 1.25 },
  depth: { rotation: [-0.42, 0.76, -0.2], color: "#5d755e", backOpacity: 0.12, frontOpacity: 0.8, size: 1.35 },
  flat: { rotation: [0.1, 1.08, 0.08], color: "#252b3c", backOpacity: 0.3, frontOpacity: 0.62, size: 1.42 },
  soft: { rotation: [0.72, 0.28, -0.34], color: "#9b604d", backOpacity: 0.1, frontOpacity: 0.45, size: 1.5 },
};

const orbitPaths = {
  crisp: '<path d="M5 108C42 22 121 8 203 61" stroke="#9b604d" stroke-opacity=".68" stroke-width="1.8"/><path d="M20 24C84 0 151 32 204 103" stroke="#5d755e" stroke-opacity=".44" stroke-width="1"/><circle cx="203" cy="61" r="2.4" fill="#9b604d"/>',
  depth: '<path d="M0 85C48 8 125 15 208 83" stroke="#9b604d" stroke-opacity=".6" stroke-width="2.1"/><path d="M12 117C77 119 139 60 205 21" stroke="#252b3c" stroke-opacity=".32" stroke-width="1"/><path d="M18 38C83 2 144 27 198 110" stroke="#5d755e" stroke-opacity=".46" stroke-width="1.2"/><circle cx="208" cy="83" r="2.8" fill="#9b604d"/>',
  flat: '<path d="M2 93C54 43 112 39 207 54" stroke="#9b604d" stroke-opacity=".62" stroke-width="1.8"/><path d="M24 17C75 60 135 84 206 112" stroke="#5d755e" stroke-opacity=".38" stroke-width="1"/><circle cx="2" cy="93" r="2.2" fill="#9b604d"/>',
  soft: '<path d="M2 115C58 121 112 73 208 24" stroke="#9b604d" stroke-opacity=".46" stroke-width="2.3"/><path d="M20 31C82 5 137 23 204 92" stroke="#252b3c" stroke-opacity=".2" stroke-width="1"/><path d="M7 78C64 25 126 39 197 112" stroke="#9b604d" stroke-opacity=".28" stroke-width="1.2"/><circle cx="2" cy="115" r="3" fill="#9b604d" fill-opacity=".55"/>',
};

for (const [name, options] of Object.entries(variants)) {
  const target = document.querySelector(`[data-icosahedron="${name}"]`);
  target.innerHTML = `<svg viewBox="0 0 210 135" fill="none" aria-hidden="true">${orbitPaths[name]}${makeIcosahedron(options)}</svg>`;
}
