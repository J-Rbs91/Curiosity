const FUNCTION_TITLES = [
  /^(pour )?(commencer|conclure|finir|résumer)/i,
  /^(en |pour )?(résumé|conclusion|synthèse|introduction|préambule)/i,
  /^pour aller plus loin/i,
  /^(d'abord|ensuite|enfin|premièrement|deuxièmement)/i,
  /^approfondissement/i,
  /niveau (débutant|intermédiaire|avancé|expert)/i,
  /pour (les )?(débutants|néophytes|initiés|experts)/i,
  /^(ce qu['’]il faut retenir|à retenir)/i,
];

const MARKUP = [
  { pattern: /\*\*|__/, name: "gras Markdown" },
  { pattern: /^#{1,6}\s/m, name: "titre Markdown" },
  { pattern: /^\s*[-*+]\s/m, name: "liste à puces" },
  { pattern: /^\s*\d+\.\s/m, name: "liste numérotée" },
  { pattern: /\[[^\]]+\]\([^)]+\)/, name: "lien Markdown" },
  { pattern: /`/, name: "accent grave" },
  { pattern: /—/, name: "tiret cadratin" },
];

const INTERNAL_PLUMBING = [
  /\b(la|cette|une|de la|dans la|sur la) carte\b/i,
  /\b(la|cette|de la|dans la) fiche\b/i,
  /\b(le|du|ce|au) corpus\b/i,
  /\bl['’]enregistrement (validé|maître)/i,
  /\ble contenu structuré/i,
  /\bles éléments (fournis|de référence|structurés)/i,
];

const MIN_VISIBLE_WORDS = 350;
const MAX_VISIBLE_WORDS = 2100;

function words(text) {
  return String(text).trim().split(/\s+/).filter(Boolean).length;
}

function visibleParagraphs(deepening) {
  return [
    ...(deepening.lead ?? []),
    ...(deepening.sections ?? []).flatMap((section) => section.paragraphs ?? []),
  ];
}

export function countWords(deepening) {
  return visibleParagraphs(deepening).reduce((total, text) => total + words(text), 0);
}

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

  const visible = [];
  const checkParagraphs = (value, field, { min, max, rendered = true }) => {
    if (!Array.isArray(value) || value.length < min) {
      fail(`${field} : ${min} paragraphe(s) au moins`);
      return;
    }
    if (value.length > max) fail(`${field} : ${max} paragraphes au plus, ${value.length} reçus`);
    value.forEach((paragraph, index) => {
      if (typeof paragraph !== "string" || paragraph.trim().length < 80) {
        fail(`${field}[${index}] : paragraphe absent ou trop court`);
        return;
      }
      if (rendered) visible.push({ field: `${field}[${index}]`, text: paragraph });
    });
  };

  checkParagraphs(lead, "lead", { min: 1, max: 3 });

  if (!Array.isArray(sections) || sections.length < 2) {
    fail("sections : 2 sections au moins");
  } else {
    if (sections.length > 7) fail(`sections : 7 au plus, ${sections.length} reçues`);
    sections.forEach((section, index) => {
      const title = section?.title;
      if (typeof title !== "string" || title.trim().length < 3) {
        fail(`sections[${index}] : titre absent`);
      } else {
        if (title.length > 60) fail(`sections[${index}] : titre de plus de 60 caractères`);
        visible.push({ field: `sections[${index}].title`, text: title });
        if (FUNCTION_TITLES.some((pattern) => pattern.test(title.trim()))) {
          fail(`sections[${index}] : « ${title} » étiquette la fonction de la section, pas son sujet`);
        }
      }
      checkParagraphs(section?.paragraphs, `sections[${index}].paragraphs`, { min: 1, max: 6 });
    });
  }

  if (!Array.isArray(limits)) fail("limits : tableau interne obligatoire");
  else if (limits.length > 12) fail(`limits : 12 entrées internes au plus, ${limits.length} reçues`);
  else {
    limits.forEach((entry, index) => {
      if (typeof entry !== "string" || !entry.trim()) fail(`limits[${index}] : entrée vide`);
    });
  }

  for (const { field, text } of visible) {
    const markup = MARKUP.find(({ pattern }) => pattern.test(text));
    if (markup) fail(`${field} : ${markup.name} dans un texte rendu tel quel`);
    if (INTERNAL_PLUMBING.some((pattern) => pattern.test(text))) {
      fail(`${field} : le texte expose la plomberie interne de Curiosity`);
    }
  }

  const total = countWords(deepening);
  if (total < MIN_VISIBLE_WORDS) {
    fail(`volume visible : ${total} mots, ${MIN_VISIBLE_WORDS} au moins pour éviter un simple stub`);
  }
  if (total > MAX_VISIBLE_WORDS) {
    fail(`volume visible : ${total} mots, ${MAX_VISIBLE_WORDS} au plus`);
  }

  return errors;
}

export function unsourcedQuotations(deepening, dossierBrut) {
  if (typeof dossierBrut !== "string") return [];
  const normalize = (text) => String(text)
    .replace(/[’‘`]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/[   ]/g, " ")
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?]+$/, "");

  const dossier = normalize(dossierBrut);
  const absent = [];
  for (const text of visibleParagraphs(deepening)) {
    for (const [, quotation] of String(text).matchAll(/«([^»]{10,400})»/g)) {
      const normalized = normalize(quotation);
      if (normalized.split(" ").length < 5) continue;
      const cut = /\[?\s*(?:\.\.\.|…)\s*\]?/g;
      if (!new RegExp(cut.source).test(normalized)) {
        if (!dossier.includes(normalized)) absent.push(quotation.trim());
        continue;
      }
      const fragments = normalized
        .split(cut)
        .map((fragment) => fragment.replace(/^[.,;:!?\s]+|[.,;:!?\s]+$/g, ""))
        .filter((fragment) => fragment.split(" ").length >= 5);
      if (fragments.length > 0 && fragments.some((fragment) => !dossier.includes(fragment))) {
        absent.push(quotation.trim());
      }
    }
  }
  return absent;
}

export function projectDeepening(deepening) {
  return {
    conceptId: deepening.conceptId,
    lead: deepening.lead,
    sections: deepening.sections.map(({ title, paragraphs }) => ({ title, paragraphs })),
  };
}
