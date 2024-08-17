'use client'
import React from "react";

const RecentOrders = () => {
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
        {[1, 2, 3, 4]?.map((order, index) => (
          <tr key={index} className="border-b-[1px] last:border-none border-b-border">
            <td className="">
              <p className="line-clamp-1 px-[24px] py-[12px] text-[14px] font-[400] leading-[16.8px] tracking-[-2%] text-blackPrimary">
                Ensemble Veste Pa...
              </p>
            </td>
            <td className="px-[24px] py-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              Jane Smith
            </td>
            <td
              className={`${""} px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              20 Jun. 2024
            </td>
            <td
              className={`px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              Pending
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecentOrders;
