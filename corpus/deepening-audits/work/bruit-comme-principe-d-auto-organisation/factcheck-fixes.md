# Corrections factuelles — bruit-comme-principe-d-auto-organisation (boucle 1/2)

Gate lu : `factcheck-gate.json`, SHA `432e4593…`, FACTCHECK_FAIL 55/57.

## C001 — UNSUPPORTED (lead[0])

Avant : « Sur une ligne téléphonique qui grésille, une partie de ce qui a été dit n’arrive pas. Le mot bruit est pris ici en ce sens, celui des communications : … »

Correction : **retrait** de la phrase d'analogie (aucun appui dans le pack). La phrase suivante, qui y renvoyait (« en ce sens »), est rendue autonome sans contenu nouveau :

Après : « Le mot bruit est pris ici au sens des communications : … » (reste du claim C002 inchangé, appui SUP-392ac5188c77f512).

## C055 — TOO_STRONG (sections[5].paragraphs[1])

Avant : « La phrase se retrouve mot pour mot dans un livre d’Atlan de 1979, Entre le cristal et la fumée, »

Correction : **réattribution** à l'intermédiaire réel. SUP-8770bcfb98f57643 (lecture.json, reserves[8]) établit seulement que Paulré, en note 41, cite cette phrase comme tirée d'Entre le cristal et la fumée (1979) ; le lecteur n'a pas ouvert l'ouvrage.

Après : « Paulré, dans une note, cite cette phrase comme tirée d’un livre d’Atlan de 1979, Entre le cristal et la fumée, »

## Bilan

- Aucune affirmation nouvelle ; aucun support ID ajouté.
- Mots texte lecteur : baisse d'environ 17 mots (contrôle : 1392 mots après correction).
- `npm run corpus:deepen -- --check --only=bruit-comme-principe-d-auto-organisation` : PASS.
- Le SHA du deepening a changé : reprendre à `PREPARE`.

---

# Boucle 2/2 — gate FACTCHECK_FAIL 53/54

## C026 — TOO_STRONG (sections, paragraphe « La contre-épreuve… »)

Avant : « …l’autonomie de B par rapport à A ne peut signifier qu’une chose : le système fonctionne mal, puis il est détruit. »

Correction : **réduction de portée**. SUP-392ac5188c77f512 ($.definition_de_lauteur) porte « ne peut signifier qu'un mauvais fonctionnement du système et sa destruction » : une conjonction, sans succession temporelle. Le « puis » est retiré ; la formule reprend la conjonction de l'appui.

Après : « …l’autonomie de B par rapport à A ne peut signifier qu’une chose : un mauvais fonctionnement du système et sa destruction. »

## Bilan boucle 2

- Aucune affirmation nouvelle ; aucun support ID ajouté.
- Mots texte lecteur : inchangé (1392 mots au contrôle).
- `npm run corpus:deepen -- --check --only=bruit-comme-principe-d-auto-organisation` : PASS.
- Le SHA du deepening a changé : reprendre à `PREPARE`.
