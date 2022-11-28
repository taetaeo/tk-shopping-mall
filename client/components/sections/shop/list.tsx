import React, { FC, ReactNode, useEffect, useState } from "react";
import { Card } from "../../common";

type Props = {
  products: any;
};
const List: FC<Props> = ({ products }): JSX.Element => {
  const [newProduct, setProducts] = useState([]);
  const productsArray: ReactNode[] = [];

  useEffect(() => {
    setProducts(products);
  }, [products]);

  newProduct?.map((item: any, index: React.Key) => {
    productsArray.push(
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
    );
  });
  console.log("newProduct", newProduct);

  return <React.Fragment>{productsArray}</React.Fragment>;
};
export default List;
