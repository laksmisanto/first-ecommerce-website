import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import List from "../List/List";
import { FooterHelpData, FooterMenuData, FooterShopData } from "./FooterData";
import ListItem from "../List/ListItem";
import Logo from "@/assets/svg/logo";
import Flex from "../Flex/Flex";
import Facebook from "@/assets/svg/Facebook";
import Linkedin from "@/assets/svg/Linkedin";
import Instagram from "@/assets/svg/Instagram";

const Footer = () => {
  return (
    <>
      <Container className="pt-20">
        <Grid className="grid-cols-7 gap-10">
          <div className="footer__item">
            <h3 className="font-primaryFont font-bold text-base text-black pb-5 uppercase">
              menu
            </h3>
            <List>
              {FooterMenuData.map((item, i) => (
                <ListItem
                  key={i}
                  href={item.link}
                  className="font-primaryFont font-normal text-sm capitalize py-1 text-gray transition-all ease-in-out duration-300 hover:text-black "
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          </div>
          <div className="footer__item">
            <h3 className="font-primaryFont font-bold text-base text-black pb-5 uppercase">
              shop
            </h3>
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
          </div>
          <div className="footer__item">
            <h3 className="font-primaryFont font-bold text-base text-black pb-5 uppercase">
              help
            </h3>
            <List>
              {FooterHelpData.map((item, i) => (
                <ListItem
                  key={i}
                  href={item.link}
                  className="font-primaryFont font-normal text-sm capitalize py-1 text-gray transition-all ease-in-out duration-300 hover:text-black "
                >
                  {item.title}
                </ListItem>
              ))}
            </List>
          </div>
          <div className="footer__item col-span-2">
            <h4 className="font-primaryFont font-bold text-base text-black pb-1">
              (052) 611-5711
            </h4>
            <h4 className="font-primaryFont font-bold text-base text-black pb-4">
              company@domain.com
            </h4>
            <p>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="footer__item col-span-2">
            <Logo />
          </div>
        </Grid>
      </Container>
      <Container className="py-4">
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
      </Container>
    </>
  );
};

export default Footer;
