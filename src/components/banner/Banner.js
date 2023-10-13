"use client";
import React from "react";
import Slider from "react-slick";
import bannerImg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="outline-none border-none">
          <Image
            src={bannerImg}
            width={1400}
            height={800}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="outline-none border-none">
          <Image
            src={bannerImg}
            width={1400}
            height={800}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="outline-none border-none">
          <Image
            src={bannerImg}
            width={1400}
            height={800}
            alt="banner-image"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </>
  );
};

export default Banner;
