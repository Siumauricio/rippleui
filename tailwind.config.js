/** @type {import('tailwindcss').Config} */
const { colors } = require("./dist/js/index");

module.exports = {
  content: ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
