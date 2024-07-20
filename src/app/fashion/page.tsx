import Image from "next/image";
import React from "react";
import woman from "@/assets/images/fashion-woman.png";
import AllCategories from "./(components)/all-categories";
import { blogs, newArrivals } from "../page";
import BlogCard from "../(components)/blog-card";
import ProductHeader from "../(components)/product-header";
import DeptHeader from "./(components)/dept-header";

const Fashion = () => {
  return (
    <div className="flex flex-col lg:px-[96px]">
      {/* BreadCrumb */}
      <div></div>
      <div className="flex flex-col">
       <DeptHeader image={woman} title="Fashion" description="Discover a world of captivating and traditional fashion, from stunning wax dresses and modern loincloths to handcrafted gold and cowrie shell jewelry, rich bogolan accessories, and dazzling wedding outfits. We offer fast worldwide delivery, bringing a touch of African elegance straight to your doorstep." className=" text-blackPrimary" imageClass="absolute left-[23%] h-[254px object-cover"/>
        <div className="mt-[40px]">
          <AllCategories products={newArrivals}/>
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
