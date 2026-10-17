import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        serif: [
          '"Newsreader"',
          '"Charter"',
          '"Bitstream Charter"',
          '"Sitka Text"',
          '"Cambria"',
          '"Georgia"',
          "serif",
        ],
        sans: [
          '"Plus Jakarta Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        // Palette Édition & Académie
        academic: {
          paper: "#FAF8F5",
          surface: "#FFFFFF",
          ink: "#111827",
          "ink-light": "#374151",
          muted: "#6B7280",
          border: "#E7E2D8",
          "border-subtle": "#F1ECE3",
          navy: "#0F172A",
          "navy-light": "#1E293B",
          gold: "#B45309",
          "gold-light": "#D97706",
          "gold-subtle": "#FEF3C7",
          emerald: "#065F46",
          "emerald-light": "#047857",
          "emerald-subtle": "#D1FAE5",
          bordeaux: "#881337",
          "bordeaux-subtle": "#FFE4E6",
          // Dark mode
          "dark-bg": "#0B0F19",
          "dark-surface": "#131A2A",
          "dark-card": "#182236",
          "dark-border": "#222F46",
          "dark-border-subtle": "#1B263B",
          "dark-muted": "#94A3B8",
        },
      },
      boxShadow: {
        fine: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        card: "0 2px 8px -2px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(15, 23, 42, 0.03)",
        elevated: "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        modal: "0 20px 40px -10px rgba(15, 23, 42, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
