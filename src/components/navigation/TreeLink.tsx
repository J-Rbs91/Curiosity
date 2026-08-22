"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { intentBetween, readTrail, stepsBackTo } from "@/lib/navigation-tree";
import {
  LATERAL_MOTION,
  SCREEN_MOTION,
  type LateralMotion,
} from "@/components/motion/screen-motion";

interface TreeLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /**
   * Le sens du pas de côté, pour les seules surfaces qui affichent un ordre.
   *
   * C'est la seule chose qu'un appelant déclare ici, et il ne la déclare que
   * parce qu'il est le seul à la connaître : l'arbre dit la profondeur, pas la
   * position d'un onglet parmi ses voisins. Omis, le pas de côté reste ce qu'il
   * était — un remplacement sans mouvement.
   */
  lateral?: LateralMotion;
  "aria-label"?: string;
  "aria-current"?: "page" | "true";
  "data-target"?: string;
}

/**
 * Le seul point de passage de toute navigation interne.
 *
 * Il reste un vrai lien : l'ancre existe dans le document, elle s'ouvre dans un
 * nouvel onglet, elle s'annonce aux technologies d'assistance et Next la
 * précharge. Seul le clic gauche est détourné, et seulement quand la navigation
 * consiste à remonter l'arbre — auquel cas on dépile la pile d'historique au
 * lieu de l'allonger.
 *
 * L'intention n'est jamais déclarée à la main : elle se déduit de la comparaison
 * des niveaux. Un développeur qui ajoute un écran renseigne son niveau dans
 * `navigation-tree.ts`, et tous les liens qui y mènent se comportent
 * correctement sans qu'il ait à y penser. C'est ce qui empêche le défaut de
 * revenir écran par écran.
 */
export function TreeLink({ href, lateral, children, ...rest }: TreeLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const intent = intentBetween(pathname, href.split("?")[0]);

  if (intent === "climb") {
    return (
      <Link
        {...rest}
        href={href}
        onClick={(event) => {
          // Laisser au navigateur les clics qui ne sont pas une navigation
          // ordinaire : nouvel onglet, nouvelle fenêtre, téléchargement.
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          if (event.button !== 0) return;
          event.preventDefault();

          const pas = stepsBackTo(readTrail(), href.split("?")[0]);
          if (pas !== null) {
            /*
             * Dépiler plutôt que naviguer. C'est ce qui fait que la pile reste
             * le chemin de la racine au nœud courant, et donc que le bouton
             * retour du système continue de remonter l'arbre après ce geste.
             *
             * Une remontée n'emporte aucun type de transition — le navigateur
             * pilote lui-même une traversée. C'est pourquoi l'animation par
             * défaut d'un écran est celle du retour : voir Screen.
             */
            window.history.go(-pas);
          } else {
            /*
             * Le nœud visé n'est pas sous nous dans la pile : arrivée directe
             * par une URL partagée, ou rechargement. Dépiler à l'aveugle
             * sortirait de l'application, donc on remplace l'entrée courante —
             * la pile ne grandit pas, ce qui est le point important.
             */
            router.replace(href, { transitionTypes: SCREEN_MOTION.back });
          }
        }}
      >
        {children}
      </Link>
    );
  }

  if (intent === "sibling") {
    /*
     * Un pas de côté ne consomme pas de profondeur. C'est la règle qui
     * manquait : sans elle, changer d'onglet ou sauter à un concept voisin
     * ajoutait une entrée, et il fallait dix appuis sur retour pour sortir.
     *
     * Le sens, lui, ne change rien à la pile : il n'est là que pour que le
     * contenu parte du côté où l'on vient de le pousser.
     */
    return (
      <Link
        {...rest}
        href={href}
        replace
        scroll={false}
        transitionTypes={lateral ? LATERAL_MOTION[lateral] : SCREEN_MOTION.lateral}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link {...rest} href={href} transitionTypes={SCREEN_MOTION.deeper}>
      {children}
    </Link>
  );
}
