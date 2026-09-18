# Correction après FACTCHECK_FAIL — critere-de-la-retroaction

Boucle 1 sur 2. Gate lu : `factcheck-gate.json` (70 claims, 45 SUPPORTED, 25 en échec).
Artefacts lus : `verification.json`, `factcheck-pack.json`, `corpus/deepenings/critere-de-la-retroaction.json`,
`corpus/validated/critere-de-la-retroaction.json`, `FACTCHECK_PROTOCOL.md` §6.

SHA contrôlé par le gate : `7d716dc2f14f3dd07e031e3fb10b6a0dce028c9b3bf1bcfe97ed2915c8f571ea`
SHA après correction : `1cc2efda9f1ee64b2823a68935ea2300fa39befbcf90bb050d20d257960036a4`

Mots du texte lecteur (`lead` + `sections`) : **1414 avant, 1416 après**.
`npm run corpus:deepen -- --check --only=critere-de-la-retroaction` : **PASS** (1699 mots comptés par le contrôle).

---

## 0. Ce que l'examen a trouvé avant de corriger, et qui change la nature du travail

La consigne posait comme fait que « cette carte n'a pas de dossier de lecture » et que ses
45 supports viennent tous de l'enregistrement validé. La seconde moitié est exacte : `pack.evidence_sha256`
est `null` et les 45 supports ont `origin: "validated"`. La première est fausse.

**Le dossier de lecture existe, il est complet, et il est déclaré par l'enregistrement validé lui-même :**

- `corpus/validated/critere-de-la-retroaction.json` porte le champ `dossier` = `corpus/evidence/retroaction-denaturee/lecture.json` ;
- ce fichier existe (12 866 octets) et déclare la source primaire en `consulted: "full-text"`, quatorze pages lues
  page à page ;
- `notes[0]` du même enregistrement documente explicitement la divergence d'identifiant comme volontaire :
  « L'identifiant du dossier documentaire et celui de la carte diffèrent, et c'est volontaire. Le dossier reste
  corpus/evidence/retroaction-denaturee/lecture.json, du nom sous lequel le candidat avait été repéré. »
  Cette note est **dans le pack**, en tant que support `origin: validated`.

Le pack ne l'a pas résolu pour une raison purement mécanique. `scripts/corpus/deepening-factcheck.mjs` :

```js
function evidencePath(conceptId) {
  return path.join(ROOT, "corpus", "evidence", conceptId, "lecture.json");
}
```

Le chemin est dérivé du `conceptId` et non lu dans `validated.dossier`. Il cherche donc
`corpus/evidence/critere-de-la-retroaction/lecture.json`, qui n'existe pas, et se replie silencieusement sur
`evidence_sha256: null`. La conformité à `FACTCHECK_PROTOCOL.md` §3 est respectée à la lettre
(« `corpus/evidence/<conceptId>/lecture.json` si ce fichier existe ») et manque le seul cas du corpus où
l'identifiant du dossier diverge par décision documentée.

Conséquence : **21 des 25 échecs ne sont pas des défauts du texte.** Ce sont des claims dont la preuve
`full-text` était sur le disque, référencée par le champ `dossier`, et absente du bundle soumis au verifier.

Verbatim du dossier, en regard des claims déclarés « aucun support résolu » :

| Matière | Phrase du dossier (`definition_de_lauteur`, `reserves[0]`) | Claims concernés |
|---|---|---|
| liste des objets de démonstration | « l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un thermocouple, un joueur de quilles, une fièvre, un professeur devant quelques centaines d'étudiants » | C008 |
| autocuiseur / chasse d'eau | « l'autocuiseur maintient sa pression par évacuation de l'excès de vapeur, "et non sur un ajustement à la baisse de la source de chaleur", alors que le réservoir d'un W.-C. fonctionne par feedback parce qu'un niveau précis peut être vérifié et recherché, puis l'arrivée d'eau bloquée » | C026, C027, C028, C029, C039 |
| constat, finalité, valeur de référence | « Le contrôle y a deux dimensions, constater et intervenir, et il est "indissociable de celle de finalité" : réguler suppose une valeur de référence, imposée de l'extérieur dans les machines, parfois implicite dans le vivant » | C034, C035, C036, C037 |
| trois moments | « le processus comporte trois sous-processus, "l'information, l'évaluation et la ré-action", séquentiels mais simultanés et continus (p. 8) » | C038 |
| boucles, fièvre, hétérostasie | « Paquette décrit ensuite la hiérarchisation des boucles et le déplacement des finalités (thermorégulation, fièvre relue comme modification de la valeur de référence, hétérostasie déclenchant la révision des buts, p. 11-13) » | C040, C041, C042, C043, C044, C045, C046 |
| définition de la rétroinformation | « la rétroinformation est "le processus d'obtention et d'analyse des informations sur une situation en cours, ou déjà terminée", qui ne fait boucle que si l'action peut encore être modelée » | C051 |
| antériorité de préinformation / préaction | « la préinformation (feedforward) et la préaction opèrent avant le déclenchement de l'action et ne relèvent pas du feedback » | C054 |
| objet de l'article | « la critique de l'emprunt dénaturé occupe le premier paragraphe (p. 5) et la conclusion terminologique (p. 14 et 18) ; les pages 6 à 13 sont une exposition directe du mécanisme cybernétique lui-même » ; « La thèse réelle est un critère d'identification » | C005 |

Je n'ai **rien ajouté** au texte sur cette base, et je ne cite aucun `support_id` : le pack ne contient pas ces
supports, donc ils n'existent pas pour le gate. Mais je **n'ai pas retiré** ces 21 passages. Les retirer aurait
supprimé du texte une matière réellement lue, sur la foi d'une mesure faite sans elle, et aurait produit exactement
ce que la consigne interdit : un texte appauvri pour obtenir un gate vert.

**Je n'ai pas modifié le script.** Réparer le pipeline n'est pas dans mon mandat, et je ne touche pas aux artefacts
de fact-check. La décision t'appartient. Le correctif minimal, si tu le veux, est de faire lire `validated.dossier`
à `evidencePath()` avant de retomber sur la convention par `conceptId`.

Ce n'est donc **ni l'issue 1 ni l'issue 2** que tu avais prévues : ce n'est pas un défaut documentaire, c'est un
défaut de résolution de preuve. Voir §3 pour le constat explicite.

---

## 1. Les quatre échecs réellement corrigibles à matière constante

### C001 — `NARROW`

Localisation : `lead[0]`.

Avant : « Les deux choses lui viennent du même public, et l'usage courant leur donne le même nom : un retour, un feedback. »
Après : « Les deux choses lui viennent du même public. Faut-il leur donner le même nom, un retour, un feedback ? »

Motif du verifier : les supports ne portent rien sur ce que l'usage courant nomme. Exact. L'assertion sur la
dénomination devient la question que le texte pose, et une question n'affirme rien sur l'usage. La charnière
pédagogique (deux choses qui se ressemblent et qu'il faut départager) est intacte, et le contraste qui suit,
lui, reste porté par `summary` et `notes[1]` (C002, SUPPORTED).

### C014 — `NARROW`

Localisation : `sections[0].paragraphs[1]`.

Avant : « Deux personnes qui parlent devant la même salle n'ont donc pas le même retour, puisqu'elles n'y lisent pas la même chose »
Après : « Deux personnes qui parlent devant la même salle peuvent donc ne pas avoir le même retour, dans la mesure où elles n'y lisent pas la même chose »

Motif du verifier : `notes[2]` autorise la relativité du retour à la connaissance de la source, donc la possibilité
d'une divergence, pas sa nécessité. Le texte posait deux nécessités superposées (elles n'ont pas le même retour ;
elles n'y lisent pas la même chose). La première passe au possible, la seconde devient la condition sous laquelle
elle vaut. C'est la portée qui change, pas seulement le ton.

### C022 — `NARROW`

Localisation : `sections[1].paragraphs[1]`.

Avant : « Ce critère écarte une bonne part de ce qu'on appelle couramment un retour. »
Après : « Ce critère écarte des cas qu'on appelle couramment un retour. »

Motif du verifier : aucune quantification de la part écartée dans les supports. Exact. La quantification est
retirée sans compensation. Les trois cas énumérés dans la phrase suivante (applaudissements, scrutin, cotes
d'écoute) restent portés par C023, SUPPORTED, et suffisent à l'énoncé au pluriel indéterminé.

### C033 — `MARK_AS_INTERPRETATION`

Localisation : `sections[2].paragraphs[1]`.

Avant : « On voit du même coup pourquoi le premier tri exigeait de l'information et non l'effet : un effet se produit, il ne se compare à rien. »
Après : « On peut comprendre du même coup pourquoi le premier tri exigeait de l'information et non l'effet : un effet se produit, il ne se compare à rien. »

Motif du verifier : les supports posent la distinction information / effet mais ne donnent aucune raison tirée de la
comparaison ; la glose n'est portée par aucun support. Exact : c'est le raisonnement du texte, non celui de Paquette.
Le marquage prévu par `PROTOCOLE.md` §4 (« on peut comprendre cela comme… ») déplace l'énoncé du régime par défaut,
où le lecteur l'attribue à l'auteur, vers l'interprétation. La glose n'est pas supprimée parce qu'elle fait un
travail réel sur le premier tri, mais elle ne se donne plus comme la raison de l'auteur.

---

## 2. Les 21 échecs laissés en place, avec leur motif

`NO_OP` documenté, et non `REMOVE` : preuve `full-text` existante et non résolue par le pack (voir §0).

- **C005** — objet de l'article : `reserves[0]` et `reserves[2]` du dossier.
- **C008** — liste thermostat / autocuiseur / chasse d'eau / fièvre : `reserves[0]`.
- **C026, C027, C028, C029** — comparaison des deux objets domestiques, mécanisme de chacun, opposition
  compenser / constater et intervenir : `definition_de_lauteur`.
- **C034, C035, C036, C037** — rapport à ce qui est recherché, contrôle et finalité, valeur imposée de l'extérieur
  dans la machine, implicite dans le vivant : `definition_de_lauteur`.
- **C038** — trois moments, séquentiels mais simultanés et continus : `definition_de_lauteur`, p. 8.
- **C039** — les deux objets domestiques relus sous la grille des trois moments : combinaison des deux passages
  ci-dessus.
- **C040, C041** — pluralité et hiérarchisation des boucles, déplacement des valeurs de référence :
  `definition_de_lauteur`, p. 11-13.
- **C042, C043** — thermorégulation, fièvre comme valeur de référence modifiée : même passage.
- **C044, C045, C046** — relecture de l'écart selon l'étage, hétérostasie, distinction corriger l'action /
  changer le but : même passage.
- **C051** — définition de la rétroinformation : `definition_de_lauteur`, verbatim.
- **C054** — antériorité de la préinformation et de la préaction sur le déclenchement de l'action :
  `definition_de_lauteur`, verbatim.

Aucun de ces vingt et un passages n'a été retouché. Aucun `support_id` n'a été cité pour eux. Aucun fait n'a été
ajouté, ni dans le texte lecteur, ni dans `limits`.

---

## 3. Constat explicite

Je n'atteins pas l'issue 2. Le texte n'est pas privé de moyen d'enseigner honnêtement le concept : la matière
illustrative est documentée mot pour mot dans un dossier de lecture `full-text` que l'enregistrement validé
désigne par son champ `dossier`, et que le constructeur de pack n'atteint pas parce qu'il dérive le chemin du
`conceptId`. Le texte reste, à ma lecture, dans les frontières documentaires réelles du concept.

Ce qui est vrai, en revanche, est que **le gate a raison de refuser cette version**, parce que la preuve n'était
pas dans le bundle. `FACTCHECK_PROTOCOL.md` §6 est fail-closed et il doit l'être. Ma correction ne prétend pas
rendre ce texte vérifié : elle corrige quatre énoncés dont la portée excédait réellement les supports, et elle
laisse au pipeline le soin de mesurer les vingt et un autres avec la preuve qui leur correspond.

`limits` n'a pas été modifié et reste interne.

Toute modification du fichier invalide le SHA du pack. Un retour à `PREPARE` est nécessaire de toute façon ; il
serait sans effet sur les vingt et un claims s'il est relancé avant que `evidencePath()` sache lire
`validated.dossier`.

Je ne rends ni `ACCEPT`, ni `FACTCHECK_PASS`, ni `BLOCKED_SOURCE`.
