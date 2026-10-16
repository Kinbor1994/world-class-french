# World-Class French

> Cursus d'excellence pour la maîtrise approfondie, académique et pratique de la langue française.

---

## 1. Présentation du projet

**World-Class French** est un projet d'ingénierie pédagogique et linguistique de haut niveau. Il vise à bâtir un curriculum complet, progressif et rigoureusement documenté, permettant d'amener un apprenant d'un niveau intermédiaire ou avancé vers une maîtrise d'élite (C1-C2+, niveau universitaire et rédaction professionnelle d'excellence).

Le projet s'appuie sur :
- Les fondements de la linguistique française (phonétique/phonologie, morphologie, syntaxe, sémantique, pragmatique, stylistique).
- Les ouvrages de référence faisant autorité (*Le Bon Usage* de Grevisse & Goosse, *Grammaire méthodique du français* de Riegel, Pellat & Rioul).
- Une pédagogie active, spiralée et vérifiable par des preuves observables de maîtrise.

---

## 2. Structure du dépôt

```text
world-class-french/
├── 00-governance/               # Charte, règles de fonctionnement, journal des décisions et changelog
├── 01-architecture/             # Cartographie du cursus, structure académique et principes de progression
├── 02-competency-framework/     # Référentiel de compétences, niveaux de maîtrise et grilles d'évaluation
├── 03-curriculum/               # Contenus d'enseignement structurés par année (Year 1 à Year 3)
│   ├── year-1/
│   ├── year-2/
│   └── year-3/
├── 04-practical-work/           # Travaux pratiques et laboratoires d'entraînement
│   ├── dictations/              # Dictées d'apprentissage et de contrôle
│   ├── grammar-labs/            # Ateliers d'analyse et manipulation syntaxique
│   ├── writing-workshops/       # Ateliers d'écriture et de rédaction
│   ├── oral-workshops/          # Ateliers d'éloquence et prononciation
│   ├── reading-workshops/       # Lecture analytique et stylistique
│   └── correction-labs/         # Révision de texte et correction d'épreuves
├── 05-projects/                 # Projets intégrateurs et études de cas
├── 06-assessments/              # Évaluations diagnostiques, formatives, sommatives et examens
│   ├── diagnostic/
│   ├── formative/
│   ├── summative/
│   └── final-examinations/
├── 07-resources/                # Registre des sources fiables, matrice de couverture et plan NotebookLM
├── 08-audits/                   # Protocoles et rapports d'audits pédagogiques, linguistiques et qualité
│   ├── pedagogical/
│   ├── linguistic/
│   └── world-class/
├── 09-capstone/                 # Projet terminal de fin de cursus
├── 10-final/                    # Livrables validés, synthèses et publications finales
├── GEMINI.md                    # Instructions agent locales Antigravity
└── README.md                    # Vue d'ensemble du projet
```

---

## 3. État d'avancement

- [x] **Étape 1** : Initialisation du workspace, arborescence, gouvernance et registres.
- [x] **Étape 2** : Établissement de la bibliographie de référence et du plan d'ingestion NotebookLM.
- [x] **Étape 3** : Cartographie détaillée de l'architecture académique et du graphe des prérequis.
- [x] **Étape 4** : Référentiel précis des compétences et barèmes d'évaluation.
- [x] **Étape 5** : Élaboration du curriculum Année 1 (Semestres 1 & 2 — 8 modules).
- [x] **Étape 6** : Élaboration du curriculum Année 2 (Semestres 3 & 4 — 8 modules).
- [x] **Étape 7** : Élaboration du curriculum Année 3 (Semestres 5 & 6 — 8 modules).
- [x] **Étape 8** : Travaux pratiques, projets intégrateurs et épreuves sommatives.
- [x] **Étape 9** : Audits déterministes automatisés et homologation 100 % (125 chapitres rédigés et certifiés).
- [x] **Étape 10** : Progressive Web App (PWA) interactive et adaptative (`app/`) avec 8 paliers continus, 7 moteurs d'exercices, répétition espacée `fata.srs` et daily sprint.

---

## 4. Gouvernance et conventions

- **Statut des documents** : Tout document non formellement validé est étiqueté `[STATUT : BROUILLON]`.
- **Historique des décisions** : Toute décision architecturale ou pédagogique majeure est consignée dans [`00-governance/decisions-log.md`](file:///f:/Formation/world-class-french/00-governance/decisions-log.md).
- **Suivi des modifications** : Tout ajout ou révision fait l'objet d'une entrée dans [`00-governance/changelog.md`](file:///f:/Formation/world-class-french/00-governance/changelog.md).
- **Règles locales** : Les directives de conduite de l'agent sont consignées dans [`GEMINI.md`](file:///f:/Formation/world-class-french/GEMINI.md).

---

## 5. Application Web Interactive & Adaptative (`app/`)

Le dossier [`app/`](file:///f:/Formation/world-class-french/app/) abrite la **Progressive Web App (PWA)** World-Class French développée sous **Next.js 15 (App Router), TypeScript strict, TailwindCSS et Framer Motion** :

- **8 Paliers Didactiques Continus** : du Niveau CI / A0 (sons, combinatoire `ba, ma`, mots illustrés, vies `❤️ ∞`) jusqu'au Niveau C2+ (rhétorique, art oratoire, diplomatie).
- **7 Moteurs d'Exercices Interactifs** : `VisualSoundMatch`, `SyllableAndSentenceBricks`, `VoltaireErrorHunter`, `InteractiveDictation` (double vitesse `1.0x` / `0.65x` et clavier d'accents), `SmartDiagnosticMCQ`, `ClozeMorphologyInput` et `RhetoricAndRegisterStudio`.
- **Moteur de Rappel Espacé (`fata.srs`)** : loi d'Ebbinghaus, courbe interactive SVG, seuil d'oubli à 75%, algorithme FSRS et simulateur temporel `+24h`.
- **Daily Fata Sprint** : défi quotidien minuté à 6 questions avec rapport de partage emoji (`🟩🟨🟥`).
- **Routine Quotidienne Multi-Canal** : Notifications Web Push et export d'agenda `.ics` pour Google Calendar / Apple Calendar.

### Démarrage local de l'application :

```bash
cd app
npm run dev        # Lance le serveur local sur http://localhost:3000
npm run build      # Compile et vérifie les types de production
npm run compile-curriculum # Recompile la banque pédagogique JSON
```

