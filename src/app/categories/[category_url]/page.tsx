'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import woman from "@/assets/images/fashion-woman.png";
import AllCategories from "./(components)/all-categories";
import DeptHeader from "./(components)/dept-header";
import { newArrivals } from "@/app/(components)/reviews";
import ProductHeader from "@/app/(components)/product-header";
import BlogCard, { blogs } from "@/app/(components)/blog-card";
import { useParams } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import { getUnderPrice } from "@/app/page";

const Fashion = () => {
  const {category_url} = useParams()
  const [underPrice, setUnderPrice] = useState([])
  const {data} = useGet(`category/${decodeURIComponent(category_url.toString())}`,decodeURIComponent(category_url.toString()))
  console.log(data)
  const categories = data?.data?.data?.categories
  const { data:products } = useGet("cata/prod", "products");


  useEffect(()=>{
    if(decodeURIComponent(category_url.toString()) =="under_$400"){
      getUnderPrice(products?.data?.data, 400,setUnderPrice)
    }
  },[products])
  return (
    <div className="flex flex-col px-[24px] lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
       <DeptHeader image={woman} title={decodeURIComponent( category_url.toString())} description="Discover a world of captivating and traditional fashion, from stunning wax dresses and modern loincloths to handcrafted gold and cowrie shell jewelry, rich bogolan accessories, and dazzling wedding outfits. We offer fast worldwide delivery, bringing a touch of African elegance straight to your doorstep." className=" text-blackPrimary" imageClass="lg:absolute max-lg:w-[50%] lg:left-[23%] lg:h-[254px object-cover"/>
        <div className="mt-[40px]">
          <AllCategories products={data?.data?.data} underPrice={underPrice}/>
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

export default Fashion;
