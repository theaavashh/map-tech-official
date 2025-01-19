import Image from "next/image";

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import ImgHeroSection from "../public/lady.png";
import Circle from "./Circle";

const HeroSection = () => {
  return (
    <div className="h-fit w-screen lg:flex">
      <div className="flex flex-col items-center lg:w-[40%] pl-20 lg:ml-40 ">
        <Circle />
        <div className="flex flex-col gap-3 -mt-14 ">
          <h3 className="md:text-2xl text-lg text-[#154b9a]">We are Here</h3>
          <h2 className="text-xl md:text-3xl  font-semibold max-w-96 leading-normal text-[#0e1f51]">
            Unlocking Potential through AI and Web Technologies
          </h2>
          <button className="flex gap-4 items-center text-sm md:text-2xl w-fit mt-4 px-2 py-2 bg-[#154B9A] text-white ring-2 rounded-lg">
            View More <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      <div className="h-96 lg:w-[60%] flex justify-center mt-10">
        <div className="rounded-full h-96 w-96 bg-[#e8edf5] relative overflow-hidden mt-2">
          <div className="rounded-full h-80 w-80 bg-[#d3dde6] absolute top-8 left-8"></div>
          <div className="rounded-full h-72 w-72 bg-[#c0cee4] absolute top-14 left-14"></div>
          <Image
            src={ImgHeroSection}
            alt="Woman using a laptop to work remotely"
            className="absolute top-20 -left-8 z-50 h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
