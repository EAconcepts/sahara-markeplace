"use client";

import { Welcome } from "@/app/(components)/Welcome";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/utils/useAuth";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Payment = () => {
  const { setVendorRedirect } = useAuth();
  useEffect(() => {
    setVendorRedirect(false);
  }, []);
  const router = useRouter();
  return (
    <div>
      <div className="flex w-full font-openSans max-lg:flex-col lg:gap-[24px]">
        {/* Col-1 */}
        <div className="w-full bg-[#F6F6F8] pt-[16px] max-lg:px-[24px] max-lg:pb-[24px] lg:pl-[96px]">
          <div className="pt-[32px] lg:pl-[16px] lg:pr-[64px]">
            <div className="flex flex-col gap-[24px]">
              {/* Back */}
              <button
                onClick={() => router.back()}
                className="flex items-center gap-[16px]"
              >
                <ChevronLeftIcon className="size-[20px]" />
                <span className="text-[16px] font-[400] leading-[19.2px] text-blackPrimary">
                  Back
                </span>
              </button>
              <div className="flex flex-col gap-[8px]">
                <h6 className="font-openSans text-[16px] leading-[19.2px] text-black lg:text-[24px] lg:leading-[28.8px]">
                  Subscribe to the Professional Selling Plan
                </h6>
                <div className="flex items-center lg:items-end lg:gap-[4px]">
                  <h3 className="text-[32px] font-[700] leading-[46.4px] text-greenPrimary lg:text-[48px] lg:leading-[69.6px]">
                    $29.99
                  </h3>
                  <sub className="text-[16px]">/month</sub>
                </div>
              </div>
            </div>
            {/* Checkout */}
            <div className="mt-[24px] flex w-full flex-col gap-[40px] lg:mt-[40px]">
              <div className="flex w-full flex-col gap-[16px]">
                <span className="text-[14px] font-[600] leading-[23.2px] text-blackPrimary lg:text-[16px]">
                  Checkout
                </span>
                <div className="flex w-full justify-between border-b border-[#8E97A6] pb-[16px] lg:pb-[40px]">
                  <div className="flex gap-[8px] lg:gap-[16px]">
                    <div className="size-[24px] shrink-0 rounded-full bg-[#A27A4D] lg:size-[48px]"></div>
                    <div className="flex flex-col gap-[2px] lg:gap-[4px]">
                      <h6 className="text-[14px] font-[600] leading-[29px] text-blackPrimary lg:text-[20px]">
                        Professional Selling Plan
                      </h6>
                      <span className="text-[12px] font-[400] leading-[20.3px] text-[#787C83] lg:text-[14px]">
                        Annual Billing
                      </span>
                    </div>
                  </div>
                  {/* Price */}
                  <h3 className="text-[16px] font-[700] leading-[34.8px] text-blackPrimary lg:text-[24px]">
                    $359.88
                  </h3>
                </div>
              </div>
            </div>
            {/* Sub total */}
            <div className="mt-[24px] flex flex-col gap-[16px] border-b border-b-[#8E97A6] pb-[16px] lg:mt-[40px] lg:gap-[24px] lg:pb-[40px]">
              <div className="flex w-full justify-between">
                <h4 className="text-[16px] font-[600] leading-[29px] text-blackPrimary lg:text-[20px]">
                  Subtotal
                </h4>
                <h4 className="text-[16px] font-[700] leading-[34.8px] text-blackPrimary lg:text-[24px]">
                  $359.88
                </h4>
              </div>
              <Input
                placeholder="Add Promotional Code"
                className="h-[48px] w-full rounded-[6px] bg-transparent p-[16px] max-lg:text-[12px] max-lg:placeholder:text-[14px] lg:h-[56px]"
              />
            </div>
            {/* Total */}
            <div className="flex w-full justify-between max-lg:mt-[24px]">
              <h4 className="text-[16px] font-[600] leading-[29px] text-blackPrimary lg:text-[20px]">
                Total
              </h4>
              <h4 className="text-[16px] font-[700] leading-[34.8px] text-blackPrimary lg:text-[24px]">
                $359.88
              </h4>
            </div>
            {/* Footer */}
            <div className="mt-[24px] flex gap-[17px] border-t border-t-[#8E97A6] px-[8px] pt-[8px] max-lg:hidden max-lg:justify-between lg:mt-[66px]">
              <div className="flex gap-[8px] pr-[8px]">
                <span className="text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
                  Powered by
                </span>
                <h4 className="text-[16px] font-[800] leading-[23.2px] text-[#635BFF]">
                  stripe
                </h4>
              </div>
              {/* Links */}
              <div className="flex gap-[24px] text-[16px] font-[400] leading-[23.2px] text-[#787C83]">
                <Link href={"/"} className="">
                  Home
                </Link>
                <Link href={"#"} className="">
                  Legal
                </Link>
                <Link href={"#"} className="">
                  Condition of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Col-2 */}
        <div className="flex w-full flex-col gap-[40px] pt-[12px] max-lg:px-[24px] lg:pr-[96px] lg:pt-[32px]">
          {/* Email */}
          <div className="flex flex-col gap-[4px]">
            <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
              Email
            </label>
            <Input
              placeholder="username@gmail.com"
              className="h-[56px] w-full rounded-[6px] bg-[#E4E7EC] p-[16px] text-[16px] font-[600] leading-[23.2px] text-blackPrimary"
            />
          </div>
          {/* Card Info */}
          <div className="flex flex-col gap-[24px]">
            <h5 className="text-[14px] font-[600] leading-[21.6px] tracking-[-2%] text-blackPrimary lg:text-[18px]">
              Enter Card Information
            </h5>
            {/* Name & Number */}
            <div className="flex flex-col gap-[24px]">
              {/* Name */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                  Cardholder&apos;s Name
                </label>
                <Input className="h-[56px] w-full rounded-[6px] border-border" />
              </div>
              {/* Number */}
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-[600] leading-[20.3px] text-[#787C83]">
                  Card Number
                </label>
                <Input className="h-[56px] w-full rounded-[6px] border-border" />
              </div>
              {/* Expiry & cvv */}
            </div>
          </div>
          <Button className="h-[44px] w-full rounded-[12px] bg-greenPrimary text-[14px] font-[600] leading-[20.3px]">
            Subscribe
          </Button>
          <p className="pb-[12px] text-[12px] font-[400] leading-[17.4px] text-[#787C83]">
            By confirming your subscription, you allow Sahara Eagle to charge
            you for future payments in accordance with their terms. You can
            always cancel your subscription.
            <br />
            By placing your order, you agree to our{" "}
            <Link
              href={"#"}
              className="text-[14px] font-[600] leading-[20.3px] text-greenPrimary underline"
            >
              Terms and Conditions and Privacy Policy
            </Link>
          </p>
        </div>
        {/* Footer */}
        <div className="bg-[#F6F6F8] p-[24px] lg:hidden">
          <div className="flex items-center gap-[17px] border-t border-t-[#8E97A6] px-[8px] pt-[8px] max-lg:mt-[24px] max-lg:justify-between lg:mt-[66px]">
            <div className="flex gap-[4px] lg:gap-[8px] lg:pr-[8px]">
              <span className="shrink-0 text-[12px] font-[400] leading-[23.2px] text-[#787C83] lg:text-[16px]">
                Powered by
              </span>
              <h4 className="text-[12px] font-[800] leading-[23.2px] text-[#635BFF] lg:text-[16px]">
                stripe
              </h4>
            </div>
            {/* Links */}
            <div className="flex gap-[16px] px-[24px] text-[12px] font-[400] leading-[17.4px] text-[#787C83] lg:gap-[24px] lg:text-[16px] lg:leading-[23.2px]">
              <Link href={"/"} className="">
                Home
              </Link>
              <Link href={"#"} className="">
                Legal
              </Link>
              <Link href={"#"} className="shrink-0">
                Condition of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Welcome />
    </div>
  );
};

export default Payment;
