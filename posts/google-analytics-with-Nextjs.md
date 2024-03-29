---
title: "Google Analytics with Next.js"
date: "Mar 18 2022"
desc: "This is a blog post about how to use Google Analytics with Next.js"
type: "Blog"
cover_img: "/Blog/fb.png"
auther: "Rohan Salunkhe"
---

# Adding **Google Analytics** with Nextjs

We understand how critical Analytics data is for a company's or website's success. Let's look at how to integrate Google Analytics into a Next.js site.

## What we will learn

Here in this article, we will learn:-

1. Setup a Google Analytics account for our website
2. Creating a **\_document.js** file
3. Add code to track events

## Setup a Google Analytics account for our website

We can easily set up a Google Analytics account for our website with the URL below.

```http
https://analytics.google.com/analytics/web/#/a212549130p293139592/admin/account/create
```

After setting up, we will get a code to paste inside the <head> section of our website.

![Analytics page sreenshot](https://res.cloudinary.com/amrohan/image/upload/v1648392109/Images/rd2jxgdsxmezwdojeaqs.png)

Just copy the MEASUREMENT ID **(G-{Your Code})** from this code.

## Create a \_document.js file in our Next.js app

Inside the **pages** directory, create a file **\_document.js** and copy the code below. Note that you need to replace the **MEASUREMENT ID** with yours.

```jsx
// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-123456789"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-123456789', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

This will inject Google Analytics code into our Next.js website.

## Add the code to track events

Now add some code inside our **pages/\_app.js** file to track the events. So that the complete \_app.js fie looks the same as below.

```jsx
// pages/_app.js

import { useEffect } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-123456789", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
```

## Test the working

Now we can see that Google Analytics is tracking the pageviews on our website.

![Analycs page view screenshot](https://res.cloudinary.com/amrohan/image/upload/v1647611758/Images/hjgdabapwrol83fz0vaa.png)

## Summary

Here we are going to end the quick guide to add Google Analytics to a Next.js website. We injected the Google analytics tracking code, added code to track custom events, and tested.
