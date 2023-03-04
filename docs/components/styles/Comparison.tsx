import React from "react";
import { CodeBlock } from "../playground/CodeBlock";

export const Comparison = () => {
  return (
    <section className="flex flex-col gap-8 py-28 px-4">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        Compare with base Tailwind CSS
      </h2>
      <p className="mx-auto max-w-2xl text-left text-content2">
        RippleUI is a custom TailwindCSS framework that comes with of reusable
        components built on top of Tailwind CSS that includes pre-defined styles
        and layout options, instead of having infinite classes to choose from,
        RippleUI comes with a set of pre-defined classes that you can use to
        build your UI.
      </p>
      <div className="flex  flex-col justify-center gap-10  max-xl:items-center xl:flex-row xl:gap-20">
        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full  hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`<button 
  class="active:shadow-3xl inline-flex w-fit rounded-lg 
        bg-purple-10  py-2 px-4 text-sm font-semibold 
        text-white shadow-lg transition-transform 
        hover:bg-purple-8 hover:shadow-xl active:scale-95">
    Click me
</button>`}
          </CodeBlock>
          <button
            className="active:shadow-3xl inline-flex w-fit rounded-lg 
              bg-purple-10  py-2 px-4 text-sm font-semibold text-white shadow-lg transition-transform hover:bg-purple-8
              hover:shadow-xl active:scale-95"
          >
            Click me
          </button>
        </div>
        <div className="mx-auto w-full max-w-[40rem] border border-border xl:mx-0 xl:w-0"></div>

        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`<button class="btn btn-secondary">                    
    Click me 
</button>`}
          </CodeBlock>
          <button className="btn-secondary btn">Click me </button>
        </div>
      </div>
      <span className="text-center text-content2">Another comparison.</span>
      <div className="flex  flex-col justify-center gap-10 max-xl:items-center xl:flex-row xl:gap-20">
        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`<input 
  class="focus:shadow-outline mb-3 
  w-full max-w-xs appearance-none 
  rounded-lg border-2 border-blue-9 
  bg-transparent py-2 px-3 leading-tight 
  text-gray-8 shadow focus:outline-none
  placeholder:text-gray-400" 
  placeholder="Type here"
>
`}
          </CodeBlock>
          <input
            className="focus:shadow-outline mb-3 w-full max-w-xs appearance-none rounded-lg border-2 border-blue-9 bg-transparent py-2 px-3 leading-tight text-gray-8 shadow placeholder:text-gray-400 focus:outline-none"
            placeholder="Type here"
          />
        </div>
        <div className="mx-auto w-full max-w-[40rem] border border-border xl:mx-0 xl:w-0"></div>

        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`
            <input class="input input-primary">                    
            ‎

  `}
          </CodeBlock>
          <input className="input-primary input" placeholder="Type here" />
        </div>
      </div>
      <span className="text-center text-content2">Another comparison.</span>
      <div className="flex  flex-col justify-center gap-10 max-xl:items-center xl:flex-row xl:gap-20">
        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`<div 
    class="relative inline-block w-10 mr-2 
    align-middle  select-none transition 
    duration-200 ease-in">
    <input 
     type="checkbox" 
     class="toggle-checkbox absolute block w-6 h-6
     rounded-full bg-white border-4 
     appearance-none cursor-pointer"/>
    <label  
      class="toggle-label block 
      overflow-hidden h-6 rounded-full 
      bg-gray-4 cursor-pointer">
    </label>
</div>
`}
          </CodeBlock>
          <div className="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-4"
            ></label>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[40rem] border border-border xl:mx-0 xl:w-0"></div>

        <div className="flex w-full flex-col items-center sm:max-w-lg">
          <CodeBlock
            hideIcon
            disableTabs
            blockClass="sm:max-w-lg h-60 overflow-hidden w-full  hide-scrollbar"
            language="html"
            disabledFormat
          >
            {`
            <input class="switch" type="checkbox">                 
            ‎

  `}
          </CodeBlock>
          <input className="switch" type={"checkbox"} defaultChecked />
        </div>
      </div>
    </section>
  );
};
