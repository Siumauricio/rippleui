const { safeList } = require("./dist/js/utils/safelist.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: process.env.NODE_ENV === "production" ? safeList : [],
  content:
    process.env.NODE_ENV === "production"
      ? [{ raw: "" }]
      : ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("./dist/js")],
};
