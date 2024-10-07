"use client";

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
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";

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
  const router = useRouter();
  const { setVendorRedirect, vendorsub, setVendorSub, userType } = useAuth();
  const handleSubscribe = (index: number) => {
    if (index == 0) {
      setVendorSub((prev: any) => ({
        ...prev,
        plan: "0.85",
      }));
    } else if (index == 1) {
      setVendorSub((prev: any) => ({
        ...prev,
        plan: "29.99",
      }));
    }
    if (userType == "seller") {
      router.push("sellers/payment");
    } else {
      setVendorRedirect(true);
      router.push("/sellers/auth/signin");
    }
  };
  return (
    <div className="fixed inset-0 z-10 w-full overflow-y-scroll bg-white font-openSans">
      <div className="px-[24px] lg:px-[96px]">
        {/* Close button */}
        <button
          onClick={() => setShowPricing(false)}
          className="absolute right-[24px] lg:right-[96px] lg:mt-[24px]"
        >
          <CancelCircleIcon className="size-[20px] text-black accent-white lg:size-[48px]" />
        </button>
        <div className="mt-[24px] flex flex-col items-center gap-y-[24px] lg:mt-[72px]">
          {/* heading */}
          <div className="flex flex-col gap-y-[16px]">
            <div className="flex flex-col gap-y-[8px] max-lg:px-[43.5px]">
              <p className="text-[12px] font-[400] leading-[17.4px] text-greenPrimary lg:text-[16px] lg:leading-[23.2px]">
                Pricing:
              </p>
              <h3 className="text-[24px] font-[600] leading-[24px] text-blackPrimary lg:text-[36px] lg:leading-[43.2px]">
                Ready to sell with Sahara Eagle?
              </h3>
            </div>
            <p className="font-openSans text-[14px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[16px] lg:leading-[23.2px]">
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
              <Switch
                // checked={true}
                onCheckedChange={(e) => {
                  if (e) {
                    setVendorSub((prev: any) => ({
                      ...prev,
                      duration: "Yearly",
                    }));
                  } else {
                    setVendorSub((prev: any) => ({
                      ...prev,
                      duration: "Monthly",
                    }));
                  }
                }}
                className="h-[20px] w-[49px]"
              />
              <span className="text-[14px] font-[600] leading-[20.3px] text-black">
                Annual Billing
              </span>
            </div>
            {/* plans */}
            <div className="flex gap-y-[12px] max-lg:flex-col lg:gap-x-[40px]">
              {plans?.map((plan, index) => (
                <div
                  key={index}
                  className="flex h-[244px] w-full flex-col items-center rounded-[8px] border-[1px] border-border px-[12px] py-[16px] lg:h-[448px] lg:w-[294px] lg:py-[32px]"
                >
                  <div className="flex flex-col items-center gap-y-[24px] lg:gap-y-[48px]">
                    <div className="flex flex-col items-center gap-y-[12px] lg:gap-y-[24px]">
                      <div className="">
                        <h4 className="text-center text-[14px] font-[600] leading-[20.3px] text-blackPrimary lg:text-[20px] lg:leading-[29px]">
                          {plan.title}
                        </h4>
                        <p className="text-center text-[10px] font-[400] leading-[14.5px] text-blackPrimary lg:text-[12px] lg:leading-[17.4px]">
                          {plan.desc}
                        </p>
                      </div>
                      {/* Price */}
                      <div className="flex w-full items-center justify-center border-b-[1px] border-border">
                        <h1 className="text-[32px] font-[700] leading-[46.4px] text-greenPrimary lg:text-[48px] lg:leading-[69.6px]">
                          ${plan.price}
                        </h1>
                        <sub className="text-[12px] font-[400] text-blackPrimary lg:text-[18px]">
                          /{plan.duration}
                        </sub>
                      </div>
                      {/* features */}
                      <div className="flex flex-col gap-y-[12px]">
                        <p className="text-center text-[12px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[14px]">
                          {plan.features}
                        </p>
                        <p className="text-center text-[12px] font-[400] leading-[20.3px] text-blackPrimary lg:text-[14px]">
                          Cancel Anytime
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleSubscribe(index)}
                      className="flex w-fit items-center gap-x-[10px] rounded-[8px] bg-greenPrimary px-[24px] py-[16px] text-white"
                    >
                      <span>Get Started</span>
                      <IoArrowForwardSharp className="text-[18px] text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Features */}
          <div className="flex gap-[24px] max-lg:flex-col lg:flex-wrap lg:justify-center">
            {features?.map((feat, index) => (
              <div key={index} className="flex items-center gap-x-[12px]">
                <CheckmarkCircle03Icon className="text-[20px] text-greenPrimary lg:text-[32px]" />
                <span className="text-[14px] font-[600] leading-[19.2px] tracking-[-2%] text-blackPrimary lg:text-[16px]">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="mt-[24px] flex w-full justify-between border-t-[1px] border-border py-[25px] lg:mt-[16px]">
          <div className="flex w-full gap-x-[17px] py-[4.5px] max-lg:flex-col max-lg:items-start">
            <div className="flex w-full items-center justify-start lg:justify-between">
              {/* Col - 1 */}
              <div className="flex gap-x-[17px] max-lg:flex-col lg:divide-x-[1px] lg:divide-border">
                {/* Powered by */}
                <div className="flex shrink-0 items-center">
                  <span className="max-lg:text-[12px]">Powered by</span>
                  <Image
                    src={stripe}
                    width={58}
                    height={24}
                    alt=""
                    className="max-lg:h-[16px] max-lg:w-[38px]"
                  />{" "}
                </div>
                {/* Links */}
                <div className="flex gap-x-[12px] max-lg:mt-[12px] max-lg:shrink-0 lg:gap-x-[17px] lg:px-[17px]">
                  <span className="text-[12px] font-[600] leading-[17.4px] text-[#787C83] lg:text-[16px] lg:leading-[23.2px]">
                    Home
                  </span>
                  <span className="text-[12px] font-[600] leading-[17.4px] text-[#787C83] lg:text-[16px] lg:leading-[23.2px]">
                    Legal
                  </span>
                  <span className="text-[12px] font-[600] leading-[17.4px] text-[#787C83] max-lg:shrink-0 lg:text-[16px] lg:leading-[23.2px]">
                    Condition of Use
                  </span>
                </div>
              </div>
              {/* Mastercard & Visa */}
              <div className="flex gap-x-[4px] self-start py-[4.5px] max-lg:h-fit lg:items-center">
                <Image
                  width={120.81}
                  height={25}
                  alt=""
                  className="max-lg:h-[19px]"
                  src={mastercard}
                />
                <Image
                  width={50.35}
                  height={19}
                  alt=""
                  className="max-lg:h-[16px]"
                  src={visa}
                />
              </div>
            </div>
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
