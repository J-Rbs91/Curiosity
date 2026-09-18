/**
 * Report des claims d'un cycle de correction au suivant.
 *
 * Une boucle de correction ne touche qu'une poignée de paragraphes, mais le mapping était
 * jusqu'ici refait à neuf sur tout le texte. Le découpage et le rattachement des supports
 * changeaient donc là où le texte n'avait pas bougé, et le verdict avec eux : le 2026-09-18, une
 * phrase rigoureusement identique est passée de `SUPPORTED` à `TOO_STRONG` parce qu'un mappeur
 * lui avait attaché un support de plus, lequel entraînait le contenu de travaux non lus. Avec un
 * plafond de deux boucles, la cible bougeait plus vite qu'on ne la corrigeait.
 *
 * On gèle donc le découpage des paragraphes dont le texte est inchangé, octet pour octet.
 *
 * Ce qui n'est **pas** reporté : aucun verdict. Le vérificateur repasse sur tous les claims
 * contre le texte final et le gate reste inchangé. La propriété de sûreté « tout claim publié
 * est jugé contre le texte publié » est intacte — on fige le découpage, jamais le jugement.
 */

/**
 * @param {object} args
 * @param {{candidate_sha256?: string, paragraphs?: Array<{locator: string, text: string}>}} args.oldPack
 * @param {{candidate_sha256?: string, claims?: Array<object>, paragraphs?: Array<object>}} args.oldMap
 * @param {Array<{locator: string, text: string}>} args.newParagraphs
 * @returns {null | object} l'artefact de report, ou `null` si rien n'est reportable
 */
export function carryOverClaims({ oldPack, oldMap, newParagraphs }) {
  if (!oldPack || !oldMap || !Array.isArray(newParagraphs)) return null;

  // Le mapping doit appartenir au pack qu'il accompagne, sinon on ne reporte rien.
  if (!oldPack.candidate_sha256 || oldMap.candidate_sha256 !== oldPack.candidate_sha256) {
    return null;
  }

  const oldTextByLocator = new Map(
    (oldPack.paragraphs || []).map((paragraph) => [paragraph.locator, paragraph.text]),
  );

  const oldClaimsByLocator = new Map();
  for (const claim of oldMap.claims || []) {
    if (!oldClaimsByLocator.has(claim.locator)) oldClaimsByLocator.set(claim.locator, []);
    oldClaimsByLocator.get(claim.locator).push(claim);
  }

  const oldStatusByLocator = new Map(
    (oldMap.paragraphs || []).map((entry) => [entry.locator, entry.mapping_status]),
  );

  const carried = [];
  const changed = [];

  for (const paragraph of newParagraphs) {
    const oldText = oldTextByLocator.get(paragraph.locator);
    if (oldText === undefined || oldText !== paragraph.text) {
      changed.push(paragraph.locator);
      continue;
    }

    const claims = (oldClaimsByLocator.get(paragraph.locator) || []).map((claim) => ({
      locator: claim.locator,
      start: claim.start,
      end: claim.end,
      claim_text: claim.claim_text,
      support_ids: [...(claim.support_ids || [])],
    }));

    // Un claim reporté doit encore trancher exactement le même texte. Si un offset ne retombe
    // pas sur sa chaîne, on ne reporte pas ce paragraphe : il repart au mapping.
    const intact = claims.every(
      (claim) =>
        Number.isInteger(claim.start) &&
        Number.isInteger(claim.end) &&
        paragraph.text.slice(claim.start, claim.end) === claim.claim_text,
    );
    if (!intact) {
      changed.push(paragraph.locator);
      continue;
    }

    carried.push({
      locator: paragraph.locator,
      mapping_status: oldStatusByLocator.get(paragraph.locator) ?? null,
      claims,
    });
  }

  if (!carried.length) return null;

  return {
    protocol_version: 1,
    previous_candidate_sha256: oldPack.candidate_sha256,
    carried_locators: carried.map((entry) => entry.locator),
    changed_locators: changed,
    carried,
    note:
      "Claims des paragraphes au texte inchangé, à réutiliser verbatim. Ne mappe à neuf que " +
      "`changed_locators`. Aucun verdict n'est reporté : la vérification repasse sur tous les claims.",
  };
}
