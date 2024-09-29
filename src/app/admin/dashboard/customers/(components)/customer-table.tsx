"use client";

import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import image from "@/assets/images/fashion-woman.png";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { convertDate } from "@/utils/utils";

const CustomerTable = ({ users }: { users?: any }) => {
  const imgUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#E4E7EC]">
          <th className="px-[24px] py-[13.5px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Name
          </th>
          <th className="px-[24px] py-[13.5px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            State
          </th>
          <th className="px-[24px] py-[13.5px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Status
          </th>
          <th className="px-[24px] py-[13.5px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Date
          </th>
          <th className="px-[24px] py-[13.5px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Avg. Spend
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        {users?.map((customer: any) => (
          <tr key={customer?.id}>
            <td className="px-[24px] py-[16px]">
              <div className="flex gap-[12px]">
                <div className="relative flex size-[40px] items-center justify-center rounded-full bg-[#A27A4D33]">
                  {customer?.image ? (
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={`${imgUrl}/${customer?.image}`}
                      className="rounded-full object-cover lg:size-[40px]"
                    />
                  ) : (
                    <span className="text-center text-[15px] font-[600] leading-[18px]">
                      M
                    </span>
                  )}
                  <FaCheckCircle className="absolute bottom-0 right-0 size-[16px] rounded-full bg-white text-success" />
                </div>
                {/* Name */}
                <div className="flex flex-col">
                  <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    {customer?.first_name} {customer?.last_name}
                  </h5>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    {customer?.email}
                  </span>
                </div>
              </div>
            </td>
            <td className="px-[24px] py-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              {customer?.state}
            </td>
            <td className="text-[14px]px-[24px] py-[16px] font-[600] leading-[20.3px]">
              Active
            </td>
            <td className="px-[24px] py-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              {convertDate(customer?.created_at)}
            </td>
            <td className="px-[24px] py-[16px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
              <div className="flex items-center gap-x-[24px]">
                <span>$0</span>
                <div className="px-[24px] py-[20px]">
                  <div className="flex h-[32px] w-[28px] items-center justify-center rounded-[8px] border-[1px] border-border">
                    <IoEllipsisVerticalSharp className="size-[16px] text-blackPrimary" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
