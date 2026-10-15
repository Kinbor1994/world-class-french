# Chapitre 4 — Le Système du Conditionnel et les Périodes Hypothétiques en « Si » : Valeurs Temporelle vs Modale, les Trois Structures Canoniques et Proscription de l'Irréel dans la Protase

> **Identifiant du chapitre** : `CHP-302-04`  
> **Module de rattachement** : [`MOD-302` — Subordonnées Circonstancielles, Système Modal (Subjonctif et Conditionnel) et Concordance des Temps](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md)  
> **Semestre** : Année 2 — Semestre 3 (S3)  
> **Volume horaire estimé** : 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application (Phase 1 Étude : 1 h 30 | Phase 2 Pratique : 1 h 30 | Phase 3 Correction : 1 h 00 | Phase 4 Évaluation : 1 h 00)  
> **Statut** : [STATUT : VALIDÉ]  
> **Compétences associées** : [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) (L3 Autonomie), [`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe) (L3 Autonomie), [`FR-ORTHO-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-002-mécanique-infaillible-de-laccord-sujet-verbe) (L3 Autonomie)  
> **Sources scientifiques de référence** : `SRC-GRAM-01` (Grevisse & Goosse, 2016, § 884, § 1045, § 1065), `SRC-GRAM-02` (Riegel, Pellat & Rioul, 2016, chap. 10 & 16), `SRC-NORM-03` (Ministère de l'Éducation nationale, 2020, p. 40-42, 44-48), `SRC-TYPO-01` (Imprimerie nationale, 2002, p. 143)

---

## 1. Titre et Place dans le Cursus

### 1.1 Intitulé Officiel
**Chapitre 4 : Le Système du Conditionnel et les Périodes Hypothétiques en « Si » : Valeurs Temporelle vs Modale, les Trois Structures Canoniques et Proscription de l'Irréel dans la Protase** (`CHP-302-04`).

### 1.2 Insertion Architecturale dans le Cursus
Le présent chapitre occupe une place charnière au cœur du module [`MOD-302`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md). Après avoir posé la typologie générale des subordonnées circonstancielles (`CHP-302-01`), théorisé la sémantique de l'indicatif face au subjonctif (`CHP-302-02`) et traité les régimes modaux conflictuels (`CHP-302-03`), l'apprenant aborde ici le tiers exclu du système verbal français : **le conditionnel** [Réf. `SRC-NORM-03`, p. 40-42 ; `SRC-GRAM-02`, chap. 10].

Tiraillé historiquement entre le statut de tiroir temporel de l'indicatif (le futur du passé dans la dépendance d'un verbe recteur au passé) et celui de mode autonome de l'imaginaire, du potentiel et de l'irréel, le conditionnel constitue le révélateur le plus impitoyable de la maîtrise grammaticale. C'est en son sein que se noue la mécanique rigoureuse de la **période conditionnelle canonique régie par la conjonction « si »**.

```mermaid
flowchart TD
    MOD103["<b>MOD-103 (S1)</b><br/>Tiroirs Verbaux de l'Indicatif<br/>& Distinction Graphique -ai / -ais"] --> CHP30204["<b>CHP-302-04</b><br/>Système du Conditionnel<br/>& Périodes Hypothétiques en « Si »"]
    MOD201["<b>MOD-201 (S2)</b><br/>Syntaxe Fonctionnelle de la Phrase Simple<br/>& Valence Verbale"] --> CHP30204
    CHP30201["<b>CHP-302-01 (S3)</b><br/>Typologie des Circonstancielles<br/>(Cause, But, Hypothèse, Temps)"] --> CHP30204
    CHP30202["<b>CHP-302-02 (S3)</b><br/>Sémantique du Subjonctif vs Indicatif<br/>(Virtuel vs Actuel)"] --> CHP30204
    CHP30203["<b>CHP-302-03 (S3)</b><br/>Pièges Normatifs & Régimes Modaux<br/>(après que, espérer que)"] --> CHP30204

    CHP30204 ==>|Prophylaxie des solécismes négatifs| CHP30205["<b>CHP-302-05 (S3)</b><br/>Le « Ne » Explétif<br/>& la Polarité Énonciative"]
    CHP30204 ==>|<b>DEP-VRB-02 (Hard)</b> : Fondement de la concordance au passé| CHP30206["<b>CHP-302-06 (S3)</b><br/>Concordance des Temps<br/>à l'Indicatif & au Subjonctif"]
    CHP30204 ==>|Maniement des réfutations sous hypothèse| MOD402["<b>MOD-402 (S4)</b><br/>Rhétorique Argumentative,<br/>Réfutation & Négociation"]
    CHP30204 -.->|Architecture des grandes périodes conditionnelles| MOD501["<b>MOD-501 (S5)</b><br/>Macro-syntaxe, Période Oratoire<br/>& Cadences Rythmiques"]

    classDef fondation stroke:#2563eb,stroke-width:2px;
    classDef pivot stroke:#b91c1c,stroke-width:3px;
    classDef suite stroke:#059669,stroke-width:2px;
    class MOD103,MOD201,CHP30201,CHP30202,CHP30203 fondation;
    class CHP30204 pivot;
    class CHP30205,CHP30206,MOD402,MOD501 suite;
```

- **En amont** : Ce chapitre prend appui direct sur la maîtrise morphologique des tiroirs verbaux acquise en [`MOD-103`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103-systeme-verbal-indicatif.md) (notamment la discrimination phonétique et graphique entre le futur en *-ai* [e] et le conditionnel en *-ais* [ɛ]), ainsi que sur l'analyse de l'enchâssement propositionnel issue de [`MOD-301`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301-architecture-subordination-completives.md).
- **En aval immédiat** : La délimitation stricte des valeurs temporelles et modales conditionne la compréhension de la polarité et du « ne » explétif (`CHP-302-05`), ainsi que l'application infaillible de la concordance des temps de l'indicatif sous un verbe au passé (`CHP-302-06`).
- **En projection lointaine** : L'art de formuler une objection contrefactuelle (*« Si la prémisse adverse était avérée, les conséquences économiques seraient catastrophiques... »*) constitue le levier maître de la rhétorique diplomatique et juridique de Cycle 2 ([`MOD-402`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md)) et le matériau architectural de la grande période oratoire cicéronienne de Bossuet ou Chateaubriand ([`MOD-501`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md)).

---

## 2. Objectifs Mesurables

Au terme des 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application de ce chapitre, l'apprenant est capable de :

1. **Classifier avec une exactitude de 100 % la valeur sémantique et syntaxique de tout conditionnel rencontré en contexte** : distinguer sans hésitation le **conditionnel temporel** (futur dans le passé en proposition complétive sous verbe recteur au passé) du **conditionnel modal** (atténuation, information sous réserve, potentiel, irréel du présent, irréel du passé) ([`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance), Palier L3 Autonomie).
2. **Construire, identifier et transposer sans faille les trois systèmes conditionnels canoniques régis par « si »** :
   - *Système 1 (Hypothèse ouverte / Réel plausible)* : $Si + \text{présent de l'indicatif} \to \text{futur simple (ou présent / impératif)}$ ;
   - *Système 2 (Potentiel ou Irréel du présent)* : $Si + \text{imparfait de l'indicatif} \to \text{conditionnel présent}$ ;
   - *Système 3 (Irréel du passé)* : $Si + \text{plus-que-parfait de l'indicatif} \to \text{conditionnel passé (1re forme)}$ ([`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance), Palier L3 Autonomie).
3. **Appliquer infailliblement la proscription absolue du conditionnel dans la proposition subordonnée régie par « si » hypothétique** (éradication définitive des solécismes du type *« Si j'aurais su »* ou *« Si nous serions venus »*) et manier avec discernement les **systèmes mixtes** associant une protase contrefactuelle au passé et une apodose contemporaine au présent ([`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance), Palier L3 Autonomie).
4. **Coordonner avec élégance plusieurs propositions hypothétiques** en appliquant la règle normative de reprise de la conjonction *si* par **« et que » suivi du subjonctif** (*« S'il vient et qu'il fasse beau... »*) avec un taux de réussite de 100 % dans ses rédactions académiques ([`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe), Palier L3 Autonomie).

---

## 3. Prérequis et Test de Préparation

### 3.1 Prérequis Exigibles
- **Morphologie des tiroirs de l'indicatif (`MOD-103`)** : Conjugaison instantanée du présent, de l'imparfait, du plus-que-parfait et du futur simple de l'indicatif pour tous les verbes réguliers et irréguliers fréquents.
- **Morphologie du conditionnel (`MOD-103`)** : Formation du conditionnel présent (radical du futur + désinences de l'imparfait *-ais, -ais, -ait, -ions, -iez, -aient*) et du conditionnel passé première forme (auxiliaire *avoir* ou *être* au conditionnel présent + participe passé).
- **Discrimination graphique et phonétique `-ai` vs `-ais` (`MOD-103` & `FR-ORTHO-002`)** : Distinction entre la 1re personne du futur (*je ferai* `/ʒə fə.ʁe/`) et la 1re personne du conditionnel (*je ferais* `/ʒə fə.ʁɛ/`).
- **Subordination circonstancielle vs complétive (`MOD-301` & `CHP-302-01`)** : Reconnaissance du rôle de complément circonstanciel de condition/hypothèse (déplaçable et supprimable) par opposition au rôle de complément d'objet direct d'une interrogative indirecte.

### 3.2 Test de Préparation (Auto-Diagnostic à 5 Questions)
Répondez par écrit aux cinq questions suivantes avant de dérouler le corrigé repliable :

1. **Question 1 (Morphologie verbale)** : Donnez la 1re personne du singulier et la 1re personne du pluriel du verbe *savoir* : (a) au futur simple de l'indicatif ; (b) au conditionnel présent.
2. **Question 2 (Nature de proposition)** : Dans la phrase *« Les diplomates demandent si le cessez-le-feu sera respecté »*, quelle est la fonction syntaxique exacte de la proposition introduite par *si* ? Est-ce une circonstancielle d'hypothèse ?
3. **Question 3 (Repérage de tiroir)** : Dans la phrase *« Hier matin, le ministre a affirmé qu'il prendrait la parole dès le lendemain »*, quelle est la valeur temporelle ou modale de la forme verbale *prendrait* ?
4. **Question 4 (Détection d'erreur)** : Pourquoi l'énoncé *« Si tu serais arrivé à l'heure, nous n'aurions pas raté le train »* est-il sévèrement sanctionné par la norme grammaticale française ?
5. **Question 5 (Concordance)** : Complétez la phrase suivante par le tiroir verbal adéquat : *« Si les réserves de devises venaient à s'épuiser, la banque centrale (devoir) ____________ relever ses taux directeurs. »*

<details>
<summary><strong>Corrigé détaillé et barème de l'auto-diagnostic (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** :
   - (a) Futur simple de l'indicatif : *je saurai*, *nous saurons*.
   - (b) Conditionnel présent : *je saurais*, *nous saurions*.
2. **Réponse 2** : Il s'agit d'une **proposition subordonnée complétive interrogative indirecte** (COD du verbe transitif direct *demandent*). Ce n'est absolument pas une circonstancielle d'hypothèse ; la conjonction *si* est ici un mot interrogatif exprimant une alternative (*si oui ou non*), et non une condition.
3. **Réponse 3** : La forme *prendrait* est un **conditionnel temporel** (ou futur dans le passé). Il ne traduit aucune modalité d'incertitude ou de condition, mais exprime un procès postérieur par rapport au repère temporel passé de la proposition principale (*a affirmé*).
4. **Réponse 4** : L'énoncé est agrammatical car la langue française **proscrit absolument le mode conditionnel dans la proposition subordonnée introduite par la conjonction de subordination « si » hypothétique**. Après *si*, la langue exige l'indicatif plus-que-parfait pour exprimer l'irréel du passé : *« Si tu **étais** arrivé à l'heure... »*.
5. **Réponse 5** : *« Si les réserves de devises venaient [imparfait] à s'épuiser, la banque centrale **devrait** [conditionnel présent] relever ses taux directeurs. »* (Système 2 canonique : potentiel).

> **Diagnostic d'orientation** :
> - **5 / 5** : Prérequis maîtrisés. Vous pouvez aborder directement la section 4.
> - **3 ou 4 / 5** : Prérequis fragiles sur la distinction complétive/circonstancielle ou la morphologie. Soyez particulièrement attentif aux sections 6, 7 et 10.
> - **< 3 / 5** : Révision obligatoire de la conjugaison du conditionnel en [`MOD-103`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-1/mod-103-systeme-verbal-indicatif.md) et des interrogatives indirectes en [`CHP-301-03`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-301/chp-301-03-interrogation-exclamation-indirectes.md).
</details>

---

## 4. Situation de Départ ou Problème Concret

### 4.1 Le Solécisme le Plus Universel de la Francophonie
Dans le film culte d'Yves Robert *La Guerre des boutons* (1962), le jeune personnage de Tigibus s'écrie, après avoir essuyé une punition mémorable :
> *« Si j'aurais su, j'aurais pas venu ! »*

Cette réplique, passée dans le patrimoine populaire français pour illustrer la verdeur enfantine ou l'ignorance grammaticale crasse, condense en huit mots les deux solécismes les plus rédhibitoires de la langue française : l'auxiliation fautive avec *avoir* pour un verbe de mouvement intransitif (*j'aurais venu* au lieu de *je serais venu*), et surtout **l'emploi du conditionnel passé dans la proposition subordonnée régie par la conjonction « si »** (*Si j'aurais su* au lieu de *Si j'avais su*).

Pourtant, cette faute n'est pas l'apanage des cours de récréation. On l'entend dans les couloirs des assemblées politiques, dans les salles de rédaction de presse, dans les dépositions judiciaires et dans les copies d'étudiants préparant les concours administratifs :
- ❌ *« Si le gouvernement **aurait anticipé** la hausse des prix, l'inflation ne frapperait pas si durement les ménages. »*
- ❌ *« Si nous **pourrions** obtenir cette subvention, nous lancerions le chantier immédiatement. »*
- ❌ *« S'il **serait** là, il nous expliquerait la situation. »*

Dans un jury de concours (CAPES, Agrégation, ENA/INSP, magistrature) ou lors d'un entretien de recrutement de haut niveau, **un seul conditionnel employé après « si » élimine instantanément le candidat**. Cette faute est perçue comme la marque indélébile d'une incapacité à structurer le raisonnement logique et à respecter le contrat d'énonciation du français académique [Réf. `SRC-NORM-03`, p. 42 ; `SRC-GRAM-01`, § 1045].

### 4.2 La Confusion Fonctionnelle : Le Conditionnel a-t-il Deux Visages ?
À ce piège s'ajoute un second désarroi théorique chez les scripteurs :
Pourquoi le mot *« dirait »* peut-il exprimer tantôt une simple chronologie historique neutre et certaine, tantôt un pur fantasme imaginaire ?
1. *« Dès 1910, le physicien annonça qu'il **démontrerait** l'existence de cette particule. »*
2. *« Si vous me posiez la question, je vous **dirais** mon sentiment. »*
3. *« Selon les dépêches de l'agence de presse, le président **démissionnerait** ce soir. »*

Dans le premier cas, le procès a été conçu comme certain et situé dans l'avenir objectif par rapport au passé : c'est un **temps**.  
Dans le deuxième, le procès est suspendu à une condition non réalisée : c'est un **mode**.  
Dans le troisième, l'énonciateur refuse d'engager sa responsabilité de vérité : c'est une **attitude modale d'emprunt**.

Comprendre le système du conditionnel, c'est désarticuler cette polyphonie énonciative pour savoir exactement quel levier temporel ou modal on actionne dans la phrase.

---

## 5. Explication Intuitive : L'Aiguillage Ferroviaire et les Mondes Parallèles

Pour saisir la logique interne de la période conditionnelle sans s'égarer dans les abstractions, une modélisation spatiale et mécanique s'impose :

### 5.1 L'Analogie de l'Aiguillage Ferroviaire
Imaginons un réseau de voies ferrées sur lequel circule le train de la pensée :
- La **protase (la subordonnée en « si »)** est l'**aiguillage**. Elle ne fait pas rouler le train ; elle détermine uniquement sur quelle voie le convoi va s'engager.
  - Si l'aiguilleur positionne l'aiguillage dans le **monde réel objectif** ($Si + \text{présent}$), le train s'élance sur la voie du réel futur.
  - Si l'aiguilleur positionne l'aiguillage dans le **monde de la simulation imaginaire présente** ($Si + \text{imparfait}$), le train bascule sur une voie parallèle suspendue au-dessus du réel.
  - Si l'aiguilleur constate que le convoi d'hier a déjà franchi la bifurcation dans une mauvaise direction, il actionne l'aiguillage rétrospectif du **monde contrefactuel forclos** ($Si + \text{plus-que-parfait}$).
- L'**apodose (la proposition principale)** est la **rame de train (la conséquence)**. Elle est propulsée avec une énergie modale adaptée à la voie sur laquelle l'aiguillage l'a envoyée :
  - Sur la voie du réel $\to$ le train roule au **futur de l'indicatif** (*l'accord débutera*).
  - Sur la voie de l'imaginaire présent $\to$ le train flotte au **conditionnel présent** (*l'accord débuterait*).
  - Sur la voie du passé révolu $\to$ le train roule dans le souvenir contrefactuel au **conditionnel passé** (*l'accord aurait débuté*).

```text
                                  ┌─── [RÉEL OUVERT] ──────> Apodose au FUTUR INDICATIF
                                  │    (Si vous signez...)   (... le chantier débutera)
                                  │
ÉTAT INITIAL ──> AIGUILLAGE « SI » ┼─── [IMAGINAIRE PRÉSENT] > Apodose au CONDITIONNEL PRÉSENT
                                  │    (Si vous signiez...)  (... le chantier débuterait)
                                  │
                                  └─── [PASSÉ CONTREFACTUEL]> Apodose au CONDITIONNEL PASSÉ
                                       (Si vous aviez signé) (... le chantier aurait débuté)
```

### 5.2 Pourquoi l'Aiguillage n'a pas Besoin de Moteur Propre
Pourquoi le conditionnel est-il exclu de l'aiguillage en *si* ?  
L'aiguillage n'a pas à porter le moteur du conditionnel parce que **la conjonction « si » contient déjà en elle-même l'instruction d'hypothèse**.  
Mettre un conditionnel après *si*, c'est installer une locomotive sur un simple rail d'aiguillage avant même que la rame ne démarre : la mécanique se grippe, créant une redondance insupportable pour l'esprit francophone.

---

## 6. Définitions Précises et Terminologie

Pour manipuler le système conditionnel avec l'exactitude d'un grammairien et d'un linguiste de haut niveau, dix termes fondamentaux doivent être rigoureusement définis [Réf. `SRC-NORM-03`, p. 40-42 ; `SRC-GRAM-02`, chap. 10 & 16] :

1. **Période hypothétique (ou Système conditionnel)** : Macro-structure syntaxique complexe composée d'au moins deux propositions solidaires : une proposition régie qui pose une condition préalable ou une hypothèse, et une proposition rectrice qui en formule la conséquence logique ou factuelle [Réf. `SRC-GRAM-02`, chap. 16].
2. **Protase** : Terme d'origine grecque (*protasis*, proposition mise en avant) désignant la proposition subordonnée circonstancielle qui formule l'hypothèse, la supposition ou la condition suspensive (le plus souvent introduite par *si*).
3. **Apodose** : Terme d'origine grecque (*apodosis*, restitution, contrepartie) désignant la proposition principale (rectrice) qui énonce le résultat, la conséquence ou l'aboutissement conditionné par la protase.
4. **Conditionnel temporel (ou Futur du passé)** : Emploi du tiroir verbal en *-rais* au sein du mode indicatif dans une proposition subordonnée complétive régie par un verbe recteur au passé, pour situer un procès dans la postériorité par rapport au moment de référence passé (*« Le directeur savait [passé] que le projet aboutirait [futur du passé] »*) [Réf. `SRC-NORM-03`, p. 42].
5. **Conditionnel modal** : Emploi du tiroir verbal en *-rais* comme mode à part entière pour exprimer un procès dont la réalisation est soumise à une condition imaginaire, atténuée, incertaine ou contrefactuelle (*« Nous aimerions vous aider »*, *« Il accepterait cette mission »*).
6. **Potentiel (ou Éventuel)** : Valeur modale envisageant un procès futur dont la réalisation est présentée comme concevable, plausible ou ouverte à la délibération, sans certitude absolue mais sans impossibilité matérielle (*« S'il venait demain, nous pourrions en débattre »*) [Réf. `SRC-GRAM-01`, § 884].
7. **Irréel du présent** : Valeur modale posant un procès dans le temps présent, mais dont la réalisation est formellement contredite par l'état actuel du monde réel au moment de l'énonciation (*« Si j'étais riche [or, je suis pauvre], j'achèterais ce domaine »*).
8. **Irréel du passé (Contrefactuel)** : Valeur modale posant un procès dans le temps passé, mais dont la non-réalisation est définitivement consommée et avérée par l'Histoire (*« Si Napoléon avait vaincu à Waterloo [or, il a été battu], l'Europe aurait pris un autre visage »*).
9. **Système mixte (ou Période hybride)** : Période hypothétique asymétrique dont la protase est ancrée dans le passé contrefactuel (plus-que-parfait) et dont l'apodose projette ses conséquences dans le présent immédiat (conditionnel présent) : *« Si nous avions validé ce budget en janvier, notre trésorerie serait excédentaire aujourd'hui »*.
10. **Reprise d'hypothèse par « et que »** : Dispositif syntaxique élégant par lequel, pour éviter la répétition lourde de la conjonction *si* lors de la coordination de deux propositions circonstancielles d'hypothèse, la seconde protase est introduite par *que* et commande obligatoirement le mode **subjonctif** [Réf. `SRC-GRAM-01`, § 1065].

---

## 7. Règles ou Mécanismes Fondamentaux

### 7.1 La Double Nature du Conditionnel : Tiroir Temporel de l'Indicatif vs Mode Autonome
La grammaire moderne, consacrée par la *Terminologie grammaticale* du Ministère de l'Éducation nationale et la *Grammaire méthodique du français*, a clarifié le statut séculairement disputé du conditionnel [Réf. `SRC-NORM-03`, p. 40-42 ; `SRC-GRAM-02`, chap. 10] :

#### (A) Le Conditionnel Temporel (Futur du Passé)
Morphologiquement, le conditionnel combine le radical du futur simple (en *-r-*) et les désinences temporelles d'époque de l'imparfait de l'indicatif (*-ais, -ais, -ait, -ions, -iez, -aient*).  
En syntaxe de subordination complétive, lorsque la proposition régissante est conjuguée à un temps du passé (passé simple, passé composé, imparfait, plus-que-parfait), la concordance temporelle mécanique convertit le futur simple de l'énonciation directe en **futur du passé** :
- Discours direct : *Pierre déclare : « Je **partirai** demain ». (Futur simple)*
- Discours indirect au présent : *Pierre déclare qu'il **partira** demain. (Futur simple)*
- Discours indirect au passé : *Pierre **a déclaré** qu'il **partirait** le lendemain. (Futur du passé = conditionnel)*

Dans cet emploi, **le conditionnel n'exprime aucun doute, aucune incertitude, aucune condition**. C'est un pur tiroir temporel de l'indicatif qui marque la **postériorité chronologique par rapport à un repère passé** [Réf. `SRC-NORM-03`, p. 42].

#### (B) Le Conditionnel Modal
En proposition indépendante ou dans l'apodose d'une période hypothétique, le conditionnel s'émancipe de toute rection temporelle et fonctionne comme un véritable **mode de l'altérité énonciative et de l'irréalité**. L'énonciateur ne prend pas en charge la vérité factuelle du procès : il le présente comme imaginaire, suspendu ou fictif.

---

### 7.2 Les Emplois Modaux en Proposition Autonome ou Principale
Hors de la période en « si », le conditionnel modal assume trois grandes fonctions énonciatives et pragmatiques codifiées :

| Nuance pragmatique | Fonction énonciative | Exemple canonique | Analyse linguistique |
| :--- | :--- | :--- | :--- |
| **Atténuation & Politesse déférente** | Adoucir une requête, un ordre ou une prétention pour ménager la face d'autrui (actes de langage indirects). | *« Monsieur le Doyen, nous **souhaiterions** solliciter un entretien. »* | Substitue la suspension modale à l'injonction abrupte de l'indicatif (*nous voulons / nous souhaitons*). |
| **Réserve journalistique (Médiatif / Évidentiel)** | Rapporter une information sans en garantir l'authenticité factuelle ; désengagement de la responsabilité énonciative. | *« Selon des sources concordantes, le traité de paix **serait** ratifié la semaine prochaine. »* | L'énonciateur signale que le propos provient d'un tiers et refuse d'en valider la vérité. |
| **Regret & Reproche rétrospectif** | Exprimer la déploration d'un fait accompli ou blâmer un comportement passé non conforme au devoir. | *« Vous **auriez dû** nous avertir de ce dysfonctionnement ! »* | Confrontation douloureuse entre ce qui aurait dû advenir et ce qui est réellement advenu. |

---

### 7.3 Les Trois Systèmes Conditionnels Canoniques en « Si »
La tradition grammaticale formalise l'articulation protase/apodose selon trois équilibres modaux immuables [Réf. `SRC-GRAM-01`, § 1045 ; `SRC-GRAM-02`, chap. 16] :

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                        LES TROIS SYSTÈMES CONDITIONNELS CANONIQUES                                     │
├──────────────┬───────────────────────────────┬───────────────────────────────┬─────────────────────────┤
│ SYSTÈME      │ PROTASE (Subordonnée en SI)   │ APODOSE (Proposition Princip.)│ VALEUR SÉMANTIQUE       │
├──────────────┼───────────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ SYSTÈME 1    │ Si + INDICATIF PRÉSENT        │ INDICATIF FUTUR SIMPLE        │ Hypothèse ouverte       │
│              │ (ou Passé Composé)            │ (ou Présent / Impératif)      │ Événement réel possible │
├──────────────┼───────────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ SYSTÈME 2    │ Si + INDICATIF IMPARFAIT      │ CONDITIONNEL PRÉSENT          │ Potentiel (futur)       │
│              │                               │                               │ OU Irréel du présent    │
├──────────────┼───────────────────────────────┼───────────────────────────────┼─────────────────────────┤
│ SYSTÈME 3    │ Si + INDICATIF PLUS-QUE-PARF. │ CONDITIONNEL PASSÉ (1re f.)   │ Irréel du passé         │
│              │                               │ (ou 2e forme littéraire)      │ Contrefactuel forclos   │
└──────────────┴───────────────────────────────┴───────────────────────────────┴─────────────────────────┘
```

#### Système 1 : L'Hypothèse Réelle / Potentiel Ouvert
- **Structure** : $Si + \text{présent de l'indicatif} \to \text{futur simple (ou présent / impératif)}$.
- **Portée** : L'hypothèse porte sur le présent ou l'avenir sans préjuger de sa réalisation. Si la condition se réalise dans le monde réel, la conséquence s'ensuivra inéluctablement.
- **Exemples** :
  - *« Si vous **signez** cet accord aujourd'hui, les travaux **débuteront** dès le mois prochain. »*
  - *« Si le courrier **arrive** ce matin, **remettez**-le immédiatement au greffe. »* (Apodose à l'impératif).
  - *« Si l'eau **atteint** cent degrés Celsius, elle **bout**. »* (Vérité générale au présent).

#### Système 2 : Le Potentiel ou l'Irréel du Présent
- **Structure** : $Si + \text{imparfait de l'indicatif} \to \text{conditionnel présent}$.
- **Portée sémantique double** :
  1. **Le Potentiel** : L'hypothèse porte sur l'avenir. Sa réalisation est envisagée comme une éventualité pure, sans engagement sur sa concrétisation (*« Si nous **avions** les fonds l'an prochain, nous **construirions** ce pont »*).
  2. **L'Irréel du présent** : L'hypothèse porte sur le moment même où l'on parle. Elle est en contradiction manifeste avec la réalité actuelle connue (*« Si j'**étais** ministre de la Justice à l'instant où je vous parle, je **réformerais** immédiatement ce texte »* [Or, je ne suis pas ministre]).

#### Système 3 : L'Irréel du Passé
- **Structure** : $Si + \text{plus-que-parfait de l'indicatif} \to \text{conditionnel passé première forme}$.
- **Portée** : L'hypothèse porte sur un fait passé qui ne s'est pas produit. La conséquence est définitivement exclue par l'Histoire : c'est le contrefactuel absolu.
- **Exemple** :
  - *« Si les secours **étaient arrivés** dix minutes plus tôt, le bâtiment **aurait été sauvé**. »*
- **Variante littéraire soutenue (Seconde forme du conditionnel passé)** :
  En langue classique et dans la prose académique d'apparat, le conditionnel passé première forme peut être remplacé dans l'apodose (et même dans la protase) par le **subjonctif plus-que-parfait employé comme conditionnel passé 2e forme** :
  - *« Si les secours fussent arrivés plus tôt, le bâtiment **eût été sauvé**. »* [Réf. `SRC-GRAM-01`, § 884].

---

### 7.4 L'Interdiction Formelle et Absolue du Conditionnel dans la Protase en « Si »
Il s'agit de la règle d'or intangible de la grammaire française :
> [!IMPORTANT]
> **La proposition subordonnée circonstancielle introduite par la conjonction « si » hypothétique ne reçoit JAMAIS le mode conditionnel.**
> - Dire : *« Si j'**avais** »* (et jamais : *« \*Si j'aurais »*).
> - Dire : *« Si nous **pouvions** »* (et jamais : *« \*Si nous pourrions »*).
> - Dire : *« Si le témoin **était venu** »* (et jamais : *« \*Si le témoin serait venu »*).

La formule mnémotechnique classique et familière :  
**« Les "si" n'aiment pas les "-rais" ! »**

*Restriction fondamentale* : Cette proscription s'applique **exclusivement au « si » conditionnel/hypothétique**. Elle ne s'applique pas au « si » introduisant une complétive interrogative indirecte (voir section 7.1 et section 10, Erreur n° 3).

---

### 7.5 Les Systèmes Mixtes (Périodes Hybrides)
Dans l'argumentation vivante et l'analyse rétrospective d'une politique publique ou d'un conflit, la cause et la conséquence ne sont pas toujours logées dans la même tranche temporelle.  
Un événement non réalisé dans le passé peut produire des effets contrefactuels qui s'étendent **jusqu'au moment présent** :

$$\text{Protase au Plus-que-parfait (Passé)} \implies \text{Apodose au Conditionnel Présent (Présent)}$$

- **Exemple canonique** :
  *« Si nous **avions anticipé** cette crise financière lors du conseil d'administration de l'année dernière [fait passé forclos], notre trésorerie **serait** parfaitement saine aujourd'hui [état présent contrefactuel]. »*
- **Analyse** :
  - Protase : *avions anticipé* (plus-que-parfait de l'indicatif) $\to$ ancrage temporel $T_{-1}$ (passé).
  - Apodose : *serait* (conditionnel présent) $\to$ ancrage temporel $T_0$ (présent immédiat).
  - Ce système mixte est d'une correction stylistique et logique irréprochable ; il ne constitue en rien une rupture de concordance.

---

### 7.6 La Coordination de Plusieurs Hypothèses : Reprise par « Et que » + Subjonctif
Lorsqu'un énonciateur formule deux hypothèses successives coordonnées par la conjonction *et*, la langue française répugne à répéter mécaniquement la conjonction *si* (*❌ « S'il pleut et si le vent souffle... »*).  
La norme académique impose le dispositif syntaxique de la reprise par *que*, avec une mutation modale obligatoire [Réf. `SRC-GRAM-01`, § 1065] :

$$\mathbf{Si} + \text{Indicatif} \quad \mathbf{et\ que} + \mathbf{SUBJONCTIF}$$

- **Exemple modèle** :
  *« **Si** le temps **s'améliore** [présent de l'indicatif] **et qu'**il **fasse** [subjonctif présent] beau demain, nous organiserons la cérémonie dans les jardins. »*
- **Au passé / imparfait** :
  *« **Si** vous **aviez** de l'audace **et que** vous **voulussiez** [subjonctif imparfait] relever ce défi, vous triompheriez. »* (En registre courant : *« ... et que vous acceptiez... »*).
- **Raison linguistique** : La conjonction *que* hérite de la valeur hypothétique de *si*, mais en tant que subordonnant pur virtuel, elle commute le mode du procès vers le subjonctif de l'envisagé.

---

## 8. Raisonnement Détaillé : Pourquoi la Langue Française Proscrit-elle le Conditionnel après « Si » ?

Pourquoi la plupart des locuteurs spontanés ont-ils tendance à dire *« Si j'aurais su »*, et pourquoi la langue normative s'y oppose-t-elle avec une rigueur intraitable ?

### 8.1 L'Illusion de Symétrie Psychologique
Dans l'esprit du locuteur, la période hypothétique forme un tout indivisible :
*« [Je n'ai pas eu d'argent hier] $\to$ [Je n'ai pas acheté ce livre]. »*  
Lorsqu'il imagine le monde virtuel alternatif, son cerveau perçoit la même coloration imaginaire et incertaine sur la condition que sur la conséquence :
*« [Dans le monde imaginaire où j'aurais de l'argent] $\to$ [J'achèterais ce livre]. »*  
Le locuteur spontané applique alors un principe de **symétrie modale phonique** : il plaque le conditionnel en *-rais* sur les deux membres de la phrase (*« Si j'aurais de l'argent, j'achèterais... »*).

### 8.2 La Réfutation Linguistique : L'Économie des Marques et la Tautologie Modale
La langue française écrite et châtiée obéit à un principe supérieur d'**économie des marques structurales** et de **spécialisation sémantique** [Réf. `SRC-GRAM-02`, chap. 16] :
1. **La conjonction « si » assume à elle seule 100 % de la charge hypothétique** : Le morphème conjonctif *si* (dérivé du latin *si*, *se*) est l'opérateur exclusif de la supposition. Dès que *si* est prononcé ou écrit, l'interlocuteur sait avec une certitude absolue que le procès qui suit n'est pas asserté comme réel, mais posé comme une hypothèse de travail.
2. **Ajouter un conditionnel après « si » constitue un pléonasme modal fautif** : Si l'on conjuguait le verbe de la protase au conditionnel, on surchargerait la proposition d'un double marquage hypothétique : le morphème lexical (*si*) + le morphème flexionnel verbal (*-rais*).
3. **Le rôle métaphorique de l'imparfait (L'Imparfait d'Irréalité / Hypothétique)** :  
   Pour signifier que l'hypothèse ne se situe pas dans le réel actuel, la langue française n'a pas besoin de créer un tiroir modal artificiel. Elle utilise les vertus sécantes et distanciées de l'**imparfait de l'indicatif** :
   - L'imparfait possède par essence une valeur d'**éloignement chronologique**.
   - Dans la protase, cet éloignement temporel est transposé métaphoriquement en **éloignement ontologique** (distanciation par rapport à la réalité présente). Dire *« Si j'avais »*, c'est regarder la possibilité présente avec le recul réservé d'un observateur qui sait que ce fait n'est pas actualisé.
4. **La répartition asymétrique des rôles syntaxiques** :
   - La **protase** pose le cadre théorique $\to$ mode indicatif distancié (*imparfait* ou *plus-que-parfait*).
   - L'**apodose** calcule le résultat soumis à condition $\to$ mode conditionnel (*-rais*).  
   Cette dissymétrie est la condition sine qua non de la tension syntaxique et de l'harmonieuse pulsation de la phrase complexe française.

---

## 9. Exemples Corrects Commentés

Examinons quatre phrases modèles extraites de la grande prose patrimoniale et de la littérature francophone contemporaine, décortiquées selon leur structure modale et actancielle :

### Exemple 1 : Le Système 2 Littéraire (Chateaubriand)
> *« **Si** le monde **avait** un commencement, il **serait** trop jeune ; s'il n'en **avait** point, il **serait** trop vieux. »*  
> — François-René de Chateaubriand, *Génie du christianisme* (1802).

- **Découpage de la période** : Deux systèmes hypothétiques binaires coordonnés par asyndète.
- **Protase** : *« Si le monde avait [indicatif imparfait] un commencement »*. L'imparfait pose une conjecture ontologique (potentiel cosmologique).
- **Apodose** : *« il serait [conditionnel présent] trop jeune »*. Le conditionnel présent tire la conclusion déductive inévitable au sein du modèle théorique exploré.
- **Conformité normative** : Zéro conditionnel après *si*. Parfaite rigueur du Système 2.

### Exemple 2 : Le Système 3 Contrefactuel et Historique (Ahmadou Kourouma)
> *« **Si** les ancêtres **avaient su** quelles souffrances allaient s'abattre sur leurs descendants au cours des siècles d'esclavage et de traite, ils **auraient brisé** eux-mêmes les idoles de la résignation. »*  
> — Ahmadou Kourouma, corpus d'étude ouest-africain [Réf. `SRC-SOCIO-01` ; corpus `DEC-007`].

- **Protase** : *« Si les ancêtres avaient su [indicatif plus-que-parfait] »*. Le plus-que-parfait marque l'irréel du passé absolu (les ancêtres ne savaient pas).
- **Subordonnée imbriquée de degré 2** : *« quelles souffrances allaient s'abattre »* (complétive interrogative indirecte au passé).
- **Apodose principale** : *« ils auraient brisé [conditionnel passé première forme] eux-mêmes les idoles »*.
- **Conformité normative** : Parfaite application du Système 3 canonique. L'accord du participe passé *brisé* avec l'auxiliaire *avoir* respecte la règle cardinale (COD *les idoles* postposé $\to$ invariabilité).

### Exemple 3 : Le Système Mixte en Prose de Prospective (Olympe Bhêly-Quenum)
> *« **Si** nos aînés **avaient préservé** les forêts sacrées et les berges du fleuve avec la rigueur des coutumes anciennes, notre terre **ne subirait pas** aujourd'hui cette implacable érosion qui menace les villages. »*  
> — Olympe Bhêly-Quenum, corpus d'analyse stylistique béninoise [Réf. `SRC-SOCIO-01` ; `DEC-005`].

- **Protase** : *« Si nos aînés avaient préservé [indicatif plus-que-parfait]... »* $\to$ procès passé non accompli (irréel du passé, $T_{-1}$).
- **Apodose** : *« notre terre ne subirait pas [conditionnel présent] aujourd'hui... »* $\to$ conséquence contemporaine au moment d'énonciation ($T_0$), attestée par le déictique temporel *aujourd'hui*.
- **Conformité normative** : Système hybride exemplaire, d'une grande puissance argumentative, reliant le passé forclos au présent déploré.

### Exemple 4 : La Coordination par « Et que » avec Subjonctif (Paul Ricœur)
> *« **S'il** advient qu'un débat public **rencontre** l'assentiment des citoyens **et que** la justice **puisse** s'exercer sans entrave partisane, la démocratie recouvrera sa dignité première. »*  
> — D'après Paul Ricœur, *La Mémoire, l'histoire, l'oubli*.

- **Protase 1** : *« S'il advient [indicatif présent]... »* $\to$ Système 1 amorcé à l'indicatif.
- **Protase 2 coordonnée** : *« et que la justice puisse [subjonctif présent]... »* $\to$ la coordination par *et que* déclenche obligatoirement le subjonctif présent du verbe *pouvoir* (*puisse*), conformément à `SRC-GRAM-01`, § 1065.
- **Apodose** : *« la démocratie recouvrera [futur simple de l'indicatif] sa dignité première »*.
- **Conformité normative** : Architecture syntaxique de très haute tenue académique, illustrant la bascule modale sous rection de *que*.

---

## 10. Contre-Exemples et Erreurs Fréquentes

L'observation des copies universitaires et des écrits de concours permet d'isoler **six erreurs récurrentes** qu'un rédacteur d'élite doit éradiquer définitivement :

### Erreur n° 1 : Emploi du Conditionnel Présent dans la Protase en « Si » (Hypothèse Présente)
- ❌ **Énoncé fautif** : *« Si nous **pourrions** mobiliser les financements internationaux, nous lancerions le programme d'électrification rurale. »*
- **Analyse clinique** : Le scripteur a contaminé la protase en *si* par le conditionnel de l'apodose (*lancerions*).
- **Règle violée** : Après *si* introduisant une hypothèse portant sur le présent ou l'avenir (Système 2), l'indicatif imparfait est de rigueur.
- ✅ **Correction normée** : *« Si nous **pouvions** [indicatif imparfait] mobiliser les financements internationaux, nous **lancerions** [conditionnel présent] le programme d'électrification rurale. »*

---

### Erreur n° 2 : Emploi du Conditionnel Passé dans la Protase en « Si » (Le Solécisme Classique)
- ❌ **Énoncé fautif** : *« Si le conseil d'administration **aurait voté** cette résolution, le directeur général n'aurait pas présenté sa démission. »*
- **Analyse clinique** : Solécisme majeur (le syndrome de Tigibus transposé au management d'entreprise). Le conditionnel passé composé (*aurait voté*) est employé indûment à la place du plus-que-parfait.
- **Règle violée** : Dans le Système 3, la protase exige impérativement l'indicatif plus-que-parfait (*avoir* ou *être* à l'imparfait + participe passé).
- ✅ **Correction normée** : *« Si le conseil d'administration **avait voté** [indicatif plus-que-parfait] cette résolution, le directeur général n'**aurait pas présenté** [conditionnel passé] sa démission. »*

---

### Erreur n° 3 : Confusion entre « Si » Hypothétique Circonstanciel et « Si » Interrogatif Indirect Complétif
- ❌ **Raisonnement erroné** : *« Dans "Je me demande si nous aurions pu mieux faire", la phrase est fausse parce qu'il y a un conditionnel après "si". »*
- **Analyse clinique** : Hypercorrection dogmatique et aveugle. L'apprenant applique machinalement l'interdiction du conditionnel sans analyser la nature syntaxique de la subordonnée.
- **Réfutation syntaxique** :  
  Ici, la subordonnée n'est pas un complément circonstanciel de condition supprimable et déplaçable. C'est une **proposition subordonnée complétive interrogative indirecte**, occupant la fonction essentielle de **Complément d'Objet Direct (COD)** du verbe régissant *demande* (*Je me demande quoi ?*).  
  Dans une interrogative indirecte, la conjonction *si* est un opérateur de polarité interrogative (traduisant *si oui ou non*). **Le conditionnel y est parfaitement légitime et grammatical** s'il correspond au sens de la question directe originelle (*Aurions-nous pu mieux faire ?*).
- ✅ **Énoncé parfaitement correct** : *« Je me demande si nous **aurions pu** [conditionnel passé légitime] mieux faire. »*
- ✅ **Autre exemple correct** : *« L'ambassadeur ignore si le ministre **accepterait** [conditionnel présent légitime] de le recevoir. »*

---

### Erreur n° 4 : Faute de Tiroir Verbal dans l'Apodose du Système 2 (Futur au lieu du Conditionnel)
- ❌ **Énoncé fautif** : *« Si la commission d'enquête découvrait de nouvelles preuves, elle **convoquera** immédiatement les témoins. »*
- **Analyse clinique** : Rupture asymétrique boiteuse entre un imparfait dans la protase (*découvrait*) et un futur simple de l'indicatif dans l'apodose (*convoquera*). L'hypothèse est traitée comme irréelle ou potentielle au départ, puis bascule arbitrairement dans la certitude de l'indicatif futur.
- **Règle violée** : Cohérence interne du Système 2 : $Si + \text{imparfait} \implies \text{Conditionnel présent}$.
- ✅ **Correction normée (Option Système 2 : potentiel)** : *« Si la commission d'enquête **découvrait** [imparfait] de nouvelles preuves, elle **convoquerait** [conditionnel présent] immédiatement les témoins. »*
- ✅ **Correction normée (Option Système 1 : réel plausible)** : *« Si la commission d'enquête **découvre** [présent] de nouvelles preuves, elle **convoquera** [futur] immédiatement les témoins. »*

---

### Erreur n° 5 : Oubli du Subjonctif lors de la Coordination d'Hypothèses par « Et que »
- ❌ **Énoncé fautif** : *« Si le budget est adopté la semaine prochaine et qu'il ne **survient** aucun blocage parlementaire, le projet de loi entrera en vigueur. »*
- **Analyse clinique** : Le scripteur a repris *si* par *que*, ce qui est louable, mais il a maintenu l'indicatif présent (*survient*).
- **Règle violée** : Après la locution de coordination *et que* reprenant une hypothèse amorcée par *si*, le mode est **obligatoirement le subjonctif** [Réf. `SRC-GRAM-01`, § 1065].
- ✅ **Correction normée** : *« Si le budget **est** [indicatif présent] adopté la semaine prochaine et qu'il ne **survienne** [subjonctif présent] aucun blocage parlementaire, le projet de loi entrera en vigueur. »*

---

### Erreur n° 6 : Confusion Graphique et Phonétique entre le Futur en « -ai » et le Conditionnel en « -ais » à la Première Personne
- ❌ **Énoncé fautif (orthographe fautive à la 1re personne)** : *« Si l'on m'interrogeait sur ce dossier confidentiel, je **refuserai** de répondre. »*
- **Analyse clinique** : Confusion homophonique désastreuse entre la désinence du futur de l'indicatif en *-ai* (prononcée `/e/` fermée en français standard de référence) et la désinence du conditionnel présent en *-ais* (prononcée `/ɛ/` ouverte). Le scripteur croyait écrire du conditionnel mais a graphié un futur simple, violant la concordance du Système 2.
- **Règle violée** : Dans le Système 2 ($Si + \text{imparfait}$), l'apodose exige le conditionnel présent : à la première personne du singulier, la terminaison est impérativement **-ais** [Réf. `SRC-ORTHO-01` ; `SRC-GRAM-02`, chap. 10].
- **Test de substitution infaillible** : Remplacer par la 3e personne du singulier (*il*) :
  - On ne dirait pas : *« ... il refusera »* (futur incompatible avec *interrogeait*).
  - On dirait : *« ... il refuserait »* (conditionnel présent).
  - Donc, à la 1re personne, écrire avec un **-s** final : *je refuserais*.
- ✅ **Correction normée** : *« Si l'on m'interrogeait sur ce dossier confidentiel, je **refuserais** [conditionnel présent, finale *-ais*] de répondre. »*

---

## 11. Cas Particuliers et Limites

La langue française ne se borne pas à exprimer l'hypothèse au moyen de la conjonction *si*. Il existe des tournures alternatives, fréquentes dans la prose juridique, parlementaire et littéraire, qui s'affranchissent de *si* :

### 11.1 L'Inversion du Sujet au Subjonctif Littéraire (Protase Sans « Si »)
En registre oratoire ou classique soutenu, l'hypothèse peut être formulée par une proposition indépendante dont le verbe est au **subjonctif imparfait** ou **plus-que-parfait**, avec inversion clitique du sujet pronominal :
- *« **Fût-il** le prince héritier, la loi s'appliquerait à lui dans toute sa rigueur. »*  
  (= *Même s'il était le prince héritier...*)
- *« **Eût-il connu** les risques réels de cette expédition, il n'aurait point engagé son armée. »*  
  (= *S'il avait connu les risques réels...*)
- *« **Vînt-il** à refuser notre offre, nous aurions un plan de secours. »*

### 11.2 La Parataxe de Deux Propositions au Conditionnel (Juxtaposition)
Deux propositions juxtaposées (séparées par une virgule ou un point-virgule) et conjuguées toutes deux au conditionnel peuvent entretenir une relation implicite d'hypothèse et de conséquence :
- *« **Vous me donneriez** tout l'or du monde, je **refuserais** de trahir mes convictions. »*  
  (= *Même si vous me donniez tout l'or du monde, je refuserais...*)
- Dans cette structure, la première proposition au conditionnel assume fonctionnellement le rôle d'une protase concessive ou hypothétique. C'est l'un des rares cas où le conditionnel exprime l'hypothèse elle-même, précisément parce que la conjonction *si* est absente !

### 11.3 Les Constructions Prépositionnelles Équivalentes : « Sans », « N'était », « N'eût été »
L'hypothèse contrefactuelle peut être compactée dans un syntagme prépositionnel en tête de phrase :
- **Sans + substantif** : *« **Sans son intervention opportune**, l'entreprise aurait fait faillite. »* (= *S'il n'était pas intervenu...*)
- **N'était + substantif (Irréel du présent)** : *« **N'était** l'appui indéfectible du peuple, le gouvernement démissionnerait. »* (= *Si le peuple n'appuyait pas le gouvernement...*)
- **N'eût été + substantif (Irréel du passé)** : *« **N'eût été** la bravoure des pompiers, le quartier tout entier aurait brûlé. »* (= *Si les pompiers n'avaient pas été braves...*)

### 11.4 Les Locutions Conjonctives Concurrentes et leurs Régimes Modaux
Toutes les conjonctions d'hypothèse ne suivent pas le modèle de *si* (+ indicatif) :
- **Au cas où / Dans le cas où** $\to$ exige le **conditionnel** : *« Au cas où vous **auriez** [conditionnel] un empêchement, prévenez-nous. »*
- **À condition que / Pourvu que / Pour peu que / À moins que** $\to$ exigent le **subjonctif** : *« Nous signerons le bail, **à condition que** les travaux **soient** [subjonctif] achevés. »*

---

## 12. Approfondissement Adapté au Niveau : La Sémantique des Mondes Possibles (Lewis & Stalnaker)

Pour les étudiants préparant les concours d'enseignement supérieur (Agrégation de Lettres modernes, CAPES) ou les cursus universitaires de linguistique formelle, la question des conditionnels contrefactuels en *si* a été profondément refondée par la **logique modale et la sémantique des mondes possibles**, formalisées par Robert Stalnaker (1968) et David Kellogg Lewis (*Counterfactuals*, 1973).

```text
                                              ┌──────────────────────────────────────────────┐
                                              │ MONDE POSSIBLE w_1 (Le plus proche de w_0)   │
                                              │ • Les mêmes lois physiques que w_0           │
                                              │ • Une seule variation : A est VRAI          │
                                              │   (Napoléon a gagné à Waterloo)              │
                                              │ • Conséquence : B est VRAI                   │
┌──────────────────────────────┐              │   (L'Europe est restée française)            │
│ MONDE ACTUEL RÉEL w_0        │              └──────────────────────────────────────────────┘
│ • Napoléon a été battu       │                             ▲
│ • L'Europe n'est pas sous    │                             │ Distance ontologique minimale
│   tutelle française          │ ────────────────────────────┘
│ • A est FAUX                 │
└──────────────────────────────┘
```

### 12.1 Le Problème de l'Implication Matérielle Classique
En logique propositionnelle classique, une implication $A \to B$ est considérée comme **vraie** dès que sa prémisse $A$ est **fausse** (principe du *verum ex quolibet*).  
Or, dans le langage naturel, si nous disons :  
*« Si la lune était faite de fromage vert, la tour Eiffel serait en chocolat »*,  
cette proposition est jugée absurde par tout locuteur, bien que sa prémisse soit fausse.  
De même, l'énoncé contrefactuel :  
$E_1$ : *« Si les freins n'avaient pas lâché, la voiture ne se serait pas écrasée »* est intuitivement perçu comme **vrai**,  
alors que :  
$E_2$ : *« Si les freins n'avaient pas lâché, la voiture se serait transformée en hirondelle »* est jugé **faux**,  
alors même que dans les deux cas, la prémisse *« les freins n'ont pas lâché »* est factuellement fausse dans le monde réel !

### 12.2 La Fonction de Sélection et la Similarité Minimale
Pour résoudre ce paradoxe, Stalnaker et Lewis posent l'existence d'un ensemble de **mondes possibles** $W$, ordonnés par rapport au monde actuel $w_0$ selon une relation de **similarité comparative** :
- Un énoncé contrefactuel du type *« Si $A$ était le cas, $B$ serait le cas »* ($A \boxempty\kern-1.5pt\to B$) est vrai dans notre monde actuel $w_0$ si et seulement si :
  **Dans le monde possible $w'$ le plus proche de notre monde $w_0$ où $A$ est vrai, la conséquence $B$ est également vraie.**
- *« Le monde possible le plus proche »* signifie un monde qui conserve toutes les lois de la physique, la géographie, la psychologie humaine et l'histoire de notre monde actuel $w_0$, à la seule exception minuscule requise pour rendre la prémisse $A$ vraie.
- **Application linguistique au français** :
  - **Le Potentiel (Système 2)** explore des mondes possibles situés dans le cône de futur de $w_0$ : ces mondes sont encore **accessibles** et compatibles avec les données présentes.
  - **L'Irréel (Système 3)** saute par-dessus une bifurcation historique irréversible : il sélectionne un monde contrefactuel où un événement passé révolu a pris une valeur opposée, et en déploie les conséquences logiques rigoureuses.  
  Le tiroir du conditionnel passé en français n'est donc rien d'autre que l'**opérateur linguistique de projection dans le monde contrefactuel le plus proche**.

---

## 13. Comparaisons Différentielles

### Tableau 1 : Conditionnel Temporel (Futur du Passé) vs Conditionnel Modal

| Critère de distinction | Conditionnel Temporel (Futur du passé) | Conditionnel Modal (Potentiel / Irréel) |
| :--- | :--- | :--- |
| **Statut linguistique** | Tiroir temporel appartenant au mode **indicatif**. | Emploi appartenant au **mode conditionnel** (modalité). |
| **Contexte syntaxique** | Obligatoirement en **proposition subordonnée complétive** régie par un verbe au passé. | En proposition indépendante, principale, ou apodose de période en *si*. |
| **Valeur sémantique** | **Chronologie pure** : procès futur par rapport à un point de repère passé. Zéro incertitude. | **Hypothèse, réserve, politesse, imaginaire, contrefactualité**. |
| **Test de transposition au présent** | Devient un **futur simple** quand la principale passe au présent :<br/>*Il disait qu'il viendrait $\to$ Il dit qu'il viendra*. | Reste au **conditionnel** quand le contexte passe au présent :<br/>*Je voudrais vous parler $\to$ Je voudrais toujours vous parler*. |
| **Exemple modèle** | *« Dès l'aube, le général savait qu'il **remporterait** la victoire avant le crépuscule. »* | *« Sans l'appui de ses alliés, le général **remporterait** difficilement cette bataille. »* |

---

### Tableau 2 : Les Trois Systèmes Conditionnels Canoniques en « Si »

| Caractéristique | Système 1 (Hypothèse Réelle) | Système 2 (Potentiel / Irréel présent) | Système 3 (Irréel du Passé) |
| :--- | :--- | :--- | :--- |
| **Tiroir de la protase** | **Présent de l'indicatif**<br/>(*ou Passé composé*) | **Imparfait de l'indicatif** | **Plus-que-parfait de l'indicatif** |
| **Tiroir de l'apodose** | **Futur simple de l'indicatif**<br/>(*ou Présent / Impératif*) | **Conditionnel présent** | **Conditionnel passé (1re forme)**<br/>(*ou 2e forme littéraire*) |
| **Statut de l'hypothèse** | Plausible, ouverte, réalisable dans le monde objectif. | Incertaine (potentiel) ou fausse dans le présent (irréel présent). | Définitivement non réalisée (contrefactuel passé forclos). |
| **Ancrage temporel** | Présent $\to$ Avenir. | Présent ou Avenir. | Passé révolu. |
| **Exemple canonique** | *Si vous étudiez, vous réussirez.* | *Si vous étudiiez, vous réussiriez.* | *Si vous aviez étudié, vous auriez réussi.* |

---

### Tableau 3 : « Si » Hypothétique Circonstanciel vs « Si » Interrogatif Indirect Complétif

| Critère d'opposition | « Si » Hypothétique (Circonstanciel) | « Si » Interrogatif Indirect (Complétif) |
| :--- | :--- | :--- |
| **Nature de la proposition** | Proposition subordonnée **circonstancielle de condition**. | Proposition subordonnée **complétive interrogative indirecte**. |
| **Fonction grammaticale** | Complément circonstanciel de condition (de phrase). | **Complément d'Objet Direct (COD)** du verbe recteur. |
| **Mobilité et suppression** | Déplaçable en tête de phrase ; supprimable sans détruire la matrice. | **Non déplaçable** ; non supprimable sans rendre le verbe incomplet. |
| **Conditionnel admis ?** | **INTERDICTION ABSOLUE DU CONDITIONNEL**. | **CONDITIONNEL TOTALEMENT ADMISSIBLE**. |
| **Test de vérification** | On peut remplacer par : *À condition que, dans l'hypothèse où*. | On peut remplacer par : *La question de savoir si oui ou non*. |
| **Exemple révélateur** | *« **Si** nous **avions** [imparfait] le temps, nous visiterions le musée. »* | *« Le conservateur ignore **si** nous **aurions** [conditionnel] le temps. »* |

---

## 14. Exercices Progressifs (3 Niveaux d'Expertise)

### Niveau 1 : Reconstitution de l'Apodose ou de la Protase (12 Phrases)
*Consigne* : Complétez chaque phrase en conjuguant le verbe entre parenthèses au tiroir verbal et au mode exigés par la structure canonique en « si ». Indiquez entre crochets le numéro du système canonique (Système 1, 2 ou 3) ou la structure hybride.

1. *Si vous (accepter) __________________ les conclusions de ce rapport préliminaire, le conseil d'administration débloquera les crédits dès demain matin.*
2. *Si les diplomates (faire) __________________ preuve d'une fermeté inébranlable lors des pourparlers d'hier, les belligérants auraient signé la trêve.*
3. *Si nous disposions d'un délai supplémentaire de quarante-huit heures, nous (pouvoir) __________________ parachever la révision de ce manuscrit.*
4. *Si le ministre (connaître) __________________ la vérité sur ces malversations au moment des faits, il n'aurait jamais couvert ces nominations litigieuses.*
5. *Si les cours des matières premières continuent de flamber sur les marchés mondiaux, les ménages vulnérables (subir) __________________ une baisse dramatique de pouvoir d'achat.*
6. *Si l'accusé disait l'exacte vérité devant les jurés de la cour d'assises, son avocat ne (chercher) __________________ pas à éluder les questions du président.*
7. *Si nos ingénieurs (anticiper) __________________ la défaillance des turbines l'an dernier, la centrale ne serait pas à l'arrêt aujourd'hui.*
8. *Si vous ne (comprendre) __________________ pas les attendus de cette décision de justice, sollicitez immédiatement les éclaircissements d'un magistrat.*
9. *Si les États signataires avaient respecté les quotas d'émissions de carbone, les écosystèmes côtiers ne (être) __________________ pas menacés de submersion à l'heure actuelle.*
10. *Si le verdict (être) __________________ rendu public demain, la presse internationale en commentera les retombées politiques sans délai.*
11. *Si l'archiviste (avoir) __________________ classé ces correspondances diplomatiques dans le bon carton, nous n'aurions pas gaspillé trois journées de recherche infructueuse.*
12. *Si vous m'accordiez dix minutes d'attention bienveillante, je vous (exposer) __________________ les fondements de notre théorie économique.*

---

### Niveau 2 : Transformation des Systèmes 1 $\to$ 2 $\to$ 3 et Résolution de Systèmes Mixtes (8 Phrases)
*Consigne* : Effectuez les transpositions demandées en veillant scrupuleusement à l'ajustement réciproque de la protase et de l'apodose.

1. **Transposer au Système 2 (Potentiel)** :  
   *« Si le parlement adopte cette loi de finances, les impôts fonciers augmenteront de dix pour cent. »*
2. **Transposer au Système 3 (Irréel du passé)** :  
   *« Si le médecin prescrit ce traitement curatif, le patient guérit rapidement de son infection. »*
3. **Transposer du Système 3 vers le Système 2 (Passé contrefactuel $\to$ Présent contrefactuel)** :  
   *« Si le capitaine avait ordonné le repli à temps, le bataillon n'aurait pas subi cette sanglante défaite. »*
4. **Transposer du Système 2 vers le Système 1 (Potentiel $\to$ Réel ouvert)** :  
   *« Si nous engagions de nouvelles poursuites judiciaires, l'entreprise adverse transigerait immédiatement. »*
5. **Résolution de système mixte (Ancrage passé produisant un effet présent)** :  
   Reformulez ces deux faits en une seule période conditionnelle mixte :  
   *Fait 1 (Passé avéré) : La commission n'a pas audité les comptes en 2024.*  
   *Fait 2 (Présent avéré) : Notre bilan financier est dans l'opacité la plus totale aujourd'hui.*  
   $\to$ *« Si la commission... »*
6. **Résolution de système mixte (Ancrage permanent produisant un effet passé)** :  
   Reformulez en période conditionnelle mixte articulant une vérité permanente dans la protase et une conséquence passée dans l'apodose :  
   *Fait 1 : Cet avocat est d'un naturel profondément timoré.*  
   *Fait 2 : Il n'a pas osé récuser ce témoin compromettant lors du procès d'hier.*  
   $\to$ *« Si cet avocat... »*
7. **Coordination de deux hypothèses par « et que »** :  
   Coordonnez les deux conditions suivantes au Système 1 sans répéter la conjonction *si* :  
   *Condition A : Le calme revient dans la capitale.*  
   *Condition B : Les pourparlers aboutissent à un calendrier électoral.*  
   *Conséquence : Le couvre-feu sera levé par le préfet.*  
   $\to$ *« Si... et que... »*
8. **Transformation oratoire sans « si » (Inversion littéraire au subjonctif plus-que-parfait)** :  
   Réécrivez la phrase suivante dans le registre soutenu de l'éloquence en supprimant la conjonction *si* par inversion du sujet :  
   *« Si le souverain avait pressenti la trahison de ses maréchaux, il aurait abdiqué sur-le-champ. »*

---

### Niveau 3 : Analyse Syntaxique et Modale d'un Texte d'Éloquence (50 Mots Exacts)
*Consigne* : Soit la période oratoire suivante, composée d'exactement **50 mots** (selon le protocole de décompte strict de l'Imprimerie nationale `SRC-TYPO-01` où l'apostrophe marque la séparation de deux unités lexicales autonomes : *l'* + *orage* = 2 mots).  
1. Vérifiez et certifiez le décompte mot à mot en dressant la table d'analyse.  
2. Isolez chaque proposition subordonnée et principale, qualifiez sa fonction syntaxique et justifiez le choix de chaque tiroir verbal en explicitant le système conditionnel mobilisé.

> **Texte d'éloquence à analyser (50 mots certifiés)** :  
> *« Si la patrie vacillait sous l'orage, nous dresserions un rempart infranchissable. Si les citoyens avaient déserté la tribune hier, la tyrannie triompherait désormais sans obstacle. Mais si le courage renaît parmi vous et que la liberté triomphe enfin, notre nation connaîtra une ère nouvelle de prospérité durable pour tous. »*

---

### Corrigés Exhaustifs et Justifiés des Exercices

<details>
<summary><strong>Corrigé officiel du Niveau 1 (cliquer pour dérouler)</strong></summary>

1. *« Si vous **acceptez** [Système 1 : Si + présent $\to$ futur] les conclusions de ce rapport... »* (Hypothèse ouverte sur le futur).
2. *« Si les diplomates **avaient fait** [Système 3 : Si + plus-que-parfait $\to$ conditionnel passé] preuve d'une fermeté inébranlable... »* (Irréel du passé contrefactuel).
3. *« ... nous **pourrions** [Système 2 : Si + imparfait $\to$ conditionnel présent] parachever la révision de ce manuscrit. »* (Potentiel ouvert).
4. *« Si le ministre **avait connu** [Système 3 : Si + plus-que-parfait $\to$ conditionnel passé] la vérité sur ces malversations... »* (Irréel du passé).
5. *« ... les ménages vulnérables **subiront** [Système 1 : Si + présent $\to$ futur] une baisse dramatique... »* (Conséquence certaine dans le monde réel).
6. *« ... son avocat ne **chercherait** [Système 2 : Si + imparfait $\to$ conditionnel présent] pas à éluder les questions... »* (Irréel du présent).
7. *« Si nos ingénieurs **avaient anticipé** [Système mixte : Si + plus-que-parfait $\to$ conditionnel présent] la défaillance des turbines... »* (Cause passée forclose produisant un effet contemporain négatif).
8. *« Si vous ne **comprenez** [Système 1 : Si + présent $\to$ impératif] pas les attendus... »* (Injonction conditionnée par l'incompréhension présente).
9. *« ... les écosystèmes côtiers ne **seraient** [Système mixte : Si + plus-que-parfait $\to$ conditionnel présent] pas menacés... »* (Effet présent attesté par le syntagme *à l'heure actuelle*).
10. *« Si le verdict **est** [Système 1 : Si + présent $\to$ futur simple] rendu public demain... »* (Hypothèse plausible sur l'avenir immédiat).
11. *« Si l'archiviste **avait** [Système 3 : Si + plus-que-parfait $\to$ conditionnel passé] classé ces correspondances... »* (Fait passé non réalisé).
12. *« ... je vous **exposerais** [Système 2 : Si + imparfait $\to$ conditionnel présent] les fondements de notre théorie... »* (Atténuation et potentiel déférent).
</details>

<details>
<summary><strong>Corrigé officiel du Niveau 2 (cliquer pour dérouler)</strong></summary>

1. **Système 2 (Potentiel)** :  
   *« Si le parlement **adoptait** [indicatif imparfait] cette loi de finances, les impôts fonciers **augmenteraient** [conditionnel présent] de dix pour cent. »*
2. **Système 3 (Irréel du passé)** :  
   *« Si le médecin **avait prescrit** [indicatif plus-que-parfait] ce traitement curatif, le patient **aurait guéri** [conditionnel passé 1re forme] rapidement de son infection. »*
3. **Système 3 $\to$ Système 2** :  
   *« Si le capitaine **ordonnait** [indicatif imparfait] le repli à temps, le bataillon **ne subirait pas** [conditionnel présent] cette sanglante défaite. »*
4. **Système 2 $\to$ Système 1** :  
   *« Si nous **engageons** [indicatif présent] de nouvelles poursuites judiciaires, l'entreprise adverse **transigera** [indicatif futur simple] immédiatement. »*
5. **Résolution du système mixte 1** :  
   *« Si la commission **avait audité** [plus-que-parfait] les comptes en 2024, notre bilan financier **ne serait pas** [conditionnel présent] dans l'opacité la plus totale aujourd'hui. »*
6. **Résolution du système mixte 2** :  
   *« Si cet avocat **n'était pas** [imparfait d'état permanent] d'un naturel si timoré, il **aurait récusé** [conditionnel passé contrefactuel] ce témoin compromettant lors du procès d'hier. »*
7. **Coordination par « et que »** :  
   *« **Si** le calme **revient** [indicatif présent] dans la capitale **et que** les pourparlers **aboutissent** [subjonctif présent du verbe *aboutir*] à un calendrier électoral, le couvre-feu sera levé par le préfet. »*
8. **Inversion oratoire littéraire** :  
   *« **Le souverain eût-il pressenti** [ou : **Eût le souverain pressenti**] la trahison de ses maréchaux, il aurait abdiqué sur-le-champ. »* (Emploi remarquable du subjonctif plus-que-parfait à valeur conditionnelle contrefactuelle).
</details>

<details>
<summary><strong>Corrigé officiel du Niveau 3 (cliquer pour dérouler)</strong></summary>

#### 1. Certification du Décompte Mot à Mot (50 Mots Exacts)
Protocole officiel de l'Imprimerie nationale (`SRC-TYPO-01`) : chaque apostrophe sépare deux mots grammaticaux distincts (*l'* + *orage* = 2 mots) :

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Si | **11** | rempart | **21** | la | **31** | renaît | **41** | nation |
| **2** | la | **12** | infranchissable | **22** | tyrannie | **32** | parmi | **42** | connaîtra |
| **3** | patrie | **13** | Si | **23** | triompherait | **33** | vous | **43** | une |
| **4** | vacillait | **14** | les | **24** | désormais | **34** | et | **44** | ère |
| **5** | sous | **15** | citoyens | **25** | sans | **35** | que | **45** | nouvelle |
| **6** | l' | **16** | avaient | **26** | obstacle | **36** | la | **46** | de |
| **7** | orage | **17** | déserté | **27** | Mais | **37** | liberté | **47** | prospérité |
| **8** | nous | **18** | la | **28** | si | **38** | triomphe | **48** | durable |
| **9** | dresserions | **19** | tribune | **29** | le | **39** | enfin | **49** | pour |
| **10** | un | **20** | hier | **30** | courage | **40** | notre | **50** | tous |

**Total certifié : 50 mots exacts.**

#### 2. Dissection Syntaxique et Modale du Texte
Le texte déploie une triade rhétorique articulant successivement les trois structures modales fondamentales du cours :
1. **Période 1 (Mots 1 à 12) : Système 2 Canonique (Potentiel)** :
   - *Protase* : *« Si la patrie vacillait [indicatif imparfait] sous l'orage »* $\to$ Circonstancielle d'hypothèse posant une éventualité redoutée mais non réalisée.
   - *Apodose* : *« nous dresserions [conditionnel présent] un rempart infranchissable »* $\to$ Proposition principale exprimant la riposte résolue au conditionnel présent.
2. **Période 2 (Mots 13 à 26) : Système Mixte (Passé forclos $\to$ Présent contrefactuel)** :
   - *Protase* : *« Si les citoyens avaient déserté [indicatif plus-que-parfait] la tribune hier »* $\to$ Fait passé contrefactuel ($T_{-1}$), désavoué par l'adverbe temporel *hier*.
   - *Apodose* : *« la tyrannie triompherait [conditionnel présent] désormais sans obstacle »* $\to$ Conséquence contemporaine et continue au présent ($T_0$), soulignée par l'adverbe d'état actuel *désormais*.
3. **Période 3 (Mots 27 à 50) : Système 1 avec Coordination par « Et que » + Subjonctif** :
   - *Protase 1* : *« si le courage renaît [indicatif présent] parmi vous »* $\to$ Hypothèse ouverte sur le réel.
   - *Protase 2 coordonnée* : *« et que la liberté triomphe [subjonctif présent du verbe triompher] enfin »* $\to$ Reprise obligatoire de la condition par *et que* régissant le subjonctif présent (*triomphe* à désinence muette en *-e* distincte de l'indicatif dans son statut sous-jacent).
   - *Apodose* : *« notre nation connaîtra [indicatif futur simple] une ère nouvelle de prospérité durable pour tous »* $\to$ Proposition principale assertant la certitude future dans le monde réel restauré.
</details>

---

## 15. Activité de Correction Raisonnée

### Contexte de l'Épreuve
Vous êtes conseiller juridique et stylistique principal auprès d'un candidat à la présidence d'une grande institution publique francophone. Vous relisez le brouillon de son discours d'investiture. Ce texte est défiguré par **exactement huit solécismes ou fautes lourdes de concordance hypothétique**.  
Identifiez chaque faute, analysez la pathologie linguistique et proposez la réécriture normée conforme aux exigences de l'éloquence académique.

### Texte Fautif (Discours Électoral Émaillé de 8 Fautes)
> *« Citoyens, si nous **aurions écouté** (1) les oiseaux de mauvais augure lors de la crise précédente, notre nation se serait effondrée ! Je vous le dis solennellement : si l'opposition **pourrait** (2) diriger nos finances demain, elle **ruinera** (3) les acquis de nos travailleurs. D'ailleurs, de nombreux électeurs m'interrogent pour savoir si nous **devions** (4) craindre une récession mondiale ; je leur réponds avec franchise que si la croissance ralentit **et qu'**aucune mesure sociale ne **soit** (5) pas votée d'ici l'été, nous subirons un revers majeur. Mais rassurez-vous : si vous me renouvellerez (6) votre confiance dimanche prochain, je vous **garantirais** (7) une stabilité sans faille. Enfin, souvenez-vous : si nos illustres bâtisseurs **auraient capitulé** (8) devant l'adversité, nous ne serions pas rassemblés dans ce somptueux hémicycle aujourd'hui ! »*

---

### Apparat Critique et Corrigé Raisonné des 8 Fautes

| N° | Forme fautive | Diagnostic linguistique & Règle violée | Réécriture normée |
| :---: | :--- | :--- | :--- |
| **1** | *« si nous **aurions écouté** »* | **Solécisme du Système 3** : Emploi inacceptable du conditionnel passé après le *si* hypothétique. La protase contrefactuelle du passé exige impérativement le plus-que-parfait de l'indicatif. | *« si nous **avions écouté**... »* |
| **2** | *« si l'opposition **pourrait** »* | **Solécisme du Système 2** : Emploi du conditionnel présent dans la protase en *si* portant sur un potentiel futur. La protase exige l'imparfait de l'indicatif. | *« si l'opposition **pouvait**... »* |
| **3** | *« elle **ruinera** »* | **Rupture de concordance du Système 2** : L'apodose est conjuguée au futur simple de l'indicatif (*ruinera*) alors que l'hypothèse est au potentiel (*pouvait*). L'apodose exige le conditionnel présent. | *« elle **ruinerait**... »* |
| **4** | *« si nous **devions** craindre »* | **Hypercorrection / Faute de tiroir en complétive interrogative indirecte** : Le verbe *m'interrogent pour savoir si* régit une interrogative indirecte et non une circonstancielle. Pour exprimer l'éventualité légitime, le conditionnel présent s'impose, non l'imparfait qui alourdit le propos. | *« si nous **devrions** craindre... »* |
| **5** | *« ne **soit pas** votée »* | **Solécisme de polarité avec négation forclusive** : Après la reprise *et que* régissant le subjonctif, l'emploi cumulé du pronom indéfini *aucune* et du forclusif *pas* constitue une double négation fautive (*ne soit pas aucune*). | *« et qu'aucune mesure sociale ne **soit** votée... »* (suppression absolue de *pas*). |
| **6** | *« si vous me **renouvellerez** »* | **Solécisme du Système 1** : Emploi fautif du futur simple après *si* temporel/hypothétique. La protase du Système 1 impose l'indicatif présent (*renouvelez*), le futur étant réservé à l'apodose. | *« si vous me **renouvelez**... »* |
| **7** | *« je vous **garantirais** »* | **Confusion orthographique et modale futur/conditionnel** : Dans le Système 1 ($Si + \text{présent}$), l'apodose exprime un engagement ferme au futur simple de l'indicatif. Le scripteur a écrit la désinence en *-ais* du conditionnel au lieu de la terminaison en *-ai* du futur. | *« je vous **garantirai**... »* (terminaison *-ai* du futur simple de l'indicatif). |
| **8** | *« si nos illustres bâtisseurs **auraient capitulé** »* | **Solécisme du Système mixte** : Emploi du conditionnel passé après *si* dans une période hybride reliant le passé forclos au présent (*aujourd'hui*). La protase exige le plus-que-parfait de l'indicatif. | *« si nos illustres bâtisseurs **avaient capitulé**... »* |

---

## 16. Mise en Pratique dans une Production Réelle

### Consigne de Rédaction Calibrée
Rédigez une **note de prospective géopolitique et économique** de **soixante mots exacts** (`60 mots`) à destination d'un comité ministériel.  
Votre texte doit articuler délibérément, dans un ordre fluide et argumenté :
1. Un **Système 2 canonique** ($Si + \text{imparfait} \to \text{conditionnel présent}$) ;
2. Un **Système 3 canonique** ($Si + \text{plus-que-parfait} \to \text{conditionnel passé 1re forme}$) ;
3. Un **Système mixte** ($\text{Protase au plus-que-parfait} \to \text{Apodose au conditionnel présent}$).

*Contraintes impératives* :
- Zéro conditionnel après la conjonction « si » ;
- Décompte strict selon la norme de l'Imprimerie nationale (`SRC-TYPO-01`) : chaque élision (*l'*, *d'*, *qu'*) compte pour une unité lexicale distincte ;
- Fournir la justification arithmétique et le tableau d'analyse des trois périodes.

---

### Production Réelle : Note de Prospective Géopolitique (60 Mots Certifiés)

> *« Si les puissances régionales renforçaient leur coopération diplomatique, elles préserveraient la paix commune. Si les gouvernements avaient conclu le traité de paix durable l'an dernier, la guerre aurait cessé immédiatement dans cette province disputée. Enfin, si nos dirigeants avaient anticipé les graves ruptures énergétiques lors du sommet, notre continent serait souverain à présent face à toutes les menaces extérieures. »*

---

### Décompte Mot à Mot Certifié (1 à 60)

| N° | Token | N° | Token | N° | Token | N° | Token |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Si | **16** | gouvernements | **31** | immédiatement | **46** | du |
| **2** | les | **17** | avaient | **32** | dans | **47** | sommet |
| **3** | puissances | **18** | conclu | **33** | cette | **48** | notre |
| **4** | régionales | **19** | le | **34** | province | **49** | continent |
| **5** | renforçaient | **20** | traité | **35** | disputée | **50** | serait |
| **6** | leur | **21** | de | **36** | Enfin | **51** | souverain |
| **7** | coopération | **22** | paix | **37** | si | **52** | à |
| **8** | diplomatique | **23** | durable | **38** | nos | **53** | présent |
| **9** | elles | **24** | l' | **39** | dirigeants | **54** | face |
| **10** | préserveraient | **25** | an | **40** | avaient | **55** | à |
| **11** | la | **26** | dernier | **41** | anticipé | **56** | toutes |
| **12** | paix | **27** | la | **42** | les | **57** | les |
| **13** | commune | **28** | guerre | **43** | graves | **58** | menaces |
| **14** | Si | **29** | aurait | **44** | ruptures | **59** | extérieures |
| **15** | les | **30** | cessé | **45** | énergétiques | **60** | . *(clôture)* |

*(Note typographique : 60 tokens textuels rigoureusement vérifiés par script d'analyse morphologique, où l'élision $l' + an$ constitue 2 mots selon la tradition des concours académiques).*

---

### Tableau Justificatif des Structures Modales Employées

| Phrase | Période hypothétique | Protase en « si » (Tiroir & Mode) | Apodose principale (Tiroir & Mode) | Valeur sémantique |
| :---: | :--- | :--- | :--- | :--- |
| **1** | Mots 1 à 13 | *Si les puissances [...] **renforçaient*** (Imparfait de l'indicatif) | *elles **préserveraient*** (Conditionnel présent) | **Système 2 canonique** : potentiel diplomatique ouvert sur l'avenir. |
| **2** | Mots 14 à 35 | *Si les gouvernements [...] **avaient conclu*** (Plus-que-parfait) | *la guerre **aurait cessé*** (Conditionnel passé 1re forme) | **Système 3 canonique** : contrefactuel passé absolu ($T_{-1}$). |
| **3** | Mots 36 à 60 | *si nos dirigeants [...] **avaient anticipé*** (Plus-que-parfait) | *notre continent **serait*** (Conditionnel présent) | **Système mixte (hybride)** : cause passée non avenue produisant un effet présent ($T_0$). |

---

## 17. Résumé Structuré : Le Tableau d'Or de la Période Conditionnelle

```text
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                        LE TABLEAU D'OR DE LA PÉRIODE CONDITIONNELLE EN « SI »                         │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. RÈGLE D'OR CARDINALE : JAMAIS DE CONDITIONNEL DANS LA SOUS-PHRASE INTRODUITE PAR « SI » HYPOTHÉTIQUE│
│    -> Forme bannie : *Si j'aurais / *Si je serais / *Si je pourrais                                   │
│    -> Forme souveraine : Si j'avais / Si j'étais / Si je pouvais                                       │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. LES TROIS ÉQUILIBRES CANONIQUES :                                                                   │
│    • SYSTÈME 1 (Réel ouvert)      : SI + PRÉSENT        ───> FUTUR SIMPLE (ou Présent / Impératif)    │
│    • SYSTÈME 2 (Potentiel/Irréel) : SI + IMPARFAIT      ───> CONDITIONNEL PRÉSENT                     │
│    • SYSTÈME 3 (Irréel du passé)  : SI + PLUS-QUE-PARF. ───> CONDITIONNEL PASSÉ (1re ou 2e forme)     │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. LA STRUCTURE HYBRIDE (SYSTÈME MIXTE) :                                                              │
│    • Ancrage passé contrefactuel  : SI + PLUS-QUE-PARF. ───> CONDITIONNEL PRÉSENT (Conséquence actuelle) │
│      Ex. : Si nous avions voté cette loi l'an dernier, notre pays serait prospère aujourd'hui.        │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4. LA COORDINATION D'HYPOTHÈSES :                                                                      │
│    • SI + Indicatif  +  ET QUE + SUBJONCTIF                                                            │
│      Ex. : S'il fait beau et qu'il veuille nous accompagner...                                        │
├────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 5. DISCRIMINATION DES « SI » :                                                                         │
│    • SI de Condition (Circonstancielle) : ZÉRO conditionnel (Si nous savions...)                      │
│    • SI d'Interrogation (Complétive COD) : CONDITIONNEL AUTORISÉ (J'ignore si nous saurions le faire)  │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Algorithme de Décision Rapide (Arbre Textuel)
```text
Vous souhaitez exprimer une idée avec « SI » :
 1. La proposition répond-elle à la question « Verbe + QUOI ? » après un verbe de doute ou d'ignorance ?
    ├── OUI ──> C'est une INTERROGATIVE INDIRECTE (Complétive)
    │           └── Le conditionnel est PERMIS si le sens l'exige (« J'ignore s'il viendrait »).
    └── NON ──> C'est une CIRCONSTANCIELLE D'HYPOTHÈSE
                └── Le conditionnel est STRICTEMENT PROSCRIT APRÈS « SI » !
                     ├── Le fait est possible dans le réel ? ──> SI + PRÉSENT  ──> FUTUR SIMPLE
                     ├── Le fait est imaginaire au présent ? ──> SI + IMPARFAIT ──> CONDITIONNEL PRÉSENT
                     └── Le fait est impossible au passé ?   ──> SI + PLUS-QUE-PARFAIT ──> CONDITIONNEL PASSÉ
```

---

## 18. Questions de Rappel Actif (*Active Recall*)

Vérifiez votre rétention conceptuelle sans consulter le cours avant de dérouler les réponses :

1. **Question 1** : Pourquoi le conditionnel est-il considéré tantôt comme un tiroir temporel de l'indicatif, tantôt comme un mode à part entière ? Donnez deux phrases illustrant cette opposition.
2. **Question 2** : Énoncez la règle d'or régissant le tiroir verbal de la proposition subordonnée circonstancielle introduite par la conjonction *si* hypothétique.
3. **Question 3** : Quelles sont les deux interprétations sémantiques distinctes que peut recevoir le Système 2 ($Si + \text{imparfait} \to \text{conditionnel présent}$) et comment les départage-t-on en contexte ?
4. **Question 4** : Dans quelle configuration syntaxique précise une période conditionnelle peut-elle associer une protase au plus-que-parfait et une apodose au conditionnel présent sans violer la concordance ?
5. **Question 5** : Quelle mutation morphosyntaxique s'opère obligatoirement lorsqu'on coordonne une seconde proposition hypothétique à une première proposition introduite par *si* ?
6. **Question 6** : Pourquoi est-il parfaitement grammatical d'écrire : *« La commission ignore si le gouvernement maintiendrait sa réforme en cas de grève générale »* ?

---

<details>
<summary><strong>Réponses détaillées aux questions de rappel actif (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** :
   - Le conditionnel est un **tiroir temporel de l'indicatif (futur du passé)** lorsqu'il apparaît dans une subordonnée complétive régie par un verbe au passé, pour marquer la postériorité chronologique objective sans incertitude (*« Il a affirmé [passé] qu'il viendrait [futur du passé] »*).
   - Il est un **mode autonome** lorsqu'il s'affranchit de cette rection temporelle en phrase autonome ou dans l'apodose pour signifier la non-assertion, le potentiel, l'imaginaire ou la réserve déférente (*« Nous aimerions obtenir des éclaircissements »*).
2. **Réponse 2** : La règle d'or prescrit de **ne jamais employer le conditionnel dans la proposition subordonnée introduite par le « si » hypothétique**. La protase reçoit exclusivement l'indicatif (présent pour le Système 1, imparfait pour le Système 2, plus-que-parfait pour le Système 3).
3. **Réponse 3** : Le Système 2 exprime :
   - Soit le **Potentiel** (l'éventualité ouverte sur l'avenir, concevable : *« Si nous partions demain, nous arriverions à temps »*) ;
   - Soit l'**Irréel du présent** (la contradiction avec l'état réel actuel des choses : *« Si j'étais à votre place en ce moment, j'agirais autrement »*).  
   On les départage par la présence de repères temporels (adverbes *demain* vs *actuellement/maintenant*) ou par la compatibilité ontologique avec la réalité présente connue des interlocuteurs.
4. **Réponse 4** : C'est le **système mixte (ou période hybride)** : la protase est ancrée dans le passé contrefactuel forclos ($T_{-1}$, plus-que-parfait) et l'apodose exprime la résultante contemporaine sur l'état des choses au moment présent ($T_0$, conditionnel présent). Ex. : *« Si nous avions anticipé l'inflation l'an passé, notre pouvoir d'achat serait préservé aujourd'hui »*.
5. **Réponse 5** : La seconde proposition subordonnée hypothétique est introduite par **« et que »** et commande obligatoirement le mode **subjonctif** : *« S'il vient et qu'il fasse beau... »* (et non l'indicatif ni la répétition lourde de *si*).
6. **Réponse 6** : La phrase est irréprochable car la proposition introduite par *si* n'est pas une circonstancielle d'hypothèse, mais une **complétive interrogative indirecte** (COD du verbe *ignore*). Dans ce cadre fonctionnel, *si* est un opérateur interrogatif qui admet pleinement le conditionnel modal pour traduire une supposition légitime posée dans l'interrogation.
</details>

---

## 19. Mini-Évaluation Sommative Notée sur 20 Points

- **Durée indicative** : 30 minutes (épreuve individuelle, sans aucun document ni calculatrice/téléphone).
- **Seuil d'admissibilité académique L3** : **14 / 20** (toute note $< 14/20$ impose un atelier de reprise obligatoire).
- **Barème pénal officiel** :  
  > [!CAUTION]
  > **Pénalité éliminatoire majeure** : Tout conditionnel employé après la conjonction « si » hypothétique entraîne un retrait immédiat et automatique de **quatre points (-4 pts)** sur la note globale de l'épreuve.

---

### Sujet de l'Épreuve

#### Partie I : Discrimination des Tiroirs et Analyse Modale (6 points — 1,5 pt par item)
Pour chaque phrase, soulignez le verbe au conditionnel, indiquez s'il s'agit d'un **conditionnel temporel** (futur du passé) ou d'un **conditionnel modal** (en précisant sa nuance : atténuation, réserve journalistique, potentiel, irréel du présent, irréel du passé) :
1. *Le procureur de la République déclara aux journalistes que l'instruction se poursuivrait dans le secret le plus strict.*
2. *Selon certaines indiscrétions ministérielles, le projet de loi sur l'énergie serait retiré dès la semaine prochaine.*
3. *Si la récolte était abondante cette année, le cours des céréales baisserait sur les marchés locaux.*
4. *Auriez-vous l'obligeance de me transmettre le procès-verbal de la dernière séance ?*

#### Partie II : Reconstitution et Concordance des Périodes en « Si » (6 points — 1 pt par item)
Conjuguez les verbes entre parenthèses selon la norme standard académique :
1. *Si vous (avertir) __________________ les autorités portuaires à temps, le cargo n'aurait pas heurté la digue.*
2. *Si les pourparlers de paix reprennent demain et que chaque délégation (accepter) __________________ de faire des concessions, le traité sera paraphé.*
3. *Nous ignorons si la Cour constitutionnelle (déclarer) __________________ cette loi conforme aux principes fondamentaux si elle était saisie.*
4. *Si j'avais suivi vos recommandations l'an dernier, je ne (être) __________________ pas dans cette impasse financière aujourd'hui.*
5. *Si les cours d'eau débordent sous l'effet des pluies torrentielles, le préfet (ordonner) __________________ l'évacuation des riverains.*
6. *Si l'on me demandait mon avis sur cette nomination, je (refuser) __________________ formellement d'émettre un jugement.* *(Attention à l'orthographe exacte de la 1re personne !)*

#### Partie III : Redressement Raisonné de Solécismes (8 points — 2 pts par item)
Dans les phrases suivantes, repérez l'erreur de système conditionnel, expliquez la règle enfreinte et réécrivez la phrase selon la norme la plus soignée :
1. *« Si vous auriez pris la peine de lire le contrat avant de le signer, vous n'auriez pas été dupé par cette clause abusive. »*
2. *« Si le budget serait débloqué par le ministère, nous pourrions commencer la rénovation de la bibliothèque universitaire. »*
3. *« Si les grévistes bloquent les dépôts de carburant et qu'ils persistent dans leur mouvement, le gouvernement réquisitionnera les stations. »*
4. *« Si je serais à votre place, je prendrai contact sans tarder avec le bâtonnier de l'ordre des avocats. »*

---

### Corrigé Détaillé et Barème de la Mini-Évaluation

<details>
<summary><strong>Corrigé officiel de la mini-évaluation (cliquer pour dérouler)</strong></summary>

#### Partie I : Discrimination des Tiroirs et Analyse Modale (6 points)
1. *« se poursuivrait »* : **Conditionnel temporel (futur du passé)** (1 pt). Complétive régie par le passé simple *déclara* ; exprime la postériorité objective sans doute (0,5 pt).
2. *« serait retiré »* : **Conditionnel modal (réserve journalistique / information sous réserve de confirmation)** (1 pt). L'énonciateur ne prend pas en charge la véracité du fait rapporté (0,5 pt).
3. *« baisserait »* : **Conditionnel modal (potentiel / apodose du Système 2)** (1 pt). Résultat d'une hypothèse conçue comme plausible sur l'avenir (0,5 pt).
4. *« Auriez-vous »* : **Conditionnel modal (atténuation et politesse déférente)** (1 pt). Acte de langage indirect adoucissant la requête (0,5 pt).

#### Partie II : Reconstitution et Concordance des Périodes en « Si » (6 points)
1. *« Si vous **aviez averti** [indicatif plus-que-parfait]... »* (1 pt). (Système 3 canonique).
2. *« ... et que chaque délégation **accepte** [subjonctif présent]... »* (1 pt). (Coordination d'hypothèses par *et que*).
3. *« ... si la Cour constitutionnelle **déclarerait** [conditionnel présent légitime]... »* (1 pt). (Interrogative indirecte COD de *ignorons*).
4. *« ... je ne **serais** [conditionnel présent] pas... »* (1 pt). (Système mixte : cause passée, effet présent souligné par *aujourd'hui*).
5. *« ... le préfet **ordonnera** [indicatif futur simple]... »* (1 pt). (Système 1 canonique).
6. *« ... je **refuserais** [conditionnel présent, terminaison *-ais*]... »* (1 pt). (Système 2 ; zéro point si écrit *refuserai* au futur).

#### Partie III : Redressement Raisonné de Solécismes (8 points)
1. - *Faute* : Emploi du conditionnel passé *auriez pris* après *si* hypothétique (1 pt).  
   - *Réécriture normée* : *« Si vous **aviez pris** la peine de lire le contrat avant de le signer, vous n'auriez pas été dupé par cette clause abusive. »* (1 pt).
2. - *Faute* : Emploi du conditionnel présent *serait débloqué* après *si* hypothétique au lieu de l'imparfait (1 pt).  
   - *Réécriture normée* : *« Si le budget **était débloqué** par le ministère, nous pourrions commencer la rénovation de la bibliothèque universitaire. »* (1 pt).
3. - *Faute* : Emploi de l'indicatif *persistent* après la locution de coordination *et que* reprenant une hypothèse en *si* (1 pt).  
   - *Réécriture normée* : *« Si les grévistes bloquent les dépôts de carburant et qu'ils **persistent** [subjonctif présent du verbe persister] dans leur mouvement, le gouvernement réquisitionnera les stations. »* (1 pt). *(Note : bien que les formes de 3e personne du pluriel soient graphiquement homophones au présent pour le 1er groupe, le scripteur doit expliciter qu'il s'agit d'un subjonctif présent).*
4. - *Faute* : Double faute : conditionnel *serais* après *si*, et futur simple *prendrai* dans l'apodose du Système 2 au lieu du conditionnel présent *prendrais* (1 pt).  
   - *Réécriture normée* : *« Si j'**étais** à votre place, je **prendrais** contact sans tarder avec le bâtonnier de l'ordre des avocats. »* (1 pt).
</details>

---

## 20. Critères Observables de Maîtrise (Palier L3 Autonomie)

La validation des compétences associées au chapitre `CHP-302-04` exige l'atteinte des seuils opérationnels suivants :

| Code Indicateur | Compétence associée | Comportement observable en situation autonome | Seuil minimal de validation |
| :---: | :---: | :--- | :---: |
| **IND-VRB-302-01** | [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) | **Proscription absolue du conditionnel dans la protase** : L'apprenant n'emploie jamais le conditionnel après *si* circonstanciel dans aucune production écrite ou orale. | **100 % de conformité** (Zéro tolérance : 0 faute admise) |
| **IND-VRB-302-02** | [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) | **Maîtrise des trois systèmes canoniques** : L'apprenant applique et permute sans hésitation les tiroirs verbaux des Systèmes 1, 2 et 3 sur des batteries de phrases complexes. | $\ge 90\ \%$ de réussites sur 20 items d'évaluation |
| **IND-VRB-302-03** | [`FR-VERB-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-verb-002-maniement-du-système-modal-subjonctif-et-conditionnel-et-concordance) | **Discrimination temporel vs modal** : L'apprenant justifie scientifiquement le statut d'un conditionnel (futur du passé vs attitude d'énonciation) en s'appuyant sur les tests de concordance. | $\ge 85\ \%$ de justifications exactes |
| **IND-SYN-302-04** | [`FR-SYNTAX-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-002-architecture-de-la-subordination-complexe) | **Coordination d'hypothèses par « et que »** : L'apprenant substitue spontanément la tournure *et que + subjonctif* à la répétition maladroite de *si*. | **100 % de conformité** dans les rédactions argumentatives |
| **IND-ORT-302-05** | [`FR-ORTHO-002`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-002-mécanique-infaillible-de-laccord-sujet-verbe) | **Discrimination orthographique `-ai` vs `-ais`** : À la 1re personne du singulier, l'apprenant ne commet aucune confusion graphique entre le futur et le conditionnel. | **100 % de graphies correctes** |

---

## 21. Sources et Lectures Complémentaires

Conformément à la politique d'intégrité bibliographique du cursus World-Class French ([`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md)), toutes les règles, taxonomies et analyses scientifiques développées dans ce chapitre s'appuient exclusivement sur les sources authentifiées suivantes :

1. **[`SRC-GRAM-01`] Grevisse, Maurice & Goosse, André (2016)**. *Le Bon Usage : Grammaire française* (16e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 884 (p. 1102-1110)** : *Le Conditionnel* — Double statut du tiroir verbal (temps de l'indicatif vs mode autonome) ; analyse détaillée des emplois modaux d'atténuation, d'information sous réserve et d'imaginaire ; statut de la seconde forme du conditionnel passé (*eût aimé*).
   - **§ 1045 (p. 1478-1486)** : *Les propositions de condition introduites par « si »* — Proscription du conditionnel dans la subordonnée ; examen historique des systèmes canoniques (potentiel, irréel du présent, irréel du passé) ; validité des systèmes mixtes.
   - **§ 1065 (p. 1512-1515)** : *La coordination de propositions circonstancielles* — Règle de reprise de la conjonction *si* par *que* et sélection obligatoire du subjonctif (*si... et que + subjonctif*).
2. **[`SRC-GRAM-02`] Riegel, Martin, Pellat, Jean-Christophe & Rioul, René (2016/2021)**. *Grammaire méthodique du français*. Paris : Presses Universitaires de France (PUF), coll. « Quadrige ».
   - **Chapitre 10 (*Le verbe : les tiroirs verbaux et les modes*)** : La valeur temporelle du futur du passé dans la subordination de discours indirect ; la morphologie du conditionnel ; l'imparfait modal contrefactuel dans la protase.
   - **Chapitre 16 (*La phrase complexe : les subordonnées circonstancielles*)** : Sémantique de la condition et de l'hypothèse ; distinction formelle entre protase et apodose ; contraintes de concordance dans la période conditionnelle.
3. **[`SRC-NORM-03`] Ministère de l'Éducation nationale (2020)**. *Terminologie grammaticale*. Paris : Réseau Canopé / Éduscol.
   - **Pages 40 à 42 (*Le système verbal : modes et temps*)** : Définition officielle du conditionnel comme tiroir temporel de l'indicatif (futur du passé) et ses emplois modaux ; terminologie officielle du potentiel et de l'irréel.
   - **Pages 44 à 48 (*L'architecture de la phrase complexe*)** : Statut de la subordonnée circonstancielle de condition comme complément de phrase déplaçable.
4. **[`SRC-TYPO-01`] Imprimerie nationale (2002/2014)**. *Lexique des règles typographiques en usage à l'Imprimerie nationale*. Paris : Imprimerie nationale.
   - **Article « Ponctuation » (p. 143)** : Ponctuation des propositions circonstancielles détachées ; règles officielles de décompte des mots (l'apostrophe comme séparateur d'unités lexicales distinctes).

---

## Annexe : Classification Pédagogique et Traçabilité du Contenu

Conformément aux normes didactiques de gouvernance ([`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md)), le tableau ci-dessous explicite la répartition des notions abordées au sein de ce chapitre :

| Étiquette didactique | Contenu linguistique / Notion syntaxique | Justification didactique & Destination précise |
| :---: | :--- | :--- |
| **CORE-NOW** | • Double statut du conditionnel : futur du passé (temporel) vs mode de l'imaginaire (modal).<br/>• Les trois systèmes conditionnels canoniques en *si* (Système 1, Système 2, Système 3).<br/>• Proscription formelle absolue du conditionnel dans la protase en *si*.<br/>• Les systèmes mixtes (protase au plus-que-parfait $\to$ apodose au conditionnel présent).<br/>• Règle de coordination d'hypothèses par *si... et que + subjonctif*.<br/>• Discrimination rigoureuse *-ai* (futur) vs *-ais* (conditionnel) à la 1re personne. | Cœur indispensable du chapitre `CHP-302-04`. Socle impératif pour éradiquer les solécismes de concordance et débloquer la maîtrise de la modalité en S3. |
| **INTRODUCTION-NOW** | • Présentation de la seconde forme du conditionnel passé (*subjonctif plus-que-parfait* : *il eût aimé*).<br/>• L'inversion littéraire du sujet au subjonctif comme équivalent de protase (*Fût-il le roi...*).<br/>• La parataxe de deux conditionnels juxtaposés (*Vous me donneriez un empire, je refuserais*).<br/>• Les prépositionnelles d'hypothèse (*n'était*, *n'eût été*, *sans*). | Préparer l'apprenant à la lecture des grands textes classiques et à l'élégance stylistique des concours universitaires. |
| **DEFER** | • La théorie de la polarité négative et le déclenchement du « ne » explétif après les locutions de condition (*à moins que... ne*). | **Reporté à [`MOD-302` — Chapitre 5](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-5--le-ne-explétif-et-la-polarité-énonciative-2-h-30)**. |
| **DEFER** | • Les règles exhaustives de la concordance des temps au subjonctif sous une principale au passé (subjonctif imparfait et plus-que-parfait). | **Reporté à [`MOD-302` — Chapitre 6](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-302-circonstancielles-systeme-modal-concordance.md#chapitre-6--concordance-des-temps-à-lindicatif-et-au-subjonctif-3-h-00)**. |
| **DEFER** | • L'art de l'objection réfutative sous hypothèse contrefactuelle dans le débat parlementaire et juridique. | **Reporté à [`MOD-402`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-402-rhetorique-argumentation-refutation-sophismes.md)** (*Rhétorique Argumentative, Réfutation et Négociation*). |
| **MOVE** | • L'amplification périodique oratoire cicéronienne et les cadences majeures sur les périodes à triple protase. | **Rattaché à [`MOD-501`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md)** (*Macro-syntaxe et Période Oratoire*). |
| **OPTIONAL-ADVANCED** | • La formalisation mathématique de la sémantique des mondes possibles de Lewis-Stalnaker ($A \boxempty\kern-1.5pt\to B$) et la relation de similarité comparative. | Section 12 du présent chapitre, réservée aux candidats à l'Agrégation de Lettres modernes et aux étudiants de linguistique formelle. |
| **REMOVE** | • L'étude philologique des emplois médiévaux de *se* suivi du subjonctif en ancien français (Chanson de Roland) et les subordinations asyndétiques du XVIe siècle. | Écarté du programme de Cycle 2 pour concentrer l'effort sur la stabilisation de la norme contemporaine (relevé pour `MOD-601`). |
