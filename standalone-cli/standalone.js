let Module = require("module");
let origRequire = Module.prototype.require;

let localModules = {
  "tailwindcss/colors": require("tailwindcss/colors"),
  "tailwindcss/defaultConfig": require("tailwindcss/defaultConfig"),
  "tailwindcss/defaultTheme": require("tailwindcss/defaultTheme"),
  "tailwindcss/resolveConfig": require("tailwindcss/resolveConfig"),
  "tailwindcss/plugin": require("tailwindcss/plugin"),

  "@tailwindcss/aspect-ratio": require("@tailwindcss/aspect-ratio"),
  "@tailwindcss/container-queries": require("@tailwindcss/container-queries"),
  "@tailwindcss/forms": require("@tailwindcss/forms"),
  "@tailwindcss/line-clamp": require("@tailwindcss/line-clamp"),
  "@tailwindcss/typography": require("@tailwindcss/typography"),
  rippleui: require("rippleui"),

  // These are present to allow them to be specified in the PostCSS config file
  autoprefixer: require("autoprefixer"),
  tailwindcss: require("tailwindcss"),
};

Module.prototype.require = function (id) {
  if (localModules.hasOwnProperty(id)) {
    return localModules[id];
  }
  return origRequire.apply(this, arguments);
};

require("tailwindcss/lib/cli");
