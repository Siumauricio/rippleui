import { blue, cyan, gray, green, pink, purple, red, yellow,background,baseColors,text } from "./colors";

export default {
  colors: {
    // background colors
    ...background,

    // Text
    ...text,

    // Primary colors
    ...baseColors,

    // semantic colors
    ...blue,
    ...purple,
    ...green,
    ...yellow,
    ...red,
    ...cyan,
    ...pink,
    ...gray,
  },
};
