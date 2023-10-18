import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import { MdLocalShipping, MdOutlineRefresh } from "react-icons/md";
import { PiNumberTwoBold } from "react-icons/pi";
import Grid from "../Grid/Grid";

const BannerProductInfo = () => {
  return (
    <>
      <div className="border border-solid border-lightWhite py-5">
        <Container>
          <Grid className="grid-cols-3">
            <Flex className="items-center ">
              <PiNumberTwoBold className="text-2xl mr-4 text-bla" />
              <h6 className="font-primaryFont font-normal text-[16px] text-grayLight">
                Two years warranty
              </h6>
            </Flex>
            <Flex className="items-center ">
              <MdLocalShipping className="text-2xl mr-4 text-bla" />
              <h6 className="font-primaryFont font-normal text-[16px] text-grayLight">
                Free shipping
              </h6>
            </Flex>
            <Flex className="items-center ">
              <MdOutlineRefresh className="text-2xl mr-4 text-bla" />
              <h6 className="font-primaryFont font-normal text-[16px] text-grayLight">
                Return policy in 30 days
              </h6>
            </Flex>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default BannerProductInfo;
