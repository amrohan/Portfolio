import React from "react";
import { NextSeo } from "next-seo";

export default function MetaTags({ title, description, image }) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://amrohan.com",
          title,
          description,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
          site_name: title,
        }}
        twitter={{
          handle: "@rohansalunkhe_",
          site: "@amrohan",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "ms:profile",
            content: "https://mastodon.social/@amrohan",
          },
        ]}
      />
    </>
  );
}
