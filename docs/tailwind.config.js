/** @type {import('rippleui').Config} */
const config = {
  themes: [
    {
      themeName: "light",
      colors: {
        discordIcon: "#6b64c3",
      },
    },
    {
      themeName: "dark",
      colors: {
        discordIcon: "#5841c3",
      },
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{js,ts,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("rippleui")({
      ...config,
    }),
  ],
};
