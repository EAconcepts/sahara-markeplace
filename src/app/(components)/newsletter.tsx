import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import africanFace from "@/assets/images/african-face.png";
import maskedImage from "@/assets/images/masked-image.png"
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="flex bg-[#F9E79F99] lg:px-[48px] max-lg:rounded-[8px] relative">
      <div className="flex flex-col gap-y-[32px] py-[40px]">
        <div className="flex flex-col max-lg:w-[65%] gap-y-[4px] max-lg:pl-[12px]">
          <h4 className="font-playfair text-[20px] leading-[29px] lg:text-[28px] font-[600] lg:leading-[40.6px] text-blackPrimary">
            Newsletter
          </h4>
          <p className="font-openSans text-[12px] lg:text-[16px] font-[400] leading-[17.4px] lg:leading-[23.2px]">
            Be the first to receive all the recent updates, deals and coupons on
            all products
          </p>
        </div>
        {/* Subscribe */}
        <form className="flex gap-x-[12px] max-lg:pl-[12px] max-lg:w-[80%] lg:gap-x-[8px]">
          <Input
            placeholder="Email address"
            className="lg:h-[56px] h-[36px] max-lg:text-[12px] lg:w-[324px] bg-white px-[16px] py-[8px] lg:p-[16px] font-openSans text-[14px] font-[400] leading-[20.3px] text-[#8E97A6] placeholder:text-[#8E97A6]"
          />
          <Button className="lg:h-[56px] px-[16px] max-lg:text-[14px] max-lg:leading-[20.3px] py-[8px] rounded-[8px] bg-[#7D9A37] lg:px-[24px] font-[700] text-white">
            Subscribe
          </Button>
        </form>
      </div>
      <Image
        src={africanFace}
        width={833}
        height={728}
        alt="afican map with face"
        className="max-lg:hidden object-cover max-lg:w-[200px]"
      />
      <Image
        src={maskedImage}
        width={833}
        height={728}
        alt="afican map with face"
        className="lg:hidden object-cover w-[50%] rounded-[8px] absolute right-0 h-[100%]"
      />
    </div>
  );
};

export default Newsletter;
