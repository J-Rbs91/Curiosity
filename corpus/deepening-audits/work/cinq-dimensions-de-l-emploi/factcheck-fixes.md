# Correction factuelle, boucle 1/2

Concept : `cinq-dimensions-de-l-emploi`
Mode : FACTCHECK_FIX (gate `FACTCHECK_FAIL`, 59 claims, 42 SUPPORTED, 11 TOO_STRONG, 6 UNSUPPORTED,
aucune erreur structurelle).
Version corrigée du SHA `9336311307aa19fb924327b7582990e62be2488796eea3ca72785fae63255f65` : ce SHA
est désormais invalide, le cycle doit repartir à `PREPARE`.

## Les deux motifs du gate, et ce qu'ils imposaient

1. **Aucune définition citable des cinq dimensions.** `notes[6]` dit expressément qu'aucune
   définition n'a pu être citée (la plus courte, Task Identity, fait 171 signes). Tout
   rattachement d'un exemple à une dimension nommée sortait donc, quelle que soit sa prudence.
   Seule exception conservée : le retour donné par le travail lui-même, que `notes[5]` définit
   explicitement (« le retour d'information que donne le travail lui-même, non le retour donné
   par des tiers ») et que le verifier avait validé en C011.
2. **Le maillon « états → résultats » n'est porté par aucun support résolu.** Les supports
   s'arrêtent à « cinq dimensions → trois états ». Toute médiation, toute négation d'effet
   direct, toute exclusive et toute condition de nécessité sortaient ou se bornaient. La seule
   mention d'outcomes du dossier est dans `review.notes[7]`, qui décrit une Figure 1 reliant
   directement Core Job Dimensions et Personal and Work Outcomes : elle contredisait la négation
   d'effet direct plutôt qu'elle ne la fondait.

## Opération retenue, claim par claim

| Claim | Verdict | Opération | Ce qui a été fait |
|---|---|---|---|
| C001 | UNSUPPORTED | REMOVE | « Dire que la première est plus motivée que la seconde n'explique rien » supprimé : aucune preuve ne porte sur la valeur explicative d'une attribution à la motivation individuelle. |
| C002 | TOO_STRONG | REMOVE | L'exclusive « n'est pas dans les deux personnes, il est dans les deux postes » supprimée. Remplacée par une question (« Qu'est-ce qui, au juste, sépare ces deux postes ? »), qui pose le problème sans rien affirmer. |
| C005 | TOO_STRONG | NARROW | La négation d'effet direct sur la qualité et le « c'est cela qui ferait le reste » sortent. Le lead ne porte plus que la relation attestée : les cinq caractéristiques « créent chez la personne qui occupe le poste trois états psychologiques ». |
| C008 | UNSUPPORTED | REMOVE | Rattachement de l'exemple à Task Identity supprimé. |
| C009 | UNSUPPORTED | REMOVE | Rattachement à Autonomy supprimé. |
| C010 | UNSUPPORTED | REMOVE | Rattachement à Task Significance supprimé. |
| C014 | UNSUPPORTED | REMOVE | « Cette liste n'est pas faite pour décrire ce qui rend un travail agréable » supprimé ; la phrase suivante, appuyée sur le titre du rapport (C015-C017), porte seule l'idée. |
| C021 | TOO_STRONG | REMOVE | « Rien n'y relie directement les caractéristiques aux résultats attendus : entre les deux, trois états sont intercalés » supprimé (ajoutait le maillon états → résultats). |
| C022 | TOO_STRONG | NARROW | La chaîne « expérience → effort et soin » et la nécessité exclusive sortent. Reste une glose de la phrase citée : ce qu'elle place à la sortie des cinq dimensions, ce sont des états, « quelque chose que la personne qui occupe le poste éprouve », au nombre de trois et dits critiques. |
| C023 | TOO_STRONG | REMOVE | « pas des causes directes de performance, mais des causes d'une expérience » supprimé : la négation se heurtait à la Figure 1 décrite par `review.notes[7]`. |
| C029 | TOO_STRONG | REMOVE | Paragraphe entier supprimé : il reposait sur la condition nécessaire « ne compte que si », donc sur la chaîne vers les résultats. |
| C030 | TOO_STRONG | REMOVE | Même paragraphe : la variabilité d'un même aménagement selon les postes supposait un facteur individuel ou contextuel qu'aucun support ne porte (`review.notes[7]` note au contraire que le modérateur growth need strength n'est pas couvert). |
| C040 | TOO_STRONG | NARROW | « et elle arrive à l'instant » supprimé ; `notes[5]` n'atteste que la source du retour. L'immédiateté subsiste seulement dans l'exemple inventé de la soudure, que le verifier avait validé en C039. |
| C041 | TOO_STRONG | REATTRIBUTE | « La liste n'est pas née en 1974 » devient « La théorie dont cette liste sort s'appuie sur des travaux antérieurs », ce que le rapport écrit de lui-même p. 2 ; la paternité de la formulation à cinq dimensions n'est plus contestée. |
| C052 | TOO_STRONG | NARROW | « sans cesser d'être mesuré » supprimé : `notes[4]` n'atteste la mesure en 1974 que de Dealing with Others, ce que la phrase précédente (C050) dit déjà exactement. |
| C055 | TOO_STRONG | NARROW | « la démonstration que la chaîne tient… et les trois états les résultats » devient « ce qui mettrait la théorie à l'épreuve », strictement ce que `notes[8]` attribue au Technical Report No. 6, avec la limite dite du côté du lecteur (« il faudra l'ouvrir »). |
| C058 | UNSUPPORTED | REMOVE | L'appréciation critique du score (ce qu'il « suppose » et « écrase ») supprimée ; reste le constat de renvoi, déjà validé en C059. |

Aucune affirmation neuve n'a été introduite pour combler une coupe. Aucun `SUP-...` n'a été
touché, ni les artefacts de fact-check.

## Effet sur la charpente

- Section 2 passe de 3 à 2 paragraphes (suppression du paragraphe C029/C030).
- Titre de la section 2 : « Le détour par ce que la personne éprouve » devient « Ce que les cinq
  dimensions créent ». Le mot « détour » présupposait à lui seul la médiation vers des résultats,
  qu'aucun support n'établit ; le nouveau titre nomme ce que la phrase citée porte réellement.
- Section 1, premier paragraphe : la série de rattachements devient une seule reconnaissance
  (celle du retour donné par le travail) suivie du renvoi aux définitions de la p. 5, avec la
  formule côté lecteur « il faudra les lire ».
- Le lead perd sa thèse et garde son problème : les deux postes, puis la question.

## `limits`

Une frontière découverte par la correction a été ajoutée au troisième paragraphe : « Aucune phrase
disponible ne relie non plus les trois états à un résultat de travail : ce maillon ne s'écrit pas,
ni sa négation. » Elle enregistre, pour les agents suivants, que la négation d'effet direct est
aussi interdite que l'affirmation de médiation. Aucun contenu de `limits` n'est remonté dans le
texte lecteur.

## Volumes

| | avant | après |
|---|---|---|
| texte lecteur (lead + sections) | 1 238 mots (audit) puis 1 502 après révision | 1 266 mots |
| lead | 202 mots | 158 mots |
| total compté par le contrôle (limits inclus) | — | 1 509 mots |

La baisse de 236 mots est intégralement due aux coupes ci-dessus ; aucune n'a été compensée.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=cinq-dimensions-de-l-emploi`
→ « 1 approfondissement(s) contrôlé(s), 1509 mots. Rien projeté. » : PASS.

Aucune auto-validation : ni `ACCEPT`, ni `FACTCHECK_PASS`. Le texte doit repasser par `PREPARE`,
le mapping et le verifier.

---

# Correction factuelle, boucle 2/2

Mode : FACTCHECK_FIX (gate `FACTCHECK_FAIL`, 47 claims, 44 SUPPORTED, 3 TOO_STRONG, aucune
erreur structurelle). Version corrigée du SHA
`ff3e6d492eaa604b52754eed847843761e3f95f43c51aa9384192d3efc0c844a` : ce SHA est désormais
invalide, le cycle doit repartir à `PREPARE`.

Dernière boucle autorisée. La correction est donc strictement bornée aux trois claims en échec :
aucun autre mot du texte lecteur n'a été touché, aucune phrase n'a été ajoutée pour compenser une
coupe, `limits` est inchangé, et la charpente (lead + 5 sections, 2-3 paragraphes) est intacte.

## Opération, claim par claim

| Claim | Locator | Opération | Ce qui a été fait |
|---|---|---|---|
| C012 | `sections[0].paragraphs[1]` | REMOVE | Phrase finale supprimée en entier : « C’est cet usage qui explique la forme de la liste : cinq entrées seulement, chacune définie d’assez près pour qu’on puisse la coter. » Elle portait deux choses non attestées, une causalité de conception prêtée au rapport et une propriété de cotation des définitions. Le resserrement fidèle n'aurait laissé que « la liste compte cinq entrées », que le lead et le premier paragraphe de la section disent déjà : coupe nette plutôt que répétition. |
| C019 | `sections[1].paragraphs[1]` | NARROW | « Les deux autres états, la phrase les annonce sans les nommer : il faudra ouvrir le rapport pour savoir lesquels, et ce qui les alimente. » devient « Quant aux deux autres états, la phrase citée plus haut les compte sans les nommer. » Le renvoi au rapport présentait comme acquis que celui-ci nomme les deux autres états et ce qui les alimente, ce qu'aucun support n'établit et que `limits[0]` interdit expressément. Ne subsiste que ce que portent les deux supports (`quotation.text`, `quotation.original_text`) : la phrase donne le nombre, pas les noms. |
| C032 | `sections[3].paragraphs[1]` | NARROW | « Une note de bas de page, vers la fin du rapport, donne le détail des deux listes antérieures. » devient « La note 1, page 39, donne le détail des deux listes antérieures. » La localisation « vers la fin » supposait une pagination totale qu'aucun support n'établit, et « note de bas de page » qualifiait la note au-delà de `notes[2]`. La nouvelle formulation reprend exactement la localisation de `notes[2]` : « la note 1, p. 39 ». |

Aucun `SUP-...` n'a été inventé ni modifié ; aucun artefact de fact-check n'a été retouché à la
main.

## Delta d'apprentissage des paragraphes touchés

- `sections[0].paragraphs[1]` : inchangé dans son delta (la liste existe pour être mesurée, le
  titre du rapport le dit, et la mesure sert à comparer un poste avant et après). La phrase
  supprimée n'ajoutait pas de palier, elle commentait le précédent.
- `sections[1].paragraphs[1]` : delta inchangé (un des trois états est nommé, et trois des cinq
  dimensions y poussent ensemble) ; la phrase finale garde son rôle, dire que la phrase de cadrage
  compte trois états sans les nommer, sans plus promettre au lecteur ce qu'il trouverait ailleurs.
- `sections[3].paragraphs[1]` : delta inchangé (les deux listes antérieures, nommées terme à
  terme) ; seule leur localisation devient exacte.

## Volumes

| | avant (boucle 1) | après (boucle 2) |
|---|---|---|
| texte lecteur (lead + sections) | 1 215 mots | 1 178 mots |
| lead | 156 mots | 156 mots (intact) |
| `limits` | 236 mots | 236 mots (intact) |
| total compté par le contrôle | 1 509 mots | 1 470 mots |

Les 39 mots perdus sont ceux des trois opérations ci-dessus ; aucune n'a été compensée. Le total
reste dans la fourchette 1 300-1 700 du protocole.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=cinq-dimensions-de-l-emploi`
→ « 1 approfondissement(s) contrôlé(s), 1470 mots. Rien projeté. » : PASS.

Aucune auto-validation : ni `ACCEPT`, ni `FACTCHECK_PASS`. Le texte doit repasser par `PREPARE`,
le mapping et le verifier.
