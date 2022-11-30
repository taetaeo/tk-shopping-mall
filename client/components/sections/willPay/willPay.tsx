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
      <Wrapper>
        {checkedItems.map(
          ({ id, amount, product: { name, origin_price, createdAt } }) => (
            <Item key={id}>
              <h1>{origin_price}</h1>
              {!createdAt && "품절된 상품입니다."}
            </Item>
          )
        )}
      </Wrapper>
      <TotalPrice>총예상결제액: {totalPrice}</TotalPrice>
      <Button onClick={handleSubmit}>{submitTitle}</Button>
    </Section>
  );
};
export default WillPay;

const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: auto;
`;

const Wrapper = styled.ul`
  border: 1px solid #000;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
`;

const TotalPrice = styled.h1``;

const Button = styled.button``;
