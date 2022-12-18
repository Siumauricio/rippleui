import * as React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface Props {
  title?: React.ReactNode;
  href?: string;
  blank?: boolean;
  children?: React.ReactNode;
}

export const Link = ({ href = "/", blank, children }: Props) => {
  const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href);

  if (isRelativeUrl) {
    return (
      <NextLink href={href} passHref>
        <a className="text-primary">{children}</a>
      </NextLink>
    );
  }

  return (
    <a
      className="text-primary"
      target={"_blank"}
      href={href}
      rel="noreferrer nofollow"
    >
      {children}
    </a>
  );
};
