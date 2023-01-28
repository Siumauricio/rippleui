import React from "react";

export const useScrollSpy = (
  selectors: string[],
  options?: IntersectionObserverInit
) => {
  const [activeId, setActiveId] = React.useState<string | null>();
  const observer = React.useRef<IntersectionObserver>();

  React.useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );

    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute("id"));
        }
      });
    }, options);
    elements.forEach((el) => el && observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, [selectors]);

  return activeId;
};
