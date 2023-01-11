export const htmlToJsx = (code: string) => {
  const regexExpr =
    /class|for|tabindex|autofocus|autocomplete|fill-rule|clip-rule|checked|stroke-linecap|stroke-linejoin|stroke-width/g;
  const replacedProps = code.replace(regexExpr, (match) => {
    if (match === "class") {
      return "className";
    } else if (match === "for") {
      return "htmlFor";
    } else if (match === "tabindex") {
      return "tabIndex";
    } else if (match === "autofocus") {
      return "autoFocus";
    } else if (match === "autocomplete") {
      return "autoComplete";
    } else if (match === "fill-rule") {
      return "fillRule";
    } else if (match === "clip-rule") {
      return "clipRule";
    } else if (match === "checked") {
      return "defaultChecked";
    } else if (match === "stroke-linecap") {
      return "strokeLinecap";
    } else if (match === "stroke-linejoin") {
      return "strokeLinejoin";
    } else if (match === "stroke-width") {
      return "strokeWidth";
    }
    return match.toLowerCase();
  });
  return replacedProps;
};
