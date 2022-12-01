import React, { ReactNode } from "react";
import styled from "styled-components";
import { CustomPortal } from "..";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  selector?: string;
  onClose: () => void;
};
const CustomModal = (props: Props) => {
  const { children, isOpen, onClose, selector = "#modal-root" } = props;

  const nodeRef = React.useRef(null);

  return (
    <CustomPortal selector={selector}>
      <Overlay>
        <Dim onClick={onClose} />
        <Container>{children}</Container>
      </Overlay>
    </CustomPortal>
  );
};
export default CustomModal;
const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

const Container = styled.div`
  max-width: 456px;
  position: relative;
  width: 100%;
  z-index: 100;
`;
