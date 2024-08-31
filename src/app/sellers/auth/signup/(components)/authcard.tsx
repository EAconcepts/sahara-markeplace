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
    <div className="max-lg:hidden relative flex max-lg:px-[12px] max-lg:py-[32px] lg:h-[810px] lg:w-[612px] flex-col justify-between rounded-[12px] bg-[#7D9A37] lg:pr-[16px] pt-[48px]">
      {/* Heading */}
      <div className="flex flex-col gap-y-[16px] lg:px-[32px] text-center">
        <h2 className="text-center font-playfair text-[32px] lg:text-[48px] font-[600] leading-[57.6px] tracking-[-2%] text-white">
          {header}
        </h2>
        <p className="max-lg:hidden text-center font-openSans text-[16px] font-[400] leading-[19.2px] tracking-[-2%] text-white">
          Join the fastest-growing platform connecting you with a global
          audience of passionate customers.
        </p>
      </div>
      <div className=" right[16px] place-items-betwee gap-x[39px] max-lg:flex lg:absolute lg:top-[222px] lg:grid w-full lg:grid-cols-2 px-[16px] text-[12px] lg:text-[16px]">
        <div className="w-fi flex flex-col lg:gap-y-[109px] ">
          <div className="max-wfit lg:ml-[36px]  flex shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] py-[13px] lg:px-[12px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="lg:shrink-0  font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
          <div className="flex lg:max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] py-[13px] lg:px-[12px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
        </div>
        <div className="lg:ml-[44px] lg:mt-[44px] flex w-fit shrink-0 flex-col gap-y-[109px] ">
          <div className="flex max-w-fit shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] py-[13px] lg:px-[12px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="shrink-0  font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
          <div className="lg:ml-[16px] flex max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[10px] py-[13px] lg:px-[12px] lg:py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className=" font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[42px] max-lg:hidden flex justify-center">
        <Image
          src={image}
          width={532}
          height={532}
          alt=""
          className={twMerge("z10 size-[532px]", imgClassName)}
        />
      </div>
    </div>
  );
};

export default AuthCard;
