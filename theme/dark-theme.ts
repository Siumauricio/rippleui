import {
  blueDark,
  greenDark,
  purpleDark,
  yellowDark,
  redDark,
  cyanDark,
  pinkDark,
  grayDark,
} from "./colors";

export default {
  colors: {
    // background

    '--backgroundPrimary': '#1A1A1A',
    '--backgroundSecondary': '#272727',
    '--border': '#313131',

    "--background": "#000",
    "--backgroundAlpha": "rgba(0, 0, 0, 0.6)",
    "--foreground": "#fff",

    // Text
    '--content1': '#E8E8E8',
    '--content2': '#BABABA',
    '--content3': '#767676',

    //semantic colors
    ...blueDark,
    ...purpleDark,
    ...greenDark,
    ...yellowDark,
    ...redDark,
    ...cyanDark,
    ...pinkDark,
    ...grayDark,

    // brand colors
    

    // misc
    "--whiteInverted": "#FFFFFF",
    // text: "$gray900",
    // link: "$blue700",
    // codeLight: "$cyan50",
    // code: "$cyan600",
    // selection: "$pink800",
    // border: "rgba(255, 255, 255, 0.15)",
  },
};
