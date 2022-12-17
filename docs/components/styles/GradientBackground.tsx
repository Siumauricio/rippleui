import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const GradientBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div
      id="dark-image-gradient"
      className={clsx(
        theme !== "dark" && "grayscale-0",
        theme === "dark" && "brightness-95 contrast-200  grayscale-[1] filter",
        "fixed inset-0 z-[1] h-screen bg-[url('/grad.png')] bg-cover bg-center bg-no-repeat opacity-10"
      )}
    />
  );
};
