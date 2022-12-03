import type { NextPage } from "next";
import Head from "next/head";

const PhotoPage: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Arush - Photo</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <div className="pt-20 h-screen w-full flex items-center justify-center">
                <div className="overflow-hidden	photo_ shadow-2xl w-72 h-3/6 rounded-xl">
                    <div className="photo_overlay w-full rounded-xl flex items-end justify-end">
                        <h1 className="name text-white p-4 text-xl font-ubuntu">Arush</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage;
