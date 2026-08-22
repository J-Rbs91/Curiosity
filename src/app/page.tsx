"use client";

import { useEffect, useState } from "react";
import { taxonomy } from "@/content";
import { getProgressService } from "@/services/progress";
import { dayKey, pickDailyConcept } from "@/domain/concepts/next-card";
import { pastCards } from "@/domain/concepts/past-cards";
import { isOpeningPending, onReentry, spendOpening } from "@/lib/app-entry";
import { markDailyCardDiscovered } from "@/lib/daily-discovery";
import type { Concept } from "@/types";
import { Screen } from "@/components/motion/Screen";
import { useBlink } from "@/components/motion/Blink";
import { TreeLink } from "@/components/navigation/TreeLink";
import { Button } from "@/components/ui/Button";
import { ConceptQuotation } from "@/components/concept/ConceptQuotation";
import { ConceptSourceList } from "@/components/concept/ConceptSources";
import { DeepenButton } from "@/components/ui/DeepenButton";
import { Wordmark } from "@/components/ui/Wordmark";
import { ScreenSkeleton } from "@/components/ui/ScreenSkeleton";
import { espacesFrancaises } from "@/lib/typographie";

/**
 * La hauteur d'un écran, réserve de navigation déduite.
 *
 * `AppShell` réserve déjà ce que la navigation prend au contenu : un enfant à cette hauteur
 * occupe donc exactement un écran. C'est un plancher, pas une hauteur fixe : `--card-scale`
 * garde la carte courante compacte, mais rien ne garantit qu'une carte tienne toujours sans
 * défiler — et la forcer à tenir en rétrécissant encore le texte coûterait plus cher que le
 * défilement qu'on lui refuserait. Le plancher fait que la carte reste centrée quand elle
 * tient, et que la page défile plutôt que de perdre silencieusement son bas quand elle ne
 * tient pas.
 *
 * **La valeur est dans `globals.css`** depuis qu'elle en a deux : la barre basse retient
 * 68 px de hauteur, le rail n'en retient aucun, et l'écran de bureau récupère donc la
 * réserve. Une constante ici et un seuil là-bas auraient été deux réglages à tenir
 * d'accord.
 */
const SCREEN_HEIGHT = "var(--screen-height)";

/**
 * Ce que la ligne des cartes passées retire à la carte quand elle est là : 52 px, soit sa
 * hauteur de texte — la cible de 44 px est ramenée à 20 px de flux par `-my-3`, sans
 * rétrécir — et l'écart de 32 px qui l'en sépare.
 *
 * **La carte ne rétrécit pas pour lui faire place, c'est la page qui défile.** Le tableau
 * de mesures de `CARD_SCALE` a été relevé sans cette ligne : une carte qui tenait tout
 * juste tient toujours, et c'est le lien qui passe sous la ligne de flottaison. Mesuré sur
 * la même carte, la plus longue du corpus : 390 × 844 ne défile pas ; 375 × 667 défile de
 * 38 px, la carte restant entière ; 320 × 568 défilait déjà de 37 px pour la carte seule,
 * et défile de 89 px. Rétrécir le texte de tous les jours pour garder à l'écran un lien
 * qu'on suit une fois par mois aurait été l'inverse de la bonne dépense — et il n'est pas
 * mauvais qu'un lien fait pour ne pas se voir demande le geste qui l'appelle.
 */
const PAST_LINK_HEIGHT = "3.25rem";

export default function TodayPage() {
  const [mounted, setMounted] = useState(false);
  const [ouverture, setOuverture] = useState(false);
  /*
   * Le franchissement du seuil se joue comme un clignement : l'écran se défocalise, se ferme,
   * et rouvre sur la carte. Le voile est rendu plus bas, dans les deux écrans que le
   * clignement relie ; ce qu'il porte et ce qui le borne sont dans `Blink.tsx` et au §7 de
   * `docs/ux-direction.md`.
   */
  const { veil, blink } = useBlink();
  /*
   * Et si la carte est arrivée par là, elle n'a pas de cascade d'entrée. L'accommodation
   * **est** son entrée : deux gestes simultanés qui ne racontent pas la même chose se lisent
   * comme deux événements — c'est la règle que le §7 tire du changement d'onglet, et elle vaut
   * ici pour la même raison. La cascade reste sur les arrivées ordinaires, où rien d'autre ne
   * porte l'entrée : revenir d'Explorer, ou rouvrir sur un seuil déjà franchi.
   */
  const [parClignement, setParClignement] = useState(false);
  const [concept, setConcept] = useState<Concept | undefined>(undefined);
  /*
   * Combien de cartes le lecteur peut relire, celle du jour déduite. C'est ce compte qui
   * décide si le lien vers les cartes passées existe : le proposer le premier jour
   * ouvrirait sur une liste vide.
   */
  const [passees, setPassees] = useState(0);

  useEffect(() => {
    const tirer = () => {
      const service = getProgressService();
      const state = service.getState();
      /*
       * Le tirage porte sur tout le corpus, et il le dit — plutôt que de recevoir la liste des
       * cartes sans qu'on sache de quel périmètre elle vient. Le jour où l'on voudra une carte
       * d'une famille ou d'un domaine, c'est ce périmètre qui change, et rien d'autre : le
       * tirage lui-même ne connaît ni domaine ni discipline.
       */
      const corpus = taxonomy.conceptsIn({ kind: "all" });
      const today = dayKey();
      const next = pickDailyConcept(corpus, state.seen, today, state.daily);
      // Lecture localStorage et tirage de la carte : impossibles pendant le rendu serveur.
      setConcept(next);
      /*
       * L'état lu ici précède l'enregistrement de la carte du jour, mais `pastCards` en
       * écarte de toute façon la carte à l'écran : le compte est le même qu'elle ait déjà
       * été rencontrée ou non.
       */
      setPassees(next ? pastCards(corpus, state.seen, next.id).length : 0);
      setMounted(true);
      if (next) {
        // Le tirage du jour est arrêté ici et pas ailleurs : rouvrir l'application dans
        // l'heure doit redonner la même carte, y compris après un changement de corpus.
        if (state.daily?.day !== today || state.daily.conceptId !== next.id)
          service.setDaily(today, next.id);
        service.recordSeen(next.id);
      }
    };

    /*
     * L'accueil s'interpose tant qu'une ouverture attend d'être franchie — et il ne la
     * dépense pas : c'est le bouton qui le fait, plus bas, parce que lui seul atteste du
     * geste. L'afficher n'est pas le franchir.
     *
     * Cet écran se démonte dès qu'on passe sur Explorer, et son état avec lui : c'est donc
     * la mémoire d'`app-entry` qu'on interroge à chaque montage, et elle seule. Partir sur
     * Explorer depuis le seuil puis revenir — par le geste retour ou par l'onglet
     * Aujourd'hui — retrouve le seuil intact, au lieu de découvrir la carte à la place du
     * lecteur.
     *
     * Il ne s'interpose pour autant jamais deux fois : franchi, il ne revient qu'à
     * l'ouverture suivante. Arriver ici depuis Explorer après l'avoir franchi rend la
     * carte directement, et c'est ce qui empêche le seuil d'être une taxe sur chaque
     * changement d'onglet.
     */
    const ouvrir = () => {
      setOuverture(isOpeningPending());
    };

    tirer();
    ouvrir();
    /*
     * Et à chaque réouverture, pas seulement au montage. Une application installée est mise
     * en arrière-plan bien plus souvent qu'elle n'est fermée : quand la réouverture trouve
     * cet écran déjà affiché, rien ne se remonte, et la carte de la veille resterait à
     * l'écran alors que le jour a changé. Le critère de réouverture est dans `app-entry.ts`.
     */
    return onReentry(() => {
      tirer();
      ouvrir();
    });
  }, []);

  /*
   * La découverte de la carte du jour, et le seul endroit d'où elle peut se déclarer.
   *
   * Les trois conditions réunies ici sont exactement ce que « la carte est ouverte » veut
   * dire : l'écran est monté, une carte a été tirée, et le seuil n'est plus interposé. Le
   * tirage, lui, ne suffit pas — il a lieu au montage, seuil compris, et déclarer la
   * découverte là aurait éteint le rappel sans que personne n'ait rien lu.
   *
   * C'est de cette déclaration que dépend le rappel porté par l'icône : elle est la seule
   * source de vérité du « concept du jour découvert », et tout le reste — le palier, la
   * couleur, l'échéance — s'en déduit avec l'heure. Voir `src/lib/daily-discovery.ts`.
   *
   * L'appel est idempotent : il n'écrit qu'une fois par jour civil, quel que soit le nombre
   * de fois où cet écran se remonte.
   */
  useEffect(() => {
    if (!mounted || !concept || ouverture) return;
    markDailyCardDiscovered();
  }, [mounted, concept, ouverture]);

  /*
  * Le tirage a besoin du `localStorage`, qui n'existe pas au rendu serveur : cet écran
  * n'a donc rien à pré-rendre. Il montrait un bloc vide ; il montre la place que la carte
  * va prendre, ce qui distingue une attente d'une panne.
  */
  if (!mounted) return <ScreenSkeleton lines={4} measure="card" />;

  /*
   * Corpus vide : rien à proposer, et surtout rien à inventer. C'est l'état normal tant que
   * l'instruction documentaire n'a pas rendu sa première carte, et il vaut mieux l'afficher
   * tel quel qu'ouvrir l'application sur un contenu invérifié.
   */
  if (!concept) {
    return (
      <Screen>
        <div
          className="stagger mx-auto flex max-w-md flex-col justify-center gap-8 px-6 lg:max-w-read"
          style={{ minHeight: SCREEN_HEIGHT }}
        >
          <h1 className="font-serif-display text-2xl font-semibold leading-tight text-ink">
            Le corpus est en cours de constitution.
          </h1>
          <p className="text-md leading-relaxed text-ink-soft">
            Aucun concept n&apos;a encore terminé son instruction documentaire. Le premier
            s&apos;affichera ici dès qu&apos;il aura été établi sur ses sources.
          </p>
        </div>
      </Screen>
    );
  }

  /*
   * L'accueil, à chaque ouverture de l'application — et non plus au seul premier lancement.
   *
   * Ce n'est pas un écran de présentation qu'on aurait laissé traîner : c'est le seuil. On
   * ouvre l'application pour une carte et une seule, et la franchir volontairement est ce
   * qui fait la différence entre consulter et tomber dessus. La phrase qui s'y lit le dit
   * depuis toujours — « à chaque ouverture ».
   *
   * Ce qui le rend supportable tous les jours est ailleurs, dans `app-entry.ts` : une
   * ouverture n'est pas un retour au premier plan. Revenir de ses messages au bout de dix
   * secondes ne le rejoue pas, et aller d'Explorer à Aujourd'hui non plus.
   */
  if (ouverture) {
    return (
      <Screen>
        <div
          className="stagger mx-auto flex max-w-md flex-col justify-center gap-10 px-6 lg:max-w-read"
          style={{ minHeight: SCREEN_HEIGHT }}
        >
          {/*
           * Le seul endroit de l'application où la marque se montre, et le seul où son regard
           * joue. Ailleurs, l'écran ne porte que ce qu'il y a à comprendre — c'est la décision
           * du §5 de `docs/ux-direction.md`, et une signature en en-tête permanent la casserait
           * pour ne rien apprendre à personne. Ici, on se présente ; ailleurs, jamais.
           */}
          <Wordmark animate className="text-[2.125rem] text-ink lg:text-[2.75rem]" />
          {/*
           * Le surtitre nomme le champ, le titre nomme ce qu'on y couvre.
           *
           * Il ne nomme plus une discipline — « sociologie des organisations » l'était, et
           * elle n'est plus qu'un domaine sur onze. « Les sciences de l'action organisée »
           * nomme ce que les onze ont en commun, ce qui reste vrai à mesure que le corpus
           * s'ouvre. Le surtitre est groupé avec le titre plutôt que posé en enfant direct
           * de la colonne : à `gap-10`, il en serait détaché au point de ne plus se lire
           * comme sa ligne de tête.
           */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              Les sciences de l&apos;action organisée
            </p>
            <h1 className="font-serif-display text-xl font-semibold leading-tight text-ink">
              Sciences du travail, des organisations et des systèmes
            </h1>
          </div>
          <p className="text-md leading-relaxed text-ink-soft">
            Une exploration interdisciplinaire des sciences du travail, des organisations et
            des systèmes.
          </p>
          {/*
           * Le libellé nomme ce qu'on obtient, pas l'action qu'on exécute. « Commencer »
           * convenait à un écran de première fois — il ouvrait l'application. Au seuil de
           * chaque ouverture, il ne dit plus rien de ce qui attend derrière, alors que
           * c'est précisément la seule chose que le lecteur vient chercher.
           */}
          {/*
           * Le franchissement, et le seul endroit où l'ouverture se dépense : l'appui est
           * ce qui atteste qu'on est venu lire cette carte. Tant qu'il n'a pas eu lieu,
           * l'ouverture reste en attente et l'accueil se retrouve au retour.
           */}
          {/*
           * L'ouverture se dépense tout de suite, l'échange attend la charnière du clignement.
           * Les deux ne peuvent pas voyager ensemble : la dépense atteste du geste et doit
           * survivre à tout ce qui pourrait interrompre le mouvement — un onglet touché
           * pendant la fermeture, l'application mise en arrière-plan —, alors que l'échange
           * n'a de sens qu'une fois le fond opaque.
           */}
          <Button
            onClick={() => {
              spendOpening();
              blink(() => {
                setParClignement(true);
                setOuverture(false);
              });
            }}
            className="w-fit"
          >
            Concept du jour
          </Button>
        </div>
        {/*
         * Hors de la colonne, parce que le voile couvre l'écran entier — navigation
         * comprise — et n'appartient à aucune mise en page. Il est rendu dans les deux
         * écrans que le clignement relie : le premier temps se joue ici, le second sur la
         * carte, et l'échange a lieu entre les deux.
         */}
        {veil}
      </Screen>
    );
  }

  return (
    <Screen>
      {/*
       * Le titre, l'accroche, le résumé et la citation restent plafonnés en longueur par le
       * validateur du corpus : la carte reste courte par construction, et non parce que
       * l'écran refuserait de défiler pour la montrer en entier.
       */}
      <div
        className="mx-auto flex max-w-md flex-col px-6 py-6 lg:max-w-read"
        style={{ minHeight: SCREEN_HEIGHT }}
      >
        {/*
         * La carte reste centrée dans ce qui lui revient, et la ligne des cartes passées se
         * pose au pied de l'écran. Le centrage est passé de la colonne entière à ce bloc :
         * porté par la colonne, il aurait centré la carte *et* la ligne ensemble, ce qui
         * aurait décalé la carte vers le haut sur les écrans où elle est courte.
         */}
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          {/*
           * Le même surtitre qu'au seuil, et pour la même raison : la carte du jour peut venir
           * de n'importe lequel des onze domaines, et rien d'autre sur cet écran ne dit de quel
           * champ elle relève. Il se distingue du libellé de thème qui ouvre la carte par sa
           * place — hors du cadre de la carte, au-dessus d'elle — et par son échelle, qui est
           * celle de l'écran et non celle de la carte : `CARD_SCALE` ne le fait pas rétrécir.
           */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
            Les sciences de l&apos;action organisée
          </p>
          <ConceptCard
            concept={concept}
            maxHeight={
              passees > 0 ? `calc(${SCREEN_HEIGHT} - ${PAST_LINK_HEIGHT})` : SCREEN_HEIGHT
            }
            stagger={!parClignement}
          />
        </div>
        {passees > 0 && <PastCardsLink />}
      </div>
      {/* Le second temps du clignement, quand la carte est arrivée par le seuil. */}
      {veil}
    </Screen>
  );
}

/**
 * Le seul chemin vers les cartes déjà lues, et il est fait pour ne pas se voir.
 *
 * L'application produit **une** carte par jour : c'est sa promesse, et un historique mis en
 * avant la défait — on ouvrirait pour parcourir une liste plutôt que pour lire une fiche.
 * Il fallait pourtant qu'on puisse revenir sur une carte de la semaine passée sans la
 * chercher dans le corpus par son auteur, en se rappelant seulement qu'on l'a lue. D'où ce
 * traitement : le plus effacé de l'application — la graisse et la couleur d'un chapeau,
 * sans son ancrage — au pied de l'écran, après la carte et après ses deux actions.
 *
 * Il n'apparaît qu'à partir de la deuxième carte : le premier jour, il ouvrirait sur une
 * liste vide et n'aurait rien à effacer.
 *
 * Sa cible tactile fait 44 px, et les marges négatives rendent cliquables les 24 px que le
 * texte n'occupe pas sans déplacer celui-ci d'un pixel — la même construction que le
 * retour. Discret ne veut pas dire hors d'atteinte.
 */
function PastCardsLink() {
  return (
    <div className="mt-8 flex shrink-0 justify-center">
      <TreeLink
        href="/passees"
        className="press -my-3 inline-flex min-h-11 items-center px-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
      >
        Cartes précédentes
      </TreeLink>
    </div>
  );
}

/**
 * L'échelle typographique de la carte, en une seule valeur.
 *
 * Toutes les tailles de la carte sont exprimées en `em` de cette base : la changer met tout
 * à l'échelle d'un coup, interlignes et écarts compris. C'est ce qui permet à la même fiche
 * de tenir sur un écran de 667 points comme sur un de 900 sans qu'on ait à raccourcir le
 * texte pour le plus petit — un plafond de caractères calibré sur l'iPhone SE aurait appauvri
 * la carte partout ailleurs.
 *
 * **La pente a été redressée** : la borne haute est désormais atteinte vers 716 points au
 * lieu de 844, et un écran de 667 rend 15,0 px au lieu de 13,0. Mesuré sur l'ancien
 * réglage, le résumé — le texte qu'on vient lire — tombait à 13,0 px, le libellé de thème
 * et la référence de citation à 9,7 px, les notices de sources à 10,4 px : l'écran vu tous
 * les jours était celui où l'on lisait le plus petit, sur une application dont c'est la
 * seule fonction.
 *
 * La place gagnée vient de la légende de citation, qui occupait cinq lignes et repart aux
 * sources — voir `ConceptQuotation`.
 *
 * **Le plancher, lui, n'a presque pas bougé, et c'est mesuré.** Sur un écran de 320 × 568,
 * la plus grande base à laquelle la carte tient encore sans défiler est de 13 px : c'est
 * elle qui commande le plancher, pas le confort de lecture. Un plancher plus généreux
 * ferait défiler la carte sur ce petit écran plus souvent qu'il ne le faudrait — et il
 * l'avait fait : la première version de ce réglage faisait déborder cet écran-là de 168 px.
 * Le défilement de page reste le filet pour les cartes que ce plancher ne suffit pas à
 * caler (voir `SCREEN_HEIGHT`) : la carte n'a plus à rétrécir jusqu'à l'illisible pour
 * tenir coûte que coûte.
 *
 * | Écran | Base rendue | Base maximale qui tient |
 * |---|---|---|
 * | 320 × 568 | 12,8 px | 13 px |
 * | 360 × 640 | 14,4 px | 15 px |
 * | 375 × 667 | 15,0 px | 15,75 px |
 * | 390 × 844 | 16,0 px | 17 px |
 *
 * La base reste en rem, donc indexée sur la préférence de taille de police du lecteur.
 *
 * **Sur un écran de bureau, le plafond monte à 18 px et la colonne à 544.** Les deux vont
 * ensemble : agrandir le texte sans élargir la colonne l'aurait ramenée à 44 signes par
 * ligne, et l'élargir sans agrandir le texte l'aurait poussée à 62 — soit, dans les deux
 * cas, une carte moins lisible que sur un téléphone. Le seuil et son arithmétique sont
 * dans `globals.css`, qui porte les deux valeurs ; la pente, elle, reste indexée sur la
 * hauteur, parce que c'est toujours la hauteur qui décide si la carte tient.
 */
const CARD_SCALE = "var(--card-scale)";

/**
 * La carte : thème, concept, citation, accroche, résumé, auteur, sources.
 *
 * C'est tout ce que l'application produit. L'approfondissement est délégué — « Approfondir »
 * emporte la carte et ses sources vers l'IA du lecteur, avec un prompt qui demande à celle-ci
 * de tenir l'attribution transmise pour exacte. Ce qui a coûté le plus cher à établir est
 * précisément ce qui empêchera l'IA de partir sur une vulgarisation.
 *
 * L'ordre suit celui de la première version : le thème situe, le concept se nomme, le texte
 * se lit, et **l'auteur signe à la fin**. C'est l'inverse d'une fiche encyclopédique, et
 * c'est délibéré — on découvre un concept, pas une notice d'auteur.
 *
 * **L'accroche passe devant la citation.** Elle est la question que la carte pose, écrite
 * pour être lue en premier ; la citation est la réponse de l'auteur, et une réponse placée
 * avant sa question se lit comme une épigraphe dont on ne sait pas encore quoi faire.
 * L'enchaînement va désormais de la question à la parole d'auteur puis à l'explication, et
 * le bloc citaire — encadré, sa légende en petit — ne s'interpose plus entre le titre et la
 * phrase qui l'ouvre : le haut de la carte reste du texte qui se lit d'un trait.
 */
function ConceptCard({
  concept,
  maxHeight,
  stagger = true,
}: {
  concept: Concept;
  maxHeight: string;
  /**
   * La cascade d'entrée, et le seul cas où on la retire : l'arrivée par le clignement du
   * seuil, où l'accommodation porte déjà l'entrée. Le défaut est `true` — une carte qui
   * arrive sans que rien d'autre ne l'annonce garde sa cascade.
   */
  stagger?: boolean;
}) {
  const [showSources, setShowSources] = useState(false);
  const sources = concept.sources ?? [];

  return (
    <div
      className={`${stagger ? "stagger " : ""}flex min-h-0 flex-col gap-[1.6em]`}
      /*
       * Le plafond de hauteur ne vaut que pour la vue des sources : c'est lui qui force le
       * défilement à rester interne à cette vue (voir plus bas). Sur la face de la carte, il
       * n'y en a pas — si le contenu dépasse un écran, c'est la page qui défile plutôt que le
       * bas de la carte qui devient inaccessible.
       */
      style={{ fontSize: CARD_SCALE, maxHeight: showSources ? maxHeight : undefined }}
    >
      <div className="flex flex-col gap-[0.6em]">
        {/* Rendu sous condition, et non laissé vide : une ligne absente ne doit pas laisser
            l'écart qu'elle aurait occupé. */}
        {concept.themeLabel && (
          <p className="text-[0.75em] font-medium uppercase tracking-[0.12em] text-ink-faint">
            {concept.themeLabel}
          </p>
        )}
        <h1 className="font-serif-display text-[1.85em] font-semibold leading-[1.15] text-ink">
          {concept.title}
        </h1>
      </div>

      {/*
       * Les sources prennent la place du texte plutôt que de s'ajouter dessous : c'est ce
       * qui garantit qu'ouvrir les sources ne fait jamais déborder l'écran. On consulte ou
       * on lit, pas les deux à la fois — et le concept reste sous les yeux dans les deux cas.
       */}
      {showSources ? (
        /*
         * Les sources défilent dans leur propre cadre, et elles sont les seules.
         *
         * Cinq notices bibliographiques complètes ne tiennent pas sur un écran de téléphone,
         * et les raccourcir reviendrait à retirer ce qui permet de rouvrir le texte — c'est
         * exactement ce que la carte existe pour donner. Ce qui doit rester fixe est le
         * reste : le concept en tête, la signature et les deux actions au pied ne bougent
         * pas, si bien qu'on ne perd jamais de vue ce qu'on est en train de sourcer.
         */
        <div className="enter-rise flex min-h-0 flex-1 flex-col gap-[0.8em] overflow-y-auto">
          <ConceptSourceList sources={sources} />
          {/*
           * La note d'attribution appartient à la vue des sources, pas à la face de la carte :
           * elle dit ce que le corpus sait de la paternité du concept — coauteurs rétablis,
           * paternité discutée — et redit donc, mot pour mot, ce que la ligne d'auteur affiche
           * déjà. Sur la face, elle coûtait deux lignes pour ne rien apprendre.
           */}
          {concept.attributionNote && (
            <p className="text-[0.8em] leading-relaxed text-ink-faint">
              {concept.attributionNote}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-[1.1em]">
          <p className="font-serif-display text-[1.15em] leading-snug text-ink">
            {espacesFrancaises(concept.hookQuestion)}
          </p>
          {concept.quotation && <ConceptQuotation quotation={concept.quotation} compact />}
          <p className="text-[1em] leading-relaxed text-ink-soft">{concept.shortExplanation}</p>
        </div>
      )}

      {concept.authorLabel && (
        <p className="text-[0.94em] text-ink-soft">{concept.authorLabel}</p>
      )}

      {/* Les deux actions sur une même ligne : approfondir se lit d'abord, les sources
          restent à portée sans réclamer l'attention. */}
      <div className="flex items-center gap-5">
        <DeepenButton concept={concept} />
        {sources.length > 0 && (
          /*
           * La taille de ce bouton ne suit pas `CARD_SCALE`, et sa hauteur minimale est
           * celle du reste de l'application.
           *
           * Il mesurait 74 × 15 px sur un écran de 667 points — sous le seuil de 24 px
           * de WCAG 2.5.8, et loin des 44 px recommandés au doigt — parce qu'il n'avait
           * ni remplissage ni hauteur propre : sa taille était celle de son texte, lequel
           * rétrécissait avec la carte. Or « Revenir au concept » est le seul moyen de
           * quitter la vue des sources. Un contrôle n'est pas du contenu : il n'a pas à
           * rapetisser avec lui, et « Approfondir » ne le faisait déjà pas.
           */
          <button
            type="button"
            onClick={() => setShowSources((value) => !value)}
            aria-expanded={showSources}
            className="press -mx-2 inline-flex min-h-11 items-center px-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-faint hover:text-ink"
          >
            {showSources ? "Revenir au concept" : `Sources · ${sources.length}`}
          </button>
        )}
      </div>
    </div>
  );
}
