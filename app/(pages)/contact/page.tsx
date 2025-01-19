import BreadCrumb from "@/components/BreadCrumb";
import Contact from "@/components/Contact";
import React from "react";

const Contacts = () => {
  return (
    <div>
      <BreadCrumb title="Contact" desc="Home/Contact" />
      <Contact color="bg-[#f3f6fa]" status={true} />
    </div>
  );
};

export default Contacts;
