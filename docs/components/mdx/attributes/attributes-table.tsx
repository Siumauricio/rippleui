import React, { useEffect, useLayoutEffect, useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AttributesTable: React.FC<Props> = ({ children }) => {
  return (
    <div className="attr mb-7 w-full rounded-lg border border-border bg-transparent p-4 ">
      {React.Children.map(children, (child: JSX.Element) => {
        return (
          <>
            {child.type == "table" ? (
              <div className="overflow-x-auto pt-10">{child}</div>
            ) : (
              <div className="mb-5 overflow-auto first-of-type:mb-5 first-of-type:mt-2">
                {child}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default AttributesTable;
