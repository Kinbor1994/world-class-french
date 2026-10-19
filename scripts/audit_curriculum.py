import json

with open("app/src/data/compiled-curriculum.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("=== AUDIT COMPLET DE COMPILED-CURRICULUM.JSON ===")
total_modules = 0
total_chapters = 0
total_lessons = 0
total_exercises = 0

for stage in data.get("stages", []):
    s_id = stage.get("id")
    s_name = stage.get("name")
    s_short = stage.get("shortName")
    modules = stage.get("modules", [])
    
    num_chp = sum(len(m.get("chapters", [])) for m in modules)
    num_les = sum(len(c.get("lessons", [])) for m in modules for c in m.get("chapters", []))
    num_ex = sum(len(l.get("exercises", [])) for m in modules for c in m.get("chapters", []) for l in c.get("lessons", []))
    
    ex_types = set()
    for m in modules:
        for c in m.get("chapters", []):
            for l in c.get("lessons", []):
                for e in l.get("exercises", []):
                    ex_types.add(e.get("type"))
    
    total_modules += len(modules)
    total_chapters += num_chp
    total_lessons += num_les
    total_exercises += num_ex
    
    print(f"Palier {s_id} | {s_short:25} | Modules: {len(modules):2} | Chapitres: {num_chp:2} | Leçons: {num_les:2} | Exercices: {num_ex:3} | Types: {', '.join(sorted(ex_types))}")

print(f"\nTOTAL: {len(data.get('stages', []))} Paliers | {total_modules} Modules | {total_chapters} Chapitres | {total_lessons} Leçons | {total_exercises} Exercices | {len(data.get('initialSrsCards', []))} Cartes SRS")

