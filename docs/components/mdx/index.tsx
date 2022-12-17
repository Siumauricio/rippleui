import { headingDynamic } from "./Heading";
import { Code } from "./Code";
import { Paragraph } from "./Paragraph";
import { Link } from "./Link";
import { Li } from "./Li";
import Attributes from "./attributes";
import LinkRedirect from "./LinkRedirect";
import { ExamplesRepositories } from "./ExamplesRepositories";
import { Pallete } from "../styles/Pallete";
export { default as Attributes } from "./attributes";

export const MDXcomponents = {
  p: Paragraph,
  h1: headingDynamic({ level: 1 }),
  h2: headingDynamic({ level: 2 }),
  h3: headingDynamic({ level: 3 }),
  h4: headingDynamic({ level: 4 }),
  h5: headingDynamic({ level: 5 }),
  a: Link,
  li: Li,
  code: Code,
  Attributes: Attributes,
  LinkRedirect: LinkRedirect,
  ExamplesRepositories: ExamplesRepositories,
  Pallete: Pallete,
  table: (props: any) => <table className="table" {...props} />,
  // thead: (props) => <thead className="table-header" {...props} />,
  // tbody: (props) => <tbody className="table-body" {...props} />,
  // tr: (props) => <tr className="table-row" {...props} />,
  // th: (props) => <th className="table-cell" {...props} />,
  // td: (props) => <td className="table-cell" {...props} />,
};
