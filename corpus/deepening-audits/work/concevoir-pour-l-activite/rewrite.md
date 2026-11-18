concept : concevoir-pour-l-activite
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=concevoir-pour-l-activite` : 1 approfondissement contrôlé, 1227 mots avec limits, rien projeté)

Entrées lues : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, le deepening, corpus/validated/concevoir-pour-l-activite.json (pas de champ `dossier`), corpus/evidence/concevoir-pour-l-activite/ (listé : `lecture.json` seul, lu en entier), audit.md, factcheck-pack.json. Aucune recherche externe.

## Volume du texte lecteur (lead + sections)

| | avant | après |
|---|---|---|
| lead | 207 | 156 |
| sections | 1 099 | 872 |
| **total lecteur** | **1 306** | **1 028** (−278 mots, −21 %) |
| limits (interne) | 129 | 199 |

Le total passe sous les 1 250 à 1 350 visés par l'audit et sous les 1 100 du protocole. C'est voulu : les ajouts financés (fauteuil, Bannon, § 8, § 11, plasticité, développement, antériorité) ne compensent pas les retraits imposés (S2 et S4 anciennes, étymologie, exemples inventés, coût, mobile, liste « pannes, imprévus », glose « hypothèse »). Je n'ai rien rajouté pour atteindre un volume.

## Structure

Ancienne → nouvelle :
- lead : resserré sous 200 mots ; ajout de l'exclusion de l'usager en fauteuil ; retrait de l'étymologie chimique et de « Béguin appelle ce phénomène » ; retrait des exemples « machine de production, poste de contrôle ».
- S1 « Ce que cristalliser veut dire ici » : gradation conservée (glose « précis et local » retirée), exemples inventés sous « écrit Béguin » retirés, nouveau paragraphe sur l'antériorité du motif (Rabardel 1995, Léontiev) et sur ce qui revient en propre à Béguin (les trois manières), pour que le lecteur sache tôt que la cristallisation n'est qu'une voie sur trois.
- S2 + S3 anciennes → S2 « Quand le modèle figé est faux » (modèle faux, Bannon, § 8) et S3 « Ce que l'ergonome a à faire » (déséquilibre du résumé, § 9-11, refus du § 11). L'ancienne S2 « avant qu'on y touche » est supprimée (redondante avec le lead).
- S4 ancienne « Une hypothèse, pas une vérité figée » : supprimée ; le mot « hypothèse » n'apparaît plus qu'en S5, au sens du § 20, avec la mention explicite qu'il ne désigne pas le modèle cristallisé (notes[1], reserves[2]).
- S5 ancienne « Trois manières » → S4 « La plasticité » et S5 « Le développement », chacune avec son contenu.
- S6 « Avant l'usage, après l'usage » : distinction cristallisation / genèse instrumentale gardée ; « coût » et mobile retirés ; ouverture sur le fait que Béguin mobilise lui-même les genèses dans la troisième voie et sur le texte cosigné de 2005, à lire.

## Contradiction review.notes[6] / lecture.json sur la conclusion

Non tranchée. Le texte lecteur ne caractérise plus la conclusion de l'article (retrait de « vers cette troisième voie que penche la conclusion »). Il s'en tient à ce qui est commun aux deux pièces : le développement est la voie que Béguin pousse le plus loin (SUP-33a861d1aaa9792d ; non contredit par SUP-04ebcae5cab5fc1f), et la cristallisation est l'une des trois (SUP-5eaef710ded480ea, SUP-d4db5d53c1e29895). Ni « conclut en faveur de la troisième », ni « refuse de trancher / complémentaires » n'apparaissent. La divergence est consignée dans `limits[3]`.

## Ajouts et supports qui les financent

- lead[0] : exclusion de l'usager en fauteuil ; logiciel porteur d'un modèle ; modèle qui n'a pas à être formulé pour agir, présent avant tout usage : SUP-33a861d1aaa9792d, SUP-4851fe9867a2d543 (« s'impose à tous »), SUP-0d720368fafb2415. « dans un article de 2007 » : SUP-5eaef710ded480ea.
- lead[1] : « cristallise » un modèle de l'utilisateur et de son activité : SUP-e3ef6f80e004d986 ; « se décide pendant la conception » : SUP-99db4502723d4b72, SUP-0d720368fafb2415 ; « juste ou faux » : SUP-33a861d1aaa9792d (« faux ou insuffisant ») ; « s'impose à tous » : SUP-4851fe9867a2d543.
- S1.P1 : phrase complète du § 7 et gradation : SUP-07ecab4b7858b391, SUP-c28a59591fb3e2f6, SUP-0729cbbefd6ddc51.
- S1.P2 : « Il s'agit d'une caractéristique générale » : SUP-4851fe9867a2d543. (La phrase « lequel, et s'il correspond au travail réel » est conservée de l'ancienne version ; conséquence de reformulation.)
- S1.P3 (nouveau) : pas de revendication d'invention : SUP-5eaef710ded480ea ; Rabardel 1995, citation « porteur des opérations… », rattachement à Léontiev par Rabardel lui-même : SUP-5eaef710ded480ea, SUP-0b8116e24c27c6ad, SUP-22a36fc921169ff3 ; coauteur : SUP-5eaef710ded480ea ; partition en trois en propre : SUP-d4db5d53c1e29895, SUP-5eaef710ded480ea.
- S2.P1 : modèle faux ou insuffisant, difficultés voire exclusion, logiciel qui « fige », Bannon 1991, postulat de stupidité de l'opérateur (paraphrasé, sans guillemets) : SUP-33a861d1aaa9792d, SUP-3cdfd933bc346cc4, SUP-40aeca74a35dcf0f. Dernière phrase marquée « Cela implique » : conséquence tirée de « source de difficultés » (SUP-33a861d1aaa9792d) ; c'est la reformulation sourcée de l'ancienne S2.P2.
- S2.P2 : choix sociaux, économiques, politiques ; citation § 8 ; orientent les pratiques sans avoir été validés : SUP-33a861d1aaa9792d, SUP-4851fe9867a2d543.
- S3.P1 : déséquilibre du résumé (paraphrasé) : SUP-33a861d1aaa9792d ; système couplé, rendre le travail visible et pensable pendant la construction du problème, contraintes avant que les solutions soient arrêtées : SUP-33a861d1aaa9792d, SUP-99db4502723d4b72.
- S3.P2 : § 11, l'analyse ergonomique ne suffit pas, science de conception, simulation tôt malgré l'incertitude : SUP-33a861d1aaa9792d.
- S4.P1 : le réel excède le modèle, activité située, effectuation / anticipation, Vicente 1999 : SUP-33a861d1aaa9792d, SUP-3cdfd933bc346cc4.
- S4.P2 : frontières (Vicente), espaces d'activité future possibles (François Daniellou 2004), imprimante, artefacts adaptables (Robinson 1993, Randell 2003), systèmes souples et « plastiques » : SUP-33a861d1aaa9792d, SUP-ff7cef0a860ac5c8, SUP-1e4ed65b16438e88, SUP-3cdfd933bc346cc4, SUP-5eaef710ded480ea.
- S5.P1 : voie poussée le plus loin, développement conjoint pendant le projet, pas de vide technique, deux processus d'appropriation, genèses instrumentales (instrumentation, instrumentalisation, sans appariement terme à terme), ressources d'action, compétences, conceptualisations, formes d'action collective : SUP-33a861d1aaa9792d, SUP-3cdfd933bc346cc4.
- S5.P2 : seul endroit où figure « hypothèse », qui ne désigne pas le modèle cristallisé ; citation § 20 ; caractère participatif : SUP-33a861d1aaa9792d, SUP-25af7abe63b29cf8, SUP-40aeca74a35dcf0f.
- S6.P1 : avant / après, en amont et non à la place : SUP-99db4502723d4b72.
- S6.P2 (nouveau) : genèses mobilisées dans la voie du développement comme un acquis ; filière dont Béguin cosigne un texte avec Rabardel en 2005 ; part de chacun non connue, d'où « il faudra le lire » : SUP-3914452765427288, SUP-3cdfd933bc346cc4, SUP-11fb508d8b40e7ac (notice seule, aucun contenu affirmé).

## Retraits (non financés ou fautifs)

Étymologie chimique ; « Béguin appelle ce phénomène » ; « machine de production, poste de contrôle » ; « logiciel de gestion des stocks », « tableau de bord industriel » sous « écrit Béguin » ; « entre des personnes… jamais rencontrées » ; « pannes, imprévus, urgences, arrangements » ; « pas d'abord une question de mauvaise volonté » ; « coûte infiniment plus cher » ; toute l'ancienne S4 (« hypothèse » appliquée au modèle cristallisé, « une fois l'objet livré ») ; « dans la durée, au fil des usages » ; « penche la conclusion » ; « cette ingéniosité a un coût » et le mobile « pour épargner ce coût ».

Prescriptions de l'audit écartées : Canguilhem et Schön non mentionnés dans le texte lecteur (désignation seulement dans le pack ; l'audit limitait à une mention, je n'en ai pas eu besoin). Pas de description de la conclusion (§ 22-23), voir plus haut.

## limits (interne, non affiché)

Réécrit en quatre paragraphes : version anglaise partielle ; Léontiev via Rabardel, Rabardel & Béguin 2005 `metadata-only`, aucun lien établi entre Béguin et Rabardel 1995 (absent de la bibliographie selon reserves[4]) ; auteurs connus seulement par l'attribution de Béguin ; divergence sur la conclusion et absence de réception. Aucun contenu de `limits` n'est remonté dans le texte lecteur.

## Points à surveiller pour le fact-check (non auto-validés)

- lead[1] « Ce modèle se décide pendant la conception » : appui indirect (notes[3], summary).
- S2.P1 dernière phrase : conséquence marquée, à juger sur SUP-33a861d1aaa9792d.
- S1.P3 « par ailleurs coauteur de Béguin » appliqué au Rabardel de 1995 : la coécriture date de 2005 ; la formule reprend l'attribution_note.

Aucune validation de cette version n'est revendiquée. Toute modification invalide le SHA du pack : reprendre à `PREPARE`.
