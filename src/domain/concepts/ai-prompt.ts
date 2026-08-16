import type { Author, Concept, Theme } from "@/types";

export interface ConceptPromptInput {
  concept: Concept;
  authors: Author[];
  themes: Theme[];
}

/**
 * Construit le texte envoyé à une application d'IA depuis le bouton « + ».
 *
 * Ce n'est pas un partage : on n'envoie pas la fiche, on envoie une commande.
 * Les quatre éléments visibles à l'écran — thème, concept, résumé, auteur — ne
 * sont que le contexte ; l'essentiel du texte dit quoi en faire.
 *
 * Deux exigences sont structurelles et ne doivent pas disparaître d'une
 * réécriture :
 *
 * 1. **La progression ne se nomme jamais.** Le texte demande une montée du
 *    débutant vers le spécialiste, et interdit explicitement d'écrire le mot
 *    « débutant », « intermédiaire » ou « expert ». Sans cette interdiction,
 *    tous les modèles produisent trois sections étiquetées, ce qui découpe en
 *    paliers ce qui doit se lire d'un trait.
 * 2. **Une lacune se déclare, elle ne se comble pas.** La demande de sources
 *    dit explicitement qu'une référence incertaine doit être signalée plutôt
 *    qu'inventée. C'est la seule protection possible à distance contre une
 *    bibliographie plausible et fausse.
 */
export function buildConceptPrompt({ concept, authors, themes }: ConceptPromptInput): string {
  const authorNames = authors.map((a) => a.name).join(", ");
  const themeTitles = themes.map((t) => t.title).join(", ");

  return `Tu es un pédagogue spécialiste de sociologie des organisations. Je veux comprendre en profondeur le concept ci-dessous.

CE QUE J'AI
Thème : ${themeTitles || "sociologie des organisations"}
Concept : ${concept.title}
Auteur de référence : ${authorNames || "non précisé"}
Résumé dont je dispose : ${concept.shortExplanation}

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
