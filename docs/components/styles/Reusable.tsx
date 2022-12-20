import React from "react";
import { BookIcon } from "../icons/Book";
import { RecyleIcon } from "../icons/Recyle";
import { ToolsIcon } from "../icons/Tools";
import { Comparison } from "./Comparison";

export const Reusable = () => {
  return (
    <div className="flex flex-col gap-10  py-16 px-4 md:gap-12 xl:px-0">
      <div className="flex flex-col items-center gap-3">
        <div className="w-full max-w-[78rem]">
          <span className="text-sm font-semibold text-primary">
            Why Build with RippleUI?
          </span>
        </div>

        <div className="w-full max-w-[78rem]">
          <div className="max-w-xl">
            <h2 className="w-full text-3xl font-bold md:text-4xl">
              <span className="text-3xl text-primary  md:text-4xl">
                Reusable
              </span>{" "}
              components and easy to implement.
            </h2>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl  grid-cols-1 justify-items-center gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="card overflow-hidden">
          <div className="flex gap-4">
            <div className="w-fit pt-1">
              <RecyleIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">
                Reusable Components
              </span>
              <p className="text-content2">
                RippleUI is a custom TailwindCSS framework that comes with of
                reusable components built on top of Tailwind CSS that includes
                pre-defined styles and layout options.
              </p>
            </div>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="flex gap-4">
            <div className="w-fit pt-1">
              <BookIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold ">
                Easy Documentation
              </span>
              <p className="text-content2">
                RippleUI comes with easy documentation that will guide you
                through its features and help you to easily implement it in your
                project.
              </p>
            </div>
          </div>
        </div>
        <div className="card overflow-hidden">
          <div className="flex gap-4 ">
            <div className="w-fit pt-1">
              <ToolsIcon />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold">Easy Configuration</span>
              <p className="text-content2">
                Easy configuration is a key feature of RippleUI, allowing you to
                quickly set up and customize the tool to meet your specific
                needs and preferences..
              </p>
            </div>
          </div>
        </div>
      </div>
      <Comparison />
    </div>
  );
};
