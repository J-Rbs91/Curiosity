"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { parentEntry, parentOf, readTrail, TRAIL_EVENT } from "@/lib/navigation-tree";
import { labelFor } from "@/lib/navigation-labels";

/**
 * Le retour, identique sur les quatre écrans qui en portent un. Il était recopié
 * quatre fois : deux implémentations d'un même mécanisme divergent toujours.
 *
 * Il ne pointe pas vers une destination fixe : il remonte d'un niveau dans
 * l'arbre, et nomme le nœud qu'il va réellement atteindre. Une fiche de concept
 * s'atteint depuis un auteur ou depuis un thème ; un libellé figé y annoncerait
 * « Explorer » alors qu'on remonte chez Weber, ce qui est pire qu'un libellé
 * générique.
 *
 * La hauteur de 44 px n'est pas décorative. Le libellé fait 20 px ; la marge
 * négative rend les 24 px restants cliquables sans déplacer le texte d'un pixel.
 */
export function BackLink({ fallback }: { fallback?: string } = {}) {
  const pathname = usePathname();
  /*
   * Le repli déduit de l'arbre ne porte que le chemin, jamais la recherche : `parentOf` ne
   * voit pas les `?c=<slug>` qui distinguent deux fiches partageant une même route. Cela
   * suffit partout sauf sous une de ces fiches, où remonter au chemin nu tombe sur l'écran
   * « introuvable » plutôt que sur le concept d'où l'on vient. L'écran qui connaît son slug
   * passe donc son propre repli, et il est le seul à pouvoir le faire.
   *
   * Ce n'est le cas que d'une arrivée directe ou d'un rechargement : dès qu'un écran a été
   * traversé, c'est la trace qui commande, et elle porte l'adresse complète.
   */
  const repli = fallback ?? parentOf(pathname) ?? "/";
  const [cible, setCible] = useState({ href: repli, label: labelFor(repli) });

  useEffect(() => {
    // La trace n'existe que côté client : lue au rendu, elle produirait une
    // différence entre le HTML du serveur et celui du navigateur.
    const relire = () => {
      const dessus = parentEntry(readTrail());
      setCible(
        dessus ? { href: dessus.href, label: dessus.label } : { href: repli, label: labelFor(repli) }
      );
    };
    relire();
    /*
     * Et on relit à chaque écriture de la trace. Une seule lecture au montage tenait pour
     * acquis que `TrailKeeper` a déjà écrit quand cet effet s'exécute — un ordre entre deux
     * effets, que la frontière de suspension du gardien peut décaler. Quand il se décalait,
     * le lien portait le parent de l'écran précédent : il annonçait une destination, le clic
     * en atteignait une autre.
     */
    window.addEventListener(TRAIL_EVENT, relire);
    return () => window.removeEventListener(TRAIL_EVENT, relire);
    /*
     * `pathname` suffit comme déclencheur, et c'est volontaire : lire aussi la
     * chaîne de recherche imposerait une frontière de suspension sur des pages
     * pré-rendues, ce que l'export statique refuse. Deux concepts voisins
     * partagent de toute façon le même parent — la cible ne change pas.
     */
  }, [pathname, repli]);

  return (
    <TreeLink
      href={cible.href}
      className="press -my-3 -ml-2 inline-flex min-h-11 items-center gap-1.5 px-2 text-sm text-ink-faint hover:text-ink"
    >
      <ArrowLeft size={16} />
      {cible.label}
    </TreeLink>
  );
}
