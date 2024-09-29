"use client";

import { useParams } from "next/navigation";
import { PrdtDetails } from "./(components)/Prdt_details";

const ProductDetails = () => {
  const { product_name } = useParams();

  return (
    <div>
      <PrdtDetails product_name={product_name} />
    </div>
  );
};

export default ProductDetails;
