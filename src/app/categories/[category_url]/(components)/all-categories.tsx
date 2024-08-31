'use client'

import ProductCard from "@/app/(components)/productCard";
import { ChevronRight } from "lucide-react";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const AllCategories = ({products}:{products:any}) => {
  return (
    <div className="flex max-lg:flex-col gap-x-[24px]">
      {/* Categories */}
      <aside className="flex lg:w-[294px] shrink-0 flex-col">
        <div className="max-lg:flex max-lg:justify-between ">
        <h4 className="font-openSans text-[16px] lg:text-[20px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary">
          All Categories
        </h4>
        <ChevronRight className="lg:hidden size-[16px]" />
        </div>
        <div className="max-lg:hidden"></div>
      </aside>
      <div className="lg:hidden mt-[16px] h-[1px] w-full bg-border"></div>
      {/* Products */}
      <main className="flex w-full flex-col max-lg:mt-[16px]">
        <div className="flex flex-col">
          {/* top heading / sort */}
          <div className="flex justify-between">
            <p className="font-openSans text-[16px] font-[600] text-[#101928]">
              {products?.products?.length} Products
            </p>
            <div className="flex items-center gap-x-[8px]">
              <span className="text-[16px] font-[400] leading-[23.2px]">
                Sort by:
              </span>
              <div className="flex items-center font-openSans text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
                <span className="">Most popular</span>
                <MdKeyboardArrowDown className="text-[24px]" />
              </div>
            </div>
          </div>
          {/* Filters */}
          <div className="flex items-center max:lg:text-[14px] gap-x-[12px] lg:gap-x-[24px] border-y-[1px] border-[#E4E7EC] mt-[24px] py-[12px]">
            <span className="font-openSans lg:text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
              Filters:
            </span>
            {/* Color */}
            <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Color
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div>
            {/* Price range */}
            <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Price range
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div>
            {/* Country */}
            <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Country
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div>
          </div>
          {/* Products */}
          <div className="grid max-lg:grid-cols-2 lg:grid-cols-3 mt-[32px] gap-x-[24px] gap-y-[24px]">
            {products?.products?.map((product:any, index:number)=>(
                <ProductCard key={index} product={product}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllCategories;
