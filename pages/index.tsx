import MetaTags from "../components/MetaTags";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gray-950 flex flex-col justify-center content-center">
      <MetaTags
        title="Rohan Salunkhe - amrohan personal website"
        description="Rohan Salunkhe's personal website, which includes links to my social media accounts as well as links to my most recent projects, blogs, and posts on GitHub, dev.to, and hashnode."
        image="https://res.cloudinary.com/amrohan/image/upload/v1641026544/Images/e1ffa8bll07ebpal4esa.png"
      />
      <section className=" bg-slate-50 dark:bg-gray-950 flex">
        <div className=" mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          <div className="md:mb-0 mb-10">
            <Image
              className=" mx-auto object-center rounded"
              alt="hero"
              src="/hero.svg"
              width="300"
              height="400"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRowCAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBOAAAAcAcAnQEqggCCAD7tdrhWKaclI6BoATAdiWlu4XVAADuh1VJsmIdVSbJiHVUmyYh1VJsmIdVSbJiHVUmyYh1VJsmIMAAA/v7oUgAAAAAA"
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
              <Link href="/blog">
                <button className="inline-flex dark:text-white border-pink-600 border-2 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  <a aria-label="Right Align">Blog</a>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
