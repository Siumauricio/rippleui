import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { items } from "../../utils/items";
import { BookIcon } from "../icons/BookIcon";

import { ChangelogIcon } from "../icons/ChangelogIcon";
import { ComponentsIcon } from "../icons/ComponentsIcon";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { XIcon } from "../icons/XIcon";

export const Sidebar = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath]);
  return (
    <>
      <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />
      <label htmlFor="drawer-toggle" className="cursor-pointer">
        <MenuIcon />
      </label>
      <label className="overlay  h-screen" htmlFor="drawer-toggle"></label>

      <div className="drawer-left drawer">
        <div className="pb-10">
          <label
            className="btn-circle btn-ghost btn absolute right-1  top-1"
            htmlFor="drawer-toggle"
          >
            <XIcon />
          </label>
          <div className="flex flex-col gap-2 border-b border-border px-6 py-4">
            <p className="text-2xl font-bold">Components</p>
          </div>

          <div className="flex flex-col gap-2 divide-y divide-border  px-6 pb-6">
            {items.map((item) => (
              <div key={item.title} className=" pt-4">
                <span className="flex font-semibold text-content1">
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
                {item.links.map((link, index) => {
                  const active = routerDefined === link.href;
                  return (
                    <ul
                      key={index}
                      className="space-x-9 space-y-1 text-content2 "
                    >
                      <li></li>
                      <li>
                        <label
                          className={clsx(
                            active && "text-primary",
                            link.disabled &&
                              "pointer-events-none text-content3",
                            "cursor-pointer hover:text-content1"
                          )}
                          htmlFor="drawer-toggle"
                          onClick={() => {
                            router.push(link.href);
                          }}
                        >
                          {link.children}
                        </label>
                        {link.disabled && (
                          <span className="badge ml-1">Soon</span>
                        )}
                        {link.isNew && (
                          <span className="badge badge-flat-primary ml-1">
                            New
                          </span>
                        )}
                      </li>
                    </ul>
                  );
                })}
              </div>
            ))}
            <div className="flex gap-3  pt-4">
              <Link
                aria-label="RippleUI Discord"
                href={"https://discord.gg/b9ZqWsmqsj"}
                className="cursor-pointer"
                target={"_blank"}
              >
                <DiscordIcon />
              </Link>
              <Link
                aria-label="Creator Of RippleUI"
                href={"https://twitter.com/Siumauricio"}
                target={"_blank"}
                className="cursor-pointer"
              >
                <TwitterIcon />
              </Link>

              <Link
                aria-label="RippleUI Github"
                href={"https://github.com/Siumauricio/rippleui"}
                target="_blank"
                className="cursor-pointer "
              >
                <GithubIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
