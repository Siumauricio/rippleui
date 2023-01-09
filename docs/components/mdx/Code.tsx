import React from "react";
import { CodeBlock } from "../playground/CodeBlock";

interface Props {
  children: React.ReactNode;
  className: string;
}

export const Code = ({ children, className }: Props) => {
  if (!className) return <code className="text-primary">{children}</code>;
  return (
    <CodeBlock
      language={className.split("-")[1] as "html" | "tsx" | "js" | "bash"}
    >
      {children}
    </CodeBlock>
  );
};
