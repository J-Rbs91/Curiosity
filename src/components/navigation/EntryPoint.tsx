"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { climbTo } from "@/components/navigation/climb";
import { dayKey } from "@/domain/concepts/next-card";
import { isUpdateAvailable, noteRunningVersion } from "@/lib/app-version";
import {
  announceReentry,
  clearDeparture,
  isReentry,
  readDeparture,
  takeOpening,
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

  /** Une version plus récente est publiée, et le rechargement attend son moment. */
  const rechargeDue = useRef(false);

  useEffect(() => {
    chemin.current = pathname;
    routeur.current = router;
    /*
     * Le rechargement attend d'être arrivé au point d'entrée. Recharger pendant
     * la remontée figerait la pile sur l'écran d'où l'on vient : le document
     * repartirait de cet écran, avec la session d'hier toujours dessous, et le
     * bouton retour la rejouerait — exactement ce que la remontée corrige.
     */
    if (rechargeDue.current && pathname === ENTREE) window.location.reload();
  }, [pathname, router]);

  useEffect(() => {
    /*
     * Un document ne se recharge qu'une fois. Si l'empreinte servie devenait
     * instable — deux nœuds d'un même hébergeur qui ne répondent pas la même
     * chose —, ce garde-fou transforme une boucle en un rechargement de trop.
     */
    let recharge = false;

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
      if (!isReentry(depart, Date.now(), dayKey())) {
        /*
         * Pas une réouverture. Si l'application s'ouvre malgré tout ailleurs
         * qu'à son point d'entrée — une adresse partagée, un rechargement en
         * profondeur —, l'ouverture en attente se consomme ici : cette adresse
         * a été demandée pour elle-même, et rejoindre Aujourd'hui ensuite est
         * un déplacement, pas une ouverture.
         */
        if (chemin.current !== ENTREE) takeOpening();
        return;
      }

      announceReentry();
      if (chemin.current !== ENTREE) climbTo(routeur.current, ENTREE);
      void appliquerLaVersionPubliee();
    };

    /*
     * Une réouverture est le seul moment où recharger ne coûte rien : on n'est
     * en train de rien lire, et l'écran d'accueil s'affiche de toute façon.
     * C'est donc là, et nulle part ailleurs, qu'une version publiée entre en
     * service — jamais pendant qu'on se sert de l'application.
     */
    const appliquerLaVersionPubliee = async () => {
      if (recharge) return;
      if (!(await isUpdateAvailable())) return;
      recharge = true;
      rechargeDue.current = true;
      // Déjà au point d'entrée : personne ne viendra déclencher l'effet de
      // synchronisation, puisque le chemin ne changera pas.
      if (chemin.current === ENTREE) window.location.reload();
    };

    const surVisibilite = () =>
      document.visibilityState === "hidden" ? quitter() : revenir();

    document.addEventListener("visibilitychange", surVisibilite);
    /*
     * Trois écouteurs pour un seul fait — être parti — parce qu'aucun des trois
     * n'est émis dans tous les cas. Android met en arrière-plan, gèle, puis
     * décharge, et selon le chemin emprunté c'est `visibilitychange`, `freeze`
     * ou `pagehide` qui passe. Manquer celui qui passe ne casse rien de
     * visible : la sortie n'est simplement jamais enregistrée, l'absence n'est
     * jamais mesurée, et l'application se rouvre comme avant — le défaut
     * corrigé réapparaît sans qu'aucune erreur ne le dise.
     *
     * Les empiler est sans effet de bord : la première sortie fait foi, donc
     * deux événements pour un même départ n'en écrivent qu'un.
     */
    window.addEventListener("pagehide", quitter);
    document.addEventListener("freeze", quitter);

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
      if (demonte) return;
      revenir();
      /*
       * Et on retient ce qui tourne : c'est la référence à laquelle les
       * réouvertures se compareront. Une requête de plus au démarrage, faite
       * après le chargement pour ne rien lui disputer.
       */
      void noteRunningVersion();
    };
    if (document.readyState === "complete") auChargement();
    else window.addEventListener("load", auChargement, { once: true });

    return () => {
      demonte = true;
      document.removeEventListener("visibilitychange", surVisibilite);
      window.removeEventListener("pagehide", quitter);
      document.removeEventListener("freeze", quitter);
      window.removeEventListener("load", auChargement);
    };
  }, []);

  return null;
}
