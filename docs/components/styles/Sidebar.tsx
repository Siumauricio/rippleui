import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { items } from "../../utils/items";
import { MenuIcon } from "../icons/MenuIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { XIcon } from "../icons/XIcon";
import { Searcher } from "./Searcher";

export const Sidebar = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath]);
  return (
    <div>
      <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />
      <label htmlFor="drawer-toggle">
        <MenuIcon />
      </label>
      <label className="overlay  h-screen" htmlFor="drawer-toggle"></label>

      <div className="drawer-left drawer h-screen">
        <div className="h-screen ">
          <label
            className="btn btn-circle btn-ghost absolute right-1  top-1"
            htmlFor="drawer-toggle"
          >
            <XIcon />
          </label>
          <div className="flex flex-col gap-2 border-b px-6 py-4">
            <p className="text-2xl font-bold">Components</p>
            <Searcher isMobile />
          </div>

          <div className="flex flex-col gap-2 divide-y  px-6 pb-6">
            {items.map((item) => (
              <div key={item.title} className=" pt-4">
                <span className="font-semibold">{item.title}</span>
                {item.links.map((link, index) => {
                  const active = routerDefined === link.href;
                  return (
                    <ul
                      key={index}
                      className="space-x-5 space-y-1 text-content2 "
                    >
                      <li></li>
                      <li>
                        <label
                          className={clsx(
                            active && "text-content1",
                            link.disabled && "pointer-events-none text-content3"
                          )}
                          htmlFor="drawer-toggle"
                          onClick={() => {
                            router.push(link.href);
                          }}
                        >
                          {link.children}
                        </label>
                        {/* </Link> */}
                        {link.disabled && (
                          <span className="badge ml-1">Soon</span>
                        )}
                      </li>
                    </ul>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
