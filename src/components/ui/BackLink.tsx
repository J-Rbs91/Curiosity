"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { TreeLink } from "@/components/navigation/TreeLink";
import { parentEntry, parentOf, readTrail } from "@/lib/navigation-tree";
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
export function BackLink() {
  const pathname = usePathname();
  const repli = parentOf(pathname) ?? "/";
  const [cible, setCible] = useState({ href: repli, label: labelFor(repli) });

  useEffect(() => {
    // La trace n'existe que côté client : lue au rendu, elle produirait une
    // différence entre le HTML du serveur et celui du navigateur.
    const dessus = parentEntry(readTrail());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCible(
      dessus ? { href: dessus.href, label: dessus.label } : { href: repli, label: labelFor(repli) }
    );
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
