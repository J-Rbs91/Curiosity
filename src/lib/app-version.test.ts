import { describe, it, expect, vi, beforeEach } from "vitest";

/**
 * Le module retient l'empreinte courante dans son propre état : chaque cas
 * repart donc d'un module neuf, comme un document qui vient d'être chargé.
 */
async function documentNeuf() {
  vi.resetModules();
  return import("./app-version");
}

function servir(...reponses: (Record<string, string> | null)[]) {
  const file = [...reponses];
  vi.stubGlobal(
    "fetch",
    vi.fn(async () => {
      const entetes = file.shift();
      if (entetes === undefined) throw new Error("aucune réponse prévue");
      if (entetes === null) throw new TypeError("Failed to fetch");
      return { ok: true, headers: new Headers(entetes) } as Response;
    })
  );
}

describe("détection d'une version publiée", () => {
  beforeEach(() => vi.unstubAllGlobals());

  it("conclut à une nouvelle version quand l'empreinte a changé", async () => {
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir({ etag: '"aaa-1"' }, { etag: '"bbb-2"' });
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(true);
  });

  it("ne conclut à rien quand l'empreinte est la même", async () => {
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir({ etag: '"aaa-1"' }, { etag: '"aaa-1"' });
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(false);
  });

  it("se replie sur la date de modification quand l'hébergeur n'étiquette pas", async () => {
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir(
      { "last-modified": "Tue, 18 Aug 2026 08:00:00 GMT" },
      { "last-modified": "Tue, 18 Aug 2026 10:00:00 GMT" }
    );
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(true);
  });

  it("ne recharge pas quand la vérification échoue", async () => {
    // Hors ligne : il n'y a rien à conclure. Un rechargement sur une
    // supposition coûte un écran vidé sans raison, et se lit comme une panne.
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir({ etag: '"aaa-1"' }, null);
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(false);
  });

  it("ne recharge pas quand la référence n'a pas pu être prise", async () => {
    // Le document a démarré hors ligne : sans référence, toute comparaison
    // conclurait au hasard.
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir(null, { etag: '"bbb-2"' });
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(false);
  });

  it("ne recharge pas sans référence du tout", async () => {
    const { isUpdateAvailable } = await documentNeuf();
    servir({ etag: '"bbb-2"' });
    expect(await isUpdateAvailable()).toBe(false);
  });

  it("garde la première référence : c'est la version qui tourne", async () => {
    // Deux appels ne doivent pas faire glisser la référence sur ce qui vient
    // d'être publié — sans quoi la mise à jour ne serait jamais constatée.
    const { noteRunningVersion, isUpdateAvailable } = await documentNeuf();
    servir({ etag: '"aaa-1"' }, { etag: '"bbb-2"' }, { etag: '"bbb-2"' });
    await noteRunningVersion();
    await noteRunningVersion();
    expect(await isUpdateAvailable()).toBe(true);
  });
});
