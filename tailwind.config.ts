import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
        "main-bg": "rgb(var(--color-main-bg) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: "10px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      spacing: {
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "17.5": "4.375rem",
        "30": "7.5rem",
        "45": "11.25rem",
        "57.5": "14.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
