import { expect, test } from "vitest";
import { getSelectorsWithPrefix } from "../config/prefix/prefix";

test("should add a prefix to a simple selector", (t) => {
  const prefixNoWhiteSpace = "test-";
  const componentsPrefixed = getSelectorsWithPrefix(prefixNoWhiteSpace, {
    ".bg-white": {
      backgroundColor: "#fff",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".test-bg-white": {
      backgroundColor: "#fff",
    },
  });
});

test("should add a prefix to a complex selector", (t) => {
  const prefixNoWhiteSpace = "test-";
  const componentsPrefixed = getSelectorsWithPrefix(prefixNoWhiteSpace, {
    ".bg-white:hover": {
      backgroundColor: "#fff",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".test-bg-white:hover": {
      backgroundColor: "#fff",
    },
  });
});

test("should add a prefix to a complex selector with multiple selectors", (t) => {
  const prefixNoWhiteSpace = "test-";
  const componentsPrefixed = getSelectorsWithPrefix(prefixNoWhiteSpace, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".test-bg-white:hover, .test-bg-white:focus": {
      backgroundColor: "#fff",
    },
  });
});

test("should add a prefix to a complex selector with multiple selectors and multiple properties", (t) => {
  const prefixNoWhiteSpace = "test-";
  const componentsPrefixed = getSelectorsWithPrefix(prefixNoWhiteSpace, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".test-bg-white:hover, .test-bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
});

test("should add a prefix if contains selectors like where, not, is ", (t) => {
  const prefixNoWhiteSpace = "test-";
  const componentsPrefixed = getSelectorsWithPrefix(prefixNoWhiteSpace, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".bg-white:not(:hover)": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".bg-white:where(.bg-green)": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".bg-white:is(.bg-green)": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".test-bg-white:hover, .test-bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".test-bg-white:not(:hover)": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".test-bg-white:where(.test-bg-green)": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".test-bg-white:is(.test-bg-green)": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
});

test("it should return the same selectors if prefix  is empty", (t) => {
  const prefixWhiteSpace = "";
  const componentsPrefixed = getSelectorsWithPrefix(prefixWhiteSpace, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });

  const prefixEmpty = "";
  const componentsPrefixedEmpty = getSelectorsWithPrefix(prefixEmpty, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  expect(componentsPrefixedEmpty).toEqual({
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
});

test("it should return the same selectors if prefix contains whitespaces", (t) => {
  const prefixWhiteSpace = "  ";
  const componentsPrefixed = getSelectorsWithPrefix(prefixWhiteSpace, {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
  expect(componentsPrefixed).toEqual({
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
  });
});

test("it should add prefix to selectors when prefix is a single character", (t) => {
  const prefix = "p";
  const components = {
    ".bg-white:hover, .bg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".text-black": {
      color: "#000",
    },
  };
  const componentsPrefixed = getSelectorsWithPrefix(prefix, components);
  expect(componentsPrefixed).toEqual({
    ".pbg-white:hover, .pbg-white:focus": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ".ptext-black": {
      color: "#000",
    },
  });
});
