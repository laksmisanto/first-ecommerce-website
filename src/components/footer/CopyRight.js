import React from "react";
import Flex from "../Flex/Flex";
import List from "../List/List";
import ListItem from "../List/ListItem";
import Facebook from "@/assets/svg/Facebook";
import Linkedin from "@/assets/svg/Linkedin";
import Instagram from "@/assets/svg/Instagram";

const CopyRight = () => {
  return (
    <>
      <Flex className="justify-between items-center">
        <List className="flex items-center">
          <ListItem href="/">
            <Facebook className="cursor-pointer" />
          </ListItem>
          <ListItem href="/" className="ml-6 ">
            <Linkedin className="cursor-pointer" />
          </ListItem>
          <ListItem href="/" className="ml-6 ">
            <Instagram className="cursor-pointer" />
          </ListItem>
        </List>
        <p className="font-primaryFont font-normal text-sm text-gray">
          2020 Orebi Minimal eCommerce Figma Template by Adveits
        </p>
      </Flex>
    </>
  );
};

export default CopyRight;
