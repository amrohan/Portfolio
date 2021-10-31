import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import router from "next/dist/client/router";

const NotFound = () => {
  useEffect(() => {
    console.log("hello");
    // Setting Timout of 2s,
    setTimeout(() => {
      // using router.push to redirect user from 404 page to home page
      router.push("/");
    }, 3000);
    // passing empty array so it can run when the component first load
  }, []);
  return (
    <div className="flex flex-col justify-center w-screen h-screen dark:bg-gray-950 dark:text-white">
      <h1 className="w-full text-center font-semibold text-8xl text-purple-300">
        404
      </h1>
      <img src="/404.svg" width="200" height="200" alt="404 page" />
      <Link href="/" passHref>
        <button className="bg-red-300  dark:bg-red-300 dark:text-black rounded-full h-10 mx-28 sm:mx-96 mt-1">
          Go to HomePage
        </button>
      </Link>
    </div>
  );
};
export default NotFound;
