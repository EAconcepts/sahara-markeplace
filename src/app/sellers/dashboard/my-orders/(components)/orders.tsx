"use client";
import { convertDate } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import ToolTip from "./orders-tooltip";
import { QueryClient } from "@tanstack/react-query";
import { useAuth } from "@/utils/useAuth";

const Orders = ({ orders, refetch }: { orders: any; refetch: any }) => {
  const router = useRouter();
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { userType } = useAuth();
  // console.log(refetch);

  return (
    <table className="mt-[32px] w-full font-openSans">
      <thead className="">
        <tr className="h-[42px] bg-[#E4E7EC] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary lg:px-[24px]">
          <th className="max-lg:hidden">Item</th>
          <th className="px-[24px] text-start lg:after:content-['Name']">
            Product{" "}
          </th>
          <th className="px[24px] max-lg:hidden"> Date</th>
          <th className="px[24px] max-lg:hidden">Customer</th>
          <th className="text-start">Quantity</th>
          <th className="px[24px]">Payment</th>
          <th className="text-start">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border px-[15px]">
        {orders &&
          orders?.map((order: any, index: number) => (
            <tr
              onClick={() => {
                if (userType == "vendor") {
                  router.push(`/sellers/dashboard/my-orders/${order?.id}`);
                }
                if (userType == "admin") {
                  router.push(`/admin/dashboard/orders/${order?.id}`);
                }
              }}
              key={index}
              className="h-[58px] px-[15px] text-[10px] font-[400] leading-[20.3px] text-blackPrimary lg:gap-x-[24px] lg:text-[14px]"
            >
              {/* Image */}
              <td className="w-fit pl-[15px] pr-[24px] max-lg:hidden">
                <Image
                  src={`${imgBaseUrl}/${order?.products?.image}`}
                  width={44}
                  height={44}
                  alt=""
                  className="size-[44px] object-cover max-lg:hidden"
                />
              </td>
              {/* Priduct name */}
              <td className="line-clamp-1 w-fit px-[24px] py-[15px] font-[400] leading-[16.8px] text-blackPrimary lg:text-[14px]">
                {order?.products?.name}
              </td>
              {/* Date */}
              <td className="px-[24px] max-lg:hidden">
                {convertDate(order?.created_at)}
              </td>
              {/* Customer */}
              <td className="px-[24px] max-lg:hidden">
                {order?.user?.first_name} {order?.user?.last_name}
              </td>
              {/* quantity */}
              <td className="py-[15px] pl-[16px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[14px]">
                {order?.quantity}
              </td>
              {/* Payment */}
              <td className="px-[24px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[14px]">
                {orders?.payment === "1" ? "Paid" : "Unpaid"}
              </td>
              {/* Status */}
              <td className="pr-[15px]">
                <div className="flex items-center gap-x-[32px] align-middle">
                  <span
                    className={`w-fit shrink-0 rounded-[24px] ${order?.current == "pending" ? "bg-[#F9E79F66]" : order?.current == "shipped" ? "bg-yellow-200" : order?.current == "delivered" ? "bg-success text-white" : "bg-[#8E97A6] text-white"} px-[16px] py-[4px] text-center font-[600] lg:w-[100px]`}
                  >
                    {order?.current}
                  </span>
                  <ToolTip order={order} refetch={refetch} />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Orders;
