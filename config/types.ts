type Colors =
  | "blue"
  | "green"
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

export type PalleteColors = {
  [key in PalleteScale]: string;
};

type BackgroundScale = "backgroundPrimary" | "backgroundSecondary" | "border";

export type BackgroundColors = {
  [key in BackgroundScale]: string;
};

type TextScale = "content1" | "content2" | "content3" | "whiteInverted";

export type TextColors = {
  [key in TextScale]: string;
};

type BaseScale =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "neutral";

export type BaseColors = {
  [key in BaseScale]: string;
};

export type Pallete = {
  [key in Colors]: PalleteColors;
};

export type Theme = {
  colors: BackgroundColors & TextColors & BaseColors & Pallete;
};
