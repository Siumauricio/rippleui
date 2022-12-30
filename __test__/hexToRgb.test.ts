import { hexToRGB } from "./../config/utils/hexToRGB";
import { expect, test } from "vitest";

test("Should  recieve a hexa and return a rgb", (t) => {
  let hexa = "#ffffff";

  let result = hexToRGB(hexa);
  expect(result).toEqual("255 255 255");

  hexa = "#000000";
  result = hexToRGB(hexa);
  expect(result).toEqual("0 0 0");

  hexa = "#653463";
  result = hexToRGB(hexa);
  expect(result).toEqual("101 52 99");
});

test("Should throw and error if receive a invalid hex", (t) => {
  let hexa = "#fff";

  expect(() => hexToRGB(hexa)).toThrowError();

  hexa = "#4262";
  expect(() => hexToRGB(hexa)).toThrowError();

  hexa = "#4262f";
  expect(() => hexToRGB(hexa)).toThrowError();

  hexa = "#4262ffg";
  expect(() => hexToRGB(hexa)).toThrowError();
});
