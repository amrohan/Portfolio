import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../sort";
import Link from "next/link";
import MetaTags from "../components/MetaTags";

export default function blog({ posts }) {
  return (
    <div className=" h-full w-full dark:bg-gray-950 dark:text-white ">
      {/* Adding meta  */}
      <MetaTags
        title="Project | Blog Page 🔥- amrohan"
        description="Rohan Salunkhe's personal website, which includes links to my social media accounts as well as links to my most recent projects, blogs, and posts on GitHub, dev.to, and hashnode."
        image="https://res.cloudinary.com/amrohan/image/upload/v1641026544/Images/e1ffa8bll07ebpal4esa.png"
      />

      <div className="w-full h-full dark:bg-gray-950 dark:text-white">
        <section className="absoulute mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 dark:bg-gray-950 dark:text-white text-center">
          <article className="pt-32">
            <h2 className="text-6xl mb-10 font-extrabold text-pink-300 ">
              BLOG
            </h2>
            {/* CARD 1 */}
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 ">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="dark:bg-gray-940  dark:text-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200"
                >
                  <div className="relative w-full h-80 md:h-64 lg:h-44">
                    <img
                      src={post.frontmatter.cover_img}
                      alt={post.frontmatter.title}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="px-3 py-4">
                    <p className="text-base font-semibold dark:text-white">
                      {post.frontmatter.title}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="flex justify-center mt-4  text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="h-8 w-6 ml-1 text-pink-500"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </article>
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // This will find directory
  const files = fs.readdirSync(path.join("posts"));

  // This will give frontmatter and slug from post
  const posts = files.map((filename) => {
    // Creating slug here
    const slug = filename.replace(".md", "");

    // Getting frontmatter from post
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      // Sorting post by date here
      posts: posts.sort(sortByDate),
    },
  };
}
