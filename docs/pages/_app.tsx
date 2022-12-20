import "../styles/globals.css";
import "../styles/playground.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import NextNProgress from "nextjs-progressbar";

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
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}
