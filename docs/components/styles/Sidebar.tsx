import Link from "next/link";
import React from "react";
import { items } from "../../utils/items";
import { MenuIcon } from "../icons/MenuIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { XIcon } from "../icons/XIcon";

export const Sidebar = () => {
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
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0  right-2 flex items-center">
                <SearchIcon />
              </div>
              <div>
                <input
                  className="input  py-1.5  lg:flex"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 divide-y  px-6 pb-6">
            {items.map((item) => (
              <div key={item.title} className=" pt-4">
                <span className="font-semibold">{item.title}</span>
                {item.links.map((link, index) => (
                  <ul
                    key={index}
                    className="space-x-5 space-y-1 text-content2 "
                  >
                    <li></li>
                    <li>
                      <Link href={link.href}>{link.children}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
