import React from "react";

const HomePage = () => {
  return (
    <div className=" w-screen text-bold pt-40 dark:bg-gray-950 dark:text-white overflow-hidden">
      <div className="flex flex-col justify-center text-center align-center">
        <div className="grid place-items-center mr-auto ml-auto">
          <img
            src="https://avatars.githubusercontent.com/u/73811790?s=120&v=4"
            alt=""
            className=" justify-center text-center alignt-center rounded-full border-4 border-gray-400 p-2 border-opacity-100 "
          />
          <div className="mt-4 mb-5 typo p-10">
            <h1 className=" text-2xl my-4 md:text-4xl typed-out">
              {"Hello, I’m"}
              <span className=" semibold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {" "}
                Rohan Salunkhe
              </span>
            </h1>
            <p className="font-extralight text-lg italic">
              A just curious developer with a passion for learning and building
              <span className="bold text-3xl">.</span>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .typo {
          display: inline-block;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typed-out {
          overflow: hidden;
          border-right: 0.15em solid orange;
          white-space: nowrap;
          width: 0;
          animation: typing 2s steps(60, end) forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
