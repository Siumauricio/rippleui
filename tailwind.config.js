/** @type {import('tailwindcss').Config} */
module.exports = {
  content: process.env.NODE_ENV === 'production' ? ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"] : [],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("./dist/js")],
};
