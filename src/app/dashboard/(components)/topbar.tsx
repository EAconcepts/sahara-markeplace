"use client";

import { CartModal } from "@/app/(components)/modals/cart-modal";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import {
  FavouriteIcon,
  ShoppingCart01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import React, { useState } from "react";

const Topbar = () => {
  const { user } = useAuth();
  const [showCart, setShowCart] = useState<boolean>(false);
  // console.log(user)
  const { data } = useGet("my-cart", "cart");

  return (
    <header className="flex h-[66px] w-full items-center justify-between border-b-[1px] border-border pb-[16px] pt-[8px]">
      <h2 className="font-playfair text-[28px] font-[600] capitalize leading-[40.6px] text-blackPrimary">
        Welcome, {user?.first_name}
      </h2>
      <div className="flex gap-x-[24px]">
        <FavouriteIcon />
        {/* <ShoppingCart01Icon/> */}
        {/* Cart */}
        <div onClick={() => setShowCart((prev) => !prev)} className="relative">
          <span className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-red-400 text-[10px] text-white lg:size-[12px]">
            {data?.data?.cart?.length || 0}
          </span>
          <ShoppingCart01Icon />
          {showCart && (
            <CartModal className="mt-[65px]" setShowCart={setShowCart} carts={data?.data?.cart} />
          )}
        </div>
        <UserCircleIcon />
      </div>
    </header>
  );
};

export default Topbar;
