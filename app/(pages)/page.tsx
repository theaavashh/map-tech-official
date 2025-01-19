import Culture from "../../public/culture.jpeg";
import Unity from "../../public/unity.jpeg";

import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Service from "@/components/Services";
// import Testimonial from "@/components/Testinomial";
import React from "react";

const Home = () => {
  console.log(Culture);
  return (
    <div className="mt-5">
      <HeroSection />
      <AboutUs
        img_src={Culture}
        h1="About Us"
        desc="Empowering Innovation, 
Shaping the Future"
        sect="Empowering Innovation, Shaping the Future conveys the idea that the company is not just creating new technology but actively enabling progress and driving change."
      />
      <Service />
      <AboutUs
        img_src={Unity}
        h1="What We Do"
        desc="We Develope Product That 
People Love to Use."
        sect="It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of 
using Lorem Ipsum is that it has a more-or-less normal distribution 
of letters, as opposed, Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"
      />
      {/* 
      <Service/>
      <AboutUs />
      <Testimonial/>
     
      <Project /> */}
      <Contact color="bg-[#0E1F51]" status={false} />
      <Project />
    </div>
  );
};

export default Home;
