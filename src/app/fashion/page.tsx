import Image from "next/image";
import React from "react";
import woman from "@/assets/images/fashion-woman.png";
import AllCategories from "./(components)/all-categories";
import { blogs } from "../page";
import BlogCard from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";

const Fashion = () => {
  return (
    <div className="flex flex-col lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
        <div className="">
          {/* header */}
          <div className="flex h-[120px] items-center justify-center rounded-[8px] bg-[#F9C74F]">
            <Image
              width={381}
              height={254}
              alt="African woman"
              src={woman}
              className="absolute lg:left-[23%]"
            />
            <h1 className="font-playfair text-[60px] font-[700] leading-[87px] text-blackPrimary">
              Fashion
            </h1>
          </div>
          <p className="mt-[12px] font-openSans text-[16px] font-[400] leading-[23.2px] text-black">
            Discover a world of captivating and traditional fashion, from
            stunning wax dresses and modern loincloths to handcrafted gold and
            cowrie shell jewelry, rich bogolan accessories, and dazzling wedding
            outfits. We offer fast worldwide delivery, bringing a touch of
            African elegance straight to your doorstep.
          </p>
        </div>
        <div className="mt-[40px]">
          <AllCategories />
        </div>
        <div className="my-[40px] py-[16px]">
            <ProductHeader heading="Blog" showBtn={true}/>
        <div className="flex lg:flex-wrap gap-[24px] mt-[32px]">
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
