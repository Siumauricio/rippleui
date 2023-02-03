export const jsxToHtml = (code: string) => {
  const regexExpr =
    /className|htmlFor|tabIndex|autoFocus|autoComplete|fillRule|clipRule|defaultChecked|strokeLinecap|strokeLinejoin|strokeWidth|enableBackground/g;
  const replacedProps = code.replace(regexExpr, (match) => {
    if (match === "className") {
      return "class";
    } else if (match === "htmlFor") {
      return "for";
    } else if (match === "tabIndex") {
      return "tabindex";
    } else if (match === "fillRule") {
      return "fill-rule";
    } else if (match === "clipRule") {
      return "clip-rule";
    } else if (match === "defaultChecked") {
      return "checked";
    } else if (match === "strokeLinecap") {
      return "stroke-linecap";
    } else if (match === "strokeLinejoin") {
      return "stroke-linejoin";
    } else if (match === "strokeWidth") {
      return "stroke-width";
    } else if (match === "enableBackground") {
      return "enable-background";
    }
    return match.toLowerCase();
  });

  return replacedProps;
};
