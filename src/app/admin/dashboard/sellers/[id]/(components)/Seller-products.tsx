"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/utils/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SellerProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  const { imgUrl } = useAuth();
  return (
    <div className="flex h-[319px] w-[239px] flex-col items-center gap-y-[16px] rounded-[12px] border-[1px] border-border py-[16px]">
      <Image
        src={`${imgUrl}/${product.image}`}
        width={215}
        height={180}
        alt={product?.name}
        className="h-[180px] w-[215px] object-cover"
      />
      <div className="flex flex-col items-center gap-y-[12px]">
        <div className="flex flex-col gap-y-[4px] text-center text-blackPrimary">
          <h5 className="line-clamp-1 text-[14px] font-[600] leading-[20.3px]">
            {product?.name}
          </h5>
          <h3 className="text-[16px] font-[700] leading-[23.2px]">
            ${product?.price}
          </h3>
        </div>
      </div>
      <Button
        onClick={() =>
          router.push(`/admin/dashboard/sellers/2/${product?.url}`)
        }
        className="h-[32px] w-fit rounded-[8px] border-[1px] border-border bg-white px-[16px] py-[6px] text-[14px] font-[600] leading-[20.3px] text-black"
      >
        View Product
      </Button>
    </div>
  );
};

export default SellerProductCard;
