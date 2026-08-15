import { describe, expect, it } from "vitest";
import { computeNextReviewDate, isReviewDue } from "./index";

describe("computeNextReviewDate", () => {
  it("suit l'échelle J+1 / J+4 / J+10 / J+30", () => {
    const from = new Date("2026-01-01T00:00:00.000Z");
    expect(computeNextReviewDate(1, from).toISOString().slice(0, 10)).toBe("2026-01-02");
    expect(computeNextReviewDate(2, from).toISOString().slice(0, 10)).toBe("2026-01-05");
    expect(computeNextReviewDate(3, from).toISOString().slice(0, 10)).toBe("2026-01-11");
    expect(computeNextReviewDate(4, from).toISOString().slice(0, 10)).toBe("2026-01-31");
  });

  it("reste à un palier de 30 jours au-delà du 4e encounter", () => {
    const from = new Date("2026-01-01T00:00:00.000Z");
    expect(computeNextReviewDate(7, from).toISOString().slice(0, 10)).toBe("2026-01-31");
  });
});

describe("isReviewDue", () => {
  it("est fausse sans date programmée", () => {
    expect(isReviewDue(undefined, new Date())).toBe(false);
  });

  it("est vraie quand la date programmée est passée", () => {
    expect(isReviewDue("2020-01-01T00:00:00.000Z", new Date("2026-01-01T00:00:00.000Z"))).toBe(
      true
    );
  });

  it("est fausse quand la date programmée est future", () => {
    expect(isReviewDue("2030-01-01T00:00:00.000Z", new Date("2026-01-01T00:00:00.000Z"))).toBe(
      false
    );
  });
});
