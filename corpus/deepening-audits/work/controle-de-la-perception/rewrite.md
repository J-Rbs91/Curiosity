# Réécriture — controle-de-la-perception

- Mode : FACTCHECK_FIX (boucle de correction factuelle 1/2)
- Déclencheur : `factcheck-gate.json`, verdict FACTCHECK_FAIL, 66/67 claims soutenus, seul échec C034 (TOO_STRONG).

## Correction

Claim C034, `sections[3].paragraphs[0]` :

- avant : « courant dont la grandeur **dépend de** celles d’un ensemble de stimulations sensorielles primaires. »
- après : « courant dont la grandeur **est liée à** celles d’un ensemble de stimulations sensorielles primaires. »

Rendu aligné sur « is related to » de la citation (SUP-726a338878992bfe, SUP-65143896f74a02fc). Portée réduite, aucune affirmation ajoutée.

## Périmètre

- Aucun autre passage modifié ; les 66 claims soutenus restent inchangés.
- Nombre de mots du texte lecteur : inchangé (1734 mots selon le contrôle, substitution de longueur équivalente : « dépend de » → « est liée à », +1 mot).
- Aucun ajout, donc aucun support à financer.
- `limits` non modifié.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=controle-de-la-perception` : PASS (1 approfondissement contrôlé, 1734 mots).

Le SHA du deepening a changé : reprendre à `PREPARE`. Aucune auto-validation.
