import React from "react";
import { CodeBlock } from "../playground/CodeBlock";

export const Comparison = () => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Compare with other frameworks
      </h2>
      <p className="mx-auto max-w-lg text-center text-content2">
        RippleUI is a custom framework that comes with of reusable components
        built on top of Tailwind CSS that includes pre-defined styles and layout
        options, instead of having infinite classes to choose from, RippleUI
        comes with a set of pre-defined classes that you can use to build your
        UI.
      </p>
      <div className="flex  flex-col  justify-center gap-10 px-4 xl:flex-row xl:gap-20">
        <div className="flex flex-col items-center">
          <CodeBlock
            hideIcon
            iconClass="sm:max-w-xl top-10"
            blockClass="sm:max-w-xl h-60 overflow-hidden w-full sm:w-auto"
            language="bash"
          >
            {`<button 
        class="bg-purple-500 hover:bg-purple-700 
        focus:bg-purple-800 active:bg-purple-900 
        text-white py-2 px-4 rounded-full shadow-lg 
        hover:shadow-xl focus:shadow-2xl 
        active:shadow-3xl hover:text-purple-100 
        focus:text-purple-200 active:text-purple-300">
    Click me
</button>`}
          </CodeBlock>
          <button
            className="active:shadow-3xl w-fit rounded-full bg-purple-500 
              py-2  px-4 text-white shadow-lg hover:bg-purple-700 hover:text-purple-100 hover:shadow-xl 
              focus:bg-purple-800 focus:text-purple-200 focus:shadow-2xl active:bg-purple-900 active:text-purple-300"
          >
            Click
          </button>
        </div>
        <div className="mx-auto w-full max-w-[40rem] border border-border xl:mx-0 xl:w-0"></div>

        <div className="flex flex-col items-center">
          <CodeBlock
            hideIcon
            iconClass="sm:max-w-xl top-10"
            blockClass="sm:max-w-xl  h-60"
            language="bash"
          >
            {`<button class="btn btn-secondary">
    Click me 
</button>`}
          </CodeBlock>
          <button className="btn btn-secondary">Click</button>
        </div>
      </div>
    </div>
  );
};
