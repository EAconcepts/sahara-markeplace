import React from "react";
import { Header } from "../(components)/header";
import { newArrivals } from "@/app/page";
import Image from "next/image";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

const MyOrders = () => {
  return (
    <div className="w-full pt-[24px]">
      <Header title="My Order" />
      <div className="mt-[32px] w-full font-openSans">
        <div className="grid w-full grid-cols-9 bg-[#E4E7EC] py-[12px] text-[12px] font-[400] leading-[17.4px] tracking-[-0.5%] text-blackPrimary">
          <p className="px-[24px]">Item</p>
          <p className="px-[24px] grow">Product Name</p>
          <p className="px-[24px]">Quantity</p>
          <p className="px-[24px]">Amount</p>
          <p className="px-[24px]">Order Number</p>
          <p className="px-[24px]">Order Date</p>
          <p className="px-[24px]">Delivery Date</p>
          <p className="px-[24px]">Status</p>
        </div>
        <div className="flex w-full flex-col"></div>
        {newArrivals?.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className="justify-betwee grid w-full grid-cols-9 text-[14px] font-[400] leading-[20.3px] text-blackPrimary"
          >
            <Image
              src={product.image}
              width={44}
              height={44}
              alt=""
              className="size-[44px]"
            />
            <p className="text-[14px] px-[24px] font-[400] leading-[16.8px] text-blackPrimary">
              Ensemble Veste Pantalon
            </p>
            <p className="text-[14px] px-[24px] font-[400] leading-[20.3px] text-blackPrimary">
              1
            </p>
            <p className="text-[14px] px-[24px] font-[400] leading-[20.3px] text-blackPrimary">
              $68.99
            </p>
            <p className="px-[24px]">SE202401</p>
            <p className="px-[24px]">Jun 20, 2024</p>
            <p className="px-[24px]">Jun 20, 2024</p>
            <p className="shrink-0 rounded-[24px] bg-[#F9E79F66] px-[16px] py-[4px] font-[600]">
              In-Preparation
            </p>
            <div className="size-[24px] rounded-[8px] border-[1px] border-border">
              <HiOutlineEllipsisVertical className="text-[14px] text-blackPrimary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
