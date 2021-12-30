import React from "react";
import Head from "next/head";
import About from "../components/AboutPage";

export default function about() {
  var about = "About Page 🔥 (amrohan)";
  return (
    <div className="w-screen h-screen dark:bg-gray-950 dark:text-white">
      <Head>
        <title>Rohan Salunkhe | {about}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About />
    </div>
  );
}
