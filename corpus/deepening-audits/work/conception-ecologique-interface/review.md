concept : conception-ecologique-interface
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 23d0c50fc6de0d31b77d85a431a3d7e596eca9be

GATE
- sha256 actuel de corpus/deepenings/conception-ecologique-interface.json :
  a9fa08c10aeefb43e4a2bfcf7a1855429e7a1a5bc5cd1a2449a9455756f791f9
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 52 claims / 52 supported,
  0 failed, mapping_incomplete [], structural_errors [].
- blob de référence : `git cat-file -t` = blob, JSON d'approfondissement, conceptId
  conception-ecologique-interface. Base valide.
- Boucles : loop1 FAIL (C001, C006, C021, C026, C029), loop2 FAIL (C004) ; les six points ont été
  modalisés ou retirés dans la version examinée (vignette marquée « Imaginons », « tend à », « risque de »,
  « accident » retiré, « inventaire primaire »).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          3/4     4/4     extensions non portées retirées (S1.P2 « pas la difficulté de la tâche », S3.P2 « aucun moyen de le signaler », S5.P1 « c'est cette dualité ») ; lectures marquées (S1.P2 « On peut se le représenter », S3.P2 « On peut y reconnaître », S4.P1 « On peut comprendre ») ; gate 52/52
progressivité pédagogique      3/4     4/4     le but est énoncé (S2.P1, citation de quotation.text) avant d'être exploité ; S4.P2 renvoie explicitement au « second volet du but » ; S1.P1 raccroche chaque niveau à la vignette du lead
densité / non-redondance       2/4     3/4     doublons S2.P3/S4.P3, S1.P3/S4.P1, S3.P2/S3.P3 supprimés ; gloses de S1.P1 redondantes avec lead[0] retirées ; reste une légère reprise : S2.P2 phrase 1 reformule le but que S2.P1 vient de citer
clarté                         3/4     3/4     gain : le but n'est plus présupposé ; perte légère : « inventaire primaire » et « pressuriseur » (S3.P1) ne sont plus glosés pour le non-spécialiste, et S1.P3 nomme la hiérarchie d'abstraction dans une phrase longue
profondeur explicative         3/4     3/4     ajouts réels : signal/signe/symbole et hiérarchie haut/milieu/bas (S1), déduction prémisses -> but (S2), principe 1 relié aux signaux (S4.P1) ; pertes limitées à des développements non sourcés (repère fabriqué « dans son coin », mécanisme circulaire de la dualité) ; hiérarchie d'abstraction toujours nommée sans structure, faute de matière
valeur des exemples            3/4     3/4     vignette du conducteur conservée et désormais mise en correspondance terme à terme avec les trois niveaux (S1.P1) ; TMI recentré sur le niveau des règles (S3.P2), mais moins parlant sans le mot « accident » ni glose du circuit primaire
limites / nuances              3/4     4/4     « ne pas forcer » et non « interdire », second volet contre l'éloge du réflexe (S2.P2) ; deuxième principe != cadre entier (S4.P2) ; « l'une des raisons » (S5.P1) ; antériorité du terme (S5.P2)
pouvoir d’ouverture            2/4     3/4     la fin « La formulation théorique, donc, et rien de plus » est remplacée par S5.P3 : 1989 comme lieu de première proposition (« il faudra le lire »), 1983 dont le titre nomme les trois lectures de S1.P2 ; ouverture par désignation, sans contenu

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : trois façons d'agir sur une même machine (vignette marquée).
- lead[1] : le dilemme du concepteur et le choix des auteurs de partir de l'événement non anticipé.
- S1.P1 : les noms des trois niveaux, leur correspondance avec la vignette, leur ordre hiérarchique.
- S1.P2 : le mécanisme : l'interprétation (signal, signe, symbole) engage le niveau, donc la présentation pèse.
- S1.P3 : statut d'axiome des deux constructions ; nom et fonction de la hiérarchie d'abstraction ; 1983.
- S2.P1 : les deux constats et le but qui en est déduit, cité.
- S2.P2 : les deux volets et ce qu'ils interdisent de lire (« ne pas forcer » != interdire ; pas un éloge du réflexe).
- S3.P1 : le cas TMI : indice valide sous conditions, conditions ignorées.
- S3.P2 : lecture comme défaillance du niveau des règles ; prescription d'information perceptive des contraintes.
- S4.P1 : les trois principes, chacun relié à son niveau et à sa lecture de l'information.
- S4.P2 : le deuxième principe n'est pas le cadre ; le second volet du but tient les trois sur une interface.
- S5.P1 : la raison donnée du mot « écologique » (dualité opérateur/environnement de travail, l'une des raisons).
- S5.P2 : antériorité de l'expression (1988, 1989) ; revendication limitée à la formulation.
- S5.P3 : où mène la suite : 1989 et 1983, désignés sans contenu.
Aucune séquence de trois paragraphes au delta substantiellement identique ; aucune section principalement
redondante.

défauts initiaux corrigés :
- Défaut majeur : le but du cadre, présupposé par l'ancienne S2 (« l'énoncé du but », « les deux moitiés »), est
  maintenant énoncé et cité (S2.P1) puis analysé en deux volets (S2.P2).
- Redondances S2.P3/S4.P3, S1.P3/S4.P1, S3.P2/S3.P3 supprimées par fusion et retrait.
- Extensions non marquées ou durcies retirées ou marquées (S1.P2, S2.P2, S3.P2, S5.P1).
- Fin fermante remplacée par une ouverture vers 1989 et 1983.
- Titre de S4 renommé d'après son objet (« Un principe pour chaque niveau »), titres de S2 et S3 rendus fidèles.

régressions détectées :
- Mineure, clarté : S3.P1 perd la glose « quantité d'eau présente dans le circuit primaire » et le mot « accident » ;
  « inventaire primaire » et « pressuriseur » restent techniques pour un lecteur non spécialiste. Retrait imposé par le
  gate (C029) et par l'audit (glose non portée) : coût réel mais faible, l'argument (indice valide hors de ses
  conditions) reste intelligible.
- Mineure, lead[1] : « il oblige à réfléchir même lorsque la situation ne le demande pas » a disparu, alors qu'elle
  préparait intuitivement le premier volet du but ; le premier volet est désormais pleinement expliqué en S2, la perte
  ne crée pas de saut.
- Mineure, densité : S2.P2 phrase 1 redit le but qui vient d'être cité, mais le paragraphe produit ensuite un delta propre.
- Volume lecteur 1 267 -> 1 200 mots : sous la cible de 1 300, au-dessus du plancher. La baisse provient de retraits de
  doublons et de développements non sourcés, non d'un simple raccourcissement : la profondeur n'est pas dégradée.
- Aucune remontée du champ interne `limits` dans lead + sections ; aucune mention du dispositif ; aucun tiret cadratin.

raison de la décision : FACTCHECK_PASS sur le SHA exact. Le défaut majeur du diagnostic (but jamais énoncé au cœur du
concept) est supprimé, les trois paires redondantes ont disparu, la progression lead -> niveaux et mécanisme -> but
déduit -> cas -> principes -> nom et filiation est désormais explicable section par section et ses renvois internes
sont réels. Les pertes (gloses TMI, une phrase du lead) sont mineures et pour l'essentiel imposées par la fidélité.
Amélioration nette et sûre : ACCEPT.
