import { describe, expect, it } from "vitest";

import { carryOverClaims } from "./carry-over.mjs";

const SHA = "a".repeat(64);

function pack(paragraphs, sha = SHA) {
  return { candidate_sha256: sha, paragraphs };
}

function map(claims, paragraphs = [], sha = SHA) {
  return { candidate_sha256: sha, claims, paragraphs };
}

const P1 = { locator: "lead[0]", text: "Une phrase stable. Une seconde phrase stable." };
const P2 = { locator: "sections[0].paragraphs[0]", text: "Un paragraphe qui va changer." };

const CLAIM_P1 = {
  locator: "lead[0]",
  start: 0,
  end: 18,
  claim_text: "Une phrase stable.",
  support_ids: ["SUP-1111111111111111"],
};

describe("carryOverClaims — ce qui est reporté", () => {
  it("reporte les claims d'un paragraphe au texte inchangé", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1, P2]),
      oldMap: map([CLAIM_P1], [{ locator: "lead[0]", mapping_status: "CLAIMS_MAPPED" }]),
      newParagraphs: [P1, { ...P2, text: "Un paragraphe corrigé." }],
    });

    expect(carry.carried_locators).toEqual(["lead[0]"]);
    expect(carry.changed_locators).toEqual(["sections[0].paragraphs[0]"]);
    expect(carry.carried[0].claims).toHaveLength(1);
    expect(carry.carried[0].mapping_status).toBe("CLAIMS_MAPPED");
  });

  it("conserve les support_ids exactement, sans en ajouter ni en retirer", () => {
    const claim = { ...CLAIM_P1, support_ids: ["SUP-a", "SUP-b"] };
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([claim]),
      newParagraphs: [P1],
    });

    expect(carry.carried[0].claims[0].support_ids).toEqual(["SUP-a", "SUP-b"]);
  });

  it("ne reporte aucun verdict : le jugement n'est jamais figé", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([{ ...CLAIM_P1, verdict: "SUPPORTED" }]),
      newParagraphs: [P1],
    });

    const serialised = JSON.stringify(carry);
    expect(serialised).not.toContain("SUPPORTED");
    expect(carry.carried[0].claims[0]).not.toHaveProperty("verdict");
  });

  it("reporte un paragraphe exempté, qui ne porte aucun claim", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1, P2]),
      oldMap: map([CLAIM_P1], [
        { locator: "lead[0]", mapping_status: "CLAIMS_MAPPED" },
        { locator: "sections[0].paragraphs[0]", mapping_status: "NO_VERIFIABLE_CLAIM" },
      ]),
      newParagraphs: [P1, P2],
    });

    const exempted = carry.carried.find((e) => e.locator === "sections[0].paragraphs[0]");
    expect(exempted.mapping_status).toBe("NO_VERIFIABLE_CLAIM");
    expect(exempted.claims).toEqual([]);
  });
});

describe("carryOverClaims — ce qui repart au mapping", () => {
  it("ne reporte pas un paragraphe dont le texte a changé d'un seul caractère", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([CLAIM_P1]),
      newParagraphs: [{ ...P1, text: `${P1.text} ` }],
    });

    expect(carry).toBeNull();
  });

  it("ne reporte pas un paragraphe nouveau, absent de l'ancien pack", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([CLAIM_P1]),
      newParagraphs: [P1, { locator: "sections[9].paragraphs[0]", text: "Section neuve." }],
    });

    expect(carry.carried_locators).toEqual(["lead[0]"]);
    expect(carry.changed_locators).toEqual(["sections[9].paragraphs[0]"]);
  });

  it("refuse le report si un offset ne retombe plus sur son claim_text", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([{ ...CLAIM_P1, start: 3 }]),
      newParagraphs: [P1],
    });

    expect(carry).toBeNull();
  });

  it("refuse le report si des offsets ne sont pas entiers", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([{ ...CLAIM_P1, start: null, end: null }]),
      newParagraphs: [P1],
    });

    expect(carry).toBeNull();
  });
});

describe("carryOverClaims — appariement pack / mapping", () => {
  it("refuse un mapping qui n'appartient pas au pack qu'il accompagne", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1], SHA),
      oldMap: map([CLAIM_P1], [], "b".repeat(64)),
      newParagraphs: [P1],
    });

    expect(carry).toBeNull();
  });

  it("refuse un pack sans SHA candidat", () => {
    const carry = carryOverClaims({
      oldPack: { paragraphs: [P1] },
      oldMap: map([CLAIM_P1]),
      newParagraphs: [P1],
    });

    expect(carry).toBeNull();
  });

  it("rend null quand il n'y a pas de cycle précédent", () => {
    expect(carryOverClaims({ oldPack: null, oldMap: null, newParagraphs: [P1] })).toBeNull();
  });

  it("porte le SHA du cycle précédent, pour que le report soit traçable", () => {
    const carry = carryOverClaims({
      oldPack: pack([P1]),
      oldMap: map([CLAIM_P1]),
      newParagraphs: [P1],
    });

    expect(carry.previous_candidate_sha256).toBe(SHA);
  });
});
