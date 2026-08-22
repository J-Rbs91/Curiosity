import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const favicon = readFileSync(
  new URL("../../../public/icons/favicon.svg", import.meta.url),
  "utf8"
);

describe("favicon d'onglet", () => {
  it("laisse le fond de l'onglet visible", () => {
    expect(favicon).not.toContain("<rect");
  });

  it("adapte l'encre aux interfaces claires et sombres", () => {
    expect(favicon).toContain("prefers-color-scheme: dark");
    expect(favicon).toContain('fill="currentColor"');
    expect(favicon).toContain(":root { color: #000000; }");
    expect(favicon).toContain(":root { color: #fafafa; }");
  });
});
