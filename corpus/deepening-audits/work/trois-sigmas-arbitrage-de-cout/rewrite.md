# Réécriture — trois-sigmas-arbitrage-de-cout

concept : trois-sigmas-arbitrage-de-cout
mode : REVISE (resserrement, architecture conservée)
protocoles lus : `PROTOCOLE.md`, `AUDIT_PROTOCOL.md` (v3), `FACTCHECK_PROTOCOL.md`
audit d'entrée : `corpus/deepening-audits/work/trois-sigmas-arbitrage-de-cout/audit.md` (verdict REVISE,
fidélité documentaire 3/4, densité 3/4)

## Matière effectivement disponible, vérifiée par listage

`ls corpus/evidence/` rend 126 entrées, **aucune** pour ce concept : il n'existe pas de dossier de
preuve `corpus/evidence/trois-sigmas-arbitrage-de-cout/`. La seule matière autorisée est donc
`corpus/validated/trois-sigmas-arbitrage-de-cout.json` : `quotation` (texte français, `original_text`,
note de traduction interne), `summary`, `attribution_note`, treize `notes`, les huit notes de `review`
et les deux objets `sources`.

`sources[1]` (réimpression ASQC 1980, ISBN 978-0-87389-076-2) est `metadata-only`. Elle n'est
employée nulle part comme contenu : elle n'apparaît que dans `limits[3]`, sous la forme qui ne dit
rien de son texte (« vérifiera les siens en l'ouvrant »). Ce statut n'a pas bougé.

Aucune recherche extérieure, aucun apport de connaissance générale : l'ouvrage de Shewhart n'est pas
reproduit dans le dépôt, et rien de ce qui a été ajouté ne vient d'ailleurs que des champs ci-dessus.

## Volume

| | avant | après |
|---|---|---|
| texte lecteur (`lead` + `sections`) | 1252 mots | **1217 mots** |
| `limits` (interne, non affiché) | 191 mots | 201 mots |
| total compté par le script | 1443 mots | 1418 mots |
| paragraphes lecteur | 17 | 17 (un supprimé, un ajouté) |

`npm run corpus:deepen -- --check --only=trois-sigmas-arbitrage-de-cout` : **PASS**
(« 1 approfondissement(s) contrôlé(s), 1418 mots. Rien projeté. »)

Le texte lecteur est plus court de 35 mots alors qu'il absorbe trois matières nouvelles prescrites
par l'audit (la seconde phrase de la `quotation`, la forme stricte de l'inégalité, le mémorandum de
1924) : le resserrement porte donc sur environ 145 mots de redondance effacée.

## Les quatre groupes redondants, et ce qui en a été fait

**1. lead[0] / S1.P1 — la substance de l'arbitrage servie deux fois.**
`lead[0]` est conservé **mot pour mot** (l'audit le donne comme le meilleur passage du texte).
S1.P1 ne redécrit plus les deux erreurs : il va droit à ce qu'il ajoute, à savoir que l'arbitrage est
posé par l'auteur et où (« L'arbitrage n'est pas reconstruit après lui : Shewhart le pose page 276,
dans une phrase où les deux erreurs deviennent deux postes de dépense »). Le verbatim de `notes[3]`
est cité intact, et sa glose française rend désormais le ressort que l'audit signalait escamoté
(« ce qu'on gagne à augmenter la valeur P, en réduisant le coût de chercher un ennui qui n'existe
pas »), ce que S1.P2 exploite ensuite.

**2. lead[1] / S2.P2 — les deux mots italiques annoncés puis redits.**
L'observation sur `empirical` et `economic` vit maintenant à **un seul endroit**, S2.P2, là où le mot
`empirical` est cité (appui : `notes[2]`). `lead[1]` perd cette annonce et gagne à la place ce que
l'audit signalait absent : la réponse est un nombre, trois, choisi sur l'expérience et non calculé
(appuis : `quotation`, `attribution_note`). La pagination 276-277, l'année 1931, New York, le titre,
la signature unique et la mention de la page de titre sont inchangés.

**3. S1.P2 → fin de S3.P3 → S4.P3 — la conclusion « le coût, pas la loi » servie trois fois.**
Elle ne l'est plus qu'une fois, en S1.P2, qui est conservé intact.
- la dernière phrase de S3.P3 (« le seuil de détection est réglé sur ce qu'il en coûte… ») est
  **remplacée** par la phrase de Shewhart que le texte ne donnait pas : verbatim anglais
  « Experience indicates that t = 3 seems to be an acceptable economic value », puis la traduction
  validée de la `quotation`, « L'expérience indique que t = 3 semble être une valeur économique
  acceptable ». La formule fautive « économiquement acceptable » disparaît : la note de traduction
  protège « valeur économique acceptable », et le texte explicite désormais que l'adjectif porte sur
  la valeur elle-même. « Trois sigmas » devient explicite ici, et non en subordonnée.
- **S4.P3 est supprimé** (paragraphe sans delta). Sa seule idée propre, l'effet pratique du
  contresens, est logée en une phrase à la fin de S4.P2 ; la phrase « une probabilité ne suffit
  jamais à fixer un seuil » n'est pas reprise, puisque c'était la troisième occurrence de la
  conclusion de S1.P2. S4 compte deux paragraphes, comme la trajectoire cible le demandait.
- S4.P1 perd sa dernière incise (« celle de s'alarmer pour rien et celle de ne pas s'alarmer à
  temps »), qui rejouait `lead[0]`.
- S1.P3 perd sa dernière proposition (« aucun calcul de probabilité ne décide à la place de celui
  qui paie »), qui anticipait la même conclusion. L'exemple des deux ateliers est conservé tel quel,
  marqué comme hypothétique dès « Imaginons deux ateliers voisins ».

**4. S2.P3 / S5.P3 — « une limite empirique se conteste par son coût ».**
La proposition reste en S2.P3, resserrée (« la première se conteste par une erreur de calcul, la
seconde par son coût »), et **disparaît de S5.P3**, qui ne tient plus que sur la robustesse
conditionnelle : une règle adossée à la loi normale tombe avec la normalité, une règle adossée à
l'expérience survit à l'ignorance de la loi et c'est un atelier où le compte cesse d'y être qui la
mettrait en défaut. Sa première phrase d'annonce (« L'écart n'est pas anodin pour qui veut se servir
de la règle ») est supprimée : elle annonçait l'importance sans rien apprendre.

## Les autres corrections locales prescrites

- **« Le calcul est juste » (S5.P1) est retiré.** Le calcul est rendu à son énonciateur : « Ce calcul
  est le leur, et c'est à Shewhart qu'ils l'attribuent couramment ; il ne figure pas dans ces deux
  pages. » Le chiffre 0,27 % est inchangé et reste porté par `notes[1]`, qui l'atteste comme
  justification qui circule, non comme résultat certifié par le dépôt.
- **Le bornage de l'absence est conservé mot pour mot** : « il ne figure pas dans ces deux pages »
  dans le texte lecteur, « introuvable sur ces deux pages, ce qui ne dit rien des cinq cents autres »
  dans `limits[1]`. Rien n'a été durci en absence dans l'ouvrage entier, conformément à `notes[1]` et
  à `AUDIT_PROTOCOL.md` §5.
- **S3.P2, « elle ne suppose aucune forme particulière de distribution », est retiré comme propriété
  affirmée.** La phrase est refondue en conséquence de ce que Shewhart fait de l'inégalité, et
  explicitement marquée comme lecture : « Shewhart l'invoque juste après avoir écrit que la loi lui
  échappe : on peut comprendre l'inégalité comme ce qui reste quand cette loi est inconnue. »
- **`notes[12]` est désormais exploitée** : S3.P1 précise que Shewhart écrit l'inégalité avec un signe
  strict là où l'énoncé usuel emploie un signe large. La formule affichée reste P > 1 − 1/t², telle
  que `notes[12]` la porte.
- **S2.P1 : « la grandeur qu'on porte sur le graphique » devient « la grandeur qu'on suit »**, aucun
  graphique n'ayant été introduit et `notes[5]` rappelant que sa construction n'est pas instruite.
- **S2.P3 et S5.P3 marquent leur statut dérivé** sans étiquetage (« On peut en tirer que… »,
  « on peut comprendre… »), conformément au tableau de `PROTOCOLE.md` §4.
- **Ouverture (axe H)** : un quatrième paragraphe de S5, court, donne au lecteur un objet nommé vers
  lequel aller : le choix de t = 3 est posé d'abord dans un mémorandum du 16 mai 1924 à Bell Telephone
  Laboratories, argumenté seulement ensuite dans ces pages, et « ce que ce mémorandum en dit, il
  faudra l'ouvrir pour le savoir ». Existence, date et institution sont établies par la note
  ATTRIBUTION du contrôle ; **rien n'est dit de son contenu**, et aucune durée calculée (« sept ans »)
  n'a été introduite, faute d'être portée mot pour mot par la matière.

## Grandeurs numériques : état après réécriture

Aucune n'a été retouchée, ni ajoutée, ni déplacée hors de son appui.

| grandeur | appui | état |
|---|---|---|
| p. 276-277 | `sources[0].locator`, `review` SOURCES 1/2 | inchangée |
| 1931, New York | `sources[0].label`, `quotation.reference` | inchangée |
| P > 1 − 1/t² | `notes[12]` | inchangée (forme stricte, désormais signalée) |
| t = 3 | `quotation.text` / `original_text` | inchangée, et désormais citée |
| 0,27 % | `notes[1]` | inchangée, et rendue aux manuels |
| trente personnes, une demi-journée | exemple explicitement hypothétique | inchangé |

## Delta de chaque paragraphe, après réécriture

- `lead[0]` : deux façons de se tromper, et le fait qu'elles ne se paient pas dans la même monnaie.
- `lead[1]` : où la réponse se décide, sous quelle signature, et que cette réponse est un nombre choisi
  sur l'expérience.
- S1.P1 : l'arbitrage est posé par l'auteur lui-même, en une phrase, et P y est ce qu'on augmente.
- S1.P2 : le mécanisme, une seule commande à deux effets opposés, donc aucun optimum commun.
- S1.P3 : conséquence et cas concret où la même mesure n'appelle pas la même réaction.
- S2.P1 : pourquoi la voie du calcul est fermée, la loi de la grandeur suivie étant inconnue.
- S2.P2 : la question et la réponse de Shewhart, et les deux mots qui portent l'argument.
- S2.P3 : deux régimes de justification, et deux manières de contester une limite.
- S3.P1 : l'inégalité imprimée au-dessus, les unités t et sigma, et sa forme strictement écrite.
- S3.P2 : ce que l'inégalité borne sans choisir, d'où « We are still faced with the choice of t ».
- S3.P3 : la valeur retenue, dans la phrase de l'auteur, et le sens exact de son adjectif.
- S4.P1 : le contresens symétrique désarmé, Shewhart employant la probabilité.
- S4.P2 : la formule fidèle, le raccourci à refuser, et l'effet pratique de la confusion.
- S5.P1 : la justification courante, son chiffre, son énonciateur réel, son absence de ces deux pages.
- S5.P2 : pourquoi cette justification est incompatible avec l'argument des deux pages lues.
- S5.P3 : ce que l'écart change pour l'usage, robustesse conditionnelle de la règle.
- S5.P4 : la valeur précède le livre, et le texte qui la pose d'abord reste à ouvrir.

Aucun paragraphe consécutif ne partage son delta ; aucune section ne répète principalement une
section antérieure.

## Frontière interne

`limits` reste interne et n'affleure nulle part dans le texte lecteur. Un seul de ses paragraphes a
été modifié, `limits[2]` : le mémorandum de 1924 figurant désormais dans le texte lecteur par son
existence et sa date, la limite énonce explicitement l'affirmation interdite (« Seules son existence
et sa date sont disponibles : rien ne peut être écrit des termes qu'il emploie »). Les trois autres
paragraphes sont inchangés, dont celui qui confine la réimpression ASQC 1980 à son statut
`metadata-only`.

## Réserves, laissées au gate et non corrigées

1. `notes[2]` écrit « we never know f(θ, n) in sufficient detail », la note PROSE du contrôle écrit
   « we never know fθ(θ, n) in sufficient detail ». Le texte a **conservé la forme de `notes[2]`**,
   déjà retenue par la version auditée : je n'ai aucun moyen d'arbitrer sans dossier de preuve, et
   toute retouche aurait changé une citation sans l'améliorer. Le point revient au gate.
2. S3.P2 énonce comme lecture marquée (« on peut comprendre ») ce que la matière n'établit qu'en
   creux, par l'endroit où Shewhart invoque l'inégalité. Si le verifier juge que même ce marquage
   excède l'appui, la phrase se supprime sans dommage pour la section, qui tient sur « l'inégalité
   borne, elle ne choisit pas ».
3. S5.P4 ne repose que sur la note ATTRIBUTION du `review`, qui établit l'existence, la date et
   l'institution du mémorandum. Si le gate juge cet appui insuffisant pour le texte lecteur, le
   paragraphe se retire en entier et la carte revient à la fin de S5.P3, sans autre reprise.
4. Aucun dossier de preuve n'existant pour cette carte, toute vérification faite ici reste interne à
   l'enregistrement validé. Aucune auto-validation n'est prononcée : ni `ACCEPT`, ni `FACTCHECK_PASS`.

Toute modification du texte invalide le SHA : l'orchestrateur doit reprendre à `PREPARE`.

---

# Addendum, boucle de correction factuelle 2 sur 2

Cette passe est une correction factuelle, non une réécriture : huit claims `TOO_STRONG`, dont cinq
tenant à une seule racine (l'identification de `t = 3` à « trois sigmas », que rien dans la matière
disponible n'appuie, sigma n'y étant défini nulle part). Le compte rendu complet, geste par claim, la
relecture de résidu et les volumes avant/après sont dans `factcheck-fixes.md`, section
« Boucle 2 sur 2 ».

Conclusion de cette passe : le concept tient sans l'identification (arbitrage de coût et base
empirique sont entièrement appuyés), donc pas de `BLOCKED_SOURCE` ; la perte est la traduction du `t`
en unité, et elle est inscrite dans `limits`.
