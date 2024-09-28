"use client";
import { convertDate } from "@/utils/utils";
import React from "react";

const RecentOrders = ({ products }: { products?: any }) => {
  return (
    <table className="w-full font-openSans">
      <thead className="w-full">
        <tr className="px[24px] py[12px] w-full bg-[#E4E7EC]">
          <th className="w-fit shrink px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Product Name
          </th>
          <th className="px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Customer
          </th>
          <th className="px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Date
          </th>
          <th className="px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.slice(0, 5)?.map((order: any) => (
          <tr
            key={order?.id}
            className="border-b-[1px] border-b-border last:border-none"
          >
            <td className="">
              <p className="line-clamp-1 px-[24px] py-[12px] text-[14px] font-[400] leading-[16.8px] tracking-[-2%] text-blackPrimary">
                {order?.products?.name}
              </p>
            </td>
            <td className="px-[24px] py-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              {order?.user?.first_name} {order?.user?.last_name}
            </td>
            <td
              className={`${""} px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              {convertDate(order?.created_at)}
            </td>
            <td
              className={`px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              {order?.status == 0 ? "Pending" : "fulfilled"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
