import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import { SpecialOfferData } from "./SpecialOfferData";
import ProductItem from "../ProductItems/ProductItem";
import Title from "../SectionTitle/Title";

const SpecialOffer = () => {
  return (
    <Container className="pt-20">
      <div className="mb-10">
        <Title title={"Special Offers"} />
      </div>
      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-6 sm:gap-6 lg:gap-8 xl:gap-10">
        {SpecialOfferData.map((item, i) => (
          <ProductItem
            key={i}
            img={item.productImg}
            badge={item.badge}
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
