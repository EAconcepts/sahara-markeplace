"use client";

import React from "react";
import { Header } from "../(components)/header";
// import { newArrivals } from "@/app/page";
import Image from "next/image";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import RecentSearches from "../(components)/recent-searches";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "@/utils/useAuth";
import { newArrivals } from "@/app/(components)/reviews";
import { useGet } from "@/utils/useGet.";
import OrderCard from "./(components)/order-card";
import Loader from "@/app/(components)/loader";

const MyOrders = () => {
  const router = useRouter();
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
 
  const { data, isPending } = useGet("user/order", "userOrders");
  console.log(data);
  return (
    <div className="w-full pt-[24px]">
      <Header title="My Order" />
      {isPending ?
      <Loader/>
      : 
      data?.data?.data?.orders?.length ==0 ?
      <h4 className="mt-[24px] text-[16px] text-center">No order has been made yet</h4> :
      data?.data?.data?.orders ?
      <table className="mt-[32px] hidden w-full font-openSans lg:block">
        <thead className="">
          <tr className="h-[42px] bg-[#E4E7EC] px-[24px] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            <th className="">Item</th>
            <th className="px-[24px] text-start">Product Name</th>
            <th className="text-start">Quantity</th>
            <th className="px[24px]">Amount</th>
            <th className="px[24px]">Order Number</th>
            <th className="px[24px]">Order Date</th>
            <th className="px[24px]">Delivery Date</th>
            <th className="text-start">Status</th>
            {/* <th className="px[24px]">Status</th> */}
          </tr>
        </thead>
        <tbody className="divide-y divide-border px-[15px]">
          {data?.data?.data?.orders?.map((order: any) => (
            <tr
              onClick={() => router.push(`/dashboard/my-orders/${order?.id}`)}
              key={order?.id}
              className="h-[58px] gap-x-[24px] px-[15px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
            >
              <td className="w-fit pl-[15px] pr-[24px]">
                <Image
                  src={`${imageBaseUrl}/${order?.products?.image}`}
                  width={44}
                  height={44}
                  alt=""
                  className="size-[44px] object-cover"
                />
              </td>
              <td className="w-fit px-[24px] text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
             {order?.products?.name}
              </td>
              <td className="py-[15px] pl-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                {order?.products?.quantity}
              </td>
              <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                ${order?.products?.price}
              </td>
              <td className="px-[24px]">SE{order?.trx_id}</td>
              <td className="px-[24px]">{order?.created_at.slice(0,11)}</td>
              <td className="px-[24px]">---</td>
              <td className="pr-[15px]">
                <div className="flex items-center gap-x-[32px] align-middle">
                  <span className="w-fit shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
                    {order?.current}
                  </span>
                  <div className="flex size-[24px] items-center justify-center rounded-[8px] border-[1px] border-border">
                    <HiOutlineEllipsisVertical className="text-[14px] text-blackPrimary" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      : 
      <h4 className="mt-[24px] text-[16px] text-center">An error occured!</h4>
      
}
      {/* Mobile */}
      <div className="mt-[24px] flex flex-col gap-[16px] lg:hidden">
        {data?.data?.data?.orders ? (
          data?.data?.data?.orders?.map((order: any) => (
            <OrderCard date={order?.created_at} product={order?.products} key={order?.id} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="hidden">
        <RecentSearches products={newArrivals} />
      </div>
    </div>
  );
};

export default MyOrders;
