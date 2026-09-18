---
concept_id: critere-de-la-retroaction
deepening_sha256: 29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222
validated_sha256: 2af4e7f914e71b588ed756e81666c56a88b9354c38ac15d7a350a4c21a00ac8b
protocol_version: 3
audited_at: 2026-09-18T04:00:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# critere-de-la-retroaction

Le texte affiché au lecteur est **inchangé** : il est celui de `HEAD`.

> **Avertissement sur le statut de ce rejet.** Les champs de l'en-tête sont contraints par le
> protocole et disent `rewrite_rejected_factcheck`. Ils décrivent mal ce qui s'est passé. Le
> gate a bien rendu `FACTCHECK_FAIL`, mais **21 des 25 échecs ne sont pas documentaires** : ils
> sont causés par un défaut de l'outil de fact-check, décrit ci-dessous. Cette carte n'est ni
> `BLOCKED_SOURCE` — ses sources existent, sont consultées en texte intégral et sont au dépôt —
> ni une réécriture fautive. Elle est **bloquée par l'instrument**.

## Audit pédagogique — `REVISE`

Notes : fidélité 2 · progressivité 3 · densité 3 · clarté 3 · profondeur 3 · exemples 4 ·
limites 3 · ouverture 2.

Architecture saine et montée réelle — signal, action, mécanisme, étages, vocabulaire. Onze
paragraphes sur treize portent un delta propre, et l'audit relève que l'autocuiseur opposé au
réservoir de chasse d'eau fait un travail qu'aucune définition ne ferait.

`PASS` était exclu par une faute documentaire précise : une non-invention établie pour deux
termes était étendue à deux autres que l'enregistrement validé ne couvre pas, ce qui effaçait
leur statut d'hypothèses de travail.

Détail dans `work/critere-de-la-retroaction/audit.md`.

## La réécriture, et ce qu'elle a réellement corrigé

Quatre corrections légitimes ont été appliquées puis vérifiées :

- la faute d'attribution, corrigée par **restriction de portée** et non par ajout : un
  paragraphe sépare désormais les deux statuts que l'ancienne phrase confondait, avec pour seul
  ajout un verbatim déjà présent dans l'enregistrement ;
- une nécessité ramenée à une possibilité (`C014`) ;
- une quantification retirée sans compensation (`C022`) ;
- une glose donnée explicitement comme interprétation (`C033`).

## Le défaut d'outil

`scripts/corpus/deepening-factcheck.mjs` dérive le chemin des preuves du seul `conceptId` :

```js
function evidencePath(conceptId) {
  return path.join(ROOT, "corpus", "evidence", conceptId, "lecture.json");
}
```

Le champ `dossier` de l'enregistrement validé n'est lu nulle part dans le script.

Cette carte déclare `corpus/evidence/retroaction-denaturee/lecture.json`, et ses `notes`
documentent la divergence d'identifiant comme volontaire — le dossier porte le nom sous lequel
le candidat avait été repéré. Ce fichier existe, fait 12 866 octets et est `consulted:
full-text`.

Le pack sort donc avec `evidence_sha256: null` et 45 supports tous d'origine `validated`. Le
thermostat, l'autocuiseur, le réservoir de chasse d'eau, la fièvre, l'hétérostasie, la
hiérarchie des boucles, les trois moments et la définition verbatim de la rétroinformation sont
dans `definition_de_lauteur` et `reserves` de ce dossier, avec pagination — et le gate les a
déclarés sans preuve.

Le réécrivain a refusé de les supprimer et a vérifié la prémisse au lieu de l'exécuter. C'est ce
refus qui a fait découvrir le défaut. Supprimer aurait détruit une matière réellement lue sur la
foi d'une mesure faite sans elle.

**10 des 136 cartes sont concernées**, et les 10 fichiers déclarés existent : celle-ci, plus
neuf pointant vers `corpus/dossiers/`.

### Pourquoi le correctif évident n'a pas été appliqué

`collectSupports` transforme génériquement toute chaîne non vide en support. Faire pointer la
fonction vers `corpus/dossiers/*.json`, dont le schéma est tout autre, y ingérerait
`pedagogy.short_explanation` et `pedagogy.hook_question`, rédigés par un modèle,
`evidence.common_misinterpretations`, qui rendrait citables comme preuve les contresens qu'elle
recense, ainsi que `_sortie_de_lot.motif` et `rejection_reason`.

Le défaut actuel est conservateur : il fait échouer à tort. Le correctif naïf serait dangereux :
il ferait réussir à tort, contre l'invariant « aucun texte généré par un modèle n'est une
source ». Le choix des sous-arbres de `corpus/dossiers/` qui constituent une preuve consultée
est une décision documentaire, pas un patch, et elle est laissée à arbitrage humain.

## Reprise

La version corrigée est conservée sous
`work/critere-de-la-retroaction/candidate-blocked-tooling.json`. Elle n'a pas été committée
comme approfondissement parce que `npm run corpus:deepen` projette sans vérifier aucun
`FACTCHECK_PASS` : un texte non certifié committé serait publiable par inadvertance.

Une reprise ne doit pas rejouer l'audit ni la réécriture. Elle doit, dans cet ordre : trancher
le périmètre de preuve des dossiers, corriger `evidencePath()` pour honorer `validated.dossier`,
relancer `PREPARE` sur le candidat conservé, et laisser la chaîne juger les 21 claims avec la
preuve enfin chargée.
