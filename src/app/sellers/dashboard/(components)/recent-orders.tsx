"use client";

import React from "react";

const RecentOrders = ({ orders }: { orders: any }) => {
  return (
    <table className="w-full font-openSans">
      <thead className="w-full">
        <tr className="px[24px] py[12px] w-full bg-[#E4E7EC]">
          <th className="w-fit shrink px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary lg:px-[24px]">
            Product
          </th>
          <th className="px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary lg:px-[24px]">
            Qty
          </th>
          <th className="px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary lg:px-[24px]">
            Status
          </th>
          <th className="px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary lg:px-[24px]">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {orders?.slice(0, 5)?.map((order: any) => (
          <tr key={order?.id} className="">
            <td className="">
              <div className="flex flex-col px-[12px] py-[17.5px] lg:px-[24px]">
                <p className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary max-lg:line-clamp-1">
                  {order?.products?.name}
                </p>
                <p className="font-[400 ] text-[12px] leading-[17.4px] text-[#787C83]">
                  #{order?.trx_id}
                </p>
              </div>
            </td>
            <td className="px-[12px] py-[16px] text-[14px] leading-[20.3px] text-blackPrimary lg:px-[24px]">
              {order?.quantity}
            </td>
            <td
              className={`${""} px-[12px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53] lg:px-[24px]`}
            >
              {order?.shipping == "1" ? " Shipped" : " Not Shipped"}
            </td>
            <td
              className={`px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              ${order?.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
