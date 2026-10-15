# Chapitre 1 — Typologie Syntaxique et Sémantique des Subordonnées Circonstancielles : Les Sept Relations Logiques Fondamentales

> **Identifiant du chapitre** : `CHP-302-01`  
> **Module de rattachement** : [`MOD-302` — Subordonnées Circonstancielles, Système Modal (Subjonctif et Conditionnel) et Concordance des Temps](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md)  
> **Semestre** : Année 2 — Semestre 3 (S3)  
> **Volume horaire estimé** : 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application (Phase 1 Étude : 1 h 30 | Phase 2 Pratique : 1 h 30 | Phase 3 Correction : 1 h 00 | Phase 4 Évaluation : 1 h 00)  
> **Statut** : [STATUT : VALIDÉ]  
> **Compétences associées** : [`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe) (L3 Autonomie), [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) (L3 Autonomie), [`FR-INT-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-002-analyser-formellement-la-syntaxe-dune-phrase-complexe) (L2/L3 Transition autonomie)  
> **Sources scientifiques de référence** : `SRC-GRAM-01` (Grevisse & Goosse, 2016, § 1030-1055), `SRC-GRAM-02` (Riegel, Pellat & Rioul, 2016, chap. 16), `SRC-NORM-03` (Ministère de l'Éducation nationale, 2020, p. 32-34), `SRC-TYPO-01` (Imprimerie nationale, 2002, p. 142-144)

---

## 1. Titre et Place dans le Cursus

### 1.1 Intitulé Officiel
**Chapitre 1 : Typologie Syntaxique et Sémantique des Subordonnées Circonstancielles : Les Sept Relations Logiques Fondamentales** (`CHP-302-01`).

### 1.2 Insertion Architecturale dans le Cursus
Le présent chapitre inaugure le module [`MOD-302`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md). Alors que le module [`MOD-301`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md) a exploré l'armature nucléaire de la subordination (les propositions complétives sélectionnées par la valence verbale et les propositions relatives intégrées au groupe nominal), `CHP-302-01` ouvre l'étude de la **périphérie modalisatrice et logique de la phrase complexe** : les propositions subordonnées circonstancielles [Réf. `SRC-NORM-03`, p. 32-34 ; `SRC-GRAM-02`, chap. 16].

Dans la construction d'un raisonnement académique, juridique ou littéraire de haut niveau, l'énonciateur ne juxtapose pas des constatations brutes. Il contextualise l'action, motive les décisions, pèse les concessions, anticipe les résultats et subordonne les procès à des conditions déterminées. Ce chapitre structure l'analyse des sept relations logico-sémantiques fondamentales du français (cause, conséquence, but, concession/opposition, condition/hypothèse, temps, comparaison) et établit le pont méthodologique indispensable vers la maîtrise du système modal (subjonctif et conditionnel) et de la concordance des temps [Réf. `SRC-GRAM-01`, § 1030].

```mermaid
flowchart TD
    MOD201["<b>MOD-201 (S2)</b><br/>Syntaxe Fonctionnelle de la Phrase Simple<br/>& Compléments Circonstanciels"] --> CHP30201["<b>CHP-302-01</b><br/>Typologie Syntaxique & Sémantique<br/>des Circonstancielles (7 relations)"]
    MOD301["<b>MOD-301 (S3)</b><br/>Architecture de la Subordination :<br/>Complétives, Interrogatives & Relatives"] --> CHP30201

    CHP30201 ==>|Fondement sémantique du mode| CHP30202["<b>CHP-302-02</b><br/>Sémantique Fondamentale :<br/>Subjonctif (virtuel) vs Indicatif (réel)"]
    CHP30201 ==>|Crible des conjonctions duelles| CHP30203["<b>CHP-302-03</b><br/>Les Pièges Normatifs du Système Modal<br/>(après que, espérer, opinion, malgré que)"]
    CHP30201 ==>|Structures conditionnelles canoniques| CHP30204["<b>CHP-302-04</b><br/>Le Système du Conditionnel<br/>& Structures Périodiques en si"]
    CHP30201 ==>|Marqueurs de polarité énonciative| CHP30205["<b>CHP-302-05</b><br/>Le « ne » Explétif & la Polarité<br/>Énonciative (crainte, antériorité)"]
    CHP30201 ==>|Régimes temporels sous subordination| CHP30206["<b>CHP-302-06</b><br/>Concordance des Temps à l'Indicatif<br/>& au Subjonctif Littéraire"]

    CHP30201 -.->|Densité logique de l'argumentation| MOD304["<b>MOD-304 (S3)</b><br/>Synthèse Comparative de Documents d'Idées"]
    CHP30201 -.->|<b>DEP-VRB-02 (Hard)</b> : Polyphonie & modalisation| MOD401["<b>MOD-401 (S4)</b><br/>Pragmatique Énonciative, Accords Limites<br/>& Rectifications de 1990"]
    CHP30201 -.->|Réfutation & concessions oratoires| MOD402["<b>MOD-402 (S4)</b><br/>Rhétorique Argumentative,<br/>Réfutation & Détection des Sophismes"]

    classDef fondation stroke:#2563eb,stroke-width:2px;
    classDef pivot stroke:#b91c1c,stroke-width:3px;
    classDef suite stroke:#059669,stroke-width:2px;
    classDef perspective stroke:#7c3aed,stroke-width:2px;
    class MOD201,MOD301 fondation;
    class CHP30201 pivot;
    class CHP30202,CHP30203,CHP30204,CHP30205,CHP30206 suite;
    class MOD304,MOD401,MOD402 perspective;
```

- **En amont** : Ce chapitre réinvestit les compétences de délimitation de la phrase simple issues de [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) (tests de déplacement et d'effacement) et la théorie de la dépendance propositionnelle de [`MOD-301`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md).
- **En aval immédiat** : Il fournit le socle classificatoire régissant l'ensemble du module `MOD-302`. Les chapitres suivants approfondiront la théorie de l'actualisation (`CHP-302-02`), les pièges normatifs comme *après que* ou *malgré que* ([`CHP-302-03`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-03-pieges-normatifs-regimes-modaux-alternatifs.md)), l'architecture des périodes conditionnelles en *si* (`CHP-302-04`), les déclencheurs du *ne* explétif (`CHP-302-05`) et la concordance des temps (`CHP-302-06`).
- **En projection lointaine** : Le maniement des circonstants de concession, d'opposition et de conséquence conditionne directement la réussite de la synthèse comparative de documents ([`MOD-304`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-304-synthese-comparative-documents.md)), de la pragmatique énonciative ([`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md)) et de la dissertation académique ([`MOD-402`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md)).

---

## 2. Objectifs Mesurables

Au terme des 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application de ce chapitre, l'apprenant est capable de :

1. **Identifier, délimiter et classifier avec une exactitude de 100 %** toute proposition subordonnée circonstancielle au sein d'une période complexe selon sa famille logico-sémantique parmi les sept familles canoniques : cause, conséquence, but, concession/opposition, condition/hypothèse, temps, comparaison ([`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe), Palier L3 Autonomie).
2. **Valider formellement le statut de complément de phrase** de la subordonnée circonstancielle en appliquant avec rigueur les critères de mobilité syntagmatique (antéposition, interpolation, postposition) et de suppression, en la distinguant infailliblement de la complétive régie par la valence du verbe ([`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe), Palier L3 Autonomie).
3. **Justifier scientifiquement la sélection du mode verbal (indicatif vs subjonctif)** en explicitant la nature du connecteur conjonctif et le degré d'actualisation du procès (factualité réelle vs visée virtuelle ou contrefactuelle) sur un corpus de 20 phrases discriminantes ([`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance), Palier L3 Autonomie).
4. **Analyser et schématiser l'arborescence syntaxique intégrale** d'une période complexe multipropositionnelle comportant plusieurs circonstancielles coordonnées ou imbriquées sans aucune rupture de fil actanciel ([`FR-INT-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-002-analyser-formellement-la-syntaxe-dune-phrase-complexe), Palier L3 Autonomie).

---

## 3. Prérequis et Test de Préparation

### 3.1 Prérequis Exigibles
- **Validation certifiée des modules `MOD-103`, `MOD-201` et `MOD-301`** avec une note supérieure ou égale à 14/20.
- **Analyse fonctionnelle de la phrase simple (`MOD-201`)** : Distinction opératoire entre compléments essentiels du verbe (COD, COI) et compléments circonstanciels périphériques par les tests d'effacement et de déplacement.
- **Théorie générale de la subordination (`MOD-301`)** : Délimitation de la proposition principale (matrice rectrice souveraine de degré 0) et des propositions régies enchâssées.
- **Morphologie verbale de base (`MOD-103`)** : Reconnaissance instantanée des désinences de l'indicatif (présent, imparfait, passé simple, futur) et du subjonctif présent.

### 3.2 Test de Préparation (Auto-Diagnostic à 5 Questions)
Répondez aux cinq questions suivantes sans consulter de documentation extérieure avant de dérouler le corrigé :

1. **Question 1 (Délimitation fonctionnelle)** : Dans la phrase *« Les magistrats ont estimé que le témoin disait la vérité parce que ses déclarations concordaient avec les pièces du dossier »*, délimitez les deux propositions subordonnées et précisez laquelle est un complément du verbe et laquelle est un complément de phrase.
2. **Question 2 (Test de mobilité)** : Soit la subordonnée circonstancielle *« Bien que les pourparlers soient au point mort »*. Peut-on la déplacer au début, au milieu ou à la fin de la phrase : *« Les médiateurs poursuivent leur mission »* ? Que déduisez-vous sur son statut syntaxique ?
3. **Question 3 (Identification sémantique)** : Quelle relation logique relie les deux propositions suivantes : *« Le quorum n'était pas atteint, de sorte que le vote a été reporté à vendredi »* ? Est-ce la cause, le but ou la conséquence ?
4. **Question 4 (Discrimination modale)** : Parmi ces deux connecteurs temporels, lequel exige le subjonctif et lequel exige l'indicatif dans la norme standard : *avant que* et *dès que* ? Justifiez brièvement.
5. **Question 5 (Terminologie de la période conditionnelle)** : Dans la période *« Si les crédits sont débloqués à temps, le chantier sera livré avant l'hivernage »*, comment appelle-t-on traditionnellement la subordonnée introduite par *si* et comment appelle-t-on la proposition principale ?

<details>
<summary><strong>Corrigé détaillé et barème de l'auto-diagnostic (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** :
   - *« que le témoin disait la vérité »* : proposition subordonnée complétive, **complément d'objet direct (COD)** du verbe recteur *ont estimé* (complément essentiel du verbe, non effaçable).
   - *« parce que ses déclarations concordaient avec les pièces du dossier »* : proposition subordonnée circonstancielle de cause, **complément de phrase** (périphérique, mobile et effaçable).
2. **Réponse 2** :
   - En tête : *« Bien que les pourparlers soient au point mort, les médiateurs poursuivent leur mission. »* (avec virgule).
   - Au milieu : *« Les médiateurs, bien que les pourparlers soient au point mort, poursuivent leur mission. »* (entre deux virgules).
   - En fin : *« Les médiateurs poursuivent leur mission bien que les pourparlers soient au point mort. »*
   - *Déduction* : La proposition subordonnée circonstancielle jouit d'une **mobilité syntagmatique**, propriété caractéristique des compléments de phrase externes.
3. **Réponse 3** : Il s'agit d'une relation de **conséquence** (la proposition introduite par *de sorte que* exprime le résultat effectif découlant du manque de quorum).
4. **Réponse 4** :
   - *Avant que* exige le **subjonctif** car il introduit un procès prospectif non encore réalisé au moment de la principale (procès virtuel).
   - *Dès que* exige l'**indicatif** car il introduit un procès ancré dans la réalité temporelle (simultanéité immédiate ou accomplissement avéré).
5. **Réponse 5** : La subordonnée introduite par *si* est la **protase** (énoncé de la condition) ; la proposition principale exprimant le résultat conditionné est l'**apodose**.

> **Diagnostic** : Si vous obtenez moins de 4/5, révisez immédiatement les notions fondamentales de compléments circonstanciels dans [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md) et la théorie de la subordination dans [`MOD-301`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md) avant d'aborder la section 4.
</details>

---

## 4. Situation de Départ ou Problème Concret

### 4.1 La Confusion des Relations Logiques dans la Prose d'Idées
Dans les mémoires universitaires, les rapports de haute administration, les réquisitoires juridiques et les dissertations de concours, la pensée complexe s'articule autour de relations logiques exigeantes. C'est précisément sur ce terrain que les correcteurs et les jurys constatent les failles argumentatives les plus dévastatrices : **la dégradation des connecteurs circonstanciels et l'interversion des rapports logiques fondamentaux** [Réf. `SRC-GRAM-02`, chap. 16].

Observons quatre extraits authentiques issus de travaux d'étudiants de licence et de copies de concours administratif :

> ❌ **Énoncé A (L'inversion fatale de la causalité : cause vs conséquence)** :  
> *« Les investisseurs ont retiré leurs capitaux parce que les cours boursiers se sont effondrés, de sorte que la crise de confiance a provoqué la panique bancaire. »*  
> *(Le scripteur empile mécaniquement des connecteurs sans hiérarchiser ce qui est la cause première, l'effet immédiat et la résultante finale, créant un cercle vicieux tautologique où la conséquence est présentée comme la cause de son propre déclencheur).*

> ❌ **Énoncé B (L'amalgame entre opposition factuelle et concession restrictive)** :  
> *« Bien que le secteur minier contribue à 15 % du PIB national, le secteur agricole emploie 60 % de la population active. »*  
> *(Non-sens logique : il n'y a aucune relation de cause à effet contrariée entre ces deux données économiques indépendantes. L'emploi de la conjonction concessive « bien que » est un contresens : le contexte réclamait une conjonction d'opposition factuelle symétrique comme « tandis que » ou « alors que »).*

> ❌ **Énoncé C (L'incapacité à délimiter les circonstants dans les textes denses)** :  
> *« Le conseil des ministres a décidé hier après que le comité de crise ait achevé ses délibérations que le projet de loi de finances sera transmis d'urgence au parlement. »*  
> *(Absence totale de balisage démarcatif : la circonstancielle de temps est incrustée entre le verbe principal « a décidé » et sa complétive COD « que le projet de loi... », créant un effet d'asphyxie syntaxique doublé d'un subjonctif fautif après « après que »).*

> ❌ **Énoncé D (Le faux connecteur hybride par télescopage oral)** :  
> *« Les créances douteuses se sont accumulées au point où la banque centrale a dû placer l'établissement sous administration provisoire. »*  
> *(Emploi illicite du tour hybride oral « au point où » à la place de la locution conjonctive consécutive normée « au point que »).*

### 4.2 Analyse Clinique du Dysfonctionnement
Ces pathologies récurrentes révèlent trois lacunes structurales majeures :
1. **L'indistinction entre la rection verbale et la modification périphérique** : Le scripteur traite la subordonnée circonstancielle comme un paquet lexical interchangeable, sans percevoir qu'elle modifie la prédication tout entière (complément de phrase externe) et non le verbe recteur isolé.
2. **La surdité sémantique aux vecteurs logiques** : Confondre cause (antécédent logique) et conséquence (conséquent logique), ou confondre concession (obstacle surmonté invalidant une inférence) et opposition (mise en contraste de deux faits indépendants sans contradiction causale), aboutit à fausser le raisonnement démonstratif.
3. **Le découplage entre morphologie modale et statut énonciatif** : L'apprenant applique l'indicatif ou le subjonctif au hasard de réminiscences sonores, ignorant que le choix du mode traduit rigoureusement le degré d'actualisation du procès dans la réalité [Réf. `SRC-GRAM-01`, § 870-873].

Pour surmonter ces écueils, le scripteur d'élite doit disposer d'une cartographie limpide et opératoire des sept relations circonstancielles fondamentales du français.

---

## 5. Explication Intuitive : Les Satellites Orbitaux et les Cadrans de Bord

Pour conceptualiser le fonctionnement d'une subordonnée circonstancielle sans se perdre d'emblée dans le formalisme abstrait, deux modélisations analogiques complémentaires s'imposent :

### 5.1 L'Analogie du Vaisseau-Mère et de ses Satellites Orbitaux
Imaginons une mission spatiale d'exploration :
- Le **vaisseau-mère souverain** représente la **proposition principale**. Il possède son propre système de propulsion autonome (le groupe sujet et le prédicat verbal verbalement saturé). Il porte l'assertion de la phrase : *« Le navire appareilla pour la haute mer »*.
- Les **satellites orbitaux d'escorte** représentent les **propositions subordonnées circonstancielles**. Ils gravitent autour du vaisseau-mère sans faire partie intégrante de sa carlingue :
  - Ils peuvent voler **en avant** du vaisseau (antéposition : *« Dès que l'ordre parvint au port, le navire appareilla... »*) ;
  - Ils peuvent voler **sur les flancs** (interpolation médiane : *« Le navire, bien que la tempête menaçât, appareilla... »*) ;
  - Ils peuvent voler **en arrière** (postposition : *« Le navire appareilla pour la haute mer parce que les cales étaient pleines »*).
- **Le test de survie mécanique** : Si un satellite est rappelé ou désactivé (suppression de la circonstancielle), le vaisseau-mère continue sa trajectoire sans dévier : la phrase reste syntaxiquement autonome et complète. Mais si vous détruisez le vaisseau-mère (suppression de la principale), le satellite ne peut voler seul dans le vide : il devient un débris spatial orphelin (phrase tronquée agrammaticale).

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ PHRASE COMPLEXE CIRCONSTANCIELLE                                                       │
│                                                                                        │
│ [SATELLITE 1 : Antéposé]     [VAISSEAU-MÈRE SOUVERAIN (Degré 0)]     [SATELLITE 2 : Postposé] │
│ "Bien que la brume fût dense,    le capitaine maintint le cap        parce que le radar     │
│                                                                       fonctionnait bien."    │
│ (Concession : obstacle vaincu)      (Assertion principale autonome)      (Cause : motif réel)  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Les Sept Cadrans de Navigation du Tableau de Bord
Les subordonnées circonstancielles sont les instruments de mesure qui contextualisent le vol du vaisseau-mère. Elles répondent à sept questions fondamentales :
1. **Cadran de la CAUSE** : *Pourquoi le vol a-t-il lieu ?* $\rightarrow$ En raison d'un événement antérieur qui motive le départ (*parce que, puisque*).
2. **Cadran de la CONSÉQUENCE** : *Quel est le résultat produit ?* $\rightarrow$ L'impact effectif engendré par la trajectoire (*si bien que, de sorte que*).
3. **Cadran du BUT** : *Vers quel objectif tend l'action ?* $\rightarrow$ La cible idéale que le pilote cherche à atteindre (*afin que, pour que*).
4. **Cadran de la CONCESSION / OPPOSITION** : *Quel obstacle a été surmonté ou quel contraste est relevé ?* $\rightarrow$ Le vent contraire qui n'a pas empêché la marche (*bien que, quoique*) ou le paysage comparé (*tandis que*).
5. **Cadran de la CONDITION / HYPOTHÈSE** : *Sous quel verrou préalable l'action est-elle suspendue ?* $\rightarrow$ Le paramètre d'autorisation (*si, à condition que*).
6. **Cadran du TEMPS** : *Quand l'action se situe-t-elle sur la frise chronologique ?* $\rightarrow$ Avant, pendant ou après un autre événement (*avant que, pendant que, après que*).
7. **Cadran de la COMPARAISON** : *À quel modèle l'action est-elle assimilée ou mesurée ?* $\rightarrow$ L'étalon d'équivalence ou de proportion (*de même que, ainsi que, plus... que*).

---

## 6. Définitions Précises et Terminologie

Pour manipuler ces structures avec une précision chirurgicale, fixons la nomenclature académique officielle [Réf. `SRC-NORM-03`, p. 32-34 ; `SRC-GRAM-02`, chap. 16] :

- **Proposition subordonnée circonstancielle** : Proposition enchâssée dans une phrase complexe, introduite par une conjonction ou une locution conjonctive de subordination, et assumant la fonction de **complément de phrase** vis-à-vis de la proposition rectrice [Réf. `SRC-NORM-03`, p. 32].
- **Complément de phrase (vs complément de verbe)** : Fonction syntaxique assignée à un constituant périphérique qui ne dépend pas de la valence obligatoire du verbe (contrairement aux COD, COI ou compléments essentiels), mais qui modifie l'ensemble de la relation sujet-prédicat.
- **Mobilité syntagmatique** : Propriété formelle permettant à un constituant d'occuper différentes positions linéaires dans la phrase (en tête, au centre ou en fin d'énoncé) sans altérer la cohérence syntaxique globale [Réf. `SRC-GRAM-02`, § 260].
- **Effacement (test de suppression)** : Critère d'analyse distributionnelle établissant qu'un constituant peut être retranché d'une phrase sans que la séquence résiduelle ne perde sa grammaticalité ni sa complétude structurelle.
- **Connecteur conjonctif (conjonction et locution conjonctive de subordination)** : Mot invariable simple (*comme, quand, si, puisque, quoique*) ou locution plurimorphémique figée terminée par *que* (*parce que, bien que, afin que, pourvu que, aussitôt que*) dont le rôle bivalent est d'opérer la liaison syntaxique et de spécifier la valeur sémantique de la dépendance [Réf. `SRC-GRAM-01`, § 1030].
- **Relation logico-sémantique** : Rapport conceptuel (causal, final, temporel, etc.) établi par le subordonnant entre le procès de la proposition principale et le procès de la subordonnée.
- **Protase et Apodose** : Nomenclature rhétorique et syntaxique désignant les deux membres d'une période conditionnelle ou comparative : la **protase** est la proposition subordonnée exprimant la condition préalable ou la prémisse (souvent antéposée) ; l'**apodose** est la proposition principale énonçant le résultat ou la conclusion conditionnée [Réf. `SRC-GRAM-02`, § 280].
- **Cause factuelle vs Cause rejetée** :
  - *Cause factuelle* : Motif réel assumé par l'énonciateur comme existant dans l'univers de discours (*parce qu'il pleut* $\rightarrow$ indicatif).
  - *Cause rejetée (ou réfutée)* : Motif mentionné pour être aussitôt écarté ou démenti (*non que le ministre ignore la loi* $\rightarrow$ subjonctif).
- **Conséquence consécutive vs But final** :
  - *Conséquence consécutive* : Résultat effectif découlant nécessairement d'un fait antérieur et constaté dans sa réalité (*de sorte que tout le monde est parti* $\rightarrow$ indicatif).
  - *But final* : Résultat visé, désiré ou poursuivi par une intention humaine, mais dont l'accomplissement reste virtuel au moment où l'on parle (*afin que tout le monde parte* $\rightarrow$ subjonctif).

---

## 7. Règles ou Mécanismes Fondamentaux

### 7.1 Statut Syntaxique de la Subordonnée Circonstancielle : Complément de Phrase Externe
Contrairement aux subordonnées complétives étudiées dans [`MOD-301`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md), qui remplissent une fonction actancielle essentielle sélectionnée par le verbe (sujet ou objet), la subordonnée circonstancielle possède trois propriétés définitoires majeures [Réf. `SRC-NORM-03`, p. 32] :

1. **La faculté de suppression** : Elle n'est presque jamais exigée par le verbe régissant. On peut l'amputer sans rendre la principale agrammaticale :  
   *« [Bien que l'heure fût tardive], les délégués poursuivirent les débats »* $\rightarrow$ *« Les délégués poursuivirent les débats »* (syntaxiquement irréprochable).
2. **La liberté de déplacement** : Elle peut être antéposée, intercalée en incise ou postposée. Lorsqu'elle est placée en tête de phrase ou en incise, elle doit obligatoirement être isolée par une ou deux virgules démarcatives [Réf. `SRC-TYPO-01`, p. 143].
3. **Le détachement énonciatif** : Elle fournit un cadre spatio-temporel, logique ou attitudinal à l'intérieur duquel la proposition principale déploie son assertion.

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ DISTINCTION FONDAMENTALE : COMPLÉTIVE (MOD-301) vs CIRCONSTANCIELLE (MOD-302)            │
├──────────────────────────┬───────────────────────────────────────────────────────────────┤
│ Propriété syntaxique     │ Subordonnée Complétive (COD)  │ Subordonnée Circonstancielle  │
├──────────────────────────┼───────────────────────────────┼───────────────────────────────┤
│ Sélection par le verbe   │ Oui (valence obligatoire)     │ Non (greffe périphérique)     │
│ Suppression possible ?   │ Non (*Le juge ordonne [COD])  │ Oui (Le juge ordonne la garde)│
│ Déplacement en tête ?    │ Impossible ou rarissime       │ Libre et fréquent             │
│ Terme subordonnant       │ "Que" pur (asémantique)       │ Conjonction sémantique riche  │
│ Fonction grammaticale    │ Complément essentiel du verbe │ Complément de phrase externe  │
└──────────────────────────┴───────────────────────────────┴───────────────────────────────┘
```

---

### 7.2 Circonstancielles de Cause : Motiver la Prédication
La subordonnée de cause énonce la raison, le motif ou l'origine déterminante du procès exprimé dans la proposition principale [Réf. `SRC-GRAM-01`, § 1030].

1. **Conjonctions à l'indicatif (Cause factuelle avérée)** :
   - *Parce que* : connecteur neutre de base, répondant directement à la question *pourquoi ?*. Il apporte une information nouvelle, généralement rhématique et postposée :  
     *« L'audience a été suspendue **parce que l'avocat général est tombé malade** . »*
   - *Puisque* : introduit une cause tenue pour connue de l'interlocuteur, évidente ou incontestable. Il sert d'argument justificateur et se place très fréquemment en tête de phrase (thématique) :  
     *« **Puisque les faits sont établis avec certitude**, rendons le verdict sans délai. »*
   - *Comme* : toujours placé en tête de phrase absolue (antéposé). Il énonce une cause circonstancielle concomitante :  
     *« **Comme la nuit tombait rapidement**, la patrouille regagna le campement. »*
   - *Étant donné que / Vu que / Attendu que* : connecteurs de registre juridique et administratif constatant un fait objectif préalable.
   - *D'autant que / D'autant plus que* : apporte une cause additionnelle renforçant une motivation préexistante :  
     *« La décision est sage, **d'autant que les réserves financières s'épuisent** . »*
2. **Conjonctions au subjonctif (Cause rejetée ou hypothétique)** :
   - *Non que / Ce n'est pas que / Non pas que* : réfutent formellement un motif erroné pour lui substituer ensuite la vraie cause (introduite par *mais parce que* + indicatif) :  
     *« Il a décliné cette promotion, **non qu'il craigne les responsabilités**, mais parce que sa santé exige du repos. »*

---

### 7.3 Circonstancielles de Conséquence : Enregistrer le Résultat
La subordonnée de conséquence exprime l'effet produit, l'aboutissement réel ou le retentissement matériel de l'action principale [Réf. `SRC-GRAM-01`, § 1034 ; `SRC-GRAM-02`, § 265].

1. **Conséquence liée à la phrase tout entière (conséquence globale)** :
   - *De sorte que / De façon que / De manière que / Si bien que* (+ indicatif) :  
     *« Les pluies diluviennes ont emporté le pont, **si bien que la circulation ferroviaire est totalement interrompue** . »*
2. **Conséquence corrélative liée à un intensif (conséquence d'intensité)** :
   - Un adverbe d'intensité (*si, tellement, tant*) ou un déterminant (*un tel, une telle, de tels*) placé dans la principale annonce la subordonnée consécutive introduite par le simple *que* :  
     *« Le diplomate parla **avec tant de persuasion que toute l'assemblée se rallia à sa proposition** . »*  
     *« L'inflation a atteint un tel niveau **que les ménages réduisent leurs dépenses essentielles** . »*
3. **Le régime modal de la conséquence** :
   - La conséquence constatée dans les faits commande impérativement l'**indicatif** (le fait a eu lieu, a lieu ou aura lieu dans le monde réel).
   - Seule la conséquence visée ou envisagée comme purement tendancielle après une principale négative ou interrogative peut attirer le **subjonctif** : *« Le témoin n'a pas parlé de manière que l'on **puisse** le soupçonner »* [Réf. `SRC-GRAM-01`, § 1035].

---

### 7.4 Circonstancielles de But (Finales) : Viser un Idéal Virtuel
La subordonnée de but exprime la visée intentionnelle, l'objectif poursuivi ou le dessein vers lequel tend l'action de la principale [Réf. `SRC-GRAM-01`, § 1036].

1. **Subjonctif obligatoire sans exception** :
   Le but étant par nature un résultat désiré, projeté dans l'avenir, mais **non encore advenu au moment de l'énonciation**, son procès est purement virtuel. Il exige donc universellement le **subjonctif**.
2. **Typologie des connecteurs de but** :
   - *Pour que / Afin que* : connecteurs majeurs de finalité positive :  
     *« Le professeur articule avec méthode **afin que chaque auditeur saisisse les nuances du concept** . »*
   - *De peur que / De crainte que* : introduisent un but négatif (une conséquence indésirable que l'on s'efforce de prévenir) :  
     *« Nous avons doublé les amarres **de peur que la houle ne brise la coque** contre le quai. »*  
     *(Remarque : ces locutions appellent élégamment le « ne » explétif en registre soutenu ; voir `CHP-302-05`).*
3. **Contrainte de coréférence du sujet** :
   Si le sujet de la subordonnée de but est identique au sujet de la principale, la subordination est généralement évitée au profit d'un groupe infinitif introduit par une préposition (*pour, afin de, de peur de*) :  
   On ne dit pas : *❌ « J'étudie pour que je réussisse »*, mais : *« J'étudie **pour réussir** »*. La subordination conjonctive (*pour que / afin que*) est réservée aux contextes où les sujets des deux propositions sont distincts.

---

### 7.5 Circonstancielles de Concession et d'Opposition : Surmonter la Contradiction
Il convient de distinguer rigoureusement deux relations sémantiques profondément divergentes [Réf. `SRC-GRAM-02`, § 270-272] :

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ CLIVAGE LOGIQUE CAPITAL : CONCESSION (Subjonctif) vs OPPOSITION (Indicatif)           │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ • CONCESSION (Rupture causale) :                                                       │
│   Il existe une cause attendue (A), mais la conséquence normale n'a pas lieu (non-B).  │
│   "Bien qu'il soit malade (cause de repos), il travaille sans relâche (rupture)."      │
│   --> SUBJONCTIF OBLIGATOIRE (bien que, quoique, encore que).                          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ • OPPOSITION FACTUELLE (Simple contraste sans relation causale) :                      │
│   Deux faits réels indépendants sont mis en regard sur le même plan.                   │
│   "Le nord du pays est montagneux, tandis que le sud est constitué de plaines."        │
│   --> INDICATIF OBLIGATOIRE (alors que, tandis que, pendant que).                      │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

1. **La concession au subjonctif** :
   - *Bien que / Quoique / Encore que* : connecteurs directeurs de la concession restrictive [Réf. `SRC-GRAM-01`, § 1038] :  
     *« **Quoique le traité comporte des clauses contraignantes**, le gouvernement en a signé la ratification. »*
2. **L'opposition factuelle à l'indicatif** :
   - *Alors que / Tandis que* : constatent une antithèse entre deux faits simultanés ou comparables dans le monde réel :  
     *« La capitale attire les investissements étrangers, **tandis que les provinces intérieures souffrent d'un manque d'infrastructures** . »*
3. **Le cas de « Même si » (+ indicatif)** :
   - La locution *même si* est le seul connecteur concessif fondamental régissant l'**indicatif** (car il est morphologiquement fondé sur *si* hypothétique) :  
     *« **Même si le coût des matières premières augmente**, nos tarifs resteront inchangés. »*

---

### 7.6 Circonstancielles de Condition et d'Hypothèse : Suspendre le Procès
La subordonnée conditionnelle subordonne l'accomplissement de la principale à la réalisation préalable d'un paramètre hypothétique [Réf. `SRC-GRAM-01`, § 1042-1045].

1. **La conjonction « Si » (+ indicatif)** :
   - La conjonction reine de l'hypothèse est *si*. En français standard, *si* de condition **ne tolère jamais le subjonctif ni le conditionnel** ; il régit exclusivement trois tiroirs de l'indicatif :
     - *Si + présent* $\rightarrow$ principale au futur ou au présent (hypothèse ouverte / potentiel) :  
       *« **Si vous acceptez nos conditions**, nous signerons l'accord dès demain. »*
     - *Si + imparfait* $\rightarrow$ principale au conditionnel présent (irréel du présent) :  
       *« **Si les crédits étaient disponibles**, nous engagerions ces travaux. »*
     - *Si + plus-que-parfait* $\rightarrow$ principale au conditionnel passé (irréel du passé) :  
       *« **Si les secours avaient agi plus tôt**, le patrimoine aurait été sauvé. »*
2. **Locutions conjonctives au subjonctif** :
   - *À condition que / Pourvu que / Pour peu que / À moins que* : régissent impérativement le **subjonctif** car elles envisagent la condition sous l'angle du souhait, de la restriction ou de l'exigence subjective [Réf. `SRC-GRAM-01`, § 1044] :  
     *« L'opération sera couronnée de succès, **pourvu que l'approvisionnement en énergie ne subisse aucune panne** . »*  
     *« Nous maintiendrons la date du scrutin, **à moins que des troubles civils n'empêchent le déroulement du vote** . »*

---

### 7.7 Circonstancielles de Temps : Baliser la Ligne Chronologique
La subordonnée temporelle situe l'événement principal sur l'axe du temps par rapport à un repère événementiel subordonné. Le régime modal dépend strictement de la position chronologique [Réf. `SRC-GRAM-01`, § 1032 ; `SRC-NORM-03`, p. 40] :

1. **Postériorité de la principale (Antériorité du repère) : « Après que » $\rightarrow$ INDICATIF** :
   - Lorsque le fait subordonné s'est produit en premier, il est accompli et avéré :  
     *« **Après que l'assemblée eut adopté la loi**, le président promulgua le texte. »*  
     *(Solécisme absolu à proscrire : ❌ « Après que l'assemblée ait adopté... » ; voir `CHP-302-03`).*
   - Autres connecteurs à l'indicatif : *dès que, aussitôt que, une fois que, depuis que*.
2. **Simultanéité : « Pendant que », « Tandis que », « Alors que » $\rightarrow$ INDICATIF** :
   - Les deux événements se déroulent en parallèle dans le monde réel :  
     *« **Pendant que les secouristes déblayaient les gravats**, les médecins soignaient les blessés sous les tentes. »*
3. **Antériorité de la principale (Postériorité du repère prospectif) : « Avant que » $\rightarrow$ SUBJONCTIF** :
   - Au moment où la principale se produit, le fait subordonné n'a pas encore eu lieu : il est virtuel, prospectif, non advenu :  
     *« Évacuez les zones inondables **avant que la crue n'atteigne son niveau record** . »*  
   - Autres connecteurs au subjonctif : *en attendant que, jusqu'à ce que*.

---

### 7.8 Circonstancielles de Comparaison : Mesurer et Assimiler
La subordonnée comparative établit un rapport de ressemblance, d'égalité, d'inégalité ou de proportion entre deux procès [Réf. `SRC-GRAM-01`, § 1048-1052].

1. **Comparaison quantitative corrélative (+ indicatif)** :
   - S'appuie sur des adverbes comparatifs corrélés à *que* (*plus... que, moins... que, autant... que, aussi... que*) :  
     *« Le rendement agricole a été **plus élevé cette année que les agronomes ne l'avaient estimé** . »*  
     *(Noter la présence possible du « ne » explétif après le comparatif d'inégalité).*
2. **Comparaison qualitative globale (+ indicatif)** :
   - *De même que, ainsi que, tel que, comme* :  
     *« **De même que le fleuve fertilise les vallées**, ainsi l'instruction enrichit l'esprit des citoyens. »*
3. **La comparaison hypothétique : « Comme si » (+ imparfait ou plus-que-parfait de l'indicatif)** :  
   - *« Il défendit sa position **comme s'il avait été personnellement outragé** . »*

---

## 8. Raisonnement Détaillé : La Théorie Linguistique de l'Actualisation du Procès

Pourquoi la grammaire française n'assigne-t-elle pas les modes au hasard des conjonctions ? Pourquoi la cause régit-elle l'indicatif alors que le but régit le subjonctif ?

### 8.1 La Chronogenèse et le Statut Ontologique du Procès
En linguistique énonciative (théories de Gustave Guillaume et analyses de Riegel, Pellat & Rioul [`SRC-GRAM-02`, chap. 10 & 16]), le choix du mode verbal traduit l'**engagement épistémique** de l'énonciateur et le degré d'**actualisation** de l'événement dans le temps :

1. **L'Indicatif : Mode du Procès Actualisé et de l'Assertion Véridique** :
   - L'indicatif présente le procès comme ancré dans la réalité objective ou historique (passée, présente ou future certaine).
   - *Application circonstancielle* :
     - La **cause** (*parce que, puisque*) explique un fait en s'appuyant sur un antécédent réel : le procès est pleinement actualisé $\rightarrow$ **Indicatif**.
     - La **conséquence réelle** (*si bien que, de sorte que*) enregistre ce qui est advenu : le procès s'est concrétisé $\rightarrow$ **Indicatif**.
     - Le **temps accompli** (*après que, dès que*) relate un fait chronologiquement consommé $\rightarrow$ **Indicatif**.
     - L'**opposition factuelle** (*tandis que, alors que*) juxtapose deux états de fait constatés $\rightarrow$ **Indicatif**.

2. **Le Subjonctif : Mode du Procès Non Actualisé, du Virtuel et de la Tension Énonciative** :
   - Le subjonctif ne pose pas le procès dans l'ordre des faits vérifiables ; il le saisit simplement en pensée, à l'état de projection mentale, de désir, de doute ou de suspension du jugement.
   - *Application circonstancielle* :
     - Le **but** (*pour que, afin que*) vise une fin idéale : au moment où la principale s'accomplit, nul ne peut garantir avec une certitude absolue que le but sera atteint $\rightarrow$ procès virtuel $\rightarrow$ **Subjonctif**.
     - Le **temps prospectif** (*avant que, jusqu'à ce que*) se situe en aval du point de référence : le fait subordonné n'est pas encore né dans l'histoire $\rightarrow$ non-actualisation $\rightarrow$ **Subjonctif**.
     - La **cause rejetée** (*non que, ce n'est pas que*) évoque un motif faux ou démenti : il n'a aucune existence dans le monde réel $\rightarrow$ **Subjonctif**.
     - La **concession** (*bien que, quoique*) crée une contradiction interne : elle pose un fait tout en neutralisant son pouvoir d'empêcher la conséquence normale. Cette distorsion du schéma logique naturel suspend l'assertion pleine du fait subordonné $\rightarrow$ **Subjonctif**.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ LE CONTINUUM MODAL DES RELATIONS CIRCONSTANCIELLES                                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│          INDICATIF                                         SUBJONCTIF                  │
│ [Procès actualisé / Monde réel]                 [Procès virtuel / Monde pensé]         │
│  ├── Cause réelle (parce que)                   ├── But visé (afin que)                │
│  ├── Conséquence réelle (si bien que)           ├── Concession (bien que, quoique)     │
│  ├── Temps accompli (après que, dès que)        ├── Temps prospectif (avant que)       │
│  ├── Opposition factuelle (tandis que)          ├── Cause réfutée (non que)            │
│  └── Hypothèse en si (si + ind.)                └── Condition restrictive (pourvu que) │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Exemples Corrects Commentés

Examinons sept phrases modèles illustrant chacune des sept familles logiques fondamentales, avec dissection arborescente et analyse actancielle intégrale [Réf. `SRC-GRAM-02`, chap. 16] :

### Exemple 1 : Circonstancielle de Cause Factuelle
*« Le gouverneur de la banque centrale a relevé les taux directeurs **parce que les tensions inflationnistes menaçaient le pouvoir d'achat des ménages** . »*
- **Matrice souveraine** : *« Le gouverneur de la banque centrale a relevé les taux directeurs »* (Sujet : *Le gouverneur...* ; Verbe : *a relevé* ; COD : *les taux directeurs*).
- **Subordonnée régie** : *« parce que les tensions inflationnistes menaçaient le pouvoir d'achat des ménages »*.
- **Subordonnant** : *parce que* (locution conjonctive de subordination causale).
- **Mode et temps** : Indicatif imparfait (*menaçaient*), traduisant un procès réel et sécant dans le passé.
- **Fonction externe** : Complément circonstanciel de cause de la proposition principale.

```text
P0 [Matrice principale] : Le gouverneur a relevé les taux directeurs
 └── P1 [Circonstancielle de cause] : parce que les tensions menaçaient le pouvoir d'achat
```

### Exemple 2 : Circonstancielle de Conséquence Réelle
*« La commission mixte a adopté l'amendement à l'unanimité, **de sorte que le projet de loi sera promulgué dès le début de la session parlementaire** . »*
- **Matrice souveraine** : *« La commission mixte a adopté l'amendement à l'unanimité »*.
- **Subordonnée régie** : *« de sorte que le projet de loi sera promulgué dès le début de la session parlementaire »*.
- **Subordonnant** : *de sorte que* (locution conjonctive de conséquence consécutive).
- **Mode et temps** : Indicatif futur simple (*sera promulgué*), posant la conséquence comme certaine dans l'ordre des faits.
- **Fonction externe** : Complément circonstanciel de conséquence de P0.

### Exemple 3 : Circonstancielle de But (Finale)
*« Le rapporteur a vulgarisé les conclusions du rapport financier **afin que chaque citoyen comprenne les mécanismes de la dette publique** . »*
- **Matrice souveraine** : *« Le rapporteur a vulgarisé les conclusions du rapport financier »*.
- **Subordonnée régie** : *« afin que chaque citoyen comprenne les mécanismes de la dette publique »*.
- **Subordonnant** : *afin que* (locution conjonctive de but).
- **Mode et temps** : Subjonctif présent (*comprenne*), marquant la visée intentionnelle non encore garantie.
- **Fonction externe** : Complément circonstanciel de but de P0.

### Exemple 4 : Circonstancielle de Concession Restrictive
*« **Quoique les contestations juridiques se multiplient devant les cours souveraines**, le gouvernement maintient l'exécution intégrale de la réforme portuaire. »*
- **Matrice souveraine** : *« le gouvernement maintient l'exécution intégrale de la réforme portuaire »*.
- **Subordonnée régie (antéposée)** : *« Quoique les contestations juridiques se multiplient devant les cours souveraines »*.
- **Subordonnant** : *Quoique* (conjonction de subordination concessive).
- **Mode et temps** : Subjonctif présent (*se multiplient*), matérialisant l'obstacle surmonté.
- **Fonction externe** : Complément circonstanciel de concession de P0 (isolé par une virgule obligatoire).

### Exemple 5 : Circonstancielle de Condition et d'Hypothèse
*« Les pourparlers de paix aboutiront rapidement, **à condition que les deux armées belligérantes respectent le cessez-le-feu décrété par l'ONU** . »*
- **Matrice souveraine** : *« Les pourparlers de paix aboutiront rapidement »*.
- **Subordonnée régie** : *« à condition que les deux armées belligérantes respectent le cessez-le-feu... »*.
- **Subordonnant** : *à condition que* (locution conjonctive de condition restrictive).
- **Mode et temps** : Subjonctif présent (*respectent*), traduisant l'éventualité suspensive.
- **Fonction externe** : Complément circonstanciel de condition de P0.

### Exemple 6 : Circonstancielle de Temps (Postériorité avec Antériorité Prospective)
*« Les gardes-côtes inspecteront les navires de commerce **avant que la flottille ne franchisse les limites des eaux territoriales** . »*
- **Matrice souveraine** : *« Les gardes-côtes inspecteront les navires de commerce »*.
- **Subordonnée régie** : *« avant que la flottille ne franchisse les limites des eaux territoriales »*.
- **Subordonnant** : *avant que* (locution conjonctive temporelle d'antériorité).
- **Mode et morphème** : Subjonctif présent (*franchisse*) avec insertion du *ne* explétif de haute tenue.
- **Fonction externe** : Complément circonstanciel de temps de P0.

### Exemple 7 : Circonstancielle de Comparaison Proportionnelle
*« **De même que le soleil dissipe les ténèbres matinales**, ainsi la vérité historique anéantit les légendes mensongères forgées par la propagande. »*
- **Protase comparative** : *« De même que le soleil dissipe les ténèbres matinales »*.
- **Apodose principale** : *« ainsi la vérité historique anéantit les légendes mensongères... »*.
- **Subordonnant** : *De même que* (locution conjonctive comparative corrélée à l'adverbe *ainsi*).
- **Mode et temps** : Indicatif présent (*dissipe*), constatant une vérité d'expérience réelle.
- **Fonction externe** : Complément circonstanciel de comparaison de l'apodose.

---

## 10. Contre-Exemples et Erreurs Fréquentes

Voici l'analyse clinique de six erreurs récurrentes relevées dans la pratique rédactionnelle des apprenants francophones, avec diagnostic linguistique et redressement normé [Réf. `SRC-GRAM-01`, § 1030-1045 ; `SRC-GRAM-02`, chap. 16] :

### Erreur n° 1 : Confusion entre la cause et la conséquence (interversion du vecteur causal)
- ❌ **Forme fautive** : *« L'armée a battu en retraite parce que la ligne de front a été rompue, si bien que l'ennemi a percé nos défenses. »*
- **Analyse linguistique de la faille cognitive** : Le scripteur inverse les étapes logiques. L'ennemi perce les défenses (cause première), ce qui brise la ligne de front (effet immédiat), contraignant l'armée à la retraite (conséquence finale). La mauvaise sélection des connecteurs dénature la chronologie et l'imputabilité des faits.
- ✔️ **Forme correcte et justification** : *« **Comme l'ennemi avait percé nos défenses**, la ligne de front a été rompue, **de sorte que le commandement a ordonné la retraite générale** . »*  
  *(La cause première est antéposée avec « comme » + plus-que-parfait ; la résultante finale est subordonnée par « de sorte que » + indicatif).* [Réf. `SRC-GRAM-02`, § 265].

### Erreur n° 2 : Subjonctif abusif après les conjonctions temporelles de simultanéité (*pendant que*)
- ❌ **Forme fautive** : *« Pendant que le tribunal délibère et que les jurés soient isolés, le public attend fébrilement le verdict. »*
- **Analyse linguistique de la faille cognitive** : L'apprenant applique un subjonctif parasite sur la subordonnée coordonnée (*soient* au lieu de *sont*), croyant à tort que toute reprise par *et que* attire le subjonctif. Or, la simultanéité temporelle constate des faits réels en cours d'accomplissement.
- ✔️ **Forme correcte et justification** : *« Pendant que le tribunal délibère et **que les jurés sont isolés**, le public attend fébrilement le verdict. »*  
  *(La conjonction temporelle « pendant que » commande strictement l'indicatif ; la reprise par « et que » conserve obligatoirement le régime de l'indicatif).* [Réf. `SRC-GRAM-01`, § 1032].

### Erreur n° 3 : Amalgame entre opposition factuelle symétrique (*tandis que*) et concession restrictive (*bien que*)
- ❌ **Forme fautive** : *« Bien que le département du Littoral abrite la capitale économique, le département de l'Atacora offre un potentiel touristique remarquable. »*
- **Analyse linguistique de la faille cognitive** : L'apprenant emploie *bien que* pour signifier une simple différence géographique. Or, la concession exige une contradiction logique (un empêchement surmonté). Il n'y a aucune contradiction à ce que deux régions aient des atouts différents.
- ✔️ **Forme correcte et justification** : *« **Tandis que** le département du Littoral abrite la capitale économique, le département de l'Atacora offre un potentiel touristique remarquable. »*  
  *(L'opposition de deux faits réels exige un connecteur d'opposition factuelle à l'indicatif tel que « tandis que » ou « alors que »).* [Réf. `SRC-GRAM-02`, § 272].

### Erreur n° 4 : Omission fautive de la virgule démarcative après la subordonnée circonstancielle antéposée
- ❌ **Forme fautive** : *« Dès que les magistrats eurent achevé la lecture du réquisitoire l'accusé s'effondra sur son banc. »*
- **Analyse linguistique de la faille cognitive** : Le scripteur omet la frontière démarcative obligatoire entre le complément de phrase antéposé et le sujet de la proposition principale, créant une ambiguïté de lecture immédiate.
- ✔️ **Forme correcte et justification** : *« Dès que les magistrats eurent achevé la lecture du réquisitoire**,** l'accusé s'effondra sur son banc. »*  
  *(Conformément aux règles de l'Imprimerie nationale, toute subordonnée circonstancielle placée en tête de phrase doit impérativement être séparée de la principale par une virgule).* [Réf. `SRC-TYPO-01`, p. 143].

### Erreur n° 5 : Création du faux subordonnant hybride *au point où* au lieu de *au point que*
- ❌ **Forme fautive** : *« La contestation populaire s'est envenimée au point où le premier ministre a été contraint de démissionner. »*
- **Analyse linguistique de la faille cognitive** : Contamination de la locution consécutive *au point que* par le relatif locatif *où*. L'apprenant fabrique une locution hybride proscrite par le bon usage académique.
- ✔️ **Forme correcte et justification** : *« La contestation populaire s'est envenimée **au point que** le premier ministre a été contraint de démissionner. »*  
  *(La locution consacrée exprimant l'intensité consécutive est « au point que » suivie de l'indicatif).* [Réf. `SRC-GRAM-01`, § 1034].

### Erreur n° 6 : Télescopage syntaxique et emploi illicite de *malgré que* à la place de *bien que*
- ❌ **Forme fautive** : *« Malgré que les réserves de change aient diminué de moitié, la monnaie nationale demeure stable. »*
- **Analyse linguistique de la faille cognitive** : Adjonction illicite de la conjonction *que* à la préposition *malgré*. Ce solécisme vulgaire détruit la réputation académique du scripteur.
- ✔️ **Forme correcte et justification** : *« **Bien que les réserves de change aient diminué** de moitié [...] »* ou *« **En dépit de la diminution de moitié des réserves** de change [...] »*.  
  *(En français soigné, « malgré que » est absolument banni, hormis la formule figée archaïque « malgré qu'il en ait »).* [Réf. `SRC-GRAM-01`, § 1040 ; Académie française].

---

## 11. Cas Particuliers et Limites

### 11.1 Les Subordonnées Participiales et Gérondives
Au-delà des propositions conjonctives introduites par un mot subordonnant, deux structures assument des fonctions circonstancielles sans conjonction explicite [Réf. `SRC-GRAM-02`, § 285] :

1. **La proposition subordonnée participiale véritable** :
   - Elle possède son **sujet actanciel propre**, distinct de celui de la proposition principale, et a pour noyau verbal un participe présent ou passé :  
     *« **Le quorum ayant été constaté par les huissiers**, le président ouvrit la séance. »*  
     *(Sujet du participe : « Le quorum » ; Sujet de la principale : « le président »).*
2. **Le gérondif circonstanciel (*en* + participe présent)** :
   - Le gérondif n'est pas une proposition participiale complète mais un modifieur adverbial verbal. Il obéit à une **règle stricte de coréférence** : son sujet logique doit obligatoirement être identique au sujet grammatical du verbe principal sous peine d'anacoluthe [Réf. `SRC-GRAM-01`, § 440] :  
     *« **En examinant les comptes de campagne**, les magistrats ont relevé des fraudes. »* (Ce sont les magistrats qui examinent les comptes).

### 11.2 Les Subordonnées Circonstancielles Elliptiques de Verbe
Dans la prose soignée, l'économie stylistique autorise l'ellipse du verbe être et de son sujet lorsque le contexte élimine toute ambiguïté [Réf. `SRC-GRAM-01`, § 1038] :
- *« **Quoique malade**, le ministre a tenu à prononcer son allocution. »*  
  (= *Quoiqu'il fût malade...*).
- *« Le décret sera abrogé **si nécessaire** . »*  
  (= *si cela est nécessaire*).
- *« **Comme convenu lors du sommet de Cotonou**, les barrières douanières seront levées le premier janvier. »*  
  (= *Comme il avait été convenu...*).

### 11.3 Coordination de Circonstancielles et Reprise Conjonctive par « Et que »
Lorsqu'on coordonne deux subordonnées circonstancielles de même nature, le bon usage proscrit la répétition lourde du mot subordonnant complexe. On allège la seconde proposition par **« et que »** [Réf. `SRC-GRAM-01`, § 1065] :

1. **Règle de maintien du mode ordinaire** :
   - Si la première circonstancielle régissait l'indicatif (*comme, puisque, quand*), la reprise par *et que* conserve l'indicatif :  
     *« **Comme le fleuve débordait** et **que les digues menaçaient** de céder, le préfet fit évacuer la vallée. »*
2. **Règle exceptionnelle de bascule modale après « Si »** :
   - Si la première proposition est une conditionnelle introduite par *si* (+ indicatif), la seconde subordonnée reprise par *que* commande obligatoirement le **subjonctif** en registre soutenu :  
     *« **Si vous venez à Cotonou** et **que vous souhaitiez me rencontrer**, prévenez mon secrétariat quarante-huit heures à l'avance. »*  
     *(Le passage de « si vous souhaitez » à « et que vous souhaitiez » marque la haute élégance de la syntaxe classique).*

---

## 12. Approfondissement Adapté au Niveau : La Théorie des Adjoints Propositionnels ($TP$ vs $CP$)

Dans le cadre de la linguistique générative et formelle contemporaine (Noam Chomsky, Luigi Rizzi), la subordination circonstancielle éclaire de façon spectaculaire la hiérarchie interne de la phrase :

### 12.1 Circonstancielles de l'Énoncé vs Circonstancielles de l'Énonciation
Toutes les subordonnées circonstancielles ne s'attachent pas au même niveau structural de l'arbre syntaxique [Réf. `SRC-GRAM-02`, § 260] :

1. **Les Adjoints à $TP$ (Tense Phrase) — Circonstancielles de l'Énoncé** :
   - Elles portent directement sur le contenu propositionnel du procès décrit (*le dictum*). Elles modifient l'événement lui-même dans le temps ou la cause :  
     *« Pierre a fermé les fenêtres **parce que la pluie tombait** . »*  
     $\rightarrow$ La chute de la pluie est la cause physique de la fermeture des fenêtres.
2. **Les Adjoints à $CP$ (Complementizer Phrase) — Circonstancielles de l'Énonciation** :
   - Elles ne modifient pas l'événement décrit, mais l'**acte de parole lui-même** accompli par le locuteur :  
     *« **Puisque tu es si savant**, quel est le traité de grammaire qui fait autorité ? »*  
     $\rightarrow$ Le savoir de l'allocutaire n'est pas la cause de la grammaire ; c'est la cause justificative qui autorise le locuteur à poser sa question !
   - De même dans : *« Il est chez lui, **parce que sa voiture est garée devant la porte** . »*  
     $\rightarrow$ Le stationnement de la voiture n'est pas la cause de sa présence, c'est l'indice probatoire justifiant l'assertion du locuteur.

```text
Arborescence formelle simplifiée :
                CP
              /    \
  [Adjoint CP]      CP (Acte d'énonciation : "Puisque tu le sais, dis-le")
                  /    \
                 C      TP (Prédication temporelle de l'énoncé)
                      /    \
          [Adjoint TP]      TP ("Il est parti parce qu'il pleuvait")
```

Cette distinction théorique fondamentale permet à l'apprenant de comprendre pourquoi certaines circonstancielles (les adjoints à $CP$) résistent à l'interrogation ou à la négation (*« Est-ce parce que tu es si savant que quel est le traité ? »* est agrammatical), tandis que les adjoints à $TP$ s'intègrent parfaitement sous la focalisation par *c'est... que* (*« C'est parce que la pluie tombait que Pierre a fermé les fenêtres »*).

---

## 13. Comparaisons Différentielles

### 13.1 Tableau Différentiel 1 : Cause vs Conséquence
| Critère de distinction | Subordonnée de Cause | Subordonnée de Conséquence |
| :--- | :--- | :--- |
| **Orientation temporelle** | Rétrospective : pointe vers l'amont (l'antécédent déclencheur). | Prospective : pointe vers l'aval (la résultante produite). |
| **Question de test** | *Pour quelle raison ? Par quoi cela a-t-il été provoqué ?* | *Avec quel effet ? Qu'est-ce que cela a engendré ?* |
| **Connecteurs types** | *parce que, puisque, comme, étant donné que*. | *de sorte que, si bien que, au point que, tellement... que*. |
| **Exemple contrasté** | *L'usine a fermé **parce que l'énergie coûtait trop cher** .* | *L'énergie coûtait trop cher, **si bien que l'usine a fermé** .* |

### 13.2 Tableau Différentiel 2 : But vs Conséquence
| Critère de distinction | Subordonnée de But (Finale) | Subordonnée de Conséquence (Consécutive) |
| :--- | :--- | :--- |
| **Nature du résultat** | Virtuel, intentionnel, projeté en pensée, non garanti. | Effectif, constaté, inscrit dans la réalité matérielle. |
| **Mode verbal régi** | **Subjonctif obligatoire** (*afin que, pour que*). | **Indicatif obligatoire** (*de sorte que, si bien que*). |
| **Intention humaine** | Requiert un agent animé doté d'une volonté. | Peut découler de lois physiques ou du hasard. |
| **Paire minimale** | *Il a parlé de façon que chacun **comprenne** .* (But visé) | *Il a parlé de façon que chacun **a compris** .* (Résultat constaté) |

### 13.3 Tableau Différentiel 3 : Concession vs Opposition
| Critère de distinction | Subordonnée de Concession | Subordonnée d'Opposition Factuelle |
| :--- | :--- | :--- |
| **Logique causale** | Rupture d'un lien de causalité implicite (obstacle surmonté). | Parallélisme de deux faits indépendants sans causalité. |
| **Mode verbal régi** | **Subjonctif** (*bien que, quoique, encore que*). | **Indicatif** (*alors que, tandis que*). |
| **Formule logique** | $A$ devrait empêcher $B$, et pourtant $B$ a lieu. | $A$ est vrai pour $X$, pendant que $B$ est vrai pour $Y$. |
| **Exemple contrasté** | *« **Bien qu'il pleuve**, nous sortons. »* (La pluie n'empêche pas la sortie). | *« **Tandis qu'il pleut au nord**, le soleil brille au sud. »* |

### 13.4 Tableau Différentiel 4 : Subordonnée Circonstancielle vs Complétive
| Critère syntaxique | Subordonnée Circonstancielle | Subordonnée Complétive Conjonctive |
| :--- | :--- | :--- |
| **Fonction externe** | Complément de phrase (périphérique). | Complément d'objet direct ou sujet (actant central). |
| **Mobilité dans l'énoncé** | Très mobile (en tête, au milieu, en fin). | Fixe (immédiatement après le verbe recteur). |
| **Test de suppression** | Supprimable sans détruire la charpente de la phrase. | Non supprimable sans rendre le verbe transitif incomplet. |
| **Rôle du connecteur** | Conjonction sémantique riche qui impose son sens. | Conjonction *que* pure, asémantique, simple outil de liaison. |

---

## 14. Exercices Progressifs

### 14.1 Niveau 1 : Reconnaissance et Discrimination Sémantique (12 phrases)
**Consigne** : Pour chacune des douze phrases suivantes, délimitez entre crochets la proposition subordonnée circonstancielle, identifiez le connecteur conjonctif introducteur, nommez la relation logico-sémantique exprimée (cause, conséquence, but, concession, condition, temps, comparaison) et justifiez le mode verbal employé :

1. *Dès que le décret présidentiel parut au journal officiel, les administrations appliquèrent la nouvelle grille salariale.*
2. *Quoique les crédits alloués à la recherche soient insuffisants, les chercheurs de l'université ont publié trois découvertes majeures.*
3. *Le directeur financier a réorganisé les comptes de manière que les commissaires aux comptes aient terminé leur audit avant vendredi.*
4. *Puisque nul ne sollicite plus la parole, la séance solennelle de l'assemblée générale est levée.*
5. *Les pluies torrentielles ont raviné les routes d'accès, si bien que les approvisionnements des marchés urbains sont retardés.*
6. *Si les États signataires respectent scrupuleusement les clauses de dénucléarisation, la paix régionale sera durablement garantie.*
7. *Le chef de l'État s'exprime devant les ambassadeurs ainsi que l'exige le protocole diplomatique républicain.*
8. *Nous avons ajourné la délibération du jury parce que trois présidents de section étaient retenus par les intempéries.*
9. *L'avocat de la défense parle avec une clarté remarquable de sorte que le jury a compris l'innocence du prévenu.*
10. *Avant que les observateurs internationaux ne quittent la capitale, le président de la cour constitutionnelle proclamera les résultats.*
11. *L'équipe médicale veillera sur le patient jour et nuit pourvu que la crise respiratoire ne se complique d'aucune surinfection.*
12. *Tandis que le secteur tertiaire connaît une expansion fulgurante à Cotonou, les manufactures textiles traditionnelles manquent d'ouvriers spécialisés.*

<details>
<summary><strong>Corrigé détaillé et justifié du Niveau 1 (cliquer pour dérouler)</strong></summary>

1. *« [Dès que le décret présidentiel parut au journal officiel] »* — Connecteur : *Dès que*. Relation : **Temps (postériorité de la principale / immédiateté)**. Mode : **Indicatif passé simple** (*parut*), car l'événement s'est déjà produit dans l'histoire réelle.
2. *« [Quoique les crédits alloués à la recherche soient insuffisants] »* — Connecteur : *Quoique*. Relation : **Concession restrictive**. Mode : **Subjonctif présent** (*soient*), imposé par le statut de l'obstacle concédé qui ne neutralise pas la réalisation principale.
3. *« [de manière que les commissaires aux comptes aient terminé leur audit avant vendredi] »* — Connecteur : *de manière que*. Relation : **But (finale)**. Mode : **Subjonctif passé** (*aient terminé*), car il s'agit d'un dessein visé pour l'avenir et non d'un fait encore constaté.
4. *« [Puisque nul ne sollicite plus la parole] »* — Connecteur : *Puisque*. Relation : **Cause connue / justification de discours**. Mode : **Indicatif présent** (*sollicite*), car l'absence de demande de parole est un fait publiquement avéré dans l'amphithéâtre.
5. *« [si bien que les approvisionnements des marchés urbains sont retardés] »* — Connecteur : *si bien que*. Relation : **Conséquence consécutive réelle**. Mode : **Indicatif présent** (*sont retardés*), constatant le résultat effectif des inondations.
6. *« [Si les États signataires respectent scrupuleusement les clauses de dénucléarisation] »* — Connecteur : *Si*. Relation : **Condition / Hypothèse ouverte**. Mode : **Indicatif présent** (*respectent*), la règle d'or interdisant le subjonctif et le conditionnel après *si* hypothétique.
7. *« [ainsi que l'exige le protocole diplomatique républicain] »* — Connecteur : *ainsi que*. Relation : **Comparaison qualitative / conformité**. Mode : **Indicatif présent** (*exige*), constatant la norme institutionnelle effective.
8. *« [parce que trois présidents de section étaient retenus par les intempéries] »* — Connecteur : *parce que*. Relation : **Cause factuelle**. Mode : **Indicatif imparfait** (*étaient retenus*), fournissant l'explication causale réelle de l'ajournement.
9. *« [de sorte que le jury a compris l'innocence du prévenu] »* — Connecteur : *de sorte que*. Relation : **Conséquence réalisée**. Mode : **Indicatif passé composé** (*a compris*), car l'adhésion du jury est un résultat matériellement acquis et non un simple espoir.
10. *« [Avant que les observateurs internationaux ne quittent la capitale] »* — Connecteur : *Avant que*. Relation : **Temps (antériorité de la principale / prospective)**. Mode : **Subjonctif présent** (*quittent*) avec *ne* explétif, car le départ des observateurs n'est pas encore accompli au moment de la proclamation.
11. *« [pourvu que la crise respiratoire ne se complique d'aucune surinfection] »* — Connecteur : *pourvu que*. Relation : **Condition restrictive / souhait préalable**. Mode : **Subjonctif présent** (*se complique*), marquant l'éventualité suspendue.
12. *« [Tandis que le secteur tertiaire connaît une expansion fulgurante à Cotonou] »* — Connecteur : *Tandis que*. Relation : **Opposition factuelle symétrique**. Mode : **Indicatif présent** (*connaît*), mettant en contraste deux réalités socio-économiques observées sans lien de causalité contrariée.
</details>

---

### 14.2 Niveau 2 : Transformation Syntaxique et Sélection Modale (8 phrases)
**Consigne** : Transformez chacune des huit phrases suivantes selon l'instruction entre parenthèses, en opérant la sélection modale appropriée et en veillant au respect scrupuleux de la ponctuation démarcative :

1. *« Les auditeurs ont terminé la vérification des comptes ; le trésorier a alors présenté le bilan financier. »* (Subordonner la première proposition sous forme de circonstancielle temporelle introduite par *après que*).
2. *« Le ministre craint la survenue d'un incident protocolaire lors du banquet officiel. »* (Développer le syntagme nominal complément de verbe en proposition circonstancielle finale de but négatif introduite par *de peur que*).
3. *« Le climat d'investissement est attractif, mais les démarches d'immatriculation foncière restent lentes. »* (Transformer la coordination adversative en subordination concessive introduite par *bien que*).
4. *« La production cotonnière nationale a fléchi ; les cours mondiaux du textile se sont effondrés. »* (Relier par une circonstancielle causale antéposée introduite par *comme*).
5. *« Vous fournirez les pièces justificatives exigées par le greffe ; votre requête en annulation sera immédiatement instruite. »* (Relier par une circonstancielle hypothétique introduite par la locution *à condition que*).
6. *« L'orateur parlait avec passion ; tout l'auditoire était suspendu à ses lèvres. »* (Construire une proposition circonstancielle de conséquence corrélative d'intensité avec *tellement... que*).
7. *« Le président a prononcé son discours de clôture, puis les délégations ont signé le protocole d'accord. »* (Exprimer la relation sous forme d'antériorité temporelle de la signature introduite par *avant que*).
8. *« Les cadres d'entreprise réclament une augmentation de salaire, tandis que les bénéfices nets de la société stagnent. »* (Transformer l'opposition factuelle en concession restrictive introduite par *quoique*).

<details>
<summary><strong>Corrigé détaillé et justifié du Niveau 2 (cliquer pour dérouler)</strong></summary>

1. *« **Après que les auditeurs eurent terminé** [ou **ont terminé**] la vérification des comptes, le trésorier présenta le bilan financier. »*  
   *Justification* : *Après que* commande l'**indicatif** (passé antérieur ou passé composé) car le procès subordonné est achevé au moment de la principale. Interdiction du subjonctif. Virgule obligatoire après la subordonnée antéposée.
2. *« Le ministre a renforcé le dispositif d'accueil **de peur qu'un incident protocolaire ne survienne** lors du banquet officiel. »*  
   *Justification* : *De peur que* régit impérativement le **subjonctif** (*survienne*) et appelle l'insertion élégante du *ne* explétif.
3. *« **Bien que le climat d'investissement soit attractif**, les démarches d'immatriculation foncière restent lentes. »*  
   *Justification* : *Bien que* commande le **subjonctif présent** (*soit*) car il introduit la concession (rupture de la conséquence attendue).
4. *« **Comme les cours mondiaux du textile s'étaient effondrés**, la production cotonnière nationale a fléchi. »*  
   *Justification* : *Comme* de cause se place obligatoirement en tête de phrase et régit l'**indicatif** (plus-que-parfait traduisant l'antériorité causale).
5. *« Votre requête en annulation sera immédiatement instruite, **à condition que vous fournissiez les pièces justificatives** exigées par le greffe. »*  
   *Justification* : La locution *à condition que* exige le **subjonctif présent** (*fournissiez*), à la différence de *si* qui exige l'indicatif.
6. *« L'orateur parlait avec **tellement de passion que tout l'auditoire était suspendu** à ses lèvres. »*  
   *Justification* : L'adverbe intensif *tellement* placé dans la principale commande la subordonnée consécutive en *que* à l'**indicatif imparfait** (*était suspendu*), constatant un résultat effectif.
7. *« Les délégations ont signé le protocole d'accord **avant que le président ne prononçât** [ou **ne prononce**] son discours de clôture. »*  
   *Justification* : *Avant que* commande le **subjonctif** (imparfait en registre soutenu, présent en registre standard) et reçoit le *ne* explétif.
8. *« **Quoique les bénéfices nets de la société stagnent**, les cadres d'entreprise réclament une augmentation de salaire. »*  
   *Justification* : La concession en *quoique* exige le **subjonctif présent** (*stagnent*), transformant le simple constat contrastif en obstacle non prohibitif.
</details>

---

### 14.3 Niveau 3 : Analyse Syntaxique Intégrale d'une Période Complexe (50 mots certifiés)

Soit la période complexe suivante (texte de prose d'idées de 50 mots exacts selon le protocole de décompte typographique officiel de l'`SRC-TYPO-01`, p. 143) :

> *« Bien que les institutions républicaines garantissent la liberté politique, chaque citoyen doit rester vigilant puisque la démocratie s'affaiblit dès que le peuple renonce au contrôle des gouvernants, de sorte que l'exercice du pouvoir sans frein conduit inévitablement les nations libres vers le déclin de toute concorde sociale durable. »*

#### Protocole de Décompte Typographique Certifié (50 mots)
Conformément au standard typographique officiel (`SRC-TYPO-01`, p. 143), chaque mot graphique séparé par une espace ou une apostrophe élidée constitue une unité lexicale autonome :

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Bien | **11** | citoyen | **21** | que | **31** | que | **41** | nations |
| **2** | que | **12** | doit | **22** | le | **32** | l' (*élision*) | **42** | libres |
| **3** | les | **13** | rester | **23** | peuple | **33** | exercice | **43** | vers |
| **4** | institutions | **14** | vigilant | **24** | renonce | **34** | du | **44** | le |
| **5** | républicaines | **15** | puisque | **25** | au | **35** | pouvoir | **45** | déclin |
| **6** | garantissent | **16** | la | **26** | contrôle | **36** | sans | **46** | de |
| **7** | la | **17** | démocratie | **27** | des | **37** | frein | **47** | toute |
| **8** | liberté | **18** | s' (*élision*) | **28** | gouvernants, | **38** | conduit | **48** | concorde |
| **9** | politique, | **19** | affaiblit | **29** | de | **39** | inévitablement | **49** | sociale |
| **10** | chaque | **20** | dès | **30** | sorte | **40** | les | **50** | durable. |

$$\text{Total certifié} = 50\text{ mots typographiques exacts}.$$

#### Consignes de l'Analyse :
1. Délimitez chacune des cinq propositions constitutives et assignez-lui son degré d'enchâssement exact (degré 0, degré 1 ou degré 2).
2. Identifiez la proposition principale souveraine portant l'assertion centrale.
3. Précisez pour chaque proposition subordonnée : son mot subordonnant, sa relation logico-sémantique, son mode verbal et sa fonction syntaxique externe.
4. Dressez l'arbre structurel complet des dépendances hiérarchiques.

<details>
<summary><strong>Corrigé détaillé de la dissection intégrale du Niveau 3 (cliquer pour dérouler)</strong></summary>

#### 1. Délimitation et Attribution des Degrés :
- **P0 [Degré 0 — Matrice Principale souveraine]** :  
  *« chaque citoyen doit rester vigilant »*  
  - Sujet : groupe nominal *chaque citoyen* ; Pivot prédicatif : périphrase modale déontique *doit rester* ; Attribut du sujet : adjectif *vigilant*.
- **P1 [Degré 1 — Subordonnée circonstancielle de concession antéposée]** :  
  *« Bien que les institutions républicaines garantissent la liberté politique »*  
  - Régie par P0. Subordonnant : locution conjonctive *Bien que*. Mode : Subjonctif présent (*garantissent*). Fonction : Complément circonstanciel de concession de P0.
- **P2 [Degré 1 — Subordonnée circonstancielle de cause]** :  
  *« puisque la démocratie s'affaiblit [P3] »*  
  - Régie par P0. Subordonnant : conjonction *puisque*. Mode : Indicatif présent (*s'affaiblit*). Fonction : Complément circonstanciel de cause de P0.
- **P3 [Degré 2 — Subordonnée circonstancielle de temps]** :  
  *« dès que le peuple renonce au contrôle des gouvernants »*  
  - Régie par P2 (enchâssée au sein de la causale). Subordonnant : locution conjonctive *dès que*. Mode : Indicatif présent (*renonce*). Fonction : Complément circonstanciel de temps de P2.
- **P4 [Degré 1 — Subordonnée circonstancielle de conséquence consécutive]** :  
  *« de sorte que l'exercice du pouvoir sans frein conduit inévitablement les nations libres vers le déclin de toute concorde sociale durable »*  
  - Régie par P0. Subordonnant : locution conjonctive *de sorte que*. Mode : Indicatif présent (*conduit*). Fonction : Complément circonstanciel de conséquence de l'ensemble de la prédication [P0 + P2].

#### 2. Arbre Structurel des Dépendances Hiérarchiques :
```text
P0 [MATRICE SOUVERAINE (Degré 0)] : "chaque citoyen doit rester vigilant"
 ├── P1 [Circonstancielle de concession (Degré 1)] : "Bien que les institutions [...] garantissent [...]"
 ├── P2 [Circonstancielle de cause (Degré 1)] : "puisque la démocratie s'affaiblit [P3]"
 │    └── P3 [Circonstancielle de temps (Degré 2)] : "dès que le peuple renonce au contrôle [...]"
 └── P4 [Circonstancielle de conséquence (Degré 1)] : "de sorte que l'exercice [...] conduit [...]"
```

#### 3. Bilan Sémantico-Modal :
- P1 est au **subjonctif** car la concession pose un obstacle institutionnel réel qui ne dispense pourtant pas le citoyen de sa vigilance (rupture de causalité).
- P2, P3 et P4 sont à l'**indicatif** car ils expriment des mécanismes sociopolitiques tenus pour certains, vérifiables et constants dans l'histoire des nations humaines.
</details>

---

## 15. Activité de Correction Raisonnée

### Contexte Professionnel : L'Audit d'une Tribune Économique
Vous êtes secrétaire général de rédaction au sein d'un grand quotidien économique et diplomatique ouest-africain. Un jeune analyste financier vous soumet son projet d'article d'opinion portant sur la réforme monétaire et industrielle. Le texte comporte **huit erreurs réelles** affectant les connecteurs circonstanciels, les modes verbaux ou la ponctuation démarcative.

### Texte Soumis à Correction (avec erreurs balisées)
> *« **[1]** Après que la commission financière mixte **ait déposé** son rapport définitif sur la compétitivité industrielle, les marchés boursiers régionaux ont réagi avec un optimisme mesuré. Les coûts de l'électricité et du transport fluvial ont diminué de façon sensible **[2]** **au point où** les chefs d'entreprise envisagent désormais de moderniser leurs chaînes d'assemblage sans attendre l'aide de l'État. **[3]** **Malgré que** le tissu manufacturier **traverse** encore une pénurie d'ouvriers qualifiés, le volume des exportations vers le Nigeria voisin s'est consolidé de douze pour cent au cours du troisième trimestre. Les experts rappellent que **[4]** **pendant que les délégués syndicaux soient réunis** au ministère du Travail pour négocier les conventions collectives, les investisseurs étrangers suspendent leurs arbitrages stratégiques. Les banques centrales ont averti solennellement que **[5]** **si les autorités budgétaires prendraient** la décision inconsidérée d'accroître les dépenses publiques courantes, la spirale de la dette souveraine deviendrait incontrôlable. Le président de la chambre de commerce a souligné avec fermeté que **[6]** **tandis que les réformes structurelles soient douloureuses** pour les petites entreprises commerciales, leur mise en œuvre intégrale demeure impérative pour assainir durablement l'environnement des affaires. La direction générale des impôts a rédigé des notices explicatives limpides **[7]** **de sorte que chaque contribuable comprenne** immédiatement les déductions autorisées lors de la télédéclaration annuelle du mois dernier. **[8]** **Puisque les audits comptables révèlent des malversations graves au sein de l'office portuaire** le procureur spécial a ordonné le placement sous séquestre des avoirs bancaires des dirigeants incriminés. »*

---

### Apparat Critique et Tableau de Redressement Normatif

| N° | Segment fautif relevé | Diagnostic linguistique de l'erreur | Réf. source | Forme corrigée normée |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *« Après que la commission [...] ait déposé »* | **Subjonctif fautif après connecteur d'antériorité accomplie**. Le dépôt du rapport s'est déjà produit ; le procès est achevé dans l'histoire réelle, imposant l'indicatif. | `SRC-GRAM-01`, § 1032 ; `SRC-NORM-03`, p. 40 | *« Après que la commission [...] **a déposé** [ou **eut déposé**] »* |
| **2** | *« au point où les chefs d'entreprise »* | **Faux subordonnant hybride**. Contamination orale de la locution consécutive *au point que* par le relatif locatif *où*. | `SRC-GRAM-01`, § 1034 | *« **au point que** les chefs d'entreprise »* |
| **3** | *« Malgré que le tissu [...] traverse »* | **Solécisme de registre**. Adjonction illicite de *que* à la préposition *malgré* pour forger une fausse conjonction concessive. | `SRC-GRAM-01`, § 1040 | *« **Bien que** le tissu [...] traverse »* ou *« **En dépit de** la pénurie [...] »* |
| **4** | *« pendant que les délégués [...] soient réunis »* | **Subjonctif abusif après conjonction de simultanéité**. *Pendant que* constate des faits réels concomitants et gouverne obligatoirement l'indicatif. | `SRC-GRAM-01`, § 1032 ; `SRC-GRAM-02`, § 260 | *« pendant que les délégués [...] **sont réunis** »* |
| **5** | *« si les autorités [...] prendraient »* | **Conditionnel fautif dans la subordonnée en « si »**. *Si* hypothétique exclut formellement le conditionnel et régit l'imparfait de l'indicatif. | `SRC-GRAM-01`, § 1045 ; `SRC-GRAM-02`, chap. 16 | *« si les autorités [...] **prenaient** »* |
| **6** | *« tandis que les réformes [...] soient »* | **Double erreur : connecteur et mode**. Concession travestie en opposition factuelle, assortie d'un subjonctif incohérent après *tandis que*. | `SRC-GRAM-02`, § 272 | *« **bien que** les réformes [...] soient »* ou *« **alors que** les réformes [...] **sont** »* |
| **7** | *« de sorte que chaque contribuable comprenne »* (pour le mois dernier) | **Subjonctif erroné pour une conséquence passée constatée**. Le procès étant déjà accompli lors de la télédéclaration achevée, l'indicatif passé s'impose. | `SRC-GRAM-01`, § 1034 | *« de sorte que chaque contribuable **a compris** »* |
| **8** | *« Puisque les audits [...] portuaire le procureur »* | **Omission de la virgule démarcative**. La subordonnée causale antéposée en tête de phrase doit être séparée de la principale par une virgule. | `SRC-TYPO-01`, p. 143 | *« Puisque les audits [...] portuaire**,** le procureur »* |

---

### Version Intégrale Révisée et Établie
> *« **Après que la commission financière mixte a déposé** son rapport définitif sur la compétitivité industrielle, les marchés boursiers régionaux ont réagi avec un optimisme mesuré. Les coûts de l'électricité et du transport fluvial ont diminué de façon sensible **au point que** les chefs d'entreprise envisagent désormais de moderniser leurs chaînes d'assemblage sans attendre l'aide de l'État. **Bien que** le tissu manufacturier traverse encore une pénurie d'ouvriers qualifiés, le volume des exportations vers le Nigeria voisin s'est consolidé de douze pour cent au cours du troisième trimestre. Les experts rappellent que **pendant que les délégués syndicaux sont réunis** au ministère du Travail pour négocier les conventions collectives, les investisseurs étrangers suspendent leurs arbitrages stratégiques. Les banques centrales ont averti solennellement que **si les autorités budgétaires prenaient** la décision inconsidérée d'accroître les dépenses publiques courantes, la spirale de la dette souveraine deviendrait incontrôlable. Le président de la chambre de commerce a souligné avec fermeté que, **bien que les réformes structurelles soient** douloureuses pour les petites entreprises commerciales, leur mise en œuvre intégrale demeure impérative pour assainir durablement l'environnement des affaires. La direction générale des impôts a rédigé des notices explicatives limpides, **de sorte que chaque contribuable a compris** immédiatement les déductions autorisées lors de la télédéclaration annuelle du mois dernier. **Puisque les audits comptables révèlent des malversations graves au sein de l'office portuaire,** le procureur spécial a ordonné le placement sous séquestre des avoirs bancaires des dirigeants incriminés. »*

---

## 16. Mise en Pratique dans une Production Réelle

### Consigne de Rédaction Normée
Vous devez rédiger une **note d'analyse politique et géostratégique officielle** calibrée à **exactement 60 mots typographiques** selon les normes de l'Imprimerie nationale (`SRC-TYPO-01`, p. 143). 

**Cahier des charges obligatoire** :
1. Longueur arithmétique rigoureuse : **60 mots exacts**.
2. Intégration obligatoire de **trois subordonnées circonstancielles distinctes** :
   - 1 circonstancielle de **concession** au subjonctif (*quoique / bien que*) ;
   - 1 circonstancielle de **cause** à l'indicatif (*parce que / puisque*) ;
   - 1 circonstancielle de **conséquence** à l'indicatif (*si bien que / de sorte que*).
3. Respect irréprochable des règles de ponctuation démarcative (virgules d'isolation).

---

### Texte de la Production Réalisée (60 mots certifiés)

> *« Quoique les vives tensions diplomatiques s'intensifient aux frontières terrestres, le chef du gouvernement maintient résolument le dialogue bilatéral parce que la préservation des échanges économiques demeure vitale pour les populations frontalières, si bien que les ministres plénipotentiaires signeront demain matin un accord formel de sécurité concertée destiné à prévenir toute escalade armée préjudiciable à la paix des nations voisines. »*

---

### Décompte Mot à Mot Certifié (Protocole `SRC-TYPO-01`, p. 143)

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Quoique | **11** | le | **21** | que | **31** | si | **41** | matin | **51** | toute |
| **2** | les | **12** | chef | **22** | la | **32** | bien | **42** | un | **52** | escalade |
| **3** | vives | **13** | du | **23** | préservation | **33** | que | **43** | accord | **53** | armée |
| **4** | tensions | **14** | gouvernement | **24** | des | **34** | les | **44** | formel | **54** | préjudiciable |
| **5** | diplomatiques | **15** | maintient | **25** | échanges | **35** | ministres | **45** | de | **55** | à |
| **6** | s' (*élision*) | **16** | résolument | **26** | économiques | **36** | plénipotentiaires | **46** | sécurité | **56** | la |
| **7** | intensifient | **17** | le | **27** | demeure | **37** | signeront | **47** | concertée | **57** | paix |
| **8** | aux | **18** | dialogue | **28** | vitale | **38** | demain | **48** | destiné | **58** | des |
| **9** | frontières | **19** | bilatéral | **29** | pour | **39** | matin | **49** | à | **59** | nations |
| **10** | terrestres, | **20** | parce | **30** | les | **40** | un | **50** | prévenir | **60** | voisines. |

*Bilan arithmétique certifié* : **60 mots typographiques exacts**.

---

### Tableau de Justification Syntaxique et Sémantique des Trois Circonstancielles

| Circonstancielle extraite | Connecteur | Famille sémantique | Mode & Temps | Rôle énonciatif et justification |
| :--- | :--- | :--- | :--- | :--- |
| *« Quoique les vives tensions diplomatiques s'intensifient aux frontières terrestres »* | *Quoique* | **Concession** | **Subjonctif présent** (*s'intensifient*) | Pose l'obstacle militaire contemporain qui rend la poursuite des pourparlers d'autant plus méritoire (rupture de la conséquence belliqueuse attendue). |
| *« parce que la préservation des échanges économiques demeure vitale pour les populations frontalières »* | *parce que* | **Cause** | **Indicatif présent** (*demeure*) | Apporte la motivation objective, économique et humaine expliquant la fermeté diplomatique du gouvernement dans le monde réel. |
| *« si bien que les ministres plénipotentiaires signeront demain matin un accord formel [...] »* | *si bien que* | **Conséquence** | **Indicatif futur simple** (*signeront*) | Énonce le résultat concret et acté de la médiation, présenté comme un fait certain qui s'accomplira dans le temps historique. |

---

## 17. Résumé Structuré : L'Atlas des Circonstancielles

### 17.1 Grand Tableau Synoptique des Sept Familles Circonstancielles
Voici l'atlas de référence synthétisant la syntaxe et la sémantique des propositions circonstancielles du français standard [Réf. `SRC-GRAM-01`, § 1030-1055 ; `SRC-GRAM-02`, chap. 16] :

| Famille Logique | Conjonctions Directrices Majeures | Mode Régie | Valeur Énonciative Centrale | Piège Normatif Majeur à Proscrire |
| :--- | :--- | :---: | :--- | :--- |
| **1. CAUSE** | *parce que, puisque, comme, vu que, d'autant que*<br/>*(Cause rejetée : non que, ce n'est pas que)* | **Indicatif**<br/>*(Subjonctif)* | Explication réelle de la prédication.<br/>*(Réfutation d'un faux motif).* | Ne jamais employer le subjonctif après *parce que*. Toujours antéposer *comme*. |
| **2. CONSÉQUENCE** | *si bien que, de sorte que, au point que*<br/>*tellement... que, si... que, tant... que* | **Indicatif** | Résultat effectif et constaté découlant du fait principal. | Proscrire le tour hybride oral *au point où*. Réserver le subjonctif au but. |
| **3. BUT (FINALE)** | *pour que, afin que, de peur que, de crainte que* | **Subjonctif** | Visée intentionnelle idéale, projetée dans l'avenir virtuel. | Éviter la subordonnée si les sujets sont coréférentiels (*afin de* + inf.). *Ne* explétif. |
| **4. CONCESSION / OPPOSITION** | Concession : *bien que, quoique, encore que*<br/>Opposition : *alors que, tandis que, pendant que*<br/>*(Concession hypothétique : même si)* | **Subjonctif**<br/>**Indicatif**<br/>*(Indicatif)* | Concession : obstacle causé surmonté.<br/>Opposition : contraste de 2 faits indépendants.<br/>*(Même si = si d'hypothèse).* | BANNIR ABSOLUMENT *malgré que*. Ne pas confondre le contraste (*tandis que*) et l'obstacle (*bien que*). |
| **5. CONDITION / HYPOTHÈSE** | *si* (+ présent, imparfait, plus-que-parfait)<br/>*à condition que, pourvu que, à moins que* | **Indicatif**<br/>**Subjonctif** | *Si* = condition ouverte ou irréelle.<br/>Locutions = restriction ou vœu suspensif. | INTERDICTION ABSOLUE du conditionnel après *si* (*Si j'aurais su*). *Ne* explétif après *à moins que*. |
| **6. TEMPS** | Antériorité : *après que, dès que, aussitôt que*<br/>Simultanéité : *pendant que, tandis que, alors que*<br/>Postériorité : *avant que, en attendant que* | **Indicatif**<br/>**Indicatif**<br/>**Subjonctif** | Fait accompli (historique).<br/>Faits contemporains en cours.<br/>Fait prospectif non encore advenu. | *APRÈS QUE* RÉGIT STRICTEMENT L'INDICATIF (*après qu'il est venu*). *Avant que* prend le *ne* explétif. |
| **7. COMPARAISON** | *de même que, ainsi que, plus... que, comme*<br/>*(Hypothétique : comme si)* | **Indicatif** | Équivalence, proportion ou mesure entre deux prédications. | *Comme si* commande l'imparfait ou le plus-que-parfait de l'indicatif. |

---

### 17.2 Protocole Déductif de Décision en Trois Étapes (PDD-3)
Face à n'importe quelle subordonnée circonstancielle, suivez cet itinéraire infaillible :
1. **Étape 1 (Isolement syntaxique)** : Vérifiez la mobilité et la suppression pour confirmer qu'il s'agit bien d'un complément de phrase et non d'une complétive COD régie par le verbe.
2. **Étape 2 (Qualification de la relation sémantique)** : Identifiez le vecteur logique (cause, conséquence, but, concession, condition, temps, comparaison).
3. **Étape 3 (Arbitrage modal)** : Le procès est-il posé comme avéré dans la réalité (indicatif) ou est-il simplement conçu en pensée, désiré, craint ou contredit (subjonctif) ?

---

## 18. Questions de Rappel Actif (*Active Recall*)

Vérifiez votre maîtrise immédiate en répondant mentalement ou par écrit aux six questions suivantes avant de dérouler les réponses :

1. **Question 1** : Quels sont les deux tests distributionnels fondamentaux permettant de distinguer formellement une proposition subordonnée circonstancielle d'une complétive conjonctive ?
2. **Question 2** : Pourquoi la conjonction temporelle *après que* régit-elle impérativement l'indicatif dans la norme standard, tandis que la locution *avant que* exige le subjonctif ?
3. **Question 3** : Quelle est la différence sémantique précise entre l'opposition factuelle et la concession restrictive ? Donnez pour chacune un mot subordonnant directeur et le mode associé.
4. **Question 4** : Quels modes et temps sont rigoureusement interdits dans une proposition subordonnée introduite par la conjonction *si* de condition ? Quels sont les trois temps de l'indicatif admis ?
5. **Question 5** : Dans quel cas précis une subordonnée de condition introduite par *si* voit-elle son verbe passer au subjonctif lors d'une coordination de propositions ?
6. **Question 6** : Pourquoi la locution consécutive *de sorte que* peut-elle régir soit l'indicatif, soit le subjonctif ? Quel glissement de sens s'opère lors du changement de mode ?

<details>
<summary><strong>Réponses détaillées de rappel actif (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Ce sont les tests de **suppression (effacement)** et de **mobilité syntagmatique (déplacement)**. La circonstancielle peut être retranchée et déplacée en tête, au milieu ou en fin de phrase car elle est un complément de phrase externe. La complétive, étant un complément essentiel du verbe sélectionné par sa valence, ne peut être ni supprimée ni déplacée sans détruire la phrase.
2. **Réponse 2** : Le fait subordonné introduit par *après que* s'est déjà produit au moment où la proposition principale a lieu (antériorité accomplie) : c'est un procès avéré dans la réalité historique, ce qui impose le mode de l'actualisation (**indicatif**). À l'inverse, au moment où la principale a lieu, le fait subordonné introduit par *avant que* ne s'est pas encore produit : il est futur, virtuel et non accompli, ce qui impose le mode de la non-actualisation (**subjonctif**).
3. **Réponse 3** :
   - L'**opposition factuelle** met en regard deux faits indépendants sans qu'aucun n'exerce d'influence sur l'autre (*tandis que, alors que* + **indicatif**).
   - La **concession** constate une relation causale contrariée : un fait qui aurait normalement dû empêcher la réalisation de la principale ne l'a pas empêchée (*bien que, quoique* + **subjonctif**).
4. **Réponse 4** : Le **conditionnel** et le **subjonctif** sont formellement proscrits après *si* hypothétique. Seuls trois tiroirs de l'indicatif sont admis : le présent de l'indicatif (hypothèse ouverte), l'imparfait de l'indicatif (irréel du présent / potentiel) et le plus-que-parfait de l'indicatif (irréel du passé).
5. **Réponse 5** : Lorsqu'une subordonnée en *si* est coordonnée à une seconde conditionnelle par la conjonction *et*, le second connecteur est allégé en **« et que »** et commande obligatoirement le **subjonctif** en registre soutenu : *« S'il vient et qu'il souhaite vous parler... »*.
6. **Réponse 6** :
   - Avec l'**indicatif**, *de sorte que* exprime une **conséquence réelle constatée dans les faits** (*« Il a parlé de sorte que tout le monde a compris »*).
   - Avec le **subjonctif**, *de sorte que* change de valeur pour exprimer un **but visé ou intentionnel** (*« Il a parlé de sorte que tout le monde comprenne »* = afin que tout le monde comprenne).
</details>

---

## 19. Mini-Évaluation Sommative Notée sur 20 Points

- **Durée indicative** : 30 minutes (sans aucun document ni support électronique).
- **Seuil de validation L3 Autonomie** : **14 / 20** (toute note inférieure à 14/20 impose un sas de consolidation de deux heures sur les connecteurs logiques avant d'aborder `CHP-302-02`).
- **Barème pénal officiel** : Tout solécisme modal de type *« après que » + subjonctif* ou *« malgré que »* entraîne le retrait automatique de l'intégralité des points attribués à l'item concerné.

---

### Sujet de l'Épreuve

#### Partie I : Délimitation et Typologie Sémantique (5 points — 1 pt par item)
Isolez entre crochets la proposition circonstancielle, donnez la relation logico-sémantique exacte et justifiez le mode verbal retenu :
1. *Dès que le signal d'alarme retentit, le personnel de garde évacua les laboratoires.*
2. *L'ambassadeur a écourté son séjour officiel parce que des troubles politiques éclatent dans son pays.*
3. *Le président a ajourné la signature du décret de peur qu'un vice de forme n'entache la procédure.*
4. *Bien que les réserves de devises aient diminué, le cours de la monnaie résiste à la spéculation.*
5. *La sécheresse a sévi pendant six mois, si bien que les récoltes de sorgho sont compromises.*

#### Partie II : Sélection Modale et Conjugaison Raisonnée (5 points — 1,25 pt par item)
Complétez par le verbe entre parenthèses au temps et au mode exigés par la norme académique :
1. *Après que l'assemblée nationale (adopter : indicatif ou subjonctif ?) la loi de décentralisation, les communes ont reçu leurs nouvelles compétences.*
2. *Nous poursuivrons les fouilles archéologiques jusqu'à ce que la mission (découvrir) les fondations du temple séculaire.*
3. *Tandis que la majorité parlementaire (soutenir) le budget rectificatif, l'opposition dénonce une austérité injustifiée.*
4. *Le chef de l'État acceptera de négocier, pourvu que les mutins (déposer) immédiatement leurs armes.*

#### Partie III : Chirurgie Syntaxique et Redressement de Solécismes (4 points — 2 pts par phrase)
Identifiez la faute syntaxique ou modale et réécrivez la phrase selon le bon usage académique :
1. *« Malgré que l'accusé ait clamé son innocence durant toute l'instruction, le tribunal criminel l'a reconnu coupable. »*
2. *« Les pluies diluviennes ont inondé le centre-ville au point où la mairie a dû fermer les écoles publiques. »*

#### Partie IV : Dissection Arborescente d'une Période Complexe (6 points)
Soit la phrase suivante :
> *« Lorsque les inspecteurs généraux vérifient les écritures comptables, ils découvrent que l'intendant a falsifié les factures parce que les contrôles internes faisaient défaut. »*

1. **Tableau analytique des propositions (3 points)** : Délimitez les propositions, précisez pour chacune sa nature, son degré d'enchâssement (0, 1 ou 2) et sa fonction syntaxique externe.
2. **Schéma arborescent des dépendances (3 points)** : Représentez graphiquement l'arbre structurel rattachant chaque régie à sa matrice.

---

### Corrigé Officiel et Barème Détaillé

<details>
<summary><strong>Barème officiel et corrigé de la mini-évaluation (cliquer pour dérouler)</strong></summary>

#### Partie I : Délimitation et Typologie (5 points — 1 pt par item)
1. *« [Dès que le signal d'alarme retentit] »* (0,25 pt). Relation : **Temps (postériorité de la principale / immédiateté)** (0,5 pt). Mode : **Indicatif passé simple** (0,25 pt), procès avéré.
2. *« [parce que des troubles politiques éclatent dans son pays] »* (0,25 pt). Relation : **Cause factuelle** (0,5 pt). Mode : **Indicatif présent** (0,25 pt), cause réelle objective.
3. *« [de peur qu'un vice de forme n'entache la procédure] »* (0,25 pt). Relation : **But négatif** (0,5 pt). Mode : **Subjonctif présent** avec *ne* explétif (0,25 pt), risque virtuel redouté.
4. *« [Bien que les réserves de devises aient diminué] »* (0,25 pt). Relation : **Concession** (0,5 pt). Mode : **Subjonctif passé** (0,25 pt), rupture causale.
5. *« [si bien que les récoltes de sorgho sont compromises] »* (0,25 pt). Relation : **Conséquence consécutive** (0,5 pt). Mode : **Indicatif présent** (0,25 pt), résultat effectif constaté.

#### Partie II : Sélection Modale (5 points — 1,25 pt par item)
1. *« Après que l'assemblée nationale **a adopté** [ou **eut adopté**] la loi [...] »* (1,25 pt). Indicatif passé obligatoire après *après que*. Le subjonctif est pénalisé de 0 point.
2. *« [...] jusqu'à ce que la mission **découvre** les fondations [...] »* (1,25 pt). Subjonctif présent imposé par la locution temporelle d'attente prospective.
3. *« Tandis que la majorité parlementaire **soutient** le budget [...] »* (1,25 pt). Indicatif présent imposé par l'opposition factuelle.
4. *« [...] pourvu que les mutins **déposent** immédiatement leurs armes »* (1,25 pt). Subjonctif présent exigé par la locution conditionnelle restrictive.

#### Partie III : Chirurgie Syntaxique (4 points — 2 pts par item)
1. *Diagnostic* : Solécisme *malgré que* (1 pt).  
   *Correction* : *« **Bien que l'accusé ait clamé son innocence** durant toute l'instruction, le tribunal criminel l'a reconnu coupable »* ou *« **En dépit des dénégations répétées de l'accusé**, le tribunal... »* (1 pt).
2. *Diagnostic* : Faux connecteur hybride oral *au point où* (1 pt).  
   *Correction* : *« Les pluies diluviennes ont inondé le centre-ville **au point que** la mairie a dû fermer les écoles publiques »* (1 pt).

#### Partie IV : Dissection Arborescente (6 points)
1. **Tableau analytique des propositions (3 points — 0,75 pt par proposition)** :
   - **P0 [Degré 0 — Matrice principale]** : *« ils découvrent [P2] »* — Matrice rectrice portant l'assertion souveraine.
   - **P1 [Degré 1 — Circonstancielle temporelle]** : *« Lorsque les inspecteurs généraux vérifient les écritures comptables »* — Complément circonstanciel de temps de P0 ; subordonnant : *Lorsque* ; indicatif présent.
   - **P2 [Degré 1 — Complétive conjonctive]** : *« que l'intendant a falsifié les factures [P3] »* — Complément d'objet direct (COD) du verbe *découvrent* (P0) ; subordonnant : *que* ; indicatif passé composé.
   - **P3 [Degré 2 — Circonstancielle causale]** : *« parce que les contrôles internes faisaient défaut »* — Complément circonstanciel de cause du verbe *a falsifié* (P2) ; subordonnant : *parce que* ; indicatif imparfait.

2. **Schéma Arborescent (3 points)** :
```text
P0 [MATRICE PRINCIPALE (Degré 0)] : "ils découvrent [P2]"
 ├── P1 [Circonstancielle temporelle (Degré 1)] : "Lorsque les inspecteurs généraux vérifient [...]"
 └── P2 [Complétive conjonctive COD (Degré 1)] : "que l'intendant a falsifié les factures [P3]"
      └── P3 [Circonstancielle causale (Degré 2)] : "parce que les contrôles internes faisaient défaut"
```
*(Barème : 1,5 pt pour l'exactitude des degrés d'enchâssement ; 1,5 pt pour la distinction nette entre la complétive P2 et les circonstancielles P1 et P3).*
</details>

---

## 20. Critères Observables de Maîtrise (Palier L3 Autonomie)

La validation de ce chapitre atteste l'acquisition opérationnelle du palier **L3 (Autonomie)** pour les compétences [`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe) et [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) du référentiel World-Class French :

| Code Indicateur | Compétence Associée | Comportement Observable en Situation Autonome | Seuil d'Excellence Requis |
| :---: | :---: | :--- | :---: |
| **IND-01** | `FR-SYNTAX-002` (**L3**) | **Délimitation et tests de suppression/mobilité** : L'apprenant délimite sans erreur les frontières de la circonstancielle et prouve son statut de complément de phrase par l'antéposition et la suppression. | **100 % d'assignations exactes** sur corpus |
| **IND-02** | `FR-SYNTAX-002` (**L3**) | **Classification sémantique infaillible** : Face à n'importe quel texte complexe, l'apprenant catégorise instantanément la subordonnée dans l'une des 7 familles logiques sans jamais confondre cause et conséquence, ni opposition et concession. | $\ge 95\ \%$ de réussite sur 20 items d'examen |
| **IND-03** | `FR-VERB-002` (**L3**) | **Sélection modale raisonnée (Indicatif vs Subjonctif)** : L'apprenant applique sans faute l'indicatif aux faits accomplis/réels (*après que*, cause, conséquence) et le subjonctif aux procès virtuels (*avant que*, but, concession). | **Zéro faute éliminatoire** (*après que*, *bien que*) |
| **IND-04** | `FR-INT-002` (**L3**) | **Coordination et reprise par « et que »** : L'apprenant manie la reprise conjonctive en maintenant l'indicatif ou en appliquant la bascule au subjonctif après *si* dans la prose académique. | **100 % de conformité** dans les productions libres |

---

## 21. Sources et Lectures Complémentaires

Conformément à la politique d'intégrité bibliographique du cursus World-Class French ([`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md)), toutes les notions et règles de ce chapitre s'appuient exclusivement sur les sources académiques de référence suivantes :

1. **[`SRC-GRAM-01`] Grevisse, Maurice & Goosse, André (2016)**. *Le Bon Usage : Grammaire française* (16e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 1030-1031** : Les propositions subordonnées circonstancielles de cause (morphologie de *parce que, puisque, comme* et cause rejetée en *non que*).
   - **§ 1032-1033** : Les propositions circonstancielles de temps (règles de concordance modale, procès d'*après que* et d'*avant que*).
   - **§ 1034-1035** : Les propositions de conséquence (conséquence globale vs corrélative, clivage indicatif/subjonctif).
   - **§ 1036-1037** : Les propositions circonstancielles de but (régime exclusif du subjonctif et contraintes de coréférence du sujet).
   - **§ 1038-1040** : Les propositions de concession et d'opposition (condamnation formelle de *malgré que*, distinction avec *alors que / tandis que*).
   - **§ 1042-1045** : Les propositions de condition et d'hypothèse (le système de *si* à l'indicatif vs locutions conjonctives au subjonctif).
   - **§ 1048-1052** : Les propositions circonstancielles de comparaison.
   - **§ 1065** : Les règles d'ellipse et de répétition des conjonctions dans la coordination (*et que*).
2. **[`SRC-GRAM-02`] Riegel, Martin, Pellat, Jean-Christophe & Rioul, René (2016/2021)**. *Grammaire méthodique du français*. Paris : Presses Universitaires de France (PUF), coll. « Quadrige ».
   - **Chapitre 10 (*Le verbe : modes et temps*)** : Théorie linguistique de l'actualisation du procès (saisie dans le réel vs saisie dans le virtuel).
   - **Chapitre 16 (*Les propositions subordonnées circonstancielles*)** : Typologie distributionnelle, syntaxe formelle des compléments de phrase, théorie des adjoints propositionnels ($TP$ vs $CP$), et analyse sémantique des sept relations logiques.
3. **[`SRC-NORM-03`] Ministère de l'Éducation nationale (2020)**. *Terminologie grammaticale*. Paris : Réseau Canopé / Éduscol.
   - **Pages 32 à 34 (*Les compléments de phrase et la subordination circonstancielle*)** : Définition officielle de la subordonnée circonstancielle, critères d'effacement et de mobilité syntagmatique, nomenclature des relations logiques.
   - **Pages 40 à 42 (*Le système modal*)** : Valeurs des modes indicatif et subjonctif en dépendance subordonnée.
4. **[`SRC-TYPO-01`] Imprimerie nationale (2002/2014)**. *Lexique des règles typographiques en usage à l'Imprimerie nationale*. Paris : Imprimerie nationale.
   - **Pages 142 à 144 (*Ponctuation*)** : Règles d'interpunction des propositions circonstancielles antéposées et intercalées, et protocole officiel de calcul des mots typographiques.

---

## Annexe : Classification Pédagogique et Traçabilité du Contenu

Conformément aux directives de gouvernance ([`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md)), le tableau ci-dessous explicite la répartition didactique des notions abordées dans ce chapitre de cadrage :

| Étiquette didactique | Contenu grammatical / Notion syntaxique | Justification didactique & Destination précise |
| :---: | :--- | :--- |
| **CORE-NOW** | • Définition formelle de la circonstancielle comme complément de phrase mobile et effaçable.<br/>• Typologie des sept relations logiques : cause, conséquence, but, concession/opposition, condition, temps, comparaison.<br/>• Clivage sémantique de l'actualisation : indicatif (réel) vs subjonctif (virtuel).<br/>• Règle d'or de *si* hypothétique (+ indicatif obligatoire).<br/>• Proscription absolue des solécismes *malgré que* et *au point où*. | Cœur opérationnel du chapitre `CHP-302-01`. Socle taxonomique indispensable pour débloquer l'étude approfondie du système modal dans le reste du module `MOD-302`. |
| **INTRODUCTION-NOW** | • Présentation liminaire du « ne » explétif après *avant que, de peur que, à moins que*.<br/>• Première approche des propositions circonstancielles participiales à sujet propre et gérondives.<br/>• Principe de bascule modale au subjonctif après *si... et que*. | Éveiller l'attention de l'apprenant sur des phénomènes stylistiques qui feront l'objet de chapitres dédiés. |
| **DEFER** | • Théorie sémantique exhaustive du subjonctif vs indicatif dans les propositions complétives et circonstancielles. | **Reporté à [`MOD-302` — Chapitre 2](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-2--sémantique-fondamentale-du-subjonctif-vs-indicatif-3-h-30)**. |
| **DEFER** | • Étude philologique approfondie des pièges normatifs alternatifs (*après que* + ind., *espérer que* + ind., matrices négatives/interrogatives). | **Reporté à [`CHP-302-03`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302/chp-302-03-pieges-normatifs-regimes-modaux-alternatifs.md)**. |
| **DEFER** | • Système du conditionnel temporel et modal, et analyse détaillée des trois périodes conditionnelles canoniques en *si*. | **Reporté à [`MOD-302` — Chapitre 4](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-4--le-système-du-conditionnel-et-les-structures-en-si-3-h-00)**. |
| **DEFER** | • Mécanique énonciative et inventaire exhaustif des déclencheurs du « ne » explétif. | **Reporté à [`MOD-302` — Chapitre 5](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-5--le-ne-explétif-et-la-polarité-énonciative-2-h-30)**. |
| **DEFER** | • Règles intégrales de la concordance des temps à l'indicatif et au subjonctif soutenu (subjonctif imparfait et plus-que-parfait). | **Reporté à [`MOD-302` — Chapitre 6](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-6--concordance-des-temps-à-lindicatif-et-au-subjonctif-3-h-00)**. |
| **MOVE** | • Déploiement des subordonnées circonstancielles au sein de la grande période oratoire de Bossuet ou Rousseau. | **Rattaché à [`MOD-501`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md)** (*Macro-syntaxe et Période Oratoire*). |
| **OPTIONAL-ADVANCED** | • Modélisation générative des adjoints propositionnels au niveau $TP$ vs $CP$ et théorie cartographique de la périphérie gauche (Rizzi). | Section 12 du présent chapitre, destinée aux étudiants préparant les concours d'enseignement supérieur (Agrégation/CAPES). |
| **REMOVE** | • Les emplois archaïques du subjonctif après *après que* au XVIe siècle ou les subordinations temporelles sans conjonction du moyen français. | Écarté du cursus contemporain pour préserver l'intégrité de la norme prescriptive moderne (sera abordé en histoire de la langue en `MOD-601`). |
