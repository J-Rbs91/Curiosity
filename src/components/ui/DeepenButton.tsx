"use client";

import { hasDeepening } from "@/content";
import { TreeLink } from "@/components/navigation/TreeLink";
import { HandoffButton } from "@/components/ui/HandoffButton";
import { AUDIENCE_EVENTS, countEvent } from "@/lib/analytics";
import type { Concept } from "@/types";

/**
 * « Approfondir » — l'unique action de la carte.
 *
 * Le nom n'a pas changé, ce qu'il fait si. Le bouton emportait la carte vers l'IA du lecteur,
 * à charge pour lui de coller un dossier de 22 000 caractères dans une conversation vide et
 * d'attendre. Il ouvre maintenant un texte que l'application sert déjà : le développement du
 * concept, écrit à l'avance à partir de la carte et de son corpus, contrôlé, projeté comme le
 * reste. Le lecteur qui appuie obtient quelque chose à lire, pas une manipulation à faire.
 *
 * **L'application ne parle à aucun modèle.** Ni ici, ni ailleurs : elle est exportée en
 * statique, sans serveur ni clé d'API, et le texte affiché existait avant le clic. C'est ce
 * qui permet qu'il ait été relu, ce qu'aucune réponse produite au moment du clic ne peut
 * offrir.
 *
 * **Le repli est aussi important que le chemin principal.** Toute carte n'a pas son
 * approfondissement : le corpus avance carte par carte, et les fiches d'échafaudage n'en
 * auront jamais. Dans ce cas, le bouton reprend exactement son ancien comportement plutôt que
 * de disparaître ou de mener à un écran vide, et le lecteur garde le chemin qu'il connaît.
 */
export function DeepenButton({ concept }: { concept: Concept }) {
  /*
   * Le geste se compte dans les deux branches, sous le même nom : ce qu'on veut savoir est
   * combien de lecteurs demandent à aller plus loin, pas par quel chemin le corpus les y
   * mène. Le repli le compte ici, à l'ouverture de la feuille ; l'autre branche le compte
   * à l'arrivée sur l'écran de développement, faute d'un clic à observer — `TreeLink`
   * détourne le sien, et lui passer un second l'écraserait en silence.
   */
  if (!hasDeepening(concept.id))
    return (
      <HandoffButton
        concept={concept}
        label="Approfondir"
        variant="primary"
        onOpen={() => countEvent(AUDIENCE_EVENTS.approfondir)}
      />
    );

  /*
   * Un lien, et non un bouton qui navigue : il s'ouvre dans un nouvel onglet, il s'annonce
   * aux technologies d'assistance et Next le précharge. `TreeLink` lui donne le geste qui
   * correspond à une descente dans l'arbre, sans que cet écran ait à savoir lequel.
   *
   * Les classes reprennent celles de `Button` en variante principale. Elles sont recopiées
   * plutôt que partagées : `Button` rend un `<button>`, et le seul moyen de les mutualiser
   * serait de lui faire rendre parfois autre chose, ce qui coûterait plus cher que ces deux
   * lignes.
   */
  return (
    <TreeLink
      href={`/explore/concept/approfondir/?c=${encodeURIComponent(concept.slug)}`}
      className="press inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-contrast hover:opacity-90"
    >
      Approfondir
    </TreeLink>
  );
}
