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
        class="bg-purple-9 hover:bg-purple-8 
        focus:bg-purple-9 active:bg-purple-10 
        text-white py-2 px-4 rounded-lg shadow-lg 
        hover:shadow-xl focus:shadow-2xl 
        active:shadow-3xl hover:text-purple-2 
        focus:text-purple-3 active:text-purple-4">
    Click me
</button>`}
          </CodeBlock>
          <button
            className="active:shadow-3xl w-fit rounded-lg bg-purple-9 
              py-2  px-4 text-white shadow-lg hover:bg-purple-8 hover:text-purple-2 hover:shadow-xl 
              focus:bg-purple-9 focus:text-purple-3 focus:shadow-2xl active:bg-purple-10 active:text-purple-4"
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
  class="shadow appearance-none border border-red-6 
  rounded w-full py-2 px-3 text-gray-8 mb-3 
  leading-tight focus:outline-none 
  focus:shadow-outline" 
  placeholder="Username"
>
`}
          </CodeBlock>
          <input
            className="focus:shadow-outline mb-3  appearance-none rounded border border-blue-6 py-2 px-3 leading-tight text-gray-8 shadow focus:outline-none"
            placeholder="Username"
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
          <input className="input-primary input" placeholder="Username" />
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
