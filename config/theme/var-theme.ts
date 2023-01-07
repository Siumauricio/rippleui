import {
  BackgroundVariables,
  BaseColorsVariable,
  ColorsVariables,
  PalleteVariables,
  TextVariables,
  ThemeVariables,
} from "../types/variables.types";
import { applyOpacityValue } from "../utils/applyOpacityValue";

const blue: ColorsVariables<"blue"> = {
  "blue-50": applyOpacityValue("--blue-50"),
  "blue-100": applyOpacityValue("--blue-100"),
  "blue-200": applyOpacityValue("--blue-200"),
  "blue-300": applyOpacityValue("--blue-300"),
  "blue-400": applyOpacityValue("--blue-400"),
  "blue-500": applyOpacityValue("--blue-500"),
  "blue-600": applyOpacityValue("--blue-600"),
  "blue-700": applyOpacityValue("--blue-700"),
  "blue-800": applyOpacityValue("--blue-800"),
  "blue-900": applyOpacityValue("--blue-900"),
  "blue-1000": applyOpacityValue("--blue-1000"),
  "blue-1100": applyOpacityValue("--blue-1100"),
};

const green: ColorsVariables<"green"> = {
  "green-50": applyOpacityValue("--green-50"),
  "green-100": applyOpacityValue("--green-100"),
  "green-200": applyOpacityValue("--green-200"),
  "green-300": applyOpacityValue("--green-300"),
  "green-400": applyOpacityValue("--green-400"),
  "green-500": applyOpacityValue("--green-500"),
  "green-600": applyOpacityValue("--green-600"),
  "green-700": applyOpacityValue("--green-700"),
  "green-800": applyOpacityValue("--green-800"),
  "green-900": applyOpacityValue("--green-900"),
  "green-1000": applyOpacityValue("--green-1000"),
  "green-1100": applyOpacityValue("--green-1100"),
};

const cyan: ColorsVariables<"cyan"> = {
  "cyan-50": applyOpacityValue("--cyan-50"),
  "cyan-100": applyOpacityValue("--cyan-100"),
  "cyan-200": applyOpacityValue("--cyan-200"),
  "cyan-300": applyOpacityValue("--cyan-300"),
  "cyan-400": applyOpacityValue("--cyan-400"),
  "cyan-500": applyOpacityValue("--cyan-500"),
  "cyan-600": applyOpacityValue("--cyan-600"),
  "cyan-700": applyOpacityValue("--cyan-700"),
  "cyan-800": applyOpacityValue("--cyan-800"),
  "cyan-900": applyOpacityValue("--cyan-900"),
  "cyan-1000": applyOpacityValue("--cyan-1000"),
  "cyan-1100": applyOpacityValue("--cyan-1100"),
};

const gray: ColorsVariables<"gray"> = {
  "gray-50": applyOpacityValue("--gray-50"),
  "gray-100": applyOpacityValue("--gray-100"),
  "gray-200": applyOpacityValue("--gray-200"),
  "gray-300": applyOpacityValue("--gray-300"),
  "gray-400": applyOpacityValue("--gray-400"),
  "gray-500": applyOpacityValue("--gray-500"),
  "gray-600": applyOpacityValue("--gray-600"),
  "gray-700": applyOpacityValue("--gray-700"),
  "gray-800": applyOpacityValue("--gray-800"),
  "gray-900": applyOpacityValue("--gray-900"),
  "gray-1000": applyOpacityValue("--gray-1000"),
  "gray-1100": applyOpacityValue("--gray-1100"),
};

const pink: ColorsVariables<"pink"> = {
  "pink-50": applyOpacityValue("--pink-50"),
  "pink-100": applyOpacityValue("--pink-100"),
  "pink-200": applyOpacityValue("--pink-200"),
  "pink-300": applyOpacityValue("--pink-300"),
  "pink-400": applyOpacityValue("--pink-400"),
  "pink-500": applyOpacityValue("--pink-500"),
  "pink-600": applyOpacityValue("--pink-600"),
  "pink-700": applyOpacityValue("--pink-700"),
  "pink-800": applyOpacityValue("--pink-800"),
  "pink-900": applyOpacityValue("--pink-900"),
  "pink-1000": applyOpacityValue("--pink-1000"),
  "pink-1100": applyOpacityValue("--pink-1100"),
};

const purple: ColorsVariables<"purple"> = {
  "purple-50": applyOpacityValue("--purple-50"),
  "purple-100": applyOpacityValue("--purple-100"),
  "purple-200": applyOpacityValue("--purple-200"),
  "purple-300": applyOpacityValue("--purple-300"),
  "purple-400": applyOpacityValue("--purple-400"),
  "purple-500": applyOpacityValue("--purple-500"),
  "purple-600": applyOpacityValue("--purple-600"),
  "purple-700": applyOpacityValue("--purple-700"),
  "purple-800": applyOpacityValue("--purple-800"),
  "purple-900": applyOpacityValue("--purple-900"),
  "purple-1000": applyOpacityValue("--purple-1000"),
  "purple-1100": applyOpacityValue("--purple-1100"),
};

const yellow: ColorsVariables<"yellow"> = {
  "yellow-50": applyOpacityValue("--yellow-50"),
  "yellow-100": applyOpacityValue("--yellow-100"),
  "yellow-200": applyOpacityValue("--yellow-200"),
  "yellow-300": applyOpacityValue("--yellow-300"),
  "yellow-400": applyOpacityValue("--yellow-400"),
  "yellow-500": applyOpacityValue("--yellow-500"),
  "yellow-600": applyOpacityValue("--yellow-600"),
  "yellow-700": applyOpacityValue("--yellow-700"),
  "yellow-800": applyOpacityValue("--yellow-800"),
  "yellow-900": applyOpacityValue("--yellow-900"),
  "yellow-1000": applyOpacityValue("--yellow-1000"),
  "yellow-1100": applyOpacityValue("--yellow-1100"),
};

const red: ColorsVariables<"red"> = {
  "red-50": applyOpacityValue("--red-50"),
  "red-100": applyOpacityValue("--red-100"),
  "red-200": applyOpacityValue("--red-200"),
  "red-300": applyOpacityValue("--red-300"),
  "red-400": applyOpacityValue("--red-400"),
  "red-500": applyOpacityValue("--red-500"),
  "red-600": applyOpacityValue("--red-600"),
  "red-700": applyOpacityValue("--red-700"),
  "red-800": applyOpacityValue("--red-800"),
  "red-900": applyOpacityValue("--red-900"),
  "red-1000": applyOpacityValue("--red-1000"),
  "red-1100": applyOpacityValue("--red-1100"),
};
const slate: ColorsVariables<"slate"> = {
  "slate-50": applyOpacityValue("--slate-50"),
  "slate-100": applyOpacityValue("--slate-100"),
  "slate-200": applyOpacityValue("--slate-200"),
  "slate-300": applyOpacityValue("--slate-300"),
  "slate-400": applyOpacityValue("--slate-400"),
  "slate-500": applyOpacityValue("--slate-500"),
  "slate-600": applyOpacityValue("--slate-600"),
  "slate-700": applyOpacityValue("--slate-700"),
  "slate-800": applyOpacityValue("--slate-800"),
  "slate-900": applyOpacityValue("--slate-900"),
  "slate-1000": applyOpacityValue("--slate-1000"),
  "slate-1100": applyOpacityValue("--slate-1100"),
};
const background: BackgroundVariables = {
  backgroundPrimary: applyOpacityValue("--backgroundPrimary"),
  backgroundSecondary: applyOpacityValue("--backgroundSecondary"),
  border: applyOpacityValue("--border"),
  black: applyOpacityValue("--black"),
  white: applyOpacityValue("--white"),
};

const text: TextVariables = {
  content1: applyOpacityValue("--content1"),
  content2: applyOpacityValue("--content2"),
  content3: applyOpacityValue("--content3"),
  whiteInverted: applyOpacityValue("--whiteInverted"),
  blackInverted: applyOpacityValue("--blackInverted"),
};

const baseColors: BaseColorsVariable = {
  neutral: applyOpacityValue("--neutral"),
  primary: applyOpacityValue("--primary"),
  secondary: applyOpacityValue("--secondary"),
  success: applyOpacityValue("--success"),
  error: applyOpacityValue("--error"),
  warning: applyOpacityValue("--warning"),
};

const pallete: PalleteVariables = {
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

export const varTheme: ThemeVariables = {
  colors: {
    ...background,
    ...text,
    ...baseColors,
    ...pallete,
  },
};
