concept : points-de-levier
verdict : ACCEPT
factcheck_sha_match : PASS
baseline_blob_sha : f65fd4c5ac23add4c725775add0841f530b6f270

GATE PRÉALABLE

- sha256 actuel de corpus/deepenings/points-de-levier.json :
  b013ce9c929ab0ccabc589cfa0f96d3c617e361e91e985c7fbf6a11fe81dd683
- factcheck-gate.json : verdict FACTCHECK_PASS, candidate_sha256 identique, 81 claims / 81
  supported, aucun mapping_incomplete, aucune structural_error.
- Blob de base : type blob, JSON d'approfondissement lisible, conceptId = points-de-levier.
- `npm run corpus:deepen -- --check --only=points-de-levier` : PASS (1 733 mots, limits compris).

COMPARAISON
axe                            avant   après   preuve
fidélité documentaire          1/4     4/4     n° 4 corrigé (S1.P1 « ajouter, changer, faire évoluer ou auto-organiser la structure ») ; baignoire rendue à sa leçon (S1.P3 « not visible » / « not intuitive ») ; « il ne menace personne », « logique simple », mécanisme S3.P4, biographie et réception du lead[1] retirés ; Forrester toujours rapporté (S5.P2 « en le citant ») ; 30 % sous « the story goes » (S3.P3) ; gate 81/81
progressivité pédagogique      2/4     3/4     échelle (S1.P1) → mécanique de la baignoire (S1.P2-P3) → bas (S2) → milieu, rang = puissance + faisabilité (S3) → haut (S4) → avertissement (S5) → statut de la liste (S6) ; le palier « ce que fait un niveau et pourquoi il est là » existe désormais. Réserve : l'avertissement, annoncé au lead[1] et amorcé en S1.P3, n'est développé qu'en S5
densité / non-redondance       2/4     3/4     redondances S2.P3/S1.P2 et S5.P3/S3.P2 supprimées ; S5 (usages non sourcés) supprimée ; chaque paragraphe a un delta distinct. Recouvrement résiduel : S5.P1 recite « ne sont pas intuitifs » déjà acquis en S1.P3 (« not intuitive ») et lead[1] ; son delta propre se réduit à « systematically worsening »
clarté                         3/4     3/4     langue simple conservée ; termes introduits avec leur image (stock, flux, boucle correctrice en S1.P2 ; paramètre défini en S2.P1). Reste une énumération dense en S1.P1 (« gain des boucles qui entraînent », « réserves tampons ») dont les niveaux 7, 8, 10, 11 ne sont jamais dépliés
profondeur explicative         1/4     3/4     mécanismes de l'auteur : invisibilité du but et des boucles (S1.P3), paramètres débattus sans changer le comportement (S2.P2), plages critiques (S2.P3), délais et dépassement / effondrement (S3.P1), nouvelle boucle d'information (S3.P3), but lu dans ce que fait le système (S4.P2), paradigme source et objection-réponse (S4.P3)
valeur des exemples            1/4     4/4     baignoire (porte la leçon d'invisibilité), dette publique « negative bathtub » (le débat sur les paramètres n'arrête pas le trou), compteur dans l'entrée (nouvelle boucle), nappe phréatique (condition du bon endroit) : chacun démontre une chose différente ; TRI écarté car redondant avec le compteur
limites / nuances              2/4     4/4     nuances placées là où elles évitent un contresens : paramètres importants à court terme mais rarement levier (S2.P2), exception rare des plages critiques (S2.P3), rang qui tient à la faisabilité (S3.P1-P2), objection de Meadows au rang du paradigme et résistance des sociétés (S4.P3), ordre « slithery », pas de formule (S6.P2) ; remplacent « vaut mieux que rien » et « Meadows est claire » non financés
pouvoir d’ouverture            2/4     3/4     fin sur le levier n° 1 (aucun paradigme n'est « vrai ») et « There are no cheap tickets to mastery » : tension tenue par la source, au lieu de S5.P4 non sourcé ; l'extrait tronqué sur la transcendance est respecté (pas de développement)

TEST DU DELTA (nouvelle version)
- lead[0] : la question « où appuyer », gestes de portée inégale.
- lead[1] : définition de l'auteur (petit changement, grands effets), liste de douze, avertissement.
- S1.P1 : sens de l'ordre (12 faible → 1 fort) et échelle exacte.
- S1.P2 : stock, flux, temps d'accumulation, deux boucles qui amènent le niveau à un but.
- S1.P3 : but et boucles invisibles, d'où le contre-intuitif.
- S2.P1 : définition du paramètre ; la dette, débattue sans effet sur la trajectoire.
- S2.P2 : « least leverage », part d'attention ; comptent à court terme mais changent rarement le comportement.
- S2.P3 : exception des plages critiques, et sa rareté.
- S3.P1 : le rang mêle puissance et faisabilité ; délais (dépassement, effondrement), forts s'ils étaient modifiables.
- S3.P2 : structure physique : levier dans la conception initiale.
- S3.P3 : information comme nouvelle boucle, bon marché, au bon endroit.
- S4.P1 : règles, et le pouvoir sur elles.
- S4.P2 : but lu dans le comportement ; changer les acteurs, faible sauf au sommet.
- S4.P3 : paradigme source de tout ; objection et réponse ; résistance des sociétés.
- S5.P1 : le renversement aggrave systématiquement (delta mince, voir régressions).
- S5.P2 : Forrester : le levier est déjà poussé, dans le mauvais sens.
- S5.P3 : la découverte ne sera pas crue.
- S6.P1 : naissance et révision de la liste, « work in progress ».
- S6.P2 : ordre « slithery », pas de formule.
- S6.P3 : niveau ultime et « no cheap tickets ».
Aucune séquence de trois paragraphes au delta identique ; aucune section principalement redondante.

défauts initiaux corrigés :
- S1.P3 ancien : entrée fausse « le pouvoir de changer les règles » remplacée par le n° 4 réel.
- S1.P4 ancien : baignoire inversée (« on sent immédiatement ») remplacée par la baignoire de Meadows et sa leçon d'invisibilité.
- S2.P1 ancien : « logique simple » retirée ; remplacée par le rang qui mêle puissance et faisabilité (S3).
- S2.P2 ancien : « il ne menace personne » remplacé par « batailles féroces » sourcé.
- S3.P4 ancien : mécanisme inventé supprimé ; le mécanisme vient désormais de S1.P3 et S3.P1.
- S4.P2/S4.P3 anciens : justifications non financées remplacées par plages critiques et « aucune formule rapide ou facile ».
- S5 ancienne entière (usages non sourcés, redondance S5.P3/S3.P2) supprimée.
- lead[1] : biographie rhétorique et réception retirées ; définition de l'auteur ajoutée.
- Palier central manquant (ce que fait un niveau et pourquoi il est là) : construit en S2-S4.

régressions détectées :
- Aucune régression conceptuelle. Rien de solide perdu : lead[0], S1.P1, l'avertissement, Forrester, l'incrédulité et l'histoire de la liste sont conservés, et « la personne qui décide » du lead reçoit enfin un contenu (S4.P2).
- Mineure : l'avertissement est dit trois fois (lead[1] « à l'envers », S1.P3 « not intuitive », S5.P1 « ne sont pas intuitifs », la même idée sous deux langues). S5.P1 ne garde en propre que « systematically worsening » ; ce n'est pas une séquence redondante, mais S5.P1 pourrait se resserrer.
- Mineure : S1.P1 garde une énumération technique dont plusieurs entrées (niveaux 7, 8, 10, 11) ne sont jamais expliquées ; c'est le prix de la matière mince, pas une régression.
- Croissance +28 % (1 088 → 1 396 mots lecteur, au compteur du réécrivain), au-dessus de la zone de la corrélation observée ; elle est ici financée phrase par phrase et validée par le gate 81/81, et le total reste dans la fourchette 1 300-1 700 de PROTOCOLE.md §5. Ce n'est pas une baisse de profondeur obtenue en raccourcissant, ni un allongement sans delta.
- `limits` : aucune remontée dans le texte lecteur (ni Whole Earth, ni Abson / Fischer & Riechers, ni méthode de repérage, ni fin de l'extrait tronqué).

raison de la décision : FACTCHECK_PASS sur le SHA exact ; les fautes documentaires majeures de l'ancienne version (entrée fausse, baignoire inversée, contradiction sur les paramètres, mécanismes inventés, section d'usages non sourcés) sont supprimées, et le palier central qui manquait est construit avec les mécanismes et exemples de l'auteur, chaque exemple ayant une fonction distincte. Progression au moins aussi claire, profondeur nettement accrue, aucune séquence ni section redondante. Les deux faiblesses résiduelles (avertissement répété en S5.P1, énumération dense en S1.P1) sont mineures. ACCEPT.
