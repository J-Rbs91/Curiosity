import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

/**
 * Le pack de preuve ne ramassait que `corpus/evidence/<id>/lecture.json`, alors que le nom de
 * ce fichier n'est qu'une convention tardive. Neuf dossiers — les plus épais du dépôt, ceux de
 * la sociologie des organisations — portent leur lecture dans `evidence.primary-reading.json`
 * et leur réception dans `evidence.reception.json` ; six autres déposent la réception à côté
 * d'un `lecture.json`. Tout cela était invisible au fact-check, qui se rabattait alors sur le
 * seul enregistrement validé sans jamais le dire.
 *
 * Le dossier d'une carte est donc pris pour ce qu'il est : son répertoire entier.
 */

/**
 * Ce que le scout dépose n'est pas une preuve de lecture. `scouting.json` enregistre où l'on a
 * cherché, ce qui semblait atteignable et pourquoi le candidat a été retenu — des jugements
 * formés avant toute lecture. L'admettre au pack offrirait au mappeur des appuis qui ne
 * prétendent rien avoir lu.
 */
export const FICHIERS_HORS_PREUVE = new Set(["scouting.json"]);

/**
 * Les fichiers de preuve du dossier d'une carte, triés par nom pour que deux exécutions
 * produisent le même pack.
 */
export function listEvidenceFiles(evidenceDir) {
  if (!existsSync(evidenceDir) || !statSync(evidenceDir).isDirectory()) return [];

  return readdirSync(evidenceDir)
    .filter((name) => name.endsWith(".json"))
    .filter((name) => !FICHIERS_HORS_PREUVE.has(name))
    .sort()
    .map((name) => ({ name, file: path.join(evidenceDir, name) }));
}

/**
 * L'origine d'un support nomme le fichier dont il sort. Sans cela, deux fichiers du même
 * dossier qui portent tous deux une clé `evidence` rendraient des chemins JSON identiques, et
 * leurs supports se confondraient dans le pack.
 */
export function evidenceOrigin(fileName) {
  return `evidence:${fileName}`;
}

/**
 * Le dossier d'une carte tel qu'un contrôle de citation doit le voir : l'enregistrement validé
 * **et** les fichiers de preuve, en un seul texte brut où chercher une phrase entre guillemets.
 *
 * L'enregistrement seul ne suffit pas, parce que c'est un résumé. Sur
 * `regulation-controle-autonome`, les verbatim des p. 10 et p. 15-16 sont exacts dans une
 * lecture primaire déclarée `full-text` et absents de l'enregistrement validé : le contrôle des
 * citations les signalait comme non sourcés. C'est le même angle mort que celui du pack de
 * preuve, à un composant près, et il coûte la même chose — un avertissement faux apprend à
 * ignorer les avertissements, jusqu'au jour où l'un d'eux est vrai.
 *
 * On concatène le texte brut plutôt que d'énumérer des champs : décider d'avance où une
 * citation a le droit de se trouver dans un dossier reviendrait à recréer la convention de
 * nommage que ce module existe pour ne plus croire.
 *
 * `fichiers` est la liste rendue par `resolveDossier`, et non un répertoire : le périmètre de
 * preuve se décide en un seul endroit, sinon le contrôle des citations et le pack de preuve
 * divergent — c'est déjà arrivé, dans l'autre sens.
 */
export function dossierBrut(record, fichiers) {
  const preuves = (fichiers || []).map(({ file }) => readFileSync(file, "utf8"));
  return [JSON.stringify(record), ...preuves].join("\n");
}

/**
 * Où le dossier déclaré par un enregistrement se trouve, et ce que le pack en fait.
 *
 * Le pack dérivait le chemin des preuves du seul `id` de la carte. `corpus/validated/<id>.json`
 * porte pourtant un champ `dossier`, et **dix cartes sur cent trente-six le déclarent ailleurs
 * que sous leur identifiant.** `critere-de-la-retroaction` déclare
 * `corpus/evidence/retroaction-denaturee/lecture.json` — le nom sous lequel le candidat avait
 * été repéré — et ses `notes` documentent la divergence comme volontaire. Son fact-check est
 * sorti avec **zéro fichier de preuve et quarante-cinq appuis tous tirés de l'enregistrement**,
 * puis a refusé vingt et un claims dont la matière est dans le fichier jamais ouvert. Rien,
 * dans la sortie du script, ne disait que la lecture primaire n'avait pas été vue.
 *
 * ## Pourquoi le périmètre s'arrête à `corpus/evidence/`
 *
 * Les neuf autres déclarent un fichier de `corpus/dossiers/`, dont le schéma est tout autre :
 * il mêle à la lecture des champs rédigés par un modèle — `pedagogy.short_explanation`,
 * `pedagogy.hook_question` — et `evidence.common_misinterpretations`, qui recense les
 * contresens et les rendrait citables comme preuve. `collectSupports` transforme
 * indifféremment toute chaîne non vide en appui : les y faire pointer **ferait réussir à
 * tort**, contre l'invariant « aucun texte généré par un modèle n'est une source ».
 *
 * Le choix des sous-arbres de `corpus/dossiers/` qui constituent une preuve consultée est une
 * décision documentaire et non un correctif d'outil. Ce module ne la prend pas. Il cesse en
 * revanche de la taire : un dossier déclaré hors périmètre est **déclaré comme tel dans le
 * pack**, avec son motif. Un défaut qui se voit dans la sortie du script n'est plus le même
 * défaut qu'un défaut silencieux.
 */
export const DOSSIER_STATUTS = Object.freeze({
  /** Aucun champ `dossier` : la convention est la seule voie, et elle suffit. */
  NON_DECLARE: "non-declare",
  /** Le dossier déclaré est celui de la convention ; il est déjà chargé. */
  CONVENTIONNEL: "conventionnel",
  /** Déclaré ailleurs sous `corpus/evidence/`, même schéma, chargé en plus de la convention. */
  RESOLU: "resolu",
  /** Déclaré hors de `corpus/evidence/` : non chargé, et le pack le dit. */
  HORS_PERIMETRE: "hors-perimetre",
  /** Déclaré et absent du disque : non chargé, et le pack le dit. */
  INTROUVABLE: "introuvable",
});

/** La racine des dossiers dont le pack sait lire le schéma. */
export const RACINE_PREUVE = path.join("corpus", "evidence");

/**
 * Les fichiers de preuve d'une carte — répertoire conventionnel **plus** dossier déclaré quand
 * il est du même schéma — et la déclaration qui dit ce qui a été fait du champ `dossier`.
 *
 * Les noms des fichiers venus de la convention restent nus, ceux d'ailleurs portent leur
 * répertoire : deux `lecture.json` de provenances distinctes rendraient sinon la même origine,
 * et leurs appuis se confondraient dans le pack.
 */
export function resolveDossier(record, { root = process.cwd() } = {}) {
  const repertoireConventionnel = path.join(root, RACINE_PREUVE, record.id);
  const fichiers = listEvidenceFiles(repertoireConventionnel);
  const declare = typeof record.dossier === "string" && record.dossier.trim() ? record.dossier : null;

  if (!declare) {
    return { fichiers, declaration: { declare: null, statut: DOSSIER_STATUTS.NON_DECLARE, motif: null } };
  }

  const absolu = path.resolve(root, declare);
  const racine = path.resolve(root, RACINE_PREUVE);
  const dedans = (parent, enfant) =>
    enfant === parent || enfant.startsWith(`${parent}${path.sep}`);

  if (dedans(repertoireConventionnel, absolu)) {
    return {
      fichiers,
      declaration: { declare, statut: DOSSIER_STATUTS.CONVENTIONNEL, motif: null },
    };
  }

  if (!existsSync(absolu)) {
    return {
      fichiers,
      declaration: {
        declare,
        statut: DOSSIER_STATUTS.INTROUVABLE,
        motif: "le dossier déclaré par l'enregistrement est absent du dépôt",
      },
    };
  }

  if (!dedans(racine, absolu)) {
    return {
      fichiers,
      declaration: {
        declare,
        statut: DOSSIER_STATUTS.HORS_PERIMETRE,
        motif:
          `le dossier déclaré est hors de ${RACINE_PREUVE}/ : son schéma n'est pas celui d'une ` +
          "lecture et le périmètre de preuve de ses sous-arbres n'est pas tranché ; il n'est pas chargé",
      },
    };
  }

  const repertoireDeclare = statSync(absolu).isDirectory() ? absolu : path.dirname(absolu);
  const nom = path.basename(repertoireDeclare);
  const supplement = listEvidenceFiles(repertoireDeclare).map(({ name, file }) => ({
    name: `${nom}/${name}`,
    file,
  }));

  const connus = new Set(fichiers.map(({ file }) => file));
  for (const entree of supplement) {
    if (!connus.has(entree.file)) fichiers.push(entree);
  }

  return {
    fichiers,
    declaration: {
      declare,
      statut: DOSSIER_STATUTS.RESOLU,
      repertoire: path.relative(root, repertoireDeclare),
      motif: null,
    },
  };
}
