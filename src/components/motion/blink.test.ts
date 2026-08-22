import { describe, expect, it } from "vitest";

import { GLOBALS_CSS, cssBlock } from "@/test/globals-css";

/**
 * Ce que ces tests protègent, et pourquoi ils existent.
 *
 * Le clignement est écrit moitié en machine à états — `Blink.tsx` —, moitié en images clés.
 * Le partage est le même que celui du regard de la marque, et il crée les mêmes défaillances
 * silencieuses : une retouche d'un côté ne produit pas d'erreur de l'autre, elle produit un
 * mouvement légèrement faux, ou un seuil qu'on ne franchit plus.
 *
 * Trois d'entre elles ne se verraient pas en développant, et ce sont celles-ci qui sont
 * contrôlées. La quatrième — le flou lui-même — se voit ; ce qui est vérifié à son sujet est
 * seulement ce qui décide s'il est *total*, parce qu'un flou insuffisant se lit comme un
 * défaut de rendu et non comme une défocalisation.
 */

const RACINE = cssBlock(":root {");

/** La valeur d'un token, telle qu'elle est écrite dans `:root`. */
function token(nom: string): string {
  const trouve = new RegExp(`${nom}:\\s*([^;]+);`).exec(RACINE);
  expect(trouve, `token « ${nom} » absent de :root`).not.toBeNull();
  return trouve![1].trim();
}

const ms = (nom: string) => Number(/^(\d+)ms$/.exec(token(nom))![1]);

/** Les maintiens d'une partition, dans l'ordre : pourcentage, flou, fond. */
function partition(nom: string) {
  const bloc = cssBlock(`@keyframes ${nom} {`);
  return [...bloc.matchAll(/(\d+)%\s*\{([^}]*)\}/g)].map(([, pourcentage, corps]) => ({
    a: Number(pourcentage),
    flou: /backdrop-filter:\s*blur\((.*)\);/.exec(corps)?.[1].trim() ?? "",
    fond: /background-color:\s*([^;]+);/.exec(corps)![1].trim(),
  }));
}

describe("le clignement du seuil", () => {
  /**
   * Première défaillance, et la seule qui soit grave : le voile ne s'anime plus, et le seuil
   * ne se franchit plus du tout.
   *
   * C'est la fin de l'animation qui échange le contenu puis retire le voile. Déclarer ces deux
   * règles en `no-preference` — comme le sont, à raison, toutes les entrées de la feuille —
   * les supprimerait en mouvement réduit : aucune fin ne serait annoncée, et la carte
   * n'arriverait jamais. Le repli de cette préférence est ailleurs, dans `Blink.tsx`, qui ne
   * monte alors aucun voile.
   */
  it("anime le voile sans condition de préférence", () => {
    for (const phase of ["shut", "open"]) {
      const regle = `.blink-veil[data-phase="${phase}"] {`;
      const avant = GLOBALS_CSS.slice(0, GLOBALS_CSS.indexOf(regle));
      // Une règle enfermée dans un bloc conditionnel laisse forcément ce bloc ouvert derrière
      // elle : on compte les accolades plutôt que de chercher une chaîne particulière.
      const ouvertes = (avant.match(/\{/g) ?? []).length - (avant.match(/\}/g) ?? []).length;
      expect(ouvertes, `« ${regle} » est imbriquée dans un bloc`).toBe(0);
      expect(cssBlock(regle)).toContain(`animation: blink-${phase} var(--dur-blink-${phase})`);
    }
  });

  /**
   * Deuxième défaillance : l'ouverture démarre en retard sur le geste qui l'a demandée.
   *
   * Elle arrive d'une seule façon, et c'est la simplification qui se présente d'elle-même —
   * remplacer `blink-open` par `blink-shut` jouée en `reverse`. Une animation inversée inverse
   * aussi ses courbes : les deux sorties douces deviennent des entrées douces, ce que la
   * première règle d'exécution du §7 de `docs/ux-direction.md` interdit. Les deux partitions
   * restent donc écrites en clair, et miroirs l'une de l'autre.
   */
  it("écrit l'ouverture en clair, en miroir de la fermeture", () => {
    expect(GLOBALS_CSS).not.toMatch(/animation:\s*blink-\w+[^;]*reverse/);

    const fermeture = partition("blink-shut");
    const ouverture = partition("blink-open");
    expect(fermeture).toHaveLength(3);
    expect(fermeture[0].a).toBe(0);
    expect(fermeture.at(-1)!.a).toBe(100);
    // La charnière elle-même peut bouger ; ce qui ne peut pas, c'est qu'elle bouge d'un seul
    // côté.
    expect(ouverture.map((m) => m.a)).toEqual(fermeture.map((m) => 100 - m.a).reverse());

    // Mêmes états aux mêmes endroits, lus dans l'autre sens.
    expect(ouverture.map((m) => [m.flou, m.fond])).toEqual(
      [...fermeture].reverse().map((m) => [m.flou, m.fond])
    );
  });

  /**
   * Troisième défaillance : les deux temps se chevauchent, et le mouvement cesse de se lire.
   *
   * L'écran doit être **entièrement** défocalisé avant que le fond ne commence à monter, sans
   * quoi on ne voit plus une accommodation suivie d'une fermeture mais un seul fondu trouble.
   * La charnière est donc l'unique instant où le flou est à son amplitude et le fond encore
   * transparent — c'est ce qui est vérifié ici, et non la valeur 62, qui peut bouger.
   */
  it("défocalise entièrement avant de fermer", () => {
    const [depart, charniere, fin] = partition("blink-shut");

    expect(depart.flou).toBe("0px");
    expect(depart.fond).toBe("transparent");

    expect(charniere.flou).toBe("var(--blur-blink)");
    expect(charniere.fond).toBe("transparent");

    expect(fin.flou).toBe("var(--blur-blink)");
    expect(fin.fond).toBe("var(--paper)");

    // Le noir est un instant de bascule et non un palier : la fermeture s'arrête là où le fond
    // devient opaque, et l'ouverture repart de cet état exact.
    expect(charniere.a).toBeGreaterThan(50);
    expect(charniere.a).toBeLessThan(fin.a);
  });

  /**
   * Ce qui borne la cérémonie, et ce qui la rend lisible. Deux règles du §7 y sont en jeu, et
   * aucune ne se déduit du code : ce qui part n'est pas regardé et se paie donc moins cher que
   * ce qui arrive, et l'ensemble ne dépasse pas le moment marquant du produit.
   */
  it("tient dans le budget de mouvement", () => {
    const fermeture = ms("--dur-blink-shut");
    const ouverture = ms("--dur-blink-open");

    expect(ouverture).toBeGreaterThan(fermeture);
    expect(fermeture + ouverture).toBeLessThanOrEqual(ms("--dur-mark"));
  });

  /**
   * Le flou, enfin — la seule amplitude du produit qui ne soit pas un pourcentage.
   *
   * Elle est en `rem` parce que ce qu'elle défocalise est du texte : indexée sur la préférence
   * de taille de police du lecteur, elle reste aussi totale pour qui lit en 20 px que pour qui
   * lit en 16. Écrite en pixels, elle deviendrait insuffisante exactement chez les personnes
   * qui ont agrandi leur texte.
   */
  it("porte un flou total, indexé sur la taille du texte", () => {
    const rem = /^([\d.]+)rem$/.exec(token("--blur-blink"));
    expect(rem, "--blur-blink doit être exprimé en rem").not.toBeNull();
    // Une demi-hauteur de corps ne laisse plus rien de lisible ; en deçà, c'est un halo.
    expect(Number(rem![1])).toBeGreaterThanOrEqual(0.5);
  });
});
