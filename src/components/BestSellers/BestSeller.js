import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import ProductItem from "../ProductItems/ProductItem";
import { BestSellerData } from "./BestSellerData";

const BestSeller = () => {
  return (
    <Container className="pt-32">
      <Grid className="grid-cols-4 gap-10">
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
