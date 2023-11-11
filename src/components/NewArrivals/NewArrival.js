"use client";
import React from "react";
import Container from "../Container/Container";
import ProductItem from "../ProductItems/ProductItem";
import { NewArrivalData } from "./NewArrivalData";
import Slider from "react-slick";
import "./NewArrivals.css";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";
import Title from "../SectionTitle/Title";

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <div className="pb-12 mt-20">
          <Title title={"New Arrivals"} />
        </div>
        <Slider {...settings}>
          {NewArrivalData.map((item, i) => (
            <div className="px-3 lg:px-5" key={i}>
              <ProductItem
                img={item.productImg}
                badge={item.badge}
                name={item.name}
                price={item.price}
                color={item.color}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default NewArrival;
