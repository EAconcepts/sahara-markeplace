// 'use client'

import Image from "next/image";
import Hero from "./(components)/hero";
import Department from "./(components)/department";
import NewArrival from "./(components)/newArrival";
import Registry from "./(components)/registry";
import arrival1 from "@/assets/images/arrival1.png";
import arrival2 from "@/assets/images/arrival2.png";
import arrival3 from "@/assets/images/arrival3.png";
import arrival4 from "@/assets/images/arrival4.png";
import ghana from "@/assets/images/ghana.svg";
import SpecialTreats from "./(components)/special-treats";
import blog1 from "@/assets/images/blog1.png";
import blog2 from "@/assets/images/blog2.png";
import blog3 from "@/assets/images/blog3.png";
import blog4 from "@/assets/images/blog4.png";
import BlogCard from "./(components)/blog-card";
import Testimonies from "./(components)/testimonies";
import Newsletter from "./(components)/newsletter";
import { useGet } from "@/utils/useGet.";
import axios from "axios";
import { useEffect } from "react";

export  const newArrivals = [
  {
    image: arrival1,
    title: "Handmade Bag",
    country: ghana,
    rating: 10,
    price: 59.99,
  },
  {
    image: arrival2,
    title: "Laboma rings",
    country: ghana,
    rating: 10,
    price: 12.99,
  },
  {
    image: arrival3,
    title: "Maasai sandals",
    country: ghana,
    rating: 10,
    price: 46.99,
  },
  {
    image: arrival4,
    title: "Bogolan Wax Fabrics",
    country: ghana,
    rating: 10,
    price: 23.99,
  },
  {
    image: arrival1,
    title: "Handmade Bag",
    country: ghana,
    rating: 10,
    price: 59.99,
  },
  {
    image: arrival2,
    title: "Laboma rings",
    country: ghana,
    rating: 10,
    price: 12.99,
  },
  {
    image: arrival3,
    title: "Maasai sandals",
    country: ghana,
    rating: 10,
    price: 46.99,
  },
  {
    image: arrival4,
    title: "Bogolan Wax Fabrics",
    country: ghana,
    rating: 10,
    price: 23.99,
  },
];
export  const blogs = [
  {
    image: blog1,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog2,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog3,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
  {
    image: blog4,
    title: "The Language of Colors Spoken by the Maasai",
    content:
      "Red isn't just a color in Maasai culture, it's a symbol of bravery, strength, and unity. Their vibrant garments, adorned with intricate beadwork, tell stories...",
  },
];
export default function Home() {
 
  // const {data} = useGet("", "products")
  // console.log(data)

//   const getProducts=async()=>{
//     try{
//     const res = await axios.get("https://samcleans.com/sahara/api/v1/")
//     console.log(res)
//     }catch(e){console.log(e)
//   }}
//   useEffect(()=>{
// getProducts()
//   },[])
  return (
    <main className="lg:px-[96px] mt-[40px] pt-[12px] pb-[32px]">
      <Hero />
      <div className="mt-[40px]">
        <Department />
      </div>
      <div className="mt-[40px]">
        <NewArrival newArrivals={newArrivals} />
      </div>
      <div className="mt-[40px]">
        <Registry heading={"Shop by Registry"} products={newArrivals} />
      </div>
      <div className="mt-[40px]">
        <SpecialTreats />
      </div>
      {/* Blogs */}
      <div className="mt-[40px] pt-[16px]">
        <div className="flex mt-[32px] gap-[24px]">{
          blogs?.map((story, index)=>(
            <BlogCard key={index} story={story}/>
          ))}</div>
      </div>
      <div className="mt-[40px] py-[16px]">
        <Testimonies />
      </div>
      <div className="mt-[40px] ">
        <Newsletter />
      </div>
    </main>
  );
}
