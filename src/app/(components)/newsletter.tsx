import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import africanFace from "@/assets/images/african-face.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="flex bg-[#F9E79F99] px-[48px]">
      <div className="flex flex-col gap-y-[32px] py-[40px]">
        <div className="flex flex-col gap-y-[4px]">
          <h4 className="font-playfair text-[28px] font-[600] leading-[40.6px] text-blackPrimary">
            Newsletter
          </h4>
          <p className="font-openSans text-[16px] font-[400] leading-[23.2px]">
            Be the first to receive all the recent updates, deals and coupons on
            all products
          </p>
        </div>
        {/* Subscribe */}
        <form className="flex gap-x-[8px]">
          <Input
            placeholder="Email address"
            className="h-[56px] w-[324px] bg-white p-[16px] font-openSans text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] placeholder:text-[#8E97A6]"
          />
          <Button className="h-[56px] rounded-[8px] bg-[#7D9A37] px-[24px] font-[700] text-white">
            Subscribe
          </Button>
        </form>
      </div>
      <Image
        src={africanFace}
        width={833}
        height={728}
        alt="afican map with face"
        className="object-cover"
      />
    </div>
  );
};

export default Newsletter;
