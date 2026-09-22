# Réécriture — mesure-devenue-cible

concept : mesure-devenue-cible
mode : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=mesure-devenue-cible`,
aucune citation signalée)

volume : texte lecteur 1 503 mots (avant : 1 299), `limits` 215 mots (avant : 141).
Le plan à cinq sections est conservé. Deux paragraphes ont été supprimés, deux fusionnés,
quatre écrits.

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md` (dont §3bis)
- `corpus/deepenings/mesure-devenue-cible.json` (version auditée)
- `corpus/validated/mesure-devenue-cible.json` en entier, `notes` et bloc `review` compris
- répertoire `corpus/evidence/mesure-devenue-cible/` listé moi-même : `attribution-hoskin.json`
  et `lecture.json`, les deux lus intégralement, `reserves` comprises. Pas de `scouting.json`.
- entrée `mesure-devenue-cible` de `src/content/generated/concepts.generated.ts`
- `corpus/deepening-audits/work/mesure-devenue-cible/audit.md`

## Point où je m'écarte de la trajectoire cible, et pourquoi

L'audit demande deux fois de trancher S3 dans le sens « l'aphorisme est de Strathern et ne se
trouve nulle part chez Hoskin » (défaut majeur n° 3, trajectoire cible n° 4, matière
sous-exploitée n° 2 : « neuf variantes de la formule, zéro occurrence dans les 337 pages »).
**Cette conclusion est celle du dossier, et l'enregistrement validé l'a explicitement
renversée.** `notes[1]` est intitulée « Avertissement de méthode, et c'est ce qui a failli faire
publier ici une attribution fausse » : les neuf variantes cherchées ne recoupaient aucune des
chaînes réellement imprimées, et « la formulation y était pourtant, dès la première ligne du
chapitre, p. 265 : "every measure which becomes a target becomes a bad measure" ». Le bloc
`review` (SOURCE 2) confirme sur le PDF du chapitre l'ouverture verbatim, et
`attribution_note` conclut : « elle resserre une formulation déjà publiée ».

Écrire l'absence aurait donc republié précisément le contresens que la chaîne de contrôle avait
attrapé. `attribution-hoskin.json` est ici une pièce antérieure et superséded sur ce seul point ;
elle reste valide sur tout le reste (la mésattribution à Goodhart, la raison textuelle, les
verbatim paginés). La trajectoire cible n'étant pas une autorité documentaire, S3 dit désormais
ce que les matériaux établissent : la phrase est de la main de Strathern, elle resserre une
formulation déjà publiée, et ce qui lui appartient en propre est le tour de langue, pas la loi.

Conséquence : le delta que l'audit voulait (lever le contresens que le lecteur apporte avec lui)
est bien produit, mais par le bon bout, celui de la mésattribution à Goodhart, qui est établie.
La recherche d'absence, elle, n'entre nulle part dans le texte lecteur.

## Ancrage des affirmations sur Hoskin (FACTCHECK §3bis)

La source 2 se déclare `partial` dans l'enregistrement validé et le répertoire de preuve ne
porte aucun `consulted` pour elle (`attribution-hoskin.json` annonce `hoskin_ouvert: true` sans
niveau, `lecture.json` déclare en réserve ne pas l'avoir ouvert). Aucune phrase du texte ne
s'appuie sur ce niveau déclaré. Chaque affirmation de contenu sur le chapitre s'ancre sur un
verbatim relevé ailleurs :

| affirmation du texte | ancrage |
|---|---|
| le chapitre s'ouvre sur « that every measure which becomes a target becomes a bad measure » (S3.P2) | `attribution_note` + `review` SOURCE 2 |
| Hoskin donne l'appellation pour déjà reconnue (S3.P3) | `review`, NOTE sur un point de fait (« is […] becoming recognized as one of the overriding laws of our times », p. 265 ; « as originally defined by Goodhart », p. 280) |
| la note de 1989 et son contenu monétaire (S3.P3) | `notes[2]`, phrase à phrase |
| « a strong ironic awareness of the futility of measures that are targets » (S5.P1) | `review` SOURCE 2, p. 277 |
| l'objection de Hoskin à la loi (S5.P2) | verbatim p. 266 du répertoire de preuve, corroboré côté enregistrement par `notes[2]` (« Il prend cette loi comme un acquis qu'il critique ») et `notes[3]` (« its specific formulation », p. 266) |

Seule la cinquième ligne dépend d'un verbatim qui ne figure pas dans `notes`/`review`. Je l'ai
retenue parce qu'il s'agit d'un passage relevé mot pour mot, avec pagination, dans un fichier
dont le pack de fact-check ramasse les supports, et parce que le contenu de l'objection
(« la loi laisse croire que les mesures en elles-mêmes ne sont pas mauvaises ») est le
développement littéral de ce que `notes[2]` résume. Si le gate la refuse, la correction
minimale est de supprimer la citation et de réduire S5.P2 au constat de `notes[2]`, sans perte
d'architecture. `limits[0]` nomme cette frontière.

Réserve du répertoire de preuve respectée : la phrase de la p. 266 dont le début n'a jamais
pu s'afficher et l'identité de « its specific formulation » ne sont affirmées nulle part.

## Corrections documentaires

1. **« l'historien de la comptabilité Keith Hoskin »** (ancien S3.P1) : supprimé. Remplacé par
   la seule caractérisation documentée, celle de Strathern elle-même, et attribuée à elle :
   « un auteur qu'elle présente comme un spécialiste de l'éducation, Keith Hoskin »
   (`review` ATTRIBUTION, « an educationalist, Hoskin »).
2. **« celui d'un économiste, Charles Goodhart »** : supprimé. Le texte ne lui donne plus aucun
   métier ; `limits[1]` l'interdit explicitement.
3. **Le mécanisme monétaire déformé** (ancien S3.P2, « un instrument de mesure de la monnaie,
   pris pour cible du contrôle […] cesse de fonctionner comme monnaie ») : rétabli mot pour mot
   sur `notes[2]` : « la monnaie, prise pour instrument du contrôle monétaire, cesse d'être
   utilisée comme monnaie et se voit remplacée par des substituts qui permettent d'échapper à
   ce contrôle ». La clausule ajoute désormais la distinction que la déformation masquait :
   « ce n'est pas un instrument de mesure qui se dégrade sous l'observation : c'est la chose
   mesurée que ses utilisateurs désertent ».
4. **Le cadrage historique non établi** (ancien S2.P1, « au moment où les établissements
   commencent à être classés selon des indicateurs de performance », « L'un de ces indicateurs
   concerne les diplômes ») : supprimé. S2.P1 ne présente plus le 2.1 comme un indicateur
   officiel de classement, mais comme l'exemple que Strathern prend, « celle qui servait à
   discriminer les performances individuelles des diplômés » (`lecture.json`). `limits[3]`
   inscrit la frontière.
5. **L'explication causale non marquée** (ancien S4.P2, « parce que c'est cette confusion,
   précisément, qui rend l'indicateur gouvernable ») : marquée, « et l'on peut comprendre cela
   ainsi », puis distinguée de ce que l'auteure avance elle-même, introduit par « L'auteure va
   plus loin que ce raisonnement » et suivi de son verbatim.
6. **L'argument tiré d'un silence** (ancien S5.P1, « Rien de ce qu'écrit Strathern ne suggère
   que cette réponse suffise ») : supprimé, remplacé par la portée générale que Hoskin donne
   lui-même au constat (p. 277).
7. **`lead[1]`, « restée depuis attachée au nom de son auteure »** : non signalé par l'audit,
   mais l'attribution dominante est au contraire celle à Goodhart, et cette phrase l'annulait
   d'avance. Supprimée ; l'entrée en matière n'y perd rien et le delta de S3.P1 y gagne.

## Suppressions et fusions

- **ancien S1.P2** : moitié conservée (coût, échelle, comparabilité) et fondue dans S1.P1. La
  clausule « plus il est facile à obtenir, plus il est facile à faire varier sans toucher à ce
  qu'il représente » était la condition de S1.P1 redite à l'envers : supprimée.
- **ancien S1.P3** : conservé comme S1.P2, débarrassé de sa clausule « Le chiffre monte ; ce
  qu'il devait représenter n'a pas nécessairement bougé », qui rejouait `lead[0]`. La troisième
  voie reçoit en échange son propre delta : elle ne touche pas à l'enseignement, elle change la
  population mesurée.
- **ancien S2.P2** : supprimé en entier. Il réappliquait le mécanisme de S1 au 2.1 et refermait
  sur le patron de `lead[0]`. Remplacé par le glissement du mot improvement, la morale de
  l'accomplissement, la jonction du « is » et du « ought » et la formule p. 307.
- **ancien S3.P3** : supprimé (« Aucun des deux auteurs ne revendique la paternité »). Sa
  matière utile, Hoskin non baptiseur, est passée en tête de S3.P3 nouveau.
- **ancien S5.P2** : supprimé en entier. Il rejouait l'opposition informer / juger déjà posée
  en S1.P2 et la portée générale déjà établie par S5.P1.
- **ancien S5.P3** : supprimé. Aucun élément des matériaux ne porte l'observation sur la
  position des acteurs et l'indiscernabilité externe, et le texte se terminait sur son
  paragraphe le moins soutenu.

## Delta de chaque paragraphe de la nouvelle version

| paragraphe | ce que le lecteur sait après, qu'il ne savait pas avant | mots |
|---|---|---|
| `lead[0]` | un chiffre peut rester intact et cesser de renseigner, dès lors que des conséquences y sont attachées | 107 |
| `lead[1]` | la formule, sa langue, son auteure, la date, et surtout que l'énoncé naît d'un cas restreint, l'audit des universités britanniques | 88 |
| S1.P1 | une mesure est un substitut d'une chose inobservable à l'échelle de décision ; pourquoi on l'accepte ; et à quelle condition il vaut | 115 |
| S1.P2 | trois voies distinctes de découplage, dont une qui n'agit pas sur la chose mais sur la population mesurée | 100 |
| S2.P1 | l'audit universitaire ne prend pas pour objet l'éducation des étudiants mais sa provision institutionnelle ; le 2.1 devenu une attente | 119 |
| S2.P2 | pourquoi le basculement se produit : le glissement du mot improvement, la jonction du « is » et du « ought », et « measuring the improvement leads to improving the measures » | 149 |
| S3.P1 | la phrase n'est pas de Goodhart, et la raison est textuelle : absence de guillemets, d'appel de note et de discours rapporté, chez une auteure qui référence systématiquement ses emprunts | 85 |
| S3.P2 | elle dit devoir ses observations à Hoskin, dont le chapitre ouvre déjà sur la loi : elle resserre une formulation publiée plus qu'elle ne l'invente | 125 |
| S3.P3 | le nom vient d'un cran plus loin, Hoskin le donne pour déjà reconnu, et l'observation d'origine est monétaire, la monnaie désertée par ses utilisateurs | 129 |
| S4.P1 | Strathern ne constate pas seulement : elle avance que l'audit est délibérément bâti sur cette confusion, et tient la corruption pour endémique | 88 |
| S4.P2 | distinguer un effet pervers, qui est un accident, d'un principe de construction ; puis la thèse plus forte de l'auteure, l'audit qui a une vie propre | 141 |
| S5.P1 | changer d'indicateur ne déplace que la cible, et Hoskin donne au constat une portée qui excède tout indicateur particulier | 124 |
| S5.P2 | la loi a son critique, et c'est l'auteur dont elle vient : la formule masque la raison pour laquelle la futilité est inhérente, question ouverte et texte à ouvrir | 133 |

Aucune séquence de deux paragraphes n'a le même delta. La proposition centrale n'est plus
énoncée qu'une fois pour elle-même, dans `lead[0]`, et une fois sous la forme de sa condition
de validité, dans S1.P1 : les trois reprises (ancien S1.P3, S2.P2, S5.P2) ont disparu.

## Contrôles

1. Delta formulé pour les treize paragraphes, ci-dessus. Aucun paragraphe sans delta.
2. Aucune section ne répète principalement une section antérieure. S2 apprend l'objet de
   l'audit et le mécanisme du mot improvement, ce que l'ancienne version ne faisait pas ; S5
   ne rejoue plus S1.
3. Frontières documentaires tenues : rien sur ce que Goodhart a écrit, rien sur la continuité
   de l'argument de Hoskin, rien sur un statut officiel du 2.1, aucun métier prêté à un auteur
   hors de la caractérisation que Strathern donne de Hoskin.
4. `limits` reste interne. Aucun de ses quatre paragraphes n'a de contrepartie visible dans
   `lead` ou `sections`, et aucun titre ne renvoie à une insuffisance documentaire.
5. Progression non annoncée : aucun titre ne nomme sa fonction, aucun « pour aller plus loin »,
   aucune conclusion récapitulative. S5.P2 se termine sur une question ouverte et sur un texte
   à lire, au futur et du côté du lecteur.
6. Citations : les six passages anglais de cinq mots ou plus sont tous présents verbatim dans
   les matériaux autorisés, et le contrôle mécanique n'en signale aucun. Aucune citation de
   Strathern comportant une apostrophe droite n'a été reprise, pour ne pas avoir à choisir
   entre la typographie imposée et l'exactitude du verbatim : les passages concernés
   (« Goodhart's Law », « after the latter's observation… ») sont rendus en français.
7. Zéro tiret cadratin, zéro apostrophe droite, zéro guillemet droit. Titres tous sous
   60 caractères (35, 47, 45, 38, 43).
8. `npm run corpus:deepen -- --check --only=mesure-devenue-cible` : 1 approfondissement
   contrôlé, 1 718 mots, rien projeté, aucun avertissement de citation.

## Suite

Le SHA du texte a changé : tout fact-check antérieur est invalide et l'orchestrateur doit
reprendre à `PREPARE`. Aucune auto-validation, aucun `FACTCHECK_PASS` déclaré ici.
