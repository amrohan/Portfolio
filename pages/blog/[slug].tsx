import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import styles from "../../styles/content.module.css";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_img, type },
  slug,
  content,
}) {
  return (
    <>
      <div className="bg-white text-black dark:text-gray-100 dark:bg-gray-950">
        <div className="pt-24 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-hero-100">
          <img
            className="object-cover w-full h-64"
            src={cover_img}
            alt="Article"
          />

          <div className="p-6">
            {/* Using here to make it available in dark and light mode */}
            <div className="dark:text-white text-black">
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                {type}
              </span>
              <span className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
                {title}
              </span>
              <div className={styles.content}>
                <div
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                ></div>
              </div>
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
