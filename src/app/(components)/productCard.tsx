import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col w-[294px]">
      <Image
        src={product?.image}
        width={294}
        alt=""
        height={180}
        className="rounded-tr-[8px] rounded-tl-[8px] "
      />
      <div className="flex flex-col pr-[16px]">
        <div className="flex justify-between text-[16px] font-[600] leading-[23.2px] font-openSans text-blackPrimary">
          <h4 className="">{product?.title}</h4>
          <span className="font-[700]">${product?.price}</span>
        </div>
        <div className="flex items-center gap-x-[4px] mt-[8px]">
          <span>Made in Senegal</span>
          <Image src={product?.country} alt={product?.title}  width={15} height={10} className="w-[15px] h-[10px]"/>
        </div>
        {/* Rating */}
        <div className="mt-[8px]">
          <div className="flex self-start gap-x-[8px] items-center">
            {/* Rating Stars */}
            <div className="hidden lg:flex">
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
        <Button variant={"outline"} className="flex gap-x-[8px] w-fit mt-[16px]">
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
