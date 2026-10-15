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
      colors: {
        brand: {
          50: "#effaf5",
          100: "#d7f3e5",
          200: "#b2e6ce",
          300: "#7fd2b0",
          400: "#49b78e",
          500: "#279b73",
          600: "#1a7c5c",
          700: "#16634b",
          800: "#144f3d",
          900: "#124133",
        },
        duo: {
          green: "#58CC02",
          "green-border": "#46A302",
          blue: "#1CB0F6",
          "blue-border": "#1899D6",
          gold: "#FFC800",
          "gold-border": "#E5A400",
          red: "#FF4B4B",
          "red-border": "#EA2B2B",
          purple: "#CE82FF",
          "purple-border": "#A855F7",
        },
      },
      boxShadow: {
        "duo-green": "0 4px 0 #46A302",
        "duo-blue": "0 4px 0 #1899D6",
        "duo-gold": "0 4px 0 #E5A400",
        "duo-red": "0 4px 0 #EA2B2B",
        "duo-purple": "0 4px 0 #A855F7",
        "duo-gray": "0 4px 0 #CBD5E1",
        "duo-dark": "0 4px 0 #1E293B",
      },
    },
  },
  plugins: [],
};

export default config;
