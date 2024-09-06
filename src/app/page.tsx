'use client'

import Image from "next/image";
import Hero from "./(components)/hero";
import Department from "./(components)/department";
import NewArrival from "./(components)/newArrival";
import Registry from "./(components)/registry";
import SpecialTreats from "./(components)/special-treats";
import BlogCard, { blogs } from "./(components)/blog-card";
import Testimonies from "./(components)/testimonies";
import Newsletter from "./(components)/newsletter";
import { useGet } from "@/utils/useGet.";
import axios from "axios";
import { useEffect } from "react";
import { newArrivals } from "./(components)/reviews";
import Loader from "./(components)/loader";



export default function Home() {
 
  const {data} = useGet("cata/prod", "products")
  console.log(data)


  return (
    <main className="lg:px-[96px] lg:mt-[40px] max-lg:px-[24px] lg:pt-[12px] lg:pb-[32px]">
      <Hero />
      <div className="mt-[40px]">
      {data?.data?.data?.categories ? 

        <Department categories = {data?.data?.data?.categories} />
        :<Loader/>
      }
      </div>
      <div className="mt-[40px]">
        {/* {data?.data?.products ?  */}
        <NewArrival newArrivals={data?.data?.data?.products} />
         {/* : <Loader/>} */}
      </div>
      <div className="mt-[40px]">
      {/* {data?.data?.products ?  */}

        <Registry heading={"Shop by Registry"} products={data?.data?.data?.products?.slice(10, 16)} />
        {/* : <Loader/>} */}
      </div>
      <div className="mt-[40px] max-lg:hidden">
        <SpecialTreats />
      </div>
      {/* Blogs */}
      <div className="mt-[40px] pt-[16px]">
        <div className="flex max-lg:flex-wrap mt-[32px] gap-[16px] lg:gap-[24px]">{
          blogs?.map((story, index)=>(
            <BlogCard key={index} story={story}/>
          ))}</div>
      </div>
      <div className="mt-[40px] py-[16px]">
        <Testimonies />
      </div>
      <div className="mt-[40px] max-lg:mb-[24px]">
        <Newsletter />
      </div>
    </main>
  );
}
