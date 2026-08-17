import type { Source, SourceKind } from "@/types";

/**
 * Ce que le corpus sait dire d'une source, indépendamment de l'endroit qui l'affiche.
 *
 * Le niveau de chaque source est nommé plutôt que codé par une couleur ou un rang : la
 * différence entre un texte de l'auteur et un commentaire universitaire est une information,
 * et c'est la même information à l'écran et dans le message envoyé à une IA. Elle vivait dans
 * le composant qui rend la liste ; l'en sortir évite la seule chose qui pouvait mal tourner
 * ici — deux tables de libellés qui divergent, et une carte partagée qui annonce un « texte
 * de l'auteur » là où l'écran affiche « littérature académique ».
 */
export const SOURCE_KIND_LABEL: Record<SourceKind, string> = {
  primary: "Texte de l'auteur",
  "secondary-academic": "Littérature académique",
  "francophone-reception": "Réception francophone",
  "pedagogical-interpretation": "Interprétation pédagogique",
};

/** Ordre de lecture : ce qui établit avant ce qui commente. */
const KIND_ORDER: SourceKind[] = [
  "primary",
  "secondary-academic",
  "francophone-reception",
  "pedagogical-interpretation",
];

/**
 * Les sources d'une carte, dans l'ordre où elles se lisent.
 *
 * Le tri est stable : à niveau égal, les sources conservent l'ordre dans lequel la fiche les
 * a rangées, qui est celui qu'a établi l'instruction documentaire. Rien n'est écarté — une
 * carte partagée doit emporter exactement les sources que le lecteur voit à l'écran, ni plus
 * ni moins.
 */
export function orderedSources(sources: Source[]): Source[] {
  return [...sources].sort((a, b) => KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind));
}
