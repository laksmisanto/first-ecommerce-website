"use client";
import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "../Flex/Flex";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import ListItem from "../List/ListItem";
import List from "../List/List";
import { CategoryData } from "./CategoryData";

const TopBar = () => {
  const [category, setCategory] = useState(false);

  const handleCategory = () => {
    setCategory(!category);
  };
  return (
    <>
      <Flex className="p-10 justify-between items-center">
        <div className=" w-1/5 relative">
          <button
            className="cursor-pointer flex items-center"
            onClick={() => handleCategory()}
          >
            <BiMenuAltLeft className="pr-1 text-2xl" />
            <span className="font-primaryFont text-sm text-black">
              Shop by Category
            </span>
          </button>
          {category && (
            <List className="category__list absolute left-0 top-8 w-full z-50 bg-black">
              {CategoryData.map((item, i) => (
                <ListItem
                  className="font-primaryFont font-normal text-sm text-white px-3 py-1 border-b last:border-b-0 border-gray hover:pl-5 transition-all duration-300 ease-in-out cursor-pointer"
                  href={item.link}
                  key={i}
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          )}
        </div>
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
          <div className="user">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex cursor-pointer items-center mr-10 outline-none border-none">
                  <FaUserAlt className="mr-2 text-lg" />
                  <IoMdArrowDropdown className="text-2xl " />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 p-0">
                <DropdownMenuLabel className=" font-primaryFont text-sm font-normal text-center bg-black text-white">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center justify-center cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <FaShoppingCart className="text-lg cursor-pointer" />
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
