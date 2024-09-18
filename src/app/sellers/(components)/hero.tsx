import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hero from "@/assets/images/hero-sellers.png";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";

const Hero = () => {
  const { token } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-[16px] px-[24px] font-openSans lg:px-[96px]">
      <h1 className="text-center font-playfair text-[32px] font-[700] leading-[46.4px] text-blackPrimary lg:text-[52px] lg:leading-[75.4px]">
        Unleash Your Financial Growth Potential with Sahara Eagle Marketplace
      </h1>
      <div className="mt-[32px] flex justify-between gap-[32px] py-[12px] max-lg:flex-col lg:mt-[56px] lg:gap-[36px]">
        <Image
          src={hero}
          width={400}
          height={400}
          alt=""
          className="size-[382px] rounded-[8px] object-cover lg:size-[400] lg:rounded-[12px]"
        />
        <div className="flex flex-col gap-[32px] self-center">
          <div className="flex flex-col gap-y-[16px]">
            <h4 className="text-[20px] font-[700] leading-[29px] text-blackPrimary lg:text-[28px] lg:leading-[40.6px]">
              Elevate Your Product Presence with Sahara Eagle
            </h4>
            <p className="text-[14px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[20px] lg:leading-[29px]">
              Join the fastest-growing platform connecting you with a global
              audience of passionate customers.
            </p>
          </div>
          <Button
            onClick={() => {
              token
                ? router.push("/sellers/dashboard")
                : router?.push("/sellers/auth/signin");
            }}
            className="w-fit rounded-[8px] bg-greenPrimary px-[24px] py-[12px] text-[14px] font-[700] leading-[20.3px] text-white lg:px-[40px] lg:text-[16px] lg:leading-[23.2px]"
          >
            Start Selling
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
