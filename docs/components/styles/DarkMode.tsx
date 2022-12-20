import Link from "next/link";
import React from "react";
import { ArrowLeft } from "../icons/ChevronLeft";
import { ArrowRight } from "../icons/ArrowRight";
import { DarkModeToggle } from "./DarkModeToggle";

export const DarkMode = () => {
  return (
    <div className="flex flex-col gap-10  py-16 px-4 md:gap-12 xl:px-0">
      <div className="flex flex-col items-center gap-4">
        <div className="flex w-full max-w-[78rem] flex-col  gap-6">
          <div className="w-full max-w-full text-center lg:ml-8 lg:max-w-lg  lg:text-left">
            <h2 className="w-full text-3xl font-semibold md:text-4xl">
              Dark mode support out of the{" "}
              <span className="text-3xl font-bold text-secondary  md:text-4xl">
                box.
              </span>
            </h2>
            <span className="text-content2">
              Ripple UI comes with dark mode support automatically. When you
              toggle the dark mode switch, the entire UI will change to colors
              specified by config of RippleUI.
            </span>
          </div>
          <div className="flex flex-col items-center justify-around gap-4 lg:flex-row ">
            <div className="w-full max-w-lg">
              <div className="card sticky max-h-96 w-full max-w-2xl overflow-y-auto rounded-lg  p-4">
                <div className="navbar-sticky navbar sticky  rounded-lg">
                  <div className="navbar-start">
                    <a className="navbar-item">Ripple UI</a>
                  </div>
                  <div className="navbar-end ">
                    <a className="navbar-item">Home</a>
                  </div>
                </div>
                <div className="alert">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28 0C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12C0 5.37258 5.37258 0 12 0H28ZM26 6H14C9.71561 6 6.21784 9.36794 6.00979 13.6007L6 14V26C6 30.2844 9.36794 33.7822 13.6007 33.9902L14 34H26C30.2844 34 33.7822 30.6321 33.9902 26.3993L34 26V14C34 9.71561 30.6321 6.21784 26.3993 6.00979L26 6Z"
                        fill="#969696"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span>Title</span>
                    <span className="text-content2">Long sample text</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <input
                    type="checkbox"
                    className="switch-bordered-primary switch"
                  />
                  <input
                    type="checkbox"
                    className="switch-bordered-secondary switch"
                  />
                  <input
                    type="checkbox"
                    className="switch-bordered-success switch"
                  />
                  <input
                    type="checkbox"
                    className="switch-bordered-error switch"
                  />
                  <input
                    type="checkbox"
                    className="switch-bordered-warning switch"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center">
              <span
                className="tooltip tooltip-top tooltip-secondary"
                data-tooltip="Toggle Dark Mode"
              >
                <DarkModeToggle />
              </span>
            </div>
            <div className="w-full max-w-lg">
              <div className="card sticky max-h-96 w-full max-w-2xl overflow-y-auto rounded-lg  p-4">
                <div className="navbar-sticky navbar-glass navbar sticky  rounded-lg">
                  <div className="navbar-start">
                    <a className="navbar-item">Ripple UI</a>
                  </div>
                  <div className="navbar-end ">
                    <a className="navbar-item">Home</a>
                  </div>
                </div>
                <div className="alert  alert-info">
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
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="avatar-ring-primary avatar truncate">
                    <div>JS</div>
                  </div>
                  <div className="avatar-ring-secondary avatar truncate">
                    <div>MC</div>
                  </div>
                  <div className="avatar-ring-success avatar truncate">
                    <div>PO</div>
                  </div>
                  <div className="avatar-ring-error avatar truncate">
                    <div>CS</div>
                  </div>
                  <div className="avatar-ring-warning avatar truncate">
                    <div>JL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <Link
          href={"/docs/get-started/installation"}
          className="btn btn-secondary btn-ghost w-fit text-content2"
        >
          Go to Documentation
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
