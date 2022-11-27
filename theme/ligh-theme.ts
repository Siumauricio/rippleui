import { blue, cyan, gray, green, pink, purple, red, yellow } from "./colors";

export default {
  colors: {
    // background colors
    '--backgroundPrimary': '#FFFFFF',
    '--backgroundSecondary': '#F7F7F7',
    '--border': '#E8E8E8',

    "--background": "#fff",
    "--backgroundAlpha": "rgba(255, 255, 255, 0.8)",
    "--foreground": "#000",

    // Text
    '--content1': '#1C1C1C',
    '--content2': '#585757',
    '--content3': '#969696',

    // Primary colors
    "--neutral": "#697177",
    "--primary": "#0072F5",
    "--secondary": "#9750DD",
    "--success": "#17C964",
    "--error": "#F31260",
    "--warning": "#FFB800",
    // //semantic colors
    ...blue,
    ...purple,
    ...green,
    ...yellow,
    ...red,
    ... cyan,
    ...pink,
    ...gray,

    // // misc
    "--whiteInverted": "#000000",
  },
};
