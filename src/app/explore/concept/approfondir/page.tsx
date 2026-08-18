import { Suspense } from "react";
import { DeepeningDetail } from "./DeepeningDetail";
import { ScreenSkeleton } from "@/components/ui/ScreenSkeleton";

/**
 * L'approfondissement d'une carte, le concept étant désigné par `?c=<slug>`.
 *
 * Même raison qu'à l'étage du dessus : une route dynamique qui n'énumère aucun chemin fait
 * échouer l'export statique, et le nombre légitime de concepts va de zéro à quelques
 * dizaines. Une adresse unique paramétrée par sa recherche reste publiable quel que soit
 * l'état du corpus.
 *
 * Le repli n'est pas facultatif. `useSearchParams` suspend au premier rendu d'une page
 * pré-rendue ; sans cette frontière, la construction refuserait la page entière, et le HTML
 * servi ne porterait que la barre de navigation.
 */
export default function DeepeningPage() {
  return (
    <Suspense fallback={<ScreenSkeleton lines={6} />}>
      <DeepeningDetail />
    </Suspense>
  );
}
