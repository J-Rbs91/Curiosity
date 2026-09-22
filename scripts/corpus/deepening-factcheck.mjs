import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

import { evidenceOrigin, listEvidenceFiles } from "./lib/factcheck-evidence.mjs";
import { reconcilierAcces, statutPourChemin, STATUTS } from "./lib/factcheck-access.mjs";

const ROOT = process.cwd();
const CONTEXT_BUDGET_TOKENS = 300_000;
const ESTIMATED_CHARS_PER_TOKEN = 3;
const ALLOWED_VERDICTS = new Set([
  "SUPPORTED",
  "TOO_STRONG",
  "UNSUPPORTED",
  "CONFLICT",
  "SOURCE_NOT_CONSULTED",
]);
const ALLOWED_MAPPING_STATUS = new Set(["CLAIMS_MAPPED", "NO_VERIFIABLE_CLAIM"]);

function flag(name) {
  return process.argv.includes(`--${name}`);
}

function option(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : null;
}

function fail(message, code = 2) {
  console.error(`[deepening-factcheck] ${message}`);
  process.exitCode = code;
  return null;
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function writeJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function workDir(conceptId) {
  return path.join(ROOT, "corpus", "deepening-audits", "work", conceptId);
}

function deepeningPath(conceptId) {
  return path.join(ROOT, "corpus", "deepenings", `${conceptId}.json`);
}

function validatedPath(conceptId) {
  return path.join(ROOT, "corpus", "validated", `${conceptId}.json`);
}

function evidenceDir(conceptId) {
  return path.join(ROOT, "corpus", "evidence", conceptId);
}

function jsonPath(parent, key) {
  if (typeof key === "number") return `${parent}[${key}]`;
  if (/^[A-Za-z_$][\w$]*$/.test(key)) return `${parent}.${key}`;
  return `${parent}[${JSON.stringify(key)}]`;
}

function collectSupports(value, { origin, currentPath = "$", inheritedAccess = "n/a" }, out) {
  if (typeof value === "string") {
    if (!value.trim()) return;
    const fingerprint = `${origin}\0${currentPath}\0${value}`;
    out.push({
      id: `SUP-${sha256(fingerprint).slice(0, 16)}`,
      origin,
      path: currentPath,
      access: inheritedAccess,
      text: value,
    });
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) =>
      collectSupports(
        entry,
        { origin, currentPath: jsonPath(currentPath, index), inheritedAccess },
        out,
      ),
    );
    return;
  }

  if (!value || typeof value !== "object") return;

  const ownAccess = typeof value.consulted === "string" ? value.consulted : inheritedAccess;
  for (const [key, entry] of Object.entries(value)) {
    if (key === "consulted") continue;
    collectSupports(
      entry,
      { origin, currentPath: jsonPath(currentPath, key), inheritedAccess: ownAccess },
      out,
    );
  }
}

function readerParagraphs(deepening) {
  const paragraphs = [];

  deepening.lead.forEach((text, index) => {
    paragraphs.push({ locator: `lead[${index}]`, text });
  });

  deepening.sections.forEach((section, sectionIndex) => {
    section.paragraphs.forEach((text, paragraphIndex) => {
      paragraphs.push({
        locator: `sections[${sectionIndex}].paragraphs[${paragraphIndex}]`,
        section_title: section.title,
        text,
      });
    });
  });

  return paragraphs;
}

function estimateTokens(value) {
  return Math.ceil(JSON.stringify(value).length / ESTIMATED_CHARS_PER_TOKEN);
}

async function prepare(conceptId) {
  const deepFile = deepeningPath(conceptId);
  const validatedFile = validatedPath(conceptId);
  if (!existsSync(deepFile)) return fail(`approfondissement introuvable: ${deepFile}`);
  if (!existsSync(validatedFile)) return fail(`validation introuvable: ${validatedFile}`);

  const deepRaw = await readFile(deepFile, "utf8");
  const validatedRaw = await readFile(validatedFile, "utf8");
  const deepening = JSON.parse(deepRaw);
  const validated = JSON.parse(validatedRaw);

  const supports = [];
  collectSupports(validated, { origin: "validated" }, supports);

  const evidenceFiles = [];
  const evidenceDocuments = [];
  for (const { name, file } of listEvidenceFiles(evidenceDir(conceptId))) {
    const evidenceRaw = await readFile(file, "utf8");
    evidenceFiles.push({ file: name, sha256: sha256(evidenceRaw) });
    const evidenceDocument = JSON.parse(evidenceRaw);
    evidenceDocuments.push(evidenceDocument);
    collectSupports(evidenceDocument, { origin: evidenceOrigin(name) }, supports);
  }

  /*
   * Le niveau d'accès qu'un appui porte n'a pas la même valeur selon qu'il vient du dossier ou de
   * l'enregistrement validé : le premier est une constatation de lecture, le second une
   * déclaration de la fiche. Confondre les deux désarmait `SOURCE_NOT_CONSULTED`. Le pack dit
   * maintenant, appui par appui, si le dossier soutient le niveau annoncé.
   */
  const accessReconciliation = reconcilierAcces(validated, evidenceDocuments);
  for (const support of supports) {
    if (support.origin !== "validated") continue;
    const declaration = statutPourChemin(accessReconciliation, support.path);
    if (declaration) {
      support.access_corroboration = declaration.statut;
      if (declaration.statut === STATUTS.CONTREDIT) support.access_dossier = declaration.dossier;
    }
  }

  const uniqueSupports = [...new Map(supports.map((support) => [support.id, support])).values()];
  const base = {
    protocol_version: 1,
    concept_id: conceptId,
    context_budget_tokens: CONTEXT_BUDGET_TOKENS,
    token_estimate_method: `JSON characters / ${ESTIMATED_CHARS_PER_TOKEN} (conservative heuristic, not provider tokenization)`,
    candidate_sha256: sha256(deepRaw),
    validated_sha256: sha256(validatedRaw),
    evidence_files: evidenceFiles,
    access_reconciliation: accessReconciliation,
    paragraphs: readerParagraphs(deepening),
    supports: uniqueSupports,
  };

  const estimatedTokens = estimateTokens(base);
  const pack = {
    ...base,
    estimated_tokens: estimatedTokens,
    status: estimatedTokens <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED",
  };

  const output = option("out") || path.join(workDir(conceptId), "factcheck-pack.json");
  await writeJson(output, pack);
  console.log(
    JSON.stringify({
      concept_id: conceptId,
      status: pack.status,
      estimated_tokens: estimatedTokens,
      budget_tokens: CONTEXT_BUDGET_TOKENS,
      paragraphs: pack.paragraphs.length,
      supports: pack.supports.length,
      access_reconciliation: accessReconciliation.compteurs,
      artifact: path.relative(ROOT, output),
    }),
  );
}

function validateClaimMap(pack, map) {
  const errors = [];
  if (map.concept_id !== pack.concept_id) errors.push("concept_id ne correspond pas au pack");
  if (map.candidate_sha256 !== pack.candidate_sha256) {
    errors.push("candidate_sha256 du claim map ne correspond pas au pack");
  }

  const paragraphByLocator = new Map(pack.paragraphs.map((paragraph) => [paragraph.locator, paragraph]));
  const supportById = new Map(pack.supports.map((support) => [support.id, support]));
  const statusByLocator = new Map();

  if (!Array.isArray(map.paragraphs)) errors.push("paragraphs doit être un tableau");
  for (const entry of map.paragraphs || []) {
    if (!paragraphByLocator.has(entry.locator)) errors.push(`locator de paragraphe inconnu: ${entry.locator}`);
    if (!ALLOWED_MAPPING_STATUS.has(entry.mapping_status)) {
      errors.push(`mapping_status invalide pour ${entry.locator}: ${entry.mapping_status}`);
    }
    if (statusByLocator.has(entry.locator)) errors.push(`locator de paragraphe dupliqué: ${entry.locator}`);
    statusByLocator.set(entry.locator, entry.mapping_status);
  }

  for (const locator of paragraphByLocator.keys()) {
    if (!statusByLocator.has(locator)) errors.push(`paragraphe non déclaré dans le mapping: ${locator}`);
  }

  const claimIds = new Set();
  const claimsByLocator = new Map();
  if (!Array.isArray(map.claims)) errors.push("claims doit être un tableau");

  for (const claim of map.claims || []) {
    if (typeof claim.claim_id !== "string" || !/^C\d{3,}$/.test(claim.claim_id)) {
      errors.push(`claim_id invalide: ${claim.claim_id}`);
    }
    if (claimIds.has(claim.claim_id)) errors.push(`claim_id dupliqué: ${claim.claim_id}`);
    claimIds.add(claim.claim_id);

    const paragraph = paragraphByLocator.get(claim.locator);
    if (!paragraph) {
      errors.push(`locator de claim inconnu: ${claim.locator}`);
      continue;
    }

    if (!Number.isInteger(claim.start) || !Number.isInteger(claim.end)) {
      errors.push(`${claim.claim_id}: start/end doivent être des entiers`);
      continue;
    }
    if (claim.start < 0 || claim.end <= claim.start || claim.end > paragraph.text.length) {
      errors.push(`${claim.claim_id}: offsets hors limites`);
      continue;
    }

    const exact = paragraph.text.slice(claim.start, claim.end);
    if (claim.claim_text !== exact) {
      errors.push(`${claim.claim_id}: claim_text ne correspond pas exactement aux offsets`);
    }

    if (!Array.isArray(claim.support_ids)) {
      errors.push(`${claim.claim_id}: support_ids doit être un tableau`);
    } else {
      for (const supportId of claim.support_ids) {
        if (!supportById.has(supportId)) errors.push(`${claim.claim_id}: support_id inconnu: ${supportId}`);
      }
    }

    const list = claimsByLocator.get(claim.locator) || [];
    list.push(claim);
    claimsByLocator.set(claim.locator, list);
  }

  for (const [locator, status] of statusByLocator) {
    const count = (claimsByLocator.get(locator) || []).length;
    if (status === "CLAIMS_MAPPED" && count === 0) {
      errors.push(`${locator}: CLAIMS_MAPPED sans claim`);
    }
    if (status === "NO_VERIFIABLE_CLAIM" && count !== 0) {
      errors.push(`${locator}: NO_VERIFIABLE_CLAIM mais ${count} claim(s) présent(s)`);
    }
  }

  return { errors, paragraphByLocator, supportById };
}

async function bundle(conceptId) {
  const dir = workDir(conceptId);
  const packFile = option("pack") || path.join(dir, "factcheck-pack.json");
  const mapFile = option("map") || path.join(dir, "claim-map.json");
  if (!existsSync(packFile)) return fail(`pack introuvable: ${packFile}`);
  if (!existsSync(mapFile)) return fail(`claim map introuvable: ${mapFile}`);

  const pack = await readJson(packFile);
  const map = await readJson(mapFile);
  if (pack.status !== "READY") return fail(`pack non prêt: ${pack.status}`);

  const { errors, supportById } = validateClaimMap(pack, map);
  if (errors.length) return fail(`claim map invalide:\n- ${errors.join("\n- ")}`);

  const verificationBundle = {
    protocol_version: 1,
    concept_id: conceptId,
    candidate_sha256: pack.candidate_sha256,
    map_sha256: sha256(await readFile(mapFile, "utf8")),
    claims: map.claims.map((claim) => ({
      claim_id: claim.claim_id,
      locator: claim.locator,
      claim_text: claim.claim_text,
      supports: claim.support_ids.map((id) => supportById.get(id)),
    })),
  };

  const estimatedTokens = estimateTokens(verificationBundle);
  verificationBundle.estimated_tokens = estimatedTokens;
  verificationBundle.status =
    estimatedTokens <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED";

  const output = option("out") || path.join(dir, "verification-bundle.json");
  await writeJson(output, verificationBundle);
  console.log(
    JSON.stringify({
      concept_id: conceptId,
      status: verificationBundle.status,
      estimated_tokens: estimatedTokens,
      claims: verificationBundle.claims.length,
      artifact: path.relative(ROOT, output),
    }),
  );
}

async function gate(conceptId) {
  const dir = workDir(conceptId);
  const packFile = option("pack") || path.join(dir, "factcheck-pack.json");
  const mapFile = option("map") || path.join(dir, "claim-map.json");
  const verificationFile = option("verification") || path.join(dir, "verification.json");

  for (const file of [packFile, mapFile, verificationFile]) {
    if (!existsSync(file)) return fail(`artefact introuvable: ${file}`);
  }

  const pack = await readJson(packFile);
  const map = await readJson(mapFile);
  const verification = await readJson(verificationFile);
  const currentDeepRaw = await readFile(deepeningPath(conceptId), "utf8");
  const currentSha = sha256(currentDeepRaw);
  const structuralErrors = [];

  if (pack.status !== "READY") structuralErrors.push(`pack non prêt: ${pack.status}`);
  if (currentSha !== pack.candidate_sha256) {
    structuralErrors.push("l'approfondissement a changé depuis la préparation du pack");
  }

  const mapValidation = validateClaimMap(pack, map);
  structuralErrors.push(...mapValidation.errors);

  if (verification.concept_id !== conceptId) structuralErrors.push("concept_id du verifier incorrect");
  if (verification.candidate_sha256 !== pack.candidate_sha256) {
    structuralErrors.push("candidate_sha256 du verifier incorrect");
  }
  if (!Array.isArray(verification.results)) structuralErrors.push("verification.results doit être un tableau");

  const expectedClaims = new Set((map.claims || []).map((claim) => claim.claim_id));
  const seen = new Set();
  const semanticFailures = [];

  for (const result of verification.results || []) {
    if (!expectedClaims.has(result.claim_id)) {
      structuralErrors.push(`résultat pour claim inconnu: ${result.claim_id}`);
      continue;
    }
    if (seen.has(result.claim_id)) structuralErrors.push(`résultat dupliqué: ${result.claim_id}`);
    seen.add(result.claim_id);
    if (!ALLOWED_VERDICTS.has(result.verdict)) {
      structuralErrors.push(`verdict invalide pour ${result.claim_id}: ${result.verdict}`);
      continue;
    }
    if (result.verdict !== "SUPPORTED") semanticFailures.push(result);
  }

  for (const claimId of expectedClaims) {
    if (!seen.has(claimId)) structuralErrors.push(`claim sans verdict: ${claimId}`);
  }

  let verdict = "FACTCHECK_PASS";
  let exitCode = 0;
  if (structuralErrors.length) {
    verdict = "FACTCHECK_INVALID";
    exitCode = 2;
  } else if (semanticFailures.length) {
    verdict = "FACTCHECK_FAIL";
    exitCode = 1;
  }

  const report = {
    protocol_version: 1,
    concept_id: conceptId,
    candidate_sha256: pack.candidate_sha256,
    verdict,
    claims: expectedClaims.size,
    supported: expectedClaims.size - semanticFailures.length,
    failed: semanticFailures.length,
    structural_errors: structuralErrors,
    failures: semanticFailures,
  };

  const output = option("out") || path.join(dir, "factcheck-gate.json");
  await writeJson(output, report);
  console.log(JSON.stringify({ ...report, artifact: path.relative(ROOT, output) }));
  process.exitCode = exitCode;
}

/**
 * Le balayage d'accès : la même réconciliation sur tout le corpus, sans pack ni écriture. Le
 * chantier H demandait « rendre le défaut détectable par le code plutôt que par un audit » ; sans
 * cette sortie, le décompte se refait à la main à chaque reprise, et un décompte refait à la main
 * n'est pas une mesure.
 */
async function sweep() {
  const dir = path.join(ROOT, "corpus", "validated");
  const ids = (await readdir(dir))
    .filter((name) => name.endsWith(".json"))
    .map((name) => name.replace(/\.json$/, ""))
    .sort();

  const total = Object.fromEntries(Object.values(STATUTS).map((statut) => [statut, 0]));
  const signalees = [];

  for (const id of ids) {
    const validated = JSON.parse(await readFile(validatedPath(id), "utf8"));
    const documents = [];
    for (const { file } of listEvidenceFiles(evidenceDir(id))) {
      documents.push(JSON.parse(await readFile(file, "utf8")));
    }
    const reconciliation = reconcilierAcces(validated, documents);
    for (const [statut, nombre] of Object.entries(reconciliation.compteurs)) total[statut] += nombre;

    for (const declaration of reconciliation.declarations) {
      if (declaration.statut === STATUTS.CORROBORE || declaration.statut === STATUTS.DOSSIER_ABSENT) continue;
      signalees.push({
        concept_id: id,
        chemin: declaration.chemin,
        declare: declaration.declare,
        dossier: declaration.dossier,
        statut: declaration.statut,
        label: (declaration.label || "").slice(0, 90),
      });
    }
  }

  console.log(JSON.stringify({ cartes: ids.length, declarations: total, signalees }, null, 2));
}

const conceptId = option("only");
if (flag("sweep")) {
  await sweep();
} else if (!conceptId) {
  fail("usage: npm run corpus:factcheck -- --prepare|--bundle|--gate --only=<conceptId> | --sweep");
} else if ([flag("prepare"), flag("bundle"), flag("gate")].filter(Boolean).length !== 1) {
  fail("choisir exactement un mode: --prepare, --bundle ou --gate");
} else if (flag("prepare")) {
  await prepare(conceptId);
} else if (flag("bundle")) {
  await bundle(conceptId);
} else {
  await gate(conceptId);
}
