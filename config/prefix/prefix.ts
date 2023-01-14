import postcss, { Declaration, Root, Rule } from "postcss";
import selectorParser from "postcss-selector-parser";

interface CssInJs {
  [key: string]: {
    [key: string]: string;
  };
}

const addPrefix = (prefix: string) => {
  return (css: Root) => {
    css.walkRules((rule: Rule) => {
      rule.selector = selectorParser((selectors: selectorParser.Root) => {
        selectors.walkClasses((classNode: selectorParser.ClassName) => {
          classNode.value = prefix + classNode.value;
        });
      }).processSync(rule.selector);
    });
  };
};

export const getSelectorsWithPrefix = (
  prefix: string,
  cssInJs: CssInJs
): CssInJs => {
  const prefixNoWhiteSpace = prefix.replace(/\s/g, "");
  let cssCode = "";
  for (let key in cssInJs) {
    cssCode += `${key}{`;
    for (let prop in cssInJs[key]) {
      cssCode += `${prop}:${cssInJs[key][prop]};`;
    }
    cssCode += `}`;
  }
  const prefixedCSS = postcss([addPrefix(prefixNoWhiteSpace)]).process(
    cssCode,
    {
      from: undefined,
    }
  );
  const prefixedCSSObject: CssInJs = {};
  prefixedCSS.root.walkRules((rule: Rule) => {
    const selector = rule.selector;
    let obj: { [key: string]: string } = {};
    rule.walkDecls((decl: Declaration) => {
      obj[decl.prop] = decl.value;
    });
    prefixedCSSObject[selector] = obj;
  });
  return prefixedCSSObject;
};
