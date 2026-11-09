concept : tolerances-qui-ne-s-additionnent-pas
mode    : REVISE
check mécanique : PASS (`npm run corpus:deepen -- --check --only=tolerances-qui-ne-s-additionnent-pas`, 1 259 mots limits compris)

Volume du texte lecteur (lead + sections) : 1 201 mots avant, 1 059 après (lead 195 puis 181).
Réécriture plus courte, sous le plancher indicatif de 1 100 du protocole : aucune croissance n'a été
financée ni recherchée, conformément à la consigne de l'orchestrateur (« n'ajoute aucune affirmation »).
`limits` inchangé (200 mots), non exposé.

## Modifications

1. lead[1]
   - Retiré : « La question n'a rien d'oiseux : de la réponse dépendent la tolérance qu'on imposera à
     chaque fournisseur et le rebut qu'on acceptera » (sens du problème inversé, sans appui).
   - Corrigé : le titre de l'ouvrage n'est plus confondu avec celui du chapitre. Ouvrage :
     SUP-b00df733fe95669b ; chapitre XVII « Design limits on Variability » : SUP-b3cb0ea71eddc4c1 ;
     Bell Telephone Laboratories : SUP-e2a21c81ba720c0c.
   - Remplacé la chute énigmatique « Sa réponse tient dans un mot, et ce mot n'est pas faux : économique »
     par « il en fait une question d'économie : ce qu'il est économique de prévoir pour l'ensemble »
     (substitution, même idée ; SUP-7c9cbf25b4e7914e p. 254 « economical to allow in design for an
     over-all tolerance range », SUP-00cf45fc4a04fa31).
2. S1 (redites 1 et 2 sur 4) : supprimé « Additionner n'est pas une bévue », la conjecture « tant elle
   va de soi dans les ateliers », « Il n'y a là aucune erreur de calcul, et c'est ce qui rend la
   pratique difficile à déloger » et « le prix qu'on paie ». L'idée « l'objection ne porte pas sur le
   calcul » n'est plus dite qu'une fois, en fin de S1.P2. « définition d'atelier » : SUP-2b23172098a4ec51.
3. S2.P1 : retiré « Une pièce au bord de sa plage est déjà rare ; neuf, [...] le produit de neuf
   raretés » (extension non marquée, présupposant la condition des trois écarts types). Rétabli la
   condition de Shewhart « when the number m ... is large » et « chosen at random » sous la forme
   « quand les pièces sont nombreuses et prises au hasard » : réduction de portée, SUP-7c9cbf25b4e7914e
   (p. 254), SUP-e2a21c81ba720c0c (« very small indeed », p. 254).
4. S3 : la condition des trois écarts types (ancien S3.P3) est avancée en S3.P2, juste après la
   définition de l'écart type et avant l'exemple 9 contre 3 qu'elle conditionne. Financement :
   SUP-7c9cbf25b4e7914e (hypothèses posées p. 254 : « controlled about average values », tolérance
   R̄i ± 3σi), SUP-3fe26198a6f5f96b, SUP-ed276a1402219999 (« hypothèse qu'il fait explicitement au
   paragraphe 5 »). Folio précisé en « page 254 » au lieu de « dans ce paragraphe » (même source).
   Définition de travail de l'écart type : « en moyenne » remplacé par « typiquement » (resserrement).
   S3.P3 (ex-S3.P2) : « que celle où l'ensemble se tiendra » remplacé par « que les limites à trois
   écarts types de l'ensemble » (retrait d'une certitude ; SUP-7c9cbf25b4e7914e, SUP-de9a4f153a86d001).
5. Ancienne S4 supprimée comme section :
   - S4.P2 (mécanisme de coût : « renverser le calcul », « le plus souvent une donnée », « en rebut, en
     réglages, en prix d'achat », « pièces plus lâches ») retiré en entier, faute d'appui
     (seul « coût de rebut » est désigné, SUP-56c0da39cc345f81, SUP-84bdd0f6a951a1a3, sans mécanisme).
   - S4.P1 fondu en S3.P4, sans la redite « l'enjeu est une dépense, pas une faute de calcul »
     (redites 3 et 4 sur 4 : lead[1] chute et S4.P1). Reste le modal et « improbable, non impossible » :
     SUP-efa9980bc3e453bc, SUP-3fe26198a6f5f96b. « relatively » rétabli (« relativement très faible »),
     réduction de portée sur SUP-efa9980bc3e453bc.
6. S5.P3 (ex-S5) : retiré « ce qui n'est pas donné d'avance » (glose sans appui) et « et il ne les
   revendique pas » ; rappel d'attribution ramené à une phrase (SUP-2b23172098a4ec51).
7. S6 inchangée.

## Ajouts et leur financement

Aucune phrase neuve porteuse d'une affirmation nouvelle. Les seuls mots ajoutés sont des
substitutions ou des restrictions de portée listées ci-dessus avec leurs supports :
- lead[1] titre de l'ouvrage / chapitre : SUP-b00df733fe95669b, SUP-b3cb0ea71eddc4c1 ;
- lead[1] « question d'économie » : SUP-7c9cbf25b4e7914e, SUP-00cf45fc4a04fa31 ;
- S2.P1 « nombreuses et prises au hasard » : SUP-7c9cbf25b4e7914e ;
- S3.P2 « page 254 », « fabriquée de façon maîtrisée autour d'une valeur moyenne » : SUP-7c9cbf25b4e7914e ;
- S3.P4 « relativement » : SUP-efa9980bc3e453bc.

## Prescriptions de l'audit non appliquées

- Ajouts 1 et 2 (borne de Tchebychev chiffrée, généralité des équations 82, tendance de la résultante
  vers la normalité) : financés par SUP-7c9cbf25b4e7914e mais écartés, la consigne de cette passe
  interdisant tout ajout d'affirmation. Ce sont les seuls ajouts qui pourraient ramener le volume
  au-dessus de 1 100 mots.
- Ajout 5 (appariement sélectif en S2.P2) : écarté pour la même raison ; reste dans `limits[0]`.
- S6 (recouvrement déclaré avec `tolerance-economique-suppose-le-controle`, notes[5]) : laissée en
  l'état ; tension non tranchée, comme dans l'audit. La section reste une clôture d'un paragraphe.

## Delta par paragraphe (contrôle)

- lead[0] situation des neuf pièces, tolérance comme plage, présupposé de l'addition.
- lead[1] qui pose la question, où, en quels termes, et qu'elle est traitée comme question d'économie.
- S1.P1 l'addition dérive d'une définition (le possible).
- S1.P2 sous cette définition la déduction est exacte ; l'objection porte sur ce qu'on prévoit.
- S2.P1 la coïncidence des extrêmes est très rare quand les pièces sont nombreuses.
- S2.P2 hypothèse de hasard et d'indépendance.
- S3.P1 écart type et racine de la somme des carrés.
- S3.P2 condition des trois écarts types, posée avant usage.
- S3.P3 9 contre 3, figure 87.
- S3.P4 modal « may be uneconomical », improbable et non impossible.
- S5.P1 cas général, Taylor premier ordre.
- S5.P2 coefficients de sensibilité ; la règle simple comme cas particulier.
- S5.P3 Tchebychev, 0,9973 sous normalité, attribution.
- S6.P1 moyenne et écart type à exiger, p. 259.
Aucune paire consécutive ne fait le même travail ; `limits` n'est remonté nulle part.

Aucune validation de cette version n'est revendiquée : elle doit repartir à PREPARE (SHA modifié).
