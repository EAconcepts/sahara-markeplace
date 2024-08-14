import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import image from "@/assets/images/fashion-woman.png";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const CustomerTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#E4E7EC]">
          <th className="px-[24px] py-[13.5px] text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary text-start">
            Name
          </th>
          <th className="px-[24px] py-[13.5px] text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary text-start">
            State
          </th>
          <th className="px-[24px] py-[13.5px] text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary text-start">
            Status
          </th>
          <th className="px-[24px] py-[13.5px] text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary text-start">
            Date
          </th>
          <th className="px-[24px] py-[13.5px] text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary text-start">
            Avg. Spend
          </th>
        </tr>
      </thead>
      <tbody className="w-full">
        {[1, 2, 3, 4, 5].map((customer, index) => (
          <tr key={index}>
            <td className="px-[24px] py-[16px]">
              <div className="flex gap-[12px] ">
                <div className="relative flex size-[40px] items-center justify-center rounded-full bg-[#A27A4D33]">
                  {image ? (
                    <Image
                      width={40}
                      height={40}
                      alt=""
                      src={image}
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
                <div className="flex-col flex">
                  <h5 className="text-[14px] font-[600] leading-[20.3px] text-blackPrimary">
                    Emery Torff
                  </h5>
                  <span className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                    username@email.com
                  </span>
                </div>
              </div>
            </td>
            <td className="text-[14px] px-[24px] py-[16px] font-[400] leading-[20.3px] text-blackPrimary">New York</td>
            <td className="text-[14px]px-[24px] py-[16px] font-[600] leading-[20.3px] ">Active</td>
            <td className="text-[14px] px-[24px] py-[16px] font-[400] leading-[20.3px] text-blackPrimary">Jun. 12, 2024 </td>
            <td className="text-[14px] px-[24px] py-[16px] font-[400] leading-[20.3px] text-blackPrimary">
              <div className="flex gap-x-[24px] items-center ">
                <span>$1,740.58</span>
                <div className="py-[20px] px-[24px]">
                <div className="border-[1px]  rounded-[8px] border-border w-[28px] h-[32px] flex justify-center items-center">
                  <IoEllipsisVerticalSharp className="text-blackPrimary size-[16px]" />
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
