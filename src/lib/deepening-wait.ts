/**
 * L'attente d'« Approfondir » — la seule attente que cette application fabrique.
 *
 * **Ce qu'elle n'est pas.** Ce n'est pas un chargement. Le texte est écrit à l'avance, projeté
 * dans le dépôt et servi en statique : il est déjà là quand on appuie, et le §6 de
 * `docs/ux-direction.md` explique que c'est tout le sujet. Rien ne se calcule, rien ne
 * s'interroge, aucun modèle n'est appelé.
 *
 * **Ce qu'elle est.** Un seuil, comme celui de l'ouverture. Passer d'une carte de quarante mots
 * à un texte de mille cinq cents en sautant d'une image à l'autre ne dit pas ce qu'on vient de
 * demander ; l'attente le dit, et elle le dit avec le seul geste que la marque sache faire —
 * l'œil lit le mot « Chargement… », et il a fini de le lire quand le texte arrive.
 *
 * **Pourquoi tirée au sort plutôt que fixe.** Une attente constante s'apprend en trois appuis
 * et devient une latence : on sait exactement quand relever les yeux, et le seuil retombe au
 * rang de délai. Un tirage garde à chaque passage la part d'incertitude qui fait qu'on regarde.
 * C'est le même motif que les pauses de relance du regard, et pour la même raison — voir
 * `replayPausesMs` dans `mark-geometry.mjs`.
 *
 * **Ce que cette attente coûte, et à qui elle ne se paie pas.** Elle retient un texte qui est
 * prêt, ce qu'aucune autre animation du produit ne fait — le §7 le dit et le borne. Elle ne se
 * paie donc qu'ici, une fois par appui, et pas du tout en mouvement réduit : sans l'animation
 * qu'elle porte, il ne resterait d'elle qu'un délai, c'est-à-dire la seule chose qu'elle n'a
 * jamais eu le droit d'être.
 */

/**
 * Les bornes du tirage, en millisecondes et incluses.
 *
 * Le plancher est aussi la durée nominale de la partition `reading` — la valeur écrite dans
 * `--dur-gaze-reading`, et celle sur laquelle `npm test` vérifie l'écart entre deux
 * clignements. Les deux ne peuvent pas diverger : un contrôle les compare.
 *
 * Le plafond vaut une fois et demie le plancher, moins un cheveu. C'est l'écart qu'il faut pour
 * qu'on ne puisse pas anticiper la fin — en deçà, deux tirages se ressemblent trop — et c'est
 * aussi ce que la partition supporte sans se déformer : elle s'étire de moitié, ses fixations
 * passent de 286–374 à 420–549 ms, et ses saccades de 66 à 97. Les unes comme les autres
 * restent dans les ordres de grandeur du regard humain, ce qui ne serait plus vrai si on
 * doublait.
 */
export const DEEPENING_WAIT_MS = { min: 2200, max: 3230 } as const;

/**
 * Une durée d'attente, tirée uniformément entre les deux bornes.
 *
 * La source d'aléa est un paramètre pour que le test puisse tenir les deux extrêmes plutôt que
 * de constater qu'un échantillon est tombé dedans. Elle n'est jamais passée en production.
 *
 * Le résultat est arrondi à la milliseconde : c'est l'unité de la propriété CSS qui le
 * recevra, et une décimale y serait tronquée sans qu'on le sache.
 */
export function drawDeepeningWaitMs(random: () => number = Math.random): number {
  const { min, max } = DEEPENING_WAIT_MS;
  return Math.round(min + random() * (max - min));
}
