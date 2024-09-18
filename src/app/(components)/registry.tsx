'use client'

import React from "react";
import ProductHeader from "./product-header";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Registry = ({ heading, products }: any) => {
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  const router = useRouter()
  return (
    <div className="mt-[32px]">
      <ProductHeader heading={heading} showBtn={true} onClick={()=>router.push(`/categories/${encodeURIComponent('under_$400')}`)} />
      <div className="grid grid-cols-2 lg:grid-cols-4 fle max-lgflex-wrap gap-[16px] lg:gap-x-[24px] mt-[32px]">
        {products?.slice(0,4).map((product:any, index:number) => (
          <div className="max-lg:w[153px] w-full max-lg:h-[259px]" key={index} onClick={()=>router.push(`/product-details/${product?.url}`)}>
            <Image
              src={`${imgBaseUrl}/${product?.image}`}
              width={294}
              height={312}
              alt={product.title}
              className="w-[100%] lg:w[294px] max-lg:rounded-[4px] h-[220px] lg:h-[312px] object-cover"
            />
            <p className="text-blackPrimary text-[16px] max-lg:leading-[23.3px] lg:text-[24px] mt-[16px] lg:mt-[20px] font-[400] font-openSans text-center">
              Wedding Attires
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;
