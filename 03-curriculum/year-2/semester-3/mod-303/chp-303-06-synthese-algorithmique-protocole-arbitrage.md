# Chapitre 6 — Synthèse Algorithmique et Protocole d'Arbitrage Morphosyntaxique : Arbre Décisionnel Unifié et Résolution de Haute Précision

> **Identifiant du chapitre** : `CHP-303-06`  
> **Module de rattachement** : [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md)  
> **Semestre** : Année 2 — Semestre 3 (S3)  
> **Volume horaire estimé** : 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application (Phase 1 Étude : 1 h 30 | Phase 2 Pratique : 1 h 30 | Phase 3 Correction : 1 h 00 | Phase 4 Évaluation : 1 h 00)  
> **Statut** : [STATUT : VALIDÉ]  
> **Compétences associées** : [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (L3 Autonomie), [`FR-ORTHO-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-001-orthographe-lexicale-et-morphologie-dérivationnelle) (L3 Autonomie), [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) (L3 Autonomie)  
> **Sources scientifiques de référence** : `SRC-GRAM-01` (Grevisse & Goosse, 2016, § 950-955 & § 521-529), `SRC-GRAM-02` (Riegel, Pellat & Rioul, 2016, chap. 12 & 17), `SRC-NORM-02` (Conseil supérieur de la langue française, 1990), `SRC-NORM-03` (Ministère de l'Éducation nationale, 2020), `SRC-TYPO-01` (Imprimerie nationale, 2002)

---

## 1. Titre et Place dans le Cursus

### 1.1 Intitulé Canonique et Rôle de Clôture Souveraine de MOD-303
**Chapitre 6 : Synthèse Algorithmique et Protocole d'Arbitrage Morphosyntaxique : Arbre Décisionnel Unifié et Résolution de Haute Précision** (`CHP-303-06`).

Le présent chapitre forme le couronnement intégrateur du module [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md). Après avoir posé les fondements linguistiques de la diathèse pronominale (`CHP-303-01`), analysé les verbes essentiellement pronominaux et à sens passif (`CHP-303-02`), décortiqué la mécanique des verbes accidentellement pronominaux (`CHP-303-03`), circonscrit la liste fermée des dix intransitifs invariables (`CHP-303-04`) et codifié le pluriel des noms composés (`CHP-303-05`), ce sixième volet fond l'ensemble de ces règles sectorielles dans un **arbre décisionnel binaire unifié** et un **protocole d'arbitrage morphosyntaxique de haute précision** [Réf. `SRC-GRAM-01`, § 950-955 ; `SRC-GRAM-02`, chap. 17].

### 1.2 Insertion Architecturale et Réinvestissement Amont / Aval
L'arbitrage morphosyntaxique ne constitue pas une simple récapitulation théorique : il est l'armature méthodique permettant au scripteur de passer d'une application hésitante des règles à une vitesse d'exécution infaillible sous contrainte temporelle.

- **En amont** : Ce chapitre réinvestit les acquis de [`MOD-102`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-05-accord-sujet-verbe-fondamental.md) (identification des classes de mots et distinction fondamentale entre nature et fonction), de [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) (syntaxe fonctionnelle et valence verbale), de [`MOD-202`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md) (lien bloquant direct *Hard Prerequisite DEP-ORT-03* : accord du participe passé avec l'auxiliaire *avoir* et règle de Clément Marot) et des cinq premiers chapitres de `MOD-303`.
- **En aval direct** : Il verrouille le palier de maîtrise indispensable pour aborder [`MOD-304`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md) (synthèse comparative de documents sans aucune tolérance d'erreur orthographique), conditionne le saut vers [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md) (lien bloquant *Hard Prerequisite DEP-ORT-04* : participes passés suivis d'un infinitif, verbes *faire / laisser* et verbes de perception au Semestre 4), et prépare la révision éditoriale critique de niveau professionnel dans [`MOD-504`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504-revision-editoriale-typographie-savante.md).

```mermaid
flowchart TD
    subgraph Amont [Fondations Morphosyntaxiques et Notions Sectorielles]
        MOD201["<b>MOD-201 (S2)</b><br/>Syntaxe Fonctionnelle de la Phrase Simple<br/><i>(Valence verbale & Rôles actanciels)</i>"]
        MOD202["<b>MOD-202 (S2)</b><br/>Accord du Participe Passé avec Avoir<br/><i>(Règle de Marot & COD Antéposé)</i>"]
        CHP3030105["<b>CHP-303-01 à 05</b><br/>Diathèse, Pronominaux Essentiels & Réfléchis,<br/>Liste des 10 Intransitifs & Noms Composés"]
    end

    subgraph Pivot [Clôture Intégratrice du Module MOD-303]
        CHP30306["<b>CHP-303-06</b><br/>Synthèse Algorithmique & Protocole d'Arbitrage<br/><i>(Arbre décisionnel binaire unifié & Apparat critique)</i>"]
    end

    subgraph Aval [Débouchés Directs et Cycles Supérieurs]
        MOD304["<b>MOD-304 (S3)</b><br/>Synthèse Comparative de Documents<br/><i>(Zéro tolérance sur les accords complexes)</i>"]
        MOD401["<b>MOD-401 (S4)</b><br/>Participe Suivi d'Infinitif & Cas Limites<br/><i>(Faire/laisser, perception, sujet d'infinitif)</i>"]
        MOD504["<b>MOD-504 (S5)</b><br/>Révision Éditoriale & Typographie Savante<br/><i>(Audit professionnel & Normalisation de manuscrits)</i>"]
    end

    MOD201 ==>|Valence et rection| CHP30306
    MOD202 ==>|<b>DEP-ORT-03 (Hard)</b> : Règle de Marot| CHP30306
    CHP3030105 ==>|Règles sectorielles intégrées| CHP30306

    CHP30306 ==>|Fiabilité absolue d'écriture| MOD304
    CHP30306 ==>|<b>DEP-ORT-04 (Hard)</b> : Calcul actanciel automatisé| MOD401
    CHP30306 ==>|Expertise d'arbitrage textuel| MOD504

    classDef amont stroke:#2563eb,stroke-width:2px;
    classDef pivot stroke:#b91c1c,stroke-width:3px;
    classDef aval stroke:#059669,stroke-width:2px;
    class MOD201,MOD202,CHP3030105 amont;
    class CHP30306 pivot;
    class MOD304,MOD401,MOD504 aval;
```

---

## 2. Objectifs Mesurables

Au terme des 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application de ce chapitre, l'apprenant est capable de :

1. **Exécuter de mémoire et sans hésitation l'arbre décisionnel unifié en 4 questions fermées** pour trancher en moins de vingt secondes l'accord ou l'invariabilité de n'importe quel verbe pronominal au passé composé, en atteignant un taux d'exactitude de 100 % ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).
2. **Identifier instantanément la valence verbale et assigner à tout clitique conjoint ou syntagme nominal son statut syntaxique exact** (COD antéposé, COD postposé, COI, ou pur marqueur de diathèse dénué d'autonomie actancielle) au moyen du test de commutation active avec l'auxiliaire *avoir* ([`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple), Palier L3 Autonomie).
3. **Résoudre avec une exactitude de 100 % le pluriel des noms composés complexes** en discriminant la nature morphologique de chaque composant (Nom, Adjectif, Verbe, Adverbe, Préposition) et en restituant simultanément la graphie traditionnelle et la régularisation admise par les rectifications de 1990 ([`FR-ORTHO-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-001-orthographe-lexicale-et-morphologie-dérivationnelle), Palier L3 Autonomie).
4. **Rédiger une fiche d'arbitrage morphosyntaxique professionnelle** structurée en quatre rubriques normalisées (Énoncé normé, Catégorisation formelle, Statut syntaxique des actants, Règle et autorité scientifique de référence) pour justifier scientifiquement toute décision éditoriale ou universitaire litigieuse ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), [`FR-ORTHO-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-001-orthographe-lexicale-et-morphologie-dérivationnelle) & [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple), Palier L3 Autonomie).

---

## 3. Prérequis et Test de Préparation

### 3.1 Prérequis Exigibles
- **Règle de Clément Marot ([`MOD-202`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md))** : Application immédiate de l'accord du participe passé employé avec *avoir* selon la position du COD (accord si le COD précède, invariabilité si le COD suit ou s'il n'y a pas de COD).
- **Valence verbale et rection prépositionnelle ([`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md))** : Distinction rigoureuse entre verbe transitif direct (*laver qqch.*), transitif indirect (*succéder à qqn.*) et intransitif pur (*dormir*).
- **Typologie des verbes pronominaux (`CHP-303-01` à `04`)** : Connaissance de la quadripartition canonique (essentiellement pronominaux, pronominaux passifs, réfléchis, réciproques) et mémorisation de la liste des dix intransitifs invariables.
- **Morphologie lexicale des mots composés (`CHP-303-05`)** : Identification des classes grammaticales des éléments soudés par trait d'union.

### 3.2 Auto-Diagnostic à 5 Questions
Répondez aux cinq questions suivantes avant de dérouler le corrigé repliable :

1. **Question 1 (Valence et clitique)** : Quelle différence syntaxique fondamentale sépare le clitique *se* dans *« Elles se sont appelées »* et dans *« Elles se sont téléphoné »* ?
2. **Question 2 (Anomalie morphosyntaxique)** : Pourquoi le verbe *s'arroger* fait-il exception à la règle générale des verbes essentiellement pronominaux ?
3. **Question 3 (Position du COD)** : Dans l'énoncé *« Elle s'est lavé les mains »*, quel élément empêche l'accord du participe avec le sujet *elle* ?
4. **Question 4 (Liste fermée des intransitifs)** : Citez au moins quatre verbes de la liste fermée des dix participes pronominaux invariables en toute circonstance.
5. **Question 5 (Pluriel d'un nom composé en garde-)** : Mettez au pluriel *un garde-chasse* et *un garde-manger* en précisant la nature de l'élément *garde-* dans chaque vocable.

<details>
<summary><strong>Corrigé détaillé et barème de l'auto-diagnostic (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Dans *« Elles se sont appelées »*, le verbe *appeler* est transitif direct (*appeler quelqu'un*) ; le clitique *se* est **COD antéposé**, d'où l'accord au féminin pluriel. Dans *« Elles se sont téléphoné »*, le verbe *téléphoner* est transitif indirect (*téléphoner à quelqu'un*) ; le clitique *se* est **COI**, et en l'absence de tout COD, le participe demeure invariable [Réf. `SRC-GRAM-01`, § 954-955].
2. **Réponse 2** : Bien que *s'arroger* n'existe qu'à la forme pronominale, la tradition grammaticale et l'Académie analysent son clitique *s'* comme un **COI** (*s'attribuer à soi-même*). Il n'admet donc pas l'accord systématique avec le sujet, mais suit la règle d'avoir : accord uniquement si un COD nominal le précède [Réf. `SRC-GRAM-01`, § 955 b].
3. **Réponse 3** : Le verbe *laver* régit ici un COD nominal matériellement exprimé, *les mains*, placé **après** le participe passé. Le clitique *se* assume la fonction de COI (*à elle-même*). Le COD étant postposé, le participe reste invariable [Réf. `SRC-GRAM-02`, chap. 17].
4. **Réponse 4** : Les verbes sont à choisir parmi : *se plaire, se complaire, se déplaire, se rire, se nuire, se convenir, se ressembler, se succéder, se suffire, se survivre* [Réf. `SRC-GRAM-01`, § 955].
5. **Réponse 5** : 
   - *Des gardes-chasse* (ou *gardes-chasses*) : *garde* est ici un **nom d'agent** (personne qui garde la chasse) ; il prend donc la marque du pluriel *-s*.
   - *Des garde-manger* (traditionnel) ou *des garde-mangers* (rectifié 1990) : *garde* est ici la forme du **verbe** *garder* (meuble qui garde le manger) ; en tant que verbe, il demeure strictement invariable [Réf. `SRC-GRAM-01`, § 525-526 ; `SRC-NORM-02`].

> **Diagnostic** : Si votre score est inférieur à 4/5, révisez immédiatement les fiches de cours des chapitres 3, 4 et 5 de `MOD-303` avant d'aborder le protocole algorithmique.
</details>

---

## 4. Situation de Départ ou Problème Concret

Considérons la situation d'un relecteur éditorial, d'un juriste ou d'un candidat à l'agrégation confronté au passage suivant dans un rapport officiel soumis à publication :

> *« Les assemblées générales que la direction s'est arrogé sans mandat se sont succédées durant des mois. Les administratrices se sont alors réparties les dossiers litigieux, se sont téléphonées longuement, mais se sont ensuite nuies en diffusant des garde-mangers financiers douteux. »*

Face à ce paragraphe dense, l'intuition auditive est totalement impuissante :
- À l'oral, les formes *succédé / succédées*, *téléphoné / téléphonées*, *nui / nuies* et *arrogé / arrogées* présentent une stricte homophonie phonétique.
- Le réflexe pavlovien de l'accord mécanique avec le sujet (*les assemblées se sont succédées\**, *les administratrices se sont téléphonées\**, *elles se sont nuies\**) conduit à multiplier les fautes lourdes.
- La confusion sur le statut de *s'arroger* (omission de l'accord avec le COD antéposé *les assemblées*) et sur le nom composé *garde-mangers* parachève le désastre orthographique.

Dans le milieu de l'édition savante et des concours académiques de la haute fonction publique, un tel paragraphe est disqualifiant. L'apprenant ne peut pas se permettre d'hésiter ou de se fier au « sentiment de la langue ». Il a besoin d'un **algorithme de décision binaire déterministe** : une procédure pas-à-pas qui traite l'énoncé en séquence ordonnée et délivre la graphie exacte sans aucune marge d'incertitude.

---

## 5. Explication Intuitive

L'arbitrage morphosyntaxique fonctionne exactement comme une **tour de contrôle d'aéroport** ou un **processeur binaire**.

Lorsqu'un contrôleur aérien gère une file d'avions en approche, il ne traite pas simultanément l'ensemble des paramètres (météo, vitesse, carburant, nationalité des passagers). Il applique un entonnoir de criblage séquentiel :
1. *Urgence absolue* : L'appareil est-il en détresse ? Si oui, atterrissage prioritaire immédiat.
2. *Type d'appareil* : Est-ce un hélicoptère ou un gros porteur ? Les procédures divergent aussitôt.
3. *Position de piste* : La piste assignée est-elle libre ou encombrée ?

Pour le participe passé d'un verbe pronominal, le mécanisme est rigoureusement identique :
- Tenter d'analyser le COD dès la première seconde alors que le verbe est intransitif par nature (*se succéder*), c'est commettre une embardée cognitive.
- L'algorithme fait passer la forme verbale dans un **entonnoir à 4 filtres ordonnés**. Les cas les plus simples ou les plus massifs (les verbes essentiellement pronominaux et les verbes passifs) sont évacués d'emblée à la première question. Le filtre suivant bloque net les dix verbes intransitifs réfractaires à tout accord. Ce n'est qu'au terme de ce filtrage que l'on applique le calcul actanciel de Clément Marot.

Pour les noms composés, la démarche procède du même crible cartésien : on n'invente pas le pluriel en contemplant le mot ; on identifie la classe grammaticale de chaque membre du binôme, puis on applique la règle de flexion propre à cette combinaison.

---

## 6. Définitions Précises et Terminologie

1. **Protocole d'arbitrage morphosyntaxique** : Méthode séquentielle normée permettant de résoudre rationnellement, par une suite finie d'opérations formelles, l'accord en genre et en nombre d'un participe passé pronominal ou la flexion plurielle d'un nom composé [Réf. `SRC-NORM-03`].
2. **Arbre de décision binaire** : Modélisation graphique et logique sous forme d'arborescence où chaque nœud pose une question fermée (Oui / Non) excluant toute indécision et orientant de manière univoque vers la solution orthographique [Réf. `SRC-GRAM-02`, chap. 17].
3. **Crible de l'essentialité et de la passivité** : Première étape du protocole visant à isoler les verbes qui ne possèdent aucune autonomie actancielle à la voix active ou dont le sujet subit l'action sans agent exprimé (*s'enfuir*, *la règle s'est propagée*), déclenchant l'accord obligatoire avec le sujet (hors exception de *s'arroger*) [Réf. `SRC-GRAM-01`, § 951-952].
4. **Filtre des intransitifs à rection indirecte** : Deuxième étape du protocole verrouillant l'invariabilité absolue des verbes réciproques dont le verbe de base régit exclusivement un complément prépositionnel en *à* sans COD possible (*se plaire*, *se succéder*, etc.) [Réf. `SRC-GRAM-01`, § 955].
5. **Calcul actanciel de Clément Marot** : Troisième et quatrième étapes du protocole qui transposent la structure pronominale de surface en une proposition active équivalente gouvernée par *avoir* (*Sujet + a + participe + QUI / QUOI ?*) afin de repérer l'existence et la position du COD [Réf. `SRC-GRAM-01`, § 950].
6. **Diagnostic de composition morphosyntaxique** : Analyse catégorielle des constituants immédiats d'un nom composé (Nom + Nom, Adjectif + Nom, Verbe + Nom, etc.) et de leur relation sémantique (coordination, qualification, rection verbale, ellipse prépositionnelle) [Réf. `SRC-GRAM-02`, chap. 12].
7. **Apparat critique d'arbitrage** : Justification métalinguistique formalisée en quatre champs (Énoncé normé, Catégorisation, Rôle syntaxique des actants, Autorité normative) attestant la légitimité d'une graphie dans une copie ou une révision éditoriale [Réf. `SRC-TYPO-01`].

---

## 7. Règles ou Mécanismes Fondamentaux

### 7.1 L'Arbre de Décision Unifié en 4 Questions Fermées pour les Verbes Pronominaux

Face à un verbe conjugué à un temps composé sous la forme pronominale (*être* + participe passé), le scripteur applique impérativement la séquence suivante :

```text
                  [VERBE CONJUGUÉ SOUS LA FORME PRONOMINALE]
                                       │
     QUESTION 1 : Le verbe est-il essentiellement pronominal
                     ou employé à la voix passive ?
                                 /          \
                             OUI              NON (Accidentellement pronominal :
                              │                    réfléchi ou réciproque)
                 Le verbe est-il « s'arroger » ?       │
                            /        \                 │
                         OUI          NON              │
                          │            │               │
                 TRAITEMENT DÉROGATOIRE  ACCORD DU PARTICIPE  │
                 (Passer à la Q. 4)      AVEC LE SUJET         │
                                                       │
     QUESTION 2 : Le verbe appartient-il à la liste fermée ───┘
                    des 10 intransitifs par nature ?
                    (plaire, complaire, déplaire, rire, nuire,
                     convenir, ressembler, succéder, suffire, survivre)
                                 /          \
                             OUI              NON (Le verbe admet un COD)
                              │                │
                         INVARIABLE            │
                           ABSOLU              │
                                               │
     QUESTION 3 : Le clitique conjoint « se » assume-t-il ─────┘
                    la fonction de COD ?
                    (Test actanciel : Sujet + a + QUI/QUOI ? = se)
                                 /          \
                             OUI              NON (« se » est COI)
                              │                │
                      ACCORD DU PARTICIPE      │
                       AVEC LE CLITIQUE        │
                     (donc avec le sujet)      │
                                               │
     QUESTION 4 : Existe-t-il un COD nominal ou pronominal distinct ? ──┘
                                 /          \
                              OUI             NON (Aucun COD exprimé)
                               │               │
                      Où est placé le COD ?    INVARIABLE
                            /      \           (ex. : Elles se sont parlé)
                    POSTPOSÉ        ANTÉPOSÉ
                        │               │
                    INVARIABLE     ACCORD EN GENRE ET EN NOMBRE
              (ex. : lavé les mains)  AVEC LE COD ANTÉPOSÉ
                                      (ex. : les mains qu'elle s'est lavées)
```

#### Formulation Rigoureuse des 4 Questions :
1. **Question 1 (Essentialité et passivité)** : Le verbe n'existe-t-il qu'à la voix pronominale (*s'enfuir, s'abstenir*) ou présente-t-il un sens passif évident (*le bâtiment s'est écroulé, les parts se sont vendues*) ?
   - Si OUI : Le participe s'accorde en genre et en nombre avec le sujet.
   - **Exception unique** : *S'arroger*. Passer directement à la Question 4.
   - Si NON : Le verbe est accidentellement pronominal. Passer à la Question 2.
2. **Question 2 (Filtre des intransitifs)** : Le verbe appartient-il à la liste fermée des dix verbes à rection indirecte obligatoire (*plaire à, complaire à, déplaire à, rire de, nuire à, convenir à, ressembler à, succéder à, suffire à, survivre à*) ?
   - Si OUI : **STOP immédiat. Le participe passé est invariablement invariable.**
   - Si NON : Passer à la Question 3.
3. **Question 3 (Nature du clitique conjoint)** : Le pronom réfléchi ou réciproque (*se, me, te, nous, vous*) répond-il à la question active *« a fait l'action sur QUI / QUOI ? »* ?
   - Si OUI : Le clitique est COD. Le participe s'accorde en genre et en nombre avec ce clitique antéposé (qui renvoie au sujet).
   - Si NON : Le clitique est COI (*à qui ?*). Passer à la Question 4.
4. **Question 4 (Position du COD distinct)** : Existe-t-il dans la proposition un COD nominal ou relatif distinct ?
   - Si le COD est placé **après** le verbe : Le participe passé reste **invariable**.
   - Si le COD est placé **avant** le verbe : Le participe passé s'accorde en genre et en nombre **avec ce COD antéposé**.
   - S'il n'existe aucun COD : Le participe passé reste **invariable**.

---

### 7.2 L'Algorithme de Contrôle des Noms Composés

Pour mettre un nom composé au pluriel, l'arbitrage opère en trois étapes :

1. **Étape 1 : Décomposition catégorielle** :
   Isoler chaque élément du mot composé et déterminer sa classe grammaticale :
   - Nom, Adjectif $\to$ éléments variables par nature.
   - Verbe, Adverbe, Préposition $\to$ éléments invariables par nature.
2. **Étape 2 : Contrôle sémantique (Régime traditionnel)** [Réf. `SRC-GRAM-01`, § 521-529] :
   - *Nom + Nom en apposition/coordination* : Les deux prennent la marque du pluriel (*des oiseaux-mouches*, *des choux-fleurs*).
   - *Nom + Nom avec relation prépositionnelle implicite* : Seul le premier nom varie (*des timbres-poste* = des timbres pour la poste ; *des années-lumière* = des années mesurées par la lumière).
   - *Adjectif + Nom ou Nom + Adjectif* : Les deux varient (*des coffres-forts*, *des plates-bandes*, *des rond-points*).
   - *Adverbe/Préposition + Nom* : Seul le nom varie (*des arrière-boutiques*, *des avant-gardes*).
   - *Verbe + Nom* : Le verbe reste invariable. Le nom prend ou non la marque du pluriel selon le sens (*des essuie-mains* [on essuie les mains, toujours au pluriel] ; *des gratte-ciel* [on gratte le ciel, singulier conceptuel]).
   - *Composés en garde-* :
     - Si *garde* désigne la **personne qui garde** (nom) $\to$ accord : *des gardes-chasse*.
     - Si *garde* désigne la **chose qui préserve** (verbe *garder*) $\to$ invariabilité : *des garde-fous*, *des garde-manger*.
3. **Étape 3 : Application des Rectifications de 1990 (Régime modernisé)** [Réf. `SRC-NORM-02`] :
   - Pour les composés de type *Verbe + Nom* ou *Préposition + Nom*, le second élément prend la marque du pluriel au pluriel et ne prend aucune marque au singulier : *un gratte-ciel, des gratte-ciels* ; *un lave-vaisselle, des lave-vaisselles* ; *un garde-manger, des garde-mangers*.
   - Les deux graphies (traditionnelle et 1990) sont également admises dans les épreuves officielles.

---

### 7.3 Résolution Méthodique et Apparat Critique des 20 Phrases Controversées du Corpus Officiel

Le tableau synoptique ci-dessous résout intégralement le corpus officiel de la section 13 du module [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md) selon le protocole en quatre rubriques :

| N° | Énoncé résolu et normé | Catégorisation morphosyntaxique | Rôle syntaxique exact des actants | Règle appliquée et autorité scientifique |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *Ces deux souverains éclairés se sont **succédé** sur le trône sans qu'aucun conflit n'éclate.* | Verbe accidentellement pronominal réciproque. | Le verbe *succéder* régit un COI (*succéder à qqn.*). Le clitique *se* est COI (*l'un à l'autre*). Absence absolue de COD. | **Invariabilité absolue** des verbes de la liste fermée des dix intransitifs [`SRC-GRAM-01`, § 955]. |
| **2** | *Elles se sont **lavé** les mains avec une minutie chirurgicale.* | Verbe accidentellement pronominal réfléchi. | *Les mains* est COD du verbe *laver* ; il est placé **après** le verbe. Le clitique *se* est COI (*à elles-mêmes*). | **Invariabilité** du participe passé en présence d'un COD postposé [`SRC-GRAM-01`, § 953 ; `SRC-GRAM-02`, chap. 17]. |
| **3** | *Les mains ensanglantées que les chirurgiennes se sont **lavées** après l'opération.* | Verbe accidentellement pronominal réfléchi en subordonnée relative. | Le pronom relatif *que* est COD antéposé, référant à l'antécédent *les mains ensanglantées* (fém. plur.). *Se* est COI. | **Accord obligatoire** du participe en genre et en nombre avec le COD antéposé [`SRC-GRAM-01`, § 953]. |
| **4** | *Les clauses léonines et les prérogatives indues que le directoire s'est **arrogées**.* | Verbe essentiellement pronominal avec anomalie actancielle. | Le clitique *s'* est analysé comme un COI (*à soi-même*). Le pronom relatif *que* est COD antéposé, référant aux deux noms coordonnés féminins pluriels. | **Accord avec le COD antéposé** selon la dérogation propre à *s'arroger* [`SRC-GRAM-01`, § 955 b]. |
| **5** | *Ces deux délégations diplomatiques se sont **rencontrées** à Genève et se sont longuement **parlé**.* | Verbes accidentellement pronominaux réciproques coordonnés. | Pour *rencontrer* : transitif direct, *se* est COD antéposé. Pour *parler* : transitif indirect (*parler à*), *se* est COI, zéro COD. | *Rencontrées* : accord avec le clitique COD. *Parlé* : invariabilité du participe sans COD [`SRC-GRAM-01`, § 954-955]. |
| **6** | *Ils se sont **rendu** compte de leur bévue bien trop tard.* | Locution verbale pronominale figée (*se rendre compte*). | *Compte* est le COD immédiat et postposé de *rendre*. Le clitique *se* est COI. | **Invariabilité stricte** du participe passé car le COD nominal *compte* est postposé [`SRC-GRAM-01`, § 953]. |
| **7** | *Les vérités universelles se sont **propagées** à travers tout le continent.* | Verbe pronominal à sens passif (*les vérités ont été propagées*). | Le sujet patient est *les vérités universelles* (fém. plur.). Le clitique *se* est un morphème passivant sans autonomie actancielle. | **Accord systématique avec le sujet** des verbes pronominaux passifs [`SRC-GRAM-01`, § 952 ; `SRC-GRAM-02`, chap. 17]. |
| **8** | *Elles se sont **souri**, puis elles se sont **plu** dès le premier regard.* | Verbes accidentellement pronominaux réciproques. | *Sourire à* et *plaire à* régissent obligatoirement un complément indirect. Les clitiques *se* sont COI. Zéro COD. | **Invariabilité absolue** des participes passés intransitifs [`SRC-GRAM-01`, § 955]. |
| **9** | *Les deux accusées se sont **reproché** mutuellement les pires défaillances.* | Verbe accidentellement pronominal réciproque. | *Les pires défaillances* est COD postposé de *reprocher*. Le clitique *se* est COI (*l'une à l'autre*). | **Invariabilité** en raison du COD postposé [`SRC-GRAM-01`, § 953]. |
| **10** | *Les reproches amers qu'elles se sont **faits** ont détruit leur amitié.* | Verbe accidentellement pronominal réciproque. | Le pronom relatif *qu'* est COD antéposé, référant à *les reproches amers* (masc. plur.). *Se* est COI. | **Accord avec le COD antéposé** [`SRC-GRAM-01`, § 953]. |
| **11** | *Ces deux espèces animales se sont **ressemblé** pendant des millénaires avant de diverger.* | Verbe accidentellement pronominal réciproque. | *Ressembler à* ne régit qu'un COI. Le clitique *se* est COI. Absence de COD. | **Invariabilité absolue** de la liste fermée des dix verbes intransitifs [`SRC-GRAM-01`, § 955]. |
| **12** | *Elle s'est **imaginé** que nous céderions à ses exigences extravagantes.* | Verbe accidentellement pronominal réfléchi régissant une complétive. | La proposition complétive *que nous céderions...* est COD postposé de *imaginer*. Le clitique *s'* est COI (*à elle-même*). | **Invariabilité** devant une proposition subordonnée COD postposée [`SRC-GRAM-01`, § 953 ; `SRC-GRAM-02`, chap. 17]. |
| **13** | *Elles se sont **abstenues** de tout commentaire désobligeant lors de la délibération.* | Verbe essentiellement pronominal (*s'abstenir* n'existe pas sans *se*). | Le clitique *se* est indissociable du radical verbal ; il ne sature aucune case actancielle libre. | **Accord obligatoire avec le sujet** des verbes essentiellement pronominaux [`SRC-GRAM-01`, § 951]. |
| **14** | *Les blessures profondes qu'ils se sont **infligées** mettront des années à cicatriser.* | Verbe accidentellement pronominal réfléchi ou réciproque. | Le relatif *qu'* est COD antéposé, référant à *les blessures profondes* (fém. plur.). *Se* est COI. | **Accord avec le COD antéposé** [`SRC-GRAM-01`, § 953]. |
| **15** | *Ils se sont **arrogé** le droit d'inspecter tous nos registres comptables.* | Verbe essentiellement pronominal à régime dérogatoire. | *Le droit d'inspecter...* est le COD postposé de *s'arroger*. Le clitique *se* est analysé comme COI. | **Invariabilité** de *s'arroger* en présence d'un COD postposé [`SRC-GRAM-01`, § 955 b]. |
| **16** | *Les deux filiales se sont **nui** en menant une guerre des prix dévastatrice.* | Verbe accidentellement pronominal réciproque. | *Nuire à* est transitif indirect pur. Le clitique *se* est COI. Aucun COD possible. | **Invariabilité absolue** de la liste fermée des dix verbes intransitifs [`SRC-GRAM-01`, § 955]. |
| **17** | *Des **coffres-forts** blindés ont été installés dans les **arrière-boutiques**.* | Noms composés : Adjectif + Nom et Adverbe + Nom. | *Coffre* (nom) + *fort* (adjectif) $\to$ deux éléments variables. *Arrière* (adverbe/prép.) invariable + *boutique* (nom) variable. | *Coffres-forts* (accord double) et *arrière-boutiques* (seul le nom varie) [`SRC-GRAM-01`, § 522 et § 527]. |
| **18** | *Les **gardes-chasse** ont surpris des braconniers qui franchissaient les **garde-fous**.* | Noms composés en *garde-* : Nom d'agent vs Verbe d'action. | *Garde-chasse* : *garde* est nom de personne $\to$ pluriel *gardes-*. *Garde-fou* : *garde* est le verbe *garder* $\to$ invariable. | *Gardes-chasse* (ou *gardes-chasses*) et *garde-fous* (1990 : *garde-fous*) [`SRC-GRAM-01`, § 525-526 ; `SRC-NORM-02`]. |
| **19** | *Nous avons acheté plusieurs **essuie-mains** et deux nouveaux **lave-vaisselle**.* | Noms composés de type Verbe + Nom. | *Essuie-mains* : verbe *essuie* invariable, *mains* toujours au pluriel. *Lave-vaisselle* : verbe invariable, *vaisselle* invariable au sens collectif (traditionnel) ou *lave-vaisselles* (1990). | Graphies traditionnelles : *essuie-mains* et *lave-vaisselle*. Graphie 1990 admise : *lave-vaisselles* [`SRC-GRAM-01`, § 526 ; `SRC-NORM-02`]. |
| **20** | *Ces jeunes femmes se sont **doutées** de la supercherie et s'en sont **ouvertes** à leurs supérieurs.* | Verbes pronominaux autonomes à sens figuré. | *Se douter de* est traité comme essentiellement pronominal (accord sujet). *S'ouvrir à qqn.* (se confier) possède un clitique *se* analysé comme COD antéposé (*ouvrir soi-même*). | **Accord au féminin pluriel** pour les deux participes passés avec le sujet/COD antéposé [`SRC-GRAM-01`, § 950-951]. |

---

### 7.4 Gestion des Cas Limites et Ambiguïtés Réelles

#### A. Le Statut Dissident de *s'arroger*
Parmi l'ensemble des verbes intrinsèquement pronominaux, *s'arroger* (emprunt savant au latin *arrogare*, « demander pour soi par prétention ») est le seul verbe où les grammairiens ont refusé d'assimiler le clitique *s'* au sujet [Réf. `SRC-GRAM-01`, § 955 b]. 
- *Construction active latine sous-jacente* : On arroge quelque chose (COD) **à soi-même** (COI).
- *Conséquence orthographique* : Le participe ne s'accorde jamais avec le sujet *elles* ou *ils*. Il n'obéit qu'au placement du COD :
  - *« Elles se sont **arrogé** [invariable] des privilèges royaux. »* (COD *privilèges* postposé).
  - *« Les privilèges royaux qu'elles se sont **arrogés** [accord masc. plur.]. »* (COD relatif *que* antéposé).

#### B. La Locution Verbale *se rendre compte*
Dans *« Elle s'est rendu compte de son retard »*, l'invariabilité de *rendu* est absolue. 
- *Analyse actancielle* : Le nom *compte* est le COD direct du verbe *rendre* (*rendre quoi ? compte*). Le clitique *se* est le COI (*à soi-même*).
- Le COD *compte* étant placé immédiatement après le participe, la règle de Clément Marot interdit formellement tout accord. Écrire *\*elle s'est rendue compte* est une faute lourde par fausse attraction du sujet [Réf. `SRC-GRAM-01`, § 953].

#### C. L'Expression Figée *se faire fort de*
Dans *« Elle s'est fait fort de résoudre le litige »*, l'ensemble *faire fort* constitue une locution figée équivalant à « garantir, s'engager avec certitude ». Le participe *fait* et l'adjectif *fort* demeurent tous deux rigoureusement invariables [Réf. `SRC-GRAM-01`, § 955].

#### D. Les Coordinations de Verbes Pronominaux à Régimes Divergents
Lorsqu'une phrase coordonne deux verbes pronominaux partageant le même sujet, l'apprenant doit analyser chaque verbe isolément :
- Énoncé modèle : *« Ces deux savantes se sont **rencontrées** et se sont **plu** immédiatement. »*
  - *Rencontrer* est transitif direct (*rencontrer qqn.*) $\to$ *se* est COD antéposé $\to$ accord féminin pluriel (*rencontrées*).
  - *Plaire* est transitif indirect (*plaire à qqn.*) $\to$ *se* est COI, zéro COD possible $\to$ invariabilité stricte (*plu*).
  - L'attraction phonétique ou stylistique cherchant à accorder *\*plues* par symétrie avec *rencontrées* est une faute méthodologique récurrente.

---

## 8. Raisonnement Détaillé (Le Pourquoi)

Pourquoi une fiche d'arbitrage universitaire et professionnelle exige-t-elle impérativement de reconstruire la **rection active avec l'auxiliaire avoir** ?

Historiquement, le français a hérité du latin vulgaire et de l'ancien français l'usage de l'auxiliaire *être* pour les verbes de voix moyenne et réfléchie (*se laver* a été calqué sur *être lavé*). Cependant, cette présence de l'auxiliaire *être* n'est qu'un **artifice morphologique de surface** [Réf. `SRC-GRAM-02`, chap. 17]. 

En structure profonde, la voix pronominale accidentelle relève d'une syntaxe transitive active :
- *« Marie s'est blessée »* signifie sémantiquement et syntaxiquement *« Marie a blessé Marie »*.
- *« Marie s'est blessé la main »* signifie *« Marie a blessé la main à Marie »*.

Tant que le scripteur raisonne sur la forme de surface avec *être*, son esprit est pollué par le schéma automatique de l'adjectif attributif (*Marie est grande $\to$ Marie s'est blessée*). Dès que la phrase se complique d'un COD nominal postposé (*la main*), ce réflexe le conduit à écrire *\*Marie s'est blessée la main*.

La commutation active avec *avoir* constitue l'unique scalpel opératoire :
$$\text{Énoncé de surface : } [\text{Sujet}] + \text{se} + \text{est/sont} + [\text{Participe}]$$
$$\Downarrow \text{ Commutation active}$$
$$\text{Calcul : } [\text{Sujet}] + \text{a/ont} + [\text{Participe}] + \mathbf{QUI\ ?\ /\ QUOI\ ?}$$

Cette opération dissocie de manière irréfutable :
1. L'agent sujet (qui donne l'action) ;
2. Le clitique *se*, qui est rétrogradé à sa stricte fonction syntaxique (COD ou COI) ;
3. Le COD matériel éventuel, dont la position topologique (antéposée ou postposée) détermine l'accord selon le principe de Clément Marot énoncé en 1538 [Réf. `SRC-GRAM-01`, § 950].

---

## 9. Exemples Corrects Commentés

### Exemple 1 : Concurrence d'un intransitif, d'une antéposition sur *s'arroger* et d'un nom composé d'agent
> *« Les deux directrices de cabinet se sont **succédé** à la présidence et les prérogatives exorbitantes qu'elles se sont **arrogées** ont vivement inquiété les **gardes-chasse** du domaine. »*

- **Analyse du verbe 1 (*succédé*)** : *Succéder* régit la préposition *à* (*succéder à quelqu'un*). Le clitique *se* est COI. Verbe de la liste fermée des intransitifs sans COD possible $\to$ participe passé strictement **invariable** (*succédé*).
- **Analyse du verbe 2 (*arrogées*)** : *S'arroger* suit la règle d'avoir. Le pronom relatif *qu'* a pour antécédent *les prérogatives exorbitantes* (féminin pluriel) et assume la fonction de COD placé avant le verbe recteur $\to$ accord obligatoire au féminin pluriel (*arrogées*).
- **Analyse du nom composé (*gardes-chasse*)** : *Garde* désigne la personne physique qui assure la surveillance (nom d'agent variable). En graphie traditionnelle, *gardes-chasse* prend un -s au premier nom ; la graphie avec pluriel aux deux éléments (*gardes-chasses*) est également admise [Réf. `SRC-GRAM-01`, § 525].

### Exemple 2 : Coordinations de verbes pronominaux et pluriel régulier d'un composé Adjectif + Nom
> *« Ces juristes émérites se sont **rencontrées** au palais de justice, se sont **plu** au premier échange, puis se sont **téléphoné** pour examiner les **coffres-forts** de la succession. »*

- **Analyse du verbe 1 (*rencontrées*)** : *Rencontrer* est transitif direct (*rencontrer quelqu'un*). Le clitique *se* assume la fonction de COD antéposé renvoyant à *ces juristes émérites* (féminin pluriel) $\to$ accord au féminin pluriel (*rencontrées*).
- **Analyse du verbe 2 (*plu*)** : *Plaire* est transitif indirect pur (*plaire à quelqu'un*). Le clitique *se* est COI. Zéro COD $\to$ invariabilité absolue (*plu*).
- **Analyse du verbe 3 (*téléphoné*)** : *Téléphoner* régit un COI (*téléphoner à quelqu'un*). Le clitique *se* est COI. Zéro COD $\to$ invariabilité absolue (*téléphoné*).
- **Analyse du nom composé (*coffres-forts*)** : Composé formé du nom *coffre* et de l'adjectif qualificatif *fort*. Les deux éléments reçoivent la flexion plurielle en -s (*coffres-forts*).

### Exemple 3 : Verbe à sens passif, COD postposé et composé Verbe + Nom invariable
> *« Dès que les rumeurs se sont **propagées** dans la ville, les employées se sont **lavé** les mains et ont rangé leurs **essuie-mains** sur l'étagère. »*

- **Analyse du verbe 1 (*propagées*)** : Le verbe est employé à la voix pronominale passive (*les rumeurs ont été propagées*). Le sujet patient est *les rumeurs* (féminin pluriel) $\to$ accord systématique avec le sujet (*propagées*).
- **Analyse du verbe 2 (*lavé*)** : Le verbe *laver* régit un COD matériellement exprimé, *les mains*, placé **après** le verbe. Le clitique *se* est COI (*à elles-mêmes*). Le COD étant postposé, le participe reste **invariable** (*lavé*).
- **Analyse du nom composé (*essuie-mains*)** : Composé du verbe *essuie* (invariable) et du nom *mains* (toujours au pluriel par cohérence sémantique, car on essuie les deux mains). En graphie traditionnelle comme en 1990, le vocable s'écrit *essuie-mains* au singulier comme au pluriel.

### Exemple 4 : Locution figée, antéposition d'objet et composé Verbe + Nom avec tolérance 1990
> *« Les complices se sont **rendu** compte des défaillances et les garanties que les banques se sont **accordées** ont permis de moderniser leurs **lave-vaisselle**. »*

- **Analyse du verbe 1 (*rendu*)** : Locution figée *se rendre compte*. Le nom *compte* est COD postposé de *rendre* $\to$ invariabilité rigoureuse (*rendu*).
- **Analyse du verbe 2 (*accordées*)** : *Accorder quoi ?* Le pronom relatif *que*, antécédent *les garanties* (féminin pluriel), placé avant le verbe. *À qui ? se* (COI). Le COD précédant le verbe, le participe s'accorde au féminin pluriel (*accordées*).
- **Analyse du nom composé (*lave-vaisselle*)** : Composé du verbe *lave* (invariable) et du nom collectif singulier *vaisselle*. Graphie traditionnelle : *des lave-vaisselle* (invariable). Graphie rectifiée 1990 : *des lave-vaisselles* (marque du pluriel au nom).

---

## 10. Contre-Exemples et Erreurs Fréquentes

L'observation des copies universitaires et des concours de révision éditoriale permet d'identifier six erreurs de méthode fondamentales :

### Erreur n° 1 : Sauter l'étape du filtre des intransitifs
- **Forme fautive** : *\*« Elles se sont succédées à la tribune et se sont plues au débat. »*
- **Faille cognitive** : L'apprenant applique directement le sentiment sémantique de pluralité ou de réciprocité en voyant l'auxiliaire *être*, sans vérifier la rection du verbe à l'actif.
- **Réfutation scientifique** : On ne dit pas *\*succéder quelqu'un* ni *\*plaire quelqu'un*, mais *succéder à* et *plaire à*. Les clitiques *se* sont obligatoirement COI. En l'absence absolue de COD, l'accord est un solécisme caractérisé.
- **Forme normée** : *« Elles se sont **succédé** à la tribune et se sont **plu** au débat. »* [Réf. `SRC-GRAM-01`, § 955].

### Erreur n° 2 : Oublier le statut particulier de *s'arroger*
- **Forme fautive** : *\*« Ils se sont arrogés des pouvoirs dictatoriaux. »*
- **Faille cognitive** : L'apprenant applique la règle des verbes essentiellement pronominaux (*s'enfuir $\to$ enfuies*), sachant que *\*arroger* n'existe pas sans pronom.
- **Réfutation scientifique** : *S'arroger* est l'unique exception doctrinale. Son clitique *se* est analysé comme un COI. Le COD *des pouvoirs dictatoriaux* étant placé après le verbe, le participe doit rester invariable.
- **Forme normée** : *« Ils se sont **arrogé** des pouvoirs dictatoriaux. »* [Réf. `SRC-GRAM-01`, § 955 b].

### Erreur n° 3 : Accorder sur un prétendu COD alors qu'il est COI
- **Forme fautive** : *\*« Ces deux diplomates se sont parlées et se sont souries. »*
- **Faille cognitive** : Confusion entre le bénéficiaire de l'action réciproque et l'objet direct.
- **Réfutation scientifique** : Le verbe *parler* régit *parler à quelqu'un* ; *sourire* régit *sourire à quelqu'un*. Les pronoms conjoints sont COI. Le participe ne reçoit aucune marque d'accord.
- **Forme normée** : *« Ces deux diplomates se sont **parlé** et se sont **souri**. »* [Réf. `SRC-GRAM-01`, § 955].

### Erreur n° 4 : Accorder le verbe dans un composé Verbe + Nom
- **Forme fautive** : *\*« Des gardes-mangers »* (en traitant *garde* comme un nom) ou *\*« des coupes-gorges »*.
- **Faille cognitive** : Traiter le segment initial verbal comme un nom recevant la marque du pluriel.
- **Réfutation scientifique** : Dans *garde-manger*, *garde* est le verbe *garder* (le meuble qui garde). Un verbe ne prend jamais de -s au pluriel d'un nom composé.
- **Forme normée** : *« Des **garde-manger** »* (traditionnel) ou *« des **garde-mangers** »* (1990) ; *« des **coupe-gorge** »* (traditionnel) ou *« des **coupe-gorges** »* (1990) [Réf. `SRC-NORM-02`].

### Erreur n° 5 : Négliger le recalcul du décompte après arbitrage
- **Forme fautive** : Corriger une forme verbale (*succédées $\to$ succédé*) ou modifier la soudure d'un mot composé sans vérifier l'impact sur le décompte de mots d'une contraction ou d'un calibrage typographique.
- **Faille cognitive** : Considérer que l'orthographe grammaticale est indépendante des contraintes métriques de la copie.
- **Réfutation scientifique** : Selon les règles de l'Imprimerie nationale (`SRC-TYPO-01`), chaque modification textuelle touchant à l'élision ou aux traits d'union reconfigure le nombre d'unités typographiques.

### Erreur n° 6 : Confondre accord de surface et accord de profondeur
- **Forme fautive** : *\*« Elle s'est lavée les mains avant de dîner. »*
- **Faille cognitive** : Attraction aveugle par le sujet féminin singulier *elle* couplé à l'auxiliaire *être*.
- **Réfutation scientifique** : En syntaxe profonde, *les mains* est le véritable COD du procès *laver*. Ce COD étant postposé au participe, l'accord avec le sujet viole la règle de Clément Marot.
- **Forme normée** : *« Elle s'est **lavé** les mains avant de dîner. »* [Réf. `SRC-GRAM-02`, chap. 17].

---

## 11. Cas Particuliers et Limites

### 11.1 Verbes Pronominaux Suivis d'un Attribut du COD
Lorsque le verbe pronominal régit à la fois un pronom réfléchi COD et un adjectif attribut de ce COD, le participe passé s'accorde avec le pronom réfléchi (donc avec le sujet) :
- *« Ils se sont **crus** invincibles. »* (*croire qui ? se = eux-mêmes*, COD antéposé ; *invincibles* est attribut du COD *se*).
- *« Elle s'est **voulue** rassurante durant la crise. »* (*vouloir qui ? se = elle-même*, COD antéposé ; *rassurante* est attribut du COD).

### 11.2 Verbes à Double Analyse Admise par les Lexicographes
Certains verbes oscillent dans l'usage entre l'analyse essentiellement pronominale et l'analyse réfléchie :
1. *Se douter de* : Bien qu'il existe un verbe transitif indirect actif (*douter de vérité*), la forme pronominale *se douter de* possède un sens lexical autonome (« pressentir, soupçonner »). La tradition unanime accorde le participe avec le sujet : *« Elles se sont **doutées** de la supercherie »* [Réf. `SRC-GRAM-01`, § 951].
2. *S'apercevoir de* : Même traitement. Lorsque le verbe signifie « prendre conscience de », il s'accorde avec le sujet : *« Elles se sont **aperçues** de leur erreur »*.
3. *Se disputer* : Peut régir un COD direct (*se disputer la victoire $\to$ les récompenses qu'elles se sont **disputées***) ou fonctionner en réciproque absolu (*elles se sont **disputées** hier soir*, où *se* est analysé comme COD antéposé).

---

## 12. Approfondissement Adapté au Niveau

### Théorie Unifiée de l'Accord du Participe Passé dans les Grammaires Formelles

Dans la syntaxe générative moderne et les grammaires formelles (théorie des principes et paramètres), l'accord du participe passé en français n'est pas une juxtaposition de règles disparates, mais une opération universelle d'**unification des traits morphosyntaxiques $\phi$ (genre et nombre)** régie par la relation constituant-tête (*Spec-Head agreement*) [Réf. `SRC-GRAM-02`, chap. 17].

1. **La projection fonctionnelle de l'accord d'objet ($\text{AgrOP}$)** :
   Le participe passé est généré sous le nœud verbal $V$. Il monte vers une tête fonctionnelle dédiée à l'accord d'objet, notée $\text{AgrO}$.
2. **La vérification casuelle (Case-Checking)** :
   - Lorsqu'un syntagme nominal direct (le COD) traverse la position spécificateur de cette projection ($\text{[Spec, AgrOP]}$) pour monter en position supérieure (par exemple sous l'effet d'une relativation en *que* ou d'un clitique accusatif *se*), il déclenche un contrôle de traits avec la tête $\text{AgrO}$. Les traits de genre et de nombre du syntagme sont alors copiés sur le participe passé.
   - Si le COD reste in situ, c'est-à-dire dans la position post-verbale au sein du syntagme verbal ($\text{VP}$), il ne traverse jamais la position $\text{[Spec, AgrOP]}$ avant la morphologie de surface. La tête $\text{AgrO}$ n'est donc pas activée, et le participe passé conserve sa forme par défaut non marquée (masculin singulier en *-é, -i, -u*).
3. **Application aux verbes pronominaux** :
   - Pour les verbes réfléchis à pronom COD (*elles se sont lavées*), le clitique réfléchi accusatif monte en spécificateur d'$\text{AgrOP}$, forçant l'accord en traits avec la chaîne anaphorique du sujet.
   - Pour les verbes intransitifs par nature (*elles se sont succédé*), le clitique *se* porte un trait casuel **datif** (COI). Ne disposant d'aucun trait accusatif, il ne peut pas saturer la position $\text{[Spec, AgrOP]}$, interdisant structurellement toute unification morphologique.

---

## 13. Comparaisons Différentielles

### Tableau 1 : Arbitrage Séquentiel Algorithmique vs Intuition Phonétique

| Situation morphosyntaxique | Réflexe de l'intuition auditive (Spontané / Faillible) | Décision par l'arbre algorithmique (Déterministe / Infaillible) | Justification formelle |
| :--- | :--- | :--- | :--- |
| *Ils se sont (succédé).* | Accord avec le sujet : *\*succédés* (car sujet pluriel masculin et auxiliaire être). | **Invariable : *succédé***. | Le filtre Q2 bloque net : verbe intransitif indirect pur (*succéder à*), *se* = COI. |
| *Elle s'est (coupé) le doigt.* | Accord avec le sujet : *\*coupée* (car sujet féminin). | **Invariable : *coupé***. | Q4 : le COD nominal (*le doigt*) est postposé au participe. |
| *Les mains qu'elle s'est (lavé).* | Invariabilité ou hésitation : *\*lavé*. | **Accord : *lavées***. | Q4 : le COD relatif (*que*, antécédent *les mains*) est antéposé. |
| *Ils se sont (arrogé) des droits.* | Accord avec le sujet : *\*arrogés* (car verbe essentiellement pronominal). | **Invariable : *arrogé***. | Q1 : exception de *s'arroger* qui renvoie à Q4 avec COD postposé (*des droits*). |
| *Elles se sont (téléphoné).* | Accord au féminin pluriel : *\*téléphonées*. | **Invariable : *téléphoné***. | Q3 : *téléphoner à*, donc *se* est COI, zéro COD. |

---

### Tableau 2 : Fiche d'Arbitrage Académique vs Correction Empirique

| Critère d'évaluation | Correction empirique d'amateur | Fiche d'arbitrage académique et professionnelle |
| :--- | :--- | :--- |
| **Méthode d'analyse** | Jugement à l'oreille, relecture impressionniste. | Algorithme logique en 4 étapes, test du scalpel actif avec *avoir*. |
| **Justification écrite** | Formules vagues (« ça sonne mieux », « accord avec être »). | Apparat critique à 4 champs : statut formel, rôle actanciel, règle et référence. |
| **Gestion des pièges** | Fautes lourdes sur les dix intransitifs et sur *s'arroger*. | Résolution infaillible à 100 %, neutralisation de l'attraction du sujet. |
| **Noms composés** | Pluriel anarchique fondé sur le sentiment visuel. | Décomposition catégorielle stricte et maîtrise du double régime (tradition / 1990). |

---

## 14. Exercices Progressifs

### 14.1 Niveau 1 : Application Directe de l'Arbre Décisionnel (10 Phrases Brutes)

Accorder le participe passé entre parenthèses et mettre au pluriel le nom composé indiqué :
1. *Ces deux spécialistes se sont (plaire) à confronter leurs théories.*
2. *Les clauses qu'ils se sont (arrogé) ont été invalidées par le tribunal.*
3. *Elles se sont (souri) avant de monter dans leurs (porte-monnaie).*
4. *Les chirurgiennes se sont (désister) après la nomination du doyen.*
5. *Elle s'est (imaginé) des scénarios invraisemblables.*
6. *Les histoires tragiques qu'elles se sont (raconter) les ont émues.*
7. *Ces deux entreprises concurrentes se sont (nuire) durant dix exercices.*
8. *Ils ont installé de nouveaux (abat-jour) dans les (coffre-fort).*
9. *Les délégations se sont (rencontré) devant les (hôtel-Dieu).*
10. *Elles se sont (douté) que des (garde-chasse) patrouillaient.*

<details>
<summary><strong>Corrigé détaillé et justifié du Niveau 1 (cliquer pour dérouler)</strong></summary>

1. *Ces deux spécialistes se sont **plu**...* (*Plaire à* $\to$ intransitif de la liste fermée, *se* est COI $\to$ invariable).
2. *Les clauses qu'ils se sont **arrogées**...* (*S'arroger* avec COD relatif antéposé *qu'*, antécédent *les clauses*, fém. plur. $\to$ accord).
3. *Elles se sont **souri**... leurs **porte-monnaie*** (ou *porte-monnaies* en 1990). (*Sourire à* $\to$ *se* COI $\to$ invariable ; *porte-monnaie* : verbe invariable + nom au singulier ou régularisé en 1990).
4. *Les chirurgiennes se sont **désistées**...* (*Se désister* est essentiellement pronominal $\to$ accord avec le sujet féminin pluriel).
5. *Elle s'est **imaginé**...* (*Des scénarios* est COD postposé ; *s'* est COI $\to$ participe invariable).
6. *Les histoires tragiques qu'elles se sont **racontées**...* (Le relatif *qu'* est COD antéposé, antécédent *les histoires*, fém. plur. $\to$ accord).
7. *Ces deux entreprises concurrentes se sont **nui**...* (*Nuire à* $\to$ verbe intransitif de la liste fermée $\to$ invariable).
8. *... de nouveaux **abat-jour** [ou **abat-jours** 1990] dans les **coffres-forts**.* (*Abat-jour* : verbe + nom ; *coffres-forts* : nom + adjectif, les deux varient).
9. *Les délégations se sont **rencontrées** devant les **hôtels-Dieu**.* (*Rencontrer* transitif direct, *se* est COD antéposé $\to$ accord ; *hôtels-Dieu* : premier nom variable, second invariable).
10. *Elles se sont **doutées** que des **gardes-chasse** [ou **gardes-chasses**] patrouillaient.* (*Se douter* verbe autonome $\to$ accord sujet ; *garde* est nom d'agent variable).
</details>

---

### 14.2 Niveau 2 : Rédaction d'Apparat Critique d'Arbitrage (6 Cas Litigieux)

Rédigez l'apparat critique complet en 4 colonnes (Forme normée, Catégorisation, Rôle des actants, Règle et autorité) pour les 6 phrases suivantes :
1. *Elles se sont (arrogé) ce privilège sans autorisation.*
2. *Les privilèges qu'elles se sont (arrogé) sont illégaux.*
3. *Ces ministres se sont (succédé) à un rythme effréné.*
4. *Les erreurs dont ils se sont (rendu) compte ont coûté cher.*
5. *Elles se sont (lavé) les mains à grande eau.*
6. *Les mains qu'elles se sont (lavé) étaient gelées.*

<details>
<summary><strong>Corrigé de l'apparat critique du Niveau 2 (cliquer pour dérouler)</strong></summary>

| N° | Forme normée | Catégorisation | Rôle syntaxique exact | Règle et source |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *arrogé* | Essentiellement pronominal à régime d'avoir. | *Ce privilège* est COD postposé ; *se* est COI. | Invariabilité avec COD postposé [`SRC-GRAM-01`, § 955 b]. |
| **2** | *arrogés* | Essentiellement pronominal à régime d'avoir. | Le relatif *qu'* est COD antéposé (antécédent *les privilèges*, masc. plur.). | Accord avec le COD antéposé [`SRC-GRAM-01`, § 955 b]. |
| **3** | *succédé* | Réciproque intransitif. | *Succéder à* régit un COI (*se*). Zéro COD possible. | Invariabilité absolue des dix intransitifs [`SRC-GRAM-01`, § 955]. |
| **4** | *rendu* | Locution verbale pronominale figée. | *Compte* est le COD postposé de *rendre*. *Se* est COI. | Invariabilité stricte de *se rendre compte* [`SRC-GRAM-01`, § 953]. |
| **5** | *lavé* | Réfléchi avec COD distinct. | *Les mains* est COD postposé ; *se* est COI. | Invariabilité avec COD postposé [`SRC-GRAM-01`, § 953]. |
| **6** | *lavées* | Réfléchi avec COD relatif antéposé. | *Qu'* est COD antéposé (antécédent *les mains*, fém. plur.). | Accord obligatoire avec le COD antéposé [`SRC-GRAM-01`, § 953]. |
</details>

---

### 14.3 Niveau 3 : Arbitrage Complet d'un Passage Complexe Calibré à 50 Mots Exacts

#### Texte à Arbitrer
Rétablissez l'orthographe exacte des participes passés entre parenthèses et du nom composé dans le passage suivant, calibré à **exactement 50 mots typographiques** selon la norme officielle [`SRC-TYPO-01`] :

> *« Ces deux ministres se sont (succédé) sans heurts. Les prérogatives que les directrices se sont (arrogé) ont provoqué de vifs débats. Ensuite, elles se sont (parlé) calmement des (coffre-fort) municipaux. Enfin, les déléguées se sont (rendu) compte des erreurs et se sont (lavé) les mains de toute fraude avérée. »*

#### Décompte Typographique Certifié des 50 Mots (selon `SRC-TYPO-01`) :
1. Ces | 2. deux | 3. ministres | 4. se | 5. sont | 6. succédé | 7. sans | 8. heurts. | 9. Les | 10. prérogatives | 11. que | 12. les | 13. directrices | 14. se | 15. sont | 16. arrogées | 17. ont | 18. provoqué | 19. de | 20. vifs | 21. débats. | 22. Ensuite, | 23. elles | 24. se | 25. sont | 26. parlé | 27. calmement | 28. des | 29. coffres- | 30. forts | 31. municipaux. | 32. Enfin, | 33. les | 34. déléguées | 35. se | 36. sont | 37. rendu | 38. compte | 39. des | 40. erreurs | 41. et | 42. se | 43. sont | 44. lavé | 45. les | 46. mains | 47. de | 48. toute | 49. fraude | 50. avérée.

<details>
<summary><strong>Corrigé officiel et justification du Niveau 3 (cliquer pour dérouler)</strong></summary>

**Texte intégralement normé** :
*« Ces deux ministres se sont **succédé** sans heurts. Les prérogatives que les directrices se sont **arrogées** ont provoqué de vifs débats. Ensuite, elles se sont **parlé** calmement des **coffres-forts** municipaux. Enfin, les déléguées se sont **rendu** compte des erreurs et se sont **lavé** les mains de toute fraude avérée. »*

**Justifications des 5 formes critiques** :
1. *se sont succédé* : verbe intransitif indirect pur (*succéder à*), clitique *se* = COI $\to$ invariable.
2. *se sont arrogées* : *que* = COD antéposé reprenant *les prérogatives* (fém. plur.) $\to$ accord.
3. *se sont parlé* : verbe intransitif indirect (*parler à*), clitique *se* = COI, zéro COD $\to$ invariable.
4. *coffres-forts* : nom + adjectif $\to$ pluralisation des deux éléments.
5. *se sont rendu compte* : *compte* = COD postposé de *rendre* $\to$ invariable ; *se sont lavé les mains* : *les mains* = COD postposé $\to$ invariable.
</details>

---

## 15. Activité de Correction Raisonnée

### Dossier d'Arbitrage Fautif d'un Stagiaire en Édition
Un stagiaire a soumis le relevé de corrections suivant comportant **exactement 8 erreurs méthodologiques et d'analyse**. Identifiez chaque erreur, réfutez l'argument du stagiaire et rétablissez l'arbitrage normé :

```text
DOSSIER DU STAGIAIRE (À AUDITER) :
Item 1 : "Elles se sont téléphonées." -> Justification : accord avec le sujet féminin pluriel "elles" via l'auxiliaire être.
Item 2 : "Les reproches qu'ils se sont fait." -> Justification : invariable car "se" est COI.
Item 3 : "Ils se sont arrogés des titres." -> Justification : accord sujet car s'arroger est essentiellement pronominal.
Item 4 : "Des gardes-manger." -> Justification : "gardes" prend la marque -s car c'est un nom d'agent.
Item 5 : "Elles se sont plues au spectacle." -> Justification : accord car l'action de plaire est réciproque.
Item 6 : "Elle s'est lavée les dents." -> Justification : accord avec le sujet car laver est un verbe transitif direct.
Item 7 : "Ces accords se sont succédés." -> Justification : accord avec le sujet masculin pluriel "accords".
Item 8 : "Elle s'est rendue compte de l'heure." -> Justification : accord avec le sujet "elle".
```

<details>
<summary><strong>Corrigé de l'audit critique des 8 erreurs du stagiaire (cliquer pour dérouler)</strong></summary>

1. **Réfutation Item 1** : Erreur majeure. *Téléphoner* régit *téléphoner à quelqu'un*. Le clitique *se* est COI. En l'absence de COD, le participe est invariable : *« Elles se sont **téléphoné** »*.
2. **Réfutation Item 2** : Analyse tronquée. Si *se* est effectivement COI, le stagiaire a omis d'analyser le pronom relatif *qu'*, qui est COD antéposé (antécédent *les reproches*, masc. plur.). La graphie normée est : *« Les reproches qu'ils se sont **faits** »*.
3. **Réfutation Item 3** : Fausse qualification. *S'arroger* suit la règle d'avoir et le COD *des titres* est postposé. La graphie normée est invariable : *« Ils se sont **arrogé** des titres »*.
4. **Réfutation Item 4** : Contresens morphologique. Dans *garde-manger*, *garde* est la forme du verbe *garder*, qui ne prend jamais de marque de pluriel. La graphie traditionnelle est *garde-manger* et la graphie 1990 est *garde-mangers*.
5. **Réfutation Item 5** : Méconnaissance de la valence. *Plaire* régit *plaire à*. C'est un verbe de la liste fermée des dix intransitifs invariables : *« Elles se sont **plu** au spectacle »*.
6. **Réfutation Item 6** : Omission de la position du COD. Si *laver* est bien transitif direct, son COD est ici *les dents*, placé après le verbe. La graphie normée est : *« Elle s'est **lavé** les dents »*.
7. **Réfutation Item 7** : Fausse analogie avec l'auxiliaire *être*. *Succéder* régit *succéder à*. C'est un intransitif strict invariable : *« Ces accords se sont **succédé** »*.
8. **Réfutation Item 8** : Fausse attraction. Dans *se rendre compte*, *compte* est le COD postposé de *rendre*. La graphie normée est invariable : *« Elle s'est **rendu** compte de l'heure »*.
</details>

---

## 16. Mise en Pratique dans une Production Réelle

### Consigne Professionnelle
Vous êtes secrétaire de rédaction dans une revue de droit des affaires. Vous recevez l'extrait de procès-verbal ci-dessous, calibré à **exactement 60 mots typographiques** selon la norme officielle [`SRC-TYPO-01`]. Vous devez :
1. Certifier le décompte des 60 mots typographiques.
2. Produire la fiche d'arbitrage professionnelle intégrale en 4 champs pour les 6 formes critiques du texte.

#### Texte Juridique Brut (60 Mots Typographiques Exacts) :
> *« Dès lors que les deux sociétés commerciales se sont (nuire) par des pratiques illicites, les indemnités que les administratrices se sont (adjuger) soulèvent un contentieux. Les parties se sont pourtant (rencontrer) et se sont (promettre) de sceller leurs accords dans des (coffre-fort) sécurisés, mais les présidentes se sont ensuite (arroger) des privilèges régaliens sans consulter les commissaires aux comptes. »*

#### Décompte Typographique Certifié des 60 Mots (selon `SRC-TYPO-01`) :
1. Dès | 2. lors | 3. que | 4. les | 5. deux | 6. sociétés | 7. commerciales | 8. se | 9. sont | 10. nui | 11. par | 12. des | 13. pratiques | 14. illicites, | 15. les | 16. indemnités | 17. que | 18. les | 19. administratrices | 20. se | 21. sont | 22. adjugées | 23. soulèvent | 24. un | 25. contentieux. | 26. Les | 27. parties | 28. se | 29. sont | 30. pourtant | 31. rencontrées | 32. et | 33. se | 34. sont | 35. promis | 36. de | 37. sceller | 38. leurs | 39. accords | 40. dans | 41. des | 42. coffres- | 43. forts | 44. sécurisés, | 45. mais | 46. les | 47. présidentes | 48. se | 49. sont | 50. ensuite | 51. arrogé | 52. des | 53. privilèges | 54. régaliens | 55. sans | 56. consulter | 57. les | 58. commissaires | 59. aux | 60. comptes.

---

### Fiche d'Arbitrage Professionnelle Intégrale (Livrable d'Expertise)

| N° Forme | Énoncé résolu | Catégorisation morphosyntaxique | Statut actanciel exact | Justification normative et autorité |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *se sont **nui*** | Verbe accidentellement pronominal réciproque. | *Nuire à* est transitif indirect pur. Le clitique *se* est COI. Zéro COD possible. | **Invariabilité absolue** de la liste fermée des dix verbes intransitifs [`SRC-GRAM-01`, § 955]. |
| **2** | *se sont **adjugées*** | Verbe accidentellement pronominal réfléchi en relative. | Le pronom relatif *que* est COD antéposé (antécédent *les indemnités*, fém. plur.). Le clitique *se* est COI (*à elles-mêmes*). | **Accord obligatoire avec le COD antéposé** selon la règle de Marot [`SRC-GRAM-01`, § 953]. |
| **3** | *se sont **rencontrées*** | Verbe accidentellement pronominal réciproque. | *Rencontrer* est transitif direct. Le clitique *se* est COD antéposé renvoyant au sujet *les parties* (fém. plur.). | **Accord avec le clitique COD antéposé** [`SRC-GRAM-01`, § 954 ; `SRC-GRAM-02`, chap. 17]. |
| **4** | *se sont **promis*** | Verbe accidentellement pronominal réciproque régissant un infinitif. | Le syntagme infinitif *de sceller leurs accords* est COD postposé de *promettre*. Le clitique *se* est COI (*l'une à l'autre*). | **Invariabilité** en raison de la postposition du COD infinitif [`SRC-GRAM-01`, § 953]. |
| **5** | *des **coffres-forts*** | Nom composé : Nom + Adjectif. | *Coffre* (nom substantif) + *fort* (adjectif qualificatif). Les deux éléments sont variables en nombre. | **Accord au pluriel des deux composants** en graphie traditionnelle et 1990 [`SRC-GRAM-01`, § 522]. |
| **6** | *se sont ensuite **arrogé*** | Verbe essentiellement pronominal à régime d'avoir. | Le syntagme nominal *des privilèges régaliens* est le COD postposé de *s'arroger*. Le clitique *se* est analysé comme COI. | **Invariabilité** de *s'arroger* lorsque le COD est placé après le participe [`SRC-GRAM-01`, § 955 b]. |

---

## 17. Résumé Structuré

```text
═════════════════════════════════════════════════════════════════════════════════
         PROTOCOLE UNIVERSEL D'ARBITRAGE DES VERBES PRONOMINAUX EN 4 FILTRES
═════════════════════════════════════════════════════════════════════════════════

 [ÉNONCÉ PRONOMINAL AU PASSÉ] ───> FILTRE 1 : Essentialité / Sens passif
                                        │
                         ┌──────────────┴──────────────┐
                        OUI                           NON
                         │                             │
               Est-ce "s'arroger" ?            FILTRE 2 : Les 10 intransitifs
                 /            \                (plaire, complaire, déplaire, rire,
              OUI              NON              nuire, convenir, ressembler, succéder,
               │                │               suffire, survivre)
       Passe au Filtre 4    ACCORD SUJET               │
       (Régime d'avoir)                        ┌───────┴───────┐
                                              OUI             NON
                                               │               │
                                          INVARIABLE    FILTRE 3 : Clitique COD ?
                                            ABSOLU      (Sujet + a + QUI/QUOI ? = se)
                                                               │
                                                       ┌───────┴───────┐
                                                      OUI             NON
                                                       │               │
                                                  ACCORD "SE"   FILTRE 4 : COD distinct ?
                                                  (= SUJET)            │
                                                               ┌───────┴───────┐
                                                              OUI             NON
                                                               │               │
                                                          Position COD ?  INVARIABLE
                                                           /          \
                                                      POSTPOSÉ     ANTÉPOSÉ
                                                         │             │
                                                    INVARIABLE   ACCORD AVEC CE COD
═════════════════════════════════════════════════════════════════════════════════
```

---

## 18. Questions de Rappel Actif (*Active Recall*)

1. **Question 1** : Pourquoi le participe passé de *se succéder* ne peut-il jamais, sous aucune circonstance, prendre la marque du pluriel *-s* ?
2. **Question 2** : Sous quelle condition précise le participe passé du verbe essentiellement pronominal *s'arroger* s'accorde-t-il ?
3. **Question 3** : Dans l'énoncé *« Les gifles qu'elles se sont données »*, quelle est la fonction exacte du clitique *se* et celle du pronom relatif *qu'* ?
4. **Question 4** : Quelle est la règle traditionnelle d'accord pour un nom composé constitué d'un verbe et d'un nom (type *un tire-bouchon, des essuie-glaces*) et comment les rectifications de 1990 ont-elles régularisé ce pluriel ?
5. **Question 5** : Pourquoi la phrase *« Elles se sont rendu compte de l'erreur »* exige-t-elle l'invariabilité de *rendu*, alors que *« Elles se sont aperçues de l'erreur »* impose l'accord au féminin pluriel ?
6. **Question 6** : Dans la phrase *« Ces directrices se sont plu à rédiger les rapports qu'elles se sont ensuite partagés »*, justifiez l'orthographe de *plu* et de *partagés*.

<details>
<summary><strong>Réponses détaillées aux questions de rappel actif (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Parce que *succéder* est un verbe intransitif direct pur qui régit la préposition *à* (*succéder à quelqu'un*). Le clitique conjoint *se* assume donc obligatoirement la fonction de COI. Ce verbe ne pouvant recevoir aucun COD, la condition d'accord de la règle de Marot n'est jamais remplie.
2. **Réponse 2** : Le participe de *s'arroger* ne s'accorde que si un **Complément d'Objet Direct (COD) est placé avant le verbe** (antéposé). Si le COD le suit ou s'il n'y a pas de COD, il demeure invariable. Il ne s'accorde jamais avec le sujet.
3. **Réponse 3** : Le pronom relatif *qu'* (antécédent *les gifles*, féminin pluriel) est le **COD antéposé** du verbe *donner*. Le clitique conjoint *se* assume la fonction de **COI** (*donner des gifles à qui ? à elles-mêmes*).
4. **Réponse 4** : En graphie traditionnelle, le verbe reste invariable et le nom varie ou non selon le sens singulier ou pluriel qu'on lui prête à l'esprit (*des gratte-ciel* car un seul ciel, *des essuie-mains* car deux mains). En graphie rectifiée 1990, le verbe reste invariable et le second élément prend la marque du pluriel au pluriel et ne prend rien au singulier (*un gratte-ciel, des gratte-ciels*).
5. **Réponse 5** : Dans *se rendre compte*, *compte* est le COD postposé de *rendre*, bloquant tout accord. En revanche, *s'apercevoir de* est un verbe lexicalement autonome fonctionnant comme un verbe essentiellement pronominal où *se* n'est pas dissociable du verbe, ce qui déclenche l'accord obligatoire avec le sujet *elles*.
6. **Réponse 6** : *Plu* est invariable car *plaire à* est un verbe intransitif sans COD dont le *se* est COI. *Partagés* s'accorde au masculin pluriel avec le pronom relatif *qu'* (antécédent *les rapports*, masculin pluriel) placé avant le verbe.
</details>

---

## 19. Mini-Évaluation Sommative Notée sur 20 Points

- **Durée indicative** : 30 minutes.
- **Seuil d'autonomie exigé (Palier L3)** : **14 / 20**.
- **Barème pénal officiel** :
  - **-4 points par accord fautif de verbe pronominal** (invariabilité manquée d'un intransitif ou accord abusif avec le sujet lors d'un COD postposé).
  - **-1 point par erreur de pluriel sur un nom composé**.
  - **-0,5 point par justification syntaxique erronée ou incomplète**.

---

### Sujet de l'Épreuve

#### Partie I : Arbitrage Direct (8 points — 2 pts par phrase)
Rétablissez la graphie exacte des participes passés entre parenthèses :
1. *Ces deux souveraines se sont (succédé) et se sont longuement (combattre).*
2. *Les clauses que le conseil d'administration s'est (arrogé) ont été dénoncées.*
3. *Elles se sont (souri), puis se sont (reproché) les pires maladresses.*
4. *Les chirurgiennes se sont (abstenu) de tout geste brusque et se sont (laver) les bras.*

#### Partie II : Pluriel des Noms Composés (4 points — 1 pt par item)
Mettez au pluriel les noms composés suivants en indiquant la graphie traditionnelle et la graphie rectifiée 1990 lorsqu'elles divergent :
1. *Un garde-chasse*
2. *Un coffre-fort*
3. *Un gratte-ciel*
4. *Un arrière-goût*

#### Partie III : Rédaction d'Apparat Critique (8 points — 4 pts par analyse)
Rédigez l'analyse morphosyntaxique complète en 4 champs pour les deux énoncés :
1. *« Les vérités universelles se sont propagées à travers le siècle. »*
2. *« Elles se sont rendu compte de la fraude. »*

---

### Corrigé Officiel et Barème de Notation

<details>
<summary><strong>Corrigé officiel de la mini-évaluation (cliquer pour dérouler)</strong></summary>

#### Partie I : Arbitrage Direct (8 points)
1. *« ... se sont **succédé** [invariable, 1 pt] et se sont longuement **combattues** [accord avec se COD antéposé, 1 pt]. »*
2. *« ... s'est **arrogées** [accord avec le COD relatif antéposé que, 2 pts]. »*
3. *« ... se sont **souri** [invariable, 1 pt], puis se sont **reproché** [invariable car les pires maladresses est COD postposé, 1 pt]. »*
4. *« ... se sont **abstenues** [essentiellement pronominal, accord sujet, 1 pt] et se sont **lavé** [invariable car les bras est COD postposé, 1 pt]. »*

#### Partie II : Pluriel des Noms Composés (4 points)
1. *Des **gardes-chasse** [ou gardes-chasses 1990]* (1 pt).
2. *Des **coffres-forts*** (1 pt).
3. *Des **gratte-ciel** [traditionnel] ou **gratte-ciels** [1990]* (1 pt).
4. *Des **arrière-goûts*** (1 pt).

#### Partie III : Apparat Critique (8 points — 4 pts par item)
1. **Phrase 1 (*propagées*)** :
   - Forme : *propagées* (1 pt).
   - Catégorisation : Pronominal passif (1 pt).
   - Rôle : *Les vérités universelles* est sujet patient ; *se* est morphème de voix (1 pt).
   - Règle/Source : Accord systématique avec le sujet [`SRC-GRAM-01`, § 952] (1 pt).
2. **Phrase 2 (*rendu*)** :
   - Forme : *rendu* (1 pt).
   - Catégorisation : Locution verbale pronominale figée (1 pt).
   - Rôle : *Compte* est COD postposé immédiat de *rendre* ; *se* est COI (1 pt).
   - Règle/Source : Invariabilité obligatoire du participe passé avec COD postposé [`SRC-GRAM-01`, § 953] (1 pt).
</details>

---

## 20. Critères Observables de Maîtrise (Palier L3 Autonomie)

| Code Indicateur | Compétence & Palier | Comportement Observable Attendu | Seuil de Validation Exigé |
| :---: | :---: | :--- | :---: |
| **IND-ORT-04** | [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (**L3**) | **Résolution des participes pronominaux** : L'apprenant applique sans faille l'arbre décisionnel en 4 étapes, neutralise l'accord sur les dix verbes intransitifs et gère l'antéposition sur *s'arroger*. | **100 % d'accords corrects** sur batterie de 20 phrases pièges. |
| **IND-ORT-01** | [`FR-ORTHO-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-001-orthographe-lexicale-et-morphologie-dérivationnelle) (**L3**) | **Pluriel des noms composés** : L'apprenant décompose immédiatement la nature des éléments et restitue la flexion traditionnelle ainsi que la régularisation de 1990. | $\ge 90\ \%$ de réussites sur 20 noms composés complexes. |
| **IND-SYN-01** | [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) (**L3**) | **Analyse de la valence et des rôles actanciels** : L'apprenant discrimine formellement le clitique COD du clitique COI par le test de commutation active avec l'auxiliaire *avoir*. | **Zéro confusion COD/COI** sur apparat critique écrit. |

---

## 21. Sources et Lectures Complémentaires

Toutes les règles normatives, attestations historiques et typologies de ce chapitre s'appuient exclusivement sur les autorités scientifiques enregistrées au répertoire officiel [`source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md) :

1. **[`SRC-GRAM-01`] Grevisse, Maurice & Goosse, André (2016)**. *Le Bon Usage* (16e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 950 à § 955** : Traité intégral de l'accord du participe passé des verbes pronominaux (définition actancielle, verbes essentiellement pronominaux, sens passif, règles des verbes accidentellement pronominaux, liste des intransitifs invariables, statut de *s'arroger*).
   - **§ 521 à § 529** : Le nombre dans les noms composés (analyse morphologique par composants, noms en apposition, verbe + nom, composés en *garde-*).
2. **[`SRC-GRAM-02`] Riegel, Martin, Pellat, Jean-Christophe & Rioul, René (2016/2021)**. *Grammaire méthodique du français*. Paris : PUF, coll. « Quadrige ».
   - **Chapitre 12 (*Morphologie lexicale : la composition*)** : Structure interne des mots composés, classification syntaxique et critères de flexion.
   - **Chapitre 17 (*La morphologie verbale et les voix*)** : Diathèse pronominale, voix moyenne, clitiques conjoints réfléchis et réciproques, théorie formelle de l'accord d'objet.
3. **[`SRC-NORM-02`] Conseil supérieur de la langue française (1990)**. *Les rectifications de l'orthographe (Journal officiel de la République française)*. Paris.
   - Régularisation du pluriel des noms composés du type Verbe + Nom et soudures lexicales.
4. **[`SRC-NORM-03`] Ministère de l'Éducation nationale (2020)**. *Terminologie grammaticale*. Paris : Réseau Canopé / Éduscol.
   - Nomenclature officielle sur la transitivité verbale, les compléments de verbe (COD/COI) et la voix pronominale.
5. **[`SRC-TYPO-01`] Imprimerie nationale (2002/2014)**. *Lexique des règles typographiques en usage à l'Imprimerie nationale*. Paris : Imprimerie nationale.
   - Règles officielles du mot typographique, conventions de césure, traitement des traits d'union et des apostrophes.

---

## Annexe : Classification Pédagogique et Traçabilité du Contenu

Conformément au guide de rédaction académique ([`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md)), le tableau ci-dessous explicite la répartition didactique des notions traitées dans ce chapitre terminal de synthèse de `MOD-303` :

| Étiquette didactique | Contenu grammatical / Notion abordée | Justification didactique & Destination précise |
| :---: | :--- | :--- |
| **CORE-NOW** | • Arbre de décision unifié en 4 questions fermées.<br/>• Liste fermée des 10 intransitifs invariables (*se succéder, se plaire, etc.*).<br/>• Règle de Marot appliquée aux verbes pronominaux (COD postposé vs antéposé).<br/>• Traitement dérogatoire de *s'arroger*.<br/>• Invariabilité de la locution *se rendre compte*.<br/>• Pluriel des noms composés en graphie traditionnelle et 1990.<br/>• Méthodologie de la fiche d'arbitrage en 4 champs. | Cœur opérationnel absolu du chapitre `CHP-303-06`. Savoir indispensable pour l'autonomie orthographique (Palier L3), la révision éditoriale et les concours académiques. |
| **INTRODUCTION-NOW** | • Approche formelle de l'accord d'objet par la projection fonctionnelle $\text{AgrOP}$ et le contrôle des traits $\phi$.<br/>• Double analyse tolérée sur certains verbes pronominaux autonomes (*se douter, s'apercevoir*). | Sensibilisation à la linguistique théorique universitaire préparant les épreuves de grammaire de concours supérieur. |
| **DEFER** | • L'accord du participe passé suivi d'un infinitif (*les décisions que j'ai vu prendre* vs *les personnes que j'ai vues courir*).<br/>• Le cas particulier des semi-auxiliaires *faire* et *laisser* suivis d'un infinitif (*elle s'est fait entendre*). | **Reporté à [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md)** (Semestre 4 : *Participe Passé suivi d'un Infinitif et Cas Limites*). |
| **DEFER** | • L'intégration des règles d'accord sous contrainte d'évaluation critique de synthèse de textes et d'argumentation. | **Reporté à [`MOD-304`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md)** (*Synthèse Comparative de Documents*). |
| **MOVE** | • L'audit professionnel de manuscrits littéraires anciens et l'évolution historique de l'invariabilité de Marot au XVIIe siècle. | **Rattaché à [`MOD-601`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601-diachronie-histoire-langue-francaise.md)** (*Diachronie et Histoire de la Langue Française*). |
| **OPTIONAL-ADVANCED** | • Formalisation en grammaire générative chomskyenne du mouvement des clitiques d'objet et vérification de cas accusatif. | Destiné exclusivement aux étudiants préparant les concours de l'ENS ou l'Agrégation de grammaire. |
| **REMOVE** | • L'apprentissage passif des désinences dialectales médiévales du participe passé en ancien français. | Écarté pour concentrer l'effort cognitif sur l'infaillibilité de la norme contemporaine prescrite. |
