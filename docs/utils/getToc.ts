import { headingRank } from "hast-util-heading-rank";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";
import { Root } from "hast";
import { titleToSlug } from "./titleToSlug";

interface Heading {
  id: string;
  title: string;
  level: number;
}

type Rank = 1 | 2 | 3 | 4 | 5 | 6;

interface ExtractHeadingsConfig {
  rank: Rank;
  headings: Heading[];
}

export default function rehypeExtractHeadings({
  rank = 1,
  headings,
}: ExtractHeadingsConfig) {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      const rankNode = headingRank(node);
      if (
        (rankNode === 1 ||
          rankNode === 2 ||
          rankNode === 3 ||
          rankNode === 4 ||
          rankNode === 5) &&
        node.properties
      ) {
        headings.push({
          title: toString(node),
          //@ts-ignore
          id: node.properties.id,
          level: parseInt(node.tagName[1]),
        });
      }
    });
  };
}

export interface Headings extends Heading {}
