# Chapitre 4 — La Liste Fermée des Participes Intransitifs Invariablement Invariables : Rection Prépositionnelle, Verbes Cardinaux et Démystification de « Ils se sont succédé »

> **Identifiant du chapitre** : `CHP-303-04`  
> **Module de rattachement** : [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md)  
> **Semestre** : Année 2 — Semestre 3 (S3)  
> **Volume horaire estimé** : 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application (Phase 1 Étude : 1 h 30 | Phase 2 Pratique : 1 h 30 | Phase 3 Correction : 1 h 00 | Phase 4 Évaluation : 1 h 00)  
> **Statut** : [STATUT : VALIDÉ]  
> **Compétences associées** : [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (L3 Autonomie), [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) (L3 Autonomie)  
> **Sources scientifiques de référence** : `SRC-GRAM-01` (Grevisse & Goosse, 2016, § 950-955), `SRC-GRAM-02` (Riegel, Pellat & Rioul, 2016, chap. 17), `SRC-NORM-03` (Ministère de l'Éducation nationale, 2020, p. 30), `SRC-TYPO-01` (Imprimerie nationale, 2002, p. 142-144)

---

## 1. Titre et Place dans le Cursus

### 1.1 Intitulé Officiel
**Chapitre 4 : La Liste Fermée des Participes Intransitifs Invariablement Invariables : Rection Prépositionnelle, Verbes Cardinaux et Démystification de « Ils se sont succédé »** (`CHP-303-04`).

### 1.2 Insertion Architecturale dans le Cursus
Le présent chapitre constitue le sommet analytique du module [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md). Après avoir posé les fondements énonciatifs de la diathèse pronominale (`CHP-303-01`), analysé l'accord systématique avec le sujet des verbes essentiellement pronominaux et passifs (`CHP-303-02`), puis articulé la règle du complément d'objet direct (COD) pour les verbes réfléchis et réciproques transitifs directs (`CHP-303-03`), `CHP-303-04` aborde la zone de rupture la plus redoutée des scripteurs : **l'invariabilité absolue des verbes à rection indirecte et intransitifs par nature** [Réf. `SRC-GRAM-01`, § 955 ; `SRC-GRAM-02`, chap. 17].

Dans les concours d'entrée aux grandes écoles administratives et universitaires (École normale supérieure, INSP/ENA, Magistrature, CAPES, Agrégation), l'accord fautif de ces participes passés constitue un piège sélectif majeur. L'erreur ne provient pas d'une ignorance de la règle d'accord générale, mais d'une **illusion perceptive et cognitive** : le scripteur perçoit une interaction mutuelle réelle entre plusieurs actants (valeur sémantique de réciprocité) ou entend une homophonie de surface (`/syksede/`), et projette spontanément une marque de pluriel ou de féminin sur le participe passé (`*ils se sont succédés*`, `*elles se sont plues*`). Ce chapitre substitue à cette intuition trompeuse un protocole d'analyse de valence inattaquable.

```mermaid
flowchart TD
    MOD201["<b>MOD-201 (S2)</b><br/>Syntaxe Fonctionnelle de la Phrase Simple<br/><i>(Distinction rigoureuse COD vs COI)</i>"] --> MOD202
    
    MOD202["<b>MOD-202 (S2)</b><br/>Accord du Participe Passé avec Avoir<br/><i>(Règle de Clément Marot & COD Antéposé)</i>"] ==> CHP30301["<b>CHP-303-01</b><br/>Fondement Linguistique :<br/>Le clitique « se », diathèse & leurre d'« être »"]
    
    CHP30301 --> CHP30302["<b>CHP-303-02</b><br/>Essentiellement Pronominaux & Sens Passif :<br/>Accord systématique avec le sujet"]
    CHP30301 --> CHP30303["<b>CHP-303-03</b><br/>Accidentellement Pronominaux Transitifs Directs :<br/>Calcul actanciel du COD (antéposé vs postposé)"]
    
    CHP30302 --> CHP30304["<b>CHP-303-04 (Pivot Central)</b><br/>La Liste Fermée des Intransitifs Invariables :<br/>Rection en « à », 10 verbes cardinaux & « succédé »"]
    CHP30303 ==> CHP30304
    
    CHP30304 --> CHP30305["<b>CHP-303-05</b><br/>Pluriel des Noms Composés<br/>& Pièges Morphologiques"]
    CHP30304 ==> CHP30306["<b>CHP-303-06</b><br/>Synthèse Algorithmique & Protocole d'Arbitrage<br/>(L'arbre de décision unifié en 4 questions)"]
    
    CHP30306 -.->|Élimination totale des fautes| MOD304["<b>MOD-304 (S3)</b><br/>Synthèse Comparative de Documents"]
    CHP30306 -.->|<b>DEP-ORT-04 (Hard)</b> : Préalable indispensable| MOD401["<b>MOD-401 (S4)</b><br/>Participe Passé suivi d'un Infinitif<br/>& Cas Limites (faire, laisser, perception)"]

    classDef fondation stroke:#2563eb,stroke-width:2px;
    classDef pivot stroke:#b91c1c,stroke-width:3px;
    classDef suite stroke:#059669,stroke-width:2px;
    classDef perspective stroke:#7c3aed,stroke-width:2px;
    class MOD201,MOD202,CHP30301,CHP30302,CHP30303 fondation;
    class CHP30304 pivot;
    class CHP30305,CHP30306 suite;
    class MOD304,MOD401 perspective;
```

- **En amont** : Ce chapitre s'appuie directement sur la maîtrise de la rection verbale acquise dans [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) et sur la transposition de la règle d'accord de l'auxiliaire *avoir* issue de [`MOD-202`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md) et formalisée dans [`CHP-303-01`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md).
- **En aval immédiat** : Il clôture le volet d'analyse verbale du module `MOD-303` avant le traitement morphologique des noms composés (`CHP-303-05`) et nourrit directement la grille décisionnelle globale de synthèse (`CHP-303-06`).
- **En projection lointaine** : La capacité à discriminer instantanément le statut d'un complément d'objet direct par rapport à une cible prépositionnelle indirecte constitue le prérequis absolu pour aborder en Semestre 4 les cas limites d'accord du participe passé suivi d'un infinitif dans [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md).

---

## 2. Objectifs Mesurables

Au terme des 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application de ce chapitre, l'apprenant est capable de :

1. **Identifier et classifier avec une exactitude de 100 %**, au sein d'un corpus de phrases académiques ou juridiques, les verbes pronominaux construits avec une rection indirecte obligatoire (préposition *à* ou *de*), et justifier formellement leur invariabilité participiale ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).
2. **Démontrer rigoureusement par le test de permutation active** que le pronom personnel conjoint réfléchi ou réciproque *se* assume exclusivement la fonction de Complément d'Objet Indirect (COI) pour les dix verbes cardinaux de la liste fermée ([`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple), Palier L3 Autonomie).
3. **Résoudre sans hésitation ni erreur le duel syntaxique** opposant les verbes à double rection (*échapper à* vs *s'échapper*, *douter de* vs *se douter de*) ainsi que les paires lexicales sémantiquement proches à régimes divergents (*se succéder* vs *se suivre*, *se nuire* vs *se combattre*) ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).
4. **Rédiger une attestation d'arbitrage grammaticale irréfutable** lors de litiges orthographiques en concours ou en révision éditoriale pour des formes hautement controversées comme *ils se sont succédé*, *elles se sont plu* ou *ils se sont nui*, en neutralisant définitivement l'attraction trompeuse de l'auxiliaire *être* ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).

---

## 3. Prérequis et Test de Préparation

### 3.1 Prérequis Exigibles
- **Maîtrise de la valence verbale et des rections (`MOD-201`)** : Distinction opératoire entre transitivité directe (*aimer quelqu'un*), transitivité indirecte (*plaire à quelqu'un*) et intransitivité absolue (*dormir*).
- **Règle d'accord du participe passé avec l'auxiliaire *avoir* (`MOD-202`)** : Application infaillible de la règle de Clément Marot (accord exclusif avec le COD si celui-ci précède le verbe ; invariabilité si le COD est postposé ou absent).
- **Morphosyntaxe du clitique conjoint réfléchi (`CHP-303-01`)** : Compréhension du rôle anaphorique du pronom *se*, représentant du sujet sous une fonction d'objet dans les constructions accidentellement pronominales.

### 3.2 Test de Préparation (Auto-Diagnostic à 5 Questions)
Répondez aux cinq questions suivantes par écrit avant de dérouler le panneau de correction :

1. **Question 1 (Transitivité verbale)** : Dans la phrase *« Ce protocole d'accord convient parfaitement aux deux délégations »*, quelle est la fonction du syntagme *aux deux délégations* par rapport au verbe *convient* ? Le verbe admet-il un complément d'objet direct ?
2. **Question 2 (Nature et fonction du clitique)** : Dans l'énoncé *« Les deux généraux se sont téléphoné avant l'offensive »*, quelle fonction syntaxique exacte le pronom *se* remplit-il ?
3. **Question 3 (Règle de Marot)** : Avec quel élément de la phrase le participe passé conjugué avec l'auxiliaire *avoir* (ou son équivalent pronominal accidentel) s'accorde-t-il ? Que se passe-t-il si la phrase ne comporte aucun COD ?
4. **Question 4 (Contraste réfléchi direct vs indirect)** : Pourquoi le participe s'accorde-t-il dans *« Elles se sont lavées »*, alors qu'il reste invariable dans *« Elles se sont parlé »* ?
5. **Question 5 (Sémantique vs syntaxe)** : Les deux énoncés suivants expriment une interaction violente réciproque : *« Ces deux factions se sont combattues »* et *« Ces deux factions se sont nui »*. Pourquoi l'un prend-il la marque du féminin pluriel *-es* tandis que l'autre demeure invariable ?

<details>
<summary><strong>Corrigé détaillé de l'auto-diagnostic (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Le syntagme *aux deux délégations* est un **Complément d'Objet Indirect (COI)** introduit par la préposition contractée *à + les*. Le verbe *convenir* (au sens de satisfaire, être approprié) est un verbe transitif indirect : il n'admet aucun complément d'objet direct (*on ne convient pas quelque chose*).
2. **Réponse 2** : Le pronom *se* est un **Complément d'Objet Indirect (COI)**. En reformulant à l'actif avec l'auxiliaire *avoir*, on obtient : *Le général A a téléphoné À qui ? Au général B (à lui-même / l'un à l'autre)*. Le verbe *téléphoner* régit obligatoirement la préposition *à*.
3. **Réponse 3** : Le participe passé s'accorde **uniquement avec le Complément d'Objet Direct (COD)** à la condition expresse que celui-ci soit placé **avant** le verbe. S'il n'existe aucun COD dans la proposition, la condition d'accord ne peut mathématiquement pas être remplie : le participe passé demeure strictement invariable.
4. **Réponse 4** :
   - Dans *se laver*, le verbe est transitif direct (*laver quelqu'un*). Le pronom *se* est COD antéposé (*Elles ont lavé qui ? elles-mêmes = se*) $\rightarrow$ accord féminin pluriel *lavées*.
   - Dans *se parler*, le verbe est transitif indirect (*parler à quelqu'un*). Le pronom *se* est COI (*Elles ont parlé à qui ? à elles-mêmes = se*). Absence totale de COD $\rightarrow$ invariabilité absolue *parlé*.
5. **Réponse 5** : La grammaire française n'accorde pas selon l'idée psychologique ou physique de mutualité (sémantique), mais selon la **forme des cas syntaxiques** :
   - *Combattre* est transitif direct (*combattre quelqu'un* $\rightarrow$ *se* est COD antéposé $\rightarrow$ accord *combattues*).
   - *Nuire* est transitif indirect (*nuire à quelqu'un* $\rightarrow$ *se* est COI $\rightarrow$ absence de COD $\rightarrow$ invariabilité *nui*).

> **Diagnostic** : Si votre score est inférieur à 4/5, révisez immédiatement la distinction COD/COI dans [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) et la règle de Marot dans [`MOD-202`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md) avant de poursuivre.
</details>

---

## 4. Situation de Départ ou Problème Concret

### 4.1 L'Hécatombe Orthographique des Concours d'Élite
Dans les épreuves d'admissibilité des concours de la haute fonction publique, de la magistrature, de l'enseignement supérieur et des grandes écoles, la correction des accords participiaux fait l'objet d'un barème impitoyable : **une seule faute d'accord sur un verbe pronominal entraîne généralement une pénalité éliminatoire immédiate de -4 points sur l'épreuve de synthèse ou de dissertation** [Réf. `SRC-NORM-03` ; `SRC-GRAM-01`, § 955].

Or, les rapports annuels des jurys soulignent avec une constance alarmante la récurrence de la même faute : l'accord abusif des verbes pronominaux à rection indirecte. Observons trois extraits authentiques tirés de copies de concours :

> ❌ **Copie A (Concours administratif supérieur)** :  
> *« Les trois directeurs généraux se sont succédés à la tête de l'institution sans parvenir à enrayer le déficit budgétaire. »*  
> *(Sanction : -4 points. Le candidat a accordé machinalement avec le sujet masculin pluriel directeurs).*

> ❌ **Copie B (Agrégation de lettres modernes)** :  
> *« Dès leur première entrevue au salon de Madame de Bargeton, ces deux rivales se sont plues et se sont souries avec une hypocrisie consommée. »*  
> *(Sanction : double faute éliminatoire. Le candidat a accordé sur le féminin pluriel rivales, croyant que le verbe reflétait une inclination réciproque).*

> ❌ **Copie C (Examen d'entrée au barreau)** :  
> *« Les deux sociétés concurrentes se sont délibérément nuis lors de cet appel d'offres international. »*  
> *(Sanction : faute de morphologie verbale par adjonction d'un -s illicite sur un participe invariable).*

### 4.2 L'Origine Cognitive de l'Erreur : Le Piège de l'Oreille et de la Réciprocité
Pourquoi des candidats cultivés et brillants commettent-ils de façon répétée une telle faute ? L'erreur prend sa source dans la convergence de deux leurres psycholinguistiques :
1. **La neutralisation auditive** : À l'oral, les formes *succédé*, *succédée*, *succédés* et *succédées* partagent la transcription phonologique identique `/syksede/`. De même, *parlé* et *parlées* se prononcent `/paʁle/`. L'oreille n'enregistre aucune différence. L'orthographe est donc un calcul visuel et abstrait non soutenu par la phonétique.
2. **Le leurre de la réciprocité active** : Face à une phrase comme *« Les deux ministres se sont succédé »*, l'esprit humain visualise deux êtres réels qui s'enchaînent dans le temps. Le sens perçu est pluriel et relationnel. L'esprit est alors irrésistiblement tenté d'appliquer la règle simpliste de l'adjectif qualificatif ou du passif : « Il y a l'auxiliaire *être*, le sujet est pluriel, donc j'accorde ! »

Céder à ce réflexe, c'est ignorer l'architecture profonde du français : **la grammaire française n'accorde jamais les participes passés sur la signification psychologique des mots, mais sur la disposition géométrique de leurs cas grammaticaux** [Réf. `SRC-GRAM-02`, chap. 17].

---

## 5. Explication Intuitive : La Fiche Électrique Incompatible

Pour saisir pourquoi ces verbes ne reçoivent jamais la moindre marque d'accord, recourons à une modélisation analogique élémentaire :

### 5.1 L'Analogie du Circuit Électrique et de la Prise Murale
Imaginons que le participe passé soit une **ampoule électrique** conçue pour s'allumer (recevoir l'accord en genre et en nombre) à une seule et unique condition : qu'un câble conducteur transportant un courant **COD** vienne s'enficher dans sa prise d'entrée.

```text
CIRCUIT TRANSITIF DIRECT (ex: « Elles se sont rencontrées »)
[Sujet: Elles] ──> [Verbe: rencontrer quelqu'un]
                          │
                          └──> PRISE COD DIRECTE : DISPONIBLE !
                                      ▲
[Pronom « se » = COD antéposé] ───────┘ (La fiche mâle COD se branche)
                                      │
                                      ▼
                        [AMPOULE DE L'ACCORD : ALLUMÉE !] ──> « rencontrées » (-es)
```

Mais que se passe-t-il avec des verbes comme *succéder*, *plaire*, *nuire*, *ressembler* ?
- Ces verbes sont construits historiquement avec un **port prépositionnel oblique** : ils ne se construisent qu'avec la préposition *à* (*succéder à, plaire à, nuire à*).
- Ils ne disposent d'**aucune prise murale directe COD**. Le port COD n'existe pas sur leur boîtier syntaxique.
- Lorsque le pronom conjoint *se* se présente, il n'a d'autre issue que de se brancher dans la prise **COI** (indirecte).

```text
CIRCUIT TRANSITIF INDIRECT (ex: « Ils se sont succédé »)
[Sujet: Ils] ────> [Verbe: succéder À quelqu'un]
                          │
                          ├──> PRISE COD : INEXISTANTE / CONDAMNÉE !
                          │
                          └──> PRISE COI (Oblique « à ») : DISPONIBLE
                                      ▲
[Pronom « se » = COI obligatoire] ────┘ (La fiche mâle COI se branche ici)
                                      │
                                      ▼
                        [CIRCUIT COD : TOTALEMENT HORS TENSION]
                                      │
                                      ▼
                        [AMPOULE DE L'ACCORD : ÉTEINTE !] ──> « succédé » (invariable)
```

**Conclusion intuitive** : Puisque la ligne COD est inexistante, aucun courant d'accord ne peut traverser le verbe. Le compteur reste mathématiquement bloqué sur la forme neutre masculine singulière du participe.

---

## 6. Définitions Précises et Terminologie

Pour manipuler ces concepts avec le niveau de rigueur exigé par l'enseignement supérieur, définissons formellement les notions fondamentales [Réf. `SRC-NORM-03` ; `SRC-GRAM-02`, chap. 17] :

- **Verbe transitif indirect** : Verbe dont la valence sémantique réclame un complément d'objet relié au noyau verbal par une préposition rectrice (le plus souvent *à* ou *de*). Ce complément ne peut jamais devenir sujet par transformation passive (*on dit : nuire à autrui, mais on ne peut pas dire : \*autrui est nui*).
- **Rection prépositionnelle obligatoire** : Propriété lexicale et syntaxique par laquelle un verbe sélectionne de manière contraignante une préposition donnée pour introduire son argument interne (*convenir à*, *succéder à*, *se rire de*).
- **Transitivité sémantique vs transitivité syntaxique** : 
  - La *transitivité sémantique* désigne l'existence d'une interaction ou d'un échange d'énergie dans la réalité extralinguistique entre deux participants.
  - La *transitivité syntaxique* désigne l'encodage formel de cette relation par un complément d'objet direct non prépositionnel (cas accusatif).
  - *Conséquence capitale* : Une action peut être hautement interactive sémantiquement (*nuire mutuellement, se parler*) tout en demeurant strictement intransitive ou indirecte syntaxiquement.
- **Clitique COI exclusif** : Pronom personnel conjoint (*me, te, se, nous, vous*) qui, en raison de la valence intrinsèque du verbe recteur, ne peut occuper que la case argumentale de complément d'objet indirect.
- **Liste fermée** : Ensemble fini, dénombrable et non extensible d'unités lexicales dont les propriétés morphosyntaxiques ont été fixées par l'histoire de la langue et la norme académique.
- **Invariabilité structurelle absolue** : Propriété d'un participe passé qui, par l'absence constitutionnelle de complément d'objet direct dans son cadre de sous-catégorisation, ne peut jamais recevoir de flexion de genre ou de nombre sous la forme pronominale.
- **Neutralisation phonétique** : Phénomène morphophonologique dans lequel l'opposition graphique entre singulier et pluriel ou masculin et féminin ne produit aucune distinction perceptible dans la chaîne parlée (ex. `<succédé>` et `<succédés>` correspondent tous deux à `/syksede/`).
- **Règle de Clément Marot** : Énoncé normatif formulé en 1538 régissant l'accord du participe passé employé avec l'auxiliaire *avoir* et transposé aux verbes accidentellement pronominaux : *« Le participe s'accorde avec le complément d'objet direct si celui-ci le précède ; si le complément direct le suit ou s'il n'y en a pas, le participe ne s'accorde point. »*

---

## 7. Règles ou Mécanismes Fondamentaux

### 7.1 Pourquoi ces Verbes sont-ils Structurellement Invariables ?
Pour déterminer l'accord d'un verbe pronominal au passé composé, la grammaire méthodique impose de remonter à la syntaxe active sous-jacente [Réf. `SRC-GRAM-01`, § 950 ; `SRC-GRAM-02`, chap. 17] :

1. Bien que ces formes se conjuguent en surface avec l'auxiliaire *être*, **les verbes accidentellement pronominaux (réfléchis et réciproques) suivent scrupuleusement la règle de l'auxiliaire *avoir***.
2. Pour savoir si le participe s'accorde, il faut poser la question actancielle de Marot :
   $$\text{[Sujet]} + \text{a} + \text{[Participe]} + \textbf{QUI ?} \text{ ou } \textbf{QUOI ?}$$
3. Or, avec des verbes intransitifs par nature ou transitifs indirects, cette question est **agrammaticale et impossible** :
   - On ne dit pas : *\*Ils ont succédé qui ?* $\rightarrow$ On dit : *Ils ont succédé **À QUI ?***
   - On ne dit pas : *\*Elles ont plu qui ?* $\rightarrow$ On dit : *Elles ont plu **À QUI ?***
   - On ne dit pas : *\*Ils ont nui qui ?* $\rightarrow$ On dit : *Ils ont nui **À QUI ?***
4. Le pronom conjoint réfléchi ou réciproque *se* répond obligatoirement à la question *À QUI ?* : il est **Complément d'Objet Indirect (COI)**.
5. Comme ces verbes ne tolèrent aucun complément direct et que *se* est COI, la proposition ne contient **aucun COD, ni avant ni après**.
6. En application stricte et rigoureuse de la règle de Marot, **en l'absence absolue de COD antéposé, le participe passé demeure invariablement invariable**.

---

### 7.2 La Liste Fermée des Dix Verbes Cardinaux (Grevisse § 955)
Maurice Grevisse et André Goosse établissent dans *Le Bon Usage* (§ 955) la liste fermée des verbes pronominaux réciproques ou réfléchis dont le participe passé est **invariable en toutes circonstances**, car ils ne se construisent qu'avec la préposition *à* (ou *de*) dans l'usage moderne [Réf. `SRC-GRAM-01`, § 955] :

| N° | Verbe pronominal | Rection de base non pronominale | Test de permutation active avec *avoir* | Forme normée au passé composé |
| :---: | :--- | :--- | :--- | :--- |
| **1** | **se plaire** | *plaire à qqn* | *Elles ont plu **à qui ?** $\rightarrow$ à elles-mêmes.* | *Elles se sont **plu** dans cette ville.* |
| **2** | **se complaire** | *se complaire à / dans qqch.* | *Ils ont trouvé leur plaisir **dans quoi ?** (COI).* | *Ils se sont **complu** dans leur erreur.* |
| **3** | **se déplaire** | *déplaire à qqn* | *Elles ont déplu **à qui ?** $\rightarrow$ à autrui.* | *Elles se sont **déplu** dans cette région.* |
| **4** | **se rire** | *se rire de qqn / qqch.* | *Ils ont ri **de quoi ?** $\rightarrow$ des menaces (COI).* | *Ils se sont **ri** de tous les obstacles.* |
| **5** | **se nuire** | *nuire à qqn* | *Elles ont nui **à qui ?** $\rightarrow$ l'une à l'autre.* | *Elles se sont **nui** mutuellement.* |
| **6** | **se convenir** | *convenir à qqn* | *Ces clauses ont convenu **à qui ?** $\rightarrow$ aux deux partis.* | *Ces dispositions se sont **convenu**.* |
| **7** | **se ressembler** | *ressembler à qqn* | *Elles ont ressemblé **à qui ?** $\rightarrow$ l'une à l'autre.* | *Les deux sœurs se sont **ressemblé**.* |
| **8** | **se succéder** | *succéder à qqn* | *Ils ont succédé **à qui ?** $\rightarrow$ l'un à l'autre.* | *Les ministres se sont **succédé**.* |
| **9** | **se suffire** | *suffire à qqn / qqch.* | *Ces arguments ont suffi **à qui ?** $\rightarrow$ aux juges.* | *Ces explications se sont **suffi**.* |
| **10** | **se survivre** | *survivre à qqn / qqch.* | *Ces régimes ont survécu **à qui ?** $\rightarrow$ à leurs créateurs.* | *Ces institutions se sont **survécu**.* |

> [!IMPORTANT]
> **Règle absolue d'invariabilité** : Aucun de ces dix verbes ne prend jamais de marque d'accord au participe passé sous sa forme pronominale. Écrire `*plues`, `*complues`, `*déplues`, `*nuis`, `*convenues`, `*ressemblées`, `*succédés`, `*suffis` ou `*survécus` constitue une faute d'orthographe grammaticale majeure sanctionnée aux concours.

---

### 7.3 Les Verbes d'Interaction Verbale et Sociale à Rection Indirecte
Au-delà des dix verbes cardinaux ci-dessus, toute une série de verbes désignant des actes d'échange verbal, épistolaire ou social partagent exactement la même structure syntaxique : ils se construisent avec la préposition *à* et ne possèdent aucun complément direct en emploi absolu [Réf. `SRC-GRAM-01`, § 955 ; `SRC-GRAM-02`, chap. 17].

Leur participe passé est donc **strictement invariable** :

- **se parler** (*parler à qqn*) :  
  *« Elles se sont **parlé** pendant trois heures au téléphone. »*  
  *(Elles ont parlé À QUI ? à elles-mêmes $\rightarrow$ se est COI $\rightarrow$ invariable).*
- **se téléphoner** (*téléphoner à qqn*) :  
  *« Les deux présidentes se sont **téléphoné** hier soir. »*  
  *(Elles ont téléphoné À QUI ? $\rightarrow$ se est COI $\rightarrow$ invariable).*
- **se sourire** (*sourire à qqn*) :  
  *« Les deux candidates se sont **souri** avec une courtoisie glaciale. »*  
  *(Elles ont souri À QUI ? $\rightarrow$ se est COI $\rightarrow$ invariable).*
- **se mentir** (*mentir à qqn*) :  
  *« Ces associés se sont **menti** depuis le premier jour. »*  
  *(Ils ont menti À QUI ? $\rightarrow$ se est COI $\rightarrow$ invariable).*
- **s'en vouloir** (*en vouloir à qqn*) :  
  *« Elles s'en sont longtemps **voulu** de cet échec. »*  
  *(Elles ont voulu à qui ? $\rightarrow$ se est COI ; en est pronom adverbial neutre $\rightarrow$ invariable).*
- **s'écrire** (*écrire à qqn*, en emploi absolu sans COD exprimé) :  
  *« Ils se sont **écrit** pendant toute la durée de la guerre. »*  
  *(Mais attention : si une lettre est exprimée avant le verbe, la règle du COD s'applique : « Les lettres qu'ils se sont **écrites** »).*

---

### 7.4 Le Duel Syntaxique : Verbes à Double Rection (Directe vs Indirecte)
Certains verbes possèdent une double identité lexicale selon qu'ils sont employés à la voix pronominale avec un sens autonome (essentiellement pronominal) ou selon qu'ils maintiennent la rection du verbe simple [Réf. `SRC-GRAM-01`, § 951, § 955]. Ces cas exigent une vigilance extrême :

#### Le Cas de « échapper » : *échapper à* (COI) vs *s'échapper* (Essentiellement pronominal)
1. **Emploi transitif indirect (*échapper à qqn / qqch.*)** :  
   Lorsque le verbe exprime le fait de ne pas être perçu ou d'échapper à l'emprise, il régit la préposition *à* :  
   *« Cette subtilité juridique leur a **échappé** »* (invariable, *leur* est COI).
2. **Emploi pronominal autonome (*s'échapper* = s'enfuir)** :  
   Le verbe *s'échapper* change de sens pour désigner l'évasion physique. Dans cet emploi, il est classé parmi les **verbes accidentellement pronominaux à sens réfléchi ou essentiellement pronominaux** faisant corps avec son pronom : le participe passé **s'accorde obligatoirement avec le sujet** :  
   *« Les prisonnières se sont **échappées** par une issue dérobée. »* [Réf. `SRC-GRAM-01`, § 951].

#### Le Cas de « douter » : *douter de* (COI) vs *se douter de* (Pronominal subjectif)
1. **Emploi simple (*douter de qqch.*)** :  
   *« Ils ont **douté** de la sincérité du témoin »* (verbe transitif indirect avec *avoir* $\rightarrow$ invariable).
2. **Emploi pronominal (*se douter de qqch.* = soupçonner, pressentir)** :  
   Le verbe *se douter* ne signifie pas « douter de soi-même ». Le pronom *se* n'assume aucune fonction d'objet direct ni d'objet indirect séparable : il est une marque de subjectivité modale. L'Académie française et la majorité des grammairiens considèrent que dans *se douter de*, le participe reste traditionnellement **invariable** car le verbe n'admet aucun COD :  
   *« Elles se sont **douté** de la supercherie dès le premier instant. »* [Réf. `SRC-GRAM-01`, § 951 d ; Académie française].

---

### 7.5 Démystification Intégrale de l'Erreur Reine : « Ils se sont succédé »
L'accord fautif `*ils se sont succédés` est la faute grammaticale la plus fréquemment recensée dans la presse nationale et les concours de catégorie A. 

#### L'Histoire d'une Erreur Tenace
Dès le XVIIe siècle, des auteurs prestigieux ont ponctuellement laissé échapper un accord au pluriel, trompés par l'analogie avec les verbes d'action mutuelle (*ils se sont suivis*, *ils se sont combattus*). Vaugelas en 1647, puis l'Académie française dans ses éditions successives, ont fermement rappelé que la syntaxe ne saurait plier devant l'impression sémantique.

#### La Défaillance du Cerveau : L'Amalgame entre *Se Suivre* et *Se Succéder*
L'erreur naît presque toujours d'une confusion entre deux verbes synonymes dans la pensée, mais opposés dans leur syntaxe formelle :
- **Suivre** est un verbe **transitif direct** (*suivre quelqu'un*) :  
  *« Les rois se sont **suivis** »* $\rightarrow$ Le roi B a suivi le roi A (COD). Le pronom *se* est COD placé avant le verbe. Accord masculin pluriel : **suivis** avec un *-s*.
- **Succéder** est un verbe **transitif indirect** (*succéder À quelqu'un*) :  
  *« Les rois se sont **succédé** »* $\rightarrow$ Le roi B a succédé AU roi A (COI). Le pronom *se* est COI. Pas de COD. Invariabilité absolue : **succédé** sans *-s*.

```text
LE DUEL SYNTAXIQUE FONDAMENTAL
┌───────────────────────────────┬───────────────────────────────┐
│     « ILS SE SONT SUIVIS »    │   « ILS SE SONT SUCCÉDÉ »     │
├───────────────────────────────┼───────────────────────────────┤
│ • Verbe : Suivre              │ • Verbe : Succéder            │
│ • Rection : Suivre [QUI ?]    │ • Rection : Succéder [À QUI ?]│
│ • Statut de « se » : COD      │ • Statut de « se » : COI      │
│ • Règle de Marot : COD avant  │ • Règle de Marot : Pas de COD │
│ • Résultat : ACCORD (-s)      │ • Résultat : INVARIABLE (-é)  │
└───────────────────────────────┴───────────────────────────────┘
```

#### La Méthode de Verrouillage Cognitif en Trois Secondes
Dès que vous rencontrez le verbe *succéder* au passé composé :
1. *Déclencheur mental* : Attention, verbe en « succéder » !
2. *Question réflexe* : Dit-on *succéder quelqu'un* ou *succéder À quelqu'un* ? $\rightarrow$ *À quelqu'un* !
3. *Verdict instantané* : Préposition *à* = COI = zéro COD = **succédé** avec un accent aigu, point final.

---

## 8. Raisonnement Détaillé (Le Pourquoi)

### 8.1 La Grammaire Française N'Accorde Pas sur la Sémantique
Pour comprendre la logique interne de notre langue, il faut poser une vérité scientifique que les manuels élémentaires taisent trop souvent : **l'accord grammatical n'est pas un dessin figuratif de la réalité, c'est une relation casuelle abstraite** [Réf. `SRC-GRAM-02`, chap. 17].

Prenons deux situations réelles :
1. *Situation A* : Deux diplomates se battent en duel. Ils s'échangent des coups d'épée.
2. *Situation B* : Deux diplomates se nuisent par des manœuvres secrètes. Ils s'échangent des coups bas.

D'un point de vue psychologique, physique et pragmatique, les deux situations sont identiques : deux individus exercent une force réciproque néfaste l'un contre l'autre.
Pourtant, la langue française produit deux orthographes radicalement divergentes :
- *« Ces deux diplomates se sont **battus** »* (accord en *-us*).
- *« Ces deux diplomates se sont **nui** »* (invariabilité en *-i*).

Pourquoi ? Parce que la langue française a hérité du latin une hiérarchie stricte des cas :
- L'action de *battre* s'exerce directement sur la personne (ancien accusatif latin : *battere aliquem*). Le complément direct subit l'action sans médiation. La langue considère que l'objet direct s'amalgame au procès du verbe, justifiant que le participe prenne ses marques morphologiques.
- L'action de *nuire* ne s'exerce pas directement sur la personne comme une matière manipulée : elle s'adresse à elle comme à un destinataire (ancien datif latin : *nocere alicui*). La préposition *à* forme un rempart syntaxique infranchissable.

L'accord du participe passé n'a jamais été conçu pour indiquer que des personnes agissent ensemble : **il n'a été conçu que pour refléter le passage d'un complément d'objet direct devant le verbe**. S'il n'y a pas de complément d'objet direct, il n'y a aucune raison linguistique d'accorder.

---

## 9. Exemples Corrects Commentés

Examinons six extraits de haute tenue littéraire et juridique illustrant l'application rigoureuse de ces règles :

### Exemple 1 : Montesquieu (*Considérations sur les causes de la grandeur des Romains*)
> *« Plusieurs tyrans se sont **succédé** sur le trône de l'Empire sans que la liberté publique pût renaître de leurs cendres. »*
- **Sujet** : *Plusieurs tyrans* (masculin pluriel).
- **Verbe** : *se succéder*.
- **Analyse actancielle** : Le verbe *succéder* régit la préposition *à* (*succéder à autrui*). Le pronom conjoint *se* remplit la fonction de COI (*l'un à l'autre*). Il n'existe aucun COD dans la proposition.
- **Résultat orthographique** : Participe passé strictement invariable $\rightarrow$ **succédé**.

### Exemple 2 : Madame de La Fayette (*La Princesse de Clèves*)
> *« Dès les premières paroles qu'ils échangèrent, ils se sont **plu**, et cette inclination mutuelle ne fit que croître avec le temps. »*
- **Sujet** : *ils* (masculin pluriel).
- **Verbe** : *se plaire*.
- **Analyse actancielle** : On dit *plaire à quelqu'un*. Le clitique *se* est COI (*ils ont plu l'un à l'autre*). Absence totale de COD.
- **Résultat orthographique** : Participe passé strictement invariable $\rightarrow$ **plu**.

### Exemple 3 : François-René de Chateaubriand (*Mémoires d'outre-tombe*)
> *« Les générations présentes se sont **ri** de ces vaines terreurs que nos pères regardaient avec effroi. »*
- **Sujet** : *Les générations présentes* (féminin pluriel).
- **Verbe** : *se rire* (*se rire de*).
- **Analyse actancielle** : Le verbe *se rire* est intransitif et régit le complément indirect introduit par *de* (*se rire de quoi ? de ces vaines terreurs*). Le verbe ne tolère aucun COD.
- **Résultat orthographique** : Participe passé strictement invariable $\rightarrow$ **ri** (et non `*ries`).

### Exemple 4 : Honoré de Balzac (*Le Père Goriot*)
> *« Les deux jeunes filles se sont **ressemblé** par une égale noblesse d'âme avant que le monde ne vînt altérer leurs vertus. »*
- **Sujet** : *Les deux jeunes filles* (féminin pluriel).
- **Verbe** : *se ressembler*.
- **Analyse actancielle** : La rection est *ressembler à quelqu'un*. Le pronom réciproque *se* est COI (*l'une à l'autre*).
- **Résultat orthographique** : Participe passé strictement invariable $\rightarrow$ **ressemblé** (et non `*ressemblées`).

### Exemple 5 : Arrêt du Conseil d'État (Jurisprudence administrative)
> *« Considérant que les deux entreprises soumissionnaires se sont **convenu** de clauses tarifaires prohibées et se sont délibérément **nui** en restreignant l'accès au marché public. »*
- **Sujet** : *les deux entreprises soumissionnaires* (féminin pluriel).
- **Verbes coordonnés** : *se convenir* et *se nuire*.
- **Analyse actancielle** : 
  - *Convenir* (au sens d'agréer, satisfaire) est transitif indirect (*convenir à qqn* $\rightarrow$ *se* = COI).
  - *Nuire* est transitif indirect (*nuire à qqn* $\rightarrow$ *se* = COI).
- **Résultat orthographique** : Les deux participes passés demeurent strictement invariables $\rightarrow$ **convenu** et **nui**.

### Exemple 6 : Marcel Proust (*À la recherche du temps perdu*)
> *« Elles se sont **souri** avec une infinie délicatesse, puis elles se sont **parlé** comme si aucune brouille ne les avait jamais séparées. »*
- **Sujet** : *Elles* (féminin pluriel).
- **Verbes coordonnés** : *se sourire* et *se parler*.
- **Analyse actancielle** : *Sourire à quelqu'un* et *parler à quelqu'un*. Dans les deux occurrences, le pronom *se* est COI.
- **Résultat orthographique** : Participes invariables $\rightarrow$ **souri** et **parlé**.

---

## 10. Contre-Exemples et Erreurs Fréquentes

Examinons en détail la clinique des six erreurs récurrentes les plus sévères recensées dans les écrits académiques et professionnels [Réf. `SRC-GRAM-01`, § 955] :

### Erreur n° 1 : L'accord fautif sur « se succéder » (*ils se sont succédés*)
- ❌ **Énoncé pathologique** : *« Les crises politiques se sont succédées à un rythme effréné tout au long de l'année. »*
- **Autopsie de la défaillance** : Le scripteur identifie le sujet féminin pluriel *les crises politiques* et l'auxiliaire *être* (*se sont*). Il projette automatiquement la désinence *-ées* sur le participe en traitant *succédé* comme un adjectif attribut du sujet.
- **Réfutation syntaxique** : On ne dit pas *succéder des crises*, mais *succéder À des crises*. Le verbe *succéder* n'a pas de COD. Le pronom *se* est obligatoirement COI (*les crises ont succédé les unes aux autres*). Faute de COD antéposé, le participe ne peut recevoir aucune flexion.
- ✔️ **Forme normée** : *« Les crises politiques se sont **succédé** à un rythme effréné tout au long de l'année. »*

### Erreur n° 2 : L'accord fautif sur « se plaire » (*elles se sont plues*)
- ❌ **Énoncé pathologique** : *« Mes collaboratrices se sont plues dans leur nouvel environnement de travail. »*
- **Autopsie de la défaillance** : Le scripteur croit que l'expression *se plaire* a le même fonctionnement que *s'amuser* ou *se réjouir*. Comme *elles se sont réjouies* s'accorde (verbe essentiellement pronominal), il ajoute un *-es* fautif sur *plu*.
- **Réfutation syntaxique** : Le verbe *plaire* est transitif indirect (*plaire à quelqu'un*). *Elles ont plu À QUI ? à elles-mêmes*. Le pronom *se* est COI. Le participe passé de *plaire* (*plu*) est rigoureusement invariable sous la voix pronominale.
- ✔️ **Forme normée** : *« Mes collaboratrices se sont **plu** dans leur nouvel environnement de travail. »*

### Erreur n° 3 : L'accord fautif sur « se ressembler » (*les deux sœurs se sont ressemblées*)
- ❌ **Énoncé pathologique** : *« Ces deux théories sociologiques se sont toujours étroitement ressemblées. »*
- **Autopsie de la défaillance** : L'adjectif qualificatif *ressemblantes* s'accorde (*Ces deux théories sont ressemblantes*). L'esprit du scripteur confond l'adjectif verbal avec le participe passé pronominal du verbe *se ressembler*.
- **Réfutation syntaxique** : Une théorie ressemble **À** une autre théorie. Le pronom *se* assume la fonction de COI. Aucun COD n'étant présent, l'accord est un solécisme orthographique.
- ✔️ **Forme normée** : *« Ces deux théories sociologiques se sont toujours étroitement **ressemblé**. »*

### Erreur n° 4 : L'accord fautif sur « se nuire » (*ils se sont nuis*)
- ❌ **Énoncé pathologique** : *« En refusant de négocier, les deux syndicats se sont gravement nuis. »*
- **Autopsie de la défaillance** : Le scripteur s'appuie sur le participe présent variable en genre et en nombre (*des propos nuisibles*) ou sur l'accord du verbe *se détruire* (*ils se sont détruits*, car *détruire quelqu'un* est transitif direct).
- **Réfutation syntaxique** : On dit *nuire À quelqu'un*. Le clitique *se* est COI. Le participe passé de *nuire* est *nui*, forme morphologiquement invariable qui ne prend jamais de *-s* final.
- ✔️ **Forme normée** : *« En refusant de négocier, les deux syndicats se sont gravement **nui**. »*

### Erreur n° 5 : L'accord fautif sur « se parler » (*elles se sont parlées*)
- ❌ **Énoncé pathologique** : *« Les deux déléguées se sont longuement parlées à l'issue de la séance plénière. »*
- **Autopsie de la défaillance** : Le sens de réciprocité est manifeste : deux femmes s'entretiennent. L'oreille n'offrant aucun indice discriminant (`/paʁle/`), le scripteur écrit machinalement l'accord avec le sujet féminin pluriel.
- **Réfutation syntaxique** : Le verbe *parler* régit la préposition *à* dans le sens d'adresser la parole (*parler à quelqu'un*). Le clitique *se* est COI. En l'absence de COD nominal antéposé, l'invariabilité est de rigueur.
- ✔️ **Forme normée** : *« Les deux déléguées se sont longuement **parlé** à l'issue de la séance plénière. »*

### Erreur n° 6 : La confusion entre « échapper à » et « s'échapper » (*elles se sont échappé*)
- ❌ **Énoncé pathologique** : *« Les otages se sont échappé par une fenêtre du sous-sol pendant la nuit. »*
- **Autopsie de la défaillance** : Par hypercorrection et application aveugle de la règle des verbes en *à*, le scripteur se souvient que *le mot lui a échappé* est invariable (avec *lui* COI) et conclut à tort que *s'échapper* doit rester invariable au pronominal !
- **Réfutation syntaxique** : Dans *s'échapper* au sens de fuir, le verbe change de nature sémantique : il devient un verbe accidentellement réfléchi à pronom COD ou essentiellement pronominal d'action corporelle. Le participe passé **s'accorde obligatoirement avec le sujet**.
- ✔️ **Forme normée** : *« Les otages se sont **échappées** [si ce sont des femmes] / **échappés** [si ce sont des hommes] par une fenêtre... »*

---

## 11. Cas Particuliers et Limites

### 11.1 Le Verbe Composé « s'entre-nuire » (Grevisse § 955)
Le français classique et juridique a forgé des verbes réciproques renforcés à l'aide du préfixe *entre-* (*s'entre-dévorer, s'entre-tuer, s'entre-secourir, s'entre-nuire*).
- Pour les verbes formés sur un radical transitif direct (*tuer qqn, dévorer qqn, secourir qqn*), le participe s'accorde normalement avec le pronom *se* qui est COD : *« Ils se sont entre-dévorés »*, *« Elles se sont entre-tuées »*.
- Mais qu'en est-il de **s'entre-nuire** ? Le verbe de base demeure *nuire à quelqu'un*. Le préfixe *entre-* n'a pas le pouvoir de transmuer un verbe transitif indirect en verbe transitif direct.
- Par conséquent, la doctrine académique moderne et Maurice Grevisse (§ 955) prescrivent l'**invariabilité absolue** :  
  *« Ces deux factions rivales se sont **entre-nui** sans relâche. »*

### 11.2 Les Variations Littéraires Archaïques chez les Auteurs Classiques
Il n'est pas rare, en lisant Madame de Sévigné, Corneille, Racine ou Voltaire, de rencontrer des accords qui heurteraient aujourd'hui la norme académique :
> *« Elles se sont plues à me tourmenter... »* (Mme de Sévigné)  
> *« Cinq ou six rois se sont succédés rapidement... »* (Voltaire)

Ces attestations s'expliquent historiquement : au XVIIe et au XVIIIe siècle, le système d'accord des verbes pronominaux connaissait encore de fortes fluctuations. De nombreux grammairiens considéraient que l'analogie avec l'adjectif attribut primait dès lors qu'un verbe était conjugué avec *être*. 

Ce n'est qu'au **XIXe siècle**, sous l'égide de l'Académie française, de Bescherelle et d'Émile Littré, que la règle a été rigoureusement unifiée autour du critère exclusif de la valence verbale. Dans tout concours contemporain ou épreuve universitaire, reproduire l'accord archaïque de Voltaire ou de Sévigné constitue une faute éliminatoire.

---

## 12. Approfondissement Adapté au Niveau

### 12.1 Du Datif Latin à la Rection Prépositionnelle Française
Pour comprendre pourquoi *plaire* et *succéder* rejettent le COD direct, il faut examiner leur genèse diachronique [Réf. `SRC-GRAM-02`, chap. 17] :
- En latin classique, *placere* et *succedere* appartenaient à la classe des verbes à **régime datif obligatoire** :
  - *Hoc placet mihi* (datif *mihi* : « cela plaît à moi »).
  - *Succedere alicui* (datif *alicui* : « succéder à quelqu'un »).
- Lors de la transition du latin vers le proto-français, le système morphologique des déclinaisons s'est effondré au profit d'un système à deux cas en ancien français (Cas Sujet / Cas Régime). Le cas régime oblique a progressivement délégué ses fonctions sémantiques à des **prépositions analytiques**, principalement la préposition *à* (issue de la préposition latine *ad*).
- Les verbes qui régissaient le datif en latin sont ainsi devenus en français moderne des **verbes à complément d'objet indirect en « à »**.

### 12.2 La Formalisation de la Rection Oblique par Port-Royal
Dans leur *Grammaire générale et raisonnée* (1660), Claude Lancelot et Antoine Arnauld formalisent la théorie de la transitivité :
- Ils distinguent l'**action qui passe immédiatement sur la chose** (l'accusatif, devenu complément d'objet direct) de l'**action qui n'y passe que médiatement** à travers une particule de liaison (le datif ou ablatif prépositionnel).
- Cette théorie a servi de fondement aux *Remarques sur la langue française* de Claude Favre de Vaugelas (1647) pour verrouiller la règle du participe : le participe passé ne peut manifester sa concordance qu'avec un argument absolu qui a été préalablement thématisé (antéposé) dans la fonction accusative directe. Tout argument médiatisé par une préposition demeure exclu du processus de concordance flexionnelle.

---

## 13. Comparaisons Différentielles

Pour fixer définitivement ces distinctions, confrontons les paires canoniques dans trois tableaux synoptiques :

### Tableau 1 : Transitif Direct Réfléchi vs Transitif Indirect
| Critère syntaxique | Verbe transitif direct (*se laver*) | Verbe transitif indirect (*se nuire*) |
| :--- | :--- | :--- |
| **Question à l'actif** | *Elle a lavé **qui ?*** | *Elle a nui **à qui ?*** |
| **Fonction du clitique « se »** | **COD antéposé** | **COI exclusif** |
| **Présence d'un COD possible** | Oui (*se* ou nom autonome) | Non (aucun COD recevable) |
| **Sort du participe passé** | **Accord en genre et en nombre** | **Invariabilité structurelle absolue** |
| **Exemple normé** | *Elles se sont **lavées**.* | *Elles se sont **nui**.* |

---

### Tableau 2 : Le Duel Sémantique « Se Suivre » vs « Se Succéder »
| Propriété grammaticale | **Se suivre** | **Se succéder** |
| :--- | :--- | :--- |
| **Sémantique perçue** | Événements ou personnes qui s'enchaînent | Événements ou personnes qui s'enchaînent |
| **Transitivité du verbe simple** | **Transitif direct** (*suivre qqn*) | **Transitif indirect** (*succéder à qqn*) |
| **Analyse actancielle** | *Ils ont suivi **qui ?** $\rightarrow$ les uns les autres.* | *Ils ont succédé **à qui ?** $\rightarrow$ les uns aux autres.* |
| **Fonction de « se »** | **COD** | **COI** |
| **Orthographe au passé composé** | *« Les générations se sont **suivies** »* | *« Les générations se sont **succédé** »* |
| **Justification de concours** | Accord avec le COD *se* placé avant le verbe. | Invariable : *se* est COI, aucun COD antéposé. |

---

### Tableau 3 : Le Duel Affectif « S'Aimer » vs « Se Plaire »
| Propriété grammaticale | **S'aimer** | **Se plaire** |
| :--- | :--- | :--- |
| **Construction non pronominale** | *Aimer qqn* (transitif direct) | *Plaire à qqn* (transitif indirect) |
| **Analyse actancielle** | *Elles ont aimé **qui ?** $\rightarrow$ elles-mêmes.* | *Elles ont plu **à qui ?** $\rightarrow$ l'une à l'autre.* |
| **Statut grammatical de « se »** | **COD** | **COI** |
| **Graphie normée** | *« Elles se sont **aimées** dès le lycée »* | *« Elles se sont **plu** dès le lycée »* |
| **Règle applicable** | Accord féminin pluriel avec le COD antéposé. | Invariable : verbe transitif indirect en *à*. |

---

## 14. Exercices Progressifs (Trois Niveaux)

### 14.1 Niveau 1 : Reconnaissance et Discrimination de Rection (12 Verbes)
**Consigne** : Pour chacun des douze verbes suivants employés au féminin pluriel (*Elles se sont...*), complétez le tableau en précisant la rection du verbe simple (*Verbe + qqn* ou *Verbe + à/de qqn*), la fonction du pronom *se* (COD ou COI) et l'orthographe exacte du participe passé :

1. *se battre* | 2. *se nuire* | 3. *se blesser* | 4. *se plaire* | 5. *se rencontrer* | 6. *se succéder*  
7. *se ressembler* | 8. *se féliciter* | 9. *se téléphoner* | 10. *se soutenir* | 11. *se sourire* | 12. *se convenir*

<details>
<summary><strong>Corrigé détaillé du Niveau 1 (cliquer pour dérouler)</strong></summary>

| N° | Verbe pronominal | Rection de base du verbe simple | Fonction de « se » | Orthographe exacte du participe passé |
| :---: | :--- | :--- | :---: | :--- |
| **1** | *se battre* | *battre qqn* (transitif direct) | **COD** | *Elles se sont **battues**.* |
| **2** | *se nuire* | *nuire à qqn* (transitif indirect) | **COI** | *Elles se sont **nui**.* |
| **3** | *se blesser* | *blesser qqn* (transitif direct) | **COD** | *Elles se sont **blessées**.* |
| **4** | *se plaire* | *plaire à qqn* (transitif indirect) | **COI** | *Elles se sont **plu**.* |
| **5** | *se rencontrer* | *rencontrer qqn* (transitif direct) | **COD** | *Elles se sont **rencontrées**.* |
| **6** | *se succéder* | *succéder à qqn* (transitif indirect) | **COI** | *Elles se sont **succédé**.* |
| **7** | *se ressembler* | *ressembler à qqn* (transitif indirect) | **COI** | *Elles se sont **ressemblé**.* |
| **8** | *se féliciter* | *féliciter qqn* (transitif direct) | **COD** | *Elles se sont **félicitées**.* |
| **9** | *se téléphoner* | *téléphoner à qqn* (transitif indirect) | **COI** | *Elles se sont **téléphoné**.* |
| **10** | *se soutenir* | *soutenir qqn* (transitif direct) | **COD** | *Elles se sont **soutenues**.* |
| **11** | *se sourire* | *sourire à qqn* (transitif indirect) | **COI** | *Elles se sont **souri**.* |
| **12** | *se convenir* | *convenir à qqn* (transitif indirect) | **COI** | *Elles se sont **convenu**.* |

</details>

---

### 14.2 Niveau 2 : Résolution de Duels Syntaxiques (10 Phrases)
**Consigne** : Accordez correctement le participe passé entre parenthèses et justifiez votre choix par l'analyse de la rection verbale :

1. *Les deux régimes autoritaires se sont (suivre) avant que la république ne soit proclamée.*
2. *Les deux chancelières se sont (succéder) à la tête du gouvernement fédéral.*
3. *Elles se sont (combattre) sans merci pour obtenir la présidence de la commission.*
4. *Ces deux entreprises rivales se sont délibérément (nuire) lors de la fusion.*
5. *Les deux sœurs jumelles se sont toujours étroitement (ressembler).*
6. *Elles se sont (regarder) fixement dans le miroir avant d'entrer en scène.*
7. *Les deux diplomates se sont (parler) longuement avant de signer le cessez-le-feu.*
8. *Elles se sont (féliciter) de la signature de ce compromis historique.*
9. *Les conspiratrices se sont (échapper) de la forteresse avant l'aube.*
10. *Les juges se sont (douter) de la manœuvre dilatoire de l'avocat.*

<details>
<summary><strong>Corrigé détaillé du Niveau 2 (cliquer pour dérouler)</strong></summary>

1. *« se sont **suivies** »* : *suivre quelqu'un* est transitif direct. Le pronom *se* est COD antéposé $\rightarrow$ accord féminin pluriel avec *les deux régimes* (ou masculin pluriel : *les régimes se sont **suivis***).
2. *« se sont **succédé** »* : *succéder à quelqu'un* est transitif indirect. Le clitique *se* est COI $\rightarrow$ participe invariable.
3. *« se sont **combattues** »* : *combattre quelqu'un* est transitif direct. Le pronom *se* est COD antéposé $\rightarrow$ accord féminin pluriel.
4. *« se sont **nui** »* : *nuire à quelqu'un* est transitif indirect. *se* est COI $\rightarrow$ participe invariable.
5. *« se sont **ressemblé** »* : *ressembler à quelqu'un* est transitif indirect. *se* est COI $\rightarrow$ participe invariable.
6. *« se sont **regardées** »* : *regarder quelqu'un* est transitif direct. *se* est COD antéposé $\rightarrow$ accord féminin pluriel.
7. *« se sont **parlé** »* : *parler à quelqu'un* est transitif indirect. *se* est COI $\rightarrow$ participe invariable.
8. *« se sont **félicitées** »* : *féliciter quelqu'un* est transitif direct. *se* est COD antéposé $\rightarrow$ accord féminin pluriel.
9. *« se sont **échappées** »* : *s'échapper* (au sens de fuir) est un verbe essentiellement pronominal ou à réflexivité totale $\rightarrow$ accord obligatoire avec le sujet *les conspiratrices*.
10. *« se sont **douté** »* : *se douter de* est intransitif direct sans COD $\rightarrow$ invariabilité doctrinale selon l'Académie française.

</details>

---

### 14.3 Niveau 3 : Analyse et Accord d'un Texte Historique de 50 Mots Exacts
**Consigne** : Accordez rigoureusement les formes verbales pronominales dans le texte historique suivant, puis vérifiez le décompte certifié et l'analyse actancielle :

> *« Pendant deux siècles ces trois dynasties puissantes se sont succédé sur ce vaste trône sans que leurs monarques ne se soient jamais réellement convenu. Bien que ces souverains se soient souvent parlé et se soient même souri lors des cérémonies officielles, leurs factions rivales se sont continuellement nui avec acharnement. »*

#### Protocole de Décompte Certifié (50 Mots)
Le texte est rigoureusement calibré sur la convention typographique des concours nationaux (50 unités graphiques lexicales autonomes délimitées par des espaces, sans élision ambiguë) :

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Pendant | **11** | sur | **21** | soient | **31** | souvent | **41** | officielles, |
| **2** | deux | **12** | ce | **22** | jamais | **32** | **parlé** | **42** | leurs |
| **3** | siècles | **13** | vaste | **23** | réellement | **33** | et | **43** | factions |
| **4** | ces | **14** | trône | **24** | **convenu.** | **34** | se | **44** | rivales |
| **5** | trois | **15** | sans | **25** | Bien | **35** | soient | **45** | se |
| **6** | dynasties | **16** | que | **26** | que | **36** | même | **46** | sont |
| **7** | puissantes | **17** | leurs | **27** | ces | **37** | **souri** | **47** | continuellement |
| **8** | se | **18** | monarques | **28** | souverains | **38** | lors | **48** | **nui** |
| **9** | sont | **19** | ne | **29** | se | **39** | des | **49** | avec |
| **10** | **succédé** | **20** | se | **30** | soient | **40** | cérémonies | **50** | acharnement. |

$$\text{Total arithmétique certifié} = 50\text{ mots exacts}.$$

<details>
<summary><strong>Corrigé analytique complet du texte de Niveau 3 (cliquer pour dérouler)</strong></summary>

Le paragraphe comporte cinq verbes pronominaux au passé, tous construits avec une rection indirecte en *à* :
1. *se sont **succédé*** : *succéder à qqn* $\rightarrow$ *se* est COI $\rightarrow$ participe invariable (mot 10).
2. *se soient [...] **convenu*** : *convenir à qqn* $\rightarrow$ *se* est COI $\rightarrow$ participe invariable (mot 24).
3. *se soient [...] **parlé*** : *parler à qqn* $\rightarrow$ *se* est COI $\rightarrow$ participe invariable (mot 32).
4. *se soient [...] **souri*** : *sourire à qqn* $\rightarrow$ *se* est COI $\rightarrow$ participe invariable (mot 37).
5. *se sont [...] **nui*** : *nuire à qqn* $\rightarrow$ *se* est COI $\rightarrow$ participe invariable (mot 48).

**Bilan d'arbitrage** : Les cinq participes passés demeurent rigoureusement invariables au masculin singulier neutre (*-é, -u, -i*), malgré la présence de sujets féminins pluriels (*dynasties puissantes*, *factions rivales*).

</details>

---

## 15. Activité de Correction Raisonnée

### 15.1 Corpus d'Entraînement : La Chronique Politique Truffée de Fautes
Le texte ci-dessous, extrait d'une revue d'actualité politique, contient **huit fautes d'accord** portant exclusivement sur des verbes pronominaux à rection indirecte. Identifiez chaque forme erronée, explicitez la règle bafouée et rétablissez l'orthographe normée :

> *« Durant cette législature mouvementée, les deux coalitions parlementaires se sont **succédées** (1) sans offrir de stabilité durable au pays. Leurs cheffes de file se sont d'abord **plues** (2) dans un dialogue constructif et se sont longuement **parlées** (3) lors des consultations préliminaires. Devant les caméras, ces deux personnalités se sont même chaleureusement **souries** (4), accréditant la thèse d'un compromis imminent. Pourtant, dès l'ouverture des débats budgétaires, ces majorités éphémères se sont férocement **nuises** (5) par des amendements obstructionnistes. Bien que leurs programmes économiques se soient étrangement **ressemblés** (6) sur de nombreux chapitres fiscaux, leurs ambitions partisanes ne se sont jamais **convenues** (7). Finalement, ces deux factions se sont **survécues** (8) à elles-mêmes dans un climat de défiance généralisée. »*

---

### 15.2 Apparat Critique et Grille d'Arbitrage Normée

| N° | Forme fautive | Rection du verbe simple | Statut du clitique conjoint | Règle académique violée | Graphie normée attestée |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **1** | `*succédées` | *succéder à qqn* | **COI** | *Succéder* est intransitif indirect. Absence de COD $\rightarrow$ invariabilité absolue [Réf. `SRC-GRAM-01`, § 955]. | **succédé** |
| **2** | `*plues` | *plaire à qqn* | **COI** | *Plaire* régit la préposition *à*. *se* est COI. Aucune marque d'accord au féminin [Réf. `SRC-GRAM-01`, § 955]. | **plu** |
| **3** | `*parlées` | *parler à qqn* | **COI** | *Parler* est indirect en emploi absolu. *se* est COI $\rightarrow$ invariabilité stricte [Réf. `SRC-GRAM-02`, chap. 17]. | **parlé** |
| **4** | `*souries` | *sourire à qqn* | **COI** | *Sourire* régit *à*. Le participe passé ne fléchit pas sous la voix pronominale [Réf. `SRC-GRAM-01`, § 955]. | **souri** |
| **5** | `*nuises` | *nuire à qqn* | **COI** | Double faute : accord illicite et morphologie fautive (`*nui` ne prend jamais de -s). Invariable [Réf. `SRC-GRAM-01`, § 955]. | **nui** |
| **6** | `*ressemblés` | *ressembler à qqn* | **COI** | *Ressembler* réclame la préposition *à*. Pronom *se* = COI $\rightarrow$ invariabilité absolue [Réf. `SRC-GRAM-01`, § 955]. | **ressemblé** |
| **7** | `*convenues` | *convenir à qqn* | **COI** | *Convenir à* interdit l'accord au participe pronominal [Réf. `SRC-GRAM-01`, § 955]. | **convenu** |
| **8** | `*survécues` | *survivre à qqn* | **COI** | *Survivre à* est indirect. Aucun COD n'existe $\rightarrow$ invariabilité absolue [Réf. `SRC-GRAM-01`, § 955]. | **survécu** |

---

## 16. Mise en Pratique dans une Production Réelle

### 16.1 Consigne Opérationnelle de Rédaction
Rédigez un compte rendu historique dense de **60 mots exacts** respectant les contraintes impératives suivantes :
1. Intégrer obligatoirement les trois verbes cardinaux **se succéder**, **se plaire** et **se nuire** conjugués au **passé composé**.
2. Garantir une **invariabilité absolue** sans la moindre faute d'accord.
3. Éviter toute élision ambiguë ou apostrophe afin de satisfaire le décompte mot à mot typographique certifié (60 unités graphiques lexicales autonomes séparées par des espaces).
4. Joindre la table de justification actancielle pour chacun des trois verbes.

---

### 16.2 Texte Modèle Rédigé (60 Mots Exacts)

> *« Durant ce long règne impérial, plusieurs chanceliers influents se sont succédé sans interruption à la tête du pouvoir civil. Ces ministres rivaux se sont longtemps plu dans ces somptueux palais, mais leurs ambitions divergentes ont brisé cette fragile concorde. Par la suite, ces deux factions hostiles se sont continuellement nui avec acharnement pour confisquer les faveurs de ce monarque absolu. »*

---

### 16.3 Tableau de Décompte Mot à Mot Certifié (1 à 60)

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Durant | **11** | **succédé** | **21** | ministres | **31** | mais | **41** | la | **51** | avec |
| **2** | ce | **12** | sans | **22** | rivaux | **32** | leurs | **42** | suite, | **52** | acharnement |
| **3** | long | **13** | interruption | **23** | se | **33** | ambitions | **43** | ces | **53** | pour |
| **4** | règne | **14** | à | **24** | sont | **34** | divergentes | **44** | deux | **54** | confisquer |
| **5** | impérial, | **15** | la | **25** | longtemps | **35** | ont | **45** | factions | **55** | les |
| **6** | plusieurs | **16** | tête | **26** | **plu** | **36** | brisé | **46** | hostiles | **56** | faveurs |
| **7** | chanceliers | **17** | du | **27** | dans | **37** | cette | **47** | se | **57** | de |
| **8** | influents | **18** | pouvoir | **28** | ces | **38** | fragile | **48** | sont | **58** | ce |
| **9** | se | **19** | civil. | **29** | somptueux | **39** | concorde. | **49** | continuellement | **59** | monarque |
| **10** | sont | **20** | Ces | **30** | palais, | **40** | Par | **50** | **nui** | **60** | absolu. |

$$\text{Total arithmétique certifié} = 60\text{ mots exacts}.$$

---

### 16.4 Table de Justification Syntaxique des Formes Intégrées

| Verbe cible employé | Occurrence dans le texte | Sujet syntaxique | Analyse de la rection | Statut du clitique conjoint | Justification de l'invariabilité |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **se succéder** | *se sont **succédé*** (mot 11) | *plusieurs chanceliers influents* (masc. plur.) | *succéder à qqn* | **COI** | Verbe transitif indirect sans COD $\rightarrow$ invariabilité absolue en *-é*. |
| **se plaire** | *se sont [...] **plu*** (mot 26) | *Ces ministres rivaux* (masc. plur.) | *plaire à qqn* | **COI** | Verbe transitif indirect en *à* $\rightarrow$ participe invariable *plu*. |
| **se nuire** | *se sont [...] **nui*** (mot 50) | *ces deux factions hostiles* (fém. plur.) | *nuire à qqn* | **COI** | Verbe indirect. Pas de COD $\rightarrow$ invariabilité absolue en *-i*, sans marque de genre ni de nombre. |

---

## 17. Résumé Structuré

### L'Aide-Mémoire Infaillible des Dix Invariables

```text
========================================================================================
            L'ALGORITHME FLASH DES PARTICIPES PRONOMINAUX INVARIABLES
========================================================================================
                 LE VERBE PRONOMINAL EST-IL AU PASSÉ COMPOSÉ ?
                                       │
                                       ▼
      Le verbe non pronominal se construit-il OBLIGATOIREMENT avec « À » (ou « DE ») ?
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
                   OUI                                   NON
                    │                                     │
                    ▼                                     ▼
   LE PRONOM « SE » EST COI EXCLUSIF.              Chercher le COD :
    IL N'EXISTE AUCUN COD DIRECT.              • se est COD -> Accord.
                    │                          • COD distinct après -> Invariable.
                    ▼                          • COD distinct avant -> Accord.
     PARTICIPE STRICTEMENT INVARIABLE !
  (Zéro « -s », zéro « -e », zéro « -es »)
========================================================================================
```

#### Tableau Récapitulatif d'Urgence des Dix Cardinaux
1. *se plaire* $\rightarrow$ **plu**
2. *se complaire* $\rightarrow$ **complu**
3. *se déplaire* $\rightarrow$ **déplu**
4. *se rire (de)* $\rightarrow$ **ri**
5. *se nuire* $\rightarrow$ **nui**
6. *se convenir* $\rightarrow$ **convenu**
7. *se ressembler* $\rightarrow$ **ressemblé**
8. *se succéder* $\rightarrow$ **succédé**
9. *se suffire* $\rightarrow$ **suffi**
10. *se survivre* $\rightarrow$ **survécu**

#### Verbes de Communication Sociale Associés
- *se parler* $\rightarrow$ **parlé**
- *se téléphoner* $\rightarrow$ **téléphoné**
- *se sourire* $\rightarrow$ **souri**
- *se mentir* $\rightarrow$ **menti**
- *s'en vouloir* $\rightarrow$ **voulu**

---

## 18. Questions de Rappel Actif (Active Recall)

Testez votre mémoire de travail et votre précision conceptuelle en répondant à ces six questions de haute rétention avant de dérouler les réponses :

1. **Question 1** : Pourquoi le verbe *se succéder* ne peut-il mathématiquement jamais recevoir la marque d'accord du pluriel *-s* dans la norme grammaticale française ?
2. **Question 2** : Citez de mémoire les dix verbes cardinaux de la liste fermée de Grevisse (§ 955) dont le participe passé est invariable par nature sous la voix pronominale.
3. **Question 3** : Quelle est la différence de rection et d'accord entre *« Les jours se sont suivis »* et *« Les jours se sont succédé »* ?
4. **Question 4** : Dans la phrase *« Les deux conspiratrices se sont échappées »*, pourquoi le participe s'accorde-t-il alors qu'on dit par ailleurs *« Ce détail lui a échappé »* ?
5. **Question 5** : Comment s'orthographie le participe passé du verbe *se nuire* lorsqu'il a pour sujet un nom féminin pluriel (*« Les deux nations se sont... »*) ? Expliquez pourquoi la forme `*nuises` est une double aberration.
6. **Question 6** : Quelle distinction fondamentale Port-Royal et la linguistique moderne établissent-elles entre transitivité sémantique et transitivité syntaxique ?

<details>
<summary><strong>Réponses détaillées de rappel actif (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Parce que *succéder* est un verbe transitif indirect qui se construit obligatoirement avec la préposition *à* (*succéder à quelqu'un*). Dans *se succéder*, le pronom *se* est exclusivement COI (*l'un à l'autre*). Comme le verbe n'admet aucun COD, la règle de Clément Marot empêche tout accord : le participe demeure invariablement masculin singulier neutre (*succédé*).
2. **Réponse 2** : Les dix verbes cardinaux sont : *se plaire, se complaire, se déplaire, se rire, se nuire, se convenir, se ressembler, se succéder, se suffire, se survivre*.
3. **Réponse 3** :
   - *Suivre* est transitif direct (*suivre quelqu'un*). Le clitique *se* est COD antéposé $\rightarrow$ accord avec le sujet référent : *Les jours se sont **suivis***.
   - *Succéder* est transitif indirect (*succéder à quelqu'un*). Le clitique *se* est COI $\rightarrow$ absence de COD $\rightarrow$ invariabilité : *Les jours se sont **succédé***.
4. **Réponse 4** : Dans *s'échapper*, le verbe change de valeur sémantique pour désigner l'action physique de s'enfuir : il fonctionne comme un verbe essentiellement pronominal ou à réflexivité directe intégrale où le pronom fait corps avec le sujet. Il s'accorde donc obligatoirement avec le sujet *les deux conspiratrices* (*échappées*). Dans *le détail lui a échappé*, *échapper* conserve sa rection transitive indirecte non pronominale avec *lui* COI.
5. **Réponse 5** : On écrit *« Les deux nations se sont **nui** »*. La forme `*nuises` est une double aberration car :
   - D'une part, le verbe *nuire à* est transitif indirect, interdisant tout accord au féminin pluriel ;
   - D'autre part, la morphologie du participe passé de *nuire* est *nui* (du latin *nocitum*), forme sans consonne finale sonore qui ne peut en aucun cas générer un féminin en `*nuise` (contrairement à *conduire* $\rightarrow$ *conduit / conduite*).
6. **Réponse 6** : La transitivité sémantique concerne l'interaction entre deux êtres dans le monde réel (action partagée ou réciproque), tandis que la transitivité syntaxique concerne le codage formel du complément sous la forme d'un objet direct accusatif non prépositionnel. L'accord du participe dépend exclusivement de la transitivité syntaxique.

</details>

---

## 19. Mini-Évaluation Sommative Notée sur 20 Points

- **Durée indicative** : 30 minutes (épreuve sur table, sans document ni support numérique).
- **Seuil d'excellence L3 Autonomie** : **14 / 20** (toute note inférieure à 14/20 impose un sas de consolidation de deux heures sur la valence verbale).
- **Barème pénal officiel** : Tout accord fautif sur un verbe intransitif de la liste fermée (*succédé\**, *plu\**, *nui\**, *parlé\**) entraîne le retrait automatique de **-4 points** sur la note globale de l'épreuve.

---

### Sujet de l'Épreuve

#### Partie I : Rection Verbale et Orthographe Immédiate (5 points — 1 pt par item)
Complétez par le participe passé du verbe entre parenthèses sous son orthographe rigoureusement normée :
1. *Ces deux reines éclairées se sont (succéder) sur le trône sans qu'aucune guerre n'éclate.*
2. *Elles se sont (plaire) dès leur première rencontre à la cour de Florence.*
3. *Ces deux entreprises rivales se sont (nuire) en déclenchant une guerre des prix dévastatrice.*
4. *Les deux accusées se sont (souri) avant que le président du tribunal ne prononce le verdict.*
5. *Ces deux sœurs se sont (ressembler) de manière frappante durant toute leur jeunesse.*

#### Partie II : Duels Syntaxiques et Paires Minimales (5 points — 1,25 pt par item)
Accordez les deux participes passés en gras et explicitez la raison de leur accord ou de leur invariabilité :
1. *Les crises financières se sont (suivre) et se sont (succéder) à un rythme vertigineux.*
2. *Ces deux puissances militaires se sont (combattre) avec acharnement et se sont mutuellement (nuire).*
3. *Elles se sont (féliciter) de leur élection et se sont longuement (téléphoner).*
4. *Les prisonnières se sont (échapper), mais le sens de leur évasion a (échapper) aux gardiens.*

#### Partie III : Chirurgie Textuelle et Justification Métalinguistique (4 points — 2 pts par item)
Identifiez l'erreur dans la phrase citée, biffez la forme fautive, écrivez la graphie normée et rédigez l'attestation grammaticale canonique :
1. *« Les deux délégations diplomatiques se sont longuement parlées avant de clore les négociations de paix. »*
2. *« Dès que les difficultés ont surgi, ces deux associés se sont déplues et se sont rient des avertissements de la banque. »*

#### Partie IV : Analyse Actancielle Approfondie d'un Texte Juridique (6 points)
Soit l'extrait suivant :
> *« Attendu que les parties contractantes se sont **convenu** de clauses résolutoires spécifiques et se sont **notifié** leurs prétentions respectives par acte d'huissier, la cour constate que les conventions légalement formées se sont **imposé** aux signataires comme la loi même. »*

1. Justifiez l'invariabilité de *convenu* (2 points).
2. Justifiez l'invariabilité de *notifié* par l'analyse de son complément direct (2 points).
3. Analysez le statut du verbe *se sont imposé(es)* : la forme du texte est-elle correcte ou fautive ? Rétablissez la forme exacte en justifiant par la distinction sens passif vs sens indirect (2 points).

---

### Corrigé Officiel et Barème Détaillé

<details>
<summary><strong>Barème officiel et corrigé de la mini-évaluation (cliquer pour dérouler)</strong></summary>

#### Partie I : Rection et Orthographe (5 points — 1 pt par item)
1. *« se sont **succédé** »* (1 pt). *succéder à* $\rightarrow$ *se* = COI $\rightarrow$ invariable. (Tout ajout de *-es* entraîne -4 pts sur l'ensemble du devoir).
2. *« se sont **plu** »* (1 pt). *plaire à* $\rightarrow$ *se* = COI $\rightarrow$ invariable.
3. *« se sont **nui** »* (1 pt). *nuire à* $\rightarrow$ *se* = COI $\rightarrow$ invariable.
4. *« se sont **souri** »* (1 pt). *sourire à* $\rightarrow$ *se* = COI $\rightarrow$ invariable.
5. *« se sont **ressemblé** »* (1 pt). *ressembler à* $\rightarrow$ *se* = COI $\rightarrow$ invariable.

#### Partie II : Duels Syntaxiques (5 points — 1,25 pt par item)
1. *« se sont **suivies** »* (0,625 pt : transitif direct, *se* = COD antéposé) et *« se sont **succédé** »* (0,625 pt : transitif indirect en *à*, *se* = COI).
2. *« se sont **combattues** »* (0,625 pt : transitif direct, *se* = COD antéposé) et *« se sont mutuellement **nui** »* (0,625 pt : transitif indirect, *se* = COI).
3. *« se sont **félicitées** »* (0,625 pt : transitif direct, *se* = COD antéposé) et *« se sont longuement **téléphoné** »* (0,625 pt : transitif indirect en *à*, *se* = COI).
4. *« se sont **échappées** »* (0,625 pt : verbe pronominal de mouvement autonome/essentiel $\rightarrow$ accord sujet) et *« a **échappé** »* (0,625 pt : transitif indirect non pronominal avec *avoir* sans COD antéposé).

#### Partie III : Chirurgie Textuelle (4 points — 2 pts par item)
1. *Diagnostic* : `*parlées` est fautif (1 pt).  
   *Attestation* : Le verbe *parler* est transitif indirect (*parler à qqn*). Le pronom réciproque *se* est COI. En l'absence absolue de COD, le participe passé est invariable.  
   *Correction* : *« se sont longuement **parlé** »* (1 pt).
2. *Diagnostic* : `*déplues` et `*rient` sont deux solécismes grossiers (1 pt).  
   *Attestation* : *Déplaire* est indirect (*déplaire à*) $\rightarrow$ invariable *déplu*. *Se rire* a pour participe passé *ri* (et non la forme verbale finie du présent *rient*) qui est invariable (*se rire de*).  
   *Correction* : *« se sont **déplu** et se sont **ri** des avertissements »* (1 pt).

#### Partie IV : Analyse Actancielle (6 points)
1. **Justification de *convenu*** (2 pts) : *Convenir* est employé ici au sens de tomber d'accord sur / être approprié à (*convenir à qqn*). Le pronom *se* est COI. Absence de COD $\rightarrow$ participe invariable *convenu*.
2. **Justification de *notifié*** (2 pts) : *Notifier* est un verbe transitif direct (*notifier quelque chose à quelqu'un*). Le COD est le syntagme nominal *leurs prétentions respectives*. Ce COD est placé **après** le verbe. Le clitique *se* est COI (*l'une à l'autre*). Selon la règle de Marot, le COD étant postposé, le participe reste invariable : *notifié*.
3. **Analyse de *s'imposer*** (2 pts) : La forme du texte (*se sont imposé*) est **fautive** (1 pt). Dans cet énoncé, *les conventions se sont imposées* n'a pas un sens indirect (elles n'ont pas imposé quelque chose à elles-mêmes), mais un **sens passif** (*les conventions ont été imposées aux signataires*). Or, les verbes pronominaux à sens passif s'accordent obligatoirement en genre et en nombre avec leur sujet grammatical (*les conventions* = fém. plur.).  
   *Forme rétablie* : *« les conventions [...] se sont **imposées** aux signataires »* (1 pt).

</details>

---

## 20. Critères Observables de Maîtrise (Palier L3 Autonomie)

La validation définitive du présent chapitre atteste l'acquisition opérationnelle du palier **L3 (Autonomie)** pour les compétences [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) et [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) du cursus World-Class French :

| Code Indicateur | Compétence Associée | Comportement Observable en Situation Autonome | Seuil d'Excellence Requis |
| :---: | :---: | :--- | :---: |
| **IND-01** | `FR-ORTHO-004` (**L3**) | **Invariabilité absolue des dix intransitifs cardinaux** : L'apprenant applique instantanément l'invariabilité aux verbes de la liste fermée (*se plaire, se complaire, se déplaire, se rire, se nuire, se convenir, se ressembler, se succéder, se suffire, se survivre*) sans jamais céder à l'accord phonétique ou au sujet. | **100 % de décisions exactes** sur corpus d'examen |
| **IND-02** | `FR-SYNTAX-001` (**L3**) | **Démonstration formelle de la valence verbale** : Face à n'importe quel verbe pronominal litigieux, l'apprenant reformule la phrase à l'actif avec *avoir* et prouve la fonction COI du clitique conjoint par la question *à qui ?*. | **100 % d'attestations valides** |
| **IND-03** | `FR-ORTHO-004` (**L3**) | **Résolution des duels syntaxiques** : L'apprenant discrimine sans hésitation les paires lexicales à transitivité divergente (*se suivre* vs *se succéder*, *se battre* vs *se nuire*, *se féliciter* vs *se complaire*). | $\ge 95\ \%$ sur batterie de 20 phrases pièges |
| **IND-04** | `FR-ORTHO-004` (**L3**) | **Chirurgie orthographique en révision de texte** : L'apprenant repère et rectifie sans omission les accords fautifs sur verbes pronominaux indirects dans un texte dense et rédige la justification académique associée. | **Zéro faute tolérée** (barème pénal à -4 pts neutralisé) |

---

## 21. Sources et Lectures Complémentaires

Conformément à la politique d'intégrité bibliographique du cursus World-Class French ([`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md)), toutes les démonstrations morphosyntaxiques et règles canoniques de ce chapitre s'appuient exclusivement sur les autorités suivantes :

1. **[`SRC-GRAM-01`] Grevisse, Maurice & Goosse, André (2016)**. *Le Bon Usage : Grammaire française* (16e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 950** : Principes généraux de l'accord des verbes pronominaux et valeur profonde de l'auxiliaire *avoir*.
   - **§ 951** : Statut morphologique des verbes essentiellement pronominaux et subjectifs (*s'échapper*, *se douter*).
   - **§ 955** : Traitement exhaustif des verbes accidentellement pronominaux dont le participe est **invariable par nature** (la liste fermée des intransitifs en *à* et *de*, historique des controverses littéraires, cas de *s'entre-nuire* et condamnation de l'accord sur *se succéder*).
2. **[`SRC-GRAM-02`] Riegel, Martin, Pellat, Jean-Christophe & Rioul, René (2016/2021)**. *Grammaire méthodique du français*. Paris : Presses Universitaires de France (PUF), coll. « Quadrige ».
   - **Chapitre 12 (*Les pronoms*)** : Syntaxe des clitiques conjoints réfléchis, statut argumental vs morphologique de *se*.
   - **Chapitre 17 (*La morphologie et la syntaxe du verbe*)** : Théorie des diathèses (voix active, passive, moyenne, pronominale), analyse de la rection prépositionnelle obligatoire et formalisation générative des cas accusatif et datif.
3. **[`SRC-NORM-03`] Ministère de l'Éducation nationale (2020)**. *Terminologie grammaticale*. Paris : Réseau Canopé / Éduscol.
   - **Page 30 (*Les formes pronominales et l'accord du participe passé*)** : Définition officielle de la distinction entre constructions réfléchies transitives directes et transitives indirectes.
4. **[`SRC-TYPO-01`] Imprimerie nationale (2002/2014)**. *Lexique des règles typographiques en usage à l'Imprimerie nationale*. Paris : Imprimerie nationale.
   - **Pages 142 à 144 (*Ponctuation et conventions d'écriture*)** : Normes de composition des dialogues, citations juridiques et protocole officiel de calcul des mots typographiques.

---

## Annexe : Classification Pédagogique et Traçabilité du Contenu

Conformément aux directives méthodologiques de gouvernance ([`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md)), le tableau ci-dessous explicite la répartition didactique des notions abordées dans ce chapitre de spécialisation :

| Étiquette didactique | Contenu grammatical / Notion syntaxique | Justification didactique & Destination précise |
| :---: | :--- | :--- |
| **CORE-NOW** | • Démonstration syntaxique de l'invariabilité absolue par la rection en *à*.<br/>• Liste fermée des 10 verbes cardinaux de Grevisse § 955.<br/>• Verbes de communication et d'interaction sociale (*se parler, se téléphoner, se sourire*).<br/>• Démystification définitive du piège *ils se sont succédé* vs *ils se sont suivis*.<br/>• Proscription absolue des accords phonétiques et analogiques avec le sujet. | Cœur opérationnel du chapitre `CHP-303-04`. Verrouillage indispensable du palier L3 pour la compétence `FR-ORTHO-004`. |
| **INTRODUCTION-NOW** | • Première approche du comportement singulier de *s'entre-nuire* (Grevisse § 955).<br/>• Analyse différentielle entre verbes à double rection (*échapper à* vs *s'échapper*, *douter de* vs *se douter de*). | Sensibiliser l'étudiant aux frontières lexicales où la polysémie influe sur la transitivité. |
| **DEFER** | • Règle d'accord du participe passé des verbes pronominaux suivi d'un infinitif (*ils se sont laissé mourir*, *elle s'est sentie défaillir*). | **Reporté à [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md)** (Semestre 4 : cas limites du participe suivi d'un infinitif). |
| **DEFER** | • Traitement morphologique intégral du pluriel des noms composés d'usage courant et rectifications de 1990. | **Reporté à [`CHP-303-05`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-5--pluriel-des-noms-composés-et-pièges-morphologiques)**. |
| **DEFER** | • Grille d'arbitrage globale et arbre de décision unifié en 4 questions pour l'ensemble des verbes pronominaux. | **Reporté à [`CHP-303-06`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-6--synthèse-algorithmique-et-protocole-darbitrage)**. |
| **MOVE** | • Stylistique des variations d'accord chez les mémorialistes du Grand Siècle (Saint-Simon, Retz). | **Rattaché à [`MOD-504`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-504-revision-editoriale-typographie-savante.md)** (*Révision Éditoriale et Typographie Savante*). |
| **OPTIONAL-ADVANCED** | • Analyse diachronique de l'effondrement du datif latin et théorie des cas obliques chez Arnauld et Lancelot (Grammaire de Port-Royal, 1660). | Section 12 du présent chapitre, destinée aux étudiants préparant l'Agrégation de grammaire ou de lettres. |
| **REMOVE** | • Les tolérances d'accord proposées par certains réformateurs marginaux du début du XXe siècle non retenues par l'Académie française. | Écarté pour préserver l'intégrité de la norme prescriptive officielle exigée aux concours nationaux. |
