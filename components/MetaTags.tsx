import React from "react";
import { NextSeo } from "next-seo";

export default function MetaTags({ title, description, image }) {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://amrohan.com",
          title: title,
          description: description,
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
          site: "https://amrohan.com/",
          cardType: "summary_large_image",
        }}
      />
    </div>
  );
}
