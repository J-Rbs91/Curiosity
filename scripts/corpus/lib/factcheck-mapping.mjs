import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { resolveDossier } from "./factcheck-evidence.mjs";

/**
 * Le défaut que ce module rend visible : **un claim pourvu d'appuis n'est pas un claim
 * correctement appuyé.**
 *
 * `--bundle` vérifie que chaque `support_id` cité existe. Il ne vérifie jamais qu'un appui
 * *existant* a été cité. Un mappeur silencieusement incomplet produit donc un `FACTCHECK_FAIL`
 * que rien ne signale comme suspect, et la correction qui suit coupe du texte dont la preuve
 * était au dépôt.
 *
 * Le cas est établi deux fois, et le second a coûté du contenu vrai. Sur
 * `critere-de-la-retroaction`, le 26 septembre 2026, `C008` a été refusé `UNSUPPORTED` au motif
 * que « ni un thermostat ni un joueur de quilles n'apparaissent dans aucun appui résolu ». Le
 * pack contenait `SUP-421445a4beb428f3`, `$.reserves[0]` de la lecture primaire, qui porte mot
 * pour mot « l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un
 * thermocouple, un joueur de quilles, une fièvre ». Aucun claim du mapping ne le citait. Le
 * verdict était juste au vu des deux appuis rattachés, et faux au vu du dépôt : la correction a
 * retiré du texte deux exemples que l'auteur emploie réellement.
 *
 * **Aucun maillon n'était fautif à son propre niveau.** C'est le dispositif entier qui a produit
 * une perte, par une omission que rien n'était chargé de voir.
 *
 * ## Ce que ce module est, et ce qu'il n'est pas
 *
 * C'est un **signal**, et le mot est contraignant :
 *
 * - il ne rend aucun verdict et n'autorise aucun claim ;
 * - il est joint au **bundle du vérificateur** et jamais au pack du mappeur — sinon il
 *   deviendrait une suggestion d'appui, c'est-à-dire l'inverse de ce qu'on cherche ;
 * - il n'entre dans **aucun décompte du gate** ;
 * - le vérificateur n'a pas le droit de s'en servir pour marquer un claim `SUPPORTED`. Le seul
 *   usage prévu est `MAPPING_INCOMPLETE`, qui renvoie au mapping sans consommer de boucle de
 *   correction, puisque ce n'est pas le texte qui est en cause.
 *
 * La question posée est étroite : « cet appui existe et ne t'a pas été donné pour ce claim —
 * l'as-tu écarté, ou ne l'as-tu pas vu ? »
 *
 * ## Pourquoi la rareté se mesure sur le corpus et non sur le pack
 *
 * La première règle essayée était « terme présent dans un seul appui du pack ». Mesurée sur les
 * 58 claims du dernier mapping de `critere-de-la-retroaction`, elle rend **17 signaux, et ils
 * sont du bruit** : `donne`, `temps`, `changer`, `règle`, `second`, `exige`, `nomme`, `lorsque`.
 * Un pack de 72 appuis courts rend rare à peu près n'importe quel mot ; la rareté dans le pack
 * ne dit rien de la rareté d'un terme.
 *
 * La fréquence documentaire mesurée sur les 136 dossiers du dépôt sépare nettement les deux
 * familles, et le chiffre est une mesure, pas une estimation :
 *
 * | terme | documents sur 136 |
 * |---|---:|
 * | `quilles` | 1 |
 * | `thermostat` | 5 |
 * | `lorsque` | 19 |
 * | `changer` | 22 |
 * | `règle` | 55 |
 * | `donne` | 131 |
 *
 * Avec le seuil retenu, le signal est **silencieux sur les 58 claims du mapping corrigé** — ce
 * qui est le comportement attendu, ce mapping citant bien `reserves[0]` — et il **retrouve le
 * cas historique** : rejoué sur `C008` tel qu'il était au tour 1, avec le seul appui qu'il
 * citait alors, il désigne `SUP-421445a4beb428f3` par `thermostat`, `joueur` et `quilles`. Le
 * premier signal de bruit n'apparaît qu'à partir de 20 documents sur 136.
 */

/** Les termes trop courts sont des mots-outils ; en dessous de cinq lettres, rien n'est rare. */
const LONGUEUR_MINIMALE = 5;

/**
 * Un terme est rare s'il n'apparaît pas dans plus de 6 % des dossiers du dépôt — 8 documents sur
 * les 136 d'aujourd'hui. Le seuil est une fraction et non un nombre pour qu'il garde son sens
 * quand le corpus grossit. Les deux bornes mesurées qu'il sépare : le cas historique se déclenche
 * dès 5 documents, le premier bruit apparaît à 20.
 */
export const RARETE_FRACTION_MAX = 0.06;

/**
 * Au-delà de trois appuis signalés pour un même claim, le signal cesse d'être une question et
 * devient une liste à trier. Un claim qui en réunirait davantage relève du mapping entier, pas
 * d'un appui oublié.
 */
export const SIGNAUX_MAX_PAR_CLAIM = 3;

/** Les mots d'un texte, sans accents ni casse, longs et non numériques. */
export function termesSignifiants(texte) {
  return new Set(
    texte
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((mot) => mot.length >= LONGUEUR_MINIMALE && !/^\d+$/.test(mot)),
  );
}

/**
 * La fréquence documentaire des termes du dépôt : un document par carte validée, fait de
 * l'enregistrement et de tout son dossier de preuve.
 *
 * Le périmètre de preuve est celui de `resolveDossier` et non `corpus/evidence/<id>/` : décider
 * ici, une deuxième fois, où se trouve le dossier d'une carte rouvrirait précisément l'écart que
 * `factcheck-evidence.mjs` existe pour fermer. Un terme des neuf dossiers déclarés hors
 * convention serait sinon compté zéro fois, donc tenu pour rare partout.
 */
export function frequenceDocumentaire({ root = process.cwd() } = {}) {
  const dir = path.join(root, "corpus", "validated");
  const ids = readdirSync(dir)
    .filter((name) => name.endsWith(".json"))
    .sort();

  const frequences = new Map();
  for (const name of ids) {
    const brut = readFileSync(path.join(dir, name), "utf8");
    const record = JSON.parse(brut);
    const { fichiers } = resolveDossier(record, { root });
    const textes = [brut, ...fichiers.map(({ file }) => readFileSync(file, "utf8"))];
    for (const terme of termesSignifiants(textes.join("\n"))) {
      frequences.set(terme, (frequences.get(terme) || 0) + 1);
    }
  }

  return { frequences, documents: ids.length };
}

/**
 * Les appuis du pack qu'un claim ne cite pas alors qu'ils sont le **seul** endroit du pack où
 * figure un terme rare de son énoncé.
 *
 * L'unicité dans le pack est exigée en plus de la rareté dans le dépôt : un terme réparti sur
 * plusieurs appuis dont l'un est cité ne pose aucune question, le mappeur a choisi. Un terme qui
 * n'existe qu'à un seul endroit et que le claim emploie sans le citer en pose une.
 */
export function appuisNonCites(claim, supports, reference) {
  const { frequences, documents } = reference;
  const seuil = Math.floor(documents * RARETE_FRACTION_MAX);

  const parTerme = new Map();
  for (const support of supports) {
    for (const terme of termesSignifiants(support.text)) {
      if (!parTerme.has(terme)) parTerme.set(terme, []);
      parTerme.get(terme).push(support.id);
    }
  }

  const cites = new Set(claim.support_ids || []);
  const parAppui = new Map();

  for (const terme of termesSignifiants(claim.claim_text)) {
    if ((frequences.get(terme) || 0) > seuil) continue;
    const porteurs = parTerme.get(terme);
    if (!porteurs || porteurs.length !== 1) continue;
    const [porteur] = porteurs;
    if (cites.has(porteur)) continue;
    if (!parAppui.has(porteur)) parAppui.set(porteur, []);
    parAppui.get(porteur).push(terme);
  }

  const parId = new Map(supports.map((support) => [support.id, support]));

  return [...parAppui.entries()]
    .map(([id, termes]) => ({ support: parId.get(id), termes: termes.sort() }))
    .sort((a, b) => b.termes.length - a.termes.length || a.support.id.localeCompare(b.support.id))
    .slice(0, SIGNAUX_MAX_PAR_CLAIM)
    .map(({ support, termes }) => ({
      support_id: support.id,
      origin: support.origin,
      path: support.path,
      access: support.access,
      termes_rares: termes,
      text: support.text,
    }));
}
