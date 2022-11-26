import Link from "next/link";
import styled from "styled-components";
import { Button } from "../../base";
import {
  HEADER_MENU,
  ROUTE_PATH,
  SIZE,
  VARIANTS_NAME,
} from "../../../utils/constants";
import { useRouter } from "next/router";
import css from "styled-jsx/css";

const {
  ROUTE_PATH_HOME,
  ROUTE_PATH_DRESS,
  ROUTE_PATH_EVENT,
  ROUTE_PATH_QNA,
  ROUTE_PATH_LIST,
  ROUTE_PATH_CATEGORY_LARGE_CODE,
} = ROUTE_PATH;
const { HOME, MEN, WOMEN, DRESS, QNA, EVENT } = HEADER_MENU;
const { SMALL, MIDDLE, LARGE } = SIZE;
const { DEFAULT } = VARIANTS_NAME;

const Gnb: React.FC = () => {
  const router = useRouter();
  const { pathname, isReady } = router;

  const menuItems = [
    { name: HOME, route: ROUTE_PATH_HOME },
    {
      name: MEN,
      route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=m_all`,
    },
    {
      name: WOMEN,
      route: `${ROUTE_PATH_LIST}?${ROUTE_PATH_CATEGORY_LARGE_CODE}=w_all`,
    },
    { name: DRESS, route: ROUTE_PATH_DRESS },
    { name: EVENT, route: ROUTE_PATH_EVENT },
    { name: QNA, route: ROUTE_PATH_QNA },
  ];
  console.log(router);
  return (
    <MenuList>
      {menuItems.map((item, index) => (
        <Menu key={index}>
          <Link href={item.route} legacyBehavior>
            <a>
              <Button
                disabled={false}
                size={SMALL}
                variant={DEFAULT}
                children={item.name}
              />
            </a>
          </Link>
          <style jsx>{style}</style>
        </Menu>
      ))}
    </MenuList>
  );
};
export default Gnb;

const MenuList = styled.ul`
  display: flex;
  left: 0;
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 94px;
  flex-shrink: 0;
`;

const style = css`
  .active {
    color: tomato;
  }
`;
