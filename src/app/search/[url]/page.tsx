'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import woman from "@/assets/images/fashion-woman.png";
import { newArrivals } from "@/app/(components)/reviews";
import ProductHeader from "@/app/(components)/product-header";
import BlogCard, { blogs } from "@/app/(components)/blog-card";
import { useParams } from "next/navigation";
import { useGet } from "@/utils/useGet.";
import DeptHeader from "@/app/categories/[category_url]/(components)/dept-header";
import AllCategories from "@/app/categories/[category_url]/(components)/all-categories";
import { useCheckout } from "@/utils/useCheckout";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SearchResult = () => {
  const [searchResults, setSearchResults]= useState()
  const category_url = useParams().url
  const {searchQuery} = useCheckout()
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const searchMutation =useMutation({
    mutationFn: ()=>axios.post(`${baseUrl}/search-results`, {search:searchQuery}),
    onSuccess:((data)=>{
      console.log(data)
      setSearchResults(data?.data?.data)
    }),
    onError:((error)=>{
      console.log(error)
    })
  })

  useEffect(()=>{
    searchMutation.mutate()
  },[])
  // const categories = data?.data?.data?.categories
  return (
    <div className="flex flex-col px-[24px] lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
       <DeptHeader image={woman} title={decodeURIComponent( category_url?.toString())} description="Discover a world of captivating and traditional fashion, from stunning wax dresses and modern loincloths to handcrafted gold and cowrie shell jewelry, rich bogolan accessories, and dazzling wedding outfits. We offer fast worldwide delivery, bringing a touch of African elegance straight to your doorstep." className=" text-blackPrimary" imageClass="lg:absolute max-lg:w-[50%] lg:left-[23%] lg:h-[254px object-cover"/>
        <div className="mt-[40px]">
          <AllCategories products={searchResults}/>
        </div>
        <div className="my-[40px] py-[16px]">
            <ProductHeader heading="Blog" showBtn={true}/>
        <div className="grid lg:grid-cols-4 grid-cols-2 max-lg:gap-[16px] lg:gap-[24px] mt-[32px]">
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

export default SearchResult;
