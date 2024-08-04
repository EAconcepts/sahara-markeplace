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
    <div className="flex px-[96px] py-[40px]">
      <div className="flex flex-col gap-y-[32px]">
        <h3 className="text-[28px] font-[700] leading-[40.6px] tracking-[2%] text-blackPrimary">
          Sahara Eagle offers numerous tools designed to assist you in
          accomplishing critical selling tasks and expanding your business.
        </h3>
        <div className="flex flex-col gap-y-[24px]">
          {features?.map((feat, index) => (
            <div key={index} className="flex items-center gap-x-[16px]">
              <CheckmarkCircle03Icon className="size-[32px] shrink-0 text-black" />
              <p className="text-[16px] font-[400] leading-[19.2px] tracking-[-2%] text-blackPrimary">
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
        className="h-[478px] w-[516px] shrink-0 object-cover"
      />
    </div>
  );
};

export default Features;
