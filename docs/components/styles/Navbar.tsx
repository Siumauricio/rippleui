import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import { Search } from "./Searcher";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath, routerDefined]);

  const { scrollY } = useScroll();

  return (
    <nav
      className={clsx(
        scrollY > 35 && "border-gray-6 border-b",
        "navbar navbar-sticky navbar-glass  bg-backgroundPrimary/70 py-3 shadow-none sm:bg-backgroundSecondary/70"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl">
        <div className="navbar-start">
          <div className="navbar-brand gap-0">
            <div className="navbar-item flex lg:hidden">
              <Sidebar />
            </div>
            <Link
              aria-label="Ripple UI Logo"
              href={"/"}
              className=" flex-row items-center gap-3 py-2"
            >
              <label className=" hidden cursor-pointer text-3xl  font-semibold text-whiteInverted lg:flex">
                Ripple UI
              </label>
              <div className="flex lg:hidden">
                <LogoIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden gap-1 lg:flex">
          <Link
            className={clsx(
              "navbar-item",
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
                ? "navbar-active"
                : "text-whiteInverted",
              "navbar-item"
            )}
            href={"/docs/components/button"}
          >
            Components
          </Link>
          <Link
            className={clsx(
              routerDefined.includes("/docs/license")
                ? "navbar-active"
                : "text-whiteInverted",
              "navbar-item"
            )}
            href={"/docs/license/MIT"}
          >
            License
          </Link>
        </div>
        <div className="navbar-end gap-6 md:gap-3">
          <Link
            aria-label="Discord"
            href={"https://discord.gg/b9ZqWsmqsj"}
            className="hidden cursor-pointer lg:flex"
            target={"_blank"}
          >
            <DiscordIcon />
          </Link>

          <Link
            aria-label="Twitter"
            href={"https://twitter.com/Siumauricio"}
            target={"_blank"}
            className="hidden cursor-pointer lg:flex"
          >
            <TwitterIcon />
          </Link>
          <Link
            aria-label="Github"
            href={"https://github.com/Siumauricio/rippleui"}
            target="_blank"
            className="hidden cursor-pointer lg:flex"
          >
            <GithubIcon />
          </Link>
          <DarkModeSwitcher />
          <Search />
        </div>
      </div>
    </nav>
  );
};
