"use client";

import type { CSSProperties } from "react";

import { Mark } from "@/components/ui/Mark";

/**
 * L'écran qui occupe l'attente d'« Approfondir » : l'œil, et le mot qu'il lit.
 *
 * **Ce qui est à l'écran, et dans quel ordre on le lit.** L'œil de la marque, seul, au-dessus
 * du mot « Chargement… ». Rien d'autre : ni titre, ni squelette, ni barre. C'est le seul écran
 * du produit où la marque se montre sans être dans un mot, et c'est délibéré — elle n'est pas
 * là comme signature, elle est là comme sujet. Ce qu'on regarde est ce qu'elle fait.
 *
 * **L'œil est rendu à 62 px, dans la graisse d'affichage.** Les deux vont ensemble et ne se
 * séparent pas : la taille est ce qui rend le déplacement de la pupille lisible — 12 px de
 * course au lieu de 9 —, et la graisse est ce qui empêche cette taille de produire un anneau
 * épais. C'est la logique du corps optique : plus le dessin est grand, plus son trait doit
 * être relativement fin. Le motif complet est dans `mark-geometry.mjs`, avec les trois
 * graisses.
 *
 * **Le mot est en Inter, au poids courant.** C'est la règle du §5 de `docs/ux-direction.md`
 * appliquée correctement : « la serif porte ce qui se lit, le sans porte ce qui se choisit ».
 * Ce mot n'est pas de la prose — c'est l'état de l'écran, une étiquette, et il se range donc
 * du côté du sans comme tous les autres intitulés du produit. C'est aussi la famille la moins
 * contrastée des deux : ses fûts sont d'épaisseur presque constante, là où la serif alterne
 * pleins et déliés. Sous un anneau qui vient précisément d'être affiné, une serif de labeur
 * aurait été la chose la plus grasse de l'écran.
 *
 * **L'œil est au-dessus et il regarde en dessous de lui.** Les quatre fixations de la partition
 * `reading` sont alignées sous le centre de la pupille : c'est ce qui fait la différence entre
 * un regard qui suit une ligne et un regard qui balaie. Le mot est donc directement dessous.
 * L'écart entre les deux vaut la moitié de la hauteur de l'œil — assez pour qu'ils respirent,
 * assez peu pour qu'on lise « cet œil-là lit ce mot-là » et non deux objets posés l'un sur
 * l'autre. C'est aussi l'écart que l'autre seuil du produit, l'écran d'ouverture, met entre
 * ses blocs.
 *
 * **La durée est passée, pas décidée ici.** Elle est tirée au sort par l'écran qui attend
 * (`src/lib/deepening-wait.ts`) et devient la durée de l'animation : la lecture se termine à
 * l'instant où le texte arrive, quelle que soit la durée tirée. Ce composant ne fait que la
 * transmettre à la feuille de style, et il s'affiche correctement sans elle — la partition
 * garde alors sa durée nominale, qui est le plancher du tirage.
 */
export function ReadingLoader({ durationMs }: { durationMs?: number }) {
  return (
    <div
      className="mx-auto flex max-w-md flex-col items-center justify-center gap-8 px-6"
      style={{ minHeight: "var(--screen-height)" }}
    >
      {/*
       * La durée tirée n'atteint la partition que par cette propriété personnalisée, posée sur
       * la marque et héritée par ses deux pistes. C'est la seule chose que le JavaScript dit de
       * cette animation : ni les positions, ni les instants, ni les courbes ne passent par ici.
       */}
      <Mark
        optical="display"
        gaze="reading"
        className="h-[3.875rem] w-[3.875rem] text-ink"
        style={
          durationMs === undefined
            ? undefined
            : ({ "--dur-gaze-reading": `${durationMs}ms` } as CSSProperties)
        }
      />
      {/*
       * `role="status"` plutôt qu'une alerte : l'attente n'interrompt pas ce que le lecteur
       * était en train de faire, elle se signale quand il en aura fini. Le mot est le même à
       * l'œil et à l'oreille — il n'y a pas de second texte caché à tenir à jour.
       */}
      <p role="status" className="text-lg text-ink-soft">
        Chargement…
      </p>
    </div>
  );
}
