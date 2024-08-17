'use client'

import Image from "next/image";
import React from "react";
import beauty from "@/assets/images/beauty.png";
import BlogCard, { blogs } from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";
import DeptHeader from "../fashion/(components)/dept-header";
import AllCategories from "../fashion/(components)/all-categories";
import { newArrivals } from "../(components)/reviews";

const Beauty = () => {
  return (
    <div className="flex flex-col lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <DeptHeader
          image={beauty}
          title="Beauty and Personal Care"
          description="From nourishing skincare solutions and vibrant makeup palettes to handcrafted bath products and aromatic fragrances, we offer a treasure trove of indulgences to enhance your natural beauty."
          className="justify-start overflow-y-hidden bg-[#A07E53] pl-[143px] text-blackPrimary text-white"
          imageClass="lg:w-[198px] object-cover"
        />
        <div className="mt-[40px]">
          <AllCategories products={newArrivals} />
        </div>
        <div className="my-[40px] py-[16px]">
          <ProductHeader heading="Blog" showBtn={true} />
          <div className="mt-[32px] flex gap-[24px] lg:flex-wrap">
            {blogs?.map((story, index) => (
              <BlogCard key={index} story={story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauty;
