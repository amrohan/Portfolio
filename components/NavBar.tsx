import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cn from "clsx";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  // toggling audio
  function playAudio(url) {
    new Audio(url).play();
  }

  return (
    // make navbar Glassmorphism
    <nav className=" max-w-5xl realative px-2 sm:px-4 py-2.5 fixed h-18 w-full z-40 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-95 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Slide top>
          <Link
            href="/"
            id="header"
            className="ml-2 md:ml-0 flex items-center font-ubuntu font-semibold text-2xl text-yellow-500"
          >
            Rohan
          </Link>
        </Slide>
        <div className="flex md:order-2 gap-3 md:gap-4">
          <div className="mt-[3px]">
            <Slide top>
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="invisible md:visible mt-1 md:mt-0 w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-800 flex items-center justify-center transition-all"
                onClick={() => {
                  setTheme(resolvedTheme === "dark" ? "light" : "dark");
                  playAudio("toggle.mp3");
                }}
              >
                {mounted && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800 dark:text-gray-200"
                  >
                    {resolvedTheme === "dark" ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    )}
                  </svg>
                )}
              </button>
            </Slide>
          </div>

          {/* Hamburger Menu */}
          <div
            onClick={() => {
              {
                opened ? setOpened(false) : setOpened(true);

                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
              }
            }}
            className={cn(`tham tham-e-squeeze tham-w-6 mt-3 md:hidden`, {
              "tham-active": opened,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner dark:bg-gray-100 ml-[-20px]" />
            </div>
          </div>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <Slide down cascade>
            <ul
              className="gap-y-6 ml-2 md:ml-0 md:gap-y-2  grid place-content-start mt-24 p-4 rounded-lg text-left w-full h-screen md:items-center md:flex md:h-full md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 "
              onClick={() => {
                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
                setOpened(false);
              }}
            >
              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2 ">
                <Link
                  href="/"
                  className="text-xl md:text-base font-semibold dark:text-slate-50 hover:text-2xl ease-in-out duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link
                  href="/about"
                  className="text-xl md:text-base font-semibold dark:text-slate-100 ease-in-out duration-300 hover:text-2xl"
                >
                  About
                </Link>
              </li>
              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link
                  href="/blog"
                  className="text-xl md:text-base font-semibold dark:text-slate-100 ease-in-out duration-300"
                >
                  Blog
                </Link>
              </li>
              <li className="md:hidden">
                <div className="flex mt-6 gap-5">
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="mt-1 md:mt-0 w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-800 flex items-center justify-center transition-all"
                    onClick={() => {
                      setTheme(resolvedTheme === "dark" ? "light" : "dark");
                      playAudio("toggle.mp3");
                    }}
                  >
                    {mounted && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-slate-100"
                      >
                        {resolvedTheme === "dark" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        )}
                      </svg>
                    )}
                  </button>
                </div>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </nav>
  );
}
