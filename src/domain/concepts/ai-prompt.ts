import type { Concept, Domain } from "@/types";

export interface ConceptPromptInput {
  concept: Concept;
  /**
   * Le domaine d'où vient la carte, quand l'application sait le résoudre.
   *
   * Il fixe la discipline dans laquelle l'IA doit répondre — c'est la première ligne du
   * texte envoyé. Elle était écrite en dur, ce qui n'a cessé d'être vrai que le jour où
   * l'application a couvert autre chose : demander une explication de sociologie des
   * organisations sur un concept d'ergonomie ne produit pas une erreur visible, mais une
   * réponse cadrée par la mauvaise discipline.
   */
  domain?: Domain;
}

/**
 * Construit le texte envoyé à une application d'IA depuis le bouton « Approfondir ».
 *
 * C'est **le** chemin d'approfondissement de l'application : il n'y a plus de session, de
 * mécanisme détaillé ni de quiz. La carte donne un point de départ exact — le bon auteur,
 * une citation verbatim, des sources atteignables — et l'IA du lecteur fait le reste.
 *
 * D'où l'inversion par rapport à la version précédente : le prompt n'envoie plus seulement
 * une commande, il **emporte la matière vérifiée**. Ce qui a coûté le plus cher à établir —
 * l'attribution réelle, la citation localisée, les cinq références — est précisément ce qui
 * empêchera l'IA de partir sur une vulgarisation. Une IA qui reçoit « Cohen, March & Olsen,
 * 1972 » ne rendra pas le même texte qu'une IA qui reçoit « March ».
 *
 * Trois exigences sont structurelles et ne doivent pas disparaître d'une réécriture :
 *
 * 1. **La progression ne se nomme jamais.** Le texte demande une montée du débutant vers
 *    le spécialiste, et interdit explicitement d'écrire « débutant », « intermédiaire » ou
 *    « expert ». Sans cette interdiction, tous les modèles produisent trois sections
 *    étiquetées, ce qui découpe en paliers ce qui doit se lire d'un trait.
 * 2. **Une lacune se déclare, elle ne se comble pas.** C'est la seule protection possible,
 *    à distance, contre une bibliographie plausible et fausse.
 * 3. **L'attribution transmise fait autorité sur la mémoire du modèle.** Elle a été
 *    vérifiée sur les textes ; la mémoire d'un modèle, non.
 */
export function buildConceptPrompt({ concept, domain }: ConceptPromptInput): string {
  const lines = [
    ...(domain ? [`Domaine : ${domain.label}`] : []),
    // Omise plutôt que remplie d'un repli : nommer une discipline que la carte ne porte pas
    // serait exactement l'erreur d'attribution que le reste du prompt s'emploie à éviter.
    ...(concept.themeLabel ? [`Thème : ${concept.themeLabel}`] : []),
    `Concept : ${concept.title}`,
    `Auteur : ${concept.authorLabel ?? "non précisé"}`,
  ];
  if (concept.attributionNote) lines.push(`Attribution établie : ${concept.attributionNote}`);
  if (concept.quotation) {
    // Même règle qu'à l'écran : le nom n'est ajouté que si la référence ne le porte pas déjà.
    // Le prompt doit transmettre l'attribution exacte, pas la redire.
    const attributed = concept.quotation.attributedTo
      ? `${concept.quotation.attributedTo}, `
      : "";
    lines.push(
      `Citation : « ${concept.quotation.text} » — ${attributed}${concept.quotation.reference}` +
        (concept.quotation.translationNote ? ` (${concept.quotation.translationNote})` : "")
    );
  }
  lines.push(`Résumé dont je dispose : ${concept.shortExplanation}`);

  const sources = (concept.sources ?? []).map((s) =>
    `- ${s.label}${s.reference ? `, ${s.reference}` : ""}`
  );

  const persona = domain
    ? `Tu es un pédagogue spécialiste de ${domain.label}.`
    : "Tu es un pédagogue.";

  return `${persona} Je veux comprendre en profondeur le concept ci-dessous.

CE QUE J'AI
${lines.join("\n")}
${sources.length > 0 ? `\nSources vérifiées :\n${sources.join("\n")}\n` : ""}
Ces éléments ont été vérifiés sur les textes eux-mêmes : l'attribution, la citation et sa
localisation, et les références. Tiens-les pour exacts, y compris s'ils contredisent ce
dont tu te souviens — et signale-le-moi si c'est le cas, plutôt que de les corriger
silencieusement.

CE QUE J'ATTENDS
Écris une explication continue qui part de zéro et va jusqu'au niveau d'un spécialiste, en une seule progression.

N'annonce jamais de niveau. N'écris à aucun moment « pour un débutant », « niveau intermédiaire », « pour aller vers l'expertise », « niveau avancé » ni aucun équivalent, et ne découpe pas le texte en paliers étiquetés. La montée en difficulté doit se sentir dans le propos : chaque paragraphe suppose acquis le précédent et ajoute une exigence.

Déroule dans cet ordre, sans numéroter les parties :

Le problème concret que ce concept permet de voir. Pars d'une situation ordinaire, racontée sans vocabulaire savant, où quelque chose ne s'explique pas.

La définition, énoncée une fois, précisément, avec les mots exacts qui comptent et pourquoi ils comptent.

Le mécanisme : ce qui produit le phénomène, dans quelles conditions il apparaît, ce qui l'intensifie et ce qui le fait disparaître.

Trois exemples de nature différente — une entreprise privée, une administration ou un service public, une équipe de quelques personnes. Chacun doit montrer le mécanisme à l'œuvre, pas se contenter de coller l'étiquette du concept sur une situation.

Les limites : ce que le concept n'explique pas, les cas où il induit en erreur, les critiques qui lui ont été adressées et par qui.

Les concepts voisins avec lesquels on le confond, et le critère précis qui les sépare.

L'état de la discussion : ce qui fait consensus aujourd'hui, ce qui reste débattu.

SOURCES
Cite les travaux fondateurs avec auteur, titre et année. Distingue explicitement ce qui vient directement de l'auteur de ce qui relève d'une interprétation ou d'un usage postérieur. Si tu n'es pas certain d'une référence, dis-le au lieu de l'inventer : une lacune signalée m'est plus utile qu'une référence fausse.

POUR ALLER PLUS LOIN
Termine par trois recommandations, de la plus accessible à la plus exigeante : une lecture d'entrée, un texte de référence, une piste pour approfondir réellement. Pour chacune, une phrase sur ce qu'elle apporte que les deux autres n'apportent pas.

FORME
Français. Prose suivie, paragraphes pleins. Pas de listes à puces en dehors des sources et des recommandations. Pas de gras décoratif. Ne me résume pas ce que je viens de te donner : commence directement par la situation concrète.`;
}
