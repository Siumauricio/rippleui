import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DarkModeToggle } from "./DarkModeToggle";
import { Searcher } from "./Searcher";
import { Sidebar } from "./Sidebar";

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => {
  const router = useRouter();
  const [routerDefined, setRouterDefined] = useState("");
  useEffect(() => {
    setRouterDefined(router.asPath.split("#")[0]);
  }, [router.asPath, routerDefined]);

  const { scrollY } = useScroll();

  return (
    <nav
      className={clsx(
        scrollY > 35 && "border-b border-gray-500",
        className ? className : "bg-backgroundSecondary/70",
        "navbar navbar-sticky navbar-glass  py-3 shadow-none"
      )}
    >
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
              <label className=" hidden cursor-pointer text-3xl  font-semibold text-whiteInverted lg:flex">
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
        <div className="navbar-end  gap-3">
          <Link
            href={"https://discord.gg/b9ZqWsmqsj"}
            className="hidden cursor-pointer lg:flex"
            target={"_blank"}
          >
            <DiscordIcon />
          </Link>

          <Link
            href={"https://twitter.com/Siumauricio"}
            target={"_blank"}
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
          <div>
            <DarkModeToggle />
          </div>
          <Searcher />
          {/* <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.329 22.1712L18.9313 17.7837C20.4834 15.9358 21.2622 13.5601 21.1053 11.1521C20.9483 8.74399 19.8678 6.48946 18.089 4.85869C16.3102 3.22793 13.9705 2.34683 11.5579 2.39918C9.1453 2.45152 6.84603 3.43326 5.13965 5.13965C3.43326 6.84603 2.45152 9.1453 2.39918 11.5579C2.34683 13.9705 3.22793 16.3102 4.85869 18.089C6.48946 19.8678 8.74399 20.9483 11.1521 21.1053C13.5601 21.2622 15.9358 20.4834 17.7837 18.9313L22.1712 23.329C22.3265 23.4792 22.5341 23.5631 22.7501 23.5631C22.9661 23.5631 23.1737 23.4792 23.329 23.329C23.4816 23.175 23.5672 22.9669 23.5672 22.7501C23.5672 22.5333 23.4816 22.3252 23.329 22.1712ZM4.0626 11.7813C4.0626 10.2547 4.51529 8.76238 5.36344 7.49304C6.21159 6.2237 7.41709 5.23436 8.82751 4.65015C10.2379 4.06594 11.7899 3.91308 13.2872 4.21091C14.7845 4.50874 16.1598 5.24388 17.2393 6.32337C18.3188 7.40285 19.054 8.7782 19.3518 10.2755C19.6496 11.7728 19.4968 13.3248 18.9125 14.7352C18.3283 16.1456 17.339 17.3511 16.0697 18.1993C14.8003 19.0474 13.308 19.5001 11.7813 19.5001C9.73503 19.4974 7.7733 18.6833 6.32633 17.2364C4.87937 15.7894 4.06528 13.8277 4.0626 11.7813Z"
              className="fill-content3"
            />
          </svg> */}
        </div>
      </div>
    </nav>
  );
};
