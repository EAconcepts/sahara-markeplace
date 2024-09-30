"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Search01Icon } from "hugeicons-react";
import { TotalProducts } from "./(components)/totalProducts";
import { PrdCatgry } from "./(components)/prdCategories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PrdtCard } from "./(components)/prdtCard";
import Pagination from "@/app/sellers/dashboard/(components)/pagination";
import { useGet } from "@/utils/useGet.";
import Loader from "@/app/(components)/loader";
import { FormEvent, useEffect, useState } from "react";
import { SearchForm } from "./(components)/searchForm";
import axios from "axios";
import { useAuth } from "@/utils/useAuth";

const ProductListnigs = () => {
  const { data, isPending } = useGet("admin/products", "adminProducts");
  // console.log(data);
  const { data: dashbd } = useGet("admin/dashboard", "adminDshbd");
  // console.log("dashboard", dashbd);
  const { data: categories } = useGet("admin/category", "adminCategory");
  // console.log("category", categories);
  const [products, setProducts] = useState([]);
  const [search, setSearchQuery] = useState<string>("");
  const { token, baseUrl } = useAuth();
  useEffect(() => {
    if (search == "") {
      setProducts(data?.data?.data?.products);
    }
  }, [search, data]);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    const response = await axios.post(
      `${baseUrl}/search-results`,
      { search },
      {
        headers,
      },
    );
    console.log(response);
    setProducts(response?.data?.data?.products);
  };
  return (
    <div className="mt-[12px] flex w-full flex-col lg:gap-[32px] lg:py-[16px]">
      <Header title="Products" />
      <section className="flex w-full flex-col lg:gap-y-[32px]">
        {/* Total Sales & Categories */}
        <div className="flex w-full lg:gap-[16px]">
          {/* Total Sales & Products */}
          <div className="flex w-[40%] shrink-0 flex-col lg:gap-[16px]">
            {/* Total Sales */}
            <TotalProducts
              heading={"Total Sales"}
              total={dashbd.data?.data?.sales}
              percent={0}
            />
            {/* Total Products */}
            <TotalProducts
              heading={"Total Products"}
              total={dashbd.data?.data?.sales}
              percent={0}
            />
          </div>
          {/* Product categories */}
          <PrdCatgry />
        </div>
      </section>
      <section className="flex flex-col gap-[32px] p-[16px]">
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[20px] font-[600] leading-[29px] text-black">
            Products
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
              Showing {products?.length} result(s)
            </span>
            <SearchForm
              search={search}
              handleSearch={handleSearch}
              setSearchQuery={setSearchQuery}
            />
            <Select>
              <SelectTrigger className="h-full w-[203px] self-end rounded-[6px] border-none px-[8px] py-[12px]">
                <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  Sort by:
                </span>
                <SelectValue
                  className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                  placeholder={" Newest to Oldest"}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Newest</SelectLabel>
                  <SelectItem value="newest">Newest to Olders</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Products */}
        <div className="grid grid-cols-2 gap-x-[16px] gap-y-[32px] lg:grid-cols-4">
          {!isPending ? (
            products?.map((product: any) => (
              <PrdtCard key={product?.id} product={product} />
            ))
          ) : (
            <Loader />
          )}
        </div>
        <Pagination
          className="justify-between"
          currentPage={1}
          onPageChange={() => {}}
          totalPages={1}
        />
      </section>
    </div>
  );
};

export default ProductListnigs;
