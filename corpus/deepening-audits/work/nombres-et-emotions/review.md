concept : nombres-et-emotions
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : 1756579d4a75476504f920c82dca43eb08264b60

GATE
- sha256 actuel de corpus/deepenings/nombres-et-emotions.json : 33802de4ce2d9fe5824bc950c5416c82b377ca65bd989e95a6aa20d11f2e2203
- factcheck-gate.json : verdict FACTCHECK_PASS, 49/49 SUPPORTED, 0 mapping_incomplete, 0 structural_errors, candidate_sha256 identique.
- baseline : `git cat-file -p 1756579d…` se lit, JSON d'approfondissement, conceptId nombres-et-emotions ; octet pour octet identique à work/nombres-et-emotions/rewrite-before.json.
- contrôles de forme relus : aucun tiret cadratin, aucun terme de dispositif (carte, fiche, corpus, dossier), aucune formule « il faudrait pouvoir » dans le fichier.
- texte lecteur : 1 178 -> 1 266 mots (+7,5 %), lead 198 -> 188 mots, 5 -> 4 sections. Dans les bornes de PROTOCOLE.md §5 (4 à 6 sections, lead 120-200 ; total sous la cible 1 300 mais au-dessus du plancher de 1 100).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     Les six fragilités de l'audit sont retirées : reflux par la baisse (ancien S2.P2) remplacé par la soupape + « simultaneously » ; « réseaux sociaux » -> tchat des lecteurs du Monde (S3.P2) ; « émousser » et « aucune de ces deux émotions » supprimés, la peur figure parmi les quatre familles (S3.P2) ; « séries publiées en continu » -> « a fixed quantity » (S1.P3) ; étymologie data+pandemic supprimée ; ouvrages 2013/2014 « sous un angle différent » supprimés. « millions de foyers » supprimé. Ajouts sondés contre lecture.json (dépouillement à la main, 18 %, faiblesse non cachée, police quantitative, socio-histoire des émotions, sortie de crise) : tous présents. Porter signalé comme source de la formule « Accuracy… » (réserve SUP-9734e513d59d164a respectée). Gate 49/49.
progressivité pédagogique      2/4     3/4     lead pose la question (public -> intime) ; S1 explique enfin pourquoi chaque chiffre produit son émotion au lieu de redire lead[0] ; S2 noue le mécanisme ; S3 bornes + contenu réel du troisième cas ; S4 monte au niveau théorique (littérature, cognition/affect jamais en conflit, autorités, hypothèse contre-intuitive, précision non déterminante). Réserve : S3 (retenue normative et méthodologique) s'intercale entre le mécanisme et le positionnement théorique ; l'ordre reste suivable parce que S3.P2 enrichit le cas du symbole, mais S4 aurait pu précéder.
densité / non-redondance       2/4     3/4     Plus aucune redite du seuil « n'ajoute rien », ni de lead[1] en S3.P2, ni de S2 à la fin de S5.P1 ; S4.P2 sans delta supprimé. Chevauchement partiel restant : S4.P1 « jamais en conflit » prolonge la thèse « inséparablement » du lead, et S4.P2 « réguler les émotions » rejoint S2 ; dans les deux cas un delta distinct existe (non-opposition raison/affect ; portée sur les autorités et lien à l'efficacité des politiques). Aucune séquence de trois paragraphes au même delta.
clarté                         3/4     3/4     Lead plus net (dates, France, question explicite). Mais densité de citations anglaises accrue (S1.P2, S2.P2 en porte deux, S4.P1 deux) ; « police quantitative » (S3.P1) et « Theodore Porter qu'il cite juste avant » (S4.P3) arrivent sans explication. Le gain du lead compense ces alourdissements, pas davantage.
profondeur explicative         1/4     3/4     Gain principal. Peur : nombre absolu cumulé, unité = personne, courbe qui annonce le croisement admissions/capacité (S1.P1). Espoir : cible importée du management, posée par et pour le gouvernement, inversion du rôle de l'indicateur (S1.P2). Symbole : quantité fixe, ronde, grande, seuil ; « Each is represented, but none is distinguished » (S1.P3). Soupape (S2.P2). Précision non déterminante (S4.P3). Limite : la double détente n'est démontrée que sur les bilans de morts, alors que S2.P1 la dit commune aux trois cas.
valeur des exemples            2/4     3/4     Les trois cas cessent d'être des étiquettes et deviennent des mécanismes ; les 18 % et les morts à domicile ignorés font comprendre que l'efficacité ne vient pas de l'exactitude. L'exemple générique de mortalité-outil de décision, qui ne faisait que reformuler, a disparu.
limites / nuances              2/4     3/4     Retenue normative conservée et enrichie (n'exonère pas les cibles de leurs effets pervers) ; méthode du troisième cas correctement décrite ; émotion étendue aux autorités (corrige le contresens du citoyen « qui n'a à décider de rien ») ; nuance de la précision. Le champ interne limits n'est pas remonté dans le texte lecteur : « proposition, sans le rattacher à personne » est une nuance d'attribution utile, sans comptabilité de dossier.
pouvoir d’ouverture            1/4     2/4     Le texte ne s'arrête plus sur une précaution de méthode mais sur Desrosières (S4.P4) et la thèse des nombres comme lien entre émotions et agrégat social. Ouverture réelle mais brève (49 mots) et abstraite ; l'image du tunnel, plus parlante, a été placée en S2.P2, où elle sert le mécanisme plutôt que la sortie.

défauts initiaux corrigés :
- S2.P2 : mécanisme inventé de la baisse des bilans, en contradiction avec « simultaneously », remplacé par la soupape documentée (défaut majeur n°1 de l'audit).
- S1 redisait lead[0] sans expliquer : remplacé par trois paragraphes de mécanisme, un par cas (défaut majeur n°2).
- Erreurs de fait : réseaux sociaux, publication en continu, absence de peur, émoussement, étymologie, tous retirés ou corrigés (défaut majeur n°3).
- S4.P2 (mise en garde d'attribution interne exposée au lecteur et description d'ouvrages non lus) : supprimé (défaut majeur n°4).
- Fin sur une précaution : remplacée par une clôture sur Desrosières (défaut majeur n°5, partiellement).
- Fragilités mineures : traduction « presque tous », public seul -> autorités et public, scène d'audience non sourcée retirée.

régressions détectées :
- Aucune régression conceptuelle ni perte d'une information solide de l'ancienne version : la citation-thèse, la citation peur/espoir, la double détente, la retenue normative, la littérature centrée sur la rationalité et « datademic » sont tous conservés.
- Régressions mineures de clarté, non bloquantes : citations anglaises plus nombreuses ; « police quantitative » et la mention de Porter non expliquées ; la place de S3 entre mécanisme et théorie est discutable.
- La vignette initiale (geste quotidien de consulter un chiffre), plus immersive, a disparu ; elle n'avait pas de support, sa suppression est justifiée.

raison de la décision : la porte du fact-check est valide sur le SHA exact (FACTCHECK_PASS 49/49). La réécriture supprime les cinq défauts majeurs du diagnostic, et en premier lieu le mécanisme inventé de S2.P2 et la redite de S1, en les remplaçant par des mécanismes sourcés. La profondeur explicative passe de 1/4 à 3/4 avec une croissance contenue (+7,5 %), donc ce n'est pas un simple raccourcissement ou un effet de style. Aucune séquence redondante, aucune section principalement répétitive, progression au moins aussi claire qu'avant, rien de limits ne remonte dans le texte lecteur. Les réserves restantes (densité de citations anglaises, deux renvois non glosés, ouverture brève) relèvent d'une passe ultérieure et ne justifient pas de restaurer une version documentairement fautive. ACCEPT.
