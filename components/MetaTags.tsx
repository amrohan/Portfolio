import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function MetaTags({ title, description, image }) {
  return (
    <div>
      {/* <Head>
                 <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={description} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:alt" content={title} />
                <meta property="og:url" content="https://amrohan.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={title} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                <meta name="twitter:image:alt" content={title} />
                <meta name="twitter:site" content="https://amrohan.com/"/>
                <meta name="twitter:creator" content="@rohansalunkhe_" />
                <link rel="icon" href="/favicon.ico" /> 
            </Head> */}
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
