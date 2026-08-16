import type {
  Author,
  CaseStudy,
  Concept,
  ConceptId,
  MasteryScore,
  ProgressState,
  SessionPlan,
  SessionType,
  Theme,
} from "@/types";
import {
  conceptsByAuthor,
  conceptsByTheme,
  indexConcepts,
  prerequisitesMet,
} from "@/domain/concepts/graph";
import { isUnderstood } from "@/domain/progress/mastery";
import { isReviewDue } from "@/services/spaced-repetition";
import { SESSION_TYPE_META } from "@/domain/sessions";

export interface EngineContent {
  concepts: Concept[];
  authors: Author[];
  themes: Theme[];
  caseStudies: CaseStudy[];
}

/**
 * Distribution cible des types de session (section 10 de la spec). Elle est ensuite
 * renormalisée sur les seuls types réalisables au moment T.
 */
const SESSION_TYPE_WEIGHTS: Record<SessionType, number> = {
  discovery: 0.45,
  review: 0.2,
  deepening: 0.15,
  connection: 0.1,
  comparison: 0.05,
  "case-study": 0.05,
};

interface Candidate {
  type: SessionType;
  weight: number;
  build: () => SessionPlan | null;
}

function masteryMap(progress: ProgressState): Map<ConceptId, number> {
  const map = new Map<ConceptId, number>();
  for (const p of Object.values(progress.concepts)) map.set(p.conceptId, p.masteryScore);
  return map;
}

function encounteredIds(progress: ProgressState): Set<ConceptId> {
  return new Set(
    Object.values(progress.concepts)
      .filter((p) => p.masteryScore >= 1)
      .map((p) => p.conceptId)
  );
}

function lastConceptIds(progress: ProgressState, count = 1): Set<ConceptId> {
  const last = progress.sessionHistory.slice(-count);
  return new Set(last.flatMap((s) => s.conceptIds));
}

function coverageCount<T extends { id: string }>(
  items: T[],
  conceptsFor: (item: T) => Concept[],
  encountered: Set<ConceptId>
): Map<string, number> {
  const map = new Map<string, number>();
  for (const item of items) {
    const count = conceptsFor(item).filter((c) => encountered.has(c.id)).length;
    map.set(item.id, count);
  }
  return map;
}

function pickLeastCovered<T extends { id: string; difficulty?: number }>(
  candidates: T[],
  coverageOf: (item: T) => number,
  exclude: Set<ConceptId>
): T | undefined {
  const filtered = candidates.filter((c) => !exclude.has(c.id));
  const pool = filtered.length > 0 ? filtered : candidates;
  if (pool.length === 0) return undefined;
  return [...pool].sort((a, b) => {
    const coverageDiff = coverageOf(a) - coverageOf(b);
    if (coverageDiff !== 0) return coverageDiff;
    return (a.difficulty ?? 0) - (b.difficulty ?? 0);
  })[0];
}

/**
 * Cœur du moteur pédagogique : choisit la session la plus pertinente à proposer
 * maintenant, à partir du corpus et de la progression de l'utilisateur.
 */
export function selectNextSession(
  content: EngineContent,
  progress: ProgressState,
  now: Date = new Date()
): SessionPlan {
  const { concepts, authors, themes, caseStudies } = content;
  const conceptIndex = indexConcepts(concepts);
  const mastery = masteryMap(progress);
  const encountered = encounteredIds(progress);
  const recentlySeen = lastConceptIds(progress, 2);

  const authorCoverage = coverageCount(authors, (a) => conceptsByAuthor(concepts, a.id), encountered);
  const themeCoverage = coverageCount(themes, (t) => conceptsByTheme(concepts, t.id), encountered);

  const scoreConcept = (c: Concept) => {
    const authorScore = Math.min(...c.authors.map((id) => authorCoverage.get(id) ?? 0));
    const themeScore = Math.min(...c.themes.map((id) => themeCoverage.get(id) ?? 0));
    return authorScore + themeScore;
  };

  // --- Discovery : concepts jamais rencontrés dont les prérequis sont acquis ---
  const discoverable = concepts.filter((c) => {
    const seen = (progress.concepts[c.id]?.masteryScore ?? 0) >= 1;
    return !seen && prerequisitesMet(c, mastery);
  });

  // --- Review : concepts dont la prochaine révision est due ---
  const due = concepts.filter((c) => isReviewDue(progress.concepts[c.id]?.nextReviewAt, now));

  // --- Deepening : concepts compris (score >= 3) avec un approfondissement disponible ---
  const deepenable = concepts.filter((c) => {
    const score = (progress.concepts[c.id]?.masteryScore ?? 0) as MasteryScore;
    return isUnderstood(score) && (c.deepensInto?.length ?? 0) > 0;
  });

  // --- Connection : concepts déjà connus reliés à un autre concept déjà connu ---
  const connectable = concepts.filter(
    (c) => encountered.has(c.id) && c.relatedConcepts.some((id) => encountered.has(id))
  );

  // --- Comparison : deux concepts connus, d'auteurs différents, partageant un thème ---
  const comparisonPairs: [Concept, Concept][] = [];
  for (const c of concepts) {
    if (!encountered.has(c.id)) continue;
    for (const relatedId of c.relatedConcepts) {
      const related = conceptIndex.get(relatedId);
      if (!related || !encountered.has(related.id)) continue;
      const differentAuthor = related.authors.some((a) => !c.authors.includes(a));
      if (differentAuthor) comparisonPairs.push([c, related]);
    }
  }

  // --- Case study : au moins un concept de la lecture déjà rencontré ---
  const relevantCaseStudies = caseStudies.filter((cs) =>
    cs.readings.some((r) => r.conceptIds.some((id) => encountered.has(id)))
  );

  const candidates: Candidate[] = [
    {
      type: "discovery",
      weight: discoverable.length > 0 ? SESSION_TYPE_WEIGHTS.discovery : 0,
      build: () => {
        const pick = pickLeastCovered(discoverable, scoreConcept, recentlySeen);
        if (!pick) return null;
        return buildPlan("discovery", pick, undefined, undefined, progress, pick.hookQuestion);
      },
    },
    {
      type: "review",
      weight: due.length > 0 ? SESSION_TYPE_WEIGHTS.review : 0,
      build: () => {
        const pick = pickLeastCovered(due, () => 0, recentlySeen);
        if (!pick) return null;
        return buildPlan(
          "review",
          pick,
          undefined,
          undefined,
          progress,
          `On révise : ${pick.title.toLowerCase()}.`
        );
      },
    },
    {
      type: "deepening",
      weight: deepenable.length > 0 ? SESSION_TYPE_WEIGHTS.deepening : 0,
      build: () => {
        const pick = pickLeastCovered(deepenable, scoreConcept, recentlySeen);
        if (!pick) return null;
        return buildPlan(
          "deepening",
          pick,
          pick.deepensInto?.[0],
          undefined,
          progress,
          `Approfondir : ${pick.title.toLowerCase()}.`
        );
      },
    },
    {
      type: "connection",
      weight: connectable.length > 0 ? SESSION_TYPE_WEIGHTS.connection : 0,
      build: () => {
        const pick = pickLeastCovered(connectable, () => 0, recentlySeen);
        if (!pick) return null;
        const secondary = pick.relatedConcepts.find((id) => encountered.has(id));
        return buildPlan(
          "connection",
          pick,
          secondary,
          undefined,
          progress,
          `Vous connaissez déjà ${pick.title.toLowerCase()}. Voyons ce qu'il faut relier.`
        );
      },
    },
    {
      type: "comparison",
      weight: comparisonPairs.length > 0 ? SESSION_TYPE_WEIGHTS.comparison : 0,
      build: () => {
        const [a, b] = comparisonPairs[Math.floor(Math.random() * comparisonPairs.length)];
        return buildPlan(
          "comparison",
          a,
          b.id,
          undefined,
          progress,
          `${a.title} et ${b.title} : que faut-il distinguer ?`
        );
      },
    },
    {
      type: "case-study",
      weight: relevantCaseStudies.length > 0 ? SESSION_TYPE_WEIGHTS["case-study"] : 0,
      build: () => {
        const cs = relevantCaseStudies[Math.floor(Math.random() * relevantCaseStudies.length)];
        const firstConceptId = cs.readings[0]?.conceptIds[0];
        const primary = firstConceptId ? conceptIndex.get(firstConceptId) : undefined;
        if (!primary) return null;
        return buildPlan("case-study", primary, undefined, cs.id, progress, cs.title);
      },
    },
  ];

  const feasible = candidates.filter((c) => c.weight > 0);
  const pool = feasible.length > 0 ? feasible : candidates.filter((c) => c.build() !== null);

  const chosen = weightedPick(pool.length > 0 ? pool : candidates);
  const plan = chosen?.build();
  if (plan) return plan;

  // Filet de sécurité ultime : proposer n'importe quel concept jamais rencontré,
  // même hors distribution, plutôt que de ne rien proposer.
  const fallbackConcept = concepts.find((c) => !encountered.has(c.id)) ?? concepts[0];
  return buildPlan(
    "discovery",
    fallbackConcept,
    undefined,
    undefined,
    progress,
    fallbackConcept.hookQuestion
  );
}

function weightedPick(candidates: Candidate[]): Candidate | undefined {
  const total = candidates.reduce((sum, c) => sum + c.weight, 0);
  if (total <= 0) return candidates[0];
  let r = Math.random() * total;
  for (const c of candidates) {
    r -= c.weight;
    if (r <= 0) return c;
  }
  return candidates[candidates.length - 1];
}

function buildPlan(
  type: SessionType,
  primary: Concept,
  secondaryConceptId: ConceptId | undefined,
  caseStudyId: string | undefined,
  progress: ProgressState,
  headline: string
): SessionPlan {
  return {
    id: `${type}-${primary.id}-${Date.now()}`,
    type,
    primaryConceptId: primary.id,
    secondaryConceptId,
    caseStudyId,
    headline,
  };
}

export { SESSION_TYPE_META };
