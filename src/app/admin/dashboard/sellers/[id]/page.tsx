"use client";

import { Header } from "@/app/dashboard/(components)/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "@/assets/images/afritique.png";
import usa from "@/assets/images/usa.svg";
import OrderHistory from "../../(components)/order-history";
// import { newArrivals } from "@/app/page";
import Orders from "@/app/sellers/dashboard/my-orders/(components)/orders";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search01Icon } from "hugeicons-react";
import { Input } from "@/components/ui/input";
import SellerProductCard from "./(components)/Seller-products";
import { newArrivals } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";
import Loader from "@/app/(components)/loader";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const SellerDetails = () => {
  const { id } = useParams();
  // const [details, setDetails] = useState()
  const { data, isPending } = useGet(`admin/vendor-details/${id}`);
  console.log("seller details", data);
  const { imgUrl, token, baseUrl } = useAuth();
  let details = data?.data?.data;
  const router = useRouter();
  // useEffect(()=>{
  //   setDetails(data?.data?.data)
  // },[data])
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const handleSearch = () => {};
  const deleteMutation = useMutation({
    mutationFn: () =>
      axios.get(`${baseUrl}/admin/delete-vendor/${id}`, { headers }),
    onSuccess: (data) => {
      console.log(data);
      console.log("Vendor deleted successfully");
      router.push("/admin/dashboard/sellers");
    },
    onError: (error) => {
      console.log(error);
      console.log("Failed to delete vendor");
    },
  });
  const handleDelete = () => {};
  return (
    <div className="font-openSans">
      {/* Breadcrumb */}
      <div className="mt-[8px]"> </div>
      <section className="mt-[12px] flex flex-col gap-y-[32px] py-[16px]">
        {/* Heading */}
        <div className="itemc flex w-full items-center justify-between gap-x-[12px]">
          <Header title="Sellers Profile" />
          <div className="flex items-center gap-x-[12px]">
            <Button className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary">
              Suspend
            </Button>
            <Button
              disabled={deleteMutation.isPending}
              onClick={() => deleteMutation.mutate()}
              className="h-[36px] rounded-[4px] border-[1px] border-[#8E97A6] bg-white px-[12px] py-[8px] text-[14px] font-[600] text-blackPrimary"
            >
              {deleteMutation.isPending ? "Deleting" : "Delete"}
            </Button>
          </div>
        </div>
        {/* Details */}
        <div className="flex w-full gap-x-[16px]">
          <div className="flex w-full flex-col gap-y-[24px]">
            {/* Name */}
            <div className="flex w-full items-center gap-[8px] rounded-[12px] border-[1px] border-border p-[16px]">
              <Image
                src={
                  details?.vendor?.image
                    ? `${imgUrl}/${details?.vendor?.image}`
                    : image
                }
                width={120}
                height={120}
                alt=""
                className="size-[120px] rounded-[12px]"
              />
              <div className="flex flex-col">
                <h3 className="text-[32px] font-[600] leading-[46.4px] text-blackPrimary">
                  {details?.company}
                </h3>
                <span className="text-[14px] font-[400] leading-[20.3px] text-success">
                  Verified
                </span>
                <span className="text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
                  Subscribed to Professional Plan
                </span>
              </div>
            </div>
            {/* Description */}
            <div className="flex w-full flex-col gap-y-[8px] rounded-[12px] border-[1px] border-border p-[16px]">
              <h3 className="text-[20px] font-[600] leading-[29px] text-blackPrimary">
                Description
              </h3>
              <p className="text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                {details?.vendor?.description}
              </p>
            </div>
            <div className="flex gap-x-[16px]">
              {/* Sales  */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Sales
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    {details?.orders?.length}
                  </h2>
                  <span className="font-inter font-[400] leading-[14.52px] text-success">
                    +0.00%
                  </span>
                </div>
              </div>
              {/* Revenue */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Revenue
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    $0
                  </h2>
                  <span className="font-inter font-[400] leading-[14.52px] text-success">
                    +0.00%
                  </span>
                </div>
              </div>
              {/* Products */}
              <div className="flex w-full flex-col gap-y-[12px] rounded-[12px] border-[1px] border-border px-[12px] py-[16px]">
                <h5 className="text-[14px] font-[400] leading-[20.3px] text-black">
                  Products
                </h5>
                <div className="flex items-center gap-x-[7px]">
                  <h2 className="font-inter text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
                    {details?.products?.length}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className="flex w-full flex-col gap-y-[24px] rounded-[12px] border-[1px] border-border p-[16px]">
            <div className="flex flex-col gap-y-[12px]">
              <h2 className="text-[20px] font-[600] leading-[29px] text-black">
                Contact:
              </h2>
              <div className="flex gap-x-[7px]">
                <Image
                  src={
                    details?.vendor?.image
                      ? `${imgUrl}/${details?.vendor?.image}`
                      : image
                  }
                  width={80}
                  height={80}
                  alt=""
                  className="size-[80px] object-cover"
                />
                <div className="flex flex-col gap-y-[4px]">
                  <h5 className="font-openSans text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    {details?.vendor?.first_name} {details?.vendor?.last_name}
                  </h5>
                  <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    {details?.vendor?.email}
                  </p>
                  <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                    {details?.vendor?.phone}
                  </p>
                </div>
              </div>
            </div>
            {/* Address */}
            <div className="flex max-w-[324px] flex-col gap-y-[12px]">
              <h2 className="text-[20px] font-[600] leading-[29px] text-black">
                Address
              </h2>
              <div className="flex gap-x-[12px]">
                <div className="flex flex-col gap-y-[4px] text-[14px] font-[400] leading-[20.3px] text-[#787C83]">
                  {/* Country */}
                  <div className="flex gap-[12px]">
                    <span className="text-[14px] text-[#787C83]">Country:</span>
                    <div className="flex gap-x-[12px]">
                      <span className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                        {details?.vendor?.country}
                      </span>
                      <Image
                        src={usa}
                        width={24}
                        height={16}
                        alt=""
                        className="hidden h-[16px] w-[24px]"
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex gap-[12px]">
                    <span className="">Address:</span>
                    <p className="text-wrap text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                      {details?.vendor?.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map */}
            <div></div>
          </div>
        </div>
        {/* Products */}
        <div className="flex flex-col gap-y-[32px]">
          {/* Search & Sort */}
          <div className="flex flex-col gap-y-[12px]">
            <h4 className="text-[20px] font-[600] leading-[29px] text-black">
              Products
            </h4>
            {/* Search  */}
            <div className="flex items-center justify-between px-[12px]">
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                Showing {details?.products?.length}
              </span>
              <form
                onSubmit={handleSearch}
                className="flex h-[36px] w-[363px] items-center gap-[8px] rounded-[8px] border-[0.5px] border-[#8E97A6] bg-white px-[12px] py-[8px]"
              >
                <Search01Icon className="size-[16px] text-[#8E97A6]" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="h-full w-full border-none font-inter text-[14px] leading-[20.3px] text-[#8E97A6]"
                />
              </form>
              <div className="flex items-center gap-x-[16px]">
                <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                  Showing {details?.products?.length} result(s)
                </span>
                {/* sort */}
                <Select>
                  <SelectTrigger className="h-[36px] w-[181px] self-end rounded-[6px] border-none px-[8px] py-[12px]">
                    <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                      Sort by:
                    </span>
                    <SelectValue
                      className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
                      placeholder={" Latest Added"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>--</SelectLabel>
                      <SelectItem value="--">--</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* Products */}
          <div className="flex flex-wrap justify-between gap-x-[16px] gap-y-[32px]">
            {isPending ? (
              <Loader />
            ) : (
              details?.products?.map((product: any) => (
                <SellerProductCard key={product?.id} product={product} />
              ))
            )}
          </div>
          {/* Pagination */}
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default SellerDetails;
