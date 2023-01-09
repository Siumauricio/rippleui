import clsx from "clsx";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import { useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { CopyIcon } from "../icons/CopyIcon";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import js from "prettier/parser-babel";
interface Props {
  children?: React.ReactNode;
  language?: "tsx" | "js" | "bash" | "html";
  linesOn?: boolean;
  blockClass?: string;
  iconClass?: string;
  hideIcon?: boolean;
  disabledFormat?: boolean;
}

export const CodeBlock = ({
  blockClass,
  iconClass,
  hideIcon = false,
  children,
  language = "tsx",
  disabledFormat,
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
  const parserPlugin =
    language === "html" ? htmlParser : language === "js" ? js : null;
  const parser =
    language === "html" ? "html" : language === "js" ? "babel" : null;
  let formattedCode = code;
  if (parser && parserPlugin && !disabledFormat) {
    formattedCode = prettier
      .format(code, {
        parser: parser,
        plugins: [parserPlugin],
        useTabs: true,
        printWidth: 800,
        htmlWhitespaceSensitivity: "ignore",
      })
      .trim()
      .replace(/;$/, "");
  }

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
            className="tooltip tooltip-bottom tooltip-primary "
            data-tooltip={tooltipText}
          >
            <CopyIcon />
          </span>
        </div>
      )}

      <Highlight
        {...defaultProps}
        theme={null as any}
        code={formattedCode}
        // @ts-ignore
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              className,
              "max-h-[32rem] overflow-auto  rounded-xl p-4 text-left",
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
                        className: "text-white ",
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
