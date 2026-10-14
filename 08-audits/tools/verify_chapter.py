#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de vérification automatique des chapitres du cursus World-Class French.
Exécute des contrôles objectifs :
1. Décomptes de lettres, graphèmes et phonèmes.
2. Cohérence entre décomptes annoncés et symboles API effectifs.
3. Vérification des annonces d'éléments ("N erreurs", "N strophes", etc.) vs éléments réels.
4. Contrôle d'intégrité des identifiants (SRC-*, FR-*, CHP-*, IND-*) et des liens internes.
5. Recoupement des transcriptions API avec l'API Wiktionnaire par lots (avec cache local).
"""

import sys
import os
import re
import json
import urllib.request
import urllib.parse
from pathlib import Path
from typing import Dict, List, Tuple, Set, Any, Optional

# Forcer l'encodage UTF-8 sous Windows PowerShell / CMD
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

WORKSPACE_ROOT = Path(__file__).resolve().parents[2]
CACHE_FILE = Path(__file__).resolve().parent / ".cache_wiktionary.json"

FRENCH_PHONEMES = {
    # Voyelles orales
    'i', 'e', 'ɛ', 'a', 'y', 'ø', 'œ', 'ə', 'u', 'o', 'ɔ', 'ɑ',
    # Voyelles nasales
    'ɑ̃', 'ɔ̃', 'ɛ̃', 'œ̃', 'ã', 'õ', 'ẽ',
    # Consonnes
    'p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 's', 'z', 'ʃ', 'ʒ', 'ʁ', 'r', 'm', 'n', 'ɲ', 'ŋ', 'l',
    # Semi-consonnes
    'j', 'w', 'ɥ'
}

NUMBER_WORDS = {
    'un': 1, 'une': 1, 'deux': 2, 'trois': 3, 'quatre': 4, 'cinq': 5,
    'six': 6, 'sept': 7, 'huit': 8, 'neuf': 9, 'dix': 10,
    'onze': 11, 'douze': 12, 'treize': 13, 'quatorze': 14, 'quinze': 15, 'seize': 16
}


def load_cache() -> Dict[str, Any]:
    if CACHE_FILE.exists():
        try:
            with open(CACHE_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}


def save_cache(cache: Dict[str, Any]) -> None:
    try:
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"[CACHE] Erreur sauvegarde: {e}", file=sys.stderr)


def query_wiktionary_batch(words: List[str], cache: Dict[str, Any]) -> Dict[str, List[str]]:
    """Interroge Wiktionnaire par lots de 40 mots pour optimiser la vitesse."""
    missing = [w for w in set(words) if w not in cache]
    if not missing:
        return {w: cache.get(w, []) for w in words}

    batch_size = 40
    for i in range(0, len(missing), batch_size):
        chunk = missing[i:i + batch_size]
        titles_param = "|".join(urllib.parse.quote(w) for w in chunk)
        url = (
            f"https://fr.wiktionary.org/w/api.php?action=query&titles={titles_param}"
            f"&prop=revisions&rvprop=content&format=json"
        )
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'WorldClassFrenchAudit/1.0'})
            with urllib.request.urlopen(req, timeout=6) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                pages = data.get('query', {}).get('pages', {})
                for _, page in pages.items():
                    title = page.get('title', '').lower()
                    revisions = page.get('revisions', [])
                    ipa_list = []
                    if revisions:
                        content = revisions[0].get('*', '')
                        matches = re.findall(r'\{\{pron\|([^|}]+)\|fr\}\}', content)
                        for m in matches:
                            clean_ipa = m.strip()
                            if clean_ipa and clean_ipa not in ipa_list:
                                ipa_list.append(clean_ipa)
                    cache[title] = ipa_list
                for w in chunk:
                    if w not in cache:
                        cache[w] = []
        except Exception:
            for w in chunk:
                cache[w] = []

    return {w: cache.get(w, []) for w in words}


def count_letters(text: str) -> int:
    """Compte uniquement les lettres alphabétiques (sans tirets, apostrophes, espaces)."""
    return len(re.findall(r'[a-zA-ZàâäéèêëîïôöùûüçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒÆ]', text))


def extract_phonemes_from_api(api_str: str) -> List[str]:
    """Extrait les phonèmes individuels d'une chaîne API."""
    cleaned = api_str.strip('/[]')
    cleaned = re.sub(r'[.\s‿_\-ˈˌ]', '', cleaned)
    phonemes = []
    i = 0
    while i < len(cleaned):
        if i + 1 < len(cleaned) and cleaned[i+1] == '\u0303':
            phonemes.append(cleaned[i:i+2])
            i += 2
        elif cleaned[i] in ['ɑ̃', 'ɔ̃', 'ɛ̃', 'œ̃', 'ã', 'õ', 'ẽ']:
            phonemes.append(cleaned[i])
            i += 1
        else:
            phonemes.append(cleaned[i])
            i += 1
    return phonemes


class ChapterVerifier:
    def __init__(self, file_path: Path, known_src: Set[str], known_fr: Set[str]):
        self.file_path = file_path
        self.content = file_path.read_text(encoding='utf-8')
        self.lines = self.content.splitlines()
        self.known_src = known_src
        self.known_fr = known_fr
        self.issues: List[Dict[str, Any]] = []
        self.words_for_wiktionary: List[Tuple[str, str, int]] = []
        self.stats: Dict[str, Any] = {
            'word_checks': 0,
            'api_checks': 0,
            'announcement_checks': 0,
            'link_checks': 0
        }

    def add_issue(self, category: str, line_no: int, message: str, severity: str = "ERROR", details: Optional[Dict[str, Any]] = None):
        self.issues.append({
            'category': category,
            'line': line_no,
            'message': message,
            'severity': severity,
            'details': details or {}
        })

    def collect_and_verify_counts(self):
        detail_ex_re = re.compile(r'###\s*Exemple\s*\d+\s*:\s*\*?([a-zA-ZàâäéèêëîïôöùûüçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒÆ\s\-\']+)\*?', re.IGNORECASE)

        current_ex_word = None
        current_ex_line = 0

        for i, line in enumerate(self.lines, start=1):
            # Réinitialiser si nouvelle section
            if line.startswith('## ') or line.startswith('---'):
                current_ex_word = None

            ex_m = detail_ex_re.search(line)
            if ex_m:
                current_ex_word = ex_m.group(1).strip('*_ ')
                current_ex_line = i

            # Vérifier "X lettres" dans les 15 lignes suivant un Exemple explicite
            if current_ex_word and (i - current_ex_line <= 15) and not line.strip().startswith('|'):
                count_m = re.search(r'(\d+)\s*lettres\s*(?:écrites)?', line, re.IGNORECASE)
                if count_m:
                    announced_letters = int(count_m.group(1))
                    actual_letters = count_letters(current_ex_word)
                    # Vérifier si la ligne cite directement le mot ou le qualifie
                    if (current_ex_word.lower() in line.lower() or 'texte orthographique' in line.lower() or 'bilan comparatif' in line.lower()) and announced_letters != actual_letters:
                        self.stats['word_checks'] += 1
                        self.add_issue(
                            "DECOMPTE_LETTRES",
                            i,
                            f"Décompte de lettres pour '{current_ex_word}': annoncé {announced_letters}, calculé {actual_letters}",
                            severity="ERROR",
                            details={'word': current_ex_word, 'announced': announced_letters, 'actual': actual_letters}
                        )

            # Vérifier tableaux Markdown
            if '|' in line:
                parts = [p.strip() for p in line.split('|')[1:-1]]
                if len(parts) >= 5 and parts[1].isdigit() and parts[3].isdigit():
                    word_raw = re.sub(r'^\d+[\.\)]?\s*', '', parts[0]).strip('*_ ')
                    if word_raw and not word_raw.lower().startswith('mot') and not word_raw.startswith('---'):
                        self.stats['word_checks'] += 1
                        announced_letters = int(parts[1])
                        actual_letters = count_letters(word_raw)
                        if announced_letters != actual_letters:
                            self.add_issue(
                                "TABLEAU_LETTRES",
                                i,
                                f"Tableau: mot '{word_raw}' a {actual_letters} lettres réelles mais le tableau annonce {announced_letters}",
                                severity="ERROR",
                                details={'word': word_raw, 'announced': announced_letters, 'actual': actual_letters}
                            )

                        announced_phonemes = int(parts[3])
                        api_str = parts[4].strip('`* ')
                        if api_str.startswith('/') and api_str.endswith('/'):
                            phonemes = extract_phonemes_from_api(api_str)
                            if len(word_raw.split()) == 1 and abs(len(phonemes) - announced_phonemes) > 0:
                                self.add_issue(
                                    "TABLEAU_PHONEMES",
                                    i,
                                    f"Tableau: '{word_raw}' a {len(phonemes)} phonèmes API dans '{api_str}' mais le tableau annonce {announced_phonemes}",
                                    severity="ERROR",
                                    details={'word': word_raw, 'api': api_str, 'extracted': len(phonemes), 'announced': announced_phonemes}
                                )

            # Collecter pour Wiktionnaire
            api_matches = re.findall(r'[\*\_]([a-zA-ZàâäéèêëîïôöùûüçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒÆ\-]+)[\*\_]\s*(?:se transcrit|vaut|est)?\s*[`/](/[^/`\n]+/)`?', line)
            for w, api in api_matches:
                w_clean = w.strip().lower()
                if len(w_clean) > 2 and not any(kw in w_clean for kw in ['exemple', 'mot', 'repère']):
                    self.words_for_wiktionary.append((w_clean, api.strip(), i))

    def verify_wiktionary_comparisons(self, wikt_dict: Dict[str, List[str]]):
        for w_clean, api_clean, line_no in self.words_for_wiktionary:
            self.stats['api_checks'] += 1
            wikt_ipas = wikt_dict.get(w_clean, [])
            if wikt_ipas:
                norm_local = re.sub(r'[\.\s\/]', '', api_clean)
                matched = any(norm_local == re.sub(r'[\.\s\/\[\]\\ˈˌ]', '', w_ipa) for w_ipa in wikt_ipas)
                if not matched and len(norm_local) > 0:
                    self.add_issue(
                        "API_WIKTIONNAIRE_DIFF",
                        line_no,
                        f"Divergence API pour '{w_clean}': local={api_clean} vs wiktionnaire={wikt_ipas}",
                        severity="WARNING",
                        details={'word': w_clean, 'local_api': api_clean, 'wiktionary_ipas': wikt_ipas}
                    )

    def verify_announcements(self):
        announcement_patterns = [
            (re.compile(r'(\d+|deux|trois|quatre|cinq|six|sept|huit|neuf|dix)\s+(fautes|erreurs)\s+(?:récurrentes|sévères|majeures)', re.IGNORECASE), 'erreurs'),
            (re.compile(r'(\d+|deux|trois|quatre|cinq|six|sept|huit|neuf|dix)\s+(strophes)', re.IGNORECASE), 'strophes'),
        ]

        for i, line in enumerate(self.lines, start=1):
            for pattern, item_type in announcement_patterns:
                m = pattern.search(line)
                if m:
                    num_str = m.group(1).lower()
                    target_num = NUMBER_WORDS.get(num_str, int(num_str) if num_str.isdigit() else 0)
                    if target_num == 0:
                        continue
                    self.stats['announcement_checks'] += 1

                    if item_type == 'erreurs':
                        subsequent_text = "\n".join(self.lines[i-1:i+90])
                        numbered_errors = len(re.findall(r'###\s*Erreur\s*n°?\s*\d+', subsequent_text, re.IGNORECASE))
                        if numbered_errors > 0 and numbered_errors != target_num:
                            self.add_issue(
                                "ANNONCE_NON_TENUE",
                                i,
                                f"Annonce de {target_num} fautes/erreurs, mais {numbered_errors} sous-sections 'Erreur n°' rédigées",
                                severity="ERROR",
                                details={'announced': target_num, 'found': numbered_errors}
                            )
                    elif item_type == 'strophes':
                        quote_blocks = [l for l in self.lines[i-1:i+30] if l.strip().startswith('>')]
                        num_lines = len(quote_blocks)
                        strophes_found = num_lines // 4
                        if strophes_found != target_num and num_lines > 0:
                            self.add_issue(
                                "ANNONCE_NON_TENUE",
                                i,
                                f"Annonce de {target_num} strophes, mais seulement {num_lines} vers cités ({strophes_found} strophe(s))",
                                severity="ERROR",
                                details={'announced': target_num, 'verses_found': num_lines}
                            )

    def verify_identifiers_and_links(self):
        # Sources SRC-*
        src_matches = re.finditer(r'\bSRC-[A-Z]+-\d+\b', self.content)
        for m in src_matches:
            src_id = m.group(0)
            self.stats['link_checks'] += 1
            if src_id not in self.known_src:
                line_no = self.content[:m.start()].count('\n') + 1
                self.add_issue(
                    "ID_SRC_INCONNU",
                    line_no,
                    f"Identifiant source inconnu au registre: {src_id}",
                    severity="ERROR",
                    details={'id': src_id}
                )

        # Compétences FR-*
        fr_matches = re.finditer(r'\bFR-[A-Z]+-\d+\b', self.content)
        for m in fr_matches:
            fr_id = m.group(0)
            self.stats['link_checks'] += 1
            if fr_id not in self.known_fr:
                line_no = self.content[:m.start()].count('\n') + 1
                self.add_issue(
                    "ID_FR_INCONNU",
                    line_no,
                    f"Identifiant de compétence inconnu: {fr_id}",
                    severity="ERROR",
                    details={'id': fr_id}
                )

        # Liens locaux Markdown
        link_matches = re.finditer(r'\[([^\]]+)\]\((file:///[^\)]+|[^http][^\)]+\.md[^\)]*)\)', self.content)
        for m in link_matches:
            link_url = m.group(2)
            self.stats['link_checks'] += 1
            clean_url = link_url.split('#')[0]
            if clean_url.startswith('file:///'):
                target_path_str = clean_url.replace('file:///', '')
                target_path = Path(target_path_str)
            else:
                target_path = (self.file_path.parent / clean_url).resolve()

            if not target_path.exists():
                line_no = self.content[:m.start()].count('\n') + 1
                self.add_issue(
                    "LIEN_BRISE",
                    line_no,
                    f"Lien interne brisé vers: {target_path}",
                    severity="ERROR",
                    details={'target': str(target_path)}
                )


def collect_registry_data():
    known_src = set()
    known_fr = set()

    src_file = WORKSPACE_ROOT / "07-resources" / "source-registry.md"
    if src_file.exists():
        text = src_file.read_text(encoding='utf-8')
        known_src.update(re.findall(r'\bSRC-[A-Z]+-\d+\b', text))

    comp_file = WORKSPACE_ROOT / "02-competency-framework" / "competency-framework.md"
    if comp_file.exists():
        text = comp_file.read_text(encoding='utf-8')
        known_fr.update(re.findall(r'\bFR-[A-Z]+-\d+\b', text))

    return known_src, known_fr


def main():
    target_dir = WORKSPACE_ROOT / "03-curriculum" / "year-1" / "semester-1" / "mod-101"
    if len(sys.argv) > 1:
        target_path = Path(sys.argv[1])
        if target_path.is_dir():
            target_files = sorted(list(target_path.glob("chp-*.md")))
        else:
            target_files = [target_path]
    else:
        target_files = sorted(list(target_dir.glob("chp-*.md")))

    print("=" * 80)
    print("AUDIT DE VERIFICATION DU CODE PEDAGOGIQUE ET LINGUISTIQUE")
    print(f"Cibles : {len(target_files)} chapitre(s)")
    print("=" * 80)

    known_src, known_fr = collect_registry_data()
    print(f"[REGISTRE] Sources valides : {len(known_src)} | Compétences valides : {len(known_fr)}")

    cache = load_cache()
    verifiers = []

    all_words = []
    for fp in target_files:
        v = ChapterVerifier(fp, known_src, known_fr)
        v.collect_and_verify_counts()
        v.verify_announcements()
        v.verify_identifiers_and_links()
        verifiers.append(v)
        all_words.extend([w for w, _, _ in v.words_for_wiktionary])

    print(f"[WIKTIONNAIRE] Interrogation optimisée pour {len(set(all_words))} mot(s)...")
    wikt_dict = query_wiktionary_batch(all_words, cache)
    save_cache(cache)

    total_issues = 0
    total_errors = 0
    total_warnings = 0
    results = {}

    for v in verifiers:
        v.verify_wiktionary_comparisons(wikt_dict)
        issues = v.issues
        results[v.file_path.name] = {
            'issues': issues,
            'stats': v.stats
        }

        file_errors = sum(1 for iss in issues if iss['severity'] == 'ERROR')
        file_warnings = sum(1 for iss in issues if iss['severity'] == 'WARNING')
        total_errors += file_errors
        total_warnings += file_warnings
        total_issues += len(issues)

        print(f"\n>>> {v.file_path.name} :")
        print(f"    Vérifications : {v.stats}")
        print(f"    Bilan : {file_errors} erreur(s) critique(s), {file_warnings} avertissement(s)")

        for iss in issues:
            flag = "[!]" if iss['severity'] == 'ERROR' else "[?]"
            print(f"    {flag} Ligne {iss['line']} [{iss['category']}]: {iss['message']}")

    print("\n" + "=" * 80)
    print(f"BILAN GLOBAL : {total_issues} anomalie(s) ({total_errors} critique(s), {total_warnings} avertissement(s))")
    print("=" * 80)

    report_json_path = WORKSPACE_ROOT / "08-audits" / "tools" / "last_audit_report.json"
    with open(report_json_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    return 0 if total_errors == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
