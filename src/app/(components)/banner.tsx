'use client'

import Image from 'next/image'
import React from 'react'
import africanCheck from "@/assets/images/africanCheck.svg";
import packageDelivery from "@/assets/images/package-delivery.svg";
import delivery from "@/assets/images/return-delivery.svg";
import call from "@/assets/images/call.svg";
import discount from "@/assets/images/discount-offers.svg";

const Banner = () => {
    const features = [
        { icon: africanCheck, title: "100% African products" },
        { icon: packageDelivery, title: "Free delivery for orders above $30" },
        { icon: delivery, title: "90 Days return policy " },
        { icon: discount, title: "Daily offers over 50%" },
        { icon: call, title: "24/7 Dedicated support" },
      ];
  return (
    <div className="flex bg-[#F9E79F99] rounded-[200px] w-full justify-between  overflow-x-scroll max-lg:gap-x-[32px] lg:px-[24px] py-[8.5px] lg:py-[20px] text-blackPrimary">
        {features?.map((feat, index) => (
          <div className="flex max-lg:shrink-0 items-center gap-x-[8px]" key={index}>
            <Image
              src={feat.icon}
              width={24}
              height={24}
              alt={feat.title}
              className="size-[24px]"
            />
            <span className="font-[400] text-[16px] leading-[23.2px] font-openSans">
              {feat.title}
            </span>
          </div>
        ))}
      </div>
  )
}

export default Banner