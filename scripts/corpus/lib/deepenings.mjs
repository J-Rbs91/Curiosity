/**
 * Validation et projection des approfondissements.
 *
 * Sans dépendance au disque, comme `validate.mjs` et `project.mjs` : le contrôle doit être
 * testable sans corpus, et il l'est — `pipeline.test.mjs` s'en sert.
 *
 * Ce que ce module peut vérifier est mécanique : des longueurs, des formes, l'existence de la
 * carte prolongée. Les quatre exigences documentaires du protocole — la méthode ne s'annonce
 * pas, une lacune se déclare, le corpus fait autorité, la frontière se voit — ne se
 * contrôlent pas par un programme. Deux d'entre elles laissent malgré tout des traces
 * mécaniques, et ce sont celles qu'on attrape ici : un titre qui étiquette un palier de
 * difficulté, et un champ `limits` rempli de précautions sans objet.
 */

/** Nombre de mots d'un texte. Approximation suffisante : on borne un ordre de grandeur. */
function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Un titre qui étiquette sa fonction dans le texte plutôt que son sujet.
 *
 * La liste est volontairement close et courte. Elle n'attrape pas tout — « Le mécanisme »
 * passera —, mais elle attrape ce que les modèles produisent spontanément quand on leur
 * demande un texte long, et c'est exactement ce que le protocole interdit : un palier annoncé
 * oblige le lecteur à se situer avant d'avoir compris.
 */
const TITRES_DE_FONCTION = [
  /^(pour )?(commencer|conclure|finir|résumer)/i,
  /^(en |pour )?(résumé|conclusion|synthèse|introduction|préambule)/i,
  /^pour aller plus loin/i,
  /^(d'abord|ensuite|enfin|premièrement|deuxièmement)/i,
  /^approfondissement/i,
  /niveau (débutant|intermédiaire|avancé|expert)/i,
  /pour (les )?(débutants|néophytes|initiés|experts)/i,
  /*
   * Les deux apostrophes, et ce n'est pas une coquetterie : le protocole impose l'apostrophe
   * typographique dans les textes, si bien qu'un titre interdit arrive toujours avec elle.
   * Écrit avec la seule apostrophe droite, ce motif ne se serait déclenché sur rien de ce
   * qu'il existe pour attraper.
   */
  /^(ce qu['’]il faut retenir|à retenir)/i,
];

/**
 * Du balisage dans une chaîne rendue telle quelle.
 *
 * L'application affiche ces paragraphes sans interprète : une paire d'astérisques s'y voit,
 * un lien Markdown y reste écrit avec ses crochets. Mieux vaut refuser la projection que
 * publier `**la rationalité**`.
 */
const BALISAGE = [
  { motif: /\*\*|__/, nom: "gras Markdown (** ou __)" },
  { motif: /^#{1,6}\s/m, nom: "titre Markdown (#)" },
  { motif: /^\s*[-*+]\s/m, nom: "liste à puces" },
  { motif: /^\s*\d+\.\s/m, nom: "liste numérotée" },
  { motif: /\[[^\]]+\]\([^)]+\)/, nom: "lien Markdown" },
  { motif: /`/, nom: "accent grave" },
  /*
   * Le tiret cadratin est interdit sur tout ce que l'application affiche — voir
   * docs/corpus-workflow.md, « Ce que le lecteur ne voit jamais ». La règle valait déjà pour
   * les champs de la carte ; un texte de mille cinq cents mots servi par le même écran ne
   * peut pas y faire exception, sans quoi le lecteur rencontrerait sur la page
   * d'approfondissement exactement ce que la carte lui épargne.
   */
  { motif: /—/, nom: "tiret cadratin (interdit sur tout champ affiché)" },
];

/**
 * Des précautions sans objet.
 *
 * `limits` doit nommer ce qui manque — un texte non ouvert, une attribution seconde main, une
 * distinction absente du corpus. Un paragraphe qui se contente de dire qu'il faudrait
 * vérifier, sans dire quoi, remplit le champ sans rien déclarer : c'est la forme que prend
 * l'exigence quand on la satisfait sans la comprendre.
 */
function limiteSansObjet(paragraphe) {
  const nomme = /(p\.\s?\d|§|texte|ouvrage|article|chapitre|passage|édition|traduction|source|carte|corpus|notice|conférence|entretien|donnée|terme|distinction|attribution|citation)/i;
  return !nomme.test(paragraphe);
}

const VOLUME = {
  /* Bornes dures : en deçà le texte n'ajoute rien à la carte, au delà personne ne le finit.
     Le protocole vise 1 300-1 700 ; ces bornes-ci laissent respirer sans laisser dériver. */
  minWords: 1000,
  maxWords: 2100,
};

/**
 * Contrôle d'un approfondissement isolé. Rend la liste de ses erreurs, vide si tout va bien.
 *
 * `conceptIds` est l'ensemble des cartes validées : un approfondissement dont la carte
 * n'existe pas ne peut pas être projeté, puisque l'écran qui l'affiche part de la carte.
 */
export function validateDeepening(deepening, { conceptIds } = {}) {
  const errors = [];
  const fail = (message) => errors.push(message);

  if (!deepening || typeof deepening !== "object") return ["fichier vide ou illisible"];

  const { conceptId, lead, sections, limits } = deepening;

  if (typeof conceptId !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(conceptId)) {
    fail("conceptId absent ou mal formé");
  } else if (conceptIds && !conceptIds.has(conceptId)) {
    fail(`conceptId « ${conceptId} » ne correspond à aucune carte validée`);
  }

  const paragraphes = [];
  /** Tout ce qui atteint l'écran, titres compris : le balisage se contrôle sur cet ensemble. */
  const affiches = [];
  const controlerBloc = (valeur, champ, { min, max }) => {
    if (!Array.isArray(valeur) || valeur.length < min) {
      fail(`${champ} : ${min} paragraphe(s) au moins`);
      return;
    }
    if (valeur.length > max) fail(`${champ} : ${max} paragraphes au plus, ${valeur.length} reçus`);
    valeur.forEach((p, i) => {
      if (typeof p !== "string" || p.trim().length < 80) {
        fail(`${champ}[${i}] : paragraphe absent ou trop court`);
        return;
      }
      paragraphes.push({ champ: `${champ}[${i}]`, texte: p });
      affiches.push({ champ: `${champ}[${i}]`, texte: p });
    });
  };

  controlerBloc(lead, "lead", { min: 1, max: 3 });

  if (!Array.isArray(sections) || sections.length < 3) {
    fail("sections : 3 sections au moins");
  } else {
    if (sections.length > 7) fail(`sections : 7 au plus, ${sections.length} reçues`);
    sections.forEach((section, i) => {
      const titre = section?.title;
      if (typeof titre !== "string" || titre.trim().length < 3) {
        fail(`sections[${i}] : titre absent`);
      } else {
        if (titre.length > 60) fail(`sections[${i}] : titre de plus de 60 caractères`);
        affiches.push({ champ: `sections[${i}].title`, texte: titre });
        const fonction = TITRES_DE_FONCTION.find((motif) => motif.test(titre.trim()));
        if (fonction)
          fail(
            `sections[${i}] : « ${titre} » étiquette la fonction de la section, pas son sujet`
          );
      }
      controlerBloc(section?.paragraphs, `sections[${i}].paragraphs`, { min: 1, max: 6 });
    });
  }

  controlerBloc(limits, "limits", { min: 1, max: 5 });
  if (Array.isArray(limits) && limits.every((p) => typeof p === "string" && limiteSansObjet(p))) {
    fail("limits : aucune limite ne nomme ce qui manque — précautions sans objet");
  }

  for (const { champ, texte } of affiches) {
    const balise = BALISAGE.find(({ motif }) => motif.test(texte));
    if (balise) fail(`${champ} : ${balise.nom} dans un texte rendu tel quel`);
  }

  const total = paragraphes.reduce((n, { texte }) => n + words(texte), 0);
  if (paragraphes.length > 0) {
    if (total < VOLUME.minWords) fail(`volume : ${total} mots, ${VOLUME.minWords} au moins`);
    if (total > VOLUME.maxWords) fail(`volume : ${total} mots, ${VOLUME.maxWords} au plus`);
  }

  return errors;
}

/** Le nombre de mots d'un approfondissement, pour le compte rendu de projection. */
export function countWords(deepening) {
  const blocs = [
    ...(deepening.lead ?? []),
    ...(deepening.sections ?? []).flatMap((s) => s.paragraphs ?? []),
    ...(deepening.limits ?? []),
  ];
  return blocs.reduce((n, texte) => n + words(String(texte)), 0);
}

/**
 * Projection : fichier du corpus → objet `Deepening` consommé par l'application.
 *
 * Mécanique et sans ajout, comme celle des cartes : `$schema` tombe, le reste passe. Corriger
 * un texte affiché, c'est corriger le fichier du corpus puis reprojeter.
 */
export function projectDeepening(deepening) {
  return {
    conceptId: deepening.conceptId,
    lead: deepening.lead,
    sections: deepening.sections.map(({ title, paragraphs }) => ({ title, paragraphs })),
    limits: deepening.limits,
  };
}
