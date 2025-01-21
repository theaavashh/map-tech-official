import Culture from "../../public/culture.jpeg";
import Unity from "../../public/unity.jpeg";

import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Planning from "@/components/Planning";
import Project from "@/components/Project";
import Service from "@/components/Services";
import Technology from "@/components/Technology";
// import Testimonial from "@/components/Testinomial";
import React from "react";

const Home = () => {
  console.log(Culture);
  return (
    <div className="mt-5">
      <HeroSection />
      <AboutUs
        img_src={Culture}
        h1="Transforming Ideas Into Intelligent Solutions"
        desc="Who We Are"
        sect="At M.A.P Tech Pvt. Ltd., we are pioneers in crafting innovative software solutions that drive businesses forward. With expertise in AI technologies and web development, we specialize in turning complex challenges into seamless, scalable, and efficient digital solutions."
        subSect="Founded on the principles of innovation and collaboration, we take pride in working closely with our clients to understand their unique needs and provide tailored solutions that deliver measurable results."
        isAboutUs={true}
      />
      <Service />
      <AboutUs
        img_src={Unity}
        h1="What We Do"
        desc="We design innovative products that users adore."
        sect="We design innovative products that users adore, with a strong focus on website development that delivers exceptional user experiences. Our team combines creativity with cutting-edge technologies to craft visually appealing, responsive websites tailored to your business needs. From intuitive user interfaces to seamless functionality, we ensure that every digital product we build is designed to engage, inspire, and drive lasting connections with your audience."
        isAboutUs={false}
      />
      <Planning />
      <Technology />
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
