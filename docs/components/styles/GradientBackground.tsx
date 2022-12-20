import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

interface Props {
  isDocsLayout?: boolean;
}

export const GradientBackground = ({ isDocsLayout = false }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // 757
  return (
    <div
      id="dark-image-gradient"
      className={clsx(
        isDocsLayout &&
          theme !== "dark" &&
          "bg-[url('/mesh2.png')] opacity-50 grayscale-[1]",
        !isDocsLayout &&
          theme !== "dark" &&
          "bg-[url('/mesh2.png')] grayscale-[1]",
        theme === "dark" &&
          "bg-[url('/mesh.png')] brightness-95  contrast-200 grayscale-[0.2] filter",
        "fixed inset-0 z-[1] h-screen  bg-cover bg-center bg-no-repeat "
      )}
    />
  );
};
