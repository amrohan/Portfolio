import React from "react";

export default function MarkdownWrapper({ children }) {
  // Creating this commponent to wrap the markdown content with mention classes
  // Passing Children attribute to the component so it can render the give child into the component
  return (
    <div className="mt-5 mx-auto prose-pre:bg-transparent prose prose-slate prose-img:shadow-2xl prose-video:rounded-2xl  prose-strong:text-yellow-400 prose-img:w-10/12 md:prose-img:w-11/12 prose-img:mx-auto prose-video:mx-auto prose-blockquote:text-cyan-600 lg:prose-l dark:prose-invert prose-a:text-teal-600 hover:prose-a:text-teal-500 prose-img:rounded-2xl">
      {children}
    </div>
  );
}
