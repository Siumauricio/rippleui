import Link from "next/link";
import React from "react";
import { RippleUIVersion } from "../../utils/items";
import { CodeBlock } from "../playground/CodeBlock";

export const GetStarted = () => {
  return (
    <section className="bg-backgroundSecondary  w-full overflow-hidden py-28 px-4 md:gap-20 xl:px-0">
      <div className="flex flex-col items-center gap-4 pb-5">
        <div className="w-full ">
          <h2 className="mx-auto w-full text-center text-3xl font-bold md:text-4xl">
            Get Started Any Way You Want
          </h2>
        </div>
        <p className=" text-content3 mx-auto w-full max-w-xl text-center text-base">
          Get started with RippleUI quickly by using the CDN, installing it
          through a package manager, or downloading the source code.
        </p>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-row flex-wrap justify-center gap-8 pt-12 lg:flex-nowrap lg:justify-between">
        <div className="flex max-w-md flex-col gap-1">
          <h3 className="text-xl">Install via Package Manager</h3>
          <div className="text-content3">
            Install RippleUI choosing your favorite package manager like npm,
            yarn, or pnpm.
          </div>
          <div>
            <CodeBlock
              disableTabs
              iconClass="sm:max-w-md top-10"
              blockClass="sm:max-w-md"
              language="bash"
            >{`npm install rippleui`}</CodeBlock>
          </div>
          <p className="text-content2 mx-auto w-full  max-w-lg pt-10">
            Read our{" "}
            <Link
              href={"/docs/get-started/installation"}
              className="text-primary cursor-pointer"
            >
              installation
            </Link>{" "}
            guide for more information on how to get started
          </p>
        </div>
        {/* <div className="border border-gray-500"></div> */}
        <div className="flex w-full max-w-md flex-col gap-1">
          <h3 className="text-xl">Include via CDN</h3>
          <div className="text-content3">
            The fastest way to get started with RippleUI is to use the CDN
            hosted on jsDelivr. You can also use the UNPKG CDN.
          </div>
          <div className="flex w-full flex-col ">
            <CodeBlock
              disableTabs
              disabledFormat
              iconClass="sm:max-w-md top-10"
              blockClass="sm:max-w-md"
              language="html"
            >{`<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/rippleui@${RippleUIVersion}/dist/css/styles.css"
/>`}</CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};
