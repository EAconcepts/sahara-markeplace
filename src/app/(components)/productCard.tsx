"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { toast } from "sonner";
import usa from "@/assets/images/usa.svg";
import { useAuth } from "@/utils/useAuth";
import { useCheckout } from "@/utils/useCheckout";
import { useGet } from "@/utils/useGet.";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  const { token, baseUrl } = useAuth();
  const { cartItems, setCartItems } = useCheckout();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const refetchCart = async () => {
    const response = await axios.get(`${baseUrl}/my-cart`, { headers });
    setCartItems(response.data?.data?.cart);
  };
  const addtocart = async (product: any, quantity: number) => {
    try {
      const data = await axios.post(
        `${apiUrl}/add-to-cart`,
        {
          product,
          quantity,
        },
        { headers },
      );
      if (data?.data?.message == "You need to login first") {
        toast.success(data?.data?.message);
      } else {
        setCartItems(data?.data?.data?.cart);
        toast.success(data?.data?.message || "Added to cart successfully!");
        refetchCart();
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };
  const handleAddToCart = (id: string) => {
    // console.log(id);
    addtocart(id, 1);
  };
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div
      onClick={() => router.push(`/product-details/${product?.url}`)}
      className="xs:w-[170px] max-lg:w[140px] lgw-[294px] flex w-full flex-col pb-[12px]"
    >
      <Image
        src={`${imageBaseUrl}/${product?.image}`}
        width={294}
        alt={product?.name}
        height={180}
        className="max-lg:w[153px] lg:w-[294px w-full rounded-tl-[8px] rounded-tr-[8px] object-cover max-lg:h-[160px] lg:h-[160px]"
      />
      <div className="mt-[12px] flex flex-col max-lg:mt-[16px] lg:pr-[16px]">
        {/* product name & price */}
        <div className="flex justify-between font-openSans text-[12px] font-[600] leading-[20px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
          <h4 className="line-clamp-1">{product?.name}</h4>
          <span className="font-[700]">${product?.price}</span>
        </div>
        {/* Made in */}
        <div className="mt-[2px] flex items-center gap-x-[4px] lg:mt-[8px]">
          {/* <span className="max-lg:text-[10px]">Made in Senegal</span> */}
          <Image
            src={product?.country || usa}
            alt={product?.name}
            width={15}
            height={10}
            className="max-lg:h-[8px] max-lg:w-[12px] lg:h-[10px] lg:w-[15px]"
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
                    (product?.rating && index <= product?.rating - 1) || true
                      ? "text-[#FFAD33] opacity-100"
                      : "text-white opacity-25"
                  } max-lg:text-[12px] lg:text-[20px]`}
                />
              ))}
            </div>
            {/* <span>({product?.rating})</span> */}
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            if (token) {
              handleAddToCart(product?.id);
            } else {
              router.push("/auth/signin");
            }
          }}
          variant={"outline"}
          className="mt-[12px] flex w-fit gap-x-[8px] lg:mt-[16px]"
        >
          <PiShoppingCart className="text-[18px] text-blackPrimary lg:text-[24px]" />
          <span className="font-openSans text-[12px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[14px]">
            Add to Cart
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
