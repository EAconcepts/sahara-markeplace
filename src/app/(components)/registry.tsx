"use client";

import React from "react";
import ProductHeader from "./product-header";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Registry = ({ heading, products }: any) => {
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const router = useRouter();
  return (
    <div className="mt-[32px]">
      <ProductHeader
        heading={heading}
        showBtn={true}
        onClick={() =>
          router.push(`/categories/${encodeURIComponent("under_$400")}`)
        }
      />
      <div className="fle max-lgflex-wrap mt-[32px] grid grid-cols-2 gap-[16px] lg:grid-cols-4 lg:gap-x-[24px]">
        {products?.slice(0, 4).map((product: any, index: number) => (
          <div
            className="max-lg:w[153px] w-full max-lg:h-[259px]"
            key={index}
            onClick={() => router.push(`/product-details/${product?.url}`)}
          >
            {product?.image && (
              <Image
                src={`${imgBaseUrl}/${product?.image}`}
                width={294}
                height={312}
                alt={product.title}
                className="lg:w[294px] h-[220px] w-[100%] object-cover max-lg:rounded-[4px] lg:h-[312px]"
              />
            )}
            <p className="mt-[16px] text-center font-openSans text-[16px] font-[400] text-blackPrimary max-lg:leading-[23.3px] lg:mt-[20px] lg:text-[24px]">
              Wedding Attires
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;
