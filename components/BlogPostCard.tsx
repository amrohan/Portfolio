import React from "react";
import Link from "next/link";


export default function BlogPostCard({ title, slug}) {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className="dark:bg-gray-940 dark:text-white relative rounded-xl group overflow-hidden shadow-lg h-fit ">
        
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
