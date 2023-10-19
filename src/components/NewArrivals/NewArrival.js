import React from "react";
import Container from "../Container/Container";
import Grid from "../Grid/Grid";
import ProductItem from "../ProductItems/ProductItem";
import { NewArrivalData } from "./NewArrivalData";

const NewArrival = () => {
  return (
    <>
      <Container>
        <div className="pb-12 mt-20">
          <h3 className="font-primaryFont font-bold text-[40px] text-black">
            New Arrivals
          </h3>
        </div>
        <Grid className="grid-cols-4 gap-10">
          {NewArrivalData.map((item, i) => (
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
    </>
  );
};

export default NewArrival;
