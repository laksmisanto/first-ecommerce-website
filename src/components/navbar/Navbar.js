import React from "react";
import Logo from "@/assets/svg/logo";
import { MenuData } from "@/data/menuData";
import Flex from "../flex/flex";
import List from "../list/list";
import ListItem from "../list/ListItem";
import Container from "../container/container";

const Navbar = () => {
  return (
    <>
      <Container>
        <Flex className="justify-between items-center py-4">
          <Logo />
          <List>
            <Flex>
              {MenuData.map((item, i) => (
                <ListItem
                  className="mx-4 cursor-pointer font-semibold transition-all ease-in-out duration-300 text-gray-500 hover:tracking-wider hover:text-gray-900 hover:font-semibold"
                  key={i}
                >
                  {item.title}
                </ListItem>
              ))}
            </Flex>
          </List>
        </Flex>
      </Container>
    </>
  );
};

export default Navbar;
