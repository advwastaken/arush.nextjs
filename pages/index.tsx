import type { NextPage } from "next";
import Head from "next/head";
import { Text } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div className="h-[calc(100vh-5vh)] w-full flex flex-col text-center justify-center">
      <Head>
        <title>Arush</title>
        <link
          rel="icon"
          href="https://i.postimg.cc/L8ZJJxM0/1671883685742.png"
        />
      </Head>

      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Arush
      </Text>
      <Text h5>Oridinary High School Topper</Text>
    </div>
  );
};

export default Home;
