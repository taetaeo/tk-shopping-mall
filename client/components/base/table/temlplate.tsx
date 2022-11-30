import styled from "styled-components";

export const StyledTable = styled.div`
  padding: 1rem;
  background: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledTableRow = styled.div``;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 10rem;
  width: 10rem;
  color: ${({ theme }) => theme.gray};
  background: #c3c7d926;
  font-weight: 600;
  padding: 1rem;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.8rem;
    flex: 1 1 37%;
  }
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex: 1;
  word-break: keep-all;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0.8rem;
    flex: 1 1 63%;
  }
`;
