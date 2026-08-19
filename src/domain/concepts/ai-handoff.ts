import { AI_LEARNING_PROMPT } from "./ai-prompt";
import { SOURCE_KIND_LABEL, orderedSources } from "./sources";
import type { Concept, Domain, Family, Source } from "@/types";

/**
 * Le passage de relais vers l'IA du lecteur.
 *
 * C'est **le** chemin d'approfondissement de l'application : il n'y a plus de session, de
 * mécanisme détaillé ni de quiz. La carte donne un point de départ exact — le bon auteur,
 * une citation verbatim, des sources atteignables — et l'IA du lecteur prend la suite.
 *
 * Le message envoyé n'est donc pas la carte, et pas davantage une commande : c'est un
 * dossier autonome, qui tient sans aucun contexte préalable. Il porte d'abord les
 * instructions (`ai-prompt.ts`), qui disent comment expliquer et surtout à quelles règles
 * documentaires se tenir, puis la carte et son corpus, qui disent ce qui est établi. Ce qui
 * a coûté le plus cher à instruire — l'attribution réelle, la citation localisée, les cinq
 * références — est précisément ce qui empêchera l'IA de partir sur une vulgarisation : une
 * IA qui reçoit « Cohen, March & Olsen, 1972 » ne rend pas le même texte qu'une IA qui
 * reçoit « March ».
 *
 * Le module ne connaît ni l'interface ni le mécanisme de partage. Il rend une chaîne ; le
 * bouton décide ce qu'il en fait — feuille de partage du système, presse-papiers.
 */
export interface CardHandoff {
  concept: Concept;

  /**
   * Le domaine d'où vient la carte, quand l'application sait le résoudre.
   *
   * Il fixe la discipline dans laquelle l'IA doit répondre. Il est omis plutôt que rempli
   * d'un repli lorsqu'il ne se résout pas : nommer une discipline que la carte ne porte pas
   * serait exactement l'erreur d'attribution que les instructions s'emploient à éviter.
   */
  domain?: Domain;

  /** La famille du domaine, quand elle est connue — elle situe la discipline elle-même. */
  family?: Family;

  /**
   * L'adresse publique de la carte, pour que le lecteur puisse y revenir depuis sa
   * conversation. Absente hors navigateur, et lorsque l'hébergement n'est pas connu.
   */
  url?: string;
}

/**
 * La limite de taille est celle des applications destinataires, pas la nôtre.
 *
 * Le message complet pèse environ 22 000 caractères — le prompt en fait l'essentiel, la
 * carte un millier. Rien ne l'écourte ici : tronquer les instructions retirerait les
 * garde-fous documentaires, et tronquer les sources produirait un corpus incomplet présenté
 * comme complet. Les deux sont pires qu'un partage refusé par l'application d'arrivée, qui
 * est au moins visible.
 *
 * Les contraintes réelles constatées, si un jour il faut y revenir : Android transporte le
 * texte d'un partage dans une transaction Binder plafonnée à quelques centaines de kilooctets
 * — un ordre de grandeur au-dessus d'ici — mais certaines applications destinataires
 * raccourcissent d'elles-mêmes ce qu'elles collent dans leur champ de saisie, et un partage
 * qui passe par une URL (`?q=`, `?text=`) se heurte à des limites bien plus basses. C'est
 * pourquoi le bouton passe le texte à `navigator.share`, jamais dans une adresse.
 */

/** Un champ de la carte, omis en entier lorsque la valeur manque. */
function field(label: string, value: string | undefined): string | null {
  const texte = value?.trim();
  return texte ? `${label} :\n${texte}` : null;
}

/**
 * Une source, avec tout ce que la fiche en sait.
 *
 * Rien n'est résumé : le libellé porte déjà auteurs, titre, publication, volume, numéro,
 * pagination et année tels que l'instruction documentaire les a établis, et la référence
 * porte l'identifiant — DOI, ISBN, localisation. Les recomposer serait la seule façon de les
 * abîmer.
 */
function formatSource(source: Source, rank: number): string {
  const lignes = [`${rank}. ${source.label.trim()}`];
  const kind = SOURCE_KIND_LABEL[source.kind];
  if (kind) lignes.push(`   Type : ${kind}`);
  if (source.reference?.trim()) lignes.push(`   Référence : ${source.reference.trim()}`);
  if (source.url?.trim()) lignes.push(`   URL : ${source.url.trim()}`);
  return lignes.join("\n");
}

/**
 * La carte, mise à plat pour être lue par une IA.
 *
 * Un champ absent disparaît avec son titre — ni « undefined », ni « N/A », ni titre vide.
 * Une carte est un état du corpus à un instant donné : toutes n'ont pas de citation, toutes
 * n'ont pas encore de thème connu de l'application, et présenter ces manques comme des
 * valeurs reviendrait à faire lire à l'IA quelque chose que le corpus n'affirme pas.
 */
export function formatCardForAI({ concept, domain, family, url }: CardHandoff): string {
  const quotation = concept.quotation;

  /*
   * Même règle qu'à l'écran : le nom n'est ajouté devant la référence que si celle-ci ne le
   * porte pas déjà — sans quoi la ligne redirait « Joan Acker, Joan Acker, "Hierarchies…" ».
   */
  const quotationReference = quotation
    ? [
        `${quotation.attributedTo ? `${quotation.attributedTo}, ` : ""}${quotation.reference}`,
        quotation.translationNote,
      ]
        .filter((ligne) => ligne?.trim())
        .join("\n")
    : undefined;

  const sources = orderedSources(concept.sources ?? []);

  const blocs = [
    field("Domaine", domain?.label),
    field("Famille", family?.label),
    field("Thème", concept.themeLabel),
    field("Concept", concept.title),
    // Le libellé porte l'attribution telle que le corpus l'a établie, plusieurs noms compris :
    // le réduire à un auteur principal effacerait une œuvre collective.
    field("Auteur(s)", concept.authorLabel),
    field("Attribution établie", concept.attributionNote),
    // Les guillemets sont posés ici, jamais stockés : le texte enregistré doit rester
    // comparable caractère par caractère à l'édition citée.
    field("Citation", quotation && `« ${quotation.text} »`),
    field("Référence de la citation", quotationReference),
    field("Accroche", concept.hookQuestion),
    field("Résumé", concept.shortExplanation),
    field(
      "Sources",
      sources.length > 0
        ? sources.map((source, index) => formatSource(source, index + 1)).join("\n\n")
        : undefined
    ),
    field("Lien vers la carte", url),
  ].filter((bloc): bloc is string => bloc !== null);

  /*
   * L'en-tête ne dit pas « carte », et ce n'est pas cosmétique : le prompt demande à l'IA de
   * ne jamais parler au lecteur de la structure qui lui a transmis les informations. Une
   * enveloppe qui annonce une carte est précisément ce qui lui fait écrire « la carte
   * n'établit pas… » au lieu de « les sources disponibles ne permettent pas… ».
   */
  return `=== CONTENU À ÉTUDIER ===\n\n${blocs.join("\n\n")}`;
}

/**
 * Le message unique envoyé depuis « Approfondir » : instructions, puis carte.
 *
 * Aucune question n'est posée à la place du lecteur. Le contexte suffit à commencer, et
 * imposer « explique-moi cette carte » lui retirerait la sienne. La dernière ligne se
 * contente d'autoriser l'IA à démarrer, pour les applications qui attendent une consigne
 * plutôt qu'un dossier.
 */
export function buildAISharePayload(input: CardHandoff): string {
  return `${AI_LEARNING_PROMPT}

${formatCardForAI(input)}

=== FIN DU CONTENU ===

Utilise ces éléments comme point de départ de notre discussion.`;
}
