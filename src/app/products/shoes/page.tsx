import Image from "next/image";
import React from "react";
import shoes from "@/assets/images/shoes.png";
import DeptHeader from "@/app/fashion/(components)/dept-header";
import AllCategories from "@/app/fashion/(components)/all-categories";
import { blogs, newArrivals } from "@/app/page";
import ProductHeader from "@/app/(components)/product-header";
import BlogCard from "@/app/(components)/blog-card";

const Accessories = () => {
  return (
    <div className="flex flex-col pt-[40px] lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <DeptHeader
          image={shoes}
          title="Shoes"
          description="Discover a world of captivating and traditional fashion, from stunning wax dresses and modern loincloths to handcrafted gold and cowrie shell jewelry, rich bogolan accessories, and dazzling wedding outfits. We offer fast worldwide delivery, bringing a touch of African elegance straight to your doorstep."
          className="justify-center overflow-y-hidden bg-[#A27A4D] text-white"
          imageClass="lg:w-[312px] absolute left-[26%] object-cover "
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

export default Accessories;
