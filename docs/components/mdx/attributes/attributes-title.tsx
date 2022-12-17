import React from "react";
import Link from "next/link";
import { titleToSlug } from "../../../utils/titleToSlug";

export interface AttributesTitleProps {
  alias?: string;
}

const AttributesTitle: React.FC<React.PropsWithChildren<AttributesTitleProps>> =
  React.memo(({ children, alias }) => {
    const titleWithSlug = titleToSlug(
      children?.toString().toLowerCase() as string
    );
    return (
      <div className="mb-3 ">
        <h4 className="title text-2xl font-semibold">
          <code className="cursor-pointer text-2xl font-semibold text-primary transition-all hover:text-blue-500">
            <Link href={"#" + titleWithSlug}>`{children}`</Link>
          </code>
          <span
            id={titleWithSlug}
            className="pointer-events-none relative -top-24 left-0 opacity-0"
          >
            &nbsp;
          </span>
        </h4>
      </div>
    );
  });

AttributesTitle.displayName = "AttributesTitle";
export default AttributesTitle;
