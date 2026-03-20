import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-heebo)", "Arial", "sans-serif"],
      },
      colors: {
        chocolate: {
          900: "#3E2723",
          800: "#4E342E",
          700: "#5D4037",
          600: "#6D4C41",
          500: "#795548",
          400: "#8D6E63",
          300: "#A1887F",
          200: "#BCAAA4",
          100: "#D7CCC8",
          50: "#EFEBE9",
        },
        accent: {
          DEFAULT: "#D84315",
          light: "#FF5722",
          dark: "#BF360C",
        },
        cream: "#FAF3E0",
        "cream-dark": "#F5E6C8",
      },
    },
  },
  plugins: [],
};
export default config;
