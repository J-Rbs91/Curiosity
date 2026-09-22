/**
 * Le niveau d'accès d'une source — ce qui a réellement été ouvert — est la seule donnée du pack
 * de preuve qu'aucun modèle ne fabrique : il vient du dossier, et le vérificateur s'en sert pour
 * refuser qu'une notice bibliographique établisse le contenu d'une œuvre.
 *
 * Mais `collectSupports` ramasse aussi `corpus/validated/<id>.json`, où un objet source déclare
 * son propre `consulted`. Une source déclarée `full-text` dans l'enregistrement fournissait donc
 * au vérificateur des appuis estampillés « lu » **y compris quand le dossier de la même carte ne
 * soutient nulle part cette lecture** — et rien, dans le pack, ne le disait. Le verdict
 * `SOURCE_NOT_CONSULTED` ne pouvait plus se déclencher sur elle : l'instrument n'avait pas de
 * raison de douter d'un niveau qu'il avait lui-même calculé.
 *
 * Ce module ne corrige pas les niveaux. Il les **qualifie** : pour chaque déclaration d'accès de
 * l'enregistrement validé, il dit si le dossier la soutient, la contredit, nomme la source sans
 * se prononcer, ou l'ignore. Le pack porte le résultat, le vérificateur en tient compte.
 *
 * ## Pourquoi qualifier plutôt que dégrader
 *
 * `RESTE-A-FAIRE.md` proposait de « dégrader le niveau au plus prudent des deux » en cas de
 * divergence. Mesuré sur les 136 cartes, ce geste n'a aucune prise et se tromperait :
 *
 * - **Une divergence n'est presque jamais une surdéclaration.** 34 cartes déclarent deux niveaux
 *   pour un même identifiant, et la vérification sur pièce en donne la raison : un dossier
 *   énumère les *voies d'accès* d'une même œuvre. `echelles-de-mesure` déclare trois fac-similés
 *   `full-text` de Stevens 1946 **et** la version éditeur `metadata-only` — les quatre
 *   déclarations sont vraies. Dégrader au plus prudent marquerait « non lu » un article dont
 *   trois exemplaires ont été lus.
 * - **Les surdéclarations établies ne sont pas des divergences, ce sont des absences.** Aucune
 *   des quatre trouvées sur pièce (Selznick et Warner & Havens dans `deplacement-des-buts`,
 *   Cozic dans `rationalite-limitee`, Hoskin dans `mesure-devenue-cible`) n'est contredite par un
 *   `consulted` du dossier : le dossier n'en porte aucun pour ces sources, ou le dit en prose
 *   — « Sert à fixer l'ISBN, pas à ouvrir le texte ». Une comparaison de champ à champ en trouve
 *   zéro.
 * - **Et l'absence ne se dégrade pas sans casse.** Le dossier de `zones-incertitude` nomme Kuty
 *   1997 « LA SOURCE LA PLUS RICHE DU DOSSIER, et de loin », 92 pages déposées sur ORBI, sans
 *   jamais écrire `consulted` : son `full-text` est correct. Quinze lots n'ont pas normalisé le
 *   vocabulaire des dossiers, et un instrument qui prendrait leur silence pour un démenti
 *   refuserait les cartes les mieux servies.
 *
 * D'où la règle retenue : le pack ne réécrit aucun niveau, il **cesse de présenter comme un fait
 * du dossier ce qui n'est qu'une déclaration de l'enregistrement.**
 */

const NIVEAUX_ORDONNES = ["metadata-only", "partial", "full-text"];

/** Les niveaux d'accès du schéma, du plus prudent au plus fort. */
export const NIVEAUX_ACCES = Object.freeze([...NIVEAUX_ORDONNES]);

/**
 * Le rang d'un niveau, `-1` pour tout ce qui n'est pas du vocabulaire. Le corpus porte
 * sept déclarations `excerpt`, que le schéma interdit et que personne ne contrôlait : un rang
 * négatif les empêche de valoir `full-text` sans leur inventer d'équivalent.
 */
export function rangAcces(niveau) {
  return NIVEAUX_ORDONNES.indexOf(niveau);
}

export const STATUTS = Object.freeze({
  /** Le dossier déclare la même source au moins au niveau annoncé. */
  CORROBORE: "corrobore",
  /** Le dossier déclare la même source à un niveau strictement plus prudent. */
  CONTREDIT: "contredit",
  /** Le dossier nomme la source mais ne déclare aucun niveau pour elle. */
  NON_DECLARE: "non-declare",
  /** Le dossier ne nomme pas cette source. */
  ABSENT: "absent",
  /** Le niveau annoncé n'est pas du vocabulaire du schéma. */
  HORS_VOCABULAIRE: "hors-vocabulaire",
  /** Le dossier déclare bien la même source, mais à un niveau hors vocabulaire. */
  DOSSIER_HORS_VOCABULAIRE: "dossier-hors-vocabulaire",
  /** La carte n'a pas de dossier : rien à corroborer, aucun signal. */
  DOSSIER_ABSENT: "dossier-absent",
});

function normaliserUrl(valeur) {
  if (typeof valeur !== "string") return null;
  const brut = valeur.trim().toLowerCase();
  if (!/^https?:\/\//.test(brut)) return null;
  const sans = brut
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/#.*$/, "")
    .replace(/\/+$/, "");
  return sans ? `url:${sans}` : null;
}

/**
 * Les identifiants qu'une chaîne porte, sous une forme comparable. `doi_isbn` est un champ libre :
 * on y trouve « ISBN 0029211301 ; LCCN 68028789 », « ISBN 2-7178-0676-8 », « NTRS 20000021488 »
 * ou « LCCN 60-12574 ». Comparer ces chaînes telles quelles ne rapprocherait rien.
 */
function identifiants(valeur) {
  if (typeof valeur !== "string") return [];
  const texte = valeur.toLowerCase();
  const cles = new Set();

  for (const trouve of texte.matchAll(/10\.\d{4,9}\/[^\s;,)"]+/g)) {
    cles.add(`doi:${trouve[0].replace(/[.,;]+$/, "")}`);
  }
  for (const trouve of texte.matchAll(/(?:97[89][\s-]?)?\d[\d\s-]{8,}[\dx]/g)) {
    const chiffres = trouve[0].replace(/[\s-]/g, "");
    if (chiffres.length === 10 || chiffres.length === 13) cles.add(`isbn:${chiffres}`);
  }
  for (const trouve of texte.matchAll(/(ntrs|lccn|ada)[\s:]*([\d-]{5,})/g)) {
    cles.add(`rep:${trouve[1]}${trouve[2].replace(/-/g, "")}`);
  }

  return [...cles];
}

/**
 * Les clés sous lesquelles une source se reconnaît d'un fichier à l'autre. On n'invente pas de
 * signature d'auteur ou de titre : une clé trop lâche rapprocherait deux œuvres distinctes, et
 * c'est l'erreur qui coûte le plus cher ici — elle ferait corroborer une lecture qui n'a pas eu
 * lieu.
 */
export function clesDeSource(objet) {
  if (!objet || typeof objet !== "object") return [];
  const cles = new Set();
  for (const champ of ["doi_isbn", "url"]) {
    for (const cle of identifiants(objet[champ])) cles.add(cle);
  }
  const url = normaliserUrl(objet.url);
  if (url) cles.add(url);
  return [...cles];
}

/**
 * Les clés sous lesquelles un dossier **nomme** une source, y compris dans une notice libre.
 * Elles servent à distinguer « le dossier ignore cette source » de « le dossier la nomme sans se
 * prononcer sur l'accès » — jamais à porter un niveau. Une citation en prose peut mentionner le
 * DOI d'un tiers ; l'admettre pour nommer ne coûte rien, l'admettre pour corroborer une lecture
 * coûterait l'inverse de ce que ce module protège.
 */
export function clesNommees(objet) {
  if (!objet || typeof objet !== "object") return [];
  const cles = new Set(clesDeSource(objet));
  for (const champ of ["citation", "reference", "label", "titre", "title"]) {
    for (const cle of identifiants(objet[champ])) cles.add(cle);
  }
  return [...cles];
}

function estObjet(valeur) {
  return Boolean(valeur) && typeof valeur === "object" && !Array.isArray(valeur);
}

function cheminJson(parent, cle) {
  if (typeof cle === "number") return `${parent}[${cle}]`;
  if (/^[A-Za-z_$][\w$]*$/.test(cle)) return `${parent}.${cle}`;
  return `${parent}[${JSON.stringify(cle)}]`;
}

/**
 * Tout objet d'un document qui déclare un `consulted`, avec son chemin JSON et ses clés. Le
 * chemin sert à rattacher la déclaration aux appuis qui en descendent.
 */
export function declarationsAcces(valeur, chemin = "$", sortie = []) {
  if (Array.isArray(valeur)) {
    valeur.forEach((entree, index) => declarationsAcces(entree, cheminJson(chemin, index), sortie));
    return sortie;
  }
  if (!estObjet(valeur)) return sortie;

  if (typeof valeur.consulted === "string") {
    sortie.push({
      chemin,
      niveau: valeur.consulted,
      cles: clesDeSource(valeur),
      label: typeof valeur.label === "string" ? valeur.label : null,
    });
  }
  for (const [cle, entree] of Object.entries(valeur)) {
    declarationsAcces(entree, cheminJson(chemin, cle), sortie);
  }
  return sortie;
}

/** Toute clé de source que le document nomme, qu'il se prononce ou non sur l'accès. */
export function sourcesNommees(valeur, sortie = new Set()) {
  if (Array.isArray(valeur)) {
    valeur.forEach((entree) => sourcesNommees(entree, sortie));
    return sortie;
  }
  if (!estObjet(valeur)) return sortie;
  for (const cle of clesNommees(valeur)) sortie.add(cle);
  for (const entree of Object.values(valeur)) sourcesNommees(entree, sortie);
  return sortie;
}

/**
 * Ce que le dossier d'une carte établit sur l'accès : le meilleur niveau déclaré par clé, et
 * l'ensemble des sources qu'il nomme. « Meilleur » et non « plus prudent », parce qu'un dossier
 * énumère des voies d'accès : trois fac-similés lus et une version éditeur fermée décrivent la
 * même œuvre, et ce qui compte est qu'une voie ait été ouverte.
 */
export function niveauxDuDossier(documents) {
  const meilleurParCle = new Map();
  const nommees = new Set();
  let declarations = 0;

  for (const document of documents) {
    for (const declaration of declarationsAcces(document)) {
      declarations += 1;
      const rang = rangAcces(declaration.niveau);
      for (const cle of declaration.cles) {
        const connu = meilleurParCle.get(cle);
        if (!connu || rang > connu.rang) meilleurParCle.set(cle, { rang, niveau: declaration.niveau });
      }
    }
    for (const cle of sourcesNommees(document)) nommees.add(cle);
  }

  return { meilleurParCle, nommees, declarations };
}

/**
 * Confronte chaque déclaration d'accès de l'enregistrement validé à ce que le dossier en dit.
 *
 * `documents` est le contenu déjà parsé des fichiers de preuve de la carte, `scouting.json`
 * exclu — le scout note où il a cherché, pas ce qu'il a lu.
 */
export function reconcilierAcces(valide, documents) {
  const dossier = niveauxDuDossier(documents);
  const dossierParle = documents.length > 0 && dossier.declarations > 0;

  const declarations = declarationsAcces(valide).map((declaration) => {
    const rangDeclare = rangAcces(declaration.niveau);
    const base = {
      chemin: declaration.chemin,
      declare: declaration.niveau,
      label: declaration.label,
      cles: declaration.cles,
      dossier: null,
    };

    if (rangDeclare < 0) return { ...base, statut: STATUTS.HORS_VOCABULAIRE };
    if (!dossierParle) return { ...base, statut: STATUTS.DOSSIER_ABSENT };

    let meilleurRang = -1;
    let meilleurNiveau = null;
    let horsVocabulaire = null;
    for (const cle of declaration.cles) {
      const connu = dossier.meilleurParCle.get(cle);
      if (!connu) continue;
      if (connu.rang < 0) {
        horsVocabulaire = horsVocabulaire ?? connu.niveau;
        continue;
      }
      if (connu.rang > meilleurRang) {
        meilleurRang = connu.rang;
        meilleurNiveau = connu.niveau;
      }
    }

    if (meilleurRang >= rangDeclare) {
      return { ...base, dossier: meilleurNiveau, statut: STATUTS.CORROBORE };
    }
    if (meilleurRang >= 0) {
      return { ...base, dossier: meilleurNiveau, statut: STATUTS.CONTREDIT };
    }
    if (horsVocabulaire) {
      return { ...base, dossier: horsVocabulaire, statut: STATUTS.DOSSIER_HORS_VOCABULAIRE };
    }
    const nommee = declaration.cles.some((cle) => dossier.nommees.has(cle));
    return { ...base, statut: nommee ? STATUTS.NON_DECLARE : STATUTS.ABSENT };
  });

  const compteurs = Object.fromEntries(Object.values(STATUTS).map((statut) => [statut, 0]));
  for (const declaration of declarations) compteurs[declaration.statut] += 1;

  return { dossier_declare_des_niveaux: dossierParle, declarations, compteurs };
}

/**
 * Le statut de corroboration qui s'applique à un appui, d'après le chemin JSON dont il sort.
 * Un appui tiré de `$.sources[3].label` relève de la déclaration portée par `$.sources[3]`.
 */
export function statutPourChemin(reconciliation, chemin) {
  let choisie = null;
  for (const declaration of reconciliation.declarations) {
    const prefixe = declaration.chemin;
    const dedans =
      chemin === prefixe || chemin.startsWith(`${prefixe}.`) || chemin.startsWith(`${prefixe}[`);
    if (!dedans) continue;
    if (!choisie || prefixe.length > choisie.chemin.length) choisie = declaration;
  }
  return choisie;
}
