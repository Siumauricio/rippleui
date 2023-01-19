import { RecursivePartial, Theme } from "../types/theme.types";

export const removeThemes = (
  removeThemes: string[],
  themes: RecursivePartial<Theme>[]
) => {
  const newThemes = themes.filter((theme) => {
    return !removeThemes.includes(theme.themeName || "");
  });
  return newThemes;
};

export const mergeNestedObjects = (obj1: object, obj2: object): object => {
  // Create a new object that includes the properties from both obj1 and obj2
  const merged = { ...obj1, ...obj2 };

  // Iterate over the properties of the merged object
  for (const key in merged) {
    // If the value of the current property is an object,
    // and both obj1 and obj2 have a property with the same key and a value that is an object,
    // recursively merge the nested objects
    if (
      // @ts-ignore
      typeof merged[key] === "object" &&
      // @ts-ignore
      typeof obj1[key] === "object" &&
      // @ts-ignore
      typeof obj2[key] === "object"
    ) {
      // @ts-ignore
      merged[key] = mergeNestedObjects(obj1[key], obj2[key]);
    }
  }

  // Return the merged object
  return merged;
};

export const isPlainObject = (value: any): value is object => {
  if (value == null || typeof value !== "object") {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

export const createTheme = (theme: Theme) => {
  return [
    {
      ...(theme.themeName === "light" && {
        [":root"]: {
          colorScheme: theme.colorScheme,
          ...theme.colors,
        },
      }),
      ...(theme.prefersColorScheme && {
        [`@media (prefers-color-scheme:${theme.colorScheme})`]: {
          [`:root,[data-theme=${theme.themeName}]`]: {
            colorScheme: theme.colorScheme,
            ...theme.colors,
          },
        },
      }),
      [`[data-theme=${theme.themeName}]`]: {
        colorScheme: theme.colorScheme,
        ...theme.colors,
      },
    },
  ];
};
