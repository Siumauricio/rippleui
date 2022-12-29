import { ColorsMap, RecursivePartial } from "../types/theme.types";
import { ColorsVariableMap } from "../types/variables.types";
import { applyOpacityValue } from "./applyOpacityValue";

export const extractNewVariables = (
  obj1: ColorsVariableMap,
  obj2: RecursivePartial<ColorsMap>
): { [key: string]: any } => {
  const keys1 = Object.keys(obj1);

  return Object.keys(obj2)
    .filter((key) => !keys1.includes(key))
    .reduce((acc, key) => {
      // @ts-ignore
      acc[key] = applyOpacityValue(`--${key}`);
      return acc;
    }, {});
};
