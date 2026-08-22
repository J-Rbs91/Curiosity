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
 * **Le mot est en serif, et ce n'est pas un détail de goût.** La règle du produit est que « la
 * serif porte ce qui se lit, le sans porte ce qui se choisit » (§5 de `docs/ux-direction.md`).
 * Ce mot est justement là pour être lu — par l'œil au-dessus de lui. En sans, il serait
 * redevenu une étiquette d'état, et l'œil aurait regardé une étiquette.
 *
 * **L'œil est au-dessus et il regarde en dessous de lui.** Les quatre fixations de la partition
 * `reading` sont alignées sous le centre de la pupille : c'est ce qui fait la différence entre
 * un regard qui suit une ligne et un regard qui balaie. Le mot est donc directement dessous, et
 * l'écart entre les deux reste court — plus il s'allonge, moins on lit les deux comme une seule
 * chose.
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
      className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 px-6"
      style={{ minHeight: "var(--screen-height)" }}
    >
      {/*
       * La durée tirée n'atteint la partition que par cette propriété personnalisée, posée sur
       * la marque et héritée par ses deux pistes. C'est la seule chose que le JavaScript dit de
       * cette animation : ni les positions, ni les instants, ni les courbes ne passent par ici.
       */}
      <Mark
        gaze="reading"
        className="h-11 w-11 text-ink"
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
      <p role="status" className="font-serif-display text-lg text-ink-soft">
        Chargement…
      </p>
    </div>
  );
}
