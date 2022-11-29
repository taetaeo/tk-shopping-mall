import React, { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { ICONS_NAME } from "../../../utils/constants";
import { Button, Select, Icons } from "../../base";
import { Category, Product } from "../../../types";
import { graphQLFetcher } from "../../../service";

export type size = "default" | "sm" | "md" | "lg" | "xs";
export type border =
  | "default"
  | "black_thin"
  | "black_thick"
  | "grey_thin"
  | "grey_thick";
export type direction = "column" | "row";
export type variant =
  | "success"
  | "error"
  | "warning"
  | "default"
  | "default_light";

const { LIKE_EMPTY } = ICONS_NAME;

type ButtonItemsType = {
  name: string;
  size: size;
  variant: variant;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

type LIST_TYPE = {
  value: string;
};

type SelectItemsType = {
  children: LIST_TYPE[] | ReactNode;
  disabled: boolean;
  size: size;
  border: border;
};

type Props = {
  id: string;
  brand: string;
  name: string;
  image_url: string;
  discount: number;
  origin_price: number;
  category: Category;
};

const InfoBox: FC<Props> = (props: Props): JSX.Element => {
  const { id, brand, name, image_url, origin_price, discount, category } =
    props;
  const router = useRouter();
  // const mutationFn = (id: string) => graphQLFetcher(ADD_CART, { id });
  // const { mutate: addCart } = useMutation(mutationFn);

  const handleOrder = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    confirm("선택하신 상품을 바로 주문하시겠습니까");
    router.push("/mypage/orders");
  };

  const handleCart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    confirm("선택하신 상품을 장바구니에 담으시겠습니까");
    router.push("/cart");
  };

  const SIZE_LIST: LIST_TYPE[] = [
    { value: "사이즈1" },
    { value: "사이즈2" },
    { value: "사이즈3" },
    { value: "사이즈4" },
    { value: "사이즈5" },
    { value: "사이즈6" },
    { value: "사이즈7" },
  ];
  const COLOR_LIST: LIST_TYPE[] = [
    { value: "빨강" },
    { value: "초록" },
    { value: "주황" },
    { value: "파랑" },
    { value: "남색" },
    { value: "보라색" },
    { value: "노랑색" },
  ];
  const selectItems: SelectItemsType[] = [
    { children: SIZE_LIST, size: "md", disabled: false, border: "black_thick" },
    {
      children: COLOR_LIST,
      size: "md",
      disabled: false,
      border: "black_thick",
    },
  ];
  const buttonItems: ButtonItemsType[] = [
    {
      name: "장바구니 추가",
      size: "lg",
      variant: "default",
      onClick: handleCart,
    },
    {
      name: "바로 구매 하기",
      size: "lg",
      variant: "error",
      onClick: handleOrder,
    },
  ];

  return (
    <Wrapper>
      <TopInfo>
        <Brand>{brand}</Brand>
        <CategoryBox>
          <Cate>{category.category_lg}</Cate>
          <Cate>{category.category_md}</Cate>
          <Cate>{category.category_sm}</Cate>
        </CategoryBox>
      </TopInfo>
      <div style={{ display: "flex" }}>
        <LeftInfo>
          <Image src={image_url} alt={`상품의 이미지 - ${id}`} />
        </LeftInfo>
        <RightInfo>
          <TitleContainer>
            <Title>{name}</Title>
            <FunctionContainer>
              <Likes>{Icons({ size: "30", name: LIKE_EMPTY })}</Likes>
            </FunctionContainer>
          </TitleContainer>
          <PriceContainer>
            <Price>{origin_price} 원</Price>
            <Discount>{discount}%</Discount>
            <DiscountPrice>
              {origin_price * (discount % 100) || 0} 원
            </DiscountPrice>
          </PriceContainer>
          <OrderPriceContainer>
            <OrderPrice>{`배송비 : 2500 원`}</OrderPrice>
          </OrderPriceContainer>
          <SelectContainer>
            {selectItems.map((item, index) => (
              <Select
                key={index}
                children={item.children}
                disabled={false}
                border={item.border}
                size={"lg"}
              />
            ))}
          </SelectContainer>
          <ButtonContainer>
            {buttonItems.map((item, index) => (
              <Button
                key={index}
                disabled={false}
                size={"lg"}
                variant={item.variant}
                onClick={item.onClick}
                children={item.name}
              />
            ))}
          </ButtonContainer>
        </RightInfo>
      </div>
    </Wrapper>
  );
};

export default InfoBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  width: 50%;
  height: 600px;
  padding: 1.5rem;
`;
const TopInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Brand = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: left;
`;
const CategoryBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Cate = styled.li`
  margin-inline: 1rem;
  font-size: 2rem;
`;
const LeftInfo = styled(Info)``;
const RightInfo = styled(Info)`
  height: 600px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const FunctionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.1rem 0;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #74747b;
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
`;
const OrderPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 1rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaeaea;
`;
const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  select {
    margin-top: 1rem;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: end;
  margin-top: 3rem;
  button {
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 0;
    &:last-child {
      border: none;
      background-color: #000;
      box-shadow: 10px 10px 16px 0 rgb(0 0 0 / 30%);
      :hover {
        color: #fff;
        background-color: #ff7f00;
      }
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
`;
const TitleContainer = styled.div`
  border-top: 2px solid #000;
  display: flex;
`;
const Title = styled.h1`
  width: 100%;
  height: 80px;
  color: #292a32;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Item = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  padding-top: 1rem;
`;
const Likes = styled(Item)``;
const Price = styled(Item)`
  text-decoration: line-through;
  text-decoration-color: rgb(255, 0, 0);
  text-decoration-style: double;
  text-decoration-thickness: 2px;
`;
const Discount = styled(Item)``;
const DiscountPrice = styled(Item)``;
const OrderPrice = styled(Item)``;
