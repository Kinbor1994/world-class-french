# Plan d'Importation et d'Exploitation de NotebookLM

> **Statut** : [STATUT : BROUILLON]  
> **Date de création** : 2026-10-11  
> **Dernière révision** : 2026-10-11  

---

## 1. Rôle et Périmètre de NotebookLM

Dans l'écosystème **World-Class French**, NotebookLM constitue la **bibliothèque d'étude fermée** et l'outil de référence documentaire principal :
- **Principe de clôture documentaire** : NotebookLM n'a pas accès à l'ensemble du web, mais uniquement aux documents qui y ont été explicitement importés.
- **Principe d'ancrage (grounding)** : Toute réponse de l'agent prétendant s'appuyer sur la bibliothèque doit identifier précisément la source interne (titre du document importé, chapitre, page ou section).
- **Principe de démarcation** : Si une information provient d'une recherche extérieure ou de connaissances générales du modèle, elle doit être explicitement signalée comme `[Source extérieure à la bibliothèque / à vérifier]`.

---

## 2. Découpage des Carnets (Notebooks Thématiques)

Afin d'optimiser la pertinence des réponses et de respecter les limites d'ingestion de NotebookLM, la bibliothèque est segmentée en 4 carnets d'étude distincts :

```text
NOTEBOOKS THÉMATIQUES NOTEBOOKLM
├── NBLM-01 : Grammaire Fondamentale et Norme Prescriptive
│   └── Sources : Le Bon Usage (extraits clés), Petit Grevisse, Rectifications de 1990
├── NBLM-02 : Linguistique Universitaire et Syntaxe Méthodique
│   └── Sources : Grammaire méthodique du français, Terminologie grammaticale (MEN)
├── NBLM-03 : Stylistique, Rhétorique et Poétique
│   └── Sources : Traités de Fontanier, Molinié, Reboul, corpus d'exemples classiques
└── NBLM-04 : Didactique, Évaluation et Référentiels CECRL
    └── Sources : Volume complémentaire CECRL, Quelle grammaire enseigner ?, barèmes de concours
```

---

## 3. Protocole d'Ingestion Documentaire

1. **Format des fichiers importés** : PDF textuels haute fidélité (OCR vérifié) ou exports Markdown structurés avec titres hiérarchisés.
2. **Métadonnées obligatoires par document importé** :
   - Titre exact et auteurs.
   - Édition et date de publication.
   - Identifiant de source correspondant dans [`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md).
3. **Contrôle d'intégrité après import** :
   - Exécution d'une requête test de vérification pour s'assurer que NotebookLM cite fidèlement la pagination et le texte source sans hallucination.

---

## 4. Règles d'Interaction de l'Agent avec NotebookLM

Lors de la rédaction ou de l'audit d'un chapitre du cursus :
1. **Consulter prioritairement les synthèses et notes extraites de NotebookLM.**
2. **Indiquer clairement si la source documentaire est confirmée dans le carnet.**
3. **En cas d'absence de source dans le carnet, stopper toute affirmation péremptoire et documenter le besoin d'importation.**
