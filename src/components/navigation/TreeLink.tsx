"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { intentBetween } from "@/lib/navigation-tree";
import { noteGeste } from "@/lib/navigation-position";
import { climbTo } from "@/components/navigation/climb";
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
 *
 * **Le geste est annoncé avant d'être fait.** Empiler ouvre une place de plus dans la pile,
 * remplacer réoccupe la même, et le navigateur ne dit ni l'un ni l'autre. C'est ici, et
 * seulement ici, qu'on le sait — d'où `noteGeste`, que `navigation-position.ts` consomme
 * pour numéroter l'entrée qui vient. Sans ce numéro, une remontée ne saurait pas de combien
 * de crans dépiler, et c'est de là que venait un retour qui atterrissait ailleurs que là où
 * il l'annonçait.
 */
export function TreeLink({ href, lateral, children, ...rest }: TreeLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const intent = intentBetween(pathname, href.split("?")[0]);

  /*
   * Les clics qui ne sont pas une navigation ordinaire — nouvel onglet, nouvelle fenêtre,
   * téléchargement — restent au navigateur. Ils n'annoncent donc aucun geste : l'écran
   * courant ne bouge pas, et une annonce sans navigation ferait mal numéroter la suivante.
   */
  const navigationOrdinaire = (event: MouseEvent) =>
    !(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) && event.button === 0;

  if (intent === "climb") {
    return (
      <Link
        {...rest}
        href={href}
        onClick={(event) => {
          if (!navigationOrdinaire(event)) return;
          event.preventDefault();
          climbTo(router, href);
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
        onClick={(event) => {
          if (navigationOrdinaire(event)) noteGeste("remplace");
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      {...rest}
      href={href}
      transitionTypes={SCREEN_MOTION.deeper}
      onClick={(event) => {
        if (navigationOrdinaire(event)) noteGeste("empile");
      }}
    >
      {children}
    </Link>
  );
}
