const extractMediaQueries = <T extends { [key: string]: any }>(
  array: T[]
): T[] => {
  let mediaQueries: T[] = [];

  array.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key.startsWith("@media")) {
        mediaQueries.push({ [key]: value } as T);
      }
    });
  });

  return mediaQueries;
};

const extractRootElement = <T extends { [key: string]: any }>(array: T[]) => {
  const root = array.filter((obj) => obj[":root"] !== undefined)[0];
  if (!root) return;

  return {
    ":root": root[":root"],
  };
};

const extractDataThemes = <T extends { [key: string]: any }>(array: T[]) => {
  let dataTheme: T[] = [];

  array.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key.match(/\[data-theme=\w+\]/)) {
        dataTheme.push({ [key]: value } as T);
      }
    });
  });
  return dataTheme;
};

export const sortThemes = <T extends { [key: string]: any }>(array: T[]) => {
  const root = extractRootElement(array);
  const media = extractMediaQueries(array);
  const dataTheme = extractDataThemes(array);
  if (!root) return [...media, ...dataTheme];
  return [root, ...media, ...dataTheme];
};
