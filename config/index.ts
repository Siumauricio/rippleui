import lighTheme from "./ligh-theme";
import varTheme from "./var-theme";
import darkTheme from "./dark-theme";
import plugin from "tailwindcss/plugin";
import fs from "fs";
import postcss from "postcss";
import postcssJs from "postcss-js";
import path from "path";

const basePath = path.resolve(__dirname, path.join("..", "css"));
const baseCSS = fs.readFileSync(basePath + "/base.css", "utf-8");
const componentsCSS = fs.readFileSync(basePath + "/components.css", "utf-8");
const utilitiesCSS = fs.readFileSync(basePath + "/utilities.css", "utf-8");

export const config = plugin(
  ({ addBase, addComponents, addUtilities, theme, config }) => {
    const base = postcss.parse(baseCSS);
    const components = postcss.parse(componentsCSS);
    const utilities = postcss.parse(utilitiesCSS);
    const baseObj = postcssJs.objectify(base);
    const componentsObj = postcssJs.objectify(components);
    const utilitiesObj = postcssJs.objectify(utilities);

    // Add base styles/colors
    addBase([
      {
        ...(process.env.NODE_ENV === "production" ? baseObj : null),
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
      },
    ]);

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
