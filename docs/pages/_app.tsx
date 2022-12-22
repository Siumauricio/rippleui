import "../styles/globals.css";
import "../styles/playground.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import NextNProgress from "nextjs-progressbar";
import Link from "next/link";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <NextNProgress color="#0069FF" />
      <Link
        href="https://www.producthunt.com/posts/rippleui-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-rippleui&#0045;2"
        className="mt-50 fixed right-6 bottom-2 z-[99999]"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=372142&theme=light"
          alt="RippleUI - Cleanest&#0044;&#0032;modern&#0032;and&#0032;beatifull&#0032;Tailwind&#0032;CSS&#0032;components&#0046; | Product Hunt"
          className="h-16 w-64"
          width="250"
          height="54"
        />
      </Link>
      <ThemeProvider defaultTheme="dark">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
//
