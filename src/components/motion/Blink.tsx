"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { useReducedMotion } from "@/lib/reduced-motion";

/**
 * Le clignement — l'écran se défocalise, se ferme, et rouvre sur autre chose.
 *
 * C'est la grammaire de la marque appliquée à l'écran entier : le produit est un œil, et le
 * seul geste qu'il lui restait à faire était de cligner. Le raisonnement — pourquoi ce
 * mouvement à cet endroit, ce qu'il coûte, et les quatre bornes qui le tiennent — est dans
 * `globals.css`, section « Le clignement », et au §7 de `docs/ux-direction.md`. Ce fichier
 * n'en porte que la machine à états.
 *
 * **Le voile ne connaît ni durée, ni courbe, ni amplitude.** Il pose une phase sur un
 * attribut, la feuille de style attache une partition à chaque phase, et la fin de
 * l'animation ramène la main. C'est la même répartition que le regard de la marque : le
 * JavaScript rappelle la partition, il ne l'écrit pas.
 *
 * **Ce qui se passe à la charnière.** L'échange de contenu a lieu quand la fermeture se
 * termine, c'est-à-dire quand le fond est opaque — jamais avant, jamais après. C'est ce qui
 * garantit qu'on ne voie ni l'écran qu'on quitte disparaître, ni celui qui arrive se poser :
 * il est déjà là, entier, quand le fond redescend.
 */

/** Les deux temps, dans l'ordre. Ils nomment les deux partitions de `globals.css`. */
type Phase = "shut" | "open";

export type Blink = {
  /**
   * Le voile, à rendre hors de la mise en page de l'écran : il couvre la surface entière,
   * navigation comprise, et n'est pas du contenu. Il vaut `null` hors clignement — l'écran
   * qui l'accueille peut donc le rendre sans condition, et **doit** le rendre des deux côtés
   * de l'échange, sans quoi le second temps n'aurait nulle part où se jouer.
   */
  veil: ReactNode;
  /**
   * Ferme, échange, rouvre. L'échange est la mise à jour d'état qui remplace ce qu'on
   * regarde — elle est appelée à la charnière, et une seule fois.
   */
  blink: (swap: () => void) => void;
};

export function useBlink(): Blink {
  const mouvementReduit = useReducedMotion();
  const [phase, setPhase] = useState<Phase | null>(null);
  const voile = useRef<HTMLDivElement | null>(null);
  /*
   * L'échange attend dans une référence et non dans un état : il n'a rien à afficher, et le
   * ranger dans un état demanderait un rendu de plus pour ne rien changer à l'écran.
   */
  const echange = useRef<(() => void) | null>(null);

  const blink = useCallback(
    (swap: () => void) => {
      /*
       * En mouvement réduit, il n'y a pas de clignement du tout — pas même joué vite. Ce que
       * ce voile porte est un flou de pleine surface, c'est-à-dire précisément ce que cette
       * préférence existe pour retirer ; ce qu'il en resterait serait un noir qui apparaît et
       * disparaît sans rien dire. L'échange a donc lieu tout de suite, et le seuil se franchit
       * comme il se franchissait avant que ce fichier existe.
       */
      if (mouvementReduit) {
        swap();
        return;
      }
      echange.current = swap;
      setPhase("shut");
    },
    [mouvementReduit]
  );

  /*
   * La charnière, puis la fin. L'échange est appelé depuis un gestionnaire d'événement et
   * non depuis une fonction de mise à jour : une fonction de mise à jour s'exécute pendant
   * le rendu, où déclencher l'état d'un autre composant est interdit, et React la rejoue en
   * mode strict — deux raisons pour lesquelles un effet de bord n'y a pas sa place.
   */
  const finDePhase = useCallback(() => {
    if (phase !== "shut") {
      setPhase(null);
      return;
    }
    echange.current?.();
    echange.current = null;
    setPhase("open");
  }, [phase]);

  /*
   * Le filet, et la seule défaillance de ce montage qui serait grave : si l'animation
   * n'existe pas, aucune fin n'est annoncée et le seuil ne se franchit jamais. Ce n'est pas
   * une hypothèse d'école — c'est ce qui arrive à toute machine à états pilotée par un
   * événement de rendu. On vérifie donc que la phase a bien démarré quelque chose, et on
   * avance sans elle sinon.
   *
   * `getAnimations` absent est un cas distinct de `getAnimations` vide : le premier est un
   * navigateur qui ne sait pas répondre, et il anime probablement ; le second est une réponse,
   * et elle dit qu'il n'y a rien à attendre.
   */
  useEffect(() => {
    if (!phase) return;
    const element = voile.current;
    if (!element || typeof element.getAnimations !== "function") return;
    if (element.getAnimations().length === 0) finDePhase();
  }, [phase, finDePhase]);

  return {
    blink,
    veil: phase && (
      <div
        /*
         * La clé porte la phase : les deux partitions ont beau avoir deux noms, remonter
         * l'élément est ce qui garantit que la seconde reparte de sa première image plutôt
         * que de reprendre l'horloge de la première.
         */
        key={phase}
        ref={voile}
        data-phase={phase}
        className="blink-veil"
        onAnimationEnd={finDePhase}
        aria-hidden
      />
    ),
  };
}
