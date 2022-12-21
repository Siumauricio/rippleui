import React, { useMemo } from "react";
import { NextSeo } from "next-seo";
import { URL_WEB } from "../../../lib/constant";
import { useRouter } from "next/router";

export interface Meta {
  title: string;
  description: string;
}

export interface LayoutProps {
  meta: Meta;
  getStaticProps?: any;
}

const toCapitalize = (name: string) => {
  // @ts-ignore
  const [first, ...rest] = name;
  return `${first.toUpperCase()}${rest.join("")}`;
};

const Meta: React.FC<React.PropsWithChildren<LayoutProps>> = React.memo(
  ({ meta }) => {
    const router = useRouter();
    const capitalizeTitle = useMemo(() => {
      if (!meta.title) return "";
      if (meta.title.toLowerCase().startsWith("use")) return `${meta.title} - `;
      return `${toCapitalize(meta.title)} RippleUI | TailwindCSS Component`;
    }, [meta.title]);
    return (
      <NextSeo
        title={capitalizeTitle}
        description={meta.description}
        themeColor="#000000"
        canonical={URL_WEB + router.asPath}
        openGraph={{
          images: [
            {
              url: "logo.png",
              alt: "RippleUI Logo",
            },
          ],
        }}
      />
    );
  }
);

Meta.displayName = "Layout";
export default Meta;
