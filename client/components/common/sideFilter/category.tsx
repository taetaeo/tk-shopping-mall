import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  SIDE_CATEGORY_MEN,
  SIDE_CATEGORY_WOMEN,
  SIZE,
  VARIANTS_NAME,
} from "../../../utils/constants";
import { menItems, womenItems, myPageItems } from "./items";
import { Button } from "../../base";

const { SMALL } = SIZE;
const { DEFAULT_LIGHT } = VARIANTS_NAME;
const { M_TITLE } = SIDE_CATEGORY_MEN;
const { W_TITLE } = SIDE_CATEGORY_WOMEN;
let genderCode, productsCode;
type menItems = {
  name: string;
  route: string;
  get?: string;
};
type womenItems = {
  name: string;
  route: string;
  get?: string | any;
};
type ListOutFn = womenItems[] | menItems[] | null;

type Props = {
  pathName: string | string[] | undefined;
};
const Category = (props: Props) => {
  const { pathName } = props;
  let data: any;
  const title = pathName === "m" ? M_TITLE : pathName === "w" ? W_TITLE : null;

  const ListOutFn = (pathname: string | string[] | undefined): ListOutFn => {
    if (pathname === "m") return menItems;
    if (pathname === "w") return womenItems;
    if (pathname === "mypage") return myPageItems;
    else return null;
  };

  const handleGetData = async (get: string) => {
    // 여기서 인수인 get에 따라서, 다르게 데이터를 패칭하도록 한다.
    // 그렇다면, 페이지의 serverSideProps는 어떻게?
    [genderCode, productsCode] = String(get).split("_");
    const codeOptions = genderCode === "m" ? "men" : "women";
    const allCondition = productsCode === "all";
    const newCondition = productsCode === "new";
    const elseCondition = !allCondition && !newCondition;
  };

  return (
    <CategoryList>
      <CategoryTitle>{title}</CategoryTitle>
      {ListOutFn(pathName)?.map(
        (item: menItems | womenItems, index: React.Key) => (
          <ListItem key={index}>
            <Link href={item.route} legacyBehavior>
              <a>
                <Button
                  disabled={false}
                  size={SMALL}
                  variant={DEFAULT_LIGHT}
                  children={item.name}
                  onClick={() => handleGetData(item.get)}
                />
              </a>
            </Link>
          </ListItem>
        )
      )}
    </CategoryList>
  );
};

export default Category;

const CategoryList = styled.ul`
  box-sizing: border-box;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;
const CategoryTitle = styled.h3`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  :after {
    content: "";
    display: block;
    width: 80%;
    border-bottom: 5px solid rgb(0, 0, 0);
    margin-top: 1rem;
  }
`;
const ListItem = styled.li`
  color: #5d5d5d;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
`;
