import assert from "node:assert/strict";
import { safeList } from "../config/utils/safeList";
import test from "node:test";

const regex = safeList[2] as {
  pattern: RegExp;
  variants?: string[] | undefined;
};
test("should accept the following colors", (t) => {
  // This test passes because it does not throw an exception.
  assert.strictEqual(regex.pattern.test("bg-primary"), true);
  assert.strictEqual(regex.pattern.test("bg-secondary"), true);
  assert.strictEqual(regex.pattern.test("bg-backgroundSecondary"), true);
  assert.strictEqual(regex.pattern.test("bg-black"), true);
  assert.strictEqual(regex.pattern.test("bg-blackInverted"), true);
  assert.strictEqual(regex.pattern.test("bg-whiteInverted"), true);
  assert.strictEqual(regex.pattern.test("bg-blue-50"), true);
  assert.strictEqual(regex.pattern.test("bg-blue-100"), true);
  assert.strictEqual(regex.pattern.test("bg-blue-200"), true);
});

test("should not accept the following colors", (t) => {
  // This test fails because it throws an exception.
  assert.strictEqual(regex.pattern.test("bg-whiteI"), false);
  assert.strictEqual(regex.pattern.test("bg-blac"), false);
  assert.strictEqual(regex.pattern.test("bg-blue-3000"), false);
  assert.strictEqual(regex.pattern.test("bg-blue-2"), false);
  assert.strictEqual(regex.pattern.test("bg-blue-20"), false);
});
