import BreadCrumb from "@/components/BreadCrumb";
import Project from "@/components/Project";
import React from "react";

const Portfolios = () => {
  return (
    <div>
      <BreadCrumb title="Portfolio" desc="Home/Portfolio" />
      <Project />
    </div>
  );
};

export default Portfolios;
