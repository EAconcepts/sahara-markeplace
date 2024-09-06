'use client'

import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "../(components)/last-updated";
import { AddCircleIcon } from "hugeicons-react";
import ProductCard from "../(components)/product-card";
// import { newArrivals } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import { useRouter } from "next/navigation";

const ProductListings = () => {
  const {data, updatedAt } = useGet("vendor/products", 'vendorProducts')
  console.log(data)
  const router = useRouter()
  return (
    <div className="pt-[8px] max-lg:px-[24px]">
      {/* Updated */}
      <LastUpdated updatedAt={updatedAt} queryKey={"vendorProducts"} />
      <div className="mt-[12px] py-[16px]"></div>
      {/* Header */}
      <div className="hidden lg:block">
      <Header
      onBtnClick={()=>router.push("/sellers/dashboard/add-product")}
        title="Product List"
        BtnIcon={AddCircleIcon} 
        btnText="Add Products"
        btnClass="max-lg:h-[47px] rounded-[12px]"
      />
      </div>
      <div className="lg:hidden">
       <Header
      onBtnClick={()=>router.push("/sellers/dashboard/add-product")}
        title="Product List"
        className="max-lg:text-[16px]"
        BtnIcon={AddCircleIcon} 
        btnText=""
        btnClass="max-lg:size-[24px]"
      />
      </div>
      <div className="flex justify-between max-lg:mt-[16px]">
        <div className="flex gap-x-[12px] ">
          <p className="bg-[#C4D79B] py-[8px] px-[12px] text-center rounded-[6px] border-[1px] border-border font-[600] text-[14px] leading-[20.3px] text-black">{data && data?.data?.products?.length} Products</p>
        </div>
      </div>
      {/* Products */}
      <div className="flex flex-wrap max-lg:gap-y-[16px] gap-x-[16px] py-[24px]">
        {data && data?.data?.data?.products?.map((product:any)=>(
          <ProductCard key={product?.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductListings;
