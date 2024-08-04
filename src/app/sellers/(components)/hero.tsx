import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hero from "@/assets/images/hero-sellers.png"

const Hero = () => {
  return (
    <div className="flex flex-col gap-y-[16px] px-[96px] font-openSans">
      <h1 className="text-center font-playfair text-[52px] font-[700] leading-[75.4px] text-blackPrimary">
        Unleash Your Financial Growth Potential with Sahara Eagle Marketplace
      </h1>
      <div className="mt-[56px] flex gap-x-[36px] justify-between py-[12px]">
        <Image
          src={hero}
          width={400}
          height={400}
          alt=""
          className="size-[400] rounded-[12px]"
        />
        <div className="flex flex-col gap-y-[32px] self-center">
          <div className="flex flex-col gap-y-[16px]">
            <h4 className="text-[28px] font-[700] leading-[40.6px] text-blackPrimary">
              Elevate Your Product Presence with Sahara Eagle
            </h4>
            <p className="text-[20px] font-[400] leading-[29px] text-blackPrimary">
              Join the fastest-growing platform connecting you with a global
              audience of passionate customers.
            </p>
          </div>
          <Button className="px-[40px] rounded-[8px] bg-greenPrimary w-fit py-[12px] text-[16px] font-[700] leading-[23.2px] text-white">
            Start Selling
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
