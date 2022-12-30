import { expect, test } from "vitest";
import { addPrefix } from "../config/utils/prefix";

test("Should return colors with -- in each property", (t) => {
  const obj = {
    white: "#fff",
    "white-invert": "#000",
    "white-inverted": "#000",
  };
  const result = addPrefix(obj);
  expect(result).toEqual({
    "--white": "#fff",
    "--white-invert": "#000",
    "--white-inverted": "#000",
  });
});

test("Should return empty obj if receive empty obj", (t) => {
  const obj: any = {};
  const result = addPrefix(obj);
  expect(result).toEqual({});
});
