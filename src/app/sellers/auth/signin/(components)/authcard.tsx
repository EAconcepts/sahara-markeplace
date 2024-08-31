import Image, { StaticImageData } from "next/image";
import React from "react";
import check from "@/assets/images/check.svg";
import { twMerge } from "tailwind-merge";
import { CheckmarkCircle03Icon } from "hugeicons-react";

const AuthCard = ({
  image,
  imgClassName,
  header,
}: {
  image?: StaticImageData;
  imgClassName?: string;
  header: string;
}) => {
  
  return (
    <div className="relative flex max-lg:py-[32px] lg:h-[810px] lg:w-[612px] flex-col lg:justify-between rounded-[12px] bg-[#7D9A37] lg:pt-[48px]">
        <div className="lg:pr-[16px] ">
      {/* Heading */}
      <div className="flex flex-col lg:gap-y-[16px] lg:px-[32px] text-center">
        <h2 className="text-center font-playfair text-[32px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-white">
          {header}
        </h2>
        <p className="text-center font-openSans max-lg:hidden lg:text-[16px] font-[400] leading-[19.2px] tracking-[-2%] text-white">
          Join the fastest-growing platform connecting you with a global
          audience of passionate customers.
        </p>
      </div>
      {/* Features */}
      <div className="  lg:mt-[32px] relative max-lg:mt-[24px] w-full flex max-lg:justify-center max-lg:flex-wrap max-lg:gap-x-[12px] max-lg:gap-y-[16px] lg:flex-col max-lg:text-[12px] lg:text-[16px]  lg:px-[16px]">
         {/* User friendly */}
         <div className="flex max-w-fit lg:absolute right-[12px] items-center gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] lg:px-[12px] py-[13px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="max-lg:size-[16px] size-[24px] text-white" />
            <span className=" font-[600] leading-[19.2px] tracking-[2%] text-white">
              User-friendly platform
            </span>
          </div>
         {/* Global audience */}
          <div className="lg:absolute left-[12px] lg:mt-[16px] w-fit items-center flex shrink-0 gap-x-[8px] lg:gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] lg:px-[12px] lg:py-[16px] px-[10px] py-[13px]">
            <CheckmarkCircle03Icon className="size-[16px] lg:size-[24px] text-white" />
            <span className="shrink-0 font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
         {/* Grow your business */}
          <div className="lg:absolute left-[135px] top-[100px] flex items-center max-w-fit shrink-0 gap-[8px] lg:gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] py-[13px] lg:px-[12px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[16px] lg:size-[24px] text-white" />
            <span className="shrink-0  font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
          {/* Competitive fees */}
          <div className="lg:absolute top-[260px] right-[95px] flex max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] lg:px-[12px] py-[13px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[16px] lg:size-[24px] text-white" />
            <span className=" font-[600] leading-[19.2px] tracking-[2%] text-white">
              Competitive fees
            </span>
          </div>
      </div>
      </div>
      <div className=" w-full max-lg:hidden ">
         {image &&<Image
          src={ image}
          width={612}
          height={612}
          alt=""
          className={twMerge(" size-[612px] object-cover", imgClassName)}
        />}
      </div>
    </div>
  );
};

export default AuthCard;
