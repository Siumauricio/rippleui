import { ColorsMap, RecursivePartial } from "../types/theme.types";

export const addPrefix = <T extends ColorsMap | RecursivePartial<ColorsMap>>(
  obj: T = {} as T
): T => {
  let transformedObj: T = {} as T;
  Object.keys(obj).map((key) => {
    const newKey = `--${key}` as keyof T;
    transformedObj[newKey] = obj[key as keyof T];
  });
  return transformedObj;
};
