concept : garbage-can-model
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 353251076194eb963f7cd2a67d8d36be35b63de5

GATE

SHA-256 actuel de corpus/deepenings/garbage-can-model.json :
cb685513886b345c93186b60c295999bcc5da5c708cef1a86e2cca455700aebb
candidate_sha256 de factcheck-gate.json : identique.
verdict du gate : FACTCHECK_PASS, 76 claims, 76 soutenus, 0 en échec, aucune erreur
structurelle, liste `failures` vide. Les trois conditions du gate préalable sont réunies.

Blob antérieur : lu par `git cat-file -p 353251076194eb963f7cd2a67d8d36be35b63de5`. JSON
d'approfondissement valide, `conceptId` = garbage-can-model, six sections, onze paragraphes
lecteurs, trois `limits` : c'est bien l'état décrit par audit.md (mêmes titres, même lead[0]
portant « Ce genre de scène est banal », même contradiction S5/S6.P1). Identité confirmée.

Contrôle de forme refait : `npm run corpus:deepen -- --check --only=garbage-can-model` passe
(1 864 mots, rien projeté). Aucun terme de dispositif dans le texte lecteur (carte, fiche,
corpus, dossier, enregistrement : 0 occurrence), aucun tiret cadratin, aucune forme fautive de
lacune (« il faudrait pouvoir », « faute d' », « hors de portée » : 0), aucun titre annonçant une
fonction, tous les titres sous 60 caractères.

VOLUME : rectification d'une donnée d'entrée

Le compte de 1 864 mots est le total du fichier, `limits` comprise, tel que le script le rend.
Décomposé :

                        avant     après
lead                      222       218
sections                  980     1 388
texte lecteur           1 202     1 606
limits                    188       258
total (script)          1 390     1 864

L'augmentation du texte lecteur est donc de 404 mots (+34 %), non de 662. Le texte passe de
sous la cible (1 202, ce que l'audit relevait lui-même comme un défaut d'emploi de la matière)
à l'intérieur de la fourchette 1 300-1 700. Le dépassement du total au-delà de 1 700 est
entièrement porté par `limits`, champ interne, qui passe de 188 à 258 mots là où PROTOCOLE §5
indique 100-200. C'est la seule déviation de forme que je relève ; elle est dans le champ non
affiché, elle résulte directement de la demande de l'audit (réécrire `limits`[3], qui déclarait
absente une matière lue intégralement, en nommant l'état d'accès couche par couche), et le
contrôle du dépôt l'accepte. Elle ne justifie pas un REJECT, mais elle mérite d'être connue :
c'est une précision documentaire payée en mots internes, pas en mots lecteur.

Section par section, le gain de mots correspond à de la matière identifiable :

- lead : 222 vers 218. Aucune inflation. La seule coupe est la généralité empirique
  (« Ce genre de scène est banal ») que le gate avait rejetée en C001.
- S1 : 208 vers 240, pour le terrain d'observation (universités américaines, désignation d'un
  doyen, école libre danoise), les trois modalités d'auteur rétablies, et trois propriétés
  neuves de l'anarchie organisée (rareté de l'attention, concurrence entre arènes, arrivée
  exogène). Cinq propositions nouvelles pour 32 mots.
- S2 : 196 vers 228, pour la formule sur la capacité de chaque terme à se relier à n'importe
  quel autre, la genèse de l'étiquette, et l'instabilité du rendu français (1991 contre
  Musselin). Trois propositions nouvelles, moins deux phrases redondantes ou non soutenues.
- S3 (neuve) : 300 mots, entièrement de la matière neuve, contre 144 mots d'une section sans
  delta propre à la place.
- S4 : 168 vers 304, pour la datation de la méprise, le caractère temporel de l'ordre opposé
  terme à terme à une lecture intentionnelle, le rôle différentiel des structures ouvertes,
  spécialisées ou hiérarchiques, et la réserve qui interdit d'en tirer une recette.
- S5 (neuve) : 316 mots, entièrement neufs, contre 264 mots largement redondants.

Deux sections entières de redite (408 mots avec S3 ancienne) ont disparu. Aucun passage ajouté
n'est de l'expansion rhétorique : chaque ajout se rattache à une proposition qui n'existait pas
dans la version antérieure. Le gain est un gain de matière.

SECTIONS SUPPRIMÉES ET SECTIONS NEUVES

Correction de comptage : trois sections anciennes disparaissent, pas deux. S3 « Une solution qui
précède son problème », S5 « Un service et une panne » et S6 « Qui a décidé, dans ce cas ? ».
Deux sont créées : « Ce qu'il advient des problèmes » et « Un modèle, pas le modèle ». Le texte
passe de six à cinq sections, de onze à quatorze paragraphes lecteurs.

Rien de solide n'est perdu avec les supprimées, et j'ai vérifié les transferts un par un :
- l'unique apport propre de l'ancienne S3, la durée d'attente d'une solution, est dans S2.P1
  (« peut attendre son heure pendant des mois sans que personne ne s'y oppose ni ne s'en
  saisisse ») ;
- l'unique apport de l'ancienne S6.P2, la justification donnée après coup, est dans S3.P3, et
  il y est mieux fondé : la formule des « rituals of choice » est rendue avec sa modalité
  (« sans produire de façon fiable la solution des problèmes de fond »), et la conséquence est
  marquée comme dérivation (« Si l'on suit ce raisonnement… ») là où l'ancienne version écrivait
  « c'est même une conséquence attendue de ce mécanisme », que l'audit donnait TOO_STRONG ;
- l'ancienne S5 ne portait rien à transférer : l'audit a établi qu'elle rejouait lead[0].

Les deux sections neuves sont bien construites sur de la matière du dossier jamais employée. Je
l'ai vérifié directement dans corpus/evidence/garbage-can-model/, sans passer par l'audit :
- S3 : evidence.primary-reading.json, mechanism[8] (« problems may not be resolved by decisions.
  They might flee to new choices, or simply be overlooked », CMO 2012 p. 26) et mechanism[9]
  (rituals of choice) ; evidence.reception.json pour Fioretti et Lomi §6.1 (« Only a few
  decisions solve problems. Most decisions are made by oversight ») et pour les deux rendus
  français concurrents des issues (Musselin, Friedberg, même volume de 1997). Aucun de ces
  éléments n'apparaissait dans la version antérieure.
- S5 : mechanism[11] (« The paper presented ‘A … model,’ not ‘The … model,’ » et « there is room
  for the components of human agency, but it is both bounded and contextually variable »,
  p. 23) ; Musselin 1997 p. 292 et p. 303 pour la non-équivalence, le contre-résultat verbatim
  et les techniques stabilisées ; les deux notices de 2001 pour la controverse. Aucun de ces
  éléments n'apparaissait dans la version antérieure.

Réciproquement, aucune matière interdite n'est entrée : le chapitre de Lomi et Harrison, sur
lequel le dossier est en conflit interne, n'est employé nulle part ; le recueil de 1976 n'est pas
mentionné dans le texte lecteur ; le pointeur de Gibson vers la page 1 de 1972 n'y figure pas ;
les deux articles de 2001 ne servent qu'au fait du débat et aux formules de leurs résumés
d'auteur, que j'ai retrouvées dans evidence.reception.json (« a fundamental overhaul is
required », « alien to the spirit of not only our work »).

LA CONTRADICTION INTERNE DE L'EXEMPLE

Levée, et non déplacée. Les deux paragraphes qui se contredisaient sont supprimés en entier.
Vérifications faites sur le texte courant : « messagerie » 0 occurrence ; « panne » une seule
occurrence, dans la liste générique des problèmes de S2.P1 (« plaintes, pannes, obligations
nouvelles »), qui n'est pas un exemple et n'engage aucun fait sur un cas ; un seul exemple
inventé subsiste dans tout le texte, celui du lead, annoncé par « Imaginons » et redoublé par
« La scène est inventée ». Aucune assertion ultérieure ne vient contredire cet exemple : rien
n'affirme plus tard qu'il y avait ou n'y avait pas de problème ce jour-là. La contradiction ne
réapparaît nulle part ailleurs sous une autre forme.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     Les trois fragilités du CLAIM MAP de l'audit sont
                                               traitées : S1.P1 n'érige plus le cadre en
                                               condition nécessaire (part du terrain observé,
                                               sans clause de nécessité) ; la glose « point par
                                               point » est remplacée par la formule du support
                                               avec sa modalité ; la glose sur l'idéal des
                                               Lumières est supprimée. Modalités d'auteur
                                               rétablies et vérifiées sur le dossier : « ambigus
                                               et disputés », « occasionnellement, difficilement
                                               et non sans hésitation », « ni assez précises ni
                                               assez partagées », « on peut voir des
                                               configurations… favoriser de façon différenciée »,
                                               « en partie leur coprésence ». `limits`[3] ancien,
                                               qui déclarait absente une matière lue
                                               intégralement, est remplacé par l'état d'accès
                                               réel couche par couche. 76/76 au gate. Je n'ai
                                               trouvé aucune fragilité que le fact-check aurait
                                               ratée.
progressivité pédagogique      2/4     4/4     Cinq paliers, chacun explicable en une phrase et
                                               reposant sur le précédent : conditions (S1),
                                               mécanisme de rencontre et nom (S2), issues (S3),
                                               ordre qui régit ces rencontres et leviers (S4),
                                               portée revendiquée et objections (S5). Aucun saut :
                                               « anarchie organisée » arrive après ses propriétés,
                                               la citation de 2012 arrive après que le lecteur a
                                               de quoi conclure au chaos, Musselin arrive après
                                               que la portée revendiquée a été posée. Le texte
                                               finit à son point haut, là où l'ancien redescendait
                                               au niveau du lead sur ses deux dernières sections
                                               et rouvrait le titre-question de l'accroche.
densité / non-redondance       1/4     4/4     Quatorze paragraphes, delta nommable pour chacun,
                                               test refait un par un sans m'appuyer sur rewrite.md.
                                               Les quatre paragraphes sans delta de la version
                                               antérieure (S3.P1, S3.P2, S5.P1, S6.P1) ont
                                               disparu, et avec eux la séquence de trois deltas
                                               identiques. Aucune séquence de trois paragraphes
                                               substantiellement identique ; aucune section dont
                                               le rôle principal est de répéter une section
                                               antérieure. Réserve unique : la proposition de
                                               coprésence revient en lead[0], lead[1], S1.P2 et
                                               S4.P2, à chaque fois avec un ajout (intuition,
                                               inversion de séquence, arrivée exogène, nature
                                               temporelle de l'ordre), et jamais sur deux
                                               paragraphes consécutifs. C'est un écho, pas une
                                               redite ; il n'atteint pas le seuil du protocole.
clarté                         3/4     3/4     Le seul défaut de clarté que l'audit retenait, la
                                               contradiction sur la panne, est supprimé. Trois
                                               frictions neuves en sens inverse : « oversight »
                                               reste en anglais sans glose (choix assumé et
                                               justifié, aucun support ne définit le mot ; le
                                               lecteur reçoit en compensation, dans le même
                                               paragraphe, deux séries françaises attestées),
                                               « les accès d'intérêt » rend « bursts of interest »
                                               de façon très littérale, et la prose modalisée de
                                               S1.P1 demande plus d'effort que l'ancienne. Bilan
                                               net positif mais pas spectaculaire : je ne monte
                                               pas la note, je constate qu'elle ne baisse pas.
profondeur explicative         2/4     4/4     Le lecteur sort désormais en sachant ce que le
                                               processus produit (résolution comme issue parmi
                                               d'autres, fuite vers une autre occasion, problème
                                               négligé), dans quelles proportions selon ceux qui
                                               ont repris le calcul, de quel ordre il s'agit
                                               (temporel, opposé à une lecture intentionnelle ou
                                               conséquentielle), et ce qui module les rencontres
                                               (configurations ouvertes, spécialisées,
                                               hiérarchiques). Les quatre mécanismes que l'audit
                                               signalait disponibles et inemployés sont employés.
valeur des exemples            1/4     3/4     Un seul exemple subsiste, celui du lead, et il
                                               fait son travail : il donne l'intuition avant tout
                                               vocabulaire. Le doublon qui redémontrait la même
                                               chose avec un autre décor est parti. Je ne mets pas
                                               4 : le texte a aussi perdu la phrase des trois
                                               milieux (association de bénévoles, service,
                                               administration) où le lecteur pouvait se
                                               reconnaître, et il n'existe plus qu'un seul point
                                               d'ancrage concret pour 1 606 mots. L'absence d'un
                                               second exemple est défendable ici : aucun ne
                                               pouvait être construit sans inventer un cas.
limites / nuances              1/4     4/4     Quatre nuances utiles arrivent là où elles évitent
                                               un contresens : le refus de la lecture « hasard »
                                               (S4.P1) ; la réserve qui empêche de tirer une
                                               recette des structures (S4.P3) ; « un » modèle et
                                               non « le » modèle, avec l'agir humain borné et
                                               variable (S5.P1) ; la non-équivalence entre le
                                               cadre et le mécanisme, attribuée à qui l'énonce
                                               (S5.P2). Le contresens le plus probable du lecteur,
                                               jamais prévenu avant, l'est deux fois.
pouvoir d'ouverture            1/4     4/4     Fin sur une controverse datée, deux textes nommés
                                               publiés dans la même livraison et « qui se lisent
                                               l'un après l'autre », puis le constat des auteurs
                                               que la discussion élabore plus vite qu'elle ne
                                               converge. Tension réelle, sources nommées, aucune
                                               conclusion récapitulative, aucune liste de
                                               précautions. La formulation est du côté du lecteur
                                               (futur et présent, pas de « il faudrait pouvoir »).

défauts initiaux corrigés :
- Redondance systémique de la moitié basse du texte : supprimée à la source. Les trois
  paragraphes consécutifs au delta identique (S3.P2, S5.P1, S6.P1) n'existent plus, et les deux
  sections dont le rôle unique était de rejouer ou reformuler le lead non plus.
- Contradiction interne de l'exemple : levée par suppression des deux paragraphes, non déplacée
  ailleurs (vérifié mot par mot sur le texte courant).
- Absence de tout traitement de ce que le processus produit : comblée par une section entière,
  sur de la matière du dossier jamais employée.
- Absence de distinction entre le cadre et le mécanisme, et pente inverse de S1.P1 : les deux
  sont corrigées, la seconde par réécriture du paragraphe, la première par un développement
  explicite attribué à qui l'énonce.
- Sous-emploi de la matière à 1 202 mots : le texte lecteur entre dans la fourchette cible et
  chaque mot ajouté est adossé à une proposition nouvelle.
- `limits`[3] déclarant une lacune critique inexistante : remplacé par l'état d'accès réel, et
  la matière critique ainsi rendue visible est effectivement employée dans S5.

régressions détectées :
- Le lecteur n'apprend plus ce que l'image de la poubelle figure. La phrase qui le disait a été
  retirée en boucle 1 sur un verdict UNSUPPORTED du gate (le contenu de l'image est celui de
  l'article de 1972, `metadata-only`). Le paragraphe rattrape l'essentiel en disant sur quoi
  l'étiquette a été posée, mais le titre de la notion reste à demi expliqué. C'est une perte
  imposée par le régime documentaire, pas une faiblesse de rédaction, et un reviewer ne peut
  pas exiger la réinstallation d'une affirmation que le gate a refusée.
- Deux phrases d'ancrage dans le monde du lecteur ont disparu (« Ce genre de scène est banal… »,
  retirée sur verdict TOO_STRONG, et la phrase des trois milieux). Le texte est plus abstrait
  qu'avant, et c'est la seule contrepartie réelle de la montée en profondeur.
- L'implication « deux organisations identiquement dotées peuvent choisir différemment », vive
  et formellement régulière, a été retirée alors que l'audit ne la donnait que pour un signal.
  Le paragraphe neuf sur les structures fait le même travail avec un appui, donc le solde reste
  positif, mais c'est une suppression discrétionnaire et non une obligation.
- Aucune régression conceptuelle, aucune perte de fait solide, aucune remontée de `limits` dans
  le texte lecteur : les nuances visibles sont des nuances conceptuelles sourcées, jamais le
  registre des lacunes, et aucun titre ne ressemble à « Ce que les sources ne permettent pas
  d'établir ».

raison de la décision : le gate est valide sur le SHA exact du fichier courant, et la version
antérieure reçue est bien celle que l'audit a examinée. La comparaison montre une amélioration
nette sur six axes sur huit, aucune baisse sur les deux autres, et la suppression effective de
tous les défauts majeurs du diagnostic, au premier rang desquels les deux qui interdisaient PASS :
la séquence de trois paragraphes au delta identique et la contradiction interne de l'exemple. La
croissance du texte n'est pas une croissance de longueur : le texte lecteur gagne 404 mots et
huit propositions substantielles tirées d'une matière intégralement lue et jamais employée, après
avoir perdu 408 mots de redite pure. Les deux sections neuves reposent sur des supports que j'ai
retrouvés moi-même dans le dossier, les sections supprimées n'emportent rien de solide, et les
deux seuls appauvrissements que je relève, l'image de la poubelle et l'ancrage concret, sont la
contrepartie de corrections que le gate imposait. La déviation de volume de `limits` et l'anglais
non glosé d'« oversight » sont des réserves à porter au prochain cycle, pas des motifs de rejet.
ACCEPT.
