import React from "react";
import { Headings } from "../../utils/getToc";
import { TableOfContents } from "../styles/TableOfContents";

interface Props {
  children: React.ReactNode;
  headings?: Headings[];
}

export const MainLayout = ({ children, headings }: Props) => {
  return (
    <>
      <div className="absolute top-0 z-[-1]  hidden w-full sm:block">
        <svg
          width="100%"
          height="600"
          viewBox="0 0 1440 750"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" sm:h-[550px] lg:h-[950px]"
        >
          <path
            d="M-72 750V-85H1456V750C881.128 570.461 197.803 675.192 -72 750Z"
            className="fill-backgroundSecondary"
          />
        </svg>
      </div>
      <div className="sticky top-16 z-[2] flex h-screen w-full flex-grow ">
        <main className="top-16 h-full w-full flex-grow  p-[4.5rem_0rem_2.5rem] text-base lg:p-[7rem_0rem_2rem]">
          {children}
        </main>

        {headings && headings.length > 0 && (
          <div className="hidden md:block">
            <TableOfContents toc={headings} />
          </div>
        )}
      </div>
    </>
  );
};
