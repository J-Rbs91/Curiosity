---
concept_id: conscience-de-la-situation
deepening_sha256: 9b635f706151c3e7042a210a18d87b90a99874bd65dba836846065ce7c06e7ca
validated_sha256: da4a5367c2963f4a946c68acc85496682f42f63925f6bfa4c01e5c235a72eee3
protocol_version: 3
audited_at: 2026-09-29T05:25:00Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
remappings: 1
---

# conscience-de-la-situation

Carte jamais auditée, prise au titre de la priorité 1 de la routine pour son dossier et pour un
risque précis : une de ses cinq sources déclarées est `metadata-only`, configuration où une
affirmation de contenu peut s'adosser à un texte jamais ouvert.

Cycle : `REVISE` → réécriture → `FACTCHECK_FAIL` 79 sur 85 → une boucle de correction →
`FACTCHECK_FAIL` 69 sur 70 → remapping → `FACTCHECK_PASS` 81 sur 81 → `ACCEPT`.

## Le risque redouté s'est bien réalisé, et ailleurs qu'on l'attendait

La sur-attribution était dans le `lead` : il créditait l'autrice d'avoir donné à la notion « un nom
et une structure ». Les sources n'autorisent que la définition en trois niveaux et le modèle qui la
soutient ; le terme, lui, est antérieur, et le dossier le documente — médecine aéronautique, 57th
Fighter Weapons Wing, 1986. L'apport est désormais borné, et l'antériorité vit dans une section qui
l'établit au lieu de la contredire.

Trois autres corrections du même ordre, toutes dans le sens du retrait : deux affirmations de
fréquence sans appui, retirées et non atténuées ; une analyse d'accidents qui était prêtée à un
article de théorie ; et un `limits` qui affirmait que la communication de 1988 porte la définition
« à sa source », c'est-à-dire précisément l'antériorité que le dossier n'établit pas.

Les trois sources `metadata-only` ne soutiennent aucune phrase de contenu du texte final.

## L'exemple remplacé, et ce qu'il faut ne pas lui faire dire

L'ancien `sections[2].paragraphs[2]` illustrait le mécanisme par une scène construite : « Imaginons
une équipe absorbée par une panne, et qui cesse pour cette raison de suivre une réserve dont
personne ne se souciait… »

**Ce n'était pas une faute documentaire, et il importe de ne pas la compter comme telle** : la scène
s'annonçait comme hypothétique, elle ne présentait aucun fait comme réel et n'attribuait rien à
personne. Son défaut était pédagogique — elle rejouait le `lead` au lieu de faire avancer le
lecteur.

Elle est remplacée par un cas que le dossier porte en toutes lettres : l'approche de Portland de
décembre 1978, un DC-8 dont l'équipage s'absorbe dans un problème de train d'atterrissage et cesse
de suivre une réserve de carburant qui se dégrade, « despite the indications of his crew », dix
morts. La revue a vérifié le paragraphe mot à mot contre la lecture primaire : chaque élément a son
répondant, y compris le motif de la mise en attente, et aucun détail n'est ajouté. Elle y voit le
gain pédagogique le plus net du lot.

## Le refus qui a failli coûter une citation

Le second tour du gate a refusé `C046`, la citation attribuée à Bailly — « A l'origine, ce terme
était plus employé par les pilotes que par la communauté scientifique » — au motif qu'aucun appui
fourni ne la portait. **C'était exact quant aux appuis fournis et faux quant au dépôt** : le
verbatim est dans l'enregistrement validé, `$.review.notes[2]`, avec sa page, et le pack le ramasse
sous `SUP-1f0ac5f981b34a1a`. Cet appui n'était attaché à aucun claim, et le signal d'appuis non
cités était vide.

Le défaut était donc dans l'artefact, pas dans le texte, et la boucle de correction aurait supprimé
du texte lecteur une matière attestée avec sa pagination. Le remapping a été préféré : le mapper
frais, à qui rien n'avait été dit, a rattaché l'appui de lui-même, et le vérificateur a soutenu le
claim. L'écart de protocole que cela représente, et le trou structurel qu'il met au jour, sont
écrits au journal du passage.

## Les titres, et pourquoi les toucher était fondé

La correction a modifié deux titres de section, ce qui sort de la lettre d'une correction minimale.
Le motif est le chantier M : les titres sont du texte lecteur qu'aucun claim ne couvre.

« Une phrase citée partout, jamais à sa source » portait **les deux excédents que la correction
retirait du corps** — l'universalité de fréquence des claims refusés `C001` et `C002`, et
l'antériorité de `C056`. Les laisser aurait replacé les deux affirmations exactement dans l'angle
mort du gate, en position d'annonce et en gros caractères. La revue juge le geste fondé et les deux
nouveaux titres soutenus.

C'est le deuxième cas établi du chantier M, et le premier trouvé **par la consigne** plutôt que par
accident.

## Verdict de la revue

`ACCEPT`. Texte lecteur recompté à 1 656 mots, dans la cible de `PROTOCOLE.md` §5 ; le total de
1 927 affiché par le script inclut `limits`, qui ne s'affiche pas. Le texte est **à sa borne haute** :
tout ajout futur devra être gagé sur un retrait.

Trois réserves mineures, aucune bloquante : un écho d'une clause entre `lead[1]` et la fin de S4.P2
sur le crédit du mot ; un verbatim non glosé en français en S1.P2 ; et le retrait de la formule de
Sarter et Woods, dont le delta est couvert ailleurs.

Le détail est dans [`work/conscience-de-la-situation/review.md`](work/conscience-de-la-situation/review.md).
