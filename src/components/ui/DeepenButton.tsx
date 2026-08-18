"use client";

import { useRef, useState } from "react";
import { buildAISharePayload } from "@/domain/concepts/ai-handoff";
import { taxonomy } from "@/content";
import { absoluteUrl } from "@/lib/base-path";
import { Button } from "@/components/ui/Button";
import { DeepenSheet } from "@/components/ui/DeepenSheet";
import type { Concept } from "@/types";

interface Handoff {
  text: string;
  copied: boolean;
}

/**
 * « Approfondir » — l'unique action de la carte.
 *
 * Le nom dit ce que le lecteur veut faire : comprendre le concept avec l'IA de son choix,
 * qui prend le relais de l'explication. L'application ne produit rien au-delà de la carte.
 *
 * Ce qui part n'est pas la carte, mais un dossier complet — instructions pédagogiques et
 * documentaires, carte, corpus de sources, lien de retour — assemblé par
 * `@/domain/concepts/ai-handoff`. Le bouton ne connaît pas ce contenu : il résout ce que
 * l'écran ne sait pas (la place de la carte dans la taxonomie, l'adresse sous laquelle
 * l'application est servie) et transmet le reste.
 *
 * **Pourquoi le presse-papiers plutôt que la feuille de partage du système.** L'action
 * passait auparavant par `navigator.share`, qui rend la main au système. Or la feuille
 * d'Android classe ses cibles par usage : elle proposait Gmail, WhatsApp et un réseau social,
 * et rangeait les applications d'IA derrière « Plus ». Le bouton annonçait une intention et
 * ouvrait un écran qui en proposait une autre. Aucune API ne permet de filtrer cette feuille ;
 * la seule sortie était de ne plus commencer par elle. Le dossier va donc au presse-papiers —
 * qui transporte 22 000 caractères sans troncature, et se comporte pareil sur un téléphone et
 * sur un navigateur de bureau —, et `DeepenSheet` propose ensuite où le coller. La feuille du
 * système reste accessible depuis cette feuille, pour ce que la liste ne couvre pas.
 *
 * La copie a lieu ici, dans le geste qui l'a demandée : Safari refuse une écriture dans le
 * presse-papiers qui ne descend pas directement d'une interaction.
 */
export function DeepenButton({ concept }: { concept: Concept }) {
  const [handoff, setHandoff] = useState<Handoff | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  async function deepen() {
    // Le domaine est résolu ici plutôt que passé par l'appelant : les deux écrans qui portent
    // ce bouton n'ont pas à savoir dans quelle discipline se trouve la carte, ni sous quelle
    // adresse l'application est servie.
    const domain = taxonomy.domainOfConcept(concept);
    const text = buildAISharePayload({
      concept,
      domain,
      family: domain && taxonomy.familyOf(domain.id),
      url: absoluteUrl(`/explore/concept/?c=${encodeURIComponent(concept.slug)}`),
    });

    let copied = false;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      // Presse-papiers refusé ou indisponible : la feuille s'ouvre quand même et le dit,
      // avec de quoi réessayer ou passer par le partage du système.
    }

    setHandoff({ text, copied });
  }

  return (
    <>
      <Button ref={trigger} onClick={deepen}>
        Approfondir
      </Button>
      {handoff && (
        <DeepenSheet
          copied={handoff.copied}
          text={handoff.text}
          onClose={() => {
            setHandoff(null);
            // Le focus revient d'où il venait : sans cela, il repart en tête de document et
            // la navigation au clavier recommence l'écran.
            trigger.current?.focus();
          }}
        />
      )}
    </>
  );
}
