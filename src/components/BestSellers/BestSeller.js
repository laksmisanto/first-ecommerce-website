import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import ProductItem from "../ProductItems/ProductItem";
import { BestSellerData } from "./BestSellerData";

const BestSeller = () => {
  return (
    <Container className="pt-32">
      <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 xl:gap-10">
        {BestSellerData.map((item, i) => (
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

export default BestSeller;
