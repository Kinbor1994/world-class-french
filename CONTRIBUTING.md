# Guide de Contribution & Normes d'Ingénierie (World-Class Standards)

Bienvenue sur le projet **World-Class French**. Ce projet combine l'ingénierie logicielle moderne (Next.js 15, TypeScript strict, Neon PostgreSQL) et la plus haute exigence académique de linguistique française.

Toute contribution est attendue au standard de qualité **World-Class (10/10)**, sans compromis ni code d'approximation.

---

## 1. Principes Git & Workflow de Développement

Nous appliquons une stratégie **Trunk-Based Development** avec des branches courtes et des revues rigoureuses :

```text
main ─────●────●────●────●────●─── (Toujours déployable en production)
           \  /      \  /
            ●         ●          (Branches de fonctionnalités courtes)
```

### Règles Non Négociables
1. **Commits Atomiques** : Chaque commit ne résout qu'un seul problème et peut être annulé unitairement (`revert`).
2. **Format Conventional Commits obligatoire** :
   - `feat(...)`: Nouvelle fonctionnalité applicative ou nouveau laboratoire
   - `fix(...)`: Correction d'un bug ou d'une coquille philologique
   - `docs(...)`: Documentation, gouvernance, changelog
   - `refactor(...)`: Restructuration de code sans modification fonctionnelle
   - `perf(...)`: Optimisation de performance ou de rendu
   - `test(...)`: Tests automatisés ou scripts d'audit
3. **Branches explicites** :
   - `feat/nom-fonctionnalite`
   - `fix/nom-anomalie`
   - `docs/mise-a-jour`
4. **Pas de push forcé sur `main`** : Toute fusion s'effectue après validation complète du build de production (`npm run build`).

---

## 2. Standards Techniques pour le Code (`app/`)

### A. TypeScript Strict (Zéro tolérance pour `any`)
- Aucun type `any` n'est toléré dans le code source (`strict: true`, `noImplicitAny: true`, `noUncheckedIndexedAccess: true`).
- Les types doivent être exhaustifs et modéliser fidèlement le domaine linguistique (`types/curriculum.ts`).
- Aucun cast non sécurisé (`as any`, `as unknown as T`) n'est accepté.

### B. Accessibilité & Design Éditorial (WCAG 2.2 AA)
- Les composants doivent respecter les ratios de contraste minimaux (7:1 pour le texte courant, 4.5:1 pour les grands titres).
- Les boutons interactifs et icônes doivent offrir une zone tactile minimale de $\ge 40 \times 40\,\text{px}$.
- Focus visible universel (`:focus-visible` avec anneau or/ambre contrasté) et prise en charge native de `@media (prefers-reduced-motion: reduce)`.

---

## 3. Standards Académiques pour le Curriculum (`00` à `10`)

- **Sources Primaires Reconnues** : Toute affirmation grammaticale doit être vérifiée auprès des autorités normatives (*Le Bon Usage* de Grevisse & Goosse, *Grammaire méthodique du français* de Riegel, Pellat & Rioul).
- **Format Canonnique des Chapitres** : Tout chapitre rédigé respecte scrupuleusement la structure en 17 rubriques canoniques définie dans [`00-governance/chapter-writing-guidelines.md`](./00-governance/chapter-writing-guidelines.md).
- **Barème Pénal Officiel** : Les dictées et évaluations appliquent impérativement la grille docimologique officielle (`ERR-GRAM-MAJ` : -2 pts, `ERR-GRAM-MIN` : -1 pt, `ERR-LEX-USAGE` : -1 pt, etc.).

---

## 4. Démarrage Local & Vérification avant PR

```bash
# 1. Cloner le dépôt
git clone https://github.com/Kinbor1994/world-class-french.git
cd world-class-french/app

# 2. Installer les dépendances
npm ci

# 3. Configurer l'environnement
cp .env.example .env.local

# 4. Lancer les vérifications
npm run build      # Doit sortir avec un code 0 sans aucune erreur TypeScript
npm run dev        # Démarrer le serveur de développement local
```
