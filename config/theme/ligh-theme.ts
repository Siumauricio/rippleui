import {
  blue,
  cyan,
  gray,
  green,
  pink,
  purple,
  red,
  yellow,
  background,
  baseColors,
  text,
} from "../colors";
import { slate } from "../colors/slate";
import { PalleteTheme, Theme } from "../types/theme.types";
import { addPrefix } from "../utils/prefix";

const pallete: PalleteTheme = {
  ...blue,
  ...purple,
  ...green,
  ...yellow,
  ...red,
  ...cyan,
  ...pink,
  ...gray,
  ...slate,
};

const colors = {
  ...background,
  ...text,
  ...baseColors,
  ...pallete,
};

export const lightTheme: Theme = {
  themeName: "light",
  colorScheme: "light",
  prefersColorScheme: false,
  colors: {
    ...addPrefix({ ...colors }),
  },
};
