import clsx from "clsx";
import React, { useRef } from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { pallete } from "../../utils/pallete";

import { Heading } from "../mdx/Heading";

export const Pallete = () => {
  const arraySorted = Object.values(pallete);
  const element = useRef(null);
  const [value, copy] = useCopyToClipboard();

  const getColorByDocument = (color: string) => {
    if (element.current) {
      const value = getComputedStyle(element.current).getPropertyValue(
        "--" + color
      );
      copy(value);
      return value;
    }
  };

  return (
    <>
      {arraySorted.map((item, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <Heading id={item.title} level={2}>
            {item.title}
          </Heading>
          <div
            className={clsx(
              "grid ",
              item.colors.length / 2 === 1
                ? "gap-3 sm:grid-cols-2"
                : "gap-3 pb-4 sm:grid-cols-3"
            )}
          >
            {item.colors.map((color, index) => (
              <div
                className="w-full border-none bg-transparent pt-2"
                key={index}
              >
                <p className="text-3xl font-semibold text-content1">
                  {color.title}
                </p>
                <div className="my-3 border border-border" />
                <div className="flex min-w-fit flex-col gap-5">
                  {color.values.map((item, index) => (
                    <div className="flex flex-col gap-4" key={index}>
                      {Object.keys(item).map((key: any, index) => (
                        <div
                          className={clsx(
                            "flex min-w-fit cursor-pointer  justify-start  rounded-lg  py-4 px-4 transition-all hover:-translate-y-1.5"
                          )}
                          style={{ backgroundColor: `var(--${key})` }}
                          ref={element}
                          key={index}
                          onClick={() => getColorByDocument(key)}
                        >
                          <p
                            // @ts-ignore
                            style={{ color: `var(--${item[key]})` }}
                            key={index}
                          >
                            {key}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
