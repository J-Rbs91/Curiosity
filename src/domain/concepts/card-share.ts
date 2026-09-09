import type { Concept } from "@/types";

/**
 * Le partage d'une carte — vers une personne, et non vers une IA.
 *
 * L'application avait déjà un passage de relais : `ai-handoff.ts`, qui emporte la carte, son
 * corpus et ses instructions vers le modèle du lecteur. Ce module-ci répond à l'autre
 * question, et elle n'a pas la même réponse : ce qu'on envoie à quelqu'un n'est pas un
 * dossier de 22 000 caractères, c'est **de quoi vouloir ouvrir le lien**.
 *
 * D'où ce qui part, et ce qui reste :
 *
 * | Emporté | Laissé |
 * |---|---|
 * | Le concept et son auteur | Le résumé — il donne la réponse avant la question |
 * | L'accroche, qui est la question que la carte pose | La citation, ses sources, la note d'attribution |
 * | Ce qu'est l'application, en une ligne | Les instructions documentaires |
 * | L'adresse de la carte | |
 *
 * Le résumé est le retrait qui demande une justification. Il tient en 200 caractères et
 * aurait donc pu voyager — mais il répond à l'accroche, et une carte partagée qui répond à
 * sa propre question ne fait plus ouvrir personne. Ce qui est envoyé doit donner envie de
 * lire la carte, pas en dispenser.
 *
 * Le module ne connaît ni l'interface, ni le mécanisme de partage, ni l'adresse sous
 * laquelle l'application est servie : il reçoit l'adresse et rend un message. C'est
 * `ShareButton` qui décide ce qu'il en fait — feuille du système, presse-papiers.
 */

/** Ce qu'un partage transporte, dans la forme que `navigator.share` attend. */
export interface CardShare {
  /** Le titre du partage : le concept, et l'auteur quand la carte le nomme. */
  title: string;
  /** Le message lui-même — l'accroche, puis ce qu'est l'application. */
  text: string;
  /**
   * L'adresse publique de la carte. Absente hors navigateur : l'application est exportée en
   * fichiers statiques et ne connaît pas le domaine qui la sert (voir `absoluteUrl`). Un
   * partage sans lien reste un partage ; un partage qui pointe ailleurs serait pire.
   */
  url?: string;
}

export interface CardShareInput {
  concept: Concept;
  url?: string;
}

/**
 * La ligne qui dit d'où vient la carte, et pourquoi elle est indispensable.
 *
 * Sans elle, le message reçu est un titre, une question et une adresse : rien ne dit qu'il y
 * a une application derrière, ni ce qu'elle fait. C'est précisément le fait qu'on veut
 * propager — la carte n'est que ce qui en donne l'envie.
 */
export const SHARE_SIGNATURE =
  "Curiosity, une carte par jour pour comprendre le travail et les organisations.";

/**
 * Le message d'un partage.
 *
 * Le titre porte l'auteur quand la carte le nomme : « Le réel de l'activité » ne dit pas
 * grand-chose de plus qu'un titre de billet, « Le réel de l'activité — Yves Clot » annonce
 * qu'il y a un texte et quelqu'un derrière.
 *
 * Le texte n'est pas passé par `espacesFrancaises` : les espaces fines insécables sont une
 * décision de rendu, prise pour l'écran de l'application. Ce message-ci est repris tel quel
 * par une messagerie dont on ne connaît ni la fonte ni le repli, et une espace fine mal
 * rendue s'y voit plus qu'une espace ordinaire ne manque.
 */
export function buildCardShare({ concept, url }: CardShareInput): CardShare {
  const auteur = concept.authorLabel?.trim();

  return {
    title: auteur ? `${concept.title} — ${auteur}` : concept.title,
    text: [concept.hookQuestion.trim(), SHARE_SIGNATURE].join("\n\n"),
    url,
  };
}

/**
 * Le même partage, aplati en une seule chaîne.
 *
 * C'est ce qui part au presse-papiers quand la feuille du système n'existe pas — sur un
 * navigateur de bureau, essentiellement. Le lien y est **dans** le texte, alors que
 * `navigator.share` le reçoit à part : coller un message dont l'adresse manque reviendrait à
 * partager une carte qu'on ne peut pas ouvrir, ce qui est le seul échec qui compte ici.
 */
export function shareAsText(share: CardShare): string {
  return [share.title, share.text, share.url].filter(Boolean).join("\n\n");
}
