import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ArrowLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
interface Props {
  hrefLeft?: string;
  hrefRight?: string;
  contentLeft?: string;
  contentRight?: string;
  hideLeft?: boolean;
  hideRight?: boolean;
  showDivider?: boolean;
}

const LinkRedirect = ({
  contentLeft,
  contentRight,
  hideLeft,
  hideRight,
  showDivider = true,
  hrefLeft = "",
  hrefRight = "",
}: Props) => {
  const router = useRouter();

  const tag = router.asPath.split("#");
  const urlSplited = tag[0].split("/");
  const urlContent = "/" + urlSplited.splice(2, 3).join("/");

  return (
    <>
      {showDivider && <div className="my-5 border-t border-border" />}
      <div
        className={clsx(
          hideLeft
            ? "justify-end"
            : hideRight
            ? "justify-start"
            : "justify-between",
          "flex flex-wrap pb-7"
        )}
      >
        {!hideLeft && (
          <Link
            href={hrefLeft}
            className="hover:bg-gray-4 flex items-center gap-1 rounded-lg bg-transparent p-2"
          >
            <ArrowLeft />
            {contentLeft}
          </Link>
        )}
        {!hideRight && (
          <Link
            href={hrefRight}
            className="hover:bg-gray-4 flex items-center gap-1 rounded-lg bg-transparent p-2"
          >
            {contentRight}
            <ChevronRight />
          </Link>
        )}
      </div>
      <div className="py-10 sm:py-0">
        <a
          className="hover:text-blue-9 cursor-pointer text-primary"
          rel="noreferrer nofollow"
          href={
            "https://github.com/Siumauricio/rippleui/tree/main/docs/content" +
            urlContent +
            ".mdx"
          }
        >
          Edit this page on GitHub
        </a>
      </div>
    </>
  );
};
export default LinkRedirect;
