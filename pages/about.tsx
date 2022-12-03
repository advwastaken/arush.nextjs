import type { NextPage } from "next";
import Head from "next/head";
import AboutText from "../components/AboutText";

const about: NextPage = () => {
  return (
    <div className="h-screen pt-32 py-16 flex flex-col items-center justify-center text-center">
      <Head>
        <title>Arush - About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className="text-3xl font-ubuntu bg-clip-text text-transparent bg-gradient-to-r from-[#1869df] to-[#8151e1]">
        About me
      </h1>
      <AboutText />
    </div>
  );
};

export default about;
