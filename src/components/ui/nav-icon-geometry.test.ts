import { describe, expect, it } from "vitest";

import {
  BOOK,
  BOX,
  CENTER,
  COVER_SHIFT,
  NEEDLE,
  NEEDLE_SWING,
  RING_R,
  leaf,
  needleCorners,
  tiltOf,
} from "@/components/ui/nav-icon-geometry";
import { GLOBALS_CSS, cssBlock } from "@/test/globals-css";

/**
 * Ce que ces tests protègent.
 *
 * Ces deux dessins ne sont regardés qu'en 20 px, dans une barre, une fraction de seconde. Un
 * défaut de leur géométrie ne se voit pas : il se *sent*, sous la forme d'un livre qui se
 * ferme un peu de travers ou d'une aiguille qui pivote à côté de son axe. Personne ne saurait
 * dire ce qui cloche, et personne ne le corrigerait.
 *
 * Trois propriétés portent tout le mouvement, et ce sont elles qui sont tenues ici : la
 * symétrie des deux plats, le centrage de l'aiguille, et l'accord entre les positions écrites
 * en TypeScript et les instants écrits en CSS.
 */

type Point = [number, number];

/**
 * Les points d'un chemin, dans l'ordre du tracé — ancres et points de contrôle.
 *
 * La grammaire lue est celle que `leaf` produit, et rien de plus : un déplacement, des
 * segments horizontaux et verticaux, des arcs. Un analyseur complet serait une seconde
 * implémentation du SVG ; celui-ci ne sert qu'à rendre comparables deux chemins dont l'un doit
 * être l'image de l'autre.
 *
 * Les points de contrôle des courbes en font partie, s'il en revient un jour : deux plats dont
 * seules les ancres seraient symétriques auraient la même silhouette et deux courbures
 * différentes.
 */
function anchors(path: string): Point[] {
  const tokens = path.match(/[MLHVAQ]|-?[\d.]+/g) ?? [];
  const points: Point[] = [];
  const at = (): Point => [Number(tokens[cursor++]), Number(tokens[cursor++])];
  let cursor = 0;
  let [x, y] = [0, 0];

  while (cursor < tokens.length) {
    const command = tokens[cursor++];
    if (command === "M" || command === "L") [x, y] = at();
    else if (command === "H") x = Number(tokens[cursor++]);
    else if (command === "V") y = Number(tokens[cursor++]);
    else if (command === "Q") {
      points.push(at());
      [x, y] = at();
    } else if (command === "A") {
      cursor += 5; // rayons, rotation, grand arc, sens
      [x, y] = at();
    }
    points.push([x, y]);
  }

  return points;
}

/** Le sens de parcours de chaque arc — ce qui distingue un coin arrondi d'une encoche. */
const sweeps = (path: string) => [...path.matchAll(/A[\d.]+ [\d.]+ 0 0 ([01])/g)].map((m) => m[1]);

describe("le livre", () => {
  const left = leaf(-1);
  const right = leaf(1);

  it("fait des deux plats l'image l'un de l'autre dans le miroir du dos", () => {
    /*
     * La propriété dont dépend toute l'animation. Le plat de gauche se referme par un `scaleX`
     * de −1 autour du dos, c'est-à-dire par ce miroir exactement : s'il n'est pas exact, le
     * plat rabattu ne retombe pas sur l'autre, et le livre fermé est un rectangle doublé d'un
     * second, décalé. C'est le défaut le plus visible que ce dessin puisse avoir, et le plus
     * difficile à rattraper autrement qu'en le corrigeant ici.
     */
    const mirrored = anchors(left).map(([x, y]): Point => [2 * CENTER - x, y]);
    for (const [index, point] of anchors(right).entries()) {
      expect(mirrored[index][0]).toBeCloseTo(point[0], 6);
      expect(mirrored[index][1]).toBeCloseTo(point[1], 6);
    }
  });

  it("tourne les arcs des deux plats en sens contraires", () => {
    // Un miroir renverse le sens de parcours. Deux plats qui tourneraient leurs coins dans le
    // même sens seraient symétriques de position et pas de forme : les arrondis de l'un
    // seraient les encoches de l'autre.
    expect(sweeps(left).every((sweep) => sweep === "0")).toBe(true);
    expect(sweeps(right).every((sweep) => sweep === "1")).toBe(true);
  });

  it("garde le plat rectangulaire — un livre fermé n'est pas un trapèze", () => {
    /*
     * La correction qui a rendu ce dessin juste, et celle qu'il faut empêcher de repartir.
     *
     * L'inclinaison des pages vers la reliure avait d'abord été écrite dans le tracé : le livre
     * fermé héritait donc d'un plat cisaillé, c'est-à-dire d'une forme qui n'est celle d'aucun
     * livre. Elle appartient à l'ouverture, pas au plat, et elle est aujourd'hui un
     * `skewY` que l'état fermé ramène à zéro.
     *
     * Un rectangle se reconnaît à ceci : il est symétrique par rapport à sa médiane
     * horizontale. Un trapèze ne l'est pas, quelle que soit la manière dont on l'écrit.
     */
    for (const plat of [left, right]) {
      const points = anchors(plat);
      const middle = (BOOK.top + BOOK.bottom) / 2;
      for (const [x, y] of points) {
        const reflected = points.some(
          ([ox, oy]) => Math.abs(ox - x) < 1e-9 && Math.abs(oy - (2 * middle - y)) < 1e-9
        );
        expect(reflected, `le point (${x}, ${y}) n'a pas son symétrique`).toBe(true);
      }
    }
  });

  it("trace le plat en entier, dos compris", () => {
    // Le dos ne joint plus les deux plats : il s'en va former la reliure. Un plat qui compterait
    // sur lui pour fermer son contour s'ouvrirait donc en même temps que le livre.
    for (const plat of [left, right]) {
      expect(plat.endsWith("Z")).toBe(true);
      const points = anchors(plat);
      expect(points.at(0)).toEqual([CENTER, BOOK.top]);
      expect(points.at(-1)).toEqual([CENTER, BOOK.bottom]);
    }
  });

  it("incline les deux plats en sens contraires, et sans excès", () => {
    // L'inclinaison est ce qui fait le livre *ouvert* : les pages plongent vers la reliure. Deux
    // plats inclinés du même côté donneraient un livre gauchi ; au-delà d'une douzaine de
    // degrés, la silhouette cesse d'être un volume ouvert pour devenir un oiseau.
    expect(tiltOf(-1)).toBe(`${BOOK.tilt}deg`);
    expect(tiltOf(1)).toBe(`${-BOOK.tilt}deg`);
    expect(BOOK.tilt).toBeGreaterThan(4);
    expect(BOOK.tilt).toBeLessThan(12);
  });

  it("garde la reliure visible sur la couverture", () => {
    // Le seul trait qui distingue le livre fermé d'un rectangle. Il doit rester à l'intérieur du
    // plat — dehors, il se lirait comme un objet posé à côté — et assez loin du bord pour ne pas
    // s'y coller à 20 px, où une unité vaut moins d'un pixel.
    expect(BOOK.band).toBeGreaterThan(2);
    expect(BOOK.band).toBeLessThan(BOOK.half / 3);
  });

  it("centre le livre dans la boîte, ouvert comme fermé", () => {
    /*
     * Ouvert, le livre occupe les deux plats ; fermé, il n'occupe que celui de droite, déplacé
     * de `COVER_SHIFT`. Les deux doivent tomber au milieu de la boîte, sans quoi l'entrée
     * paraît pencher d'un côté quand elle s'éteint — un défaut qu'on attribuerait à la barre
     * plutôt qu'à l'icône.
     */
    const open = anchors(left).concat(anchors(right)).map(([x]) => x);
    expect((Math.min(...open) + Math.max(...open)) / 2).toBeCloseTo(CENTER, 6);

    const closed = anchors(right).map(([x]) => x + COVER_SHIFT);
    expect((Math.min(...closed) + Math.max(...closed)) / 2).toBeCloseTo(CENTER, 6);
  });

  it("laisse au trait la marge dont il a besoin dans la boîte", () => {
    // Le tracé est centré sur le chemin : la moitié de la graisse déborde. À la graisse active,
    // un plat qui toucherait le bord de la boîte serait rogné d'un demi-pixel sur les écrans
    // qui n'arrondissent pas comme les autres.
    const points = anchors(left).concat(anchors(right));
    for (const [x, y] of points) {
      expect(Math.min(x, y)).toBeGreaterThanOrEqual(1);
      expect(Math.max(x, y)).toBeLessThanOrEqual(BOX - 1);
    }
  });
});

describe("la boussole", () => {
  const corners = needleCorners();

  it("garde l'aiguille de l'ensemble d'icônes", () => {
    /*
     * L'icône reste celle qu'on connaît : la boussole éteinte est exactement celle d'avant.
     * Les quatre sommets sont ceux du dessin de `lucide-react`, arrondis au centième comme
     * l'ensemble les publie. Les redériver n'avait qu'un but — connaître le centre —, pas en
     * dessiner une nouvelle.
     */
    const reference = [
      [16.24, 7.76],
      [14.12, 14.12],
      [7.76, 16.24],
      [9.88, 9.88],
    ];
    for (const [index, [x, y]] of reference.entries()) {
      expect(corners[index].at[0]).toBeCloseTo(x, 1);
      expect(corners[index].at[1]).toBeCloseTo(y, 1);
    }
  });

  it("fait tourner l'aiguille sur son propre centre", () => {
    // La rotation se fait sur le centre du cadran. Si l'aiguille n'y est pas centrée, elle ne
    // pivote pas : elle décrit un petit cercle, et l'icône se met à trembler.
    const middle = corners.reduce(
      (sum, { at }) => [sum[0] + at[0] / corners.length, sum[1] + at[1] / corners.length],
      [0, 0]
    );
    expect(middle[0]).toBeCloseTo(CENTER, 6);
    expect(middle[1]).toBeCloseTo(CENTER, 6);
  });

  it("garde l'aiguille dans le cadran à toutes les positions de la partition", () => {
    // Une aiguille tourne à l'intérieur de son boîtier. Comme elle est centrée, sa distance au
    // centre ne dépend pas de l'angle : il suffit que la plus grande tienne sous le rayon du
    // cadran, graisses comprises.
    const reach = Math.max(...corners.map(({ at }) => Math.hypot(at[0] - CENTER, at[1] - CENTER)));
    expect(reach).toBeLessThan(RING_R - 2);
  });
});

describe("la partition de l'aiguille", () => {
  it("amortit, alterne, et finit au nord", () => {
    /*
     * Ce qui fait lire « elle a cherché puis trouvé » : des écarts qui diminuent, de part et
     * d'autre du nord, et un dernier qui est le nord. Trois mouvements sont le minimum en deçà
     * duquel la séquence se lit comme un simple aller-retour ; la partition en compte quatre.
     */
    expect(NEEDLE_SWING.length).toBeGreaterThanOrEqual(4);
    expect(NEEDLE_SWING.at(-1)).toBe(0);

    for (const [index, angle] of NEEDLE_SWING.slice(1).entries()) {
      const previous = NEEDLE_SWING[index];
      expect(Math.abs(angle), `écart n° ${index + 2}`).toBeLessThan(Math.abs(previous));
      if (angle !== 0) expect(Math.sign(angle)).toBe(-Math.sign(previous));
    }
  });

  it("oscille autour d'une direction plutôt que de faire le tour du cadran", () => {
    // La borne du brief, et une borne de lisibilité : au-delà du quart de tour, l'aiguille ne
    // corrige plus un cap, elle cherche partout — et à 20 px, elle scintille.
    for (const angle of NEEDLE_SWING) expect(Math.abs(angle)).toBeLessThan(90);
  });

  it("garde le dessin plus lisible que sa propre pointe", () => {
    // Le premier dépassement doit se voir : il déplace la pointe de deux fois le sinus de son
    // demi-angle. En deçà d'un pixel rendu, le mouvement existe et ne se perçoit pas.
    const rendered = 20 / BOX;
    const travel = 2 * NEEDLE.long * Math.sin((Math.abs(NEEDLE_SWING[0]) * Math.PI) / 360);
    expect(travel * rendered).toBeGreaterThan(1);
  });
});

describe("cohérence entre les icônes et la feuille de style", () => {
  /**
   * Les instants de la partition, relus dans le CSS.
   *
   * Le composant émet une propriété personnalisée par position, la feuille de style les place
   * dans le temps. C'est ce partage qui autorise à écrire les images clés à la main — et c'est
   * lui qui crée la défaillance muette : une position émise que personne ne lit, et l'aiguille
   * saute une étape sans que rien ne le signale.
   */
  const played = [
    ...cssBlock("@keyframes compass-swing").matchAll(
      /([\d.]+)%\s*\{\s*rotate:\s*(var\(--swing-(\d+)\)|0deg)/g
    ),
  ].map(([, at, , index]) => ({ at: Number(at), swing: index ? Number(index) : 0 }));

  it("joue toutes les positions de la partition, et rien d'autre", () => {
    expect(played.map(({ swing }) => swing)).toEqual([
      0,
      ...NEEDLE_SWING.map((_, index) => index + 1),
    ]);
  });

  it("part du repos et va jusqu'au bout de la durée", () => {
    // Une partition qui ne part pas de 0 % laisse le premier élan au hasard de l'interpolation ;
    // une qui ne va pas à 100 % laisse l'aiguille se reposer avant la fin de l'animation.
    expect(played.at(0)?.at).toBe(0);
    expect(played.at(-1)?.at).toBe(100);
  });

  it("avance dans le temps, et de moins en moins loin", () => {
    // L'amortissement est dans les écarts *et* dans les instants : chaque mouvement est plus
    // court que le précédent, parce qu'il a moins de chemin à faire. Un temps qui s'allongerait
    // donnerait une aiguille qui flotte au lieu de se poser.
    const steps = played.slice(1).map(({ at }, index) => at - played[index].at);
    for (const [index, step] of steps.entries()) {
      expect(step, `temps n° ${index + 1}`).toBeGreaterThan(0);
      if (index > 0) expect(step).toBeLessThanOrEqual(steps[index - 1]);
    }
  });

  it("ne déplace rien d'autre que la rotation de l'aiguille", () => {
    // La règle du produit : les propriétés animées sont énumérées, et celles-ci ne provoquent
    // pas de remise en page.
    const declarations = [
      ...cssBlock("@keyframes compass-swing").matchAll(/^\s*([a-z-]+)\s*:/gm),
    ].map(([, property]) => property);
    expect(new Set(declarations)).toEqual(new Set(["rotate"]));
  });

  it("lit les mesures du livre là où elles sont écrites", () => {
    // Elles viennent de la géométrie, en propriétés personnalisées. Un jour où le CSS les
    // recopierait, la fermeture se ferait à côté du centre et la reliure à côté du plat dès la
    // première retouche du dessin.
    expect(GLOBALS_CSS).toContain("translate: var(--book-shift)");
    expect(GLOBALS_CSS).toContain("translate: var(--spine-band)");
    expect(GLOBALS_CSS).toContain("transform: skewY(var(--leaf-tilt))");
    expect(GLOBALS_CSS).not.toContain(`translate: ${COVER_SHIFT}px`);
    expect(GLOBALS_CSS).not.toContain(`skewY(${BOOK.tilt}deg)`);
  });

  it("redresse les deux plats quand le livre se referme", () => {
    /*
     * Le point de bascule de tout le dessin : l'inclinaison est portée par l'état ouvert, et
     * l'état fermé la ramène à zéro. Une règle qui l'oublierait rendrait au livre fermé le
     * trapèze dont on vient de le sortir — et le test de rectangularité, lui, ne verrait rien :
     * la faute serait dans la feuille de style, pas dans le tracé.
     */
    expect(GLOBALS_CSS).toMatch(/\[data-state="closed"\] \.nav-leaf \{\s*transform: skewY\(0deg\)/);
  });

  it("n'anime les deux icônes que sur l'état que les composants posent", () => {
    // Une règle qui viserait `.nav-needle` sans le qualifier ferait chercher le nord à une
    // boussole éteinte, et à chaque rendu.
    expect(GLOBALS_CSS).toContain('[data-state="finding"] .nav-needle {');
    expect(GLOBALS_CSS).toContain('[data-state="closed"] .nav-book {');
    expect(GLOBALS_CSS).toContain('[data-state="closed"] .nav-book-cover {');
    expect(GLOBALS_CSS).toContain('[data-state="closed"] .nav-spine {');
  });

  it("garde l'animation de l'aiguille sous condition de mouvement", () => {
    /*
     * Déclarée en `no-preference` plutôt que neutralisée après coup : sans animation,
     * l'aiguille est au nord, ce qui est aussi son repos. Le contrôle porte sur
     * l'enchaînement des trois lignes, parce que c'est le déplacement de la règle *hors* de la
     * condition qui serait la faute — et il ne se verrait pas autrement.
     */
    expect(GLOBALS_CSS).toMatch(
      /@media \(prefers-reduced-motion: no-preference\) \{\s*\[data-state="finding"\] \.nav-needle \{\s*animation: compass-swing var\(--dur-swing\)/
    );
  });
});
