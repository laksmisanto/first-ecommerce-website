"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BanenrData } from "./BannerData";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    duration: 3000,
  };
  return (
    <>
      <Slider {...settings}>
        {BanenrData.map((item, i) => (
          <div className="outline-none border-none" key={i}>
            <Image
              src={item.bannerImg}
              width={1200}
              height={720}
              alt="banner-image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Banner;
