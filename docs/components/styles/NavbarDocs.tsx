import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RippleUIVersion } from "../../utils/items";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import { Search } from "./Searcher";
import { Sidebar } from "./Sidebar";

export const NavbarDocs = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath, routerDefined]);

  return (
    <nav
      className={
        "navbar navbar-sticky navbar-glass border-gray-6 border-b  py-2 shadow-none md:py-3 lg:pl-64 2xl:pl-[calc((100vw-var(--vp-layout-max-width))/1.9+var(--vp-sidebar-width))]"
      }
    >
      <div className=" mx-auto flex w-full ">
        <div className="navbar-start">
          <div className="navbar-brand w-full justify-between gap-0 xl:w-auto xl:justify-start">
            <div className="navbar-item flex gap-2 lg:hidden">
              <Sidebar />
              <Link aria-label="Ripple UI Logo" href={"/"}>
                <label className=" hidden cursor-pointer text-3xl  font-semibold text-whiteInverted lg:flex">
                  Ripple UI
                </label>
                <div className="flex lg:hidden">
                  <LogoIcon />
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex self-center lg:hidden">
                <DarkModeSwitcher />
              </div>

              <Search />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden justify-end gap-4 lg:flex">
          <div className="border-gray-6 flex border-r pr-1">
            <Link
              className={clsx(
                "navbar-item text-sm",
                routerDefined.includes("/docs/get-started")
                  ? "navbar-active"
                  : "text-whiteInverted"
              )}
              href={"/docs/get-started/installation"}
            >
              Docs
            </Link>
            <Link
              className={clsx(
                routerDefined.includes("/docs/components")
                  ? "navbar-active "
                  : "text-whiteInverted",
                "navbar-item text-sm"
              )}
              href={"/docs/components/button"}
            >
              Components
            </Link>
            <Link
              className={clsx(
                routerDefined.includes("/docs/more/changelog")
                  ? "navbar-active"
                  : "text-whiteInverted",
                "navbar-item text-sm"
              )}
              href={"/docs/more/changelog"}
            >
              v.{RippleUIVersion}
            </Link>
          </div>
          <div className="border-gray-6 flex border-r py-2 pr-3.5">
            <DarkModeSwitcher />
          </div>
          <div className="flex h-full items-center justify-center gap-4">
            <Link
              aria-label="RippleUI Discord"
              href={"https://discord.gg/b9ZqWsmqsj"}
              className="hidden cursor-pointer lg:flex"
              target={"_blank"}
            >
              <DiscordIcon />
            </Link>

            <Link
              aria-label="Creator of RippleUI"
              href={"https://twitter.com/Siumauricio"}
              target={"_blank"}
              className="hidden cursor-pointer lg:flex"
            >
              <TwitterIcon />
            </Link>
            <Link
              aria-label="RippleUI Github"
              href={"https://github.com/Siumauricio/rippleui"}
              target="_blank"
              className="hidden cursor-pointer lg:flex"
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
