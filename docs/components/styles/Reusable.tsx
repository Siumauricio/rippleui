import React from "react";
import { BookIcon } from "../icons/Book";
import { RecyleIcon } from "../icons/Recyle";
import { ToolsIcon } from "../icons/Tools";

export const Reusable = () => {
  return (
    <section className="flex flex-col gap-10  bg-backgroundPrimary px-4 md:gap-12 lg:py-28 xl:px-0">
      <div className="flex flex-col items-center gap-3">
        <span className="text-center text-2xl font-semibold text-primary">
          Why Build with RippleUI?
        </span>

        <div className="max-w-lg">
          <h2 className="w-full text-center text-3xl font-bold md:text-4xl">
            <span className="text-center text-3xl md:text-4xl">Reusable</span>{" "}
            components and easy to implement.
          </h2>
        </div>
      </div>

      <div className="mx-auto  flex w-full   max-w-7xl flex-wrap  justify-center justify-items-start gap-4">
        <div className="card gap-6 overflow-hidden  p-8 shadow-md">
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-success p-2 ">
            <RecyleIcon />
          </div>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-3">
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
        <div className="card gap-6 overflow-hidden  p-8 shadow-md">
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-warning p-2 ">
            <BookIcon />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
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
        <div className="card gap-6 overflow-hidden p-8 shadow-md">
          <div className="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-error p-2 ">
            <ToolsIcon />
          </div>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-3">
              <span className="text-2xl font-semibold">Easy Configuration</span>
              <p className="text-content2">
                Easy configuration is a key feature of RippleUI, allowing you to
                quickly set up and customize the tool to meet your specific
                needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
