import React from "react";

export type TitleProps = {
  title: React.ReactNode | string;
  desc?: React.ReactNode | string;
};

const replaceCode = (desc: string): string => {
  if (!desc.includes("`")) return desc;
  let count = 0;
  return desc.replace(/`/g, () => {
    const val = count % 2 === 0 ? "<code>" : "</code>";
    count++;
    return val;
  });
};

const Title: React.FC<TitleProps> = React.memo(
  ({ title, desc }: TitleProps) => {
    const isStringDesc = typeof desc === "string";
    return (
      <>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {desc && isStringDesc && (
          <p
            className="pb-3"
            dangerouslySetInnerHTML={{ __html: replaceCode(desc) }}
          />
        )}
        {desc && !isStringDesc && <p className="pb-4">{desc}</p>}
      </>
    );
  }
);

Title.displayName = "PlayGroundTitle";
export default Title;
