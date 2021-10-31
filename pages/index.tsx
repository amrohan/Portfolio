import Head from "next/head";
import HomePage from "./components/HomePage";

export default function Home() {
  var homepage = "Homepage";
  return (
    <div className="w-screen h-screen dark:bg-gray-950 dark:text-white">
      <Head>
        <title>Rohan Salunkhe | {homepage} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
