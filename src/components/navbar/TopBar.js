"use client";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "../Flex/Flex";

const TopBar = () => {
  return (
    <>
      <Flex className="p-10 justify-between items-center">
        <Flex className="cursor-pointer items-center w-1/5">
          <BiMenuAltLeft className="pr-1 text-2xl" />
          <span className="font-primaryFont text-sm text-black">
            Shop by Category
          </span>
        </Flex>
        <div className="w-2/5">
          <Flex className="w-full justify-center items-center relative">
            <input
              type="text"
              name="mainsearch"
              id="mainsearch"
              placeholder="search products"
              className="font-primaryFont text-sm text-gray w-full outline-none border-none py-4 pl-5 pr-12 "
            />
            <div className="p-3 absolute right-0 cursor-pointer">
              <AiOutlineSearch className="text-2xl text-black" />
            </div>
          </Flex>
        </div>
        <Flex className="w-1/5 items-center justify-end">
          <Flex className="cursor-pointer items-center mr-10">
            <FaUserAlt className="mr-2 text-lg" />
            <IoMdArrowDropdown className="text-2xl " />
          </Flex>
          <FaShoppingCart className="text-lg cursor-pointer" />
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
