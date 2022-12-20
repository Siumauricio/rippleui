import React from "react";
import { Headings } from "../../utils/getToc";
import { GradientBackground } from "../styles/GradientBackground";
import { Navbar } from "../styles/Navbar";
import { SideNav } from "../styles/SideNav";
import { TableOfContents } from "../styles/TableOfContents";

interface Props {
  children: React.ReactNode;
  headings: Headings[];
}

export const DocsLayout = ({ children, headings }: Props) => {
  return (
    <>
      <GradientBackground isDocsLayout />

      <div className="page sticky top-16 z-[2] mx-auto flex w-full max-w-[1390px] flex-grow">
        <Navbar />

        <div className="hidden lg:block">
          <SideNav />
        </div>
        <main className="hide-scrollbar top-16 h-full w-full flex-grow overflow-hidden  p-[4.5rem_1.5rem_2.5rem] text-base lg:p-[7rem_6rem_2rem]">
          {children}
        </main>
        <div className="hidden lg:block">
          {headings && headings.length > 0 && (
            <TableOfContents toc={headings} />
          )}
        </div>
      </div>
    </>
  );
};
