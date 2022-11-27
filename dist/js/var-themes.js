"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.red = exports.yellow = exports.purple = exports.pink = exports.gray = exports.cyan = exports.green = exports.blue = void 0;
exports.blue = {
    50: "var(--blue-50)",
    100: "var(--blue-100)",
    200: "var(--blue-200)",
    300: "var(--blue-300)",
    400: "var(--blue-400)",
    500: "var(--blue-500)",
    600: "var(--blue-600)",
    700: "var(--blue-700)",
    800: "var(--blue-800)",
    900: "var(--blue-900)",
};
exports.green = {
    50: "var(--green-50)",
    100: "var(--green-100)",
    200: "var(--green-200)",
    300: "var(--green-300)",
    400: "var(--green-400)",
    500: "var(--green-500)",
    600: "var(--green-600)",
    700: "var(--green-700)",
    800: "var(--green-800)",
    900: "var(--green-900)",
};
exports.cyan = {
    50: "var(--cyan-50)",
    100: "var(--cyan-100)",
    200: "var(--cyan-200)",
    300: "var(--cyan-300)",
    400: "var(--cyan-400)",
    500: "var(--cyan-500)",
    600: "var(--cyan-600)",
    700: "var(--cyan-700)",
    800: "var(--cyan-800)",
    900: "var(--cyan-900)",
};
exports.gray = {
    50: "var(--gray-50)",
    100: "var(--gray-100)",
    200: "var(--gray-200)",
    300: "var(--gray-300)",
    400: "var(--gray-400)",
    500: "var(--gray-500)",
    600: "var(--gray-600)",
    700: "var(--gray-700)",
    800: "var(--gray-800)",
    900: "var(--gray-900)",
};
exports.pink = {
    50: "var(--pink-50)",
    100: "var(--pink-100)",
    200: "var(--pink-200)",
    300: "var(--pink-300)",
    400: "var(--pink-400)",
    500: "var(--pink-500)",
    600: "var(--pink-600)",
    700: "var(--pink-700)",
    800: "var(--pink-800)",
    900: "var(--pink-900)",
};
exports.purple = {
    50: "var(--purple-50)",
    100: "var(--purple-100)",
    200: "var(--purple-200)",
    300: "var(--purple-300)",
    400: "var(--purple-400)",
    500: "var(--purple-500)",
    600: "var(--purple-600)",
    700: "var(--purple-700)",
    800: "var(--purple-800)",
    900: "var(--purple-900)",
};
exports.yellow = {
    50: "var(--yellow-50)",
    100: "var(--yellow-100)",
    200: "var(--yellow-200)",
    300: "var(--yellow-300)",
    400: "var(--yellow-400)",
    500: "var(--yellow-500)",
    600: "var(--yellow-600)",
    700: "var(--yellow-700)",
    800: "var(--yellow-800)",
    900: "var(--yellow-900)",
};
exports.red = {
    50: "var(--red-50)",
    100: "var(--red-100)",
    200: "var(--red-200)",
    300: "var(--red-300)",
    400: "var(--red-400)",
    500: "var(--red-500)",
    600: "var(--red-600)",
    700: "var(--red-700)",
    800: "var(--red-800)",
    900: "var(--red-900)",
};
exports.default = {
    colors: {
        // background colors
        white: "#fff",
        black: "#000",
        backgroundColor: "#fff",
        backgroundAlpha: "rgba(255, 255, 255, 0.8)",
        foreground: "#000",
        // #0072F5
        // Primary colors
        // neutral: "#697177",
        neutral: "var(--neutral)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        // secondary: "#9750DD",
        // success: "#17C964",
        // error: "#F31260",
        // warning: "#FFB800",
        //semantic colors
        blue: exports.blue,
        purple: exports.purple,
        green: exports.green,
        yellow: exports.yellow,
        red: exports.red,
        cyan: exports.cyan,
        pink: exports.pink,
        gray: exports.gray,
        // misc
        text: exports.gray[900],
        link: "$blue600",
        codeLight: "$pink100",
        code: "$pink600",
        selection: "$blue200",
        border: "rgba(0, 0, 0, 0.15)",
    },
};
