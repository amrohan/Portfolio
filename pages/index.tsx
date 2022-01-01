import MetaTags from "../components/MetaTags";
import BlogPostCard from "../components/BlogPostCard";
// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  var homepage = "Homepage";
  return (
    <div className="p-8 w-full h-full pt-28 md:pt-36 dark:bg-gray-950 dark:text-white overflow-hidden">
      {/* Adding Meta tags Here */}
      <MetaTags
        title="Rohan Salunkhe - amrohan personal website"
        description="Rohan Salunkhe's personal website, which includes links to my social media accounts as well as links to my most recent projects, blogs, and posts on GitHub, dev.to, and hashnode."
        image="/web-banner.png"
      />
      <div className=" h-full flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col md:pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 ">
              Rohan Salunkhe
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">Developer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              {
                "It's an honor for me to share my passions, stories, and abilities with you. Below is a sampling of the many things I've accomplished. "
              }
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] mb-8 sm:mb-0 mr-auto">
            <img
              alt="Rohan Salunkhe"
              height={176}
              width={176}
              src="/avatar.jpg"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text34xl tracking-tight mb-6 text-black dark:text-white underline decoration-indigo-500">
          Featured{" "}
          <span className="underline decoration-pink-500">Projects</span>
        </h3>
        <section className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          <BlogPostCard
            title="A Telegram Bot"
            slug="telegram-chat-bot"
            cover_img="http://res.cloudinary.com/amrohan/image/upload/v1640965535/Images/ndqykr9gey99qasjhjwt.jpg"
          />
          <BlogPostCard
            title="A Link Tree Porject"
            slug="a-linktree-alternative"
            cover_img="http://res.cloudinary.com/amrohan/image/upload/v1640527918/Images/hbl8sq97kzzk4bschq1t.jpg"
          />
        </section>
        <Link href="/blog">
          <a className=" h-7 flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all">
            Read all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-8 w-6 ml-2 text-pink-500"
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
