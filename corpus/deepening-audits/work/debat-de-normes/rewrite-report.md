concept : debat-de-normes
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=debat-de-normes` : 1 contrôlé, aucune citation signalée)

## Entrées lues

PROTOCOLE.md, AUDIT_PROTOCOL.md (v4), FACTCHECK_PROTOCOL.md (v3), audit.md, factcheck-pack.json
(81 supports), corpus/deepenings/debat-de-normes.json, corpus/validated/debat-de-normes.json (pas de
champ `dossier` ; répertoire conventionnel), corpus/evidence/debat-de-normes/ listé : un seul fichier,
lecture.json, lu en entier. Réserves du dossier appliquées : `reserves[1]` (« Renormalisation » une
seule fois), `reserves[3]` (2004 non ouvert, antériorité non établie), `reserves[9]` (aucun terrain),
`definition_de_lauteur` (le second pôle effacé dans les reprises).

## Taille du texte lecteur (lead + sections)

- avant : 1 243 mots (lead 188, sections 1 055)
- après : 1 224 mots (lead 170, sections 1 054)
- variation : -19 mots (-1,5 %). Aucune croissance nette.
- `limits` (interne) : 164 -> 222 mots.

## Ce qui a été retiré (non sourcé ou redondant)

- lead[1] : « philosophe et ergologue » (aucun support) ; second pôle « ce que la situation réclame »
  (déplacement signalé par SUP-2d122f93a556c5b1) ; « Aucune règle écrite à l'avance ne peut
  prévoir… » (redite avec S1).
- S1.P1 dernière phrase (redite du lead) ; S1.P2 « Le travail prescrit n'est donc qu'un cas
  particulier… à chaque instant » (anticipait S2 et S4).
- S2.P1 « il désigne ici » + liste présentée comme définition de l'auteur ; S2.P2 entier (hiérarchie
  habitude/consigne inventée, redite de « une norme parmi d'autres »).
- S3.P1 « pour qu'elle produise encore ce qu'elle était censée produire » (fidélité au but, non
  sourcée) ; S3.P2 définition de la renormalisation attribuée à l'auteur, « ni désobéissance ni
  improvisation », « compétence d'un métier », « sans s'en apercevoir ».
- S4.P1 « L'auteur insiste… tâches les plus réglées et répétitives… geste mécanique » (sur-attribution,
  troisième redite de la permanence) ; S4.P2 conséquence organisationnelle non fondée.
- S5.P1 « L'auteur reprend cette idée en des termes très proches » (inversion : la phrase est sa
  description de Canguilhem).
- S6.P1 entier (contre-exemple de la consigne de sécurité, frontière « ce n'est pas un débat de
  normes » sans support).

## Ajouts et reformulations, avec leurs supports

Lead
- infirmière marquée « Imaginons » : vignette, aucun claim attribué.
- deux pôles : normes fixées avant l'action dont la consigne n'est qu'une ; tendance de celui qui
  travaille à les renormaliser, sans cesse -> SUP-01e6106a4cc268bb, SUP-d804919d0019b5ca,
  SUP-2d122f93a556c5b1.
- « pas une règle contre un exécutant » ; enjeu santé, non performance -> SUP-2d122f93a556c5b1.

S1
- P2 : citation de l'ouverture de la phrase p. 131 (« Comme le suggère au niveau microscopique… ») et
  « signe visible à petite échelle » -> SUP-d804919d0019b5ca, SUP-45f24791295ef670,
  SUP-b57bab0dadcd52f6 ; lecture « l'endroit où il se laisse observer » marquée « On peut le lire ».

S2
- P1 : suite de la phrase (« entre des normes antécédentes, dont le “travail prescrit” peut être l'une
  d'elles ») -> SUP-d804919d0019b5ca, SUP-45f24791295ef670 ; exemples de normes non écrites marqués
  « à titre d'illustration ».
- P2 : valeurs de la vie sociale qui « interfèrent dans ces débats », « traversée par des
  contradictions potentielles » -> SUP-2d122f93a556c5b1 ; conséquence marquée « On peut le
  comprendre ainsi ».

S3
- P1 : cuisinier gardé (« Imaginons »), resserré.
- P2 : « tendances à la renormalisation » dont l'existence est attestée « au niveau microscopique
  par le “travail réel” ou “actuel” » -> SUP-d804919d0019b5ca, SUP-45f24791295ef670 ; « le mot
  n'apparaît qu'une fois dans l'article » -> SUP-38d437ab5d1c9b1f ; « non une scène que l'auteur
  décrit » -> SUP-6c3457e96c17f5f7.

S4 (refondu : la permanence expliquée au lieu d'être affirmée)
- P1 : deux lignées aboutissant à la définition de l'activité ; ergonomes de l'activité, citation
  « que l'entière anticipation… impossible », « une invitée dans nos vies… », schéma, axe de
  l'impossible -> SUP-2d122f93a556c5b1.
- P2 : branche philosophique, Canguilhem 1947, recension de l'enquête de Georges Friedmann sur les
  usines taylorisées, citation « que cette ambition de contrôle total… », figure 2 « une vie en santé
  ne peut coexister… », jonction ergologique impossible/invivable -> SUP-2d122f93a556c5b1,
  SUP-156512f1471f8fc3.
- P3 : conséquence sur l'écart, marquée « On peut en tirer », fondée sur les deux axes
  (SUP-2d122f93a556c5b1). Remplace l'ancien S4.P2.

S5
- P1 : « débat » rapporté par Schwartz à Canguilhem, nommé douze fois, citation de la santé comme
  débat présentée comme description de Canguilhem par Schwartz -> SUP-156512f1471f8fc3,
  SUP-a85c0d2abefb6423, SUP-c4dc3d0a4ecf36f3, SUP-c0a3b7446753e7db (« nomme », pas « cite » dans le
  corps) ; second pôle marqué « On peut y reconnaître » ; « formule de Schwartz, racine empruntée,
  il l'écrit lui-même » -> SUP-156512f1471f8fc3.
- P2 : amorce « Éviter l'invivable, l'insupportable » rétablie, deux citations -> SUP-cb73027064e4e177 ;
  « sens plus large que médical », « faire tenir ses propres normes de vie » -> SUP-2d122f93a556c5b1.

S6 (titre changé : « Un outil pour décrire, non une grille »)
- P1 : outil et non grille, marqué « On peut comprendre » ; « matrice authentique de l'histoire
  humaine », « réellement comprise, anticipée » par aucune théorie ni système -> SUP-2d122f93a556c5b1 ;
  question déplacée (gardée, resserrée, centrée sur les normes reprises plutôt que sur l'écart pour ne
  pas redire S4.P3).
- P2 : ouverture : article issu de « conférences et de cours donnés depuis 2004 », auto-citation sous
  le titre « Raison pratique et débats de normes », volume collectif (Bienenstock & Tosel) ->
  SUP-156512f1471f8fc3, SUP-92190a6392545d23, SUP-eb78011026fd398c (notice seule : rien sur le
  contenu) ; « il faudra lire ».

## Contrôle des deltas (après écriture)

- lead[0] : la règle écrite ne coïncide pas avec la situation (problème concret).
- lead[1] : le nom, l'auteur, les deux pôles justes, l'enjeu santé.
- S1.P1 : la paire prescrit/réel.
- S1.P2 : l'auteur lit cette paire comme le signe microscopique d'un phénomène général (citation).
- S2.P1 : « norme antécédente » et le prescrit comme une seule d'entre elles.
- S2.P2 : valeurs sociales et contradictions : le débat n'a pas une exigence unique.
- S3.P1 : image de l'ajustement d'une règle.
- S3.P2 : le statut sourcé de la renormalisation (tendance attestée par le travail réel) et la retenue.
- S4.P1 : première raison de la permanence (impossible).
- S4.P2 : seconde raison (invivable) et leur jonction.
- S4.P3 : conséquence sur le regard porté sur l'écart.
- S5.P1 : racine canguilhémienne, second pôle = normes propres du vivant.
- S5.P2 : l'enjeu santé, sens non médical.
- S6.P1 : outil descriptif, l'activité non anticipable par une théorie ; question déplacée.
- S6.P2 : antériorité de la formule (2004) et texte à lire.

Permanence : dite une fois (lead, « sans cesse »), puis expliquée en S4. « Une norme parmi
d'autres » : une fois (lead), fondée en S2.P1 par la citation. Aucun contenu de `limits` remonté.

## Prescriptions de l'audit écartées ou adaptées

- Le verbatim de jonction et celui de la « théorie » contiennent des guillemets imbriqués que le
  contrôle de citation ne retrouve pas tels quels : le premier est rendu sans guillemets, attribué
  (« dit-il »), le second coupé au fragment « réellement comprise, anticipée ».
- Aucun ajout prescrit sans support : rien de ce type dans l'audit.

## `limits`

Réécrit en trois paragraphes : source unique et sans terrain, « renormalisation » une occurrence
(interdits nommés) ; chapitre 2004 et texte 1987 atteints par notice seulement ; réception non
instruite, « philosophe » sans appui, pagination divergente de la phrase sur Canguilhem, base du
décompte « douze fois ».

## Hors périmètre

Le scratchpad partagé a vu un fichier de script d'une autre carte écraser le mien en cours de
session ; aucun fichier du dépôt autre que corpus/deepenings/debat-de-normes.json et ce compte rendu
n'a été modifié par ce travail (`package-lock.json` et `decision-reconnue-d-emblee.json` apparaissent
modifiés dans l'arbre, pas de mon fait). Le compte rendu est écrit sous `rewrite-report.md`, nom
demandé par l'orchestrateur (le prompt système indiquait `rewrite.md`).

Pas d'auto-validation : la version doit repasser par PREPARE (SHA modifié), fact-check et revue.
