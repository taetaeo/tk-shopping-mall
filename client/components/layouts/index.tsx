import React, { ReactNode } from "react";
const Layout = ({ children }: ReactNode) => {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
