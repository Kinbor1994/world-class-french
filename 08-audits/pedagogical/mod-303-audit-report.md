# Rapport d'Audit Académique, Philologique et Pédagogique — Module MOD-303

> **Document de référence** : `08-audits/pedagogical/mod-303-audit-report.md`  
> **Module audité** : [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md)  
> **Périmètre d'audit** : Les 6 chapitres de cours complets (`CHP-303-01` à `CHP-303-06`)  
> **Date de réalisation** : 15 octobre 2026  
> **Auditeur** : Agent Antigravity — Réviseur académique et linguiste du français  
> **Cadre méthodologique** : Charte de projet (§6.1, §8, §9.4), *Karpathy Guidelines*, [`chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md), décisions d'architecture [`DEC-006`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md#dec-006-harmonisation-du-rythme-hebdomadaire-et-des-heures-de-cours), [`DEC-010`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md#dec-010-application-des-résolutions-de-laudit-darchitecture-pédagogique) et lien bloquant [`DEP-ORT-03`](file:///f:/Formation/world-class-french/01-architecture/dependency-graph.md#22-axe-orthographe-grammaticale--accords-du-canonique-aux-cas-limites)  
> **Statut du rapport** : [STATUT : VALIDÉ]

---

## 1. Contexte et Objectifs de l'Audit

Le module `MOD-303` constitue le verrou normatif cardinal du **Cycle 3 (Année 2 / Semestre 3)** du cursus *World-Class French*. Situé en charnière directe après l'architecture propositionnelle (`MOD-301`) et le système circonstanciel et modal (`MOD-302`), il traite la zone de friction orthographique la plus piégée de la langue française écrite : l'accord du participe passé des verbes pronominaux et la flexion plurielle des noms composés.

L'objectif fondamental du module est de substituer au réflexe empirique ou acoustique (l'oreille) un **algorithme d'arbitrage actanciel déterministe** :
1. La compréhension du statut linguistique du morphème clitique *se* (diathèse, voix moyenne, simple marqueur morphologique vs actant anaphorique plein) et la démystification du **leurre de l'auxiliaire *être*** qui n'est en syntaxe profonde qu'un calque de la transitivité d'*avoir* ;
2. La maîtrise de l'accord systématique avec le sujet pour les verbes essentiellement pronominaux (*s'enfuir, s'abstenir*) et les pronominaux passifs (*le livre s'est vendu*), ainsi que l'élucidation de l'exception doctrinale unique de ***s'arroger*** (où *se* est analysé en COI datif) ;
3. Le calcul actanciel rigoureux des verbes accidentellement pronominaux (réfléchis et réciproques) distinguant le pronom COD (*elles se sont rencontrées* $\rightarrow$ accord) du pronom COI (*elles se sont parlé* $\rightarrow$ invariable), et la gestion de la concurrence d'objets (COD nominal postposé *elle s'est lavé les mains* vs antéposé *les mains qu'elle s'est lavées*) ;
4. L'apprentissage par cœur de la **liste fermée des 10 verbes intransitifs invariables** (*se plaire, se complaire, se déplaire, se rire, se nuire, se convenir, se ressembler, se succéder, se suffire, se survivre*) et la démystification absolue de la faute éliminatoire de concours : *« ils se sont succédé »* ;
5. La maîtrise du pluriel des noms composés en grammaire traditionnelle selon la nature des constituants (Nom+Nom, Adjectif+Nom, Verbe+Nom, Adverbe+Nom, ellipse prépositionnelle *timbres-poste*), le traitement du cas hautement discriminatoire de ***garde-*** (agent animé variable vs verbe invariable), et l'intégration des rectifications officielles de 1990 (`SRC-NORM-02`) ;
6. L'unification procédurale en un **arbre décisionnel en 4 questions** et la pratique professionnelle de la fiche d'arbitrage morphosyntaxique sur un corpus de 20 phrases controversées.

### Compétences Référentielles Auditées :
- [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (Résolution des accords des verbes pronominaux — Palier L3 Autonomie) ;
- [`FR-ORTHO-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-001-maîtrise-de-lorthographe-lexicale-et-flexionnelle) (Pluriel des noms composés et morphologie lexicale — Palier L3 Autonomie) ;
- [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) (Analyse de la valence verbale et du statut actanciel — Palier L3 Autonomie) ;
- [`FR-INT-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-001-rédiger-un-texte-long-cohérent-en-maîtrisant-accords-et-ponctuation) (Exactitude des accords dans les productions suivies — Palier L3 Autonomie) ;
- [`FR-INT-003`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-003-réviser-et-corriger-un-texte-tiers-en-justifiant-les-interventions) (Correction raisonnée et apparat critique d'arbitrage — Palier L3 Autonomie).

---

## 2. Protocole et Outils de Vérification Exécutés

L'audit a été réalisé au moyen du banc d'essai automatisé officiel du cursus : [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py).

### Contrôles systématiques appliqués :
1. **Intégrité des liens locaux et des ancres** : Résolution de 100 % des liens `file:///...` et vérification d'existence des fichiers cibles et ancres markdown ;
2. **Authenticité des identifiants** : Validation croisée de chaque code `SRC-*` avec [`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md) et de chaque code `FR-*` avec [`02-competency-framework/competency-framework.md`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md) ;
3. **Exactitude arithmétique des annonces** : Vérification que chaque annonce de type « N erreurs » correspond rigoureusement à N sous-sections numérotées `### Erreur n° 1` à `### Erreur n° N` ;
4. **Validation mot à mot des corpus sous contrainte** : Vérification de la métrique typographique officielle selon la règle de l'Imprimerie nationale (`SRC-TYPO-01`) sur les textes calibrés (50 mots exacts en exercice de niveau 3, 60 mots exacts en production réelle) ;
5. **Vérification de notation morphologique** : Proscription des barres obliques phonétiques pour les affixes et désinences afin d'éviter tout faux positif Wiktionnaire.

---

## 3. Synthèse des Résultats d'Exécution

Le banc d'essai a audité l'ensemble du répertoire `03-curriculum/year-2/semester-3/mod-303/` avec un score de conformité immédiat de 100 % :

| Indicateur de contrôle | Valeur observée | Statut de conformité |
| :--- | :---: | :---: |
| **Nombre de chapitres audités** | **6** | **100 % du module** |
| **Volume textuel global** | **4 054 lignes / 520,5 Ko** | **Très dense et exhaustif** |
| **Erreurs critiques (liens brisés, sources invalides)** | **0** | **0 erreur** |
| **Erreurs d'annonces (incohérence N annoncés / N réels)** | **0** | **6 / 6 conformes** |
| **Identifiants de sources inconnus (`SRC-*`)** | **0** | **100 % authentiques** |
| **Identifiants de compétences inconnus (`FR-*`)** | **0** | **100 % authentiques** |
| **Liens markdown internes vérifiés avec succès** | **519 / 519** | **100 % valides** |
| **Avertissements textuels ou résiduels** | **0** | **Aucun** |

---

## 4. Détail par Chapitre de MOD-303

### 4.1 [`CHP-303-01` — Fondement Linguistique du Système Pronominal](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-01-fondement-linguistique-systeme-pronominal.md)
- **Titre** : *Fondement Linguistique du Système Pronominal : Clitique Syntaxique, Diathèse, Voix Moyenne et le Leurre de l'Auxiliaire « Être »*
- **Métriques** : 654 lignes, 87,0 Ko, 72 liens vérifiés sans rupture.
- **Points forts** :
  - Démontage théorique du « piège d'être » : démonstration que l'auxiliaire être de surface ne régit pas l'accord mais masque l'attribution actancielle de Marot (`MOD-202`) ;
  - Typologie fonctionnelle quadripartite (essentiel, passif, réfléchi, réciproque) clairement schématisée sous Mermaid ;
  - Exactitude arithmétique rigoureuse : 6 erreurs cliniques, exercice L3 à 50 mots exacts, production réelle à 60 mots exacts (décompte mot à mot certifié).

### 4.2 [`CHP-303-02` — Verbes Essentiellement Pronominaux et Sens Passif](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-02-verbes-essentiellement-pronominaux-sens-passif.md)
- **Titre** : *Verbes Essentiellement Pronominaux et Verbes à Sens Passif : Accord Systématique avec le Sujet et l'Exception Unique de « S'arroger »*
- **Métriques** : 642 lignes, 86,5 Ko, 92 liens vérifiés sans rupture.
- **Points forts** :
  - Traitement complet des verbes intrinsèquement pronominaux (*s'enfuir, se souvenir*) et des verbes à autonomie sémantique radicale (*s'apercevoir de, s'attaquer à*) ;
  - Élucidation exhaustive de l'exception doctrinale unique de ***s'arroger*** (*se* analysé comme COI dative $\rightarrow$ règle du COD antéposé/postposé) ;
  - 6 erreurs cliniques titrées, calibrage métrique 50 mots / 60 mots certifié selon `SRC-TYPO-01`.

### 4.3 [`CHP-303-03` — Verbes Accidentellement Pronominaux : Réfléchis et Réciproques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-03-verbes-accidentellement-pronominaux-reflechis-reciproques.md)
- **Titre** : *Verbes Accidentellement Pronominaux : Réfléchis, Réciproques, Analyse du Clitique COD vs COI et Concurrence d'Objets*
- **Métriques** : 774 lignes, 102,1 Ko, 87 liens vérifiés sans rupture.
- **Points forts** :
  - Démonstration systématique de l'assignation de cas du pronom réfléchi (*se* COD vs *se* COI) ;
  - Concurrence d'objets : COD nominal postposé (*elle s'est lavé les mains* $\rightarrow$ invariable) vs COD antéposé (*les mains qu'elle s'est lavées* $\rightarrow$ accord) ;
  - Traitement des expressions figées (*se rendre compte*) et cas d'attribut du COD (*ils se sont crus invincibles*).

### 4.4 [`CHP-303-04` — Liste Fermée des Participes Intransitifs Invariables](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-04-liste-fermee-participes-intransitifs-invariables.md)
- **Titre** : *La Liste Fermée des Participes Intransitifs Invariablement Invariables : Rection Prépositionnelle, Verbes Cardinaux et Démystification de « Ils se sont succédé »*
- **Métriques** : 676 lignes, 83,1 Ko, 69 liens vérifiés sans rupture.
- **Points forts** :
  - Tableau exhaustif et analyse des **10 verbes cardinaux** de Grevisse § 955 (*se plaire, complaire, déplaire, rire, nuire, convenir, ressembler, succéder, suffire, survivre*) ;
  - Démystification complète du calvaire de concours : *« ils se sont succédé »* opposé à *« ils se sont suivis »* (suivre = transitif direct) ;
  - Règle de Marot : absence absolue de COD direct $\rightarrow$ invariabilité structurelle sans exception.

### 4.5 [`CHP-303-05` — Pluriel des Noms Composés et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-05-pluriel-noms-composes-pieges-morphologiques.md)
- **Titre** : *Le Pluriel des Noms Composés et Pièges Morphologiques : Règles Traditionnelles, Statut Critique de « Garde- » et Rectifications de 1990*
- **Métriques** : 709 lignes, 80,3 Ko, 74 liens vérifiés sans rupture.
- **Points forts** :
  - Règle traditionnelle selon la nature des constituants (Nom+Nom, Adjectif+Nom, Verbe+Nom, Adverbe+Nom, locutions figées *va-et-vient*) ;
  - Le cas critique de *garde-* : test d'agentivité infaillible (nom d'agent animé variable *gardes-chasse* vs forme verbale inanimée invariable *garde-manger, garde-fous*) ;
  - Intégration rigoureuse et comparée des rectifications de 1990 (`SRC-NORM-02`) pour les composés Verbe+Nom et les soudures lexicales.

### 4.6 [`CHP-303-06` — Synthèse Algorithmique et Protocole d'Arbitrage](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-06-synthese-algorithmique-protocole-arbitrage.md)
- **Titre** : *Synthèse Algorithmique et Protocole d'Arbitrage Morphosyntaxique : Arbre Décisionnel Unifié et Résolution de Haute Précision*
- **Métriques** : 599 lignes, 81,5 Ko, 125 liens vérifiés sans rupture.
- **Points forts** :
  - Arbre de décision unifié en 4 questions fermées pour résoudre n'importe quelle forme verbale pronominale en quelques secondes ;
  - Résolution méthodique et intégrale des **20 phrases controversées du corpus officiel de MOD-303** avec tableau d'arbitrage en 4 colonnes (catégorisation, rôle du pronom, règle appliquée, référence doctrinale) ;
  - Apparat critique d'arbitrage professionnel et mise en pratique juridique de 60 mots certifiés.

---

## 5. Décision d'Agrément et Consolidation

Au vu de la conformité intégrale des 6 chapitres, de la rigueur mathématique et linguistique de leurs contenus, de l'absence totale de liens brisés (519/519 valides) et du respect absolu des 21 rubriques normatives :

1. Le module [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md) est déclaré **OFFICIELLEMENT VALIDÉ** ;
2. La décision d'approbation est enregistrée dans le journal de gouvernance sous l'identifiant [`DEC-033`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md) ;
3. Le jalon ouvre directement la voie au module terminal du Semestre 3 : [`MOD-304` — Synthèse Comparative de Documents, Compte Rendu Critique et Argumentation Logique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md).
