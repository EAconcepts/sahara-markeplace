'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SellerProductCard = ({product}:{product:any}) => {
  const router = useRouter()
  return (
  <div className="flex flex-col items-center gap-y-[16px] py-[16px] rounded-[12px] border-[1px] border-border w-[239px] h-[319px]">
    <Image src={product.image} width={215} height={180} alt="" className="w-[215px] h-[180px] object-cover"/>
    <div className="flex flex-col gap-y-[12px] items-center">
        <div className="flex flex-col gap-y-[4px] text-blackPrimary text-center">
            <h5 className="text-[14px] font-[600] leading-[20.3px] ">Robe Longue Kimono</h5>
            <h3 className="text-[16px] font-[700] leading-[23.2px]">$99.99</h3>
        </div>
    </div>
    <Button onClick={()=>router.push(`/admin/dashboard/sellers/2/2`)} className="py-[6px] w-fit text-black font-[600] text-[14px] leading-[20.3px] h-[32px] px-[16px] bg-white border-[1px] border-border rounded-[8px]">View Product</Button>
  </div>);
};

export default SellerProductCard;
