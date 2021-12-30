import Head from "next/head";
import Upload from "../components/Upload";

export default function up() {
  return (
    <div className="w-screen h-screen dark:bg-gray-950 dark:text-white">
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Upload />
    </div>
  );
}
