"use client";

import { CheckmarkCircle03Icon } from "hugeicons-react";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/tools.png";

const Features = () => {
  const features = [
    "Track visits to product detail pages using the Sales Dashboard on Sahara Eagle.",
    "Analyze sales, expenses, and refunds with the Payments Dashboard.",
    "Access tools for selling programs like Sahara Eagle Fulfillment, and Sahara Eagle Business",
    "Discover Sahara Eagle-approved apps and service providers via the Selling Partner Appstore.",
    "Identify demand and boost sales using tools like Product Opportunity Features, Fulfillment Analytics, and  Marketplace Product Guidance",
  ];
  return (
    <div id="learn" className="flex px-[24px] py-[40px] lg:px-[96px]">
      <div className="flex flex-col gap-y-[32px]">
        <h3 className="text-[20px] font-[700] leading-[29px] tracking-[2%] text-blackPrimary lg:text-[28px] lg:leading-[40.6px]">
          Sahara Eagle offers numerous tools designed to assist you in
          accomplishing critical selling tasks and expanding your business.
        </h3>
        <div className="flex flex-col gap-y-[24px]">
          {features?.map((feat, index) => (
            <div key={index} className="flex items-center gap-x-[16px]">
              <CheckmarkCircle03Icon className="size-[24px] shrink-0 text-black lg:size-[32px]" />
              <p className="text-[14px] font-[400] leading-[16.8px] tracking-[-2%] text-blackPrimary lg:text-[16px] lg:leading-[19.2px]">
                {feat}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        src={img}
        width={516}
        height={478}
        alt="girl"
        className="h-[478px] w-[516px] shrink-0 object-cover max-lg:hidden"
      />
    </div>
  );
};

export default Features;
