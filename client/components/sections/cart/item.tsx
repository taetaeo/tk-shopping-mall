import React, { FC, SyntheticEvent } from "react";
import Link from "next/link";
import styled from "styled-components";
import { getClient, graphQLFetcher, QueryKeys } from "../../../service";
import { useMutation } from "react-query";
import { DELETE_CART, UPDATE_CART } from "../../../graphql/cart";

import { AmountInfo, ItemInfo, Left, PriceInfo, Right } from "./template";
import { Button } from "../../base";
import { ROUTE_PATH } from "../../../utils/constants";
import { stringToNumber } from "../../../utils/helpers";
import { Cart } from "../../../types";

const { ROUTE_PATH_DETAIL } = ROUTE_PATH;
const ORDER_PRICE = 2500;

const CartItem = ({
  id,
  amount,
  product: {
    id: productId,
    image_url,
    origin_price,
    discount,
    name,
    brand,
    createdAt,
    category: { category_lg, category_md, category_sm },
  },
}: Cart): JSX.Element => {
  const queryClients = getClient();

  const discountedPrice = origin_price - origin_price * (discount / 100);
  // Mutate Fn = 1. Update / 2. delete
  // 1.Update - 1) Mutate Fn
  const updateMutationFn = ({ id, amount }: Omit<Cart, "product">) =>
    graphQLFetcher(UPDATE_CART, { id, amount });
  // 2.Delete - 2) Mutate Fn
  const deleteMutationFn = ({ id }: Omit<Cart, "amount" | "product">) =>
    graphQLFetcher(DELETE_CART, { id });

  // Mutate Options 1. Update / 2. delete
  // 1. Update - 1) onMutation Options
  const updateOnMutateOptions = async ({ id, amount }) => {
    await queryClients.cancelQueries(QueryKeys.cart);
    const { cart: prevCart } = queryClients.getQueryData<{ cart: Cart[] }>(
      QueryKeys.cart
    ) || { cart: [] };
    if (!prevCart) return null;

    const targetIndex = prevCart.findIndex((cartItem) => cartItem.id === id);
    if (targetIndex === undefined || targetIndex < 0) return prevCart;

    const copyCart = [...prevCart];
    copyCart.splice(targetIndex, 1, { ...copyCart[targetIndex], amount });
    queryClients.setQueryData(QueryKeys.cart, { cart: copyCart });
    return prevCart;
  };
  // 1. Update - 3) onError Options
  const updateOnSuccessOptions = ({ updateCart }, variables, ctx) => {
    // (data, variables, context) => Promise
    const { cart: prevCart } = queryClients.getQueryData<{ cart: Cart[] }>(
      QueryKeys.cart
    ) || { cart: [] };
    const targetIndex = prevCart.findIndex(
      (cartItem) => cartItem.id === updateCart.id
    );

    if (!prevCart || targetIndex === undefined || targetIndex < 0) return;

    const copyCart = [...prevCart];
    copyCart.splice(targetIndex, 1, updateCart);
    queryClients.setQueryData(QueryKeys.cart, { cart: copyCart });
  };
  // 3) onMutation Options - Update
  const updateOnErrorOptions = (error, variables, context) => {
    // (err, variables, context) => Promise
    if (context) {
      // error가 발생하면 onMutate에서 반환된 값으로 다시 롤백
      queryClients.setQueryData(QueryKeys.cart, context);
    }
  };
  // 2. Delete - 1) onSuccess Options
  const deleteOnSuccessOptions = () => {
    queryClients.invalidateQueries(QueryKeys.cart, {
      exact: false,
      refetchInactive: true,
    });
  };

  // useMutation
  const { mutate: updateCart } = useMutation(updateMutationFn, {
    onMutate: updateOnMutateOptions,
    onSuccess: updateOnSuccessOptions,
    onError: updateOnErrorOptions,
  });
  const { mutate: deleteCart } = useMutation(deleteMutationFn, {
    onSuccess: deleteOnSuccessOptions,
  });

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value;
    const amount = stringToNumber(value) || 0;
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = (e: SyntheticEvent) => {
    e.preventDefault();
    deleteCart({ id });
  };

  return (
    <Item>
      <ItemInfo>
        <Left>
          <CheckBox
            type="checkbox"
            className="cart-item__checkbox"
            name="select-item"
          />
          <Link href={`${ROUTE_PATH_DETAIL}/${productId}`} legacyBehavior>
            <a>
              <Image src={image_url} />
            </a>
          </Link>
        </Left>
        <Right>
          <Link href={`${ROUTE_PATH_DETAIL}/${productId}`} legacyBehavior>
            <a>
              <BrandName>{brand}</BrandName>
            </a>
          </Link>
          <Link href={`${ROUTE_PATH_DETAIL}/${productId}`} legacyBehavior>
            <a>
              <ProductName>{name}</ProductName>
            </a>
          </Link>
          <CategoryName>
            {category_lg} / {category_md} / {category_sm}
          </CategoryName>
          <PriceContainer>
            <OriginPrice>{origin_price}</OriginPrice>
            <DisCount>- {discount} %</DisCount>
            <CalculatedPrice>{discountedPrice}</CalculatedPrice>
          </PriceContainer>
          <ItemInfoColumn>배송비 : {ORDER_PRICE}</ItemInfoColumn>
        </Right>
      </ItemInfo>

      <AmountInfo>
        {!createdAt ? (
          <div>삭제된 상품입니다.</div>
        ) : (
          <UpdateInput
            type="number"
            value={amount}
            min={1}
            onChange={handleUpdateAmount}
          />
        )}
      </AmountInfo>

      <PriceInfo>
        <TotalPrice>{discountedPrice * amount + ORDER_PRICE}</TotalPrice>
      </PriceInfo>

      <DeleteContainer>
        <Button
          disabled={false}
          size={"sm"}
          variant={"default_light"}
          children={"삭제하기"}
          onClick={handleDeleteItem}
        />
      </DeleteContainer>
    </Item>
  );
};

export default CartItem;
const Item = styled.ul`
  width: 1200px;
  height: 100%;
  margin-inline: 1rem;
  display: flex;
  margin: auto;
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  object-fit: contain;
`;
const ItemInfoColumn = styled.li`
  margin-top: 1rem;
  width: 100%;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const PriceContainer = styled.div`
  display: flex;
`;
const BrandName = styled(ItemInfoColumn)`
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
`;
const ProductName = styled(ItemInfoColumn)`
  font-size: 1rem;
  font-weight: 500;
`;
const OriginPrice = styled(ItemInfoColumn)`
  width: 4rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: line-through;
  text-decoration-color: rgb(255, 0, 0);
  text-decoration-style: double;
  text-decoration-thickness: 1px;
  color: rgb(255, 0, 0);
`;
const DisCount = styled(ItemInfoColumn)`
  width: 5rem;
  color: rgb(255, 0, 0);
  font-size: 1.3rem;
  font-weight: 700;
`;
const CalculatedPrice = styled(ItemInfoColumn)`
  width: 2rem;
  font-size: 1.5rem;
`;
const CategoryName = styled(ItemInfoColumn)`
  font-size: 0.6rem;
`;
const CheckBox = styled.input`
  margin: 1rem;
`;

const UpdateInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f2f4f7;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
  border: none;
`;
const TotalPrice = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DeleteContainer = styled.div`
  min-width: 10%;
  padding: 0.5rem;
  border: 1px solid rgb(228, 228, 228);
  display: flex;
  justify-content: center;
  align-items: center;
`;
