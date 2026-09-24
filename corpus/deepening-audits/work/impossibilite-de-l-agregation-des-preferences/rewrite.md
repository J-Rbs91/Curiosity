concept : impossibilite-de-l-agregation-des-preferences
mode    : FACTCHECK_FIX (gate déterministe FACTCHECK_FAIL, 6 claims sur 65)

Ce compte rendu remplace celui de la passe REVISE précédente (conservé dans l'historique git du
même fichier), dont il ne remet en cause ni la charpente ni les choix : seules les six phrases
refusées par le gate ont été touchées.

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/impossibilite-de-l-agregation-des-preferences.json` (version au SHA
  `746c5e29f47f…`, celle jugée)
- `corpus/validated/impossibilite-de-l-agregation-des-preferences.json` (11 `notes`, bloc `review`
  de 13 entrées)
- `corpus/evidence/impossibilite-de-l-agregation-des-preferences/`, répertoire listé à la main :
  un seul fichier, `lecture.json`, lu en entier (attribution, quotation et son `_verification`,
  `sources_ouvertes`, `definition_de_lauteur`, 8 `reserves`). Pas de `scouting.json`.
- `factcheck-gate.json` (autorité du verdict), `claim-map.json` (ancrage exact des six claims),
  `verification.json` (motifs du verifier)

Aucune recherche web. Aucune phrase nouvelle sur le contenu des deux sources `metadata-only`
(JPE 1950, Social Choice and Individual Values 1951). Aucune affirmation ajoutée : les six
corrections sont quatre suppressions, une requalification en hypothèse et une réattribution de
localisation.

## Les six corrections

### C001 — `lead[0]`, TOO_STRONG

Avant : « Chacun, séparément, y arrive sans peine : on sait dire ce qu’on préfère, et on sait le
dire de manière suivie. »

Après : « De chacun, séparément, on suppose seulement ceci : qu’il puisse comparer deux projets
quelconques, et qu’il ne se contredise pas d’une comparaison à l’autre. »

Motif du verifier : le support n'établit que l'axiomatique du rapport (la relation R soumise à la
connexité et à la transitivité, hypothèses posées sur les préférences individuelles) ; le texte en
faisait un fait empirique sur les personnes, avec une facilité affirmée. La correction rend la
phrase à son statut d'hypothèse (« on suppose seulement ceci ») et abandonne la facilité
(« sans peine » disparaît). Les deux axiomes restent dits en mots courants, comparabilité et
non-contradiction, ce que `lecture.json` porte dans `definition_de_lauteur` : « soumise à deux
axiomes, la connexité (pour tous x et y, soit x R y soit y R x) et la transitivité ». Portée
réduite, rien d'ajouté.

### C003 — `lead[0]`, UNSUPPORTED : phrase retirée

« Sinon le résultat dépend de l’ordre dans lequel on a posé les questions, et non de ce que les
gens veulent. » Aucun support ne traite de manipulation de l'ordre du jour, et le rapport de 1948
ne le fait pas non plus : c'est une conséquence que la mémoire du champ attache au sujet, pas une
pièce du dossier. La phrase est supprimée. Le paragraphe s'arrête sur l'exigence elle-même (si le
groupe classe 1 avant 2 et 2 avant 3, il doit classer 1 avant 3), qui reste la charge utile de
l'entrée. Aucune phrase de remplacement : rien dans le dossier n'appuie le « sinon ».

### C041 — `sections[3].paragraphs[1]`, UNSUPPORTED : membre de phrase retiré

« …doit céder, et le choix n’est pas qu’une affaire technique. » La seconde proposition est une
appréciation éditoriale, non documentée ; elle est supprimée. La première (« Une incompatibilité
de bloc n’indique pas laquelle des six doit céder ») est conservée : c'est la lecture immédiate de
« It will be shown that Conditions 1-6 are inconsistent » citée deux lignes plus haut, et elle est
immédiatement bornée par ce qu'Arrow, lui, écrit page 14 sur les Conditions 1 et 3. La phrase
suivante n'a pas bougé.

### C044 — `sections[3].paragraphs[1]`, UNSUPPORTED : réattribution de localisation

Avant : « sa phrase d’ouverture gardait déjà sa réserve ».
Après : « la phrase qui clôt son introduction gardait déjà sa réserve ».

Le dossier localise la phrase « p. 3, dernier alinéa de la section 1 “Introduction”, juste avant
l'intertitre “2. The Nature of Preference Relations” », après deux pages de revue de travaux
d'autrui ; le bloc `review` de l'enregistrement le confirme sur l'image du feuillet n4. « Phrase
d'ouverture » était donc faux. La nouvelle formulation dit exactement ce que le locator porte. La
citation française elle-même est inchangée et reste celle de l'enregistrement.

### C051 — `sections[4].paragraphs[1]`, UNSUPPORTED : phrase retirée

« Ramener le choix à deux termes rend la cohérence facile, mais elle est payée par les options
qu’on ne met pas sur la table. » Le coût allégué est une inférence normative que rien n'établit,
et la première proposition ne faisait que redire le début du paragraphe (à deux options, le vote
majoritaire suffit). La phrase entière est supprimée : le paragraphe finit sur la lecture qu'Arrow
tire lui-même du cas à deux alternatives, « This viewpoint is essentially the basis of the
Anglo-American two-party system ». Aucun delta perdu, une redite en moins.

### C064 — `sections[6].paragraphs[0]`, UNSUPPORTED : phrase retirée

« Une règle peut donc être irréprochable et recevoir autre chose que ce qu’elle croit recevoir. »
Proposition générale donnée comme un constat. Elle est supprimée sans remplacement : ce qu'elle
généralisait est déjà dit, et dit par Arrow, dans les deux phrases de la page 19 que le paragraphe
cite et traduit (« there is always the danger of false answers… » et l'exigence sur les règles du
jeu électoral). La chute est désormais « Deux phrases, à la dernière page, pour une question que
le théorème ne touche pas. »

## Ce qui n'a pas été touché

Tout le reste, mot pour mot : `lead[1]`, les sept titres, les seize autres paragraphes, les cinq
paragraphes de `limits`. Les 59 claims `SUPPORTED` dont le texte porteur n'était pas partagé avec
un claim fautif sont intacts. Aucun support `SUP-…` n'a été inventé, aucun artefact de fact-check
n'a été modifié à la main.

## Delta des paragraphes modifiés

| Paragraphe | Delta après correction |
|---|---|
| lead[0] | ce qu'on suppose d'une préférence individuelle, et ce qu'on exige en plus d'un classement de groupe : qu'il ne boucle pas |
| S4.P2 | l'incompatibilité ne désigne pas de coupable, mais Arrow tient deux conditions pour intouchables, ce qui oriente celle qu'on lâche |
| S5.P2 | sous le seuil de trois options la difficulté disparaît, et Arrow y lit le ressort du bipartisme |
| S7.P1 | une difficulté d'un autre ordre, la déclaration stratégique, que le rapport nomme sans la traiter |

Aucun paragraphe n'a perdu son delta, aucun n'est devenu la redite du précédent : les trois
suppressions portaient sur des phrases qui soit répétaient (C051), soit généralisaient sans appui
(C003, C064).

## Frontières documentaires

- rien n'est dit du contenu de l'article de 1950 ni du livre de 1951 (`metadata-only`) ;
- aucun verbatim des pages 5 à 8, 12, 13 et 18, lues sur OCR seul ;
- la réserve d'OCR sur le fait négatif Condorcet / Borda / paradoxe de vote reste portée par
  `limits`, non par le texte lecteur ;
- aucun contenu de `limits` n'a été remonté en bloc visible ; le texte lecteur reste `lead` +
  `sections`.

`limits` est inchangé : aucune des six corrections n'a découvert de frontière nouvelle, les six
phrases refusées n'étant pas des débordements de source mais des ajouts sans source.

## Volume et typographie

Texte lecteur : 1 565 mots (1 627 avant, 62 mots retirés). Total compté par le script :
1 810 mots. Sept sections, cinq paragraphes de `limits`. Vérifié après édition : aucun tiret
cadratin, aucune apostrophe droite, tous les titres sous 60 caractères.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=impossibilite-de-l-agregation-des-preferences`
→ « 1 approfondissement(s) contrôlé(s), 1810 mots. Rien projeté. » PASS, sans avertissement.

## Suite

Le texte a changé : le SHA `746c5e29f47f…` est invalidé et l'ancien pack, l'ancienne carte de
claims et l'ancien rapport de vérification ne valent plus pour cette version. Le cycle de
fact-check doit reprendre à `PREPARE`. Aucune validation n'est prononcée ici, aucun
`FACTCHECK_PASS`.
