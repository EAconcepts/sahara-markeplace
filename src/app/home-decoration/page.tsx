import Image from "next/image";
import React from "react";
import home from "@/assets/images/home.png";
import { blogs } from "../page";
import BlogCard from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";
import DeptHeader from "../fashion/(components)/dept-header";
import AllCategories from "../fashion/(components)/all-categories";
import { newArrivals } from "../(components)/reviews";

const HomeDecoration = () => {
  return (
    <div className="flex flex-col lg:px-[96px] pt-[40px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <DeptHeader
          image={home}
          title="Home Decoration and Garden"
          description="From unique handcrafted homeware and botanical treasures to stylish furniture and sustainable gardening essentials, we offer everything you need to cultivate a space that reflects your personality."
          className="justify-start overflow-y-hidden bg-[#7D9A37] text-white "
          imageClass="lg:w-[298px] object-cover "
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

export default HomeDecoration;
