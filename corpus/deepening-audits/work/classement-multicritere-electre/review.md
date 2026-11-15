concept : classement-multicritere-electre
verdict : REJECT
factcheck_sha_match : PASS
baseline_blob_sha : 9b8b3cbf05bdef630f508ac1ac52f83e30ff9452

Gate : SHA-256 courant de corpus/deepenings/classement-multicritere-electre.json =
4f93add59a714523cf98332f2c951a66331004b987fa1f20898e2038b8ff6452, identique à
candidate_sha256 ; verdict FACTCHECK_PASS (66/66). Blob de référence lisible, JSON
d'approfondissement, conceptId identique. Volume lecteur : 1 448 mots avant, 1 358 après ;
lead 178 -> 91 mots.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     contresens ordinal de S1 corrigé (S1.P3 nouveau : écarts chiffrés et comparables) ; concordance pondérée + Condorcet (S3.P1, S3.P2) ; cosignature 1966 nommée (S6.P2) ; « modestie délibérée » et phrases sans support retirées ; gate PASS sur SHA exact
progressivité pédagogique      3/4     2/4     corps S1->S5 meilleur (S5 : sans-verdict, non-transitivité, noyau, extensions) ; mais le lead ne pose plus le problème : lead[0] = scénario nu de trois phrases sans question, lead[1] « prend le problème par l’autre bout » sans premier « bout »
densité / non-redondance       3/4     3/4     ancien S1.P3 (sans delta) et ancien S6.P2 (redite) supprimés, redite S5.P1/S5.P2 supprimée ; en contrepartie lead[0] n’a plus de delta propre, S1.P2 (p. 64) a perdu sa fonction, S4 réduit à deux paragraphes minces
clarté                         3/4     2/4     deux renvois sans antécédent : lead[1] « par l’autre bout » / « ne cherche pas à dire ce que vaut chaque appartement » (personne ne l’a cherché dans le texte) ; S3.P2 « la question de départ, combien vaut un point de vue face à un autre, n’a pas disparu » (question posée seulement dans l’ancien lead, retiré) ; S4.P0 « p au voisinage de 1, q près de 0 » non traduit en exigence
profondeur explicative         3/4     4/4     veto/concordance précisés (S3.P2), condition de concordance dans l’exemple (S3.P3), non-transitivité citée, noyau à deux stabilités, fermeture transitive et seuils « efficaces » (S5)
valeur des exemples            3/4     3/4     appartements repris en S5.P0 pour une paire sans verdict (gain) ; mais l’exemple d’entrée ne montre plus rien (le problème de compensation qu’il illustrait a été retiré) et S3.P3 n’est plus relié à ce qu’il interdit
limites / nuances              3/4     4/4     déplacement de la commensuration vers poids et écarts (S3.P2, marqué « On peut aussi remarquer ») ; sélection plutôt que rangement sans redite ; rangement non abandonné (S5.P3)
pouvoir d’ouverture            2/4     3/4     fin sur Arrow/Fishburn nommés et la note SEMA de 1966 déjà intitulée ELECTRE, au lieu d’une liste d’absences

défauts initiaux corrigés :
- Contresens ordinal (S1.P1/S1.P2) : corrigé par S1.P3.
- Concordance décrite comme un comptage : corrigé (part pondérée, coefficients d’importance).
- Attribution affaiblie (titre 1966 prêté à Roy seul, cosignataires absents) : corrigé (S6.P2).
- Incohérence S1.P2 « délibérée » / S6 « jamais plaidée » : corrigée.
- Fin en liste de précautions et S6.P2 redondant : corrigé.
- Phrases d’évaluation sans support (S4.P2, S5.P3, S4.P1) : retirées.

régressions détectées :
- Lead amputé par les retraits du fact-check (C001-C004) sans recomposition : lead[0] ne pose plus le problème auquel le concept répond (PROTOCOLE §2 et §5 : « le passage le plus important du texte ») ; il ne contient qu’un décor. Le lead tombe à 91 mots, sous la fourchette protocolaire 120-200.
- lead[1] « prend le problème par l’autre bout » : renvoi sans antécédent, constaté et laissé en l’état par le compte rendu de réécriture (FACTCHECK_FIX boucle 1). « Elle ne cherche pas à dire ce que vaut chaque appartement » s’oppose à une démarche que le texte ne présente plus.
- S3.P2, dernière phrase : « la question de départ, combien vaut un point de vue face à un autre, n’a pas disparu » renvoie à la question « combien de minutes de transport valent cinquante euros de loyer », qui n’existait que dans l’ancien lead retiré. Le lecteur ne peut pas savoir quelle question devait disparaître, ni pourquoi ; la nuance la plus féconde du texte (déplacement de la commensuration) perd ainsi son point d’appui.
- Retrait de C023 (les deux extrêmes note globale / unanimité) : S2 ne situe plus l’unanimité par rapport à une autre option ; la question p. 66 complète la remplace en partie, sans dommage majeur.
- Retraits C049/C050 : S4 n’a plus que « réglages », valeurs voisines de 1 et de 0 et le programme ; section mince mais pas de renvoi pendant (S4.P1 « donc » s’appuie bien sur S4.P0).
- Retraits C075/C076 : S6.P1 se ferme proprement sur le titre de la note de 1966 ; pas de renvoi pendant.
- S1.P2 (remarque p. 64) n’est plus exploitée : sa tension avec S1.P3 (la méthode exige des écarts comparables alors que les échelons peuvent n’avoir aucun sens métrique) n’est pas dite.

raison de la décision : le corps du texte est un gain net et réel (fidélité 2 -> 4, profondeur 3 -> 4, nuances et ouverture améliorées), et le FACTCHECK_PASS porte bien sur le SHA exact. Mais les retraits imposés par le fact-check ont laissé le lead sans problème posé et deux renvois sans antécédent (lead[1] « par l’autre bout », S3.P2 « la question de départ »), ce qui fait régresser la progression et la clarté à l’entrée du texte, là où le protocole place l’exigence la plus forte. Les critères d’ACCEPT (progression au moins aussi claire, aucune régression de clarté) ne sont pas remplis. Correction minimale recommandée avant nouveau cycle : recomposer lead[0] pour poser le problème sous forme hypothétique et sans attribution (chaque point de vue désigne un appartement différent ; comment conclure sans décider combien de minutes valent combien d’euros ?), ajuster lead[1] et la dernière phrase de S3.P2 pour qu’ils renvoient à cette question, puis refaire PREPARE et le gate.
