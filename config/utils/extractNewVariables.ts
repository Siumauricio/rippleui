import { ColorsVariableMap } from "../types/variables.types";
import { applyOpacityValue } from "./applyOpacityValue";

export const extractNewVariables = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): Record<string, T> => {
  const keys1 = Object.keys(obj1);

  return Object.keys(obj2)
    .filter((key) => !keys1.includes(key))
    .reduce((acc, key) => {
      acc[key as keyof ColorsVariableMap] = applyOpacityValue(`--${key}`) as T;
      return acc;
    }, {} as Record<string, T>);
};
