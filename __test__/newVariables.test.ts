import { extractNewVariables } from "./../config/utils/extractNewVariables";
import { expect, test } from "vitest";

test("Should return colors with -- in each property", (t) => {
  const colorsMap1: any = {
    "blue-100": "#fff",
  };

  const colorsMap2: any = {
    "blue-200": "#fff",
  };
  const result = extractNewVariables(colorsMap1, colorsMap2);

  expect(result).toEqual({
    "blue-200": expect.any(Function),
  });
});

test("Should return empty obj is obj1 is empty", (t) => {
  const colorsMap1: any = {
    "blue-100": "#fff",
  };

  const colorsMap2: any = {};
  const result = extractNewVariables(colorsMap1, colorsMap2);

  expect(result).toEqual({});
});
