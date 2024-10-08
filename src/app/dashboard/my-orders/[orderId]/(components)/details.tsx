"use client";

// import { newArrivals } from "@/app/page";
import Image from "next/image";
import React from "react";
import Delivery from "./delivery";
import { Button } from "@/components/ui/button";
import { newArrivals } from "@/app/(components)/reviews";
import { useAuth } from "@/utils/useAuth";

const Details = ({ order }: { order?: any }) => {
  console.log(order);
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL;
  const { userType } = useAuth();
  return (
    <div className="flex w-full gap-x-[16px] max-lg:flex-col max-lg:gap-y-[16px] lg:justify-between">
      <div className="flex flex-col gap-[8px]">
        <div className="flex w-full flex-col gap-y-[24px] rounded-[12px] border-[1px] py-[16px]">
          <h3 className="px-[12px] text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
            Order details
          </h3>
          {/* Product details */}
          <table className="w-full">
            <thead className="">
              <tr className="h-[42px] bg-[#E4E7EC] text-start font-openSans text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
                <th className="pl-[47px] text-start font-openSans text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
                  Item
                </th>
                <th className="pl-[24px] text-start font-openSans text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
                  Product Name
                </th>
                <th className="pl-[24px] text-start font-openSans text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="">
              {/* {newArrivals?.slice(0, 3).map((product: any, index: number) => ( */}
              <tr
                // key={index}
                className="h-[105px] border-b border-border font-openSans"
              >
                {/* Image */}
                <td className="w-[120px] shrink grow-0 px-[20px] py-[8px]">
                  <Image
                    src={`${imgBaseUrl}/${order?.products?.image}`}
                    width={80}
                    height={80}
                    alt=""
                    className="size-[80px] rounded-[4px] object-cover"
                  />
                </td>
                {/* Product name */}
                <td className="px-[24px]">
                  <div className="flex flex-col gap-y-[8px]">
                    <p className="text-[14px] font-[400] leading-[16.8px] text-blackPrimary">
                      {order?.products?.name}
                    </p>
                    <p className="text-[12px] font-[400] leading-[14.4px] text-[#787C83]">
                      Quantity{" "}
                      <span className="text-[14px] leading-[16.8px] text-blackPrimary">
                        : {order?.products?.quantity}
                      </span>
                    </p>
                  </div>
                </td>
                {/* Amount */}
                <td className="px-[24px] text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                  $ {order?.products?.price}
                </td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          {/* Sub total */}
          <div className="flex w-[293px] flex-col gap-y-[16px] self-end px-[24px] font-openSans">
            <div className="flex justify-between">
              <span className="text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
                Sub-total:
              </span>
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                ${order?.products?.price}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
                Discount:
              </span>
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                -$0.00
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[14px] font-[400] leading-[16.8px] text-[#787C83]">
                Total:
              </span>
              <span className="text-[14px] font-[600] leading-[16.8px] text-blackPrimary">
                ${order?.products?.price}
              </span>
            </div>
            <p
              className={`${order?.payment == "1" ? "text-success" : "text-failure"} w-fit self-end rounded-[24px] bg-[#00875133] px-[16px] py-[4px] text-center text-[14px] font-[400] leading-[20.3px]`}
            >
              {order?.payment == "1" ? "Payment Made" : "Payment Not Made"}
            </p>
          </div>
        </div>
        {/* Payement Info */}
        {userType == "admin" && (
          <div className="flex h-[162px] w-full flex-col gap-[16px] rounded-[12px] border-[1px] px-[12px] py-[16px]">
            <h3 className="text-[20px] font-[600] leading-[24px] tracking-[-2%] text-blackPrimary">
              Payment Information
            </h3>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] text-[12px] font-[400] leading-[14.4px] tracking-[-2%]">
                <span className="text-[#787C83]">Payment Method:</span>
                <span className="font-[600] text-blackPrimary">Card</span>
              </div>
              <div className="flex gap-[8px] text-[12px] font-[400] leading-[14.4px] tracking-[-2%]">
                <Image src={''} width={22.6} height={14} className="w-[22.6px] h-[14px] object-cover" alt="master card"/>
                <span className="font-[600] text-blackPrimary">Mastercard **** **** **** 000</span>
              </div>
              {/* Card name */}
              <div className="flex gap-[8px] text-[12px] font-[400] leading-[14.4px] tracking-[-2%]">
                <span className="text-[#787C83]">Card Name:</span>
                <span className="font-[600] text-blackPrimary">Juan Anabel</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Delivery Info */}
      <div className="">
        <Delivery order={order} />
      </div>
    </div>
  );
};

export default Details;
