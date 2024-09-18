"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/logo-sahara.png";
import usEnglish from "@/assets/images/englishUS.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { CartModal } from "./modals/cart-modal";
import Topnav from "./topnav";
import { usePathname, useRouter } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import { useAuth } from "@/utils/useAuth";
import Sidemenu from "../dashboard/(components)/sidemenu";
import {
  adminNavLinks,
  navlinks,
  sellersNavLinks,
} from "../sellers/dashboard/(components)/navlinks";
import { useCheckout } from "@/utils/useCheckout";

const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const path = usePathname();
  const { userType, token } = useAuth();
  const router = useRouter()
  // console.log(userType)
  const { data } = useGet("my-cart", "cart");
  const {searchQuery, setSearchQuery} = useCheckout()
  if (
    path.startsWith("/dashboard") ||
    path.startsWith("/sellers") ||
    path.startsWith("/admin")
  ) {
    return null;
  }
  
  const dashbLinks =
    userType == "user"
      ? navlinks
      : userType == "seller"
        ? sellersNavLinks
        : adminNavLinks;

        
  return (
    <div className={`${showCart && "sticky top-0 z-40 w-full"}`}>
      <Topnav />
      <div className="relative z-50 flex items-center justify-center bg-white px-[24px] text-blackPrimary max-lg:pt-[8px] lg:h-[80px] lg:px-[96px]">
        <div className="flex w-full items-center justify-between">
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
            <Link href={'/categories'} className="flex gap-x-[8px] max-lg:hidden">
              <span>All Categories</span>
              <MdOutlineKeyboardArrowDown />
            </Link>
            {/* Search box */}
            <form onSubmit={(e)=>{
                  e.preventDefault()
                  router.push(`/search/${searchQuery}`)
              }} className=" flex h-[36px] items-center gap-x-[12px] rounded-[24px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px] max-lg:hidden lg:w-[375px]">
              <CiSearch  className="text-[24px] text-[#8E97A6]" />
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                className="w-full focus:outline-none"
              />
            </form>
            {/* Language */}
            <div className="flex items-center gap-x-[8px] max-lg:hidden">
              <Image
                src={usEnglish}
                width={20}
                height={20}
                alt=""
                className=""
              />
              <span className="font-openSans text-[16px] font-[400] leading-[21.79px] text-black">
                EN (US)
              </span>
              <MdOutlineKeyboardArrowDown className="text-[20px]" />
            </div>
            {/* Fav & Cart */}
            <div className="flex items-center gap-x-[24px] text-[24px]">
              {/* Fav */}
              <div className="relative">
                <span className="absolute right-0 top-0 flex size-[12px] items-center justify-center rounded-full bg-red-400 text-[10px] text-white">
                  0
                </span>
                <CiHeart />
              </div>
              {/* Cart */}
              {userType =='user' &&
              <div
                onClick={() => setShowCart((prev) => !prev)}
                className="relative max-lg:hidden"
              >
                <span className="absolute right-0 top-0 flex size-[12px] items-center justify-center rounded-full bg-red-400 text-[10px] text-white">
                  {data?.data?.data?.cart?.length || 0}
                </span>
                <PiShoppingCartLight />
              </div>
}
              {/* Cart Mobile*/}
              {userType ==='user' &&             
              <Link href={"/cart"} className="relative lg:hidden">
                <span className="absolute right-0 top-0 flex size-[12px] items-center justify-center rounded-full bg-red-400 text-[10px] text-white">
                  {data?.data?.data?.cart?.length || 0}
                </span>
                <PiShoppingCartLight />
              </Link>
              }
              {/* Mobile menu */}
            {token&&   <div>
                <RiMenu2Line
                  onClick={() => setShowMenu(true)}
                  className="text-[22px]"
                />
                {showMenu && (
                  <div className="fixed inset-0 h-screen w-full bg-white lg:hidden">
                    <div className="h-full overflow-y-scroll">
                      <Sidemenu setShowMenu={setShowMenu} links={dashbLinks} />
                    </div>
                  </div>
                )}
              </div>}
            </div>
          </div>
          {/* Account */}
          <div className="flex gap-x-[32px] max-lg:hidden">
            <Link
              href={"/sellers"}
              className="cursor-pointer font-openSans text-[16px] font-[600] leading-[23.2px] text-black"
            >
              Sellers Center
            </Link>
            <Link
              href={`${userType == "seller" ? "/sellers/dashboard" : "/dashboard"}`}
              className="cursor-pointer font-openSans text-[16px] font-[600] leading-[23.2px] text-black"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>
      {showCart && (
        <CartModal carts={data?.data?.data?.cart} setShowCart={setShowCart} />
      )}
    </div>
  );
};

export default Header;
