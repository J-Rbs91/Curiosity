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
 * Le passage de relais vers l'IA du lecteur.
 *
 * Ce geste était l'unique action de la carte. Il ne l'est plus : l'approfondissement est
 * désormais écrit à l'avance et servi par l'application, et ce bouton vient après lui, au bas
 * du texte, pour qui veut poursuivre. Le rétrogradage est le fait notable, pas le code, qui
 * n'a pas changé : ce composant est l'ancien `DeepenButton`, extrait tel quel pour être
 * réutilisé aux deux endroits qui en ont encore besoin.
 *
 * Ce qui part n'est pas la carte, mais un dossier complet, assemblé par
 * `@/domain/concepts/ai-handoff` : instructions pédagogiques et documentaires, carte, corpus
 * de sources, lien de retour. Le bouton ne connaît pas ce contenu ; il résout ce que l'écran
 * ne sait pas (la place de la carte dans la taxonomie, l'adresse sous laquelle l'application
 * est servie) et transmet le reste.
 *
 * **Pourquoi le presse-papiers plutôt que la feuille de partage du système.** L'action passait
 * auparavant par `navigator.share`, qui rend la main au système. Or la feuille d'Android
 * classe ses cibles par usage : elle proposait Gmail, WhatsApp et un réseau social, et
 * rangeait les applications d'IA derrière « Plus ». Le bouton annonçait une intention et
 * ouvrait un écran qui en proposait une autre. Aucune API ne permet de filtrer cette feuille ;
 * la seule sortie était de ne plus commencer par elle. Le dossier va donc au presse-papiers,
 * qui transporte 22 000 caractères sans troncature et se comporte pareil sur un téléphone et
 * sur un navigateur de bureau, et `DeepenSheet` propose ensuite où le coller.
 *
 * La copie a lieu ici, dans le geste qui l'a demandée : Safari refuse une écriture dans le
 * presse-papiers qui ne descend pas directement d'une interaction.
 */
export function HandoffButton({
  concept,
  label = "Continuer avec une IA",
  variant = "secondary",
  onOpen,
}: {
  concept: Concept;
  label?: string;
  variant?: "primary" | "secondary";
  /**
   * Prévenu à l'ouverture de la feuille, sans rien décider.
   *
   * Ce bouton porte deux intentions selon l'endroit où il est posé — « Approfondir » quand
   * la carte n'a pas de développement écrit, « Continuer avec une IA » au bas de celui
   * qu'elle a —, et lui seul ne peut pas les distinguer. C'est donc l'appelant qui nomme le
   * geste, ici, plutôt qu'un test sur le libellé qui casserait au premier mot changé.
   */
  onOpen?: () => void;
}) {
  const [handoff, setHandoff] = useState<Handoff | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  async function deepen() {
    onOpen?.();
    // Le domaine est résolu ici plutôt que passé par l'appelant : les écrans qui portent ce
    // bouton n'ont pas à savoir dans quelle discipline se trouve la carte, ni sous quelle
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
      <Button ref={trigger} variant={variant} onClick={deepen}>
        {label}
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
