concept : impossibilite-de-l-agregation-des-preferences
mode    : REVISE (verdict d'audit REVISE, correction ciblée)

## Matériaux lus

- `corpus/deepenings/PROTOCOLE.md`, `AUDIT_PROTOCOL.md`, `FACTCHECK_PROTOCOL.md`
- `corpus/deepenings/impossibilite-de-l-agregation-des-preferences.json` (version auditée)
- `corpus/validated/impossibilite-de-l-agregation-des-preferences.json` (13 notes de `review`, 11 `notes`)
- `corpus/evidence/impossibilite-de-l-agregation-des-preferences/` listé à la main : un seul fichier,
  `lecture.json` (23,7 ko), lu en entier (attribution, quotation, sources_ouvertes,
  definition_de_lauteur, 8 réserves). Pas de `scouting.json`.
- `corpus/deepening-audits/work/.../audit.md`
- `scripts/corpus/deepen.mjs` et `scripts/corpus/lib/deepenings.mjs` (le contrôle de citations résout
  bien sur le répertoire de preuve entier, `dossierBrut` : les verbatim de `lecture.json` sont donc
  citables, et tous ceux employés ici en viennent ou viennent du bloc `review`)

Aucune recherche web. Aucune phrase sur le contenu des deux sources `metadata-only` (JPE 1950,
Social Choice and Individual Values 1951).

## Ce qui a été conservé

- le `lead` entier, mot pour mot : c'était le point fort du texte (entrée concrète, transitivité
  montrée avant d'être nommée, résultat borné des deux côtés) ;
- les titres « Un problème né de l'économie du bien-être », « La convention et le dictateur »,
  « Pourquoi il en faut au moins trois » ;
- le paragraphe sur l'absence de Condorcet, de Borda et du paradoxe de vote, jugé excellent par
  l'audit ;
- la Condition 1 et sa glose (« faible parce qu'il tolère l'indifférence »), l'ordinalité et son
  attribution à Bergson, l'énoncé du Théorème 2 et le contresens à éviter, la restriction de Black.

## Ce qui a changé, et pourquoi

1. **Le mécanisme est enseigné.** Trois exigences supplémentaires entrent dans le texte lecteur :
   la Condition 2 (monotonicité) en mots courants, la Condition 3 (indépendance des alternatives
   non pertinentes) construite sur un cas explicitement hypothétique (trois projets, un quatrième
   indisponible) avec la motivation verbatim de la page 10, et les Conditions 4 et 5, qui excluent
   les deux familles **par hypothèse**. L'indépendance n'est plus une curiosité de vocabulaire
   glissée en dernière ligne.
2. **Le théorème n'est plus présenté plus fort qu'il n'est.** La section 4 déduit devant le lecteur
   pourquoi les six conditions ne tiennent pas ensemble : Conditions 1-3 plus de deux options
   forcent l'appartenance à l'une des deux familles ; les Conditions 4 et 5 les interdisent ; la
   Condition 6 impose le seuil. La formulation fautive « une règle qui tient debout… n'existe pas »,
   qui absorbait les Conditions 2 et 3 dans « tient debout », a disparu.
3. **La conflation classe / exemple extrême est levée.** Les deux familles sont définies d'après les
   Définitions 8 et 9 de la page 10 (une seule paire d'options fixée d'avance suffit ; une seule
   personne toujours suivie suffit), et la phrase le dit explicitement : la famille est plus large
   qu'un classement écrit d'avance en entier. Les deux formules d'une ligne que l'ancienne version
   attribuait à la page 10 alors que le bloc `review` les localise page 14 ont été retirées : la
   difficulté de localisation disparaît avec elles, et la définition gagnée est plus exacte.
4. **« Aucun coupable » est corrigé.** Arrow écrit lui-même page 14 où l'on ne peut pas céder
   (« it is hard to see how Conditions 1 or 3 can be weakened »). Le texte le dit, et en tire que
   les issues se prennent ailleurs.
5. **Trois développements rentables du dossier sont entrés :** le cas à deux alternatives et la
   lecture du bipartisme (p. 14), le rendement exact de la restriction de Black (Théorème 4, p. 17,
   nombre impair d'individus, contre-exemple p. 18), et la manipulation des réponses (p. 19), qui
   devient la chute.
6. **La section codicologique a disparu.** Les 218 mots sur le tapuscrit, la discordance de date et
   l'illisibilité de la numérisation quittaient le concept ; le paragraphe sur la lisibilité relevait
   de la frontière interne. Le texte ne se termine plus sur le lexique d'un tapuscrit.
7. **S5 n'est plus double.** La restriction de domaine occupe sa section et va jusqu'à sa réponse ;
   l'absence de Condorcet rejoint la section sur l'origine du problème, dont elle est le versant
   négatif (d'où le texte vient, d'où il ne vient pas).
8. **Apparat réduit.** Onze citations anglaises deviennent neuf, dont trois raccourcies à leur
   fragment utile ; Bergson, la mesurabilité de l'utilité, la définition des deux familles, le
   Théorème 4 et la seconde phrase de la page 19 passent en français. Les renvois de page passent
   d'une quinzaine à onze.
9. **`limits` gagne la réserve d'OCR** attachée au fait négatif Condorcet / Borda / paradoxe de vote,
   que l'audit signalait manquante, et précise que ce qui est rapporté des pages 11 à 13 et 18 est un
   compte rendu de structure, sans verbatim.

## Delta de chaque paragraphe

| Paragraphe | Delta |
|---|---|
| lead[0] | un classement de groupe doit être transitif, sinon le résultat dépend de l'ordre des questions |
| lead[1] | Arrow renverse la méthode (exigences d'abord), la réponse est non, bornée des deux côtés |
| S1.P1 | le problème naît d'un échec local en économie du bien-être, généralisé, et non des urnes |
| S1.P2 | la généalogie attendue (Condorcet, Borda, paradoxe de vote) est absente du texte |
| S2.P1 | l'objet évalué (entrée, sortie) et la Condition 1 : comparabilité et absence de boucle |
| S2.P2 | l'entrée est purement ordinale, ce cadrage vient de Bergson, et la mesurabilité est hors jeu |
| S2.P3 | deux exigences de plus, dont l'indépendance des alternatives non pertinentes, comprise sur un cas |
| S3.P1 | ce que sont exactement les deux familles, plus larges que leurs images caricaturales |
| S3.P2 | elles sont exclues par hypothèse ; sans les Conditions 4 et 5, rien ne serait impossible |
| S4.P1 | l'énoncé exact, le contresens, et pourquoi les six conditions se contredisent ensemble |
| S4.P2 | Arrow tient deux conditions pour intouchables, ce qui oriente celle qu'on lâche |
| S5.P1 | où le seuil de trois options intervient dans la démonstration |
| S5.P2 | sous le seuil le vote majoritaire suffit, et Arrow y lit le bipartisme ; le prix de cette sortie |
| S6.P1 | une sortie par le domaine des préférences admises, venue de Black, généralisée par Arrow |
| S6.P2 | son rendement exact (Théorème 4, nombre impair), et ce qui a cédé en échange |
| S7.P1 | une difficulté d'un autre ordre, la déclaration stratégique, que le rapport nomme sans la traiter |

Aucune paire de paragraphes consécutifs ne partage son delta ; aucune section ne reprend
principalement le travail d'une précédente. Le compte des six conditions n'est fait qu'une fois
(S4.P1), l'annonce des deux règles survivantes reste au `lead` et n'est pas refaite.

## Frontières documentaires respectées

- rien n'est dit du contenu de l'article de 1950 ni du livre de 1951 (`metadata-only`) ; aucune
  comparaison entre 1948 et la forme canonique ;
- pages 5 à 8, 12, 13 et 18 : aucun verbatim. Ce qui est rapporté de la démonstration (groupes
  décisifs, trois profils sur trois options, groupe plus petit, contradiction) et du contre-exemple à
  deux individus est un compte rendu de structure, conforme à la réserve du dossier, et `limits` le
  déclare ;
- le fait négatif sur Condorcet / Borda / paradoxe de vote reste affirmé dans le texte lecteur, sa
  réserve d'OCR est désormais portée par `limits` ;
- le principe de compensation n'est ni défini ni glosé, le dossier ne le définissant pas : le texte
  s'en tient à ce qu'Arrow en conclut et à la phrase de programme ;
- aucun contenu de `limits` n'a été remonté en bloc visible ; le texte lecteur est `lead` +
  `sections`.

## Citations employées, toutes résolues dans le dossier

« It is the purpose of this note to show that this phenomenon is very general. » (p. 3) ·
« the rank-order method of voting » (p. 15) · « For all R1,…,Rn, R is a weak ordering relation »
(p. 9) · « C(S) should be independent of the very existence of alternatives outside of S » (p. 10) ·
Théorème 2 (p. 14) · « It will be shown that Conditions 1-6 are inconsistent. » (p. 11) ·
« it is hard to see how Conditions 1 or 3 can be weakened » (p. 14) · « This viewpoint is essentially
the basis of the Anglo-American two-party system » (p. 14) · « This is the same idea as the
left-to-right ordering of political parties in Continental politics » (p. 17) · « there is always the
danger of false answers to take advantage of the machinery in the manner of a game » (p. 19) ·
« Sous certaines restrictions très raisonnables » (citation française de l'enregistrement).

`npm run corpus:deepen -- --check` n'émet aucun avertissement de citation absente.

## Volume

Texte lecteur 1 627 mots (auparavant 1 379), `limits` 245 mots, total compté par le script
1 872 mots. Sept sections, cinq paragraphes de `limits`.

## Contrôle mécanique

`npm run corpus:deepen -- --check --only=impossibilite-de-l-agregation-des-preferences`
→ « 1 approfondissement(s) contrôlé(s), 1872 mots. Rien projeté. » PASS, sans avertissement.

Typographie vérifiée séparément : aucun tiret cadratin, aucune apostrophe droite, tous les
guillemets avec espace fine insécable, tous les titres sous 60 caractères.

## Suite

Le texte a changé : le SHA de l'approfondissement est invalidé. Le cycle de fact-check doit
reprendre à `PREPARE`. Aucune validation n'est prononcée ici.
