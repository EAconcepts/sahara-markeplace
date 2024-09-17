import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hero from "@/assets/images/hero-sellers.png"

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-[16px] px-[24px] lg:px-[96px] font-openSans">
      <h1 className="text-center font-playfair text-[32px] leading-[46.4px] lg:text-[52px] font-[700] lg:leading-[75.4px] text-blackPrimary">
        Unleash Your Financial Growth Potential with Sahara Eagle Marketplace
      </h1>
      <div className="mt-[32px] lg:mt-[56px] flex max-lg:flex-col gap-[32px]  lg:gap-[36px] justify-between py-[12px]">
        <Image
          src={hero}
          width={400}
          height={400}
          alt=""
          className="size-[382px] object-cover lg:size-[400] rounded-[8px] lg:rounded-[12px]"
        />
        <div className="flex flex-col gap-[32px] self-center">
          <div className="flex flex-col gap-y-[16px]">
            <h4 className="text-[20px] leading-[29px] lg:text-[28px] font-[700] lg:leading-[40.6px] text-blackPrimary">
              Elevate Your Product Presence with Sahara Eagle
            </h4>
            <p className="text-[14px] lg:text-[20px] font-[400] leading-[20.3px] lg:leading-[29px] text-blackPrimary">
              Join the fastest-growing platform connecting you with a global
              audience of passionate customers.
            </p>
          </div>
          <Button className="px-[24px] lg:px-[40px] rounded-[8px] bg-greenPrimary w-fit py-[12px] text-[14px] leading-[20.3px] lg:text-[16px] font-[700] lg:leading-[23.2px] text-white">
            Start Selling
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
