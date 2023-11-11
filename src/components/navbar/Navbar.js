"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/svg/logo";
import Flex from "../Flex/Flex";
import Container from "../Container/Container";
import TopBar from "../Topbar/TopBar";
import List from "../List/List";
import ListItem from "../List/ListItem";
import { MenuData } from "./MenuData";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <>
      <Container>
        <Flex className="items-center justify-between my-8">
          <div className="w-1/5">
            <Logo />
          </div>
          <div className="w-3/4 h-full relative">
            <div className="hidden lg:block">
              <List className="flex justify-end">
                {MenuData.map((item, i) => (
                  <ListItem
                    className="mx-4 last:mr-0 cursor-pointer font-primaryFont text-sm font-normal transition-all ease-in-out duration-300 text-gray hover:text-black hover:font-bold"
                    key={i}
                    href={item.link}
                  >
                    {item.title}
                  </ListItem>
                ))}
              </List>
            </div>
            <div className="block lg:hidden">
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <FaBars
                  onClick={() => setShow(!show)}
                  size={28}
                  className=" z-50 cursor-pointer text-gray hover:text-black transition-all ease-in-out duration-300"
                />
              </div>
              <div ref={ref}>
                {show && (
                  <List className="z-40 absolute right-0 mt-4 w-52 bg-white">
                    {MenuData.map((item, i) => (
                      <ListItem
                        className="px-4 py-2 border-b last:border-0 border-gray last:mr-0 cursor-pointer font-primaryFont text-sm font-normal transition-all ease-in-out duration-300 text-gray hover:text-black hover:pl-6"
                        key={i}
                        href={item.link}
                      >
                        {item.title}
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            </div>
          </div>
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
