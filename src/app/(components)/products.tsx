'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import ProductCard from "./productCard";
import ProductHeader from "./product-header";

const Products = ({ products, heading }: any) => {
  // console.log(products)
  return (
    <div className="flex flex-col pt-[16px]">
        {/* Header */}
      <ProductHeader heading={heading}/>
      <div className="grid lg:grid-cols-4 grid-cols-2 w-full max-lg:gap-x-[16px] sm:grid-cols-3 max-lg:justifybetween lg:gap-x-[24px] mt-[32px]">
        {products?.slice(0,4).map((product:any, index:any) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
