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
    const reader: any = new FileReader();

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
    const fileInout: any = Array.from(form.elements).find(
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

  function copyData() {
    navigator.clipboard.writeText(uploadData);
    document.getElementById("copyBtn").innerText = "Copied!";
  }
  return (
    <div className="w-full text-bold pt-32 dark:bg-gray-950 dark:text-white overflow-hidden">
      <div className="grid place-items-center mx-auto">
        <main className="prose prose-slate">
          <div className="text-centerleading-10">
            <h1 id="up" className="font-extrabold text-pink-800">
              Upload Images
            </h1>
            <p className="text-lg dark:text-white">
              Here you can upload your images and share a link with anyone,
              anywhere.
            </p>
          </div>

          <form
            className="mt-8 bg-gray-940 w-auto "
            method="post"
            onChange={handleOnChange}
            onSubmit={handleOnSubmit}
          >
            <div className="grid place-items-center w-full">
              <input className="dark:text-white" type="file" name="file" />
              <img src={imageSrc} alt="Upload your images" className="pt-6" />
            </div>

            {imageSrc && !uploadData && (
              <div className="text-center pt-10 pb-16">
                <button className="bg-blue-400 rounded-full h-9 w-28">
                  Upload Files
                </button>
              </div>
            )}

            {uploadData && (
              <div className="w-full mt-5 text-center">
                <button
                  onClick={copyData}
                  className=" grid place-items-center grid-cols-2 justify-center bg-blue-500 hover:bg-indigo-800 dark:text-white font-bold py-2 px-4 mx-auto rounded"
                >
                  <span id="copyBtn">Copy Url</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-center w-full"
                  >
                    <path d="M7 16h10v1h-10v-1zm0-1h10v-1h-10v1zm15-13v22h-20v-22h3c1.229 0 2.18-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1s1-.448 1-1-.448-1-1-1-1 .448-1 1zm9 1h-4l-2 2h-3.898l-2.102-2h-4v18h16v-18zm-13 9h10v-1h-10v1zm0-2h10v-1h-10v1z" />
                  </svg>
                </button>
              </div>
            )}
          </form>
        </main>
      </div>
    </div>
  );
}

export default Upload;
