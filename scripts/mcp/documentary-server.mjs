#!/usr/bin/env node
/**
 * Serveur MCP « documentary » — les bases documentaires du pipeline corpus.
 *
 * Il est écrit ici plutôt qu'emprunté à un tiers pour une raison qui tient à ce que ce
 * dépôt fabrique : un dispositif dont le seul produit est la vérifiabilité ne peut pas
 * déléguer à un serveur opaque la chaîne qui va de la requête à la référence. Ce qui est
 * exposé est mince, lisible et testé.
 *
 * Deux principes s'appliquent aux sorties :
 *
 * 1. **Tout revient normalisé** dans une forme unique, avec un `corpus_fragment`
 *    directement collable dans le schéma des fiches.
 * 2. **Le fragment sort toujours en `metadata-only`**, sans localisation ni extrait. Une
 *    base bibliographique atteste qu'un texte existe ; elle n'atteste jamais ce qu'il dit.
 *    Le validateur refuse une fiche validée sur cette seule base, et c'est voulu.
 *
 * Lancement : `node scripts/mcp/documentary-server.mjs` (stdio). Déclaré dans .mcp.json.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { compareReference } from "./lib/normalize.mjs";
import * as sources from "./lib/providers.mjs";

const server = new McpServer({ name: "documentary", version: "1.0.0" });

const json = (payload) => ({ content: [{ type: "text", text: JSON.stringify(payload, null, 2) }] });
const fail = (error) => ({
  content: [{ type: "text", text: `ERREUR : ${error.message}` }],
  isError: true,
});

/** Un même texte ressort de plusieurs bases : on le fusionne sans perdre d'où il vient. */
function dedupe(works) {
  const byKey = new Map();
  for (const work of works) {
    const key = work.doi ?? work.isbn ?? `${(work.title ?? "").toLowerCase().slice(0, 80)}|${work.year ?? ""}`;
    const existing = byKey.get(key);
    if (!existing) byKey.set(key, { ...work, sources: [work.source] });
    else {
      existing.sources.push(work.source);
      // On complète les trous plutôt que d'écraser : chaque base sait des choses que les
      // autres ignorent — la langue chez OpenAlex, l'ISBN chez Crossref, le PDF chez HAL.
      for (const field of ["doi", "isbn", "url", "oa_url", "language", "venue", "publisher", "year"])
        if (existing[field] == null && work[field] != null) existing[field] = work[field];
    }
  }
  return [...byKey.values()];
}

const searchShape = {
  query: z.string().describe("Termes de recherche. Le nom de l'auteur et celui du concept, dans la langue d'origine de préférence."),
  limit: z.number().int().min(1).max(50).default(10),
  year_from: z.number().int().optional(),
  year_to: z.number().int().optional(),
  language: z.string().optional().describe("Code langue ISO (fr, en, de). Filtre appliqué par OpenAlex uniquement."),
  open_access_only: z.boolean().default(false),
};

async function runSearch(providers, args) {
  const options = {
    query: args.query,
    limit: args.limit,
    yearFrom: args.year_from,
    yearTo: args.year_to,
    language: args.language,
    openAccessOnly: args.open_access_only,
  };
  const settled = await Promise.allSettled(providers.map(([, run]) => run(options)));

  const works = [];
  const failures = [];
  settled.forEach((result, index) => {
    const name = providers[index][0];
    if (result.status === "fulfilled") works.push(...result.value);
    // Une base en échec n'est pas une base sans résultat : sans cette distinction, un 429
    // se lirait « aucune source », ce qui est exactement l'erreur à ne jamais commettre.
    else failures.push({ source: name, error: result.reason?.message ?? String(result.reason) });
  });

  return { works: dedupe(works), failures };
}

server.registerTool(
  "search_literature",
  {
    title: "Chercher dans la littérature académique",
    description:
      "Interroge OpenAlex, Crossref et Semantic Scholar en parallèle et rend des notices normalisées. Sert à repérer des textes ; n'atteste jamais leur contenu.",
    inputSchema: {
      ...searchShape,
      sources: z
        .array(z.enum(["openalex", "crossref", "semantic_scholar"]))
        .default(["openalex", "crossref", "semantic_scholar"]),
    },
  },
  async (args) => {
    try {
      const registry = {
        openalex: sources.searchOpenAlex,
        crossref: sources.searchCrossref,
        semantic_scholar: sources.searchSemanticScholar,
      };
      const providers = args.sources.map((name) => [name, registry[name]]);
      const { works, failures } = await runSearch(providers, args);
      return json({
        count: works.length,
        works,
        failures,
        _note:
          "Notices bibliographiques. `corpus_fragment` sort en `metadata-only` : il faut ouvrir le texte, remplir `locator` et `evidence`, et relever `consulted` avant qu'une fiche puisse être validée dessus.",
      });
    } catch (error) {
      return fail(error);
    }
  }
);

server.registerTool(
  "search_francophone",
  {
    title: "Chercher la couche francophone",
    description:
      "Interroge HAL et OpenAlex filtré sur le français. À lancer EN PARALLÈLE de search_literature, jamais après : la couche francophone se cherche en amont, pas en relecture. HAL exige TOUS les termes : préférez deux ou trois mots, ou l'expression exacte du concept, à une longue requête.",
    inputSchema: searchShape,
  },
  async (args) => {
    try {
      const { works, failures } = await runSearch(
        [
          ["hal", sources.searchHal],
          ["openalex", (options) => sources.searchOpenAlex({ ...options, language: "fr" })],
        ],
        args
      );
      return json({
        count: works.length,
        works,
        failures,
        _note:
          "HAL applique un ET sur tous les termes ; `hal_strategy` dit ce qui a réellement été interrogé. Peu de résultats appelle une requête plus courte avant toute conclusion. Et ces deux bases ne couvrent pas tout le monde francophone : Persée, Cairn et OpenEdition n'ont pas d'API ouverte ici, beaucoup d'ouvrages français des années 1960-1970 n'ont pas de DOI. Un silence ne vaut pas absence de littérature — il faut aussi chercher hors MCP.",
      });
    } catch (error) {
      return fail(error);
    }
  }
);

server.registerTool(
  "verify_reference",
  {
    title: "Vérifier qu'une référence existe et qu'elle est bien celle-là",
    description:
      "Résout un DOI ou un ISBN et confronte la notice aux éléments attendus. Rend la liste des écarts, jamais un verdict global : « la référence existe » et « la référence est celle qu'on croit » sont deux questions distinctes.",
    inputSchema: {
      doi: z.string().optional(),
      isbn: z.string().optional(),
      expected_title: z.string().optional(),
      expected_year: z.number().int().optional(),
      expected_author: z.string().optional(),
    },
  },
  async (args) => {
    try {
      if (!args.doi && !args.isbn)
        return json({
          reachable: false,
          _note:
            "Ni DOI ni ISBN : la référence n'est pas atteignable en l'état. Cherchez-la d'abord avec search_literature — une référence introuvable n'existe pas.",
        });

      const expected = {
        title: args.expected_title,
        year: args.expected_year,
        author: args.expected_author,
      };

      if (args.doi) {
        const doi = args.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
        const [crossref, openalex] = await Promise.allSettled([
          sources.getCrossrefByDoi(doi),
          sources.getOpenAlexByDoi(doi),
        ]);
        const canonical =
          (crossref.status === "fulfilled" && crossref.value) ||
          (openalex.status === "fulfilled" && openalex.value) ||
          null;

        // Distinction vitale : « la base a répondu qu'elle ne connaît pas ce DOI » n'est
        // pas « la base n'a pas répondu ». Confondre les deux ferait rejeter une
        // référence parfaitement valide sur un 429, ce qui est le contraire du but.
        const failures = [
          crossref.status === "rejected" && { source: "crossref", error: crossref.reason?.message },
          openalex.status === "rejected" && { source: "openalex", error: openalex.reason?.message },
        ].filter(Boolean);

        if (!canonical && failures.length === 2)
          return json({
            reachable: null,
            conclusive: false,
            failures,
            _note:
              "Aucune base n'a répondu : on ne sait pas si cette référence existe. Ne concluez rien, réessayez ou vérifiez ailleurs.",
          });

        return json({
          reachable: Boolean(canonical),
          conclusive: true,
          canonical,
          ...compareReference(expected, canonical),
          also_in_openalex: openalex.status === "fulfilled" && Boolean(openalex.value),
          failures,
        });
      }

      const candidates = await sources.getCrossrefByIsbn(args.isbn);
      return json({
        reachable: candidates.length > 0,
        candidates,
        ...compareReference(expected, candidates[0] ?? null),
        _note:
          "Une recherche par ISBN peut rendre plusieurs notices (éditions, volumes). Choisissez celle que vous avez réellement ouverte : la pagination en dépend.",
      });
    } catch (error) {
      return fail(error);
    }
  }
);

server.registerTool(
  "get_citations",
  {
    title: "Qui cite ce texte, et dans quel contexte",
    description:
      "Citations d'un DOI via Semantic Scholar, avec les phrases de contexte et l'intention détectée. Sert à voir ce qu'une source fait dire à l'auteur avant de l'ouvrir, et à repérer les désaccords.",
    inputSchema: { doi: z.string(), limit: z.number().int().min(1).max(100).default(25) },
  },
  async (args) => {
    try {
      const citations = await sources.getCitations(args.doi, { limit: args.limit });
      return json({
        count: citations.length,
        citations,
        _note:
          "Les `contexts` sont écrits par les textes citants, pas par l'auteur cité : ils ne peuvent devenir ni source primaire, ni citation d'auteur. Et un grand nombre de citations concordantes n'est pas une preuve — ce peut être la même lecture de seconde main, reprise.",
      });
    } catch (error) {
      return fail(error);
    }
  }
);

server.registerTool(
  "get_references",
  {
    title: "Ce que ce texte cite",
    description:
      "Références sortantes d'un DOI via Semantic Scholar. Sert à documenter une filiation : sans reprise attestée, une proximité d'idées reste une proximité thématique.",
    inputSchema: { doi: z.string(), limit: z.number().int().min(1).max(100).default(50) },
  },
  async (args) => {
    try {
      const references = await sources.getReferences(args.doi, { limit: args.limit });
      return json({ count: references.length, references });
    } catch (error) {
      return fail(error);
    }
  }
);

server.registerTool(
  "zotero_search",
  {
    title: "Chercher dans la bibliothèque Zotero locale",
    description:
      "Interroge l'API locale de Zotero. C'est souvent la seule base à porter les ouvrages du périmètre — et la seule où une édition et une pagination réellement consultées sont enregistrées.",
    inputSchema: { query: z.string(), limit: z.number().int().min(1).max(100).default(25) },
  },
  async (args) => {
    try {
      const items = await sources.searchZotero(args);
      return json({ count: items.length, items });
    } catch (error) {
      return fail(
        new Error(
          `${error.message}\n\nZotero doit tourner sur cette machine avec l'API locale activée (Paramètres → Avancé → « Autoriser les autres applications de cet ordinateur à communiquer avec Zotero »). Un échec ici n'est pas une bibliothèque vide.`
        )
      );
    }
  }
);

server.registerTool(
  "zotero_item",
  {
    title: "Lire une notice Zotero",
    description: "Notice complète d'un item Zotero par sa clé.",
    inputSchema: { key: z.string() },
  },
  async (args) => {
    try {
      const item = await sources.getZoteroItem(args.key);
      return item ? json(item) : json({ found: false });
    } catch (error) {
      return fail(error);
    }
  }
);

await server.connect(new StdioServerTransport());
