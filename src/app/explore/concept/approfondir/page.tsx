import { Suspense } from "react";
import { DeepeningDetail } from "./DeepeningDetail";
import { ReadingLoader } from "@/components/ui/ReadingLoader";
import "./deepening.css";

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
 *
 * **Le repli est l'écran d'attente lui-même, et non plus un squelette.** Un squelette réserve
 * la place de ce qui arrive ; c'est le bon geste quand le contenu suit dans la fraction de
 * seconde, et c'était le cas ici. Depuis que cet écran fait attendre volontairement — voir le
 * §6 de `docs/ux-direction.md` —, un squelette suivi d'une attente afficherait deux états de
 * chargement l'un derrière l'autre pour un seul chargement. L'écran d'attente tient les deux
 * rôles : il occupe la suspension, puis il occupe l'attente, sans que rien ne change à
 * l'image.
 */
export default function DeepeningPage() {
  return (
    <Suspense fallback={<ReadingLoader />}>
      <DeepeningDetail />
    </Suspense>
  );
}
