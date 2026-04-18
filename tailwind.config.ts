import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cacao: "#240808",
        bordeaux: "#6E151A",
        carmine: "#B32E33",
        brass: "#CD9F65",
        bone: "#F0E6CB",
        obsidian: "#121212",
      },
      fontFamily: {
        display: ['"Times New Roman"', "Times", "serif"],
        body: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        cinematic: "0 24px 90px rgba(0, 0, 0, 0.34)",
        ember: "0 0 44px rgba(179, 46, 51, 0.22)",
      },
      backgroundImage: {
        "cinema-radial":
          "radial-gradient(circle at 24% 12%, rgba(205,159,101,0.18), transparent 26%), radial-gradient(circle at 86% 22%, rgba(179,46,51,0.20), transparent 28%), linear-gradient(145deg, #240808 0%, #121212 46%, #6E151A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
