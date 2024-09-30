"use client";

import Image from "next/image";
import React from "react";
import { VscArrowSmallRight } from "react-icons/vsc";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const Department = ({ categories }: { categories: any }) => {
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <div className="pt-[16px] max-lg:w-full">
      <h3 className="font-playfair text-[30px] font-[700] leading-[43.5px] text-blackPrimary">
        Choose Department
      </h3>
      <div className="mt-[32px] flex flex-wrap gap-[24px] max-lg:w-full">
        {categories?.slice(0, 6).map((dept: any) => (
          <Link
            href={`/categories/${encodeURIComponent(dept?.name)}`}
            className="relative first:w-[504px] last:w-[504px] max-lg:w-full max-lg:first:w-full max-lg:last:w-full lg:w-[347px]"
            key={dept?.id}
          >
            <Image
              src={`${imageBaseUrl}/${dept?.image}`}
              alt={dept?.name}
              width={504}
              height={240}
              className={twMerge(
                `lg:w-[504p overflow-hidden rounded-[8px] border object-cover max-lg:h-[200px] max-lg:max-w-full lg:h-[240px]`,
                dept?.className,
              )}
            />
            <div className="absolute bottom-[12px] flex w-full items-center justify-between px-[36px]">
              <span className="font-openSans text-[16px] font-[700] leading-[34.8px] text-white lg:text-[24px]">
                {dept?.name}
              </span>
              <VscArrowSmallRight className="text-[24px] text-white lg:text-[36px]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Department;
