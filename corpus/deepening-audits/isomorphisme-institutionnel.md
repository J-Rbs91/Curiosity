---
concept_id: isomorphisme-institutionnel
deepening_sha256: 3651c8ab2d9d242ce696218c19d88417bfaf2175d6e0fe7634cd629fc9b9a26a
validated_sha256: ec5fcb4d4de32583aa260c5874e06223adf62b9c301c1809d2996d9398df8532
protocol_version: 3
audited_at: 2026-09-20T04:49:16Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# isomorphisme-institutionnel

**Le texte publié portait une phrase que le modèle avait écrite de mémoire.** « Le mot vient de
la biologie, où il désigne des formes différentes qui ont convergé vers une apparence proche
parce qu'elles occupent la même niche. » C'est la convergence évolutive, elle est plausible, et
elle n'est dans aucune source du dossier.

Ce que le dossier porte est autre et plus étroit : l'article de 1983 reprend à Hawley une
définition de **processus contraignant** — « isomorphism is a constraining process that forces
one unit in a population to resemble other units that face the same set of environmental
conditions » (p. 149) — pas une apparence convergente.

**Et le dossier porte en plus la réserve qui rendait le terrain glissant**, sous forme de
résultat négatif explicite : l'article n'écrit nulle part que Hawley aurait forgé le mot, et
« un renvoi à une "description" et une entrée d'encyclopédie n'établissent pas une invention de
terme ». Le texte réécrit dit « Le mot n'est pas d'eux » sans créditer personne d'autre de la
forge. Le reviewer a vérifié les deux points sur pièce.

## Le champ organisationnel reconduisait un contresens répertorié

La version publiée définissait le champ par des organisations « qui se reconnaissent
mutuellement comme appartenant au même secteur », avec « un hôpital se compare à d'autres
hôpitaux, pas à une entreprise de logistique ». Le dossier range exactement cela en
`common_misinterpretations` : « Un champ organisationnel, c'est un secteur d'activité ou un
marché. »

La définition de la p. 148 y met nommément les fournisseurs principaux, les consommateurs de
ressources et de produits et les agences de régulation — des acteurs qui ne sont ni en
concurrence ni du même métier — et ajoute que la structure d'un champ ne se détermine pas a
priori.

**Le risque réel était l'excès inverse, et le reviewer l'a contrôlé : il n'a pas eu lieu.** Le
texte garde « les organisations qui produisent des services semblables » en tête de définition.
Le champ s'élargit aux régulateurs et aux acheteurs sans être vidé de ses producteurs.

## Audit

`REVISE`. Notes A–H : 2, 3, 1, 4, 2, 3, 2, 1. Trois paragraphes sans delta, la chaîne
`lead[0]` → S1.P1 → S6.P2 énonçant trois fois la même proposition, et une annonce de plan que
`PROTOCOLE.md` §2 interdit.

**Le texte faisait 1 299 mots pour un plancher à 1 300** — le ras du minimum, pour l'un des
dossiers les mieux dotés du corpus. L'audit le dit d'une phrase qui vaut règle : « Le déficit
n'est pas un déficit de matière. » Le texte atteignait tout juste son plancher **tout en se
répétant**.

## Fact-check, trois tours

| tour | claims | supportés | échecs |
|---|---|---|---|
| 1 | 78 | 72 | 1 `UNSUPPORTED`, 5 `TOO_STRONG` |
| 2 | 77 | 75 | 2 `TOO_STRONG` |
| 3 | 77 | **77** | **`FACTCHECK_PASS`** |

Le premier tour a fait tomber l'ouverture du texte sur ce qu'elle avait de plus concret :
services qualité, certifications, intitulés de poste, rapports « au format quasi identique » —
aucun support. Le dossier en portait d'autres, d'un autre ordre, et ils ont **remplacé** les
premiers plutôt que de les atténuer : comptables recrutés pour satisfaire au droit fiscal,
postes créés pour parer les accusations de discrimination, normes antipollution.

Deux affaiblissements ont été rétablis au mot près : « many professional career tracks » redevenu
« beaucoup de carrières », et « socialization **could** reinforce » redevenu « peut renforcer ».

**Le second tour a fait apparaître « deux sociologues américains », que le premier n'avait pas
vu.** Une affiliation à Yale et une publication dans l'*American Sociological Review*
n'établissent ni la nationalité ni la profession. **La même faute exacte est tombée le même jour
sur `inertie-structurelle-et-selection`** — deux cartes indépendantes, deux réécrivains
différents. Ce n'est pas un accident : c'est un biais de rédaction qui consiste à compléter une
identité d'auteur avec ce qu'on croit savoir d'elle.

La correction finale a été **vérifiée mécaniquement plutôt qu'à la relecture** : les 77
`claim_text` du mapping ont été cherchés comme sous-chaînes exactes dans le fichier corrigé, et
exactement deux ont disparu — les deux en échec. La méthode vaut d'être reprise.

## Revue

`ACCEPT`. SHA recalculé, identique au `candidate_sha256`. Quatre axes montent, dont la densité
de 1/4 à 4/4 : quinze paragraphes lecteur, quinze deltas distincts, et le texte passe de 1 299 à
1 673 mots **en supprimant trois paragraphes**.

Une régression étroite est consignée : la face diffuse de la contrainte — les attentes
culturelles partagées, p. 150 — a disparu de S2. Deux imprécisions d'expression sans effet
documentaire sont notées.

## Une anomalie d'orchestration, signalée par le reviewer

**La base de comparaison d'une revue n'est plus `HEAD~1` quand le cycle commite au fil de
l'eau.** Le reviewer a dû remonter à `cf21df6` pour trouver la version réellement auditée, trois
commits d'étape portant des états intermédiaires du même cycle — dont un qui contenait déjà la
réécriture. Il écrit : « Si un autre reviewer du lot a comparé à `HEAD~1`, il a comparé deux
états intermédiaires et n'a rien pu voir. » À porter dans le protocole de revue : la version
antérieure se désigne par un SHA de blob, pas par une position relative dans l'historique.

Artefacts détaillés : `corpus/deepening-audits/work/isomorphisme-institutionnel/`.
