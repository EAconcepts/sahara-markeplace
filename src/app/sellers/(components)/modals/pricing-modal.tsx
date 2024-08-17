'use client'

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CancelCircleIcon, CheckmarkCircle03Icon } from "hugeicons-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import visa from "@/assets/images/visa.svg";
import stripe from "@/assets/images/stripe.svg";
import mastercard from "@/assets/images/mastercard.svg";
import { Welcome } from "@/app/(components)/Welcome";

const PricingModal = ({
  setShowPricing,
}: {
  setShowPricing: Dispatch<SetStateAction<boolean>>;
}) => {
  const plans = [
    {
      title: "Individual Plan",
      desc: "Connecting you with a global audience of passionate customers.",
      price: "0.85",
      duration: "per sale",
      features: "Commission fee of up to 15% of each item sold.",
    },
    {
      title: "Professional Plan",
      desc: "Connecting you with a global audience of passionate customers.",
      price: "29.99",
      duration: "month",
      features: "Commission fee of up to 8% of each item sold.",
    },
  ];
  const features = [
    "Access to participate in the Global and Local Selling program for wider reach.",
    "Access to various tools to enhance your brand presence.",
    "Ability to set your own shipping rates based on your shipping policy.",
    "Utilize business reports to track sales, inventory, and orders.",
    "Dedicated seller support.",
  ];
  return (
    <div className="fixed inset-0 z-10 w-full overflow-y-scroll bg-white font-openSans">
      <div className="px-[96px]">
        <button className="absolute right-[96px] mt-[24px]">
          <CancelCircleIcon
            onClick={() => setShowPricing(false)}
            className="size-[48px] text-black accent-white"
          />
        </button>
        <div className="mt-[72px] flex flex-col items-center gap-y-[24px]">
          {/* heading */}
          <div className="flex flex-col gap-y-[16px]">
            <div className="flex flex-col gap-y-[8px]">
              <p className="text-[16px] font-[400] leading-[23.2px] text-greenPrimary">
                Pricing:
              </p>
              <h3 className="text-[36px] font-[600] leading-[43.2px] text-blackPrimary">
                Ready to sell with Sahara Eagle?
              </h3>
            </div>
            <p className="font-openSans text-[16px] font-[400] leading-[23.2px] text-blackPrimary">
              Take your Idea and creativity to the next level. Choose a selling
              plan that aligns with your growth potential and goals
            </p>
          </div>
          {/* Pricing */}
          <div className="flex flex-col items-center gap-y-[40px]">
            <div className="flex items-center gap-x-[20px] px-[18px] py-[12px]">
              <span className="text-[12px] font-[400] leading-[17.4px] text-[#8E97A6]">
                Monthly Billing
              </span>
              <Switch className="h-[20px] w-[49px]" />
              <span className="text-[14px] font-[600] leading-[20.3px] text-black">
                Annual Billing
              </span>
            </div>
            {/* plans */}
            <div className="flex gap-x-[40px]">
              {plans?.map((plan, index) => (
                <div
                  key={index}
                  className="flex h-[448px] w-[294px] flex-col items-center rounded-[8px] border-[1px] border-border px-[12px] py-[32px]"
                >
                  <div className="flex flex-col items-center gap-y-[48px]">
                    <div className="flex flex-col items-center gap-y-[24px]">
                      <div className="">
                        <h4 className="text-center text-[20px] font-[600] leading-[29px] text-blackPrimary">
                          {plan.title}
                        </h4>
                        <p className="text-center text-[12px] font-[400] leading-[17.4px] text-blackPrimary">
                          {plan.desc}
                        </p>
                      </div>
                      {/* Price */}
                      <div className="flex w-full items-center justify-center border-b-[1px] border-border">
                        <h1 className="text-[48px] font-[700] leading-[69.6px] text-greenPrimary">
                          ${plan.price}
                        </h1>
                        <sub className="text-[18px] font-[400] text-blackPrimary">
                          /{plan.duration}
                        </sub>
                      </div>
                      {/* features */}
                      <div className="flex flex-col gap-y-[12px]">
                        <p className="text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                          {plan.features}
                        </p>
                        <p className="text-center text-[14px] font-[400] leading-[20.3px] text-blackPrimary">
                          Cancel Anytime
                        </p>
                      </div>
                    </div>
                    <Button className="flex w-fit items-center gap-x-[10px] rounded-[8px] bg-greenPrimary px-[24px] py-[16px] text-white">
                      <span>Get Started</span>
                      <IoArrowForwardSharp className="text-[18px] text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-[24px]">
            {features?.map((feat, index) => (
              <div key={index} className="flex items-center gap-x-[12px]">
                <CheckmarkCircle03Icon className="text-[32px] text-greenPrimary" />
                <span className="text-[16px] font-[600] leading-[19.2px] tracking-[-2%] text-blackPrimary">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="mt-[16px] flex w-full justify-between border-t-[1px] border-border py-[25px]">
          <div className="flex gap-x-[17px] border-r-[1px] border-border py-[4.5px]">
            <div className="flex shrink-0">
              <span>Powered by</span>
              <Image
                src={stripe}
                width={58}
                height={24}
                alt=""
                className=""
              />{" "}
            </div>
            <span className="text-[16px] font-[600] leading-[23.2px] text-[#787C83]">
              Home
            </span>
            <span className="text-[16px] font-[600] leading-[23.2px] text-[#787C83]">
              Legal
            </span>
            <span className="text-[16px] font-[600] leading-[23.2px] text-[#787C83]">
              Condition of Use
            </span>
          </div>
          <div className="flex items-center gap-x-[4px] py-[4.5px]">
            <Image
              width={120.81}
              height={25}
              alt=""
              className=""
              src={mastercard}
            />
            <Image width={50.35} height={19} alt="" className="" src={visa} />
          </div>
        </div>
      </div>
      <div className="mt-[16px]">
        <Welcome />
      </div>
    </div>
  );
};

export default PricingModal;
