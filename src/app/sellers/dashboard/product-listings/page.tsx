"use client";

import { Header } from "@/app/dashboard/(components)/header";
import LastUpdated from "../(components)/last-updated";
import { AddCircleIcon } from "hugeicons-react";
import ProductCard from "../(components)/product-card";
// import { newArrivals } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import { useRouter } from "next/navigation";
import Loader from "@/app/(components)/loader";
import Pagination from "../(components)/pagination";
import { useState } from "react";

const ProductListings = () => {
  const { data, updatedAt, isPending } = useGet(
    "vendor/products",
    "vendorProducts",
  );
  // console.log(data)
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const objectsPerPage =10
  const totalPages =data && Math.ceil(data?.data?.data?.products?.length / objectsPerPage);
  const startIndex = (currentPage - 1) * objectsPerPage;
  const endIndex = startIndex + objectsPerPage;
  let currentObjects = data && data?.data?.data?.products.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
   
  };

  return (
    <div className="pt-[8px] max-lg:px-[24px]">
      {/* Updated */}
      <LastUpdated updatedAt={updatedAt} queryKey={"vendorProducts"} />
      <div className="mt-[12px] py-[16px]"></div>
      {/* Header */}
      <div className="hidden lg:block">
        <Header
          onBtnClick={() => router.push("/sellers/dashboard/add-product")}
          title="Product List"
          BtnIcon={AddCircleIcon}
          btnText="Add Products"
          btnClass="max-lg:h-[47px] rounded-[12px]"
        />
      </div>
      <div className="lg:hidden">
        <Header
          onBtnClick={() => router.push("/sellers/dashboard/add-product")}
          title="Product List"
          className="max-lg:text-[16px]"
          BtnIcon={AddCircleIcon}
          btnText=""
          btnClass="max-lg:size-[24px]"
        />
      </div>
      <div className="flex justify-between max-lg:mt-[16px]">
        <div className="flex gap-x-[12px] lg:mt-[16px]">
          <p className="rounded-[6px] border-[1px] border-border bg-[#C4D79B] px-[12px] py-[8px] text-center text-[14px] font-[600] leading-[20.3px] text-black">
            {data && data?.data?.data?.products?.length} Products
          </p>
        </div>
      </div>
      {/* Products */}
      {isPending ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-x-[16px] py-[24px] max-lg:gap-y-[16px] lg:gap-y-[24px]">
          {data ? (
            currentObjects?.map((product: any) => (
              <ProductCard key={product?.id} product={product} />
            ))
          ) : (
            <>No products Available</>
          )}
        </div>
      )}
      <div className="">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductListings;
