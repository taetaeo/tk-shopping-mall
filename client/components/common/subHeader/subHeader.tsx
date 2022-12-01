import styled from "styled-components";
import Gnb from "./gnb";

const SubHeader = () => {
  return (
    <Wrapper>
      <Gnb />
    </Wrapper>
  );
};

export default SubHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  z-index: 9;
`;
