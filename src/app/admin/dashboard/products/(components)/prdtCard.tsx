// 'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import prdtImg from "@/assets/images/arrival2.png";

export const PrdtCard = ({ product }: { product: any }) => {
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="flex h-[319px] flex-col items-center gap-[16px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
      <Image
        src={`${imgBaseUrl}/${product?.image}`}
        width={215}
        height={180}
        alt="prd"
        className="h-[180px] w-full object-cover"
      />
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-center text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            {product?.name}
          </p>
          <h4 className="text-center text-[16px] font-[700] leading-[23.2px] text-blackPrimary">
            ${product?.price}
          </h4>
        </div>
        <Button
          variant={"outline"}
          className="w-fit rounded-[8px] border-[1px] px-[16px] py-[6px] text-[14px] font-[600] leading-[20.3px] text-blackPrimary"
        >
          View Product
        </Button>
      </div>
    </div>
  );
};
