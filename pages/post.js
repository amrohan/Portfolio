import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post({ posts }) {
  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "ooca1bry",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div className="md:absolute static h-full w-full dark:bg-gray-950 dark:text-white ">
      <Head>
        <title>Rohan Salunkhe | Post Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-full dark:bg-gray-950 dark:text-white">
        <section className="absoulute mt-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 dark:bg-gray-950 dark:text-white text-center">
          <article className="pt-32">
            <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-800">
              Posts
            </h2>
            {/* CARD 1 */}
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 ">
              {mappedPosts.length ? (
                mappedPosts.map((p, index) => (
                  <Link key={index} href={`/post/${p.slug.current}`}>
                    <a>
                      <article className="dark:bg-gray-940  dark:text-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                        <div className="relative w-full h-80 md:h-64 lg:h-44">
                          <img
                            src={p.mainImage}
                            alt="Image Logo"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="px-3 py-4">
                          <p className="text-base font-semibold dark:text-white group-hover:text-indigo-600">
                            {p.title}
                          </p>
                        </div>
                      </article>
                    </a>
                  </Link>
                ))
              ) : (
                <p>No posts found</p>
              )}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://ooca1bry.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
