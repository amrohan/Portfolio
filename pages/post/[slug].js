import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import styles from "../../styles/post.module.css";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export const Post = ({ title, body, image }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "ooca1bry",
      dataset: "production",
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <>
      <div className="bg-white text-black dark:text-gray-100 dark:bg-gray-950">
        <div className="pt-24 max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-hero-100">
          <img
            className="object-cover w-full h-64"
            src={imageUrl}
            alt="Article"
          />

          <div className="p-6">
            {/* Using here to make it available in dark and light mode */}
            <div className="dark:text-white text-black list-disc">
              {/* <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
          {type}
        </span> */}
              {/* <span className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
                {title}
              </span> */}
              <div className="prose lg:prose-l dark:text-white list-disc">
                <BlockContent
                  className={styles.content}
                  blocks={body}
                  projectId="ooca1bry"
                  dataset="production"
                />
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
                {/* <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                  {date}
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://ooca1bry.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};

export default Post;
