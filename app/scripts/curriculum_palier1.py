# -*- coding: utf-8 -*-
"""
curriculum_palier1.py
Module complet pour le Palier 1 : Initiation Absolue (Niveau CI / A0).
Conforme aux recommandations officielles du Ministère de l'Éducation Nationale (Guide CP / Éduscol)
et aux sciences cognitives de la lecture (Stanislas Dehaene, combinatoire explicite).

Couvre l'intégralité du système phonologique initial :
- Module MOD-001 : Les Voyelles Fondamentales & Semi-Voyelles (a, i, o, u, y, é, è, oi, ui)
- Module MOD-003 : Les Consonnes Continues & Fusion Syllabique Directe (l, r, m, n, s, z, f, v, ch)
- Module MOD-004 : Les Consonnes Occlusives & Paires Minimales (p/b, t/d, c-k/g, j)
- Module MOD-005 : Les Voyelles Nasales, Syllabes Complexes & Premières Phrases (an/en, on, in, ccv)
"""

def get_palier_1():
    """Génère les 4 modules, 16 chapitres et les exercices interactifs du Palier 1 (CI/A0)."""

    modules = []
    srs_cards = []

    # =========================================================================
    # MODULE MOD-001 : Les Voyelles Fondamentales & Semi-Voyelles
    # =========================================================================
    mod_001 = {
        "id": "MOD-001",
        "stage": 1,
        "title": "Éveil Phonétique — Les Voyelles Fondamentales & Semi-Voyelles",
        "description": "Le sas d'entrée phonétique : reconnaissance auditive et visuelle des voyelles orales claires [a, i, o, u, y, é, è] et des semi-voyelles [oi, ui].",
        "chapters": [
            # CHP-001-01 : Voyelles Ouvertes [a], [i], [o]
            {
                "id": "CHP-001-01",
                "moduleId": "MOD-001",
                "stage": 1,
                "title": "Les Voyelles Claires : [a], [i], [o]",
                "summary": "Découvrez les trois premières voyelles royales du français : la bouche grande ouverte pour [a], le sourire pour [i], la bouche ronde pour [o].",
                "rules": [
                    {
                        "id": "FR-INI-001",
                        "title": "Les Voyelles Royales [a], [i], [o]",
                        "statement": "Chaque voyelle chante librement dans la gorge sans obstacle. Le son [a] ouvre grand la bouche, le son [i] étire les lèvres en sourire, et le son [o] forme un cercle parfait.",
                        "formula": "A = [a] (avocat) · I = [i] (île) · O = [o] (orange)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-01-01",
                        "chapterId": "CHP-001-01",
                        "title": "Reconnaissance et Écoute de [a], [i], [o]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-01-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-001",
                                "prompt": "Écoute et clique sur l'image qui commence par le son [a] comme dans 'Avocat' :",
                                "audioText": "Avocat",
                                "ipa": "/a.vɔ.ka/",
                                "data": {
                                    "targetSound": "a",
                                    "cards": [
                                        {"id": "c1", "label": "Avocat", "imageEmoji": "🥑", "sound": "Avocat", "isCorrect": True},
                                        {"id": "c2", "label": "Étoile", "imageEmoji": "⭐️", "sound": "Étoile", "isCorrect": False},
                                        {"id": "c3", "label": "Orange", "imageEmoji": "🍊", "sound": "Orange", "isCorrect": False},
                                        {"id": "c4", "label": "Île", "imageEmoji": "🏝", "sound": "Île", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-01-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-001",
                                "prompt": "Écoute et trouve l'image correspondant au son [i] comme dans 'Île' :",
                                "audioText": "Île",
                                "ipa": "/il/",
                                "data": {
                                    "targetSound": "i",
                                    "cards": [
                                        {"id": "c1", "label": "Arbre", "imageEmoji": "🌳", "sound": "Arbre", "isCorrect": False},
                                        {"id": "c2", "label": "Île", "imageEmoji": "🏝", "sound": "Île", "isCorrect": True},
                                        {"id": "c3", "label": "Livre", "imageEmoji": "📖", "sound": "Livre", "isCorrect": False},
                                        {"id": "c4", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-01-03",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-001",
                                "prompt": "Écoute et sélectionne l'image qui commence par le son [o] comme dans 'Orange' :",
                                "audioText": "Orange",
                                "ipa": "/ɔ.ʁɑ̃ʒ/",
                                "data": {
                                    "targetSound": "o",
                                    "cards": [
                                        {"id": "c1", "label": "Maison", "imageEmoji": "🏠", "sound": "Maison", "isCorrect": False},
                                        {"id": "c2", "label": "Chat", "imageEmoji": "🐱", "sound": "Chat", "isCorrect": False},
                                        {"id": "c3", "label": "Orange", "imageEmoji": "🍊", "sound": "Orange", "isCorrect": True},
                                        {"id": "c4", "label": "Avion", "imageEmoji": "✈️", "sound": "Avion", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-01-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-001",
                                "prompt": "Assemble les syllabes pour composer le mot 'ANANAS' :",
                                "audioText": "Ananas",
                                "ipa": "/a.na.na/",
                                "data": {
                                    "targetPhrase": "ANANAS",
                                    "targetPhonemes": "a + na + nas",
                                    "availableBricks": ["na", "a", "nas", "po", "li"],
                                    "correctSequence": ["a", "na", "nas"]
                                }
                            },
                            {
                                "id": "EX-001-01-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-001",
                                "prompt": "Quelle voyelle entend-on distinctement au début du mot 'Avion' ?",
                                "audioText": "Avion",
                                "data": {
                                    "question": "Quel son commence le mot 'Avion' ?",
                                    "options": [
                                        {"id": "o1", "text": "Le son [a] (comme dans ami)", "isCorrect": True, "feedback": "Bravo ! Avion commence bien par la voyelle A [a]."},
                                        {"id": "o2", "text": "Le son [o] (comme dans orage)", "isCorrect": False, "feedback": "Non, écoutez bien l'attaque : A-vion, pas O-vion."},
                                        {"id": "o3", "text": "Le son [i] (comme dans image)", "isCorrect": False, "feedback": "Non, l'attaque sonore est [a]."}
                                    ],
                                    "explanation": "Le mot 'Avion' commence par la voyelle ouverte [a]."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-02 : Voyelles Arrondies [u] (ou), [y] (u), [e] (é), [ɛ] (è)
            {
                "id": "CHP-001-02",
                "moduleId": "MOD-001",
                "stage": 1,
                "title": "Les Voyelles Arrondies & Aiguës : [u] (ou), [y] (u), [e] (é)",
                "summary": "Distinguez le son 'ou' [u] du loup et le son 'u' [y] de la lune, ainsi que le chant clair du 'é' [e].",
                "rules": [
                    {
                        "id": "FR-INI-002",
                        "title": "Le contraste OU vs U",
                        "statement": "Le son 'ou' [u] projette les lèvres vers l'avant (comme un bisou). Le son 'u' [y] est typiquement français : dites 'i' tout en arrondissant les lèvres !",
                        "formula": "OU = [u] (loup, ours) · U = [y] (lune, tortue) · É = [e] (étoile, vélo)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-02-01",
                        "chapterId": "CHP-001-02",
                        "title": "Discrimination de OU, U et É",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-02-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-002",
                                "prompt": "Écoute et clique sur l'image qui contient le son [u] 'OU' comme dans 'Ours' :",
                                "audioText": "Ours",
                                "ipa": "/uʁs/",
                                "data": {
                                    "targetSound": "u",
                                    "cards": [
                                        {"id": "c1", "label": "Ours", "imageEmoji": "🐻", "sound": "Ours", "isCorrect": True},
                                        {"id": "c2", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False},
                                        {"id": "c3", "label": "Lit", "imageEmoji": "🛏️", "sound": "Lit", "isCorrect": False},
                                        {"id": "c4", "label": "Balle", "imageEmoji": "⚽", "sound": "Balle", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-02-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-002",
                                "prompt": "Trouve l'image qui contient le son [y] 'U' comme dans 'Lune' :",
                                "audioText": "Lune",
                                "ipa": "/lyn/",
                                "data": {
                                    "targetSound": "y",
                                    "cards": [
                                        {"id": "c1", "label": "Pomme", "imageEmoji": "🍎", "sound": "Pomme", "isCorrect": False},
                                        {"id": "c2", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": True},
                                        {"id": "c3", "label": "Loup", "imageEmoji": "🐺", "sound": "Loup", "isCorrect": False},
                                        {"id": "c4", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-02-03",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-002",
                                "prompt": "Trouve l'image qui commence par le son [e] 'É' comme dans 'Étoile' :",
                                "audioText": "Étoile",
                                "ipa": "/e.twal/",
                                "data": {
                                    "targetSound": "e",
                                    "cards": [
                                        {"id": "c1", "label": "Étoile", "imageEmoji": "⭐️", "sound": "Étoile", "isCorrect": True},
                                        {"id": "c2", "label": "Arbre", "imageEmoji": "🌳", "sound": "Arbre", "isCorrect": False},
                                        {"id": "c3", "label": "Avion", "imageEmoji": "✈️", "sound": "Avion", "isCorrect": False},
                                        {"id": "c4", "label": "Oiseau", "imageEmoji": "🐦", "sound": "Oiseau", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-02-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-002",
                                "prompt": "Assemble les syllabes pour former le mot 'TORTUE' :",
                                "audioText": "Tortue",
                                "ipa": "/tɔʁ.ty/",
                                "data": {
                                    "targetPhrase": "TORTUE",
                                    "targetPhonemes": "tor + tue",
                                    "availableBricks": ["tue", "tor", "mi", "sa"],
                                    "correctSequence": ["tor", "tue"]
                                }
                            },
                            {
                                "id": "EX-001-02-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-002",
                                "prompt": "Quelle est la différence entre 'ROUE' et 'RUE' ?",
                                "audioText": "Roue et Rue",
                                "data": {
                                    "question": "Quel son entend-on dans 'Roue' ?",
                                    "options": [
                                        {"id": "o1", "text": "Le son [u] écrit 'ou'", "isCorrect": True, "feedback": "Exact ! 'Roue' se prononce avec le son 'ou' /ʁu/."},
                                        {"id": "o2", "text": "Le son [y] écrit 'u'", "isCorrect": False, "feedback": "Non, avec 'u' c'est la 'rue' /ʁy/."},
                                        {"id": "o3", "text": "Le son [o] écrit 'o'", "isCorrect": False, "feedback": "Non, ce n'est pas le son O."}
                                    ],
                                    "explanation": "'Roue' contient le son /u/ (ou), tandis que 'rue' contient le son /y/ (u)."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-03 : Les Semi-Voyelles et Glissantes [wa] (oi) et [ɥi] (ui)
            {
                "id": "CHP-001-03",
                "moduleId": "MOD-001",
                "stage": 1,
                "title": "Les Sons Glissants : 'OI' [wa] et 'UI' [ɥi]",
                "summary": "Apprenez les deux combinaisons à deux sons les plus célèbres : 'oi' comme dans le roi, et 'ui' comme dans la pluie.",
                "rules": [
                    {
                        "id": "FR-INI-003",
                        "title": "Les diphtongues orales OI et UI",
                        "statement": "Les lettres O+I fusionnent pour chanter [wa] (roi, bois, oiseau). Les lettres U+I glissent pour faire [ɥi] (nuit, pluie, huit).",
                        "formula": "O + I = [wa] (roi, oiseau) · U + I = [ɥi] (pluie, nuit)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-03-01",
                        "chapterId": "CHP-001-03",
                        "title": "Maîtrise de OI [wa] et UI [ɥi]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-03-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-003",
                                "prompt": "Écoute et clique sur l'image qui contient le son [wa] 'OI' comme dans 'Roi' :",
                                "audioText": "Roi",
                                "ipa": "/ʁwa/",
                                "data": {
                                    "targetSound": "wa",
                                    "cards": [
                                        {"id": "c1", "label": "Roi", "imageEmoji": "👑", "sound": "Roi", "isCorrect": True},
                                        {"id": "c2", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False},
                                        {"id": "c3", "label": "Table", "imageEmoji": "🪵", "sound": "Table", "isCorrect": False},
                                        {"id": "c4", "label": "Avion", "imageEmoji": "✈️", "sound": "Avion", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-03-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-003",
                                "prompt": "Trouve l'image qui contient le son [ɥi] 'UI' comme dans 'Pluie' :",
                                "audioText": "Pluie",
                                "ipa": "/plɥi/",
                                "data": {
                                    "targetSound": "ɥi",
                                    "cards": [
                                        {"id": "c1", "label": "Pluie", "imageEmoji": "🌧️", "sound": "Pluie", "isCorrect": True},
                                        {"id": "c2", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False},
                                        {"id": "c3", "label": "Orange", "imageEmoji": "🍊", "sound": "Orange", "isCorrect": False},
                                        {"id": "c4", "label": "Chapeau", "imageEmoji": "🎩", "sound": "Chapeau", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-03-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-003",
                                "prompt": "Assemble les syllabes pour former le mot 'OISEAU' :",
                                "audioText": "Oiseau",
                                "ipa": "/wa.zo/",
                                "data": {
                                    "targetPhrase": "OISEAU",
                                    "targetPhonemes": "oi + seau",
                                    "availableBricks": ["seau", "oi", "ma", "te"],
                                    "correctSequence": ["oi", "seau"]
                                }
                            },
                            {
                                "id": "EX-001-03-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-003",
                                "prompt": "Assemble les syllabes pour composer 'PARAPLUIE' :",
                                "audioText": "Parapluie",
                                "ipa": "/pa.ʁa.plɥi/",
                                "data": {
                                    "targetPhrase": "PARAPLUIE",
                                    "targetPhonemes": "pa + ra + pluie",
                                    "availableBricks": ["pluie", "pa", "ra", "to"],
                                    "correctSequence": ["pa", "ra", "pluie"]
                                }
                            },
                            {
                                "id": "EX-001-03-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-003",
                                "prompt": "Comment se prononcent les lettres 'OI' dans le mot 'Étoile' ?",
                                "audioText": "Étoile",
                                "data": {
                                    "question": "Quel son produisent les lettres 'OI' ?",
                                    "options": [
                                        {"id": "o1", "text": "Le son [wa] (comme dans oiseau)", "isCorrect": True, "feedback": "Exact ! O+I se prononce toujours [wa]."},
                                        {"id": "o2", "text": "Le son [o] puis [i] séparés", "isCorrect": False, "feedback": "Non, elles fusionnent en un seul son glissant [wa]."},
                                        {"id": "o3", "text": "Le son [u] (comme dans loup)", "isCorrect": False, "feedback": "Non, pour [u] il faut les lettres 'OU'."}
                                    ],
                                    "explanation": "Le digramme 'OI' se prononce /wa/ en français standard."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-04 : Synthèse Vocalique & Boîte à Sons
            {
                "id": "CHP-001-04",
                "moduleId": "MOD-001",
                "stage": 1,
                "title": "Atelier de Discrimination : La Ronde des Voyelles",
                "summary": "Validez votre oreille d'or en reconnaissant instantanément les 6 voyelles et glissantes de base.",
                "rules": [
                    {
                        "id": "FR-INI-004",
                        "title": "La clé de voûte des voyelles",
                        "statement": "Toute syllabe française possède obligatoirement une voyelle en son centre : elle est le cœur vibrant du mot.",
                        "formula": "Pas de voyelle = Pas de syllabe !"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-04-01",
                        "chapterId": "CHP-001-04",
                        "title": "Le Grand Quiz d'Écoute des Voyelles",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-04-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-004",
                                "prompt": "Écoute 'ANANAS' et clique sur l'image :",
                                "audioText": "Ananas",
                                "ipa": "/a.na.na/",
                                "data": {
                                    "targetSound": "a",
                                    "cards": [
                                        {"id": "c1", "label": "Ananas", "imageEmoji": "🍍", "sound": "Ananas", "isCorrect": True},
                                        {"id": "c2", "label": "Orange", "imageEmoji": "🍊", "sound": "Orange", "isCorrect": False},
                                        {"id": "c3", "label": "Ours", "imageEmoji": "🐻", "sound": "Ours", "isCorrect": False},
                                        {"id": "c4", "label": "Étoile", "imageEmoji": "⭐️", "sound": "Étoile", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-04-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-004",
                                "prompt": "Écoute 'IGLOO' et clique sur la bonne image :",
                                "audioText": "Igloo",
                                "ipa": "/i.glu/",
                                "data": {
                                    "targetSound": "i",
                                    "cards": [
                                        {"id": "c1", "label": "Igloo", "imageEmoji": "🧊", "sound": "Igloo", "isCorrect": True},
                                        {"id": "c2", "label": "Avocat", "imageEmoji": "🥑", "sound": "Avocat", "isCorrect": False},
                                        {"id": "c3", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False},
                                        {"id": "c4", "label": "Roi", "imageEmoji": "👑", "sound": "Roi", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-04-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-004",
                                "prompt": "Assemble les syllabes pour composer 'MOTO' :",
                                "audioText": "Moto",
                                "ipa": "/mo.to/",
                                "data": {
                                    "targetPhrase": "MOTO",
                                    "targetPhonemes": "mo + to",
                                    "availableBricks": ["to", "mo", "lu", "pa"],
                                    "correctSequence": ["mo", "to"]
                                }
                            },
                            {
                                "id": "EX-001-04-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-004",
                                "prompt": "Quel mot contient à la fois le son [o] et le son [i] ?",
                                "audioText": "Oiseau",
                                "data": {
                                    "question": "Trouvez le mot contenant le son [wa] écrit 'oi' :",
                                    "options": [
                                        {"id": "o1", "text": "Un oiseau", "isCorrect": True, "feedback": "Parfait ! 'Oiseau' commence par la diphtongue 'oi' [wa]."},
                                        {"id": "o2", "text": "Une pomme", "isCorrect": False, "feedback": "Non, 'pomme' ne contient pas 'oi'."},
                                        {"id": "o3", "text": "Un livre", "isCorrect": False, "feedback": "Non, 'livre' contient seulement [i]."}
                                    ],
                                    "explanation": "Le mot 'oiseau' (/wa.zo/) contient le son [wa] écrit 'oi'."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_001)

    srs_cards.extend([
        {
            "id": "SRS-001-01",
            "stage": 1,
            "chapterId": "CHP-001-01",
            "ruleId": "FR-INI-001",
            "front": "Quel son fait la lettre A dans 'Avocat' ?",
            "back": "Le son [a] (bouche grande ouverte, son clair et chantant).",
            "explanation": "Le phonème /a/ est la voyelle la plus ouverte du français.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-02",
            "stage": 1,
            "chapterId": "CHP-001-02",
            "ruleId": "FR-INI-002",
            "front": "Comment prononce-t-on les lettres 'OU' dans 'Loup' et 'Ours' ?",
            "back": "Le son [u] (comme un bisou, lèvres projetées vers l'avant).",
            "explanation": "Ne pas confondre 'ou' [u] et 'u' [y].",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-03",
            "stage": 1,
            "chapterId": "CHP-001-03",
            "ruleId": "FR-INI-003",
            "front": "Quel son font les lettres 'OI' dans 'Roi' et 'Oiseau' ?",
            "back": "Le son glissant [wa] !",
            "explanation": "Les lettres O et I fusionnent pour créer la diphtongue /wa/.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-003 : Les Consonnes Continues & Fusion Syllabique Directe
    # =========================================================================
    mod_003 = {
        "id": "MOD-003",
        "stage": 1,
        "title": "Combinatoire Syllabique — Les Consonnes Continues (L, R, M, N, S, F, V)",
        "description": "Faites chanter les consonnes continues et assemblez vos premières syllabes directes : l+a = la, r+o = ro, m+a = ma, f+i = fi.",
        "chapters": [
            # CHP-001-05 : La consonne liquide L
            {
                "id": "CHP-001-05",
                "moduleId": "MOD-003",
                "stage": 1,
                "title": "La Consonne Liquide L : la, li, lo, lu, lé",
                "summary": "La langue monte contre le palais pour faire chanter le L : lll... Ajoutez une voyelle pour former la syllabe magique !",
                "rules": [
                    {
                        "id": "FR-INI-005",
                        "title": "La fusion syllabique avec L",
                        "statement": "Le son [l] se lie directement à la voyelle sans pause : L + A = LA, L + I = LI, L + O = LO, L + U = LU.",
                        "formula": "L + Voyelle = Syllabe chantante (L + A = LA)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-05-01",
                        "chapterId": "CHP-001-05",
                        "title": "Combinatoire L + Voyelle",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-05-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-005",
                                "prompt": "Écoute et trouve l'image qui commence par 'LI' comme dans 'Lit' :",
                                "audioText": "Lit",
                                "ipa": "/li/",
                                "data": {
                                    "targetSound": "li",
                                    "cards": [
                                        {"id": "c1", "label": "Lit", "imageEmoji": "🛏️", "sound": "Lit", "isCorrect": True},
                                        {"id": "c2", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False},
                                        {"id": "c3", "label": "Loup", "imageEmoji": "🐺", "sound": "Loup", "isCorrect": False},
                                        {"id": "c4", "label": "Livre", "imageEmoji": "📖", "sound": "Livre", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-05-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-005",
                                "prompt": "Assemble les syllabes pour composer 'LAMA' :",
                                "audioText": "Lama",
                                "ipa": "/la.ma/",
                                "data": {
                                    "targetPhrase": "LAMA",
                                    "targetPhonemes": "la + ma",
                                    "availableBricks": ["ma", "la", "to", "ru"],
                                    "correctSequence": ["la", "ma"]
                                }
                            },
                            {
                                "id": "EX-001-05-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-005",
                                "prompt": "Assemble les syllabes pour former 'LIVRE' :",
                                "audioText": "Livre",
                                "ipa": "/livʁ/",
                                "data": {
                                    "targetPhrase": "LIVRE",
                                    "targetPhonemes": "li + vre",
                                    "availableBricks": ["vre", "li", "ba", "no"],
                                    "correctSequence": ["li", "vre"]
                                }
                            },
                            {
                                "id": "EX-001-05-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-005",
                                "prompt": "Que forme la rencontre de la lettre L et de la lettre O ?",
                                "audioText": "L plus O égale LO",
                                "data": {
                                    "question": "L + O se lit :",
                                    "options": [
                                        {"id": "o1", "text": "LO (comme dans Lotus)", "isCorrect": True, "feedback": "Exactement ! L + O se fusionne en LO."},
                                        {"id": "o2", "text": "LA (comme dans Lac)", "isCorrect": False, "feedback": "Non, pour LA il faut un A."},
                                        {"id": "o3", "text": "LI (comme dans Lit)", "isCorrect": False, "feedback": "Non, pour LI il faut un I."}
                                    ],
                                    "explanation": "La fusion de la consonne [l] et de la voyelle [o] donne la syllabe /lo/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-06 : La consonne vibrante R
            {
                "id": "CHP-001-06",
                "moduleId": "MOD-003",
                "stage": 1,
                "title": "La Consonne Vibrante R : ra, ri, ro, ru, ré",
                "summary": "Le R roule doucement au fond de la gorge. Fusionnez-le avec vos voyelles pour faire tourner les mots !",
                "rules": [
                    {
                        "id": "FR-INI-006",
                        "title": "Le R français et sa combinatoire",
                        "statement": "Le son [ʁ] frotte au fond du voile du palais. R + A = RA (rat, radio), R + I = RI (riz, rideau), R + O = RO (robot, robe).",
                        "formula": "R + A = RA · R + I = RI · R + O = RO"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-06-01",
                        "chapterId": "CHP-001-06",
                        "title": "Combinatoire R + Voyelle",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-06-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-006",
                                "prompt": "Écoute et trouve l'image qui commence par 'RO' comme dans 'Robot' :",
                                "audioText": "Robot",
                                "ipa": "/ʁo.bo/",
                                "data": {
                                    "targetSound": "ro",
                                    "cards": [
                                        {"id": "c1", "label": "Robot", "imageEmoji": "🤖", "sound": "Robot", "isCorrect": True},
                                        {"id": "c2", "label": "Radio", "imageEmoji": "📻", "sound": "Radio", "isCorrect": False},
                                        {"id": "c3", "label": "Riz", "imageEmoji": "🍚", "sound": "Riz", "isCorrect": False},
                                        {"id": "c4", "label": "Ruche", "imageEmoji": "🐝", "sound": "Ruche", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-06-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-006",
                                "prompt": "Assemble les syllabes pour composer 'ROBE' :",
                                "audioText": "Robe",
                                "ipa": "/ʁɔb/",
                                "data": {
                                    "targetPhrase": "ROBE",
                                    "targetPhonemes": "ro + be",
                                    "availableBricks": ["be", "ro", "li", "ma"],
                                    "correctSequence": ["ro", "be"]
                                }
                            },
                            {
                                "id": "EX-001-06-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-006",
                                "prompt": "Assemble les syllabes pour composer 'RADIO' :",
                                "audioText": "Radio",
                                "ipa": "/ʁa.djo/",
                                "data": {
                                    "targetPhrase": "RADIO",
                                    "targetPhonemes": "ra + dio",
                                    "availableBricks": ["dio", "ra", "me", "lu"],
                                    "correctSequence": ["ra", "dio"]
                                }
                            },
                            {
                                "id": "EX-001-06-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-006",
                                "prompt": "Quelle syllabe commence le mot 'Riz' ?",
                                "audioText": "Riz",
                                "data": {
                                    "question": "Le mot 'Riz' (/ʁi/) correspond à :",
                                    "options": [
                                        {"id": "o1", "text": "R + I = RI", "isCorrect": True, "feedback": "Exact ! C'est la syllabe RI."},
                                        {"id": "o2", "text": "R + A = RA", "isCorrect": False, "feedback": "Non, cela ferait 'rat'."},
                                        {"id": "o3", "text": "R + U = RU", "isCorrect": False, "feedback": "Non, cela ferait 'rue'."}
                                    ],
                                    "explanation": "Le mot 'riz' se compose du son consonantique [ʁ] et de la voyelle [i]."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-07 : Les consonnes nasales M et N
            {
                "id": "CHP-001-07",
                "moduleId": "MOD-003",
                "stage": 1,
                "title": "Les Consonnes M et N : ma, mi, mo / na, ni, no",
                "summary": "Pincez doucement le nez : mmm et nnn résonnent ! Formez les premiers mots les plus doux : maman, ami, mine.",
                "rules": [
                    {
                        "id": "FR-INI-007",
                        "title": "Les consonnes nasales M et N",
                        "statement": "M réunit les deux lèvres (bilabiale). N pose la langue contre les dents du haut (alvéolaire). M+A = MA, N+A = NA.",
                        "formula": "M + A = MA · M + I = MI · N + A = NA · N + I = NI"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-07-01",
                        "chapterId": "CHP-001-07",
                        "title": "Combinatoire M et N",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-07-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-007",
                                "prompt": "Trouve l'image qui commence par 'MA' comme dans 'Maison' :",
                                "audioText": "Maison",
                                "ipa": "/mɛ.zɔ̃/",
                                "data": {
                                    "targetSound": "ma",
                                    "cards": [
                                        {"id": "c1", "label": "Maison", "imageEmoji": "🏠", "sound": "Maison", "isCorrect": True},
                                        {"id": "c2", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False},
                                        {"id": "c3", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False},
                                        {"id": "c4", "label": "Nid", "imageEmoji": "🪹", "sound": "Nid", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-07-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-007",
                                "prompt": "Assemble les syllabes pour composer 'MAMAN' :",
                                "audioText": "Maman",
                                "ipa": "/ma.mɑ̃/",
                                "data": {
                                    "targetPhrase": "MAMAN",
                                    "targetPhonemes": "ma + man",
                                    "availableBricks": ["man", "to", "ma", "pa"],
                                    "correctSequence": ["ma", "man"]
                                }
                            },
                            {
                                "id": "EX-001-07-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-007",
                                "prompt": "Assemble les syllabes pour composer 'NAVET' :",
                                "audioText": "Navet",
                                "ipa": "/na.vɛ/",
                                "data": {
                                    "targetPhrase": "NAVET",
                                    "targetPhonemes": "na + vet",
                                    "availableBricks": ["vet", "na", "ro", "li"],
                                    "correctSequence": ["na", "vet"]
                                }
                            },
                            {
                                "id": "EX-001-07-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-007",
                                "prompt": "Quel mot peut-on lire en fusionnant N + I + D ?",
                                "audioText": "Nid",
                                "data": {
                                    "question": "Que donne la lecture du mot 'NID' ?",
                                    "options": [
                                        {"id": "o1", "text": "Un nid d'oiseau (/ni/)", "isCorrect": True, "feedback": "Bravo ! Le D final est muet, on lit /ni/."},
                                        {"id": "o2", "text": "Un lit", "isCorrect": False, "feedback": "Non, cela commence par L."},
                                        {"id": "o3", "text": "Un midi", "isCorrect": False, "feedback": "Non, midi a deux syllabes."}
                                    ],
                                    "explanation": "Le mot 'nid' se compose de la syllabe [ni] avec un d muet."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-08 : Les consonnes fricatives F, V, S, Z, CH
            {
                "id": "CHP-001-08",
                "moduleId": "MOD-003",
                "stage": 1,
                "title": "Les Fricatives F, V, S, Z et CH : Souffler et Chuchoter",
                "summary": "Faites siffler le vent (F, V, S, Z) et chuchoter le vent doux (CH [ʃ]) : chat, fée, vélo, sac.",
                "rules": [
                    {
                        "id": "FR-INI-008",
                        "title": "Les consonnes du souffle",
                        "statement": "F souffle sans voix (sourde). V vibre avec la voix (sonore). S siffle comme le serpent. CH [ʃ] invite au silence : chut !",
                        "formula": "F vs V · S vs Z · CH = [ʃ] (chat, chapeau)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-08-01",
                        "chapterId": "CHP-001-08",
                        "title": "F, V, S et le son CH [ʃ]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-08-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-008",
                                "prompt": "Écoute et trouve l'image qui commence par le son [ʃ] 'CH' comme dans 'Chat' :",
                                "audioText": "Chat",
                                "ipa": "/ʃa/",
                                "data": {
                                    "targetSound": "ʃ",
                                    "cards": [
                                        {"id": "c1", "label": "Chat", "imageEmoji": "🐱", "sound": "Chat", "isCorrect": True},
                                        {"id": "c2", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False},
                                        {"id": "c3", "label": "Vélo", "imageEmoji": "🚲", "sound": "Vélo", "isCorrect": False},
                                        {"id": "c4", "label": "Lune", "imageEmoji": "🌙", "sound": "Lune", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-08-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-008",
                                "prompt": "Trouve l'image qui commence par 'VÉ' comme dans 'Vélo' :",
                                "audioText": "Vélo",
                                "ipa": "/ve.lo/",
                                "data": {
                                    "targetSound": "ve",
                                    "cards": [
                                        {"id": "c1", "label": "Vélo", "imageEmoji": "🚲", "sound": "Vélo", "isCorrect": True},
                                        {"id": "c2", "label": "Fée", "imageEmoji": "🧚", "sound": "Fée", "isCorrect": False},
                                        {"id": "c3", "label": "Robot", "imageEmoji": "🤖", "sound": "Robot", "isCorrect": False},
                                        {"id": "c4", "label": "Avion", "imageEmoji": "✈️", "sound": "Avion", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-08-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-008",
                                "prompt": "Assemble les syllabes pour composer 'CHAPEAU' :",
                                "audioText": "Chapeau",
                                "ipa": "/ʃa.po/",
                                "data": {
                                    "targetPhrase": "CHAPEAU",
                                    "targetPhonemes": "cha + peau",
                                    "availableBricks": ["peau", "cha", "li", "me"],
                                    "correctSequence": ["cha", "peau"]
                                }
                            },
                            {
                                "id": "EX-001-08-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-008",
                                "prompt": "Assemble les syllabes pour composer 'SALADE' :",
                                "audioText": "Salade",
                                "ipa": "/sa.lad/",
                                "data": {
                                    "targetPhrase": "SALADE",
                                    "targetPhonemes": "sa + la + de",
                                    "availableBricks": ["la", "sa", "de", "mo", "ri"],
                                    "correctSequence": ["sa", "la", "de"]
                                }
                            },
                            {
                                "id": "EX-001-08-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-008",
                                "prompt": "Quel est le son produit par les deux lettres C et H réunies dans 'Château' ?",
                                "audioText": "Château",
                                "data": {
                                    "question": "Le digramme CH se prononce :",
                                    "options": [
                                        {"id": "o1", "text": "Le son chuintant [ʃ] (comme dans chat, chut)", "isCorrect": True, "feedback": "Exact ! C+H forme le son [ʃ]."},
                                        {"id": "o2", "text": "Le son dur [k] (comme dans café)", "isCorrect": False, "feedback": "Rarement, uniquement dans quelques mots d'origine grecque (écho, chorale)."},
                                        {"id": "o3", "text": "Le son sifflant [s] (comme dans sac)", "isCorrect": False, "feedback": "Non, CH ne siffle pas."}
                                    ],
                                    "explanation": "En français, CH produit généralement le phonème fricatif post-alvéolaire /ʃ/."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_003)

    srs_cards.extend([
        {
            "id": "SRS-001-04",
            "stage": 1,
            "chapterId": "CHP-001-05",
            "ruleId": "FR-INI-005",
            "front": "Que donne la fusion syllabique de L + A ?",
            "back": "La syllabe LA (comme dans Lama, Lac).",
            "explanation": "Les consonnes liquides s'unissent harmonieusement aux voyelles.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-05",
            "stage": 1,
            "chapterId": "CHP-001-08",
            "ruleId": "FR-INI-008",
            "front": "Quel son font les lettres CH dans 'Chapeau' et 'Cheval' ?",
            "back": "Le son doux [ʃ] (comme dans 'chut !').",
            "explanation": "Le graphème CH transcrit le phonème /ʃ/.",
            "stability": 2.5,
            "difficulty": 2.0,
            "retention": 95.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-004 : Les Consonnes Occlusives & Paires Minimales
    # =========================================================================
    mod_004 = {
        "id": "MOD-004",
        "stage": 1,
        "title": "Précision Phonologique — Les Consonnes Occlusives (P, B, T, D, C/K, G)",
        "description": "Maîtrisez les explosions sonores et les contrastes sourdes/sonores fondamentaux : p vs b, t vs d, c/k vs g, j/g doux.",
        "chapters": [
            # CHP-001-09 : Le couple bilabial P et B
            {
                "id": "CHP-001-09",
                "moduleId": "MOD-004",
                "stage": 1,
                "title": "Le Couple Bilabial P et B : pa, po, pi / ba, bo, bi",
                "summary": "Pensez aux lèvres qui éclatent : P est léger et souffle de l'air, B fait résonner la voix dans la gorge.",
                "rules": [
                    {
                        "id": "FR-INI-009",
                        "title": "L'opposition P vs B (Paire Minimale)",
                        "statement": "P et B ferment les deux lèvres. Mais P est sourd (les cordes vocales ne vibrent pas : papa, pomme), alors que B est sonore (bébé, bateau).",
                        "formula": "P (sourd) vs B (sonore) : pont vs bon · pain vs bain"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-09-01",
                        "chapterId": "CHP-001-09",
                        "title": "Discrimination et Mots en P et B",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-09-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-009",
                                "prompt": "Écoute et clique sur l'image qui commence par [p] comme dans 'Pomme' :",
                                "audioText": "Pomme",
                                "ipa": "/pɔm/",
                                "data": {
                                    "targetSound": "p",
                                    "cards": [
                                        {"id": "c1", "label": "Pomme", "imageEmoji": "🍎", "sound": "Pomme", "isCorrect": True},
                                        {"id": "c2", "label": "Bateau", "imageEmoji": "⛵", "sound": "Bateau", "isCorrect": False},
                                        {"id": "c3", "label": "Banane", "imageEmoji": "🍌", "sound": "Banane", "isCorrect": False},
                                        {"id": "c4", "label": "Balle", "imageEmoji": "⚽", "sound": "Balle", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-09-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-009",
                                "prompt": "Trouve l'image qui commence par [b] comme dans 'Bateau' :",
                                "audioText": "Bateau",
                                "ipa": "/ba.to/",
                                "data": {
                                    "targetSound": "b",
                                    "cards": [
                                        {"id": "c1", "label": "Bateau", "imageEmoji": "⛵", "sound": "Bateau", "isCorrect": True},
                                        {"id": "c2", "label": "Pomme", "imageEmoji": "🍎", "sound": "Pomme", "isCorrect": False},
                                        {"id": "c3", "label": "Porte", "imageEmoji": "🚪", "sound": "Porte", "isCorrect": False},
                                        {"id": "c4", "label": "Papa", "imageEmoji": "👨", "sound": "Papa", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-09-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-009",
                                "prompt": "Assemble les syllabes pour composer 'BANANE' :",
                                "audioText": "Banane",
                                "ipa": "/ba.nan/",
                                "data": {
                                    "targetPhrase": "BANANE",
                                    "targetPhonemes": "ba + na + ne",
                                    "availableBricks": ["na", "ba", "po", "ne", "li"],
                                    "correctSequence": ["ba", "na", "ne"]
                                }
                            },
                            {
                                "id": "EX-001-09-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-009",
                                "prompt": "Assemble les syllabes pour composer 'PAPA' :",
                                "audioText": "Papa",
                                "ipa": "/pa.pa/",
                                "data": {
                                    "targetPhrase": "PAPA",
                                    "targetPhonemes": "pa + pa",
                                    "availableBricks": ["pa", "pa", "ba", "to"],
                                    "correctSequence": ["pa", "pa"]
                                }
                            },
                            {
                                "id": "EX-001-09-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-009",
                                "prompt": "Quelle consonne entend-on au début du mot 'Ballon' ?",
                                "audioText": "Ballon",
                                "data": {
                                    "question": "Ballon commence par :",
                                    "options": [
                                        {"id": "o1", "text": "La lettre B (sonore /b/)", "isCorrect": True, "feedback": "Exact ! C'est un Ballon, avec un B sonore."},
                                        {"id": "o2", "text": "La lettre P (sourde /p/)", "isCorrect": False, "feedback": "Non, ce n'est pas un Pallon !"},
                                        {"id": "o3", "text": "La lettre D", "isCorrect": False, "feedback": "Non, la lettre D est dentale."}
                                    ],
                                    "explanation": "Le mot 'ballon' commence par la consonne occlusive bilabiale voisée /b/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-10 : Le couple dental T et D
            {
                "id": "CHP-001-10",
                "moduleId": "MOD-004",
                "stage": 1,
                "title": "Le Couple Dental T et D : ta, to, ti / da, do, di",
                "summary": "La langue frappe derrière les incisives supérieures : T claque sèchement, D vibre avec force.",
                "rules": [
                    {
                        "id": "FR-INI-010",
                        "title": "L'opposition T vs D",
                        "statement": "T est une occlusive dentale sourde (tapis, tomate, tortue). D est son équivalent voisé et sonore (dé, date, domino).",
                        "formula": "T (sourd) vs D (sonore) : train vs drain · toit vs doigt"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-10-01",
                        "chapterId": "CHP-001-10",
                        "title": "T et D en Action",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-10-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-010",
                                "prompt": "Trouve l'image qui commence par [t] comme dans 'Tortue' :",
                                "audioText": "Tortue",
                                "ipa": "/tɔʁ.ty/",
                                "data": {
                                    "targetSound": "t",
                                    "cards": [
                                        {"id": "c1", "label": "Tortue", "imageEmoji": "🐢", "sound": "Tortue", "isCorrect": True},
                                        {"id": "c2", "label": "Domino", "imageEmoji": "🀄", "sound": "Domino", "isCorrect": False},
                                        {"id": "c3", "label": "Doigt", "imageEmoji": "☝️", "sound": "Doigt", "isCorrect": False},
                                        {"id": "c4", "label": "Dent", "imageEmoji": "🦷", "sound": "Dent", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-10-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-010",
                                "prompt": "Trouve l'image qui commence par [d] comme dans 'Dé' :",
                                "audioText": "Dé",
                                "ipa": "/de/",
                                "data": {
                                    "targetSound": "d",
                                    "cards": [
                                        {"id": "c1", "label": "Dé", "imageEmoji": "🎲", "sound": "Dé", "isCorrect": True},
                                        {"id": "c2", "label": "Table", "imageEmoji": "🪵", "sound": "Table", "isCorrect": False},
                                        {"id": "c3", "label": "Tapis", "imageEmoji": "🧶", "sound": "Tapis", "isCorrect": False},
                                        {"id": "c4", "label": "Tomate", "imageEmoji": "🍅", "sound": "Tomate", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-10-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-010",
                                "prompt": "Assemble les syllabes pour composer 'TOMATE' :",
                                "audioText": "Tomate",
                                "ipa": "/tɔ.mat/",
                                "data": {
                                    "targetPhrase": "TOMATE",
                                    "targetPhonemes": "to + ma + te",
                                    "availableBricks": ["ma", "to", "te", "lu", "pa"],
                                    "correctSequence": ["to", "ma", "te"]
                                }
                            },
                            {
                                "id": "EX-001-10-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-010",
                                "prompt": "Assemble les syllabes pour composer 'DOMINO' :",
                                "audioText": "Domino",
                                "ipa": "/dɔ.mi.no/",
                                "data": {
                                    "targetPhrase": "DOMINO",
                                    "targetPhonemes": "do + mi + no",
                                    "availableBricks": ["mi", "do", "no", "sa"],
                                    "correctSequence": ["do", "mi", "no"]
                                }
                            },
                            {
                                "id": "EX-001-10-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-010",
                                "prompt": "Si on remplace le T de 'TOIT' par un D, quel mot obtient-on ?",
                                "audioText": "Toit et Doigt",
                                "data": {
                                    "question": "Toit / Doigt forme :",
                                    "options": [
                                        {"id": "o1", "text": "Une paire minimale (un seul son change le sens)", "isCorrect": True, "feedback": "Exactement ! Le changement de /t/ en /d/ transforme l'abri en doigt de la main."},
                                        {"id": "o2", "text": "Le même mot prononcé différemment", "isCorrect": False, "feedback": "Non, un toit et un doigt sont deux choses totalement distinctes !"},
                                        {"id": "o3", "text": "Une faute d'orthographe", "isCorrect": False, "feedback": "Non, les deux mots existent."}
                                    ],
                                    "explanation": "Toit (/twa/) et Doigt (/dwa/) forment une paire minimale illustrant l'opposition T/D."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-11 : Le couple vélaire C/K et G dur
            {
                "id": "CHP-001-11",
                "moduleId": "MOD-004",
                "stage": 1,
                "title": "Le Couple Vélaire : C dur [k] et G dur [g]",
                "summary": "Au fond de la bouche, la gorge claque : C dur [k] (café, coq) et G dur [g] (gare, gomme, guitare).",
                "rules": [
                    {
                        "id": "FR-INI-011",
                        "title": "La règle des voyelles A, O, U pour C et G",
                        "statement": "Devant A, O, U, la lettre C sonne toujours dur [k] (café, cube). La lettre G sonne dur [g] (gare, gâteau, gomme).",
                        "formula": "CA = [ka] · CO = [ko] · CU = [ky] | GA = [ga] · GO = [go] · GU = [gy]"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-11-01",
                        "chapterId": "CHP-001-11",
                        "title": "C dur [k] et G dur [g]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-11-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-011",
                                "prompt": "Trouve l'image qui commence par [k] 'CA' comme dans 'Café' :",
                                "audioText": "Café",
                                "ipa": "/ka.fe/",
                                "data": {
                                    "targetSound": "ka",
                                    "cards": [
                                        {"id": "c1", "label": "Café", "imageEmoji": "☕", "sound": "Café", "isCorrect": True},
                                        {"id": "c2", "label": "Gare", "imageEmoji": "🚉", "sound": "Gare", "isCorrect": False},
                                        {"id": "c3", "label": "Gâteau", "imageEmoji": "🍰", "sound": "Gâteau", "isCorrect": False},
                                        {"id": "c4", "label": "Bague", "imageEmoji": "💍", "sound": "Bague", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-11-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-011",
                                "prompt": "Trouve l'image qui commence par [g] 'GA' comme dans 'Gare' :",
                                "audioText": "Gare",
                                "ipa": "/gaʁ/",
                                "data": {
                                    "targetSound": "ga",
                                    "cards": [
                                        {"id": "c1", "label": "Gare", "imageEmoji": "🚉", "sound": "Gare", "isCorrect": True},
                                        {"id": "c2", "label": "Camion", "imageEmoji": "🚚", "sound": "Camion", "isCorrect": False},
                                        {"id": "c3", "label": "Coq", "imageEmoji": "🐓", "sound": "Coq", "isCorrect": False},
                                        {"id": "c4", "label": "Cube", "imageEmoji": "🧊", "sound": "Cube", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-11-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-011",
                                "prompt": "Assemble les syllabes pour composer 'CANAPÉ' :",
                                "audioText": "Canapé",
                                "ipa": "/ka.na.pe/",
                                "data": {
                                    "targetPhrase": "CANAPÉ",
                                    "targetPhonemes": "ca + na + pé",
                                    "availableBricks": ["na", "ca", "pé", "to", "ro"],
                                    "correctSequence": ["ca", "na", "pé"]
                                }
                            },
                            {
                                "id": "EX-001-11-04",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-011",
                                "prompt": "Assemble les syllabes pour composer 'GÂTEAU' :",
                                "audioText": "Gâteau",
                                "ipa": "/ga.to/",
                                "data": {
                                    "targetPhrase": "GÂTEAU",
                                    "targetPhonemes": "gâ + teau",
                                    "availableBricks": ["teau", "gâ", "li", "me"],
                                    "correctSequence": ["gâ", "teau"]
                                }
                            },
                            {
                                "id": "EX-001-11-05",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-011",
                                "prompt": "Comment se prononce la lettre C dans le mot 'Cube' ?",
                                "audioText": "Cube",
                                "data": {
                                    "question": "Dans 'Cube', le C se lit :",
                                    "options": [
                                        {"id": "o1", "text": "Le son dur [k] (comme dans café)", "isCorrect": True, "feedback": "Bravo ! Devant U, C se lit toujours [k]."},
                                        {"id": "o2", "text": "Le son doux [s] (comme dans ciel)", "isCorrect": False, "feedback": "Non, C fait [s] seulement devant E, I et Y."},
                                        {"id": "o3", "text": "Le son [ʃ] (comme dans chat)", "isCorrect": False, "feedback": "Non, il faudrait un H."}
                                    ],
                                    "explanation": "La lettre C suivie de la voyelle U se prononce /k/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-12 : Les chuintantes sonores J et G doux [ʒ]
            {
                "id": "CHP-001-12",
                "moduleId": "MOD-004",
                "stage": 1,
                "title": "La Consonne Voisée J et G doux : [ʒ]",
                "summary": "Faites vibrer le son du vent chaud : J (jupe, jardin) et G devant E/I (girafe, genou).",
                "rules": [
                    {
                        "id": "FR-INI-012",
                        "title": "Le phonème [ʒ] (J et G doux)",
                        "statement": "La lettre J chante toujours [ʒ] (jupe, jardin). La lettre G chante [ʒ] lorsqu'elle est placée directement devant E ou I (girafe, genou).",
                        "formula": "J = [ʒ] · G + E / G + I = [ʒ] (girafe, genou)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-12-01",
                        "chapterId": "CHP-001-12",
                        "title": "Pratique du son [ʒ]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-12-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-012",
                                "prompt": "Trouve l'image qui commence par [ʒ] comme dans 'Jupe' :",
                                "audioText": "Jupe",
                                "ipa": "/ʒyp/",
                                "data": {
                                    "targetSound": "ʒ",
                                    "cards": [
                                        {"id": "c1", "label": "Jupe", "imageEmoji": "👗", "sound": "Jupe", "isCorrect": True},
                                        {"id": "c2", "label": "Chapeau", "imageEmoji": "🎩", "sound": "Chapeau", "isCorrect": False},
                                        {"id": "c3", "label": "Bateau", "imageEmoji": "⛵", "sound": "Bateau", "isCorrect": False},
                                        {"id": "c4", "label": "Soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-12-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-012",
                                "prompt": "Trouve l'animal dont le nom commence par [ʒ] comme dans 'Girafe' :",
                                "audioText": "Girafe",
                                "ipa": "/ʒi.ʁaf/",
                                "data": {
                                    "targetSound": "ʒ",
                                    "cards": [
                                        {"id": "c1", "label": "Girafe", "imageEmoji": "🦒", "sound": "Girafe", "isCorrect": True},
                                        {"id": "c2", "label": "Chat", "imageEmoji": "🐱", "sound": "Chat", "isCorrect": False},
                                        {"id": "c3", "label": "Loup", "imageEmoji": "🐺", "sound": "Loup", "isCorrect": False},
                                        {"id": "c4", "label": "Ours", "imageEmoji": "🐻", "sound": "Ours", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-12-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-012",
                                "prompt": "Assemble les syllabes pour composer 'JARDIN' :",
                                "audioText": "Jardin",
                                "ipa": "/ʒaʁ.dɛ̃/",
                                "data": {
                                    "targetPhrase": "JARDIN",
                                    "targetPhonemes": "jar + din",
                                    "availableBricks": ["din", "jar", "to", "ma"],
                                    "correctSequence": ["jar", "din"]
                                }
                            },
                            {
                                "id": "EX-001-12-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-012",
                                "prompt": "Dans quel mot la lettre G se prononce-t-elle comme un J [ʒ] ?",
                                "audioText": "Girafe et Gare",
                                "data": {
                                    "question": "Où le G fait-il le son doux [ʒ] ?",
                                    "options": [
                                        {"id": "o1", "text": "Dans 'Girafe' (car le G est devant un I)", "isCorrect": True, "feedback": "Exactement ! G + I se prononce /ʒi/."},
                                        {"id": "o2", "text": "Dans 'Gare' (devant un A)", "isCorrect": False, "feedback": "Non, devant A c'est le G dur /ga/."},
                                        {"id": "o3", "text": "Dans 'Gomme' (devant un O)", "isCorrect": False, "feedback": "Non, devant O c'est le G dur /gɔm/."}
                                    ],
                                    "explanation": "La lettre G se prononce /ʒ/ devant les voyelles E, I et Y."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_004)

    srs_cards.extend([
        {
            "id": "SRS-001-06",
            "stage": 1,
            "chapterId": "CHP-001-09",
            "ruleId": "FR-INI-009",
            "front": "Quelle est la différence phonétique entre P et B ?",
            "back": "P est sourd (sans vibration vocale : papa), B est sonore (vibrant : bébé).",
            "explanation": "P et B forment la plus célèbre paire minimale bilabiale.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-07",
            "stage": 1,
            "chapterId": "CHP-001-11",
            "ruleId": "FR-INI-011",
            "front": "Comment se prononce la lettre C devant les voyelles A, O, U ?",
            "back": "Elle se prononce toujours dur [k] (café, coq, cube).",
            "explanation": "Pour obtenir le son [s] devant A/O/U, il faudrait une cédille : Ç.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    # =========================================================================
    # MODULE MOD-005 : Voyelles Nasales, Syllabes Complexes & Premières Phrases
    # =========================================================================
    mod_005 = {
        "id": "MOD-005",
        "stage": 1,
        "title": "La Musique du Français — Voyelles Nasales & Premières Lectures",
        "description": "Les trois grandes voyelles nasales magiques du français [an, on, in], les groupes consonantiques (tr, pl, cl) et la lecture autonome de phrases réelles.",
        "chapters": [
            # CHP-001-13 : La voyelle nasale AN / EN [ɑ̃]
            {
                "id": "CHP-001-13",
                "moduleId": "MOD-005",
                "stage": 1,
                "title": "La Voyelle Nasale AN / EN : [ɑ̃]",
                "summary": "L'air passe à la fois par la bouche et par le nez pour faire résonner [ɑ̃] : maman, enfant, tente, tambour.",
                "rules": [
                    {
                        "id": "FR-INI-013",
                        "title": "La voyelle nasale [ɑ̃] (an, en, am, em)",
                        "statement": "Les graphèmes AN et EN transcrivent le même son /ɑ̃/. Devant M, B, P, le N devient M (tambour, lampe).",
                        "formula": "AN / EN = [ɑ̃] (maman, enfant) · AM / EM devant m/b/p"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-13-01",
                        "chapterId": "CHP-001-13",
                        "title": "Écoute et Lecture de [ɑ̃]",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-13-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-013",
                                "prompt": "Trouve l'image qui contient le son [ɑ̃] comme dans 'Enfant' :",
                                "audioText": "Enfant",
                                "ipa": "/ɑ̃.fɑ̃/",
                                "data": {
                                    "targetSound": "ɑ̃",
                                    "cards": [
                                        {"id": "c1", "label": "Enfant", "imageEmoji": "🧒", "sound": "Enfant", "isCorrect": True},
                                        {"id": "c2", "label": "Robot", "imageEmoji": "🤖", "sound": "Robot", "isCorrect": False},
                                        {"id": "c3", "label": "Livre", "imageEmoji": "📖", "sound": "Livre", "isCorrect": False},
                                        {"id": "c4", "label": "Pomme", "imageEmoji": "🍎", "sound": "Pomme", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-13-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-013",
                                "prompt": "Assemble les syllabes pour composer 'PANTALON' :",
                                "audioText": "Pantalon",
                                "ipa": "/pɑ̃.ta.lɔ̃/",
                                "data": {
                                    "targetPhrase": "PANTALON",
                                    "targetPhonemes": "pan + ta + lon",
                                    "availableBricks": ["ta", "pan", "lon", "mi", "re"],
                                    "correctSequence": ["pan", "ta", "lon"]
                                }
                            },
                            {
                                "id": "EX-001-13-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-013",
                                "prompt": "Assemble les syllabes pour former 'TAMBOUR' :",
                                "audioText": "Tambour",
                                "ipa": "/tɑ̃.buʁ/",
                                "data": {
                                    "targetPhrase": "TAMBOUR",
                                    "targetPhonemes": "tam + bour",
                                    "availableBricks": ["bour", "tam", "lo", "sa"],
                                    "correctSequence": ["tam", "bour"]
                                }
                            },
                            {
                                "id": "EX-001-13-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-013",
                                "prompt": "Combien de fois entend-on le son [ɑ̃] dans le mot 'ENFANT' ?",
                                "audioText": "Enfant",
                                "data": {
                                    "question": "Dans 'enfant' (/ɑ̃.fɑ̃/) :",
                                    "options": [
                                        {"id": "o1", "text": "2 fois : 'en' puis 'fant'", "isCorrect": True, "feedback": "Exactement ! Les deux syllabes contiennent la même voyelle nasale /ɑ̃/."},
                                        {"id": "o2", "text": "1 seule fois à la fin", "isCorrect": False, "feedback": "Non, le début 'en' est également nasalisé."},
                                        {"id": "o3", "text": "Aucune fois", "isCorrect": False, "feedback": "Incorrect, ce mot est l'exemple type du son [ɑ̃]."}
                                    ],
                                    "explanation": "Le mot 'enfant' est formé de deux syllabes nasales identiques /ɑ̃-fɑ̃/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-14 : La voyelle nasale ON [ɔ̃]
            {
                "id": "CHP-001-14",
                "moduleId": "MOD-005",
                "stage": 1,
                "title": "La Voyelle Nasale ON : [ɔ̃]",
                "summary": "Arrondissez bien la bouche tout en envoyant l'air par le nez : ballon, bonbon, pont, maison.",
                "rules": [
                    {
                        "id": "FR-INI-014",
                        "title": "La voyelle nasale [ɔ̃] (on, om)",
                        "statement": "Le digramme ON produit la voyelle nasale /ɔ̃/. C'est le son que l'on entend dans le mot 'bon' ou 'ballon'.",
                        "formula": "O + N = [ɔ̃] (ballon, bonbon, pont)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-14-01",
                        "chapterId": "CHP-001-14",
                        "title": "Le Son ON [ɔ̃] et ses Mots Doux",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-14-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-014",
                                "prompt": "Trouve l'image qui se termine par [ɔ̃] comme dans 'Ballon' :",
                                "audioText": "Ballon",
                                "ipa": "/ba.lɔ̃/",
                                "data": {
                                    "targetSound": "ɔ̃",
                                    "cards": [
                                        {"id": "c1", "label": "Ballon", "imageEmoji": "🎈", "sound": "Ballon", "isCorrect": True},
                                        {"id": "c2", "label": "Bateau", "imageEmoji": "⛵", "sound": "Bateau", "isCorrect": False},
                                        {"id": "c3", "label": "Balle", "imageEmoji": "⚽", "sound": "Balle", "isCorrect": False},
                                        {"id": "c4", "label": "Banane", "imageEmoji": "🍌", "sound": "Banane", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-14-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-014",
                                "prompt": "Assemble les syllabes pour composer 'BONBON' :",
                                "audioText": "Bonbon",
                                "ipa": "/bɔ̃.bɔ̃/",
                                "data": {
                                    "targetPhrase": "BONBON",
                                    "targetPhonemes": "bon + bon",
                                    "availableBricks": ["bon", "bon", "ba", "te"],
                                    "correctSequence": ["bon", "bon"]
                                }
                            },
                            {
                                "id": "EX-001-14-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-014",
                                "prompt": "Assemble les syllabes pour composer 'MOUTON' :",
                                "audioText": "Mouton",
                                "ipa": "/mu.tɔ̃/",
                                "data": {
                                    "targetPhrase": "MOUTON",
                                    "targetPhonemes": "mou + ton",
                                    "availableBricks": ["ton", "mou", "la", "pe"],
                                    "correctSequence": ["mou", "ton"]
                                }
                            },
                            {
                                "id": "EX-001-14-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-014",
                                "prompt": "Quelle est la voyelle nasale finale de 'MAISON' ?",
                                "audioText": "Maison",
                                "data": {
                                    "question": "Le mot 'Maison' (/mɛ.zɔ̃/) finit par :",
                                    "options": [
                                        {"id": "o1", "text": "Le son [ɔ̃] écrit 'on'", "isCorrect": True, "feedback": "Exactement ! Mai-son se termine par le son [ɔ̃]."},
                                        {"id": "o2", "text": "Le son [ɑ̃] écrit 'an'", "isCorrect": False, "feedback": "Non, cela ferait 'Maisan'."},
                                        {"id": "o3", "text": "Le son [o] sans nasalisation", "isCorrect": False, "feedback": "Non, le N nasalise la voyelle."}
                                    ],
                                    "explanation": "La terminaison '-on' de maison produit la voyelle nasale arrondie /ɔ̃/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-15 : La voyelle nasale IN [ɛ̃]
            {
                "id": "CHP-001-15",
                "moduleId": "MOD-005",
                "stage": 1,
                "title": "La Voyelle Nasale IN : [ɛ̃] (in, ain, ein)",
                "summary": "Le sourire nasal : étirez les lèvres tout en faisant résonner le nez : lapin, sapin, train, main, pain.",
                "rules": [
                    {
                        "id": "FR-INI-015",
                        "title": "La voyelle nasale [ɛ̃]",
                        "statement": "IN, AIN et EIN transcrivent tous le son nasal /ɛ̃/. C'est le son du petit animal : le lapin dans le sapin !",
                        "formula": "IN = AIN = EIN = [ɛ̃] (lapin, train, plein)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-15-01",
                        "chapterId": "CHP-001-15",
                        "title": "Le Son IN [ɛ̃] et ses Graphies",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-15-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-015",
                                "prompt": "Trouve l'image qui contient le son [ɛ̃] comme dans 'Lapin' :",
                                "audioText": "Lapin",
                                "ipa": "/la.pɛ̃/",
                                "data": {
                                    "targetSound": "ɛ̃",
                                    "cards": [
                                        {"id": "c1", "label": "Lapin", "imageEmoji": "🐰", "sound": "Lapin", "isCorrect": True},
                                        {"id": "c2", "label": "Loup", "imageEmoji": "🐺", "sound": "Loup", "isCorrect": False},
                                        {"id": "c3", "label": "Chat", "imageEmoji": "🐱", "sound": "Chat", "isCorrect": False},
                                        {"id": "c4", "label": "Ours", "imageEmoji": "🐻", "sound": "Ours", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-15-02",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-015",
                                "prompt": "Trouve l'image qui contient le son [ɛ̃] écrit 'AIN' comme dans 'Train' :",
                                "audioText": "Train",
                                "ipa": "/tʁɛ̃/",
                                "data": {
                                    "targetSound": "ɛ̃",
                                    "cards": [
                                        {"id": "c1", "label": "Train", "imageEmoji": "🚆", "sound": "Train", "isCorrect": True},
                                        {"id": "c2", "label": "Avion", "imageEmoji": "✈️", "sound": "Avion", "isCorrect": False},
                                        {"id": "c3", "label": "Bateau", "imageEmoji": "⛵", "sound": "Bateau", "isCorrect": False},
                                        {"id": "c4", "label": "Vélo", "imageEmoji": "🚲", "sound": "Vélo", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-15-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-015",
                                "prompt": "Assemble les syllabes pour composer 'SAPIN' :",
                                "audioText": "Sapin",
                                "ipa": "/sa.pɛ̃/",
                                "data": {
                                    "targetPhrase": "SAPIN",
                                    "targetPhonemes": "sa + pin",
                                    "availableBricks": ["pin", "sa", "to", "lu"],
                                    "correctSequence": ["sa", "pin"]
                                }
                            },
                            {
                                "id": "EX-001-15-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-015",
                                "prompt": "Lequel de ces mots rime parfaitement avec 'MATIN' ?",
                                "audioText": "Matin",
                                "data": {
                                    "question": "Qui rime avec 'Matin' (/ma.tɛ̃/) ?",
                                    "options": [
                                        {"id": "o1", "text": "Le mot 'Jardin' (/ʒaʁ.dɛ̃/)", "isCorrect": True, "feedback": "Bravo ! Matin et Jardin se terminent par le même son nasal [ɛ̃]."},
                                        {"id": "o2", "text": "Le mot 'Maman' (/ma.mɑ̃/)", "isCorrect": False, "feedback": "Non, maman finit par le son [ɑ̃]."},
                                        {"id": "o3", "text": "Le mot 'Maison' (/mɛ.zɔ̃/)", "isCorrect": False, "feedback": "Non, maison finit par le son [ɔ̃]."}
                                    ],
                                    "explanation": "Matin et jardin partagent la terminaison en voyelle nasale /ɛ̃/."
                                }
                            }
                        ]
                    }
                ]
            },

            # CHP-001-16 : Groupes consonantiques CCV & Premières Lectures Fluides
            {
                "id": "CHP-001-16",
                "moduleId": "MOD-005",
                "stage": 1,
                "title": "Premières Lectures Fluides : Groupes CCV et Phrases Réelles",
                "summary": "Félicitations, vous avez débloqué tous les sons du français ! Assemblez maintenant des phrases entières déchiffrables en toute autonomie.",
                "rules": [
                    {
                        "id": "FR-INI-016",
                        "title": "La lecture fluide et autonome",
                        "statement": "Quand deux consonnes se succèdent avant la voyelle (TR, PL, BR, CL), elles glissent ensemble : tra, pli, bra, clo. Vous pouvez désormais lire n'importe quel texte simple !",
                        "formula": "C + C + V = Syllabe complexe (TR + A = TRA)"
                    }
                ],
                "lessons": [
                    {
                        "id": "LES-001-16-01",
                        "chapterId": "CHP-001-16",
                        "title": "L'Envol : Lire Mes Premières Phrases",
                        "durationMinutes": 3,
                        "exercises": [
                            {
                                "id": "EX-001-16-01",
                                "type": "visual_sound_match",
                                "ruleId": "FR-INI-016",
                                "prompt": "Écoute 'La fleur rouge' et clique sur l'image correspondante :",
                                "audioText": "La fleur rouge",
                                "ipa": "/la flœʁ ʁuʒ/",
                                "data": {
                                    "targetSound": "fl",
                                    "cards": [
                                        {"id": "c1", "label": "Une fleur", "imageEmoji": "🌸", "sound": "Fleur", "isCorrect": True},
                                        {"id": "c2", "label": "Un arbre", "imageEmoji": "🌳", "sound": "Arbre", "isCorrect": False},
                                        {"id": "c3", "label": "Le soleil", "imageEmoji": "☀️", "sound": "Soleil", "isCorrect": False},
                                        {"id": "c4", "label": "Une étoile", "imageEmoji": "⭐️", "sound": "Étoile", "isCorrect": False}
                                    ]
                                }
                            },
                            {
                                "id": "EX-001-16-02",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-016",
                                "prompt": "Reconstitue la phrase : 'Le chat dort sur le tapis.'",
                                "audioText": "Le chat dort sur le tapis.",
                                "ipa": "/lə ʃa dɔʁ syʁ lə ta.pi/",
                                "data": {
                                    "targetPhrase": "Le chat dort sur le tapis.",
                                    "targetPhonemes": "Le + chat + dort + sur + le + tapis.",
                                    "availableBricks": ["dort", "Le", "chat", "tapis.", "le", "sur"],
                                    "correctSequence": ["Le", "chat", "dort", "sur", "le", "tapis."]
                                }
                            },
                            {
                                "id": "EX-001-16-03",
                                "type": "syllable_bricks",
                                "ruleId": "FR-INI-016",
                                "prompt": "Reconstitue la phrase : 'Papa a un beau vélo rouge.'",
                                "audioText": "Papa a un beau vélo rouge.",
                                "ipa": "/pa.pa a œ̃ bo ve.lo ʁuʒ/",
                                "data": {
                                    "targetPhrase": "Papa a un beau vélo rouge.",
                                    "targetPhonemes": "Papa + a + un + beau + vélo + rouge.",
                                    "availableBricks": ["beau", "Papa", "vélo", "a", "rouge.", "un"],
                                    "correctSequence": ["Papa", "a", "un", "beau", "vélo", "rouge."]
                                }
                            },
                            {
                                "id": "EX-001-16-04",
                                "type": "diagnostic_mcq",
                                "ruleId": "FR-INI-016",
                                "prompt": "Dans la phrase 'La tortue marche vers la mer', quel mot contient une voyelle nasale ?",
                                "audioText": "La tortue marche vers la mer.",
                                "data": {
                                    "question": "Y a-t-il une voyelle nasale dans cette phrase ?",
                                    "options": [
                                        {"id": "o1", "text": "Non, tous les mots sont déchiffrables avec des voyelles orales claires", "isCorrect": True, "feedback": "Exact ! C'est une phrase 100% décodable en syllabes simples."},
                                        {"id": "o2", "text": "Oui, dans 'tortue'", "isCorrect": False, "feedback": "Non, tortue contient 'or' et 'u'."},
                                        {"id": "o3", "text": "Oui, dans 'marche'", "isCorrect": False, "feedback": "Non, marche contient 'ar' et 'che'."}
                                    ],
                                    "explanation": "Cette phrase démontre que la combinatoire directe permet de lire immédiatement de vrais récits."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    modules.append(mod_005)

    srs_cards.extend([
        {
            "id": "SRS-001-08",
            "stage": 1,
            "chapterId": "CHP-001-13",
            "ruleId": "FR-INI-013",
            "front": "Comment se prononcent les lettres AN et EN dans 'Maman' et 'Enfant' ?",
            "back": "La voyelle nasale ouverte [ɑ̃] !",
            "explanation": "L'air s'échappe simultanément par la bouche et par les fosses nasales.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-09",
            "stage": 1,
            "chapterId": "CHP-001-14",
            "ruleId": "FR-INI-014",
            "front": "Quel son fait le digramme ON dans 'Ballon' et 'Bonbon' ?",
            "back": "La voyelle nasale arrondie [ɔ̃].",
            "explanation": "Bouche ronde et résonance nasale.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        },
        {
            "id": "SRS-001-10",
            "stage": 1,
            "chapterId": "CHP-001-15",
            "ruleId": "FR-INI-015",
            "front": "Comment se prononcent IN, AIN et EIN dans 'Lapin', 'Train' et 'Plein' ?",
            "back": "Le son nasal étiré [ɛ̃].",
            "explanation": "Ces trois graphies transcrivent le même phonème /ɛ̃/.",
            "stability": 2.5,
            "difficulty": 2.5,
            "retention": 90.0,
            "lastReviewedAt": None,
            "nextReviewAt": None,
            "lapses": 0
        }
    ])

    return modules, srs_cards
