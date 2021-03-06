const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        orange: colors.orange,
        trueGray: colors.trueGray,
        blueGray: colors.blueGray,
        yellow: colors.yellow,
        lime: colors.lime,
        amber: colors.yellow,
        truGreen: colors.green,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      fontFamily: {
        fam1: ["Roboto", "sans-serif"],
        fam2: ["Roboto Slab", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
