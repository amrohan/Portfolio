import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import MarkdownWrapper from "../../components/MarkdownWrapper";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MetaTags from "../../components/MetaTags";

export default function PostPage({
  frontmatter: { title, date, cover_img, type, desc },
  slug,
  content,
}) {
  return (
    <>
      <MetaTags title={title} description={desc} image={cover_img} />
      <div className="bg-slate-50 dark:bg-gray-950">
        <div className="pt-24 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-950">
          <img
            className="object-cover w-full rounded-xl h-64"
            src={cover_img}
            alt={title}
          />

          <div className="p-6">
            {/* Using here to make it available in dark and light mode */}
            <div className="dark:text-white text-black">
              <span className="text-xs font-medium text-pink-600 uppercase dark:text-pink-500">
                {type}
              </span>
              {/* <span className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
                {title}
              </span> */}
              <MarkdownWrapper>
                {/* Passing markdown content into ReactMarkdown component */}

                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          style={coldarkDark}
                          language={match[1]}
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {content}
                </ReactMarkdown>
              </MarkdownWrapper>
            </div>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src="/Images/me.webp"
                    alt="Avatar"
                  />
                  <Link href="/about">
                    <a className="mx-2 font-semibold text-gray-700 dark:text-gray-400">
                      Rohan Salunkhe
                    </a>
                  </Link>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
