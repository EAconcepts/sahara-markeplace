import Image from "next/image";
import React from "react";
import handmade from "@/assets/images/handmade.png";
import { blogs, newArrivals } from "../page";
import BlogCard from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";
import DeptHeader from "../fashion/(components)/dept-header";
import AllCategories from "../fashion/(components)/all-categories";

const HandmadeProducts = () => {
  return (
    <div className="flex flex-col lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <DeptHeader
          image={handmade}
          title="Handmade Product"
          description="Explore a world of handcrafted treasures, bursting with vibrant colors and rich traditions. From stunning wax print creations and intricate beadwork to handwoven baskets and unique sculptures, we offer a collection of authentic African-made products that tell a story."
          className="justify-start overflow-y-hidden bg-[#F9C74F] pl-[143px] text-blackPrimary "
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

export default HandmadeProducts;
