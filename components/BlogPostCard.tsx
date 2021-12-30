import React from "react";
import Link from "next/link";


export default function BlogPostCard({ title, slug, cover_img }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="dark:bg-gray-940 dark:text-white relative rounded-lg group overflow-hidden shadow-lg h-fit ">
          <div className="relative w-full h-52 md:h-64 lg:h-44">
            <img
              src={cover_img}
              alt="Image Logo"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="px-3 py-4">
            <p className=" text-center text-base font-semibold dark:text-white group-hover:text-indigo-400">
              {title}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
}
