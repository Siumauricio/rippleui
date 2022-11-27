
const plugin = require("tailwindcss/plugin");

const { theme } = require("./dist/js/index");
const { varTheme, lighTheme, darkTheme} = theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js}", "./experiments/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: varTheme.colors,
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        [":root"]: {
          colorScheme: "light",
          ...lighTheme.colors,
        },
      });

      addBase({
        ["@media (prefers-color-scheme: dark)"]: {
          [":root"]: {
            colorScheme: "dark",
            ...darkTheme.colors,
          },
        },
      });

      addBase({
        ["[data-theme=light]"]: {
          colorScheme: "light",
          ...lighTheme.colors,
        },
      });

      addBase({
        ["[data-theme=dark]"]: {
          colorScheme: "dark",
          ...darkTheme.colors,
        },
      });  
      
      // addBase({
      //   ["[data-theme=testing]"]: {
      //     colorScheme: "dark",
      //     '--primary': 'red',
      //     // ...darkTheme.colors,
      //   },
      // });   
      // console.log(matchVariant("hover", "hover"));
      // Add your custom styles here
    }),
  ],
};
