// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f0", // Updated primary color
        secondary: "#fff",
        altPrimary: "#cd99ff", // Updated alt primary color
        heading: "#800080",
        background: "#0E0C15",
        dark: "#21242D",
        darker: "rgba(6, 6, 6, 0.7)",
        darkest: "rgba(0, 0, 0, 0.3)",
        blackest: "#16181e",
        whiteOff: "rgba(255, 255, 255, 0.05)",
        body: "#BCC3D7",
        link: "#B9B9B9",
        borderDark: "#2E313D",
        borderLight: "#e5e7eb",
        themeGray: "#3E414B",
        midGray: "#878787",
        success: "#3EB75E",
        danger: "#FF0003",
        warning: "#FFC876", // Corrected typo: "wraning" to "warning"
        info: "#1BA2DB",
        gradientEnd: "#cd99ff", // Same as altPrimary
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
