import React, { FC } from "react";
import styled from "styled-components";
import { Card } from "../../common";
import { Product } from "../../../types";

type Props = {
  products: { selectedProducts: Product[] }[];
};
const List: FC<Props> = ({ products }): JSX.Element => {
  return (
    <>
      {products?.map((page) =>
        page.selectedProducts?.map((item: Product) => (
          <Card
            key={item.id}
            id={item.id}
            size={"lg"}
            direction={"column"}
            brand={item.brand}
            title={item.name}
            image_url={item.image_url}
            discount={item.discount}
            price={item.origin_price}
          />
        ))
      )}
    </>
  );
};
export default List;
