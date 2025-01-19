import React from "react";
import HotelManagement from "../public/hotel_management.png";
import Image from "next/image";

const Project = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10 bg-[#F7F7F7]">
      <div className="flex flex-col gap-2 ">
        <h3 className="text-3xl text-[#154B9A]">Our Project</h3>
        <h2 className="text-4xl text-[#0E1F51]">Latest Work</h2>
      </div>
      <div className="flex gap-10 flex-wrap my-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="h-fit p-4" key={index}>
            <Image src={HotelManagement} height={200} alt="hotel" />
            <h4 className="text-center text-2xl text-[#0E1F51] pt-5">
              Ecommerce
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
