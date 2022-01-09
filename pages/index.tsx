import MetaTags from "../components/MetaTags";
import Link from "next/link";
import Languages from "../components/Languages";

export default function Home() {
  return (
    <>
      <MetaTags
        title="Rohan Salunkhe - amrohan personal website"
        description="Rohan Salunkhe's personal website, which includes links to my social media accounts as well as links to my most recent projects, blogs, and posts on GitHub, dev.to, and hashnode."
        image="https://res.cloudinary.com/amrohan/image/upload/v1641026544/Images/e1ffa8bll07ebpal4esa.png"
      />
      <section className=" bg-slate-50 dark:bg-gray-950 overflow-hidden ">
        <div className=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className=" mx-auto object-center rounded w-5/6 md:w-8/12"
              alt="hero"
              src="/hero.svg"
              width={300}
              height={300}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium dark:text-white">
              Rohan Salunkhe
              <br className="lg:inline-block" />
              <span className="text-[20px]">A Developer</span>
            </h1>
            <p className="mb-8 leading-relaxed dark:text-white">
              {
                "It's an honor for me to share my passions, stories, and abilities with you. Below is a sampling of the many things I've accomplished."
              }
            </p>
            <div className="flex justify-center">
              <button className="inline-flex dark:text-white border-pink-600 border-2 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <Link href="/blog">
                  <a aria-label="Right Align">Blog</a>
                </Link>
              </button>

              {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <Languages />
    </>
  );
}
