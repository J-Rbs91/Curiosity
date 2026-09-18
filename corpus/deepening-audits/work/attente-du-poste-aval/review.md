concept : attente-du-poste-aval
verdict : ACCEPT
factcheck_sha_match : PASS

Gate : sha256 du fichier de travail = e4185be14f3c35b3af953b1d61bbc82585f7ab237089a00c75d5bf417bcbcbf5,
identique au `candidate_sha256` de factcheck-gate.json. Verdict FACTCHECK_PASS, 49 claims,
49 SUPPORTED, 0 échec, 0 erreur structurelle. Condition préalable remplie.

Volumes : texte lecteur 1 325 -> 1 175 mots ; 17 -> 13 paragraphes ; `limits` 190 -> 272 mots ;
total compté par le script 1 561 -> 1 492 mots, dans la fourchette 1 300-1 700 de PROTOCOLE.md §5.
lead : 185 -> 170 mots (fourchette 120-200). Aucun tiret cadratin, titres sous 60 caractères.

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          2/4     4/4     HEAD portait trois énoncés que le vérificateur a ensuite classés UNSUPPORTED (C028/C029, « cette attente ne tombe jamais à zéro » et sa cause ; C036, « la brièveté de la chaîne ») : trois extensions par connaissance générale, interdites par AUDIT_PROTOCOL §6. Le candidat est à 49/49 SUPPORTED ; Johnson 1954 reste metadata-only (titre et notice seuls) ; le périmètre écarté par $.notes[6] (critère de tri, démonstration) reste absent ; « révisé » voyage avec la date en lead[1] et en S5.P3 ; l'exemple n'est pas attribué à Bellman (S5.P2 narrowed, « l'exposition et cette autre dérivation »).
progressivité pédagogique      2/4     4/4     lead[1] refait : il finit sur la question (« sur quoi le rangement mord-il ? ») au lieu de livrer la thèse, le plafond de gain et le changement d'objet. S1 cesse de travailler en rattrapage. L'attribution à S. Johnson passe de S5 (après mille mots de paternité installée) à l'incise finale du lead ; S5 instruit au lieu de défaire. S4.P1 convertit le dispositif en condition (« comme une condition plutôt que comme un décor ») au lieu de redécrire l'atelier de lead[0]. Progression en une phrase par section : problème / partage / mesure / portée du gain / domaine et sortie / paternité et accès.
densité / non-redondance       2/4     4/4     Les cinq paragraphes sans delta propre relevés par l'audit ont disparu : ancien S1.P3 (redisait lead[0]+lead[1], ne portait qu'un verbatim, remonté en S1.P2), clôture morale de S2.P3 (« il ne fait travailler personne plus vite »), S3.P3 (promesse non exécutée, doublon de lead[1]), S4.P3 (P-651, sans volume ni numéro, entrée Pólya : aucun delta). Sur 13 paragraphes, 12 ont un delta distinct ; aucune séquence de trois deltas substantiellement identiques ; aucune section principalement redondante.
clarté                         3/4     4/4     La formule brute « I_n + Σ b_i » est remplacée par sa lecture française (S1.P2) : plus aucun signe mathématique dans le texte tout public, et le raisonnement tient sans elle. Le titre ambigu « Le nom de S. Johnson dans les titres de paragraphe » devient « Ce que Bellman crédite à S. Johnson ». Réserve unique : S3.P2, voir régressions.
profondeur explicative         3/4     3/4     Perdu : le mécanisme du plancher d'attente (remplissage initial de l'amont, deux unités de l'article de tête) et le mécanisme de brièveté de la chaîne, tous deux non soutenus. Gagné, et soutenu : S4.P2 neuf, qui nomme la prémisse qui casse (« alors la charge de travail du poste aval cesse elle-même d'être acquise d'avance, et c'est le premier pas du raisonnement qui est à refaire ») et donne au titre de Johnson 1954 sa raison d'être ; S5.P2 dit le partage exact du travail entre les deux hommes ; S5.P3 dit ce que portent les huit pages, au conditionnel documentaire (« à en croire le renvoi de la page 13 »). Mécanismes conservés : dichotomie exhaustive S1.P1, invariance lead[0], arithmétique 43 / 4 / 35 / 31 en S2, plafond de gain S3.P1. Solde des mécanismes autorisés : +1.
valeur des exemples            4/4     4/4     Même exemple des cinq articles, désormais concentré : 43 acquis (S2.P1), puis 47 = 43 + 4, 78 = 43 + 35 et l'écart de 31 entièrement d'attente dans un seul paragraphe (S2.P2), au lieu d'un chiffre isolé dans un troisième paragraphe suivi d'une morale. « Imaginons un atelier » marque correctement le cas inventé du lead. Sa réutilisation en S3.P2 est en revanche appauvrie (voir régressions).
limites / nuances              2/4     3/4     Les deux nuances conditionnantes remontent à leur place utile : la paternité de Johnson dès le lead, le domaine de validité posé en condition explicite avec une sortie documentée (temps de réglage). Pas 4/4 : la nuance du résidu non nul subsiste en S3.P2 sans sa cause, donc sans effet réel sur la compréhension.
pouvoir d'ouverture            3/4     4/4     Le texte ne finit plus sur un erratum de nom de revue : le nom inversé et l'initiale deviennent l'outillage d'une recherche, et la dernière phrase est la raison d'ouvrir Johnson (« la démonstration que le critère de rangement donne le minimum absolu : c'est là qu'il faudra aller la lire »), au futur, du côté du lecteur, conforme à PROTOCOLE §1. S'y ajoute l'accès constaté au scan (« le tableau de la page 15 se regarde »), matière que l'audit signalait disponible et inutilisée, sans rien dire d'une licence.

défauts initiaux corrigés :
- Défaut majeur 1 (le lead livre la thèse entière, ce qui condamne S1 à la re-démontrer) : corrigé. lead[1] est refait et pose la question ; S1 passe de trois à deux paragraphes ; l'invariance n'est plus redite qu'en une clause de service.
- Défaut majeur 2 (attribution à Johnson repoussée à la dernière section, après trois formulations installant la paternité de Bellman) : corrigé à la racine. L'incise du lead désamorce sans déflorer, et S5 garde toute sa matière (p. 8, titres §3 et §4, renvoi p. 13, redérivation par équation fonctionnelle).
- Défaut majeur 3 (S4 fait deux travaux, et son P3 bibliographique n'a aucun rendement) : corrigé. Section unifiée sous « Là où le comptage cesse de tenir » ; ce qu'il fallait garder du statut éditorial (papier RAND, soixante-dix pages, révisé le 23 mai 1955, copie servie publiquement) tient en une phrase de S5.P3, là où le lecteur cherche à remonter aux textes.
- Défaut majeur 4 (S3.P3 promet un démontage attente par attente sans l'exécuter) : le défaut est supprimé, non résolu. L'exécution ajoutée par la réécriture a été retirée par la boucle de correction, $.notes[11] ne certifiant que des totaux. La promesse non tenue disparaît avec elle : le texte ne s'engage plus à ce qu'il ne peut pas faire.
- Défaut majeur 5 (délimitation du cas posée deux fois sans jamais agir comme condition) : corrigé, S4.P1 la pose explicitement comme condition.
- Frottements de clarté relevés en D (formule brute, titre de S5 trompeur) : tous deux corrigés.

régressions détectées :
- S3.P2 est réduit à une phrase de constat (« Cette réduction ne va pourtant pas jusqu'à zéro dans l'exemple du rapport »). Le chiffre 4 a déjà été lu en S2.P2, et la tension avec S3.P1, qui vient de poser le temps d'inactivité observé comme gain maximal, n'est plus résolue : le lecteur apprend que le plafond n'est pas atteint sans savoir pourquoi. C'est le point faible du candidat, et la section tombe à 121 mots. La régression est réelle mais bornée à un paragraphe, et la matière qui la comblait était précisément celle que les sources n'autorisaient pas.
- « et c'est de ce cas seul que parle tout ce qui précède » (S4.P1) remplace un mécanisme par un énoncé de portée qui parle du texte lui-même. Ce n'est pas une annonce de méthode au sens de PROTOCOLE §2, mais c'est la formulation la moins tenue du candidat.
- Le texte lecteur descend à 1 175 mots, à soixante-quinze mots du plancher de 1 100. Le total contrôlé reste dans la fourchette, mais la marge a été dépensée.
- Aucune information solide de HEAD n'a été perdue. Vérifié un à un : la raison de l'invariance survit en lead[0] et S4.P1 ; les bornes du chantier en S1.P1 ; le verbatim « I_n + Σ b_i » est rendu en français sans perte de fait ; les quatre verbatim anglais et les deux titres de paragraphe sont conservés mot pour mot ; seule la cote « P-651 » disparaît, le document restant identifié par son titre, son éditeur, sa pagination et sa date.
- Aucune fragilité documentaire supplémentaire détectée : rien de `limits` ne remonte en bloc visible, aucune phrase ne raconte un texte non ouvert au passif ni ne dit « il faudrait pouvoir », la source metadata-only n'est employée que par son titre et sa notice.

raison de la décision : ACCEPT. Le gate est valide sur le SHA exact, et la comparaison ne montre aucune
perte documentaire : elle montre l'inverse. HEAD tirait une partie de sa profondeur apparente de trois
énoncés que le vérificateur a classés UNSUPPORTED, c'est-à-dire de connaissances générales sur le flow
shop à deux machines que la documentation de travail n'appuie pas ; AUDIT_PROTOCOL §6 interdit
explicitement cette compensation. Restaurer HEAD reviendrait à réintroduire ces trois énoncés pour
racheter du confort pédagogique, ce qui est le mouvement que tout ce protocole existe pour empêcher.
Le solde des mécanismes autorisés est en outre positif : deux mécanismes non soutenus sortent, un
mécanisme soutenu et neuf entre (le temps de réglage qui attaque la prémisse d'invariance elle-même),
avec le partage exact du travail entre Johnson et Bellman et l'accès constaté au rapport. La perte de
cent cinquante mots n'est donc pas une perte de profondeur obtenue par raccourcissement : elle vient
pour deux tiers des paragraphes que l'audit avait identifiés comme sans delta, et pour un tiers de
matière que les sources n'autorisaient pas. Les six critères minimaux d'ACCEPT sont remplis :
FACTCHECK_PASS sur le SHA exact, aucune séquence de trois deltas identiques, aucune section
principalement redondante, progression strictement plus claire, profondeur non dégradée, et cinq des
cinq défauts majeurs du diagnostic effectivement traités. La seule réserve, S3.P2, est un paragraphe
faible et non une régression structurelle ; elle mérite d'être notée comme point de reprise si la
carte redevient éligible, mais elle ne justifie pas de rendre au lecteur une version moins fidèle.
