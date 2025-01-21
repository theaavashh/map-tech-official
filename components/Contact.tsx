import React from "react";

import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const contact = [
  {
    icons: <IoCallOutline className="text-3xl" />,
    title: "Call Anytime",
    desc: "+9779745673009",
  },
  {
    icons: <CiMail className="text-3xl" />,
    title: "Send Mail",
    desc: "info@maptechnepal.com",
  },
  {
    icons: <CiLocationOn className="text-3xl" />,
    title: "Visit Us",
    desc: "Purano Thimi, Bhaktapur, Nepal",
  },
];

const Contact = ({
  color,
  status,
}: {
  color?: string;
  font?: string;
  status: boolean;
}) => {
  console.log(status);
  return (
    <div
      className={`${color} py-12 pb-32 text-white flex flex-col items-center justify-center`}
    >
      <h3
        className={`${status ? "text-[#154B9A]" : "text-[#B2D1FF]"} text-lg md:text-2xl pb-2 md:pb-3`}
      >
        Get in Touch
      </h3>
      <h2
        className={`${status ? "text-[#0E1F51]" : "text-white"} text-xl md:text-3xl`}
      >
        Hey! Let&apos;s Talk
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-screen mt-10 ">
        <form className="flex flex-col items-center gap-5 w-80 sm:w-96 md:w-[800px] bg-white p-5 text-black rounded-lg mx-9">
          <input
            type="text"
            placeholder="Name"
            className="text-xs md:text-lg w-full h-10  px-10 text-black rounded-md outline-none border-gray-300 border-2 placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-xs md:text-lg h-10 w-full px-10 rounded-md outline-none border-gray-300 border-2 placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-xs md:text-lg h-10 w-full px-10 rounded-md outline-none border-gray-300 border-2 placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="text-xs md:text-lg h-10 w-full px-10 rounded-md outline-none border-gray-300 border-2 placeholder:text-black"
          />
          <button className=" bg-[#0E1F51] text-white max-w-32 p-2 rounded-lg text-xs md:text-lg ">
            Send Now
          </button>
        </form>
        <div className="flex flex-col gap-5 bg-white text-black w-96 justify-center items-center rounded-lg py-10 ">
          {contact.map(({ icons, title, desc }, index) => (
            <div className="flex gap-5" key={index}>
              {icons}
              <div>
                <h3 className="text-xs md:text-xl">{title}</h3>
                <h4 className="text-xs md:text-lg">{desc}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
