# Rapport d'Audit Académique, Philologique et Pédagogique — Module MOD-401

> **Document de référence** : `08-audits/pedagogical/mod-401-audit-report.md`  
> **Module audité** : [`MOD-401` — Pragmatique Énonciative, Cas Limites d'Accord (Participe + Infinitif), Rectifications de 1990 et Registres de Langue](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md)  
> **Périmètre d'audit** : Les 7 chapitres de cours complets (`CHP-401-01` à `CHP-401-07`)  
> **Date de réalisation** : 15 octobre 2026  
> **Auditeur** : Agent Antigravity — Réviseur académique et linguiste du français  
> **Cadre méthodologique** : Charte de projet (§6.1, §8, §9.4), *Karpathy Guidelines*, [`chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md), décisions d'architecture [`DEC-006`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md#dec-006-harmonisation-du-rythme-hebdomadaire-et-des-heures-de-cours), [`DEC-010`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md#dec-010-application-des-résolutions-de-laudit-darchitecture-pédagogique) et liens de dépendance [`DEP-ORT-04`](file:///f:/Formation/world-class-french/01-architecture/dependency-graph.md#22-axe-orthographe-grammaticale--accords-du-canonique-aux-cas-limites)  
> **Statut du rapport** : [STATUT : VALIDÉ]

---

## 1. Contexte et Objectifs de l'Audit

Le module `MOD-401` inaugure le **Semestre 4 (Cycle 4)** du cursus *World-Class French*. Il constitue la charnière critique entre la maîtrise formelle des structures morphosyntaxiques complexes acquise aux semestres 1 à 3 et l'intelligence discursive, pragmatique et sociolinguistique indispensable au scripteur d'élite.

L'objectif cardinal du module est de résoudre définitivement les deux défis majeurs qui départagent le locuteur empirique du spécialiste accompli :
1. **L'appareil formel de l'énonciation, la polyphonie et la sociolinguistique des registres** : déchiffrer l'inscription du sujet dans son discours (Benveniste), débusquer les voix intriquées et les présupposés idéologiques (Ducrot, Bakhtine), et maîtriser l'étanchéité des registres diaphasiques (familier, courant, soutenu, solennel) sans jamais succomber à la rupture de ton ni à l'hypercorrection [SRC-GRAM-02, chap. 18-20 ; SRC-SOCIO-02] ;
2. **La résolution algorithmique des cas limites d'accord verbal et les Rectifications de 1990** : éradiquer les hésitations sur le participe passé suivi d'un infinitif (*verbes de perception*, *fait*, *laissé*, semi-auxiliaires modaux et de mouvement) et asseoir une lucidité philologique totale face aux Rectifications officielles de l'orthographe de 1990 [SRC-GRAM-01, § 956-965 ; SRC-NORM-02 ; SRC-NORM-03].

### Compétences Référentielles Auditées :
- [`FR-ORTHO-003`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-003-accord-rigoureux-du-participe-passé-avec-lauxiliaire-avoir) (Accord du participe passé avec l'auxiliaire avoir et rection d'infinitif — Palier L4 Maîtrise approfondie) ;
- [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (Résolution des accords des formes pronominales de perception — Palier L4 Maîtrise approfondie) ;
- [`FR-ORTHO-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-002-maîtrise-des-accents-trémas-et-signes-auxiliaires) (Application raisonnée des rectifications orthographiques de 1990 — Palier L4) ;
- [`FR-SOCIOL-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-sociol-001-conscience-sociolinguistique-et-navigation-entre-registres) (Conscience sociolinguistique et étanchéité diaphasique — Palier L3 Autonomie) ;
- [`FR-INT-003`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-003-réviser-et-corriger-un-texte-tiers-en-justifiant-les-interventions) (Révision éditoriale et arbitrage normatif des épreuves — Palier L4 Maîtrise approfondie) ;
- [`FR-INT-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-004-adapter-instantanément-son-registre-de-langue-au-contexte) (Adaptation instantanée du registre de langue au contexte — Palier L3 Autonomie) ;
- [`FR-STYLE-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-style-001-clarté-concision-et-cadence-de-la-phrase) (Précision énonciative et cadence — Palier L3 Autonomie).

---

## 2. Protocole et Outils de Vérification Exécutés

L'audit a été réalisé au moyen du banc d'essai automatisé officiel du cursus : [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py).

### Contrôles systématiques appliqués :
1. **Intégrité des liens locaux et des ancres** : Résolution de 100 % des liens `file:///...` et vérification d'existence des fichiers cibles et ancres markdown ;
2. **Authenticité des identifiants** : Validation croisée de chaque code `SRC-*` avec [`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md) et de chaque code `FR-*` avec [`02-competency-framework/competency-framework.md`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md) ;
3. **Exactitude arithmétique des annonces** : Vérification que chaque annonce de type « N erreurs » correspond rigoureusement à N sous-sections numérotées `### Erreur n° 1` à `### Erreur n° N` ;
4. **Validation mot à mot des corpus sous contrainte** : Vérification de la métrique typographique officielle selon la règle de l'Imprimerie nationale (`SRC-TYPO-01`) sur les textes calibrés (50 mots exacts en exercice de niveau 3, 60 mots exacts en production réelle) ;
5. **Vérification de notation morphologique et typographique** : Absence de barres obliques ambiguës pour les affixes, respect des règles orthographiques et typographiques de l'Imprimerie nationale.

---

## 3. Synthèse des Résultats d'Exécution

Le banc d'essai a audité l'ensemble du répertoire `03-curriculum/year-2/semester-4/mod-401/` avec un score de conformité de 100 % après résolution chirurgicale des liens internes :

| Indicateur de contrôle | Valeur observée | Statut de conformité |
| :--- | :---: | :---: |
| **Nombre de chapitres audités** | **7** | **100 % du module** |
| **Volume textuel global** | **5 056 lignes / 665 Ko** | **Très dense et exhaustif** |
| **Erreurs critiques (liens brisés, sources invalides)** | **0** | **0 erreur** |
| **Erreurs d'annonces (incohérence N annoncés / N réels)** | **0** | **8 / 8 annonces conformes** |
| **Identifiants de sources inconnus (`SRC-*`)** | **0** | **100 % authentiques** |
| **Identifiants de compétences inconnus (`FR-*`)** | **0** | **100 % authentiques** |
| **Liens markdown internes vérifiés avec succès** | **562 / 562** | **100 % valides** |
| **Avertissements textuels ou résiduels** | **0** | **Aucun** |

---

## 4. Détail par Chapitre de MOD-401

### 4.1 [`CHP-401-01` — Linguistique de l'Énonciation et Cadre Pragmatique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-01-linguistique-enonciation-cadre-pragmatique.md)
- **Titre** : *Linguistique de l'Énonciation et Cadre Pragmatique : Appropriation de l'Appareil Formel, Déixis, Corrélation de Personne et Modalisateurs*
- **Métriques** : 662 lignes, 92,1 Ko, 52 liens vérifiés sans rupture.
- **Points forts** :
  - Théorie de l'énonciation d'Émile Benveniste (énoncé vs énonciation, appropriation de l'appareil formel) ;
  - Cartographie de la déixis spatio-temporelle ($T_0, L_0$) vs repères anaphoriques et absolus du récit ;
  - Corrélation de personne (*je/tu* partenaires de l'interlocution vs *il* non-personne) et typologie des modalisateurs (épistémiques, appréciatifs, déontiques) ;
  - Calibrage exact : 6 erreurs cliniques titrées, niveau 3 à 50 mots exacts, production réelle à 60 mots exacts certifiés selon `SRC-TYPO-01`.

### 4.2 [`CHP-401-02` — Polyphonie Énonciative et Discours Rapportés](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-02-polyphonie-enonciative-discours-rapportes.md)
- **Titre** : *Polyphonie Énonciative et Discours Rapportés : Théorie de Ducrot, Triade Posé/Présupposé/Sous-Entendu, Ironie et Régimes de Discours*
- **Métriques** : 725 lignes, 102,4 Ko, 71 liens vérifiés sans rupture.
- **Points forts** :
  - Théorie polyphonique d'Oswald Ducrot (sujet parlant, locuteur $L$, énonciateurs $E_n$) rompant avec l'illusion de l'unicité du sujet ;
  - Démonstration opératoire du test de la négation et de l'interrogation pour le présupposé et test d'annulation contextuelle pour le sous-entendu ;
  - Caractérisation polyphonique de l'ironie et typologie des trois régimes de discours rapportés (direct, indirect, indirect libre) ;
  - 6 erreurs cliniques titrées, 50 mots certifiés en niveau 3, 60 mots en production réelle.

### 4.3 [`CHP-401-03` — Le Participe Passé suivi d'un Infinitif : Verbes de Perception](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-03-participe-passe-infinitif-verbes-perception.md)
- **Titre** : *Le Participe Passé suivi d'un Infinitif : Verbes de Perception et Règle d'Agentivité (« Entendues Chanter » vs « Entendu Chanter »)*
- **Métriques** : 826 lignes, 94,0 Ko, 73 liens vérifiés sans rupture.
- **Points forts** :
  - Définition et délimitation de la classe canonique des verbes de perception (*voir, entendre, écouter, regarder, sentir, apercevoir*) [SRC-GRAM-01, § 956-960] ;
  - Formulation rigoureuse de la règle d'agentivité de l'infinitif : accord si le COD antéposé est le sujet actif de l'infinitif (*les violonistes que j'ai entendues jouer*), invariabilité s'il est l'objet passif de l'infinitif (*les sonates que j'ai entendu jouer*) ;
  - Double test de substitution (participe présent / *en train de* vs passivation) et traitement des formes pronominales (*elle s'est sentie défaillir* vs *elle s'est vu refuser l'entrée*) ;
  - 6 erreurs cliniques titrées, calibrages métriques certifiés mot à mot.

### 4.4 [`CHP-401-04` — Cas Limites : L'Invariabilité de « Fait », le Statut Dual de « Laissé » et Semi-Auxiliaires](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-04-cas-limites-invariabilite-fait-statut-laisse.md)
- **Titre** : *Cas Limites : L'Invariabilité Absolue de « Fait », le Statut Dual de « Laissé » et Semi-Auxiliaires*
- **Métriques** : 629 lignes, 87,6 Ko, 94 liens vérifiés sans rupture.
- **Points forts** :
  - Invariabilité absolue et intangible de *fait* suivi d'un infinitif (zéro exception en français contemporain : *je les ai fait venir*, *la maison qu'elle a fait bâtir*) par coalescence d'un prédicat complexe causatif unitaire ;
  - Statut dual de *laissé* : distinction claire entre la règle classique d'agentivité et la recommandation de régularisation officielle des Rectifications de 1990 (invariabilité complète de *laissé + infinitif*) [SRC-NORM-02] ;
  - Régime systématique d'invariabilité des semi-auxiliaires modaux (*devoir, pouvoir, vouloir, savoir, falloir*) avec infinitif explicite ou sous-entendu ;
  - 6 erreurs cliniques titrées, clause pénale officielle (-5 pts par accord de *fait* + infinitif), décomptes métriques certifiés.

### 4.5 [`CHP-401-05` — Les Rectifications Orthographiques de 1990](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-05-rectifications-orthographiques-1990.md)
- **Titre** : *Les Rectifications Orthographiques de 1990 : Principes Directeurs, Numéraux Composés, Mots Composés, Accent Circonflexe et Verbes en -eler/-eter*
- **Métriques** : 745 lignes, 93,5 Ko, 76 liens vérifiés sans rupture.
- **Points forts** :
  - Clarification juridique et institutionnelle du statut officiel des Rectifications de 1990 (Journal officiel du 6 décembre 1990, approbation unanime de l'Académie française) et consécration du **principe du double usage toléré** ;
  - Traitement méthodique des quatre chantiers cardinaux : numéraux composés avec trait d'union généralisé (*vingt-et-un*, *deux-cents*), pluriel des composés Verbe+Nom sur le modèle des mots simples (*tire-bouchons*, *essuie-mains*), suppression raisonnée de l'accent circonflexe sur *i/u* avec préservation impérative des homophones distinctifs (*mûr, sûr, jeûne, dû*) et des formes verbales du passé simple / subjonctif imparfait (*fûmes, vînt*), régularisation des verbes en *-eler/-eter* avec exception d'*appeler* et *jeter* ;
  - 6 erreurs d'application titrées, décomptes métriques 50 mots / 60 mots vérifiés.

### 4.6 [`CHP-401-06` — Sociolinguistique des Registres de Langue](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-06-sociolinguistique-registres-langue.md)
- **Titre** : *Sociolinguistique des Registres de Langue : Variations Diaphasiques (Familier, Courant, Soutenu, Solennel) aux Niveaux Phonétique, Lexical et Syntaxique*
- **Métriques** : 691 lignes, 97,1 Ko, 63 liens vérifiés sans rupture.
- **Points forts** :
  - Distinction scientifique des variations diaphasique (situationnelle), diastratique (sociale) et diatopique (géographique) adossée à Labov, Gadet et Bourdieu [SRC-SOCIO-02] ;
  - Analyse contrastée sur quatre registres (familier, courant, soutenu, solennel) aux plans phonétique (chute du *ne*, élisions, schwa, liaisons), lexical (quadruplets contrastés) et syntaxique (dislocations, structures interrogatives, périodes oratoires) ;
  - Règle d'airain de l'étanchéité diaphasique et proscription absolue de la rupture de ton ;
  - 6 erreurs cliniques titrées, exercice de comédie sociale à 50 mots exacts, incident de séance à 60 mots exacts (30 mots familier / 30 mots solennel) certifié selon `SRC-TYPO-01`.

### 4.7 [`CHP-401-07` — Synthèse Algorithmique et Protocole d'Arbitrage Éditorial](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-07-synthese-algorithmique-arbitrage-editorial.md)
- **Titre** : *Synthèse Algorithmique et Protocole d'Arbitrage Éditorial : Arbre Décisionnel en 4 Filtres, Guide 1990 et Grille Universitaire*
- **Métriques** : 778 lignes, 98,3 Ko, 133 liens vérifiés sans rupture.
- **Points forts** :
  - **L'Arbre Décisionnel Unifié en 4 Filtres Séquentiels** : Filtre 1 (Causatif *faire* $\to$ invariable), Filtre 2 (Semi-auxiliaire *laisser* $\to$ 1990 invariable vs classique agent), Filtre 3 (Perception $\to$ accord si agent, invariable si patient), Filtre 4 (Modaux et mouvement $\to$ invariable) ;
  - Guide de politique éditoriale pour l'application sans panachage des Rectifications de 1990 (Chartes A et B) ;
  - Résolution intégrale et commentée des **20 phrases controversées du corpus officiel** de MOD-401 avec apparat critique et citations doctrinales ;
  - 6 erreurs d'arbitrage titrées, décomptes métriques 50 mots / 60 mots vérifiés, organigramme Mermaid exhaustif.

---

## 5. Décision d'Agrément et Clôture Pédagogique

Considérant :
1. L'exactitude et la rigueur des 7 chapitres produits, totalisant **5 056 lignes et 665 Ko** de contenu universitaire approfondi ;
2. La conformité totale aux 21 rubriques normatives, aux standards didactiques et aux consignes arithmétiques ;
3. Le score parfait de **0 anomalie critique et 0 avertissement** au banc d'essai automatisé [`verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) (562 contrôles d'intégrité réussis) ;
4. Le respect scrupuleux des directives philologiques et doctrinales sur les participes suivis d'infinitif, les Rectifications de 1990 et les registres de langue ;

Le comité d'audit académique prononce :
> **AGRÉMENT COMPLET ET VALIDATION DÉFINITIVE DU MODULE MOD-401**  
> Le module est certifié pour déploiement dans le cursus *World-Class French*. Le prérequis bloquant `DEP-ORT-04` est satisfait.

Fait à Cotonou / Paris, le 15 octobre 2026.  
*Pour l'équipe didactique et le comité d'audit*,  
**Agent Antigravity — Réviseur académique et linguiste principal**
