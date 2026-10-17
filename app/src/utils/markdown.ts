import { marked } from "marked";

/**
 * Nettoie et formate les expressions LaTeX mathématiques courantes dans les synthèses
 * (valences actancielles, formules morphosyntaxiques, pourcentages, flèches)
 * pour un rendu typographique élégant et directement lisible.
 */
export function formatLatexInMarkdown(content: string): string {
  if (!content) return "";

  // 1. Traitement des formules LaTeX mathématiques encadrées par $...$ ou $$...$$
  let processed = content.replace(/\$\$([^$]+)\$\$/g, (_, formula: string) => {
    return cleanFormula(formula);
  });

  processed = processed.replace(/\$([^$\n]+)\$/g, (_, formula: string) => {
    return cleanFormula(formula);
  });

  return processed;
}

function cleanFormula(raw: string): string {
  let f = raw;
  // Nettoyage \text{...}
  f = f.replace(/\\text\{([^}]+)\}/g, "$1");
  // Indices courants
  f = f.replace(/_0\b/g, "₀");
  f = f.replace(/_1\b/g, "₁");
  f = f.replace(/_2\b/g, "₂");
  f = f.replace(/_3\b/g, "₃");
  f = f.replace(/_\{0\}/g, "₀");
  f = f.replace(/_\{1\}/g, "₁");
  f = f.replace(/_\{2\}/g, "₂");
  f = f.replace(/_\{3\}/g, "₃");
  f = f.replace(/_\{([^}]+)\}/g, " ($1)");
  // Symboles mathématiques
  f = f.replace(/\\rightarrow/g, " → ");
  f = f.replace(/\\leftarrow/g, " ← ");
  f = f.replace(/\\leftrightarrow/g, " ↔ ");
  f = f.replace(/\\times/g, " × ");
  f = f.replace(/\\pm/g, " ± ");
  f = f.replace(/\\le\b|\\leq\b/g, " ≤ ");
  f = f.replace(/\\ge\b|\\geq\b/g, " ≥ ");
  f = f.replace(/\\neq\b/g, " ≠ ");
  f = f.replace(/\\approx/g, " ≈ ");
  f = f.replace(/\\%/g, "%");
  f = f.replace(/\\,/g, " ");
  f = f.replace(/\\;/g, " ");
  f = f.replace(/\\quad/g, "  ");
  f = f.replace(/\\!/g, "");

  // Nettoyage des antislashs restants isolés
  f = f.replace(/\\([a-zA-Z]+)/g, "$1");

  return `<code class="font-mono font-bold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800 text-[11px]">${f.trim()}</code>`;
}

/**
 * Transforme le markdown brut d'une fiche didactique en HTML structuré avec prise en charge
 * complète des tableaux GFM, des lettrines, des listes et des formules.
 */
export function renderAcademicMarkdown(markdown: string): string {
  if (!markdown) return "";

  // 1. Pré-traitement LaTeX
  const formattedContent = formatLatexInMarkdown(markdown);

  // 2. Compilation GFM via marked
  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  const rawHtml = marked.parse(formattedContent) as string;

  // 3. Emballage automatique des tableaux dans un conteneur responsive à défilement horizontal
  const wrappedHtml = rawHtml
    .replace(
      /<table>/g,
      '<div class="overflow-x-auto my-4 rounded-xl border border-academic-border dark:border-academic-dark-border shadow-fine"><table class="w-full text-xs text-left border-collapse">'
    )
    .replace(/<\/table>/g, "</table></div>");

  return wrappedHtml;
}
