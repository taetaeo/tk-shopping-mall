import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  HEADER_MENU,
  ROUTE_PATH,
  SUB_HEADER_MENU,
  ICONS_NAME,
} from "../../../utils/constants";
import { SIZE, VARIANTS_NAME } from "../../../utils/constants/common";
import { Button, Icons, Logo } from "../../base";
import { Left, LogoMenu, Menu, Right } from "./template";

type MenuItemType = {
  [x: string]: string;
  name: string;
  route: string;
  icon: string;
};

const {
  ROUTE_PATH_HOME,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_CART,
  ROUTE_PATH_SIGN_UP,
  ROUTE_PATH_MY_PAGE,
  ROUTE_PATH_MYPAGE_LIKES,
} = ROUTE_PATH;
const { LOGO_TITLE } = HEADER_MENU;
const { LOGIN, LOGOUT, SIGN_UP, CART, MY_PAGE, LIKES } = SUB_HEADER_MENU;
const { SMALL, MIDDLE, LARGE } = SIZE;
const { DEFAULT } = VARIANTS_NAME;
const { LOGIN_BOX, LIKE_FILL, SHOPPING_BAG, USER } = ICONS_NAME;

const DEFAULT_SIZE = "14";

const Gnb = () => {
  const menuItems: MenuItemType[] = [
    // { name: LOGIN, route: ROUTE_PATH_LOGIN, icon: LOGIN_BOX },
    // { name: SIGN_UP, route: ROUTE_PATH_SIGN_UP, icon: LOGIN_BOX },
    { name: LIKES, route: ROUTE_PATH_MYPAGE_LIKES, icon: LIKE_FILL },
    { name: CART, route: ROUTE_PATH_CART, icon: SHOPPING_BAG },
    // { name: MY_PAGE, route: ROUTE_PATH_MY_PAGE, icon: USER },
  ];

  return (
    <MenuListWrapper>
      <MenuList>
        <Left>
          <LogoMenu>
            <Link href={ROUTE_PATH_HOME} legacyBehavior>
              <a>
                <Logo />
              </a>
            </Link>
          </LogoMenu>
        </Left>
        <Right>
          {menuItems.map(
            ({ name, route, icon }: MenuItemType, index: React.Key) => (
              <Menu key={index}>
                <Link href={route} legacyBehavior>
                  <Anchor>
                    {Icons({ size: DEFAULT_SIZE, name: icon })}
                    <Text>{name}</Text>
                  </Anchor>
                </Link>
              </Menu>
            )
          )}
        </Right>
      </MenuList>
    </MenuListWrapper>
  );
};

export default Gnb;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  width: 100%;
  padding: 0;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem auto;
  padding: 1rem;
`;
const ButtonContainer = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-inline: 0.1rem; */
  button {
    width: 100%;
  }
`;
const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h3`
  font-size: 1.2rem;
`;
