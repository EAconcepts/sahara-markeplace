'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter()
  const handleAddToCart=(id:string )=>{
    console.log(id)
  }
  return (
    <div onClick={()=>router.push(`/product-details/${product._id || 2}`)} className="flex flex-col lg:w-[294px] pb-[12px]">
      <Image
        src={product?.image}
        width={294}
        alt=""
        height={180}
        className="rounded-tr-[8px] max-lg:w-[183px] rounded-tl-[8px] "
      />
      <div className="flex flex-col lg:pr-[16px] max-lg:mt-[16px]">
        {/* product name & price */}
        <div className="flex justify-between text-[14px] lg:text-[16px] font-[600] leading-[20px] lg:leading-[23.2px] font-openSans text-blackPrimary">
          <h4 className="line-clamp-1">{product?.title}</h4>
          <span className="font-[700]">${product?.price}</span>
        </div>
        {/* Made in */}
        <div className="flex items-center gap-x-[4px] mt-[8px]">
          <span>Made in Senegal</span>
          <Image src={product?.country} alt={product?.title}  width={15} height={10} className="w-[15px] h-[10px]"/>
        </div>
        {/* Rating */}
        <div className="mt-[8px]">
          <div className="flex self-start gap-x-[8px] items-center">
            {/* Rating Stars */}
            <div className="flex">
              {new Array(5).fill(0).map((_, index) => (
                <FaStar
                  key={index}
                  className={` ${
                    product?.rating && index <= product?.rating - 1
                      ? " text-[#FFAD33] opacity-100 "
                      : "text-[20px] text-white opacity-25"
                  }`}
                />
              ))}
            </div>
            <span>({product?.rating})</span>
          </div>
        </div>
        <Button onClick={(e)=>{
          e.stopPropagation()
          handleAddToCart(product?._id)
        }} variant={"outline"} className="flex gap-x-[8px] w-fit mt-[16px]">
          <PiShoppingCart className="text-[24px] text-blackPrimary" />
          <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary font-openSans">
            Add to Cart
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
