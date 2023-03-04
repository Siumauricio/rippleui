import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ id = "", level = 1, children, className }: Props) => {
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.split("#")[1] === id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [id]);

  const calculateHeadingLevel = (level: number) => {
    switch (level) {
      case 1:
        return "text-4xl lg:leading-4 font-extrabold";
      case 2:
        return "text-2xl leading-5 font-semibold";
      case 3:
        return "font-semibold text-xl leading-6";
      default:
        return "font-semibold text-base leading-6";
    }
  };
  const getCSS = (level: number): string => {
    switch (level) {
      case 1:
        return "pb-3";
      case 2:
        return "pb-3 mt-10";
      case 3:
        return "pb-3 mt-8";
      case 4:
        return "pb-3 mt-4";
      default:
        return "pb-3 mt-4";
    }
  };
  const seRouteId = () => {
    if (id && level !== 1) {
      router.push(`${router.asPath.split("#")[0]}#${id}`);
    }
  };

  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <>
      <CustomTag
        className={clsx(
          level !== 1 && "cursor-pointer",
          "hover:text-gray-12 group -ml-4  flex  scroll-m-24 items-center gap-2 pl-4 text-content1",
          getCSS(level),
          calculateHeadingLevel(level)
        )}
        onClick={seRouteId}
        id={id}
      >
        {level !== 1 && (
          <a
            href={`#${id}`}
            className="absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
            aria-label="Anchor"
          >
            ​
            <div className="hover:text-gray-11 ring-gray-10/20 hover:ring-slate-10/50 text-gray-9 flex h-6 w-6 items-center justify-center rounded-md shadow-sm ring-1 hover:shadow  ">
              <svg width="12" height="12" fill="none" aria-hidden="true">
                <path
                  d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
          </a>
        )}

        {/* <a
        
          className={
            "absolute -ml-10 flex items-center border-0 opacity-0 group-hover:opacity-100"
          }
        >
          #
        </a> */}
        <span className={clsx(level === 1 && "py-3")}>{children}</span>
      </CustomTag>
    </>
  );
};

export const headingDynamic = ({ level }: Props) => {
  // eslint-disable-next-line react/display-name
  return (props: Props) => {
    return (
      <Heading level={level} id={props.id}>
        {props.children}
      </Heading>
    );
  };
};
