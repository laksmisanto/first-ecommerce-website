"use client";
import React from "react";
import Container from "../Container/Container";
import ProductItem from "../ProductItems/ProductItem";
import { NewArrivalData } from "./NewArrivalData";
import Slider from "react-slick";
import "./NewArrivals.css";
import NextArrow from "../Arrow/NextArrow";
import PrevArrow from "../Arrow/PrevArrow";

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
  };
  return (
    <>
      <Container>
        <div className="pb-12 mt-20">
          <h3 className="font-primaryFont font-bold text-[40px] text-black">
            New Arrivals
          </h3>
        </div>
        <Slider {...settings}>
          {NewArrivalData.map((item, i) => (
            <div className="px-5" key={i}>
              <ProductItem
                img={item.productImg}
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
