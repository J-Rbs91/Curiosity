"use client";

import { useLayoutEffect } from "react";
import { LIGHT_QUERY, applyTheme, readPreference, resolveTheme } from "@/lib/theme";

/**
 * Ce qui tient le thème à jour une fois la page ouverte, et les deux seules raisons pour
 * lesquelles ce composant existe.
 *
 * **Le système peut changer d'avis pendant qu'on lit.** Un téléphone qui bascule en clair au
 * lever du jour change la réponse de « Suivre le système » sans que personne n'ait touché à
 * l'application. Le script d'ouverture, lui, ne s'exécute qu'une fois : il faut donc écouter.
 * L'écoute reste armée quelle que soit la préférence — la résolution ignore d'elle-même le
 * système quand le lecteur a choisi un thème fixe, et un écouteur monté puis démonté au gré
 * d'une préférence aurait été un état de plus à tenir juste.
 *
 * **Le remontage de développement efface l'attribut.** En mode strict, React remonte une fois
 * et remet alors `<html>` aux seuls attributs qu'il gère depuis le JSX — celui que le script
 * en ligne a posé disparaît, et l'application se rend dans le thème par défaut alors qu'une
 * préférence existe. Le repositionner ici est sans effet en production, où l'attribut est
 * déjà juste. C'est le repli documenté par Next sous « Re-applying attributes in
 * development », dans
 * `node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md`.
 *
 * `useLayoutEffect` et non `useEffect` : il s'exécute avant la peinture, et c'est la seule
 * différence qui compte — corriger après aurait produit l'éclair que tout ce mécanisme
 * existe pour supprimer.
 */
export function ThemeKeeper() {
  useLayoutEffect(() => {
    const media = window.matchMedia(LIGHT_QUERY);

    const relire = () => applyTheme(resolveTheme(readPreference(), media.matches));

    relire();
    media.addEventListener("change", relire);
    /*
     * Et la même relecture quand un autre onglet écrit la préférence : `storage` ne se
     * déclenche que dans les *autres* documents de la même origine, ce qui est exactement
     * ce qu'on veut — celui qui a fait le choix s'est déjà mis à jour lui-même.
     */
    window.addEventListener("storage", relire);
    return () => {
      media.removeEventListener("change", relire);
      window.removeEventListener("storage", relire);
    };
  }, []);

  return null;
}
