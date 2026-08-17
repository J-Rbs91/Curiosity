/**
 * Validation des cartes du corpus.
 *
 * Fonctions pures : aucune lecture disque, aucun accès réseau. Les entrées/sorties sont
 * dans io.mjs, l'exécutable dans ../validate.mjs.
 *
 * Ce fichier applique les règles qui ne doivent dépendre de la discipline d'aucun agent.
 * Il en applique désormais **moins**, et c'est une décision, pas un relâchement : le
 * dispositif précédent contrôlait 171 000 caractères de dossier pour 600 caractères
 * affichés, et renvoyait en correction des fiches dont la carte était établie. Ce qui est
 * contrôlé ici est ce dont la carte dépend — le reste vivait dans des champs que personne
 * n'affichait.
 */

const ID_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const STATUSES = ["CANDIDATE", "IN_REVIEW", "VALIDATED", "REJECTED"];
const SOURCE_KINDS = [
  "primary",
  "secondary-academic",
  "francophone-reception",
  "pedagogical-interpretation",
];

/** Le répertoire est l'état : cette table est la seule autorité sur la correspondance. */
export const STATUS_BY_DIR = {
  candidates: "CANDIDATE",
  review: "IN_REVIEW",
  validated: "VALIDATED",
  rejected: "REJECTED",
};

const isFilled = (v) => typeof v === "string" && v.trim().length > 0;
const asArray = (v) => (Array.isArray(v) ? v : []);

/**
 * Longueurs maximales des champs affichés.
 *
 * Ce ne sont pas des préférences de style : la carte doit tenir dans un écran de téléphone
 * **sans défilement**, et ces quatre champs sont les seuls dont la longueur varie.
 *
 * Elles ont été mesurées, pas devinées : la carte est rendue dans un navigateur, tous les
 * champs à leur maximum simultané, et on compare la hauteur du bloc à la place disponible.
 * Le calibrage est fait sur 375 × 667 — le plus petit écran encore en circulation — parce
 * que c'est lui qui commande.
 *
 * La contrainte est ici plutôt que dans une consigne parce qu'une consigne s'oublie : le
 * premier lot a produit des accroches de 311 caractères et des résumés de 805, tous
 * excellents et tous inaffichables.
 */
export const CARD_LIMITS = {
  title: 48,
  hook: 85,
  summary: 170,
  quotation: 150,
  sources: 5,
  /**
   * Un champ de source est écrit deux fois : une fois pour l'affichage, une fois pour la
   * preuve. Confondre les deux est le défaut qui a le plus coûté à ce corpus — un
   * `locator` de dossier faisait 889 caractères et s'affichait entier sous la source, et
   * la notice de Reynaud a un jour montré au lecteur l'adresse postale du CNAM. Ces
   * plafonds ne jugent pas du style : ils séparent le pointeur de la note.
   */
  source_label: 230,
  source_locator: 40,
};

/**
 * La citation est le seul élément de la carte qui ne passe pas par nos mots. Elle n'est
 * donc admise que si elle est localisée et honnête sur sa traduction. Le caractère
 * verbatim, lui, ne s'automatise pas : c'est le contrôle qui le tranche, contre l'édition.
 */
function checkQuotation(record, errors, warnings) {
  const q = record.quotation;
  if (!q) return;

  const at = "quotation";
  if (!isFilled(q.text)) errors.push(`${at}.text vide`);
  else if (q.text.length > CARD_LIMITS.quotation) {
    // Une longueur excessive est un défaut de rédaction, pas d'instruction : elle bloque la
    // publication sans interrompre le travail en cours.
    const message = `${at}.text : ${q.text.length} caractères pour ${CARD_LIMITS.quotation} au plus — la citation doit tenir dans la carte`;
    if (record.status === "VALIDATED") errors.push(message);
    else warnings.push(message);
  }

  if (!isFilled(q.reference))
    errors.push(`${at}.reference manquante — une citation qu'on ne peut pas rouvrir ne vaut rien`);
  if (!isFilled(q.locator)) errors.push(`${at}.locator manquant — à quelle page ?`);

  const t = q.translation ?? {};
  if (t.kind === "published" && (!isFilled(t.translator) || !isFilled(t.edition)))
    errors.push(`${at}.translation : une traduction publiée se cite avec son traducteur et son édition`);
  if (t.kind === "in-house" && !isFilled(t.translator))
    errors.push(
      `${at}.translation : traduction de notre fait sans mention de sa provenance — traduction ≠ équivalence`
    );
  if (isFilled(q.original_language) && !isFilled(t.kind))
    errors.push(`${at} : une langue d'origine est déclarée sans dire si le texte affiché est traduit`);
}

/** Une référence introuvable n'existe pas ; une source non lue ne fonde rien. */
function checkSources(record, errors, warnings) {
  const sources = asArray(record.sources);

  if (sources.length === 0)
    // Un candidat est un concept repéré, pas encore instruit : lui reprocher ses sources
    // manquantes reviendrait à interdire de noter qu'il reste à faire.
    (record.status === "VALIDATED" ? errors : warnings).push(
      "sources vide : une carte sans référence n'est pas une carte"
    );
  if (sources.length > CARD_LIMITS.sources)
    errors.push(
      `sources : ${sources.length} pour ${CARD_LIMITS.sources} au plus — la carte n'en montre pas davantage`
    );

  sources.forEach((s, i) => {
    const at = `sources[${i}]`;
    if (!isFilled(s?.label)) errors.push(`${at}.label manquant`);
    if (!SOURCE_KINDS.includes(s?.kind))
      errors.push(`${at}.kind « ${s?.kind} » inconnu — le lecteur doit savoir s'il lit l'auteur ou un commentateur`);
    if (!isFilled(s?.doi_isbn) && !isFilled(s?.url))
      errors.push(`${at} : ni DOI/ISBN ni URL — une référence introuvable n'existe pas`);

    /*
     * Le pointeur et la note de dossier ne sont pas le même texte : voir CARD_LIMITS.
     * Comme les autres longueurs d'affichage, le défaut se signale tant que la fiche est
     * en atelier et bloque au moment de publier — un candidat porte encore les notes de
     * lecture de son instruction, et c'est sa fonction.
     */
    const tooLong = record.status === "VALIDATED" ? errors : warnings;
    if ((s?.locator ?? "").length > CARD_LIMITS.source_locator)
      tooLong.push(
        `${at}.locator : ${s.locator.length} caractères — un localisateur est un pointeur (« p. 149-164 »), pas une note de contrôle`
      );
    if ((s?.label ?? "").length > CARD_LIMITS.source_label)
      tooLong.push(
        `${at}.label : ${s.label.length} caractères — la notice s'affiche telle quelle, elle ne porte pas de commentaire`
      );
  });

  if (record.status !== "VALIDATED") return;

  const primary = sources.filter((s) => s?.kind === "primary");
  if (primary.length === 0)
    errors.push("VALIDATED sans source primaire : l'attribution n'est pas établie");
  else if (!primary.some((s) => s.consulted === "full-text"))
    errors.push(
      "VALIDATED sans source primaire lue en texte intégral : on ne cite pas un texte qu'on n'a pas ouvert"
    );

  if (!sources.some((s) => s?.kind === "secondary-academic" || s?.kind === "francophone-reception"))
    warnings.push(
      "aucune source secondaire affichée : l'interprétation n'est confirmée par personne sur la carte"
    );
}

/**
 * Le verrou de publication, ramené aux quatre questions dont la carte dépend : le concept
 * est-il de cet auteur, la citation vient-elle du texte, les références résolvent-elles, et
 * notre prose ajoute-t-elle quelque chose.
 */
function checkGating(record, errors) {
  const review = record.review ?? {};

  if (review.verdict !== "PASS")
    errors.push(`VALIDATED avec un contrôle en « ${review.verdict ?? "aucun"} »`);
  if (review.attribution !== "confirmee")
    errors.push(`VALIDATED avec une attribution « ${review.attribution ?? "non renseignée"} »`);
  if (review.sources !== "resolvent")
    errors.push(`VALIDATED avec des sources « ${review.sources ?? "non renseignées"} »`);
  if (review.prose !== "fidele")
    errors.push(
      `VALIDATED avec une prose « ${review.prose ?? "non renseignée"} » : l'accroche ou le résumé excèdent les sources`
    );

  // Une fiche sans citation est légitime ; une citation non contrôlée ne l'est pas.
  const expected = record.quotation ? "verbatim" : "absente";
  if (review.quotation !== expected)
    errors.push(
      record.quotation
        ? `VALIDATED avec une citation « ${review.quotation ?? "non contrôlée"} » — elle doit avoir été relevée sur le texte`
        : `review.quotation devrait valoir « absente » : la fiche ne porte aucune citation`
    );

  if (typeof review.rounds === "number" && review.rounds > 3)
    errors.push(`review.rounds = ${review.rounds} : au-delà de 3 tours, la fiche se rejette`);
}

/**
 * Valide une carte isolée.
 * `dir` est le répertoire de corpus/ où elle se trouve.
 */
export function validateRecord(
  record,
  { dir, themeIds = new Set(), authorIds = new Set(), domainIds = new Set() } = {}
) {
  const errors = [];
  const warnings = [];

  // --- identité et état ---------------------------------------------------
  if (!ID_PATTERN.test(record?.id ?? "")) errors.push(`id « ${record?.id} » invalide (kebab-case attendu)`);
  if (!ID_PATTERN.test(record?.slug ?? "")) errors.push(`slug « ${record?.slug} » invalide`);
  if (!STATUSES.includes(record?.status)) errors.push(`status « ${record?.status} » inconnu`);
  if (dir && STATUS_BY_DIR[dir] && record?.status !== STATUS_BY_DIR[dir])
    errors.push(
      `status « ${record?.status} » incohérent avec le répertoire corpus/${dir}/ (attendu « ${STATUS_BY_DIR[dir]} »)`
    );
  if (record?.status === "REJECTED" && !isFilled(record?.rejection_reason))
    errors.push("REJECTED sans rejection_reason : un rejet non motivé revient toujours");

  // --- les sept éléments de la carte --------------------------------------
  if (!isFilled(record?.title)) errors.push("title manquant");

  const authors = asArray(record?.authors);
  if (authors.length === 0) errors.push("authors vide : une carte sans auteur n'attribue rien");
  authors.forEach((a, i) => {
    if (!isFilled(a?.name)) errors.push(`authors[${i}].name manquant — c'est lui qui s'affiche`);
  });
  /*
   * Le corpus découvre les auteurs ; l'application les reçoit. Un `app_author_id` inconnu
   * n'est pas une faute — c'est un auteur auquel l'application ne consacre pas encore de
   * page. Exiger l'inverse ferait de la table des auteurs le périmètre réel du corpus.
   */
  for (const a of authors)
    if (isFilled(a?.app_author_id) && authorIds.size > 0 && !authorIds.has(a.app_author_id))
      warnings.push(
        `authors : « ${a.app_author_id} » n'a pas de page dans src/content/authors.ts — la carte l'affichera par son nom`
      );

  const themes = asArray(record?.themes);
  if (themes.length === 0) errors.push("themes vide : la carte n'a rien à situer en tête");
  // Même raison que pour les auteurs : un thème que la fiche fait apparaître ne peut pas
  // être refusé par la table écrite avant toute instruction. Il lui faut un libellé.
  const knownThemes = themes.filter((t) => themeIds.has(t));
  for (const t of themes)
    if (themeIds.size > 0 && !themeIds.has(t)) {
      if (!isFilled(record?.theme_labels?.[t]))
        errors.push(`themes : « ${t} » est inconnu de l'application et n'a pas de libellé dans theme_labels`);
      else warnings.push(`themes : « ${t} » est un thème nouveau, affiché par son libellé`);
    }

  /*
   * Le domaine : où cette carte se range dans la taxonomie.
   *
   * Il n'est presque jamais à écrire. Une carte hérite du domaine de son thème, et les
   * fiches instruites avant que les domaines n'existent n'ont donc rien eu à déclarer —
   * c'est ce qui a permis de les rattacher sans en rouvrir une seule.
   *
   * Le champ ne devient obligatoire que dans le cas où l'héritage ne dit rien : une fiche
   * dont aucun thème n'est connu de l'application. Elle était acceptée telle quelle du temps
   * où il n'y avait qu'un domaine — il n'y avait rien à choisir. À onze, elle n'apparaîtrait
   * dans aucun d'eux : ni sur une page de domaine, ni dans un tirage par famille, ni dans un
   * comptage. Une carte que rien ne situe est une carte que personne ne rencontre.
   */
  if (isFilled(record?.domain) && domainIds.size > 0 && !domainIds.has(record.domain))
    errors.push(
      `domain « ${record.domain} » inconnu de la taxonomie — voir src/content/taxonomy.ts`
    );
  if (themes.length > 0 && themeIds.size > 0 && knownThemes.length === 0 && !isFilled(record?.domain))
    errors.push(
      "aucun thème connu de l'application et pas de `domain` : la carte ne peut être rattachée à aucun domaine"
    );

  // Même raison que pour les sources : la carte d'un candidat n'est pas encore écrite.
  const unwritten = record?.status === "VALIDATED" ? errors : warnings;
  if (!isFilled(record?.hook)) unwritten.push("hook manquant : rien ne donne envie d'ouvrir le concept");
  if (!isFilled(record?.summary)) unwritten.push("summary manquant");

  checkQuotation(record ?? {}, errors, warnings);
  checkSources(record ?? {}, errors, warnings);

  /*
   * Les longueurs se signalent à tous les stades et bloquent à la publication : une fiche
   * rédigée trop long ne se corrige pas en un mot, et l'apprendre au moment de publier
   * revient à l'apprendre trop tard.
   */
  const tooLong = record?.status === "VALIDATED" ? errors : warnings;
  for (const [field, label] of [["title", "title"], ["hook", "hook"], ["summary", "summary"]]) {
    const length = (record?.[field] ?? "").length;
    if (length > CARD_LIMITS[field])
      tooLong.push(
        `${label} : ${length} caractères pour ${CARD_LIMITS[field]} au plus — la carte déborderait de l'écran`
      );
  }

  // --- verrou de publication ---------------------------------------------
  if (record?.status === "VALIDATED") checkGating(record, errors);

  return { id: record?.id, errors, warnings };
}

/** Contrôles qui ne se voient qu'à l'échelle du corpus : doublons d'identité. */
export function validateCorpus(records) {
  const errors = [];
  const warnings = [];

  const byId = new Map();
  const bySlug = new Map();
  for (const { dir, record } of records) {
    const where = `corpus/${dir}/${record?.id}.json`;
    if (byId.has(record?.id))
      errors.push(`id « ${record.id} » présent deux fois : ${byId.get(record.id)} et ${where}`);
    else byId.set(record?.id, where);
    if (record?.slug) {
      if (bySlug.has(record.slug))
        errors.push(`slug « ${record.slug} » présent deux fois : ${bySlug.get(record.slug)} et ${where}`);
      else bySlug.set(record.slug, where);
    }
  }

  return { errors, warnings };
}
