---
concept_id: critere-de-la-retroaction
deepening_sha256: 29083f8bb2bfc0602f2f6db3c5f3d2594ebc8efe766d4a9187f1d73a3a595222
validated_sha256: 2af4e7f914e71b588ed756e81666c56a88b9354c38ac15d7a350a4c21a00ac8b
protocol_version: 3
audited_at: 2026-09-28T04:20:30Z
initial_verdict: REVISE
result: rewrite_rejected
factcheck_verdict: FACTCHECK_PASS
review_verdict: REJECT
---

# critere-de-la-retroaction

**Le texte affiché au lecteur est inchangé.** Restauré par son SHA de blob
`623582dbf638f033caa87a683c490298c470e512`, vérifié au `sha256sum` : `29083f8b…`, 1 198 mots
lecteur, et `git diff` contre `origin/main` est vide sur le répertoire projeté.

> **Ce rapport corrige une conclusion que ce passage avait d'abord écrite, et le motif de la
> correction est le plus important de la nuit.** Le cycle du 28 septembre a rendu
> `FACTCHECK_PASS` 48 sur 48 puis `ACCEPT`, et le texte a été projeté. La découverte, à la
> clôture, d'une branche ouverte et non fusionnée — PR #122, passage du 27 septembre — a fait
> rouvrir le dossier : **la même reprise y avait été conduite, avec les deux mêmes gestes, et sa
> revue indépendante l'avait refusée.**

## Le fait de méthode, et il vaut au-delà de cette carte

Le passage du 28 septembre a travaillé sur `origin/main`, qui ne portait pas PR #122. Il a donc
**réimplémenté le chantier K, refait la même reprise et rouvert le chantier L**, sans savoir
qu'une branche les portait déjà. Le journal de `main` ne mentionnait pas ce passage, puisque son
journal est sur sa propre branche.

**Une routine qui lit `main` ne voit pas le travail des branches ouvertes.** C'est une lacune de
protocole, pas une faute d'exécution, et elle est consignée dans `RESTE-A-FAIRE.md`.

## Pourquoi c'est le `REJECT` qui l'emporte, et non l'`ACCEPT`

Les deux revues sont des jugements de modèle. Elles ne se valent pourtant pas ici, pour une
raison vérifiable et une raison de fond.

**1. Une règle du protocole, que la revue du 28 a manquée.** `PROTOCOLE.md` §5 : « Total visé :
1 300 à 1 700 mots. **En dessous de 1 100, le texte n'a rien ajouté.** » Le candidat fait
**1 074 mots lecteur**. La revue du 27 le relève et en fait un motif ; celle du 28 ne le
mentionne pas. Le contrôle mécanique ne l'a pas vu non plus, et c'est normal : les bornes dures
de `deepenings.mjs` sont 1 000 et 2 100, et leur commentaire dit explicitement qu'elles
« laissent respirer » par rapport au protocole. **Le plancher du protocole n'est donc porté par
aucun code**, ce qui est à instruire.

**2. Les deux revues ont vu le même défaut et l'ont pesé différemment.** Le bornage de `C038`
retire l'antécédent sur lequel s'appuyait « elles ne se logent pas au même étage » au paragraphe
suivant. La revue du 28 le signale comme réserve non bloquante ; celle du 27 en fait un motif de
refus, et elle le documente : la section 4 tombe de 164 à 91 mots, progressivité 3→2, profondeur
3→2, et le lecteur ne sait plus qu'il y a plus d'une boucle.

**Deux revues indépendantes divergent, l'une invoque une règle écrite que l'autre a manquée : le
dispositif est fail-closed, et on ferme.** C'est aussi la conclusion la plus prudente pour le
lecteur, qui garde un texte de 1 198 mots plutôt qu'un texte de 1 074 dont une lecture sur deux
dit qu'il a perdu un mécanisme.

## Ce que ce cycle a néanmoins établi, et qui reste vrai

- **`FACTCHECK_PASS` 48 sur 48** sur le candidat `c95ef7e2`, sans erreur structurelle. Le refus
  est **pédagogique et n'annule aucun verdict documentaire** — le passage du 27 écrit exactement
  la même phrase sur son propre gate à 53 sur 53.
- **Les deux gestes sont documentairement justes**, et les deux revues le disent. La restitution
  du thermostat et du joueur de quilles est strictement bornée à `$.reserves[0]`, sans que le
  thermocouple ni le professeur soient promus ; le bornage de `C038` est juste sur la portée.
- **L'effet collatéral que la revue du 27 nomme et que celle du 28 n'a pas vu** : bornée comme il
  faut, la restitution ne rend au lecteur qu'une énumération, et comme le curseur du thermostat
  avait été retiré au tour précédent, le geste **aggrave** la promesse non tenue du `lead` au lieu
  de la réparer. C'est à savoir avant la prochaine tentative.
- **Le chantier L est réel et il est confirmé deux fois.** Les deux passages l'ont ouvert
  indépendamment, par le même chemin : un titre de section portant l'excédent que le gate venait
  de refuser dans le corps.

## Reprise, et elle n'est plus celle du 26 septembre

Les deux gestes sont faits et ils passent le gate. **Ce qui bloque maintenant est pédagogique et
demande d'ajouter du texte**, ce qu'aucune des deux reprises ne s'autorisait :

1. **Rendre un antécédent à « au même étage »** — dire au lecteur qu'il y a plusieurs boucles, sans
   réintroduire l'emboîtement ni un niveau supérieur comme agent, que le dossier ne porte pas.
2. **Remonter au-dessus de 1 100 mots**, et viser la bande du protocole, à partir de matière
   adossée au pack et non de remplissage.
3. **Réparer la promesse du `lead`** : le thermostat et le joueur de quilles y sont annoncés et ne
   travaillent nulle part.
4. **Les deux sorties repérées par l'audit du 25** pour le pouvoir d'ouverture, qui reste à 2 sur 4
   dans les deux tentatives.

Le candidat refusé de cette nuit est conservé sous
`work/critere-de-la-retroaction/candidate-rejected-review-48-sur-48.json`, SHA `c95ef7e2…`, à
côté de celui du 27 septembre.
