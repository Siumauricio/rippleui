"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
const ligh_theme_1 = __importDefault(require("./ligh-theme"));
const var_theme_1 = __importDefault(require("./var-theme"));
const dark_theme_1 = __importDefault(require("./dark-theme"));
exports.theme = {
    varTheme: var_theme_1.default,
    lighTheme: ligh_theme_1.default,
    darkTheme: dark_theme_1.default
};
