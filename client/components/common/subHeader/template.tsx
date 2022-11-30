import styled from "styled-components";

export const Left = styled.div``;

export const Right = styled.div`
  display: flex;
`;

export const LogoMenu = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #464ea3;
`;
export const Menu = styled.li`
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  button {
    justify-content: center;
    align-items: center;
  }
  h1 {
    justify-content: center;
    align-items: center;
  }
`;
