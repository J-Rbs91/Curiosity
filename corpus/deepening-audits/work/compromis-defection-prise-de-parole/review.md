concept : compromis-defection-prise-de-parole
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 26d948d73e5dd88520f19ce5247c135bbb2c8eb0

Gate préalable : sha256 courant de corpus/deepenings/compromis-defection-prise-de-parole.json =
ee11a53bbb11972cb6f38b3d38cb00608442ae6fbe91cf044b20de88e0f1c639, identique au candidate_sha256 de
factcheck-gate.json ; verdict FACTCHECK_PASS, 58/58 soutenus, aucune erreur de structure, aucun
mapping_incomplete. Blob de référence : type blob, JSON d'approfondissement, conceptId identique.

Volume lecteur (lead + paragraphes, décompte par espaces) : 1 364 -> 1 211 mots (-11 %). Le check
mécanique du rédacteur passe (1 422 au compteur du script). Lead : 195 -> environ 112 mots, sous
la fourchette indicative.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     pages corrigées (S3.P2 p. 666, S5.P2 p. 669) ; « finds some support » n'est plus présenté comme une conclusion postérieure ; clause « représailles » (lead[1]) et coûts individuels non sourcés (lead[0]) retirés ; définitions prises chez Freeman et non chez Hirschman, qui n'est pas lu (S1.P1) ; « nulle part où aller » retiré (S6.P1) ; Allen et Tüselmann sans filiation ni durcissement (S6.P2) ; gate 58/58
progressivité pédagogique      3/4     4/4     le chevauchement S4/S5 sur la modestie de Freeman disparaît ; S2.P3 donne la raison institutionnelle avant le test empirique (S3) ; la chaîne institution -> fait -> élimination -> indices -> limite se suit sans retour en arrière
densité / non-redondance       3/4     4/4     S4.P1 et S4.P2 fusionnés (une seule reformulation de la citation p. 666) ; ancien S5.P3 absorbé dans S5.P2 sans la répétition « elle ne dit pas qu'elle l'a établie » ; redite d'ouverture de S6.P2 supprimée. Reste mineur : S2.P2 paraphrase la citation p. 645 juste citée en S2.P1
clarté                         4/4     4/4     « grief » aligné sur la traduction de la fiche ; « monopoly routes » / « voice routes » glosés aussitôt (S3.P2) ; seuls accrocs : antécédent flou de « On peut en tirer » (S6.P1), « une autre manière de le dire » (S2.P2)
profondeur explicative         3/4     4/4     ajouts financés : pourquoi la parole exige un syndicat (pouvoir de la direction, second canal d'autorité, plans des années 1920, 99 % / 30 %, S2.P3) ; ce que fait l'« industrial jurisprudence system » (S2.P2) ; voies de monopole / voies de parole et sélection écartée (S3.P2)
valeur des exemples            3/4     3/4     la vignette du lead est désormais marquée « Imaginons » et ne pose comme fait que le coût d'embauche et de formation, mais elle perd le contraste client / salarié, ce qui l'affaiblit ; les trois indices de S5 restent distincts
limites / nuances              3/4     3/4     S6.P1 ne garde que ce qui tient (gain de cause / renoncement), marqué comme conséquence tirée ; S4.P2 garde la fragilité de la preuve par élimination sans intention prêtée à Freeman ; mais S6.P1 tient en une seule phrase
pouvoir d'ouverture            3/4     2/4     la question transportable de S6.P3 (« y a-t-il ici un endroit où dire... ») a été retirée lors de la boucle 1 (C068, C069 UNSUPPORTED) ; le texte finit sur un paragraphe d'une phrase, sans tension ; S6.P2 donne néanmoins une piste (Allen et Tüselmann 2009, What Do Unions Do?)

Delta d'apprentissage, nouvelle version :
- lead[0] : quitter son emploi coûte aussi à l'entreprise (embauche, formation).
- lead[1] : seconde issue, rester et le dire ; elle suppose un lieu et un contrepoids à l'autorité ; c'est la question de Freeman en 1980.
- S1.P1 : le couple vient de Hirschman ; ce que les deux termes veulent dire chez Freeman (démission ; syndicat et négociation).
- S1.P2 : contribution propre de Freeman et énoncé du compromis testable.
- S2.P1 : l'institution centrale est le système de griefs et d'arbitrage, pas la négociation salariale.
- S2.P2 : « alternative » ; la négociation et la jurisprudence industrielle sont des dispositifs distincts.
- S2.P3 : pourquoi il faut un syndicat, et rareté chiffrée hors syndicat.
- S3.P1 : le fait empirique et son insuffisance.
- S3.P2 : neutralisation des voies de monopole et de la sélection.
- S4.P1 : absence de mesure de la parole ; interprétation par élimination.
- S4.P2 : pourquoi une preuve par élimination est fragile.
- S5.P1 : deux indices directs.
- S5.P2 : troisième indice chiffré et qualification de Freeman.
- S6.P1 : un non-départ est ambigu.
- S6.P2 : une réception de 2009 qui plaide pour les autres réponses.
- S6.P3 : le dispositif est situé (delta mince, une phrase).
Aucune séquence de trois paragraphes au même delta ; aucune section principalement redondante.
`limits` ne remonte pas dans le texte lecteur.

défauts initiaux corrigés :
- trois localisations fausses (p. 665 -> 666 ; p. 670 -> 669 ; « finds some support » plus présenté comme conclusion postérieure) ;
- lead[1] : protection contre les représailles, non sourcée, remplacée par le contrepoids à l'autorité (dual authority channel) ;
- lead[0] : affirmations générales non sourcées retirées, vignette marquée « Imaginons » ;
- S1.P1 : définitions de Hirschman non lu remplacées par celles de Freeman ;
- S2 : mécanisme manquant (pourquoi un syndicat) ajouté avec support ; jurisprudence industrielle expliquée et dissociée du canal d'autorité ;
- redondances S4.P2/S5.P3 et S6.P1/S6.P2 supprimées ;
- S6.P1 ne présente plus comme angle mort un cas que l'article contrôle ;
- S6.P2 : Allen et Tüselmann sans « encore », sans filiation, sans durcissement ;
- « réclamation » aligné sur « grief ».

régressions détectées :
- ouverture finale appauvrie : la question transportable de l'ancien S6.P3 a disparu (retrait imposé par le gate, non financée), S6.P3 réduit à une phrase constative ;
- lead amaigri (environ 112 mots, sous la fourchette 120-200) : perte du contraste client / salarié, et le point « un départ ne dit pas son motif » n'est plus posé en ouverture, alors que S6.P1 s'y appuie ;
- volume global en baisse (-11 %) : la baisse vient surtout du retrait de passages non sourcés ou redondants, pas d'une perte de mécanisme ; la profondeur augmente par ailleurs ;
- petites maladresses : antécédent de « On peut en tirer » (S6.P1), « le dire » (S2.P2).
Aucune perte d'information solide de l'ancienne version : les éléments retirés étaient soit non soutenus, soit redondants. Aucune fragilité documentaire nouvelle repérée.

raison de la décision : FACTCHECK_PASS sur le SHA exact. La réécriture supprime tous les défauts
majeurs du diagnostic (localisations fausses, affirmations non sourcées du lead, limite de S6
contredite par l'article, réception durcie, redondances S4/S5 et S6), et elle ajoute un vrai
mécanisme financé (pourquoi la parole exige une organisation indépendante, voies de monopole contre
voies de parole). La progression est plus nette et la profondeur augmente. Les régressions
(ouverture finale et lead plus minces) sont réelles mais secondaires : elles résultent de retraits
de phrases non soutenues, et ne pèsent pas autant que le gain en fidélité, en densité et en
profondeur. ACCEPT. Pour un cycle ultérieur : rendre au texte une fin ouverte qui soit financée.
