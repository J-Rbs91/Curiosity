# Serveur MCP `documentary`

Les bases documentaires du pipeline corpus, exposées aux sous-agents `corpus-*` :
**OpenAlex**, **Crossref**, **Semantic Scholar**, **Zotero** (bibliothèque locale) et
**HAL**.

Il est écrit ici plutôt qu'emprunté à un tiers pour une raison qui tient à ce que ce dépôt
fabrique : un dispositif dont le seul produit est la vérifiabilité ne peut pas déléguer à
un serveur opaque la chaîne qui va de la requête à la référence. Ce qui est exposé est
mince, lisible et testé (`lib/normalize.test.mjs`).

## Activation

Le serveur est déclaré dans `.mcp.json` à la racine. Claude Code le propose à
l'approbation au premier lancement dans ce dépôt ; `/mcp` permet de vérifier qu'il est
connecté et de lister ses outils.

Aucune clé n'est nécessaire. Deux variables améliorent nettement les choses :

```bash
export CORPUS_CONTACT_EMAIL="vous@exemple.fr"   # « polite pool » OpenAlex et Crossref
export SEMANTIC_SCHOLAR_API_KEY="…"             # lève la limitation du pool anonyme
```

Sans `CORPUS_CONTACT_EMAIL`, OpenAlex et Crossref répondent depuis le pool anonyme,
nettement plus sujet aux 429 — c'est la première chose à régler si les recherches
échouent souvent.

**Zotero** doit tourner sur la machine avec l'API locale activée : Paramètres → Avancé →
« Autoriser les autres applications de cet ordinateur à communiquer avec Zotero ». Le port
par défaut est 23119 ; `ZOTERO_LOCAL_API` permet d'en changer. C'est la seule base à
connaître les éditions que vous avez réellement ouvertes, ce qui en fait la source
naturelle des paginations.

## Outils

| Outil | Ce qu'il fait |
|---|---|
| `search_literature` | OpenAlex + Crossref + Semantic Scholar en parallèle, dédoublonnés |
| `search_francophone` | HAL + OpenAlex filtré `fr` — à lancer **en même temps**, pas après |
| `verify_reference` | Résout un DOI/ISBN et liste les écarts avec ce qu'on attendait |
| `get_citations` | Qui cite ce DOI, avec la phrase de contexte et l'intention |
| `get_references` | Ce que ce DOI cite — la seule façon d'attester une filiation |
| `zotero_search` / `zotero_item` | La bibliothèque locale |

## Deux principes de sortie

**Tout revient normalisé**, dans une forme unique quelle que soit la base, avec un
`corpus_fragment` collable dans le schéma des fiches.

**Le fragment sort toujours en `consulted: "metadata-only"`**, sans `locator` ni
`evidence`. Une base bibliographique atteste qu'un texte existe ; elle n'atteste jamais ce
qu'il dit. Le validateur refuse une fiche validée sur cette seule base — le passer à
`excerpt` ou `full-text` est un geste d'agent, après lecture, jamais un défaut d'outil.

## Un échec n'est pas un vide

Toutes les réponses de recherche portent un champ `failures`, et `verify_reference` porte
un `conclusive`. Une base en 429 n'a rien dit ; elle n'a pas dit « rien ». Confondre les
deux ferait rejeter une référence valide sur un incident réseau, ce qui est exactement
l'inverse du but poursuivi.

## Limites connues

- **Ces bases sont indexées sur le DOI.** Une grande partie du périmètre n'en a pas :
  *Le Phénomène bureaucratique* (1963), *L'Acteur et le système* (1977), les éditions
  françaises de Weber. HAL et Zotero rattrapent une partie ; Persée, Cairn et OpenEdition
  n'ont pas d'API ouverte ici et se cherchent hors MCP.
- **HAL applique un ET sur tous les termes.** Une requête de quatre mots ne rend presque
  rien. Le serveur retombe une fois sur la phrase exacte et rapporte la stratégie retenue
  dans `hal_strategy`.
- **Semantic Scholar sans clé** est fortement limité en débit, et le serveur réessaie
  avant d'abandonner.

## Développement

```bash
npx vitest run scripts/mcp          # normalisation, sans réseau
node scripts/mcp/documentary-server.mjs   # lancement direct (stdio)
```

Les normaliseurs (`lib/normalize.mjs`) sont purs et testés sur des extraits de réponses
réelles. Les accès réseau (`lib/providers.mjs`) ne sont pas testés automatiquement : ils
dépendent de services externes, et un test qui les appellerait échouerait pour des raisons
sans rapport avec le code.
