import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DarkModeToggle } from "./DarkModeToggle";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath, routerDefined]);
  return (
    <nav className="navbar navbar-sticky navbar-glass z-30 py-3 shadow-none">
      <div className="mx-auto flex w-full max-w-7xl">
        <div className="navbar-start">
          <div className="navbar-brand gap-0">
            <div className="navbar-item block lg:hidden">
              <Sidebar />
            </div>
            <Link
              href={"/"}
              className="navbar-item   flex-row items-center gap-3 py-2"
            >
              <label className=" hidden cursor-pointer text-3xl  font-semibold lg:flex">
                Ripple UI
              </label>
              <div className="flex lg:hidden">
                <LogoIcon />
              </div>
              {/*  */}
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden gap-1 lg:flex">
          <label className="navbar-item">
            <Link
              className={clsx(
                routerDefined.includes("/docs/get-started") && "text-primary"
              )}
              href={"/docs/get-started/installation"}
            >
              Docs
            </Link>
          </label>
          <label className="navbar-item">
            <Link
              className={clsx(
                routerDefined.includes("/docs/components") && "text-primary"
              )}
              href={"/docs/components/button"}
            >
              Components
            </Link>
          </label>
          <label className="navbar-item">
            <Link
              className={clsx(
                routerDefined.includes("/docs/license") && "text-primary"
              )}
              href={"/docs/license/MIT"}
            >
              License
            </Link>
          </label>
        </div>
        <div className="navbar-end  gap-3">
          <Link
            href={"http://discord.com"}
            className="hidden cursor-pointer lg:flex"
          >
            <DiscordIcon />
          </Link>

          <Link
            href={"http://twitter.com"}
            className="hidden cursor-pointer lg:flex"
          >
            <TwitterIcon />
          </Link>
          <Link
            href={"https://github.com/Siumauricio/rippleui"}
            target="_blank"
            className="hidden cursor-pointer lg:flex"
          >
            <GithubIcon />
          </Link>
          <div className="pr-2">
            <DarkModeToggle />
          </div>

          <div className="relative hidden lg:flex">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
              <SearchIcon />
            </div>
          </div>
          <input
            className="input -ml-4 hidden max-w-[16rem] py-2 px-8 lg:flex"
            placeholder="Search..."
          />
        </div>
      </div>
    </nav>
  );
};
