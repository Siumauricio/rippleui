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
    if (id) {
      router.push(`${router.asPath.split("#")[0]}#${id}`);
    }
  };

  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <>
      <CustomTag
        className={clsx(
          "flex cursor-pointer items-center gap-2 text-content1 hover:text-gray-1100 ",
          getCSS(level),
          calculateHeadingLevel(level)
        )}
        onClick={seRouteId}
      >
        {children}

        <a
          aria-hidden="true"
          href={`#${id}`}
          className={
            "mark text-xl font-semibold  text-content2 opacity-0 transition-opacity ease-in-out"
          }
        >
          #
        </a>
        <span
          className="pointer-events-none relative top-[-90px] left-0 opacity-0"
          id={id}
        >
          &nbsp;
        </span>
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
