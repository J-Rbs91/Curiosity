# Réécriture — automatisation-centree-humain

Mode : FACTCHECK_FIX (dernière boucle). Gate précédent : FACTCHECK_FAIL, 67/69, refusés C001 et C007 (TOO_STRONG).

## Corrections

- **C001** (lead[0]) : « Elle cesse de l’être si cette personne ne sait plus… » devient « Elle **peut cesser** de l’être si cette personne ne sait plus… ». Certitude réduite : la phrase ne pose plus de condition catégorique, elle signale un risque, ce que portent SUP-edef8e92d88849d2 (rétroaction insuffisante) et SUP-bc5399c3ede09619 (perte de conscience de l’état « associated with »). La phrase est gardée parce que « ce problème » au paragraphe suivant a besoin d’un antécédent.
- **C007** (lead[1]) : phrase retirée (« Dire d’une automatisation qu’elle est centrée sur l’humain désigne, chez lui, une exigence qui porte sur la place laissée à celui qui devra répondre du résultat. »). La définition réelle (SUP-c8676b3312ed6af9) figure déjà dans les sections ; la remplacer dans le lead aurait doublé un paragraphe existant.

Aucune autre phrase touchée, aucun ajout.

## Volume

Texte lecteur : environ 1 533 mots avant, 1 506 après (-27 mots ; décompte de `corpus:deepen --check`).

## Contrôle

`npm run corpus:deepen -- --check --only=automatisation-centree-humain` : PASS (1 approfondissement contrôlé, 1506 mots).

Le SHA du deepening a changé : l’orchestrateur doit reprendre à PREPARE.
