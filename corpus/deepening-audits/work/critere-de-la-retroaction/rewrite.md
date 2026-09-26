# Correction factuelle minimale : critere-de-la-retroaction

Date : 2026-09-26
Mode : FACTCHECK_FIX (aucune réécriture)
Texte corrigé : `corpus/deepenings/critere-de-la-retroaction.json`
SHA256 avant correction : `29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222`
(identique au `candidate_sha256` de `factcheck-gate.json` et de `verification.json` : la
correction porte bien sur la version jugée)
SHA256 après correction : `10e489ee25ac51fbbcbf087ff62d5972a485ca546a6ba321d1c11f11de0e0a97`

Ce compte rendu remplace intégralement le précédent, qui décrivait une version antérieure du
texte et n'était plus opposable.

Gate : `FACTCHECK_FAIL`, 59 claims, 52 soutenus, 7 refusés. Seuls les sept claims refusés et ce
que leur retrait rendait incohérent ont été touchés. Aucun des 52 claims soutenus n'a été
reformulé. `limits` est inchangé et reste interne.

Gestes employés : `REMOVE`, `NARROW`. Ni `REATTRIBUTE` ni `MARK_AS_INTERPRETATION` n'ont servi :
aucun des sept refus ne se réparait par un changement d'attribution, et aucun ne se réparait par
un marquage d'interprétation, faute d'appui sous-jacent (un « on peut comprendre ainsi » posé
devant une proposition non soutenue ne crée pas l'appui).

## Mots

| | Avant | Après |
|---|---|---|
| `lead` + `sections` (texte lecteur) | 1 198 | 1 158 |

Solde : moins 40 mots. Les seuls mots ajoutés (une phrase en S2.P2, deux phrases en S5.P3) le
sont pour porter un énoncé borné à un appui du pack, jamais pour assurer une transition.

## Les sept corrections

### C028 `TOO_STRONG` — S2.P3, « l'article lui consacre un développement, avec l'instabilité qu'il engendre »

Geste : `REMOVE` (avec le paragraphe entier, voir ci-dessous).
Motif retenu : la juxtaposition de deux items dans l'énumération de `reserves[0]` (« délai de
traitement et instabilité ») n'autorise aucun lien causal. L'excédent était le lien lui-même,
c'est-à-dire l'intérêt de la phrase : il ne restait rien à borner.

### C029 `TOO_STRONG` — S2.P3, « Entre l'action et l'information qui en revient il y a toujours un temps »

Geste : `REMOVE`.
Motif retenu : aucun appui ne porte l'énoncé universel, et `definition_de_lauteur` dit au
contraire les trois sous-processus « simultanés et continus ». Un bornage (« souvent »,
« fréquemment ») aurait produit une phrase vide et toujours non appuyée.

### C030 `UNSUPPORTED` — S2.P3, « ce temps décide autant que le contenu du signal »

Geste : `REMOVE`.
Motif retenu : aucun appui ne compare le poids du délai à celui du contenu du signal. Une
comparaison sans terme de comparaison dans le dossier ne se borne pas, elle se retire.

### C031 `UNSUPPORTED` — S2.P3, « il peut faire tomber la correction sur une situation qui a déjà changé, et la correction, alors, dérègle au lieu de rattraper »

Geste : `REMOVE`.
Motif retenu : le mécanisme énoncé n'est porté par aucun appui. C'était la seule phrase de
contenu du paragraphe, et elle était intégralement inventée.

#### Sort du paragraphe S2.P3

Les quatre claims du paragraphe sont refusés et le paragraphe ne contenait aucun autre claim :
`claim-map.json` ne lui en attribue pas d'autre. Le dossier ne le porte donc pas du tout, et il
a été supprimé.

Ce qui restait énonçable a été cherché avant le retrait, puis conservé. `reserves[1]` énumère ce
que l'article exige de la boucle et y range explicitement « que le délai ne la rende pas
inutilisable » ; `reserves[0]` atteste par ailleurs que le délai de traitement est un des thèmes
exposés aux p. 6-13. Une seule phrase a donc été adossée à la fin de S2.P2 :

> Le délai, lui, n'est pas neutre : la boucle exige aussi que le temps de traitement ne rende pas
> l'information inutilisable.

Elle n'affirme ni le mécanisme de l'instabilité, ni l'universalité du délai, ni sa prépondérance
sur le contenu. Elle ne redit pas S2.P2 : ce paragraphe établit que l'immédiateté n'est pas
requise, la phrase ajoutée pose la borne symétrique, à savoir que le différé n'est pas sans
limite. C'est exactement l'une des trois issues que l'audit de septembre autorisait pour ce
passage (« Le délai est soit supprimé, soit réduit à une phrase adossée à ce que le dossier porte
réellement »), et la progression de la section, jugée saine, est préservée : le critère change de
porte (l'action), le parachute le rend irréfutable, ce que cela élimine, puis la nuance du
différé et sa borne. La section passe de trois à deux paragraphes, comme les quatre autres.

### C041 `TOO_STRONG` — S4.P1, « Une boucle n'est presque jamais seule. »

Geste : `REMOVE`.
Motif retenu : les appuis établissent une hiérarchisation des boucles décrite par Paquette, pas
un énoncé de fréquence sur les boucles en général. Le retrait ne laisse aucun trou : le contenu
réellement soutenu de cette phrase était la redite anticipée de C042, resté intact, qui suit
immédiatement (« Paquette décrit des boucles hiérarchisées, emboîtées les unes dans les autres,
dont les valeurs de référence peuvent elles-mêmes être déplacées par un niveau supérieur »).
Borner l'ouverture aurait donc fabriqué une redondance pédagogique pour satisfaire le gate. Le
paragraphe commence désormais par C042 ; le titre de section reste juste.

### C044 `TOO_STRONG` — S4.P1, « et il la défend avec la même obstination »

Geste : `NARROW` (troncature de la comparaison d'intensité).
Avant : « Le corps ne manque pas sa température habituelle, il en vise une autre, et il la défend
avec la même obstination. »
Après : « Le corps ne manque pas sa température habituelle, il en vise une autre. »
Motif retenu : « il en vise une autre » suit de la fièvre relue comme modification de la valeur de
référence (`definition_de_lauteur`) ; la comparaison d'intensité de la régulation n'est portée par
aucun appui. Elle est le seul excédent, et la phrase sans elle dit encore ce qu'elle avait à dire.

### C057 `TOO_STRONG` — S5.P3, « Ces quatre termes, il ne les invente pas, ils circulaient déjà »

Geste : `NARROW` (réduction du périmètre de quatre termes à deux, plus restitution du statut des
deux autres).
Avant : « Ces quatre termes, il ne les invente pas, ils circulaient déjà ; ce qu'il leur donne, ce
sont des définitions séparées, et il les propose aux sciences de la communication et à elles
seules. »
Après : « Rétroaction et rétroinformation, il ne les invente pas : ces mots circulaient déjà comme
traductions de feedback, et ce qu'il leur donne, ce sont des définitions séparées. La
préinformation et la préaction, elles, il les ajoute. Cette terminologie, il la propose aux
sciences de la communication et à elles seules. »

Motif retenu : `attribution_note` et `attribution.note` limitent la circulation antérieure à deux
termes (« Il ne forge ni rétroaction ni rétroinformation, termes déjà en circulation ») et disent
des deux autres qu'il les ajoute ; `review.notes[4]` cite la liste de la p. 5, où ne figurent ni
préinformation ni préaction, et situe leur introduction p. 17 « comme des notions ajoutées ». Le
bornage porte donc jusqu'au point où l'appui porte réellement l'énoncé : la non-invention est
restreinte aux deux termes que les appuis nomment, et l'ajout des deux autres est dit, ce que les
mêmes appuis portent mot pour mot.

Appuis des mots ajoutés :
- « ces mots circulaient déjà comme traductions de feedback » : `review.notes[4]`, p. 5,
  « l'abondance des termes proposés pour sa francisation (rétroaction, rétroin-formation,
  réinjection, retour, réponse, réaction, boucle informationnelle, etc.) ».
- « La préinformation et la préaction, elles, il les ajoute » : `attribution_note` et
  `attribution.note` (« qu'il ajoute »), `review.notes[4]` (« introduites p. 17 comme des notions
  ajoutées au schéma »). Le mot « schéma » n'est pas repris : le texte lecteur n'a pas présenté ce
  schéma.
- Les deux claims soutenus voisins, C058 (« ce qu'il leur donne, ce sont des définitions
  séparées ») et C059 (« il les propose aux sciences de la communication et à elles seules »),
  sont conservés dans leur substance ; « il les propose » devient « Cette terminologie, il la
  propose » pour que le référent reste la proposition terminologique finale et non le seul couple
  préinformation / préaction.

## Contrôles faits

- Aucun appui inventé, aucun `SUP-...` fabriqué, aucun fait tiré de la mémoire, aucune citation
  nouvelle. Toutes les citations du texte sont inchangées.
- `corpus/evidence/critere-de-la-retroaction/` n'existe pas ; le dossier documentaire de cette
  carte est `corpus/evidence/retroaction-denaturee/lecture.json`, déjà résolu dans le pack (72
  appuis) et lu ici par le pack.
- Aucun contenu de `limits` n'a été remonté dans le texte lecteur ; `limits` n'a pas été modifié.
  Les frontières qu'il nomme (Veraldi `metadata-only`, date et titre de Wiener, réception dans les
  sciences de la communication) restent respectées par les corrections.
- Aucun tiret cadratin ajouté ; guillemets et apostrophes typographiques conformes ; aucun
  paragraphe ne contient de balisage.
- Aucun paragraphe restant ne fait le travail d'un autre : la suppression de S2.P3 et de la
  première phrase de S4.P1 supprime deux redondances plutôt qu'elle n'en crée.
- `npm run corpus:deepen -- --check --only=critere-de-la-retroaction` : `1 approfondissement(s)
  contrôlé(s), 1340 mots. Rien projeté.` (contrôle mécanique passé, rien d'écrit ni de projeté).

## Suite

Toute modification du texte invalide le SHA. La chaîne déterministe doit repartir de `PREPARE`
sur `10e489ee25ac51fbbcbf087ff62d5972a485ca546a6ba321d1c11f11de0e0a97`. Aucun verdict
`FACTCHECK_PASS` n'est prononcé ici, et aucun artefact de fact-check n'a été modifié à la main.
