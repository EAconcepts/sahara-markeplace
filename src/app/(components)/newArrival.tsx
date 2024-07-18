import React from "react";

import Products from "./products";

const NewArrival = ({ newArrivals }: any) => {
  return (
    <div className="flex flex-col pt-[16px]">
      <Products heading={"New Arrivals"} products={newArrivals} />
    </div>
  );
};

export default NewArrival;
