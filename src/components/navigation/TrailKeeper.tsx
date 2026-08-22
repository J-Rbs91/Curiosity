"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { readTrail, reconcileTrail, samePath, writeTrail } from "@/lib/navigation-tree";
import { syncPosition } from "@/lib/navigation-position";
import { labelFor } from "@/lib/navigation-labels";

/**
 * Tient la trace du chemin parcouru dans l'arbre, à un seul endroit.
 *
 * Il observe le chemin affiché, pas les actions du lecteur : la trace se
 * recalcule identiquement que la navigation soit venue d'un lien, du bouton
 * retour du système, du glissement latéral d'iOS, d'un rechargement ou d'un lien
 * partagé. Un journal des clics, lui, se désynchroniserait au premier geste
 * qu'il n'aurait pas vu passer — et c'est précisément le bouton retour du
 * système qu'on ne voit pas passer.
 */
export function TrailKeeper() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const recherche = searchParams.toString();
    const href = recherche ? `${pathname}?${recherche}` : pathname;
    const trail = readTrail();
    /*
     * La place que la trace retient pour ce chemin, quand elle en retient une. Elle ne sert
     * qu'au cas où l'entrée aurait perdu son numéro — Next réécrit `history.state` à chaque
     * navigation — et qu'on y revienne par une traversée : sans ce filet, l'entrée serait
     * renumérotée comme une entrée neuve, et la remontée dépilerait de travers.
     */
    const connue = trail.find((e) => samePath(e.pathname, pathname))?.position ?? null;
    const position = syncPosition(connue);
    writeTrail(reconcileTrail(trail, { href, pathname, label: labelFor(href), position }));
  }, [pathname, searchParams]);

  return null;
}
