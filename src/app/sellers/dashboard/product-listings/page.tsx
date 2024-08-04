import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "../(components)/last-updated";
import { AddCircleIcon } from "hugeicons-react";
import ProductCard from "../(components)/product-card";
import { newArrivals } from "@/app/page";

const ProductListings = () => {
  return (
    <div className="pt-[8px]">
      {/* Updated */}
      <LastUpdated />
      <div className="mt-[12px] py-[16px]"></div>
      {/* Header */}
      <Header
        title="Product List"
        BtnIcon={AddCircleIcon}
        btnText="Add Products"
        btnClass="h-[47px] rounded-[12px]"
      />
      <div className="flex justify-between">
        <div className="flex gap-x-[12px] ">
          <p className="bg-[#C4D79B] py-[8px] px-[12px] text-center rounded-[6px] border-[1px] border-border font-[600] text-[14px] leading-[20.3px] text-black">165 Products</p>
        </div>
      </div>
      {/* Products */}
      <div className="flex flex-wrap gap-x-[16px] py-[24px]">
        {newArrivals?.map((product, index)=>(
          <ProductCard key={index} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductListings;
