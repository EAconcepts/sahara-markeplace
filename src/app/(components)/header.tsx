import Image from "next/image";
import React from "react";
import logo from "@/assets/images/logo-sahara.png";
import usEnglish from "@/assets/images/englishUS.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center text-blackPrimary lg:px-[96px] items-center lg:h-[80px]">
      <div className="flex items-center justify-between w-full">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="logo"
          className="lg:size-[80px] "
        />
        <div className="flex items-center gap-x-[24px] ">
          <div className="flex gap-x-[8px]">
            <span>All Categories</span>
            <MdOutlineKeyboardArrowDown />
          </div>
          {/* Search box */}
          <form className="flex lg:w-[375px] items-center h-[36px] bg-white py-[8px] px-[12px] gap-x-[12px] border-[0.5px] border-[#8E97A6] rounded-[24px]">
            <CiSearch className="text-[24px] text-[#8E97A6]" />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full focus:outline-none"
            />
          </form>
          {/* Language */}
          <div className="flex gap-x-[8px] items-center">
            <Image src={usEnglish} width={20} height={20} alt="" className="" />
            <span className="text-[16px] font-[400] leading-[21.79px] text-black font-openSans">
              EN (US)
            </span>
            <MdOutlineKeyboardArrowDown className="text-[20px]" />
          </div>
          {/* Fav & Cart */}
          <div className="flex items-center text-[24px] gap-x-[24px]">
            <div className="relative">
              <span className="lg:size-[12px] absolute top-0 right-0 flex items-center justify-center rounded-full text-white bg-red-400 text-[10px]">
                0
              </span>
              <CiHeart />
            </div>
            <div className="relative">
              <span className="lg:size-[12px] absolute top-0 right-0 flex items-center justify-center rounded-full text-white bg-red-400 text-[10px]">
                0
              </span>
              <PiShoppingCartLight />
            </div>
          </div>
        </div>
        {/* Account */}
        <div className="flex gap-x-[32px]">
          <Link
            href={"/sellers-center"}
            className="text-[16px] font-[600] leading-[23.2px] font-openSans text-black"
          >
            Sellers Center
          </Link>
          <Link
            href={"/my-account"}
            className="text-[16px] font-[600] leading-[23.2px] font-openSans text-black"
          >
            My Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
