"use client";

import Loader from "@/app/(components)/loader";
import ProductCard from "@/app/(components)/productCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const AllCategories = ({ products, underPrice }: { products: any; underPrice?:never[] }) => {
  // console.log(products)
  return (
    <div className="flex gap-x-[24px] max-lg:flex-col">
      {/* Categories */}
      <aside className="flex shrink-0 flex-col pr-[12px] lg:w-[294px]">
        <div className="max-lg:flex max-lg:justify-between">
          <h4 className="font-openSans text-[16px] font-[600] leading-[24px] tracking-[2%] text-blackPrimary lg:text-[20px]">
            All Categories
          </h4>
          <ChevronRight className="size-[16px] lg:hidden" />
        </div>
        <div className="sticky top-[76px] mt-[24px] flex h-[calc(100vh-76px)] flex-col gap-[16px] overflow-hidden overflow-y-scroll max-lg:hidden">
          {products?.categories?.map((catg: any) => (
            <Link
              href={`/categories/${catg.name}`}
              className="border-b-[1px] border-border pb-[24px] text-start"
              key={catg?.id}
            >
              {catg.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="mt-[16px] h-[1px] w-full bg-border lg:hidden"></div>
      {/* Products */}
      {products ? (
        <main className="flex w-full flex-col max-lg:mt-[16px]">
          <div className="flex flex-col">
            {/* top heading / sort */}
            <div className="flex justify-between">
              <p className="font-openSans text-[16px] font-[600] text-[#101928]">
                {underPrice ? underPrice.length : products?.products?.length} Products
              </p>
              {/* Sort */}
              {/* <div className="flex items-center gap-x-[8px]">
              <span className="text-[16px] font-[400] leading-[23.2px]">
                Sort by:
              </span>
              <div className="flex items-center font-openSans text-[14px] font-[600] leading-[20.3px] text-[#7D9A37]">
                <span className="">Most popular</span>
                <MdKeyboardArrowDown className="text-[24px]" />
              </div>
            </div> */}
            </div>
            {/* Filters */}
            {/* <div className="flex items-center max:lg:text-[14px] gap-x-[12px] lg:gap-x-[24px] border-y-[1px] border-[#E4E7EC] mt-[24px] py-[12px]"> */}
            {/* <span className="font-openSans lg:text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
              Filters:
            </span> */}
            {/* Color */}
            {/* <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Color
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div> */}
            {/* Price range */}
            {/* <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Price range
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div> */}
            {/* Country */}
            {/* <div className="flex items-center gap-x-[8px]">
              <span className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                Country
              </span>
              <MdKeyboardArrowDown className="text-[18px]" />
            </div> */}
            {/* </div> */}
            {/* Products */}
            <div className="mt-[32px] grid gap-x-[24px] gap-y-[24px] max-lg:grid-cols-2 lg:grid-cols-3">
              {underPrice ? underPrice.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              )) 
              : products?.products?.map((product: any, index: number) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AllCategories;
