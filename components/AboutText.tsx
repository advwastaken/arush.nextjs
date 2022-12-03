import type { NextPage } from "next";
import moment from "moment";

const AboutText: NextPage = () => {
  return (
    <div className="w-full p-10 md:px-52 rounded">
      <h1 className="text-lg font-ubuntu text-[#ccc]">
        <span className="text-white bg-gradient-to-r from-[#1869df] to-[#8151e1] py-0.8 px-1 rounded">
        awkward silence
        </span>
        &ensp;moment.
      </h1>
      <h1 className="text-[#F2F3F4] pt-10 text-md opacity-40">
        Mereko kuch pata hi nahi hai 💀 <br/>
        bata dena baad mein
      </h1>
    </div>
  );
};

export default AboutText;
