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
  baseColorsDark
} from "./colors";

export default {
  colors: {
    // background colors
    ...backgroundDark,

    // Text
    ...textDark,

    // Primary colors
    ...baseColorsDark,

    //semantic colors
    ...blueDark,
    ...purpleDark,
    ...greenDark,
    ...yellowDark,
    ...redDark,
    ...cyanDark,
    ...pinkDark,
    ...grayDark,
  },
};
