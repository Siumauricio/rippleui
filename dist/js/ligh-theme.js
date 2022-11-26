"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
exports.default = {
    colors: {
        // background colors
        white: "#fff",
        black: "#000",
        background: "#fff",
        backgroundAlpha: "rgba(255, 255, 255, 0.8)",
        foreground: "#000",
        // Primary colors
        neutral: "#697177",
        primary: "#0072F5",
        secondary: "#9750DD",
        success: "#17C964",
        error: "#F31260",
        warning: "#FFB800",
        //semantic colors
        blue: colors_1.blue,
        purple: colors_1.purple,
        green: colors_1.green,
        yellow: colors_1.yellow,
        red: colors_1.red,
        cyan: colors_1.cyan,
        pink: colors_1.pink,
        gray: colors_1.gray,
        // misc
        text: colors_1.gray[900],
        link: "$blue600",
        codeLight: "$pink100",
        code: "$pink600",
        selection: "$blue200",
        border: "rgba(0, 0, 0, 0.15)",
    },
};
