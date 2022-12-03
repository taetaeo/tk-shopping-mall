import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { ROUTE_PATH } from "../../../utils/constants";
import { Button, Icons, Logo } from "../../base";
import { Left, LogoMenu, Menu, Right } from "./template";

const DEFAULT_SIZE = "14";

type MenuItemType = {
  [x: string]: string;
  name: string;
  route: string;
  icon: string;
};

type Props = {
  menuItems: MenuItemType[];
  logout: () => Promise<void>;
};
const Gnb = ({ menuItems, logout }: Props) => {
  return (
    <MenuListWrapper>
      <MenuList>
        <Left>
          <LogoMenu>
            <Link href="/" legacyBehavior>
              <a>
                <Logo />
              </a>
            </Link>
          </LogoMenu>
        </Left>
        <Right>
          {menuItems?.map(
            ({ name, route, icon }: MenuItemType, index: React.Key) => (
              <Menu key={index}>
                <Link href={route} legacyBehavior>
                  <Anchor>
                    {Icons({ size: DEFAULT_SIZE, name: icon })}
                    {name === "Logout" ? (
                      <button onClick={logout}>{name}</button>
                    ) : (
                      <Text>{name}</Text>
                    )}
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
