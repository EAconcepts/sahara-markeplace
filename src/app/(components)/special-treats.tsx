'use client'

import React from "react";
import ProductHeader from "./product-header";
import Image from "next/image";
import book from "@/assets/images/book-pen.png";
import premium from "@/assets/images/premium-fashion.png";
import gifting from "@/assets/images/gifting.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const SpecialTreats = () => {
  const treats = [
    {
      title: "Premium Fashion",
      desc: "Choose from a variety of options to customize our key features.",
      image: premium,
    },
    {
      title: "Gifting and Registry",
      desc: "Choose from a variety of options to customize our key features. ",
      image:  gifting,
    },
  ];
  return (
    <div>
      <ProductHeader heading="Special Treats" showBtn={false} />
      <div className="flex gap-[24px] mt-[32px]">
        <div className="flex flex-col border w-full ">
          <Image
            src={book}
            width={650}
            height={320}
            alt="Book and pen"
            className="lg:w-[650px] lg:h-[320px]"
          />
          <div className=" flex gap-x-[100px] pr-[74px] pl-[36px] mt-[44px] pb-[45px] ">
            <div className="flex flex-col">
              <h6 className="text-[24px] font-[700] leading-[34.8px] text-blackPrimary font-openSans">
                Customizable Pre-Order
              </h6>
              <small className="text-[14px] mt-[8px] font-[400] leading-[20.3px] text-blackPrimary">
                Choose from a variety of options to customize our key features.
                From classic elegance to bold statements, the choice is yours.
              </small>
            </div>
            {/* Button */}
            <div className="flex items-end">
              <IoArrowForwardCircleOutline className="text-[32px]" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-[24px]">
          {treats?.map((treat, index) => (
            <div key={index} className="flex ">
              <div className="flex flex-col justify-end pl-[16px] pb-[24px] pr-[24px]">
                <h3 className="font-[700] text-[24px] leading-[34.8px] text-blackPrimary font-openSans ">
                  {treat.title}
                </h3>
                <p className="mt-[4px] font-[400] text-[14px] leading-[20.3px] text-blackPrimary">
                  {treat.desc}
                </p>
                <IoArrowForwardCircleOutline className="text-[32px] text-blackPrimary mt-[12px]" />
              </div>
              <Image
                src={treat.image}
                width={320}
                height={244}
                alt={treat.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialTreats;
