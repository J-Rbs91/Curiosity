import { Suspense } from "react";
import { ConceptDetail } from "./ConceptDetail";
import { ScreenSkeleton } from "@/components/ui/ScreenSkeleton";

/**
 * Une seule page pour toutes les fiches, le concept étant désigné par `?c=<slug>`.
 *
 * Les auteurs et les thèmes ont chacun leur page : leurs listes sont écrites dans le dépôt
 * et ne peuvent pas être vides. Les concepts, eux, sont produits par le pipeline
 * documentaire — leur nombre légitime va de zéro à quelques dizaines, et zéro est l'état de
 * départ. Or une route dynamique qui n'énumère aucun chemin fait échouer l'export statique :
 * le site aurait cessé d'être publiable exactement tant que le corpus est vide, c'est-à-dire
 * précisément quand on a besoin de le voir.
 *
 * Le contenu, lui, est identique : cette page rend la même fiche qu'auparavant.
 */
export default function ConceptPage() {
  /*
   * `useSearchParams` suspend au premier rendu d'une page pré-rendue : sans cette
   * frontière, la construction refuserait la page entière.
   *
   * Le repli n'est pas facultatif. Sans lui, le HTML servi ne contient que la barre de
   * navigation, et celui qui suit un lien partagé regarde un écran noir jusqu'à ce que le
   * script soit chargé — or c'est précisément cette adresse que « Approfondir » diffuse.
   */
  return (
    <Suspense fallback={<ScreenSkeleton lines={4} />}>
      <ConceptDetail />
    </Suspense>
  );
}
