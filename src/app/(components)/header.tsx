
'use client'

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo-sahara.png";
import usEnglish from "@/assets/images/englishUS.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { CartModal } from "./modals/cart-modal";
import Topnav from "./topnav";

const Header = () => {
  const [showCart, setShowCart] = useState(false)
  return (
    <div className={`${showCart && 'sticky z-40 top-0 w-full'}`}>
    <Topnav/>
    <div className="flex bg-white relative items-center z-50 justify-center px-[24px] text-blackPrimary max-lg:pt-[8px] lg:h-[80px] lg:px-[96px]">
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
          <div className="flex gap-x-[8px] max-lg:hidden">
            <span>All Categories</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          {/* Search box */}
          <form className="flex h-[36px] items-center gap-x-[12px] rounded-[24px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px] max-lg:hidden lg:w-[375px]">
            <CiSearch className="text-[24px] text-[#8E97A6]" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full focus:outline-none"
            />
          </form>
          {/* Language */}
          <div className="flex items-center gap-x-[8px] max-lg:hidden">
            <Image src={usEnglish} width={20} height={20} alt="" className="" />
            <span className="font-openSans text-[16px] font-[400] leading-[21.79px] text-black">
              EN (US)
            </span>
            <MdOutlineKeyboardArrowDown className="text-[20px]" />
          </div>
          {/* Fav & Cart */}
          <div className="flex items-center gap-x-[24px] text-[24px]">
            <div className="relative">
              <span className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-red-400 text-[10px] text-white lg:size-[12px]">
                0
              </span>
              <CiHeart />
            </div>
            <div onClick={()=>setShowCart((prev)=>!prev)} className="relative">
              <span className="absolute right-0 top-0 flex items-center justify-center rounded-full bg-red-400 text-[10px] text-white lg:size-[12px]">
                0
              </span>
              <PiShoppingCartLight />
            </div>
            {/* Mobile menu */}
            <div>
              <RiMenu2Line className="text-[22px]" />
            </div>
          </div>
        </div>
        {/* Account */}
        <div className="flex gap-x-[32px] max-lg:hidden">
          <Link
            href={"/sellers-center"}
            className="font-openSans text-[16px] font-[600] leading-[23.2px] text-black"
          >
            Sellers Center
          </Link>
          <Link
            href={"/my-account"}
            className="font-openSans text-[16px] font-[600] leading-[23.2px] text-black"
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
    {showCart && <CartModal setShowCart={setShowCart}/>}

    </div>
  );
};

export default Header;
