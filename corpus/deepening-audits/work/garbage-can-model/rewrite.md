concept : garbage-can-model
mode    : REWRITE, puis FACTCHECK_FIX (boucle 1)
date    : 2026-09-21

Les sections 1 à 5 documentent la réécriture initiale. La section 6 documente la correction
appliquée après le `FACTCHECK_FAIL` du gate déterministe sur cette réécriture ; les chiffres de
volume donnés plus haut sont ceux d'avant correction.

Matière relue avant d'écrire : corpus/deepenings/PROTOCOLE.md, AUDIT_PROTOCOL.md,
FACTCHECK_PROTOCOL.md ; corpus/deepenings/garbage-can-model.json (version auditée) ;
corpus/validated/garbage-can-model.json ; le répertoire corpus/evidence/garbage-can-model/
listé à la main, deux fichiers hors scouting.json (evidence.primary-reading.json,
evidence.reception.json), lus intégralement ; l'entrée garbage-can-model de
src/content/generated/concepts.generated.ts ; l'audit détaillé
corpus/deepening-audits/work/garbage-can-model/audit.md. Aucune recherche web.

Volume : 1 878 mots au total selon le contrôle, dont 1 620 de texte lecteur et 258 de `limits`
(ancienne version : 1 202 mots lecteur, ~200 de `limits`). Cinq sections au lieu de six,
quinze paragraphes lecteurs au lieu de onze.

## 1. Ce qui a été supprimé, et pourquoi

- **S3 « Une solution qui précède son problème » (deux paragraphes), supprimée.** L'audit
  établissait qu'elle reposait le renversement de séquence déjà acquis en lead[1], presque
  phrase pour phrase. Son unique apport propre, la durée d'attente d'une solution, a migré
  dans une proposition de S2.P1 (« peut attendre son heure pendant des mois sans que personne
  ne s'y oppose ni ne s'en saisisse »).
- **S5 « Un service et une panne » (un paragraphe), supprimée.** Section dont le rôle unique
  était de rejouer lead[0] avec un autre décor, et qui contredisait S6.P1 sur l'existence d'un
  problème de messagerie le jour de la réunion. La contradiction interne disparaît avec elle.
  Aucun second exemple ne l'a remplacée : le matériau ne permettait pas d'en construire un qui
  démontre autre chose que lead[0] sans inventer un cas.
- **S6.P1 « Qui a décidé, dans ce cas ? » (premier paragraphe), supprimé**, ainsi que le titre
  de section qui reprenait l'accroche de la carte. Il renommait la coprésence déjà établie au
  lead.
- **Dernière phrase de S2.P2 supprimée** (« Rien n'assure que la solution retenue soit la mieux
  adaptée… elle est seulement celle qui s'est trouvée à proximité au bon moment »), redite
  exacte de la proposition centrale du lead.
- **Glose « l'idéal que la raison des Lumières avait attaché à la décision » supprimée.** La
  citation de 2012 dit que l'ordre est atteint autrement que celui « que glorifiaient les
  Lumières » ; elle n'attribue pas aux Lumières un idéal de décision calculée de bout en bout.
  Le nouveau S4.P2 dit la même chose sans l'attribution : « Il n'est pas celui d'un calcul mené
  du début à la fin par un décideur qui pèserait ses options avant de trancher. »
- **Implication « deux organisations confrontées aux mêmes problèmes… » supprimée.** Marquée
  comme implication donc formellement régulière, mais énoncée par aucune source ; le paragraphe
  sur les structures dit mieux, et avec appui, ce qu'elle voulait faire voir.
- **Formule « c'est même une conséquence attendue de ce mécanisme que les organisations sachent
  raconter… l'histoire d'un problème qu'elle aurait résolu point par point » supprimée.** Le
  support (CMO 2012, p. 26, « rituals of choice… satisfy expectations of human intentionality,
  understanding, and control without reliably generating solutions of substantive problems »)
  n'autorise pas le récit rétrospectif « point par point ». Remplacée par la formule du support,
  modalité comprise, suivie d'une seule phrase marquée comme dérivation (« Si l'on suit ce
  raisonnement… »).

## 2. Ce qui a été corrigé sur la fidélité

- **S1.P1 n'érige plus l'anarchie organisée en condition nécessaire.** L'ancienne formulation,
  « Il suppose une organisation où trois choses… ne le sont pas vraiment », faisait du cadre la
  condition du mécanisme, ce que le dossier signale deux fois comme litigieux
  (evidence.primary-reading.json, known_ambiguities ; evidence.reception.json, Musselin 1997,
  p. 292 et p. 303). Le paragraphe part désormais de ce que les auteurs avaient sous les yeux
  (CMO 2012, p. 21-22) et décrit, sans clause de nécessité.
- **Trois modalités rétablies là où la version auditée les avait perdues ou déplacées :**
  - « personne ne sait avec certitude pourquoi telle mesure fonctionne » devient « on sait et on
    croit certaines choses de ce qui produit quoi, mais ces croyances ne sont ni assez précises
    ni assez partagées pour rendre les décisions faciles » (CMO 2012, p. 21 : « People knew and
    believed some things… but those beliefs were not precise enough or shared enough to make
    decisions easy »). L'ancienne version retournait un énoncé positif borné en négation
    absolue ;
  - « les buts sont ambigus » devient « ambigus et disputés », et la déduction d'une ligne
    d'action garde ses trois restrictions d'origine (« occasionnellement, difficilement et non
    sans hésitation ») ;
  - le rôle des structures est rendu par « on peut voir des configurations ouvertes,
    spécialisées ou hiérarchiques favoriser de façon différenciée… » (« can be seen to enable…
    differentially »), et non par une détermination.
- **Aucune identité d'auteur n'est complétée.** Les personnes nommées le sont par leur seul
  nom et par ce que les sources établissent de leur travail : Christine Musselin « a étudié des
  universités allemandes et françaises » (titre de sa thèse de 1987 et Musselin 1997), Johan P.
  Olsen est dit « l'un des trois auteurs ». Aucune profession, aucune nationalité, aucune
  affiliation n'est ajoutée.
- **`limits`[3] de l'ancienne version, qui déclarait absente une matière critique lue
  intégralement, est remplacé.** Le nouveau `limits`[2] dit l'état d'accès réel, couche par
  couche : Musselin et Friedberg lus intégralement sur l'imprimé CURAPP (folios 291-308 et
  271-290), Fioretti et Lomi 2008 intégral mais second, Bendor/Moe/Shotts 2001 et Olsen 2001
  connus par leurs seuls résumés d'auteur. Le texte lecteur emploie désormais cette matière
  au lieu d'en déclarer le manque.
- **Le chapitre introductif de Lomi et Harrison n'est employé nulle part**, conformément à
  l'audit : le dossier est en conflit interne sur son état d'accès et aucun objet ne porte
  `consulted`.
- **Rien n'est présenté comme la lettre de 1972.** L'article fondateur reste `metadata-only` :
  aucune étiquette technique des trois issues (resolution / oversight / flight), aucun ordre
  d'exposition, aucun exemple, aucune pagination ne lui sont attribués. La restitution du calcul
  de 1972 est explicitement rendue à Fioretti et Lomi (« Ce sont eux qui parlent, non l'article
  de 1972 »). Le pointeur de Gibson 2012 vers la page 1 de 1972 n'entre pas dans le texte.

## 3. La nouvelle trajectoire, delta par paragraphe

- **lead[0]** (conservé, une incise raccourcie) : le lecteur reconnaît une scène vécue et tient
  la proposition centrale, ce qui est choisi est ce qui était disponible au bon moment.
- **lead[1]** (conservé tel quel) : trois auteurs nommés ont pris ce phénomène pour objet ; la
  séquence attendue peut être inversée.
- **S1.P1** : à quoi ressemblent les situations d'où le modèle est sorti, et quelles trois
  choses n'y sont pas assurées. Fait nouveau : le point de départ est un terrain (universités
  américaines, désignation d'un doyen, école libre danoise), pas une déduction.
- **S1.P2** : le nom « anarchie organisée », et ce que les auteurs rangent dessous : rareté de
  l'attention, concurrence entre arènes, arrivée exogène des problèmes et des solutions. Deux
  mécanismes que l'ancienne version n'avait pas (arènes concurrentes, arrivée du dehors), et
  une transition qui n'annonce pas de palier.
- **S2.P1** : quatre termes circulent, et l'occasion de choisir en est un. Ajout : la formule
  des auteurs sur la capacité de chacun à se relier à n'importe lequel des autres.
- **S2.P2** : d'où vient le nom, ce que l'image fait voir, le statut de l'étiquette (comparaison
  commode que les auteurs n'attendaient pas voir durer), et l'instabilité du rendu français
  (« corbeille à papiers », « mise au panier » dans la traduction de 1991 ; « poubelle » choisi
  contre elle). Le titre même de la notion s'en trouve éclairé.
- **S3.P1** (section nouvelle) : la résolution n'est qu'une issue parmi d'autres, un problème
  peut fuir vers une autre occasion ou être simplement négligé. C'est le résultat le plus
  contre-intuitif du modèle, absent de la version auditée.
- **S3.P2** : la part de chaque issue, d'après ceux qui ont repris le calcul, et le fait que le
  vocabulaire français des issues n'est pas stabilisé (Musselin contre Friedberg dans le même
  volume de 1997). Double delta : un ordre de grandeur, et une distinction de vocabulaire.
- **S3.P3** : ce que le processus produit malgré tout, et pourquoi l'explication donnée après
  coup ne décrit pas nécessairement le chemin réel.
- **S4.P1** (conservé, resserré) : la lecture « chaos » est récusée par les auteurs, avec la
  citation de 2012 et la manière dont ils datent la méprise.
- **S4.P2** : en quoi consiste l'ordre en question, et pourquoi il s'oppose terme à terme à une
  lecture intentionnelle ou conséquentielle.
- **S4.P3** : la question « peut-on y faire quelque chose ? », le rôle différentiel des
  structures ouvertes, spécialisées ou hiérarchiques, et la réserve qui empêche d'en tirer une
  recette (les auteurs rapportent sans y souscrire la posture qui tient ces processus pour
  pathologiques).
- **S5.P1** (section nouvelle) : « un » modèle et non « le » modèle, élargir plutôt que
  remplacer, une place pour l'agir humain mais bornée et variable selon le contexte. C'est la
  nuance qui empêche de conclure que personne ne décide jamais.
- **S5.P2** : la contre-enquête francophone, et la distinction entre le cadre et le mécanisme.
  C'est le contresens le plus probable du lecteur, et il n'était prévenu nulle part.
- **S5.P3** : la controverse datée de 2001, deux textes nommés qui se lisent l'un après l'autre,
  et le constat des auteurs sur une discussion qui élabore plus vite qu'elle ne converge. Le
  texte se termine sur une tension et des textes à ouvrir, non sur un résumé.

Aucune section ne reprend le rôle d'une section antérieure : S1 pose les conditions, S2 le
mécanisme de rencontre, S3 ses issues, S4 l'ordre qui le régit et ses leviers, S5 sa portée
revendiquée et ce qu'on lui oppose. Aucune séquence de paragraphes ne porte deux fois le même
delta ; la coprésence n'est démontrée qu'une fois, au lead, et jamais re-démontrée ensuite.

## 4. Contrôles

1. Delta formulé pour chacun des quinze paragraphes lecteurs (§3 ci-dessus). Aucun paragraphe
   sans delta n'a été conservé.
2. Aucune section ne répète principalement une section précédente.
3. Frontières documentaires : rien n'est attribué à l'article de 1972 ; le recueil de 1976 n'est
   pas mentionné dans le texte lecteur ; les deux articles de 2001 ne servent qu'au fait du
   débat et aux formules de leurs résumés, jamais à l'argumentation détaillée ni à la reprise du
   code ; Fioretti et Lomi sont donnés comme source seconde dans la phrase même qui les emploie.
4. Aucun contenu de `limits` n'est remonté en bloc visible. Le texte lecteur est `lead` +
   `sections` ; les nuances qui y figurent (non-équivalence, portée revendiquée, refus de la
   lecture chaos) sont des nuances conceptuelles sourcées, pas le registre des lacunes.
5. Citations : cinq passages entre guillemets de cinq mots ou plus, tous retrouvés mot pour mot
   par le contrôle (citation de 2012 de l'enregistrement validé ; « dans les universités, la
   prise de décision est beaucoup plus structurée et régulée que ne le suggèrent les travaux de
   Cohen, March et Olsen » ; « par résolution, survol ou glissement » ; « par inattention, par
   déplacement et par résolution des problèmes »). Aucun avertissement de citation absente.
6. Typographie : aucun tiret cadratin, apostrophe typographique partout, guillemets français
   avec espaces fines insécables U+202F (22 occurrences vérifiées), titres tous sous 60
   caractères et nommant leur sujet.
7. `npm run corpus:deepen -- --check --only=garbage-can-model` : PASS (1 878 mots, rien
   projeté).

## 5. Ce qui reste pour la suite

Le texte a changé : le SHA de l'approfondissement est invalidé et tout fact-check antérieur
avec lui. L'orchestrateur doit reprendre à `PREPARE`. Aucun support `SUP-…` n'a été fabriqué,
aucun artefact de fact-check n'a été touché, et aucune validation n'est prononcée ici.

## 6. Boucle de correction 1 — FACTCHECK_FIX

Gate lu : `factcheck-gate.json` (verdict `FACTCHECK_FAIL`, candidate_sha256
`f22872ee…8dfa4e58`, 66 claims, 64 soutenus, 2 en échec, aucune erreur structurelle). Motifs
détaillés relus dans `verification.json` ; localisation exacte prise dans `claim-map.json`.
Supports incriminés relus dans `factcheck-pack.json` pour vérifier ce qu'ils portent
réellement. Aucune recherche, aucun support ajouté, aucun artefact de fact-check modifié.

Les 64 claims soutenus n'ont pas été touchés. Deux phrases ont été modifiées, dans deux
paragraphes, pour un delta net de neuf mots.

### C001 — `lead[0]`, offsets 549-625 — TOO_STRONG — opération : **retirer**

Texte fautif : « Ce genre de scène est banal dans les organisations où l'on décide en
réunion ». Le mapper lui avait rattaché `SUP-8d9bfef85e89ca3c`, c'est-à-dire le pointeur de
Gibson 2012 vers la p. 1 de l'article de 1972. Ce support est doublement inutilisable ici :
la fiche de lecture le déclare non vérifié en toutes lettres (« Si ce pointeur est exact »,
« c'est un tiers qui parle »), et il porte de toute façon sur la présence intermittente des
propriétés de l'anarchie organisée, non sur la fréquence de la scène décrite. §2 de ce
compte rendu notait que ce pointeur n'entrait pas dans le texte : c'était exact au sens de
l'attribution explicite, mais la généralité empirique de la phrase n'avait en réalité aucun
appui dans le dossier.

Aucun bornage honnête n'était possible : réduire à « arrive parfois » laisserait une
généralité empirique non couverte, et atténuer un pointeur non vérifié ne le rend pas
utilisable. La proposition a donc été retirée, sans être remplacée par une autre affirmation
sur le monde. La phrase s'ouvre désormais sur un constat interne au texte : « La scène est
inventée, mais elle met en évidence le mécanisme dont il sera question ici : … ». Le
segment suivant, C002 (« ce qui finit par être choisi n'est pas toujours… »), qui portait
déjà la proposition centrale du lead et que le gate soutient, est conservé mot pour mot. Le
lead perd donc une caution de fréquence qu'il n'avait pas le droit d'invoquer, et rien
d'autre : son delta d'apprentissage est intact.

### C022 — `sections[1].paragraphs[1]`, offsets 41-262 — UNSUPPORTED — opération : **borner**

Texte fautif : « Une occasion de choisir fonctionne comme une poubelle où problèmes et
solutions sont déversés au fur et à mesure, par les participants présents à cet instant, et
ce qui en sortira dépendra de ce qui s'y trouvait rassemblé. » C'est le contenu de l'image
de 1972, article `metadata-only` dans ce dossier : sa célébrité ne le rend pas établi, et
aucun support résolu ne décrit ce que la poubelle représente.

Ce que les supports portent effectivement, le gate le dit lui-même et
`SUP-eecc76f28b40892f` le cite : « The label ‘garbage can' entered the discussion as a handy
simile while we discussed observations we had all made repeatedly, that somewhat bizarre
combinations of issues were often found to be at stake in actual organizational choices »
(CMO 2012, p. 22). La phrase a donc été ramenée à cette portée, en fusionnant avec la phrase
suivante (C023, soutenue) qui rendait déjà la première moitié du même passage — fusion
nécessaire pour ne pas laisser deux phrases consécutives rendre le même matériau :

« L'étiquette, racontent les auteurs, leur est venue en cours de discussion comme une
comparaison commode pour une observation qu'ils avaient tous faite et refaite : des
combinaisons d'enjeux passablement bizarres se trouvaient souvent en jeu dans les choix
réellement opérés par les organisations. Ils ne s'attendaient pas à la voir durer. »

Le texte dit maintenant ce que le simile a servi à nommer, et non ce que la poubelle est
censée figurer. Rien n'est ajouté qui ne soit dans le support déjà rattaché au claim. La
phrase d'ouverture du paragraphe (C021, « C'est de ce croisement que vient le nom. ») et la
suite sur l'instabilité du rendu français (C024-C026) sont inchangées ; le référent du
« nom » reste porté par la fin du paragraphe (« corbeille à papiers », « mise au panier »,
« poubelle »). Le paragraphe garde son delta — d'où vient l'étiquette, sur quoi elle a été
posée, comment le français l'a durcie — et perd seulement une image que le dossier ne
permet pas d'affirmer.

### Contrôles de la boucle

- Aucune des deux corrections n'introduit d'affirmation nouvelle sur le monde ; la première
  retire, la seconde ramène à la lettre d'un support déjà rattaché au claim.
- Aucun autre paragraphe ne reprenait l'image de la poubelle à son compte : vérifié sur les
  quatre paragraphes contenant le mot. La citation de 2012 en S4.P1 (« La poubelle, en ces
  termes, dépeint un monde ordonné… ») vient de la source ouverte et est inchangée.
- Aucun paragraphe ne perd son delta ni ne se met à doubler un paragraphe voisin ; la fusion
  C022/C023 supprime au contraire un recouvrement.
- `limits` n'est pas modifié et rien n'en est remonté dans le texte lecteur.
- `npm run corpus:deepen -- --check --only=garbage-can-model` : PASS (1 869 mots, rien
  projeté ; 1 878 avant correction).
- Le diff se limite à deux lignes de `corpus/deepenings/garbage-can-model.json`.

Le SHA de l'approfondissement est de nouveau invalidé : l'orchestrateur doit reprendre à
`PREPARE` puis relancer le cycle de fact-check complet. Aucune validation, aucun
`FACTCHECK_PASS` n'est prononcé ici.

---

## Boucle de correction 2 — `FACTCHECK_FIX` (gate du second tour)

Entrée : `factcheck-gate.json` du second tour — `FACTCHECK_FAIL`, 71 claims, 69 soutenus,
2 en échec, aucune erreur structurelle. Les deux claims fautifs du premier tour (C002bis /
lead et C022) ne réapparaissent pas : les corrections de la boucle 1 tiennent. Les deux
nouveaux échecs, C035 et C050, sont tous deux `TOO_STRONG` et relèvent de la même espèce que
les précédents — **une modalité de l'auteur qui disparaît en passant en français**.

Seconde et dernière boucle autorisée. Le périmètre a donc été tenu strictement aux deux
spans désignés : aucun autre mot du fichier n'est touché.

### C050 — `sections[3].paragraphs[1]`, offsets 143-220 — TOO_STRONG — opération : **borner**

Texte fautif : « ce qui relie un problème à une solution est leur coprésence ».

Motif du gate : les deux supports résolus sur ce claim — `SUP-6707febbb6c5d80f`
(« temporal order / temporal sorting ») et `SUP-e888b90d7b1c938c` (mechanism[5], la citation
de CMO 2012 p. 26 sur le `temporal understanding of events`) — n'énoncent pas ce qui relie un
problème à une solution. Ils établissent le principe d'ordonnancement temporel et le cadrage
de la décision, pas l'identité du lien. La seule formulation des auteurs sur ce point précis
se trouve ailleurs dans le dossier, dans `mechanism[4]` de
`evidence.primary-reading.json` : « L'appariement se fait *partly by their simultaneous
arrivals* » (CMO 2012, p. 22), repris verbatim dans
`$.evidence.best_quotes._alternatives_verbatim_meme_source` : « where problems and solutions
arrive at times exogenously determined and **are linked partly by their simultaneous
arrivals** ».

Le `partly` est un élément à reporter, non une précaution de style : il ouvre la place, chez
les auteurs eux-mêmes, aux autres déterminants qu'ils énumèrent par ailleurs — la structure
d'accessibilité des choix (mechanism[7]), la rareté de l'attention, la concurrence entre
arènes. Une identification exclusive (« est leur coprésence ») ferme cette place et fait dire
au modèle que la simultanéité épuise le lien.

Correction, insertion de deux mots à l'intérieur du span :

> Il est temporel : ce qui relie un problème à une solution est **en partie** leur
> coprésence, et la façon dont une décision se trouve cadrée peut être déterminée, dans une
> mesure considérable, par le déroulement dans le temps de la participation et de l'attention.

Le bornage rend exactement le `partly` des auteurs, dans les mêmes termes que ceux déjà
employés — et déjà soutenus — en `sections[0].paragraphs[1]` : « les problèmes et les
solutions arrivent à des moments fixés du dehors et se trouvent **reliés en partie** par la
simultanéité de leur arrivée ». Le texte devient donc cohérent avec lui-même sur ce point :
la section 3 ne renforce plus ce que la section 0 avait correctement hedgé.

Aucune affirmation nouvelle n'est introduite : « en partie » ne nomme pas les autres
déterminants, il se borne à ne plus les exclure. Le delta du paragraphe — l'ordre dont
parlent les auteurs est temporel et non conséquentiel — est intact, et la seconde moitié de
la phrase, qui porte ce delta et que le gate soutient, est inchangée mot pour mot.

### C035 — `sections[2].paragraphs[1]`, offsets 167-330 — TOO_STRONG — opération : **retirer**

Texte fautif : « résument ainsi la conclusion du calcul de 1972 : peu de décisions résolvent
des problèmes, et la plupart se font par oversight, **sans que le problème ait été traité** ».

Motif du gate : les trois supports rattachés (`SUP-87c4e8bff7590c12`,
`SUP-db77e52815f18fe9`, `SUP-7f75bdef6ae54267`, tous issus de
`evidence.reception.json`) n'établissent que la phrase de Fioretti & Lomi, §6.1 : « Only a few
decisions solve problems. Most decisions are made by oversight ». Aucun support résolu ne
définit `oversight`. La glose finale ajoute donc, **à l'intérieur d'un résumé explicitement
attribué à Fioretti & Lomi**, un contenu que ces auteurs n'écrivent pas à cet endroit — ce
qui est le défaut le plus coûteux de tous, puisque l'attribution en fait porter le poids à une
source nommée.

Sur le fond, la glose franchit aussi un pas logique : « non résolu » n'équivaut pas à « non
traité ». Une décision peut se prendre sur une occasion de choix où le problème a été posé,
discuté, puis dépassé par l'issue, sans être résolu pour autant. Et le dossier signale par
ailleurs que la définition technique de ces étiquettes n'a pas pu être vérifiée : le mot
`oversight` ne peut pas être glosé à partir de ce qui est ouvert ici.

Correction, suppression de la glose seule :

> Guido Fioretti et Alessandro Lomi, qui ont proposé en 2008 une représentation du modèle
> sous forme de simulation à base d'agents, résument ainsi la conclusion du calcul de 1972 :
> peu de décisions résolvent des problèmes, et la plupart se font par oversight.

Quand un mot ne peut pas être glosé dans les limites du dossier, il vaut mieux ne pas le
gloser que de le gloser au-delà des supports. Le lecteur n'est pas laissé sans appui pour
autant, et ce sans qu'aucun mot soit ajouté : la fin du même paragraphe, inchangée et
soutenue, donne les rendus français attestés de la série d'issues — Musselin, « par
résolution, survol ou glissement » ; Friedberg, « par inattention, par déplacement et par
résolution des problèmes ». Le terme anglais reste ainsi adossé à deux traductions publiées,
présentées pour ce qu'elles sont — un vocabulaire non fixé — au lieu d'une définition que
personne dans le dossier ne fournit.

Le delta du paragraphe est conservé entier : il portait la **part** de chaque issue et
l'inversion de l'ordre de grandeur attendu, non la définition d'`oversight`. La phrase
suivante, qui maintient l'attribution (« Ce sont eux qui parlent, non l'article de 1972 »),
est intacte.

### Contrôles de la boucle 2

- Une seule opération autorisée par claim : C050 borné, C035 retiré. Aucune réattribution,
  aucun marquage d'interprétation n'a été nécessaire.
- Aucune affirmation nouvelle sur le monde n'est introduite. C050 ne fait que reporter le
  `partly` des auteurs ; C035 ne fait que soustraire.
- Aucun support `SUP-...` n'a été inventé ; aucun artefact de fact-check n'a été édité à la
  main.
- Périmètre : `git diff --stat` donne `1 file changed, 2 insertions(+), 2 deletions(-)` sur
  `corpus/deepenings/garbage-can-model.json`. Les 69 claims soutenus hors de ces deux spans
  sont littéralement inchangés.
- Deltas : relecture des quatorze paragraphes. Aucun paragraphe ne perd son delta, aucun ne
  se met à doubler un voisin, aucune section ne reprend principalement une section
  précédente. Les deux corrections n'affectent pas la progression : elles retirent une glose
  et ajoutent un bornage.
- Frontières documentaires : vérifié qu'aucune autre phrase du texte ne glose `oversight`
  ni ne réaffirme la coprésence comme lien exclusif — le seul autre passage sur la
  simultanéité, en `sections[0].paragraphs[1]`, était déjà borné.
- `limits` n'est pas modifié et rien n'en est remonté comme bloc visible ; le texte lecteur
  reste `lead` + `sections`.
- `npm run corpus:deepen -- --check --only=garbage-can-model` : **PASS** (1 864 mots, rien
  projeté ; 1 869 avant correction).

Le SHA du fichier a changé (`cb685513886b345c93186b60c295999bcc5da5c708cef1a86e2cca455700aebb`,
contre `ed9a4e2ccaa34de7c62389816e5116a59ccd1ddb893cd9f0a0f85230443aef2e` dans le pack du
second tour) : l'ancien fact-check est invalidé de droit. L'orchestrateur doit reprendre à
`PREPARE`, reconstruire le pack, puis relancer mapping, entailment et gate. Aucune validation
n'est prononcée ici : ni `ACCEPT`, ni `FACTCHECK_PASS`.
