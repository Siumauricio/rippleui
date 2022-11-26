/** @type {import('tailwindcss').Config} */
const { colors, boxShadows, dropShadows } = require("./dist/index");

module.exports = {
  content: ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
