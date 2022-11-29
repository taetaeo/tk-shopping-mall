import React, { FC, MouseEvent, MouseEventHandler } from "react";
import Link from "next/link";
import styled from "styled-components";
import { SIZE } from "../../../utils/constants/common";
import { Select, Button } from "../../base/";
import { MEN_FILTER, WOMEN_FILTER, SELECT_LIST } from "./Items";

const { X_SMALL, SMALL } = SIZE;

type FilerType = {
  list?: string | string[] | undefined;
  category?: string | string[] | undefined;
  detail?: string | string[] | undefined;
};
const Filter: FC<FilerType> = (props: FilerType): JSX.Element => {
  const { list, category, detail } = props;
  console.log({ category });
  const menOptions = MEN_FILTER.find(
    (filterItem) => category === filterItem.name
  );
  const womenOptions = WOMEN_FILTER.find(
    (filterItem) => category === filterItem.name
  );
  const filterOptions = list === "m" ? menOptions : womenOptions;
  console.log("filterOptions", filterOptions);
  const handleSelect = (e: any) => {
    // console.log(e.target.value);
  };
  return (
    <Wrapper>
      <ItemsContainer>
        {filterOptions?.item.map((item, index) => (
          <Item key={index}>
            <Link href={item.url} legacyBehavior>
              <a>
                <Button
                  disabled={false}
                  size={X_SMALL}
                  variant={"default"}
                  children={item.name}
                />
              </a>
            </Link>
          </Item>
        ))}
      </ItemsContainer>
      <SelectContainer>
        <Select
          children={SELECT_LIST}
          disabled={false}
          size={SMALL}
          border={"default"}
          onClick={handleSelect}
        />
      </SelectContainer>
    </Wrapper>
  );
};
export default Filter;

const Wrapper = styled.div`
  grid-area: "filter";
  max-width: 100%;
  display: flex;
  box-sizing: border-box;
  padding-bottom: 0;
  justify-content: space-between;
`;
const ItemsContainer = styled.ul`
  width: 90%;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  align-items: center;
  border: thin solid #eaeaea;
  margin: 0 auto;
`;
const SelectContainer = styled.div`
  width: 10%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: thin solid #eaeaea;
  margin: 0 auto;
`;
const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
`;
const ButtonContainer = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
