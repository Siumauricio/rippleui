import lighTheme from "./ligh-theme";
import varTheme from "./var-theme";
import darkTheme from "./dark-theme";
import plugin from "tailwindcss/plugin";
import fs from "fs";
import postcss from "postcss";
import postcssJs from "postcss-js";

const readCSS = fs.readFileSync("./dist/css/styles.css", "utf-8");

export const themePlugin = plugin(
  ({ addBase, theme, config }) => {
    const root = postcss.parse(readCSS);
    const cssObject = postcssJs.objectify(root);
    // console.log(config("rippleui"));
    // addBase(postcssJs.objectify(root));
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

module.exports = themePlugin;
