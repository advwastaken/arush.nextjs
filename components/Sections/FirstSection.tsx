import type { NextPage } from "next";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const FirstSection: NextPage = () => {
  return (
    <div className="w-80 md:w-96 flex flex-col items-center justify-center text-center text-2xl text-white font-ubuntu h-screen rounded-md bg-gradient-to-r from-[#1869df] to-[#8151e1] hover:scale-105 transition-all">
      <Typewriter
        options={{
          strings: ["Arush", "@Topper"],
          autoStart: true,
          loop: true,
        }}
      />
      <h1 className="text-sm p-2 opacity-90">Student from India 🇮🇳</h1>
      <Link href="/photo_">
        <button className="about-button text-ubuntu">
          <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1">
              <g id="image">
                <path id="Rectangle 188" d="M20 23C20 21.3431 21.3431 20 23 20H37C38.6569 20 40 21.3431 40 23V37C40 38.6569 38.6569 40 37 40H23C21.3431 40 20 38.6569 20 37V23Z" fill="url(#paint0_linear_0_1)" />
                <circle id="Ellipse 133" cx="35" cy="25" r="2" fill="#fff" />
                <path id="Intersect" d="M20 32.5V37C20 38.6569 21.3431 40 23 40H37C37.8479 40 38.6136 39.6483 39.1592 39.0828L28.569 27.5299C27.3418 26.191 25.2157 26.2412 24.0529 27.6365L20 32.5Z" fill="#DEDEDE" />
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="20" y1="30" x2="40" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1869DF" />
                <stop offset="1" stop-color="#8151E1" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default FirstSection;
