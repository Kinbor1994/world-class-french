# -*- coding: utf-8 -*-
"""
curriculum_palier2.py
Module complet pour le Palier 2 : Découverte & Survie (Niveau CP–CE1 / A1).
Conforme au CECRL (Niveau A1) et aux programmes officiels de cycle 2 (CP–CE1).

Structure en 4 modules thématiques et 16 chapitres progressifs :
- Module MOD-002 : Morphologie du Nom & du Groupe Nominal (genre, nombre, articles, adjectifs)
- Module MOD-006 : Les 4 Verbes Piliers au Présent (être, avoir, aller, faire et verbes en -er)
- Module MOD-007 : La Phrase Simple, Négation, Interrogation & Prépositions
- Module MOD-008 : Actes de Parole & Situations Pratiques de Survie A1
"""

def get_palier_2():
    """Génère les 4 modules, 16 chapitres et les exercices interactifs du Palier 2 (CP-CE1 / A1)."""

    modules = []
    srs_cards = []

    # =========================================================================
    # MODULE MOD-002 : Morphologie du Nom & du Groupe Nominal
    # =========================================================================
    mod_002 = {
        "id": "MOD-002",
        "stage": 2,
        "title": "Le Groupe Nominal — Genre, Nombre & Déterminants",
        "description": "Apprivoisez le genre (masculin / féminin), les articles définis et indéfinis (un/une, le/la), le pluriel régulier (-s) et les premiers adjectifs.",
        "chapters": [
            # CHP-002-01 : Un ou Une ?
            {
                "id": "CHP-002-01",
                "moduleId": "MOD-002",
                "stage": 2,
                "title": "Le Masculin et le Féminin : Un ou Une ?",
                "summary": "Découvrez le genre des noms en français sans angoisse grâce aux petits mots magiques : un (masculin) et une (féminin).",
                "rules": [
                    {
                        "id": "FR-A1-001",
                        "title": "Le genre grammatical",
                        "statement": "En français, chaque nom a un genre : masculin (un livre, un arbre, un chat) ou féminin (une table, une maison, une pomme).",
                        "formula": "Masculin = UN | Féminin = UNE"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-01-01",
                        "chapterId": "CHP-002-01",
                        "title": "Choisir Un ou Une",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-01-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-001",
                                "prompt": "Complète correctement la phrase : 'C'est ___ maison accueillante.'",
                                "audioText": "C'est une maison accueillante.",
                                "data": {
                                    "question": "Quel déterminant convient pour 'maison' ?",
                                    "options": [
                                        {"id": "o1", "text": "une", "isCorrect": True, "feedback": "Exact ! Maison est féminin : une maison, la maison."},
                                        {"id": "o2", "text": "un", "isCorrect": False, "feedback": "Non, 'maison' n'est pas masculin. On dit 'la maison'."},
                                        {"id": "o3", "text": "des", "isCorrect": False, "feedback": "'Des' s'utilise pour plusieurs objets au pluriel."}
                                    ],
                                    "explanation": "Le mot 'maison' est du genre féminin, il prend donc l'article indéfini 'une'."
                                }
                            },
                            {
                                "id": "EX-002-01-02",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-001",
                                "prompt": "Complète : 'J'ai acheté ___ nouveau livre de français.'",
                                "audioText": "J'ai acheté un nouveau livre.",
                                "data": {
                                    "question": "Quel article indéfini convient pour 'livre' ?",
                                    "options": [
                                        {"id": "o1", "text": "un", "isCorrect": True, "feedback": "Parfait ! Livre est masculin : un livre, le livre."},
                                        {"id": "o2", "text": "une", "isCorrect": False, "feedback": "Non, 'livre' n'est pas féminin."},
                                        {"id": "o3", "text": "de la", "isCorrect": False, "feedback": "Incorrect dans ce contexte."}
                                    ],
                                    "explanation": "Le mot 'livre' est un nom masculin singulier : 'un livre'."
                                }
                            },
                            {
                                "id": "EX-002-01-03",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-001",
                                "prompt": "Chasse à l'erreur : repère le mot incorrect dans cette phrase :",
                                "audioText": "J'ai vu une arbre immense dans le parc.",
                                "data": {
                                    "sentence": "J'ai vu une arbre immense dans le parc.",
                                    "words": [
                                        {"text": "J'ai", "isError": False},
                                        {"text": "vu", "isError": False},
                                        {"text": "une", "isError": True, "correction": "un"},
                                        {"text": "arbre", "isError": False},
                                        {"text": "immense", "isError": False},
                                        {"text": "dans", "isError": False},
                                        {"text": "le", "isError": False},
                                        {"text": "parc.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Le mot 'arbre' est masculin : on dit 'un arbre' et non 'une arbre'.",
                                    "mnemonic": "Pensez à 'l'arbre généalogique', un nom masculin !"
                                }
                            },
                            {
                                "id": "EX-002-01-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-001",
                                "prompt": "Assemble les mots pour former la proposition : 'C'est un beau chat.'",
                                "audioText": "C'est un beau chat.",
                                "ipa": "/sɛ œ̃ bo ʃa/",
                                "data": {
                                    "targetPhrase": "C'est un beau chat.",
                                    "targetPhonemes": "C'est + un + beau + chat.",
                                    "availableBricks": ["beau", "C'est", "chat.", "un"],
                                    "correctSequence": ["C'est", "un", "beau", "chat."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-02 : Le, La, L', Les
            {
                "id": "CHP-002-02",
                "moduleId": "MOD-002",
                "stage": 2,
                "title": "Les Articles Définis : Le, La, L' et Les",
                "summary": "Désignez des objets précis : 'le' pour le masculin, 'la' pour le féminin, 'l'' devant voyelle, et 'les' pour le pluriel.",
                "rules": [
                    {
                        "id": "FR-A1-002",
                        "title": "L'élision devant voyelle : L'",
                        "statement": "Quand un nom commence par une voyelle (a, e, i, o, u, y) ou un h muet, 'le' et 'la' perdent leur voyelle et deviennent L' pour faciliter la liaison fluide.",
                        "formula": "Le + arbre = L'arbre · La + île = L'île · Le + homme = L'homme"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-02-01",
                        "chapterId": "CHP-002-02",
                        "title": "Maîtriser Le, La et L'",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-02-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-002",
                                "prompt": "Comment écrit-on correctement 'Le oiseau' ?",
                                "audioText": "L'oiseau chante au soleil.",
                                "data": {
                                    "question": "Devant 'oiseau' (qui commence par une voyelle), on écrit :",
                                    "options": [
                                        {"id": "o1", "text": "L'oiseau (avec élision)", "isCorrect": True, "feedback": "Exact ! Devant voyelle, 'le' devient 'l''."},
                                        {"id": "o2", "text": "Le oiseau (sans changement)", "isCorrect": False, "feedback": "Non, deux voyelles qui se heurtent créent un hiatus interdit ici."},
                                        {"id": "o3", "text": "La oiseau", "isCorrect": False, "feedback": "Non, oiseau est masculin et requiert l'élision."}
                                    ],
                                    "explanation": "L'élision est obligatoire en français devant une voyelle : l'oiseau (/lwa.zo/)."
                                }
                            },
                            {
                                "id": "EX-002-02-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-002",
                                "prompt": "Chasse à l'erreur : trouve la faute dans cette phrase :",
                                "audioText": "Regarde le étoile brillante dans le ciel.",
                                "data": {
                                    "sentence": "Regarde le étoile brillante dans le ciel.",
                                    "words": [
                                        {"text": "Regarde", "isError": False},
                                        {"text": "le", "isError": True, "correction": "l'"},
                                        {"text": "étoile", "isError": False},
                                        {"text": "brillante", "isError": False},
                                        {"text": "dans", "isError": False},
                                        {"text": "le", "isError": False},
                                        {"text": "ciel.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Devant 'étoile', il faut faire l'élision : 'l'étoile'.",
                                    "mnemonic": "Deux voyelles ne se disputent pas : la première s'efface devant l'apostrophe !"
                                }
                            },
                            {
                                "id": "EX-002-02-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-002",
                                "prompt": "Assemble les mots pour former : 'La lune éclaire la nuit.'",
                                "audioText": "La lune éclaire la nuit.",
                                "ipa": "/la lyn e.klɛʁ la nɥi/",
                                "data": {
                                    "targetPhrase": "La lune éclaire la nuit.",
                                    "targetPhonemes": "La + lune + éclaire + la + nuit.",
                                    "availableBricks": ["éclaire", "La", "la", "lune", "nuit."],
                                    "correctSequence": ["La", "lune", "éclaire", "la", "nuit."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-03 : Le Pluriel Régulier (-s)
            {
                "id": "CHP-002-03",
                "moduleId": "MOD-002",
                "stage": 2,
                "title": "Le Pluriel Régulier : Ajouter un -S Silencieux",
                "summary": "Pour passer d'un objet à plusieurs, la règle d'or est simple : ajoutez un -S muet au nom et changez l'article en 'des' ou 'les'.",
                "rules": [
                    {
                        "id": "FR-A1-003",
                        "title": "La marque du pluriel",
                        "statement": "Au pluriel, les noms prennent généralement un -S final à l'écrit. Ce -S est silencieux à l'oral, mais l'article 'les' ou 'des' change de prononciation.",
                        "formula": "Un chat → Des chats · La pomme → Les pommes"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-03-01",
                        "chapterId": "CHP-002-03",
                        "title": "Transformer au Pluriel",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-03-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-003",
                                "prompt": "Quel est le pluriel correct de 'un ami' ?",
                                "audioText": "Des amis fidèles.",
                                "data": {
                                    "question": "Le pluriel de 'un ami' s'écrit :",
                                    "options": [
                                        {"id": "o1", "text": "des amis (avec un s final)", "isCorrect": True, "feedback": "Bravo ! 'Un' devient 'des' et 'ami' prend un s."},
                                        {"id": "o2", "text": "des ami (sans s)", "isCorrect": False, "feedback": "Attention, au pluriel la marque -s est obligatoire à l'écrit."},
                                        {"id": "o3", "text": "les amies", "isCorrect": False, "feedback": "Non, cela changerait le genre en féminin."}
                                    ],
                                    "explanation": "Au pluriel régulier, on ajoute un -s silencieux : un ami → des amis."
                                }
                            },
                            {
                                "id": "EX-002-03-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-003",
                                "prompt": "Chasse à l'erreur : clique sur le mot auquel il manque la marque du pluriel :",
                                "audioText": "Les enfants mangent des pomme sucrées.",
                                "data": {
                                    "sentence": "Les enfants mangent des pomme sucrées.",
                                    "words": [
                                        {"text": "Les", "isError": False},
                                        {"text": "enfants", "isError": False},
                                        {"text": "mangent", "isError": False},
                                        {"text": "des", "isError": False},
                                        {"text": "pomme", "isError": True, "correction": "pommes"},
                                        {"text": "sucrées.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Après l'article pluriel 'des', le nom 'pomme' doit impérativement prendre un -s : 'des pommes'.",
                                    "mnemonic": "L'article pluriel prévient : tous les noms qui suivent enfilent leur -s de fête !"
                                }
                            },
                            {
                                "id": "EX-002-03-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-003",
                                "prompt": "Assemble les mots pour former : 'Les oiseaux chantent le matin.'",
                                "audioText": "Les oiseaux chantent le matin.",
                                "ipa": "/le zwa.zo ʃɑ̃t lə ma.tɛ̃/",
                                "data": {
                                    "targetPhrase": "Les oiseaux chantent le matin.",
                                    "targetPhonemes": "Les + oiseaux + chantent + le + matin.",
                                    "availableBricks": ["chantent", "Les", "oiseaux", "matin.", "le"],
                                    "correctSequence": ["Les", "oiseaux", "chantent", "le", "matin."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-04 : L'Adjectif Qualificatif Simple
            {
                "id": "CHP-002-04",
                "moduleId": "MOD-002",
                "stage": 2,
                "title": "L'Adjectif : Petit, Grand, Beau, Bon",
                "summary": "L'adjectif s'habille comme le nom : au féminin, il prend un -E qui réveille souvent la consonne finale muette (petit → petite) !",
                "rules": [
                    {
                        "id": "FR-A1-004",
                        "title": "L'accord de base de l'adjectif",
                        "statement": "L'adjectif s'accorde en genre avec le nom. En ajoutant un -E au féminin, la consonne finale silencieuse se met à sonner : petit /pə.ti/ → petite /pə.tit/ !",
                        "formula": "Masculin : grand, petit · Féminin : grande, petite (+E)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-04-01",
                        "chapterId": "CHP-002-04",
                        "title": "Accorder l'Adjectif en Genre",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-04-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-004",
                                "prompt": "Complète : 'C'est une ___ fille joyeuse.'",
                                "audioText": "C'est une petite fille joyeuse.",
                                "data": {
                                    "question": "Quelle forme de l'adjectif s'accorde avec 'fille' (féminin) ?",
                                    "options": [
                                        {"id": "o1", "text": "petite (avec un e au féminin)", "isCorrect": True, "feedback": "Exact ! Fille est féminin, l'adjectif prend un e : petite."},
                                        {"id": "o2", "text": "petit (forme masculine)", "isCorrect": False, "feedback": "Non, petit est masculin : un petit garçon."},
                                        {"id": "o3", "text": "petits (masculin pluriel)", "isCorrect": False, "feedback": "Non, il s'agit d'une seule fille au singulier."}
                                    ],
                                    "explanation": "L'adjectif qualificatif prend la marque du féminin -e : une petite fille."
                                }
                            },
                            {
                                "id": "EX-002-04-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-004",
                                "prompt": "Chasse à l'erreur : repère la faute d'accord de l'adjectif :",
                                "audioText": "Elle habite dans une grand maison ancienne.",
                                "data": {
                                    "sentence": "Elle habite dans une grand maison ancienne.",
                                    "words": [
                                        {"text": "Elle", "isError": False},
                                        {"text": "habite", "isError": False},
                                        {"text": "dans", "isError": False},
                                        {"text": "une", "isError": False},
                                        {"text": "grand", "isError": True, "correction": "grande"},
                                        {"text": "maison", "isError": False},
                                        {"text": "ancienne.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Comme 'maison' est féminin, l'adjectif 'grand' doit s'accorder au féminin : 'une grande maison'.",
                                    "mnemonic": "Le -e féminin réveille le D muet de grand : gran-de !"
                                }
                            },
                            {
                                "id": "EX-002-04-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-004",
                                "prompt": "Assemble les mots pour former : 'La petite fille sourit.'",
                                "audioText": "La petite fille sourit.",
                                "ipa": "/la pə.tit fij su.ʁi/",
                                "data": {
                                    "targetPhrase": "La petite fille sourit.",
                                    "targetPhonemes": "La + petite + fille + sourit.",
                                    "availableBricks": ["petite", "La", "sourit.", "fille"],
                                    "correctSequence": ["La", "petite", "fille", "sourit."]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_002)

    srs_cards.extend([
        {
            "id": "SRS-002-01",
            "stage": 2,
            "chapterId": "CHP-002-01",
            "ruleId": "FR-A1-001",
            "front": "Quel article indéfini utilise-t-on pour un nom féminin singulier ?",
            "back": "L'article UNE (ex: une table, une maison).",
            "explanation": "Pour le masculin, on utilise UN (ex: un livre).",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-02",
            "stage": 2,
            "chapterId": "CHP-002-02",
            "ruleId": "FR-A1-002",
            "front": "Pourquoi écrit-on 'L'arbre' et non 'Le arbre' ?",
            "back": "L'élision en L' est obligatoire devant une voyelle ou un H muet.",
            "explanation": "Elle évite le choc désagréable entre deux voyelles.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-03",
            "stage": 2,
            "chapterId": "CHP-002-04",
            "ruleId": "FR-A1-004",
            "front": "Que provoque l'ajout du -E féminin sur un adjectif comme 'grand' ou 'petit' ?",
            "back": "Il réveille la consonne finale muette : gran-de, peti-te !",
            "explanation": "À l'oral, la consonne devient audible ; à l'écrit, on ajoute un -e.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-006 : Les 4 Verbes Piliers de la Langue au Présent
    # =========================================================================
    mod_006 = {
        "id": "MOD-006",
        "stage": 2,
        "title": "Les 4 Verbes Piliers au Présent (Être, Avoir, Aller, Faire)",
        "description": "Les quatre moteurs indispensables qui font tourner toute conversation en français : je suis, j'ai, je vais, je fais.",
        "chapters": [
            # CHP-002-05 : Être au Présent
            {
                "id": "CHP-002-05",
                "moduleId": "MOD-006",
                "stage": 2,
                "title": "Le Verbe ÊTRE : je suis, tu es, il est...",
                "summary": "Le verbe de l'identité et de l'état : je suis fatigué, tu es gentil, elle est française, nous sommes prêts.",
                "rules": [
                    {
                        "id": "FR-A1-005",
                        "title": "Conjugaison du verbe Être au présent",
                        "statement": "Je suis, tu es, il/elle/on est, nous sommes, vous êtes, ils/elles sont.",
                        "formula": "Je suis · Tu es · Il/Elle est · Nous sommes · Vous êtes · Ils/Elles sont"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-05-01",
                        "chapterId": "CHP-002-05",
                        "title": "Conjuguer et Utiliser ÊTRE",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-05-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-005",
                                "prompt": "Complète la phrase : 'Bonjour, je ___ très heureux de vous rencontrer.'",
                                "audioText": "Bonjour, je suis très heureux de vous rencontrer.",
                                "data": {
                                    "question": "Quelle forme du verbe être correspond au pronom 'je' ?",
                                    "options": [
                                        {"id": "o1", "text": "suis", "isCorrect": True, "feedback": "Parfait ! Je suis."},
                                        {"id": "o2", "text": "es", "isCorrect": False, "feedback": "Non, 'es' s'utilise avec 'tu' : tu es."},
                                        {"id": "o3", "text": "est", "isCorrect": False, "feedback": "Non, 'est' s'utilise avec il/elle : il est."}
                                    ],
                                    "explanation": "La 1re personne du singulier du verbe être est 'je suis'."
                                }
                            },
                            {
                                "id": "EX-002-05-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-005",
                                "prompt": "Chasse à l'erreur : trouve la faute de conjugaison dans cette phrase :",
                                "audioText": "Nous sont prêts pour le grand départ.",
                                "data": {
                                    "sentence": "Nous sont prêts pour le grand départ.",
                                    "words": [
                                        {"text": "Nous", "isError": False},
                                        {"text": "sont", "isError": True, "correction": "sommes"},
                                        {"text": "prêts", "isError": False},
                                        {"text": "pour", "isError": False},
                                        {"text": "le", "isError": False},
                                        {"text": "grand", "isError": False},
                                        {"text": "départ.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Avec le pronom 'nous', la forme correcte est 'nous sommes' (et non 'nous sont' qui correspond à ils/elles sont).",
                                    "mnemonic": "Nous sommes, vous êtes, ils sont !"
                                }
                            },
                            {
                                "id": "EX-002-05-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-005",
                                "prompt": "Assemble les mots pour former : 'Vous êtes très bienvenus ici.'",
                                "audioText": "Vous êtes très bienvenus ici.",
                                "ipa": "/vu z‿ɛt tʁɛ bjɛ̃.vny i.si/",
                                "data": {
                                    "targetPhrase": "Vous êtes très bienvenus ici.",
                                    "targetPhonemes": "Vous + êtes + très + bienvenus + ici.",
                                    "availableBricks": ["êtes", "Vous", "très", "ici.", "bienvenus"],
                                    "correctSequence": ["Vous", "êtes", "très", "bienvenus", "ici."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-06 : Avoir au Présent
            {
                "id": "CHP-002-06",
                "moduleId": "MOD-006",
                "stage": 2,
                "title": "Le Verbe AVOIR : j'ai, tu as, il a...",
                "summary": "Le verbe de la possession, de l'âge et des sensations : j'ai faim, j'ai 20 ans, nous avons un chat.",
                "rules": [
                    {
                        "id": "FR-A1-006",
                        "title": "Conjugaison du verbe Avoir au présent",
                        "statement": "J'ai, tu as, il/elle/on a, nous avons, vous avez, ils/elles ont.",
                        "formula": "J'ai · Tu as · Il/Elle a · Nous avons · Vous avez · Ils/Elles ont"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-06-01",
                        "chapterId": "CHP-002-06",
                        "title": "Conjuguer et Utiliser AVOIR",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-06-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-006",
                                "prompt": "Comment dit-on son âge en français ?",
                                "audioText": "J'ai vingt-cinq ans.",
                                "data": {
                                    "question": "Pour donner son âge, on utilise le verbe :",
                                    "options": [
                                        {"id": "o1", "text": "AVOIR : J'ai vingt ans", "isCorrect": True, "feedback": "Exactement ! En français, on A un âge, on n'EST pas un âge."},
                                        {"id": "o2", "text": "ÊTRE : Je suis vingt ans", "isCorrect": False, "feedback": "Attention, c'est un calque de l'anglais ! En français, on dit 'j'ai 20 ans'."},
                                        {"id": "o3", "text": "FAIRE : Je fais vingt ans", "isCorrect": False, "feedback": "Non, cela signifie paraître jeune."}
                                    ],
                                    "explanation": "En français standard, l'âge s'exprime obligatoirement avec le verbe AVOIR : 'J'ai 20 ans'."
                                }
                            },
                            {
                                "id": "EX-002-06-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-006",
                                "prompt": "Chasse à l'erreur : trouve la faute dans cette phrase :",
                                "audioText": "Ils ont un magnifique appartement au centre-ville.",
                                "data": {
                                    "sentence": "Ils sont un magnifique appartement au centre-ville.",
                                    "words": [
                                        {"text": "Ils", "isError": False},
                                        {"text": "sont", "isError": True, "correction": "ont"},
                                        {"text": "un", "isError": False},
                                        {"text": "magnifique", "isError": False},
                                        {"text": "appartement", "isError": False},
                                        {"text": "au", "isError": False},
                                        {"text": "centre-ville.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Pour la possession, il faut le verbe avoir : 'Ils ont' (/il z‿ɔ̃/) et non le verbe être 'ils sont' (/il sɔ̃/).",
                                    "mnemonic": "Ils ONT = liaison en Z /zɔ̃/ (avoir) vs Ils SONT = son S /sɔ̃/ (être) !"
                                }
                            },
                            {
                                "id": "EX-002-06-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-006",
                                "prompt": "Assemble les mots pour former : 'Nous avons un grand jardin.'",
                                "audioText": "Nous avons un grand jardin.",
                                "ipa": "/nu z‿a.vɔ̃ œ̃ gʁɑ̃ ʒaʁ.dɛ̃/",
                                "data": {
                                    "targetPhrase": "Nous avons un grand jardin.",
                                    "targetPhonemes": "Nous + avons + un + grand + jardin.",
                                    "availableBricks": ["avons", "grand", "Nous", "jardin.", "un"],
                                    "correctSequence": ["Nous", "avons", "un", "grand", "jardin."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-07 : Aller et le Futur Proche
            {
                "id": "CHP-002-07",
                "moduleId": "MOD-006",
                "stage": 2,
                "title": "Le Verbe ALLER & le Futur Proche",
                "summary": "Déplacez-vous et projetez-vous dans l'avenir immédiat : je vais à la gare, je vais manger, nous allons partir.",
                "rules": [
                    {
                        "id": "FR-A1-007",
                        "title": "Aller + Infinitif = Le Futur Proche",
                        "statement": "Le verbe aller (je vais, tu vas, il va, nous allons, vous allez, ils vont) suivi d'un infinitif exprime une action imminente certaine.",
                        "formula": "ALLER au présent + Verbe à l'infinitif = Futur Proche"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-07-01",
                        "chapterId": "CHP-002-07",
                        "title": "Aller au Présent et Parler du Futur",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-07-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-007",
                                "prompt": "Comment dit-on 'I am going to eat' en français courant ?",
                                "audioText": "Je vais manger.",
                                "data": {
                                    "question": "La formule du futur proche est :",
                                    "options": [
                                        {"id": "o1", "text": "Je vais manger (Aller + infinitif)", "isCorrect": True, "feedback": "Parfait ! Aller au présent + verbe à l'infinitif."},
                                        {"id": "o2", "text": "Je suis mangé", "isCorrect": False, "feedback": "Non, cela signifierait qu'on vous dévore !"},
                                        {"id": "o3", "text": "Je mange aller", "isCorrect": False, "feedback": "Non, l'ordre des mots est incorrect."}
                                    ],
                                    "explanation": "Le futur proche se forme avec le verbe ALLER conjugué au présent suivi de l'infinitif."
                                }
                            },
                            {
                                "id": "EX-002-07-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-007",
                                "prompt": "Chasse à l'erreur : repère la mauvaise forme du verbe aller :",
                                "audioText": "Ils vas au cinéma ce soir.",
                                "data": {
                                    "sentence": "Ils vas au cinéma ce soir.",
                                    "words": [
                                        {"text": "Ils", "isError": False},
                                        {"text": "vas", "isError": True, "correction": "vont"},
                                        {"text": "au", "isError": False},
                                        {"text": "cinéma", "isError": False},
                                        {"text": "ce", "isError": False},
                                        {"text": "soir.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Avec le sujet pluriel 'ils', la forme correcte est 'ils vont' (tu vas, mais ils vont).",
                                    "mnemonic": "Je vais, tu vas, il va, nous allons, vous allez, ils VONT !"
                                }
                            },
                            {
                                "id": "EX-002-07-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-007",
                                "prompt": "Assemble les mots pour composer : 'Nous allons visiter Paris demain.'",
                                "audioText": "Nous allons visiter Paris demain.",
                                "ipa": "/nu z‿a.lɔ̃ vi.zi.te pa.ʁi də.mɛ̃/",
                                "data": {
                                    "targetPhrase": "Nous allons visiter Paris demain.",
                                    "targetPhonemes": "Nous + allons + visiter + Paris + demain.",
                                    "availableBricks": ["visiter", "Nous", "Paris", "demain.", "allons"],
                                    "correctSequence": ["Nous", "allons", "visiter", "Paris", "demain."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-08 : Faire et les Verbes Réguliers en -ER
            {
                "id": "CHP-002-08",
                "moduleId": "MOD-006",
                "stage": 2,
                "title": "Faire & les Verbes en -ER : Parler, Manger, Habiter",
                "summary": "Le verbe FAIRE (je fais, tu fais, il fait) et le patron régulier en -ER qui vous ouvre la porte de milliers de verbes !",
                "rules": [
                    {
                        "id": "FR-A1-008",
                        "title": "Le modèle des verbes en -ER au présent",
                        "statement": "Au présent, les verbes en -ER prennent les terminaisons : -e, -es, -e, -ons, -ez, -ent. Remarquez que -e, -es, -ent ne s'entendent pas à l'oral !",
                        "formula": "Je parle (-e) · Tu parles (-es) · Il parle (-e) · Ils parlent (-ent)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-08-01",
                        "chapterId": "CHP-002-08",
                        "title": "Pratiquer Faire et les Verbes en -ER",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-08-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-008",
                                "prompt": "Quelle est la terminaison écrite pour 'tu' avec un verbe en -ER ?",
                                "audioText": "Tu parles très bien français.",
                                "data": {
                                    "question": "Avec 'tu', on écrit :",
                                    "options": [
                                        {"id": "o1", "text": "Tu parles (avec un s final)", "isCorrect": True, "feedback": "Exact ! 'Tu' adore la lettre S à la fin de ses verbes."},
                                        {"id": "o2", "text": "Tu parle (sans s)", "isCorrect": False, "feedback": "Attention, il manque la marque obligatoire de la 2e personne."},
                                        {"id": "o3", "text": "Tu parlez", "isCorrect": False, "feedback": "Non, -ez est la terminaison de 'vous'."}
                                    ],
                                    "explanation": "La règle d'or du présent : le pronom 'tu' entraîne toujours un -s final au verbe."
                                }
                            },
                            {
                                "id": "EX-002-08-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-008",
                                "prompt": "Chasse à l'erreur : repère la faute sur le verbe faire :",
                                "audioText": "Il fait du sport tous les matins.",
                                "data": {
                                    "sentence": "Il fais du sport tous les matins.",
                                    "words": [
                                        {"text": "Il", "isError": False},
                                        {"text": "fais", "isError": True, "correction": "fait"},
                                        {"text": "du", "isError": False},
                                        {"text": "sport", "isError": False},
                                        {"text": "tous", "isError": False},
                                        {"text": "les", "isError": False},
                                        {"text": "matins.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "À la 3e personne du singulier (il/elle), le verbe faire s'écrit avec un T : 'il fait' (je fais, tu fais, il FAIT).",
                                    "mnemonic": "Je fais (s), tu fais (s), il fait (t) !"
                                }
                            },
                            {
                                "id": "EX-002-08-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-008",
                                "prompt": "Assemble les mots pour former : 'J'habite dans une belle ville.'",
                                "audioText": "J'habite dans une belle ville.",
                                "ipa": "/ʒa.bit dɑ̃ z‿yn bɛl vil/",
                                "data": {
                                    "targetPhrase": "J'habite dans une belle ville.",
                                    "targetPhonemes": "J'habite + dans + une + belle + ville.",
                                    "availableBricks": ["belle", "J'habite", "une", "dans", "ville."],
                                    "correctSequence": ["J'habite", "dans", "une", "belle", "ville."]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_006)

    srs_cards.extend([
        {
            "id": "SRS-002-04",
            "stage": 2,
            "chapterId": "CHP-002-05",
            "ruleId": "FR-A1-005",
            "front": "Quelle est la forme du verbe ÊTRE avec 'vous' ?",
            "back": "VOUS ÊTES (avec un accent circonflexe et la liaison /vu z‿ɛt/).",
            "explanation": "Ne pas confondre avec 'vous avez'.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-05",
            "stage": 2,
            "chapterId": "CHP-002-06",
            "ruleId": "FR-A1-006",
            "front": "Quelle est la différence à l'oral entre 'ils ont' et 'ils sont' ?",
            "back": "Ils ONT fait une liaison en Z /il z‿ɔ̃/ ; Ils SONT commence par un S sourd /il sɔ̃/.",
            "explanation": "Cette distinction auditive est cruciale pour comprendre le français parlé.",
            "stability": 2.5,
            "difficulty": 3.0,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-06",
            "stage": 2,
            "chapterId": "CHP-002-07",
            "ruleId": "FR-A1-007",
            "front": "Comment forme-t-on le futur proche en français ?",
            "back": "Verbe ALLER au présent + Verbe à l'infinitif (ex: je vais partir).",
            "explanation": "C'est la manière la plus courante d'exprimer l'avenir en français quotidien.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-007 : La Phrase Simple, Négation, Interrogation & Pronoms
    # =========================================================================
    mod_007 = {
        "id": "MOD-007",
        "stage": 2,
        "title": "Syntaxe Fondamentale — Négation, Interrogation & Prépositions",
        "description": "Structurez vos phrases : la négation encadrante (ne... pas), poser des questions simples (est-ce que), et lier les idées avec les prépositions de lieu.",
        "chapters": [
            # CHP-002-09 : La Négation Bipartite
            {
                "id": "CHP-002-09",
                "moduleId": "MOD-007",
                "stage": 2,
                "title": "Dire Non avec Élégance : La Négation Ne... Pas",
                "summary": "Apprenez à encadrer le verbe avec 'ne' (ou 'n'') et 'pas' comme les deux tranches d'un sandwich protecteur.",
                "rules": [
                    {
                        "id": "FR-A1-009",
                        "title": "La négation standard en deux éléments",
                        "statement": "En français soigné, la négation se compose de deux mots qui encadrent le verbe conjugué : NE + Verbe + PAS (ou N' devant voyelle).",
                        "formula": "Sujet + NE + Verbe + PAS (Je ne sais pas · Il n'aime pas)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-09-01",
                        "chapterId": "CHP-002-09",
                        "title": "Construire la Négation",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-09-01",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-009",
                                "prompt": "Chasse à l'erreur : repère le mot manquant dans cette phrase négative :",
                                "audioText": "Il ne dort pas encore cette nuit.",
                                "data": {
                                    "sentence": "Il dort pas encore cette nuit.",
                                    "words": [
                                        {"text": "Il", "isError": False},
                                        {"text": "dort", "isError": True, "correction": "ne dort"},
                                        {"text": "pas", "isError": False},
                                        {"text": "encore", "isError": False},
                                        {"text": "cette", "isError": False},
                                        {"text": "nuit.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "À l'écrit soutenu, il ne faut jamais omettre le premier terme de la négation 'ne' : 'Il ne dort pas'.",
                                    "mnemonic": "Le verbe est le fromage : 'ne' est la tranche de pain du haut, 'pas' celle du bas !"
                                }
                            },
                            {
                                "id": "EX-002-09-02",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-009",
                                "prompt": "Comment met-on 'J'aime le café' à la forme négative ?",
                                "audioText": "Je n'aime pas le café.",
                                "data": {
                                    "question": "La forme négative correcte est :",
                                    "options": [
                                        {"id": "o1", "text": "Je n'aime pas le café (avec élision en n')", "isCorrect": True, "feedback": "Exact ! Devant 'aime' qui commence par une voyelle, 'ne' devient 'n''."},
                                        {"id": "o2", "text": "Je ne aime pas le café", "isCorrect": False, "feedback": "Non, l'élision de 'ne' en 'n'' est obligatoire devant voyelle."},
                                        {"id": "o3", "text": "J'aime pas le café", "isCorrect": False, "feedback": "C'est l'oral relâché, non admis au standard écrit."}
                                    ],
                                    "explanation": "Devant un verbe commençant par une voyelle, 'ne' s'élide en 'n'' : Je n'aime pas."
                                }
                            },
                            {
                                "id": "EX-002-09-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-009",
                                "prompt": "Assemble les mots pour former : 'Elle ne veut pas venir.'",
                                "audioText": "Elle ne veut pas venir.",
                                "ipa": "/ɛl nə vø pa və.niʁ/",
                                "data": {
                                    "targetPhrase": "Elle ne veut pas venir.",
                                    "targetPhonemes": "Elle + ne + veut + pas + venir.",
                                    "availableBricks": ["veut", "Elle", "venir.", "ne", "pas"],
                                    "correctSequence": ["Elle", "ne", "veut", "pas", "venir."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-10 : L'Interrogation Simple
            {
                "id": "CHP-002-10",
                "moduleId": "MOD-007",
                "stage": 2,
                "title": "Poser une Question : Est-ce que & les Mots Interrogatifs",
                "summary": "Pour poser une question en toute clarté, placez 'Est-ce que' en début de phrase ou utilisez les mots magiques : où, quand, comment, pourquoi.",
                "rules": [
                    {
                        "id": "FR-A1-010",
                        "title": "L'interrogation standard avec 'Est-ce que'",
                        "statement": "Ajouter 'Est-ce que' devant une phrase affirmative la transforme instantanément en question sans modifier l'ordre des mots.",
                        "formula": "Est-ce que + Sujet + Verbe + ? (Est-ce que vous parlez français ?)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-10-01",
                        "chapterId": "CHP-002-10",
                        "title": "Formuler des Questions Claires",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-10-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-010",
                                "prompt": "Quel mot interrogatif utilise-t-on pour demander un lieu ?",
                                "audioText": "Où habitez-vous ?",
                                "data": {
                                    "question": "Pour demander un endroit, on utilise :",
                                    "options": [
                                        {"id": "o1", "text": "Où (avec un accent grave sur le u)", "isCorrect": True, "feedback": "Exact ! 'Où' avec accent indique le lieu. Sans accent, 'ou' signifie 'ou bien'."},
                                        {"id": "o2", "text": "Quand", "isCorrect": False, "feedback": "Non, 'quand' indique le temps/moment."},
                                        {"id": "o3", "text": "Comment", "isCorrect": False, "feedback": "Non, 'comment' indique la manière."}
                                    ],
                                    "explanation": "'Où' (avec accent) interroge sur le lieu : Où allez-vous ?"
                                }
                            },
                            {
                                "id": "EX-002-10-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-010",
                                "prompt": "Assemble les mots pour former : 'Est-ce que vous parlez français ?'",
                                "audioText": "Est-ce que vous parlez français ?",
                                "ipa": "/ɛs kə vu paʁ.le fʁɑ̃.sɛ/",
                                "data": {
                                    "targetPhrase": "Est-ce que vous parlez français ?",
                                    "targetPhonemes": "Est-ce + que + vous + parlez + français ?",
                                    "availableBricks": ["que", "parlez", "Est-ce", "français ?", "vous"],
                                    "correctSequence": ["Est-ce", "que", "vous", "parlez", "français ?"]
                                }
                            },
                            {
                                "id": "EX-002-10-03",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-010",
                                "prompt": "Quelle question permet de demander le prix d'un article ?",
                                "audioText": "Combien coûte ce livre ?",
                                "data": {
                                    "question": "Pour demander un prix, on dit :",
                                    "options": [
                                        {"id": "o1", "text": "Combien coûte ce livre ?", "isCorrect": True, "feedback": "Parfait ! 'Combien coûte' est la formule universelle."},
                                        {"id": "o2", "text": "Comment coûte ce livre ?", "isCorrect": False, "feedback": "Non, 'comment' ne s'applique pas au prix."},
                                        {"id": "o3", "text": "Quand coûte ce livre ?", "isCorrect": False, "feedback": "Non, 'quand' s'applique au temps."}
                                    ],
                                    "explanation": "Le mot interrogatif de la quantité et du prix est 'combien'."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-11 : Les Pronoms Sujets & le Pronom 'On'
            {
                "id": "CHP-002-11",
                "moduleId": "MOD-007",
                "stage": 2,
                "title": "Les Pronoms Personnels Sujets : Je, Tu, Il, Elle, On, Nous, Vous, Ils",
                "summary": "Découvrez le rôle de chaque pronom et le super-pouvoir du pronom 'ON' qui remplace 'nous' dans la conversation de tous les jours !",
                "rules": [
                    {
                        "id": "FR-A1-011",
                        "title": "Le pronom caméléon 'ON'",
                        "statement": "À l'oral et dans la conversation courante, 'ON' signifie souvent 'NOUS' (tout le monde), mais il se conjugue toujours au singulier, exactement comme 'il' ou 'elle' !",
                        "formula": "On va au restaurant = Nous allons au restaurant (verbe au singulier : on va)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-11-01",
                        "chapterId": "CHP-002-11",
                        "title": "Maîtriser les Pronoms Sujets et 'On'",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-11-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-011",
                                "prompt": "Comment se conjugue le verbe avec le pronom 'on' ?",
                                "audioText": "On part en vacances demain.",
                                "data": {
                                    "question": "Quelle forme est correcte avec 'on' ?",
                                    "options": [
                                        {"id": "o1", "text": "On part (comme il/elle au singulier)", "isCorrect": True, "feedback": "Bravo ! 'On' prend toujours la 3e personne du singulier."},
                                        {"id": "o2", "text": "On partons (comme nous)", "isCorrect": False, "feedback": "Erreur classique : même si 'on' a le sens de 'nous', le verbe reste au singulier !"},
                                        {"id": "o3", "text": "On partez", "isCorrect": False, "feedback": "Non, -ez est la terminaison de vous."}
                                    ],
                                    "explanation": "Grammaticalement, le pronom 'on' gouverne un verbe à la 3e personne du singulier."
                                }
                            },
                            {
                                "id": "EX-002-11-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-011",
                                "prompt": "Chasse à l'erreur : repère la faute de conjugaison après 'on' :",
                                "audioText": "Ce soir, on mangeons tous ensemble à la maison.",
                                "data": {
                                    "sentence": "Ce soir, on mangeons tous ensemble à la maison.",
                                    "words": [
                                        {"text": "Ce", "isError": False},
                                        {"text": "soir,", "isError": False},
                                        {"text": "on", "isError": False},
                                        {"text": "mangeons", "isError": True, "correction": "mange"},
                                        {"text": "tous", "isError": False},
                                        {"text": "ensemble", "isError": False},
                                        {"text": "à", "isError": False},
                                        {"text": "la", "isError": False},
                                        {"text": "maison.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Le pronom 'on' exige un verbe à la 3e personne du singulier : 'on mange' (et non 'on mangeons').",
                                    "mnemonic": "On est singulier pour le verbe, même s'il représente une foule !"
                                }
                            },
                            {
                                "id": "EX-002-11-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-011",
                                "prompt": "Assemble les mots pour former : 'Elles étudient à la bibliothèque.'",
                                "audioText": "Elles étudient à la bibliothèque.",
                                "ipa": "/ɛl z‿e.ty.di a la bi.bli.jɔ.tɛk/",
                                "data": {
                                    "targetPhrase": "Elles étudient à la bibliothèque.",
                                    "targetPhonemes": "Elles + étudient + à + la + bibliothèque.",
                                    "availableBricks": ["étudient", "Elles", "bibliothèque.", "la", "à"],
                                    "correctSequence": ["Elles", "étudient", "à", "la", "bibliothèque."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-12 : Les Prépositions de Lieu (à, de, chez, dans, sur, sous)
            {
                "id": "CHP-002-12",
                "moduleId": "MOD-007",
                "stage": 2,
                "title": "Les Prépositions de Lieu : à, dans, sur, sous, chez",
                "summary": "Situez chaque chose dans l'espace : aller 'chez' le médecin (personne), habiter 'à' Paris (ville), voyager 'en' France (pays féminin).",
                "rules": [
                    {
                        "id": "FR-A1-012",
                        "title": "La distinction 'chez' (personne) vs 'à' (lieu)",
                        "statement": "On utilise 'CHEZ' devant un nom ou pronom désignant une personne (chez moi, chez le médecin). On utilise 'À' devant un lieu géographique (à la gare, au cinéma).",
                        "formula": "CHEZ + Personne (chez le docteur) · À / AU + Lieu physique (à l'hôpital)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-12-01",
                        "chapterId": "CHP-002-12",
                        "title": "Situer dans l'Espace",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-12-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-012",
                                "prompt": "Complète : 'Cet après-midi, je vais ___ le médecin.'",
                                "audioText": "Je vais chez le médecin.",
                                "data": {
                                    "question": "Quelle préposition s'emploie devant une personne professionnelle ?",
                                    "options": [
                                        {"id": "o1", "text": "chez (chez le médecin)", "isCorrect": True, "feedback": "Exactement ! 'Chez' s'emploie toujours pour les personnes."},
                                        {"id": "o2", "text": "au (au médecin)", "isCorrect": False, "feedback": "Erreur fréquente ! On dit 'au cabinet' (lieu) mais 'chez le médecin' (personne)."},
                                        {"id": "o3", "text": "à la", "isCorrect": False, "feedback": "Incorrect."}
                                    ],
                                    "explanation": "La préposition 'chez' s'utilise devant un nom désignant une personne ou un métier : chez le médecin."
                                }
                            },
                            {
                                "id": "EX-002-12-02",
                                "type": "voltaire_hunter",
                                "ruleId": "FR-A1-012",
                                "prompt": "Chasse à l'erreur : repère la faute de préposition :",
                                "audioText": "Je vais au coiffeur pour me couper les cheveux.",
                                "data": {
                                    "sentence": "Je vais au coiffeur pour me faire couper les cheveux.",
                                    "words": [
                                        {"text": "Je", "isError": False},
                                        {"text": "vais", "isError": False},
                                        {"text": "au", "isError": True, "correction": "chez le"},
                                        {"text": "coiffeur", "isError": False},
                                        {"text": "pour", "isError": False},
                                        {"text": "me", "isError": False},
                                        {"text": "faire", "isError": False},
                                        {"text": "couper", "isError": False},
                                        {"text": "les", "isError": False},
                                        {"text": "cheveux.", "isError": False}
                                    ],
                                    "hasError": True,
                                    "explanation": "Le coiffeur est une personne humaine : on dit 'chez le coiffeur' et non 'au coiffeur' (on peut dire 'au salon de coiffure').",
                                    "mnemonic": "Chez une personne, À un endroit !"
                                }
                            },
                            {
                                "id": "EX-002-12-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-012",
                                "prompt": "Assemble les mots pour former : 'Le livre est sur la table.'",
                                "audioText": "Le livre est sur la table.",
                                "ipa": "/lə livʁ ɛ syʁ la tabl/",
                                "data": {
                                    "targetPhrase": "Le livre est sur la table.",
                                    "targetPhonemes": "Le + livre + est + sur + la + table.",
                                    "availableBricks": ["est", "table.", "Le", "sur", "livre", "la"],
                                    "correctSequence": ["Le", "livre", "est", "sur", "la", "table."]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_007)

    srs_cards.extend([
        {
            "id": "SRS-002-07",
            "stage": 2,
            "chapterId": "CHP-002-09",
            "ruleId": "FR-A1-009",
            "front": "Quelle est la règle des deux mots pour la négation en français soigné ?",
            "back": "NE (ou N') avant le verbe + PAS après le verbe (ex: je ne sais pas).",
            "explanation": "L'omission de 'ne' est fréquente à l'oral familier mais fautive à l'écrit standard.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-08",
            "stage": 2,
            "chapterId": "CHP-002-12",
            "ruleId": "FR-A1-012",
            "front": "Dit-on 'Je vais au dentiste' ou 'Je vais chez le dentiste' ?",
            "back": "On dit 'Chez le dentiste' (CHEZ s'emploie pour les personnes).",
            "explanation": "On n'entre pas dans le dentiste, on se rend CHEZ lui !",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-008 : Actes de Parole & Situations Pratiques A1
    # =========================================================================
    mod_008 = {
        "id": "MOD-008",
        "stage": 2,
        "title": "Actes de Parole — Situations Réelles de Survie A1",
        "description": "Passez à l'action dans la vie quotidienne : se présenter, commander avec courtoisie, exprimer ses goûts et donner l'heure ou la date.",
        "chapters": [
            # CHP-002-13 : Se Présenter
            {
                "id": "CHP-002-13",
                "moduleId": "MOD-008",
                "stage": 2,
                "title": "Se Présenter : Nom, Nationalité & Âge",
                "summary": "Brisez la glace : 'Bonjour, je m'appelle Thomas, je suis canadien et j'ai 28 ans. Enchanté !'",
                "rules": [
                    {
                        "id": "FR-A1-013",
                        "title": "Les trois formules de la présentation",
                        "statement": "Je m'appelle [Prénom] · Je suis [Profession / Nationalité] · J'ai [Nombre] ans.",
                        "formula": "Je m'appelle... · Je suis... · J'ai... ans"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-13-01",
                        "chapterId": "CHP-002-13",
                        "title": "Réussir sa Première Présentation",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-13-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-013",
                                "prompt": "Quelle formule polie prononce-t-on quand on rencontre quelqu'un pour la première fois ?",
                                "audioText": "Enchanté de faire votre connaissance.",
                                "data": {
                                    "question": "Pour saluer lors d'une première rencontre, on dit :",
                                    "options": [
                                        {"id": "o1", "text": "Enchanté(e) !", "isCorrect": True, "feedback": "Exact ! C'est le mot de courtoisie universel."},
                                        {"id": "o2", "text": "Au revoir !", "isCorrect": False, "feedback": "Non, cela s'utilise au moment de partir."},
                                        {"id": "o3", "text": "À bientôt !", "isCorrect": False, "feedback": "Non, pour se quitter."}
                                    ],
                                    "explanation": "'Enchanté' exprime le plaisir poli d'une nouvelle rencontre."
                                }
                            },
                            {
                                "id": "EX-002-13-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-013",
                                "prompt": "Assemble les mots pour former : 'Je m'appelle Sophie et j'habite à Lyon.'",
                                "audioText": "Je m'appelle Sophie et j'habite à Lyon.",
                                "ipa": "/ʒə ma.pɛl sɔ.fi e ʒa.bit a ljɔ̃/",
                                "data": {
                                    "targetPhrase": "Je m'appelle Sophie et j'habite à Lyon.",
                                    "targetPhonemes": "Je + m'appelle + Sophie + et + j'habite + à + Lyon.",
                                    "availableBricks": ["Sophie", "Je", "j'habite", "m'appelle", "Lyon.", "à", "et"],
                                    "correctSequence": ["Je", "m'appelle", "Sophie", "et", "j'habite", "à", "Lyon."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-14 : Commander au Restaurant & la Politesse
            {
                "id": "CHP-002-14",
                "moduleId": "MOD-008",
                "stage": 2,
                "title": "Commander au Café : 'Je voudrais, s'il vous plaît'",
                "summary": "Commandez un croissant et un café avec la formule magique du conditionnel de politesse : 'Je voudrais...'",
                "rules": [
                    {
                        "id": "FR-A1-014",
                        "title": "La politesse avec 'Je voudrais'",
                        "statement": "Ne dites jamais brutalement 'Je veux', mais utilisez la formule élégante et douce 'Je voudrais', toujours conclue par 's'il vous plaît'.",
                        "formula": "Je voudrais + [Nom de l'article] + s'il vous plaît"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-14-01",
                        "chapterId": "CHP-002-14",
                        "title": "Commander avec Courtoisie",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-14-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-014",
                                "prompt": "Au restaurant, quelle est la formule la plus courtoise pour commander ?",
                                "audioText": "Je voudrais un café, s'il vous plaît.",
                                "data": {
                                    "question": "Pour commander un café poliment :",
                                    "options": [
                                        {"id": "o1", "text": "Je voudrais un café, s'il vous plaît.", "isCorrect": True, "feedback": "Parfait ! 'Je voudrais' est très poli et respectueux."},
                                        {"id": "o2", "text": "Je veux un café vite.", "isCorrect": False, "feedback": "Non, c'est impoli et agressif en français."},
                                        {"id": "o3", "text": "Donne un café.", "isCorrect": False, "feedback": "Inapproprié avec un serveur."}
                                    ],
                                    "explanation": "En français, 'Je voudrais' suivi de 's'il vous plaît' est la formule de politesse standard."
                                }
                            },
                            {
                                "id": "EX-002-14-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-014",
                                "prompt": "Assemble les mots pour former : 'L'addition, s'il vous plaît.'",
                                "audioText": "L'addition, s'il vous plaît.",
                                "ipa": "/la.di.sjɔ̃ sil vu plɛ/",
                                "data": {
                                    "targetPhrase": "L'addition, s'il vous plaît.",
                                    "targetPhonemes": "L'addition, + s'il + vous + plaît.",
                                    "availableBricks": ["vous", "L'addition,", "plaît.", "s'il"],
                                    "correctSequence": ["L'addition,", "s'il", "vous", "plaît."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-15 : Exprimer ses Goûts et Préférences
            {
                "id": "CHP-002-15",
                "moduleId": "MOD-008",
                "stage": 2,
                "title": "Exprimer ses Goûts : J'aime, J'adore, Je préfère",
                "summary": "Parlez de ce qui vous passionne : la musique, la cuisine, le sport et la lecture, en utilisant les articles définis après les verbes de goût.",
                "rules": [
                    {
                        "id": "FR-A1-015",
                        "title": "Verbes de goût + Article défini",
                        "statement": "Après les verbes aimer, adorer, préférer, détester, on utilise TOUJOURS l'article défini (le, la, l', les) car on parle de la chose en général.",
                        "formula": "J'aime LE chocolat · Elle adore LA musique · Nous préférons LES fruits"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-15-01",
                        "chapterId": "CHP-002-15",
                        "title": "Partager ses Préférences",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-15-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-015",
                                "prompt": "Complète : 'J'adore ___ littérature française.'",
                                "audioText": "J'adore la littérature française.",
                                "data": {
                                    "question": "Quel déterminant suit le verbe 'adorer' ?",
                                    "options": [
                                        {"id": "o1", "text": "la (article défini féminin)", "isCorrect": True, "feedback": "Exact ! Après les verbes de goût, on emploie le/la/les."},
                                        {"id": "o2", "text": "de la", "isCorrect": False, "feedback": "Non, 'de la' est un partitif (utilisé avec manger ou boire : manger de la confiture)."},
                                        {"id": "o3", "text": "une", "isCorrect": False, "feedback": "Moins naturel après un verbe de goût général."}
                                    ],
                                    "explanation": "Les verbes d'appréciation (aimer, adorer, détester) sont toujours suivis d'un article défini (le, la, l', les)."
                                }
                            },
                            {
                                "id": "EX-002-15-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-015",
                                "prompt": "Assemble les mots pour former : 'Je préfère le thé au café.'",
                                "audioText": "Je préfère le thé au café.",
                                "ipa": "/ʒə pʁe.fɛʁ lə te o ka.fe/",
                                "data": {
                                    "targetPhrase": "Je préfère le thé au café.",
                                    "targetPhonemes": "Je + préfère + le + thé + au + café.",
                                    "availableBricks": ["thé", "Je", "café.", "préfère", "au", "le"],
                                    "correctSequence": ["Je", "préfère", "le", "thé", "au", "café."]
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-002-16 : Donner l'Heure, les Jours et la Date
            {
                "id": "CHP-002-16",
                "moduleId": "MOD-008",
                "stage": 2,
                "title": "L'Heure, les Jours de la Semaine et la Date",
                "summary": "Fixez vos rendez-vous sans faute : 'Il est huit heures et demie', 'Le train part lundi à quatorze heures'.",
                "rules": [
                    {
                        "id": "FR-A1-016",
                        "title": "Dire l'heure : 'Il est... heures'",
                        "statement": "L'heure se donne toujours avec la formule impersonnelle 'Il est' suivie du chiffre et du mot 'heures' (au pluriel dès 2 heures).",
                        "formula": "Il est une heure · Il est deux heures · Il est midi · Il est minuit"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-002-16-01",
                        "chapterId": "CHP-002-16",
                        "title": "Maîtriser l'Heure et le Calendrier",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-002-16-01",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-A1-016",
                                "prompt": "Quelle heure est-il à 12h00 en plein jour ?",
                                "audioText": "Il est midi pile.",
                                "data": {
                                    "question": "À 12h00 pendant la journée, on dit :",
                                    "options": [
                                        {"id": "o1", "text": "Il est midi.", "isCorrect": True, "feedback": "Parfait ! 12h00 le jour se dit 'midi' et 00h00 la nuit 'minuit'."},
                                        {"id": "o2", "text": "Il est douze heures du jour.", "isCorrect": False, "feedback": "Non usuel, on privilégie 'midi'."},
                                        {"id": "o3", "text": "C'est l'heure du déjeuner.", "isCorrect": False, "feedback": "Ce n'est pas la formule d'indication de l'heure."}
                                    ],
                                    "explanation": "En français, 12h00 s'exprime conventionnellement par 'Il est midi'."
                                }
                            },
                            {
                                "id": "EX-002-16-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-A1-016",
                                "prompt": "Assemble les mots pour composer : 'Le rendez-vous est prévu lundi à dix heures.'",
                                "audioText": "Le rendez-vous est prévu lundi à dix heures.",
                                "ipa": "/lə ʁɑ̃.de.vu ɛ pʁe.vy lœ̃.di a di z‿œʁ/",
                                "data": {
                                    "targetPhrase": "Le rendez-vous est prévu lundi à dix heures.",
                                    "targetPhonemes": "Le + rendez-vous + est + prévu + lundi + à + dix + heures.",
                                    "availableBricks": ["prévu", "rendez-vous", "lundi", "heures.", "dix", "Le", "est", "à"],
                                    "correctSequence": ["Le", "rendez-vous", "est", "prévu", "lundi", "à", "dix", "heures."]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_008)

    srs_cards.extend([
        {
            "id": "SRS-002-09",
            "stage": 2,
            "chapterId": "CHP-002-14",
            "ruleId": "FR-A1-014",
            "front": "Quelle formule de politesse utilise-t-on au restaurant pour passer commande ?",
            "back": "JE VOUDRAIS ... S'IL VOUS PLAÎT.",
            "explanation": "Le conditionnel de politesse 'voudrais' adoucit la demande.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-002-10",
            "stage": 2,
            "chapterId": "CHP-002-16",
            "ruleId": "FR-A1-016",
            "front": "Quelle formule impersonnelle introduit obligatoirement l'heure en français ?",
            "back": "IL EST ... HEURES (ex: Il est huit heures).",
            "explanation": "On n'utilise jamais 'C'est' pour énoncer l'heure qu'il est.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    return modules, srs_cards
