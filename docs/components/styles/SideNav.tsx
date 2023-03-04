import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { items } from "../../utils/items";
import { BookIcon } from "../icons/BookIcon";
import { ChangelogIcon } from "../icons/ChangelogIcon";
import { ComponentsIcon } from "../icons/ComponentsIcon";
import { LogoIcon } from "../icons/LogoIcon";

export const SideNav = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath]);
  return (
    <aside className="sidebar fixed top-0 bottom-0 left-0 z-[60] hidden max-w-full overflow-auto bg-backgroundSecondary p-[0px_32px_96px] pr-8 pb-32  lg:flex 2xl:w-[calc((100%-(var(--vp-layout-max-width)-64px))/2+var(--vp-sidebar-width)-32px)] 2xl:pl-[max(32px,calc((100%-(1465px-64px))/2))]">
      <nav
        className="nav w-44"
        id="SidebarNav"
        aria-labelledby="sidebar-aria-label"
      >
        <Link
          href={"/"}
          className="flex gap-2 border-b border-border pt-4 pb-6 pl-1"
        >
          <LogoIcon />
          <span className="font-semibold">RippleUI</span>
        </Link>

        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-border py-4 last-of-type:py-3"
          >
            <span className=" flex text-sm font-bold text-content1">
              {item.title === "Get started" ? (
                <div className="bg-purple-6 mr-2 rounded-md">
                  <BookIcon />
                </div>
              ) : item.title === "Components" ? (
                <div className=" bg-blue-6 mr-2 flex items-center rounded-md">
                  <ComponentsIcon />
                </div>
              ) : (
                <div className=" bg-green-6 mr-2 flex items-center rounded-md">
                  <ChangelogIcon />
                </div>
              )}
              {item.title}
            </span>
            <ul className="column flex flex-col gap-1.5">
              {item.links.map((link) => {
                const active = routerDefined === link.href;
                return (
                  <li
                    key={link.href}
                    className="ml-9 whitespace-nowrap text-sm font-medium text-content2 first-of-type:pt-2 hover:text-content1"
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        active && "text-primary",
                        link.disabled && "pointer-events-none text-content3"
                      )}
                    >
                      {link.children}
                      {link.disabled && (
                        <span className="badge ml-1">Soon</span>
                      )}
                      {link.isNew && (
                        <span className="badge badge-flat-primary ml-1">
                          New
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};
