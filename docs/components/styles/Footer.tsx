import Link from "next/link";
import React from "react";
import { LogoIcon } from "../icons/LogoIcon";

export const Footer = () => {
  return (
    <footer className="bg-gray-3">
      <div className="mx-auto grid max-w-7xl grid-cols-1  gap-8 px-6  py-24 sm:grid-cols-4 lg:grid-cols-5">
        <div className="flex flex-col gap-3 md:mb-0">
          <div className="flex items-center">
            <LogoIcon className="mr-3 h-8" />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              RippleUI
            </span>
          </div>
          <p className="text-sm text-content3">
            Collection of components and utilities that are used to build modern
            interfaces. It is built on top of Tailwind CSS.
          </p>
        </div>
        <div className="">
          <h2 className="mb-6 text-sm font-semibold uppercase  ">Resources</h2>
          <ul className="flex flex-col gap-4 text-content2">
            <li>
              <Link
                href="/docs/get-started/installation"
                className=" hover:underline"
              >
                Get Started
              </Link>
            </li>
            <li>
              <Link
                href="/docs/get-started/customization"
                className="hover:underline"
              >
                Customization
              </Link>
            </li>
            <li>
              <Link href="/docs/get-started/theme" className="hover:underline">
                Theme
              </Link>
            </li>
            <li>
              <Link href="/docs/components/button" className="hover:underline">
                Components
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Help center</h2>
          <ul className="flex flex-col gap-4 text-content2">
            <li>
              <Link
                href={"https://github.com/Siumauricio/rippleui"}
                target="_blank"
                className="hover:underline"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                aria-label="RippleUI Discord"
                href={"https://discord.gg/b9ZqWsmqsj"}
                target="_blank"
                className="hover:underline"
              >
                Discord server
              </Link>
            </li>
            <li>
              <Link
                aria-label="Creator of RippleUI"
                href={"https://twitter.com/Siumauricio"}
                target="_blank"
                className="hover:underline"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase ">Links</h2>
          <ul className="flex flex-col gap-4 text-content2">
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/issues/new/choose"
                target="_blank"
                className="hover:underline"
              >
                Report issue
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/blob/main/LICENSE"
                target={"_blank"}
                className="hover:underline"
              >
                License
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/blob/main/CHANGELOG.md"
                target={"_blank"}
                className="hover:underline"
              >
                Changelog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase ">Usage</h2>
          <ul className="flex flex-col gap-4 text-content2 ">
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/tree/main/examples/my-react-app"
                className="hover:underline"
                target="_blank"
              >
                React
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/tree/main/examples/nextjs-example"
                className="hover:underline"
                target="_blank"
              >
                NextJS
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/tree/main/examples/my-remix-app"
                className="hover:underline"
                target="_blank"
              >
                Remix
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Siumauricio/rippleui/tree/main/examples/my-svelte-app"
                className="hover:underline"
              >
                Svelte
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://codi.link/PGxpbmsNCiAgcmVsPSJzdHlsZXNoZWV0Ig0KICBocmVmPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3JpcHBsZXVpL2Rpc3QvY3NzL3N0eWxlcy5jc3MiDQovPg0KDQo8IS0tIEFuZCAtLT4NCjxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi50YWlsd2luZGNzcy5jb20iPjwvc2NyaXB0Pg0KDQo8YnV0dG9uIGNsYXNzPSJidG4gYnRuLXByaW1hcnkiPkhlbGxvIFdvcmxkITwvYnV0dG9uPg==%7C%7C"
                }
                className="hover:underline"
                target="_blank"
              >
                HTML
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
