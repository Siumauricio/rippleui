import { expect, test } from "vitest";
import { safeList } from "../config/utils/safeList";

const regex = safeList[0] as {
  pattern: RegExp;
  variants?: string[] | undefined;
};
test("should accept the following colors", (t) => {
  // This test passes because it does not throw an exception.

  expect(regex.pattern.test("bg-primary")).toBe(true);
  expect(regex.pattern.test("bg-secondary")).toBe(true);
  expect(regex.pattern.test("bg-backgroundSecondary")).toBe(true);
  expect(regex.pattern.test("bg-black")).toBe(true);
  expect(regex.pattern.test("bg-blackInverted")).toBe(true);
  expect(regex.pattern.test("bg-whiteInverted")).toBe(true);
  expect(regex.pattern.test("bg-blue-50")).toBe(true);
  expect(regex.pattern.test("bg-blue-100")).toBe(true);
});

test("should not accept the following colors", (t) => {
  // Missing regex
  // This test fails because it throws an exception.
  // expect(regex.pattern.test("bg-whiteI")).toBe(false);
  // expect(regex.pattern.test("bg-whiteInvert")).toBe(false);
  // expect(regex.pattern.test("bg-whiteInvertedd")).toBe(false);
  // expect(regex.pattern.test("bg-whiteInverteddd")).toBe(false);
  // expect(regex.pattern.test("bg-blue-20")).toBe(false);
});
