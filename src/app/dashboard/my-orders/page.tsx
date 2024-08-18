'use client'

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

const MyOrders = () => {
  const router = useRouter()
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGe_URL
//   const {token} = useAuth()
//  const headers = {
//     Authorization: `Bearer ${token}`
//   }
//   const dashboardQuery = useQuery({
//     queryKey: ["dashboard"],
//     queryFn: ()=>axios.get(`${apiUrl}/user/order`, {headers})
//   })
//   if(dashboardQuery.data){
//     console.log(dashboardQuery.data)
//   }else console.log(dashboardQuery.error)
const {data} = useGet("user/order", "userOrders")
console.log(data)
  return (
    <div className="w-full pt-[24px]">
      <Header title="My Order" />
      <table className="mt-[32px] w-full font-openSans">
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
          {data?.data?.orders?.map((product:any, index:any) => (
            <tr
            onClick={()=>router.push(`/dashboard/my-orders/SE2392922`)}
              key={index}
              className="h-[58px] gap-x-[24px] px-[15px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
            >
              <td className="w-fit pl-[15px] pr-[24px]">
                <Image
                  src={product.image}
                  width={44}
                  height={44}
                  alt=""
                  className="size-[44px] object-cover"
                />
              </td>
              <td className="w-fit px-[24px] text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
                Ensemble Veste Pantalon
              </td>
              <td className="py-[15px] pl-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                1
              </td>
              <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                $68.99
              </td>
              <td className="px-[24px]">SE202401</td>
              <td className="px-[24px]">Jun 20, 2024</td>
              <td className="px-[24px]">Jun 20, 2024</td>
              <td className="pr-[15px]">
                <div className="flex items-center gap-x-[32px] align-middle">
                  <span className="w-fit shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
                    In-Preparation
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
      <div>
        <RecentSearches products={newArrivals} />
      </div>
    </div>
  );
};

export default MyOrders;
