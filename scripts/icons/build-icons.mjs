/**
 * Génère tous les fichiers de la marque à partir de `src/components/ui/mark-geometry.mjs`.
 *
 * Pourquoi un générateur plutôt que des fichiers déposés à la main : une marque existe en
 * neuf exemplaires — quatre vecteurs, quatre PNG, un ICO — et un seul d'entre eux se regarde
 * régulièrement. Les huit autres divergent silencieusement dès la première retouche. Ici,
 * corriger une épaisseur dans le fichier de géométrie et relancer `npm run icons` les refait
 * tous.
 *
 * Pourquoi sans dépendance : le dépôt n'embarque aujourd'hui aucun outil d'image, et en
 * ajouter un — plusieurs dizaines de mégaoctets de binaires natifs — pour dessiner un anneau
 * et un disque serait hors de proportion. Node sait déjà compresser (`zlib`), et un PNG comme
 * un ICO ne sont que des conteneurs autour de ces données.
 *
 * Usage : `npm run icons`
 */

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
  GAZE,
  GAZE_SEQUENCES,
  lid,
  FILL,
  CORNER,
  COLOR,
} from "../../src/components/ui/mark-geometry.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const ICONS_DIR = join(ROOT, "public", "icons");
const APP_DIR = join(ROOT, "src", "app");

/* ==========================================================================
 * Rendu — distances signées
 *
 * Chaque forme est décrite par la distance signée d'un point à son bord : négative dedans,
 * positive dehors, nulle sur le contour. Le lissage en découle directement — un pixel dont
 * le centre est à 0,2 px du bord est couvert à 30 % — là où un échantillonnage par grille
 * demanderait des dizaines de tirages par pixel pour un résultat plus bruité.
 * ========================================================================== */

/** Distance signée à un disque. */
function sdCircle(px, py, cx, cy, r) {
  return Math.hypot(px - cx, py - cy) - r;
}

/**
 * Distance signée approchée à une ellipse.
 *
 * La distance exacte à une ellipse demande de résoudre une quartique. L'approximation au
 * premier ordre — la fonction implicite divisée par la norme de son gradient — est exacte sur
 * le contour et son erreur croît avec l'éloignement. Comme elle ne sert qu'à pondérer le
 * pixel qui chevauche le bord, cette erreur est sans effet visible.
 */
function sdEllipse(px, py, cx, cy, rx, ry) {
  const x = px - cx;
  const y = py - cy;
  const f = (x / rx) ** 2 + (y / ry) ** 2 - 1;
  const g = 2 * Math.hypot(x / rx ** 2, y / ry ** 2);
  return g === 0 ? -Math.min(rx, ry) : f / g;
}

/** Distance signée à un carré à coins arrondis, centré, de demi-côté `h` et de rayon `r`. */
function sdRoundedSquare(px, py, cx, cy, h, r) {
  const qx = Math.abs(px - cx) - (h - r);
  const qy = Math.abs(py - cy) - (h - r);
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
}

/**
 * Couverture d'un pixel par une forme, à partir de la distance signée à son centre.
 *
 * La distance est en pixels : un bord qui passe exactement par le centre du pixel le couvre à
 * moitié, et la transition s'étale sur la largeur d'un pixel. C'est l'approximation habituelle,
 * et elle est exacte pour un bord droit.
 */
function coverage(d) {
  return Math.min(Math.max(0.5 - d, 0), 1);
}

/** Les paramètres de dessin d'un support, en pixels du canevas. */
function layout(size, fill, stroke) {
  const k = (fill * size) / (2 * OUTER_R); // unités de la boîte → pixels
  const { rx, ry } = counter(stroke);
  return {
    k,
    c: size / 2,
    outerR: OUTER_R * k,
    counterRx: rx * k,
    counterRy: ry * k,
    pupilR: PUPIL_R * k,
  };
}

/**
 * Rasterise un support en RGBA.
 *
 * L'encre ne touche jamais le bord du fond — le cadrage le garantit —, ce qui autorise une
 * composition simple : l'opacité du pixel est celle du fond, sa couleur est l'interpolation du
 * fond vers l'encre selon la couverture de l'encre. Sans cette garantie il faudrait composer
 * en alpha prémultiplié pour éviter un liseré noir sur les coins arrondis.
 */
function raster(size, { fill, corner }) {
  const L = layout(size, fill, STROKE.icon);
  const px = Buffer.alloc(size * size * 4);
  const g = hexToRgb(COLOR.ground);
  const ink = hexToRgb(COLOR.ink);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const sx = x + 0.5;
      const sy = y + 0.5;

      // L'anneau est le disque extérieur privé de sa contre-forme ; la pupille s'y ajoute.
      const dRing = Math.max(
        sdCircle(sx, sy, L.c, L.c, L.outerR),
        -sdEllipse(sx, sy, L.c, L.c, L.counterRx, L.counterRy)
      );
      const inkCov = coverage(Math.min(dRing, sdCircle(sx, sy, L.c, L.c, L.pupilR)));

      const groundCov =
        corner === null
          ? 1
          : coverage(sdRoundedSquare(sx, sy, L.c, L.c, size / 2, corner * size));

      const i = (y * size + x) * 4;
      px[i] = Math.round(g.r + (ink.r - g.r) * inkCov);
      px[i + 1] = Math.round(g.g + (ink.g - g.g) * inkCov);
      px[i + 2] = Math.round(g.b + (ink.b - g.b) * inkCov);
      px[i + 3] = Math.round(groundCov * 255);
    }
  }
  return px;
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

/* ==========================================================================
 * PNG
 * ========================================================================== */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const typed = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typed));
  return Buffer.concat([length, typed, crc]);
}

/** Encode un buffer RGBA en PNG 8 bits par canal, sans entrelacement. */
function encodePng(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // profondeur
  ihdr[9] = 6; // RGBA
  // Octets 10 à 12 : compression, filtrage et entrelacement standards, tous à zéro.

  // Un octet de filtre par ligne, laissé à zéro : les aplats et les dégradés de lissage de ces
  // icônes se compriment déjà bien, et un filtre par ligne n'y gagnerait rien de mesurable
  // pour un code sensiblement plus long.
  const rows = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    const at = y * (size * 4 + 1);
    rows[at] = 0;
    rgba.copy(rows, at + 1, y * size * 4, (y + 1) * size * 4);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(rows, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ==========================================================================
 * ICO
 *
 * Un ICO n'est qu'un index suivi d'images. Depuis Internet Explorer 11, chaque entrée peut
 * être un PNG complet plutôt qu'un bitmap : on réutilise donc l'encodeur ci-dessus au lieu
 * d'écrire un second chemin de rendu pour le format DIB.
 * ========================================================================== */

function encodeIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // réservé
  header.writeUInt16LE(1, 2); // type : icône
  header.writeUInt16LE(images.length, 4);

  const directory = Buffer.alloc(16 * images.length);
  let offset = header.length + directory.length;

  images.forEach(({ size, png }, i) => {
    const at = i * 16;
    directory[at] = size >= 256 ? 0 : size; // 0 signifie 256
    directory[at + 1] = size >= 256 ? 0 : size;
    directory[at + 2] = 0; // palette
    directory[at + 3] = 0; // réservé
    directory.writeUInt16LE(1, at + 4); // plans
    directory.writeUInt16LE(32, at + 6); // bits par pixel
    directory.writeUInt32LE(png.length, at + 8);
    directory.writeUInt32LE(offset, at + 12);
    offset += png.length;
  });

  return Buffer.concat([header, directory, ...images.map((i) => i.png)]);
}

/* ==========================================================================
 * SVG
 * ========================================================================== */

/** Arrondit à trois décimales : un SVG se relit, et `0.1+0.2` ne s'y écrit pas en toutes lettres. */
const n = (v) => String(Math.round(v * 1000) / 1000);

/**
 * Le chemin de l'anneau : le cercle extérieur, puis la contre-forme, en règle « evenodd ».
 *
 * Deux sous-chemins et une règle de remplissage plutôt qu'un cercle tracé, parce que le tracé
 * du SVG est d'épaisseur constante et que cet anneau, précisément, ne l'est pas.
 */
export function ringPath(stroke) {
  const { rx, ry } = counter(stroke);
  const outer = [
    `M ${n(CENTER)} ${n(CENTER - OUTER_R)}`,
    `A ${n(OUTER_R)} ${n(OUTER_R)} 0 1 0 ${n(CENTER)} ${n(CENTER + OUTER_R)}`,
    `A ${n(OUTER_R)} ${n(OUTER_R)} 0 1 0 ${n(CENTER)} ${n(CENTER - OUTER_R)}`,
    `Z`,
  ].join(" ");
  const inner = [
    `M ${n(CENTER)} ${n(CENTER - ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(CENTER)} ${n(CENTER + ry)}`,
    `A ${n(rx)} ${n(ry)} 0 1 0 ${n(CENTER)} ${n(CENTER - ry)}`,
    `Z`,
  ].join(" ");
  return `${outer} ${inner}`;
}

/** La marque, dans un `<g>` positionné et mis à l'échelle sur le canevas demandé. */
function markGroup({ size, fill, stroke, gaze = GAZE.rest, animated = false }) {
  const k = (fill * size) / (2 * OUTER_R);
  const c = size / 2;
  const lidShape = lid(stroke);
  const t = `translate(${n(c)} ${n(c)}) scale(${n(k)}) translate(${n(-BOX / 2)} ${n(-BOX / 2)})`;
  const pupil = animated
    ? `    <circle class="pupil" cx="${n(CENTER)}" cy="${n(CENTER)}" r="${n(PUPIL_R)}" fill="${COLOR.ink}"/>`
    : `    <circle cx="${n(CENTER + gaze[0])}" cy="${n(CENTER + gaze[1])}" r="${n(PUPIL_R)}" fill="${COLOR.ink}"/>`;

  /*
   * La paupière n'existe que sur le fichier animé : sur un dessin arrêté, l'œil est ouvert, et
   * une ellipse relevée hors de sa découpe serait un élément que personne ne voit jamais.
   *
   * La découpe est portée par le groupe et le déplacement par l'ellipse. Sur le même élément,
   * la découpe suivrait le déplacement et ne découperait plus rien — c'est le même motif que
   * dans `Mark.tsx`, pour la même raison.
   */
  const eyelid = animated
    ? [
        `    <clipPath id="counter">`,
        `      <ellipse cx="${n(CENTER)}" cy="${n(CENTER)}" rx="${n(lidShape.clip.rx)}" ry="${n(lidShape.clip.ry)}"/>`,
        `    </clipPath>`,
        `    <g clip-path="url(#counter)">`,
        `      <path class="lid" d="${lidShape.path}" fill="${COLOR.ink}"/>`,
        `    </g>`,
      ]
    : [];

  return [
    `  <g transform="${t}">`,
    `    <path d="${ringPath(stroke)}" fill="${COLOR.ink}" fill-rule="evenodd"/>`,
    pupil,
    ...eyelid,
    `  </g>`,
  ].join("\n");
}

function svgDocument({ size, body }) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Curiosity">`,
    body,
    `</svg>`,
    ``,
  ].join("\n");
}

function groundRect(size, corner) {
  const r = corner === null ? "" : ` rx="${n(corner * size)}"`;
  return `  <rect width="${size}" height="${size}"${r} fill="${COLOR.ground}"/>`;
}

/**
 * La séquence du regard, en CSS, à l'intérieur du fichier.
 *
 * La partition — quelles fixations, quels clignements, à quel pourcentage — vient de
 * `mark-geometry.mjs` et n'est pas réécrite ici : deux copies d'un rythme divergent à la
 * première retouche, et ce fichier-ci est le seul des neuf que personne ne rouvre.
 *
 * Une saccade dure exactement la durée d'un retour à l'appui — 144 ms —, une fixation de 240 à
 * 264, et la fermeture d'une paupière 108. Ce sont les ordres de grandeur du regard humain, et
 * c'est cette alternance saut/arrêt, bien plus que l'amplitude, qui fait qu'un point se lit
 * comme un œil.
 *
 * **C'est la partition d'ouverture qui est gravée ici**, `scanning` — celle du O du nom. Ce
 * fichier montre la marque, et la marque se présente sur l'écran d'ouverture ; `waiting` est le
 * regard d'un titre d'écran, il n'a rien à dire sur une page de dépôt.
 *
 * **L'animation ne joue qu'une fois, et c'est une décision, pas un oubli.** Dans
 * l'application, la séquence se relance après une pause aléatoire, parce qu'elle y occupe un
 * écran de présentation qu'on regarde. Ici, le fichier sert un README et une page de dépôt :
 * une image qui boucle sur une page qu'on défile est un mouvement permanent, c'est-à-dire ce
 * que le produit s'interdit partout ailleurs. La marque se présente une fois, puis se repose.
 *
 * En mouvement réduit, l'état affiché est directement l'état final, qui est aussi l'état de
 * départ : pupille au centre, paupière relevée. La marque ne perd rien à ne pas bouger.
 */
function sequenceStyle(stroke) {
  const step = ([dx, dy]) => `translate(${n(dx)}px, ${n(dy)}px)`;

  const track = (name, score, positions) => [
    `    @keyframes ${name} {`,
    ...score.map(
      ({ position, from, to }) =>
        `      ${from}%, ${to}% { transform: ${step(positions[position])}; }`
    ),
    `    }`,
  ];

  const lidPositions = lid(stroke);
  const { durationMs, gaze, blink } = GAZE_SEQUENCES.scanning;

  return [
    `  <style>`,
    `    .pupil, .lid { transform-box: view-box; transform-origin: center; }`,
    `    .lid { transform: ${step(lidPositions.open)}; }`,
    `    @media (prefers-reduced-motion: no-preference) {`,
    `      .pupil { animation: gaze ${durationMs}ms cubic-bezier(0.23, 1, 0.32, 1) both; }`,
    `      .lid { animation: blink ${durationMs}ms cubic-bezier(0.23, 1, 0.32, 1) both; }`,
    `    }`,
    ...track("gaze", gaze, GAZE),
    ...track("blink", blink, lidPositions),
    `  </style>`,
  ].join("\n");
}

/* ==========================================================================
 * Écriture
 * ========================================================================== */

function write(path, data) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, data);
  const size = typeof data === "string" ? Buffer.byteLength(data) : data.length;
  console.log(`  ${path.slice(ROOT.length + 1).padEnd(40)} ${(size / 1024).toFixed(1)} ko`);
}

const APP_FRAMING = { fill: FILL.app, corner: CORNER.app };
const SQUARE_FRAMING = { fill: FILL.app, corner: null };
const MASKABLE_FRAMING = { fill: FILL.maskable, corner: null };
const FAVICON_FRAMING = { fill: FILL.favicon, corner: CORNER.favicon };

console.log("Marque Curiosity — génération\n");

// --- Vecteurs ---------------------------------------------------------------

write(
  join(ICONS_DIR, "master.svg"),
  svgDocument({
    size: 512,
    body: [
      groundRect(512, CORNER.app),
      markGroup({ size: 512, fill: FILL.app, stroke: STROKE.icon }),
    ].join("\n"),
  })
);

write(
  join(ICONS_DIR, "icon.svg"),
  svgDocument({
    size: 64,
    body: [
      groundRect(64, CORNER.favicon),
      markGroup({ size: 64, fill: FILL.favicon, stroke: STROKE.icon }),
    ].join("\n"),
  })
);

// La marque nue, sans fond : README, page de dépôt, tout support qui a déjà le sien.
write(
  join(ICONS_DIR, "mark.svg"),
  svgDocument({ size: 128, body: markGroup({ size: 128, fill: 0.94, stroke: STROKE.icon }) })
);

write(
  join(ICONS_DIR, "mark-animated.svg"),
  svgDocument({
    size: 128,
    body: [
      sequenceStyle(STROKE.icon),
      markGroup({ size: 128, fill: 0.94, stroke: STROKE.icon, animated: true }),
    ].join("\n"),
  })
);

// --- Rasters ----------------------------------------------------------------

const rasters = [
  ["icon-192.png", 192, APP_FRAMING],
  ["icon-512.png", 512, APP_FRAMING],
  ["icon-maskable-512.png", 512, MASKABLE_FRAMING],
  ["apple-touch-icon.png", 180, SQUARE_FRAMING],
];

for (const [name, size, framing] of rasters) {
  write(join(ICONS_DIR, name), encodePng(size, raster(size, framing)));
}

// --- Favicon ----------------------------------------------------------------

// Trois tailles : 16 pour l'onglet, 32 pour les affichages à densité double et la barre de
// favoris, 48 pour le raccourci de bureau de Windows. Au-delà, `icon.svg` prend le relais.
write(
  join(APP_DIR, "favicon.ico"),
  encodeIco(
    [16, 32, 48].map((size) => ({
      size,
      png: encodePng(size, raster(size, FAVICON_FRAMING)),
    }))
  )
);

console.log(
  `\n${GAZE_SEQUENCES.scanning.gaze.length - 1} saccades, ${
    GAZE_SEQUENCES.scanning.blink.filter((s) => s.position === "closed").length
  } clignements, repos au centre. Terminé.`
);
