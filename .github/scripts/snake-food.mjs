// Añade "comida" a los SVG de la serpiente: las piezas amarillas se organizan
// formando la palabra CODE y el resto se dispersa como migas.
// Uso: node .github/scripts/snake-food.mjs <archivo.svg> <color> <proporción>
import { readFileSync, writeFileSync } from 'node:fs';

const FONT = {
  C: ['XXXXX', 'X....', 'X....', 'X....', 'X....', 'X....', 'XXXXX'],
  O: ['.XXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', '.XXX.'],
  D: ['XXXX.', 'X...X', 'X...X', 'X...X', 'X...X', 'X...X', 'XXXX.'],
  E: ['XXXXX', 'X....', 'X....', 'XXXX.', 'X....', 'X....', 'XXXXX'],
};

const rand = (x, y) => {
  let h = (Math.imul(x, 0x27d4eb2d) ^ Math.imul(y, 0x165667b1)) >>> 0;
  h ^= h >>> 15;
  h = Math.imul(h, 0x2c1b3c6d) >>> 0;
  h ^= h >>> 12;
  h = Math.imul(h, 0x297a2d39) >>> 0;
  h ^= h >>> 15;
  return (h >>> 0) / 4294967296;
};

const wordBitmap = (word) => {
  const rows = FONT[word[0]].length;
  const grid = Array.from({ length: rows }, () => []);
  word.split('').forEach((letter, li) => {
    const glyph = FONT[letter];
    for (let r = 0; r < rows; r += 1) grid[r].push(...glyph[r]);
    if (li < word.length - 1) {
      for (let r = 0; r < rows; r += 1) grid[r].push('.');
    }
  });
  return grid;
};

const addFood = (file, color, ratio) => {
  let svg = readFileSync(file, 'utf8');

  // fondo oscuro para que la serpiente se lea igual en tema claro y oscuro
  const vb = svg.match(/viewBox="([-\d.\s]+)"/);
  if (vb) {
    const [vx, vy, vw, vh] = vb[1].trim().split(/\s+/).map(Number);
    const bg = `<rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" rx="12" fill="#0A0E14"/>` +
      `<rect x="${vx + 0.75}" y="${vy + 0.75}" width="${vw - 1.5}" height="${vh - 1.5}" rx="11.5" fill="none" stroke="#27313D" stroke-opacity="0.7"/>` +
      `<rect x="${vx + 4}" y="${vy + 4}" width="${vw - 8}" height="${vh - 8}" rx="10" fill="none" stroke="#E3C98F" stroke-opacity="0.14"/>`;
    const endTag = svg.indexOf('>', svg.indexOf('<svg')) + 1;
    svg = svg.slice(0, endTag) + bg + svg.slice(endTag);
  }

  // rejilla completa de celdas (con o sin clase propia)
  const cells = [];
  const cellRe = /<rect class="c[^"]*" x="(\d+)" y="(\d+)" rx="2" ry="2"\/>/g;
  let m;
  while ((m = cellRe.exec(svg)) !== null) {
    cells.push({ x: Number(m[1]), y: Number(m[2]) });
  }
  if (!cells.length) {
    console.error(`${file}: no se encontró la rejilla`);
    process.exit(1);
  }

  const minX = Math.min(...cells.map((c) => c.x));
  const minY = Math.min(...cells.map((c) => c.y));
  const maxX = Math.max(...cells.map((c) => c.x));
  const maxY = Math.max(...cells.map((c) => c.y));
  const uniqueX = [...new Set(cells.map((c) => c.x))].sort((a, b) => a - b);
  const gaps = uniqueX.slice(1).map((x, i) => x - uniqueX[i]).filter((g) => g > 0);
  const step = gaps.length ? Math.min(...gaps) : 16;
  const cols = Math.round((maxX - minX) / step) + 1;
  const rows = Math.round((maxY - minY) / step) + 1;
  const grid = Array.from({ length: rows }, () => Array(cols).fill(null));
  for (const c of cells) {
    grid[Math.round((c.y - minY) / step)][Math.round((c.x - minX) / step)] = c;
  }

  // palabra CODE centrada en la rejilla
  const bitmap = wordBitmap('CODE');
  const wordCols = bitmap[0].length;
  const offset = Math.max(0, Math.floor((cols - wordCols) / 2));
  const wordCells = new Set();
  const word = [];
  bitmap.forEach((line, r) => {
    line.forEach((ch, c) => {
      if (ch !== 'X') return;
      const cell = grid[r] && grid[r][offset + c];
      if (!cell) return;
      wordCells.add(`${cell.x}:${cell.y}`);
      word.push(cell);
    });
  });

  // migas sueltas en el resto del tablero
  const crumbs = [];
  for (const c of cells) {
    if (wordCells.has(`${c.x}:${c.y}`)) continue;
    if (rand(c.x, c.y) > 1 - ratio) crumbs.push(c);
  }

  const pellet = (c, r) => `<circle class="food" cx="${c.x + 6}" cy="${c.y + 6}" r="${r}" fill="${color}"/>`;
  const food = `<g class="food-layer">${word.map((c) => pellet(c, 3.4)).join('')}${crumbs.map((c) => pellet(c, 2.4)).join('')}</g>`;

  // la comida va por debajo de la serpiente
  const anchor = svg.indexOf('<rect class="u');
  svg = (anchor > 0 ? svg.slice(0, anchor) + food + svg.slice(anchor) : svg.replace('</svg>', `${food}</svg>`));

  const style = `<style>.food{fill:${color};transform-box:fill-box;transform-origin:center;animation:foodpulse 2.6s ease-in-out infinite}@keyframes foodpulse{0%,100%{opacity:.3;transform:scale(.75)}50%{opacity:1;transform:scale(1.2)}}</style>`;
  svg = svg.replace('</svg>', `${style}</svg>`);

  writeFileSync(file, svg);
  console.log(`${file}: ${word.length} piezas en CODE + ${crumbs.length} migas`);
};

const [file, color = '#E3C98F', ratio = '0.12'] = process.argv.slice(2);
if (!file) {
  console.error('uso: node snake-food.mjs <archivo.svg> <color> <proporción>');
  process.exit(1);
}
addFood(file, color, Number(ratio));
