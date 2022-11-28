import lighTheme from "./ligh-theme";
import varTheme from "./var-theme";
import darkTheme from "./dark-theme";
import plugin from "tailwindcss/plugin";

// const theme = {
//   varTheme,
//   lighTheme,
//   darkTheme,
// };

export const themePlugin = plugin(
  ({ addBase, theme }) => {
    theme("theme.colors", varTheme.colors);
    addBase({
      [":root"]: {
        colorScheme: "light",
        ...lighTheme.colors,
      },
    });
    addBase({
      ["@media (prefers-color-scheme: dark)"]: {
        [":root"]: {
          colorScheme: "dark",
          ...darkTheme.colors,
        },
      },
    });
    addBase({
      ["[data-theme=light]"]: {
        colorScheme: "light",
        ...lighTheme.colors,
      },
    });
    addBase({
      ["[data-theme=dark]"]: {
        colorScheme: "dark",
        ...darkTheme.colors,
      },
    });
  },
  // Import of Theme variables
  {
    theme: {
      extend: {
        colors: varTheme.colors,
      },
    },
  }
);

module.exports = themePlugin;

// export const config = plugin.withOptions(
//   function (options = {}) {
//     console.log(options);
//     return function ({ addBase, ...rest }) {
//       console.log(rest);
//       addBase({
//         [":root"]: {
//           colorScheme: "light",
//           ...lighTheme.colors,
//         },
//       });
//       addBase({
//         ["@media (prefers-color-scheme: dark)"]: {
//           [":root"]: {
//             colorScheme: "dark",
//             ...darkTheme.colors,
//           },
//         },
//       });
//       addBase({
//         ["[data-theme=light]"]: {
//           colorScheme: "light",
//           ...lighTheme.colors,
//         },
//       });
//       addBase({
//         ["[data-theme=dark]"]: {
//           colorScheme: "dark",
//           ...darkTheme.colors,
//         },
//       });
//     };
//   },
//   function (options) {
//     return {
//       theme: {
//         extend: {
//           colors: varTheme.colors,
//         },
//       },
//     };
//   }
// );

// module.exports = config;
