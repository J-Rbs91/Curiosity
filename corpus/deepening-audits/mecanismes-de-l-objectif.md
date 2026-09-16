---
concept_id: mecanismes-de-l-objectif
deepening_sha256: bf0f66920f0e07971d862c6209b8f5bb35cc8e52f107a3ff0ac53fdf5a3b6219
validated_sha256: e678fdbcd35efca6aca7a01ca72d678436525c20f1319dd4cf21a2d656dcd2e1
protocol_version: 3
audited_at: 2026-09-16T04:37:28Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# mecanismes-de-l-objectif

Sélectionnée sur les mêmes signaux que les deux autres cartes du lot : aucun répertoire
`corpus/evidence/<id>/`, une seule source primaire, 1 409 mots lecteur.

## Audit pédagogique

`REVISE`. Aucun paragraphe sans delta, mais deux redondances internes, une incohérence de
`limits` (il justifiait la traduction d'une citation absente du texte lecteur) et six
affirmations excédant les sources, dont une chronologie inventée entre les quatre mécanismes et
un « qui s'additionnent » contre le « interrelated » de la p. 19.

## Fact-check déterministe

Deux boucles, le maximum autorisé. C'est la carte la plus corrigée du lot.

| boucle | claims | SUPPORTED | échecs |
|---|---:|---:|---|
| 1 | 65 | 54 | 9 TOO_STRONG, 2 UNSUPPORTED |
| 2 | 62 | 61 | 1 TOO_STRONG |
| 3 | 61 | 61 | aucun |

Les onze échecs de la première boucle étaient en majorité des négations universelles et des
superlatifs sans support : « le plus facile à observer » entre quatre mécanismes, « le reste sort
du champ », « les quatre mécanismes n'ont là aucune prise », « ne tranche nulle part » sur
quatre-vingt-quatorze pages dont trois seulement ont été relues.

Le dernier échec était une attribution, et c'est le plus instructif du lot : le texte énonçait
« un des constats les plus solidement répliqués de la psychologie » comme un fait établi du
champ, alors que le dossier ne porte que la conclusion n° 1 des auteurs, datée de 1980 et
formulée par eux. Corrigé par REATTRIBUTE, pas par atténuation : le `lead` ouvre désormais sur ce
que quatre auteurs concluent en 1980, ce qui est à la fois exact et plus concret.

## Revue indépendante

`ACCEPT`, sur le SHA exact du gate. 1 409 → 1 356 mots lecteur. Les deux redondances et le défaut
du `lead` sont levés et non déplacés ; le déplacement de section est un gain net, sans texte de
raccord inventé.

Deux réserves consignées, sans effet sur le verdict :

- **S4.P2 est réduit à une phrase.** La section perd l'emploi des quatre mécanismes comme grille
  d'explication de l'échec de « faites de votre mieux ». Le gate ayant qualifié ce passage
  TOO_STRONG, le garder aurait supposé de le fonder, pas de le conserver : c'est un manque
  documentaire à combler, pas une réécriture à refaire.
- **S1.P2 se referme sur une reformulation de S1.P1**, à la place laissée libre par le retrait du
  caractère non délibéré du tri attentionnel.

Traces détaillées : `work/mecanismes-de-l-objectif/`.
