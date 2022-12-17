import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Headings } from "../../utils/getToc";
import clsx from "clsx";

interface Props {
  toc: Headings[];
}

export const TableOfContents = ({ toc }: Props) => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  );
  useEffect(() => {
    setRouterDefined(router.asPath);
  }, []);

  if (items.length < 1) {
    return null;
  }

  return (
    <nav className="sticky top-28 mt-12 mb-11 max-h-[calc(var(100vh-51px))] flex-[0_0_auto] self-start border-l border-border pt-1">
      <ul
        style={{
          margin: "0",
          padding: "0 1.5rem",
          width: "min-content",
        }}
      >
        {items.map((item, i) => {
          const href = `${router.asPath.split("#")[0]}/#${item.id}`;
          const isActive =
            routerDefined !== "" &&
            router.asPath === `${router.asPath.split("#")[0]}#${item.id}`;

          return (
            <li className="mb-4" key={i}>
              <NextLink
                href={href}
                passHref
                className={clsx(
                  item.level === 3 && "pl-4",
                  "inline-flex",
                  !isActive && "text-content3 hover:text-content2"
                )}
              >
                {item.title}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
