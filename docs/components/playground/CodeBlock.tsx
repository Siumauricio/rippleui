import clsx from "clsx";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import React, { useEffect, useMemo, useState } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { CopyIcon } from "../icons/CopyIcon";
import prettier from "prettier/standalone";
import htmlParser from "prettier/parser-html";
import js from "prettier/parser-babel";
import { jsxToHtml } from "../../utils/jsxToHtml";
import { htmlToJsx } from "../../utils/htmlToJsx";
interface Props {
  children?: React.ReactNode;
  language?: "tsx" | "js" | "bash" | "html";
  linesOn?: boolean;
  blockClass?: string;
  iconClass?: string;
  hideIcon?: boolean;
  disabledFormat?: boolean;
  disableTabs?: boolean;
}

export const CodeBlock = ({
  blockClass,
  iconClass,
  hideIcon = false,
  children,
  language = "tsx",
  disabledFormat,
  linesOn = false,
  disableTabs = false,
}: Props) => {
  const [languageSelected, setLanguageSelected] = useState<
    "html" | "jsx" | string
  >("");
  const [value, copy] = useCopyToClipboard();
  const [tooltipText, setTooltipText] = useState("Copy to clipboard");

  const codeParsed =
    typeof children === "string"
      ? children.toString().trim()
      : // @ts-ignore
        children?.props?.children.toString().trim();

  // @ts-ignore
  const languageParsed = children?.props?.className
    ? // @ts-ignore
      (children?.props?.className.split("-")[1] as
        | "html"
        | "tsx"
        | "js"
        | "bash")
    : language;
  const [code, setCode] = useState<string>(codeParsed);

  const clickHandler = () => {
    if (!code) return;
    copy(code);
    setTooltipText("Copied!");
    setTimeout(() => {
      setTooltipText("Copy to clipboard");
    }, 2000);
  };

  const parserPlugin =
    languageParsed === "html"
      ? htmlParser
      : languageParsed === "js"
      ? js
      : null;
  const parser =
    languageParsed === "html"
      ? "html"
      : languageParsed === "js"
      ? "babel"
      : null;

  const formatCode = (codeToFormat: string) => {
    if (parser && parserPlugin && !disabledFormat) {
      return prettier
        .format(codeToFormat, {
          parser: parser,
          plugins: [parserPlugin],
          useTabs: true,
          printWidth: 800,
          htmlWhitespaceSensitivity: "ignore",
        })
        .trim()
        .replace(/;$/, "");
    }
    return codeToFormat;
  };

  useMemo(() => {
    const replacedCode = jsxToHtml(code);
    const formattedCode = formatCode(replacedCode);
    setCode(formattedCode);
  }, []);

  useEffect(() => {
    if (languageSelected === "html") {
      const replacedCode = jsxToHtml(code);
      setCode(replacedCode);
    } else if (languageSelected === "jsx") {
      const replacedCode = htmlToJsx(code);
      setCode(replacedCode);
    }
  }, [languageSelected]);

  return (
    <>
      {!disableTabs ? (
        <div className="pt-4 ">
          {!hideIcon && (
            <div
              className={clsx(
                iconClass,
                "relative top-5 right-3 z-20 flex h-0 w-full cursor-pointer items-center justify-end"
              )}
              onClick={clickHandler}
            >
              <span
                className="tooltip-left tooltip-primary tooltip lg:tooltip-top"
                data-tooltip={tooltipText}
              >
                <CopyIcon />
              </span>
            </div>
          )}
          <div className="tabs  w-full  rounded-t-xl bg-[var(--backgroundTheme)] px-2  pt-1.5">
            <div
              onClick={() => {
                setLanguageSelected("html");
              }}
              className={clsx(
                (languageSelected === "html" || languageSelected === "") &&
                  "tab-underline tab-active",
                "tab bg-transparent px-6  !pb-0 !font-['Inter']"
              )}
              data-theme="dark"
            >
              HTML
            </div>
            <div
              onClick={() => {
                setLanguageSelected("jsx");
              }}
              className={clsx(
                languageSelected === "jsx" && "tab-underline tab-active",
                "tab bg-transparent px-6  !pb-0 !font-['Inter']"
              )}
              data-theme="dark"
            >
              JSX
            </div>
          </div>
        </div>
      ) : (
        <>
          {!hideIcon && (
            <div
              className={clsx(
                iconClass,
                "relative top-9 right-3 z-20 flex h-0 w-full cursor-pointer items-center justify-end"
              )}
              onClick={clickHandler}
            >
              <span
                className="tooltip-left tooltip-primary tooltip lg:tooltip-left"
                data-tooltip={tooltipText}
              >
                <CopyIcon />
              </span>
            </div>
          )}
        </>
      )}

      <Highlight
        {...defaultProps}
        theme={null as any}
        code={code}
        // @ts-ignore
        language={languageParsed}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre
              className={clsx(
                className,
                disableTabs
                  ? "m-[1rem_0rem_1.25rem_0rem] rounded-xl p-[14px]"
                  : "m-[0rem_0rem_1.25rem_0rem] p-[14px]",
                "max-h-[32rem] overflow-auto  rounded-b-xl text-left",
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
          </>
        )}
      </Highlight>
    </>
  );
};
