import React from "react";
import Java from "../public/java.png";
import JS from "../public/java-script.png";
import mysql from "../public/postgre.png";
import react from "../public/structure.png";
import node from "../public/node-js.png";
import mongo from "../public/Mongodb-PNG-Picture.webp";
import aws from "../public/aws.webp";
import golang from "../public/square-gopher.webp";

import Image from "next/image";

const Technology = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#F7F7F7]">
      <div className="flex flex-col gap-2 items-center ">
        <h3 className="text-xl md:text-2xl text-[#154B9A] ">
          Technology We Work With
        </h3>
        <h2 className="text-lg md:text-xl text-[#0E1F51] mx-20 mb-8 text-justify">
          At M.A.P Tech, we specialize in leveraging cutting-edge technologies
          to help startups turn their ideas into scalable, high-performance
          solutions. We understand the unique challenges startups face, and we
          provide the expertise and tools necessary to bring your digital vision
          to life.
        </h2>
        <div className="flex gap-10 flex-wrap mx-8">
          <Image src={Java} alt="img" className="h-16 w-20" />
          <Image src={JS} alt="img" className="h-16 w-20" />
          <Image src={mysql} alt="img" className="h-16 w-20" />
          <Image src={react} alt="img" className="h-16 w-20" />
          <Image src={node} alt="img" className="h-16 w-20" />
          <Image src={mongo} alt="img" className="h-16 w-20" />
          <Image src={golang} alt="img" className="h-16 w-20" />
          <Image src={aws} alt="img" className="h-16 w-20" />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Technology;
