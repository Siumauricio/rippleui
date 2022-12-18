import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Li = ({ children, ...props }: Props) => {
  return <li className="my-3 ml-4 list-decimal text-content2">{children}</li>;
};
