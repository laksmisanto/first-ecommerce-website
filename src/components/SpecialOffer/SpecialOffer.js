import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import { SpecialOfferData } from "./SpecialOfferData";
import ProductItem from "../ProductItems/ProductItem";

const SpecialOffer = () => {
  return (
    <Container className="pt-20">
      <h3 className="font-primaryFont font-bold text-[40px] text-black pb-10">
        Special Offers
      </h3>
      <Grid className="grid-cols-4 gap-10">
        {SpecialOfferData.map((item, i) => (
          <ProductItem
            key={i}
            img={item.productImg}
            name={item.name}
            price={item.price}
            color={item.color}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default SpecialOffer;
