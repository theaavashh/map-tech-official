import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div>Layout</div>
      {children}
    </>
  );
};

export default Layout;
