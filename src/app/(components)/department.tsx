'use client'

import Image from "next/image";
import React from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const Department = ({categories}:{categories:any}) => {
 
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <div className="pt-[16px]">
      <h3 className="font-[700] text-[30px] leading-[43.5px] font-playfair text-blackPrimary">
        Choose Department
      </h3>
      <div className="flex flex-wrap gap-[24px] mt-[32px] ">
        {categories?.slice(0,6).map((dept:any) => (
          <Link href={`/categories/${encodeURIComponent(dept?.name)}`} className="relative border lg:w-[347px] first:w-[504px] last:w-[504px]" key={dept?.id}>
            <Image
              src={`${imageBaseUrl}/${dept?.image}`}
              alt={dept?.name}
              width={504}
              height={240}
              className={twMerge(
                ` rounded-[8px] max-lg:h-[200px] lg:w-[504p lg:h-[240px] object-cover`,
                dept?.className
              )}
            />
            <div className="flex w-full justify-between items-center absolute  bottom-[12px] px-[36px]">
              <span className="text-white  text-[16px] lg:text-[24px] leading-[34.8px] font-[700] font-openSans">
                {dept?.name}
              </span>
              <VscArrowSmallRight className="text-white text-[24px] lg:text-[36px]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
