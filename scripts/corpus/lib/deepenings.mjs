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
 * difficulté, un champ `limits` rempli de précautions sans objet, et l'aveu de lecture qui
 * raconte au lecteur comment le texte a été fabriqué.
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
 * Le dispositif interne, exhibé au lecteur.
 *
 * C'est le défaut qui a coûté un lot entier. Un rédacteur à qui l'on transmet une fiche
 * documentaire écrit spontanément « le dossier porte l'énoncé en entier », « la carte n'a
 * gardé que la première proposition », « ce que le corpus établit ». Chacune de ces phrases
 * est vraie, et chacune renvoie le lecteur à une plomberie qui n'est pas la sienne : il
 * ouvrait un concept, il tombe sur l'appareil de production.
 *
 * Ce qui doit rester dicible, et qui suffit à tout dire : l'auteur, le texte, l'article, la
 * citation, les sources disponibles. « Les sources disponibles ne permettent pas de
 * l'établir » dit exactement ce que disait « le dossier ne le porte pas », sans exhiber quoi
 * que ce soit.
 *
 * Bloquant, contrairement au contrôle des citations : ici l'ambiguïté est faible, la règle
 * est simple à respecter, et l'expérience montre qu'elle ne se tient pas à la relecture.
 */
const DISPOSITIF = [
  { motif: /\b(la|cette|une|de la|dans la|sur la) carte\b/i, nom: "« la carte »" },
  { motif: /\b(la|cette|de la|dans la) fiche\b/i, nom: "« la fiche »" },
  { motif: /\b(le|du|ce|au) corpus\b/i, nom: "« le corpus »" },
  {
    // « le dossier » au sens documentaire seulement : un dossier peut être un objet de
    // travail légitime dans un exemple, et l'interdire partout ferait retirer des exemples
    // justes. Ce sont les tournures qui en font une source qui sont visées.
    motif: /\b(le|du|ce) dossier\b(?=[^.]{0,40}\b(porte|établit|rapporte|contient|dit|donne|indique|précise|ne|n’|n'|en)\b)/i,
    nom: "« le dossier » comme source",
  },
  /*
   * Pas de `\b` final derrière un mot accentué : en JavaScript, cette assertion ne connaît
   * que les caractères de mot ASCII, si bien que « structuré\b » ne peut jamais correspondre
   * — `é` n'en est pas un, et il n'y a donc pas de frontière entre lui et l'espace suivant.
   * Écrits ainsi, ces deux motifs ne se déclenchaient sur rien de ce qu'ils existent pour
   * attraper. C'est le même piège que l'apostrophe droite dans les titres de fonction.
   */
  { motif: /\ble contenu structuré/i, nom: "« le contenu structuré »" },
  { motif: /\bles éléments (fournis|de référence|structurés)/i, nom: "« les éléments fournis »" },
  { motif: /\bl['’]enregistrement (validé|maître)/i, nom: "« l'enregistrement validé »" },
];

/**
 * L'aveu de lecture, exhibé au lecteur.
 *
 * Le pendant du défaut précédent, et il se glisse presque toujours dans `limits`. « Cet
 * ouvrage n'a pas pu être consulté », « il faudrait pouvoir l'ouvrir », « cela reste hors de
 * portée de ce texte » : chacune de ces phrases est vraie, aucune ne nomme le dispositif, et
 * chacune raconte pourtant au lecteur la façon dont le texte a été fabriqué. Il ouvrait un
 * concept, il tombe sur le compte rendu d'une recherche documentaire qui n'a pas abouti.
 *
 * La frontière reste due, et elle se dit à l'endroit du lecteur plutôt qu'à celui du
 * rédacteur : ce n'est pas un livre qui a manqué à quelqu'un, c'est un livre qui reste à
 * lire. « Pour établir en quels termes exacts ce texte pose la distinction, il faudra le
 * lire » dit exactement ce que disait « il faudrait pouvoir l'ouvrir », et le transforme en
 * raison d'aller au texte.
 *
 * Bloquant, pour la même raison que le dispositif : la règle est simple, la reformulation est
 * mécanique, et elle ne se tient pas à la relecture.
 */
const AVEU = [
  { motif: /il faudrait pouvoir/i, nom: "« il faudrait pouvoir » (écrivez « il faudra »)" },
  { motif: /faute d['’]avoir pu/i, nom: "« faute d'avoir pu »" },
  {
    motif: /hors de portée (?:de|pour) (?:ce|cette|ce qui)/i,
    nom: "« hors de portée de ce texte »",
  },
  {
    // « pour ce texte », « pour préparer ce texte », « pour cette synthèse » : la phrase se
    // retourne vers l'atelier, jamais vers l'ouvrage dont elle parle.
    motif: /pour (?:préparer |écrire |la rédaction de |la préparation de )?(?:ce texte|cette (?:synthèse|présentation|rédaction|entrée))/i,
    nom: "le renvoi à la fabrication du texte",
  },
];

/**
 * La forme principale de l'aveu : un ouvrage au passif, que personne n'a ouvert.
 *
 * Elle ne s'attrape pas par un motif seul, parce que le même passif est juste ailleurs : un
 * code-barre qui n'a pas été lu du premier coup décrit un poste de travail, pas une
 * bibliographie. Ce qui fait l'aveu, c'est la rencontre des deux : un sujet bibliographique,
 * et un verbe de lecture qu'on nie sans dire qui aurait dû lire. On exige donc les deux, dans
 * une même fenêtre de phrase.
 */
function aveuDeLecture(texte) {
  /* Les frontières se posent avec `\p{L}` et non `\b` : « édition » commence par une lettre
     accentuée, dont `\b` ne sait rien, et le motif ne se serait déclenché sur rien. Même
     piège que l'apostrophe droite dans les titres de fonction. */
  const OUVRAGE =
    /(?<!\p{L})(?:texte|ouvrage|livre|article|chapitre|édition|traduction|rapport|thèse|recueil|communication|notice|publication|volume|entrée|acte|version)s?(?!\p{L})/iu;
  const PASSIF =
    /n['’](?:a|ont) (?:pas |non )?(?:pu être|été)\s+(?:consult|ouvert|lu|relu|rouvert|examin|explor|vérifi|interrog|dépouill|mobilis|repér|identifi)\p{L}*/giu;
  /* Le complément qui achève l'aveu : il dit jusqu'où la lecture est allée, et c'est
     précisément ce que le lecteur n'a pas à savoir. Sans lui, le même passif décrit le monde
     — un code-barre qui n'a pas été lu du premier coup parle d'une caisse de supermarché. */
  const ETENDUE =
    /^\s*(?:,\s*)?(?:ici|directement|intégralement|en entier|au-delà|à ce jour|au moment|que par|qu['’]à travers|que de |que partiellement|de première main|jusqu['’]ici|pour l['’]instant|non plus)/i;

  for (const occurrence of texte.matchAll(PASSIF)) {
    /* La fenêtre remonte assez haut pour couvrir un sujet long et ses appositions, et pas
       plus : au-delà, un titre d'ouvrage cité deux phrases avant suffirait à condamner une
       phrase qui n'a rien à voir. */
    const avant = texte.slice(Math.max(0, occurrence.index - 140), occurrence.index);
    const apres = texte.slice(occurrence.index + occurrence[0].length).slice(0, 60);
    if (OUVRAGE.test(avant) && ETENDUE.test(apres)) return true;
  }
  return false;
}

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

    const expose = DISPOSITIF.find(({ motif }) => motif.test(texte));
    if (expose)
      fail(
        `${champ} : ${expose.nom} expose le dispositif — parlez de l'auteur, du texte ou des sources disponibles`
      );

    const aveu = AVEU.find(({ motif }) => motif.test(texte));
    if (aveu)
      fail(
        `${champ} : ${aveu.nom} raconte la fabrication du texte — dites plutôt ce qui reste à lire, et où`
      );
    else if (aveuDeLecture(texte))
      fail(
        `${champ} : un ouvrage y est déclaré non consulté — dites plutôt ce qu'il contient d'irremplaçable, et qu'il faudra le lire`
      );
  }

  const total = paragraphes.reduce((n, { texte }) => n + words(texte), 0);
  if (paragraphes.length > 0) {
    if (total < VOLUME.minWords) fail(`volume : ${total} mots, ${VOLUME.minWords} au moins`);
    if (total > VOLUME.maxWords) fail(`volume : ${total} mots, ${VOLUME.maxWords} au plus`);
  }

  return errors;
}

/**
 * Les citations du texte qui ne se retrouvent pas dans l'enregistrement de la carte.
 *
 * C'est le seul contrôle documentaire qu'une machine puisse faire ici, et c'est celui qui
 * porte le plus : une phrase entre guillemets se lit comme une parole d'auteur, et une
 * parole d'auteur fabriquée est la faute que tout le dispositif existe pour empêcher. Le
 * rédacteur n'a le droit de citer que ce que le dossier porte déjà, verbatim.
 *
 * Il rend un avertissement et non une erreur, et c'est délibéré : les guillemets français
 * servent aussi à mettre un mot en relief, à nommer un titre, à rapporter un terme de
 * réception. Un contrôle bloquant sur cette ambiguïté ferait retirer les guillemets plutôt
 * que vérifier les citations, ce qui est exactement l'inverse du but. Ce qui est signalé se
 * relit.
 *
 * Seuls les passages de cinq mots ou plus sont examinés : en deçà, il s'agit presque
 * toujours d'un mot mis en relief, et le bruit noierait le signal.
 */
export function unsourcedQuotations(deepening, dossierBrut) {
  if (typeof dossierBrut !== "string") return [];

  /* Le dossier et le texte n'écrivent pas la typographie de la même façon : apostrophe
     droite contre typographique, espace fine insécable dans les guillemets, tirets d'incise.
     Comparer sans normaliser signalerait des citations pourtant exactes. */
  const normalise = (texte) =>
    texte
      .replace(/[’‘`]/g, "'")
      .replace(/[“”«»]/g, '"')
      .replace(/[   ]/g, " ")
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .toLowerCase()
      .trim()
      /* La ponctuation terminale ne compte pas. Une citation intégrée à une phrase gagne ou
         perd son point final selon l'endroit où elle est posée, et signaler cela noierait le
         seul cas qui compte : une phrase attribuée à un auteur qui n'existe pas dans la
         fiche. Le protocole demande le mot pour mot ; ce contrôle attrape la fabrication. */
      .replace(/[.,;:!?]+$/, "");

  const dossier = normalise(dossierBrut);
  const textes = [
    ...(deepening.lead ?? []),
    ...(deepening.sections ?? []).flatMap((s) => s.paragraphs ?? []),
    ...(deepening.limits ?? []),
  ];

  const absentes = [];
  for (const texte of textes) {
    for (const [, citation] of String(texte).matchAll(/«([^»]{10,400})»/g)) {
      const propre = normalise(citation);
      if (propre.split(" ").length < 5) continue;

      /*
       * Une citation coupée par des points de suspension ne se retrouve jamais telle quelle
       * dans la fiche : ce sont ses fragments qu'il faut chercher, chacun pour lui-même. Et
       * lorsque aucun fragment n'atteint le seuil, on ne conclut pas — chercher la chaîne
       * entière signalerait à coup sûr une citation pourtant exacte.
       */
      // La coupure s'écrit « […] », « [...] », « … » ou « ... » : le motif absorbe les
      // crochets avec elle, sans quoi ils resteraient collés au fragment suivant.
      const COUPURE = /\[?\s*(?:\.\.\.|…)\s*\]?/g;
      const coupee = new RegExp(COUPURE.source).test(propre);
      if (!coupee) {
        if (!dossier.includes(propre)) absentes.push(citation.trim());
        continue;
      }

      const fragments = propre
        .split(COUPURE)
        .map((f) => f.replace(/^[.,;:!?\s]+|[.,;:!?\s]+$/g, ""))
        .filter((f) => f.split(" ").length >= 5);
      if (fragments.length > 0 && fragments.some((f) => !dossier.includes(f)))
        absentes.push(citation.trim());
    }
  }
  return absentes;
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
