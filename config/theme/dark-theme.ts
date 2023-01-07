import { addPrefix } from "../utils/prefix";
import {
  blueDark,
  greenDark,
  purpleDark,
  yellowDark,
  redDark,
  cyanDark,
  pinkDark,
  grayDark,
  backgroundDark,
  textDark,
  baseColorsDark,
} from "../colors";
import { PalleteTheme, Theme } from "../types/theme.types";
import { slateDark } from "../colors/slate";

const pallete: PalleteTheme = {
  ...blueDark,
  ...greenDark,
  ...purpleDark,
  ...yellowDark,
  ...redDark,
  ...cyanDark,
  ...pinkDark,
  ...grayDark,
  ...slateDark,
};

const colors = {
  ...backgroundDark,
  ...textDark,
  ...baseColorsDark,
  ...pallete,
};

export const darkTheme: Theme = {
  themeName: "dark",
  colorScheme: "dark",
  prefersColorScheme: true,
  colors: {
    ...addPrefix({ ...colors }),
  },
};
