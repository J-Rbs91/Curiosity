concept : critere-de-la-retroaction
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 623582dbf638f033caa87a683c490298c470e512

GATE (vérifié avant toute lecture pédagogique)

- `sha256sum corpus/deepenings/critere-de-la-retroaction.json` =
  `c95ef7e2fb1794bb1dc834ec0f1a566ed10c92133fec21e266d14b9fc11c9ef3`.
- `factcheck-gate.json` : `verdict: FACTCHECK_PASS`, 48 claims, 48 soutenus, 0 refusé,
  `mapping_incomplete: 0`, `structural_errors` vide, `candidate_sha256` identique au SHA ci-dessus.
- `verification.json` porte le même `candidate_sha256` et 48 résultats, tous `SUPPORTED`.
  `claim-map.json` porte le même SHA et 48 claims sur 13 locators.
- Le gate décrit donc bien le texte en place, et non `51377815…` comme le disaient les artefacts
  au moment où `reprise-rewrite.md` a été arrêté : la chaîne a été relancée depuis `PREPARE`
  après la reprise, comme ce compte rendu le demandait.

Version antérieure : blob `623582db…`, lu par `git cat-file -p`. JSON d'approfondissement valide,
`conceptId` = `critere-de-la-retroaction`, sha256 `29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222`,
conforme au `deepening_sha256` du rapport final du 26 septembre. C'est le texte publié (tour 0),
celui qu'a examiné `audit.md`. Le diff couvre donc tout le cycle : les onze corrections
factuelles des tours 1 et 2, puis les deux gestes de la reprise du 28.

Volume lecteur : 1 198 mots avant, 1 074 après (moins 124). 14 paragraphes avant, 13 après.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     avant : gate à 7 refus sur 59, et surtout S5.P3 « Ces quatre termes, il ne les invente pas » contredisant `attribution_note`, qui réserve la non-invention à rétroaction et rétroinformation. après : 48/48 soutenus ; le périmètre est borné aux deux termes et l'ajout des deux autres est dit (« La préinformation et la préaction, elles, il les ajoute ») ; `limits` identique au caractère près et non remonté ; Veraldi `metadata-only` toujours hors du texte lecteur.
progressivité pédagogique      3/4     3/4     les deux réserves de l'audit sont intactes dans les deux versions : « faire boucle » sert de critère dès lead[1] avant que s2 dise ce qu'une boucle exige, et s4.p1 formule les deux dimensions après que s2.p0 les a employées sous « constater et intervenir ». Gain : disparition du paragraphe le plus faible (baseline s1.p2, le délai). Rugosité nouvelle : s3.p0 s'ouvre désormais sur un énoncé abstrait (« Paquette décrit une hiérarchisation des boucles et un déplacement des finalités ») là où la baseline entrait par « Une boucle n'est presque jamais seule », et « au même étage » (s3.p1) s'appuie sur un antécédent plus mince. Contenue : « déplacement des finalités » enchaîne directement sur la « valeur visée » de s2.p1, et la fièvre instancie aussitôt.
densité / non-redondance       3/4     3/4     avant : 11 deltas propres sur 14 paragraphes, S2.P3 annonçant l'importance du délai sans l'expliquer, S5.P2 redondant. après : 12 sur 13 ; S2.P3 supprimé et réduit à une borne symétrique utile (« que le temps de traitement ne rende pas l'information inutilisable ») ; s4.p1 reste le seul paragraphe à delta partiel. Aucune séquence de trois paragraphes à delta substantiellement identique, aucune section dont le rôle principal soit de répéter une autre. Répétition supprimée non recréée ailleurs : recherché spécifiquement sur le couple hiérarchie / étage (s3.p0 vs s3.p1) et sur le couple deux conditions (lead[1] vs s4.p1) ; le premier est resserré par le bornage, le second est inchangé et déjà connu.
clarté                         3/4     3/4     lead[0] intact, le meilleur passage du texte. lead[1] passe de « un moyen de trancher, devant n'importe quelle situation » à « un critère d'identification : deux conditions sans lesquelles il n'y a pas de boucle » : registre un peu plus abstrait, immédiatement racheté par les deux questions en mots courants qui suivent sans changement. Gain net en s4.p2, que l'audit reprochait d'empiler quatre termes en 113 mots : ils y sont désormais groupés deux par deux selon leur statut. Pertes : la scène du curseur (s2.p1) et la glose contrastive de l'hétérostasie ; l'hétérostasie reste glosée par sa définition (« le déclenchement d'une révision des buts »), donc aucun terme savant n'arrive non expliqué.
profondeur explicative         3/4     3/4     tout ce qui a été retranché depuis la baseline est un énoncé que le gate a refusé, et je l'ai instruit pièce par pièce contre `rewrite.md` : le mécanisme du délai (C028-C031, « intégralement inventée » de l'aveu du correcteur), la généralisation de l'écart-défaut (C040), l'obstination du corps (C044), le curseur (C034), l'emboîtement et l'agent du déplacement (C038). Aucune de ces pertes n'est une profondeur soutenue : une profondeur obtenue par invention ne se porte pas au crédit du texte (AUDIT_PROTOCOL §5-6). La profondeur appuyée est inchangée, et elle gagne en s4.p2 un mécanisme documentaire neuf, la manière dont la terminologie a été assemblée, deux termes repris et deux ajoutés. Réserve honnête : s3 est désormais la section la plus mince du texte (2 paragraphes, ~85 mots) et se tient au plafond documentaire que l'audit avait nommé.
valeur des exemples            4/4     4/4     l'autocuiseur contre le réservoir (s2.p0), le parachute (s1.p0) et la fièvre (s3.p0) travaillent tous, inchangés. La restitution du thermostat et du joueur de quilles au `lead` rétablit la liste du texte publié. Dette pédagogique constatée et assumée : deux des cinq objets annoncés ne reparaissent jamais (le thermostat n'a plus son curseur depuis C034). Ce n'est pas une régression imputable à la reprise : `audit.md` tranche explicitement le point sous LIMITES DOCUMENTAIRES, « La mention en lead[1] est licite ; un développement ne le serait pas ». La phrase caractérise l'article, elle ne promet pas un plan. Aucun exemple séduisant sans fonction n'a été ajouté : la reprise n'ajoute aucun exemple.
limites / nuances              3/4     4/4     avant : « pas nécessairement en temps réel » bien placé, mais le statut des deux termes ajoutés perdu et remplacé par une affirmation plus forte. après : la fausse affirmation est retirée et l'ajout est dit ; la nuance du différé reçoit sa borne symétrique. Réserve maintenue : le statut d'« hypothèses de travail » de préinformation et préaction, que l'enregistrement validé porte, n'est toujours pas énoncé. La faute est réparée, la nuance n'est que partiellement restituée.
pouvoir d'ouverture            2/4     2/4     inchangé, et c'est le défaut de l'audit qui survit entièrement : le texte finit toujours sur une restriction de périmètre (« Cette terminologie, il la propose aux sciences de la communication et à elles seules »). Les deux sorties que l'audit avait repérées dans les matériaux, le motif de l'emprunt dénaturé et l'arrivée tardive du mot rétroaction, exigent d'ajouter du texte, ce que `reprise.md` interdit nommément. Chantier ouvert, hors mandat de ce cycle.

LE GESTE HORS CONSIGNE : LE TITRE DE sections[3]

Instruit moi-même, et non pris sur parole. Constats :

1. Les 13 locators de `claim-map.json` s'arrêtent à `lead[*]` et `sections[*].paragraphs[*]` :
   aucun ne vise un titre. Le réécrivain dit vrai, le gate est aveugle à cet endroit.
2. `definition_de_lauteur` du dossier écrit « Paquette décrit ensuite la hiérarchisation des
   boucles et le déplacement des finalités ». Ni « emboîtées les unes dans les autres », ni un
   niveau supérieur comme agent n'y figurent. L'excédent refusé en `C038` est bien celui que le
   mot « emboîtées » portait en tête de section.
3. Le mot substitué est celui de l'appui. La substitution ne crée aucune assertion : elle en
   retranche une.

Jugement : **le geste est acceptable, et il était le bon.** `PROTOCOLE.md` §1 établit que le
titre fait partie du texte lecteur et est soumis aux mêmes règles (« ni dans un titre »), et
`AUDIT_PROTOCOL.md` §3.A note la fidélité documentaire du texte lecteur, titres compris. Laisser
« emboîtées » aurait publié en position d'annonce, et dans le seul endroit du texte lecteur que le
vérificateur ne regarde pas, exactement la proposition que le gate venait de refuser dans le
paragraphe situé trois lignes plus bas. Les interdictions de `reprise.md` visent les ajouts
(« ajouter un exemple, une transition ou une nuance ») et le retour sur les onze corrections :
une troncature d'un mot vers la formule de l'appui n'est ni l'un ni l'autre. Le coût est nul,
zéro mot, aucune assertion neuve, progression inchangée, titre toujours substantiel et à 47
caractères. Et la cohérence l'impose : ce cycle existe parce qu'un angle mort d'instrument a fait
retirer deux exemples réels (`C008`) ; on ne peut pas, dans le même cycle, se servir d'un autre
angle mort pour conserver un excédent. Le geste a de surcroît été déclaré en avance, localisé et
donné comme réversible, ce qui est le comportement attendu de qui sort de la lettre d'une
consigne.

PRÉMISSES DU RÉÉCRIVAIN VÉRIFIÉES AU DOSSIER

- Geste 2 : `corpus/evidence/retroaction-denaturee/lecture.json`, `$.reserves[0]`, condition 3,
  porte bien « l'auteur raisonne sur un thermostat, un autocuiseur, un réservoir de W.-C., un
  thermocouple, un joueur de quilles, une fièvre, un professeur devant quelques centaines
  d'étudiants ». La prémisse de `reprise.md` est exacte, la restitution est fondée. Le thermocouple
  et le professeur, attestés par la même phrase, n'ont pas été promus : correct, ils n'étaient pas
  au texte publié.
- Geste 1 : `definition_de_lauteur` porte la formule retenue mot pour mot. Le `NARROW` n'a rien
  substitué et n'a compensé nulle part : la phrase passe de 25 à 12 mots et le texte est plus court
  après (1 074 contre 1 081 au candidat du tour 2, contre 1 198 au texte publié).

défauts initiaux corrigés :
- La faute documentaire qui interdisait `PASS` à l'audit : S5.P3 étendait à quatre termes une
  non-invention que l'enregistrement validé réserve à deux. Corrigée, et la distinction restituée
  vaut en outre comme delta neuf pour le lecteur.
- S2.P3, « le paragraphe le plus proche de l'annonce sans contenu, et aussi le plus exposé
  documentairement ». Supprimé, et remplacé par la seule phrase que le dossier portait, ce qui est
  précisément l'une des trois issues que la trajectoire cible autorisait.
- Le dernier reliquat documentaire du cycle, `C038`, borné à l'appui, et son excédent nettoyé
  jusque dans le titre que le gate ne voit pas.
- La perte documentée du tour 2 (thermostat, joueur de quilles), réparée sur prémisse vérifiée.

défauts initiaux non corrigés (hors mandat de cette reprise, à reporter) :
- s4.p1 reformule encore le test déjà posé en lead[1] sans le raccord à « constater et intervenir »
  de s2.p1, qui le rendrait neuf.
- s0.p0 promet toujours « le premier tri porte sur la nature de ce qui revient » sans l'énoncer.
- La fin du texte s'épuise toujours en délimitation de périmètre : pouvoir d'ouverture à 2/4.
- Le statut d'« hypothèses de travail » de préinformation et préaction reste non dit.

régressions détectées :
- Aucune régression imputable à la reprise ni au cycle. Les cinq appauvrissements visibles du texte
  lecteur (mécanisme du délai, généralisation de l'écart-défaut, obstination du corps, curseur du
  thermostat, emboîtement) sont tous des énoncés que le gate a refusés, instruits un par un contre
  `rewrite.md` : retrancher une fabrication n'est pas perdre une information solide.
- Rugosité résiduelle, signalée sans valeur de rejet : s3.p0 entre désormais par l'abstrait et
  « au même étage » (s3.p1) s'appuie sur un antécédent plus mince depuis le retrait de
  l'emboîtement. Le réécrivain du tour 2 avait lui-même signalé cet écho ; il est devenu, après le
  bornage, une maigreur plutôt qu'une redite. Matière à un prochain cycle, à matière constante.
- Aucune remontée de `limits` dans le texte lecteur : les trois éléments sont identiques au
  caractère près à ceux de la baseline et aucune de leurs formulations ne reparaît en section.
- Aucune transition fluide masquant un saut : les deux gestes retranchent ou restituent à
  l'intérieur de phrases existantes, aucune transition n'a été écrite.
- Observation d'instrument, sans effet ici : `verification.json` ne porte pas le champ
  `appuis_non_cites` annoncé par `reprise.md`. L'angle mort qu'il devait couvrir ne peut pas mordre
  sur ce texte, puisqu'il suppose un claim refusé et qu'il n'en reste aucun.

raison de la décision : ACCEPT. Le gate préalable est bon sur le SHA exact du fichier en place,
vérifié à trois artefacts concordants. Le défaut majeur qui interdisait `PASS` à l'audit du 25
septembre, la sur-attribution de S5.P3, est effectivement supprimé, et un second, le paragraphe
S2.P3, l'est aussi. La fidélité documentaire passe de 2/4 à 4/4, les limites utiles de 3/4 à 4/4,
et aucun des six autres axes ne baisse. Aucune séquence de trois paragraphes à delta identique,
aucune section principalement redondante, progression au moins aussi claire, profondeur appuyée
non dégradée : les six exigences minimales de l'ACCEPT sont tenues. Le texte est plus court de 124
mots et reste dans le volume du protocole, mais ce n'est pas ce qui fonde la décision : ce qui la
fonde est que chaque mot retiré était un mot non porté, et que ce qui a été ajouté au dernier tour
l'a été sur une prémisse que j'ai rouverte moi-même au dossier. Le geste sur le titre de
`sections[3]`, bien que hors de la lettre de la consigne, en applique l'esprit au seul endroit du
texte lecteur que l'instrument ne contrôle pas ; il ne disqualifie pas la réécriture, il la
complète. Le pouvoir d'ouverture reste à 2/4 et les trois autres défauts pédagogiques de l'audit
survivent : ils sont hors du mandat de cette reprise et doivent rester inscrits comme chantier.
