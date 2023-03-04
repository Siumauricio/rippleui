import { lightTheme } from "./../config/theme/ligh-theme";
import { expect, test } from "vitest";
import { mergeNestedObjects, removeThemes } from "../config/utils/theme";
import { RecursivePartial, Theme } from "../config/types/theme.types";

test("should return 0 final themes", (t) => {
  const themesToRemove = ["dark", "light"];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(themesToRemove, themes);
  expect(result.length).toBe(0);
});

test("should return 1 final themes", (t) => {
  const themesToRemove = ["dark"];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(themesToRemove, themes);
  expect(result.length).toBe(1);
});

test("should return 1 final themes if come a custom theme that is not declared", (t) => {
  const themesToRemove = ["dark", "light", "custom"];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(themesToRemove, themes);
  expect(result.length).toBe(0);
});

test("should return 2 final themes if come a custom theme that is not declared", (t) => {
  const themesToRemove = ["light"];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
    {
      themeName: "custom",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(themesToRemove, themes);
  expect(result.length).toBe(2);
});

test("should return 3 final themes if come a empty array", (t) => {
  const themesToRemove = [""];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
    {
      themeName: "custom",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(themesToRemove, themes);
  expect(result.length).toBe(3);
});

test("should return 3 final themes if come a empty array", (t) => {
  const obj = [];
  const themes: RecursivePartial<Theme>[] = [
    {
      themeName: "light",
      colorScheme: "light",
    },
    {
      themeName: "dark",
      colorScheme: "dark",
    },
    {
      themeName: "custom",
      colorScheme: "dark",
    },
  ];
  const result = removeThemes(obj, themes);
  expect(result.length).toBe(3);
});

test("it should merge 2 object", (t) => {
  const theme: Theme = {
    colorScheme: "dark",
    themeName: "dark",
    prefersColorScheme: false,
    // @ts-ignore
    colors: {
      "gray-5": "#4a5568",
      "gray-6": "#718096",
    },
  };

  const result = mergeNestedObjects(lightTheme, theme);
  expect(result).toEqual({
    ...lightTheme,
    ...result,
  });
});
