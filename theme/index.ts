import lighTheme from "./ligh-theme";
import varTheme from "./var-theme";
import darkTheme from "./dark-theme";
import plugin from "tailwindcss/plugin";
import fs from "fs";
import postcss from "postcss";
import postcssJs from "postcss-js";

const baseCSS = fs.readFileSync("./dist/css/base.css", "utf-8");
const componentsCSS = fs.readFileSync("./dist/css/components.css", "utf-8");
const utilitiesCSS = fs.readFileSync("./dist/css/utilities.css", "utf-8");


export const config = plugin(
  ({ addBase, addComponents, addUtilities, theme, config}) => {

    const base = postcss.parse(baseCSS);
    const components = postcss.parse(componentsCSS);
    const utilities = postcss.parse(utilitiesCSS);
    const baseObj = postcssJs.objectify(base);
    const componentsObj = postcssJs.objectify(components);
    const utilitiesObj = postcssJs.objectify(utilities);

    // Add base styles/colors
    addBase([{
      ...baseObj,
      [":root"]: {
        colorScheme: "light",
        ...lighTheme.colors,
      },
      ["@media (prefers-color-scheme: dark)"]: {
        [":root"]: {
          colorScheme: "dark",
          ...darkTheme.colors,
        },
      },
      ["[data-theme=light]"]: {
        colorScheme: "light",
        ...lighTheme.colors,
      },
      ["[data-theme=dark]"]: {
        colorScheme: "dark",
        ...darkTheme.colors,
      },
    }]);
   
    addComponents(componentsObj);
    addUtilities(utilitiesObj);
  },
  // Import of Theme variables
  {
    theme: {
      extend: {
        colors: varTheme.colors,
      },
    },
  }
);

module.exports = config;
