import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  BOX,
  CENTER,
  OUTER_R,
  STROKE,
  counter,
  PUPIL_R,
  FILL,
  COLOR,
} from "../../src/components/ui/mark-geometry.mjs";

/**
 * Le favicon n'est pas une icône d'application miniature.
 *
 * L'onglet fournit déjà son propre fond. Lui ajouter le carré noir de l'icône PWA crée un
 * cartouche qui reste visible quelle que soit la couleur du chrome du navigateur. Ici la
 * marque est donc rendue seule, sur transparence. Le SVG passe du noir au clair avec la
 * préférence de couleur du navigateur ; l'ICO reste un repli noir sur transparence pour les
 * clients qui ne savent pas utiliser le SVG.
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const ICONS_DIR = join(ROOT, "public", "icons");
const APP_DIR = join(ROOT, "src", "app");
const { rx: COUNTER_RX, ry: COUNTER_RY } = counter(STROKE.icon);

const n = (value) => String(Math.round(value * 1000) / 1000);

function ringPath() {
  return [
    `M ${CENTER} ${CENTER - OUTER_R}`,
    `A ${OUTER_R} ${OUTER_R} 0 1 0 ${CENTER} ${CENTER + OUTER_R}`,
    `A ${OUTER_R} ${OUTER_R} 0 1 0 ${CENTER} ${CENTER - OUTER_R}`,
    "Z",
    `M ${CENTER} ${CENTER - COUNTER_RY}`,
    `A ${COUNTER_RX} ${COUNTER_RY} 0 1 0 ${CENTER} ${CENTER + COUNTER_RY}`,
    `A ${COUNTER_RX} ${COUNTER_RY} 0 1 0 ${CENTER} ${CENTER - COUNTER_RY}`,
    "Z",
  ].join(" ");
}

function faviconSvg(size = 64) {
  const scale = (FILL.favicon * size) / (2 * OUTER_R);
  const transform = `translate(${n(size / 2)} ${n(size / 2)}) scale(${n(scale)}) translate(${n(
    -BOX / 2
  )} ${n(-BOX / 2)})`;

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Curiosity">`,
    "  <style>",
    `    :root { color: ${COLOR.ground}; }`,
    `    @media (prefers-color-scheme: dark) { :root { color: ${COLOR.ink}; } }`,
    "  </style>",
    `  <g transform="${transform}">`,
    `    <path d="${ringPath()}" fill="currentColor" fill-rule="evenodd"/>`,
    `    <circle cx="${CENTER}" cy="${CENTER}" r="${PUPIL_R}" fill="currentColor"/>`,
    "  </g>",
    "</svg>",
    "",
  ].join("\n");
}

function sdCircle(px, py, cx, cy, radius) {
  return Math.hypot(px - cx, py - cy) - radius;
}

function sdEllipse(px, py, cx, cy, rx, ry) {
  const x = px - cx;
  const y = py - cy;
  const f = (x / rx) ** 2 + (y / ry) ** 2 - 1;
  const gradient = 2 * Math.hypot(x / rx ** 2, y / ry ** 2);
  return gradient === 0 ? -Math.min(rx, ry) : f / gradient;
}

function coverage(distance) {
  return Math.min(Math.max(0.5 - distance, 0), 1);
}

function hexToRgb(hex) {
  const value = parseInt(hex.slice(1), 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

/** Raster noir sur alpha : pas de fond à mélanger, donc pas de halo sombre aux contours. */
function rasterTransparent(size) {
  const scale = (FILL.favicon * size) / (2 * OUTER_R);
  const c = size / 2;
  const outerR = OUTER_R * scale;
  const counterRx = COUNTER_RX * scale;
  const counterRy = COUNTER_RY * scale;
  const pupilR = PUPIL_R * scale;
  const ink = hexToRgb(COLOR.ground);
  const pixels = Buffer.alloc(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const sx = x + 0.5;
      const sy = y + 0.5;
      const ring = Math.max(
        sdCircle(sx, sy, c, c, outerR),
        -sdEllipse(sx, sy, c, c, counterRx, counterRy)
      );
      const alpha = coverage(Math.min(ring, sdCircle(sx, sy, c, c, pupilR)));
      const offset = (y * size + x) * 4;
      pixels[offset] = ink.r;
      pixels[offset + 1] = ink.g;
      pixels[offset + 2] = ink.b;
      pixels[offset + 3] = Math.round(alpha * 255);
    }
  }

  return pixels;
}

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let value = 0; value < 256; value++) {
    let crc = value;
    for (let bit = 0; bit < 8; bit++) crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    table[value] = crc;
  }
  return table;
})();

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const typed = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(typed));
  return Buffer.concat([length, typed, checksum]);
}

function encodePng(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const rows = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    const row = y * (size * 4 + 1);
    rgba.copy(rows, row + 1, y * size * 4, (y + 1) * size * 4);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(rows, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function encodeIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(16 * images.length);
  let offset = header.length + directory.length;
  images.forEach(({ size, png }, index) => {
    const entry = index * 16;
    directory[entry] = size;
    directory[entry + 1] = size;
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(png.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });

  return Buffer.concat([header, directory, ...images.map(({ png }) => png)]);
}

function write(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, data);
}

write(join(ICONS_DIR, "favicon.svg"), faviconSvg());
write(
  join(APP_DIR, "favicon.ico"),
  encodeIco(
    [16, 32, 48].map((size) => ({
      size,
      png: encodePng(size, rasterTransparent(size)),
    }))
  )
);

console.log("Favicon Curiosity — transparent et adaptatif.\n");
