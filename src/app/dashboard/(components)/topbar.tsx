"use client";

import { CartModal } from "@/app/(components)/modals/cart-modal";
import { useAuth } from "@/utils/useAuth";
import { useGet } from "@/utils/useGet.";
import {
  FavouriteIcon,
  Menu11Icon,
  ShoppingCart01Icon,
  UserCircleIcon,
} from "hugeicons-react";
import React, { useState } from "react";
import Sidemenu from "./sidemenu";
// import { navlinks } from "@/app/sellers/dashboard/(components)/navlinks";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo-sahara.png";
import Link from "next/link";

const Topbar = ({links}:{links?:any}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const router = useRouter();
  const { user, userType } = useAuth();
  const [showCart, setShowCart] = useState<boolean>(false);
  // console.log(user)
  const { data } = useGet("my-cart", "cart");

  return (
    <header className="flex h-[66px] max-lg:px-[24px] w-full items-center justify-between border-b-[1px] border-border pb-[16px] pt-[8px]">
      <h2 className="hidden font-playfair text-[28px] font-[600] capitalize leading-[40.6px] text-blackPrimary lg:block">
        Welcome, {user?.first_name}
      </h2>
      <Link href={"/"}>
        <Image
          src={logo}
          width={80}
          height={80}
          alt="logo"
          className="size-[48px] lg:size-[80px]"
        />
      </Link>
      <div className="flex items-center gap-x-[24px]">
        <FavouriteIcon />
        {/* <ShoppingCart01Icon/> */}
        {/* Cart */}
        <div
          onClick={() => setShowCart((prev) => !prev)}
          className="relative hidden lg:block"
        >
          <span className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-red-400 text-[10px] text-white lg:size-[12px]">
            {data?.data?.cart?.length || 0}
          </span>
          <ShoppingCart01Icon />
          {showCart && (
            <CartModal
              className="mt-[65px]"
              setShowCart={setShowCart}
              carts={data?.data?.cart}
            />
          )}
        </div>
        {/* Cart  Mobile*/}
          {userType =='user' &&
        <div
          onClick={() => router.push("/cart")}
          className="relative lg:hidden"
        >
          <span className="absolute right-0 top-0 flex size-[12px] items-center justify-center rounded-full bg-red-400 text-[10px] text-white">
            {data?.data?.cart?.length || 0}
          </span>
          <ShoppingCart01Icon />
        </div>
}
        <UserCircleIcon className="hidden lg:block" />
        <Menu11Icon
          onClick={() => setShowMenu((prev) => true)}
          className="lg:hidden"
        />
      </div>
      {showMenu && (
        <div className="fixed inset-0 h-screen w-full bg-white lg:hidden">
          <div className="h-full overflow-y-scroll">
            <Sidemenu setShowMenu={setShowMenu} links={links} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;
