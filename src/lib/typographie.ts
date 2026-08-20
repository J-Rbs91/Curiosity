/**
 * Les espaces de la ponctuation double française, normalisées à l'affichage.
 *
 * **Pourquoi à l'affichage et non dans le corpus.** Les textes sont écrits par plusieurs
 * mains et à plusieurs mois d'intervalle ; sur trente-deux fichiers, on compte aujourd'hui
 * trois caractères d'espace différents devant un même deux-points. Corriger les fichiers
 * maîtres corrigerait ceux qui existent et pas ceux qui viendront, et une règle qui ne tient
 * que tant que personne ne l'oublie n'est pas une règle. Ici elle est tenue par le rendu, une
 * fois, pour tout ce qui s'affiche.
 *
 * **Ce que cela répare, et qui se voit.** Une espace ordinaire devant « ? » autorise le
 * navigateur à couper à cet endroit : le signe part seul en tête de la ligne suivante. Sur
 * une phrase de liste, cela n'arrive presque jamais ; sur mille cinq cents mots dans une
 * colonne de trente-six signes, cela arrive à chaque page, et c'est le défaut de mise en page
 * le plus visible de l'écran de lecture.
 *
 * **La règle appliquée est celle du Lexique des règles typographiques** : espace fine
 * insécable devant les trois signes hauts, « ? », « ! » et « ; », dont la forme laisse déjà
 * du blanc sous elle ; espace insécable de chasse pleine devant « : » et à l'intérieur des
 * guillemets, dont la forme n'en laisse aucun. Les deux caractères sont présents dans les
 * deux familles du produit — vérifié à la chasse, une espace fine y vaut exactement la
 * moitié d'une espace ordinaire, et non le rectangle du glyphe manquant.
 *
 * **Une espace n'est jamais ajoutée là où l'auteur n'en a pas mis.** La fonction ne fait que
 * remplacer une espace existante : elle normalise, elle ne compose pas. C'est ce qui la rend
 * sûre sur une adresse — `https://` n'a pas d'espace devant son deux-points — et sur un point
 * d'interrogation collé au mot qui le précède, qui reste tel quel.
 */

/** Espace fine insécable — U+202F. */
const FINE_INSECABLE = " ";

/** Espace insécable de chasse pleine — U+00A0. */
const INSECABLE = " ";

/**
 * Toutes les espaces qu'on peut rencontrer à cet endroit : l'ordinaire, l'insécable, la fine
 * insécable et la fine sécable. Les quatre sont déjà présentes dans le corpus, et les
 * confondre ici est précisément ce qui permet de n'en produire qu'une en sortie.
 */
const ESPACES = "[ \\u00a0\\u202f\\u2009]+";

const AVANT_FINE = new RegExp(`${ESPACES}([?!;])`, "g");
const AVANT_INSECABLE = new RegExp(`${ESPACES}([:»])`, "g");
const APRES_GUILLEMET_OUVRANT = new RegExp(`(«)${ESPACES}`, "g");

export function espacesFrancaises(texte: string): string {
  return texte
    .replace(AVANT_FINE, `${FINE_INSECABLE}$1`)
    .replace(AVANT_INSECABLE, `${INSECABLE}$1`)
    .replace(APRES_GUILLEMET_OUVRANT, `$1${INSECABLE}`);
}
