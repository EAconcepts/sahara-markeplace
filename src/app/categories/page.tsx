'use client'

import Image from "next/image";
import React from "react";
import woman from "@/assets/images/fashion-woman.png";
import { newArrivals } from "@/app/(components)/reviews";
import ProductHeader from "@/app/(components)/product-header";
import BlogCard, { blogs } from "@/app/(components)/blog-card";
import { useParams } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import DeptHeader from "./[category_url]/(components)/dept-header";
import AllCategories from "./[category_url]/(components)/all-categories";

const Categories = () => {
//   const {category_url} = useParams()
  const {data} = useGet(`cata/prod`,'all-categories')
//   console.log(data)
  const categories = data?.data?.data?.products
  return (
    <div className="flex flex-col px-[24px] lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
       <DeptHeader image={woman} title={"All Categories"} description="Discover a world of captivating and traditional fashion, from stunning wax dresses and modern loincloths to handcrafted gold and cowrie shell jewelry, rich bogolan accessories, and dazzling wedding outfits. We offer fast worldwide delivery, bringing a touch of African elegance straight to your doorstep." className=" text-blackPrimary" imageClass="lg:absolute max-lg:w-[50%] lg:left-[23%] lg:h-[254px object-cover"/>
        <div className="mt-[40px]">
          <AllCategories products={data?.data?.data}/>
        </div>
        <div className="my-[40px] py-[16px]">
            <ProductHeader heading="Blog" showBtn={true}/>
        <div className="flex flex-wrap max-lg:gap-[16px] lg:gap-[24px] mt-[32px]">
          {
            blogs?.map((story, index)=>(
                <BlogCard key={index} story={story}/>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
