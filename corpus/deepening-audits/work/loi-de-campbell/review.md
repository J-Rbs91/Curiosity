concept : loi-de-campbell
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 308ff4b84085ce2088b07489bbd75f0f8686e45c

GATE PRÉALABLE
- SHA-256 actuel de corpus/deepenings/loi-de-campbell.json : 66024acac1f0c95254bf5e548fffa43042db4ab97db9a06b2bd3a932045a337b
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 62/62 claims SUPPORTED, aucun mapping_incomplete, aucune erreur de structure. Les 14 paragraphes lecteur sont en CLAIMS_MAPPED : aucune exemption NO_VERIFIABLE_CLAIM.
- Blob de référence : lisible avec git cat-file, JSON d'approfondissement (`$schema`, conceptId, lead, sections, limits), conceptId = loi-de-campbell. C'est bien la version auditée (texte lecteur de 1 135 mots, conforme aux repères de audit.md).

Entrées lues : PROTOCOLE.md, AUDIT_PROTOCOL.md (v4), FACTCHECK_PROTOCOL.md (v3), version proposée, version antérieure (blob), corpus/validated/loi-de-campbell.json, audit.md, rewrite.md, factcheck-fixes.md, factcheck-gate.json, plus les supports clés du pack (SUP-44e43baae10fe353, SUP-02c2b6df473a9c3d, SUP-8b69ab8b0bc7c4dd, SUP-95d15e06e804892d, SUP-d31e4c44dc50c6e3, SUP-29a1e32a461f8011, SUP-5940e901f2721b2e).

Volume du texte lecteur (lead + sections, découpage sur les espaces) : 1 135 avant, 1 197 après (+5,5 %). Les chiffres de rewrite.md (1 243) et de factcheck-fixes.md (1 392/1 396) ne sont pas calculés sur la même base ; ce n'est pas bloquant, et dans tous les cas la croissance reste sous le plafond de +10 % fixé par l'audit.

DELTA PAR PARAGRAPHE (nouvelle version)
- lead[0] : sur un cas inventé, un chiffre devenu critère de prime progresse pendant que le service se dégrade. Inchangé, sauf « il ne faut pas longtemps », retiré.
- lead[1] : l'exemple est déclaré imaginé ; le lecteur apprend l'auteur, l'époque, la question que pose le texte (juger l'effet d'un changement social planifié) et l'énoncé à deux temps.
- S1.P1 : le lecteur apprend l'histoire éditoriale exacte (Visegrád 1974, Dartmouth décembre 1976, 2011), la phrase complète citée une seule fois, et le fait que Campbell compte deux lois (« these two laws »).
- S1.P2 : il voit ce que vise chaque loi, la rattache au centre d'appel et apprend que le nom porte surtout la seconde. Delta réel mais le plus mince du texte, puisque c'est la troisième formulation des deux versants (lead[1], S1.P1, S1.P2). La distinction des deux lois et l'information sur la réception le justifient.
- S1.P3 : il apprend le statut de tendance, la restriction à la scène américaine, mais sans exception de type d'indicateur (« any »). Ce dernier point est neuf.
- S2.P1 : il apprend le mécanisme selon Campbell : les indicateurs sont devenus des pièces de la décision, donc des enjeux de pouvoir « akin to voting ».
- S2.P2 : il découvre la preuve de Chicago (le vote, surveillé mais utilisé, est moins fiable ; le recensement, peu protégé mais inutilisé, l'est plus) et sa conséquence marquée : la surveillance ne suffit pas, c'est l'usage qui menace.
- S3.P1 : sur un cas imaginé, il distingue trois voies (amélioration réelle, chiffre faussé, activité déformée avec un chiffre exact), rattachées chacune à l'une des deux lois.
- S4.P1 : il découvre les cas réels : la police, où les deux lois jouent dans un même cas, et les tests scolaires, « highly corruptible ».
- S4.P2 : il apprend le mécanisme réel de My Lai (un but nouveau, avoir des corps à compter) et lit la phrase de Campbell qui nomme les deux effets.
- S5.P1 : le nom est postérieur, et le singulier fond deux lois en une.
- S5.P2 : la paternité de l'idée n'est pas en cause, et les auteurs convoqués ne servent que d'illustrations.
- S6.P1 : Campbell termine sur un problème majeur, qui s'aggravera.
- S6.P2 : les pistes institutionnelles nommées, et une raison précise d'ouvrir le texte.
Aucune séquence de trois paragraphes au delta substantiellement identique. Aucune section principalement redondante.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     Les six fragilités de l'audit sont retirées : « seule moitié » est inversé conformément à SUP-8b69ab8b0bc7c4dd ; le mécanisme My Lai est remplacé par celui de SUP-44e43baae10fe353 ; « ce que pointe Campbell » est supprimé ; « psychologue et méthodologue », « la plus citée », « années 1960 et 1970 » et « coûte moins cher » sont retirés. 62/62 SUPPORTED. Aucune fragilité nouvelle repérée à la relecture.
progressivité pédagogique      2/4     3/4     L'ordre devient énoncé → mécanisme (S2) → distinction sur un cas (S3) → cas réels (S4) → nom (S5) → ouverture (S6). S3 précède désormais S4 et ne régresse plus vers un seul versant. Réserve : le statut de tendance est placé en S1.P3, avant les cas, et non après comme le prévoyait la cible ; c'est acceptable.
densité / non-redondance       2/4     3/4     L'incise « at least for the U.S. scene » passe de trois occurrences à une, « pessimistic laws » de quatre à une ; S2.P2 et S4.P2 (anciens) sont fondus ou supprimés. Reste un triple énoncé des deux versants (lead[1], S1.P1, S1.P2), et la dernière phrase de S4.P2 redit en clair la citation qui la précède.
clarté                         3/4     3/4     Le « pluriel » est désormais expliqué (deux lois) et la contradiction de l'ancien S5.P2 disparaît. En contrepartie, « plea bargaining » apparaît sans glose (l'audit interdisait de l'expliquer, une simple traduction aurait suffi), et S1.P1 est dense : chronologie et longue citation anglaise.
profondeur explicative         2/4     4/4     Le raisonnement propre de Campbell est désormais présent : indicateurs comme enjeux de pouvoir, « akin to voting », contraste de Chicago, mécanisme réel de My Lai. Le texte tire le mécanisme des cas de l'auteur au lieu de le poser en général.
valeur des exemples            2/4     4/4     L'hôpital porte maintenant les deux lois et le cas d'amélioration réelle (troisième voie : chiffre exact, activité déformée). Le cas policier est présenté comme porteur des deux lois, et Chicago sert de preuve du mécanisme au lieu d'être aplati.
limites / nuances              3/4     3/4     Tendance, portée américaine et « any » sont réunis en S1.P3, et la distinction nom/idée est nette en S5. La nuance « le chiffre seul ne dit pas quelle voie a été prise » (ancien S5.P2, version corrigée prévue par l'audit) a été retirée en boucle de fact-check faute de support. Elle reste lisible implicitement dans S3.P1.
pouvoir d’ouverture            1/4     4/4     S6 est nouvelle : le problème ouvert que l'auteur laisse, les pistes désignées sans être expliquées (Texarkana, Seattle, recensement, indicateurs multiples contestés) et un renvoi au texte formulé du côté du lecteur (« c'est dans son texte qu'il faudra le lire »).

défauts initiaux corrigés :
- S1.P2 « la seule moitié qu'on retient » : inversé ; le second versant est désormais celui que le nom porte le plus souvent (SUP-8b69ab8b0bc7c4dd).
- S3.P2, mécanisme My Lai inventé : remplacé par le but nouveau (avoir des corps à compter) et le verbatim « His goals had been corrupted… » (SUP-44e43baae10fe353).
- S5, réduction au premier versant et « s'exercent sur l'indicateur, pas sur la réalité » : la vignette a désormais trois voies, la troisième porte la seconde loi, et la sur-attribution à Campbell a disparu.
- Redondance des citations : l'incise américaine et « pessimistic laws » ne sont plus citées qu'une fois.
- lead[1] « observé bien au-delà des centres d'appel » : l'exemple est explicitement déclaré imaginé.
- Fin sans ouverture : nouvelle S6 sur le problème ouvert.
- Paragraphes sans delta propre (S2.P2 et S4.P2 anciens) : fondus ou supprimés.
- Chronologie erronée (« publié une première fois en 1976 ») : remplacée par 1974 / décembre 1976 / 2011.

régressions détectées (mineures, aucune bloquante) :
- S3 ne compte plus qu'un paragraphe, sous le minimum de 2 fixé par PROTOCOLE §5. Le contrôle mécanique ne l'a pas signalé. Cela vient du retrait, en boucle de fact-check, d'un paragraphe non financé. Défaut de forme, sans effet sur la progression.
- La conséquence « un chiffre qui s'améliore ne dit pas, à lui seul, quelle voie a été prise », présente dans l'ancien S5.P2, n'est plus dite explicitement. Dans sa formulation ancienne, elle était sur-attribuée à Campbell ; le retrait est donc documentairement justifié, mais c'est une petite perte d'explicitation.
- « plea bargaining » n'est pas traduit. Le terme est nouveau : l'ancienne version ne le contenait pas.
- Légère redite à l'intérieur de S4.P2 : la dernière phrase paraphrase la citation qui précède.
- Aucune remontée du champ `limits` dans le texte lecteur. La mention en S5.P1 que la date du baptême reste à retrouver figurait déjà dans l'ancienne version ; c'est une nuance utile au lecteur et elle est formulée de son côté.

raison de la décision : le gate est valide (FACTCHECK_PASS sur le SHA exact) et le blob de référence est le bon. Tous les défauts majeurs du diagnostic sont effectivement supprimés, pas seulement atténués. Le gain ne vient pas d'un raccourcissement : le texte grandit modestement (+5,5 %), et tout ce qu'il ajoute est financé par SUP-44e43baae10fe353 et SUP-02c2b6df473a9c3d. Ce sont le mécanisme propre de l'auteur, ses cas restitués correctement et l'ouverture qui manquait. La progression est plus claire que dans l'ancienne version, la profondeur nettement supérieure, et aucun axe ne régresse. Les régressions relevées sont mineures (forme de S3, une conséquence implicite, un terme non glosé) et ne pèsent pas face aux corrections documentaires et pédagogiques.
