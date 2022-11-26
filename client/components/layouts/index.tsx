import React, { ReactNode } from "react";
import css from "styled-jsx/css";
import { Header } from "../common";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <style jsx>{style}</style>
      </div>
    </>
  );
};

export default Layout;
const style = css`
  .layout {
    width: 100%;
    height: 100%;
  }
`;
