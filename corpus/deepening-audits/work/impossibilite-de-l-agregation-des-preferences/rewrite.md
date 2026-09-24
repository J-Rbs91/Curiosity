concept : impossibilite-de-l-agregation-des-preferences
mode    : FACTCHECK_FIX (gate déterministe FACTCHECK_FAIL, 1 claim sur 69)

Seconde et dernière boucle de correction autorisée. Ce compte rendu remplace celui de la boucle
précédente (conservé dans l'historique git du même fichier), dont il ne remet en cause aucun
choix : une seule phrase a été touchée.

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/impossibilite-de-l-agregation-des-preferences.json` (version jugée, SHA
  `443544184842…`)
- `corpus/deepening-audits/work/.../factcheck-gate.json` : autorité du verdict, 69 claims,
  68 `SUPPORTED`, 1 échec, aucune erreur structurelle
- `claim-map.json` : ancrage exact de C069
- `verification.json` : motif du verifier
- `factcheck-pack.json` : les deux supports résolus de C069, `SUP-9e5fa0842208cd3d`
  (`evidence:lecture.json`, `$.definition_de_lauteur`) et `SUP-c1daf649941c6ce9`
  (`validated`, `$.review.notes[5]`)
- `corpus/validated/impossibilite-de-l-agregation-des-preferences.json`
- `corpus/evidence/impossibilite-de-l-agregation-des-preferences/`, répertoire listé à la main :
  un seul fichier, `lecture.json`. Pas de `scouting.json`.

Aucune recherche web. Aucune affirmation ajoutée. Aucun support inventé. Aucun artefact de
fact-check modifié à la main.

## La correction, C069

Localisation : `sections[6].paragraphs[0]`, offsets 523-605, dernière phrase du texte.

Avant : « Deux phrases, à la dernière page, pour une question que le théorème ne touche pas. »

Après : « À la dernière page, une question que le rapport nomme et ne traite pas. »

Verdict du verifier : `TOO_STRONG`. Les supports établissent bien deux choses, et seulement
deux. D'une part que la page 19 est la dernière page imprimée du rapport : la note de pagination
de l'enregistrement validé le vérifie aux deux bornes, « feuillet n20 = “-19-”, dernière page ».
D'autre part que ce point y est seulement nommé : `lecture.json` écrit « section 8, page 19, une
difficulté d'un autre ordre, que le rapport ne traite pas et se contente de nommer ». Ce qu'aucun
support ne porte, c'est le dénombrement : les deux passages anglais repris dans le paragraphe
sont donnés comme des extraits, le premier n'étant même pas une phrase complète, et rien
n'autorise à dire que la section 8 tient en deux phrases.

La correction est un retrait de portée, pas une reformulation : le dénombrement disparaît, et la
chute est réalignée mot à mot sur ce que le support énonce (« nomme et ne traite pas » pour « ne
traite pas et se contente de nommer »). La localisation à la dernière page est conservée, elle
est celle des deux supports. « Que le théorème ne touche pas » est abandonné au profit de la
formulation portée par la source, qui parle du rapport et non du théorème.

Rien n'est ajouté à la place. Le paragraphe garde intégralement ses quatre premières phrases,
qui portent la citation vérifiée de la page 19 et l'exigence sur les règles du jeu électoral.

## Ce qui n'a pas été touché

Tout le reste, mot pour mot : les deux paragraphes de `lead`, les sept titres, les seize autres
paragraphes, les quatre premières phrases de `sections[6].paragraphs[0]`, les cinq paragraphes de
`limits`. Les 68 claims `SUPPORTED` sont intacts, aucun ne partageant son empan avec C069.

## Delta du paragraphe modifié

`sections[6].paragraphs[0]` : une difficulté d'un autre ordre, la déclaration stratégique des
préférences, que le rapport nomme à sa dernière page sans l'instruire. Le delta est inchangé par
la correction, qui ne retire qu'un dénombrement. La phrase finale continue de faire son travail
propre, localiser la difficulté au bout du texte et dire qu'elle y reste ouverte, sans redire la
phrase précédente, qui portait l'exigence formulée par Arrow.

Aucune section ne répète une section antérieure. Aucun paragraphe n'a perdu son delta.

## Frontières documentaires

- rien n'est dit du contenu de l'article de 1950 ni du livre de 1951 (`metadata-only`) ;
- aucun verbatim des pages 5 à 8, 12, 13 et 18, lues sur OCR seul ;
- la réserve d'OCR sur le fait négatif Condorcet / Borda / paradoxe de vote reste portée par
  `limits`, non par le texte lecteur ;
- aucun contenu de `limits` n'a été remonté en bloc visible ; le texte lecteur reste `lead` +
  `sections`.

`limits` est inchangé. La correction n'a pas découvert de frontière nouvelle utile aux agents :
l'échec ne venait pas d'un débordement de source mais d'un dénombrement plus précis que la
lecture, et la réserve correspondante est déjà couverte par le fait que seule la structure des
pages non citées est rapportée.

## Volume et typographie

Texte lecteur : 1 564 mots (1 568 avant, 4 mots retirés). Total compté par le script :
1 809 mots. Sept sections, cinq paragraphes de `limits`. Vérifié après édition : aucun tiret
cadratin, aucune apostrophe droite, tous les titres sous 60 caractères.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=impossibilite-de-l-agregation-des-preferences`
→ « 1 approfondissement(s) contrôlé(s), 1809 mots. Rien projeté. » PASS, sans avertissement.

## Suite

Le texte a changé : le SHA `443544184842…` est invalidé, et l'ancien pack, l'ancienne carte de
claims et l'ancien rapport de vérification ne valent plus pour cette version. Le nouveau SHA du
fichier est `1dd7916861e5…`. Le cycle de fact-check doit reprendre à `PREPARE`. Aucune validation
n'est prononcée ici, aucun `FACTCHECK_PASS`.
