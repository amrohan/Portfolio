import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="text-bold pt-40  dark:bg-gray-950 dark:text-white md:flex md:flex-col md:justify-center md:pt-0 md:h-screen md:w-screen md:text-right">
      <h1 className="text-2xl font-bold text-left md:text-center mb-4 leading-8 ">
        {/* Passing empty string for blank space */}
        <span className="font-semibold text-3xl dark:text-gray-300 md:hidden">
          {"Hello, there 👋"}
        </span>
        <br />
        <span className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-800">
          About Page is under
        </span>{" "}
        <br className="md:hidden" />
        <span className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blueGray-900 to-pink-700">
          Development
        </span>
      </h1>
      <div className="text-xl ml-4 md:text-center md:ml-0 text-gray-400">
        <p>
          {"In the meantime, take a look at my"}
          <Link
            href="/blog"
            className="p-2 text-yellow-500 font-mono font-semibold text-2xl hover:text-green-600"
          >
            Blog
          </Link>
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
