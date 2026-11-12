/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-850": "#202124",
        primary: "#1668A9",
        secondary: "rgb(22, 163, 74)",
        "neutral-transparent": "#202124fa",
        "white-transparent": "#e5e5e5fa",
        // page backgrounds, kept in sync with html in globals.css
        "page-light": "#e8ebef",
        "page-dark": "#0f1012",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "3xl": { min: "2559px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      },
      backgroundImage: {
        "dark-bg": "linear-gradient(145deg,#373638,#2D2C2F)",
        "card-dark":
          "linear-gradient(145deg, rgba(40, 40, 43, 0.85), rgba(22, 23, 26, 0.85))",
      },
      boxShadow: {
        "dark-shadow":
          "7px 7px 15px -10px rgba(0, 0, 0, 0.1), 0 0 5px rgba(100, 100, 100, 0.5), inset 1px 1px 3px rgba(0, 0, 0, 0.5), inset -1px -1px 3px rgba(255, 255, 255, 0.3)",
        "light-shadow":
          "7px 7px 15px -10px #bbcfda, 0px 0px 3px rgba(10, 10, 10, 0.3), inset 1px 1px 1px rgba(209, 217, 230, 0.1), inset -1px -1px 1px rgba(200, 200, 200, 0.1)",
        "btn-shadow":
          "0px 0px 20px 1px rgb(22, 163, 74, 0.2), inset 0px 0px 5px 5px rgb(22, 163, 74, 0.1)",
        card: "0px 12px 32px -14px rgba(32, 33, 36, 0.35), 0px 2px 6px -2px rgba(32, 33, 36, 0.12)",
        "card-dark": "0px 14px 36px -12px rgba(0, 0, 0, 0.7), 0px 2px 6px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
