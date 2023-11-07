"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BanenrData } from "./BannerData";
import BannerProductInfo from "./BannerProductInfo";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    duration: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          width: "fit-content",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == dotActive
            ? {
                color: "#262626",
                borderRight: "3px solid #262626",
                paddingRight: "10px",
              }
            : {
                color: "transparent",
                borderRight: "3px solid white",
                paddingRight: "10px",
              }
        }
      >
        {i < 9 ? "0" + (i + 1) : i + 1}
      </div>
    ),
  };
  return (
    <>
      <div className="banner__slider relative">
        <Slider {...settings}>
          {BanenrData.map((item, i) => (
            <div className="outline-none border-none" key={i}>
              <Image
                src={item.bannerImg}
                width={1200}
                height={720}
                loading="lazy"
                alt="banner-image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <BannerProductInfo />
    </>
  );
};

export default Banner;
