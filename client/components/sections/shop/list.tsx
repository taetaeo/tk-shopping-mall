import React, { FC, ReactNode } from "react";
import { Card } from "../../common";

type Props = {
  products: any;
};
const List: FC<Props> = (props): JSX.Element => {
  const { products } = props;
  const productsArray: ReactNode[] = [];
  products?.map((item: any, index: React.Key) => {
    productsArray.push(
      <Card
        key={item.id}
        id={item.id}
        size={"lg"}
        direction={"column"}
        title={item.name}
        image_url={item.image_url}
        discount={item.discount}
        price={item.origin_price}
      />
    );
  });

  return <React.Fragment>{productsArray}</React.Fragment>;
};
export default List;
