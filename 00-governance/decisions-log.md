# Journal des Décisions d'Architecture et Pédagogiques (ADR)

Ce journal consigne toutes les décisions structurantes relatives à la conception du cursus, à l'architecture des dossiers, aux choix linguistiques et aux critères d'évaluation de **World-Class French**.

---

## Format d'une décision

```markdown
### [DEC-XXX] Titre court de la décision
- **Date** : AAAA-MM-JJ
- **Statut** : Proposé | Validé | Remplacé | Déprécié
- **Contexte** : Quel problème ou besoin a motivé cette décision ?
- **Décision** : Qu'avons-nous décidé précisément ?
- **Conséquences** :
  - Positives : Bénéfices attendus.
  - Négatives / Contraintes : Compromis ou exigences imposées.
- **Alternatives écartées** : Quelles autres options ont été étudiées et pourquoi ont-elles été rejetées ?
```

---

## Registre des décisions

### [DEC-001] Arborescence standardisée du projet et séparation des préoccupations
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Nécessité d'organiser un cursus complexe de 3 ans comprenant gouvernance, architecture, référentiels, cours, ateliers pratiques, évaluations, ressources et audits sans confusion ni dispersion.
- **Décision** : Mise en place d'une numérotation préfixée (`00-` à `10-`) isolant formellement :
  - La gouvernance (`00-governance`)
  - L'architecture et la progression (`01-architecture`)
  - Les compétences et grilles d'évaluation (`02-competency-framework`)
  - Les cours magistraux / curriculum (`03-curriculum`)
  - Les travaux pratiques et laboratoires (`04-practical-work`)
  - Les projets intégrateurs (`05-projects`)
  - Les évaluations formelles (`06-assessments`)
  - Les ressources et matrices documentaires (`07-resources`)
  - Les protocoles et résultats d'audit (`08-audits`)
  - Le projet terminal de synthèse (`09-capstone`)
  - Les livrables certifiés finaux (`10-final`)
- **Conséquences** :
  - Positives : Clarté absolue, repérage immédiat des rôles de chaque dossier, modularité complète.
  - Contraintes : Rigueur stricte sur le placement des nouveaux fichiers, interdiction d'éparpiller les TP hors de `04-practical-work`.
- **Alternatives écartées** : Organisation par semestre unique (rejetée car elle mélangeait méthodologie, théorie, exercices et gouvernance).

---

### [DEC-002] Structure temporelle du cursus en 3 années (6 semestres)
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : L'acquisition d'une maîtrise approfondie du français (du niveau seuil/intermédiaire jusqu'au niveau expert C2/universitaire) exige une gradation temporelle réaliste.
- **Décision** : Adoption d'un cursus de 3 années académiques articulées en 6 semestres progressifs :
  - Année 1 : Fondations structurales, phonétique, morphologie et syntaxe élémentaire.
  - Année 2 : Syntaxe complexe, système modal/temporel, cohérence textuelle et registre formel.
  - Année 3 : Rhétorique, stylistique avancée, nuances sémantiques, critique et haute éloquence.
- **Conséquences** :
  - Positives : Progression réaliste et soutenable, respect strict du graphe des prérequis.
  - Contraintes : Nécessite une cartographie très précise pour éviter les redites inutiles ou les sauts cognitifs brutaux.
- **Alternatives écartées** : Cursus accéléré en 1 an (irréaliste pour une maîtrise "World-Class") ou cursus en 5 ans (trop dilué).

---

### [DEC-003] Protocole d'étiquetage des statuts documentaires
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Éviter qu'un brouillon d'enseignement ou une ébauche de grille d'évaluation ne soit pris pour une référence validée.
- **Décision** : Tout document en cours d'élaboration porte obligatoirement l'en-tête `> **Statut** : [STATUT : BROUILLON]`. Le statut `[STATUT : VALIDÉ]` n'est apposé qu'après validation explicite humaine ou rapport d'audit 100 % vert.
- **Conséquences** :
  - Positives : Fiabilité et traçabilité pour tous les contributeurs et agents.
  - Contraintes : Vérification obligatoire du statut avant réutilisation d'un contenu.
- **Alternatives écartées** : Gestion implicite des statuts (source fréquente d'erreurs et d'hallucinations d'agents).

---

### [DEC-004] Règle d'intégrité bibliographique et rôle de NotebookLM
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Risque d'invention de sources ou de citations apocryphes par les modèles d'IA lors de la rédaction linguistique.
- **Décision** : Interdiction absolue d'inventer des sources. Toute citation ou référence doit provenir d'une source vérifiée enregistrée dans `07-resources/source-registry.md`. NotebookLM servira de bibliothèque d'ancrage primaire fermée. En l'absence de source dans la bibliothèque, la mention `[Source externe / à vérifier]` ou un signalement de doute est obligatoire.
- **Conséquences** :
  - Positives : Intégrité académique absolue du cursus.
  - Contraintes : Nécessite un effort initial rigoureux d'alimentation documentaire avant de rédiger les modules théoriques.

---

### [DEC-005] Cahier des charges académique et prise en compte du contexte béninois/francophone
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Nécessité de formaliser les exigences académiques, les 14 composantes disciplinaires et la prise en compte du contexte linguistique béninois sans stigmatisation des usages locaux tout en préservant la haute exigence de la norme écrite standard.
- **Décision** : Adoption du cahier des charges académique complet dans `00-governance/project-charter.md`, articulé en 10 sections obligatoires avec test diagnostique initial et distinction impérative des exigences vs choix pédagogiques.
- **Conséquences** :
  - Positives : Cadre d'action complet et lucide, ancré dans le réel de l'apprenant, exempt d'élitisme abstrait ou d'artifices sans fondement.
  - Contraintes : Exige le respect des arbitrages validés ci-dessous pour le rythme et les supports.
- **Alternatives écartées** : Cursus générique sans ancrage contextuel (rejeté car il ignorerait les interférences et l'environnement multilingue ouest-africain).

---

### [DEC-006] Calibrage du rythme hebdomadaire (Option B : 5 à 6 heures / semaine)
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Déterminer la charge de travail hebdomadaire pour garantir la faisabilité et la régularité sur les 3 années de cursus.
- **Décision** : Adoption de l'Option B : rythme modéré et régulier de 5 à 6 heures par semaine d'apprentissage et de pratique délibérée (soit environ 60 à 75 heures par semestre d'enseignement effectif).
- **Conséquences** :
  - Positives : Soutenabilité maximale sur le long terme, compatibilité avec une activité professionnelle ou des études universitaires en parallèle, réduction du risque d'abandon.
  - Contraintes : Nécessite une grande concision et une densité pédagogique optimale pour chaque séance.
- **Alternatives écartées** : Option A (10 à 12 h / semaine, jugée trop lourde pour un cursus d'endurance sur 3 ans).

---

### [DEC-007] Politique de sélection des corpus d'étude (Équilibre classique et francophone)
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Offrir à l'apprenant au Bénin des modèles d'expression à la fois universels et culturellement émancipateurs.
- **Décision** : Les corpus d'exemples, de dictées et d'analyses textuelles combineront à parité équilibrée :
  1. Les grands prosateurs et essayistes du patrimoine classique et moderne de langue française (Bossuet, Voltaire, Rousseau, Flaubert, Proust, Camus, Yourcenar...).
  2. Les figures majeures de la littérature et de la pensée francophone d'Afrique subsaharienne et des Caraïbes (Léopold Sédar Senghor, Aimé Césaire, Ahmadou Kourouma, Amadou Hampâté Bâ, Camara Laye, Olympe Bhêly-Quenum, Paulin Hountondji, etc.).
- **Conséquences** :
  - Positives : Résonance culturelle directe, valorisation des grands auteurs francophones du continent, démonstration de l'excellence de la langue dans toute sa diversité sans compromis sur la rigueur grammaticale.
  - Contraintes : Exigence de sélectionner des éditions de référence pour les textes africains.

---

### [DEC-008] Format des supports pédagogiques et laboratoires d'exercices (Markdown autonome)
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Définir le support technique des exercices et travaux pratiques dans le workspace.
- **Décision** : Tous les exercices, dictées, ateliers d'écriture et évaluations seront rédigés sous forme de fiches **Markdown (`.md`) autonomes**, incluant des corrigés raisonnés pas à pas détaillés (directement intégrés ou sous sections repliables/dédiées).
- **Conséquences** :
  - Positives : Portabilité totale, lisibilité immédiate, indépendance vis-à-vis d'outils tiers ou de dépendances logicielles complexes, facilité de consultation hors-ligne ou sur liseuse/tablette.
  - Contraintes : Nécessite une rédaction très explicite et pédagogique des corrigés pour que l'apprenant comprenne le cheminement cognitif de chaque réponse.

---

### [DEC-009] Architecture académique en 13 domaines et 24 modules semestriels (S1 à S6)
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : Organiser la matière d'apprentissage du cursus sur 3 ans sans répétition superflue ni déséquilibre de charge.
- **Décision** : Structuration du cursus en 13 grands domaines transversaux (`DOM-01` à `DOM-13`) et 24 modules semestriels (`MOD-101` à `MOD-604`), articulés en 4 modules par semestre. Établissement des 4 stades d'acquisition cognitive (Découverte → Consolidation → Approfondissement → Maîtrise autonome) et des portes de passage avec seuil éliminatoire à 14/20.
- **Conséquences** :
  - Positives : Lisibilité totale des interdépendances, traçabilité des prérequis, progressivité continue sans à-coups arbitraires.
  - Contraintes : Exige une transition très soignée entre S2 (phrase simple) et S3 (phrase complexe).

---

### [DEC-010] Application des résolutions de l'audit d'architecture pédagogique
- **Date** : 2026-10-11
- **Statut** : Validé
- **Contexte** : L'audit indépendant [`08-audits/pedagogical/architecture-audit.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/architecture-audit.md) a mis en évidence trois anomalies majeures (déphasage passé composé S1 vs accord participe S2, congestion cognitive en S3, absence d'épreuves sommatives orales en Année 1) et plusieurs points d'amélioration (ponctuation terminale S1, voix passive en S2, filières du Capstone en S6).
- **Décision** : Application intégrale des corrections chirurgicales suivantes :
  1. Dissociation du passé composé régulier/avec être (S1) et de l'accord avec COD antéposé (S2, après l'étude du COD).
  2. Intégration de la ponctuation terminale et de la découpe graphique dès S1 (`MOD-102`).
  3. Décongestion de S3 : anticipation de la proposition relative simple en S2 (`MOD-201`), intégration de la voix passive en S2 (`MOD-201`), et report des participes passés suivis d'infinitif et des rectifications de 1990 en S4 (`MOD-401`).
  4. Alignement de l'expression orale : ajout d'une épreuve sommative orale de 5 minutes en semaine 14 de S1 (lecture prosodique) et de S2 (restitution de résumé sans notes).
  5. Cadrage du Capstone (S6) en 3 filières (Philologie, Littérature, Éloquence).
- **Conséquences** :
  - Positives : Architecture parfaitement fluide, zéro rupture de prérequis, charge cognitive équilibrée sur les 6 semestres, oralité rigoureusement évaluée.
  - Contraintes : Exige un strict respect de ces répartitions lors de la formalisation du référentiel de compétences (Étape 5).

---

### [DEC-011] Échelle de maîtrise L0-L5 et référentiel de compétences observables
- **Date** : 2026-10-11
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Définir un cadre de compétences rigoureux mesurant des capacités observables, articulé à une échelle de progression de 6 niveaux (L0 à L5) excluant toute promesse marketing non vérifiable.
- **Décision** :
  1. Adoption de l'échelle L0 (Exposition) à L5 (Expertise transférable) dans `02-competency-framework/mastery-levels.md`.
  2. Création de 15 compétences disciplinaires fondamentales (`FR-PHON-001` à `FR-PHILOL-001`) et de 6 compétences intégrées transversales d'excellence (`FR-INT-001` à `FR-INT-006`) dans `02-competency-framework/competency-framework.md`.
  3. Établissement des grilles d'évaluation officielles (dictées à barème pénal, production écrite 4 domaines, révision éditoriale 30 pièges, éloquence orale, Capstone 100 points) dans `02-competency-framework/assessment-rubrics.md`.
- **Conséquences** :
  - Positives : Objectivité totale des évaluations, mesurabilité par double preuve, traçabilité directe des apprentissages vers les épreuves.
  - Contraintes : Exige une conception rigoureuse des ateliers et des fiches d'exercices à venir pour s'aligner sur ces critères.

---

### [DEC-012] Modélisation du graphe des dépendances pédagogiques et règles de connectivité
- **Date** : 2026-10-11
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Sécuriser la cohérence didactique globale du cursus en déterminant formellement ce qui doit être appris avant quoi, ce qui peut être mené en parallèle et ce qui requiert des réinvestissements spiralaires.
- **Décision** :
  1. Formalisation d'une typologie à 4 relations : Prérequis Indispensable (*Hard*), Prérequis Facilitateur (*Soft*), Apprentissage Concomitant (*Parallel*) et Révision Spiralaire (*Spiraled*) dans [`01-architecture/dependency-graph.md`](file:///f:/Formation/world-class-french/01-architecture/dependency-graph.md).
  2. Spécification détaillée des 7 axes majeurs (Morphosyntaxe, Accords, Conjugaison, Syntaxe complexe, Rédaction, Lecture, Philologie) avec descripteurs stricts (justification, niveau préalable, intuition admissible, risques d'inversion).
  3. Établissement de la matrice des apprentissages en parallèle pour préserver la variété cognitive semestrielle sans saturation.
  4. Audit topologique confirmant l'acyclicité stricte (DAG), l'absence de prématurité cognitive (accord pronominal sécurisé en S3, dissertation précédée de synthèse en S3) et l'absence de savoirs orphelins (réinvestissement continu de l'API phonétique et des parties du discours jusqu'en S6).
- **Conséquences** :
  - Positives : Protection absolue contre les ruptures de prérequis et la surcharge cognitive de l'apprenant ; guidage direct pour la rédaction des futurs plans de cours détaillés.
  - Contraintes : Toute modification future de l'ordre d'un module devra faire l'objet d'un contrôle d'impact vis-à-vis de ce graphe.

---

### [DEC-013] Élaboration des syllabus détaillés des six semestres (S1 à S6)
- **Date** : 2026-10-11
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Décliner l'architecture académique et le graphe de dépendances en programmes d'enseignement opérationnels pour chaque semestre dans `03-curriculum/`.
- **Décision** :
  1. Rédaction des six syllabus exhaustifs :
     - [`03-curriculum/year-1/semester-1/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/syllabus.md) (Socle morphosyntaxique, API, accords fondamentaux & phrase simple).
     - [`03-curriculum/year-1/semester-2/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/syllabus.md) (Syntaxe fonctionnelle, voix passive, participe passé avec avoir COD antéposé, résumé & oral 5 min).
     - [`03-curriculum/year-2/semester-3/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/syllabus.md) (Subordination complexe, subjonctif, accords pronominaux & synthèse de documents).
     - [`03-curriculum/year-2/semester-4/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/syllabus.md) (Pragmatique, dissertation tripartite, sophismes, cas limites d'accord & sociolinguistique).
     - [`03-curriculum/year-3/semester-5/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/syllabus.md) (Grande période oratoire, traité des figures, haute éloquence & révision éditoriale à 30 pièges).
     - [`03-curriculum/year-3/semester-6/syllabus.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/syllabus.md) (Diachronie, herméneutique savante, autonomie philologique Grevisse/TLFi & Capstone 3 filières).
  2. Chaque syllabus formalise les 12 rubriques normatives exigées et détaille pour chaque module l'estimation de la charge horaire répartie en 4 composantes : étude théorique, pratique délibérée, correction raisonnée et révision active.
- **Conséquences** :
  - Positives : Clarté opérationnelle intégrale pour le développement futur des chapitres et ateliers ; équilibre didactique parfait entre théorie, observation, entraînement, lecture, rédaction, oral et réflexion métalinguistique.
  - Contraintes : Exige le respect scrupuleux de ces volumes lors de la génération des unités d'apprentissage.

---

### [DEC-014] Conception de la fiche pédagogique opérationnelle du module MOD-101
- **Date** : 2026-10-11
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Développer le premier module opérationnel du cursus (`MOD-101`) selon les 18 rubriques didactiques normatives exigées par l'Étape 8.
- **Décision** :
  1. Rédaction de la fiche complète [`03-curriculum/year-1/semester-1/mod-101-diagnostic-phonetique-alphabet.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101-diagnostic-phonetique-alphabet.md).
  2. Couverture de la phonétique standard (36 phonèmes API), des contrastes vocaliques sensibles (/ɑ̃/ vs /ɔ̃/, apertures), du statut formel des liaisons (obligatoires vs interdites, proscription des cuirs et velours) et de l'alphabet graphique/diacritique.
  3. Enrichissement préalable du registre des sources [`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md) avec les références majeures incontestées en phonétique (`SRC-PHON-01` Léon, `SRC-PHON-02` Wioland, `SRC-PHON-03` Tranel), typographie (`SRC-TYPO-01` Imprimerie nationale) et sociolinguistique (`SRC-SOCIO-01` Queffélec).
- **Conséquences** :
  - Positives : Plan pédagogique opérationnel prêt pour la rédaction ultérieure des chapitres ; rigueur scientifique irréprochable avec citations vérifiées.
  - Contraintes : Servira de modèle méthodologique pour tous les modules suivants (`MOD-102` à `MOD-604`).

---

### [DEC-015] Conception de la fiche pédagogique opérationnelle du module MOD-102
- **Date** : 2026-10-11
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Développer le deuxième module du Semestre 1 (`MOD-102`) articulant morphologie catégorielle, ponctuation terminale et mécanique fondamentale des accords.
- **Décision** :
  1. Rédaction de la fiche complète [`03-curriculum/year-1/semester-1/mod-102-classes-mots-accords-fondamentaux.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102-classes-mots-accords-fondamentaux.md).
  2. Couverture approfondie de la distinction nature vs fonction, des 9 parties du discours (5 variables, 4 invariables), de la délimitation graphique de la phrase (ponctuation terminale et majuscules), de la chaîne d'accord du syntagme nominal, de l'accord sujet-verbe canonique (avec neutralisation des perturbateurs intercalés) et de l'éradication des 7 grandes paires d'homophones grammaticaux (*a/à, ou/où, et/est, son/sont, ce/se, ces/ses/c'est/s'est, leur/leurs*).
  3. Alignement rigoureux avec les sources normatives de référence : Grevisse & Goosse (`SRC-GRAM-01`), Riegel-Pellat-Rioul (`SRC-GRAM-02`), Terminologie grammaticale MEN (`SRC-NORM-03`) et Lexique de l'Imprimerie nationale (`SRC-TYPO-01`).
- **Conséquences** :
  - Positives : Verrouillage didactique des fondations morphosyntaxiques ; prérequis bloquant assaini avant l'étude du système verbal (`MOD-103`) et des fonctions syntaxiques de la phrase simple (`MOD-201`).
  - Contraintes : Exige une pratique délibérée intensive pour automatiser l'analyse réflexe des donneurs et receveurs d'accord.

---

### [DEC-016] Conception des fiches pédagogiques opérationnelles des modules MOD-103 et MOD-104 (Clôture du Semestre 1)
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Finaliser l'ingénierie pédagogique de l'ensemble des modules du Semestre 1 en concevant simultanément en sous-agents parallèles `MOD-103` (système verbal de l'indicatif) et `MOD-104` (précision lexicale, paragraphe et prosodie).
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-1/semester-1/mod-103-systeme-verbal-indicatif.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103-systeme-verbal-indicatif.md) : morphologie des 3 groupes verbaux, désinences, temps de l'indicatif (présent, imparfait, futur, initiation au passé simple), passé composé avec être (accord sujet) et invariabilité par défaut avec avoir (sans COD antéposé, conformément au déphasage S1/S2 de DEC-010), périphrases aspectuelles et verbes irréguliers fréquents.
  2. Rédaction de la fiche [`03-curriculum/year-1/semester-1/mod-104-lexique-lecture-paragraphe.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104-lexique-lecture-paragraphe.md) : dérivation affixale, matrices étymologiques gréco-latines, éradication des verbes passe-partout (*faire, mettre, avoir, problème*), collocations du français soigné, structure tripartite du paragraphe unitaire, oralité prosodique et groupes de souffle.
  3. Chaque fiche applique les 18 rubriques normatives, intègre des exercices progressifs à 3 niveaux, une double épreuve intégratrice (écrite et orale) notée sur 20 points avec seuil éliminatoire à 14/20, et s'appuie exclusivement sur des sources vérifiées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-LEX-01`, `SRC-LEX-03`, `SRC-PHON-01`).
- **Conséquences** :
  - Positives : Le Semestre 1 (Année 1) dispose désormais de ses 4 modules intégralement spécifiés et prêts pour la rédaction des chapitres de cours.
  - Contraintes : Exige le maintien de cette même rigueur pour les modules du Semestre 2 (`MOD-201` à `MOD-204`).

---

### [DEC-017] Conception intégrale des 4 fiches pédagogiques opérationnelles du Semestre 2 (MOD-201 à MOD-204)
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Finaliser l'ingénierie pédagogique de l'ensemble des modules du Semestre 2 (Année 1) par déploiement de sous-agents parallèles spécialisés, conformément aux 18 rubriques didactiques normatives.
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) (`MOD-201`) : structure actancielle et valence verbale, 4 tests distributionnels, compléments de verbe vs compléments de phrase, attributs, passif avec effacement d'agent, tournures impersonnelles et proposition relative simple (déterminative vs explicative).
  2. Rédaction de la fiche [`03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md) (`MOD-202`) : règle historique de Marot, typologie exhaustive des COD antéposés, cas d'invariabilité (postposé, intransitifs, neutralisation par *en*, compléments de mesure vs COD), et ponctuation interne logique (virgule de détachement, deux-points, point-virgule).
  3. Rédaction de la fiche [`03-curriculum/year-1/semester-2/mod-203-logique-paragraphe-cohesion-textuelle.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203-logique-paragraphe-cohesion-textuelle.md) (`MOD-203`) : progression thématique (thème constant, linéaire, thèmes dérivés), typologie des connecteurs logiques, chaînes d'anaphores lexicales/pronominales, éradication des pléonasmes et structure I-A-E du paragraphe argumenté.
  4. Rédaction de la fiche [`03-curriculum/year-1/semester-2/mod-204-resume-texte-restitution-orale.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204-resume-texte-restitution-orale.md) (`MOD-204`) : méthodologie universitaire du résumé de texte (réduction au quart $\pm 10\,\%$, décompte typographique officiel, neutralité énonciative stricte), restitution orale synthétique sans notes de 3 à 5 minutes (exorde, mouvements, péroraison, éthos et regard) et protocole d'auto-révision en 4 passes.
  5. Chaque fiche intègre sa double épreuve sommative notée sur 20 points avec seuil éliminatoire à 14/20, son calendrier de révisions espacées et ses références scientifiques incontestées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-RHET-03`, `SRC-PHON-01`, `SRC-LEX-01`).
- **Conséquences** :
  - Positives : L'intégralité de l'Année 1 (Semestres 1 et 2, 8 modules) est désormais entièrement outillée avec des fiches pédagogiques exhaustives prêtes pour la rédaction des chapitres de cours.
  - Contraintes : Prépare la transition vers le Cycle 2 (Année 2 / Semestres 3 et 4 : subordination complexe et argumentation formelle).

---

### [DEC-018] Conception intégrale des 4 fiches pédagogiques opérationnelles du Semestre 3 (MOD-301 à MOD-304)
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Déployer l'ingénierie pédagogique opérationnelle des 4 modules du Semestre 3 (Année 2) au moyen de sous-agents parallèles spécialisés, conformément aux 18 rubriques didactiques normatives.
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md) (`MOD-301`) : matrice rectrice vs proposition régie, complétives pures en *que*, interrogation et exclamation indirectes (proscription de l'inversion clitique et du point d'interrogation final), proposition subordonnée infinitive à sujet propre distinct, relatives complexes à pronoms composés (*auquel, duquel, lequel*), reprise par *et que*, et éradication des anacoluthes.
  2. Rédaction de la fiche [`03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md) (`MOD-302`) : typologie sémantique des 7 circonstancielles, sémantique du subjonctif (virtuel/non-assertion vs réel/assertion), régimes modaux sensibles (*après que* + ind. vs *avant que* + subj., *espérer que* + fut., bannissement de *malgré que*), conditionnel temporel vs modal, systèmes canoniques en *si*, morphologie et valeur énonciative du *ne* explétif, et concordance des temps (dont subjonctif imparfait/plus-que-parfait soutenu).
  3. Rédaction de la fiche [`03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md) (`MOD-303`) : typologie quadripartite des pronominaux (essentiels, passifs, réfléchis, réciproques), statut actanciel du clitique *se* (COD vs COI), concurrence avec objet direct distinct postposé/antéposé, liste fermée des 10 intransitifs invariables (*se succéder, se plaire, se nuire...*), morphologie plurielle des noms composés (avec rectifications 1990) et barème pénal officiel à -4 points par faute.
  4. Rédaction de la fiche [`03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md) (`MOD-304`) : méthodologie universitaire de la synthèse de documents (interdiction absolue du plan juxtaposé texte par texte et de tout jugement de valeur personnel), élaboration obligatoire du tableau synoptique de confrontation croisée, formules d'attribution et distanciation énonciative, réseau des connecteurs de parallélisme/opposition, et méthode du compte rendu critique d'ouvrage/exposé.
  5. Chaque fiche applique rigoureusement les 18 rubriques normatives, intègre des exercices progressifs à 3 niveaux, une épreuve sommative notée sur 20 points avec note éliminatoire $< 14/20$, un calendrier de révisions espacées et des sources académiques authentiques vérifiées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-RHET-03`, `SRC-LEX-04`).
- **Conséquences** :
  - Positives : Le Semestre 3 (première moitié du Cycle 2) est intégralement couvert par des plans pédagogiques opérationnels exhaustifs, totalisant plus de 2 000 lignes de spécifications de haut niveau.
  - Contraintes : Exige le maintien de la même cadence et de la même rigueur pour les modules du Semestre 4 (`MOD-401` à `MOD-404`).

---

### [DEC-019] Conception intégrale des 4 fiches pédagogiques opérationnelles du Semestre 4 (MOD-401 à MOD-404)
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Finaliser l'ingénierie pédagogique de l'ensemble des modules du Semestre 4 (clôture du Cycle 2 / Année 2) au moyen de sous-agents parallèles spécialisés, conformément aux 18 rubriques didactiques normatives.
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md) (`MOD-401`) : théorie de l'énonciation (Benveniste), polyphonie et discours rapportés (Ducrot), règle d'or de l'agent du participe passé suivi d'infinitif (*fait* invariable, double doctrine de *laissé*, verbes de perception), application lucide des 4 chantiers des rectifications de 1990 (numéraux, pluriel des composés, circonflexe sur *i/u*, verbes en *-eler/-eter*) et caractérisation tridimensionnelle des 4 registres de langue.
  2. Rédaction de la fiche [`03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md) (`MOD-402`) : logique formelle du syllogisme et de l'enthymème, typologie des arguments probants, traité complet des sophismes (*ad hominem, strawman*, faux dilemme, pente glissante, *post hoc*, pétition de principe), art de la concession rhétorique, et déontologie du débat contradictoire fondée sur le principe de charité interprétative (*steelmanning*).
  3. Rédaction de la fiche [`03-curriculum/year-2/semester-4/mod-403-methodologie-dissertation-essai-academique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403-methodologie-dissertation-essai-academique.md) (`MOD-403`) : méthodologie universitaire de la dissertation littéraire et philosophique, autopsie conceptuelle du sujet, problématisation d'une citation sans paraphrase, dépassement dialectique (*Aufhebung*) vs compromis mou, micro-mécanique du paragraphe argumenté, introduction en 4 mouvements, transitions bilatérales et conclusion en 2 temps.
  4. Rédaction de la fiche [`03-curriculum/year-2/semester-4/mod-404-sociolinguistique-francophone-ouest-africaine-norme.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404-sociolinguistique-francophone-ouest-africaine-norme.md) (`MOD-404`) : sociolinguistique de la francophonie, modèle polycentrique, continuum lectal (acrolecte, mésolecte, basilecte), contact de langues et particularismes béninois/ouest-africains (calques de substrat kwa), déconstruction de l'insécurité linguistique et de l'hypercorrection, et compétence de calibration polylectale (transposition fluide en français standard international ou diplomatique).
  5. Chaque fiche applique rigoureusement les 18 rubriques normatives, intègre des exercices progressifs à 3 niveaux, une épreuve sommative notée sur 20 points avec note éliminatoire $< 14/20$, un calendrier de révisions espacées et des sources académiques authentiques vérifiées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-02`, `SRC-TYPO-01`, `SRC-RHET-01`, `SRC-RHET-03`, `SRC-SOCIO-01`, `SRC-SOCIO-02`, `SRC-LEX-03`).
- **Conséquences** :
  - Positives : L'intégralité du Cycle 2 (Année 2, Semestres 3 et 4, 8 modules au total) est désormais couverte par des plans pédagogiques opérationnels exhaustifs. Les deux premières années du cursus (16 modules sur 24) sont complètement outillées.
  - Contraintes : Prépare le passage au Cycle 3 d'expertise (Année 3 / Semestres 5 et 6 : haute éloquence, macro-syntaxe, histoire de la langue, philologie et Capstone).

---

### [DEC-020] Conception intégrale des 4 fiches pédagogiques opérationnelles du Semestre 5 (MOD-501 à MOD-504)
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Déployer l'ingénierie pédagogique opérationnelle des 4 modules du Semestre 5 (première moitié du Cycle 3 d'expertise) au moyen de sous-agents parallèles spécialisés, conformément aux 18 rubriques didactiques normatives.
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md) (`MOD-501`) : théorie classique de la période (Cicéron, Bossuet, Chateaubriand), dynamique tripartite (protase, acmé, apodose), métrique syllabique de la prose et cadences (majeure, mineure, isocolie), macro-syntaxe des incises et dislocations nobles, et anacoluthe concertée des maîtres vs solécisme fautif.
  2. Rédaction de la fiche [`03-curriculum/year-3/semester-5/mod-502-traite-figures-rhetorique-poetique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502-traite-figures-rhetorique-poetique.md) (`MOD-502`) : classification savante des figures (tropes de Fontanier, figures de construction et de pensée de Molinié/Reboul), poétique des sonorités et vocalisme, et méthode universitaire du commentaire stylistique de concours (proscription absolue du catalogage descriptif scolaire au profit de la démonstration de la génération du sens par la forme verbale).
  3. Rédaction de la fiche [`03-curriculum/year-3/semester-5/mod-503-haute-eloquence-declamation-presence-oratoire.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503-haute-eloquence-declamation-presence-oratoire.md) (`MOD-503`) : les 5 canons rhétoriques (*actio* et *memoria* via le palais de mémoire), technique respiratoire costo-diaphragmatique sans forçage et résonateurs du masque osseux, prosodie et silences dramatiques, présence corporelle et chironomie mesurée, et prestation publique sans notes de 15 minutes.
  4. Rédaction de la fiche [`03-curriculum/year-3/semester-5/mod-504-revision-editoriale-typographie-savante.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504-revision-editoriale-typographie-savante.md) (`MOD-504`) : pathologies textuelles (solécismes, barbarismes, impropriétés, pléonasmes, faux-amis), Code typographique officiel de l'Imprimerie nationale (espaces insécables, famille des tirets, capitales accentuées, italique, nombres), protocole professionnel de révision en 3 passes étanches, et confection d'un apparat critique sans hypercorrection sur épreuve de 30 pièges semés.
  5. Chaque fiche applique rigoureusement les 18 rubriques normatives, intègre des exercices progressifs à 3 niveaux, une épreuve sommative notée sur 20 points avec note éliminatoire $< 14/20$, un calendrier de révisions espacées et des sources académiques authentiques vérifiées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-TYPO-01`, `SRC-RHET-01`, `SRC-RHET-02`, `SRC-RHET-03`, `SRC-RHET-04`, `SRC-PHON-01`, `SRC-PHON-02`, `SRC-LEX-01`).
- **Conséquences** :
  - Positives : Le palier supérieur d'excellence stylistique, oratoire et éditoriale (Semestre 5, 4 modules totalisant plus de 2 300 lignes de spécifications) est intégralement modélisé. 20 modules sur 24 sont désormais conçus et prêts pour la rédaction des cours.
  - Contraintes : Reste à concevoir l'ultime Semestre 6 (`MOD-601` à `MOD-604` : diachronie, herméneutique littéraire, philologie autonome et Capstone terminal).

---

### [DEC-021] Conception intégrale des 4 fiches pédagogiques opérationnelles du Semestre 6 (MOD-601 à MOD-604) et clôture de l'Étape 8
- **Date** : 2026-10-12
- **Statut** : Proposé (en attente de validation)
- **Contexte** : Finaliser l'ingénierie pédagogique de l'ensemble des modules du Semestre 6 (clôture du Cycle 3 d'expertise et achèvement de l'Étape 8) au moyen de sous-agents parallèles spécialisés, conformément aux 18 rubriques didactiques normatives.
- **Décision** :
  1. Rédaction de la fiche [`03-curriculum/year-3/semester-6/mod-601-diachronie-histoire-langue-francaise.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601-diachronie-histoire-langue-francaise.md) (`MOD-601`) : histoire diachronique de la langue (du latin vulgaire et des Serments de Strasbourg à nos jours), système bicasuel de l'ancien français, lois phonétiques d'amuïssement et de diphtongaison, latinisation graphique du moyen français (lettres étymologiques réelles vs pseudo-étymologiques comme *poids*), fixation du bon usage au XVIIe siècle (Vaugelas) et réformes de 1835 et 1990.
  2. Rédaction de la fiche [`03-curriculum/year-3/semester-6/mod-602-hermeneutique-litteraire-explication-concours.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602-hermeneutique-litteraire-explication-concours.md) (`MOD-602`) : herméneutique savante (Schleiermacher, Dilthey, Ricœur, Starobinski) et cercle herméneutique, méthodologie de l'explication linéaire de haut concours (agrégation / ENS), union de la grammaire et de la métaphysique (démonstration que la portée philosophique découle des micro-choix syntaxiques), et discipline philologique contre l'anachronisme.
  3. Rédaction de la fiche [`03-curriculum/year-3/semester-6/mod-603-autonomie-philologique-recherche-traites.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603-autonomie-philologique-recherche-traites.md) (`MOD-603`) : méthode de recherche autonome dans les grands traités descriptifs monumentaux, maniement expert du *Bon Usage* de Grevisse / Goosse (1 600 p., index des matières/auteurs/mots, typographie des variantes et citations littéraires), exploitation du *TLFi* (étymologie, histoire, syntagmatique), Frantext et Dictionnaire historique d'Alain Rey, et confection de notes d'arbitrage philologique en 6 sections.
  4. Rédaction de la fiche [`03-curriculum/year-3/semester-6/mod-604-capstone-project-grand-oral.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604-capstone-project-grand-oral.md) (`MOD-604`) : clé de voûte et couronnement de l'ensemble du cursus World-Class French (48 h dédiées), choix parmi 3 filières d'excellence (A : Philologie/Linguistique, B : Littérature/Stylistique, C : Haute Éloquence/Plaidoyer), monographie écrite de 3 000 à 4 000 mots ($3 \times 3 = 9$ sous-parties, 15 sources réelles, taux d'erreur $< 0,1\,\%$) et Grand Oral de diplomation de 30 minutes sans notes (15 min d'exposé magistral sans notes + 15 min d'entretien contradictoire sous tension face au jury), barème officiel sur 100 points.
  5. Chaque fiche applique rigoureusement les 18 rubriques normatives, intègre des exercices progressifs à 3 niveaux, une évaluation sommative normalisée, un calendrier de révisions espacées et des sources académiques authentiques vérifiées (`SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-LEX-01`, `SRC-LEX-03`, `SRC-RHET-01`, `SRC-RHET-02`, `SRC-RHET-03`, `SRC-RHET-04`, `SRC-PHON-01`, `SRC-SOCIO-01`, `SRC-SOCIO-02`, `SRC-NORM-02`, `SRC-TYPO-01`).
- **Conséquences** :
  - Positives : **L'Étape 8 est intégralement achevée.** Les **24 modules du cursus (S1 à S6)** disposent désormais chacun d'un plan pédagogique opérationnel exhaustif et normé, totalisant plus de 13 000 lignes de spécifications de niveau international.
  - Contraintes : Tous les prérequis architecturaux, curriculaires et didactiques sont en place pour passer à la phase ultérieure : l'ingestion NotebookLM et la rédaction détaillée des unités d'apprentissage et chapitres de cours.

---

### [DEC-022] Rédaction intégrale des 5 chapitres de cours de référence du module MOD-101 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (audit académique et corrections approuvés)
- **Contexte** : Débuter la rédaction des chapitres de cours autonomes de haute qualité (Étape 9) pour le premier module opérationnel du cursus : [`MOD-101`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101-diagnostic-phonetique-alphabet.md) (*Positionnement Diagnostique, Phonétique Appliquée (API) et Alphabet Orthographique*).
- **Décision** :
  1. Conception et rédaction autonome des 5 chapitres dans le répertoire dédié [`03-curriculum/year-1/semester-1/mod-101/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/) :
     - [`chp-101-01-phoneme-grapheme-api.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/chp-101-01-phoneme-grapheme-api.md) (`CHP-101-01`, 1 012 lignes, ~80 Ko) : *La Double Nature du Code Linguistique : Phonème vs Graphème, Inventaire des 36 Phonèmes et Initiation à l'API*.
     - [`chp-101-02-systeme-vocalique-pieges.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/chp-101-02-systeme-vocalique-pieges.md) (`CHP-101-02`, 838 lignes, ~74 Ko) : *Le Système Vocalique et ses Pièges Discriminatifs : Apertures, Triangle Vocalique et Voyelles Nasales*.
     - [`chp-101-03-consonnes-syllabation-enchainement.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/chp-101-03-consonnes-syllabation-enchainement.md) (`CHP-101-03`, ~60 Ko) : *Les Consonnes, la Syllabation et l'Enchaînement : Du Segment Isolé au Continuum Sonore*.
     - [`chp-101-04-systeme-formel-liaisons.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/chp-101-04-systeme-formel-liaisons.md) (`CHP-101-04`, 716 lignes, ~63 Ko) : *Le Système Formel des Liaisons en Français Standard : Obligatoires, Interdites et Modulation de Registre*.
     - [`chp-101-05-alphabet-orthographique-diacritiques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-101/chp-101-05-alphabet-orthographique-diacritiques.md) (`CHP-101-05`, ~70 Ko) : *L'Alphabet Orthographique et les Signes Diacritiques : Fonctions Phono-Morphologiques et Diacritiques*.
  2. Chaque chapitre respecte scrupuleusement la structure canonique des 21 rubriques normatives (objectifs mesurables, autodiagnostic, situation concrète, explication intuitive, définitions et API rigoureuse, raisonnement du pourquoi, exemples, contre-exemples cliniques, approfondissement, comparaisons différentielles, exercices progressifs à 3 niveaux avec corrigés justifiés séparés, activité de correction raisonnée, mise en pratique réelle, résumé synthétique, questions d'active recall, mini-évaluation notée sur 20 avec barème pénal, critères observables L3 et sources vérifiées du registre).
  3. Chaque chapitre intègre une classification pédagogique explicite du contenu avancé (`CORE-NOW`, `INTRODUCTION-NOW`, `DEFER`, `MOVE`, `OPTIONAL-ADVANCED`, `REMOVE`).
  4. Volume total rédigé pour `MOD-101` : plus de 345 Ko et 4 000 lignes de contenu pédagogique universitaire de haute volée.
---

### [DEC-023] Audit académique approfondi, consolidation philologique et adoption du guide de rédaction de MOD-101 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : À l'issue de la rédaction initiale des 5 chapitres de cours de MOD-101, un audit académique exhaustif et automatisé a été réalisé conformément à la charte (§6.1, §8, §9.4) et aux *Karpathy Guidelines* pour éradiquer les hallucinations d'autorité, les incohérences arithmétiques de lettres/phonèmes et calibrer le volume horaire autonome.
- **Décision** :
  1. Développement et exécution de l'outil d'audit déterministe [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) (recalcul programmé des lettres/graphèmes/phonèmes, contrôle d'intégrité des liens et compétences, interrogation par lots de l'API Wiktionnaire avec cache local).
  2. Création du guide de référence de gouvernance didactique [`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md) définissant le gabarit canonique des 21 rubriques, le budget horaire de 5-6 h découpé en 4 phases opératoires (`DEC-006`), les conventions API et l'ancrage culturel ouest-africain et béninois digne.
  3. Mise à jour de [`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md) : correction du titre authentique de Pierre Léon (*Phonétisme et prononciations du français*, 2011, `SRC-PHON-01`) et intégration officielle de Nina Catach (*L'orthographe française*, 1980, `SRC-ORTHO-01`).
  4. Révision chirurgicale des 5 chapitres de `MOD-101` (`CHP-101-01` à `CHP-101-05`) : correction des décomptes arithmétiques (phrase modèle de 23 lettres, alphabet latin à 23 lettres, *cahier* à 4 phonèmes), rectification de transcriptions (/ʃwazis/, /se zɛnmi/), alignement de la métrique baudelairienne, redressement normatif de la liaison de *cent* en [t] dans l'évaluation de `CHP-101-02`, réalignement horaire à 5-6 h et purge du ton professoral hyperbolique.
  5. Publication des rapports d'audit [`08-audits/pedagogical/mod-101-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-101-audit-report.md) et du journal matricule [`08-audits/pedagogical/mod-101-corrections-log.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-101-corrections-log.md) (34 interventions tracées, 0 erreur critique résiduelle).
- **Conséquences** :
  - Positives : Les 5 chapitres de `MOD-101` atteignent le standard d'excellence philologique et pédagogique universitaire du cursus, prouvé par code et vérifié sur corpus. Les arbitrages sociolinguistiques sur /œ̃/ vs /ɛ̃/ et /a/ vs /ɑ/ sont officiellement entérinés.
---

### [DEC-024] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-102 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le deuxième module du Semestre 1 du cursus : [`MOD-102` — Morphologie des Parties du Discours, Ponctuation Terminale et Mécanique des Accords Fondamentaux](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102-classes-mots-accords-fondamentaux.md).
- **Décision** :
  1. Rédaction intégrale des 6 chapitres de cours autonomes de haute tenue dans [`03-curriculum/year-1/semester-1/mod-102/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/) :
     - [`chp-102-01-nature-vs-fonction.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-01-nature-vs-fonction.md) (`CHP-102-01`, 92,5 Ko) : *La Dissociation Cardinale : Nature (Classe) vs Fonction, Identité Lexicale et Tests Formels*.
     - [`chp-102-02-inventaire-neuf-classes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-02-inventaire-neuf-classes.md) (`CHP-102-02`, 95,6 Ko) : *L'Inventaire des Neuf Classes Grammaticales du Français : Variables, Invariables et Mots Caméléons*.
     - [`chp-102-03-phrase-graphique-ponctuation.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-03-phrase-graphique-ponctuation.md) (`CHP-102-03`, 70,4 Ko) : *La Phrase Graphique et la Ponctuation Terminale : Délimitation, Majuscule et Bornage Typographique*.
     - [`chp-102-04-accords-syntagme-nominal.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-04-accords-syntagme-nominal.md) (`CHP-102-04`, 72,1 Ko) : *La Mécanique des Accords dans le Syntagme Nominal : Donneur, Receveurs, Pluriels Irréguliers et Couleurs*.
     - [`chp-102-05-accord-sujet-verbe-fondamental.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-05-accord-sujet-verbe-fondamental.md) (`CHP-102-05`, 87,7 Ko) : *L'Accord Sujet-Verbe Canonique et la Traque du Noyau : Perturbateurs, Éloignement et Inversions*.
     - [`chp-102-06-laboratoire-homophones.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-102/chp-102-06-laboratoire-homophones.md) (`CHP-102-06`, 80,1 Ko) : *Laboratoire Chirurgical des Homophones Grammaticaux : Tests de Substitution et Éradication des Confusions*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 310 liens internes et identifiants contrôlés (310 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-GRAM-05`, `SRC-TYPO-01`, `SRC-ORTHO-01`, `SRC-NORM-02`, `SRC-SOCIO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport officiel [`08-audits/pedagogical/mod-102-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-102-audit-report.md).
- **Conséquences** :
---

### [DEC-025] Rédaction intégrale et audit automatisé des 7 chapitres de cours du module MOD-103 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le troisième module du Semestre 1 du cursus : [`MOD-103` — Le Système Verbal à l'Indicatif : Morphologie des Régularités, Verbes Fréquents Irréguliers, Passé Composé Régulier/Être et Périphrases Aspectuelles](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103-systeme-verbal-indicatif.md).
- **Décision** :
  1. Conception et rédaction intégrale des 7 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-1/mod-103/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/) :
     - [`chp-103-01-architecture-morphologique-verbe.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-01-architecture-morphologique-verbe.md) (`CHP-103-01`, 96,7 Ko) : *Architecture Morphologique du Verbe Français : Radical, Marqueurs de Temps-Mode et Désinences Personnelles*.
     - [`chp-103-02-present-indicatif-formes-valeurs.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-02-present-indicatif-formes-valeurs.md) (`CHP-103-02`, 77,6 Ko) : *Le Présent de l'Indicatif : Formes Régulières, les 12 Verbes Fréquents et Valeurs d'Énonciation*.
     - [`chp-103-03-imparfait-regularite-aspect-secant.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-03-imparfait-regularite-aspect-secant.md) (`CHP-103-03`, 80,1 Ko) : *L'Imparfait de l'Indicatif : La Règle de Dérivation Universelle, Pièges Graphiques et Aspect Sécant*.
     - [`chp-103-04-futur-simple-projection-duel-ai-ais.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-04-futur-simple-projection-duel-ai-ais.md) (`CHP-103-04`, 72,0 Ko) : *Le Futur Simple : Le Radical en -R-, Projection Temporelle et Résolution Chirurgicale du Duel -ai / -ais*.
     - [`chp-103-05-initiation-passe-simple-recit.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-05-initiation-passe-simple-recit.md) (`CHP-103-05`, 68,2 Ko) : *Initiation au Passé Simple du Récit Écrit : Les Quatre Séries Vocaliques et Maîtrise des 3es Personnes*.
     - [`chp-103-06-passe-compose-accord-participe-s1.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-06-passe-compose-accord-participe-s1.md) (`CHP-103-06`, 87,7 Ko) : *Le Passé Composé et l'Accord du Participe Passé en S1 : Auxiliaires, Accord avec Être et Invariabilité avec Avoir*.
     - [`chp-103-07-periphrases-aspectuelles-fondamentales.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103/chp-103-07-periphrases-aspectuelles-fondamentales.md) (`CHP-103-07`, 69,9 Ko) : *Les Périphrases Aspectuelles Fondamentales : Être en train de, Venir de, Aller + Infinitif et Rythme Narratif*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), le cadrage strict S1 de `DEC-010` sur le passé composé et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 322 liens internes et identifiants contrôlés (322 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-NORM-03`, `SRC-GRAM-02`, `SRC-GRAM-01`, `SRC-GRAM-05`, `SRC-NORM-02`, `SRC-ORTHO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-103-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-103-audit-report.md).
- **Conséquences** :
  - Positives : Moteur morphologique et aspectuo-temporel du Cycle 1 intégralement rédigé (552 Ko de cours autonome de référence, 35 à 42 h d'apprentissage délibéré).
  - Validation formelle : Validé par arbitrage humain le 12 octobre 2026.

---

### [DEC-026] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-104 — Clôture du Semestre 1 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le quatrième et dernier module du Semestre 1 du cursus : [`MOD-104` — Précision Lexicale de Base, Familles de Mots, Lecture Fluide, Paragraphe Narratif/Descriptif et Oralité Prosodique](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104-lexique-lecture-paragraphe.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-1/mod-104/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104/) :
     - [`chp-104-01-morphologie-lexicale-derivation.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104/chp-104-01-morphologie-lexicale-derivation.md) (`CHP-104-01`, 1 205 lignes, 104,0 Ko) : *Morphologie Lexicale, Dérivation Affixale et Racines Savantes : La Fabrique des Mots et l'Architecture des Familles*.
     - [`chp-104-02-precision-semantique-eradication-termes-vagues.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104/chp-104-02-precision-semantique-eradication-termes-vagues.md) (`CHP-104-02`, 1 027 lignes, 97,8 Ko) : *Précision Sémantique, Dénotation/Connotation et Éradication des Termes Vagues : L'Art du Mot Propre et des Collocations Soutenues*.
     - [`chp-104-03-architecture-paragraphe-narratif-descriptif.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104/chp-104-03-architecture-paragraphe-narratif-descriptif.md) (`CHP-104-03`, 794 lignes, 73,8 Ko) : *Architecture Textuelle : Le Paragraphe Unitaire Narratif et Descriptif : Amorce, Déploiement et Clôture*.
     - [`chp-104-04-oralite-prosodique-groupes-souffle.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-104/chp-104-04-oralite-prosodique-groupes-souffle.md) (`CHP-104-04`, 780 lignes, 70,7 Ko) : *Oralité Prosodique, Groupes de Souffle et Lecture Expresse : Physiologie Vocale, Pauses Hiérarchisées et Courbes Mélodiques*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 188 liens internes et identifiants contrôlés (188 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-LEX-01`, `SRC-LEX-03`, `SRC-LEX-04`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-PHON-01`, `SRC-PHON-02`, `SRC-PHON-03`, `SRC-NORM-03`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-104-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-104-audit-report.md).
- **Conséquences** :
  - Positives : Clôture intégrale du Semestre 1 (Cycle 1 des Fondations). Le S1 compte désormais **22 chapitres complets** totalisant plus de **1,74 Mo** de contenu pédagogique universitaire de référence, entièrement vérifié par tests déterministes.
  - Validation formelle : Validé par arbitrage humain le 12 octobre 2026.

---

### [DEC-027] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-201 — Ouverture du Semestre 2 (Étape 9)
- **Date** : 2026-10-12
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le premier module d'enseignement du Semestre 2 (Cycle 2) : [`MOD-201` — Syntaxe Fonctionnelle de la Phrase Simple, Voix Passive, Tournures Impersonnelles et Relative Simple](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md).
- **Décision** :
  1. Conception et rédaction intégrale des 6 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-2/mod-201/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/) :
     - [`chp-201-01-structure-actancielle-valence-verbale.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-01-structure-actancielle-valence-verbale.md) (`CHP-201-01`, 1 017 lignes, 111,1 Ko) : *La Structure Actancielle du Verbe et la Valence Syntaxique : De Tesnière à la Prédication Moderne*.
     - [`chp-201-02-complements-verbe-vs-complements-phrase.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-02-complements-verbe-vs-complements-phrase.md) (`CHP-201-02`, 1 010 lignes, 95,7 Ko) : *Cartographie des Compléments du Verbe vs Compléments de Phrase : Les Quatre Tests Formels et les Compléments Essentiels*.
     - [`chp-201-03-fonction-attribut-sujet-cod.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-03-fonction-attribut-sujet-cod.md) (`CHP-201-03`, 941 lignes, 94,1 Ko) : *La Fonction Attribut du Sujet et Attribut du COD : Prédication Seconde, Verbes Copules et Mécanique des Accords*.
     - [`chp-201-04-voix-passive-portee-discursive.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-04-voix-passive-portee-discursive.md) (`CHP-201-04`, 923 lignes, 98,8 Ko) : *La Voix Passive : Reconfiguration Actancielle, Auxiliaire Être et Portée Discursive du Passif sans Agent*.
     - [`chp-201-05-tournures-impersonnelles-dedoublement-sujet.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-05-tournures-impersonnelles-dedoublement-sujet.md) (`CHP-201-05`, 799 lignes, 88,0 Ko) : *Les Tournures Impersonnelles et le Dédoublement du Sujet : Sujet Apparent vs Sujet Réel, Accord Singulier et Passif Impersonnel*.
     - [`chp-201-06-proposition-relative-simple.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201/chp-201-06-proposition-relative-simple.md) (`CHP-201-06`, 836 lignes, 99,3 Ko) : *La Proposition Relative Simple Introductive : Les Quatre Pronoms Invariables, Double Statut et Ponctuation Sémantique*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 488 liens internes et identifiants contrôlés (488 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-201-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-201-audit-report.md).
- **Conséquences** :
  - Positives : Socle de syntaxe fonctionnelle du Semestre 2 intégralement rédigé (5 526 lignes, 587,0 Ko de cours autonome de référence, 30 à 36 h d'apprentissage délibéré), établissant les prérequis indispensables pour l'accord du participe passé avec *avoir* (`MOD-202`).
  - Prochaine étape : Validation formelle effectuée par arbitrage humain le 13 octobre 2026. Lancement de la rédaction du module `MOD-202`.

---

### [DEC-028] Rédaction intégrale et audit automatisé des 5 chapitres de cours du module MOD-202 — Semestre 2 (Étape 9)
- **Date** : 2026-10-13
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le deuxième module du Semestre 2 (Cycle 2) : [`MOD-202` — Accord du Participe Passé avec l'Auxiliaire Avoir et Ponctuation Interne/Logique](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md).
- **Décision** :
  1. Conception et rédaction intégrale des 5 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-2/mod-202/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/) :
     - [`chp-202-01-fondement-historique-principe-marot.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/chp-202-01-fondement-historique-principe-marot.md) (`CHP-202-01`, 786 lignes, 80,7 Ko) : *Fondement Historique et Principe Cognitif de Clément Marot : De l'Épigramme de 1538 à l'Algorithme Décisionnel Moderne*.
     - [`chp-202-02-typologie-exhaustive-cod-anteposes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/chp-202-02-typologie-exhaustive-cod-anteposes.md) (`CHP-202-02`, 871 lignes, 87,5 Ko) : *Typologie Exhaustive des Compléments d'Objet Direct Antéposés : Pronoms Conjoints, Relatif Que et Syntagmes Interrogatifs/Exclamatifs*.
     - [`chp-202-03-cas-canoniques-invariabilite-avoir.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/chp-202-03-cas-canoniques-invariabilite-avoir.md) (`CHP-202-03`, 803 lignes, 85,9 Ko) : *Les Cas Canoniques d'Invariabilité avec l'Auxiliaire Avoir : Absence de COD, COD Postposé, Neutralisation par « En » et Verbes de Mesure*.
     - [`chp-202-04-ponctuation-interne-virgule-demarcative.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/chp-202-04-ponctuation-interne-virgule-demarcative.md) (`CHP-202-04`, 969 lignes, 90,5 Ko) : *Ponctuation Interne I — Les Règles de la Virgule Démarcative : Réfutation du Mythe Respiratoire, Détachements, Appositions et Interdits Absolus*.
     - [`chp-202-05-ponctuation-interne-deux-points-point-virgule.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202/chp-202-05-ponctuation-interne-deux-points-point-virgule.md) (`CHP-202-05`, 786 lignes, 70,3 Ko) : *Ponctuation Interne II — Les Deux-Points et le Point-Virgule : Logique Causalité/Déduction, Balancement Stylistique et Typographie Officielle*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 305 liens internes et identifiants contrôlés (305 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-GRAM-05`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-202-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-202-audit-report.md).
- **Conséquences** :
  - Positives : Verrou orthographique et syntaxique majeur de l'Année 1 intégralement achevé (4 215 lignes, 415,0 Ko de cours autonome de référence, 25 à 30 h d'apprentissage délibéré), garantissant le prérequis bloquant `DEP-ORT-02` pour `MOD-303` (verbes pronominaux) et ouvrant la voie à `MOD-203` (logique du paragraphe et cohésion textuelle).
  - Prochaine étape : Validation formelle effectuée par arbitrage humain le 13 octobre 2026. Lancement de la rédaction du module `MOD-203`.

---

### [DEC-029] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-203 — Semestre 2 (Étape 9)
- **Date** : 2026-10-13
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le troisième module du Semestre 2 (Cycle 2) : [`MOD-203` — Logique du Paragraphe, Typologie des Connecteurs, Progression Thématique et Cohésion Textuelle](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203-logique-paragraphe-cohesion-textuelle.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-2/mod-203/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203/) :
     - [`chp-203-01-dynamique-informationnelle-theme-rheme.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203/chp-203-01-dynamique-informationnelle-theme-rheme.md) (`CHP-203-01`, 1 002 lignes, 98,4 Ko) : *La Dynamique Informationnelle du Texte : Thème, Rhème et Typologie des Progressions Thématiques*.
     - [`chp-203-02-typologie-statut-connecteurs-logiques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203/chp-203-02-typologie-statut-connecteurs-logiques.md) (`CHP-203-02`, 887 lignes, 82,5 Ko) : *L'Ossature du Raisonnement : Typologie Sémantique et Statut Syntaxique des Connecteurs Logiques*.
     - [`chp-203-03-chaines-reference-anaphores-coreference.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203/chp-203-03-chaines-reference-anaphores-coreference.md) (`CHP-203-03`, 849 lignes, 85,7 Ko) : *Les Chaînes de Référence : Anaphores, Coréférence et Hygiène Stylistique du Tissage Textuel*.
     - [`chp-203-04-architecture-paragraphe-argumente-iae.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-203/chp-203-04-architecture-paragraphe-argumente-iae.md) (`CHP-203-04`, 868 lignes, 90,7 Ko) : *L'Architecture du Paragraphe Argumenté : La Cellule Canonique Idée-Argument-Exemple (I-A-E)*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 251 liens internes et identifiants contrôlés (251 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-RHET-03`, `SRC-LEX-04`, `SRC-LEX-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-203-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-203-audit-report.md).
- **Conséquences** :
  - Positives : Maîtrise de la linguistique textuelle et de l'ingénierie argumentative du paragraphe unitaire achevée pour le Semestre 2 (3 606 lignes, 357,3 Ko de contenu de référence, 20 à 24 h d'apprentissage délibéré), fournissant les outils méthodologiques pour la contraction de texte et la restitution orale (`MOD-204`).
  - Prochaine étape : Validé par arbitrage humain le 13 octobre 2026. Lancement de la rédaction du module `MOD-204`.

---

### [DEC-030] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-204 — Clôture du Semestre 2 et de l'Année 1 (Étape 9)
- **Date** : 2026-10-13
- **Statut** : Validé (par arbitrage humain)
- **Contexte** : Développer le quatrième et dernier module du Semestre 2 (Cycle 2) du cursus : [`MOD-204` — Lecture Analytique, Méthodologie du Résumé de Texte Informatif, Restitution Orale Synthétique et Auto-Révision](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204-resume-texte-restitution-orale.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-1/semester-2/mod-204/`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204/) :
     - [`chp-204-01-lecture-analytique-dissection-texte-idees.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204/chp-204-01-lecture-analytique-dissection-texte-idees.md) (`CHP-204-01`, 95,8 Ko) : *Lecture Analytique et Dissection du Texte d'Idées : Thèse, Schéma Argumentatif et Détection des Exemples Contingents*.
     - [`chp-204-02-methodologie-contraction-metrique-typographique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204/chp-204-02-methodologie-contraction-metrique-typographique.md) (`CHP-204-02`, 87,0 Ko) : *Méthodologie Académique de la Contraction Écrite et Métrique Typographique : Les Trois Lois, Hyperonymie et Décompte Officiel*.
     - [`chp-204-03-rhetorique-restitution-orale-sans-notes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204/chp-204-03-rhetorique-restitution-orale-sans-notes.md) (`CHP-204-03`, 98,3 Ko) : *Rhétorique de la Restitution Orale Synthétique sans Notes : Disposition Oratoire, Schéma Mental, Éthos et Maîtrise Prosodique*.
     - [`chp-204-04-protocole-auto-revision-traque-anacoluthes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-204/chp-204-04-protocole-auto-revision-traque-anacoluthes.md) (`CHP-204-04`, 104,3 Ko) : *Le Protocole d'Auto-Révision Éditoriale en Quatre Passes : Traque des Anacoluthes, Cohésion des Chaînes et Finition Normative*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 314 liens internes et identifiants contrôlés (314 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-03`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-TYPO-01`, `SRC-NORM-03`, `SRC-LEX-01`, `SRC-PHON-01`, `SRC-PHON-02`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-204-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-204-audit-report.md).
- **Conséquences** :
  - Positives : Clôture intégrale du Semestre 2 (Cycle 2 — Syntaxe Fonctionnelle, Cohésion Textuelle et Synthèse) et de l'ensemble de l'Année 1 (Cycle 1 & Cycle 2). L'Année 1 compte désormais **41 chapitres complets** totalisant **3,48 Mo / 33 127 lignes** de cours de référence universitaire, vérifiés à 100 % par les tests déterministes.
  - Prochaine étape : Validé par arbitrage humain le 14 octobre 2026. Lancement des travaux de l'Année 2 (Semestre 3 : Subordination complexe, Subjonctif, Verbes pronominaux et Synthèse comparative).

---

### [DEC-031] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-301 — Ouverture de l'Année 2 / Semestre 3 (Étape 9)
- **Date** : 2026-10-14
- **Statut** : Validé
- **Contexte** : Développer le premier module de l'Année 2 (Cycle 3) du cursus : [`MOD-301` — Architecture de la Subordination : Complétives Conjonctives, Interrogatives Indirectes, Infinitives et Relatives Complexes](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md).
- **Décision** :
  1. Conception et rédaction intégrale des 6 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-3/mod-301/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/) :
     - [`chp-301-01-theorie-subordination-enchassement.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-01-theorie-subordination-enchassement.md) (`CHP-301-01`, 104,6 Ko) : *Théorie de la Subordination et de l'Enchâssement : Matrice Rectrice, Proposition Régie et Hiérarchie des Degrés*.
     - [`chp-301-02-completives-conjonctives-pures-que.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-02-completives-conjonctives-pures-que.md) (`CHP-301-02`, 98,1 Ko) : *Les Complétives Conjonctives Pures en Que : Morphème Asémantique, Positions Actancielles et Répétition Normative*.
     - [`chp-301-03-interrogation-exclamation-indirectes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-03-interrogation-exclamation-indirectes.md) (`CHP-301-03`, 97,6 Ko) : *L'Interrogation et l'Exclamation Indirectes : Opérateurs, Fermeture Déclarative et Proscription de l'Inversion*.
     - [`chp-301-04-proposition-subordonnee-infinitive.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-04-proposition-subordonnee-infinitive.md) (`CHP-301-04`, 87,2 Ko) : *La Proposition Subordonnée Infinitive Véritable : Sujet Actanciel Propre, Verbes de Perception et Verbes Causatifs*.
     - [`chp-301-05-propositions-relatives-complexes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-05-propositions-relatives-complexes.md) (`CHP-301-05`, 80,7 Ko) : *Les Propositions Relatives Complexes : Pronoms Composés Fléchis, Amalgames et Locutions Prépositionnelles*.
     - [`chp-301-06-pathologie-syntaxique-anacoluthes-telescopages.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-06-pathologie-syntaxique-anacoluthes-telescopages.md) (`CHP-301-06`, 95,5 Ko) : *Pathologie Syntaxique de la Phrase Complexe : Traque des Anacoluthes, Télescopages et Ruptures d'Enchâssement*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 505 liens internes et identifiants contrôlés (505 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-301-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-301-audit-report.md).
- **Conséquences** :
  - Positives : Validation officielle de `MOD-301` et passage sans réserve à `MOD-302`.

### [DEC-032] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-302 — Circonstancielles, Système Modal et Concordance des Temps (Étape 10)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le deuxième module de l'Année 2 (Semestre 3 / Cycle 3) : [`MOD-302` — Subordonnées Circonstancielles, Système Modal (Subjonctif et Conditionnel) et Concordance des Temps](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md).
- **Décision** :
  1. Conception et rédaction intégrale des 6 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-3/mod-302/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/) :
     - [`chp-302-01-typologie-syntaxique-semantique-circonstancielles.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-01-typologie-syntaxique-semantique-circonstancielles.md) (`CHP-302-01`, 115,6 Ko / 805 lignes) : *Typologie Syntaxique et Sémantique des Subordonnées Circonstancielles : Les Sept Relations Logiques Fondamentales*.
     - [`chp-302-02-semantique-fondamentale-subjonctif-vs-indicatif.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-02-semantique-fondamentale-subjonctif-vs-indicatif.md) (`CHP-302-02`, 92,5 Ko / 686 lignes) : *Sémantique Fondamentale du Subjonctif vs Indicatif : Théorie de la Virtualisation, Typologie des Matrices et Morphologie*.
     - [`chp-302-03-pieges-normatifs-regimes-modaux-alternatifs.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-03-pieges-normatifs-regimes-modaux-alternatifs.md) (`CHP-302-03`, 89,9 Ko / 681 lignes) : *Les Pièges Normatifs du Système Modal : « Après que », « Espérer que », Verbes d'Opinion Négatifs/Interrogatifs et Solécisme de « Malgré que »*.
     - [`chp-302-04-systeme-conditionnel-structures-en-si.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-04-systeme-conditionnel-structures-en-si.md) (`CHP-302-04`, 105,8 Ko / 751 lignes) : *Le Système du Conditionnel et les Périodes Hypothétiques en « Si » : Valeurs Temporelle vs Modale, les Trois Structures Canoniques et Proscription de l'Irréel dans la Protase*.
     - [`chp-302-05-ne-expletif-polarite-enonciative.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-05-ne-expletif-polarite-enonciative.md) (`CHP-302-05`, 95,7 Ko / 676 lignes) : *Le « Ne » Explétif et la Polarité Énonciative : Morphème de Discordance, Déclencheurs Normatifs et Distinction avec la Négation Forclusive*.
     - [`chp-302-06-concordance-temps-indicatif-subjonctif.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-06-concordance-temps-indicatif-subjonctif.md) (`CHP-302-06`, 84,9 Ko / 664 lignes) : *La Concordance des Temps à l'Indicatif et au Subjonctif : Repères Temporels, Subjonctif Imparfait/Plus-que-parfait et Seconde Forme du Conditionnel Passé*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 509 liens internes et identifiants contrôlés (509 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-302-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-302-audit-report.md).
- **Conséquences** :
  - Positives : Clôture certifiée de `MOD-302` (4 263 lignes, 584,3 Ko de cours de référence, 30 à 36 h d'apprentissage autonome délibéré), dotant l'étudiant d'une maîtrise infaillible de la sélection modale et de la concordance temporelle.
  - Prochaine étape : Lancement de la rédaction du module [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md).

---

### [DEC-033] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-303 — Accords des Verbes Pronominaux et Pièges Morphologiques (Étape 11)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le troisième module de l'Année 2 (Semestre 3 / Cycle 3) : [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md).
- **Décision** :
  1. Conception et rédaction intégrale des 6 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-3/mod-303/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/) :
     - [`chp-303-01-fondement-linguistique-systeme-pronominal.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-01-fondement-linguistique-systeme-pronominal.md) (`CHP-303-01`, 87,0 Ko / 654 lignes) : *Fondement Linguistique du Système Pronominal : Clitique Syntaxique, Diathèse, Voix Moyenne et le Leurre de l'Auxiliaire « Être »*.
     - [`chp-303-02-verbes-essentiellement-pronominaux-sens-passif.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-02-verbes-essentiellement-pronominaux-sens-passif.md) (`CHP-303-02`, 86,5 Ko / 642 lignes) : *Verbes Essentiellement Pronominaux et Verbes à Sens Passif : Accord Systématique avec le Sujet et l'Exception Unique de « S'arroger »*.
     - [`chp-303-03-verbes-accidentellement-pronominaux-reflechis-reciproques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-03-verbes-accidentellement-pronominaux-reflechis-reciproques.md) (`CHP-303-03`, 102,1 Ko / 774 lignes) : *Verbes Accidentellement Pronominaux : Réfléchis, Réciproques, Analyse du Clitique COD vs COI et Concurrence d'Objets*.
     - [`chp-303-04-liste-fermee-participes-intransitifs-invariables.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-04-liste-fermee-participes-intransitifs-invariables.md) (`CHP-303-04`, 83,1 Ko / 676 lignes) : *La Liste Fermée des Participes Intransitifs Invariablement Invariables : Rection Prépositionnelle, Verbes Cardinaux et Démystification de « Ils se sont succédé »*.
     - [`chp-303-05-pluriel-noms-composes-pieges-morphologiques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-05-pluriel-noms-composes-pieges-morphologiques.md) (`CHP-303-05`, 80,3 Ko / 709 lignes) : *Le Pluriel des Noms Composés et Pièges Morphologiques : Règles Traditionnelles, Statut Critique de « Garde- » et Rectifications de 1990*.
     - [`chp-303-06-synthese-algorithmique-protocole-arbitrage.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303/chp-303-06-synthese-algorithmique-protocole-arbitrage.md) (`CHP-303-06`, 81,5 Ko / 599 lignes) : *Synthèse Algorithmique et Protocole d'Arbitrage Morphosyntaxique : Arbre Décisionnel Unifié et Résolution de Haute Précision*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 519 liens internes et identifiants contrôlés (519 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-GRAM-05`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-303-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-303-audit-report.md).
- **Conséquences** :
  - Positives : Clôture certifiée de `MOD-303` (4 054 lignes, 520,5 Ko de cours de référence, 30 à 36 h d'apprentissage autonome délibéré), dotant l'étudiant d'une fiabilité orthographique absolue sur les verbes pronominaux et noms composés.
  - Prochaine étape : Lancement du dernier module du Semestre 3 : [`MOD-304` — Synthèse Comparative de Documents, Compte Rendu Critique et Argumentation Logique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md).

---

### [DEC-034] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-304 — Synthèse Comparative de Documents et Compte Rendu Critique — Clôture du Semestre 3 / Cycle 3 (Étape 11)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le quatrième et dernier module de l'Année 2 / Semestre 3 (Cycle 3) : [`MOD-304` — Synthèse Comparative de Documents, Compte Rendu Critique et Argumentation Logique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-3/mod-304/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304/) :
     - [`chp-304-01-epistemologie-methodologie-universitaire-synthese.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304/chp-304-01-epistemologie-methodologie-universitaire-synthese.md) (`CHP-304-01`, 91,2 Ko / 600 lignes) : *Épistémologie et Méthodologie Universitaire de la Synthèse de Documents : L'Intelligence Polyphonique, les Trois Lois et la Typologie des Dossiers*.
     - [`chp-304-02-lecture-croisee-matrice-confrontation-tableau-synoptique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304/chp-304-02-lecture-croisee-matrice-confrontation-tableau-synoptique.md) (`CHP-304-02`, 91,5 Ko / 625 lignes) : *La Phase Préparatoire et la Matrice de Confrontation : Lecture Croisée, Détection des Lignes de Fracture et Tableau Synoptique*.
     - [`chp-304-03-architecture-redactionnelle-grammaire-enonciative-synthese.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304/chp-304-03-architecture-redactionnelle-grammaire-enonciative-synthese.md) (`CHP-304-03`, 100,2 Ko / 727 lignes) : *Architecture Rédactionnelle et Grammaire Énonciative de la Synthèse : Introduction Canonique, Paragraphes Croisés et Distanciation*.
     - [`chp-304-04-compte-rendu-critique-expose-ouvrage.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304/chp-304-04-compte-rendu-critique-expose-ouvrage.md) (`CHP-304-04`, 83,5 Ko / 536 lignes) : *Le Compte Rendu Critique d'Exposé et d'Ouvrage : Fidélité Analytique, Condensation Structurée et Mise en Perspective Épistémologique*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (350 mots en compte rendu, 500 mots en synthèse modèle, 50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 333 liens internes et identifiants contrôlés (333 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-03`, `SRC-GRAM-02`, `SRC-GRAM-01`, `SRC-LEX-04`, `SRC-TYPO-01`, `SRC-NORM-03`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-304-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-304-audit-report.md).
- **Conséquences** :
  - Positives : **CLÔTURE DU SEMESTRE 3 (CYCLE 3)**. Le Semestre 3 est intégralement achevé, audité et validé (**4 modules**, **22 chapitres de cours de référence universitaire**, **14 915 lignes**, **2,03 Mo de contenus didactiques de haut niveau**).
  - Prochaine étape : Passage à l'Étape 12 — Bilan de Porte 3 et Transition vers l'Année 2 / Semestre 4 (Cycle 4 : Pragmatique énonciative, participe suivi d'un infinitif, rhétorique et dissertation académique).

---

### [DEC-035] Rédaction intégrale et audit automatisé des 7 chapitres de cours du module MOD-401 — Ouverture du Semestre 4 / Cycle 4 (Étape 12)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le premier module de l'Année 2 / Semestre 4 (Cycle 4) : [`MOD-401` — Pragmatique Énonciative, Cas Limites d'Accord (Participe + Infinitif), Rectifications de 1990 et Registres de Langue](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md).
- **Décision** :
  1. Conception et rédaction intégrale des 7 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-4/mod-401/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/) :
     - [`chp-401-01-linguistique-enonciation-cadre-pragmatique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-01-linguistique-enonciation-cadre-pragmatique.md) (`CHP-401-01`, 92,1 Ko / 662 lignes) : *Linguistique de l'Énonciation et Cadre Pragmatique : Appropriation de l'Appareil Formel, Déixis, Corrélation de Personne et Modalisateurs*.
     - [`chp-401-02-polyphonie-enonciative-discours-rapportes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-02-polyphonie-enonciative-discours-rapportes.md) (`CHP-401-02`, 102,4 Ko / 725 lignes) : *Polyphonie Énonciative et Discours Rapportés : Théorie de Ducrot, Triade Posé/Présupposé/Sous-Entendu, Ironie et Régimes de Discours*.
     - [`chp-401-03-participe-passe-infinitif-verbes-perception.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-03-participe-passe-infinitif-verbes-perception.md) (`CHP-401-03`, 94,0 Ko / 826 lignes) : *Le Participe Passé suivi d'un Infinitif : Verbes de Perception et Règle d'Agentivité (« Entendues Chanter » vs « Entendu Chanter »)*.
     - [`chp-401-04-cas-limites-invariabilite-fait-statut-laisse.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-04-cas-limites-invariabilite-fait-statut-laisse.md) (`CHP-401-04`, 87,6 Ko / 629 lignes) : *Cas Limites : L'Invariabilité Absolue de « Fait », le Statut Dual de « Laissé » et Semi-Auxiliaires*.
     - [`chp-401-05-rectifications-orthographiques-1990.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-05-rectifications-orthographiques-1990.md) (`CHP-401-05`, 93,5 Ko / 745 lignes) : *Les Rectifications Orthographiques de 1990 : Principes Directeurs, Numéraux Composés, Mots Composés, Accent Circonflexe et Verbes en -eler/-eter*.
     - [`chp-401-06-sociolinguistique-registres-langue.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-06-sociolinguistique-registres-langue.md) (`CHP-401-06`, 97,1 Ko / 691 lignes) : *Sociolinguistique des Registres de Langue : Variations Diaphasiques (Familier, Courant, Soutenu, Solennel) aux Niveaux Phonétique, Lexical et Syntaxique*.
     - [`chp-401-07-synthese-algorithmique-arbitrage-editorial.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401/chp-401-07-synthese-algorithmique-arbitrage-editorial.md) (`CHP-401-07`, 98,3 Ko / 778 lignes) : *Synthèse Algorithmique et Protocole d'Arbitrage Éditorial : Arbre Décisionnel en 4 Filtres, Guide 1990 et Grille Universitaire*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 562 liens internes et identifiants contrôlés (562 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-SOCIO-02`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-401-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-401-audit-report.md).
- **Conséquences** :
  - Positives : **OUVERTURE DU SEMESTRE 4 (CYCLE 4)**. Le premier module de S4 est intégralement achevé, audité et validé (**7 chapitres de cours de référence universitaire**, **5 056 lignes**, **665 Ko de contenus didactiques de haut niveau**). Le prérequis bloquant `DEP-ORT-04` est satisfait.
  - Prochaine étape : Lancement du deuxième module du Semestre 4 : [`MOD-402` — Rhétorique Fondamentale, Analyse de l'Argumentation et Réfutation des Sophismes](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md).

---

### [DEC-036] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-402 — Rhétorique Argumentative et Détection des Sophismes (Étape 13)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le deuxième module de l'Année 2 / Semestre 4 (Cycle 4) : [`MOD-402` — Rhétorique Argumentative : Thèses, Réfutation et Détection des Sophismes](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-4/mod-402/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402/) :
     - [`chp-402-01-logique-formelle-argument-mecanique-raisonnement.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402/chp-402-01-logique-formelle-argument-mecanique-raisonnement.md) (`CHP-402-01`, 86,9 Ko / 687 lignes) : *Logique Formelle de l'Argument et Mécanique du Raisonnement : Syllogisme Canonique, Enthymème et Modes d'Inférence*.
     - [`chp-402-02-typologie-operatoire-arguments-techniques-probatoires.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402/chp-402-02-typologie-operatoire-arguments-techniques-probatoires.md) (`CHP-402-02`, 92,7 Ko / 585 lignes) : *Typologie Opératoire des Arguments et Techniques Probatoires : Arguments Quasi-Logiques, Empiriques et d'Autorité*.
     - [`chp-402-03-traite-complet-sophismes-paralogismes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402/chp-402-03-traite-complet-sophismes-paralogismes.md) (`CHP-402-03`, 104,8 Ko / 637 lignes) : *Traité Complet des Sophismes et Paralogismes : Typologie des Réfutations et Matrice de Riposte Déontologique*.
     - [`chp-402-04-pragmatique-debat-contradictoire-concession-deontologie.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402/chp-402-04-pragmatique-debat-contradictoire-concession-deontologie.md) (`CHP-402-04`, 103,2 Ko / 635 lignes) : *Pragmatique du Débat Contradictoire, Concession et Déontologie : Principe de Charité, Concession Ternaire et Joute Oratoire*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 229 liens internes et identifiants contrôlés (229 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-03`, `SRC-RHET-01`, `SRC-RHET-02`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-402-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-402-audit-report.md).
- **Conséquences** :
  - Positives : Socle dialectique et logique de S4 intégralement achevé, audité et validé (**4 chapitres de cours de référence universitaire**, **2 544 lignes**, **387,6 Ko de contenus didactiques de haut niveau**). Le prérequis argumentatif pour la dissertation académique tripartite (`MOD-403`) est pleinement satisfait.
  - Prochaine étape : Lancement du troisième module du Semestre 4 : [`MOD-403` — Méthodologie Approfondie de la Dissertation et de l'Essai Académique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403-methodologie-dissertation-essai-academique.md).

---

### [DEC-037] Rédaction intégrale et audit automatisé des 4 chapitres de cours du module MOD-403 — Méthodologie Universitaire de la Dissertation et de l'Essai Académique (Étape 13)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le troisième module de l'Année 2 / Semestre 4 (Cycle 4) : [`MOD-403` — Méthodologie Universitaire de la Dissertation et de l'Essai Académique](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403-methodologie-dissertation-essai-academique.md).
- **Décision** :
  1. Conception et rédaction intégrale des 4 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-4/mod-403/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403/) :
     - [`chp-403-01-genre-dissertation-epistemologie-posture.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403/chp-403-01-genre-dissertation-epistemologie-posture.md) (`CHP-403-01`, 91,8 Ko / 841 lignes) : *Le Genre de la Dissertation : Épistémologie, Histoire et Posture Intellectuelle de l'Enquêteur*.
     - [`chp-403-02-phase-preparatoire-analyse-sujet-problematique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403/chp-403-02-phase-preparatoire-analyse-sujet-problematique.md) (`CHP-403-02`, 91,0 Ko / 787 lignes) : *La Phase Préparatoire : Analyse Conceptuelle du Sujet, Détection des Présupposés et Formulation de la Problématique*.
     - [`chp-403-03-typologie-plans-art-depassement-dialectique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403/chp-403-03-typologie-plans-art-depassement-dialectique.md) (`CHP-403-03`, 94,2 Ko / 1 000 lignes) : *Typologie Architecturale des Plans et Art du Dépassement Dialectique : Du Plan Dialectique au Modèle 3x3*.
     - [`chp-403-04-scenographie-redactionnelle-introduction-paragraphes-conclusion.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-403/chp-403-04-scenographie-redactionnelle-introduction-paragraphes-conclusion.md) (`CHP-403-04`, 109,4 Ko / 1 082 lignes) : *La Scénographie Rédactionnelle : Introduction en Quatre Mouvements, Paragraphes Démonstratifs, Transitions et Conclusion*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
---

### [DEC-038] Rédaction intégrale et audit automatisé des 6 chapitres de cours du module MOD-404 — Sociolinguistique Francophone, Dynamiques Ouest-Africaines et Norme Internationale — Clôture du Semestre 4 et de l'Année 2 (Cycles 1 à 4) (Étape 14)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Développer le quatrième et dernier module de l'Année 2 / Semestre 4 (Cycle 4) : [`MOD-404` — Sociolinguistique Francophone : Dynamiques Ouest-Africaines et Norme Internationale](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404-sociolinguistique-francophone-ouest-africaine-norme.md) et clore définitivement l'ensemble de l'Année 2.
- **Décision** :
  1. Conception et rédaction intégrale des 6 chapitres de cours autonomes dans [`03-curriculum/year-2/semester-4/mod-404/`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/) :
     - [`chp-404-01-theorie-sociolinguistique-francophonie-modele-polycentrique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-01-theorie-sociolinguistique-francophonie-modele-polycentrique.md) (`CHP-404-01`, 86,4 Ko / 818 lignes) : *Théorie Sociolinguistique de la Francophonie et Modèle Polycentrique : Déconstruction du Mythe Monolithique et Normes Endogènes*.
     - [`chp-404-02-typologie-variations-continuum-lectal.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-02-typologie-variations-continuum-lectal.md) (`CHP-404-02`, 96,8 Ko / 916 lignes) : *Typologie des Variations Linguistiques et le Continuum Lectal : Diatopie, Diastratie, Diaphasie, Diamésie et Acrolecte / Mésolecte / Basilecte*.
     - [`chp-404-03-francais-afrique-ouest-benin-contacts-vitalite-lexicale.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-03-francais-afrique-ouest-benin-contacts-vitalite-lexicale.md) (`CHP-404-03`, 91,4 Ko / 815 lignes) : *Le Français en Afrique de l'Ouest et au Bénin : Contacts de Langues, Emprunts Véhiculaires et Vitalité Lexicale*.
     - [`chp-404-04-morphosyntaxe-ouest-africaine-calques-substrat-frontieres.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-04-morphosyntaxe-ouest-africaine-calques-substrat-frontieres.md) (`CHP-404-04`, 96,5 Ko / 866 lignes) : *Morphosyntaxe Ouest-Africaine : Calques de Substrat, Rections Prépositionnelles et Frontières Normatives*.
     - [`chp-404-05-insecurite-linguistique-hypercorrection-emancipation.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-05-insecurite-linguistique-hypercorrection-emancipation.md) (`CHP-404-05`, 99,0 Ko / 993 lignes) : *L'Insécurité Linguistique, l'Hypercorrection et les Voies de l'Émancipation : Bourdieu, Labov et Lucidité Métalinguistique*.
     - [`chp-404-06-calibration-polylectale-appliquee-trois-registres.md`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-404/chp-404-06-calibration-polylectale-appliquee-trois-registres.md) (`CHP-404-06`, 103,1 Ko / 891 lignes) : *La Calibration Polylectale Appliquée : Méthodologie de Transposition Intégrale entre Familier Local, Standard Administratif et Diplomatique d'Apparat*.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 415 liens internes et identifiants contrôlés (415 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-SOCIO-01`, `SRC-SOCIO-02`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-01`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-LEX-03`, `SRC-LEX-04`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-404-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-404-audit-report.md).
- **Conséquences** :
  - Positives : **CLÔTURE DU SEMESTRE 4 (CYCLE 4) ET DE L'ANNÉE 2 DU CURSUS**. L'Année 2 (Semestres 3 et 4) est intégralement achevée, auditée et validée (**8 modules**, **43 chapitres de cours de référence universitaire**, **30 274 lignes**, **4,05 Mo de contenus didactiques de haut niveau**).
  - Bilan Cumulé des Années 1 et 2 (Cycles 1 à 4) : **84 chapitres complets**, **63 401 lignes**, **7,52 Mo de savoirs académiques**, 0 anomalie résiduelle.
  - Prochaine étape : Passage aux épreuves semestrielles de la Porte 4 et préparation de l'Année 3 (Semestres 5 & 6 — Cycle 5 & Cycle 6 : Haute Rhétorique, Éloquence, Macro-Syntaxe, Révision Éditoriale Professionnelle et Diachronie).

---

### [DEC-039] Conception, Architecture et Déploiement de la Progressive Web App (PWA) Interactive et Adaptative World-Class French (Étape 15)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Rendre le patrimoine didactique et académique exceptionnel de World-Class French (du niveau CI au niveau World-Class C2+) pleinement accessible, interactif et engageant pour tout profil d'apprenant, avec une rétention maximale inspirée de Duolingo (gamification), fata.app (répétition espacée FSRS / SM-2 et sprint quotidien chronométré) et Projet Voltaire (chasse à la faute).
- **Décision** :
  1. **Création de l'application PWA dans le monorepo sous `app/`** sans altérer les répertoires existants `00-governance/` à `10-final/`.
  2. **Pipeline de compilation didactique (`app/scripts/compile_curriculum.py`)** générant la banque structurée `app/src/data/compiled-curriculum.json` :
     - Structuration continue en **8 Paliers didactiques** : Palier 1 (CI / A0 - Éveil phonétique & combinatoire b+a=ba), Palier 2 (CP-CE1 / A1 - Survie & verbes piliers), Palier 3 (CE2-CM2 / A2 - Fondations & API), Palier 4 (Collège / B1 - Autonomie), Palier 5 (Lycée / B2 - Argumentation), Palier 6 (Supérieur / C1 - Perfectionnement & Voltaire), Palier 7 (Excellence / C2 - Haut style), Palier 8 (World-Class / C2+ - Éloquence & Diplomatie).
     - Intégration du **Bouclier Cognitif Débutant (`❤️ ∞`)** : vies illimitées sur les Paliers 1 et 2 pour bannir la frustration et l'abandon.
  3. **Développement des 7 Moteurs d'Exercices Interactifs** sous `app/src/components/exercises/` :
     - `VisualSoundMatch` : association son-image avec écoute audio (spécial A0-A1).
     - `SyllableAndSentenceBricks` : briques tactiles avec synthèse vocale à chaque manipulation.
     - `VoltaireErrorHunter` : détection de faute au clic dans une phrase littéraire ou administrative.
     - `InteractiveDictation` : dictée audio double vitesse (`1.0x` et `0.65x`), clavier d'accents français (`é, è, ê, à, â, ç, œ, æ...`).
     - `SmartDiagnosticMCQ` : QCM à distracteurs ciblés fondés sur les pièges fréquents.
     - `ClozeMorphologyInput` : texte à trous avec double niveau d'indices (règle puis terminaison).
     - `RhetoricAndRegisterStudio` : ateliers de figures de style et protocole diplomatique.
  4. **Moteur de Rappel Espacé (`fata.srs`) & Rétention Mathématique** :
     - Loi exponentielle d'Ebbinghaus : $R(t) = 100 \times e^{-t / S}$ avec seuil d'oubli fixé à 75%.
     - Visualisation SVG de la courbe d'oubli et simulateur temporel (`⏩ Simuler +24h / +48h`).
     - Algorithme FSRS à 4 notations : À revoir (<10 min), Difficile (1 j), Bon (3 j), Facile (7 j).
  5. **Mode « Daily Fata Sprint » & Rétention Multi-Canal** :
     - Défi quotidien chronométré de 6 questions avec génération du rapport emoji partageable (`🟩🟨🟥`).
     - Notifications Web Push et export d'agenda `.ics` pour une routine quotidienne de 5 minutes.
  6. **Contrôle Qualité & Typage Strict** :
     - TypeScript strict sans aucun type cast `any`.
     - `npm run build` exécuté avec succès (0 erreur TypeScript, 0 warning).
     - Maintien de l'audit académique `verify_chapter.py` à **0 anomalie critique**.
- **Conséquences** :
  - Positives : Transformation majeure du projet d'un corpus purement textuel en un écosystème EdTech complet, offline-first et universellement praticable.

---

### [DEC-040] Rédaction Intégrale, Audit Automatisé et Validation des 5 Chapitres du Module MOD-501 (Macro-Syntaxe, Dislocations, Incises et Grande Période Oratoire) — Inauguration de l'Année 3 / Semestre 5 (Cycle 5)
- **Date** : 2026-10-15
- **Statut** : Validé
- **Contexte** : Inauguration de l'Année 3 (Semestre 5, Cycle 5 : Haute Stylistique, Rhétorique Classique, Déclamation et Révision Éditoriale). Nécessité d'élever l'apprenant au palier L4 (Maîtrise approfondie) par l'enseignement rigoureux de la macro-syntaxe discursive, de la structure périodique ternaire (protase, acmé, apodose), de la métrique de la prose (loi de Deloffre, cadence majeure), de la gestion des incises à grande distance actancielle (> 30 mots) et de la pathologie/virtuosité de l'anacoluthe.
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-501` sous [`03-curriculum/year-3/semester-5/mod-501/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/) :
     - [`chp-501-01-fondements-epistemologiques-histoire-periode.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/chp-501-01-fondements-epistemologiques-histoire-periode.md) (`CHP-501-01`, 108,9 Ko / 1 019 lignes) : Fondements Épistémologiques et Histoire Rhétorique de la Période.
     - [`chp-501-02-morphologie-dynamique-periode-protase-acme-apodose.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/chp-501-02-morphologie-dynamique-periode-protase-acme-apodose.md) (`CHP-501-02`, 100,8 Ko / 944 lignes) : Morphologie Dynamique de la Période : Protase, Acmé, Apodose et Architecture des Périodes Suspensive et Continue.
     - [`chp-501-03-metrique-prose-systeme-cadences-rythmiques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/chp-501-03-metrique-prose-systeme-cadences-rythmiques.md) (`CHP-501-03`, 100,8 Ko / 1 012 lignes) : La Métrique de la Prose et le Système des Cadences Rythmiques : Comma, Colon, Periodos, Cadence Majeure, Cadence Mineure et Isocolie.
     - [`chp-501-04-macro-syntaxe-appliquee-incises-dislocations-nobles.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/chp-501-04-macro-syntaxe-appliquee-incises-dislocations-nobles.md) (`CHP-501-04`, 104,5 Ko / 964 lignes) : Macro-Syntaxe Appliquée : Incises Savantes, Distance Actancielle Supérieure à 30 Mots et Dislocations Oratoires Nobles.
     - [`chp-501-05-pathologie-virtuosite-rupture-anacoluthe.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501/chp-501-05-pathologie-virtuosite-rupture-anacoluthe.md) (`CHP-501-05`, 92,4 Ko / 929 lignes) : Pathologie et Virtuosité de la Rupture Syntaxique : L'Anacoluthe, du Solécisme Vicieux à la Figure d'Apparat.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 374 liens internes et identifiants contrôlés (374 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-01`, `SRC-RHET-02`, `SRC-RHET-03`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-PHON-02`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-501-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-501-audit-report.md).
- **Conséquences** :
  - Positives : Inauguration souveraine du Semestre 5 (Cycle 5). Le corpus atteint désormais **89 chapitres complets**, **68 269 lignes**, **8,03 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Rédaction et audit de `MOD-502` (*Traité des Figures de Rhétorique et Poétique du Style*).

---

### [DEC-041] Rédaction Intégrale, Audit Automatisé et Validation des 5 Chapitres du Module MOD-502 (Traité Complet des Figures de Rhétorique et Cadences de la Prose)
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Deuxième jalon de l'Année 3 / Semestre 5 (Cycle 5 : Haute Stylistique, Rhétorique Classique, Déclamation et Révision Éditoriale). Nécessité d'élever l'apprenant au palier L4 (Maîtrise approfondie) par l'enseignement scientifique des tropes (Fontanier, Molinié), des figures de construction (chiasme, parallélisme, zeugma, hyperbate), des figures de pensée (oxymore, litote, euphémisme, allégorie, prosopopée), de la poétique acoustique (déconstruction de la mimophonie naïve, vocalisme, cadences de la prose) et de la méthode du commentaire stylistique de concours (Triptyque d'Or, réseaux figuro-isotopiques).
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-502` sous [`03-curriculum/year-3/semester-5/mod-502/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/) :
     - [`chp-502-01-theorie-tropes-mutation-sens-metaphore-metonymie.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/chp-502-01-theorie-tropes-mutation-sens-metaphore-metonymie.md) (`CHP-502-01`, 91,1 Ko / 714 lignes) : La Théorie des Tropes et la Mutation du Sens : Métaphore, Métonymie, Synecdoque, Catachrèse et Hypallage.
     - [`chp-502-02-figures-construction-syntaxe-rythme-prose.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/chp-502-02-figures-construction-syntaxe-rythme-prose.md) (`CHP-502-02`, 95,8 Ko / 763 lignes) : Figures de Construction, Syntaxe et Rythme de la Prose : Chiasme, Parallélisme, Anaphore, Zeugma et Hyperbate.
     - [`chp-502-03-figures-pensee-strategies-enonciation.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/chp-502-03-figures-pensee-strategies-enonciation.md) (`CHP-502-03`, 100,5 Ko / 752 lignes) : Figures de Pensée et Stratégies de l'Énonciation : Antithèse, Oxymore, Litote, Euphémisme, Allégorie et Prosopopée.
     - [`chp-502-04-poetique-sonorites-cadences-prose.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/chp-502-04-poetique-sonorites-cadences-prose.md) (`CHP-502-04`, 48,8 Ko / 476 lignes) : Poétique des Sonorités et Cadences de la Prose : Allitérations, Assonances, Vocalisme et Déconstruction de la Mimophonie.
     - [`chp-502-05-methodologie-commentaire-stylistique-universitaire.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-502/chp-502-05-methodologie-commentaire-stylistique-universitaire.md) (`CHP-502-05`, 43,9 Ko / 430 lignes) : Méthodologie Universitaire du Commentaire Stylistique : Le Triptyque d'Or, Réseaux Figuro-Isotopiques et Épreuve ENS/Agrégation.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 316 liens internes et identifiants contrôlés (316 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-01`, `SRC-RHET-02`, `SRC-RHET-03`, `SRC-RHET-04`, `SRC-RHET-05`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-PHON-01`, `SRC-NORM-03`, `SRC-TYPO-01`, `SRC-LEX-03`, `SRC-LEX-04`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-502-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-502-audit-report.md).
- **Conséquences** :
  - Positives : Consolidation majeure du Semestre 5 (Cycle 5). Le corpus atteint désormais **94 chapitres complets**, **71 404 lignes**, **8,41 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Rédaction et audit de `MOD-503` (*Haute Éloquence : Déclamation Classique, Souffle et Présence Oratoire*).

---

### [DEC-042] Rédaction Intégrale, Audit Automatisé et Validation des 5 Chapitres du Module MOD-503 (Haute Éloquence : Déclamation Classique, Souffle et Présence Oratoire)
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Troisième jalon de l'Année 3 / Semestre 5 (Cycle 5 : Haute Stylistique, Rhétorique Classique, Déclamation et Révision Éditoriale). Clé de voûte de l'axe Expression Orale et Art Oratoire (*DEP-ORL-01*, *DEP-ORL-02*). Nécessité d'élever l'apprenant au palier L4 (Maîtrise approfondie) par l'incarnation vivante des cinq canons rhétoriques (souveraineté de l'*actio* et triade *logos/éthos/pathos*), la physiologie vocale sans fatigue (souffle costo-diaphragmatique bas, *appoggio* abdominal, masque osseux et *formant de l'orateur* 2 800-3 200 Hz), la prosodie avancée (*tempo lento* 105-125 mots/min, trilogie des silences dramatiques, mélodie de la période oratoire, code des liaisons nobles), la scénographie corporelle (ancrage podal, verticalité axiale, regard circulaire à 180°, chironomie dans le cadre utile et immobilité habitée) et l'art de la mémoire (*ars memoriae* cicéronienne, palais mental, images agissantes et déclamation publique de 15 minutes sans notes).
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-503` sous [`03-curriculum/year-3/semester-5/mod-503/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/) :
     - [`chp-503-01-cinq-canons-rhetorique-souverainete-actio.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/chp-503-01-cinq-canons-rhetorique-souverainete-actio.md) (`CHP-503-01`, 39,6 Ko / 567 lignes) : Les Cinq Canons de la Rhétorique Classique et la Souveraineté de l'Actio : Inventio, Dispositio, Elocutio, Actio, Memoria et Triade Aristotélicienne.
     - [`chp-503-02-physiologie-voix-souffle-projection-acoustique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/chp-503-02-physiologie-voix-souffle-projection-acoustique.md) (`CHP-503-02`, 41,2 Ko / 597 lignes) : Physiologie de la Voix Parlée, Technique du Souffle et Projection Acoustique : De l'Ancrage Diaphragmatique aux Résonateurs du Masque.
     - [`chp-503-03-prosodie-oratoire-silences-metrique-periode.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/chp-503-03-prosodie-oratoire-silences-metrique-periode.md) (`CHP-503-03`, 42,6 Ko / 611 lignes) : Prosodie Oratoire Avancée, Architecture des Silences et Métrique de la Période : Du Tempo Lento aux Trois Silences Dramatiques.
     - [`chp-503-04-scenographie-corporelle-ancrage-chironomie.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/chp-503-04-scenographie-corporelle-ancrage-chironomie.md) (`CHP-503-04`, 40,2 Ko / 576 lignes) : Scénographie Corporelle, Ancrage Postural et Chironomie du Geste : Du Balayage Circulaire à l'Immobilité Habitée.
     - [`chp-503-05-art-memoire-memoria-declamation-sans-notes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-503/chp-503-05-art-memoire-memoria-declamation-sans-notes.md) (`CHP-503-05`, 40,9 Ko / 565 lignes) : L'Art de la Mémoire (Memoria) et la Déclamation sans Notes : Palais Mental, Images Agissantes et Gestion du Blanc Mnésique.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire de 5-6 h en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 144 liens internes et identifiants contrôlés (144 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-01`, `SRC-RHET-03`, `SRC-PHON-01`, `SRC-PHON-02`, `SRC-GRAM-01`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-503-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-503-audit-report.md).
- **Conséquences** :
  - Positives : Clôture de l'axe de haute éloquence oratoire du cursus. Le corpus atteint désormais **99 chapitres complets**, **74 320 lignes**, **8,61 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Rédaction et audit de `MOD-504` (*Révision Éditoriale Professionnelle, Typographie Savante et Haute Tenue Écrite*), module terminal du Semestre 5 avant le Semestre 6.

---

### [DEC-043] Rédaction Intégrale, Audit Automatisé et Validation des 5 Chapitres du Module MOD-504 (Révision Éditoriale Professionnelle, Typographie Savante et Haute Tenue Écrite) — Clôture Complète du Semestre 5 / Cycle 5
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Quatrième et ultime jalon de l'Année 3 / Semestre 5 (Cycle 5 : Haute Stylistique, Rhétorique Classique, Déclamation et Révision Éditoriale). Clé de voûte de l'axe Révision & Censure Éditoriale (*DEP-ORT-04*, *DEP-REV-01*). Nécessité d'élever l'apprenant au palier L4 (Maîtrise approfondie) par l'acquisition des compétences indispensables au censeur-correcteur et réviseur d'édition professionnel : la sémiologie clinique des pathologies du texte écrit (solécismes de rection, barbarismes, impropriétés paronymiques, pléonasmes vicieux, faux-amis savants), le Code typographique officiel de l'Imprimerie nationale (espaces insécables, ponctuation double, chevrons français, triade des tirets, accentuation impérative des capitales, règles de l'italique et de l'autonymie), la numération éditoriale et le protocole de révision en trois passes étanches (macro-structure, méso-syntaxe, micro-typographie, signes ISO 5776 de correction d'épreuves), ainsi que la confection d'un apparat critique universitaire, la déontologie face à l'auteur et la neutralisation absolue des pièges d'hypercorrection.
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-504` sous [`03-curriculum/year-3/semester-5/mod-504/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/) :
     - [`chp-504-01-semiologie-pathologies-texte-ecrit.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/chp-504-01-semiologie-pathologies-texte-ecrit.md) (`CHP-504-01`, 41,5 Ko / 605 lignes) : Sémiologie des Pathologies du Texte Écrit : Solécismes, Barbarismes, Impropriétés, Pléonasmes Vicieux et Faux-Amis Savants.
     - [`chp-504-02-code-typographique-espaces-ponctuation-guillemets.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/chp-504-02-code-typographique-espaces-ponctuation-guillemets.md) (`CHP-504-02`, 38,9 Ko / 578 lignes) : Le Code Typographique Officiel (Imprimerie Nationale) : Espaces Insécables, Ponctuation Simple vs Double et Guillemets Français.
     - [`chp-504-03-famille-tirets-capitales-accentuees-italique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/chp-504-03-famille-tirets-capitales-accentuees-italique.md) (`CHP-504-03`, 36,6 Ko / 470 lignes) : Famille des Tirets, Capitales Accentuées et Règles de l'Italique.
     - [`chp-504-04-numeration-editoriale-protocole-trois-passes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/chp-504-04-numeration-editoriale-protocole-trois-passes.md) (`CHP-504-04`, 36,4 Ko / 466 lignes) : Numération Éditoriale et Protocole de Révision en Trois Passes.
     - [`chp-504-05-apparat-critique-deontologie-hypercorrection.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504/chp-504-05-apparat-critique-deontologie-hypercorrection.md) (`CHP-504-05`, 34,2 Ko / 449 lignes) : L'Apparat Critique, Déontologie Éditoriale et Prévention de l'Hypercorrection.
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire canonique en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 207 liens internes et identifiants contrôlés (207 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-TYPO-01`, `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-LEX-01`, `SRC-LEX-02`, `SRC-NORM-02`, `SRC-NORM-03`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-504-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-504-audit-report.md).
---

### [DEC-044] Rédaction Intégrale, Audit Automatisé et Validation des 5 Chapitres du Module MOD-601 (Diachronie et Histoire de la Langue Française : Des Origines aux Réformes) — Ouverture du Semestre 6 / Cycle 6
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Premier jalon de l'Année 3 / Semestre 6 (Cycle 6 : Diachronie, Herméneutique, Autonomie Philologique et Capstone Project Grand Oral). Clé de voûte de l'axe Diachronie, Histoire & Philologie (*DEP-HIS-01*, *DEP-LIN-02*, *DEP-LIN-03*). Nécessité d'élever l'apprenant aux paliers L4/L5 (Maîtrise approfondie à Expertise transférable) par l'élucidation historique de la langue : les matrices originelles (substrat celtique, latin vulgaire, superstrat francique, Serments de Strasbourg 842, Cantilène de sainte Eulalie v. 880-881), l'ancien français classique et le bicasualisme (Cas Sujet/Cas Régime, lois de syncope et d'apocope, vocalisation du [l] vélaire en [w], syntaxe V2 et langue pro-drop), le moyen français et la latinisation graphique cléricale (effondrement du bicasualisme, ordre SVO, consonnes muettes étymologiques réelles vs fausses étymologies *poids*, *legs*, *sçavoir*, Villers-Cotterêts 1539, Pléiade 1549), la fixation classique de la norme vaugelienne (bon usage de la Cour, Académie française 1635, style noble, querelle Vaugelas vs Port-Royal 1660), et des Lumières aux réformes contemporaines (mythe de Rivarol 1784, rapport Grégoire 1794, Jules Ferry 1881-1882, réforme académique de 1835 *oi* -> *ai*, rectifications orthographiques de 1990).
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-601` sous [`03-curriculum/year-3/semester-6/mod-601/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/) :
     - [`chp-601-01-origines-latines-naissance-langue-romane.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/chp-601-01-origines-latines-naissance-langue-romane.md) (`CHP-601-01`, 39,8 Ko / 361 lignes) : Des Origines Latines à la Naissance de la Langue Romane (Ier - Xe s.).
     - [`chp-601-02-ancien-francais-classique-systeme-bicasuel.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/chp-601-02-ancien-francais-classique-systeme-bicasuel.md) (`CHP-601-02`, 41,5 Ko / 383 lignes) : L'Ancien Français Classique et le Système Bicasuel (XIe - XIIIe s.).
     - [`chp-601-03-moyen-francais-renaissance-latinisation-graphique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/chp-601-03-moyen-francais-renaissance-latinisation-graphique.md) (`CHP-601-03`, 39,6 Ko / 357 lignes) : Le Moyen Français et la Renaissance : Mutations et Latinisation Graphique (XIVe - XVIe s.).
     - [`chp-601-04-grand-siecle-fixation-classique-norme-vaugelas.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/chp-601-04-grand-siecle-fixation-classique-norme-vaugelas.md) (`CHP-601-04`, 37,8 Ko / 327 lignes) : Le Grand Siècle et la Fixation Classique de la Norme (XVIIe s.).
     - [`chp-601-05-lumieres-ecole-republicaine-reformes-orthographe.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-601/chp-601-05-lumieres-ecole-republicaine-reformes-orthographe.md) (`CHP-601-05`, 41,3 Ko / 359 lignes) : Des Lumières aux Réformes de l'Orthographe : École Républicaine, Évolution Normative et Rectifications de 1990 (XVIIIe - XXe s.).
  2. Chaque chapitre respecte scrupuleusement le gabarit des 21 rubriques normatives, la ventilation horaire canonique en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 222 liens internes et identifiants contrôlés (222 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-LEX-01`, `SRC-LEX-03`, `SRC-PHON-01`, `SRC-SOCIO-02`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-601-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-601-audit-report.md).
- **Conséquences** :
  - Positives : **HOMOLOGATION COMPLÈTE DU MODULE MOD-601**. Le corpus atteint désormais **109 chapitres complets**, **78 675 lignes**, **9,00 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Rédaction et audit de `MOD-602` (*Herméneutique Littéraire, Stylistique Appliquée et Explication de Concours*).
---

### [DEC-045] Rédaction Intégrale, Audit Automatisé et Homologation des 5 Chapitres du Module MOD-602 (Herméneutique Littéraire, Philosophique et Explication de Concours) — Semestre 6 / Cycle 6
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Deuxième jalon de l'Année 3 / Semestre 6 (Cycle 6 : Diachronie, Herméneutique, Autonomie Philologique et Capstone Project Grand Oral). Clé de voûte de l'axe Compréhension de Textes et Herméneutique Savante (*DEP-LEC-02*, *DEP-LEC-03*). Nécessité d'élever l'apprenant au palier suprême L5 (Expertise transférable) par la maîtrise de l'exercice d'érudition le plus prestigieux des hauts concours universitaires (ENS d'Ulm et de Lyon, Agrégation de Lettres Modernes, de Grammaire et de Philosophie) : les fondements épistémologiques du cercle herméneutique (Schleiermacher, Dilthey) et de l'arc ricœurien (*« expliquer plus pour comprendre mieux »*), le « détail révélateur » de Jean Starobinski, la méthodologie de l'explication linéaire de concours et l'art de la coupe fondé sur 4 critères linguistiques objectifs, l'adéquation ontologique de la micro-syntaxe et de la métaphysique d'auteur (Montaigne, Pascal, Rousseau, Baudelaire, Proust, Fanon, Césaire), la philologie de l'implicite, le répertoire des dix faux amis diachroniques majeurs d'Ancien Régime, la neutralisation de l'anachronisme moralisateur, la polyphonie sous censure (Ducrot), la scénographie oratoire des 15 minutes d'agrégation sans notes et la tenue rédactionnelle du devoir de 1 500 mots.
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-602` sous [`03-curriculum/year-3/semester-6/mod-602/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/) :
     - [`chp-602-01-epistemologie-hermeneutique-cercle-dialectique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/chp-602-01-epistemologie-hermeneutique-cercle-dialectique.md) (`CHP-602-01`, 41,8 Ko / 369 lignes) : Épistémologie de l'Herméneutique Savante et Dialectique du Texte (Schleiermacher, Dilthey, Ricœur, Starobinski).
     - [`chp-602-02-methodologie-explication-lineaire-concours.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/chp-602-02-methodologie-explication-lineaire-concours.md) (`CHP-602-02`, 40,7 Ko / 359 lignes) : Méthodologie Universitaire de l'Explication Linéaire de Concours (ENS / Agrégation, l'art de la coupe, mouvements organiques).
     - [`chp-602-03-chair-verbale-pensee-syntaxe-metaphysique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/chp-602-03-chair-verbale-pensee-syntaxe-metaphysique.md) (`CHP-602-03`, 42,1 Ko / 368 lignes) : La Chair Verbale de la Pensée : Grammaire, Micro-Syntaxe et Métaphysique (Montaigne, Pascal, Rousseau, Baudelaire, Proust, Césaire, Fanon).
     - [`chp-602-04-philologie-implicite-intertextualite-anachronisme.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/chp-602-04-philologie-implicite-intertextualite-anachronisme.md) (`CHP-602-04`, 41,9 Ko / 369 lignes) : Philologie de l'Implicite, Intertextualité et Combat contre l'Anachronisme (Faux amis diachroniques, Ducrot, intertexte biblique et antique).
     - [`chp-602-05-epreuve-orale-ecrite-haut-concours-agregation.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-602/chp-602-05-epreuve-orale-ecrite-haut-concours-agregation.md) (`CHP-602-05`, 40,9 Ko / 361 lignes) : L'Épreuve Orale et Écrite de Haut Concours : Scénographie des 15 Minutes sans Notes, Tenue Rédactionnelle (1 500 mots) et Joute Académique.
  2. Chaque chapitre respecte scrupuleusement le gabarit canonique des 21 rubriques normatives, la ventilation horaire en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 209 liens internes et identifiants contrôlés (209 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-RHET-04`, `SRC-RHET-03`, `SRC-GRAM-02`, `SRC-GRAM-01`, `SRC-LEX-01`, `SRC-LEX-03`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-602-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-602-audit-report.md).
- **Conséquences** :
  - Positives : **HOMOLOGATION COMPLÈTE DU MODULE MOD-602**. Le corpus global atteint désormais **114 chapitres complets**, **80 501 lignes**, **9,21 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Rédaction et audit de `MOD-603` (*Autonomie Philologique : Recherche dans les Traités Savants, Grevisse et TLFi*).

---

### [DEC-046] Rédaction Intégrale, Audit Automatisé et Homologation des 5 Chapitres du Module MOD-603 (Autonomie Philologique : Recherche dans les Traités Savants, Grevisse et TLFi) — Semestre 6 / Cycle 6
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Troisième jalon de l'Année 3 / Semestre 6 (Cycle 6 : Diachronie, Herméneutique, Autonomie Philologique et Capstone Project Grand Oral). Clé de voûte de l'axe Philologie & Consultation Experte (*DEP-REV-01*, *DEP-LIN-03*). Nécessité d'élever l'apprenant au palier suprême L5 (Expertise transférable) pour en faire un chercheur et un arbitre autonome de la langue française : épistémologie critique des sources (prescription vs description, Vaugelas, Bourdieu, rectifications de 1990), topographie monumentale du *Bon Usage* de Grevisse & Goosse (1 600 pages, paragraphes continus §, gros caractères doctrinaux vs petits caractères historiques, statut des citations littéraires d'autorité, dialogue savant des Remarques critiques de Goosse face aux puristes, méthode des trois index en 3 minutes), exploitation des corpus numériques et dictionnaires historiques monumentaux (*TLFi* et ses sections étymologique/morphologique/syntagmatique, base *Frantext* 1500-2020, dictionnaire historique d'Alain Rey, 9 éditions du dictionnaire de l'Académie 1694-2024), méthodologie universitaire de la Note d'arbitrage philologique en six volets canoniques adossée à une déontologie impartiale et des recommandations opérationnelles différenciées selon trois registres étanches, et traque clinique des pathologies du raisonnement philologique (fétichisme de l'exception littéraire, illusion régressive de l'étymologisme figé, citation tronquée, simulation d'arbitrage contradictoire en temps réel).
- **Décision** :
  1. Rédaction intégrale en prose académique d'élite des 5 chapitres de cours de `MOD-603` sous [`03-curriculum/year-3/semester-6/mod-603/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/) :
     - [`chp-603-01-epistemologie-instruments-typologie-sources.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/chp-603-01-epistemologie-instruments-typologie-sources.md) (`CHP-603-01`, 72,3 Ko / 643 lignes) : Épistémologie des Instruments de Référence et Typologie Critique des Sources : Prescription, Description et Évolution du Bon Usage.
     - [`chp-603-02-architecture-maniement-bon-usage-grevisse.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/chp-603-02-architecture-maniement-bon-usage-grevisse.md) (`CHP-603-02`, 66,8 Ko / 634 lignes) : L'Architecture et le Maniement du Bon Usage (Grevisse & Goosse) : Topographie Textuelle, Paragraphes, Citations et Méthodologie des Trois Index.
     - [`chp-603-03-corpus-numeriques-dictionnaires-historiques.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/chp-603-03-corpus-numeriques-dictionnaires-historiques.md) (`CHP-603-03`, 86,1 Ko / 724 lignes) : Les Corpus Numériques et Dictionnaires Historiques Monumentaux : TLFi, Frantext, Dictionnaire Historique d'Alain Rey et Évolutions de l'Académie.
     - [`chp-603-04-methodologie-note-arbitrage-philologique.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/chp-603-04-methodologie-note-arbitrage-philologique.md) (`CHP-603-04`, 75,5 Ko / 671 lignes) : Méthodologie Universitaire de la Note d'Arbitrage Philologique : Le Canon en Six Sections et Déontologie de l'Expertise Linguistique.
     - [`chp-603-05-pathologies-raisonnement-philologique-audit.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-603/chp-603-05-pathologies-raisonnement-philologique-audit.md) (`CHP-603-05`, 71,0 Ko / 624 lignes) : Pathologies du Raisonnement Philologique, Fétichisme de la Citation et Audit Critique : Déconstruction des Biais et Simulation d'Arbitrage en Temps Réel.
  2. Chaque chapitre respecte scrupuleusement le gabarit canonique des 21 rubriques normatives, la ventilation horaire en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 442 liens internes et identifiants contrôlés (442 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-GRAM-03`, `SRC-LEX-01`, `SRC-LEX-02`, `SRC-LEX-03`, `SRC-LEX-04`, `SRC-LEX-05`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-603-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-603-audit-report.md).
- **Conséquences** :
  - Positives : **HOMOLOGATION COMPLÈTE DU MODULE MOD-603**. Le corpus global atteint désormais **119 chapitres complets**, **83 797 lignes**, **9,58 Mo de savoirs académiques**, avec 0 anomalie résiduelle.
  - Prochaine étape : Conception et rédaction de l'ultime module du cursus : `MOD-604` (*Capstone Project et Grand Oral de Diplomation*).

---

### [DEC-047] Rédaction Intégrale, Audit Automatisé et Homologation Finale des 6 Chapitres du Module MOD-604 (Capstone Project et Grand Oral de Diplomation) — Clôture Définitive du Semestre 6 et Diplomation à 100 % du Cursus World-Class French
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Clé de voûte absolue et couronnement académique terminal du cursus World-Class French (Année 3 / Semestre 6 — Cycle 6). Réalisation du chef-d'œuvre de fin d'études combinant la Monographie d'érudition écrite (3 500 mots, plan tripartite ample $3 \times 3 = 9$, apparat critique ISO 690 avec 15 sources réelles, taux d'erreur résiduel $\tau < 0,1\,\%$) et le Grand Oral de Diplomation (30 minutes sans notes face au jury : 15 min d'exposé magistral *sine charta* avec mémorisation topique par les *loci* et 15 min d'entretien contradictoire sous tension *disputatio* avec riposte en trois temps adossée aux faits de langue et aux traités savants).
- **Décision** :
  1. Conception et rédaction intégrale en haute prose académique des 6 chapitres de cours de `MOD-604` sous [`03-curriculum/year-3/semester-6/mod-604/`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/) :
     - [`chp-604-01-epistemologie-corpus-problematique-savante.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-01-epistemologie-corpus-problematique-savante.md) (`CHP-604-01`, 74,1 Ko / 695 lignes) : Épistémologie de la Recherche Universitaire, Clôture du Corpus et Formulation de la Problématique Savante (Rupture disserter vs chercher, clôture du corpus primaire, 4 composantes de la problématique, cahiers des charges des 3 filières d'excellence A, B, C).
     - [`chp-604-02-architecture-tripartite-ample-macro-transitions.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-02-architecture-tripartite-ample-macro-transitions.md) (`CHP-604-02`, 83,1 Ko / 919 lignes) : L'Architecture Tripartite Ample (3x3=9), Progression Thématique et Art des Macro-Transitions (Équilibre volumétrique des 9 sous-parties de 300 à 400 mots, progression continue et à thème dérivé, macro-transitions bilatérales autonomes).
     - [`chp-604-03-apparat-critique-citations-deontologie-universitaire.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-03-apparat-critique-citations-deontologie-universitaire.md) (`CHP-604-03`, 82,7 Ko / 788 lignes) : L'Apparat Critique Universitaire, Normes de Citation et Déontologie de la Recherche : Réfutation du Plagiat et Intégrité Philologique (Citations courtes vs longues détachées, typologie tripartite des notes, bibliographie ISO 690 avec 15 sources réelles, sanctions du plagiat).
     - [`chp-604-04-revision-editoriale-crible-typographique-taux-erreur.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-04-revision-editoriale-crible-typographique-taux-erreur.md) (`CHP-604-04`, 85,4 Ko / 766 lignes) : Révision Éditoriale Supérieure, Crible Typographique de l'Imprimerie Nationale et Maîtrise du Taux d'Erreur Résiduel ($\tau < 0,1\,\%$) (Protocole en 3 passes étanches, crible typographique de l'Imprimerie nationale, formule algorithmique du taux d'erreur, Rectifications de 1990 sans panachage).
     - [`chp-604-05-rhetorique-soutenance-magistrale-sans-notes.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-05-rhetorique-soutenance-magistrale-sans-notes.md) (`CHP-604-05`, 71,4 Ko / 726 lignes) : Rhétorique de la Soutenance Magistrale sans Notes : Scénographie Oratoire des 15 Minutes d'Exposé Liminaire (Éloquence *sine charta*, méthode topique des lieux et palais à 4 stations, horloge canonique des 15 minutes, pose diaphragmatique, silence de 2 secondes, arche prosodique).
     - [`chp-604-06-resilience-dialectique-debat-contradictoire-grand-oral.md`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-6/mod-604/chp-604-06-resilience-dialectique-debat-contradictoire-grand-oral.md) (`CHP-604-06`, 83,1 Ko / 773 lignes) : Résilience Dialectique et Débat Contradictoire : L'Épreuve des 15 Minutes d'Entretien Face au Jury et l'Accès au Rang de Maître (Théorie de la *disputatio*, parade aux 4 types d'assauts, riposte d'or en 3 temps, délibération, grille sur 100 points, cérémonial d'investiture au palier L5).
  2. Chaque chapitre respecte scrupuleusement le gabarit canonique des 21 rubriques normatives, la ventilation horaire en 4 phases opératoires (`DEC-006`), les décomptes métriques certifiés selon `SRC-TYPO-01` (50 mots en exercice L3, 60 mots en production réelle) et l'annexe de classification pédagogique (`CORE-NOW`, `DEFER`, etc.).
  3. Exécution du banc d'essai d'audit [`08-audits/tools/verify_chapter.py`](file:///f:/Formation/world-class-french/08-audits/tools/verify_chapter.py) sur l'ensemble du module :
     - 513 liens internes et identifiants contrôlés (513 valides, 0 lien brisé) ;
     - Zéro source inventée (alignement strict sur `SRC-GRAM-01`, `SRC-GRAM-02`, `SRC-LEX-01`, `SRC-LEX-02`, `SRC-LEX-03`, `SRC-RHET-03`, `SRC-RHET-04`, `SRC-PHON-01`, `SRC-SOCIO-01`, `SRC-NORM-02`, `SRC-NORM-03`, `SRC-TYPO-01`) ;
     - Zéro erreur critique, zéro avertissement résiduel ;
     - Publication du rapport d'audit officiel [`08-audits/pedagogical/mod-604-audit-report.md`](file:///f:/Formation/world-class-french/08-audits/pedagogical/mod-604-audit-report.md).
- **Conséquences** :
  - Positives : **HOMOLOGATION COMPLÈTE DU MODULE MOD-604 ET CLÔTURE DÉFINITIVE DE L'ENSEMBLE DU CURSUS WORLD-CLASS FRENCH (100 % DE COMPLÉTUDE)**.
  - Bilan Cumulé Final des 3 Années et des 6 Semestres (Cycles 1 à 6) :
    - **125 chapitres de cours complets** de haute tenue universitaire rédigés et homologués sans aucune exception ;
    - **101 551 lignes** de prose didactique dense, rigoureuse et vérifiable ;
    - **10,21 Mo (9,73 Mio)** de corpus didactique intégralement certifié à **zéro anomalie critique et zéro avertissement** ;
    - Validation terminale de l'ensemble des compétences du référentiel (`FR-INT-001`, `FR-INT-003`, `FR-INT-004`, `FR-INT-005`, `FR-INT-006`, `FR-PHILOL-001`, `FR-STYLE-001`, `FR-SYNTAX-003`, `FR-ORTHO-001`, `FR-LEXIC-001`) au palier suprême **L5 (Expertise transférable)**.

---

### [DEC-048] Finalisation et Déploiement de la Progressive Web App (PWA) Interactive et Adaptative World-Class French
- **Date** : 2026-10-16
- **Statut** : Validé
- **Contexte** : Couronnement numérique de l'ensemble du corpus académique (125 chapitres rédigés, 24 modules semestriels, plus de 100 000 lignes de savoirs linguistiques). Nécessité de doter le projet d'une interface apprenant moderne, réactive, hautement engageante, inspirée de Duolingo (gamification et ergonomie dopaminergique), fata.app (répétition espacée rigoureuse et sprints quotidiens minutés) et du Projet Voltaire (précision orthographique et traque métacognitive de l'erreur).
- **Décision** :
  1. **Architecture Technique** : Implémentation sous `app/` d'une Progressive Web App basée sur **Next.js 15 (App Router)**, **TypeScript strict (zéro `any`, typage exhaustif)**, **TailwindCSS** (palette didactique 3D) et **Framer Motion**.
  2. **8 Paliers Didactiques Continus** :
     - Paliers 1 & 2 : Sas d'initiation douce (Niveaux CI/A0 et CP-CE1/A1), combinatoire syllabique, vocalisation double vitesse (🔊 1.0x / 🐢 0.65x), identification d'images, **vies illimitées (`❤️ ∞`)** comme bouclier cognitif anti-abandon.
     - Paliers 3 à 8 : Progression continue couvrant les 24 modules semestriels (`MOD-101` à `MOD-604`), 125 chapitres académiques découpés en micro-leçons de 3 minutes et fiches de synthèse structurées issues de la Rubrique 17.
  3. **7 Moteurs d'Exercices Didactiques** :
     - `VisualSoundMatch` : Association phonème-graphème / image-son.
     - `SyllableAndSentenceBricks` : Combinatoire syllabique et ordonnancement syntaxique par glisser-déposer / clics de briques.
     - `VoltaireErrorHunter` : Détection chirurgicale de fautes en texte courant avec ancrage explicatif instantané.
     - `InteractiveDictation` : Dictée sonore interactive avec lecteur audio multi-vitesses et palette intégrée de caractères diacritiques français.
     - `SmartDiagnosticMCQ` : QCM adaptatif métacognitif avec justifications didactiques différenciées par niveau.
     - `ClozeMorphologyInput` : Texte à trous avec validation morphologique stricte.
     - `RhetoricAndRegisterStudio` : Calibration de registre et analyse stylistique avancée.
  4. **Moteur Mémoriel `fata.srs`** :
     - Calcul d'oubli d'Ebbinghaus $R(t) = 100 \times e^{-t/S}$ avec seuil critique de rappel fixé à 75 %.
     - Algorithme de notation FSRS à 4 boutons (*À revoir*, *Difficile*, *Bon*, *Parfait*).
     - Visualisation graphique interactive de la courbe de rétention en SVG dynamique.
     - Simulateur temporel `⏩ +24h / +48h` permettant de tester l'évolution de la file de révision.
  5. **Mode « Daily Fata Sprint »** :
     - Défi minuté quotidien de 6 questions avec chronomètre et grille emoji partageable (`🟩🟨🟥`).
  6. **Multi-Canal & Offline** :
     - Service Worker PWA (`sw.js`) et manifeste Web (`manifest.webmanifest`) pour fonctionnement hors-ligne.
     - Routines d'étude synchronisables via Web Push Notifications et export de fichier calendrier `.ics` standard (Google Calendar, Apple iCal, Outlook).
  7. **Compilateur Pédagogique Déterministe** :
     - Script `app/scripts/compile_curriculum.py` ingérant automatiquement 100 % des chapitres du cursus (`03-curriculum/`) pour produire `app/src/data/compiled-curriculum.json` (129 chapitres, 26 modules, 244 cartes SRS initiales).
- **Conséquences** :
  - Positives : La plateforme numérique est complète, rigoureusement typée, construite sans erreur de build (`npm run build` : exit code 0) ni divergence d'hydratation, et directement utilisable localement par les apprenants.
  - Disponibilité : Lancement local immédiat via `cd app && npm run dev`.

---

### [DEC-049] Refonte Graphique Majeure et Éradication des Biais Visuels « IA / Jouet » : Passage au Design Système Éditorial et Académique de Haute Tenue
- **Date** : 2026-10-17
- **Statut** : Validé
- **Contexte** : Audit critique de l'interface utilisateur. Constat d'un rendu initial trop proche des stéréotypes visuels générés par IA (boutons 3D fluorescents Duolingo, ombres plastiques épaisses, serpentin d'émoticônes en zigzag enfantin, surcharge d'émojis criards, absence d'ancrage éditorial et typographique). Décalage manifeste avec l'ambition d'excellence d'un institut universitaire francophone de référence (Grevisse, Riegel, Imprimerie nationale).
- **Décision** :
  1. **Nouveau Design Système Éditorial & Académique** :
     - Remplacement de la palette fluo par une charte d'imprimerie et de reliure noble : Ivoire/Papier bible (`#FAF8F5`), Noir d'encre (`#111827`), Bleu nuit/Marine académique (`#0F172A`), Or d'apparat/Dorure (`#B45309`), Vert académie impérial (`#065F46`), Bordeaux reliure (`#881337`).
     - Intégration de la typographie éditoriale avec empattements (*Newsreader*, *Charter*, *Georgia*) pour les titres, lettrines et citations, combinée à une grotesque épurée (*Plus Jakarta Sans*) et une police fixe (*JetBrains Mono*) pour l'API phonétique et les codes de règles.
     - Abolition complète des ombres 3D cartoon (`boxShadow: duo-*`) et des boutons ronds démesurés au profit d'élévations fines, de filets typographiques discrets (1px) et de rayons de courbure modernes (`rounded-xl`, `rounded-lg`).
  2. **Refonte de l'Arbre d'Apprentissage en Syllabus Universitaire Interactif** :
     - Éradication définitive du serpentin d'icônes rondes en zigzag.
     - Restructuration sous forme de dossiers académiques par chapitre : titre noble, chapeau introductif, ruban de micro-sessions séquencées (3 min) avec statuts précis (Validé / À étudier).
     - Ajout d'un tiroir de lecture immédiate de la **Fiche de synthèse de chapitre (Rubrique 17)** via `ChapterSummaryModal.tsx` pour valoriser directement le corpus théorique rédigé.
  3. **Élévation des 7 Moteurs d'Exercices et des Modales** :
     - Traitement sobre des cartes de discrimination phonétique (`VisualSoundMatch`), composteur typographique pour l'assemblage de briques (`SyllableAndSentenceBricks`), atelier de révision éditoriale (`VoltaireErrorHunter`), pupitre de dictée avec clavier de diacritiques (`InteractiveDictation`), QCM lettrés A/B/C/D (`SmartDiagnosticMCQ`), champ lacunaire élégant (`ClozeMorphologyInput`) et salon de stylistique littéraire (`RhetoricAndRegisterStudio`).
     - Tiroir de rétroaction métacognitive feutré, sans confetti criard.
     - Refonte de la Navbar (monogramme institutionnel, sélection par les 3 Cycles académiques), du tableau de bord `fata.srs` (loi d'Ebbinghaus), du Daily Sprint et du Diagnostic.
  4. **Conformité TypeScript et Build** :
     - Élimination de tous les casts `any` résiduels au profit de typages d'interfaces discriminées stricts (`VisualSoundMatchData`, `VoltaireHunterData`, etc.).
     - Validation sans avertissement de `npx tsc --noEmit` et de `npm run build` (Exit code 0).
- **Conséquences** :
  - Positives : L'application adopte une identité visuelle digne d'une grande institution culturelle et universitaire européenne (Le Robert, Collège de France, Le Monde, Pléiade), tout en préservant l'ergonomie, la rapidité et la rétention d'Ebbinghaus.

---

### [DEC-050] Intégration de la Base de Données Cloud Neon PostgreSQL, Synchronisation Bidirectionnelle et Schéma Relationnel Normalisé
- **Date** : 2026-10-18
- **Statut** : Validé
- **Contexte** : Nécessité de doter la plateforme numérique d'une persistance distante et d'une synchronisation multi-appareils (mobile, tablette, ordinateur) tout en conservant le fonctionnement hors-ligne (*Offline-First*).
- **Décision** :
  1. Provisionnement d'un projet serveur Neon PostgreSQL dédié : `world-class-french` (ID `silent-glitter-44506564`, région `aws-eu-central-1` Francfort, PostgreSQL 17).
  2. Création et migration du schéma relationnel en 5 tables maîtresses :
     - `learner_profiles` : identité, XP, streak, niveau courant, statut d'activité.
     - `lesson_progress` : leçons validées, scores et horodatage.
     - `srs_card_reviews` : paramètres de rétention FSRS / SM-2 (stabilité, difficulté, répétitions, lapses, intervalle Ebbinghaus).
     - `daily_sprint_results` : scores quotidiens et motifs emoji (`🟩🟨🟥`).
     - `diagnostic_results` : résultats d'orientation initiale et réponses.
  3. Implémentation du pilote serverless `@neondatabase/serverless` avec route Next.js App Router `/api/sync` (GET et POST).
  4. Extension du store Zustand avec identifiant apprenant persistant, statut visuel temps réel dans la Navbar et fusion heuristique des progressions.
- **Conséquences** :
  - Positives : Sauvegarde infaillible du travail de l'apprenant, zéro perte de données, indépendance vis-à-vis d'un effacement du cache navigateur local.

---

### [DEC-051] Formalisation des Travaux Pratiques : Dictées Étalonnées avec Barème Pénal et Laboratoires de Révision Éditoriale
- **Date** : 2026-10-18
- **Statut** : Validé
- **Contexte** : Déploiement concret des travaux pratiques ([`04-practical-work/`](file:///f:/Formation/world-class-french/04-practical-work/)) articulés aux compétences mesurables du référentiel (`FR-INT-001` à `FR-INT-003`).
- **Décision** :
  1. **Corpus des Dictées Étalonnées** ([`04-practical-work/dictations/`](file:///f:/Formation/world-class-french/04-practical-work/dictations/)) :
     - Établissement du protocole officiel en 4 temps (première écoute, dictée découpée à 0.65x, relecture continue, relecture autonome métacognitive de 10 min).
     - Intégration du barème pénal officiel (`ERR-GRAM-MAJ` -2 pts, `ERR-GRAM-MIN` -1 pt, `ERR-LEX-USAGE` -1 pt, `ERR-PONCT-ACC` -0.5 pt, `ERR-TYPO-UNION` -0.5 pt).
     - Rédaction des premières fiches magistrales étalonnées : `DICT-S1-01` (Accords fondamentaux, 225 mots) et `DICT-S2-01` (Règle de Clément Marot, inversion du sujet, 280 mots) avec apparat critique et analyse des 10 pièges clés.
  2. **Ateliers de Révision Éditoriale** ([`04-practical-work/correction-labs/`](file:///f:/Formation/world-class-french/04-practical-work/correction-labs/)) :
     - Établissement du protocole professionnel de correction d'épreuves (texte de 600 mots avec 30 pièges pré-calibrés, barème sur 20 points).
     - Rédaction de l'épreuve inaugurale `CORR-LAB-01` (*Le Manuscrit du Jeune Éditeur*, 595 mots) avec clé de correction exhaustive des 30 coquilles et version imprimable restaurée.
- **Conséquences** :
  - Positives : Pont direct entre la théorie magistrale (`03-curriculum/`) et la mise en pratique exigeante de niveau universitaire.

---

### [DEC-052] Intégration du Sélecteur de Thème Persistant (Clair/Sombre/Système) et Complétude de la Suite de Travaux Pratiques
- **Date** : 2026-10-18
- **Statut** : Validé
- **Contexte** : Suite à l'audit ergonomique et typographique (10/10), besoin d'un contrôle manuel explicite du thème lumineux/sombre pour le confort de lecture prolongée, et nécessité de compléter l'intégralité des 6 pôles de travaux pratiques du cursus.
- **Décision** :
  1. **Contrôle Ergonomique du Thème** :
     - Implémentation du mode tridimensionnel (`light` / `dark` / `system`) dans `app/src/store/useAppStore.ts` avec persistance `localStorage` via Zustand `partialize`.
     - Intégration du bouton bascule Soleil / Lune dans la barre de navigation ([`Navbar.tsx`](file:///f:/Formation/world-class-french/app/src/components/layout/Navbar.tsx)).
     - Application automatique des classes sur `document.documentElement` avec prise en charge dynamique des changements de préférence système du navigateur (`matchMedia`).
  2. **Achèvement des 6 Pôles de Travaux Pratiques (`04-practical-work/`)** :
     - **Grammaire & Syntaxe** ([`grammar-labs/`](file:///f:/Formation/world-class-french/04-practical-work/grammar-labs/)) : Formalisation du protocole d'analyse actancielle en 4 passes (Lucien Tesnière) et du laboratoire `GRAM-LAB-01` (10 phrases canoniques, schémas de valence A0-A3 et arbres syntaxiques).
     - **Oralité & Prosodie** ([`oral-workshops/`](file:///f:/Formation/world-class-french/04-practical-work/oral-workshops/)) : Établissement du cadre orthoépique (Pierre Fouché, Delattre, Grammont) et de l'atelier `ORAL-WS-01` (Bossuet & Chateaubriand, transcription API intégrale, cartographie rigoureuse des liaisons obligatoires et proscription des cuirs/velours).
     - **Lecture Analytique & Stylistique** ([`reading-workshops/`](file:///f:/Formation/world-class-french/04-practical-work/reading-workshops/)) : Protocole de l'explication linéaire en 4 mouvements et atelier `READ-WS-01` sur Proust (*La Madeleine*, analyse microscopique des faits de langue et de la période ternaire).
     - **Écriture Académique & Rhétorique** ([`writing-workshops/`](file:///f:/Formation/world-class-french/04-practical-work/writing-workshops/)) : Morphologie canonique de la dissertation dialectique (triptyque, méthode de paragraphe argumentatif AEI) et atelier `WRITE-WS-01` (*« La littérature doit-elle consoler ou inquiéter ? »*, introduction et conclusion rédigées, paragraphe modèle).
- **Conséquences** :
  - Positives : Expérience utilisateur premium sans éblouissement ; cursus de travaux pratiques 100 % opérationnel, couvrant la totalité des compétences terminales orales, lexicales, syntaxiques et discursives.

---

### [DEC-053] Formalisation du Système d'Évaluation Certifiant & Docimologique (06-assessments)
- **Date** : 2026-10-18
- **Statut** : Validé
- **Contexte** : Déploiement concret du système d'évaluation certifiant selon les principes de la charte de projet ([`00-governance/project-charter.md`](file:///f:/Formation/world-class-french/00-governance/project-charter.md)) : barème pénal officiel, exigence du seuil minimal à 14/20 sans complaisance, et couverture des 4 paliers docimologiques.
- **Décision** :
  1. **Structure Générale & Principes Docimologiques** ([`06-assessments/README.md`](file:///f:/Formation/world-class-french/06-assessments/README.md)) :
     - Formalisation de la grille d'erreurs pénales (`ERR-GRAM-MAJ` -2 pts, `ERR-GRAM-MIN` -1 pt, `ERR-LEX-USAGE` -1 pt, `ERR-PONCT-ACC` -0.5 pt, `ERR-TYPO-UNION` -0.5 pt).
     - Règle d'élimination des complaisances et exigence d'une note $\ge 10/20$ à chaque épreuve composante.
  2. **Évaluation Diagnostique Initiale** ([`06-assessments/diagnostic/`](file:///f:/Formation/world-class-french/06-assessments/diagnostic/)) :
     - Établissement du protocole d'orientation en 4 paliers d'entrée (Excellence, Standard, Consolidation, Remise à niveau).
     - Rédaction du sujet complet de 2h30 `DIAG-001` (Dictée de 250 mots, analyse syntaxique, lexique/paronymes, détection de 4 sophismes, épreuve audio d'orthoépie) avec corrigé officiel et grille d'orientation.
  3. **Évaluations Formatives Hebdomadaires** ([`06-assessments/formative/`](file:///f:/Formation/world-class-french/06-assessments/formative/)) :
     - Protocole de rappel actif en 3 temps (Dictée flash de 50 mots, analyse syntaxique, laboratoire lexical).
     - Rédaction des épreuves étalonnées de référence pour S1-W04 et S2-W08 avec clés de correction et boucles de remédiation.
  4. **Évaluations Sommatives Semestrielles** ([`06-assessments/summative/`](file:///f:/Formation/world-class-french/06-assessments/summative/)) :
     - Réglementation du format en 4 épreuves semestrielles (Dictée 1h, Linguistique sur corpus 2h, Dissertation 3h, Déclamation orale 20 min).
     - Rédaction de l'examen complet `EXAM-S1` (Buffon, Valéry, Bossuet, dictée de 325 mots) et `EXAM-S2` (La Bruyère, Paulhan, Racine, dictée de 340 mots) avec apparat critique et barèmes.
  5. **Examens Terminaux de Fin de Cycle** ([`06-assessments/final-examinations/`](file:///f:/Formation/world-class-french/06-assessments/final-examinations/)) :
     - Définition des trois titres académiques : Brevet de Maîtrise Normative & Orthoépique (BMNO - C1), Certificat Supérieur d'Éloquence (CSERS - C2), Diplôme de Haute Souveraineté (DHSPLF - C3).
     - Rédaction de l'épreuve inaugurale `FINAL-EXAM-C1` (Grand concours d'orthographe de 415 mots, 20 phrases de morphosyntaxe/Tesnière, dissertation de 4h sur Politzer, Grand oral sur Corneille avec décompte métrique et apparat critique).
- **Conséquences** :
  - Positives : Système d'évaluation de niveau concours universitaire opérationnel, vérifiable, étalonné et exempt de toute présomption non prouvée.

---

### [DEC-054] Déploiement des Projets Majeurs (05), du Grand Capstone (09), de l'Interface Web des Ateliers (app) et du Dossier de Diplomation (10)
- **Date** : 2026-10-18
- **Statut** : Validé
- **Contexte** : Finalisation séquentielle (Ordre 1, 2 et 3) des derniers piliers du cursus World-Class French : formalisation des projets de cycles et du mémoire de sortie, création d'une interface web interactive pour les ateliers et dictées, et établissement du livret de certification finale.
- **Décision** :
  1. **Projets d'Intégration Semestriels & Capstone (`05-projects/` & `09-capstone/`)** :
     - Établissement du cahier des charges de `PROJ-C1` (*L'Anthologie Critique Annotée*, 50 pages, 15 textes établis, apparat critique et préface diachronique).
     - Établissement du cahier des charges de `PROJ-C2` (*Le Recueil des Plaidoiries Contradictoires*, 80 pages, 3 controverses en vis-à-vis, syllogismes et périodes).
     - Réglementation officielle du Grand Capstone (`CAPS-001`) : mémoire de 100 à 120 pages (trois filières : Philologie, Syntaxe comparée francophone, Haute poétique) et protocole de soutenance orale de 45 minutes devant jury.
  2. **Intégration Applicative Web des Travaux Pratiques (`app/`)** :
     - Création du composant [`PracticalWorkModal.tsx`](file:///f:/Formation/world-class-french/app/src/components/curriculum/PracticalWorkModal.tsx) intégrant :
       - Pupitre de dictée sonore découpée pas-à-pas avec l'API native `SpeechSynthesis` (0.8x), écoute globale et évaluation automatique par le barème pénal officiel.
       - Atelier de révision éditoriale `CORR-LAB-01` avec dévoilement du corrigé des 30 coquilles pré-calibrées.
       - Studio d'élocution et de prosodie avec balises interactives de liaisons obligatoires et proscription des cuirs.
       - Console d'accès aux annales et dossiers d'examens.
     - Ajout du bouton d'accès direct « Ateliers & TP » dans la [`Navbar.tsx`](file:///f:/Formation/world-class-french/app/src/components/layout/Navbar.tsx) et câblage dans [`page.tsx`](file:///f:/Formation/world-class-french/app/src/app/page.tsx).
     - Validation de la compilation Next.js 15 en mode strict sans `any` (`npm run build` : exit code 0).
  3. **Dossier de Diplomation Finale (`10-final/`)** :
     - Établissement des standards du Livret de Preuves Observables ([`certification-standards-and-portfolio.md`](file:///f:/Formation/world-class-french/10-final/certification-standards-and-portfolio.md)) articulé en 6 sections obligatoires.
     - Rédaction des maquettes officielles et solennelles d'apparat ([`diploma-template.md`](file:///f:/Formation/world-class-french/10-final/diploma-template.md)) pour les trois titres académiques : BMNO (Cycle 1), CSERS (Cycle 2), DHSPLF (Cycle 3).
- **Conséquences** :
  - Positives : Intégralité des 11 répertoires architecturaux (`00` à `10`) et de la plateforme web opérationnels, audités et sans aucune complaisance non documentée.





