import { Theme } from "./theme.types";

type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

type ThemeExtended = MakeOptional<Theme, "colors" | "prefersColorScheme">;

/**
 * The @{config} object.
 * @typedef {Type} ConfigTheme
 * @property {boolean} [defaultStyle] - Will apply by default bg-color and color to the root element.
 * @property {string} [prefix] - Will add a prefix to all the variables.
 * @property {string[]} [removeThemes] - The list of themes to remove.
 * @property {ThemeExtended[]} [themes] -  The list of themes to modify, add or remove, you can also add new variables in each theme.
 */
type ConfigTheme = {
  /**
   * Will apply by default bg-color and color to the root element `(default: true)`
   */
  defaultStyle?: boolean;
  /**
   * Will add a prefix to all the variables `(default: "")`
   */
  prefix?: string;
  /**
   * The list of themes to remove `(default: [])`
   */
  removeThemes?: string[];
  /**
   * The list of themes to modify, add you can also add new variables in each theme.
   */
  themes?: ThemeExtended[];
};

export type Config = ConfigTheme;
