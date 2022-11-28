/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("./dist/js/index")],
};
