"use client";

import { useAuth } from "@/utils/useAuth";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";

const Topnav = () => {
  const { token } = useAuth();
  return (
    <header className="flex relative z-50 h-[75px] w-full justify-between bg-[#C4D79B] px-[24px] py-[12px] font-openSans max-lg:flex-col lg:h-[62px] lg:px-[96px] lg:py-[12px]">
      <div className="flex items-center gap-x-[4px] ">
        <CiMail className="lg:text-[16px] text-[12px]" />
        <span className="lg:text-[16px]  text-[12px] font-[400] leading-[16.34px] text-blackPrimary">
          info@saharaeagles.com
        </span>
      </div>
     
      <nav className="flex gap-x-[20px] text-[14px] text-blackPrimary max-lg:mt-[12px] max-lg:font-[600] max-lg:leading-[19.07px] lg:gap-x-[32px] lg:p-[8px]">
        <Link
          href={"/recipes"}
          className="hidden font-openSans lg:block lg:text-[16px] lg:leading-[21.79px]"
        >
          Recipes
        </Link>
        <Link
          href={"/blogs"}
          className="font-openSans max-lg:hidden lg:text-[16px] lg:leading-[21.79px]"
        >
          Blog
        </Link>
        <Link
          href={"/sellers"}
          className="font-openSans lg:text-[16px] lg:leading-[21.79px]"
        >
          Sellers Account
        </Link>
        <Link
          href={"faqs"}
          className="font-openSans lg:text-[16px] lg:leading-[21.79px]"
        >
          FAQs
        </Link>
        {!token && (
          <Link
            href={"/auth/signin"}
            className="font-openSans lg:text-[16px] lg:leading-[21.79px]"
          >
            Sign In
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Topnav;
