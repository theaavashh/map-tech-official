"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

import Logo from "../public/logo.png";

const Navbar = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const mobileView = () => {
    document.body.style.overflow = "hidden";
    setMobile(true);
  };

  const resetToDefault = () => {
    document.body.style.overflow = "auto";
    setMobile(false);
  };
  return (
    <header>
      <div
        className={`${isMobile ? "block" : "hidden"} bg-[#0e1f51] text-white h-screen flex flex-col justify-center items-center text-2xl gap-3`}
      >
        <IoIosCloseCircle onClick={resetToDefault} />
        <ul className="flex flex-col gap-4">
          <Link href="/">
            <li onClick={resetToDefault}>Home</li>
          </Link>
          <Link href="/about">
            <li onClick={resetToDefault}>About</li>
          </Link>
          <Link href="/service">
            <li onClick={resetToDefault}>Our Services</li>
          </Link>
          <Link href="/portfolio">
            <li onClick={resetToDefault}>Portfolio</li>
          </Link>
          <Link href="/contact">
            <li onClick={resetToDefault}>Contact</li>
          </Link>
        </ul>
      </div>
      <nav className="grid grid-cols-12">
        <Link href={"/"} className="col-span-6 ml-10 ">
          <Image src={Logo} alt="Logo" height={150} />
        </Link>
        <GiHamburgerMenu
          onClick={mobileView}
          className="col-span-6 lg:hidden text-3xl mt-10 mr-8 justify-self-end"
        />
        <ul className="hidden lg:flex justify-center items-center gap-16 font-semibold tracking-wide col-span-6 h-12 mt-8 text-[#0E1F51] text-2xl ">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/service">
            <li>Our Services</li>
          </Link>
          <Link href="/portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
