import React from "react";
import { Headings } from "../../utils/getToc";
import { NavbarDocs } from "../styles/NavbarDocs";
import { SideNav } from "../styles/SideNav";
import { TableOfContents } from "../styles/TableOfContents";

interface Props {
  children: React.ReactNode;
  headings: Headings[];
}

export const DocsLayout = ({ children, headings }: Props) => {
  return (
    <div className="flex h-screen w-full flex-col">
      <SideNav />

      <div className="div">
        <NavbarDocs />
        <main className="content lg:pl-[272px] 2xl:pl-[calc((100vw-var(--vp-layout-max-width))/2+var(--vp-sidebar-width))] 2xl:pr-[calc((100vw-var(--vp-layout-max-width))/2)]">
          <div className="w-full pt-8 lg:p-[32px_32px_0]">
            <div className=" flex w-full">
              <div className="relative m-0  w-full overflow-hidden px-6 sm:min-w-[640px] lg:p-[0_32px_128px]">
                <div className="mx-auto lg:max-w-[43rem]">{children}</div>
              </div>
              <div className="relative hidden w-full max-w-[256px] flex-grow pl-8 xl:block">
                <div className="fixed bottom-0 z-10 h-8 w-56 " />
                <div className="sticky top-0 -mt-28 h-screen pt-28">
                  {headings && headings.length > 0 && (
                    <TableOfContents toc={headings} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
