import clsx from "clsx";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import { useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { CopyIcon } from "../icons/CopyIcon";

interface Props {
  children?: React.ReactNode;
  language?: "tsx" | "jsx" | "bash" | "html";
  linesOn?: boolean;
  blockClass?: string;
  iconClass?: string;
  hideIcon?: boolean;
}

export const CodeBlock = ({
  blockClass,
  iconClass,
  hideIcon = false,
  children,
  language = "tsx",
  linesOn = false,
}: Props) => {
  const [value, copy] = useCopyToClipboard();
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");
  const code = children ? children.toString().trim() : "";

  const clickHandler = () => {
    if (!code) return;
    copy(code);
    setTooltipText("Copied!");
    setTimeout(() => {
      setTooltipText("Copy to clipboard");
    }, 2000);
  };
  return (
    <>
      {!hideIcon && (
        <div
          className={clsx(
            iconClass,
            "relative top-9 right-3 flex h-0 w-full cursor-pointer items-center justify-end"
          )}
          onClick={clickHandler}
        >
          <span
            className="tooltip tooltip-top tooltip-primary"
            data-tooltip={tooltipText}
          >
            <CopyIcon />
          </span>
        </div>
      )}

      <Highlight
        {...defaultProps}
        theme={null as any}
        code={code}
        // @ts-ignore
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              className,
              "overflow-auto rounded-xl  p-4 text-left ",
              blockClass
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {linesOn && (
                  <span className="table-cell select-none pr-3 text-right text-white  opacity-50">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell ">
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                        key,
                        className: "text-white",
                      })}
                      // css={{ color: "white" }}
                    />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};
