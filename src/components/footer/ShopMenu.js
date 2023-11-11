import React from "react";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { FooterShopData } from "./FooterData";
import FooterTitle from "./FooterTitle";

const ShopMenu = () => {
  return (
    <>
      <FooterTitle title={"Shop"} />
      <List>
        {FooterShopData.map((item, i) => (
          <ListItem
            key={i}
            href={item.link}
            className="font-primaryFont font-normal text-sm capitalize py-1 text-gray transition-all ease-in-out duration-300 hover:text-black "
          >
            {item.title}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ShopMenu;
