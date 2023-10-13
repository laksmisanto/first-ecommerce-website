"use client";
import React from "react";
import Logo from "@/assets/svg/logo";
import Flex from "../Flex/Flex";
import Container from "../Container/Container";
import TopBar from "./TopBar";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { MenuData } from "./MenuData";

const Navbar = () => {
  return (
    <>
      <Container>
        <Flex className="items-center justify-between py-8">
          <Logo className="w-1/5" />
          <List className="w-3/4 flex justify-end">
            {MenuData.map((item, i) => (
              <ListItem
                className="mx-4 cursor-pointer font-primaryFont text-sm font-normal transition-all ease-in-out duration-300 text-gray hover:text-black hover:font-bold"
                key={i}
                href={item.link}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </Flex>
      </Container>
      <div className="topbar bg-[#F5F5F3]">
        <Container>
          <TopBar />
        </Container>
      </div>
    </>
  );
};

export default Navbar;
