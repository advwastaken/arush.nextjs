import type { NextPage } from "next";
import Head from "next/head";
import FirstSection from "../components/Sections/FirstSection";

const Home: NextPage = () => {
  return (
    <div className="flex items-center jusitfy-center pt-16 h-screen w-full">
      <Head>
        <title>Arush</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="w-full h-96 flex flex-col items-center">
        <FirstSection />
      </main>
    </div>
  );
};

export default Home;
