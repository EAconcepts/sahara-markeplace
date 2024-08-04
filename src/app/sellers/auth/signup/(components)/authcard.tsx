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
    <div className="relative flex h-[810px] w-[612px] flex-col justify-between rounded-[12px] bg-[#7D9A37] pr-[16px] pt-[48px]">
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
      <div className=" right[16px] place-items-betwee gap-x[39px] absolute top-[222px] grid w-full grid-cols-2 px-[16px]">
        <div className="w-fi flex flex-col gap-y-[109px] ">
          <div className="max-wfit ml-[36px] flex shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="shrink-0 text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
          <div className="flex max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
        </div>
        <div className="ml-[44px] mt-[44px] flex w-fit shrink-0 flex-col gap-y-[109px] ">
          <div className="flex max-w-fit shrink-0 gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="shrink-0 text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Reach a global audience
            </span>
          </div>
          <div className="ml-[16px] flex max-w-fit gap-x-[12px] rounded-[8px] border-[1px] border-[#E4E7EC] px-[12px] py-[16px]">
            <CheckmarkCircle03Icon className="size-[24px] text-white" />
            <span className="text-[16px] font-[600] leading-[19.2px] tracking-[2%] text-white">
              Grow your business
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[42px] flex justify-center">
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
