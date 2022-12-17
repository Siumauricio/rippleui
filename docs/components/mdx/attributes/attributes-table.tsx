import React, { useEffect, useLayoutEffect, useState } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AttributesTable: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="attr mb-7 w-full rounded-lg border border-border bg-transparent p-4"
      //  css={{

      //     '&::-webkit-scrollbar': {
      //        width: '0',
      //        height: '0',
      //        backgroundColor: 'transparent',
      //     },
      //  }}
    >
      {React.Children.map(children, (child: JSX.Element) => {
        return (
          <>
            {child.type == "table" ? (
              <div className="overflow-x-auto">{child}</div>
            ) : (
              child
            )}
          </>
        );
      })}
    </div>
  );
};

export default AttributesTable;
