'use client'

import React from "react";

const RecentOrders = () => {
  return (
    <table className="w-full font-openSans">
      <thead className="w-full">
        <tr className="px[24px] py[12px] w-full bg-[#E4E7EC]">
          <th className="w-fit shrink lg:px-[24px] px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Product
          </th>
          <th className="lg:px-[24px] px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Qty
          </th>
          <th className="lg:px-[24px] px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Status
          </th>
          <th className="lg:px-[24px] px-[12px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4]?.map((order, index) => (
          <tr key={index} className="">
            <td className="">
              <div className="flex flex-col px-[12px] lg:px-[24px] py-[17.5px]">
                <p className="max-lg:line-clamp-1 text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                  Hand Painted Danshiki Black
                </p>
                <p className="font-[400 ] text-[12px] leading-[17.4px] text-[#787C83]">
                  #SE2024003
                </p>
              </div>
            </td>
            <td className="px-[12px] lg:px-[24px] py-[16px] text-[14px] leading-[20.3px] text-blackPrimary">
              2
            </td>
            <td
              className={`${""} px-[12px] lg:px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              Shipped
            </td>
            <td
              className={`px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              $349.99
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
