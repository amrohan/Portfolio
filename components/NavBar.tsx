import React from "react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  // Using UseState to pass true or false to toggle button
  const [show, setShow] = useState(false);
  return (
    <div className="w-fill mx-auto h-5 justify-center fixed inset-3 z-40">
      <header className="p-2 bg-transparent rounded-xl dark:text-gray-100  w-auto">
        <div className="flex justify-end md:justify-center  h-12 mx-auto">
          {/* For DeskTop  */}
          <ul className="items-center hidden space-x-3 md:flex">
            <li className="flex">
              <Link href="/">
                <a
                  title="Link"
                  className="hover:text-blue-400 flex items-center px-4 "
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="flex">
              <Link href="/about">
                <a
                  title="Link"
                  className="hover:text-blue-400 flex items-center px-4 "
                >
                  About
                </a>
              </Link>
            </li>
            <li className="flex">
              <Link href="/blog">
                <a
                  title="Link"
                  className="hover:text-blue-400 flex items-center px-4"
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
          <button
            aria-label="Right Align"
            className="flex justify-end p-3 md:hidden rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              aria-hidden="true"
              onClick={() => setShow((Toggle) => !Toggle)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* For Optimising Mobile Devies */}
        <div
          className="w-full pl-30 text-center"
          style={{ display: show ? "block" : "none" }}
        >
          {/* Adding tooggle here so we can hide navbar once user click on on it
          We are updating setShow  */}
          <ul className="mx-10" onClick={() => setShow((Toggle) => !Toggle)}>
            {/* Home */}
            <li className="p-3 mb-2 rounded-full bg-red-100 hover:text-white hover:bg-pink-300 dark:bg-gray-930 dark:text-white dark:hover:text-black ">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            {/* About  */}
            <li className="p-3 mb-2 rounded-full bg-red-100 hover:text-white hover:bg-pink-300 dark:bg-gray-930 dark:text-white dark:hover:text-dark ">
              <Link href="/about">
                <a className="w-full">About</a>
              </Link>
            </li>

            {/* Project */}
            <li className="p-3 mb-2 rounded-full bg-red-100 hover:text-white hover:bg-pink-300 dark:bg-gray-930 dark:text-white dark:hover:text-dark ">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>

            {/* Github Svg */}
            <div className="flex w-full justify-center p-2  ">
              <li className="px-4">
                <a href="https://github.com/amrohan">
                  <svg
                    className="fill-current hover:text-purple-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>

              {/* Instagram SVG */}
              <li className="px-4">
                <a href="https://www.instagram.com/amrohann">
                  <svg
                    className="fill-current hover:text-pink-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                  </svg>
                </a>
              </li>

              {/* Twitter Svg */}
              <li className="px-4">
                <a href="https://www.twitter.com/rohansalunkhe_">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current hover:text-blue-400"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
