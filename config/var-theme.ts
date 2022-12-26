import {
  BackgroundColors,
  BaseColors,
  Pallete,
  PalleteColors,
  TextColors,
  Theme,
} from "./types";
import { applyOpacityValue } from "./utils/applyOpacityValue";

const blue: PalleteColors = {
  50: applyOpacityValue("--blue-50"),
  100: applyOpacityValue("--blue-100"),
  200: applyOpacityValue("--blue-200"),
  300: applyOpacityValue("--blue-300"),
  400: applyOpacityValue("--blue-400"),
  500: applyOpacityValue("--blue-500"),
  600: applyOpacityValue("--blue-600"),
  700: applyOpacityValue("--blue-700"),
  800: applyOpacityValue("--blue-800"),
  900: applyOpacityValue("--blue-900"),
};

const green: PalleteColors = {
  50: applyOpacityValue("--green-50"),
  100: applyOpacityValue("--green-100"),
  200: applyOpacityValue("--green-200"),
  300: applyOpacityValue("--green-300"),
  400: applyOpacityValue("--green-400"),
  500: applyOpacityValue("--green-500"),
  600: applyOpacityValue("--green-600"),
  700: applyOpacityValue("--green-700"),
  800: applyOpacityValue("--green-800"),
  900: applyOpacityValue("--green-900"),
};

const cyan: PalleteColors = {
  50: applyOpacityValue("--cyan-50"),
  100: applyOpacityValue("--cyan-100"),
  200: applyOpacityValue("--cyan-200"),
  300: applyOpacityValue("--cyan-300"),
  400: applyOpacityValue("--cyan-400"),
  500: applyOpacityValue("--cyan-500"),
  600: applyOpacityValue("--cyan-600"),
  700: applyOpacityValue("--cyan-700"),
  800: applyOpacityValue("--cyan-800"),
  900: applyOpacityValue("--cyan-900"),
};

const gray: PalleteColors = {
  50: applyOpacityValue("--gray-50"),
  100: applyOpacityValue("--gray-100"),
  200: applyOpacityValue("--gray-200"),
  300: applyOpacityValue("--gray-300"),
  400: applyOpacityValue("--gray-400"),
  500: applyOpacityValue("--gray-500"),
  600: applyOpacityValue("--gray-600"),
  700: applyOpacityValue("--gray-700"),
  800: applyOpacityValue("--gray-800"),
  900: applyOpacityValue("--gray-900"),
};

const pink: PalleteColors = {
  50: applyOpacityValue("--pink-50"),
  100: applyOpacityValue("--pink-100"),
  200: applyOpacityValue("--pink-200"),
  300: applyOpacityValue("--pink-300"),
  400: applyOpacityValue("--pink-400"),
  500: applyOpacityValue("--pink-500"),
  600: applyOpacityValue("--pink-600"),
  700: applyOpacityValue("--pink-700"),
  800: applyOpacityValue("--pink-800"),
  900: applyOpacityValue("--pink-900"),
};

const purple: PalleteColors = {
  50: applyOpacityValue("--purple-50"),
  100: applyOpacityValue("--purple-100"),
  200: applyOpacityValue("--purple-200"),
  300: applyOpacityValue("--purple-300"),
  400: applyOpacityValue("--purple-400"),
  500: applyOpacityValue("--purple-500"),
  600: applyOpacityValue("--purple-600"),
  700: applyOpacityValue("--purple-700"),
  800: applyOpacityValue("--purple-800"),
  900: applyOpacityValue("--purple-900"),
};

const yellow: PalleteColors = {
  50: applyOpacityValue("--yellow-50"),
  100: applyOpacityValue("--yellow-100"),
  200: applyOpacityValue("--yellow-200"),
  300: applyOpacityValue("--yellow-300"),
  400: applyOpacityValue("--yellow-400"),
  500: applyOpacityValue("--yellow-500"),
  600: applyOpacityValue("--yellow-600"),
  700: applyOpacityValue("--yellow-700"),
  800: applyOpacityValue("--yellow-800"),
  900: applyOpacityValue("--yellow-900"),
};

const red: PalleteColors = {
  50: applyOpacityValue("--red-50"),
  100: applyOpacityValue("--red-100"),
  200: applyOpacityValue("--red-200"),
  300: applyOpacityValue("--red-300"),
  400: applyOpacityValue("--red-400"),
  500: applyOpacityValue("--red-500"),
  600: applyOpacityValue("--red-600"),
  700: applyOpacityValue("--red-700"),
  800: applyOpacityValue("--red-800"),
  900: applyOpacityValue("--red-900"),
};

const background: BackgroundColors = {
  backgroundPrimary: applyOpacityValue("--backgroundPrimary"),
  backgroundSecondary: applyOpacityValue("--backgroundSecondary"),
  border: applyOpacityValue("--border"),
  black: applyOpacityValue("--black"),
  white: applyOpacityValue("--white"),
};

const text: TextColors = {
  content1: applyOpacityValue("--content1"),
  content2: applyOpacityValue("--content2"),
  content3: applyOpacityValue("--content3"),
  whiteInverted: applyOpacityValue("--whiteInverted"),
  blackInverted: applyOpacityValue("--blackInverted"),
};

const baseColors: BaseColors = {
  neutral: applyOpacityValue("--neutral"),
  primary: applyOpacityValue("--primary"),
  secondary: applyOpacityValue("--secondary"),
  success: applyOpacityValue("--success"),
  error: applyOpacityValue("--error"),
  warning: applyOpacityValue("--warning"),
};

const pallete: Pallete = {
  blue,
  purple,
  green,
  yellow,
  red,
  cyan,
  pink,
  gray,
};

export const theme: Theme = {
  colors: {
    ...background,
    ...text,
    ...baseColors,
    ...pallete,
  },
};

export default {
  ...theme,
};
