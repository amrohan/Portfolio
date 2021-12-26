import Head from "next/head";
import BlogPostCard from "./components/BlogPostCard";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  var homepage = "Homepage";
  return (
    <div className="p-8 md:p-0 w-screen h-full pt-28 md:pt-36 dark:bg-gray-950 dark:text-white overflow-hidden">
      <Head>
        <title>Rohan Salunkhe | {homepage} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <div className=" h-full flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-6">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-800">
              Rohan Salunkhe
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Fullstack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              {
                "It's an honor for me to share my passions, stories, and abilities with you. Below is a sampling of the many things I've accomplished. "
              }
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] mb-8 sm:mb-0 mr-auto">
            <img
              alt="Lee Robinson"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
        <section className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 place-content-center ">
          <BlogPostCard
            title="A Telegram Bot"
            slug="telegram-chat-bot"
            cover_img="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
          <BlogPostCard
            title="A LinkTree Porject"
            slug="a-linktree-alternative"
            cover_img="https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHNvY2lhbCUyMGxpbmt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </section>
        <Link href="/blog">
          <a className="h-6 flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
