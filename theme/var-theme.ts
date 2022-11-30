 const blue = {
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

 const green = {
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

 const cyan = {
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

 const gray = {
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

 const pink = {
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

 const purple = {
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

 const yellow = {
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

 const red = {
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

const background = {
  backgroundPrimary : "var(--backgroundPrimary)",
  backgroundSecondary : "var(--backgroundSecondary)",
  border: "var(--border)",
}

const text = {
  content1: "var(--content1)",
  content2: "var(--content2)",
  content3: "var(--content3)",
  whiteInverted: "var(--whiteInverted)",
}

const baseColors = {
  neutral: "var(--neutral)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  success: "var(--success)",
  error: "var(--error)",
  warning: "var(--warning)",
}

export default {
  colors: {
    // background colors
    ...background,

    // Text
    ...text,

    // Primary colors
    ...baseColors,

    //semantic colors
    blue,
    purple,
    green,
    yellow,
    red,
    cyan,
    pink,
    gray,
  },
};
