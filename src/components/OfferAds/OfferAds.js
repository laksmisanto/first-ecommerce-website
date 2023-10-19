import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
import offerAdsImg from "@/assets/ads2.png";

const OfferAds = () => {
  return (
    <>
      <Container className="pt-20">
        <Image
          src={offerAdsImg}
          alt="offer-ads"
          width={1200}
          height={400}
          loading="lazy"
          className="w-full h-auto"
        />
      </Container>
    </>
  );
};

export default OfferAds;
