---
concept_id: mesure-devenue-cible
deepening_sha256: 60f2c6e52a2f8d9959dc2af37720c1ea73bd84c0036e8d4b2f6892f335f3c674
validated_sha256: 57c4cdbbb246026ea95bb65393ebe49e6041e1c66c770249d46938a9a007b978
protocol_version: 3
audited_at: 2026-09-22T05:06:20Z
initial_verdict: REVISE
result: rewritten
factcheck_verdict: FACTCHECK_PASS
review_verdict: ACCEPT
---

# mesure-devenue-cible

Carte legacy, sans rapport v3, et portant une faiblesse documentaire signalée le matin même : le
balayage d'accès versé ce jour la faisait remonter pour son Hoskin 1996 déclaré `partial` sans
`consulted` correspondant au dossier. **Le signalement était un faux positif** — le dossier
établit l'accès partiel, par la recherche interne au volume de Google Books, ailleurs que dans un
champ `consulted`. La sélection restait bonne pour l'autre motif, et le cycle a trouvé autre
chose.

## Le cycle

| | |
|---|---|
| audit pédagogique | `REVISE` — la proposition centrale énoncée quatre fois pour un texte au plancher de la cible |
| tours de fact-check | 3 — 52/62, puis 40/42, puis **42/42** |
| corrections | 2, le maximum que le protocole autorise |
| revue | `ACCEPT` |

## Ce que le cycle a retiré, et pourquoi ce n'est pas un choix éditorial

**La section « Ce qui fait qu'une mesure est bonne » a disparu en entier.** Ses quatre seuls
claims mappés sont tombés au premier tour : le coût du recours au substitut, la condition de
validité d'un indicateur, les trois voies de contournement, la hiérarchie de visibilité entre
elles. Aucun n'avait d'appui. `limits` enregistre désormais la frontière que cette chute a
révélée : **aucune source disponible ne porte une théorie générale de l'indicateur-substitut** —
Strathern et Hoskin raisonnent l'un et l'autre sur un cas, l'audit universitaire britannique, et
un développement général sur la mesure s'écrirait sans appui, si évident qu'il paraisse.

Le texte lecteur passe donc de 1 265 à 1 113 mots au compteur de la revue, cinq sections à
quatre. **La revue a tranché sur la densité et non sur le volume** : 11 paragraphes pour 11 deltas
distincts, contre 15 paragraphes dont trois sans delta, et la section perdue emportait deux des
quatre redites que l'audit condamnait.

## Ce que ce cycle a appris au dispositif

**Deux défauts de protocole ont été trouvés et fermés pendant ce cycle, aucun des deux par
l'auditeur.**

1. **L'audit prescrivait une conclusion tirée d'une absence.** Il demandait trois fois de trancher
   la section 3 dans le sens « la phrase est de Strathern et ne se trouve nulle part chez
   Hoskin », sur une recherche du dossier — neuf variantes, zéro occurrence. `notes[1]` de la
   fiche porte exactement cet avertissement, sous le titre « et c'est ce qui a failli faire
   publier ici une attribution fausse » : la formulation est à la première ligne du chapitre,
   p. 265, et aucune des neuf chaînes ne la recoupe. **C'est le réécrivain qui a refusé la
   prescription.** Voir le chantier I de `RESTE-A-FAIRE.md`.
2. **`limits` a servi deux fois d'autorisation à une phrase refusée.** `limits[0]` affirmait
   qu'aucun relevé de lecture indépendant ne corrobore l'accès à Hoskin — le dossier le corrobore ;
   `limits[3]` affirmait le contraire des deux bornes qui ont fait tomber C012 et C023. Les deux
   ont été réécrites par les cycles de correction. Une frontière interne fausse ne protège de
   rien : elle autorise.

**Et la règle d'accès versée ce jour a fonctionné comme prévu, sans rien bloquer.** Trois mappeurs
frais, dans trois contextes séparés et sans instruction dans leur prompt, ont écarté
`$.sources[1].*` des claims de contenu et ne l'ont retenu que pour un fait de notice. Aucun
`SOURCE_NOT_CONSULTED` n'a été prononcé : la règle a déplacé les appuis vers les extraits verbatim
du dossier, ce qui était son objet.

## Ce qui reste, non bloquant

`limits` pèse 398 mots pour une fourchette prescrite de 100-200, et c'est lui qui explique l'écart
entre les 1 574 mots qu'affiche `corpus:deepen --check` et les 1 113 que voit le lecteur.

Si un cycle ultérieur veut regagner du volume sans rien inventer, `lecture.json` laisse deux
matières inutilisées : la boucle de réplication culturelle — une comptabilité de l'obligation de
rendre compte née du monde éducatif, passée aux affaires, puis ramenée sur l'université — et le
cadre de la conférence de 1997.
