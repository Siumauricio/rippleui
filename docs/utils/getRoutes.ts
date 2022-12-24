import fs from "fs";
import path from "path";

type Folder = "get-started" | "components" | "license" | "credits";

export type Folders = {
  [key in Folder]: string;
};

export const getRoutes = () => {
  const folders: Folders = {
    components: path.join(process.cwd(), "content/components"),
    "get-started": path.join(process.cwd(), "content/get-started"),
    license: path.join(process.cwd(), "content/license"),
    credits: path.join(process.cwd(), "content/credits"),
  };

  const routes = Object.keys(folders).map((folder: string) => {
    const files = fs.readdirSync(folders[folder as Folder]);
    return files.map((file) => {
      const name = file.replace(".mdx", "");
      return `/docs/${folder}/${name}`;
    });
  });
  return routes.flat();
};
