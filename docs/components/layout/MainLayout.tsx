import React from "react";
import { Headings } from "../../utils/getToc";
import { GradientBackground } from "../styles/GradientBackground";
import { TableOfContents } from "../styles/TableOfContents";

interface Props {
  children: React.ReactNode;
  headings?: Headings[];
}

export const MainLayout = ({ children, headings }: Props) => {
  return (
    <>
      <GradientBackground />
      {/* <TopNav /> */}
      <div className="sticky top-16 z-[2] flex h-screen w-full flex-grow">
        <div className="hidden md:block">{/* <SideNav /> */}</div>
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
