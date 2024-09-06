'use client'

import Image from "next/image";
import React from "react";

const Listings = ({products}:{products:any}) => {
  const imageBaseUrl= process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <table className="w-full font-openSans">
      <thead className="w-full">
        <tr className="px[24px] py[12px] w-full bg-[#E4E7EC]">
          <th className="w-fit shrink px-[12px] lg:px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            item
          </th>
          <th className="px-[12px] lg:px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Product
          </th>
          <th className="px-[12px] lg:px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Inventory
          </th>
          <th className="px-[12px] lg:px-[24px] py-[12px] text-start text-[12px] font-[600] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.slice(0, 5)?.map((order:any) => (
          <tr key={order?.id} className="">
            <td className="px-[12px] lg:px-[24px] py-[12px]">
              <Image
                src={`${imageBaseUrl}/${order?.image}`}
                width={48}
                height={48}
                alt={order?.name}
                className="size-[48px] shrink-0 rounded-[4px] object-cover"
              />
            </td>
            <td className="">
              <div className="flex flex-col gap-y-[12px] px-[12px] lg:px-[24px] py-[17.5px]">
                <p className="text-[14px] font-[600] leading-[20.3px] max-lg:line-clamp-1 text-blackPrimary">
                 {order?.name}
                </p>
                <p className="text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
                  #{order?.code}
                </p>
              </div>
            </td>
            <td className="px-[12px] lg:px-[24px] py-[16px] text-[14px] leading-[20.3px] text-blackPrimary">
              {order?.quantity}
            </td>
            <td
              className={`${""} px-[12px] lg:px-[24px] py-[16px] text-[14px] font-[600] leading-[20.3px] text-[#A07E53]`}
            >
              In stock
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Listings;
