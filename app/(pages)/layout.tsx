// import neccessaries from next
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
