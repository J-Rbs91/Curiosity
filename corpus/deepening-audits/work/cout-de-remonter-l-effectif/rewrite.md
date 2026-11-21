concept : cout-de-remonter-l-effectif
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=cout-de-remonter-l-effectif`, « 1 approfondissement(s) contrôlé(s), 1367 mots. Rien projeté. »)

Matière lue : PROTOCOLE.md, AUDIT_PROTOCOL.md, FACTCHECK_PROTOCOL.md, l'ancien deepening, corpus/validated/cout-de-remonter-l-effectif.json (pas de champ `dossier`, donc `non-declare`), corpus/evidence/cout-de-remonter-l-effectif/ (un seul fichier, lecture.json, lu en entier ; pas de scouting.json), audit.md, factcheck-pack.json (100 supports).

## Volume

- Texte lecteur (lead + sections), mots séparés par des espaces : 1 248 avant, 1 147 après (-8 %).
- limits : 195 avant, 220 après (le quatrième paragraphe borne désormais le mémorandum de Holt, Modigliani et Simon, qui entre dans le texte lecteur).
- Sections : 5 avant, 5 après. Paragraphes lecteur : 16 avant, 15 après.

Le texte reste sous la cible de 1 300 mots, au-dessus du plancher de 1 100. C'est voulu : la matière s'arrête au folio 40, et l'audit n'autorisait que des substitutions.

## Ce qui a été retiré ou fusionné (pas de financement nécessaire)

- lead[1] : retirés « Au printemps 1955… écrit » (date de rédaction non établie, seule la révision l'est), « en deux paragraphes » (non établi, cf. audit A-b), et le remplissage du coût de remontée attribué implicitement au texte. L'image (retrouver des gens, les installer, attendre qu'ils tiennent le rythme) est conservée mais ouverte par « Imaginons », donc marquée comme vignette du lecteur.
- S1.P1 : retirés « le deuxième d'entre eux » (faux : § 1 est « Preliminaries ») et « problèmes d'ordonnancement » ; la notice bibliographique réduite à titre et numéro.
- S2.P2 ancien (« Deux fois plus haut que le besoin… », « C'est le prix d'un état ») : supprimé ; l'illustration correcte (écart double ou durée double) est fondue dans S2.P1.
- S3.P2 ancien et S3.P3 ancien : la troisième et quatrième reformulation état / changement supprimées ; le max(dx/dt, 0) passe après l'hypothèse qui le fonde (ordre de la phrase de Bellman).
- S4.P1 ancien : « Reste un troisième terme » et « et souvent cher » supprimés.
- S4.P2 ancien (redite du lead) : supprimé, remplacé par le critère.
- S5.P2 : « Deux folios plus loin » remplacé par « Juste après le critère, au folio 40 ».
- S5.P3 ancien (maxime, « Il n'y a là aucun manque », redite de la signature unique) : supprimé, remplacé par l'ouverture partie V.
- « ni recrutement, ni apprentissage du poste, ni désorganisation » : retiré. Aucun support n'établit explicitement que Bellman « ne dit pas de quoi ce coût est fait » ; la formulation retenue (« sans donner aucun exemple d'atelier réel », « aucun ordre de grandeur » pour a) est celle de SUP-90d253780b3f39bb, mot pour mot dans le fond. Écart volontaire avec l'audit, qui tenait cette absence pour financée.

## Ajouts et supports qui les financent

1. lead[0], « la demande monte, retombe, puis remonte » : r(t) « oscillatory », SUP-079a95da56ea8995.
2. lead[1], « sans donner aucun exemple d'atelier réel » : SUP-90d253780b3f39bb ; « révisé le 23 mai 1955 » : SUP-1dbf1b7c41d6c2c3, SUP-220581fb2b7519c4 ; « l'une à la suite de l'autre » : SUP-8a18ad697e763e0c ; « un seul critère » : SUP-079a95da56ea8995.
3. S1.P1, cadre du § 1 (« occasionally called "smoothing" » rendu « que l'on appelle parfois de lissage », verbatim « we wish to maintain a system in a given state, with penalties for deviations from this state », pénalité symétrique ou double) : SUP-079a95da56ea8995, SUP-c8f6805cce300810. Substitution de la notice.
4. S1.P2, « committments requiring a quantity r(t) » rendu « ce que les engagements requièrent », r(t) oscillant, verbatim « which is to say we are required to meet our committments come what may » (graphie originale conservée) : SUP-079a95da56ea8995, SUP-c8f6805cce300810 ; x(t) quantité de travail et non personnes : SUP-dbd8217f510c3ab3, SUP-ed631393b3b5a9cf ; « An Industrial Smoothing Problem » après § 1 : SUP-dac242ba32f415af.
5. S1.P3, mise en regard pénalité du § 1 / contrainte du § 2, marquée « On peut lire là un choix » (interprétation) : SUP-079a95da56ea8995 (les deux verbatim) ; absence de stock : SUP-90d253780b3f39bb.
6. S3.P2, Holt, Modigliani et Simon (mémorandum de mai 1955, coût d'embauche et de licenciement, répartition stock / heures / effectif, Bellman ne les cite pas, dosage contre asymétrie) : SUP-3a1f08f32d8d151a, SUP-71169a297336aded, SUP-5127db0208c54f63, SUP-9540c7a3f4e41d4a. Remplace « et souvent cher ». Rien d'autre sur le contenu du mémorandum.
7. S4.P1, le critère en mots (somme de 0 à T de l'écart plus a fois max(dx/dt, 0), « where a is some positive constant », minimisation sous x(t) ≥ r(t), version discrète par somme), et l'absence d'ordre de grandeur de a : SUP-079a95da56ea8995, SUP-90d253780b3f39bb. Lecture de a comme prix relatif marquée « On peut lire ». Le gloss d'« absolutely continuous » a été écarté (aucun support).
8. S4.P2, vignette stipulée (« Imaginons un creux de demande d'un mois ») sans chiffre, conséquence marquée « Il en découle » ; « Bellman n'écrit nulle part… capacité d'avance » : SUP-90d253780b3f39bb ; « calculable » fondé désormais par le critère rendu au paragraphe précédent (SUP-079a95da56ea8995).
9. S5.P2, folio 40, renvoi à un travail coécrit avec Glicksberg et Gross : SUP-dac242ba32f415af, SUP-04f913376a84c1c2, SUP-079a95da56ea8995.
10. S5.P3, partie V « Production Smoothing » en désignation seulement (quinze pages d'écart, programmation linéaire, excédent accumulé, coût de stockage, seul modèle sans stock) : SUP-703c62d71d9397a2, SUP-393e88a2d2c9e1a1.

Aucune prescription de l'audit n'a été rejetée faute de support, hormis l'affirmation d'absence « Bellman ne dit pas de quoi ce coût est fait » (resserrée, voir plus haut) et le gloss d'« absolument continue ».

## Delta par paragraphe (nouvelle version)

- lead[0] : la situation-problème, coût de l'excédent proportionnel à la durée, réflexe de coller au besoin.
- lead[1] : un second coût, attaché au changement ; image marquée comme vignette ; auteur, rapport, critère unique.
- S1.P1 : ce que « lissage » veut dire chez Bellman (état maintenu, pénalités d'écart, symétriques ou non).
- S1.P2 : x(t) travail et non effectif, r(t) besoin oscillant, contrainte « come what may ».
- S1.P3 : la pénalité du cadre devient contrainte ; pas de stock ; seul levier, niveau et moment.
- S2.P1 : forme du premier coût, proportionnalité écart × durée, recommandation de réduire l'écart.
- S2.P2 : retournement, « cannot be done without cost », proportionnel à dx/dt.
- S3.P1 : hypothèse de gratuité de la baisse, d'où max(dx/dt, 0), seule la montée facturée.
- S3.P2 : statut d'hypothèse ; Holt, Modigliani et Simon comptent ce coût ; dosage contre asymétrie.
- S4.P1 : le critère, une seule constante a, sans ordre de grandeur.
- S4.P2 : l'arbitrage rendu visible par une vignette ; pas de recommandation de Bellman.
- S5.P1 : statut d'exposé du rapport, crédits à d'autres.
- S5.P2 : solution simple renvoyée au trio et à Karlin.
- S5.P3 : ouverture, l'autre lissage du même rapport, avec stock.

Le noyau état / changement n'apparaît plus qu'une fois (lead[1]) ; S3.P2 le reprend sous l'angle de la comparaison avec un autre modèle, ce qui est un delta de connexion.

## limits

Inchangés sur le fond pour les trois premiers. Le quatrième borne désormais les deux voisins entrés dans le texte lecteur (partie V et mémorandum de Holt, Modigliani et Simon) à leurs traits désignés. limits reste interne et n'est remonté nulle part dans le texte lecteur.

## À l'orchestrateur

Le deepening a changé : le SHA du pack est invalidé, reprendre à PREPARE. Aucune autoévaluation de fact-check n'est rendue ici.

---

## Correction FACTCHECK_FIX — boucle 1/2 (gate sur SHA 89311757…)

Correction minimale, aucune affirmation nouvelle. Texte lecteur : 1338 mots après (environ 1360 avant).

- **C001 (TOO_STRONG)** — « Un atelier ne reçoit pas la même charge d’un mois à l’autre… » transformait l’hypothèse du modèle (`r(t)` oscillatoire, SUP-079a95da56ea8995) en constat d’atelier à granularité mensuelle. Borné en hypothèse : « Supposons un atelier dont la charge oscille : la demande monte, retombe, puis remonte. »
- **C003 (TOO_STRONG)** — « Le réflexe vient tout seul » (généralisation psychologique) remplacé par « D’où l’idée de ramener la capacité au niveau exact du besoin, et de l’y tenir. » ; en conséquence « Ce réflexe a une face… » devient « Ce geste a une face… » (lead[1]).
- **C005 (UNSUPPORTED)** — phrase « Imaginons ce que cela demande, retrouver des gens, les installer, attendre qu’ils tiennent le rythme. » retirée : le modèle ne décrit pas la nature du coût de montée.
- **C025 (UNSUPPORTED)** — « Le premier coût est celui que tout le monde voit. » retiré ; la phrase suivante devient « Le premier coût, Bellman l’écrit ainsi : « … » ».

Ajouts : aucun. `npm run corpus:deepen -- --check --only=cout-de-remonter-l-effectif` : PASS. Le SHA a changé : reprendre à PREPARE.
