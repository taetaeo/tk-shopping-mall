import React from "react";
import styled from "styled-components";
import {
  ICONS_NAME,
  ROUTE_PATH,
  SUB_HEADER_MENU,
} from "../../../utils/constants";
import Gnb from "./gnb";
import { useUser } from "../../../lib/firebase/useUser";

type Props = {
  userData: {
    id: string;
    name: string;
    token: any;
    email: string;
  };
};

type MenuItemType = {
  [x: string]: string;
  name: string;
  route: string;
  icon: string;
};
const {
  ROUTE_PATH_AUTH,
  ROUTE_PATH_CART,
  ROUTE_PATH_MY_PAGE,
  ROUTE_PATH_MYPAGE_LIKES,
} = ROUTE_PATH;

const { LOGIN, LOGOUT, SIGN_UP, CART, MY_PAGE, LIKES } = SUB_HEADER_MENU;
const { LOGIN_BOX, LIKE_FILL, SHOPPING_BAG, USER } = ICONS_NAME;

const SubHeader = ({ userData }: Props) => {
  const { logout } = useUser();

  let menuItems: MenuItemType[] = [];
  if (userData.id === null) {
    menuItems = [
      { name: LOGIN, route: ROUTE_PATH_AUTH, icon: LOGIN_BOX },
      // { name: LIKES, route: ROUTE_PATH_MYPAGE_LIKES, icon: LIKE_FILL },
      // { name: CART, route: ROUTE_PATH_CART, icon: SHOPPING_BAG },
    ];
  } else {
    menuItems = [
      { name: LOGOUT, route: "/", icon: LOGIN_BOX },
      { name: LIKES, route: ROUTE_PATH_MYPAGE_LIKES, icon: LIKE_FILL },
      { name: CART, route: ROUTE_PATH_CART, icon: SHOPPING_BAG },
      { name: ROUTE_PATH_MY_PAGE, route: ROUTE_PATH_MY_PAGE, icon: USER },
    ];
  }
  console.log(userData);

  return (
    <Wrapper>
      <Gnb menuItems={menuItems} logout={logout} userId={userData?.email} />
    </Wrapper>
  );
};

export default SubHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  z-index: 9;
`;
