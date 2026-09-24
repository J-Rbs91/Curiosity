---
concept_id: heuristiques-de-jugement
deepening_sha256: 8f287a4b6f8f2f532960e1913210e00535ce03bfd2b1724326b5689ca58279f3
validated_sha256: 49865ea8d882cf6753be292fd798b69c5294321a4916f0cf444e94334c169109
protocol_version: 3
audited_at: 2026-09-24T04:52:00Z
initial_verdict: REVISE
result: rewrite_rejected_factcheck
factcheck_verdict: FACTCHECK_FAIL
review_verdict: NOT_RUN
---

# heuristiques-de-jugement

**La réécriture est refusée au plafond de boucles, et le texte publié est celui d'avant.** Le
deepening a été restauré par son SHA de blob relevé avant toute écriture,
`c57a3e4a`, et le fichier rendu redonne bien `8f287a4b…`, vérifié et non supposé.

Ce rapport existe pour dire pourquoi, et surtout pour dire ce que la carte garde de faux.

## Ce que l'audit avait trouvé

Exemples 1/4 : aucun dans le texte, alors que le dossier en porte trois des auteurs eux-mêmes,
en verbatim relu en image. Profondeur 2/4 : aucun des trois procédés n'était décrit. Deux
signaux documentaires, une négation exhaustive héritée d'une couche OCR que le dossier décrit
lui-même comme corrompue, et un claim adossé à la source *Science* déclarée `metadata-only`.

La réécriture a répondu à tout cela, et **elle y a répondu correctement** : les exemples sont
venus du dossier, les procédés ont été décrits, la négation OCR a été retirée, le claim
*Science* réancré. Les deux fragilités documentaires n'ont plus jamais reparu dans aucun des
trois gates.

## Pourquoi elle est refusée quand même

Trois tours, trois `FACTCHECK_FAIL` : 75/77, puis 85/90, puis 80/81. Le protocole autorise deux
boucles de correction ; elles ont été prises. Au-delà, il impose la restauration.

La trajectoire montre pourtant un texte qui s'assainit — deux refus, puis cinq sur un découpage
plus fin, puis un seul. **Et c'est précisément le piège que le plafond existe pour fermer.** Un
texte qui converge lentement vers la conformité peut absorber un nombre indéfini de tours, et
chaque tour coûte un cycle complet de mapping, de bundle et de vérification. Le plafond n'est pas
un jugement sur la qualité du texte : c'est un refus de payer indéfiniment pour l'amener au seuil.

Le refus final, C069, mérite d'être cité parce qu'il énonce un invariant du dépôt :

> « ne rend pas compte d'une expérience nouvelle » — les supports décrivent le plan du rapport
> et disent qu'il rassemble des résultats publiés ailleurs, mais **l'absence de mention
> d'expérience dans les supports ne vaut pas preuve d'absence.**

Un négatif global est une affirmation forte. Il demande une preuve de l'absence, pas une absence
de preuve. C'est le même invariant qui a fait tomber quatre claims du premier tour de la carte
voisine, et il est le plus difficile à voir de tous, parce qu'un texte qui affirme un manque a
l'air prudent.

## Ce que la carte garde de faux, et qui n'est pas réparé

**C'est la partie utile de ce rapport.** Le texte restauré est l'ancien, donc il porte encore
tout ce que l'audit lui reprochait :

- **la négation exhaustive de S3.P1 héritée de l'OCR corrompu** — la réécriture l'avait retirée,
  la restauration la ramène ;
- **le claim de S5.P2 adossé à une source `metadata-only`** — réancré puis restauré, donc de
  nouveau en place ;
- aucun exemple, alors que le dossier en porte trois, relus en image ;
- les trois procédés nommés et non décrits.

**La carte reste donc stale et doit être reprise.** Elle n'est pas « auditée et conservée » : elle
est auditée, jugée défectueuse, et sa réparation a échoué au plafond. Une reprise repart de ce
rapport et du `rewrite.md`, qui contiennent le travail déjà fait, et elle gagnerait à traiter
d'abord les négatifs globaux, qui sont ce sur quoi les trois tours ont buté.

## Une remarque sur le découpage, pour la reprise

Les trois tours n'ont pas mappé le même nombre de claims : 77, puis 90, puis 81, sur un texte
qui rétrécissait. **Le compte de claims mesure la finesse du découpage, pas la charge du texte**,
et un découpage plus fin découvre des refus qu'un découpage grossier agrège et laisse passer.
C'est une raison de ne pas lire la progression 2 → 5 → 1 comme une dégradation puis une
amélioration : les trois tours n'ont pas regardé le texte à la même résolution.
