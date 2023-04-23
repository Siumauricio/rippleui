import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import fs from "fs";
import path from "path";
import remarkGfm from "remark-gfm";
import { MDXcomponents } from "../../components/mdx";
import { DocsLayout } from "../../components/layout/DocsLayout";
import { getRoutes } from "../../utils/getRoutes";
import Meta from "../../components/mdx/layout/Meta";
import rehypeExtractHeadings, { Headings } from "../../utils/getToc";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import rehypeSlug from "rehype-slug";
import { items } from "../../utils/items";
import LinkRedirect from "../../components/mdx/LinkRedirect";

const components = {
  ...MDXcomponents,
};
type MDXComponents = MDXRemoteProps["components"];

type Route = {
  children: string;
  href: string;
};
interface Props {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  headings: Headings[];
  prevRoute: Route;
  nextRoute: Route;
}
function docs({ source, headings, nextRoute, prevRoute }: Props) {
  return (
    <>
      <DocsLayout headings={headings}>
        <Meta
          meta={{
            title: source?.frontmatter?.title || "Docs",
            description: source?.frontmatter?.description || "",
          }}
        />
        <MDXRemote {...source} components={components as MDXComponents} />

        <LinkRedirect
          hrefLeft={prevRoute?.href}
          contentLeft={prevRoute?.children}
          hrefRight={nextRoute?.href}
          contentRight={nextRoute?.children}
          hideLeft={prevRoute === null}
          hideRight={nextRoute === null}
        />
      </DocsLayout>
    </>
  );
}

export async function getStaticPaths() {
  const routes = getRoutes();

  return {
    paths: routes,

    fallback: false,
  };
}
function getPrevNext(route: string) {
  const children = route.split("/")[1];
  let prev = null;
  let next = null;

  for (const item of items) {
    const links = item.links;

    for (let i = 0; i < links.length; i++) {
      if (
        links[i].children?.toString().toLowerCase().replace(" ", "-") ===
        children
      ) {
        if (i > 0) {
          prev = links[i - 1];
        }
        if (i < links.length - 1) {
          next = links[i + 1];
        }
        break;
      }
    }
  }

  return { prev, next };
}
export async function getStaticProps(context: any) {
  const params = context.params.page as string[];
  const pathFile = params.join("/");
  const { next, prev } = getPrevNext(pathFile);

  let sourceFile = fs.readFileSync(
    path.join(process.cwd() + `/content/${pathFile}.mdx`),
    "utf8"
  );
  const headings: any = [];

  if (pathFile === "more/changelog") {
    sourceFile = fs.readFileSync("../CHANGELOG.md", {
      encoding: "utf8",
    });
  }

  const source = sourceFile;
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta, remarkGfm],
      rehypePlugins: [[rehypeSlug], [rehypeExtractHeadings, { headings }]],
    },
  });
  return {
    props: {
      source: mdxSource,
      headings: headings,
      prevRoute: prev,
      nextRoute: next,
    },
  };
}
export default docs;
