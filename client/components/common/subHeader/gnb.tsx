import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Icons, Logo } from "../../base";
import { Left, LogoMenu, Menu, Right } from "./template";

const DEFAULT_SIZE = "14";

type MenuItemType = {
  [x: string]: string;
  name: string;
  route: string;
  icon: string;
};

type Props = {
  userId: string;
  menuItems: MenuItemType[];
  logout: () => Promise<void>;
};
const Gnb = ({ menuItems, logout, userId }: Props) => {
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
          <IdText>{userId && `${userId} 님 환영합니다.`}</IdText>
          {menuItems?.map(
            ({ name, route, icon }: MenuItemType, index: React.Key) => (
              <Menu key={index}>
                {name === "LogOut" ? (
                  <Button onClick={logout}>
                    {Icons({ size: DEFAULT_SIZE, name: icon })}
                    {name}
                  </Button>
                ) : (
                  <Link href={route} legacyBehavior>
                    <Anchor>
                      {Icons({ size: DEFAULT_SIZE, name: icon })}

                      <Text>{name}</Text>
                    </Anchor>
                  </Link>
                )}
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

const IdText = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
`;
const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.h3`
  font-size: 1.2rem;
  width: 100%;
`;
const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
