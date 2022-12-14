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
} from "./colors";
import { Variables, ThemeVariables } from "./types";

const pallete: Variables = {
  ...blueDark,
  ...greenDark,
  ...purpleDark,
  ...yellowDark,
  ...redDark,
  ...cyanDark,
  ...pinkDark,
  ...grayDark,
};

export const theme: ThemeVariables = {
  colors: {
    ...backgroundDark,
    ...textDark,
    ...baseColorsDark,
    ...pallete,
  },
};

export default {
  ...theme,
};
