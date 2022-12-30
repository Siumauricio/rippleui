import { applyOpacityValue } from "../utils/applyOpacityValue";
import {
  BackgroundScale,
  BaseScale,
  ColorScale,
  PalleteScale,
  TextScale,
} from "./theme.types";

type OpacityFunc = ReturnType<typeof applyOpacityValue>;

export type PalleteVariablesScale<T extends ColorScale> =
  `${T}-${PalleteScale}`;

export type ColorsVariables<T extends ColorScale> = {
  [key in PalleteVariablesScale<T>]: OpacityFunc;
};

export type BackgroundVariables = {
  [key in BackgroundScale]: OpacityFunc;
};

export type TextVariables = {
  [key in TextScale]: OpacityFunc;
};

export type BaseColorsVariable = {
  [key in BaseScale]: OpacityFunc;
};

export type PalleteVariablesMap = `${ColorScale}-${PalleteScale}`;

export type PalleteVariables = {
  [key in PalleteVariablesMap]: OpacityFunc;
};

export type ColorsVariableMap = BackgroundVariables &
  TextVariables &
  BaseColorsVariable &
  PalleteVariables;

export type ThemeVariables = {
  colors: ColorsVariableMap;
};
