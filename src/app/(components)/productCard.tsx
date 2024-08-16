"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const cartMutation= useMutation({
    mutationFn: (product, quantity) =>
      axios.post(`${apiUrl}/add-to-cart`, { product, quantity }),
    onSuccess: (data) => {
      console.log(data);
      if (data?.data?.message == "You need to login first") {
        toast.success(data?.data?.message);
      } else {
        toast.success(data?.data?.message || "Added to cart successfully!");
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });
  const handleAddToCart = (id: string) => {
    console.log(id);
    cartMutation.mutate(id, 1);
  };
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div
      onClick={() => router.push(`/product-details/${product._id || 2}`)}
      className="flex flex-col pb-[12px] lg:w-[294px]"
    >
      <Image
        src={`${imageBaseUrl}/${product?.image}`}
        width={294}
        alt={product?.name}
        height={180}
        className="l:w-[294px] rounded-tl-[8px] rounded-tr-[8px] object-cover max-lg:w-[183px] lg:h-[180px]"
      />
      <div className="mt-[12px] flex flex-col max-lg:mt-[16px] lg:pr-[16px]">
        {/* product name & price */}
        <div className="flex justify-between font-openSans text-[14px] font-[600] leading-[20px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
          <h4 className="line-clamp-1">{product?.name}</h4>
          <span className="font-[700]">${product?.price}</span>
        </div>
        {/* Made in */}
        <div className="mt-[8px] flex items-center gap-x-[4px]">
          <span>Made in Senegal</span>
          <Image
            src={product?.country}
            alt={product?.title}
            width={15}
            height={10}
            className="h-[10px] w-[15px]"
          />
        </div>
        {/* Rating */}
        <div className="mt-[8px]">
          <div className="flex items-center gap-x-[8px] self-start">
            {/* Rating Stars */}
            <div className="flex">
              {new Array(5).fill(0).map((_, index) => (
                <FaStar
                  key={index}
                  className={` ${
                    product?.rating && index <= product?.rating - 1
                      ? "text-[#FFAD33] opacity-100"
                      : "text-[20px] text-white opacity-25"
                  }`}
                />
              ))}
            </div>
            {/* <span>({product?.rating})</span> */}
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product?.id);
          }}
          variant={"outline"}
          className="mt-[16px] flex w-fit gap-x-[8px]"
        >
          <PiShoppingCart className="text-[24px] text-blackPrimary" />
          <span className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
            Add to Cart
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
