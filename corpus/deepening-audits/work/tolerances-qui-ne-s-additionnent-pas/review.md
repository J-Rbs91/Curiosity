concept : tolerances-qui-ne-s-additionnent-pas
verdict : REJECT
factcheck_sha_match : PASS
baseline_blob_sha : 52e7fafabdb8c1e3299fd440515632731cd74963

Gate préalable : SHA-256 actuel de corpus/deepenings/tolerances-qui-ne-s-additionnent-pas.json =
6c674fb7240e957f0293fa2d337e0feac27b99eaf3b2f290465de974a685edc0, identique au candidate_sha256 de
factcheck-gate.json, verdict FACTCHECK_PASS (46/46). Blob de référence lisible, JSON
d'approfondissement, conceptId identique. Le gate n'est pas en cause : le rejet est pédagogique.

Note de traçabilité : rewrite.md décrit un état intermédiaire (1 059 mots, définition de l'écart type
« resserrée » en « typiquement », phrase « pratiquement aucune chance » encore présente). La version
évaluée est celle qui sort de la boucle 2 de correction du fact-check (1 006 mots lecteur). Les boucles
1 et 2 ont retiré, entre autres, la définition de travail de l'écart type (C022, loop1), l'explication de
la condition des trois écarts types (C027, loop1) et « à l'intérieur de laquelle on la déclare bonne »
(C002, loop1). Ces retraits ne figurent pas dans rewrite.md, et ce sont eux qui créent les régressions
ci-dessous.

Volume lecteur : 1 201 mots avant, 1 006 après (−16 %). Sous le plancher de 1 100 de PROTOCOLE §5.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     S4.P2 non financé (renversement du calcul, « le plus souvent une donnée », réglages, prix d'achat) supprimé ; titre ouvrage/chapitre distingués en lead[1] ; « fournisseur » inversé retiré du lead ; condition « m large » rétablie (S2.P1) ; « relativement » rétabli (S3.P4) ; gate 46/46.
progressivité pédagogique      3/4     3/4     Gain : condition des 3σ remontée avant l'exemple 9/3 (S3.P2 avant S3.P3) ; S4 dissoute. Perte : S3, section charnière, mobilise « écart type » sans l'avoir construit (« c'est ici que l'écart type entre en scène », puis rien) ; la condition S3.P2 (« trois écarts types de part et d'autre ») et l'exemple S3.P3 reposent sur une brique absente. Saut au sens d'AUDIT §2.
densité / non-redondance       2/4     3/4     « pas faux mais coûteux » passe de 4 occurrences à 1 (S1.P2), plus le modal en S3.P4. Redite recréée en S2 : S2.P1 et S2.P2 finissent toutes deux sur « quand les pièces sont nombreuses… très faible », et « prises au hasard » (S2.P1) anticipe l'hypothèse que S2.P2 est censée poser.
clarté                         3/4     2/4     Gain : énigme « ce mot n'est pas faux : économique » supprimée. Pertes : définition de l'écart type supprimée (ancien S3.P1 « petit quand la fabrication est serrée, grand quand elle est dispersée »), alors que tout S3 et S4 en dépendent ; jargon ajouté sans glose en S3.P3 (« l'étendue à six écarts types de l'ensemble ») ; lead[0] ne dit plus ce que signifie la plage de tolérance (« on la déclare bonne » retiré), le lecteur ne l'apprend qu'en S1.P1 en anglais puis en paraphrase. PROTOCOLE §2 (« explique immédiatement ce qu'il signifie ici ») n'est plus respecté sur le terme central.
profondeur explicative          3/4     2/4     Mécanisme racine des carrés, 9/3, coefficients de sensibilité conservés. Mais perdu sans remplacement : ce qu'est la grandeur composée (écart type), et pourquoi la condition des 3σ rend la comparaison légitime (ancien S3.P3 : « plages qui ne couvrent pas la même part de la production »), réduite à une condition énoncée sans raison. Aucun des ajouts financés de l'audit (borne de Tchebychev « plus de 1 − 1/9 » contre 0,9973, généralité des équations 82, tendance vers la normalité p. 258) n'a été fait : S4.P3 reste nominal. Le recul de longueur est obtenu uniquement par retrait.
valeur des exemples            4/4     3/4     L'exemple 9 contre 3 et la figure 87 restent, mieux placés après la condition. Mais sans définition de l'écart type, « neuf fois un » et « trois fois un » sont une arithmétique dont le lecteur non spécialiste ne sait pas ce qu'elle compte ; l'exemple perd une partie de son pouvoir explicatif.
limites / nuances              3/4     3/4     Condition des 3σ posée avant usage (gain) ; « improbable, non impossible » conservé ; « m large » rétabli. Perte : la raison de la condition a disparu ; l'appariement sélectif (financé, prescrit par l'audit) reste confiné à limits[0].
pouvoir d'ouverture            3/4     3/4     Clôture inchangée (ancienne S6 devenue S5) : conséquence p. 259, toujours en recouvrement avec la carte voisine (notes[5]) et toujours section d'un seul paragraphe ; ouverture propre au concept (normalité de la résultante) non exploitée.

Delta par paragraphe (nouvelle version)
- lead[0] : situation des neuf pièces, tolérance comme plage min/max, présupposé caché de l'addition. Net (un peu appauvri : la plage n'a plus de sens d'acceptation).
- lead[1] : qui pose la question, où (ouvrage et chapitre distingués), en quels termes, et qu'il la traite comme question d'économie. Net ; la dernière phrase est quasi tautologique (« question d'économie : ce qu'il est économique de prévoir »).
- S1.P1 : l'addition découle d'une définition par le possible (p. 253). Net.
- S1.P2 : sous cette définition la déduction est exacte ; l'objection ne porte pas sur le calcul. Net.
- S2.P1 : la coïncidence des extrêmes est « very small indeed » quand les pièces sont nombreuses et prises au hasard. Net.
- S2.P2 : hypothèse de hasard et d'indépendance. Delta réel (indépendance), mais la dernière phrase répète S2.P1 presque mot pour mot.
- S3.P1 : la formule p. 255 prend la racine de la somme des carrés des écarts types. Delta réel pour qui sait déjà ce qu'est un écart type ; nul pour le lecteur visé, qui ne l'apprend nulle part.
- S3.P2 : condition (fabrication maîtrisée, tolérance à 3σ). Delta réel, mais énoncé sans raison.
- S3.P3 : 9 contre 3, figure 87. Net.
- S3.P4 : « may be uneconomical », improbable non impossible. Net.
- S4.P1 : cas général, Taylor premier ordre. Net.
- S4.P2 : coefficients de sensibilité ; règle simple comme cas particulier. Net.
- S4.P3 : Tchebychev nommé, 0,9973 sous normalité, attribution. Delta en partie nominal (inchangé).
- S5.P1 : moyenne et écart type à exiger, p. 259. Net.
Aucune séquence de trois paragraphes au delta identique ; aucune section principalement redondante. limits non remonté dans le texte lecteur.

défauts initiaux corrigés :
- S4.P2 (mécanisme économique non financé) supprimé en entier : défaut majeur n° 1 de l'audit, effectivement corrigé.
- Redondance « pas une erreur, une dépense » ramenée de quatre occurrences à une : défaut majeur n° 2 corrigé.
- lead[1] : titre de l'ouvrage et titre du chapitre distingués, sens « fournisseur » inversé retiré, chute énigmatique supprimée : défaut majeur n° 3 corrigé.
- Condition des trois écarts types placée avant l'exemple qu'elle conditionne, et « une pièce au bord est déjà rare » retiré : défaut majeur n° 4 corrigé.
- « où l'ensemble se tiendra » remplacé par « les limites à trois écarts types de l'ensemble » ; « m large » et « relatively » rétablis.

régressions détectées :
- Définition de l'écart type supprimée (boucle 1, C022) sans remplacement. Le terme sur lequel repose tout le mécanisme (S3.P1 à S3.P4, S4.P2, S5.P1) est désormais employé sans être expliqué, contre PROTOCOLE §2. C'est la régression décisive : le lecteur non spécialiste ne peut plus comprendre la section centrale. PROTOCOLE §4 autorise une « définition de travail » ; elle devait être reformulée comme telle, pas supprimée.
- Raison de la condition des 3σ supprimée (boucle 1, C027) : la condition est désormais un postulat sans fonction explicite pour le lecteur.
- Jargon nouveau sans glose en S3.P3 : « l'étendue à six écarts types de l'ensemble ».
- Redite recréée en S2 : fin de S2.P2 identique en substance à S2.P1 (« quand les pièces sont nombreuses… très faible »).
- lead[0] appauvri : la plage de tolérance n'a plus de sens d'acceptation (« on la déclare bonne » retiré), sans substitut.
- Volume lecteur sous le plancher de PROTOCOLE §5 (1 006 < 1 100), obtenu uniquement par retrait ; aucun des ajouts financés par l'audit (Tchebychev chiffré, équations 82, normalité de la résultante p. 258, appariement sélectif) n'a été intégré.
- rewrite.md ne décrit pas la version soumise (état antérieur aux boucles 1 et 2) : les retraits des boucles ne sont documentés nulle part dans le compte rendu de réécriture.

raison de la décision : Les quatre défauts majeurs du diagnostic sont réellement corrigés, et le gate est valide sur le SHA exact. Mais les retraits opérés pendant les boucles de fact-check ont ôté au lecteur la seule explication de l'écart type, notion sur laquelle reposent la section charnière et toute la suite, ainsi que la raison de la condition des trois écarts types. La progression n'est donc plus au moins aussi claire que l'ancienne au point le plus technique, et la profondeur explicative est dégradée par simple raccourcissement (1 006 mots, sous le plancher). Deux des conditions d'ACCEPT ne sont pas remplies (progression au moins aussi claire, profondeur non dégradée). Piste pour un nouveau cycle, sans valeur de prescription documentaire : conserver toutes les corrections de cette réécriture, rétablir une définition de l'écart type explicitement posée comme définition de travail (et non attribuée à Shewhart), supprimer la redite de fin de S2.P2, gloser ou retirer « l'étendue à six écarts types », et intégrer les ajouts financés par SUP-7c9cbf25b4e7914e que l'audit listait (borne de Tchebychev contre 0,9973, normalité de la résultante p. 258), qui ramèneraient le volume au-dessus du plancher.
