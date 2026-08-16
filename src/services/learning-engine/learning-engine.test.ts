import { describe, expect, it } from "vitest";
import { selectNextSession, type EngineContent } from "./index";
import { createEmptyProgressState } from "@/repositories/progress.repository";
import type { Concept, ProgressState } from "@/types";

function makeConcept(overrides: Partial<Concept> & Pick<Concept, "id">): Concept {
  return {
    slug: overrides.id,
    title: overrides.id,
    hookQuestion: `Question sur ${overrides.id} ?`,
    shortExplanation: `Explication courte de ${overrides.id}.`,
    detailedExplanation: `Explication détaillée de ${overrides.id}.`,
    authors: ["weber"],
    themes: ["bureaucratie"],
    relatedConcepts: [],
    prerequisites: [],
    concreteExample: `Exemple pour ${overrides.id}.`,
    analysisQuestions: [`Quel mécanisme est à l'œuvre dans ${overrides.id} ?`],
    quiz: [
      {
        id: `${overrides.id}-q1`,
        type: "mcq",
        prompt: "?",
        choices: ["a", "b"],
        correctAnswer: "0",
        explanation: "explication",
      },
    ],
    difficulty: 1,
    ...overrides,
  };
}

const baseContent: EngineContent = {
  concepts: [],
  authors: [
    { id: "weber", slug: "weber", name: "Weber", tagline: "", bio: "", themes: ["bureaucratie"] },
  ],
  themes: [{ id: "bureaucratie", slug: "bureaucratie", title: "Bureaucratie", description: "" }],
  caseStudies: [],
};

/**
 * Le moteur peut légitimement ne rien proposer — corpus vide, cas couvert plus bas. Tous
 * les autres cas ont un corpus : y recevoir `null` est une défaillance, pas un état.
 */
function nextSession(content: EngineContent, progress: ProgressState, now?: Date) {
  const plan = selectNextSession(content, progress, now);
  if (!plan) throw new Error("aucune session proposée alors que le corpus n'est pas vide");
  return plan;
}

describe("selectNextSession — corpus vide", () => {
  it("ne propose rien plutôt que d'inventer une session", () => {
    const content: EngineContent = { ...baseContent, concepts: [] };
    expect(selectNextSession(content, createEmptyProgressState())).toBeNull();
  });
});

describe("selectNextSession — prérequis", () => {
  it("ne propose jamais un concept dont les prérequis ne sont pas remplis", () => {
    const a = makeConcept({ id: "a" });
    const b = makeConcept({ id: "b", prerequisites: ["a"] });
    const content: EngineContent = { ...baseContent, concepts: [a, b] };
    const progress = createEmptyProgressState();

    for (let i = 0; i < 20; i++) {
      const plan = nextSession(content, progress, new Date("2026-01-01T00:00:00.000Z"));
      expect(plan.primaryConceptId).not.toBe("b");
    }
  });
});

describe("selectNextSession — révision", () => {
  it("favorise une révision lorsqu'elle est due, sans empêcher la découverte", () => {
    const known = makeConcept({ id: "known" });
    const others = Array.from({ length: 5 }, (_, i) => makeConcept({ id: `new-${i}` }));
    const content: EngineContent = { ...baseContent, concepts: [known, ...others] };

    const now = new Date("2026-01-10T00:00:00.000Z");
    const progress: ProgressState = {
      ...createEmptyProgressState(),
      concepts: {
        known: {
          conceptId: "known",
          masteryScore: 1,
          encounters: 1,
          discoveredAt: "2026-01-01T00:00:00.000Z",
          lastSeenAt: "2026-01-01T00:00:00.000Z",
          nextReviewAt: "2026-01-02T00:00:00.000Z",
          correctAnswers: 0,
          incorrectAnswers: 0,
        },
      },
    };

    const types = new Set<string>();
    for (let i = 0; i < 300; i++) {
      const plan = nextSession(content, progress, now);
      types.add(plan.type);
    }

    expect(types.has("review")).toBe(true);
    expect(types.has("discovery")).toBe(true);
  });
});

describe("selectNextSession — anti-répétition", () => {
  it("évite de proposer immédiatement le même concept qu'à la session précédente quand une alternative existe", () => {
    const a = makeConcept({ id: "a" });
    const b = makeConcept({ id: "b" });
    const content: EngineContent = { ...baseContent, concepts: [a, b] };

    const progress: ProgressState = {
      ...createEmptyProgressState(),
      sessionHistory: [
        {
          id: "s1",
          type: "discovery",
          conceptIds: ["a"],
          startedAt: "2026-01-01T00:00:00.000Z",
        },
      ],
    };

    const plan = nextSession(content, progress, new Date("2026-01-01T00:10:00.000Z"));
    expect(plan.primaryConceptId).toBe("b");
  });
});
