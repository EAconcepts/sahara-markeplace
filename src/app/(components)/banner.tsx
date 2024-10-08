"use client";

import Image from "next/image";
import React from "react";
import africanCheck from "@/assets/images/africanCheck.svg";
import packageDelivery from "@/assets/images/package-delivery.svg";
import delivery from "@/assets/images/return-delivery.svg";
import call from "@/assets/images/call.svg";
import discount from "@/assets/images/discount-offers.svg";

const Banner = () => {
  // 100% African products, Authentic Sustainability and Healthy products, Free delivery for orders above $35, and 30 Days return policy
  const features = [
    { icon: africanCheck, title: "100% African products" },
    { icon: discount, title: "Authentic Sustainability and Healthy products" },
    { icon: packageDelivery, title: "Free delivery for orders above $35" },
    { icon: delivery, title: "30 Days return policy " },

    // { icon: call, title: "24/7 Dedicated support" },
  ];
  return (
    <div className="w-full overflow-hidden rounded-[200px] bg-[#F9E79F99]">
      <div className="marquees flex w-full justify-between py-[8.5px] text-blackPrimary max-lg:gap-x-[32px] lg:px-[24px] lg:py-[20px]">
        {features?.map((feat, index) => (
          <div
            className="flex items-center gap-x-[8px] max-lg:shrink-0"
            key={index}
          >
            <Image
              src={feat.icon}
              width={24}
              height={24}
              alt={feat.title}
              className="size-[24px]"
            />
            <span className="shrink-0 font-openSans text-[16px] font-[400] leading-[23.2px]">
              {feat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
