import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div className="bg-[#2a2f35]">
      <div className="h-52 flex">
        <div className="w-1/2 md:w-3/5 h-full flex flex-col">
          <div className="h-1/2 w-full p-5">
            <h1 className="text-xl text-[#ffff] font-ubuntu font-medium pb-2">
              Email
            </h1>
            <h1 className="text-xs text-[#C0C0C0]">*****@gmail.com</h1>
          </div>
          <div className="h-1/2 w-full p-5">
            <h1 className="text-xl text-[#ffff] font-ubuntu font-medium pb-2">
              Location
            </h1>
            <h1 className="text-xs text-[#C0C0C0]">India</h1>
          </div>
        </div>
        <div className="w-1/2 md:w-2/5 h-full p-5 flex flex-col">
          <h1 className="text-xl text-[#ffff] font-ubuntu font-medium pb-1">
            Socials
          </h1>
          <Link href="/">
            <h1 className="cursor-pointer text-xs text-[#C0C0C0] py-1">
              WhatsApp
            </h1>
          </Link>
          <Link href="/">
            <h1 className="cursor-pointer text-xs text-[#C0C0C0] py-1">
              Spotify
            </h1>
          </Link>
        </div>
      </div>
      <div className="h-10 w-full flex text-center items-center justify-center">
        <h1 className="text-md text-[#C0C0C0] font-ubuntu p-2">
          ©Arush 2022
        </h1>
      </div>
    </div>
  );
};

export default Footer;
