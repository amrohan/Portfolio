import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../sort";
import Link from "next/link";

export default function blog({ posts }) {
  var project = "Project && Page 🔥";
  return (
    <div className="md:absolute static h-full w-full dark:bg-gray-950 dark:text-white ">
      <Head>
        <title>Rohan Salunkhe | {project}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full dark:bg-gray-950 dark:text-white">
        <section className="absoulute mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 dark:bg-gray-950 dark:text-white text-center">
          <article className="pt-32">
            <h2 className="text-6xl mb-10 font-extrabold text-rose-600 ">
              Blog
            </h2>
            {/* CARD 1 */}
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 ">
              {posts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`}>
                  <a>
                    <article className="dark:bg-gray-940  dark:text-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                      <div className="relative w-full h-80 md:h-64 lg:h-44">
                        <img
                          src={post.frontmatter.cover_img}
                          alt="Image Logo"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="px-3 py-4">
                        <p className="text-base font-semibold dark:text-white group-hover:text-purple-600">
                          {post.frontmatter.title}
                        </p>
                      </div>
                    </article>
                  </a>
                </Link>
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
