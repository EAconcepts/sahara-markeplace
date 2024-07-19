import React from "react";
import ProductHeader from "./product-header";
import Image from "next/image";

const Registry = ({ heading, products }: any) => {
  return (
    <div className="mt-[32px]">
      <ProductHeader heading={heading} />
      <div className="flex gap-x-[24px] mt-[32px]">
        {products?.slice(0,4).map((product:any, index:number) => (
          <div className="" key={index}>
            <Image
              src={product?.image}
              width={294}
              height={312}
              alt={product.title}
              className="lg:w-[294px] lg:h-[312px] object-cover"
            />
            <p className="text-blackPrimary text-[24px] mt-[20px] font-[400] font-openSans text-center">
              Wedding Attires
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;
