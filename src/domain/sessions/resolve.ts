import type { Author, CaseStudy, Concept, SessionPlan, Theme } from "@/types";

export interface ResolvedSession {
  plan: SessionPlan;
  primary: Concept;
  secondary?: Concept;
  caseStudy?: CaseStudy;
  primaryAuthors: Author[];
  primaryThemes: Theme[];
  authors: Author[];
}

export interface ResolvableContent {
  concepts: Concept[];
  authors: Author[];
  themes: Theme[];
  caseStudies: CaseStudy[];
}

export function resolveSessionPlan(
  plan: SessionPlan,
  content: ResolvableContent
): ResolvedSession | null {
  const primary = content.concepts.find((c) => c.id === plan.primaryConceptId);
  if (!primary) return null;

  const secondary = plan.secondaryConceptId
    ? content.concepts.find((c) => c.id === plan.secondaryConceptId)
    : undefined;

  const caseStudy = plan.caseStudyId
    ? content.caseStudies.find((cs) => cs.id === plan.caseStudyId)
    : undefined;

  return {
    plan,
    primary,
    secondary,
    caseStudy,
    primaryAuthors: content.authors.filter((a) => primary.authors.includes(a.id)),
    primaryThemes: content.themes.filter((t) => primary.themes.includes(t.id)),
    authors: content.authors,
  };
}
