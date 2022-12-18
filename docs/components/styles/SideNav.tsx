import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { items } from "../../utils/items";
import clsx from "clsx";

export const SideNav = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath]);
  return (
    <nav className="sidenav hide-scrollbar sticky top-0 h-screen flex-[0_0_auto] overflow-y-auto px-12 pt-24 pb-8">
      <h4 className="ml-[-1.2rem] pb-[10px] text-xl font-semibold">
        Documentation
      </h4>
      {items.map((item) => (
        <div key={item.title} className="pb-4">
          <span className="ml-[-1.2rem] text-base font-semibold text-content1">
            {item.title}
          </span>
          <ul className="column flex flex-col gap-1.5">
            {item.links.map((link) => {
              const active = routerDefined === link.href;
              return (
                <li
                  key={link.href}
                  className="whitespace-nowrap text-content2 first-of-type:pt-2 hover:text-content1"
                >
                  <NextLink
                    {...link}
                    className={clsx(
                      active && "text-content1",
                      link.disabled && "pointer-events-none text-content3"
                    )}
                  >
                    {link.children}
                    {link.disabled && <span className="badge ml-1">Soon</span>}
                  </NextLink>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};
