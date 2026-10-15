# Chapitre 2 — Verbes Essentiellement Pronominaux et Verbes à Sens Passif : Accord Systématique avec le Sujet et l'Exception Unique de « S'arroger »

> **Identifiant du chapitre** : `CHP-303-02`  
> **Module de rattachement** : [`MOD-303` — Orthographe Grammaticale Approfondie : Accords des Verbes Pronominaux et Pièges Morphologiques](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md)  
> **Semestre** : Année 2 — Semestre 3 (S3)  
> **Volume horaire estimé** : 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application (Phase 1 Étude : 1 h 30 | Phase 2 Pratique : 1 h 30 | Phase 3 Correction : 1 h 00 | Phase 4 Évaluation : 1 h 00)  
> **Statut** : [STATUT : VALIDÉ]  
> **Compétences associées** : [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux) (L3 Autonomie), [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) (L3 Autonomie), [`FR-INT-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-001-concevoir-et-rédiger-un-texte-argumentatif-complexe) (L3 Autonomie)  
> **Sources scientifiques de référence** : `SRC-GRAM-01` (Grevisse & Goosse, 2016, § 951 & § 955 b), `SRC-GRAM-02` (Riegel, Pellat & Rioul, 2016/2021, chap. 17), `SRC-NORM-03` (Ministère de l'Éducation nationale, 2020, p. 48-51), `SRC-TYPO-01` (Imprimerie nationale, 2002, p. 142-144), `SRC-GRAM-05` (Grevisse, 2009, § 292-294)

---

## 1. Titre et Place dans le Cursus

### 1.1 Intitulé Officiel
**Chapitre 2 : Verbes Essentiellement Pronominaux et Verbes à Sens Passif : Accord Systématique avec le Sujet et l'Exception Unique de « S'arroger »** (`CHP-303-02`).

### 1.2 Insertion Architecturale dans le Cursus
Le présent chapitre constitue la deuxième étape du module [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md). Alors que le Chapitre 1 (`CHP-303-01`) a posé les fondements théoriques de la diathèse pronominale, dénoncé le leurre de l'auxiliaire de surface *être* et clarifié le statut linguistique du morphème conjoint *se* [Réf. `SRC-GRAM-02`, chap. 17], ce chapitre isole la première grande bifurcation de l'arbre de décision : **les verbes dont le participe passé s'accorde systématiquement de plein droit avec le sujet grammatical** [Réf. `SRC-GRAM-01`, § 951].

La maîtrise de cette bifurcation est capitale : elle libère l'esprit du rédacteur de l'inutile recherche d'un complément d'objet direct (COD) pour tous les verbes où le pronom réfléchi n'est qu'un composant morphologique soudé au radical verbal (verbes essentiellement pronominaux) ou un opérateur de décausativisation (verbes à sens passif). Simultanément, elle arme l'apprenant contre l'écueil le plus sévèrement sanctionné des jurys de concours et des rédactions juridiques : **l'exception unique de « s'arroger »**, seul verbe exclusivement pronominal réclamant l'application de la règle de l'objet direct [Réf. `SRC-GRAM-01`, § 955 b].

```mermaid
flowchart TD
    MOD201["<b>MOD-201 (S2)</b><br/>Syntaxe Fonctionnelle :<br/>Valence verbale, COD & COI"] --> CHP30301["<b>CHP-303-01 (S3)</b><br/>Fondement Linguistique :<br/>Diathèse & Leurre de l'Auxiliaire Être"]
    MOD202["<b>MOD-202 (S2)</b><br/>Accord du Participe Passé :<br/>Règle de Marot avec Avoir"] --> CHP30301

    CHP30301 ==> CHP30302["<b>CHP-303-02 (Pivot)</b><br/>Verbes Essentiellement Pronominaux,<br/>Sens Passif & Exception de « S'arroger »"]

    CHP30302 ==>|Fondement de la disjonction actancielle| CHP30303["<b>CHP-303-03</b><br/>Verbes Accidentellement Pronominaux :<br/>Réfléchis, Réciproques & COD Conjoint/Disjoint"]
    CHP30302 -.->|Délimitation par contraste catégoriel| CHP30304["<b>CHP-303-04</b><br/>La Liste Fermée des 10 Intransitifs Invariables<br/>(se succéder, se plaire, se nuire...)"]
    CHP30302 -.->|Consolidation de la morphologie variable| CHP30305["<b>CHP-303-05</b><br/>Pluriel des Noms Composés & Pièges Morphologiques"]
    CHP30302 ==>|Intégration dans le métaprotocole| CHP30306["<b>CHP-303-06</b><br/>Synthèse Algorithmique & Fiche d'Arbitrage Élite"]

    CHP30302 -.->|<b>DEP-ORT-04 (Hard)</b> : Participes suivis d'un infinitif| MOD401["<b>MOD-401 (S4)</b><br/>Pragmatique Énonciative, Accords Limites<br/>(faire, laisser, perception) & Rectifications"]
    CHP30302 -.->|Sécurisation orthographique absolue| MOD403["<b>MOD-403 (S4)</b><br/>Dissertation Académique & Épreuve Écrite de Concours"]

    classDef fondation stroke:#2563eb,stroke-width:2px;
    classDef pivot stroke:#b91c1c,stroke-width:3px;
    classDef suite stroke:#059669,stroke-width:2px;
    classDef perspective stroke:#7c3aed,stroke-width:2px;
    class MOD201,MOD202,CHP30301 fondation;
    class CHP30302 pivot;
    class CHP30303,CHP30304,CHP30305,CHP30306 suite;
    class MOD401,MOD403 perspective;
```

- **En amont** : Ce chapitre s'appuie sur la manipulation des compléments essentiels d'objet acquise dans [`MOD-201`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-201-syntaxe-fonctionnelle-phrase-simple.md), sur l'automatisation du calcul de l'antéposition du COD avec l'auxiliaire *avoir* issue de [`MOD-202`](file:///f:/Formation/world-class-french/03-curriculum/year-1/semester-2/mod-202-participe-passe-avoir-ponctuation-interne.md), et sur la typologie fonctionnelle du morphème *se* établie au Chapitre 1 du présent module [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-1--fondement-linguistique-du-système-pronominal).
- **En aval immédiat** : Il libère le terrain pour l'analyse des verbes accidentellement pronominaux (Chapitre 3 : *se laver, se blesser, se téléphoner*) et pour le verrouillage de la liste fermée des intransitifs invariables (Chapitre 4 : *se succéder, se nuire*), avant la synthèse algorithmique complète du Chapitre 6.
- **En projection lointaine** : La distinction entre pronom actanciel autonome et morphème de voix constitue le prérequis obligatoire (*Hard Prerequisite* [`dependency-graph.md`, DEP-ORT-04](file:///f:/Formation/world-class-french/01-architecture/dependency-graph.md#22-axe-orthographe-grammaticale--accords-du-canonique-aux-cas-limites)) vers le module [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md) consacré aux accords limites du participe passé suivi d'un infinitif (*elles se sont laissé emporter* vs *elles se sont senties défaillir*).

---

## 2. Objectifs Mesurables

Au terme des 5 à 6 heures d'apprentissage autonome délibéré et d'ateliers d'application de ce chapitre, l'apprenant est capable de :

1. **Identifier et discriminer avec une exactitude de 100 %** au sein d'un texte complexe les verbes essentiellement pronominaux, les verbes à autonomie sémantique radicale et les verbes pronominaux passifs, en démontrant par des tests morphosyntaxiques formels l'absence de fonction autonome du clitique conjoint *se* ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).
2. **Accorder sans hésitation ni calcul superfétatoire de COD** le participe passé des verbes essentiellement pronominaux et à sens passif en genre et en nombre avec le sujet grammatical, y compris dans les contextes de disjonction topologique ou d'inversion du sujet ([`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), Palier L3 Autonomie).
3. **Résoudre avec une rigueur absolue le duel orthographique de « s'arroger »** en assignant au pronom *se* la fonction de COI et en appliquant l'invariabilité en présence d'un COD postposé (*ils se sont arrogé des droits*) ou l'accord en genre et en nombre avec le COD antéposé (*les droits qu'ils se sont arrogés*) ([`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple), Palier L3 Autonomie).
4. **Rédiger une justification métalinguistique exhaustive** démontrant la double rection d'objet du verbe *s'arroger* et explicitant pourquoi l'accord avec le sujet relève d'une faute doctrinale majeure dans les écrits académiques et juridiques ([`FR-INT-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-001-concevoir-et-rédiger-un-texte-argumentatif-complexe), Palier L3 Autonomie).

---

## 3. Prérequis et Test de Préparation

### 3.1 Prérequis Exigibles
- **Maîtrise de la valence verbale et des fonctions d'objet (`MOD-201`)** : Distinction opératoire immédiate entre transitif direct, transitif indirect et intransitif par tests de substitution clitique (*le/la/les* vs *lui/leur*).
- **Règle d'or de Clément Marot (`MOD-202`)** : Accord du participe passé avec l'auxiliaire *avoir* subordonné à la position antéposée du COD.
- **Typologie des diathèses (`MOD-303`, Chapitre 1)** : Connaissance du rôle de *se* comme marqueur de voix moyenne ou comme actant anaphorique.

### 3.2 Test de Préparation (Auto-Diagnostic à 5 Questions)
Résolvez les cinq questions suivantes sans consulter de documentation extérieure avant de dérouler le corrigé :

1. **Question 1 (Morphologie lexicale)** : Parmi les quatre verbes suivants, lequel peut être employé à la voix active non pronominale en français moderne : *s'enfuir*, *se désister*, *se soucier*, *s'absenter* ?
2. **Question 2 (Identification actancielle)** : Dans la phrase *« Les marchandises se sont vendues en un temps record »*, quel est le rôle sémantique du sujet *les marchandises* ? Exerce-t-il l'action de vendre ?
3. **Question 3 (Test de transitivité)** : Dans le tour *« Le dictateur s'est arrogé les pleins pouvoirs »*, quelle est la fonction syntaxique exacte du syntagme nominal *les pleins pouvoirs* ?
4. **Question 4 (Étymologie verbale)** : De quel verbe latin dérive *s'arroger*, et quelle en était la signification primitive ?
5. **Question 5 (Détection d'erreur)** : Dans l'énoncé *« Les captives se sont enfui à travers la forêt »*, quelle est la nature de l'erreur commise et comment la corriger ?

<details>
<summary><strong>Corrigé détaillé et barème de l'auto-diagnostic (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : **Aucun**. Ces quatre verbes sont tous **essentiellement pronominaux** : les formes actives *\*enfuir*, *\*désister*, *\*soucier* et *\*absenter* n'existent pas dans le lexique français contemporain.
2. **Réponse 2** : Le sujet *les marchandises* assume le rôle sémantique de **patient** (il subit l'action de vente exercée par des acheteurs non exprimés). C'est la marque distinctive de la **voix pronominale passive**.
3. **Réponse 3** : Le syntagme *les pleins pouvoirs* est le **Complément d'Objet Direct (COD)** du verbe *s'est arrogé* (posé par la question : *le dictateur a arrogé quoi ? les pleins pouvoirs*).
4. **Réponse 4** : Il dérive du latin *arrogare* (composé de *ad*, vers/à, et *rogare*, demander, réclamer). Il signifiait primitivement « demander pour soi, réclamer avec insolence à son profit ».
5. **Réponse 5** : L'énoncé omet la désinence d'accord du féminin pluriel (*-es*). Le verbe *s'enfuir* étant essentiellement pronominal, son participe passé fait corps avec le sujet grammatical *les captives* et s'accorde obligatoirement avec lui : *« Les captives se sont enfui**es** à travers la forêt »*.

> **Diagnostic d'orientation** : Si votre score est inférieur à 4/5, relisez attentivement les fondements du pronom clitique dans le Chapitre 1 de [`MOD-303`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-1--fondement-linguistique-du-système-pronominal) avant d'aborder la section 4.
</details>

---

## 4. Situation de Départ ou Problème Concret

### 4.1 L'Angoisse de l'Accord Pronominal et ses Deux Faillites Symétriques
Dans les écrits administratifs, diplomatiques, judiciaires et universitaires, l'accord du participe passé des verbes pronominaux suscite chez le scripteur une insécurité linguistique chronique. Cette angoisse se traduit par deux dérives pathologiques symétriques constatées lors des concours de la haute fonction publique et de l'agrégation :

1. **La paralysie par sur-analyse (le faux piège du COD)** : L'apprenant, traumatisé par la règle des verbes accidentellement pronominaux (*se parler, se succéder*), s'épuise à rechercher fébrilement un COD pour des verbes comme *s'enfuir, s'abstenir, se souvenir* ou *s'évanouir*. Ne trouvant pas de COD ou s'interrogeant sur la fonction de *se*, il finit par douter et écrit des barbarismes tels que *\*« elles se sont souvenu »* ou *\*« ils se sont abstenu »*, privant le verbe de son accord sujet naturel [Réf. `SRC-GRAM-01`, § 951].
2. **L'hypercorrection dévastatrice sur « s'arroger »** : Ayant mémorisé que les verbes exclusivement pronominaux s'accordent sans exception avec le sujet, le scripteur applique mécaniquement cet automatisme au verbe *s'arroger* :
   > ❌ *\*« Les membres du comité se sont arrogés des privilèges inacceptables. »*  
   > *(Faute capitale en droit et en concours administratif, sanctionnée par la note zéro à l'exercice d'orthographe).*

### 4.2 Analyse Clinique de Quatre Énoncés Fautifs Authentiques

| Extrait fautif recueilli | Défaillance cognitive sous-jacente | Rectification normée et justification |
| :--- | :--- | :--- |
| ❌ *\*« Les troupes rebelles se sont enfui dès l'assaut. »* | Omission de l'accord sujet : le scripteur applique l'invariabilité par peur d'un complément d'objet absent. | *« Les troupes rebelles se sont enfui**es**... »* (*s'enfuir* est essentiellement pronominal $\rightarrow$ accord de plein droit avec le sujet *les troupes*). |
| ❌ *\*« Les réformes proposées se sont enfin appliqué sans heurt. »* | Méconnaissance de la voix pronominale passive : le scripteur traite le verbe comme un intransitif neutre. | *« Les réformes proposées se sont enfin appliqué**es**... »* (sens passif : *ont été appliquées* $\rightarrow$ accord obligatoire avec le sujet patient *les réformes*). |
| ❌ *\*« Elles ne se sont pas aperçu de leur méprise. »* | Fausse analyse de rection : le scripteur assimile *s'apercevoir de* à un transitif indirect invariable (sur le modèle de *se complaire dans*). | *« Elles ne se sont pas aperçu**es** de leur méprise. »* (*s'apercevoir de* possède une autonomie sémantique radicale $\rightarrow$ accord systématique avec le sujet *elles*). |
| ❌ *\*« Les préfets se sont arrogés un droit de veto. »* | Application aveugle de la règle des essentiels : le scripteur ignore que *se* est analysé en COI et que le COD *un droit de veto* est postposé. | *« Les préfets se sont arrogé un droit de veto. »* (COD postposé $\rightarrow$ participe strictement **invariable**). |

La résolution de ces confusions impose de comprendre la réalité mécanique sous-jacente : pourquoi certains verbes font corps avec le sujet et pourquoi *s'arroger* a été isolé par la doctrine grammaticale.

---

## 5. Explication Intuitive : La Fusion Moléculaire et la Dérogation Notariale

Pour appréhender sans hésitation le statut de ces verbes, deux modélisations analogiques clarifient immédiatement le fonctionnement linguistique :

### 5.1 L'Analogie de la Fusion Moléculaire (Essentiels et Passifs)
Considérons le composé chimique de l'eau ($H_2O$) :
- L'hydrogène et l'oxygène ne mènent pas une vie séparée dans le liquide ; ils sont unis par des liaisons covalentes indissociables.
- Chez les **verbes essentiellement pronominaux** (*s'enfuir, s'abstenir*) et les **verbes pronominaux passifs** (*le livre s'est vendu*), le pronom clitique *se* n'est pas un passager distinct assis sur un siège passager. Il est **fondu dans le radical verbal**. Vous ne pouvez pas poser de question d'objet : vous ne pouvez ni « \*enfuir quelqu'un » ni « \*vendre soi-même » lorsque le livre est vendu.
- Puisque *se* n'a aucune autonomie syntaxique ni actancielle, le verbe se comporte exactement comme un verbe conjugué avec le **véritable auxiliaire être d'état** (*elles sont parties*, *elles sont mortes*). Le participe passé fait corps avec le sujet grammatical : il s'accorde avec lui **de plein droit, immédiatement et sans condition** [Réf. `SRC-GRAM-02`, chap. 17].

### 5.2 L'Analogie de la Dérogation Notariale (Le Cas Unique de « S'arroger »)
Imaginons un domaine seigneurial où tous les résidents régis par le droit féodal partagent le même statut d'accord avec le seigneur du lieu (le sujet).
- Survient un individu singulier : le verbe **« s'arroger »**. Bien qu'il porte le vêtement des verbes essentiellement pronominaux (il ne sort jamais sans son clitique *se*), il produit un **acte notarié d'exception séculaire**.
- Cet acte stipule : *« Bien que je sois exclusivement pronominal, je transporte avec moi un véritable fardeau d'usurpateur : je réclame un objet direct (le COD) et je désigne à qui je le destine (à moi-même, COI). »*
- Par cette dérogation doctrinale unique, les grammairiens ont ordonné que *s'arroger* soit expulsé du régime de la fusion moléculaire pour être soumis au régime contractuel ordinaire de la rection d'objet (la règle de Clément Marot). S'il a déjà empoché son COD avant d'écrire le verbe, il s'accorde avec lui ; si le COD vient après, il demeure rigoureusement invariable.

---

## 6. Définitions Précises et Terminologie

Conformément à la terminologie grammaticale officielle [Réf. `SRC-NORM-03`, p. 48-51] et aux traités universitaires [Réf. `SRC-GRAM-01`, § 950-955 ; `SRC-GRAM-02`, chap. 17], les concepts suivants reçoivent une définition formelle univoque :

### 6.1 Verbe Essentiellement Pronominal
Verbe qui ne s'emploie, dans l'état contemporain de la langue, **qu'à la voix pronominale** (*s'absenter, s'emparer, s'évanouir, se désister, se repentir*). Le morphème conjoint *se* y est dépourvu de fonction syntaxique propre (ni COD ni COI) ; il fonctionne comme un morphème grammatical lexicalisé indissociable du radical.

### 6.2 Verbe à Autonomie Sémantique Radicale
Verbe qui possède formellement un homologue actif transitif, mais dont l'emploi pronominal s'est émancipé sémantiquement et syntaxiquement au point de constituer une **unité lexicale autonome** avec une valence propre (*s'apercevoir de* = comprendre/constater vs *apercevoir* = discerner par la vue ; *s'aviser de* = avoir l'audace/concevoir vs *aviser* = avertir ; *s'attaquer à* = affronter vs *attaquer* = assaillir). En grammaire normative, ces verbes sont **totalement assimilés aux verbes essentiellement pronominaux** pour l'accord du participe passé.

### 6.3 Pronominal Passif (ou Passif Pronominal)
Construction dans laquelle un verbe transitif direct est employé à la forme pronominale avec un **sujet inanimé ou patient**, de sorte que le procès est interprété à la voix passive sans qu'un complément d'agent humain ne soit nécessairement explicité (*Cette revue s'est vendue à dix mille exemplaires*, *Les crédits se sont débloqués*). Le clitique *se* y est un pur opérateur morphologique de décausativisation.

### 6.4 Inanimé Patient
Entité syntaxique occupant la fonction de sujet grammatical d'un verbe passif ou pronominal passif, dénuée de volonté ou d'agentivité propre, et subissant les effets de l'action verbale (*la maison s'est bâtie*, *les dossiers se sont égarés*).

### 6.5 Accord de Plein Droit
Mécanisme morphosyntaxique par lequel le participe passé reçoit mécaniquement et immédiatement les marques de genre et de nombre du sujet grammatical, sans subordination à la détection, à la nature ou à la position d'un complément d'objet direct.

### 6.6 Exception Morphosyntaxique Doctrinale
Statut linguistique d'un terme qui déroge à la règle de sa catégorie grammaticale de surface par suite d'une décision normative consacrée par la tradition philologique et l'usage académique. En français, *s'arroger* constitue l'unique exception doctrinale au principe d'accord de plein droit des verbes exclusivement pronominaux.

### 6.7 Rection Double (ou Transitivité Bifonctionnelle)
Propriété d'un verbe sélectionnant simultanément deux compléments argumentaux : un complément d'objet direct (la chose régie) et un complément d'objet indirect ou d'attribution (le bénéficiaire ou destinataire). Chez *s'arroger*, la rection s'articule en un COD nominal distinct et un COI dative assumé par le clitique réfléchi *se* (*s'arroger quelque chose à soi-même*).

---

## 7. Règles ou Mécanismes Fondamentaux

Le traitement orthographique des participes passés abordés dans ce chapitre s'ordonne selon quatre paliers structurés :

```text
               [VERBE PRONOMINAL AU PARTICIPE PASSÉ]
                                  │
     Le verbe est-il essentiellement pronominal, à autonomie
         sémantique radicale, ou employé au sens passif ?
                               /     \
                           OUI         NON (Verbes accidentels :
                            │               Ch. 3 & Ch. 4)
             S'agit-il du verbe « S'ARROGER » ?
                        /               \
                    NON                   OUI : EXCEPTION DOCTRINALE !
                     │                                 │
           ACCORD SYSTÉMATIQUE                Où se trouve le COD ?
             AVEC LE SUJET                      /              \
           (de plein droit)              POSTPOSÉ               ANTÉPOSÉ
                                            │                      │
                                       INVARIABLE          ACCORD EN GENRE
                                     (ex: arrogé des)      ET EN NOMBRE AVEC
                                                            LE COD ANTÉPOSÉ
                                                           (ex: qu'il s'est
                                                               arrogées)
```

### 7.1 Les Verbes Intrinsèquement Pronominaux
Les verbes qui n'existent pas sans le pronom réfléchi forment une classe fermée d'usage courant et soutenu :
- *s'enfuir, se souvenir, s'abstenir, s'écrier, s'évanouir, se désister, se méfier, s'emparer, s'ingérer, s'évertuer, se tapir, se repentir, se rebeller, s'accouder, s'esclaffer, s'amouracher, se dédire, s'obstiner, se soucier, s'extasier, se prélasser, se volatiliser*.

> [!IMPORTANT]
> **Règle fondamentale** : Le participe passé de ces verbes **s'accorde systématiquement et de plein droit en genre et en nombre avec le sujet grammatical** [Réf. `SRC-GRAM-01`, § 951 ; `SRC-GRAM-05`, § 292].
> - *Les sentinelles se sont **enfui-es** dès les premières alertes.* (Sujet féminin pluriel $\rightarrow$ *-es*).
> - *Elle s'est **souvenu-e** de chaque détail de sa prestation de serment.* (Sujet féminin singulier $\rightarrow$ *-e*).
> - *Les jurés se sont **abstenu-s** de tout commentaire public.* (Sujet masculin pluriel $\rightarrow$ *-s*).

### 7.2 Les Verbes Pronominaux à Autonomie Sémantique Radicale
Lorsque l'emploi pronominal a totalement distendu ses liens sémantiques avec l'actif de base, la grammaire normative refuse de disséquer le pronom comme un COD ou un COI. Le pronom fait corps avec la nouvelle sémantique verbale :
- *s'apercevoir de* (= remarquer, comprendre intellectuellement, constater) ;
- *s'aviser de* (= avoir l'audace de, former le projet inopiné de) ;
- *s'attaquer à* (= affronter avec détermination, critiquer un problème) ;
- *se douter de* (= soupçonner, pressentir la réalité) ;
- *se prévaloir de* (= tirer avantage, se targuer d'un titre) ;
- *se refuser à* (= rejeter catégoriquement une action).

> [!NOTE]
> **Règle fondamentale** : Ces verbes sont **entièrement assimilés aux verbes essentiellement pronominaux**. Leur participe passé **s'accorde systématiquement avec le sujet grammatical** [Réf. `SRC-GRAM-01`, § 951 b ; `SRC-GRAM-02`, chap. 17].
> - *Elles se sont vite **aperçu-es** de leur bévue procedurale.* (Sujet *elles* $\rightarrow$ accord féminin pluriel).
> - *Ils se sont **avisé-s** de réclamer une seconde lecture.* (Sujet *ils* $\rightarrow$ accord masculin pluriel).
> - *L'administration s'est **attaqué-e** à l'assainissement des finances.* (Sujet *l'administration* $\rightarrow$ féminin singulier).

### 7.3 Les Verbes Pronominaux à Sens Passif
Le pronominal passif est une diathèse fréquente en prose soutenue pour évacuer l'agent humain et focaliser l'attention sur l'accomplissement du fait. Le sujet y est un **inanimé patient** :
- *La constitution s'est votée dans l'enthousiasme.* (= a été votée).
- *Les exemplaires de cette thèse se sont vendus en quelques semaines.* (= ont été vendus).
- *Les idées constitutionnelles se sont propagées à travers toute la sous-région.* (= ont été propagées).
- *La citadelle s'est rendue sans combattre.* (= a été rendue).

> [!IMPORTANT]
> **Règle fondamentale** : Le participe passé d'un verbe employé au sens passif **s'accorde systématiquement en genre et en nombre avec son sujet grammatical** [Réf. `SRC-GRAM-01`, § 951 c ; `SRC-NORM-03`, p. 50].
> - *Les réformes structurelles se sont **appliqué-es** sans heurts majeurs.* (Sujet *les réformes* $\rightarrow$ féminin pluriel).
> - *Ces traditions juridiques se sont **transmi-ses** d'âge en âge.* (Sujet *ces traditions* $\rightarrow$ féminin pluriel).

### 7.4 L'Exception Doctrinale Unique du Français : Le Cas de « S'arroger »
Parmi tous les verbes du lexique français qui n'existent qu'à la forme pronominale, **un seul et unique verbe fait dissidence doctrinale : « s'arroger »** [Réf. `SRC-GRAM-01`, § 955 b].

```text
                  STRUCTURE ACTANCIELLE DE S'ARROGER
          [Sujet]  +  se (COI dative)  +  arrogé  +  [COD nominal]
          "Ils"          "à eux-mêmes"                   "des droits"
```

1. **L'analyse syntaxique officielle** :
   - Dans *s'arroger*, le clitique *se* n'est pas un marqueur passif ni une particule vide. Il est analysé formellement par l'Académie française et la tradition grammaticale comme un **Complément d'Objet Indirect (COI)** exprimant l'attribution dative (*s'arroger* = « s'attribuer à soi-même »).
   - L'objet usurpé ou réclamé constitue le **Complément d'Objet Direct (COD)** du verbe.
2. **L'application stricte de la règle de Clément Marot** :
   Puisque *se* est COI, l'accord ne s'effectue jamais avec le sujet, mais obéit rigoureusement à la position du COD réel :
   - **Cas A : Le COD est placé après le participe passé $\rightarrow$ Invariabilité absolue** :
     *« Les membres du directoire se sont **arrogé** [invariable] des prérogatives régaliennes. »*  
     *(Ils ont arrogé quoi ? des prérogatives = COD postposé $\rightarrow$ participe invariable en -é).*
   - **Cas B : Le COD est placé avant le participe passé $\rightarrow$ Accord en genre et en nombre avec le COD** :
     *« Les prérogatives régaliennes que les membres du directoire se sont **arrogé-es** sans titre. »*  
     *(Ils ont arrogé quoi ? que, mis pour son antécédent les prérogatives, féminin pluriel, antéposé $\rightarrow$ accord au féminin pluriel en -ées).*
   - **Cas C : COD pronominalisé antéposé (*les*) $\rightarrow$ Accord avec le pronom COD** :
     *« Ces titres illégitimes, ils se les sont **arrogé-s** lors du coup d'État. »*  
     *(Ils ont arrogé quoi ? les, mis pour ces titres, masculin pluriel, antéposé $\rightarrow$ accord en -és).*

---

## 8. Raisonnement Détaillé (Le Pourquoi Linguistique)

Pourquoi la langue française, d'ordinaire soucieuse de régularité dans ses grandes catégories, a-t-elle sanctuarisé cette exception exorbitante pour le seul verbe *s'arroger* ?

### 8.1 L'Héritage Philologique du Droit Romain et de la Rection Latine
Le verbe *s'arroger* a été emprunté au latin juridique classique *arrogare* au XIVe siècle. À Rome, *adrogare* était un terme technique de droit civil : il désignait l'acte public par lequel un citoyen adoptait un individu *sui iuris* (maître de ses droits), cérémonie qui exigeait une proposition formelle du pontife au peuple (*ad-rogare* : demander à l'assemblée en faveur de quelqu'un). Au sens figuré civil, le verbe prit le sens de s'approprier indûment une qualité ou un pouvoir.

En passant en français, le verbe n'a jamais été usité sans son pronom d'intérêt (*s'arroger*). Or, contrairement à des verbes comme *s'enfuir* ou *se souvenir* qui sélectionnent soit un complément prépositionnel d'éloignement (*s'enfuir de*), soit un complément d'origine génitive (*se souvenir de*), le verbe *s'arroger* a conservé intacte sa **construction transitive directe d'objet** :
- On dit : *arroger quelque chose à quelqu'un* (en latin : *aliquid sibi arrogare*).
- En français moderne, la formule active *\*arroger quelque chose* est devenue agrammaticale, mais le français a maintenu dans l'inconscient syntaxique la double case argumentale :
  1. La chose usurpée = Argument 1 (accusatif latin $\rightarrow$ **COD** français).
  2. Le bénéficiaire de l'usurpation = Argument 2 (datif latin $\rightarrow$ **COI** français).

### 8.2 La Décision Normative de l'Académie et des Remarqueurs
Au XVIIe et au XVIIIe siècle, alors que la langue classique fixait le bon usage sous la plume de Vaugelas, Thomas Corneille et de l'Académie française, les grammairiens ont refusé de sacrifier la logique actancielle sur l'autel de la symétrie morphologique [Réf. `SRC-GRAM-01`, § 955 b].

Les remarqueurs ont tenu ce raisonnement impeccable :
> *« Si nous accordons "s'arroger" avec le sujet comme "s'enfuir", que ferons-nous de la phrase où le COD précède ? Dirons-nous "les droits qu'ils se sont arrogés" ou "les droits qu'elle s'est arrogée" ? Si "se" était le sujet ou un morphème vide, le participe ne pourrait pas porter à la fois la marque du sujet et celle de l'objet antéposé sans contradiction. Puisque la chose arrogée est un véritable COD, le participe passé doit lui obéir. Et si le COD suit, il ne peut pas s'accorder avec le sujet, car nul participe conjugué avec l'analogue de l'auxiliaire avoir ne s'accorde avec le sujet quand un COD est présent. »*

Cette décision historique a consacré le statut d'usurpateur syntaxique de *s'arroger* : **intrinsèquement pronominal par sa morphologie de surface, mais purement transitif direct par sa syntaxe profonde.**

---

## 9. Exemples Corrects Commentés

Voici quatre analyses approfondies de phrases modèles issues de la prose juridique, parlementaire et littéraire patrimoniale :

### Exemple 1 : Verbe Essentiellement Pronominal en Contexte Militaire
> *« Les cohortes révoltées se sont **enfui-es** à la première sommation des tribuns. »*

- **Analyse morphosyntaxique** :
  - Verbe recteur : *s'enfuir*, verbe exclusivement pronominal (aucune existence active de *\*enfuir*).
  - Statut du clitique *se* : morphème de voix fusionné, sans fonction d'objet autonome.
  - Sujet : *Les cohortes révoltées* (groupe nominal, féminin pluriel).
- **Mécanique d'accord** : Accord de plein droit avec le sujet.
- **Désinence** : *enfui* + marque du féminin *-e* + marque du pluriel *-s* = **enfuies** (`/ɑ̃.fɥi/`, graphie `<enfuies>`).
- **Attestation d'autorité** : Conforme à `SRC-GRAM-01`, § 951 a.

### Exemple 2 : Verbe à Autonomie Sémantique Radicale en Cour de Justice
> *« Les avocates de la défense se sont promptement **aperçu-es** du vice de procédure entachant le réquisitoire. »*

- **Analyse morphosyntaxique** :
  - Verbe recteur : *s'apercevoir de* au sens de « comprendre, découvrir par l'analyse ».
  - Dissociation sémantique : le verbe actif *apercevoir* signifie « distinguer visuellement un objet matériel » ; l'emploi pronominal régissant une préposition *de* forme une unité lexicale nouvelle.
  - Sujet : *Les avocates de la défense* (groupe nominal, féminin pluriel).
- **Mécanique d'accord** : Assimilation complète à un verbe essentiellement pronominal. Accord de plein droit avec le sujet *les avocates*.
- **Désinence** : *aperçu* + *-e* + *-s* = **aperçues** (`/a.pɛʁ.sy/`, graphie `<aperçues>`).
- **Attestation d'autorité** : Conforme à `SRC-GRAM-02`, chap. 17.

### Exemple 3 : Verbe Pronominal Passif dans un Rapport Économique
> *« Les nouvelles obligations souveraines de l'État béninois se sont **vendu-es** dès la première séance d'adjudication. »*

- **Analyse morphosyntaxique** :
  - Verbe recteur : *se vendre*, verbe transitif direct employé à la voix passive pronominale.
  - Sujet : *Les nouvelles obligations souveraines...* (sujet inanimé patient, féminin pluriel).
  - Paraphrase canonique : *« Les obligations ont été vendues par les investisseurs... »*
- **Mécanique d'accord** : Accord systématique avec le sujet grammatical patient.
- **Désinence** : *vendu* + *-e* + *-s* = **vendues** (`/vɑ̃.dy/`, graphie `<vendues>`).
- **Attestation d'autorité** : Conforme à `SRC-NORM-03`, p. 50.

### Exemple 4 : Le Duel Orthographique de « S'arroger » dans un Arrêt Constitutionnel
> **Phrase A (COD postposé)** : *« En promulguant ces décrets d'urgence, la junte militaire s'est **arrogé** [invariable] des attributions constitutionnelles immenses. »*  
> **Phrase B (COD antéposé)** : *« Les attributions constitutionnelles immenses que la junte militaire s'est **arrogé-es** [accord] ont été déclarées nulles et non avenues par la cour. »*

- **Analyse de la Phrase A** :
  - Sujet : *la junte militaire* (féminin singulier).
  - Pronom *s'* : Complément d'Objet Indirect (COI) = « à elle-même ».
  - Question actancielle : *La junte a arrogé quoi ?* $\rightarrow$ *des attributions constitutionnelles immenses* = **COD placé APRÈS le verbe**.
  - Règle : COD postposé $\rightarrow$ participe **invariable** en *-é* (`<arrogé>`). L'accord fautif *\*s'est arrogée* avec le sujet est proscrit.
- **Analyse de la Phrase B** :
  - Pronom relatif *que* : mis pour l'antécédent *les attributions constitutionnelles immenses* (féminin pluriel).
  - Fonction de *que* : **COD placé AVANT le verbe**.
  - Règle : COD antéposé $\rightarrow$ accord obligatoire en genre et en nombre avec l'antécédent du COD.
  - Désinence : *arrogé* + *-e* + *-s* = **arrogées** (`<arrogées>`).
- **Attestation d'autorité** : Conforme à `SRC-GRAM-01`, § 955 b ; `SRC-GRAM-05`, § 294.

---

## 10. Contre-Exemples et Erreurs Fréquentes

L'audit des copies d'examen et des mémoires juridiques met en lumière six erreurs récurrentes majeures qui détruisent la crédibilité du scripteur. Chacune fait ici l'objet d'une analyse clinique et d'une réfutation scientifique :

### Erreur n° 1 : L'accord fautif de « s'arroger » avec le sujet en présence d'un COD postposé
- ❌ **Énoncé pathologique** : *\*« Les membres de la commission administrative se sont arrogés des pouvoirs discrétionnaires exorbitants. »*
- **Diagnostic linguistique** : L'apprenant applique aveuglément l'automatisme des verbes essentiellement pronominaux en accordant le participe avec le sujet *les membres* (masculin pluriel).
- **Réfutation et règle violée** : Dans le verbe *s'arroger*, le pronom *se* est COI (*à eux-mêmes*). Le complément direct d'objet est le syntagme nominal *des pouvoirs discrétionnaires exorbitants*, situé **après** le verbe. Selon la règle d'or de Clément Marot, en présence d'un COD postposé, le participe passé demeure strictement invariable.
- ✅ **Forme académique rétablie** : *« Les membres de la commission administrative se sont **arrogé** des pouvoirs discrétionnaires exorbitants. »* [Réf. `SRC-GRAM-01`, § 955 b].

### Erreur n° 2 : L'omission d'accord sur « s'arroger » en présence d'un COD antéposé
- ❌ **Énoncé pathologique** : *\*« La cour suprême a annulé les dispenses illégales que ces fonctionnaires s'étaient arrogé pendant la transition. »*
- **Diagnostic linguistique** : Ayant intériorisé que *s'arroger* est fréquemment invariable, le scripteur fige le participe dans une invariabilité totale et insensible au contexte syntagmatique.
- **Réfutation et règle violée** : Le pronom relatif *que* est le COD de *s'étaient arrogées* ; il est placé **avant** le verbe et a pour antécédent *les dispenses illégales* (nom féminin pluriel). Le participe passé doit obligatoirement recevoir les marques de genre et de nombre du COD qui le précède.
- ✅ **Forme académique rétablie** : *« La cour suprême a annulé les dispenses illégales que ces fonctionnaires s'étaient **arrogé-es** pendant la transition. »* [Réf. `SRC-GRAM-01`, § 955 b].

### Erreur n° 3 : L'oubli de la marque d'accord sur un verbe essentiellement pronominal au féminin pluriel
- ❌ **Énoncé pathologique** : *\*« Craignant des représailles judiciaires, les deux accusées se sont enfui dès l'ouverture des débats. »*
- **Diagnostic linguistique** : Insensibilité phonétique à l'accord : le participe terminé par une voyelle (`/ɑ̃.fɥi/`) s'entend de manière identique au masculin et au féminin à l'oral. Le scripteur omet la morphologie muette écrite.
- **Réfutation et règle violée** : Le verbe *s'enfuir* est exclusivement pronominal. Son participe passé fait corps avec le sujet grammatical *les deux accusées* (féminin pluriel). L'adjonction des morphogrammes *-e* (féminin) et *-s* (pluriel) est impérative à l'écrit.
- ✅ **Forme académique rétablie** : *« Craignant des représailles judiciaires, les deux accusées se sont **enfui-es** dès l'ouverture des débats. »* [Réf. `SRC-GRAM-05`, § 292].

### Erreur n° 4 : La confusion entre voix pronominale passive et voix passive canonique avec être
- ❌ **Énoncé pathologique** : *\*« Cette loi s'est été votée sous l'ancienne législature. »* (ou l'invariabilité fautive : *\*« cette loi s'est voté »*).
- **Diagnostic linguistique** : Télescopage entre la voix passive analytique (*a été votée*) et la voix moyenne pronominale passive (*s'est votée*), produisant un monstre morphologique ou un refus d'accord du sujet patient.
- **Réfutation et règle violée** : La forme pronominale passive exclut l'insertion du participe *été*. Le verbe conjugué avec l'auxiliaire *être* de surface prend pour seul participe celui du verbe d'action, accordé avec le sujet inanimé patient *cette loi* (féminin singulier).
- ✅ **Forme académique rétablie** : *« Cette loi **s'est voté-e** [ou : **a été votée**] sous l'ancienne législature. »* [Réf. `SRC-NORM-03`, p. 50].

### Erreur n° 5 : La fausse analyse actancielle sur « s'apercevoir de » traité à tort comme transitif indirect invariable
- ❌ **Énoncé pathologique** : *\*« Les observatrices électorales se sont aperçu des irrégularités dans le dépouillement. »*
- **Diagnostic linguistique** : Le scripteur repère la préposition *de* introduisant le complément (*des irrégularités* = *de les irrégularités*) ; il classe hâtivement le verbe parmi les intransitifs à rection indirecte et conclut à l'invariabilité comme pour *se complaire dans*.
- **Réfutation et règle violée** : *S'apercevoir de* relève des verbes à autonomie sémantique radicale. Il est juridiquement et normativement assimilé aux verbes essentiellement pronominaux. Le participe passé ne se soucie d'aucun COD : il s'accorde de plein droit avec le sujet *les observatrices* (féminin pluriel).
- ✅ **Forme académique rétablie** : *« Les observatrices électorales se sont **aperçu-es** des irrégularités dans le dépouillement. »* [Réf. `SRC-GRAM-02`, chap. 17].

### Erreur n° 6 : La confusion syntaxique entre « se souvenir de » (essentiel) et « se rappeler » (accidentel transitif direct)
- ❌ **Énoncé pathologique** : *\*« Les déclarations dont ils se sont rappelés avec émotion. »* (doublé de l'erreur inverse : *\*« les faits qu'ils se sont souvenus »*).
- **Diagnostic linguistique** : Amalgame entre deux verbes de mémoire de valence totalement divergente : *se souvenir* est un verbe essentiellement pronominal à rection prépositionnelle en *de*, tandis que *se rappeler* est un verbe accidentellement pronominal transitif direct (*se rappeler quelque chose*).
- **Réfutation et règle violée** :
  - Avec *se souvenir* : verbe essentiellement pronominal $\rightarrow$ accord systématique avec le sujet (*« la scène dont ils se sont **souvenu-s** »*).
  - Avec *se rappeler* : le pronom *se* est COI (*à soi-même*) et la chose rappelée est un COD direct sans préposition. L'accord ne se fait qu'avec le COD s'il précède (*« les déclarations qu'ils se sont **rappelé-es** »*), et jamais avec un relatif en *dont* ni avec le sujet lorsque le COD suit (*« ils se sont **rappelé** [invariable] leurs promesses »*).
- ✅ **Forme académique rétablie** : *« Les déclarations qu'ils se sont **rappelé-es** »* OU *« Les déclarations dont ils se sont **souvenu-s** »*. [Réf. `SRC-GRAM-01`, § 951 & § 955].

---

## 11. Cas Particuliers et Limites

### 11.1 Le Verbe « S'échapper » : Sens Propre Réfléchi vs Sens Figuré Essentiel
Le verbe *s'échapper* présente une dualité d'accord remarquable selon qu'il s'applique à un être animé ou à une chose abstraite [Réf. `SRC-GRAM-01`, § 951 a] :
1. **Sens physique concret (animé agent)** : Le verbe est accidentellement pronominal réfléchi (*échapper soi-même à une garde*). Le clitique *se* y est COD antéposé $\rightarrow$ accord avec le sujet référent :
   *« Les détenues se sont **échappé-es** de la maison d'arrêt. »*
2. **Sens figuré inanimé (parole, soupir, inadvertance)** : Le verbe devient essentiellement pronominal ou impersonnel. Il signifiait classiquement « échapper au contrôle de quelqu'un ». L'accord se fait avec le sujet :
   *« Des paroles imprudentes se sont **échappé-es** de ses lèvres pendant l'interrogatoire. »*  
   *(Dans l'usage classique et littéraire très soutenu, l'Académie admettait également la conjugaison avec l'auxiliaire être simple : « des paroles lui sont **échappé-es** »).*

### 11.2 « Se douter de » (Essentiel Assimilé) vs « Douter de » (Actif Intransitif)
Ne pas confondre la valence du verbe actif simple et celle du verbe pronominal :
- *Douter de* exprime le scepticisme, l'incrédulité : *« J'ai douté de sa loyauté »* (auxiliaire *avoir*).
- *Se douter de* exprime au contraire le soupçon positif, le pressentiment intuitif : *« Elle s'est **douté-e** de la supercherie »*. Le verbe sous cette forme pronominale jouit d'une autonomie sémantique totale $\rightarrow$ accord systématique du participe avec le sujet *elle*.

### 11.3 « Se prévaloir de » dans la Langue du Droit
Fréquent dans les conclusions judiciaires, *se prévaloir de* signifie « invoquer un droit, tirer vanité ou avantage d'une disposition légale ». Le verbe *\*prévaloir quelqu'un* n'existant pas au sens de conférer un droit, *se prévaloir* fonctionne comme un verbe à rection prépositionnelle autonome :
- *« La requérante s'est **prévalu-e** des stipulations de l'article 8 de la Convention européenne des droits de l'homme. »*  
*(Accord féminin singulier de plein droit avec le sujet la requérante).*

### 11.4 « S'oublier » et « S'imaginer » : Les Frontières Mouvantes
- *S'oublier* :
  - Au sens propre d'omettre sa propre personne : réfléchi avec *se* COD $\rightarrow$ *Elle s'est **oublié-e** pour soigner ses proches*.
  - Au sens de manquer à sa dignité ou commettre un écart de conduite : traité comme un essentiel d'autonomie sémantique $\rightarrow$ *Les oratrices se sont **oublié-es** au cours de la polémique*.
- *S'imaginer* :
  - Verbe transitif direct (*imaginer quelque chose à soi-même*). Le pronom *se* est toujours **COI**.
  - Par conséquent, en présence d'une complétive ou d'un infinitif postposé, le participe reste **invariable** :
    *« Elles se sont **imaginé** [invariable] qu'elles obtiendraient gain de cause. »*

---

## 12. Approfondissement Adapté au Niveau : La Fixation de la Règle de « S'arroger » au Siècle des Lumières

L'émergence de la règle d'invariabilité de *s'arroger* avec COD postposé constitue l'une des pages les plus révélatrices de l'histoire de la grammaire normative française.

### 12.1 L'Hésitation du XVIIe Siècle
Au début du Grand Siècle, les écrivains et les juristes traitaient couramment tous les verbes exclusivement pronominaux sous la même toise d'accord systématique avec le sujet. On trouve ainsi sous la plume d'auteurs classiques irréprochables du XVIIe siècle des accords tels que *« ils se sont arrogés de grands titres »*. À cette époque, l'auxiliaire *être* de surface imposait son automatisme visuel, et l'analyse actancielle fine du pronom clitique n'était pas encore rigoureusement systématisée dans les traités [Réf. `SRC-GRAM-01`, § 955 b].

### 12.2 L'Arbitrage de l'Académie Française (1704 et 1740)
C'est avec les travaux préparatoires des éditions de 1704 et 1740 du *Dictionnaire de l'Académie française* et les remarques de l'abbé Girard (*De la Justesse de la langue françoise*, 1718) que la scission s'opère :
1. Les académiciens observent que dans *s'arroger des droits*, le verbe régit un véritable substantif direct (*des droits*) qui répond à la question « quoi ? ».
2. Si l'on appliquait l'accord avec le sujet, on créerait une contradiction flagrante avec la règle fondamentale établie par l'Académie pour tous les autres verbes transitifs : *un participe ne peut jamais s'accorder avec le sujet lorsqu'un complément d'objet direct est exprimé après lui*.
3. En conséquence, l'Académie décrète que *s'arroger* doit être soustrait au régime des verbes essentiellement pronominaux :
   > *« Quoique ce verbe ne soit d'usage qu'avec le pronom personnel réciproque, néanmoins comme le pronom n'en est pas le régime direct, le participe ne prend ni genre ni nombre lorsque le régime direct suit : "Ils se sont arrogé de grands privilèges" ; mais il prend l'un et l'autre lorsque le régime direct précède : "Les grands privilèges qu'ils se sont arrogés". »* (Académie française, arrêt normatif du 12 mai 1740).

### 12.3 La Réception Philologique chez Beauzée et Littré
Dans l'Encyclopédie de Diderot et d'Alembert, le grammairien Nicolas Beauzée salue cette décision comme le triomphe de la « sémantique syntaxique sur l'analogie superficielle ». Pour Beauzée, maintenir l'accord sujet sur *s'arroger* aurait été une aberration logique équivalant à accorder *elle s'est lavé les mains* sous la forme *\*elle s'est lavée les mains*.

Émile Littré (*Dictionnaire de la langue française*, 1872) confirmera définitivement ce statut : *« S'arroger est le seul verbe de la langue qui, tout en n'existant qu'à la forme réfléchie, n'ait pas son pronom au régime direct ; c'est un pur datif d'attribution, et c'est ce qui règle souverainement son participe. »* [Réf. `SRC-LEX-05`, s.v. « arroger »].

---

## 13. Comparaisons Différentielles

Les trois tableaux synoptiques ci-dessous synthétisent les oppositions fondamentales régissant les formes pronominales :

### Tableau 1 : Verbe Essentiellement Pronominal vs Verbe Accidentellement Pronominal

| Critère d'analyse | Verbe Essentiellement Pronominal | Verbe Accidentellement Pronominal |
| :--- | :--- | :--- |
| **Existence à la voix active simple** | **Impossible** (*\*enfuir, \*abstenir, \*évanouir* n'existent pas). | **Possible et courante** (*laver qqn, blesser qqn, parler à qqn*). |
| **Statut du pronom conjoint *se*** | **Marqueur morphologique de voix soudé**, sans fonction d'objet autonome. | **Actant anaphorique plein**, occupant la fonction de **COD** ou de **COI**. |
| **Règle d'accord du participe passé** | **Accord systématique et immédiat avec le sujet grammatical** (de plein droit). | **Règle de Clément Marot** : accord avec le COD antéposé, sinon invariabilité. |
| **Exemple démonstratif** | *« Elles se sont **souvenu-es** de leur promesse. »* | *« Elles se sont **lavé** les mains. »* vs *« Elles se sont **lavé-es** tout entières. »* |
| **Exception unique** | **« S'arroger »** (seul essentiel régi par la règle du COD). | Aucune exception : stricte application de la transitivité de base. |

### Tableau 2 : Pronominal Passif vs Voix Passive Canonique avec « Être »

| Paramètre structurel | Voix Pronominale Passive | Voix Passive Canonique Analytique |
| :--- | :--- | :--- |
| **Construction morphologique** | Pronom *se* + Auxiliaire *être* + Participe passé. | Auxiliaire *être* (ou *avoir été*) + Participe passé. |
| **Exemple type** | *« Les ordonnances royales se sont **publié-es** ce matin. »* | *« Les ordonnances royales ont **été publié-es** ce matin. »* |
| **Présence du complément d'agent** | **Rarement exprimé**, voire proscrit stylographiquement (*\*par les juges*). | **Fréquemment exprimé** par le syntagme prépositionnel *par / de*. |
| **Nuance sémantique** | Insiste sur l'aboutissement du fait, la spontanéité ou la fatalité institutionnelle. | Insiste sur l'intervention concrète de l'agent opérateur de l'action. |
| **Accord du participe passé** | **Accord systématique en genre et en nombre avec le sujet patient**. | **Accord systématique en genre et en nombre avec le sujet patient**. |

### Tableau 3 : Triptyque Comparatif : « S'arroger » vs « S'attribuer » vs « S'emparer »

| Verbe étudié | Statut morphologique | Statut du pronom *se* | Comportement avec COD postposé | Comportement avec COD antéposé |
| :--- | :--- | :--- | :--- | :--- |
| **S'arroger** | Essentiellement pronominal (forme active *\*arroger* inusitée). | **COI** (« à soi-même »). | **Invariable** : *« Ils se sont **arrogé** des prérogatives. »* | **Accord avec le COD** : *« Les prérogatives qu'ils se sont **arrogé-es**. »* |
| **S'attribuer** | Accidentellement pronominal (actif : *attribuer qqch. à qqn.*). | **COI** (« à soi-même »). | **Invariable** : *« Ils se sont **attribué** des prérogatives. »* | **Accord avec le COD** : *« Les prérogatives qu'ils se sont **attribué-es**. »* |
| **S'emparer de** | Essentiellement pronominal (forme active *\*emparer* inusitée). | Marqueur morphologique soudé. | **Accord avec le sujet** (le complément est un COI en *de*) : *« Ils se sont **emparé-s** des prérogatives. »* | **Accord avec le sujet** : *« Les prérogatives dont ils se sont **emparé-s**. »* |

---

## 14. Exercices Progressifs

### 14.1 Niveau 1 : Accord des Participes Essentiels et Passifs (Guidé — 15 Phrases)
Dans chacune des phrases suivantes, accordez le participe passé entre parenthèses selon les règles du cours :

1. *Dès l'annonce du verdict, les prévenues se sont (évanouir) dans la salle d'audience.*
2. *Ces revues juridiques de droit constitutionnel se sont (vendre) en quelques heures.*
3. *Les ministres plénipotentiaires se sont (abstenir) lors du vote de la résolution.*
4. *Les anciennes forteresses frontalières se sont (rendre) sans opposer de résistance.*
5. *Elles se sont (souvenir) des clauses restrictives inscrites dans le contrat initial.*
6. *Les rumeurs de dissension au sein du gouvernement se sont rapidement (propager).*
7. *Les candidates de l'opposition se sont (désister) en faveur de la doyenne de l'assemblée.*
8. *De nouvelles dispositions fiscales se sont (appliquer) dès le premier jour du trimestre.*
9. *Les conspiratrices se sont (tapir) dans l'ombre pour échapper aux rondes militaires.*
10. *Les clauses du traité de paix se sont (exécuter) sous la surveillance des observateurs.*
11. *Toutes les déléguées syndicales se sont (écrier) pour contester le compte rendu officiel.*
12. *Les archives départementales se sont (considérablement enrichir) de dons privés.*
13. *Elles se sont (repentir) publiquement de leurs déclarations diffamatoires.*
14. *Ces coutumes séculaires se sont (transmettre) fidèlement de génération en génération.*
15. *Les forces d'intervention se sont (déployer) le long de la frontière maritime.*

<details>
<summary><strong>Corrigé officiel du Niveau 1 (cliquer pour dérouler)</strong></summary>

1. *évanoui**es*** (*s'évanouir* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *les prévenues*).
2. *vendu**es*** (sens passif : *ont été vendues* $\rightarrow$ accord féminin pluriel avec le sujet *ces revues juridiques*).
3. *abstenu**s*** (*s'abstenir* est essentiellement pronominal $\rightarrow$ accord masculin pluriel avec le sujet *les ministres*).
4. *rendu**es*** (sens passif : *ont été rendues* $\rightarrow$ accord féminin pluriel avec le sujet *les anciennes forteresses*).
5. *souvenu**es*** (*se souvenir* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *elles*).
6. *propagé**es*** (sens passif : *ont été propagées* $\rightarrow$ accord féminin pluriel avec le sujet *les rumeurs*).
7. *désisté**es*** (*se désister* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *les candidates*).
8. *appliqué**es*** (sens passif : *ont été appliquées* $\rightarrow$ accord féminin pluriel avec le sujet *de nouvelles dispositions*).
9. *tapi**es*** (*se tapir* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *les conspiratrices*).
10. *exécuté**es*** (sens passif : *ont été exécutées* $\rightarrow$ accord féminin pluriel avec le sujet *les clauses*).
11. *écrié**es*** (*s'écrier* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *toutes les déléguées*).
12. *enrichi**es*** (sens passif : *ont été enrichies* $\rightarrow$ accord féminin pluriel avec le sujet *les archives*).
13. *repenti**es*** (*se repentir* est essentiellement pronominal $\rightarrow$ accord féminin pluriel avec le sujet *elles*).
14. *transmi**ses*** (sens passif : *ont été transmises* $\rightarrow$ accord féminin pluriel avec le sujet *ces coutumes*).
15. *déployé**es*** (sens passif / réfléchi d'organisation spatiale $\rightarrow$ accord féminin pluriel avec *les forces d'intervention*).
</details>

---

### 14.2 Niveau 2 : Résolution du Duel d'Accord sur « S'arroger » (Semi-Autonome — 10 Phrases)
Pour chaque phrase construite avec *s'arroger*, justifiez la présence ou l'absence d'accord en explicitant la nature et la position du COD :

1. *Les préfets de région se sont (arroger) des pouvoirs de police exorbitants.*
2. *Les compétences régaliennes que les préfets de région se sont (arroger) ont été contestées.*
3. *Ces dignitaires civils se sont (arroger) le droit de censurer les gazettes officielles.*
4. *Quelle prérogative judiciaire cette cour extraordinaire s'est-elle (arroger) ?*
5. *Les prérogatives financières qu'ils se sont (arroger) dépassaient les limites du mandat.*
6. *La reine régente s'est (arroger) la nomination des évêques du royaume.*
7. *Ces titres nobiliaires illégitimes, ils se les sont (arroger) sous le règne précédent.*
8. *Les commissions d'enquête se sont (arroger) des immunités non prévues par le texte.*
9. *L'autorité morale qu'elle s'est (arroger) lors de la crise a permis de maintenir la paix.*
10. *En l'absence de parlement légitime, le souverain s'est (arroger) la totalité des impôts.*

<details>
<summary><strong>Corrigé officiel du Niveau 2 (cliquer pour dérouler)</strong></summary>

1. *arrogé* (invariable : le COD *des pouvoirs de police exorbitants* est postposé au verbe).
2. *arrogé**es*** (accord au féminin pluriel avec le pronom relatif COD *que*, antéposé, dont l'antécédent est *les compétences régaliennes*).
3. *arrogé* (invariable : le COD *le droit de censurer les gazettes* est postposé).
4. *arrogé**e*** (accord au féminin singulier avec le syntagme interrogatif COD *quelle prérogative judiciaire*, antéposé).
5. *arrogé**es*** (accord au féminin pluriel avec le pronom relatif COD *que*, antéposé, dont l'antécédent est *les prérogatives financières*).
6. *arrogé* (invariable : le COD *la nomination des évêques du royaume* est postposé).
7. *arrogé**s*** (accord au masculin pluriel avec le pronom clitique COD *les*, antéposé, mis pour *ces titres nobiliaires*).
8. *arrogé* (invariable : le COD *des immunités non prévues* est postposé).
9. *arrogé**e*** (accord au féminin singulier avec le pronom relatif COD *que*, antéposé, dont l'antécédent est *l'autorité morale*).
10. *arrogé* (invariable : le COD *la totalité des impôts* est postposé).
</details>

---

### 14.3 Niveau 3 : Analyse et Accord d'un Texte d'Histoire du Droit (50 Mots Exacts)
Rétablissez l'orthographe exacte des participes passés entre crochets dans l'extrait suivant d'histoire des institutions judiciaires de l'Ancien Régime, rigoureusement calibré à **50 mots exacts** selon les normes officielles de l'Imprimerie nationale (`SRC-TYPO-01`) :

> *Quand les cours souveraines se sont [arroger : 1] des compétences fiscales excessives, les ministres se sont émus. Dès que les magistrats se sont [abstenir : 2] de siéger, des ordonnances royales se sont [appliquer : 3] sans délai. Les prérogatives que ces juges s'étaient [arroger : 4] se sont alors [évanouir : 5] sous l'autorité du monarque.*

<details>
<summary><strong>Corrigé officiel et certification du décompte du Niveau 3 (cliquer pour dérouler)</strong></summary>

#### 1. Certification du Décompte Mot à Mot (50 Mots Exacts)
Selon la norme de l'Imprimerie nationale (`SRC-TYPO-01`, p. 143), chaque mot plein et chaque composant séparé par une apostrophe forme une unité typographique autonome (*l'* + *autorité* = 2 mots ; *s'* + *étaient* = 2 mots) :

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Quand | **11** | excessives | **21** | se | **31** | appliquées | **41** | arrogées |
| **2** | les | **12** | les | **22** | sont | **32** | sans | **42** | se |
| **3** | cours | **13** | ministres | **23** | abstenus | **33** | délai | **43** | sont |
| **4** | souveraines | **14** | se | **24** | de | **34** | Les | **44** | alors |
| **5** | se | **15** | sont | **25** | siéger | **35** | prérogatives | **45** | évanouies |
| **6** | sont | **16** | émus | **26** | des | **36** | que | **46** | sous |
| **7** | arrogé | **17** | Dès | **27** | ordonnances | **37** | ces | **47** | l' |
| **8** | des | **18** | que | **28** | royales | **38** | juges | **48** | autorité |
| **9** | compétences | **19** | les | **29** | se | **39** | s' | **49** | du |
| **10** | fiscales | **20** | magistrats | **30** | sont | **40** | étaient | **50** | monarque |

**Bilan arithmétique certifié** : 50 mots exacts.

#### 2. Justification Morphosyntaxique des Cinq Participes :
1. *se sont **arrogé*** : verbe *s'arroger*, le syntagme nominal *des compétences fiscales excessives* est COD placé **après** le participe $\rightarrow$ participe **invariable** en *-é*.
2. *se sont **abstenus*** : verbe essentiellement pronominal (*s'abstenir* n'existe pas à l'actif) $\rightarrow$ accord de plein droit avec le sujet masculin pluriel *les magistrats* (désinence *-us*).
3. *se sont **appliquées*** : verbe pronominal passif (*les ordonnances ont été appliquées*) $\rightarrow$ accord systématique avec le sujet patient féminin pluriel *des ordonnances royales* (désinence *-ées*).
4. *s'étaient **arrogées*** : verbe *s'arroger*, le pronom relatif *que* est COD antéposé, dont l'antécédent est *les prérogatives* (féminin pluriel) $\rightarrow$ accord au féminin pluriel (désinence *-ées*).
5. *se sont alors **évanouies*** : verbe essentiellement pronominal employé au sens abstrait de disparaître $\rightarrow$ accord de plein droit avec le sujet féminin pluriel *les prérogatives* (désinence *-ies*).
</details>

---

## 15. Activité de Correction Raisonnée

### 15.1 Corpus d'Examen (Chronique Parlementaire Fautive)
Un stagiaire en secrétariat général de commission parlementaire a rédigé le compte rendu suivant, truffé de **huit erreurs d'accord** portant sur des verbes pronominaux essentiels, passifs et l'exception de *s'arroger*.

Identifiez les huit fautes, biffez les graphies illicites, rétablissez la forme normée et rédigez un apparat critique de justification pour chacune d'entre elles :

> *« Lors de la session extraordinaire d'hier, les députées de la majorité se sont (1) **abstenu** de voter le projet de loi de finances, tandis que plusieurs dispositions d'allègement fiscal se sont (2) **appliqué** sans l'aval du sénat. Indignées par ce coup de force, les élues de l'opposition se sont (3) **écrié** avec véhémence pour dénoncer les privilèges financiers que les membres du bureau s'étaient (4) **arrogé** au détriment du Trésor. En réplique, les ministres se sont (5) **arrogués** un droit d'arbitrage direct non prévu par la constitution. Plusieurs requêtes syndicales se sont alors (6) **instruit** dans l'urgence, mais deux magistrates du siège se sont (7) **désisté** avant l'audience solennelle. Les contestations se sont finalement (8) **éteint** après la publication des décrets. »*

---

### 15.2 Apparat Critique et Grille de Révision Éditoriale

<details>
<summary><strong>Tableau de correction raisonnée et apparat critique (cliquer pour dérouler)</strong></summary>

| N° | Forme Fautive | Forme Normée Rétablie | Catégorie Grammaticale | Règle Académique et Justification Métalinguistique |
| :---: | :--- | :--- | :--- | :--- |
| **1** | *se sont abstenu* | **se sont abstenues** | Verbe essentiellement pronominal | *S'abstenir* n'existe pas sans le pronom. Le participe passé fait corps avec son sujet grammatical *les députées de la majorité* (féminin pluriel) $\rightarrow$ accord de plein droit en *-es* [SRC-GRAM-01, § 951]. |
| **2** | *se sont appliqué* | **se sont appliquées** | Pronominal passif | Le sujet inanimé patient *plusieurs dispositions d'allègement fiscal* subit le procès (*ont été appliquées*) $\rightarrow$ accord systématique en genre et en nombre avec le sujet féminin pluriel [SRC-NORM-03, p. 50]. |
| **3** | *se sont écrié* | **se sont écriées** | Verbe essentiellement pronominal | *S'écrier* est un verbe exclusivement pronominal. Le clitique *se* n'a aucune autonomie $\rightarrow$ accord obligatoire avec le sujet féminin pluriel *les élues de l'opposition* [SRC-GRAM-05, § 292]. |
| **4** | *s'étaient arrogé* | **s'étaient arrogées** | Exception « s'arroger » (COD antéposé) | Le pronom relatif *que* est COD de *s'arroger*, placé avant le verbe, et renvoie à l'antécédent féminin pluriel *les privilèges financiers* $\rightarrow$ accord obligatoire en *-es* avec le COD antéposé [SRC-GRAM-01, § 955 b]. |
| **5** | *se sont arrogués* | **se sont arrogé** | Exception « s'arroger » (COD postposé) | Le pronom *se* est COI (*à eux-mêmes*). Le syntagme nominal *un droit d'arbitrage direct* est le COD placé **après** le verbe $\rightarrow$ le participe reste strictement **invariable** en *-é* [SRC-GRAM-01, § 955 b]. |
| **6** | *se sont instruit* | **se sont instruites** | Pronominal passif | Les requêtes ont été instruites par les greffiers. Le sujet *plusieurs requêtes syndicales* est féminin pluriel $\rightarrow$ accord de plein droit en *-es* [SRC-GRAM-02, chap. 17]. |
| **7** | *se sont désisté* | **se sont désistées** | Verbe essentiellement pronominal | *Se désister* est intrinsèquement pronominal en procédure juridique $\rightarrow$ accord de plein droit avec le sujet *deux magistrates du siège* (féminin pluriel) en *-es* [SRC-GRAM-01, § 951]. |
| **8** | *se sont éteint* | **se sont éteintes** | Pronominal passif / moyen | Les contestations ont pris fin d'elles-mêmes (procès spontané / passif). Le sujet *les contestations* est féminin pluriel $\rightarrow$ accord obligatoire en *-es* [SRC-NORM-03, p. 50]. |

</details>

---

## 16. Mise en Pratique dans une Production Réelle

### 16.1 Consigne Opérationnelle
Rédigez un paragraphe officiel de **compte rendu de contentieux constitutionnel** calibré rigoureusement à **soixante mots exacts** (`60 mots`) selon le standard officiel de décompte de l'Imprimerie nationale (`SRC-TYPO-01`).

Le texte doit satisfaire sans dérogation aux quatre contraintes stylistiques et normatives suivantes :
1. Intégrer au moins **deux verbes essentiellement pronominaux** correctement accordés.
2. Intégrer au moins **un verbe pronominal passif** correctement accordé.
3. Intégrer **un emploi exemplaire du verbe « s'arroger »**, justifié par sa construction actancielle.
4. Fournir le tableau de preuve arithmétique mot à mot de 1 à 60 unités typographiques.

---

### 16.2 Modèle Canonique Validé (60 Mots Exacts)

> *« Saisie d'un recours contentieux, la haute juridiction a censuré les prérogatives exorbitantes que les commissaires parlementaires s'étaient arrogées sans fondement légal. Bien que certains requérants se soient désistés tardivement, les requêtes se sont instruites. Deux sénateurs dissidents se sont abstenus, tandis que l'annulation définitive des actes litigieux s'est confirmée solennellement dans l'arrêt motivé des magistrats. »*

---

### 16.3 Tableau de Certification Arithmétique (60 Mots selon `SRC-TYPO-01`)

| N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot | N° | Mot |
| :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :---: | :--- |
| **1** | Saisie | **11** | les | **21** | sans | **31** | tardivement | **41** | sont | **51** | s' |
| **2** | d' | **12** | prérogatives | **22** | fondement | **32** | les | **42** | abstenus | **52** | est |
| **3** | un | **13** | exorbitantes | **23** | légal | **33** | requêtes | **43** | tandis | **53** | confirmée |
| **4** | recours | **14** | que | **24** | Bien | **34** | se | **44** | que | **54** | solennellement |
| **5** | contentieux | **15** | les | **25** | que | **35** | sont | **45** | l' | **55** | dans |
| **6** | la | **16** | commissaires | **26** | certains | **36** | instruites | **46** | annulation | **56** | l' |
| **7** | haute | **17** | parlementaires | **27** | requérants | **37** | Deux | **47** | définitive | **57** | arrêt |
| **8** | juridiction | **18** | s' | **28** | se | **38** | sénateurs | **48** | des | **58** | motivé |
| **9** | a | **19** | étaient | **29** | soient | **39** | dissidents | **49** | actes | **59** | des |
| **10** | censuré | **20** | arrogées | **30** | désistés | **40** | se | **50** | litigieux | **60** | magistrats |

$$\text{Total arithmétique certifié} = 60\text{ mots exacts.}$$

---

### 16.4 Justification Analytique des Formes Pronominales Insérées

| Verbe du texte | Catégorie précise | Sujet ou COD d'accord | Justification formelle |
| :--- | :--- | :--- | :--- |
| *s'étaient **arrogées*** (mots 18-20) | Exception « s'arroger » | *que* (COD antéposé, réf. *les prérogatives*, fém. plur.) | Le pronom relatif *que* est COD placé avant le verbe ; le participe passé prend les marques du féminin pluriel *-ées*. |
| *se soient **désistés*** (mots 28-30) | Essentiellement pronominal | *certains requérants* (sujet, masc. plur.) | *Se désister* n'existe qu'à la forme pronominale $\rightarrow$ accord de plein droit avec le sujet masculin pluriel en *-és*. |
| *se sont **instruites*** (mots 34-36) | Pronominal passif | *les requêtes* (sujet patient, fém. plur.) | Les requêtes sont instruites par la cour $\rightarrow$ accord systématique avec le sujet patient féminin pluriel en *-es*. |
| *se sont **abstenus*** (mots 40-42) | Essentiellement pronominal | *Deux sénateurs dissidents* (sujet, masc. plur.) | *S'abstenir* est exclusivement pronominal $\rightarrow$ accord de plein droit avec le sujet masculin pluriel en *-us*. |
| *s'est **confirmée*** (mots 51-53) | Pronominal passif | *l'annulation définitive* (sujet patient, fém. sing.) | L'annulation est confirmée dans le texte $\rightarrow$ accord régulier avec le sujet patient féminin singulier en *-ée*. |

---

## 17. Résumé Structuré : L'Organigramme des Essentiels et le Coffre-Fort de « S'arroger »

```mermaid
flowchart TD
    DEPART["<b>FORME VERBALE PRONOMINALE PASSÉE</b>"] --> Q1{"Le verbe est-il<br/><b>essentiellement pronominal</b>,<br/>à autonomie sémantique,<br/>ou à <b>sens passif</b> ?"}

    Q1 -- NON --> ACCIDENTEL["Se reporter à CHP-303-03 & CHP-303-04<br/>(Verbes accidentels & 10 intransitifs)"]

    Q1 -- OUI --> Q2{"Est-ce le verbe<br/><b>« S'ARROGER »</b> ?"}

    Q2 -- NON --> ACCORD_SUJET["<b>ACCORD DE PLEIN DROIT AVEC LE SUJET</b><br/>• Essentiels : <i>Elles se sont enfuies / souvenues</i><br/>• Sens passif : <i>Les lois se sont appliquées</i><br/>• Autonomie : <i>Elles se sont aperçues de l'erreur</i>"]

    Q2 -- OUI --> ARROGER["<b>LE COFFRE-FORT DE S'ARROGER</b><br/>(se = COI dative)<br/>Recherche du COD réel"]

    ARROGER --> Q3{"Où se trouve le <b>COD</b> ?"}

    Q3 -- POSTPOSÉ (après) --> INVAR["<b>INVARIABILITÉ ABSOLUE</b><br/><i>Ils se sont <b>arrogé</b> des privilèges.</i><br/>(aucun accord avec le sujet !)"]
    Q3 -- ANTÉPOSÉ (avant) --> ACC_COD["<b>ACCORD AVEC CE COD ANTÉPOSÉ</b><br/><i>Les privilèges qu'ils se sont <b>arrogés</b>.</i>"]
    Q3 -- ABSENT (impossible) --> THEORIE["(Construction agrammaticale sans COD)"]

    classDef depart stroke:#1e3a8a,stroke-width:2px;
    classDef test stroke:#b45309,stroke-width:2px;
    classDef accord stroke:#15803d,stroke-width:3px;
    classDef exception stroke:#b91c1c,stroke-width:3px;
    classDef renvoi stroke:#4b5563,stroke-width:2px;

    class DEPART depart;
    class Q1,Q2,Q3 test;
    class ACCORD_SUJET,ACC_COD accord;
    class INVAR,ARROGER exception;
    class ACCIDENTEL,THEORIE renvoi;
```

### La Formule Mnémotechnique en Trois Préceptes
1. **L'Essentiel et le Passif épousent le Sujet** : Si le verbe ne vit pas sans son pronom (*s'enfuir*) ou si la chose subit l'action (*le livre s'est vendu*), oubliez le COD et accordez les yeux fermés avec le sujet grammatical.
2. **L'Exception d'Arrogance déroge au Sang Royal** : *S'arroger* usurpe des droits mais obéit au COD. Jamais d'accord avec le sujet !
3. **Le COD décide du sort d'Arroger** : S'il est derrière, *arrogé* reste de pierre (invariable en *-é*) ; s'il passe devant, *arrogé* prend ses couleurs (accord en genre et nombre).

---

## 18. Questions de Rappel Actif (Active Recall)

Testez votre niveau de rétention sans consulter le cours avant de dévoiler les réponses :

1. **Question 1** : Pourquoi le verbe *se souvenir* s'accorde-t-il obligatoirement avec le sujet grammatical au passé composé, alors qu'il est suivi d'un complément introduit par *de* ?
2. **Question 2** : Quelle est la fonction syntaxique exacte attribuée au clitique *se* dans le verbe *s'arroger* par l'Académie française ?
3. **Question 3** : Dans la phrase *« Les décisions se sont prises à l'unanimité »*, quel test formel permet de prouver qu'il s'agit d'un pronominal passif et non d'un réfléchi ?
4. **Question 4** : Quelle est la graphie exacte du participe passé dans *« La prérogative qu'ils se sont (arroger) »* et dans *« Ils se sont (arroger) la prérogative »* ?
5. **Question 5** : Pourquoi la phrase *\*« Elles ne se sont pas aperçu du piège »* constitue-t-elle une faute d'orthographe grammaticale ?
6. **Question 6** : Pourquoi les grammairiens du XVIIIe siècle ont-ils refusé d'accorder *s'arroger* avec son sujet ?

<details>
<summary><strong>Réponses certifiées aux questions de rappel actif (cliquer pour dérouler)</strong></summary>

1. **Réponse 1** : Parce que *se souvenir* est un **verbe essentiellement pronominal**. Le pronom *se* n'est pas un actant d'objet autonome (il n'est ni COD ni COI). Le participe fait corps avec le sujet et s'accorde de plein droit avec lui, exactement comme avec le véritable auxiliaire *être*.
2. **Réponse 2** : Le pronom *se* y est analysé comme un **Complément d'Objet Indirect (COI)** de destination dative (« à soi-même »).
3. **Réponse 3** : Le test de la **commutation passive canonique avec l'auxiliaire être** : on peut transformer sans altérer le sens en *« Les décisions ont été prises à l'unanimité »*. De plus, le sujet *les décisions* est un inanimé patient incapable d'agentivité réflexive.
4. **Réponse 4** :
   - *« La prérogative qu'ils se sont **arrogée** »* (accord féminin singulier avec le COD antéposé *que*, mis pour *la prérogative*).
   - *« Ils se sont **arrogé** la prérogative »* (invariable en *-é* car le COD *la prérogative* est postposé).
5. **Réponse 5** : Parce que *s'apercevoir de* est un verbe à **autonomie sémantique radicale**, entièrement assimilé par la norme aux verbes essentiellement pronominaux. Son participe s'accorde systématiquement avec le sujet *elles* $\rightarrow$ *aperçues*.
6. **Réponse 6** : Pour éviter une contradiction logique majeure avec la règle des participes : si l'on accordait avec le sujet en présence d'un COD postposé, on violerait le principe selon lequel aucun participe transitif direct ne s'accorde quand le COD est placé après lui.
</details>

---

## 19. Mini-Évaluation Sommative (30 Minutes — Notée sur 20 Points)

> **Consignes officielles de passation** : Durée maximale : 30 minutes. Aucun document, calculatrice ou dictionnaire autorisé.  
> **Note éliminatoire** : Tout score inférieur à **14/20** invalide le seuil d'autonomie (Palier L3) et impose une séance de remédiation de 2 heures.  
> **Barème pénal officiel** : Tout accord erroné sur le verbe *s'arroger* (accord avec le sujet en présence d'un COD postposé) entraîne un **retrait automatique de 4 points** sur la note globale de l'épreuve.

---

### Sujet de l'Épreuve

#### Partie I : Discrimination Catégorielle et Accord Immédiat (5 points — 1 pt par item)
Accordez le participe passé entre parenthèses et indiquez sa catégorie parmi : *Essentiellement pronominal*, *Sens passif*, *Autonomie sémantique* :
1. *Les eaux de la crue se sont (écouler) lentement à travers les plaines alluviales.*
2. *Ces revues clandestines se sont (distribuer) sous le manteau pendant l'occupation.*
3. *Les conspiratrices se sont (évanouir) dans la foule avant l'arrivée de la garde.*
4. *Les plaignantes se sont rapidement (aviser) de la supercherie de l'escroc.*
5. *Des barricades improvisées se sont (ériger) à chaque carrefour du quartier latin.*

#### Partie II : Le Laboratoire d'Arrogance (6 points — 1,5 pt par item)
Rétablissez l'orthographe exacte du participe passé de *s'arroger* et justifiez formellement par la présence et la position du COD :
1. *Ces tribunaux militaires d'exception se sont (arroger) des compétences extrajudiciaires.*
2. *Les pouvoirs quasi dictatoriaux que le consul s'est (arroger) lors du coup d'État.*
3. *La direction générale s'est-elle (arroger) l'exclusivité des recrutements ?*
4. *Ces facilités de caisse, les directeurs régionaux se les sont (arroger) sans notification.*

#### Partie III : Chirurgie Orthographique et Analyse Critique (4 points — 2 pts par phrase)
Identifiez la faute d'accord, réécrivez la phrase selon le bon usage et rédigez la justification grammaticale :
1. *« Dépassées par les événements, les déléguées syndicales se sont abstenu de signer le protocole d'accord. »*
2. *« Les deux chambres du congrès se sont arrogées un droit de veto suspensif sur les décrets présidentiels. »*

#### Partie IV : Analyse de Cas Limite et Rédaction Motivée (5 points)
Rédigez une consultation juridique de **35 à 40 mots exacts** résolvant le litige suivant :  
*« Un ministre a déclaré dans une interview : "Mes services se sont arrogés cette compétence parce qu'elle s'est imposée à nous." »*  
Corrigez la faute commise par le ministre, maintenez la tournure correcte et justifiez la différence de traitement entre les deux formes verbales.

---

### Corrigé Officiel et Barème Détaillé

<details>
<summary><strong>Barème officiel et corrigé de la mini-évaluation (cliquer pour dérouler)</strong></summary>

#### Partie I : Discrimination et Accord (5 points — 1 pt par item)
1. *écoulé**es*** (0,5 pt). Catégorie : **Sens passif / réfléchi spontané** (0,5 pt).
2. *distribué**es*** (0,5 pt). Catégorie : **Sens passif** (*ont été distribuées*) (0,5 pt).
3. *évanoui**es*** (0,5 pt). Catégorie : **Essentiellement pronominal** (0,5 pt).
4. *avisé**es*** (0,5 pt). Catégorie : **Autonomie sémantique radicale** (0,5 pt).
5. *érigé**es*** (0,5 pt). Catégorie : **Sens passif** (*ont été érigées*) (0,5 pt).

#### Partie II : Le Laboratoire d'Arrogance (6 points — 1,5 pt par item)
1. *arrogé* (0,75 pt). Justification : Le COD *des compétences extrajudiciaires* est placé **après** le verbe $\rightarrow$ invariabilité absolue (0,75 pt). *(Pénalité de -4 pts si accord fautif \*arrogés).*
2. *arrogé**s*** (0,75 pt). Justification : Le pronom relatif *que* est COD antéposé, référant à *les pouvoirs quasi dictatoriaux* (masculin pluriel) $\rightarrow$ accord en *-és* (0,75 pt).
3. *arrogé* (0,75 pt). Justification : Le COD *l'exclusivité des recrutements* est placé **après** le verbe $\rightarrow$ invariabilité (0,75 pt).
4. *arrogé**es*** (0,75 pt). Justification : Le pronom personnel *les* est COD antéposé, référant à *ces facilités de caisse* (féminin pluriel) $\rightarrow$ accord en *-ées* (0,75 pt).

#### Partie III : Chirurgie Orthographique (4 points — 2 pts par item)
1. - Diagnostic : Omission d'accord sur verbe essentiellement pronominal (*s'abstenir*) (0,5 pt).  
   - Rectification : *« [...] les déléguées syndicales se sont **abstenues** de signer [...] »* (0,5 pt).  
   - Justification : Le verbe est exclusivement pronominal ; le participe s'accorde obligatoirement de plein droit avec le sujet féminin pluriel (1 pt).
2. - Diagnostic : Accord fautif de *s'arroger* avec le sujet (solécisme d'arrogance) (0,5 pt).  
   - Rectification : *« Les deux chambres du congrès se sont **arrogé** un droit de veto [...] »* (0,5 pt).  
   - Justification : Le pronom *se* est COI (« à elles-mêmes ») et le COD *un droit de veto* est postposé $\rightarrow$ invariabilité requise (1 pt).

#### Partie IV : Consultation Motivée (5 points)
- **Modèle de consultation rédigée (38 mots)** :  
  *« Le ministre a commis un solécisme : il fallait dire que ses services se sont **arrogé** cette compétence (COD postposé invariable), tandis que le verbe passif **s'est imposée** s'accorde légitimement avec le sujet grammatical féminin. »*  
  *(Décompte typographique certifié : 38 mots).*
- **Barème** :
  - Correction de *se sont arrogé* sans accord : 2 pts.
  - Maintien justifié de l'accord sur *s'est imposée* : 1 pt.
  - Explicitation théorique de la distinction (COD postposé vs accord sujet de plein droit) : 2 pts.
</details>

---

## 20. Critères Observables de Maîtrise (Palier L3 Autonomie)

La validation de ce chapitre atteste l'acquisition opérationnelle du palier **L3 (Autonomie)** pour les compétences [`FR-ORTHO-004`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-ortho-004-résolution-des-accords-des-verbes-pronominaux), [`FR-SYNTAX-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-syntax-001-analyse-fonctionnelle-et-délimitation-de-la-phrase-simple) et [`FR-INT-001`](file:///f:/Formation/world-class-french/02-competency-framework/competency-framework.md#fr-int-001-concevoir-et-rédiger-un-texte-argumentatif-complexe) :

| Code Indicateur | Compétence Associée | Comportement Observable en Situation Autonome | Seuil d'Excellence Requis |
| :---: | :---: | :--- | :---: |
| **IND-303-01** | `FR-ORTHO-004` (**L3**) | **Accord immédiat des essentiels et passifs** : L'apprenant accorde sans calcul superflu de COD tout participe de verbe intrinsèquement pronominal ou passif avec le sujet grammatical. | **100 % d'accords corrects** sur batterie de 20 phrases |
| **IND-303-02** | `FR-ORTHO-004` (**L3**) | **Résolution infaillible de « s'arroger »** : Face au verbe *s'arroger*, l'apprenant applique l'invariabilité avec COD postposé et l'accord en genre et nombre avec le COD antéposé. | **Zéro faute éliminatoire** sur 10 occurrences consécutives |
| **IND-303-03** | `FR-SYNTAX-001` (**L3**) | **Analyse actancielle du clitique conjoint** : L'apprenant démontre formellement pourquoi *se* est COI dans *s'arroger* et pur marqueur de voix dans *s'évanouir* ou *se vendre*. | **100 % d'assignations fonctionnelles exactes** |
| **IND-303-04** | `FR-INT-001` (**L3**) | **Calibrage textuel et fidélité stylistique** : L'apprenant produit des paragraphes juridiques complexes respectant un gabarit métrique exact au mot près sans faute d'accord. | **Tolérance arithmétique 0 mot** / Zéro faute d'accord |

---

## 21. Sources et Lectures Complémentaires

Conformément à la politique d'intégrité bibliographique du cursus World-Class French ([`07-resources/source-registry.md`](file:///f:/Formation/world-class-french/07-resources/source-registry.md)), toutes les règles énoncées dans ce chapitre reposent sur les traités académiques de référence suivants :

1. **[`SRC-GRAM-01`] Grevisse, Maurice & Goosse, André (2016)**. *Le Bon Usage : Grammaire française* (16e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 951** : Règle générale d'accord des verbes essentiellement pronominaux et à sens passif (accord de plein droit avec le sujet grammatical).
   - **§ 951 b** : Verbes pronominaux à autonomie sémantique radicale (*s'apercevoir de, s'aviser de, se douter de*).
   - **§ 955 b** : Monographie intégrale de l'exception de *s'arroger*, analyse historique du pronom COI et règles d'accord avec le COD.
2. **[`SRC-GRAM-02`] Riegel, Martin, Pellat, Jean-Christophe & Rioul, René (2016/2021)**. *Grammaire méthodique du français*. Paris : Presses Universitaires de France (PUF), coll. « Quadrige ».
   - **Chapitre 17 (*La voix pronominale*)** : Théorie linguistique de la diathèse moyenne, décausativisation, typologie des verbes pronominaux et statut actanciel des pronoms conjoints.
3. **[`SRC-NORM-03`] Ministère de l'Éducation nationale (2020)**. *Terminologie grammaticale*. Paris : Réseau Canopé / Éduscol.
   - **Pages 48 à 51 (*Les constructions pronominales et les accords du participe*)** : Nomenclature officielle des verbes essentiellement pronominaux et pronominaux passifs.
4. **[`SRC-TYPO-01`] Imprimerie nationale (2002/2014)**. *Lexique des règles typographiques en usage à l'Imprimerie nationale*. Paris : Imprimerie nationale.
   - **Pages 142 à 144 (*Ponctuation et comptage typographique*)** : Règles de segmentation et protocole officiel de calcul des mots avec élisions et traits d'union.
5. **[`SRC-GRAM-05`] Grevisse, Maurice (2009)**. *Le Petit Grevisse : Grammaire française* (32e éd.). Bruxelles : De Boeck Supérieur.
   - **§ 292-294** : Synthèse pédagogique des accords des participes pronominaux et encadré d'alerte sur *s'arroger*.

---

## Annexe : Classification Pédagogique et Traçabilité du Contenu

Conformément aux directives de gouvernance ([`00-governance/chapter-writing-guidelines.md`](file:///f:/Formation/world-class-french/00-governance/chapter-writing-guidelines.md)), le tableau ci-dessous explicite la répartition didactique des notions traitées et différées :

| Étiquette didactique | Contenu grammatical / Notion syntaxique | Justification didactique & Destination précise |
| :---: | :--- | :--- |
| **CORE-NOW** | • Accord de plein droit des verbes intrinsèquement pronominaux (*s'enfuir, se souvenir*).<br/>• Accord de plein droit des verbes à autonomie sémantique radicale (*s'apercevoir de, s'aviser de*).<br/>• Accord systématique des pronominaux passifs avec le sujet inanimé patient.<br/>• Règle intégrale de l'exception unique de *s'arroger* (invariable si COD postposé, accord si COD antéposé). | Cœur opérationnel du chapitre `CHP-303-02`. Socle indispensable pour débloquer l'arbitrage des pronominaux. |
| **INTRODUCTION-NOW** | • Présentation liminaire de la distinction entre pronom COD et pronom COI pour préparer l'étude des verbes accidentellement pronominaux.<br/>• Première approche du rôle de la diathèse moyenne dans l'évacuation de l'agent. | Sensibiliser l'apprenant à la mécanique actancielle avant les cas complexes du chapitre suivant. |
| **DEFER** | • Traitement exhaustif des verbes accidentellement pronominaux réfléchis et réciproques (*se laver, se parler*). | **Reporté à [`MOD-303` — Chapitre 3](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-3--verbes-accidentellement-pronominaux-réfléchis-et-réciproques)**. |
| **DEFER** | • La liste fermée des 10 verbes intransitifs invariables (*se succéder, se plaire, se nuire...*). | **Reporté à [`MOD-303` — Chapitre 4](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-4--la-liste-fermée-des-participes-intransitifs-invariably-invariables)**. |
| **DEFER** | • Morphologie et pluriel des noms composés d'usage courant et rectifications de 1990. | **Reporté à [`MOD-303` — Chapitre 5](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-5--pluriel-des-noms-composés-et-pièges-morphologiques)**. |
| **DEFER** | • L'arbre de décision unifié en 4 questions et la fiche d'arbitrage de synthèse. | **Reporté à [`MOD-303` — Chapitre 6](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-3/mod-303-accords-verbes-pronominaux.md#chapitre-6--synthèse-algorithmique-et-protocole-darbitrage)**. |
| **DEFER** | • Cas limites du participe passé suivi d'un infinitif (*faire, laisser*, verbes de perception). | **Reporté à [`MOD-401`](file:///f:/Formation/world-class-french/03-curriculum/year-2/semester-4/mod-401-pragmatique-accords-limites-rectifications-1990.md)** (*S4 — Accords limites et rectifications de 1990*). |
| **MOVE** | • Stylistique de la voix passive dans la grande période oratoire de Bossuet ou Chateaubriand. | **Rattaché à [`MOD-501`](file:///f:/Formation/world-class-french/03-curriculum/year-3/semester-5/mod-501-macro-syntaxe-periode-oratoire-cadences.md)** (*Macro-syntaxe et Période Oratoire*). |
| **OPTIONAL-ADVANCED** | • Histoire de la fixation de la règle de *s'arroger* au XVIIIe siècle et controverses académiques (Girard, Beauzée, Littré). | Section 12 du présent chapitre, destinée aux étudiants préparant les concours d'agrégation et de la magistrature. |
| **REMOVE** | • Les emplois archaïques du participe de *s'arroger* accordé avec le sujet au XVIe et au début du XVIIe siècle. | Écarté du cursus contemporain pour préserver l'intégrité de la norme prescriptive moderne (sera abordé en histoire de la langue en `MOD-601`). |
