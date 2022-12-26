import { applyOpacityValue } from "./utils/applyOpacityValue";
export type Colors =
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "cyan"
  | "pink"
  | "purple"
  | "gray";

type PalleteScale =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

type BaseScale =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "neutral";

type BackgroundScale =
  | "backgroundPrimary"
  | "backgroundSecondary"
  | "border"
  | "black"
  | "white";

type TextScale =
  | "content1"
  | "content2"
  | "content3"
  | "whiteInverted"
  | "blackInverted";

type DefaultSchema = "background-color" | "color";

type BackgroundVariablesScale = `--${BackgroundScale}`;

type BaseVariablesScale = `--${BaseScale}`;

type TextVariablesScale = `--${TextScale}`;

type PalleteVariablesScale<T extends Colors> = `--${T}-${PalleteScale}`;

type PalleteVariablesAll = `--${Colors}-${PalleteScale}`;

type OpacityFunc = ReturnType<typeof applyOpacityValue>;

export type DefaultSchemaColors = {
  [key in DefaultSchema]: string;
};

export type PalleteColors = {
  [key in PalleteScale]: OpacityFunc;
};

export type BackgroundColors = {
  [key in BackgroundScale]: OpacityFunc;
};

export type TextColors = {
  [key in TextScale]: OpacityFunc;
};

export type BaseColors = {
  [key in BaseScale]: OpacityFunc;
};

export type Pallete = {
  [key in Colors]: PalleteColors;
};

export type Theme = {
  colors: BackgroundColors & TextColors & BaseColors & Pallete;
};

export type BackgroundVariables = {
  [key in BackgroundVariablesScale]: string;
};

export type TextVariables = {
  [key in TextVariablesScale]: string;
};

export type BaseVariables = {
  [key in BaseVariablesScale]: string;
};

export type PalleteVariables<T extends Colors> = {
  [key in PalleteVariablesScale<T>]: string;
};

// export type Variables = {
//   [key in Colors]: PalleteVariables<key>;
// };

export type Variables = {
  [key in PalleteVariablesAll]: string;
};

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type ThemeVariables = {
  colors: {
    [key in BackgroundVariablesScale]: string;
  } & {
    [key in BaseVariablesScale]: string;
  } & {
    [key in TextVariablesScale]: string;
  } & {
    [key in PalleteVariablesAll]: string;
  };
};

export type ThemeType = RecursivePartial<ThemeVariables>;
