import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className="text-bold pt-40  dark:bg-gray-950 dark:text-white md:flex md:flex-col md:justify-center md:pt-0 md:h-screen md:w-screen md:text-right">
      <h1 className="text-2xl font-bold text-left md:text-center mb-4 leading-8 ">
        {/* Passing empty string for blank space */}
        <span className="font-semibold text-3xl dark:text-gray-300 md:hidden">
          {"Hello, there 👋"}
        </span>
        <br />
        <span className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-800">
          Home Page is under
        </span>{" "}
        <br className="md:hidden" />
        <span className="font-extrabold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blueGray-900 to-pink-700">
          Development
        </span>
      </h1>
      <div className="text-xl ml-4 md:text-center md:ml-0 text-gray-400">
        <p>
          {"In the meantime, take a look at my"}
          <Link href="/blog">
            <a className="p-2 text-yellow-500 font-mono font-semibold text-2xl hover:text-green-600">
              Blog
            </a>
          </Link>
        </p>
      </div>
    </div>
    // <div className=" w-screen text-bold pt-40 dark:bg-gray-950 dark:text-white overflow-hidden">
    //   <div className="flex flex-col justify-center text-center align-center">
    //     <div className="grid place-items-center mr-auto ml-auto">
    //       {/* <Image
    //         src="/Images/me.png"
    //         alt=""
    //         width={200}
    //         height={190}
    //         className=" justify-center text-center alignt-center rounded-full border-4 border-gray-400 p-2 border-opacity-100 "
    //       /> */}
    //       <div className="mt-4 mb-5 typo p-10">
    //         <h1 className=" text-2xl my-4 md:text-4xl typed-out">
    //           {"Hello, I’m"}
    //           <span className=" semibold text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blueGray-900 to-pink-700">
    //             {" "}
    //             Rohan Salunkhe
    //           </span>
    //         </h1>
    //         <p className="font-extralight text-lg italic ">
    //           A just curious developer with a passion for learning and building
    //           <span className="bold text-3xl">.</span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    //   <style jsx>{`
    //     .typo {
    //       display: inline-block;
    //     }

    //     @keyframes typing {
    //       from {
    //         width: 0;
    //       }
    //       to {
    //         width: 100%;
    //       }
    //     }

    //     .typed-out {
    //       overflow: hidden;
    //       border-right: 0.15em solid orange;
    //       white-space: nowrap;
    //       width: 0;
    //       animation: typing 2s steps(60, end) forwards;
    //     }
    //   `}</style>
    // </div>
  );
};

export default HomePage;
