import Link from "next/link";
import React from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { CodeBlock } from "../playground/CodeBlock";

export const Hero = () => {
  return (
    <section className="pb-10 sm:pb-20">
      <div className="flex flex-row justify-center px-4 md:gap-24">
        <div className="flex max-w-3xl flex-col gap-4 pt-10 sm:gap-0 sm:pt-20  lg:pt-52">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[40px] font-bold leading-none text-primary  sm:text-5xl lg:text-6xl">
                Ripple UI
              </span>{" "}
              <span className="text-[40px] font-bold leading-none sm:text-5xl lg:text-6xl">
                Ultimate toolkit for modern interface design.
              </span>
            </div>

            <p className="pr-10 text-base  text-content2">
              Ripple UI is a collection of components and utilities that are
              used to build modern interfaces. It is built on top of Tailwind
              CSS .
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-4">
            <Link
              href={"/docs/get-started/installation"}
              className="btn btn-primary btn-md btn-block btn-rounded whitespace-nowrap sm:w-48"
            >
              Get Started
            </Link>
            <div className="w-full">
              <CodeBlock
                iconClass="sm:max-w-md top-10"
                blockClass="sm:max-w-md"
                language="bash"
              >{`npm install rippleui`}</CodeBlock>
            </div>
          </div>
        </div>
        <div className="hidden w-full max-w-sm flex-col gap-3 lg:flex">
          <div className="btn-group ">
            <button className="btn ">Primary</button>
            <button className="btn ">Primary</button>
            <button className="btn bg-border">Primary</button>
            <button className="btn ">Primary</button>
          </div>
          <div>
            <div className="relative hidden lg:flex">
              <div className="pointer-events-none absolute top-3  left-0 flex items-center pl-2 ">
                <SearchIcon />
              </div>
            </div>
            <input
              className="input input-block hidden py-2 px-8 lg:flex"
              placeholder="Search..."
            />
          </div>
          <div className="alert alert-info">
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z"
                  fill="#0085FF"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span>Title</span>
              <span className="text-content2">Long sample text</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="dropdown-container">
              <div className="dropdown">
                <label className="btn flex" tabIndex={0}>
                  <span>Dropdown</span>
                </label>
                <div className="dropdown-menu dropdown-menu-bottom-right dropdown-open">
                  <div className="dropdown-item">
                    <p className="text-sm leading-5 text-content1">
                      Signed in as
                    </p>
                    <p className="truncate text-sm leading-5 text-content2">
                      <strong>tom@example</strong>
                    </p>
                  </div>
                  <div className="">
                    <a
                      tabIndex={-1}
                      className="dropdown-item flex w-full justify-between text-left text-sm leading-5 text-content2"
                      role="menuitem"
                    >
                      <span>Account settings</span>
                    </a>
                    <a
                      tabIndex={-1}
                      className="dropdown-item flex w-full justify-between text-left text-sm leading-5 text-content2"
                      role="menuitem"
                    >
                      <span>Subscriptions</span>
                    </a>
                  </div>
                  <a
                    className="dropdown-item flex w-full justify-between text-left text-sm leading-5 text-content2"
                    role="menuitem"
                  >
                    <span>License</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="btn btn-primary">Button</button>

              <label className="flex items-center">
                <input className="checkbox" type={"checkbox"} defaultChecked />

                <span className="ml-2">Checkbox</span>
              </label>
              <label className="flex items-center">
                <input className="switch" type={"checkbox"} defaultChecked />

                <span className="ml-2">Switch</span>
              </label>
              <label className="flex items-center">
                <input className="radio" type={"radio"} defaultChecked />

                <span className="ml-2">Radio</span>
              </label>
            </div>
          </div>
          <div className="flex justify-between gap-4 pt-24">
            <span
              className="tooltip tooltip-bottom tooltip-secondary tooltip-open h-fit"
              data-tooltip="hello"
            >
              <button className="btn btn-outline-secondary"> Tooltip</button>
            </span>
            <div className="flex flex-wrap gap-3">
              <span className="badge badge-primary h-fit">Primary</span>
              <span className="badge badge-secondary h-fit">Secondary</span>
              <span className="badge badge-success h-fit">Success</span>
              <span className="badge badge-error h-fit">Error</span>
              <span className="badge badge-warning h-fit">Warning</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="card card-image-cover relative mt-8 flex h-fit w-44 gap-3">
              <img src="./card.webp" alt="Monster image" />
              <div className="absolute bottom-0 mt-5 flex h-14 w-44 flex-col justify-between overflow-hidden  rounded-lg bg-transparent backdrop-blur-md">
                <div className=" flex h-full items-center justify-center gap-3  rounded-lg">
                  <span className="btn btn-secondary btn-xs whitespace-nowrap">
                    Buy a Cat!
                  </span>
                  <span className="badge">Cat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
