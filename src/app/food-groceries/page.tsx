import React from 'react'
import DeptHeader from '../fashion/(components)/dept-header'
import AllCategories from '../fashion/(components)/all-categories'
import ProductHeader from '../(components)/product-header'
import { blogs, newArrivals } from '../page'
import BlogCard from '../(components)/blog-card'
import basket from "@/assets/images/food.png"

const Food = () => {
  return (
    <div className="flex flex-col lg:px-[96px]">
    {/* BreadCrumb */}
    <div></div>
    <div className="flex flex-col">
     <DeptHeader image={basket} title="Food Items and Groceries" description="Discover a world of captivating and authentic flavors. From aromatic spice blends and zesty sauces to unique grains and exotic fruits, we offer a treasure trove of ingredients to elevate your meals." imageClass='lg:w-[198px] lg:h-[120px]' className="bg-[#7D9A37] justify-start text-white pl-[91px]"/>
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
  )
}

export default Food