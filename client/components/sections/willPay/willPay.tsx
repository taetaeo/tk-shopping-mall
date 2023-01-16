import { SyntheticEvent } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { checkedCartAtoms } from "../../../recoil";
import { Cart } from "../../../types";

type Props = {
  submitTitle?: string;
  handleSubmit?: (e: SyntheticEvent) => void;
};

const WillPay = ({ submitTitle, handleSubmit }: Props) => {
  const checkedItems = useRecoilValue<Cart[]>(checkedCartAtoms);

  const totalPrice = checkedItems!.reduce(
    (res, { amount, product: { origin_price, createdAt } }) => {
      if (createdAt) res += origin_price * amount;
      return res;
    },
    0
  );
  return (
    <Section className="cart-willpay">
      <SelectTitle>내가 선택한 상품</SelectTitle>
      <Wrapper>
        {checkedItems.map(
          ({
            id,
            amount,
            product: { name, origin_price, createdAt, image_url },
          }) => (
            <Item key={id}>
              <img src={image_url} />
              <h1>{name}</h1>
              <h1>{origin_price}</h1>
              {!createdAt && "품절된 상품입니다."}
            </Item>
          )
        )}
      </Wrapper>
      <div
        style={{
          display: "flex",
          padding: "3rem",
          width: "100%",
          borderTop: "3px solid #000",
        }}
      >
        <TotalPrice>총예상결제액: {totalPrice}</TotalPrice>
        <Button onClick={handleSubmit}>{submitTitle}</Button>
      </div>
    </Section>
  );
};
export default WillPay;

const Section = styled.section`
  margin: 1rem;
  width: 1200px;
  box-sizing: border-box;
  // margin: auto;
`;
const SelectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;
const Wrapper = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 5rem;
  column-gap: 2rem;
  font-size: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: left;
  align-items: center;
  img {
    width: 250px;
  }
  h1 {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0.5rem;
  }
`;

const TotalPrice = styled.h1`
  font-size: 2rem;
  width: 100%;
  padding: 1rem;
`;

const Button = styled.button`
  width: 200px;
  font-size: 1.4rem;
  padding: 16px 20px;
  border-radius: 12px;
  color: #fff;
  background-color: #000;
  box-shadow: 10px 10px 16px 0 rgb(0 0 0 / 30%);
`;
