import { readFileSync } from "node:fs";
import { expect } from "vitest";

/**
 * La feuille de style relue depuis les tests, et la règle qu'on y découpe.
 *
 * Deux dessins du produit — le regard de la marque, les icônes de la navigation — sont écrits
 * moitié en géométrie, moitié en images clés : les positions viennent du code, les instants
 * sont dans le CSS. C'est ce partage qui évite d'avoir deux définitions d'une même mesure, et
 * c'est lui qui crée la seule défaillance possible du montage — un pourcentage retouché d'un
 * côté et pas de l'autre, une propriété personnalisée émise et jamais lue. À l'écran, cela ne
 * produit pas d'erreur : cela produit une séquence légèrement fausse, ou une séquence qui
 * tourne sans que rien ne bouge.
 *
 * D'où cette relecture. Elle est ici, et non recopiée dans chacun des deux tests, parce qu'un
 * découpeur d'accolades dupliqué est exactement ce que le produit s'interdit ailleurs.
 */
export const GLOBALS_CSS = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");

/** Le bloc d'une règle, accolades appariées : lire jusqu'à la fin du fichier lirait tout le reste. */
export function cssBlock(opening: string, source = GLOBALS_CSS) {
  const start = source.indexOf(opening);
  expect(start, `règle « ${opening} » absente de globals.css`).toBeGreaterThan(-1);
  let depth = 0;
  for (let i = source.indexOf("{", start); i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}" && --depth === 0) return source.slice(start, i + 1);
  }
  throw new Error(`règle « ${opening} » non refermée`);
}
