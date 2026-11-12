// Añade "comida" extra (pequeños puntos dorados/verdes que laten) a los SVG de la serpiente.
// Uso: node .github/scripts/snake-food.mjs <archivo.svg> <color> <proporción>
import { readFileSync, writeFileSync } from 'node:fs';

const rand = (x, y) => {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263)) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};

const addFood = (file, color, ratio) => {
  let svg = readFileSync(file, 'utf8');
  const re = /<rect class="c" x="(\d+)" y="(\d+)" rx="2" ry="2"\/>/g;
  let out = '';
  let last = 0;
  let m;
  let count = 0;

  while ((m = re.exec(svg)) !== null) {
    const x = Number(m[1]);
    const y = Number(m[2]);
    if (rand(x, y) > 1 - ratio) {
      out += svg.slice(last, m.index);
      out += `<circle class="food" cx="${x + 6}" cy="${y + 6}" r="2.6" fill="${color}"/>`;
      last = m.index + m[0].length;
      count += 1;
    }
  }
  out += svg.slice(last);

  const style = `<style>.food{fill:${color};transform-box:fill-box;transform-origin:center;animation:foodpulse 2.6s ease-in-out infinite}@keyframes foodpulse{0%,100%{opacity:.3;transform:scale(.75)}50%{opacity:1;transform:scale(1.2)}}</style>`;
  out = out.replace('</svg>', `${style}</svg>`);

  writeFileSync(file, out);
  console.log(`${file}: ${count} piezas de comida`);
};

const [file, color = '#E3C98F', ratio = '0.3'] = process.argv.slice(2);
if (!file) {
  console.error('uso: node snake-food.mjs <archivo.svg> <color> <proporción>');
  process.exit(1);
}
addFood(file, color, Number(ratio));
