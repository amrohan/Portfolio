import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className=" w-screen text-bold font-mono pt-40 dark:bg-gray-950 dark:text-white overflow-hidden">
      <h1 className="text-center font-semibold text-4xl md:text-6xl">
        About Me
      </h1>
      <p className="mt-4 px-7 text-center md:px-10 md:mt-8 ">
        {
          " Hello, my name is Rohan Salunkhe, and I'm a self-taught developer that loves the process of building things."
        }
      </p>
      <div className="mx-24 md:mx96 md:px-96">
        <Link href="/blog" passHref>
          <button className="relative mt-8 text-center w-full bg-purple-300  dark:bg-purple-300 dark:text-black rounded-full h-10 ">
            <a>Explore Projects</a>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
