import Image from "next/image";

import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import ImgHeroSection from "../public/lady.png";
import Circle from "./Circle";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-fit w-screen lg:flex">
      <div className="flex flex-col w-screen lg:w-[60%] pl-16 md:pl-20 ">
        <Circle />
        <div className="flex flex-col gap-3 -mt-14 mr-2 sm:mr-0 items-start">
          <h3 className="w-fit ml-16 text-xl md:text-2xl xl:text-3xl text-[#154b9a]">
            Here for you !
          </h3>
          <h2 className="text-xl md:text-3xl  font-semibold leading-normal max-w-96 text-[#0e1f51] self-center pr-2">
            Transforming Ideas Into Intelligent Solutions With AI & Web
            Technology -
          </h2>
          <Link href="/contact" className="ml-20">
            <button className="flex gap-2 items-center text-lg md:text-2xl w-fit mt-4 px-2 py-2 bg-[#154B9A] text-white ring-2 rounded-lg ">
              Let&apos;s talk <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="h-96 lg:w-[60%] flex justify-center mt-10">
        <div className="rounded-full h-72 w-72 md:h-96 md:w-96 bg-[#e8edf5] relative overflow-hidden mt-2">
          <div className="rounded-full h-64 w-64 md:h-80 md:w-80 bg-[#d3dde6] absolute top-8 left-8"></div>
          <div className="rounded-full h-60 w-60 md:h-72 md:w-72 bg-[#c0cee4] absolute top-14 left-14"></div>
          <Image
            src={ImgHeroSection}
            alt="Woman using a laptop to work remotely"
            className="absolute top-10 md:top-20 -left-8 z-50 h-60 md:h-72  mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
