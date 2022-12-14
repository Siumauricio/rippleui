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
} from "./colors";
import { ThemeVariables, Variables } from "./types";

const pallete: Variables = {
  ...blue,
  ...purple,
  ...green,
  ...yellow,
  ...red,
  ...cyan,
  ...pink,
  ...gray,
};

export const theme: ThemeVariables = {
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
