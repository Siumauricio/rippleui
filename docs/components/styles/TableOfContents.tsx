import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Headings } from "../../utils/getToc";
import clsx from "clsx";
import { useScrollSpy } from "../../hooks/useScrollSpy";

interface Props {
  toc: Headings[];
}

export const TableOfContents = ({ toc }: Props) => {
  const router = useRouter();
  const isChangelog = toc[0]?.title === "Changelog";
  const margin = isChangelog ? "0% 0% -80% 0%" : "0% 0% -70% 0%";
  const [routerDefined, setRouterDefined] = useState("");
  const activeId = useScrollSpy(
    toc.map(({ id }) => `[id="${id}"]`),
    {
      rootMargin: margin,
    }
  );

  useEffect(() => {
    setRouterDefined(router.asPath);
  }, []);

  if (toc.length < 1) {
    return null;
  }

  return (
    <nav className=" h-full max-h-[50rem] flex-[0_0_auto] self-start overflow-auto pt-1">
      <ul
        style={{
          margin: "0",
        }}
      >
        {toc.map((item, i) => {
          const href = `${router.asPath.split("#")[0]}/#${item.id}`;
          const isActive =
            routerDefined !== "" &&
            router.asPath === `${router.asPath.split("#")[0]}#${item.id}`;
          if (item.level === 1) return null;
          return (
            <li
              className={clsx(
                activeId === item.id
                  ? "border-primary text-content1 before:absolute"
                  : "text-content3 hover:text-content2",
                "line-clamp  inline-flex border-l border-border px-6 text-sm leading-7"
              )}
              key={i + 1}
            >
              <NextLink href={href} passHref>
                {item.title}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
