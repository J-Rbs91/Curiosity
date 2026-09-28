/**
 * Le maillon non redondant de la chaîne de fact-check est le claim mapper : l'auditeur est doublé
 * par le gate, le réécrivain par le vérificateur, le vérificateur par le script — le mapper par
 * personne. Il choisit seul le découpage des claims **et** les appuis rattachés à chacun, et le
 * gate est déterministe à mapping donné, pas à texte donné.
 *
 * Ce module porte la parade minimale du chantier K de `corpus/RESTE-A-FAIRE.md`, et il faut dire
 * exactement quel défaut elle vise, parce qu'il a déjà coûté du contenu vrai.
 *
 * ## Le défaut, établi deux fois sur pièce
 *
 * `critere-de-la-retroaction`, tour 1 : le claim `C008` portait « Il mène la démonstration sur un
 * thermostat, un autocuiseur, un réservoir de chasse d'eau, un joueur de quilles, une fièvre » et
 * citait deux appuis, tous deux réels, où ni thermostat ni joueur de quilles n'apparaissent. Le
 * vérificateur a rendu `UNSUPPORTED`, **et son verdict était juste au vu des appuis qu'il avait**.
 * Or le pack contenait `$.reserves[0]` de la lecture primaire, qui porte mot pour mot « l'auteur
 * raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de
 * quilles, une fièvre ». Aucun claim du mapping ne le citait. La correction de la boucle suivante a
 * retiré du texte lecteur deux exemples que l'auteur emploie réellement.
 *
 * `points-de-levier`, tour 3 : vingt claims sur soixante-trois arrivaient avec `support_ids: []`,
 * dont un que le gate du tour précédent avait lui-même déclaré autorisé par `$.hook`.
 *
 * Aucun maillon n'est fautif à son propre niveau, et aucun compteur du dépôt ne distinguait
 * « deux appuis cités » de « les deux bons appuis cités ».
 *
 * ## Ce que ce module fait, et ce qu'il se refuse à faire
 *
 * Il **signale**, il ne juge pas. Pour chaque claim, il nomme les appuis du pack que le mapping n'a
 * pas cités et dont le texte porte un terme singulier du `claim_text`. Ce n'est pas un verdict, cela
 * n'autorise aucun claim, et cela n'entre dans aucun décompte du gate : c'est une question posée au
 * vérificateur — « ces appuis existent, les as-tu écartés ou ne les as-tu pas vus ? ».
 *
 * Trois refus délibérés protègent ce signal de devenir une suggestion :
 *
 * 1. **Il est joint au bundle du vérificateur, jamais au pack du mapper.** Un mapper qui recevrait
 *    la liste des appuis « proches » de chaque phrase rattacherait par ressemblance lexicale, ce
 *    que ce dépôt refuse : un appui se propose parce qu'il autorise le claim, pas parce qu'il
 *    partage un mot avec lui.
 * 2. **Il ne porte pas le texte des appuis**, seulement leur identifiant, leur origine, leur chemin
 *    et les termes partagés. Le vérificateur ne peut donc pas s'en servir pour créditer un claim
 *    d'un appui que le mapper n'a pas retenu : il n'a pas de quoi juger l'entailment, et c'est
 *    voulu. La seule chose qu'il peut en faire est de renvoyer le claim au mapping.
 * 3. **La ressemblance lexicale n'est pas une preuve**, et un signal vide ne dit rien : un appui
 *    peut autoriser un claim sans partager aucun de ses mots. Un claim sans signal n'est donc pas
 *    un claim correctement appuyé.
 *
 * ## Pourquoi « terme singulier » et non « terme partagé »
 *
 * Un claim et un appui de la même carte partagent forcément le vocabulaire du concept : sur
 * `critere-de-la-retroaction`, « rétroaction », « boucle » et « système » sont dans presque tous
 * les appuis. Un signal fondé sur eux désignerait tout le pack pour tout claim, et un signal qui
 * désigne tout ne signale rien. Ce qui discrimine est le terme que le dossier ne porte qu'à un
 * seul endroit — un thermostat, un joueur de quilles, une année, un nom propre —, et c'est
 * exactement le terme dont l'absence dans les appuis rattachés fait refuser un claim.
 *
 * ## Le calibrage est mesuré, et une variante plus stricte a été écartée sur pièce
 *
 * Deux réglages se composaient : jusqu'à combien d'appuis un terme reste discriminant, et combien
 * de termes partagés font lever le signal. Mesuré sur les deux mappings d'où les cas établis
 * viennent, avec les deux claims témoins comme critère :
 *
 * | réglage | claims signalés | témoin `critere` | témoin `points-de-levier` |
 * |---|---|---|---|
 * | 5 appuis, 1 terme | 50/58 et 37/63 | vu | vu |
 * | 3 appuis, 2 termes | 9/58 et 5/63 | vu | **manqué** |
 * | 1 appui, 1 terme | 15/58 et 22/63 | vu | vu |
 *
 * La deuxième ligne est la tentation à écarter : elle est la plus silencieuse, et elle rate le cas
 * de `points-de-levier`, dont le claim « la question pratique est "où appuyer" » ne partage avec
 * l'appui `$.hook` qu'un seul terme, « appuyer ». Exiger deux termes rendrait le signal muet
 * précisément sur l'omission la mieux établie du dépôt. La première ligne lève un signal sur 86 %
 * des claims, et un signal qui se déclenche partout est ignoré partout.
 *
 * D'où le réglage retenu : **un seul appui du pack porte ce terme, et ce n'est pas un appui
 * rattaché au claim.** La question posée au vérificateur est alors nette — « ce mot de la phrase
 * n'existe qu'à un endroit du dossier, et ce n'est pas un des appuis qu'on t'a donnés ».
 *
 * ## Un second filtre, et il a été ajouté parce que le premier ne suffisait pas
 *
 * Mesuré tel quel sur `critere-de-la-retroaction`, dont le mapping est complet, le signal se levait
 * sur **15 claims sur 58**, et les termes qui le déclenchaient étaient « donne », « changer »,
 * « devant », « temps », « nomme », « second », « lorsque ». Ce sont des mots que la langue fournit
 * à tout texte : ils sont singuliers dans un pack de soixante-douze appuis par accident de tirage,
 * pas parce qu'ils désignent quelque chose. Un signal presque entièrement composé de bruit apprend
 * au vérificateur à ne plus le lire, ce qui est le défaut contre lequel le calibrage précédent
 * s'était réglé.
 *
 * Le dépôt sait lesquels de ces mots sont généraux, et il le sait parce qu'il les emploie partout :
 * comptés sur les 136 approfondissements publiés, « donne » est dans 112 d'entre eux, « temps »
 * dans 74, « devant » dans 57, « changer » dans 34 — quand « quilles », « autocuiseur » et
 * « fièvre » sont dans un seul, et « thermostat » et « appuyer » dans six. La coupure à **un
 * dixième du corpus** sépare les deux familles sans arbitrage douteux, et laisse les deux témoins
 * du chantier K largement du bon côté.
 *
 * Un terme ne discrimine donc que s'il est singulier dans le pack **et** absent du lexique général
 * du corpus. Le bundle inscrit les deux paramètres de la mesure, pour qu'un artefact rejoué dise
 * avec quoi il a été calculé.
 *
 * ## Ce que les deux filtres ensemble donnent, mesuré
 *
 * | mapping | claims | sans appui | claims signalés | témoin |
 * |---|---:|---:|---:|---|
 * | `critere-de-la-retroaction`, mapping complet | 58 | 0 | **1** | — |
 * | `points-de-levier`, tour 3 défectueux | 63 | 20 | **5** | vu |
 * | `critere-de-la-retroaction`, claim `C008` du tour 1 | — | — | 1 appui | vu |
 *
 * Le signal se tait donc là où le mapping est complet et parle là où il ne l'est pas, ce qui est la
 * seule chose qu'on lui demande. Et le bundle du concept complet grossit de 1 %.
 */

/**
 * Le vocabulaire des verdicts du vérificateur, et la seule règle qui décide de ce qu'un verdict
 * coûte.
 *
 * Les cinq premiers sont sémantiques : ils portent sur la relation entre un claim et les appuis
 * fournis, et tout ce qui n'est pas `SUPPORTED` fait échouer le gate en `FACTCHECK_FAIL` — donc
 * consomme une boucle de correction, donc fait couper ou borner le texte lecteur.
 *
 * `MAPPING_INCOMPLETE` n'est pas de cette famille, et c'est tout l'intérêt de l'ajouter. Il ne dit
 * ni soutenu ni non soutenu : il dit que **l'artefact** est incomplet, que ce claim n'a pas les
 * appuis qu'il devrait avoir, et que le mapping est à refaire. Le gate le range donc parmi les
 * incohérences mécaniques — `FACTCHECK_INVALID`, aucune boucle consommée — parce que ce n'est pas
 * le texte qui est en cause. Sans ce verdict, un vérificateur qui soupçonne une omission n'a que
 * `UNSUPPORTED`, qui déclenche une coupe : c'est ainsi que `critere-de-la-retroaction` a perdu deux
 * exemples que son auteur emploie réellement.
 */
export const VERDICTS_SEMANTIQUES = Object.freeze([
  "SUPPORTED",
  "TOO_STRONG",
  "UNSUPPORTED",
  "CONFLICT",
  "SOURCE_NOT_CONSULTED",
]);

/** Le verdict qui renvoie un claim au mapping sans se prononcer sur sa vérité. */
export const MAPPING_INCOMPLETE = "MAPPING_INCOMPLETE";

/**
 * Ce qu'un verdict coûte, en un mot. `inconnu` couvre aussi bien une faute de frappe qu'un verdict
 * inventé, et il ferme : un verdict que le dépôt ne connaît pas n'autorise rien.
 */
export function classerVerdict(verdict) {
  if (verdict === "SUPPORTED") return "soutenu";
  if (verdict === MAPPING_INCOMPLETE) return "mapping-incomplet";
  if (VERDICTS_SEMANTIQUES.includes(verdict)) return "refus-semantique";
  return "inconnu";
}

/** Longueur minimale d'un terme, sauf année. En dessous, on ramasse la grammaire. */
const LONGUEUR_MINIMALE = 5;

/**
 * Un terme est singulier s'il n'apparaît que dans un seul appui du pack. Le seuil est un choix
 * d'exploitation, mesuré et non supposé (voir l'en-tête du module), et le signal reste un signal
 * quelle que soit sa valeur.
 */
const APPUIS_MAXIMUM_POUR_RARETE = 1;

/** Plafond d'appuis signalés par claim, pour que le bundle ne double pas de taille. */
const APPUIS_SIGNALES_MAXIMUM = 5;

/**
 * Part du corpus au-delà de laquelle un terme est tenu pour général. Un dixième des cartes : la
 * mesure qui a fixé ce seuil est dans l'en-tête du module.
 */
const FRACTION_LEXIQUE_GENERIQUE = 0.1;

/**
 * Le lexique général du corpus : les termes qu'une part significative des approfondissements
 * emploie. `textes` est le texte lecteur de chaque carte, un élément par carte.
 *
 * La fonction ne lit rien elle-même : le comptage doit rester une opération sur des données
 * fournies, pour qu'il se teste sans dépôt.
 */
export function lexiqueGenerique(textes, { fraction = FRACTION_LEXIQUE_GENERIQUE } = {}) {
  const cartesParTerme = new Map();
  for (const texte of textes || []) {
    for (const terme of termes(texte)) {
      cartesParTerme.set(terme, (cartesParTerme.get(terme) || 0) + 1);
    }
  }

  const cartes = (textes || []).length;
  const plafond = Math.max(1, Math.floor(cartes * fraction));
  const generiques = new Set();
  for (const [terme, nombre] of cartesParTerme) {
    if (nombre > plafond) generiques.add(terme);
  }

  return { generiques, cartes, plafond };
}

/**
 * Découpe une chaîne en termes comparables : minuscules, sans diacritiques, sans ponctuation. La
 * normalisation est nécessaire parce qu'un dossier écrit « W.-C. » et un texte lecteur
 * « réservoir de chasse d'eau » : ce qui doit se reconnaître d'un fichier à l'autre est le mot, pas
 * sa typographie.
 */
export function termes(texte) {
  if (typeof texte !== "string") return new Set();
  const normalise = texte
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
  const retenus = new Set();
  for (const brut of normalise.split(/[^\p{L}\p{N}]+/u)) {
    if (!brut) continue;
    if (/^\d{4}$/.test(brut)) {
      retenus.add(brut);
      continue;
    }
    if (brut.length >= LONGUEUR_MINIMALE) retenus.add(brut);
  }
  return retenus;
}

/**
 * Indexe les appuis du pack par terme et retient les termes singuliers. Le calcul se fait une
 * fois par carte : les claims d'un même pack partagent l'index.
 */
export function indexerAppuis(
  supports,
  { appuisMaximum = APPUIS_MAXIMUM_POUR_RARETE, termesGeneriques = new Set() } = {},
) {
  const appuisParTerme = new Map();
  const termesParAppui = new Map();

  for (const support of supports || []) {
    if (!support || typeof support.id !== "string") continue;
    const ensemble = termes(support.text);
    termesParAppui.set(support.id, ensemble);
    for (const terme of ensemble) {
      const liste = appuisParTerme.get(terme);
      if (liste) liste.add(support.id);
      else appuisParTerme.set(terme, new Set([support.id]));
    }
  }

  const termesSinguliers = new Set();
  for (const [terme, appuis] of appuisParTerme) {
    if (appuis.size > appuisMaximum) continue;
    if (termesGeneriques.has(terme)) continue;
    termesSinguliers.add(terme);
  }

  return { appuisParTerme, termesParAppui, termesSinguliers };
}

/**
 * Les appuis non cités par ce claim dont le texte porte un terme singulier de son `claim_text`.
 *
 * Le résultat est ordonné par nombre de termes partagés décroissant puis par identifiant, pour
 * qu'un même pack et un même mapping rendent toujours le même bundle : un artefact de
 * fact-check qui varie d'une exécution à l'autre ne se compare plus à rien.
 */
export function signalerAppuisNonCites(
  claim,
  index,
  supportsById,
  { plafond = APPUIS_SIGNALES_MAXIMUM } = {},
) {
  const cites = new Set(claim.support_ids || []);
  const termesDuClaim = termes(claim.claim_text);
  const partagesParAppui = new Map();

  for (const terme of termesDuClaim) {
    if (!index.termesSinguliers.has(terme)) continue;
    for (const supportId of index.appuisParTerme.get(terme) || []) {
      if (cites.has(supportId)) continue;
      const liste = partagesParAppui.get(supportId);
      if (liste) liste.push(terme);
      else partagesParAppui.set(supportId, [terme]);
    }
  }

  return [...partagesParAppui.entries()]
    .map(([supportId, partages]) => {
      const support = supportsById.get(supportId);
      return {
        support_id: supportId,
        origin: support?.origin,
        path: support?.path,
        shared_terms: [...partages].sort(),
      };
    })
    .sort((a, b) => b.shared_terms.length - a.shared_terms.length
      || a.support_id.localeCompare(b.support_id))
    .slice(0, plafond);
}

/**
 * La notice que le bundle porte en clair, pour que la règle voyage avec l'artefact. Un vérificateur
 * lit le bundle ; une consigne restée dans un prompt ne le suit pas quand l'artefact est rejoué.
 */
export const NOTICE_SIGNAL = "uncited_support_signal ne nomme que des appuis non cités par le "
  + "mapping dont le texte porte un terme que le pack ne présente nulle part ailleurs. Ce n'est "
  + "ni un verdict ni une preuve : le texte de ces appuis n'est volontairement pas fourni, et "
  + "aucun claim ne peut être crédité par eux. "
  + "Le seul usage autorisé est le verdict MAPPING_INCOMPLETE, qui renvoie le "
  + "claim au mapping sans se prononcer sur sa vérité. Un signal vide n'atteste rien : un appui "
  + "peut autoriser un claim sans partager un seul de ses mots.";
