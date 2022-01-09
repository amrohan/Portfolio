import React from "react";

export default function Languages() {
  return (
    <section className="text-gray-400 bg-gray-950">
      <h1 className="text-center dark:text-white text-2xl font-bold underline decoration-pink-500">
        Languages I Know
      </h1>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="/python.png"
                  alt="python img"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Python
                </h2>
                <p className="leading-relaxed">
                  I have python and{" "}
                  <span className="underline decoration-indigo-400">
                    MongoDb
                  </span>{" "}
                  manager to construct a python chatbot
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                <img src="/java.png" alt="java img" width={32} height={32} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  Java
                </h2>
                <p className="leading-relaxed">
                  Using java and android studio, I created an android
                  application.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                <img
                  src="/c.png"
                  alt="C-Programming lang image"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  C
                </h2>
                <p className="leading-relaxed">
                  Used c to create a simple calculator.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                <img src="/c++.png" alt="c ++ image" width={32} height={32} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">
                  C++
                </h2>
                <p className="leading-relaxed">
                  Used c++ to create a simple terminal game.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                <img src="/ar.webp" alt="arrow" width={32} height={32} />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-lg text-white mb-1 tracking-wider">
                  Frameworks
                </h2>
                <p className="leading-relaxed">
                  {
                    "React and vue are frameworks that I am familiar with. Working with Next js, on the other hand, is a pleasure for me. I used next js to make my portfolio website."
                  }
                </p>
              </div>
            </div>
          </div>
          <img
            className="mx-auto lg:w-3/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
            src="/code.gif"
            alt="step"
            width={260}
            height={480}
          />
        </div>
      </div>
    </section>
  );
}
