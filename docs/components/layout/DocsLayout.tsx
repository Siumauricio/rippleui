import React from "react";
import { Headings } from "../../utils/getToc";
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
      <div className="page sticky top-16 z-[2] mx-auto flex w-full max-w-[1390px] flex-grow">
        <Navbar className="bg-backgroundPrimary/70" />

        <div className="hidden lg:block">
          <SideNav />
        </div>
        <main className="top-16 h-full w-full flex-grow overflow-hidden p-[4.5rem_1.5rem_2.5rem]  text-base hide-scrollbar lg:p-[7rem_6rem_2rem]">
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
