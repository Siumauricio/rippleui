import React, { useMemo } from "react";
import AttributesTitle from "./attributes-title";
import AttributesTable from "./attributes-table";

export interface AttributesProps {
  children: JSX.Element | JSX.Element[];
}

const Attributes: React.FC<AttributesProps> = React.memo(({ children }) => {
  const apiTitles = useMemo(() => {
    if (React.Children.count(children) === 0) return null;
    return <AttributesTable>{children}</AttributesTable>;
  }, [children]);

  return <>{apiTitles}</>;
});

type AttributesComponent<P> = React.FC<P> & {
  Title: typeof AttributesTitle;
  Table: typeof AttributesTable;
};
Attributes.displayName = "Attributes";
export default Attributes as AttributesComponent<AttributesProps>;
