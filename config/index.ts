import { addPrefix } from "./utils/prefix";
import { isValid } from "./utils/isEmpty";
import { lightTheme } from "./theme/ligh-theme";
import { varTheme } from "./theme/var-theme";
import { darkTheme } from "./theme/dark-theme";
import plugin from "tailwindcss/plugin";
import fs from "fs";
import postcss from "postcss";
import postcssJs from "postcss-js";
import path from "path";
import { defaultSchema } from "./colors/default-schema";
import { palleteToRGB } from "./utils/hexToRGB";
import { Config } from "./types/config.types";
import { Theme } from "./types/theme.types";
import { extractNewVariables } from "./utils/extractNewVariables";
import { createTheme, removeThemes } from "./utils/theme";
import { mergeNestedObjects } from "./utils/theme";
import { getSelectorsWithPrefix } from "./prefix/prefix";

const basePath = path.resolve(__dirname, path.join("..", "css"));
const baseCSS = fs.readFileSync(basePath + "/base.css", "utf-8");
const componentsCSS = fs.readFileSync(basePath + "/components.css", "utf-8");
const utilitiesCSS = fs.readFileSync(basePath + "/utilities.css", "utf-8");

const config = plugin.withOptions(
  (options) =>
    ({ addBase, addComponents, addUtilities, theme, config }) => {
      const base = postcss.parse(baseCSS);
      const components = postcss.parse(componentsCSS);
      const utilities = postcss.parse(utilitiesCSS);
      const baseObj = postcssJs.objectify(base);
      const componentsObj = postcssJs.objectify(components);
      const utilitiesObj = postcssJs.objectify(utilities);

      const configValue: Config = config("rippleui") || { ...options } || {};

      const lightThemeExists = configValue.themes?.find(
        (theme) => theme.themeName === "light"
      );

      const darkThemeExists = configValue.themes?.find(
        (theme) => theme.themeName === "dark"
      );

      const restThemes =
        configValue.themes?.filter(
          (theme) => theme.themeName !== "light" && theme.themeName !== "dark"
        ) || [];

      let configTheme: Config = {
        defaultStyle: configValue.defaultStyle ?? true,
        removeThemes: configValue.removeThemes || [],
        prefix: configValue.prefix,
        themes: [
          {
            themeName: "light",
            colorScheme: "light",
            ...lightThemeExists,
          },
          {
            themeName: "dark",
            colorScheme: "dark",
            ...darkThemeExists,
          },
          ...restThemes,
        ],
      };
      // We have a valid config
      if (isValid(configTheme)) {
        if (configTheme.defaultStyle) {
          // This will add by default bg-color and color
          addBase({
            [":root, [data-theme]"]: {
              ...defaultSchema,
            },
          });
        }
        const configThemes = configTheme.themes || [];
        const themesToRemove = configTheme.removeThemes || [];
        const newThemes = removeThemes(themesToRemove, configThemes);

        if (newThemes.length > 0) {
          newThemes.forEach((theme) => {
            const colorsPrefix = addPrefix({ ...theme.colors });
            const colorsConverted = palleteToRGB(colorsPrefix);
            const themeUpdated = {
              ...theme,
              colors: colorsConverted,
            };

            let mergedTheme;
            if (theme.themeName === "light") {
              mergedTheme = mergeNestedObjects(lightTheme, themeUpdated);
            } else if (theme.themeName === "dark") {
              mergedTheme = mergeNestedObjects(darkTheme, themeUpdated);
            } else {
              mergedTheme = themeUpdated as Theme;
            }
            const newTheme = createTheme(mergedTheme as Theme);
            addBase([...newTheme]);
          });
        }
      }

      addBase(baseObj);
      // If we receive prefix  we will apply to all the components
      if (configValue.prefix) {
        // remove all the white spaces
        const componentsPrefixed = getSelectorsWithPrefix(
          configValue.prefix,
          componentsObj
        );
        addComponents(componentsPrefixed);
      } else {
        addComponents(componentsObj);
      }
      addUtilities(utilitiesObj);
    },

  // @ts-ignore
  (options: Config) => {
    //
    let varThemesMerged = {
      ...varTheme.colors,
    };

    if (isValid(options)) {
      const themes = options.themes || [];
      // We are going to insert the new variables from the config
      themes?.forEach((theme) => {
        if (theme?.colors) {
          const newConfigVariables = extractNewVariables(
            varTheme.colors,
            theme.colors
          );
          varThemesMerged = {
            ...varThemesMerged,
            ...newConfigVariables,
          };
        }
      });
    }

    return {
      theme: {
        extend: {
          colors: {
            ...varThemesMerged,
          },
        },
      },
    };
  }
);

module.exports = config;
