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
    <div className="bg-gray-950 w-screen h-screen text-white">
      <div className="h-full grid place-items-center">
        <h1 className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-800">
          404
        </h1>
      </div>
    </div>
  );
};
export default NotFound;
