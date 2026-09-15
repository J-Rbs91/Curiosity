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
  console.error(`[content-gate] ${message}`);
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

function estimateTokens(value) {
  return Math.ceil(JSON.stringify(value).length / ESTIMATED_CHARS_PER_TOKEN);
}

function workDir(artifact, id) {
  return path.join(ROOT, "corpus", "content-checks", "work", artifact, id);
}

function knowledgePath(id) {
  return path.join(ROOT, "corpus", "knowledge", `${id}.json`);
}

function resolveArtifactPath(artifact, id) {
  const explicit = option("path");
  if (explicit) return path.resolve(ROOT, explicit);
  if (artifact === "deepening") {
    return path.join(ROOT, "corpus", "deepenings", `${id}.json`);
  }
  if (artifact === "card") {
    const review = path.join(ROOT, "corpus", "review", `${id}.json`);
    if (existsSync(review)) return review;
    return path.join(ROOT, "corpus", "validated", `${id}.json`);
  }
  throw new Error(`artifact inconnu: ${artifact}`);
}

function unitsFor(artifact, doc) {
  if (artifact === "card") {
    const units = [
      { locator: "hook", text: doc.hook },
      { locator: "summary", text: doc.summary },
    ];
    if (doc.attribution_note) units.push({ locator: "attribution_note", text: doc.attribution_note });
    return units.filter((unit) => typeof unit.text === "string" && unit.text.trim());
  }

  const units = [];
  for (const [index, text] of (doc.lead || []).entries()) {
    units.push({ locator: `lead[${index}]`, text });
  }
  for (const [sectionIndex, section] of (doc.sections || []).entries()) {
    for (const [paragraphIndex, text] of (section.paragraphs || []).entries()) {
      units.push({
        locator: `sections[${sectionIndex}].paragraphs[${paragraphIndex}]`,
        section_title: section.title,
        text,
      });
    }
  }
  return units;
}

async function prepare(id, artifact) {
  try {
    const knowledgeFile = knowledgePath(id);
    const artifactFile = resolveArtifactPath(artifact, id);
    if (!existsSync(knowledgeFile)) return fail(`knowledge record introuvable: ${knowledgeFile}`);
    if (!existsSync(artifactFile)) return fail(`artifact introuvable: ${artifactFile}`);

    const knowledgeRaw = await readFile(knowledgeFile, "utf8");
    const artifactRaw = await readFile(artifactFile, "utf8");
    const knowledge = JSON.parse(knowledgeRaw);
    const doc = JSON.parse(artifactRaw);
    if (knowledge.status !== "VERIFIED") return fail(`knowledge record non VERIFIED: ${knowledge.status}`);

    const base = {
      protocol_version: 1,
      artifact_type: artifact,
      concept_id: id,
      candidate_path: path.relative(ROOT, artifactFile),
      candidate_sha256: sha256(artifactRaw),
      knowledge_sha256: sha256(knowledgeRaw),
      context_budget_tokens: CONTEXT_BUDGET_TOKENS,
      units: unitsFor(artifact, doc),
      knowledge_claims: knowledge.claims,
    };
    const estimated = estimateTokens(base);
    const pack = {
      ...base,
      estimated_tokens: estimated,
      status: estimated <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED",
    };
    const output = option("out") || path.join(workDir(artifact, id), "content-pack.json");
    await writeJson(output, pack);
    console.log(JSON.stringify({
      artifact_type: artifact,
      concept_id: id,
      status: pack.status,
      units: pack.units.length,
      knowledge_claims: pack.knowledge_claims.length,
      estimated_tokens: estimated,
      artifact: path.relative(ROOT, output),
    }));
  } catch (error) {
    fail(error.message);
  }
}

function validateMap(pack, map) {
  const errors = [];
  if (map.artifact_type !== pack.artifact_type) errors.push("artifact_type incorrect");
  if (map.concept_id !== pack.concept_id) errors.push("concept_id incorrect");
  if (map.candidate_sha256 !== pack.candidate_sha256) errors.push("candidate_sha256 incorrect");
  if (map.knowledge_sha256 !== pack.knowledge_sha256) errors.push("knowledge_sha256 incorrect");
  if (!Array.isArray(map.units)) errors.push("map.units doit être un tableau");

  const unitByLocator = new Map(pack.units.map((unit) => [unit.locator, unit]));
  const claimById = new Map(pack.knowledge_claims.map((claim) => [claim.id, claim]));
  const seenUnits = new Set();
  const mappingIds = new Set();

  for (const unit of map.units || []) {
    if (!unitByLocator.has(unit.locator)) {
      errors.push(`locator inconnu: ${unit.locator}`);
      continue;
    }
    if (seenUnits.has(unit.locator)) errors.push(`locator dupliqué: ${unit.locator}`);
    seenUnits.add(unit.locator);
    if (!Array.isArray(unit.mappings) || unit.mappings.length === 0) {
      errors.push(`${unit.locator}: au moins un mapping de claim est obligatoire`);
      continue;
    }
    const sourceText = unitByLocator.get(unit.locator).text;
    for (const mapping of unit.mappings) {
      if (typeof mapping.mapping_id !== "string" || !/^M\d{3,}$/.test(mapping.mapping_id)) {
        errors.push(`${unit.locator}: mapping_id invalide ${mapping.mapping_id}`);
      }
      if (mappingIds.has(mapping.mapping_id)) errors.push(`mapping_id dupliqué: ${mapping.mapping_id}`);
      mappingIds.add(mapping.mapping_id);
      if (!Number.isInteger(mapping.start) || !Number.isInteger(mapping.end)) {
        errors.push(`${mapping.mapping_id}: start/end doivent être des entiers`);
        continue;
      }
      if (mapping.start < 0 || mapping.end <= mapping.start || mapping.end > sourceText.length) {
        errors.push(`${mapping.mapping_id}: offsets hors limites`);
        continue;
      }
      const exact = sourceText.slice(mapping.start, mapping.end);
      if (mapping.text !== exact) errors.push(`${mapping.mapping_id}: text ne correspond pas aux offsets`);
      if (!Array.isArray(mapping.claim_ids) || mapping.claim_ids.length === 0) {
        errors.push(`${mapping.mapping_id}: claim_ids vide`);
      } else {
        for (const claimId of mapping.claim_ids) {
          if (!claimById.has(claimId)) errors.push(`${mapping.mapping_id}: knowledge claim inconnu ${claimId}`);
        }
      }
    }
  }

  for (const locator of unitByLocator.keys()) {
    if (!seenUnits.has(locator)) errors.push(`unité non mappée: ${locator}`);
  }
  return { errors, unitByLocator, claimById };
}

async function bundle(id, artifact) {
  const dir = workDir(artifact, id);
  const packFile = option("pack") || path.join(dir, "content-pack.json");
  const mapFile = option("map") || path.join(dir, "content-map.json");
  if (!existsSync(packFile)) return fail(`pack introuvable: ${packFile}`);
  if (!existsSync(mapFile)) return fail(`map introuvable: ${mapFile}`);
  const pack = await readJson(packFile);
  const map = await readJson(mapFile);
  if (pack.status !== "READY") return fail(`pack non prêt: ${pack.status}`);
  const { errors, unitByLocator, claimById } = validateMap(pack, map);
  if (errors.length) return fail(`content map invalide:\n- ${errors.join("\n- ")}`);

  const mapRaw = await readFile(mapFile, "utf8");
  const verificationBundle = {
    protocol_version: 1,
    artifact_type: artifact,
    concept_id: id,
    candidate_sha256: pack.candidate_sha256,
    knowledge_sha256: pack.knowledge_sha256,
    map_sha256: sha256(mapRaw),
    units: map.units.map((unit) => ({
      locator: unit.locator,
      full_text: unitByLocator.get(unit.locator).text,
      mappings: unit.mappings.map((mapping) => ({
        mapping_id: mapping.mapping_id,
        start: mapping.start,
        end: mapping.end,
        text: mapping.text,
        claims: mapping.claim_ids.map((claimId) => claimById.get(claimId)),
      })),
    })),
  };
  const estimated = estimateTokens(verificationBundle);
  verificationBundle.estimated_tokens = estimated;
  verificationBundle.status = estimated <= CONTEXT_BUDGET_TOKENS ? "READY" : "PARTITION_REQUIRED";

  const output = option("out") || path.join(dir, "verification-bundle.json");
  await writeJson(output, verificationBundle);
  console.log(JSON.stringify({
    artifact_type: artifact,
    concept_id: id,
    status: verificationBundle.status,
    units: verificationBundle.units.length,
    estimated_tokens: estimated,
    artifact: path.relative(ROOT, output),
  }));
}

async function gate(id, artifact) {
  const dir = workDir(artifact, id);
  const packFile = option("pack") || path.join(dir, "content-pack.json");
  const mapFile = option("map") || path.join(dir, "content-map.json");
  const verificationFile = option("verification") || path.join(dir, "verification.json");
  for (const file of [packFile, mapFile, verificationFile]) {
    if (!existsSync(file)) return fail(`artefact introuvable: ${file}`);
  }

  const pack = await readJson(packFile);
  const map = await readJson(mapFile);
  const verification = await readJson(verificationFile);
  const structuralErrors = [];
  const semanticFailures = [];

  const currentArtifactRaw = await readFile(path.resolve(ROOT, pack.candidate_path), "utf8");
  const currentKnowledgeRaw = await readFile(knowledgePath(id), "utf8");
  if (sha256(currentArtifactRaw) !== pack.candidate_sha256) structuralErrors.push("artifact modifié depuis prepare");
  if (sha256(currentKnowledgeRaw) !== pack.knowledge_sha256) structuralErrors.push("knowledge record modifié depuis prepare");
  if (pack.status !== "READY") structuralErrors.push(`pack non prêt: ${pack.status}`);

  const mapValidation = validateMap(pack, map);
  structuralErrors.push(...mapValidation.errors);
  const mapRaw = await readFile(mapFile, "utf8");
  const mapSha = sha256(mapRaw);

  if (verification.artifact_type !== artifact) structuralErrors.push("artifact_type verifier incorrect");
  if (verification.concept_id !== id) structuralErrors.push("concept_id verifier incorrect");
  if (verification.candidate_sha256 !== pack.candidate_sha256) structuralErrors.push("candidate_sha256 verifier incorrect");
  if (verification.knowledge_sha256 !== pack.knowledge_sha256) structuralErrors.push("knowledge_sha256 verifier incorrect");
  if (verification.map_sha256 !== mapSha) structuralErrors.push("map_sha256 verifier incorrect");
  if (!Array.isArray(verification.results)) structuralErrors.push("verification.results doit être un tableau");

  const expectedLocators = new Set(pack.units.map((unit) => unit.locator));
  const seen = new Set();
  for (const result of verification.results || []) {
    if (!expectedLocators.has(result.locator)) {
      structuralErrors.push(`résultat pour locator inconnu: ${result.locator}`);
      continue;
    }
    if (seen.has(result.locator)) structuralErrors.push(`résultat dupliqué: ${result.locator}`);
    seen.add(result.locator);
    if (!ALLOWED_VERDICTS.has(result.verdict)) {
      structuralErrors.push(`verdict invalide ${result.locator}: ${result.verdict}`);
    } else if (result.verdict !== "SUPPORTED") {
      semanticFailures.push(result);
    }
  }
  for (const locator of expectedLocators) {
    if (!seen.has(locator)) structuralErrors.push(`unité sans verdict: ${locator}`);
  }

  let verdict = "CONTENT_PASS";
  let exitCode = 0;
  if (structuralErrors.length) {
    verdict = "CONTENT_INVALID";
    exitCode = 2;
  } else if (semanticFailures.length) {
    verdict = "CONTENT_FAIL";
    exitCode = 1;
  }

  const report = {
    protocol_version: 1,
    artifact_type: artifact,
    concept_id: id,
    candidate_sha256: pack.candidate_sha256,
    knowledge_sha256: pack.knowledge_sha256,
    verdict,
    units: expectedLocators.size,
    failed: semanticFailures.length,
    structural_errors: structuralErrors,
    failures: semanticFailures,
  };
  const output = option("out") || path.join(ROOT, "corpus", "content-checks", artifact, `${id}.json`);
  await writeJson(output, report);
  console.log(JSON.stringify({ ...report, artifact: path.relative(ROOT, output) }));
  process.exitCode = exitCode;
}

const id = option("only");
const artifact = option("artifact");
if (!id || !artifact) {
  fail("usage: npm run corpus:content-check -- --prepare|--bundle|--gate --artifact=card|deepening --only=<id>");
} else if (!new Set(["card", "deepening"]).has(artifact)) {
  fail(`artifact invalide: ${artifact}`);
} else if (flag("prepare")) {
  await prepare(id, artifact);
} else if (flag("bundle")) {
  await bundle(id, artifact);
} else if (flag("gate")) {
  await gate(id, artifact);
} else {
  fail("choisir exactement une action: --prepare, --bundle ou --gate");
}
