import React from "react";
import MetaTags from "../components/MetaTags";
import About from "../components/AboutPage";

export default function about() {
  return (
    <div className="w-screen h-screen dark:bg-gray-950 dark:text-white">
      <MetaTags
        title="About Page | Amrohan"
        description="Rohan salunkhe - amrohan's personal page, which includes information about his education and career as well as his interests."
        image="http://res.cloudinary.com/amrohan/image/upload/v1641026544/Images/e1ffa8bll07ebpal4esa.png"
      />
      <About />
    </div>
  );
}
