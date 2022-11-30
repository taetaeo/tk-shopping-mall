import styled from "styled-components";

export const Left = styled.div`
  min-width: 30%;
  display: flex;
`;
export const Right = styled.div`
  min-width: 70%;
  display: flex;
  flex-direction: column;
`;
export const ItemSection = styled.div`
  max-width: 60%;
  min-width: 60%;
  display: flex;
  border-bottom: 2px solid #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const AmountSection = styled.div`
  max-width: 20%;
  min-width: 20%;
  display: flex;
  border-bottom: 2px solid #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const PriceSection = styled.div`
  max-width: 20%;
  min-width: 20%;
  display: flex;
  border-bottom: 2px solid #000;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const ItemInfo = styled(ItemSection)`
  padding: 0.5rem;
  border: 1px solid rgb(228, 228, 228);
`;
export const AmountInfo = styled(AmountSection)`
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(228, 228, 228);
`;
export const PriceInfo = styled(PriceSection)`
  min-width: 10%;
  padding: 0.5rem;
  border: 1px solid rgb(228, 228, 228);
  display: flex;
  justify-content: center;
  align-items: center;
`;
