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
import remarkMdxCodeMeta from 'remark-mdx-code-meta';

const components = {
  ...MDXcomponents,
};
type MDXComponents = MDXRemoteProps["components"];

interface Props {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  headings: Headings[];
}
function docs({ source, headings }: Props) {
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
export async function getStaticProps(context: any) {
  const params = context.params.page as string[];
  const pathFile = params.join("/");

  const sourceFile = fs.readFileSync(
    path.join(process.cwd() + `/content/${pathFile}.mdx`),
    "utf8"
  );
  const headings: any = [];

  const source = sourceFile;
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMdxCodeMeta,remarkGfm],
      rehypePlugins: [[rehypeExtractHeadings, { rank: 1, headings },]],
    },
  });
  return { props: { source: mdxSource, headings } };
}
export default docs;
