import React from "react";
import Image from "next/image";
import Flex from "../Flex/Flex";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { AiFillHeart } from "react-icons/ai";
import { TbRefresh } from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi";

const ProductItem = ({ img, name, price, color }) => {
  return (
    <>
      <div className="shadow">
        <div className="group relative overflow-hidden">
          <Image
            src={img}
            width={400}
            height={400}
            loading="lazy"
            alt="product-image"
            className="w-full h-full"
          />
          <div className="font-primaryFont font-bold text-sm px-8 py-2 bg-black text-white absolute left-5 top-5">
            new
          </div>
          <List className="text-end px-7 py-6 bg-white absolute w-full transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100 right-0 -bottom-2/4 group-hover:bottom-0">
            <ListItem
              href="/"
              className="font-primaryFont font-normal text-base text-gray hover:text-black hover:pr-2 transition-all ease-in-out duration-300 py-2"
            >
              Add to Wish List
              <AiFillHeart className="text-2xl inline-block ml-2" />
            </ListItem>
            <ListItem
              href="/"
              className="font-primaryFont font-normal text-base text-gray hover:text-black hover:pr-2 transition-all ease-in-out duration-300 py-2"
            >
              Compare
              <TbRefresh className="text-2xl inline-block ml-2" />
            </ListItem>
            <ListItem
              href="/"
              className="font-primaryFont font-normal text-base text-gray hover:text-black hover:pr-2 transition-all ease-in-out duration-300 py-2"
            >
              Add to Cart
              <HiShoppingCart className="text-2xl inline-block ml-2" />
            </ListItem>
          </List>
        </div>
        <Flex className="justify-between items-center px-4 pt-6 pb-4">
          <h5 className="font-primaryFont font-bold text-xl text-black">
            {name}
          </h5>
          <h6 className="font-primaryFont font-normal text-base text-gray">
            {price}
          </h6>
        </Flex>
        <h6 className="font-primaryFont font-normal text-base text-gray capitalize px-4 pb-6">
          {color}
        </h6>
      </div>
    </>
  );
};

export default ProductItem;
