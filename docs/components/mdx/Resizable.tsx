// @ts-ignore

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useIsMobile } from "../../hooks/useMobile";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

interface WindowResizerProps {
  height?: string | number;
  minWidth?: number;
  iframeZoom?: number;
  iframeSrc?: string;
  iframeInitialWidth?: number;
  iframeTitle?: string;
  rezisable?: boolean;
}

const MIN_WIDTH = 200;

const WindowResizer: React.FC<WindowResizerProps> = (props) => {
  let constraintsResizerRef = React.useRef<HTMLDivElement>(null);
  let resizerRef = React.useRef<HTMLDivElement>(null);
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [enablePointerEvents, setEnablePointerEvents] = React.useState(true);

  const isMobile = useIsMobile();

  const {
    iframeSrc,
    iframeTitle,
    height = "420px",
    iframeZoom = 1,
    iframeInitialWidth,
    rezisable = false,
    minWidth = MIN_WIDTH,
  } = props;
  const hasInitialWidth = iframeInitialWidth !== undefined;

  const resizerX = useMotionValue(0);
  const browserWidth = useTransform(resizerX, (x) =>
    hasInitialWidth
      ? `calc(100% + ${x}px - 14px)`
      : `calc(100% + ${x}px - 14px)`
  );

  useIsomorphicLayoutEffect(() => {
    let observer = new window.ResizeObserver(() => {
      let width =
        constraintsResizerRef?.current!.offsetWidth -
        resizerRef?.current!.offsetWidth;

      if (resizerX.get() > width) {
        resizerX.set(width);
      }
    });

    observer.observe(constraintsResizerRef?.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (!resizerRef.current) {
      return;
    }
    resizerRef.current.onselectstart = () => false;
  }, []);

  // inject iframe styles
  useEffect(() => {
    const iframeStyles = `
  body {
    zoom: ${iframeZoom};
  }
  `;

    if (!iframeRef.current) {
      return;
    }
    const iframeDocument = iframeRef.current.contentDocument;
    const iframeEl = iframeRef.current;

    if (!iframeDocument) {
      return;
    }

    const style = iframeDocument.createElement("style");
    const aside = iframeEl?.contentWindow?.document?.querySelector("aside");

    if (style) {
      style.innerHTML = iframeStyles;
    }

    iframeDocument.head?.appendChild(style);
  });

  return (
    <div className={"xs:w-mw-xs relative w-full"} style={{ height }}>
      <motion.div
        className={
          "xs:w-mw-xs xs:!w-full overflow-hidden rounded-lg border border-neutral/20"
        }
        style={{
          width: isMobile ? "100%" : browserWidth,
          height,
        }}
      >
        <motion.iframe
          ref={iframeRef}
          className={
            "z-10 h-full w-full overflow-x-visible overflow-y-scroll border-none"
          }
          srcDoc={iframeSrc}
          title={iframeTitle}
        />
      </motion.div>
      <div
        ref={constraintsResizerRef}
        // Probably chage Base
        className={
          "xs:w-mw-xs xs:hidden absolute top-0 bottom-0 right-0 right-[5px] z-10 flex w-auto items-center justify-end"
        }
        style={{
          width: `calc(100% - ${
            hasInitialWidth ? iframeInitialWidth : minWidth
          }px - 20px)`,
        }}
      >
        {!rezisable && <div ref={resizerRef}></div>}
        {rezisable && (
          <motion.div
            ref={resizerRef}
            _dragX={resizerX}
            className={
              "d-flex absolute flex h-auto w-[10px] cursor-ew-resize select-none items-center justify-center active:opacity-80"
            }
            drag="x"
            dragConstraints={constraintsResizerRef}
            dragElastic={0}
            dragMomentum={false}
            style={{ x: resizerX }}
            onDragEnd={() => {
              document.documentElement.classList.remove("dragging-ew");
              iframeRef.current?.classList.remove("dragging-ew");
              setEnablePointerEvents(true);
            }}
            onDragStart={(e) => {
              document.documentElement.classList.add("dragging-ew");
              iframeRef.current?.classList.add("dragging-ew");
              setEnablePointerEvents(false);
            }}
          >
            <div className={isMobile ? "hidden " : "relative z-10"}>
              <div className={"h-[40px] w-[6px] rounded-full bg-neutral/60"} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WindowResizer;
