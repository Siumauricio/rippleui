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
  "blue-1": applyOpacityValue("--blue-1"),
  "blue-2": applyOpacityValue("--blue-2"),
  "blue-3": applyOpacityValue("--blue-3"),
  "blue-4": applyOpacityValue("--blue-4"),
  "blue-5": applyOpacityValue("--blue-5"),
  "blue-6": applyOpacityValue("--blue-6"),
  "blue-7": applyOpacityValue("--blue-7"),
  "blue-8": applyOpacityValue("--blue-8"),
  "blue-9": applyOpacityValue("--blue-9"),
  "blue-10": applyOpacityValue("--blue-10"),
  "blue-11": applyOpacityValue("--blue-11"),
  "blue-12": applyOpacityValue("--blue-12"),
};

const green: ColorsVariables<"green"> = {
  "green-1": applyOpacityValue("--green-1"),
  "green-2": applyOpacityValue("--green-2"),
  "green-3": applyOpacityValue("--green-3"),
  "green-4": applyOpacityValue("--green-4"),
  "green-5": applyOpacityValue("--green-5"),
  "green-6": applyOpacityValue("--green-6"),
  "green-7": applyOpacityValue("--green-7"),
  "green-8": applyOpacityValue("--green-8"),
  "green-9": applyOpacityValue("--green-9"),
  "green-10": applyOpacityValue("--green-10"),
  "green-11": applyOpacityValue("--green-11"),
  "green-12": applyOpacityValue("--green-12"),
};

const cyan: ColorsVariables<"cyan"> = {
  "cyan-1": applyOpacityValue("--cyan-1"),
  "cyan-2": applyOpacityValue("--cyan-2"),
  "cyan-3": applyOpacityValue("--cyan-3"),
  "cyan-4": applyOpacityValue("--cyan-4"),
  "cyan-5": applyOpacityValue("--cyan-5"),
  "cyan-6": applyOpacityValue("--cyan-6"),
  "cyan-7": applyOpacityValue("--cyan-7"),
  "cyan-8": applyOpacityValue("--cyan-8"),
  "cyan-9": applyOpacityValue("--cyan-9"),
  "cyan-10": applyOpacityValue("--cyan-10"),
  "cyan-11": applyOpacityValue("--cyan-11"),
  "cyan-12": applyOpacityValue("--cyan-12"),
};

const gray: ColorsVariables<"gray"> = {
  "gray-1": applyOpacityValue("--gray-1"),
  "gray-2": applyOpacityValue("--gray-2"),
  "gray-3": applyOpacityValue("--gray-3"),
  "gray-4": applyOpacityValue("--gray-4"),
  "gray-5": applyOpacityValue("--gray-5"),
  "gray-6": applyOpacityValue("--gray-6"),
  "gray-7": applyOpacityValue("--gray-7"),
  "gray-8": applyOpacityValue("--gray-8"),
  "gray-9": applyOpacityValue("--gray-9"),
  "gray-10": applyOpacityValue("--gray-10"),
  "gray-11": applyOpacityValue("--gray-11"),
  "gray-12": applyOpacityValue("--gray-12"),
};

const pink: ColorsVariables<"pink"> = {
  "pink-1": applyOpacityValue("--pink-1"),
  "pink-2": applyOpacityValue("--pink-2"),
  "pink-3": applyOpacityValue("--pink-3"),
  "pink-4": applyOpacityValue("--pink-4"),
  "pink-5": applyOpacityValue("--pink-5"),
  "pink-6": applyOpacityValue("--pink-6"),
  "pink-7": applyOpacityValue("--pink-7"),
  "pink-8": applyOpacityValue("--pink-8"),
  "pink-9": applyOpacityValue("--pink-9"),
  "pink-10": applyOpacityValue("--pink-10"),
  "pink-11": applyOpacityValue("--pink-11"),
  "pink-12": applyOpacityValue("--pink-12"),
};

const purple: ColorsVariables<"purple"> = {
  "purple-1": applyOpacityValue("--purple-1"),
  "purple-2": applyOpacityValue("--purple-2"),
  "purple-3": applyOpacityValue("--purple-3"),
  "purple-4": applyOpacityValue("--purple-4"),
  "purple-5": applyOpacityValue("--purple-5"),
  "purple-6": applyOpacityValue("--purple-6"),
  "purple-7": applyOpacityValue("--purple-7"),
  "purple-8": applyOpacityValue("--purple-8"),
  "purple-9": applyOpacityValue("--purple-9"),
  "purple-10": applyOpacityValue("--purple-10"),
  "purple-11": applyOpacityValue("--purple-11"),
  "purple-12": applyOpacityValue("--purple-12"),
};

const yellow: ColorsVariables<"yellow"> = {
  "yellow-1": applyOpacityValue("--yellow-1"),
  "yellow-2": applyOpacityValue("--yellow-2"),
  "yellow-3": applyOpacityValue("--yellow-3"),
  "yellow-4": applyOpacityValue("--yellow-4"),
  "yellow-5": applyOpacityValue("--yellow-5"),
  "yellow-6": applyOpacityValue("--yellow-6"),
  "yellow-7": applyOpacityValue("--yellow-7"),
  "yellow-8": applyOpacityValue("--yellow-8"),
  "yellow-9": applyOpacityValue("--yellow-9"),
  "yellow-10": applyOpacityValue("--yellow-10"),
  "yellow-11": applyOpacityValue("--yellow-11"),
  "yellow-12": applyOpacityValue("--yellow-12"),
};

const red: ColorsVariables<"red"> = {
  "red-1": applyOpacityValue("--red-1"),
  "red-2": applyOpacityValue("--red-2"),
  "red-3": applyOpacityValue("--red-3"),
  "red-4": applyOpacityValue("--red-4"),
  "red-5": applyOpacityValue("--red-5"),
  "red-6": applyOpacityValue("--red-6"),
  "red-7": applyOpacityValue("--red-7"),
  "red-8": applyOpacityValue("--red-8"),
  "red-9": applyOpacityValue("--red-9"),
  "red-10": applyOpacityValue("--red-10"),
  "red-11": applyOpacityValue("--red-11"),
  "red-12": applyOpacityValue("--red-12"),
};
const slate: ColorsVariables<"slate"> = {
  "slate-1": applyOpacityValue("--slate-1"),
  "slate-2": applyOpacityValue("--slate-2"),
  "slate-3": applyOpacityValue("--slate-3"),
  "slate-4": applyOpacityValue("--slate-4"),
  "slate-5": applyOpacityValue("--slate-5"),
  "slate-6": applyOpacityValue("--slate-6"),
  "slate-7": applyOpacityValue("--slate-7"),
  "slate-8": applyOpacityValue("--slate-8"),
  "slate-9": applyOpacityValue("--slate-9"),
  "slate-10": applyOpacityValue("--slate-10"),
  "slate-11": applyOpacityValue("--slate-11"),
  "slate-12": applyOpacityValue("--slate-12"),
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
