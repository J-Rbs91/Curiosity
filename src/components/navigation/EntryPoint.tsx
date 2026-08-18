"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { climbTo } from "@/components/navigation/climb";
import { dayKey } from "@/domain/concepts/next-card";
import {
  announceReentry,
  clearDeparture,
  isReentry,
  readDeparture,
  writeDeparture,
} from "@/lib/app-entry";

/** Le nœud par lequel on entre : Aujourd'hui, et la carte du jour. */
const ENTREE = "/";

/**
 * Ramène à Aujourd'hui quand rouvrir l'application n'est plus une reprise.
 *
 * Le critère et sa justification sont dans `app-entry.ts` ; ici se joue ce que
 * ce constat déclenche, et c'est le seul endroit où il le fait.
 *
 * **La remontée n'est pas décorative.** On dépile jusqu'à la racine plutôt que
 * de naviguer vers elle : la pile d'historique doit redevenir le chemin de la
 * racine au nœud courant — ici, la racine seule. Sans cela la session de la
 * veille resterait en dessous, et le premier appui sur retour la rejouerait
 * écran par écran. C'est l'invariant de `navigation-tree.ts`, appliqué à la
 * couture entre deux sessions.
 */
export function EntryPoint() {
  const router = useRouter();
  const pathname = usePathname();

  /*
   * Le chemin et le routeur sont lus au moment où la réouverture est
   * constatée, pas au moment où l'on s'est abonné. Les écouteurs, eux, se
   * posent une fois pour toutes — voir plus bas pourquoi c'est la condition
   * pour que celui du chargement survive.
   */
  const chemin = useRef(pathname);
  const routeur = useRef(router);
  useEffect(() => {
    chemin.current = pathname;
    routeur.current = router;
  }, [pathname, router]);

  useEffect(() => {
    const quitter = () => {
      /*
       * La première sortie fait foi. Le moment qui compte est celui où on a
       * quitté l'application, pas le dernier événement que le navigateur a
       * émis pendant qu'elle était en arrière-plan — il en émet d'autres, au
       * déchargement notamment, et les laisser réécrire l'horodatage
       * rajeunirait une absence de douze heures juste avant qu'on la mesure.
       * Comme le retour efface toujours la sortie, en trouver une signifie
       * exactement « toujours parti ».
       */
      if (!readDeparture()) writeDeparture({ at: Date.now(), day: dayKey() });
    };

    const revenir = () => {
      const depart = readDeparture();
      /*
       * La sortie s'efface dès qu'on revient, qu'elle ait déclenché quelque
       * chose ou non. La garder ferait vieillir un horodatage pendant qu'on se
       * sert de l'application, et une navigation faite une heure plus tard
       * serait prise pour une réouverture.
       */
      clearDeparture();
      if (!isReentry(depart, Date.now(), dayKey())) return;

      announceReentry();
      if (chemin.current !== ENTREE) climbTo(routeur.current, ENTREE);
    };

    const surVisibilite = () =>
      document.visibilityState === "hidden" ? quitter() : revenir();

    document.addEventListener("visibilitychange", surVisibilite);

    /*
     * Et une fois au montage : quand le système a déchargé la page pour
     * récupérer de la mémoire — ce qu'Android fait couramment sur une
     * application laissée en arrière-plan —, y revenir la reconstruit déjà
     * visible, et aucun changement de visibilité n'est émis. C'est la sortie
     * enregistrée en `sessionStorage`, qui survit à ce déchargement, qui
     * l'atteste.
     *
     * Deux détails mesurés au pilote de navigateur, et invisibles autrement :
     *
     * — une traversée d'historique demandée avant la fin du chargement du
     *   document est ignorée, silencieusement. D'où l'attente de `load` ;
     * — cet effet ne dépend de rien, et c'est ce qui fait qu'il tient. Rendu
     *   dépendant du chemin ou du routeur, il se démontait au premier
     *   changement d'identité de ces valeurs, retirant l'écouteur de
     *   chargement avant qu'il ait servi — et l'application restait sur
     *   l'écran de la veille.
     */
    let demonte = false;
    const auChargement = () => {
      if (!demonte) revenir();
    };
    if (document.readyState === "complete") revenir();
    else window.addEventListener("load", auChargement, { once: true });

    return () => {
      demonte = true;
      document.removeEventListener("visibilitychange", surVisibilite);
      window.removeEventListener("load", auChargement);
    };
  }, []);

  return null;
}
