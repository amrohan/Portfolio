import React from "react";
import { useState } from "react";

function Upload() {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInout = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInout.files) {
      formData.append("file", file);
    }

    // Upload the file to the cloudinary server
    formData.append("upload_preset", "Images");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/amrohan/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => response.json());

    setImageSrc(data.secure_url);
    setUploadData(data.url);

    console.log("data", data);
  }
  return (
    <div className="w-screen text-bold pt-32 dark:bg-gray-950 dark:text-white overflow-hidden">
      <div className="grid place-items-center mr-auto ml-auto">
        <main className="prose prose-slate">
          <div className="text-centerleading-10">
            <h1
              id="up"
              className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-800"
            >
              Upload Images Here
            </h1>
          </div>

          <form
            className="mt-8 bg-gray-940 w-auto "
            method="post"
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          >
            <div className="grid place-items-center w-full">
              <input className="hover:text-2xl" type="file" name="file" />
              <img src={imageSrc} alt="Next-Image" className="pt-6" />
            </div>

            {imageSrc && !uploadData && (
              <div className="text-center pt-10 pb-16">
                <button className="bg-blue-400 rounded-full h-9 w-28">
                  Upload Files
                </button>
              </div>
            )}

            {uploadData && (
              <div className="max-w-md mt-10 ">
                <code className="w-auto text-center content-center flex flex-col justify-center">
                  <span className="text-xl">
                    <span className="font-extrabold text-2xl text-gray-300">
                      Url 👇
                    </span>
                  </span>

                  <pre className="text-blue-300 md:w-full">
                    {JSON.stringify(uploadData, null, 2)}
                  </pre>
                  {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    <a href={uploadData} className="dark:text-white">
                      Check Image
                    </a>
                  </button> */}
                </code>
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}

export default Upload;
