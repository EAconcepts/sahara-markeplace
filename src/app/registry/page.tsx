import Image from "next/image";
import React from "react";
import registry from "@/assets/images/registry.png";
import { blogs } from "../page";
import BlogCard from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";
import DeptHeader from "../fashion/(components)/dept-header";
import AllCategories from "../fashion/(components)/all-categories";
import { newArrivals } from "../(components)/reviews";

const Registry = () => {
  return (
    <div className="flex flex-col pt-[40px] lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <DeptHeader
          image={registry}
          title="Registry"
          description="From nourishing skincare solutions and vibrant makeup palettes to handcrafted bath products and aromatic fragrances, we offer a treasure trove of indulgences to enhance your natural beauty."
          className="justify-center overflow-y-hidden bg-[#A07E53] text-white "
          imageClass="lg:w-[171.52px] absolute left-[34%] object-cover  "
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

export default Registry;
