"use client";

import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { concepts } from "@/content";
import { generatedDeepenings } from "@/content/generated/deepenings.generated";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { Screen } from "@/components/motion/Screen";
import { BackLink } from "@/components/ui/BackLink";
import { HandoffButton } from "@/components/ui/HandoffButton";
import { ReadingLoader } from "@/components/ui/ReadingLoader";
import { drawDeepeningWaitMs } from "@/lib/deepening-wait";
import { useReducedMotion } from "@/lib/reduced-motion";
import { espacesFrancaises } from "@/lib/typographie";
import type { Deepening } from "@/types";

/**
 * L'attente qui précède le texte, et le seul endroit du produit qui en fabrique une.
 *
 * Le raisonnement — pourquoi une attente sur un texte qui est déjà là, pourquoi tirée au sort,
 * et ce qu'elle coûte — est écrit dans `src/lib/deepening-wait.ts` et au §6 de
 * `docs/ux-direction.md`. Ce qui suit n'en est que la mécanique.
 *
 * **Le tirage a lieu au premier rendu, et il n'a lieu qu'une fois.** Un nombre tiré au sort
 * dans le corps d'un composant serait retiré à chaque rendu ; l'initialiseur d'un état ne
 * s'exécute qu'au montage, ce qui en fait le seul endroit correct. Et il est sans danger ici
 * alors qu'il ne le serait pas ailleurs : cet écran appelle `useSearchParams`, donc il suspend
 * au rendu pré-généré et n'écrit jamais de HTML — il n'y a pas d'hydratation qui pourrait
 * démentir le tirage. C'est le repli de `page.tsx` qui occupe ce moment-là.
 *
 * **Le minuteur et l'animation portent la même durée, et c'est la seule raison pour laquelle
 * la lecture tombe juste.** Le nombre tiré part à deux endroits : à `setTimeout`, qui décide
 * quand le texte s'affiche, et à la partition, qui décide combien de temps l'œil met à lire le
 * mot. Il n'y a rien à accorder, il n'y a qu'une valeur.
 *
 * **En mouvement réduit, il n'y a pas d'attente du tout.** L'attente n'existe que pour porter
 * la lecture ; sans elle, il n'en resterait qu'un délai devant un texte qui est prêt, c'est-à-
 * dire la seule chose que cet écran n'a jamais eu le droit d'être. La préférence est lue une
 * fois à l'ouverture de l'écran, comme le partage natif l'est dans `DeepenSheet` : c'est une
 * propriété de l'environnement, pas un état qui change pendant qu'on regarde. La lecture
 * elle-même vit dans `reduced-motion.ts`, qu'on partage avec le clignement du seuil — c'est
 * l'autre moment du produit qui doit être sauté et non accéléré.
 */
function useDeepeningWait() {
  const mouvementReduit = useReducedMotion();
  const [dureeMs] = useState(drawDeepeningWaitMs);
  const [ecoulee, setEcoulee] = useState(false);

  useEffect(() => {
    if (mouvementReduit) return;
    const minuteur = window.setTimeout(() => setEcoulee(true), dureeMs);
    return () => window.clearTimeout(minuteur);
  }, [mouvementReduit, dureeMs]);

  return { dureeMs, terminee: ecoulee || mouvementReduit };
}

/**
 * Le texte qui prolonge la carte.
 *
 * C'est le seul écran de l'application qui se lit en défilant, et le seul dont le contenu ne
 * tient pas dans une hauteur. La carte du jour est bornée par construction, la fiche d'un
 * concept l'est presque ; ici on a mille cinq cents mots, et prétendre les faire tenir
 * reviendrait à ne pas les écrire.
 *
 * **Le module des textes n'est importé que d'ici.** Il pèse une trentaine de milliers de mots,
 * et l'application n'a besoin de rien de tout cela avant qu'on ait appuyé sur « Approfondir » :
 * la découpe par route de Next suffit à ce qu'il ne parte qu'avec cet écran, à condition que
 * personne d'autre ne l'importe. Le reste de l'application passe par
 * `hasDeepening`, qui ne connaît que les identifiants.
 *
 * **Tout ce qui s'affiche passe par `espacesFrancaises`.** Sur une colonne de trente-huit
 * signes, une espace ordinaire devant « ? » finit par envoyer le signe seul en tête de ligne,
 * et le corpus emploie aujourd'hui trois caractères d'espace différents pour le même rôle.
 * C'est ici que le défaut se voit ; l'accroche, elle, y passe sur les cinq écrans qui
 * l'affichent, parce qu'une même phrase rendue de deux façons selon l'écran serait un défaut
 * introduit par la correction. Voir le §6 de `docs/ux-direction.md`.
 */
export function DeepeningDetail() {
  const slug = useSearchParams().get("c");
  const concept = concepts.find((c) => c.slug === slug);
  const deepening = concept && generatedDeepenings.find((d) => d.conceptId === concept.id);
  const attente = useDeepeningWait();

  /*
   * Une carte sans approfondissement n'a pas d'écran ici, et n'en reçoit pas un de
   * remplacement : le bouton qui mène ici n'existe que lorsque le texte existe, si bien qu'une
   * arrivée sans texte est une adresse saisie ou un lien périmé, pas un état du produit.
   *
   * Le contrôle passe **avant** l'attente, et pas seulement par commodité de code : faire
   * patienter trois secondes devant un lien périmé pour finir sur « introuvable » ajouterait
   * une cérémonie à une panne. On n'attend que ce qui va venir.
   */
  if (!concept || !deepening) return notFound();

  /*
   * L'attente, et le seul écran qu'elle affiche — l'œil et le mot qu'il lit. Elle est dans le
   * même `Screen` que le texte : c'est le même écran à deux moments, pas deux écrans, et une
   * seconde transition de vue entre les deux se lirait comme une navigation qui n'a pas eu
   * lieu.
   */
  if (!attente.terminee) {
    return (
      <Screen>
        <ReadingLoader durationMs={attente.dureeMs} />
      </Screen>
    );
  }

  return (
    <Screen>
      {/*
       * La colonne est plus large ici que partout ailleurs, et c'est la seule chose qui
       * distingue cet écran des autres en mise en page.
       *
       * `max-w-md` est la largeur de tous les écrans de l'application, et elle est juste
       * pour eux : ils portent des listes et des blocs courts, que rien n'oblige à
       * s'étendre. Elle l'était aussi ici tant que le texte était en Inter — 400 px de
       * colonne pour 47 signes par ligne sur une tablette, dans la fourchette de 45 à 75.
       *
       * La serif la lui fait perdre. À hauteur d'x égale, elle occupe 7 % de plus par
       * signe, et la même colonne serait retombée à 42 signes, sous le plancher. Cette
       * largeur paie donc le changement de famille avant d'améliorer quoi que ce soit :
       * 32 rem portent la colonne à 472 px et la ligne à 52 signes, au milieu de la
       * fourchette au lieu de son bord.
       *
       * Le remplissage latéral passe de 24 à 20 px, du côté où la place manque vraiment :
       * sur un téléphone, la largeur est bornée par l'appareil et c'est la seule marge de
       * manœuvre qui reste. Elle ne rend que huit pixels, et c'est tout ce qu'il y a.
       *
       * Au-delà de 48 rem, la colonne rejoint `--container-read`, la mesure de lecture de
       * l'application. Ce n'est pas une seconde décision : c'est la même, prise une fois
       * ici quand la place manquait, et généralisée depuis à tout ce qui se lit ligne à
       * ligne. L'écart des trois signes qu'elle ajoute — 52 à 55 — n'est pas ce qui
       * justifie le changement ; c'est de cesser d'avoir une largeur propre à cet écran.
       */}
      {/*
       * `enter-rise` porte l'arrivée du texte, et il ne la porte que parce que l'attente vient
       * de finir : à l'intérieur d'un même `Screen`, le remplacement de l'écran d'attente par
       * l'article n'est pas une navigation et ne déclenche aucune transition de vue. Sans lui,
       * mille cinq cents mots apparaîtraient d'une image à l'autre au terme d'une cérémonie de
       * trois secondes, ce qui est le seul endroit où elle pouvait encore se rater. En
       * mouvement réduit, la classe ne joue pas et le texte est simplement là.
       */}
      <article className="enter-rise mx-auto max-w-[32rem] px-5 pt-10 pb-12 md:max-w-read">
        {/*
         * Le repli est la fiche du concept, avec son `?c=`. Sans lui, une arrivée directe ou
         * un rechargement remonterait vers `/explore/concept` sans slug, c'est-à-dire vers
         * l'écran « introuvable » : l'arbre ne connaît que les chemins, et deux fiches
         * partagent le même.
         */}
        <BackLink fallback={`/explore/concept/?c=${encodeURIComponent(concept.slug)}`} />

        {concept.themeLabel && <p className="eyebrow mt-6">{concept.themeLabel}</p>}

        <h1 className="mt-2 font-serif-display text-2xl font-semibold leading-tight text-ink">
          {concept.title}
        </h1>

        {/*
         * La durée est calculée, jamais stockée : elle changerait à la moindre correction du
         * texte, et deux valeurs à tenir cohérentes divergent toujours. Elle est là parce que
         * cet écran rompt l'attente construite par tous les autres, où tout tient sans
         * défiler : sans elle, on ne sait pas si l'on ouvre trois paragraphes ou un chapitre.
         */}
        <p className="mt-2 text-sm text-ink-faint">
          {[concept.authorLabel, `${readingMinutes(deepening)} minutes`]
            .filter(Boolean)
            .join(" · ")}
        </p>

        {/*
         * L'accroche revient en tête, et ce n'est pas une répétition : c'est la question à
         * laquelle tout ce qui suit répond. La reprendre ici rattache le texte à la carte
         * qu'on vient de quitter, et évite d'entrer dans mille cinq cents mots sans savoir ce
         * qu'on y cherche.
         */}
        <p className="mt-8 font-serif-display text-lg font-semibold leading-snug text-ink">
          {espacesFrancaises(concept.hookQuestion)}
        </p>

        {/*
          * Le texte, dans le traitement de lecture suivie — famille, corps optique,
          * césure, rythme de paragraphe. Tout est dans `.reading` : le régler au point
          * d'usage garantirait qu'un jour le chapeau et une section ne se lisent plus
          * pareil.
          *
          * L'écart avec l'accroche est un écart de section et non de paragraphe : la
          * question au-dessus n'est pas le premier paragraphe du texte, c'est ce à quoi
          * il répond.
          */}
        <div className="reading" style={{ marginTop: "var(--gap-section)" }}>
          {deepening.lead.map((paragraphe, index) => (
            <p key={index}>{espacesFrancaises(paragraphe)}</p>
          ))}
        </div>

        {/*
          * Les sections d'un texte long sont des groupes de premier niveau, et non des
          * sections d'un écran : ce sont les seules ruptures d'un défilement de huit
          * écrans. `--gap-section` valait 48 px pour 25 px entre deux paragraphes, soit
          * un rapport de 1,9 — sous le double que la règle du rythme vertical exige
          * d'un écart de groupe. `--gap-group` le porte à 2,9, et l'intertitre cesse de
          * se lire comme un paragraphe en gras.
          */}
        {deepening.sections.map((section) => (
          <section key={section.title} style={{ marginTop: "var(--gap-group)" }}>
            {/*
             * La serif porte ce qui se lit, le sans porte ce qui se choisit : un titre de
             * section se lit, il n'étiquette pas. C'est la règle du §5 de
             * `docs/ux-direction.md`, et c'est ce qui distingue ces titres du chapeau en
             * capitales qui les surplombe.
             */}
            <h2 className="font-serif-display text-lg font-semibold leading-snug text-ink">
              {espacesFrancaises(section.title)}
            </h2>
            {/*
              * L'ancrage du titre sur son texte est resserré à 12 px, contre 72 au-dessus
              * de lui : c'est ce rapport qui fait qu'un intertitre commande ce qui le
              * suit plutôt que de flotter entre deux blocs.
              */}
            <div className="reading mt-3">
              {section.paragraphs.map((paragraphe, index) => (
                <p key={index}>{espacesFrancaises(paragraphe)}</p>
              ))}
            </div>
          </section>
        ))}

        {/*
         * La frontière documentaire, à l'endroit où elle se voit.
         *
         * Elle est en fin de texte et non en tête : placée avant, elle se lirait comme un
         * avertissement sur la fiabilité de ce qui suit, alors qu'elle dit l'inverse. Ce qui
         * précède est établi ; ce bloc nomme ce qui ne l'est pas, et ne peut se comprendre
         * qu'une fois qu'on sait de quoi il parle.
         *
         * Le filet, le petit corps et la famille sans le rangent visuellement du côté de
         * l'appareil documentaire, avec les sources, plutôt que du côté du texte.
         */}
        <section
          className="border-t border-line pt-6"
          style={{ marginTop: "var(--gap-group)" }}
        >
          {/*
           * Le titre ne nomme pas la carte, et c'est la même règle que pour le texte : le
           * lecteur ne sait pas qu'une carte existe, et il n'a pas à l'apprendre au moment où
           * on lui dit ce qui reste incertain. Ce sont les sources qui manquent, pas une
           * structure interne qui serait incomplète.
           */}
          <h2 className="eyebrow">Ce que les sources ne permettent pas d&apos;établir</h2>
          {/*
            * Ce bloc reste en sans, en petit corps, et derrière un filet : c'est ce qui le
            * range du côté de l'appareil. Sa couleur, elle, remonte de `--ink-faint`
            * (6,49:1) à `--ink-soft` (10,24:1) — c'était trois paragraphes de prose au
            * plus petit corps et dans le gris le plus sourd de l'écran, c'est-à-dire la
            * chose la plus coûteuse à lire d'une page qui ne demande que ça. La mise en
            * retrait est portée par le filet, la taille et la famille ; elle n'a pas
            * besoin d'être payée une quatrième fois en contraste.
            */}
          <div className="reading-aside mt-3 text-sm leading-relaxed text-ink-soft">
            {deepening.limits.map((limite, index) => (
              <p key={index}>{espacesFrancaises(limite)}</p>
            ))}
          </div>
        </section>

        {concept.sources && concept.sources.length > 0 && (
          <section style={{ marginTop: "var(--gap-group)" }}>
            <h2 className="eyebrow">Sources</h2>
            <div className="mt-3">
              <ConceptSourceList sources={concept.sources} />
            </div>
          </section>
        )}

        {/*
         * Le passage de relais vers une IA, rétrogradé mais pas supprimé.
         *
         * Il était l'unique action de la carte ; il est maintenant ce qui vient après avoir
         * lu. C'est l'ordre juste : ce texte répond aux questions qu'on avait en arrivant,
         * il ne peut pas répondre à celles qu'il fait naître, et c'est pour celles-là qu'un
         * interlocuteur sert à quelque chose. Le dossier qui part reste le même, carte et
         * corpus compris.
         */}
        <div style={{ marginTop: "var(--gap-group)" }}>
          <p className="reading-aside text-sm leading-relaxed text-ink-soft">
            Ce texte s&apos;arrête là où s&apos;arrêtent ses sources. Pour le prolonger,
            emportez-les avec le concept vers l&apos;IA de votre choix.
          </p>
          <div className="mt-4">
            <HandoffButton concept={concept} />
          </div>
        </div>
      </article>
    </Screen>
  );
}

/**
 * La durée de lecture, arrondie à la minute supérieure.
 *
 * 200 mots par minute : c'est le bas de la fourchette usuelle pour une lecture attentive, et
 * c'est le bon côté où se tromper. Une durée annoncée trop courte est un manquement à la
 * parole donnée ; une durée trop longue ne coûte rien à personne.
 */
function readingMinutes(deepening: Deepening): number {
  const texte = [
    ...deepening.lead,
    ...deepening.sections.flatMap((s) => s.paragraphs),
    ...deepening.limits,
  ].join(" ");
  return Math.max(1, Math.ceil(texte.split(/\s+/).filter(Boolean).length / 200));
}
