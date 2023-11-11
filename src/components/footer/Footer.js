import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Logo from "@/assets/svg/logo";
import FooterMenu from "./FooterMenu";
import ShopMenu from "./ShopMenu";
import CopyRight from "./CopyRight";
import HelpMenu from "./HelpMenu";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  return (
    <>
      <Container className="pt-20">
        <Grid className="grid-cols-7 gap-10">
          <div className="footer__item">
            <FooterMenu />
          </div>
          <div className="footer__item">
            <ShopMenu />
          </div>
          <div className="footer__item">
            <HelpMenu />
          </div>
          <div className="footer__item col-span-2">
            <ContactInfo />
          </div>
          <div className="footer__item col-span-2">
            <Logo />
          </div>
        </Grid>
      </Container>
      <Container className="py-4">
        <CopyRight />
      </Container>
    </>
  );
};

export default Footer;
