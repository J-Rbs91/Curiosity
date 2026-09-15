import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

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
const ALLOWED_MODES = new Set(["DOCUMENTARY", "FORMAL", "EMPIRICAL", "COMPUTATIONAL", "CONSENSUS"]);
const ALLOWED_KINDS = new Set([
  "FACT",
  "DEFINITION",
  "ATTRIBUTION",
  "RELATION",
  "LIMIT",
  "INTERPRETATION",
  "DERIVED_CONSEQUENCE",
  "BIBLIOGRAPHIC",
]);

function flag(name) {
  return process.argv.includes(`--${name}`);
}

function option(name) {
  const prefix = `--${name}=`;
  const value = process.argv.find((arg) => arg.startsWith(prefix));
  return value ? value.slice(prefix.length) : null;
}

function fail(message, code = 2) {
  console.error(`[knowledge] ${message}`);
  process.exitCode = code;
  return null;
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function stableId(prefix, value, length = 16) {
  return `${prefix}-${sha256(value).slice(0, length)}`;
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function writeJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function estimateTokens(value) {
  return Math.ceil(JSON.stringify(value).length / ESTIMATED_CHARS_PER_TOKEN);
}

function evidenceDir(id) {
  return path.join(ROOT, "corpus", "evidence", id);
}

function lecturePath(id) {
  return path.join(evidenceDir(id), "lecture.json");
}

function evidenceReviewPath(id) {
  return path.join(evidenceDir(id), "review.json");
}

function validatedPath(id) {
  return path.join(ROOT, "corpus", "validated", `${id}.json`);
}

function workDir(id) {
  return path.join(ROOT, "corpus", "knowledge", "work", id);
}

function knowledgePath(id) {
  return path.join(ROOT, "corpus", "knowledge", `${id}.json`);
}

function pedagogyPath(id) {
  return path.join(ROOT, "corpus", "knowledge", `${id}.pedagogy.json`);
}

function normalizeSource(source, index) {
  const sourceId = source.source_id || `SRC-${String(index + 1).padStart(3, "0")}`;
  return {
    source_id: sourceId,
    citation: source.citation || source.label || null,
    doi_isbn: source.doi_isbn || null,
    url: source.url || null,
    consulted: source.consulted || "metadata-only",
  };
}

function sourceFingerprint(source) {
  return JSON.stringify([
    source.citation,
    source.doi_isbn,
    source.url,
    source.consulted,
  ]);
}

function buildSupports(lecture) {
  const sources = (lecture.sources_ouvertes || []).map(normalizeSource);
  const sourceById = new Map(sources.map((source) => [source.source_id, source]));
  const supports = [];

  for (const source of sources) {
    const text = JSON.stringify({
      citation: source.citation,
      doi_isbn: source.doi_isbn,
      url: source.url,
    });
    supports.push({
      id: stableId("SUP", `BIBLIOGRAPHIC\0${sourceFingerprint(source)}\0${text}`),
      type: "BIBLIOGRAPHIC",
      source_id: source.source_id,
      access: source.consulted,
      locator: null,
      text,
    });
  }

  if (lecture.quotation?.text) {
    const source = sources.find((entry) => entry.consulted === "full-text") || sources[0] || null;
    const locator = lecture.quotation.locator || null;
    const text = lecture.quotation.original_text || lecture.quotation.text;
    const fingerprint = `VERBATIM\0${source ? sourceFingerprint(source) : "NO_SOURCE"}\0${locator || ""}\0${text}`;
    supports.push({
      id: stableId("SUP", fingerprint),
      type: "VERBATIM",
      source_id: source?.source_id || null,
      access: source?.consulted || "n/a",
      locator,
      text,
      rendered_translation: lecture.quotation.text,
    });
  }

  for (const [index, fragment] of (lecture.evidence_fragments || []).entries()) {
    if (!fragment?.text || !fragment?.source_id) continue;
    const source = sourceById.get(fragment.source_id);
    if (!source) {
      throw new Error(`evidence_fragments[${index}] référence une source inconnue: ${fragment.source_id}`);
    }
    const locator = fragment.locator || null;
    const fingerprint = `VERBATIM\0${sourceFingerprint(source)}\0${locator || ""}\0${fragment.text}`;
    supports.push({
      id: stableId("SUP", fingerprint),
      type: "VERBATIM",
      source_id: source.source_id,
      access: source.consulted,
      locator,
      text: fragment.text,
      note: fragment.note || null,
    });
  }

  return {
    sources,
    supports: [...new Map(supports.map((support) => [support.id, support])).values()],
  };
}

async function resolveEvidenceReview(id) {
  const explicit = evidenceReviewPath(id);
  if (existsSync(explicit)) {
    const raw = await readFile(explicit, "utf8");
    const review = JSON.parse(raw);
    if (review.verdict !== "EVIDENCE_PASS") {
      throw new Error(`evidence review non PASS: ${review.verdict || "MISSING"}`);
    }
    return { mode: "EVIDENCE_REVIEW", sha256: sha256(raw), file: explicit };
  }

  if (!flag("allow-legacy")) {
    throw new Error(`evidence review manquante: ${explicit}`);
  }

  const legacyFile = validatedPath(id);
  if (!existsSync(legacyFile)) {
    throw new Error("--allow-legacy exige une carte validée avec contrôle aveugle PASS");
  }
  const raw = await readFile(legacyFile, "utf8");
  const validated = JSON.parse(raw);
  if (validated.review?.verdict !== "PASS") {
    throw new Error(`contrôle aveugle legacy non PASS: ${validated.review?.verdict || "MISSING"}`);
  }
  return {
    mode: "LEGACY_BLIND_REVIEW",
    sha256: sha256(JSON.stringify(validated.review)),
    file: legacyFile,
  };
}

async function prepare(id) {
  const lectureFile = lecturePath(id);
  if (!existsSync(lectureFile)) return fail(`lecture introuvable: ${lectureFile}`);

  try {
    const lectureRaw = await readFile(lectureFile, "utf8");
    const lecture = JSON.parse(lectureRaw);
    const review = await resolveEvidenceReview(id);
    const { sources, supports } = buildSupports(lecture);
    const discipline = option("discipline") || "organizational-sociology";

    const base = {
      protocol_version: 1,
      concept_id: id,
      discipline,
      context_budget_tokens: CONTEXT_BUDGET_TOKENS,
      token_estimate_method: `JSON characters / ${ESTIMATED_CHARS_PER_TOKEN}`,
      evidence_sha256: sha256(lectureRaw),
      evidence_review_sha256: review.sha256,
      evidence_review_mode: review.mode,
      sources,
      supports,
    };
    const estimated = estimateTokens(base);
    const pack = {
      ...base,
      estimated_tokens: estimated,
      status: estimated <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED",
    };

    const output = option("out") || path.join(workDir(id), "evidence-pack.json");
    await writeJson(output, pack);
    console.log(JSON.stringify({
      concept_id: id,
      status: pack.status,
      review_mode: review.mode,
      estimated_tokens: estimated,
      supports: supports.length,
      artifact: path.relative(ROOT, output),
    }));
  } catch (error) {
    fail(error.message);
  }
}

function validateClaims(pack, claims) {
  const errors = [];
  if (claims.concept_id !== pack.concept_id) errors.push("concept_id différent du pack");
  if (claims.evidence_sha256 !== pack.evidence_sha256) errors.push("evidence_sha256 différent du pack");
  if (claims.evidence_review_sha256 !== pack.evidence_review_sha256) {
    errors.push("evidence_review_sha256 différent du pack");
  }
  if (!Array.isArray(claims.claims)) errors.push("claims doit être un tableau");

  const supportIds = new Set(pack.supports.map((support) => support.id));
  const ids = new Set();
  for (const claim of claims.claims || []) {
    if (typeof claim.claim_id !== "string" || !/^C\d{3,}$/.test(claim.claim_id)) {
      errors.push(`claim_id invalide: ${claim.claim_id}`);
    }
    if (ids.has(claim.claim_id)) errors.push(`claim_id dupliqué: ${claim.claim_id}`);
    ids.add(claim.claim_id);
    if (typeof claim.text !== "string" || !claim.text.trim()) errors.push(`${claim.claim_id}: text vide`);
    if (!ALLOWED_MODES.has(claim.mode)) errors.push(`${claim.claim_id}: mode invalide ${claim.mode}`);
    if (!ALLOWED_KINDS.has(claim.kind)) errors.push(`${claim.claim_id}: kind invalide ${claim.kind}`);
    if (!Array.isArray(claim.support_ids) || claim.support_ids.length === 0) {
      errors.push(`${claim.claim_id}: aucun support_id`);
    } else {
      for (const supportId of claim.support_ids) {
        if (!supportIds.has(supportId)) errors.push(`${claim.claim_id}: support inconnu ${supportId}`);
      }
    }
  }
  return errors;
}

async function bundle(id) {
  const dir = workDir(id);
  const packFile = option("pack") || path.join(dir, "evidence-pack.json");
  const claimsFile = option("claims") || path.join(dir, "claims.json");
  if (!existsSync(packFile)) return fail(`pack introuvable: ${packFile}`);
  if (!existsSync(claimsFile)) return fail(`claims introuvables: ${claimsFile}`);

  const pack = await readJson(packFile);
  const claims = await readJson(claimsFile);
  if (pack.status !== "READY") return fail(`pack non prêt: ${pack.status}`);
  const errors = validateClaims(pack, claims);
  if (errors.length) return fail(`claims invalides:\n- ${errors.join("\n- ")}`);

  const supportById = new Map(pack.supports.map((support) => [support.id, support]));
  const claimsRaw = await readFile(claimsFile, "utf8");
  const verificationBundle = {
    protocol_version: 1,
    concept_id: id,
    discipline: pack.discipline,
    evidence_sha256: pack.evidence_sha256,
    evidence_review_sha256: pack.evidence_review_sha256,
    claims_sha256: sha256(claimsRaw),
    claims: claims.claims.map((claim) => ({
      claim_id: claim.claim_id,
      text: claim.text,
      mode: claim.mode,
      kind: claim.kind,
      supports: claim.support_ids.map((supportId) => supportById.get(supportId)),
    })),
  };
  const estimated = estimateTokens(verificationBundle);
  verificationBundle.estimated_tokens = estimated;
  verificationBundle.status = estimated <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED";

  const output = option("out") || path.join(dir, "verification-bundle.json");
  await writeJson(output, verificationBundle);
  console.log(JSON.stringify({
    concept_id: id,
    status: verificationBundle.status,
    claims: verificationBundle.claims.length,
    estimated_tokens: estimated,
    artifact: path.relative(ROOT, output),
  }));
}

async function gate(id) {
  const dir = workDir(id);
  const packFile = option("pack") || path.join(dir, "evidence-pack.json");
  const claimsFile = option("claims") || path.join(dir, "claims.json");
  const verificationFile = option("verification") || path.join(dir, "verification.json");
  for (const file of [packFile, claimsFile, verificationFile]) {
    if (!existsSync(file)) return fail(`artefact introuvable: ${file}`);
  }

  const pack = await readJson(packFile);
  const claims = await readJson(claimsFile);
  const verification = await readJson(verificationFile);
  const structuralErrors = [];
  const semanticFailures = [];

  const currentEvidenceRaw = await readFile(lecturePath(id), "utf8");
  if (sha256(currentEvidenceRaw) !== pack.evidence_sha256) {
    structuralErrors.push("lecture.json a changé depuis la préparation du pack");
  }
  try {
    const currentReview = await resolveEvidenceReview(id);
    if (currentReview.sha256 !== pack.evidence_review_sha256) {
      structuralErrors.push("evidence review a changé depuis la préparation du pack");
    }
  } catch (error) {
    structuralErrors.push(error.message);
  }

  if (pack.status !== "READY") structuralErrors.push(`pack non prêt: ${pack.status}`);
  structuralErrors.push(...validateClaims(pack, claims));

  const claimsRaw = await readFile(claimsFile, "utf8");
  const expectedClaimsSha = sha256(claimsRaw);
  if (verification.concept_id !== id) structuralErrors.push("concept_id verifier incorrect");
  if (verification.evidence_sha256 !== pack.evidence_sha256) structuralErrors.push("evidence_sha256 verifier incorrect");
  if (verification.claims_sha256 !== expectedClaimsSha) structuralErrors.push("claims_sha256 verifier incorrect");
  if (!Array.isArray(verification.results)) structuralErrors.push("verification.results doit être un tableau");

  const expectedIds = new Set((claims.claims || []).map((claim) => claim.claim_id));
  const seen = new Set();
  for (const result of verification.results || []) {
    if (!expectedIds.has(result.claim_id)) {
      structuralErrors.push(`résultat pour claim inconnu: ${result.claim_id}`);
      continue;
    }
    if (seen.has(result.claim_id)) structuralErrors.push(`résultat dupliqué: ${result.claim_id}`);
    seen.add(result.claim_id);
    if (!ALLOWED_VERDICTS.has(result.verdict)) {
      structuralErrors.push(`verdict invalide ${result.claim_id}: ${result.verdict}`);
    } else if (result.verdict !== "SUPPORTED") {
      semanticFailures.push(result);
    }
  }
  for (const claimId of expectedIds) {
    if (!seen.has(claimId)) structuralErrors.push(`claim sans verdict: ${claimId}`);
  }

  let verdict = "KNOWLEDGE_PASS";
  let exitCode = 0;
  if (structuralErrors.length) {
    verdict = "KNOWLEDGE_INVALID";
    exitCode = 2;
  } else if (semanticFailures.length) {
    verdict = "KNOWLEDGE_FAIL";
    exitCode = 1;
  }

  const report = {
    protocol_version: 1,
    concept_id: id,
    evidence_sha256: pack.evidence_sha256,
    evidence_review_sha256: pack.evidence_review_sha256,
    claims_sha256: expectedClaimsSha,
    verdict,
    claims: expectedIds.size,
    failed: semanticFailures.length,
    structural_errors: structuralErrors,
    failures: semanticFailures,
  };

  const reportFile = option("out") || path.join(dir, "knowledge-gate.json");
  await writeJson(reportFile, report);

  if (verdict === "KNOWLEDGE_PASS" && flag("publish")) {
    const supportById = new Map(pack.supports.map((support) => [support.id, support]));
    const stableClaims = claims.claims.map((claim) => {
      const supportIds = [...claim.support_ids].sort();
      const stable = `KCL-${sha256(`${claim.text}\0${supportIds.join("\0")}`).slice(0, 12).toUpperCase()}`;
      for (const supportId of supportIds) {
        if (!supportById.has(supportId)) throw new Error(`support disparu avant publication: ${supportId}`);
      }
      return {
        id: stable,
        text: claim.text,
        mode: claim.mode,
        kind: claim.kind,
        support_ids: supportIds,
        verdict: "SUPPORTED",
      };
    });
    const record = {
      $schema: "../schema/knowledge-record.schema.json",
      protocol_version: 1,
      id,
      discipline: pack.discipline,
      status: "VERIFIED",
      evidence_sha256: pack.evidence_sha256,
      evidence_review_sha256: pack.evidence_review_sha256,
      claims: stableClaims,
      boundaries: Array.isArray(claims.boundaries) ? claims.boundaries : [],
      created_at: new Date().toISOString(),
    };
    await writeJson(knowledgePath(id), record);
  }

  console.log(JSON.stringify({ ...report, artifact: path.relative(ROOT, reportFile), published: verdict === "KNOWLEDGE_PASS" && flag("publish") }));
  process.exitCode = exitCode;
}

async function validatePlan(id) {
  const knowledgeFile = knowledgePath(id);
  const planFile = option("plan") || pedagogyPath(id);
  if (!existsSync(knowledgeFile)) return fail(`knowledge record introuvable: ${knowledgeFile}`);
  if (!existsSync(planFile)) return fail(`pedagogy plan introuvable: ${planFile}`);

  const knowledgeRaw = await readFile(knowledgeFile, "utf8");
  const knowledge = JSON.parse(knowledgeRaw);
  const plan = await readJson(planFile);
  const errors = [];
  if (plan.concept_id !== id) errors.push("concept_id du plan incorrect");
  if (plan.knowledge_sha256 !== sha256(knowledgeRaw)) errors.push("knowledge_sha256 du plan incorrect");

  const claimIds = new Set((knowledge.claims || []).map((claim) => claim.id));
  const referenced = [];
  for (const claimId of plan.card?.claim_ids || []) referenced.push(["card", claimId]);
  const stepIds = new Set();
  for (const step of plan.deepening?.steps || []) {
    if (stepIds.has(step.id)) errors.push(`step id dupliqué: ${step.id}`);
    stepIds.add(step.id);
    if (!step.learning_delta?.trim()) errors.push(`${step.id}: learning_delta vide`);
    for (const claimId of step.claim_ids || []) referenced.push([step.id, claimId]);
  }
  for (const [where, claimId] of referenced) {
    if (!claimIds.has(claimId)) errors.push(`${where}: claim inconnu ${claimId}`);
  }
  if (!(plan.card?.claim_ids || []).length) errors.push("card.claim_ids vide");
  if (!(plan.deepening?.steps || []).length) errors.push("deepening.steps vide");

  if (errors.length) return fail(`pedagogy plan invalide:\n- ${errors.join("\n- ")}`);
  console.log(JSON.stringify({ concept_id: id, verdict: "PLAN_PASS", claims_available: claimIds.size, steps: plan.deepening.steps.length }));
}

const id = option("only");
if (!id) {
  fail("usage: npm run corpus:knowledge -- --prepare|--bundle|--gate|--validate-plan --only=<id>");
} else if (flag("prepare")) {
  await prepare(id);
} else if (flag("bundle")) {
  await bundle(id);
} else if (flag("gate")) {
  await gate(id);
} else if (flag("validate-plan")) {
  await validatePlan(id);
} else {
  fail("choisir exactement une action: --prepare, --bundle, --gate ou --validate-plan");
}
