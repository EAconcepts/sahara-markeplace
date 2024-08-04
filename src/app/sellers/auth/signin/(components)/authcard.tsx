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
  image: StaticImageData;
  imgClassName?: string;
  header: string;
}) => {
  
  return (
    <div className="relative flex h-[810px] w-[612px] flex-col justify-between rounded-[12px] bg-[#7D9A37] pt-[48px]">
        <div className="pr-[16px] ">
      {/* Heading */}
      <div className="flex flex-col gap-y-[16px] px-[32px] text-center">
        <h2 className="text-center font-playfair text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-white">
          {header}
        </h2>
        <p className="text-center font-openSans text-[16px] font-[400] leading-[19.2px] tracking-[-2%] text-white">
          Join the fastest-growing platform connecting you with a global
          audience of passionate customers.
        </p>
      </div>
      {/* Features */}
      <div className="  mt-[32px] relative  w-full flex flex-col  px-[16px]">
         {/* User friendly */}
         <div className="flex max-w-fit absolute right-[12px] items-center gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              User-friendly platform
            </span>
          </div>
         {/* Global audience */}
          <div className="absolute left-[12px] mt-[16px] w-fit items-center flex shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="shrink-0 text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
         {/* Grow your business */}
          <div className="absolute left-[135px] top-[100px] flex items-center max-w-fit shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="shrink-0 text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
          {/* Competitive fees */}
          <div className="absolute top-[260px] right-[95px] flex max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Competitive fees
            </span>
          </div>
      </div>
      </div>
      <div className=" w-full ">
        <Image
          src={image}
          width={612}
          height={612}
          alt=""
          className={twMerge(" size-[612px] object-cover", imgClassName)}
        />
      </div>
    </div>
  );
};

export default AuthCard;
