import React from "react";
import { useEffect } from "react";
import router from "next/dist/client/router";

const NotFound = () => {
  useEffect(() => {
    // Setting Timout of 2s,
    setTimeout(() => {
      // using router.push to redirect user from 404 page to home page
      router.push("/");
    }, 3000);
    // passing empty array so it can run when the component first load
  }, []);
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="/404.jpg"
        className="absolute h-full w-full object-cover"
        alt="404 page"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You&#x27;re alone here
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
