import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import Image from "next/image";
import phoneImg from "@/assets/phone-offer.png";
import electronicImg from "@/assets/electronics-offer.png";
import furnitureImg from "@/assets/furniture-offer.png";

const Offer = () => {
  return (
    <>
      <Container className="mt-20">
        <Grid className="grid-cols-2 grid-rows-2 gap-10">
          <Image
            src={phoneImg}
            width={600}
            height={800}
            loading="lazy"
            alt="offer-images"
            className="row-span-2 w-full h-full"
          />
          <Image
            src={electronicImg}
            width={600}
            height={800}
            loading="lazy"
            alt="offer-images"
            className="w-full h-full"
          />
          <Image
            src={furnitureImg}
            width={600}
            height={800}
            loading="lazy"
            alt="offer-images"
            className="w-full h-full"
          />
        </Grid>
      </Container>
    </>
  );
};

export default Offer;
