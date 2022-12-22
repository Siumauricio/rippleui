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
        twitter={{
          handle: "@",
          site: "@",
          cardType: "summary_large_image",
        }}
        openGraph={{
          images: [
            {
              url: URL_WEB + "/logo.png",
              alt: "RippleUI Logo",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: URL_WEB + "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: URL_WEB + "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            rel: "icon",
            href: URL_WEB + "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            rel: "icon",
            href: URL_WEB + "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            rel: "manifest",
            href: URL_WEB + "/site.webmanifest",
          },
        ]}
      />
    );
  }
);

Meta.displayName = "Layout";
export default Meta;
