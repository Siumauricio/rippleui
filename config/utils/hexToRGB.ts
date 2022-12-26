type Result = `${number} ${number} ${number}`;

export const hexToRGB = (hex: string): Result => {
  // Parse the hexadecimal string to get the red, green, and blue values
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  // Return an object with the red, green, and blue values if the hexadecimal string is valid
  if (result) {
    const red = parseInt(result[1], 16);
    const green = parseInt(result[2], 16);
    const blue = parseInt(result[3], 16);
    return `${red} ${green} ${blue}`;
  }
  throw new Error("Invalid hexadecimal string");
  // Return null if the hexadecimal string is invalid
};
