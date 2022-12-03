import { getAuth } from "firebase/auth";
import styled from "styled-components";
import cookies from "js-cookie";
import {
  ICONS_NAME,
  ROUTE_PATH,
  SUB_HEADER_MENU,
} from "../../../utils/constants";
import Gnb from "./gnb";

type UserData = {
  id: string;
  name: string;
  token: any;
  email: string;
};

type Props = {
  userData: UserData;
};

type MenuItemType = {
  [x: string]: string;
  name: string;
  route: string;
  icon: string;
};
const {
  ROUTE_PATH_HOME,
  ROUTE_PATH_AUTH,
  ROUTE_PATH_CART,
  ROUTE_PATH_SIGN_UP,
  ROUTE_PATH_MY_PAGE,
  ROUTE_PATH_MYPAGE_LIKES,
} = ROUTE_PATH;

const { LOGIN, LOGOUT, SIGN_UP, CART, MY_PAGE, LIKES } = SUB_HEADER_MENU;
const { LOGIN_BOX, LIKE_FILL, SHOPPING_BAG, USER } = ICONS_NAME;

const SubHeader = ({ userData }: Props) => {
  const auth = getAuth();
  const cookie = cookies.get("auth");

  const handleLogout = async () => {
    await auth.signOut();
    cookies.remove("auth");
  };
  let menuItems: MenuItemType[] = [];
  if (!userData) {
    menuItems = [
      { name: LOGIN, route: ROUTE_PATH_AUTH, icon: LOGIN_BOX },
      // { name: SIGN_UP, route: ROUTE_PATH_SIGN_UP, icon: LOGIN_BOX },
      { name: LIKES, route: ROUTE_PATH_MYPAGE_LIKES, icon: LIKE_FILL },
      { name: CART, route: ROUTE_PATH_CART, icon: SHOPPING_BAG },
      // { name: MY_PAGE, route: ROUTE_PATH_MY_PAGE, icon: USER },
    ];
  } else {
    menuItems = [
      { name: "Logout", route: ROUTE_PATH_AUTH, icon: LOGIN_BOX },
      // { name: SIGN_UP, route: ROUTE_PATH_SIGN_UP, icon: LOGIN_BOX },
      { name: LIKES, route: ROUTE_PATH_MYPAGE_LIKES, icon: LIKE_FILL },
      { name: CART, route: ROUTE_PATH_CART, icon: SHOPPING_BAG },
      // { name: MY_PAGE, route: ROUTE_PATH_MY_PAGE, icon: USER },
    ];
  }

  return (
    <Wrapper>
      <Gnb menuItems={menuItems} logout={handleLogout} />
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
