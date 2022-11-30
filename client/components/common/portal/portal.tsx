import React from "react";
import { createPortal } from "react-dom";

type Props = {
  children: any;
  selector?: string;
};

const CustomPortal = ({ children, selector }: Props) => {
  const rootElement = selector && document.querySelector(selector);

  return (
    <React.Fragment>
      {rootElement ? createPortal(children, rootElement) : children}
    </React.Fragment>
  );
};

export default CustomPortal;

const ModalPortal = ({ children }: { children: any }) => {
  return createPortal(children, document.getElementById("modal")!);
};
