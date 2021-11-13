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
    <div className="bg-gray-950 w-screen h-screen text-white">
      <div className="h-full grid place-items-center w-auto">
        <div>
          <img src="/404.svg" alt="" width={250} height={32} />
        </div>
      </div>
    </div>
  );
};
export default NotFound;
