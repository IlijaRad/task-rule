import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          {
            fontFeatureSettings: '"salt", "cpsp", "cv11"',
          },
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: colors.yellow,
      },
      minHeight: {
        "100svh": "100svh",
      },
    },
  },
  plugins: [],
};
export default config;
