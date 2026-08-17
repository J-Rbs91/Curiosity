"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { readTrail, reconcileTrail, writeTrail } from "@/lib/navigation-tree";
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
    writeTrail(reconcileTrail(readTrail(), { href, pathname, label: labelFor(href) }));
  }, [pathname, searchParams]);

  return null;
}
